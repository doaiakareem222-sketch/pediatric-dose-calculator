// ======================================================
// DoseCare AI v7
// Main Script
// Pediatric Dose Engine
// ======================================================

"use strict";

console.log("DoseCare AI v7 Loaded");

// ======================================================
// DOM Elements
// ======================================================

const welcomeScreen =
    document.getElementById("welcomeScreen");

const diseaseSelect =
    document.getElementById("disease");

const diseaseGuide =
    document.getElementById("diseaseGuide");

const searchDrug =
    document.getElementById("searchDrug");

const drugSelect =
    document.getElementById("drug");

const strengthSelect =
    document.getElementById("strength");

const ageInput =
    document.getElementById("age");

const ageUnit =
    document.getElementById("ageUnit");

const weightInput =
    document.getElementById("weight");

const calculateBtn =
    document.getElementById("calculateBtn");

// ======================================================
// Result Elements
// ======================================================

const resultCard =
    document.getElementById("resultCard");

const drugName =
    document.getElementById("drugName");

const patientAge =
    document.getElementById("patientAge");

const doseMg =
    document.getElementById("doseMg");

const doseMl =
    document.getElementById("doseMl");

const frequency =
    document.getElementById("frequency");

const note =
    document.getElementById("note");

// ======================================================
// Drug Information
// ======================================================

const drugInfoCard =
    document.getElementById("drugInfoCard");

// ======================================================
// Dashboard
// ======================================================

const historyBox =
    document.getElementById("history");

const calcCount =
    document.getElementById("calcCount");

const lastDrug =
    document.getElementById("lastDrug");

// ======================================================
// Application Data
// ======================================================

let allDrugs =
    Object.values(window.drugs || {});

let currentDrugList =
    allDrugs;

let calculationHistory = [];

let calculations = 0;

// ======================================================
// Refresh Drug Registry
// ======================================================

function refreshDrugRegistry() {

    allDrugs =
        Object.values(window.drugs || {});

    currentDrugList =
        allDrugs;

    console.log(
        "DoseCare Drug Count:",
        allDrugs.length
    );
}

// ======================================================
// Welcome Screen
// ======================================================

window.addEventListener("load", () => {

    setTimeout(() => {

        if (welcomeScreen) {

            welcomeScreen.classList.add("hide");

        }

    }, 2500);

});

// ======================================================
// Load Drugs
// ======================================================

function loadDrugs(list = allDrugs) {

    if (!drugSelect) return;

    drugSelect.innerHTML = "";

    const firstOption =
        document.createElement("option");

    firstOption.value = "";

    firstOption.textContent =
        "Select Drug";

    drugSelect.appendChild(firstOption);

    list.forEach(drug => {

        if (!drug || !drug.id) return;

        const option =
            document.createElement("option");

        option.value =
            drug.id;

        option.textContent =
            drug.name || drug.genericName || drug.id;

        drugSelect.appendChild(option);

    });

}

// ======================================================
// Search Drugs
// ======================================================

if (searchDrug) {

    searchDrug.addEventListener(
        "input",
        () => {

            const keyword =
                searchDrug.value
                    .trim()
                    .toLowerCase();

            const filtered =
                currentDrugList.filter(drug => {

                    const name =
                        String(
                            drug.name || ""
                        ).toLowerCase();

                    const generic =
                        String(
                            drug.genericName || ""
                        ).toLowerCase();

                    const brands =
                        Array.isArray(
                            drug.brandNames
                        )
                            ? drug.brandNames
                                .map(b =>
                                    String(b)
                                        .toLowerCase()
                                )
                            : [];

                    return (
                        name.includes(keyword) ||
                        generic.includes(keyword) ||
                        brands.some(
                            brand =>
                                brand.includes(keyword)
                        )
                    );

                });

            loadDrugs(
                keyword
                    ? filtered
                    : currentDrugList
            );

        }
    );

}
// ======================================================
// Filter Drugs By Disease
// ======================================================

if (diseaseSelect) {

    diseaseSelect.addEventListener(
        "change",
        () => {

            const disease =
                diseaseSelect.value;

            if (strengthSelect) {

                strengthSelect.innerHTML =
                    `<option value="">Select Strength</option>`;

            }

            if (searchDrug) {

                searchDrug.value = "";

            }

            if (!disease) {

                currentDrugList =
                    allDrugs;

                loadDrugs(
                    currentDrugList
                );

                if (diseaseGuide) {

                    diseaseGuide.innerHTML =
                        "";

                }

                return;
            }

            currentDrugList =
                allDrugs.filter(
                    drug => {

                        return (
                            Array.isArray(
                                drug.diseases
                            ) &&
                            drug.diseases.includes(
                                disease
                            )
                        );

                    }
                );

            loadDrugs(
                currentDrugList
            );

            if (diseaseGuide) {

                diseaseGuide.innerHTML = `
                    <strong>
                        ${currentDrugList.length}
                    </strong>
                    medication(s) available
                    for this condition.
                `;

            }

        }
    );

}

// ======================================================
// Load Drug Strengths
// ======================================================

if (drugSelect) {

    drugSelect.addEventListener(
        "change",
        () => {

            if (strengthSelect) {

                strengthSelect.innerHTML =
                    `<option value="">
                        Select Strength
                    </option>`;

            }

            const selectedDrug =
                window.drugs?.[
                    drugSelect.value
                ];

            if (!selectedDrug) {

                if (drugInfoCard) {

                    drugInfoCard.style.display =
                        "none";

                }

                return;

            }

            // ------------------------------------------
            // Show Drug Information
            // ------------------------------------------

            showDrugInfo(
                selectedDrug
            );

            // ------------------------------------------
            // Load Strengths
            // ------------------------------------------

            if (
                Array.isArray(
                    selectedDrug.strengths
                )
            ) {

                selectedDrug.strengths.forEach(
                    (strength, index) => {

                        if (!strength) return;

                        const option =
                            document.createElement(
                                "option"
                            );

                        /*
                         * We use the index as the value.
                         * This prevents problems when two
                         * preparations have the same
                         * concentration number.
                         */

                        option.value =
                            String(index);

                        option.textContent =
                            strength.name ||
                            `${strength.concentration} mg`;

                        strengthSelect.appendChild(
                            option
                        );

                    }
                );

            }

        }
    );

}
// ======================================================
// DoseCare AI v7
// Pediatric Dose Calculation Engine
// ======================================================

if (calculateBtn) {

    calculateBtn.addEventListener("click", () => {

        // ==================================================
        // Get Selected Drug
        // ==================================================

        const drug =
            window.drugs?.[
                drugSelect?.value
            ];

        // ==================================================
        // Get Patient Data
        // ==================================================

        const weight =
            parseFloat(
                weightInput?.value
            );

        const age =
            parseFloat(
                ageInput?.value
            );

        // ==================================================
        // Validation
        // ==================================================

        if (!drug) {

            alert(
                "Please select a drug."
            );

            return;
        }

        if (
            isNaN(weight) ||
            weight <= 0
        ) {

            alert(
                "Please enter patient's weight."
            );

            return;
        }

        if (
            isNaN(age) ||
            age < 0
        ) {

            alert(
                "Please select a valid age."
            );

            return;
        }

        // ==================================================
        // Pediatric Age Limit
        // ==================================================

        if (age > 12) {

            alert(
                "DoseCare AI is intended for pediatric patients 0–12 years."
            );

            return;
        }

        // ==================================================
        // Get Selected Strength
        // ==================================================

        const strengthIndex =
            parseInt(
                strengthSelect?.value
            );

        let selectedStrength = null;

        if (
            !isNaN(strengthIndex) &&
            Array.isArray(
                drug.strengths
            )
        ) {

            selectedStrength =
                drug.strengths[
                    strengthIndex
                ];

        }

        // ==================================================
        // Calculate Dose
        // ==================================================

        const result =
            calculatePediatricDose(
                drug,
                weight,
                diseaseSelect?.value,
                selectedStrength
            );

        // ==================================================
        // Calculation Error
        // ==================================================

        if (!result) {

            alert(
                "Dose information is not available for this drug and condition."
            );

            return;
        }

        // ==================================================
        // Show Result Card
        // ==================================================

        if (resultCard) {

            resultCard.style.display =
                "block";

        }

        // ==================================================
        // Drug Name
        // ==================================================

        if (drugName) {

            drugName.textContent =
                drug.name || "-";

        }

        // ==================================================
        // Patient Age
        // ==================================================

        if (patientAge) {

            if (
                ageUnit?.value ===
                "months"
            ) {

                if (age < 0.08) {

                    patientAge.textContent =
                        "👶 Neonate (0–28 Days)";

                } else {

                    const months =
                        Math.round(
                            age * 12
                        );

                    patientAge.textContent =
                        `👶 ${months} Month(s)`;

                }

            } else {

                patientAge.textContent =
                    `🧒 ${age} Year(s)`;

            }

        }

        // ==================================================
        // Dose in mg
        // ==================================================

        if (doseMg) {

            doseMg.textContent =
                `${formatDose(result.doseMg)} mg`;

        }

        // ==================================================
        // Liquid Volume
        // ==================================================

        if (doseMl) {

            if (
                result.doseMl !== null
            ) {

                doseMl.textContent =
                    `${result.doseMl.toFixed(2)} mL (${result.doseMl.toFixed(2)} cc)`;

            } else {

                doseMl.textContent =
                    "-";

            }

        }

        // ==================================================
        // Frequency
        // ==================================================

        if (frequency) {

            frequency.textContent =
                result.frequency ||
                drug.frequency ||
                "-";

        }

        // ==================================================
        // Notes
        // ==================================================

        if (note) {

            note.textContent =
                result.note ||
                drug.notes ||
                "-";

        }

        // ==================================================
        // Drug Information
        // ==================================================

        showDrugInfo(drug);

    });

}


// ======================================================
// Pediatric Dose Engine
// ======================================================

function calculatePediatricDose(
    drug,
    weight,
    disease,
    selectedStrength
) {

    if (!drug) {

        return null;

    }

    // ==================================================
    // 1. Standard mgPerKg
    // ==================================================

    if (
        typeof drug.mgPerKg ===
        "number"
    ) {

        let doseMg =
            weight *
            drug.mgPerKg;

        if (
            typeof drug.maxDose ===
            "number" &&
            doseMg >
            drug.maxDose
        ) {

            doseMg =
                drug.maxDose;

        }

        return buildDoseResult(
            doseMg,
            drug.frequency,
            drug.notes,
            selectedStrength
        );

    }


    // ==================================================
    // 2. Dose Object
    // ==================================================

    const doseData =
        drug.dose;

    if (!doseData) {

        return null;

    }


    // ==================================================
    // 3. Disease-Based Dose
    // ==================================================

    if (
        doseData.type ===
            "disease_based"
    ) {

        const diseaseDose =
            doseData[disease];

        if (!diseaseDose) {

            // Try standard regimen
            if (
                doseData.standard
            ) {

                return calculateFromDoseData(
                    doseData.standard,
                    weight,
                    selectedStrength,
                    drug.notes
                );

            }

            return null;

        }

        // ----------------------------------------------
        // Handle special regimen arrays
        // ----------------------------------------------

        if (
            Array.isArray(
                diseaseDose.regimens
            )
        ) {

            return {

                doseMg: null,

                doseMl: null,

                frequency:
                    "Multiple accepted regimens",

                note:
                    diseaseDose.regimens.join(
                        " • "
                    )

            };

        }

        return calculateFromDoseData(
            diseaseDose,
            weight,
            selectedStrength,
            drug.notes
        );

    }


    // ==================================================
    // 4. Standard Pediatric Dose
    // ==================================================

    if (
        doseData.type ===
            "standard_pediatric"
    ) {

        return calculateFromDoseData(
            doseData,
            weight,
            selectedStrength,
            drug.notes
        );

    }


    // ==================================================
    // 5. Weight-Based Dose
    // ==================================================

    if (
        doseData.type ===
            "weight_based"
    ) {

        return calculateFromDoseData(
            doseData,
            weight,
            selectedStrength,
            drug.notes
        );

    }


    // ==================================================
    // 6. Component-Based Dose
    // ==================================================

    if (
        doseData.type ===
            "component_based"
    ) {

        const diseaseDose =
            doseData[disease];

        if (!diseaseDose) {

            return null;

        }

        return calculateComponentDose(
            diseaseDose,
            weight,
            selectedStrength,
            drug.notes
        );

    }


    // ==================================================
    // 7. Severity-Based Dose
    // ==================================================

    if (
        doseData.type ===
            "severity_based"
    ) {

        return {

            doseMg: null,

            doseMl: null,

            frequency:
                "Dose depends on infection severity",

            note:
                "Select the appropriate severity-based regimen according to the prescribing guideline."

        };

    }


    return null;

}


// ======================================================
// Calculate From Dose Data
// ======================================================

function calculateFromDoseData(
    data,
    weight,
    selectedStrength,
    defaultNote
) {

    if (!data) {

        return null;

    }

    let doseMg = null;

    let frequency =
        data.frequency ||
        "-";

    let note =
        defaultNote ||
        "-";


    // ==================================================
    // mg/kg/day
    // ==================================================

    if (
        typeof data.mgPerKgPerDay ===
        "number"
    ) {

        doseMg =
            weight *
            data.mgPerKgPerDay;

    }


    // ==================================================
    // mg/kg/dose
    // ==================================================

    else if (
        typeof data.mgPerKgPerDose ===
        "number"
    ) {

        doseMg =
            weight *
            data.mgPerKgPerDose;

    }


    // ==================================================
    // min/max mg/kg/day
    // ==================================================

    else if (
        typeof data.minMgPerKgPerDay ===
            "number" &&
        typeof data.maxMgPerKgPerDay ===
            "number"
    ) {

        const minDose =
            weight *
            data.minMgPerKgPerDay;

        const maxDose =
            weight *
            data.maxMgPerKgPerDay;

        doseMg =
            (minDose +
                maxDose) /
            2;

        note =
            `Dose range: ${minDose.toFixed(2)}–${maxDose.toFixed(2)} mg/day. ${note}`;

    }


    // ==================================================
    // Day 1 / Days 2–5
    // ==================================================

    else if (
        typeof data.day1MgPerKg ===
            "number"
    ) {

        doseMg =
            weight *
            data.day1MgPerKg;

        note =
            `Day 1: ${doseMg.toFixed(2)} mg. ${note}`;

    }


    if (
        doseMg === null
    ) {

        return null;

    }


    // ==================================================
    // Maximum Dose
    // ==================================================

    if (
        typeof data.maxDoseMg ===
            "number" &&
        doseMg >
            data.maxDoseMg
    ) {

        doseMg =
            data.maxDoseMg;

    }

    if (
        typeof data.maxDoseMgPerDay ===
            "number" &&
        doseMg >
            data.maxDoseMgPerDay
    ) {

        doseMg =
            data.maxDoseMgPerDay;

    }

    if (
        typeof data.maxDoseMgPerDose ===
            "number" &&
        doseMg >
            data.maxDoseMgPerDose
    ) {

        doseMg =
            data.maxDoseMgPerDose;

    }


    // ==================================================
    // Convert mg → mL
    // ==================================================

    const doseMl =
        convertMgToMl(
            doseMg,
            selectedStrength
        );


    return {

        doseMg,

        doseMl,

        frequency,

        note

    };

}


// ======================================================
// Component-Based Dose
// ======================================================

function calculateComponentDose(
    data,
    weight,
    selectedStrength,
    defaultNote
) {

    if (!data) {

        return null;

    }

    if (
        typeof data.trimethoprimMgPerKgPerDay !==
            "number"
    ) {

        return null;

    }

    const trimethoprimMg =
        weight *
        data.trimethoprimMgPerKgPerDay;

    const sulfamethoxazoleMg =
        weight *
        data.sulfamethoxazoleMgPerKgPerDay;


    const doseMl =
        convertMgToMl(
            trimethoprimMg,
            selectedStrength
        );


    return {

        doseMg:
            trimethoprimMg,

        doseMl,

        frequency:
            data.frequency ||
            "-",

        note:
            `${defaultNote || ""} Dose is calculated using the Trimethoprim component.`

    };

}


// ======================================================
// Convert mg → mL
// ======================================================

function convertMgToMl(
    doseMg,
    strength
) {

    if (
        !strength ||
        !doseMg
    ) {

        return null;

    }

    const concentration =
        parseFloat(
            strength.concentration
        );

    const volume =
        parseFloat(
            strength.volume
        ) || 5;


    if (
        isNaN(concentration) ||
        concentration <= 0
    ) {

        return null;

    }


    /*
     * IMPORTANT:
     *
     * concentration represents
     * the active drug amount
     * in the specified volume.
     *
     * Example:
     * 250 mg / 5 mL
     *
     * Dose = 125 mg
     *
     * Volume =
     *
     * 125 / 250 × 5
     *
     * = 2.5 mL
     */

    return (
        doseMg /
        concentration
    ) *
    volume;

}


// ======================================================
// Format Dose
// ======================================================

function formatDose(
    value
) {

    if (
        typeof value !==
            "number" ||
        isNaN(value)
    ) {

        return "-";

    }

    if (
        Number.isInteger(value)
    ) {

        return String(value);

    }

    return value.toFixed(2);

}
