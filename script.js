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
const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculateBtn");

// Result

const resultCard = document.getElementById("resultCard");

const drugName = document.getElementById("drugName");
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

searchDrug.addEventListener("input",()=>{

    const keyword = searchDrug.value.trim().toLowerCase();

    const filtered = allDrugs.filter(drug=>{

        return (

            drug.name.toLowerCase().includes(keyword)

            ||

            drug.genericName.toLowerCase().includes(keyword)

            ||

            drug.brandNames.some(brand=>

                brand.toLowerCase().includes(keyword)

            )

        );

    });

    loadDrugs(keyword ? filtered : allDrugs);

});


// ======================================================
// Filter By Disease
// ======================================================

diseaseSelect.addEventListener("change",()=>{

    const disease = diseaseSelect.value;

    strengthSelect.innerHTML =
    `<option value="">Select Strength</option>`;

    if(!disease){

        diseaseGuide.innerHTML = "";

        loadDrugs();

        return;

    }

    const filtered = allDrugs.filter(drug=>

        drug.diseases.includes(disease)

    );

    loadDrugs(filtered);

    diseaseGuide.innerHTML = `
        <strong>${filtered.length}</strong>
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
if (selectedDrug) {
    showDrugInfo(selectedDrug);
}
    selectedDrug.strengths.forEach(strength => {

        const option = document.createElement("option");

        option.value = strength.concentration;

        option.textContent = strength.name;

        strengthSelect.appendChild(option);

    });

});


// ======================================================
// Dose Calculation
// ======================================================

calculateBtn.addEventListener("click", () => {

    const drug = drugs[drugSelect.value];

    const weight = parseFloat(weightInput.value);

    const concentration = parseFloat(strengthSelect.value);

    if (!drug) {

        alert("Please select a drug.");

        return;

    }

    if (!weight || weight <= 0) {

        alert("Please enter patient's weight.");

        return;

    }

    let dose = weight * drug.mgPerKg;

    if (drug.maxDose && dose > drug.maxDose) {

        dose = drug.maxDose;

    }

    let doseMl = "-";

    if (concentration) {

        doseMl = ((dose / concentration) * 5).toFixed(2);

    }

    resultCard.style.display = "block";

    drugName.textContent = drug.name;

    doseMg.textContent = dose.toFixed(2) + " mg";

    doseMl.textContent =
        concentration ? doseMl + " mL" : "-";

    frequency.textContent = drug.frequency;

    note.textContent = drug.notes || "-";

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
// ======================================================
// Side Menu
// ======================================================

const menuBtn = document.getElementById("menuBtn");

const sideMenu = document.getElementById("sideMenu");

const menuOverlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {

    sideMenu.classList.add("open");

    menuOverlay.classList.add("show");

});

menuOverlay.addEventListener("click", () => {

    sideMenu.classList.remove("open");

    menuOverlay.classList.remove("show");

}); 

// ======================================================
// Side Menu
// ======================================================

const languageBtn = document.getElementById("languageBtn");
const languageMenu = document.getElementById("languageMenu");

const themeBtn = document.getElementById("themeBtn");
const themeMenu = document.getElementById("themeMenu");

languageBtn.addEventListener("click", () => {

    languageMenu.classList.toggle("show");

});

themeBtn.addEventListener("click", () => {

    themeMenu.classList.toggle("show");

});

// ======================================================
// Theme
// ======================================================

const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");
console.log(darkBtn);
console.log(lightBtn);
if(darkBtn){

darkBtn.addEventListener("click",()=>{

    document.body.classList.remove("light");

    localStorage.setItem("theme","dark");

});

}


if(lightBtn){

lightBtn.addEventListener("click",()=>{

    document.body.classList.add("light");

    localStorage.setItem("theme","light");

});

}
