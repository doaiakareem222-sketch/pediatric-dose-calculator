 // ======================================================
// DoseCare AI v7
// Main Script
// ======================================================

console.log("DoseCare AI v7 Loaded");

// ======================================================
// DOM Elements
// ======================================================

const welcomeScreen = document.getElementById("welcomeScreen");

const diseaseSelect = document.getElementById("disease");
const diseaseGuide = document.getElementById("diseaseGuide");

const searchDrug = document.getElementById("searchDrug");

const drugSelect = document.getElementById("drug");
const strengthSelect = document.getElementById("strength");

const ageInput = document.getElementById("age");
const ageUnit = document.getElementById("ageUnit");
const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculateBtn");

// Result

const resultCard = document.getElementById("resultCard");

const drugName = document.getElementById("drugName");
const patientAge = document.getElementById("patientAge");
const doseMg = document.getElementById("doseMg");
const doseMl = document.getElementById("doseMl");
const frequency = document.getElementById("frequency");
const note = document.getElementById("note");

// Drug Information

const drugInfoCard = document.getElementById("drugInfoCard");

// Dashboard

const historyBox = document.getElementById("history");
const calcCount = document.getElementById("calcCount");
const lastDrug = document.getElementById("lastDrug");

// ======================================================
// Application Data
// ======================================================

let allDrugs = Object.values(drugs);
let currentDrugList = allDrugs;
let calculationHistory = [];

let calculations = 0;

// ======================================================
// Welcome Screen
// ======================================================

window.addEventListener("load", () => {

    setTimeout(() => {

        welcomeScreen.classList.add("hide");

    }, 2500);

});

// ======================================================
// Load Drugs
// ======================================================

function loadDrugs(list = allDrugs){

    drugSelect.innerHTML = "";

    const firstOption = document.createElement("option");
    firstOption.value = "";
    firstOption.textContent = "Select Drug";
    drugSelect.appendChild(firstOption);

    list.forEach(drug => {

        const option = document.createElement("option");

        option.value = drug.id;

        option.textContent = drug.name;

        drugSelect.appendChild(option);

    });

}


// ======================================================
// Search Drugs
// ======================================================

searchDrug.addEventListener("input", () => {

    const keyword = searchDrug.value.trim().toLowerCase();

    const filtered = currentDrugList.filter(drug => {

        return (

            drug.name.toLowerCase().includes(keyword) ||

            drug.genericName.toLowerCase().includes(keyword) ||

            drug.brandNames.some(brand =>
                brand.toLowerCase().includes(keyword)
            )

        );

    });

    loadDrugs(keyword ? filtered : currentDrugList);

});

// ======================================================
// Filter By Disease
// ======================================================

diseaseSelect.addEventListener("change", () => {

    const disease = diseaseSelect.value;

    strengthSelect.innerHTML =
    `<option value="">Select Strength</option>`;

    searchDrug.value = "";

    if (!disease) {

        currentDrugList = allDrugs;

        loadDrugs(currentDrugList);

        diseaseGuide.innerHTML = "";

        return;

    }

    currentDrugList = allDrugs.filter(drug =>
        drug.diseases.includes(disease)
    );

    loadDrugs(currentDrugList);

    diseaseGuide.innerHTML = `
        <strong>${currentDrugList.length}</strong>
        medication(s) available for this condition.
    `;

});
// ======================================================
// Load Drug Strengths
// ======================================================

drugSelect.addEventListener("change", () => {

    strengthSelect.innerHTML = `
        <option value="">Select Strength</option>
    `;

    const selectedDrug = drugs[drugSelect.value];

   if (!selectedDrug) return;

showDrugInfo(selectedDrug);
    selectedDrug.strengths.forEach(strength => {

        const option = document.createElement("option");

        option.value = strength.concentration;

        option.textContent = strength.name;

        strengthSelect.appendChild(option);

    });

});


// // ======================================================
// Dose Calculation
// ======================================================

calculateBtn.addEventListener("click", () => {

    const drug = drugs[drugSelect.value];

    const weight = parseFloat(weightInput.value);
    const age = parseFloat(ageInput.value);

    // ==================================================
    // Age Validation
    // ==================================================

    if (isNaN(age) || age < 0) {

        alert("Please enter a valid age.");

        return;

    }

    if (age > 12) {

        alert(
            "DoseCare AI is intended for pediatric patients (0–12 years) only."
        );

        return;

    }

    // ==================================================
    // Drug Validation
    // ==================================================

    if (!drug) {

        alert("Please select a drug.");

        return;

    }

    // ==================================================
    // Weight Validation
    // ==================================================

    if (isNaN(weight) || weight <= 0) {

        alert("Please enter patient's weight.");

        return;

    }

    if (weight > 100) {

        alert("Weight is outside the pediatric range.");

        return;

    }

    // ==================================================
    // Calculate Dose in mg
    // ==================================================

    let dose = weight * drug.mgPerKg;

    // Maximum dose

    if (drug.maxDose && dose > drug.maxDose) {

        dose = drug.maxDose;

    }

    // ==================================================
    // Calculate Liquid Volume
    // ==================================================

    let doseMl = null;

    const selectedStrength =
        drug.strengths?.find(
            strength =>
                String(strength.concentration) ===
                String(strengthSelect.value)
        );

    if (selectedStrength) {

        const concentration =
            parseFloat(selectedStrength.concentration);

        if (
            !isNaN(concentration) &&
            concentration > 0
        ) {

            // ------------------------------------------
            // If concentration is mg/mL
            // ------------------------------------------

            if (selectedStrength.unit === "mg/mL") {

                doseMl =
                    dose / concentration;

            }

            // ------------------------------------------
            // If concentration is mg/5mL
            // ------------------------------------------

            else {

                doseMl =
                    (dose / concentration) * 5;

            }

        }

    }

    // ==================================================
    // Show Result
    // ==================================================

    resultCard.style.display = "block";

    drugName.textContent =
        drug.name;

    doseMg.textContent =
        dose.toFixed(2) + " mg";

    // ==================================================
    // mL / cc Result
    // ==================================================

    if (doseMl !== null) {

        doseMl.textContent =
            doseMl.toFixed(2) + " mL (" +
            doseMl.toFixed(2) + " cc)";

    } else {

        doseMl.textContent = "-";

    }

    // ==================================================
    // Frequency
    // ==================================================

    frequency.textContent =
        drug.frequency || "-";

    // ==================================================
    // Notes
    // ==================================================

    note.textContent =
        drug.notes || "-";

    // ==================================================
    // Patient Age Display
    // ==================================================

    if (ageUnit.value === "months") {

        if (Number(ageInput.value) < 0.08) {

            patientAge.textContent =
                "👶 Neonate (0–28 Days)";

        } else {

            patientAge.textContent =
                `👶 ${Math.round(
                    Number(ageInput.value) * 12
                )} Month(s)`;

        }

    } else {

        patientAge.textContent =
            `🧒 ${ageInput.value} Year(s)`;

    }

    // ==================================================
    // Drug Information
    // ==================================================

    showDrugInfo(drug);

});
// ======================================================
// Drug Information Card
// ======================================================

function showDrugInfo(drug){

    if(!drug) return;

    drugInfoCard.style.display = "block";

    document.getElementById("genericName").textContent =
        drug.genericName || "-";

    document.getElementById("brandNames").textContent =
        drug.brandNames ? drug.brandNames.join(", ") : "-";

    document.getElementById("category").textContent =
        drug.category || "-";

    document.getElementById("therapeuticClass").textContent =
        drug.therapeuticClass || "-";

    document.getElementById("pharmacologicalClass").textContent =
        drug.pharmacologicalClass || "-";

    document.getElementById("mechanism").textContent =
        drug.mechanism || "-";

    document.getElementById("indications").textContent =
        drug.indications || "-";

    document.getElementById("contraindications").textContent =
        drug.contraindications || "-";

    document.getElementById("warnings").textContent =
        drug.warnings || "-";

    document.getElementById("sideEffects").textContent =
        drug.sideEffects || "-";

    document.getElementById("pregnancy").textContent =
        drug.pregnancy || "-";

    document.getElementById("lactation").textContent =
        drug.lactation || "-";

    document.getElementById("doseRange").textContent =
        drug.doseRange || "-";

    document.getElementById("onset").textContent =
        drug.onset || "-";

    document.getElementById("duration").textContent =
        drug.duration || "-";

    document.getElementById("halfLife").textContent =
        drug.halfLife || "-";

    document.getElementById("proteinBinding").textContent =
        drug.proteinBinding || "-";

    document.getElementById("metabolism").textContent =
        drug.metabolism || "-";

    document.getElementById("elimination").textContent =
        drug.elimination || "-";

    document.getElementById("storage").textContent =
        drug.storage || "-";

    document.getElementById("monitoring").textContent =
        Array.isArray(drug.monitoring)
            ? drug.monitoring.join(" • ")
            : "-";

    document.getElementById("clinicalPearls").textContent =
        Array.isArray(drug.clinicalPearls)
            ? drug.clinicalPearls.join(" • ")
            : "-";

    document.getElementById("interactions").textContent =
        Array.isArray(drug.interactions)
            ? drug.interactions.join(" • ")
            : "-";

    document.getElementById("alerts").textContent =
        Array.isArray(drug.alerts)
            ? drug.alerts.join(" • ")
            : "-";

    document.getElementById("blackBox").textContent =
        drug.blackBox || "-";

}
loadDrugs();

function loadAgeOptions() {

    ageInput.innerHTML = "";

    if (ageUnit.value === "months") {

        ageInput.innerHTML += `<option value="0.02">👶 Neonate (0–28 Days)</option>`;

        for (let i = 1; i <= 11; i++) {

            ageInput.innerHTML += `
                <option value="${i / 12}">
                    👶 ${i} Month${i > 1 ? "s" : ""}
                </option>
            `;

        }

    } else {

        ageInput.innerHTML += `<option value="1">🧒 1 Year</option>`;

        for (let i = 2; i <= 18; i++) {

            ageInput.innerHTML += `
                <option value="${i}">
                    🧒 ${i} Years
                </option>
            `;

        }

    }

}
ageUnit.addEventListener("change", loadAgeOptions);

ageUnit.value = "months";
loadAgeOptions();
// ======================================================
// Emergency Drugs → Drug Information
// ======================================================

document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("emDrug")) return;

    const drug = drugs[e.target.dataset.drug];

    if (!drug) {

        alert("Drug not found.");

        return;

    }

    showDrugInfo(drug);

    drugInfoCard.style.display = "block";

    drugInfoCard.scrollIntoView({

        behavior: "smooth"

    });

});
