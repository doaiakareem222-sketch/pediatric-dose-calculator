// ======================================================
// DoseCare AI v8
// Main Script
// Pediatric Dose Engine
// ======================================================

"use strict";

console.log("DoseCare AI v8 Loaded");

// ======================================================
// DOM ELEMENTS
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
// RESULT ELEMENTS
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
// DRUG INFORMATION ELEMENTS
// ======================================================

const drugInfoCard =
    document.getElementById("drugInfoCard");

const genericName =
    document.getElementById("genericName");

const brandNames =
    document.getElementById("brandNames");

const category =
    document.getElementById("category");

const therapeuticClass =
    document.getElementById("therapeuticClass");

const pharmacologicalClass =
    document.getElementById("pharmacologicalClass");

const mechanism =
    document.getElementById("mechanism");

const indications =
    document.getElementById("indications");

const contraindications =
    document.getElementById("contraindications");

const warnings =
    document.getElementById("warnings");

const sideEffects =
    document.getElementById("sideEffects");

const pregnancy =
    document.getElementById("pregnancy");

const lactation =
    document.getElementById("lactation");

const doseRange =
    document.getElementById("doseRange");

const onset =
    document.getElementById("onset");

const duration =
    document.getElementById("duration");

const halfLife =
    document.getElementById("halfLife");

const proteinBinding =
    document.getElementById("proteinBinding");

const metabolism =
    document.getElementById("metabolism");

const elimination =
    document.getElementById("elimination");

const storage =
    document.getElementById("storage");

const monitoring =
    document.getElementById("monitoring");

const clinicalPearls =
    document.getElementById("clinicalPearls");

const interactions =
    document.getElementById("interactions");

const alerts =
    document.getElementById("alerts");

const blackBox =
    document.getElementById("blackBox");

// ======================================================
// CLINICAL ALERTS
// ======================================================

const clinicalAlertCard =
    document.getElementById("clinicalAlertCard");

const clinicalAlertContent =
    document.getElementById("clinicalAlertContent");

// ======================================================
// APPLICATION DATA
// ======================================================

let allDrugs = [];

let currentDrugList = [];

let calculationHistory = [];

let calculations = 0;

// ======================================================
// SAFE VALUE HELPER
// ======================================================

function safeText(value, fallback = "-") {

    if (
        value === undefined ||
        value === null ||
        value === ""
    ) {

        return fallback;

    }

    return String(value);

}

// ======================================================
// ARRAY → TEXT
// ======================================================

function arrayToText(value) {

    if (!Array.isArray(value)) {

        return safeText(value);

    }

    if (value.length === 0) {

        return "-";

    }

    return value.join(" • ");

}

// ======================================================
// REFRESH DRUG REGISTRY
// ======================================================

function refreshDrugRegistry() {

    /*
     * All database files register their drugs
     * inside window.drugs.
     *
     * This function is intentionally called
     * after all database scripts are loaded.
     */

    if (
        !window.drugs ||
        typeof window.drugs !== "object"
    ) {

        window.drugs = {};

    }

    allDrugs =
        Object.values(window.drugs)
            .filter(drug =>
                drug &&
                typeof drug === "object" &&
                drug.id
            );

    currentDrugList =
        [...allDrugs];

    console.log(
        "DoseCare Drug Count:",
        allDrugs.length
    );

}

// ======================================================
// INITIALIZE APPLICATION DATA
// ======================================================

refreshDrugRegistry();

// ======================================================
// WELCOME SCREEN
// ======================================================

window.addEventListener(
    "load",
    () => {

        /*
         * Refresh again on load so every database
         * file that was loaded before script.js
         * is included.
         */

        refreshDrugRegistry();

        loadDrugs(
            currentDrugList
        );

        setTimeout(
            () => {

                if (welcomeScreen) {

                    welcomeScreen.classList.add(
                        "hide"
                    );

                }

            },
            2500
        );

    }
);

// ======================================================
// LOAD DRUGS INTO SELECT
// ======================================================

function loadDrugs(
    list = allDrugs
) {

    if (!drugSelect) {

        return;

    }

    drugSelect.innerHTML = "";

    const firstOption =
        document.createElement(
            "option"
        );

    firstOption.value = "";

    firstOption.textContent =
        "Select Drug";

    drugSelect.appendChild(
        firstOption
    );

    list.forEach(
        drug => {

            if (
                !drug ||
                !drug.id
            ) {

                return;

            }

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                drug.id;

            option.textContent =
                drug.name ||
                drug.genericName ||
                drug.id;

            drugSelect.appendChild(
                option
            );

        }
    );

}

// ======================================================
// SEARCH DRUGS
// ======================================================

if (searchDrug) {

    searchDrug.addEventListener(
        "input",
        () => {

            const keyword =
                searchDrug.value
                    .trim()
                    .toLowerCase();

            if (!keyword) {

                loadDrugs(
                    currentDrugList
                );

                return;

            }

            const filtered =
                currentDrugList.filter(
                    drug => {

                        const name =
                            safeText(
                                drug.name,
                                ""
                            ).toLowerCase();

                        const generic =
                            safeText(
                                drug.genericName,
                                ""
                            ).toLowerCase();

                        const brands =
                            Array.isArray(
                                drug.brandNames
                            )
                                ? drug.brandNames.map(
                                    brand =>
                                        String(
                                            brand
                                        ).toLowerCase()
                                )
                                : [];

                        return (
                            name.includes(
                                keyword
                            ) ||

                            generic.includes(
                                keyword
                            ) ||

                            brands.some(
                                brand =>
                                    brand.includes(
                                        keyword
                                    )
                            )
                        );

                    }
                );

            loadDrugs(
                filtered
            );

        }
    );

}

// ======================================================
// FILTER DRUGS BY DISEASE
// ======================================================

if (diseaseSelect) {

    diseaseSelect.addEventListener(
        "change",
        () => {

            const disease =
                diseaseSelect.value;

            // ------------------------------------------
            // Reset strength
            // ------------------------------------------

            if (strengthSelect) {

                strengthSelect.innerHTML =
                    `
                    <option value="">
                        Select Strength
                    </option>
                    `;

            }

            // ------------------------------------------
            // Reset search
            // ------------------------------------------

            if (searchDrug) {

                searchDrug.value = "";

            }

            // ------------------------------------------
            // Reset selected drug
            // ------------------------------------------

            if (drugSelect) {

                drugSelect.value = "";

            }

            // ------------------------------------------
            // Hide information
            // ------------------------------------------

            hideDrugInfo();

            hideClinicalAlerts();

            // ------------------------------------------
            // No disease selected
            // ------------------------------------------

            if (!disease) {

                currentDrugList =
                    [...allDrugs];

                loadDrugs(
                    currentDrugList
                );

                if (diseaseGuide) {

                    diseaseGuide.innerHTML =
                        "";

                }

                return;

            }

            // ------------------------------------------
            // Filter
            // ------------------------------------------

            currentDrugList =
                allDrugs.filter(
                    drug => {

                        if (
                            !Array.isArray(
                                drug.diseases
                            )
                        ) {

                            return false;

                        }

                        return drug.diseases
                            .map(
                                item =>
                                    String(
                                        item
                                    ).toLowerCase()
                            )
                            .includes(
                                disease.toLowerCase()
                            );

                    }
                );

            // ------------------------------------------
            // Load filtered drugs
            // ------------------------------------------

            loadDrugs(
                currentDrugList
            );

            // ------------------------------------------
            // Disease Guide
            // ------------------------------------------

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
// LOAD DRUG STRENGTHS
// ======================================================

if (drugSelect) {

    drugSelect.addEventListener(
        "change",
        () => {

            // ------------------------------------------
            // Reset strength
            // ------------------------------------------

            if (strengthSelect) {

                strengthSelect.innerHTML =
                    `
                    <option value="">
                        Select Strength
                    </option>
                    `;

            }

            // ------------------------------------------
            // Hide previous result
            // ------------------------------------------

            hideResult();

            // ------------------------------------------
            // Hide previous alerts
            // ------------------------------------------

            hideClinicalAlerts();

            // ------------------------------------------
            // Get selected drug
            // ------------------------------------------

            const selectedDrug =
                window.drugs?.[
                    drugSelect.value
                ];

            if (!selectedDrug) {

                hideDrugInfo();

                return;

            }

            // ------------------------------------------
            // Show information
            // ------------------------------------------

            showDrugInfo(
                selectedDrug
            );

            // ------------------------------------------
            // Load strengths
            // ------------------------------------------

            if (
                Array.isArray(
                    selectedDrug.strengths
                )
            ) {

                selectedDrug.strengths.forEach(
                    (
                        strength,
                        index
                    ) => {

                        if (!strength) {

                            return;

                        }

                        const option =
                            document.createElement(
                                "option"
                            );

                        /*
                         * Index is used as the
                         * option value.
                         *
                         * This is important because
                         * the strength object may contain
                         * several properties.
                         */

                        option.value =
                            String(index);

                        option.textContent =
                            strength.name ||
                            formatStrength(
                                strength
                            );

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
// FORMAT STRENGTH
// ======================================================

function formatStrength(
    strength
) {

    if (!strength) {

        return "-";

    }

    const concentration =
        parseFloat(
            strength.concentration
        );

    const volume =
        parseFloat(
            strength.volume
        );

    if (
        !isNaN(concentration) &&
        !isNaN(volume)
    ) {

        return `${concentration} mg / ${volume} mL`;

    }

    return safeText(
        strength.name
    );

}

// ======================================================
// GET SELECTED STRENGTH
// ======================================================

function getSelectedStrength(
    drug
) {

    if (
        !drug ||
        !Array.isArray(
            drug.strengths
        ) ||
        !strengthSelect
    ) {

        return null;

    }

    const index =
        parseInt(
            strengthSelect.value,
            10
        );

    if (
        isNaN(index) ||
        !drug.strengths[index]
    ) {

        return null;

    }

    return drug.strengths[index];

}
// ======================================================
// DoseCare AI v7
// Pediatric Liquid Dose Engine
// Part 2
// ======================================================


// ======================================================
// Calculate Component-Based Dose
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

    /*
     * Co-trimoxazole:
     *
     * Pediatric dose is usually expressed
     * according to the Trimethoprim component.
     *
     * Example:
     *
     * Trimethoprim 40 mg
     * Sulfamethoxazole 200 mg
     * per 5 mL
     *
     * If the calculated Trimethoprim dose
     * is 80 mg:
     *
     * 80 / 40 × 5
     * = 10 mL
     */

    const tmpDosePerDay =
        Number(
            data.trimethoprimMgPerKgPerDay
        );

    const smxDosePerDay =
        Number(
            data.sulfamethoxazoleMgPerKgPerDay
        );

    if (
        !Number.isFinite(tmpDosePerDay)
    ) {
        return null;
    }

    const trimethoprimMg =
        weight * tmpDosePerDay;

    let sulfamethoxazoleMg = null;

    if (
        Number.isFinite(smxDosePerDay)
    ) {

        sulfamethoxazoleMg =
            weight * smxDosePerDay;

    }


    // --------------------------------------------------
    // Convert using Trimethoprim concentration
    // --------------------------------------------------

    const doseMl =
        convertMgToMl(
            trimethoprimMg,
            selectedStrength
        );


    let noteText =
        defaultNote || "";


    if (
        sulfamethoxazoleMg !== null
    ) {

        noteText +=
            ` Calculated Trimethoprim dose: ${formatDose(trimethoprimMg)} mg/day; ` +
            `Sulfamethoxazole component: ${formatDose(sulfamethoxazoleMg)} mg/day.`;

    }


    noteText +=
        " Dose calculation is based on the Trimethoprim component.";


    return {

        doseMg:
            trimethoprimMg,

        doseMl,

        frequency:
            data.frequency || "-",

        duration:
            data.duration || "-",

        note:
            noteText

    };

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
        data.frequency || "-";

    let duration =
        data.duration || "";

    let note =
        defaultNote || "";


    // ==================================================
    // 1. mg/kg/day
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
    // 2. mg/kg/dose
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
    // 3. Fixed mg dose
    // ==================================================

    else if (
        typeof data.mgPerDose ===
        "number"
    ) {

        doseMg =
            data.mgPerDose;

    }


    // ==================================================
    // 4. Minimum / Maximum mg/kg/day
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


        /*
         * IMPORTANT
         *
         * We DO NOT automatically choose
         * the average dose.
         *
         * A dose range should remain a range.
         */

        note =
            `Recommended dose range: ` +
            `${formatDose(minDose)}–${formatDose(maxDose)} mg/day. ` +
            note;


        /*
         * For the calculator display,
         * use the lower end only as the
         * calculable reference dose.
         *
         * The UI should clearly identify
         * that this is a range.
         */

        doseMg =
            minDose;

    }


    // ==================================================
    // 5. Day 1 regimen
    // ==================================================

    else if (
        typeof data.day1MgPerKg ===
        "number"
    ) {

        doseMg =
            weight *
            data.day1MgPerKg;

        note =
            `Day 1 dose: ${formatDose(doseMg)} mg. ` +
            note;

    }


    // ==================================================
    // No recognized dose
    // ==================================================

    if (
        doseMg === null ||
        !Number.isFinite(doseMg)
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

        note +=
            ` Maximum dose applied: ${formatDose(data.maxDoseMg)} mg.`;

    }


    // ==================================================
    // Maximum Daily Dose
    // ==================================================

    if (
        typeof data.maxDoseMgPerDay ===
        "number" &&
        doseMg >
        data.maxDoseMgPerDay
    ) {

        doseMg =
            data.maxDoseMgPerDay;

        note +=
            ` Maximum daily dose applied: ${formatDose(data.maxDoseMgPerDay)} mg/day.`;

    }


    // ==================================================
    // Maximum Dose Per Administration
    // ==================================================

    if (
        typeof data.maxDoseMgPerDose ===
        "number" &&
        doseMg >
        data.maxDoseMgPerDose
    ) {

        doseMg =
            data.maxDoseMgPerDose;

        note +=
            ` Maximum dose per administration applied: ${formatDose(data.maxDoseMgPerDose)} mg.`;

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

        duration,

        note

    };

}


// ======================================================
// Convert mg → mL
// ======================================================

function convertMgToMl(
    doseMg,
    strength
) {

    /*
     * Every liquid medication in DoseCare
     * must have a clearly defined concentration.
     *
     * Example:
     *
     * 250 mg / 5 mL
     *
     * Formula:
     *
     * Dose(mg)
     * ─────────── × 5 mL
     * 250 mg
     *
     * = required mL
     */


    if (
        !Number.isFinite(doseMg) ||
        doseMg <= 0
    ) {

        return null;

    }


    if (!strength) {

        return null;

    }


    const concentration =
        Number(
            strength.concentration
        );

    const volume =
        Number(
            strength.volume
        );


    if (
        !Number.isFinite(concentration) ||
        concentration <= 0
    ) {

        return null;

    }


    if (
        !Number.isFinite(volume) ||
        volume <= 0
    ) {

        return null;

    }


    /*
     * Standard liquid-dose formula
     */

    const doseMl =
        (
            doseMg /
            concentration
        ) *
        volume;


    if (
        !Number.isFinite(doseMl) ||
        doseMl <= 0
    ) {

        return null;

    }


    return doseMl;

}


// ======================================================
// Convert mL → cc
// ======================================================

function mlToCc(
    ml
) {

    /*
     * 1 mL = 1 cc
     *
     * They represent the same volume.
     */

    if (
        !Number.isFinite(ml)
    ) {

        return null;

    }

    return ml;

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
        !Number.isFinite(value)
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


// ======================================================
// Format Liquid Volume
// ======================================================

function formatVolume(
    value
) {

    if (
        typeof value !==
        "number" ||
        !Number.isFinite(value)
    ) {

        return "-";

    }


    if (
        value < 1
    ) {

        return value.toFixed(2);

    }


    if (
        Number.isInteger(value)
    ) {

        return String(value);

    }


    return value.toFixed(2);

}


// ======================================================
// Build Dose Result
// ======================================================

function buildDoseResult(
    doseMg,
    frequency,
    notes,
    selectedStrength
) {

    if (
        !Number.isFinite(doseMg)
    ) {

        return null;

    }


    const doseMl =
        convertMgToMl(
            doseMg,
            selectedStrength
        );


    return {

        doseMg,

        doseMl,

        frequency:
            frequency || "-",

        duration:
            "-",

        note:
            notes || "-"

    };

}


// ======================================================
// End of Part 2
// ======================================================
// ======================================================
// DoseCare AI v7
// Pediatric Dose Frequency Engine
// Part 3
// ======================================================


// ======================================================
// Frequency → Number of Daily Doses
// ======================================================

function getDosesPerDay(frequency) {

    if (!frequency) {
        return 1;
    }

    const text =
        String(frequency)
            .toLowerCase()
            .trim();


    // --------------------------------------------------
    // Every 4 hours
    // --------------------------------------------------

    if (
        text.includes("every 4 hours") ||
        text.includes("q4h")
    ) {
        return 6;
    }


    // --------------------------------------------------
    // Every 6 hours
    // --------------------------------------------------

    if (
        text.includes("every 6 hours") ||
        text.includes("q6h")
    ) {
        return 4;
    }


    // --------------------------------------------------
    // Every 8 hours
    // --------------------------------------------------

    if (
        text.includes("every 8 hours") ||
        text.includes("q8h")
    ) {
        return 3;
    }


    // --------------------------------------------------
    // Every 12 hours
    // --------------------------------------------------

    if (
        text.includes("every 12 hours") ||
        text.includes("q12h")
    ) {
        return 2;
    }


    // --------------------------------------------------
    // Every 24 hours
    // --------------------------------------------------

    if (
        text.includes("every 24 hours") ||
        text.includes("once daily") ||
        text.includes("once a day") ||
        text.includes("daily")
    ) {
        return 1;
    }


    // --------------------------------------------------
    // Three times daily
    // --------------------------------------------------

    if (
        text.includes("3 divided doses") ||
        text.includes("three divided doses") ||
        text.includes("three times daily") ||
        text.includes("3 times daily")
    ) {
        return 3;
    }


    // --------------------------------------------------
    // Four divided doses
    // --------------------------------------------------

    if (
        text.includes("4 divided doses") ||
        text.includes("four divided doses") ||
        text.includes("four times daily") ||
        text.includes("4 times daily")
    ) {
        return 4;
    }


    // --------------------------------------------------
    // Three to four divided doses
    // --------------------------------------------------

    if (
        text.includes("3–4 divided doses") ||
        text.includes("3-4 divided doses") ||
        text.includes("3 to 4 divided doses")
    ) {

        /*
         * Do not silently choose a frequency.
         *
         * Returning null tells the engine that
         * the exact administration frequency
         * cannot be determined automatically.
         */

        return null;

    }


    // --------------------------------------------------
    // Single dose
    // --------------------------------------------------

    if (
        text.includes("single dose") ||
        text.includes("one dose")
    ) {
        return 1;
    }


    // --------------------------------------------------
    // Unknown
    // --------------------------------------------------

    return 1;

}


// ======================================================
// Detect Daily Dose
// ======================================================

function isDailyDoseData(data) {

    if (!data) {
        return false;
    }


    return (
        typeof data.mgPerKgPerDay ===
        "number" ||

        typeof data.minMgPerKgPerDay ===
        "number" ||

        typeof data.maxMgPerKgPerDay ===
        "number"
    );

}


// ======================================================
// Detect Per-Dose Data
// ======================================================

function isPerDoseData(data) {

    if (!data) {
        return false;
    }


    return (
        typeof data.mgPerKgPerDose ===
        "number" ||

        typeof data.mgPerDose ===
        "number"
    );

}


// ======================================================
// Calculate Administration Dose
// ======================================================

function calculateAdministrationDose(
    totalDailyDose,
    frequency
) {

    if (
        !Number.isFinite(totalDailyDose)
    ) {

        return null;

    }


    const dosesPerDay =
        getDosesPerDay(
            frequency
        );


    /*
     * If frequency is ambiguous,
     * do not divide automatically.
     */

    if (
        !Number.isFinite(dosesPerDay) ||
        dosesPerDay <= 0
    ) {

        return null;

    }


    return (
        totalDailyDose /
        dosesPerDay
    );

}


// ======================================================
// Calculate Complete Daily Regimen
// ======================================================

function calculateDailyRegimen(
    data,
    weight,
    selectedStrength,
    defaultNote
) {

    if (!data) {
        return null;
    }


    const frequency =
        data.frequency ||
        "-";


    const dosesPerDay =
        getDosesPerDay(
            frequency
        );


    if (
        !Number.isFinite(dosesPerDay)
    ) {

        return {

            doseMg: null,

            doseMl: null,

            totalDailyMg: null,

            totalDailyMl: null,

            frequency,

            duration:
                data.duration || "-",

            note:
                `${defaultNote || ""} ` +
                `The prescribed frequency contains a range; ` +
                `the exact administration frequency must be selected manually.`

        };

    }


    // ==================================================
    // Daily Dose
    // ==================================================

    if (
        typeof data.mgPerKgPerDay ===
        "number"
    ) {

        let totalDailyMg =
            weight *
            data.mgPerKgPerDay;


        // ----------------------------------------------
        // Maximum daily dose
        // ----------------------------------------------

        if (
            typeof data.maxDoseMgPerDay ===
            "number" &&
            totalDailyMg >
            data.maxDoseMgPerDay
        ) {

            totalDailyMg =
                data.maxDoseMgPerDay;

        }


        // ----------------------------------------------
        // Dose per administration
        // ----------------------------------------------

        const administrationMg =
            totalDailyMg /
            dosesPerDay;


        const administrationMl =
            convertMgToMl(
                administrationMg,
                selectedStrength
            );


        return {

            doseMg:
                administrationMg,

            doseMl:
                administrationMl,

            totalDailyMg,

            totalDailyMl:
                convertMgToMl(
                    totalDailyMg,
                    selectedStrength
                ),

            frequency,

            dosesPerDay,

            duration:
                data.duration || "-",

            note:
                defaultNote || "-"

        };

    }


    // ==================================================
    // Per Dose
    // ==================================================

    if (
        typeof data.mgPerKgPerDose ===
        "number"
    ) {

        let administrationMg =
            weight *
            data.mgPerKgPerDose;


        // ----------------------------------------------
        // Maximum per dose
        // ----------------------------------------------

        if (
            typeof data.maxDoseMgPerDose ===
            "number" &&
            administrationMg >
            data.maxDoseMgPerDose
        ) {

            administrationMg =
                data.maxDoseMgPerDose;

        }


        const administrationMl =
            convertMgToMl(
                administrationMg,
                selectedStrength
            );


        return {

            doseMg:
                administrationMg,

            doseMl:
                administrationMl,

            totalDailyMg:
                administrationMg *
                dosesPerDay,

            totalDailyMl:
                administrationMl !== null
                    ? administrationMl *
                      dosesPerDay
                    : null,

            frequency,

            dosesPerDay,

            duration:
                data.duration || "-",

            note:
                defaultNote || "-"

        };

    }


    return null;

}


// ======================================================
// Improve Existing Dose Calculation
// ======================================================

function calculateAccurateDose(
    drug,
    weight,
    disease,
    selectedStrength
) {

    if (
        !drug ||
        !drug.dose
    ) {

        return null;

    }


    const doseData =
        drug.dose;


    let data = null;


    // ==================================================
    // Disease-Based
    // ==================================================

    if (
        doseData.type ===
        "disease_based"
    ) {

        data =
            doseData[disease];


        if (!data) {

            data =
                doseData.standard;

        }

    }


    // ==================================================
    // Standard Pediatric
    // ==================================================

    else if (
        doseData.type ===
        "standard_pediatric"
    ) {

        data =
            doseData;

    }


    // ==================================================
    // Weight Based
    // ==================================================

    else if (
        doseData.type ===
        "weight_based"
    ) {

        data =
            doseData;

    }


    // ==================================================
    // Component Based
    // ==================================================

    else if (
        doseData.type ===
        "component_based"
    ) {

        data =
            doseData[disease];

        if (!data) {
            return null;
        }


        return calculateComponentDoseAccurate(
            data,
            weight,
            selectedStrength,
            drug.notes
        );

    }


    // ==================================================
    // Severity Based
    // ==================================================

    else if (
        doseData.type ===
        "severity_based"
    ) {

        return {

            doseMg: null,

            doseMl: null,

            frequency:
                "Severity-dependent",

            duration:
                "-",

            note:
                "Dose depends on infection severity and must be selected according to the approved pediatric regimen."

        };

    }


    if (!data) {
        return null;
    }


    // ==================================================
    // Special Regimen Array
    // ==================================================

    if (
        Array.isArray(
            data.regimens
        )
    ) {

        return {

            doseMg: null,

            doseMl: null,

            frequency:
                "Multiple accepted regimens",

            duration:
                "-",

            note:
                data.regimens.join(
                    " • "
                )

        };

    }


    // ==================================================
    // Calculate Daily / Per-Dose
    // ==================================================

    return calculateDailyRegimen(
        data,
        weight,
        selectedStrength,
        drug.notes
    );

}


// ======================================================
// Accurate Component Calculation
// ======================================================

function calculateComponentDoseAccurate(
    data,
    weight,
    selectedStrength,
    defaultNote
) {

    if (!data) {
        return null;
    }


    const tmpPerDay =
        Number(
            data.trimethoprimMgPerKgPerDay
        );


    const smxPerDay =
        Number(
            data.sulfamethoxazoleMgPerKgPerDay
        );


    if (
        !Number.isFinite(tmpPerDay)
    ) {

        return null;

    }


    const totalTmpMg =
        weight *
        tmpPerDay;


    const dosesPerDay =
        getDosesPerDay(
            data.frequency
        );


    if (
        !Number.isFinite(dosesPerDay)
    ) {

        return {

            doseMg: null,

            doseMl: null,

            frequency:
                data.frequency || "-",

            duration:
                data.duration || "-",

            note:
                "Exact administration frequency must be selected before calculating the volume."

        };

    }


    const administrationTmpMg =
        totalTmpMg /
        dosesPerDay;


    const administrationMl =
        convertMgToMl(
            administrationTmpMg,
            selectedStrength
        );


    let note =
        defaultNote || "";


    if (
        Number.isFinite(smxPerDay)
    ) {

        const totalSmxMg =
            weight *
            smxPerDay;


        const administrationSmxMg =
            totalSmxMg /
            dosesPerDay;


        note +=
            ` Total daily Sulfamethoxazole: ` +
            `${formatDose(totalSmxMg)} mg; ` +
            `per administration: ` +
            `${formatDose(administrationSmxMg)} mg.`;

    }


    note +=
        " Volume is calculated from the Trimethoprim concentration.";


    return {

        doseMg:
            administrationTmpMg,

        doseMl:
            administrationMl,

        totalDailyMg:
            totalTmpMg,

        totalDailyMl:
            convertMgToMl(
                totalTmpMg,
                selectedStrength
            ),

        frequency:
            data.frequency || "-",

        dosesPerDay,

        duration:
            data.duration || "-",

        note

    };

}


// ======================================================
// Validate Liquid Strength
// ======================================================

function validateLiquidStrength(
    strength
) {

    if (!strength) {

        return {

            valid: false,

            message:
                "Please select the oral liquid strength."

        };

    }


    const concentration =
        Number(
            strength.concentration
        );


    const volume =
        Number(
            strength.volume
        );


    if (
        !Number.isFinite(concentration) ||
        concentration <= 0
    ) {

        return {

            valid: false,

            message:
                "Invalid medication concentration."

        };

    }


    if (
        !Number.isFinite(volume) ||
        volume <= 0
    ) {

        return {

            valid: false,

            message:
                "Invalid medication volume."

        };

    }


    return {

        valid: true,

        message: "Valid"

    };

}


// ======================================================
// End of Part 3
// ======================================================
// ======================================================
// DoseCare AI v8
// Calculate Button Controller
// Part 4
// ======================================================

if (calculateBtn) {

    calculateBtn.addEventListener(
        "click",
        () => {

            // ==================================================
            // GET SELECTED DRUG
            // ==================================================

            const drugId =
                drugSelect?.value;

            const drug =
                window.drugs?.[drugId];

            if (!drug) {

                alert(
                    "Please select a medication."
                );

                return;
            }


            // ==================================================
            // GET PATIENT WEIGHT
            // ==================================================

            const weight =
                parseFloat(
                    weightInput?.value
                );


            if (
                !Number.isFinite(weight) ||
                weight <= 0
            ) {

                alert(
                    "Please enter a valid patient's weight."
                );

                return;
            }


            // ==================================================
            // GET AGE
            // ==================================================

            const age =
                parseFloat(
                    ageInput?.value
                );


            if (
                !Number.isFinite(age) ||
                age < 0
            ) {

                alert(
                    "Please enter a valid patient's age."
                );

                return;
            }


            // ==================================================
            // GET AGE IN YEARS
            // ==================================================

            let ageYears =
                age;


            if (
                ageUnit?.value ===
                "months"
            ) {

                ageYears =
                    age / 12;

            }


            // ==================================================
            // PEDIATRIC AGE LIMIT
            // ==================================================

            if (
                ageYears > 12
            ) {

                alert(
                    "DoseCare AI is intended for pediatric patients up to 12 years."
                );

                return;
            }


            // ==================================================
            // CHECK DRUG AGE LIMIT
            // ==================================================

            if (
                drug.age &&
                typeof drug.age.minAge ===
                    "number" &&
                ageYears <
                    drug.age.minAge
            ) {

                alert(
                    `This medication is not recommended for this age according to the database. Minimum age: ${drug.age.minAge} years.`
                );

                return;
            }


            if (
                drug.age &&
                typeof drug.age.maxAge ===
                    "number" &&
                ageYears >
                    drug.age.maxAge
            ) {

                alert(
                    `This medication is outside the stored pediatric age range. Maximum age: ${drug.age.maxAge} years.`
                );

                return;
            }


            // ==================================================
            // GET DISEASE
            // ==================================================

            const disease =
                diseaseSelect?.value || "";


            // ==================================================
            // GET STRENGTH
            // ==================================================

            const selectedStrength =
                getSelectedStrength(
                    drug
                );


            // ==================================================
            // VALIDATE LIQUID STRENGTH
            // ==================================================

            const strengthCheck =
                validateLiquidStrength(
                    selectedStrength
                );


            if (
                !strengthCheck.valid
            ) {

                alert(
                    strengthCheck.message
                );

                return;
            }


            // ==================================================
            // CALCULATE ACCURATE DOSE
            // ==================================================

            const result =
                calculateAccurateDose(
                    drug,
                    weight,
                    disease,
                    selectedStrength
                );


            // ==================================================
            // CALCULATION FAILED
            // ==================================================

            if (!result) {

                alert(
                    "Dose information is not available for this medication and condition."
                );

                return;
            }


            // ==================================================
            // SHOW RESULT CARD
            // ==================================================

            if (resultCard) {

                resultCard.style.display =
                    "block";

            }


            // ==================================================
            // DRUG NAME
            // ==================================================

            if (drugName) {

                drugName.textContent =
                    safeText(
                        drug.name ||
                        drug.genericName
                    );

            }


            // ==================================================
            // PATIENT AGE
            // ==================================================

            if (patientAge) {

                if (
                    ageUnit?.value ===
                    "months"
                ) {

                    if (age === 0) {

                        patientAge.textContent =
                            "👶 Newborn";

                    } else {

                        patientAge.textContent =
                            `👶 ${age} Month(s)`;

                    }

                } else {

                    patientAge.textContent =
                        `🧒 ${age} Year(s)`;

                }

            }


            // ==================================================
            // DOSE MG
            // ==================================================

            if (doseMg) {

                if (
                    Number.isFinite(
                        result.doseMg
                    )
                ) {

                    doseMg.textContent =
                        `${formatDose(
                            result.doseMg
                        )} mg`;

                } else {

                    doseMg.textContent =
                        "See regimen";

                }

            }


            // ==================================================
            // DOSE ML / CC
            // ==================================================

            if (doseMl) {

                if (
                    Number.isFinite(
                        result.doseMl
                    )
                ) {

                    const ml =
                        mlToCc(
                            result.doseMl
                        );

                    doseMl.textContent =
                        `${formatVolume(
                            ml
                        )} mL (${formatVolume(
                            ml
                        )} cc)`;

                } else {

                    doseMl.textContent =
                        "-";

                }

            }


            // ==================================================
            // FREQUENCY
            // ==================================================

            if (frequency) {

                frequency.textContent =
                    result.frequency ||
                    "-";

            }


            // ==================================================
            // DURATION
            // ==================================================

            const resultDuration =
                document.getElementById(
                    "duration"
                );

            if (resultDuration) {

                resultDuration.textContent =
                    result.duration ||
                    "-";

            }


            // ==================================================
            // NOTE
            // ==================================================

            if (note) {

                note.textContent =
                    result.note ||
                    drug.notes ||
                    "-";

            }


            // ==================================================
            // SHOW DRUG INFORMATION
            // ==================================================

            showDrugInfo(
                drug
            );


            // ==================================================
            // SHOW CLINICAL ALERTS
            // ==================================================

            showClinicalAlerts(
                drug
            );


            // ==================================================
            // UPDATE CALCULATION COUNTER
            // ==================================================

            calculations++;

            if (calcCount) {

                calcCount.textContent =
                    calculations;

            }


            // ==================================================
            // UPDATE LAST DRUG
            // ==================================================

            if (lastDrug) {

                lastDrug.textContent =
                    drug.name ||
                    drug.genericName ||
                    "-";

            }


            // ==================================================
            // SAVE HISTORY
            // ==================================================

            const historyItem = {

                drug:
                    drug.name ||
                    drug.genericName ||
                    "-",

                weight,

                age,

                ageUnit:
                    ageUnit?.value ||
                    "years",

                disease,

                doseMg:
                    result.doseMg,

                doseMl:
                    result.doseMl,

                frequency:
                    result.frequency ||
                    "-",

                duration:
                    result.duration ||
                    "-",

                timestamp:
                    new Date().toISOString()

            };


            calculationHistory.push(
                historyItem
            );


            // Keep latest 20 calculations
            if (
                calculationHistory.length >
                20
            ) {

                calculationHistory.shift();

            }


            // ==================================================
            // UPDATE HISTORY UI
            // ==================================================

            updateHistoryUI();


            // ==================================================
            // SCROLL TO RESULT
            // ==================================================

            if (
                resultCard &&
                typeof resultCard.scrollIntoView ===
                    "function"
            ) {

                resultCard.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


// ======================================================
// END OF PART 4
// ======================================================
// ======================================================
// DoseCare AI v8
// Drug Information & Clinical Alerts
// Part 5
// ======================================================


// ======================================================
// HIDE DRUG INFORMATION
// ======================================================

function hideDrugInfo() {

    if (drugInfoCard) {

        drugInfoCard.style.display =
            "none";

    }

}


// ======================================================
// SHOW DRUG INFORMATION
// ======================================================

function showDrugInfo(
    drug
) {

    if (!drug) {

        hideDrugInfo();

        return;

    }


    // --------------------------------------------------
    // Show Card
    // --------------------------------------------------

    if (drugInfoCard) {

        drugInfoCard.style.display =
            "block";

    }


    // --------------------------------------------------
    // Generic Name
    // --------------------------------------------------

    if (genericName) {

        genericName.textContent =
            safeText(
                drug.genericName ||
                drug.name
            );

    }


    // --------------------------------------------------
    // Brand Names
    // --------------------------------------------------

    if (brandNames) {

        brandNames.textContent =
            arrayToText(
                drug.brandNames
            );

    }


    // --------------------------------------------------
    // Category
    // --------------------------------------------------

    if (category) {

        category.textContent =
            safeText(
                drug.category
            );

    }


    // --------------------------------------------------
    // Therapeutic Class
    // --------------------------------------------------

    if (therapeuticClass) {

        therapeuticClass.textContent =
            safeText(
                drug.therapeuticClass
            );

    }


    // --------------------------------------------------
    // Pharmacological Class
    // --------------------------------------------------

    if (pharmacologicalClass) {

        pharmacologicalClass.textContent =
            safeText(
                drug.pharmacologicalClass
            );

    }


    // --------------------------------------------------
    // Mechanism of Action
    // --------------------------------------------------

    if (mechanism) {

        mechanism.textContent =
            safeText(
                drug.mechanism ||
                drug.mechanismOfAction
            );

    }


    // --------------------------------------------------
    // Indications
    // --------------------------------------------------

    if (indications) {

        indications.textContent =
            arrayToText(
                drug.indications
            );

    }


    // --------------------------------------------------
    // Contraindications
    // --------------------------------------------------

    if (contraindications) {

        contraindications.textContent =
            arrayToText(
                drug.contraindications
            );

    }


    // --------------------------------------------------
    // Warnings
    // --------------------------------------------------

    if (warnings) {

        warnings.textContent =
            arrayToText(
                drug.warnings
            );

    }


    // --------------------------------------------------
    // Side Effects
    // --------------------------------------------------

    if (sideEffects) {

        sideEffects.textContent =
            arrayToText(
                drug.sideEffects
            );

    }


    // --------------------------------------------------
    // Pregnancy
    // --------------------------------------------------

    if (pregnancy) {

        pregnancy.textContent =
            safeText(
                drug.pregnancy
            );

    }


    // --------------------------------------------------
    // Lactation
    // --------------------------------------------------

    if (lactation) {

        lactation.textContent =
            safeText(
                drug.lactation
            );

    }


    // --------------------------------------------------
    // Dose Range
    // --------------------------------------------------

    if (doseRange) {

        doseRange.textContent =
            safeText(
                drug.doseRange
            );

    }


    // --------------------------------------------------
    // Onset
    // --------------------------------------------------

    if (onset) {

        onset.textContent =
            safeText(
                drug.onset
            );

    }


    // --------------------------------------------------
    // Duration
    // --------------------------------------------------

    if (duration) {

        duration.textContent =
            safeText(
                drug.duration
            );

    }


    // --------------------------------------------------
    // Half Life
    // --------------------------------------------------

    if (halfLife) {

        halfLife.textContent =
            safeText(
                drug.halfLife
            );

    }


    // --------------------------------------------------
    // Protein Binding
    // --------------------------------------------------

    if (proteinBinding) {

        proteinBinding.textContent =
            safeText(
                drug.proteinBinding
            );

    }


    // --------------------------------------------------
    // Metabolism
    // --------------------------------------------------

    if (metabolism) {

        metabolism.textContent =
            safeText(
                drug.metabolism
            );

    }


    // --------------------------------------------------
    // Elimination
    // --------------------------------------------------

    if (elimination) {

        elimination.textContent =
            safeText(
                drug.elimination
            );

    }


    // --------------------------------------------------
    // Storage
    // --------------------------------------------------

    if (storage) {

        storage.textContent =
            safeText(
                drug.storage
            );

    }


    // --------------------------------------------------
    // Monitoring
    // --------------------------------------------------

    if (monitoring) {

        monitoring.textContent =
            arrayToText(
                drug.monitoring
            );

    }


    // --------------------------------------------------
    // Clinical Pearls
    // --------------------------------------------------

    if (clinicalPearls) {

        clinicalPearls.textContent =
            arrayToText(
                drug.clinicalPearls
            );

    }


    // --------------------------------------------------
    // Interactions
    // --------------------------------------------------

    if (interactions) {

        interactions.textContent =
            arrayToText(
                drug.interactions
            );

    }


    // --------------------------------------------------
    // Alerts
    // --------------------------------------------------

    if (alerts) {

        alerts.textContent =
            arrayToText(
                drug.alerts
            );

    }


    // --------------------------------------------------
    // Black Box
    // --------------------------------------------------

    if (blackBox) {

        blackBox.textContent =
            safeText(
                drug.blackBox
            );

    }

}


// ======================================================
// HIDE CLINICAL ALERTS
// ======================================================

function hideClinicalAlerts() {

    if (clinicalAlertCard) {

        clinicalAlertCard.style.display =
            "none";

    }


    if (clinicalAlertContent) {

        clinicalAlertContent.innerHTML =
            "";

    }

}


// ======================================================
// SHOW CLINICAL ALERTS
// ======================================================

function showClinicalAlerts(
    drug
) {

    if (!drug) {

        hideClinicalAlerts();

        return;

    }


    // --------------------------------------------------
    // Collect Alerts
    // --------------------------------------------------

    const alertList = [];


    // --------------------------------------------------
    // Contraindications
    // --------------------------------------------------

    if (
        Array.isArray(
            drug.contraindications
        )
    ) {

        drug.contraindications.forEach(
            item => {

                if (item) {

                    alertList.push({
                        type:
                            "contraindication",

                        text:
                            String(item)

                    });

                }

            }
        );

    }


    // --------------------------------------------------
    // Warnings
    // --------------------------------------------------

    if (
        Array.isArray(
            drug.warnings
        )
    ) {

        drug.warnings.forEach(
            item => {

                if (item) {

                    alertList.push({
                        type:
                            "warning",

                        text:
                            String(item)

                    });

                }

            }
        );

    }


    // --------------------------------------------------
    // Drug Alerts
    // --------------------------------------------------

    if (
        Array.isArray(
            drug.alerts
        )
    ) {

        drug.alerts.forEach(
            item => {

                if (item) {

                    alertList.push({
                        type:
                            "alert",

                        text:
                            String(item)

                    });

                }

            }
        );

    }


    // --------------------------------------------------
    // Black Box Warning
    // --------------------------------------------------

    if (
        drug.blackBox &&
        String(
            drug.blackBox
        ).trim() !== ""
    ) {

        alertList.push({

            type:
                "blackbox",

            text:
                String(
                    drug.blackBox
                )

        });

    }


    // --------------------------------------------------
    // No Alerts
    // --------------------------------------------------

    if (
        alertList.length === 0
    ) {

        hideClinicalAlerts();

        return;

    }


    // --------------------------------------------------
    // Show Alert Card
    // --------------------------------------------------

    if (clinicalAlertCard) {

        clinicalAlertCard.style.display =
            "block";

    }


    if (!clinicalAlertContent) {

        return;

    }


    // --------------------------------------------------
    // Build Alert UI
    // --------------------------------------------------

    clinicalAlertContent.innerHTML =
        "";


    alertList.forEach(
        alert => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                `clinical-alert-item ${alert.type}`;


            const icon =
                document.createElement(
                    "span"
                );


            const text =
                document.createElement(
                    "span"
                );


            // ------------------------------------------
            // Alert Icon
            // ------------------------------------------

            if (
                alert.type ===
                "contraindication"
            ) {

                icon.textContent =
                    "🚫";

            }

            else if (
                alert.type ===
                "blackbox"
            ) {

                icon.textContent =
                    "⛔";

            }

            else if (
                alert.type ===
                "warning"
            ) {

                icon.textContent =
                    "⚠️";

            }

            else {

                icon.textContent =
                    "🔔";

            }


            // ------------------------------------------
            // Alert Text
            // ------------------------------------------

            text.textContent =
                alert.text;


            item.appendChild(
                icon
            );

            item.appendChild(
                text
            );


            clinicalAlertContent.appendChild(
                item
            );

        }
    );

}


// ======================================================
// RESET RESULT CARD
// ======================================================

function hideResult() {

    if (resultCard) {

        resultCard.style.display =
            "none";

    }


    if (doseMg) {

        doseMg.textContent =
            "-";

    }


    if (doseMl) {

        doseMl.textContent =
            "-";

    }


    if (frequency) {

        frequency.textContent =
            "-";

    }


    if (note) {

        note.textContent =
            "-";

    }

}


// ======================================================
// END OF PART 5
// ======================================================
// ======================================================
// DoseCare AI v8
// History & Calculation Statistics
// Part 6
// ======================================================


// ======================================================
// HISTORY / STATISTICS ELEMENTS
// ======================================================

const calcCount =
    document.getElementById("calcCount");

const lastDrug =
    document.getElementById("lastDrug");

const historyList =
    document.getElementById("historyList");

const clearHistoryBtn =
    document.getElementById("clearHistoryBtn");


// ======================================================
// UPDATE HISTORY UI
// ======================================================

function updateHistoryUI() {

    if (!historyList) {

        return;

    }


    // --------------------------------------------------
    // Clear current history
    // --------------------------------------------------

    historyList.innerHTML = "";


    // --------------------------------------------------
    // No history
    // --------------------------------------------------

    if (
        calculationHistory.length === 0
    ) {

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "history-empty";

        empty.textContent =
            "No calculations yet.";

        historyList.appendChild(
            empty
        );

        return;

    }


    // --------------------------------------------------
    // Display newest calculation first
    // --------------------------------------------------

    const reversedHistory =
        [
            ...calculationHistory
        ].reverse();


    reversedHistory.forEach(
        (
            item,
            index
        ) => {

            const historyItem =
                document.createElement(
                    "div"
                );

            historyItem.className =
                "history-item";


            // ------------------------------------------
            // Drug
            // ------------------------------------------

            const drugElement =
                document.createElement(
                    "div"
                );

            drugElement.className =
                "history-drug";

            drugElement.textContent =
                item.drug || "-";


            // ------------------------------------------
            // Patient information
            // ------------------------------------------

            const patientElement =
                document.createElement(
                    "div"
                );

            patientElement.className =
                "history-patient";


            const ageText =
                item.ageUnit ===
                "months"

                    ? `${item.age} month(s)`

                    : `${item.age} year(s)`;


            patientElement.textContent =
                `Age: ${ageText} • Weight: ${item.weight} kg`;


            // ------------------------------------------
            // Disease
            // ------------------------------------------

            const diseaseElement =
                document.createElement(
                    "div"
                );

            diseaseElement.className =
                "history-disease";

            diseaseElement.textContent =
                item.disease
                    ? `Condition: ${item.disease}`
                    : "Condition: -";


            // ------------------------------------------
            // Dose
            // ------------------------------------------

            const doseElement =
                document.createElement(
                    "div"
                );

            doseElement.className =
                "history-dose";


            let doseText =
                "Dose: -";


            if (
                Number.isFinite(
                    item.doseMg
                )
            ) {

                doseText =
                    `Dose: ${formatDose(
                        item.doseMg
                    )} mg`;

            }


            if (
                Number.isFinite(
                    item.doseMl
                )
            ) {

                doseText +=
                    ` • ${formatVolume(
                        item.doseMl
                    )} mL`;

            }


            doseElement.textContent =
                doseText;


            // ------------------------------------------
            // Frequency
            // ------------------------------------------

            const frequencyElement =
                document.createElement(
                    "div"
                );

            frequencyElement.className =
                "history-frequency";

            frequencyElement.textContent =
                `Frequency: ${
                    item.frequency || "-"
                }`;


            // ------------------------------------------
            // Duration
            // ------------------------------------------

            const durationElement =
                document.createElement(
                    "div"
                );

            durationElement.className =
                "history-duration";

            durationElement.textContent =
                `Duration: ${
                    item.duration || "-"
                }`;


            // ------------------------------------------
            // Timestamp
            // ------------------------------------------

            const timeElement =
                document.createElement(
                    "div"
                );

            timeElement.className =
                "history-time";


            timeElement.textContent =
                formatHistoryTime(
                    item.timestamp
                );


            // ------------------------------------------
            // Append
            // ------------------------------------------

            historyItem.appendChild(
                drugElement
            );

            historyItem.appendChild(
                patientElement
            );

            historyItem.appendChild(
                diseaseElement
            );

            historyItem.appendChild(
                doseElement
            );

            historyItem.appendChild(
                frequencyElement
            );

            historyItem.appendChild(
                durationElement
            );

            historyItem.appendChild(
                timeElement
            );


            historyList.appendChild(
                historyItem
            );

        }
    );

}


// ======================================================
// FORMAT HISTORY TIME
// ======================================================

function formatHistoryTime(
    timestamp
) {

    if (!timestamp) {

        return "-";

    }


    const date =
        new Date(
            timestamp
        );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "-";

    }


    return date.toLocaleString();

}


// ======================================================
// CLEAR HISTORY
// ======================================================

function clearCalculationHistory() {

    calculationHistory =
        [];


    // ----------------------------------------------
    // Reset counter
    // ----------------------------------------------

    calculations =
        0;


    if (calcCount) {

        calcCount.textContent =
            "0";

    }


    // ----------------------------------------------
    // Reset last drug
    // ----------------------------------------------

    if (lastDrug) {

        lastDrug.textContent =
            "-";

    }


    // ----------------------------------------------
    // Refresh history
    // ----------------------------------------------

    updateHistoryUI();

}


// ======================================================
// CLEAR HISTORY BUTTON
// ======================================================

if (clearHistoryBtn) {

    clearHistoryBtn.addEventListener(
        "click",
        () => {

            if (
                calculationHistory.length ===
                0
            ) {

                return;

            }


            const confirmed =
                confirm(
                    "Clear all calculation history?"
                );


            if (!confirmed) {

                return;

            }


            clearCalculationHistory();

        }
    );

}


// ======================================================
// INITIAL HISTORY UI
// ======================================================

updateHistoryUI();


// ======================================================
// END OF PART 6
// ======================================================
