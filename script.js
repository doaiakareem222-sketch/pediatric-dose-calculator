"use strict";

/* ==========================================
   DoseCare AI v7
   Main Script
   Developed by Duaa Kareem
==========================================*/

/* ==========================================
   DOM Elements
==========================================*/

// Welcome
const welcomeScreen = document.getElementById("welcomeScreen");

// Calculator
const diseaseSelect = document.getElementById("disease");
const diseaseGuide = document.getElementById("diseaseGuide");

const searchInput = document.getElementById("searchDrug");

const drugSelect = document.getElementById("drug");

const strengthSelect = document.getElementById("strength");

const ageInput = document.getElementById("age");

const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculateBtn");

// Result Card
const resultCard = document.getElementById("resultCard");

const drugName = document.getElementById("drugName");

const doseMg = document.getElementById("doseMg");

const doseMl = document.getElementById("doseMl");

const frequency = document.getElementById("frequency");

const note = document.getElementById("note");

// Drug Information
const drugInfoCard = document.getElementById("drugInfoCard");

const genericName = document.getElementById("genericName");

const brandNames = document.getElementById("brandNames");

const category = document.getElementById("category");

const therapeuticClass = document.getElementById("therapeuticClass");

const pharmacologicalClass = document.getElementById("pharmacologicalClass");

const mechanism = document.getElementById("mechanism");

const indications = document.getElementById("indications");

const contraindications = document.getElementById("contraindications");

const warnings = document.getElementById("warnings");

const sideEffects = document.getElementById("sideEffects");

const pregnancy = document.getElementById("pregnancy");

const lactation = document.getElementById("lactation");

const doseRange = document.getElementById("doseRange");

const onset = document.getElementById("onset");

const duration = document.getElementById("duration");

const halfLife = document.getElementById("halfLife");

const proteinBinding = document.getElementById("proteinBinding");

const metabolism = document.getElementById("metabolism");

const elimination = document.getElementById("elimination");

const storage = document.getElementById("storage");

const monitoring = document.getElementById("monitoring");

const clinicalPearls = document.getElementById("clinicalPearls");

const interactions = document.getElementById("interactions");

const alerts = document.getElementById("alerts");

const blackBox = document.getElementById("blackBox");

// Clinical Alerts
const clinicalAlertCard = document.getElementById("clinicalAlertCard");

const clinicalAlertContent = document.getElementById("clinicalAlertContent");

// History
const historyContainer = document.getElementById("history");

// Dashboard
const calcCount = document.getElementById("calcCount");

const lastDrug = document.getElementById("lastDrug");
/* ==========================================
   Global Variables
==========================================*/

let calculationHistory = [];

let totalCalculations = 0;

let selectedDrug = null;
/* ==========================================
   Application Start
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});
/* ==========================================
   Initialize Application
==========================================*/

function initializeApp(){

    loadDrugList();

    initializeWelcome();

    attachEvents();

}
/* ==========================================
   Event Listeners
==========================================*/

function attachEvents(){

    diseaseSelect.addEventListener("change", filterDrugsByDisease);

    searchInput.addEventListener("input", searchDrugs);

    drugSelect.addEventListener("change", onDrugChange);

    calculateBtn.addEventListener("click", calculateDose);

}
/* ==========================================
   Welcome Screen
==========================================*/

function initializeWelcome(){

    setTimeout(() => {

        welcomeScreen.classList.add("hide");

    },2500);

}
/* ==========================================
   Load Drug List
==========================================*/

function loadDrugList(filteredDrugs = null){

    drugSelect.innerHTML = '<option value="">Select Drug</option>';

    const list = filteredDrugs || Object.values(drugs);

    list.forEach(drug=>{

        const option = document.createElement("option");

        option.value = drug.id;

        option.textContent = drug.name;

        drugSelect.appendChild(option);

    });

}
/* ==========================================
   Search Drugs
==========================================*/

function searchDrugs(){

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    if(keyword===""){

        loadDrugList();

        return;

    }

    const filtered = Object.values(drugs).filter(drug=>{

        const generic = drug.genericName.toLowerCase();

        const name = drug.name.toLowerCase();

        const brands = drug.brandNames
            .join(" ")
            .toLowerCase();

        return(

            generic.includes(keyword) ||

            name.includes(keyword) ||

            brands.includes(keyword)

        );

    });

    loadDrugList(filtered);

}
/* ==========================================
   Filter Drugs By Disease
==========================================*/

function filterDrugsByDisease(){

    const disease = diseaseSelect.value;

    if(disease===""){

        loadDrugList();

        return;

    }

    const filtered = Object.values(drugs).filter(drug=>

        drug.diseases.includes(disease)

    );

    loadDrugList(filtered);

} 
/* ==========================================
   Drug Selection
==========================================*/

function onDrugChange(){

    const drugId = drugSelect.value;

    if(!drugId){

        selectedDrug = null;

        strengthSelect.innerHTML =
        '<option value="">Select Strength</option>';

        resultCard.style.display = "none";
        drugInfoCard.style.display = "none";
        clinicalAlertCard.style.display = "none";

        return;

    }

    selectedDrug = drugs[drugId];

    loadStrengths();

    displayDrugInformation();

    displayClinicalAlerts();

}
/* ==========================================
   Load Drug Strengths
==========================================*/

function loadStrengths(){

    strengthSelect.innerHTML =
    '<option value="">Select Strength</option>';

    selectedDrug.strengths.forEach((strength,index)=>{

        const option = document.createElement("option");

        option.value = index;

        option.textContent = strength.name;

        strengthSelect.appendChild(option);

    });

}
/* ==========================================
   Display Drug Information
==========================================*/

function displayDrugInformation(){

    drugInfoCard.style.display = "block";

    genericName.textContent =
    selectedDrug.genericName || "-";

    brandNames.textContent =
    selectedDrug.brandNames.join(", ") || "-";

    category.textContent =
    selectedDrug.category || "-";

    therapeuticClass.textContent =
    selectedDrug.therapeuticClass || "-";

    pharmacologicalClass.textContent =
    selectedDrug.pharmacologicalClass || "-";

    mechanism.textContent =
    selectedDrug.mechanism || "-";

    indications.textContent =
    selectedDrug.indications || "-";

    contraindications.textContent =
    selectedDrug.contraindications || "-";

    warnings.textContent =
    selectedDrug.warnings || "-";

    sideEffects.textContent =
    selectedDrug.sideEffects || "-";

    pregnancy.textContent =
    selectedDrug.pregnancy || "-";

    lactation.textContent =
    selectedDrug.lactation || "-";

    doseRange.textContent =
    selectedDrug.doseRange || "-";

    onset.textContent =
    selectedDrug.onset || "-";

    duration.textContent =
    selectedDrug.duration || "-";

    halfLife.textContent =
    selectedDrug.halfLife || "-";

    proteinBinding.textContent =
    selectedDrug.proteinBinding || "-";

    metabolism.textContent =
    selectedDrug.metabolism || "-";

    elimination.textContent =
    selectedDrug.elimination || "-";

    storage.textContent =
    selectedDrug.storage || "-";

    monitoring.textContent =
    Array.isArray(selectedDrug.monitoring)
    ? selectedDrug.monitoring.join("\n")
    : "-";

    clinicalPearls.textContent =
    Array.isArray(selectedDrug.clinicalPearls)
    ? selectedDrug.clinicalPearls.join("\n")
    : "-";

    interactions.textContent =
    Array.isArray(selectedDrug.interactions)
    ? selectedDrug.interactions.join("\n")
    : "-";

    alerts.textContent =
    Array.isArray(selectedDrug.alerts)
    ? selectedDrug.alerts.join("\n")
    : "-";

    blackBox.textContent =
    selectedDrug.blackBox || "-";

}
/* ==========================================
   Clinical Alerts
==========================================*/

function displayClinicalAlerts(){

    if(

        !selectedDrug.alerts ||

        selectedDrug.alerts.length===0

    ){

        clinicalAlertCard.style.display="none";

        return;

    }

    clinicalAlertCard.style.display="block";

    clinicalAlertContent.innerHTML="";

    selectedDrug.alerts.forEach(alert=>{

        const p=document.createElement("p");

        p.textContent="⚠ " + alert;

        clinicalAlertContent.appendChild(p);

    });

}
/* ==========================================
   Calculate Dose
==========================================*/

function calculateDose(){

    if(!selectedDrug){

        alert("Please select a drug.");

        return;

    }

    if(strengthSelect.value===""){

        alert("Please select a strength.");

        return;

    }

    const age = Number(ageInput.value);

    const weight = Number(weightInput.value);

    if(!weight || weight<=0){

        alert("Please enter a valid weight.");

        return;

    }

    if(age < selectedDrug.minAge || age > selectedDrug.maxAge){

        alert(

            `This medicine is recommended for ages ${selectedDrug.minAge} - ${selectedDrug.maxAge} years.`

        );

        return;

    }

    const selectedStrength =

        selectedDrug.strengths[Number(strengthSelect.value)];

    let dose = weight * selectedDrug.mgPerKg;

    let noteText = "";

    if(selectedDrug.maxDose && dose > selectedDrug.maxDose){

        dose = selectedDrug.maxDose;

        noteText = "Maximum dose reached.";

    }

    const doseML =

        (dose / selectedStrength.concentration) * 5;

    displayResult(

        dose,

        doseML,

        noteText

    );

    updateDashboard();

    saveHistory(

        dose,

        doseML

    );

}
/* ==========================================
   Display Result
==========================================*/

function displayResult(

    dose,

    doseML,

    noteText

){

    resultCard.style.display = "block";

    drugName.textContent = selectedDrug.name;

    doseMg.textContent =

        dose.toFixed(1) + " mg";

    doseMl.textContent =

        doseML.toFixed(2) + " mL";

    frequency.textContent =

        selectedDrug.frequency;

    note.textContent =

        noteText || selectedDrug.notes || "-";

}
/* ==========================================
   Dashboard
==========================================*/

function updateDashboard(){

    totalCalculations++;

    calcCount.textContent = totalCalculations;

    lastDrug.textContent = selectedDrug.name;

}
/* ==========================================
   History
==========================================*/

function saveHistory(

    dose,

    doseML

){

    calculationHistory.unshift({

        drug:selectedDrug.name,

        dose,

        doseML

    });

    if(calculationHistory.length>10){

        calculationHistory.pop();

    }

    renderHistory();

}
/* ==========================================
   Render History
==========================================*/

function renderHistory(){

    if(calculationHistory.length===0){

        historyContainer.textContent =

        "No calculations yet.";

        return;

    }

    historyContainer.innerHTML = "";

    calculationHistory.forEach(item=>{

        const div = document.createElement("div");

        div.className = "history-item";

        div.innerHTML = `

        <strong>${item.drug}</strong><br>

        ${item.dose.toFixed(1)} mg

        (${item.doseML.toFixed(2)} mL)

        `;

        historyContainer.appendChild(div);

    });

}
