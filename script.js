"use strict";

/* ==========================================
   DoseCare AI
   Pediatric Dose Calculator
   Version 8.0
==========================================*/

console.clear();
console.log("DoseCare AI Started");

/* ==========================================
   DOM Elements
==========================================*/

const drugSelect = document.getElementById("drug");
const weightInput = document.getElementById("weight");
const ageInput = document.getElementById("age");
const calculateBtn = document.getElementById("calculateBtn");

const resultCard = document.getElementById("resultCard");

const drugNameResult = document.getElementById("drugName");
const doseMgResult = document.getElementById("doseMg");
const doseMlResult = document.getElementById("doseMl");
const frequencyResult = document.getElementById("frequency");
const noteResult = document.getElementById("note");
const strengthSelect = document.getElementById("strength");
/* ==========================================
   Global Variables
==========================================*/

let selectedDrug = null;
let selectedStrength = null;
/* ==========================================
   Initialize Application
==========================================*/

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {

    if (typeof drugs === "undefined") {

        console.error("Drug database not loaded.");

        alert("تعذر تحميل قاعدة بيانات الأدوية.");

        return;

    }

    loadDrugList();

    registerEvents();

    console.log("Application Ready");

}
/* ==========================================
   Register Events
==========================================*/

function registerEvents() {

    calculateBtn.addEventListener("click", calculateDose);

    drugSelect.addEventListener("change", onDrugChanged);

}
/* ==========================================
   Drug Selection Changed
==========================================*/

function onDrugChanged(){

    const drugId=drugSelect.value;

    if(!drugId){

        selectedDrug=null;

        strengthSelect.innerHTML="";

        return;

    }

    selectedDrug=drugs[drugId];

    loadStrengths(selectedDrug);

}
/* ==========================================
   Load Drug List
==========================================*/

function loadDrugList() {

    // تنظيف القائمة
    drugSelect.innerHTML = "";

    // أول خيار
    const defaultOption = document.createElement("option");

    defaultOption.value = "";
    defaultOption.textContent = "-- اختر الدواء --";

    drugSelect.appendChild(defaultOption);

    // ترتيب الأدوية أبجدياً
    const drugArray = Object.values(drugs).sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    drugArray.forEach(drug => {

        const option = document.createElement("option");

        option.value = drug.id;

        option.textContent = `${drug.name}`;

        drugSelect.appendChild(option);

    });

    console.log(`${drugArray.length} Drugs Loaded`);

}
/* ==========================================
   Load Strengths
==========================================*/

function loadStrengths(drug){

    strengthSelect.innerHTML="";

    if(!drug || !drug.strengths){

        return;

    }

    drug.strengths.forEach((strength,index)=>{

        const option=document.createElement("option");

        option.value=index;

        option.textContent=strength.name;

        strengthSelect.appendChild(option);

    });

}
/* ==========================================
   Validate Inputs
==========================================*/

function validateInputs() {

    const weight = parseFloat(weightInput.value);

    const age = parseFloat(ageInput.value);

    if (!selectedDrug) {

        alert("يرجى اختيار الدواء.");

        return false;

    }

    if (isNaN(weight) || weight <= 0) {

        alert("يرجى إدخال وزن صحيح.");

        weightInput.focus();

        return false;

    }

    if (isNaN(age) || age < 0) {

        alert("يرجى إدخال عمر صحيح.");

        ageInput.focus();

        return false;

    }

    // العمر المسموح للدواء
    if (age < selectedDrug.minAge || age > selectedDrug.maxAge) {

        alert(
            `هذا الدواء مخصص للأعمار بين ${selectedDrug.minAge} و ${selectedDrug.maxAge} سنة.`
        );

        return false;

    }

    return true;

}
/* ==========================================
   Get Preferred Strength
==========================================*/

function getSelectedStrength() {

    if (!selectedDrug.strengths ||
        selectedDrug.strengths.length === 0) {

        return null;

    }

    // حالياً أول تركيز
    return selectedDrug.strengths[0];

}
/* ==========================================
   Calculate Dose
==========================================*/

function calculateDose() {

    if (!validateInputs()) return;

    const drug = getSelectedDrug();

    const strength = getSelectedStrength();

    const weight = parseFloat(weightInput.value);

    let doseMg = drug.mgPerKg * weight;

    // الحد الأقصى للجرعة
    if (drug.maxDose && doseMg > drug.maxDose) {

        doseMg = drug.maxDose;

    }

    let doseMl = 0;

    if (strength) {

        doseMl = (doseMg / strength.concentration) * 5;

    }

    showResult({

        drug,
        strength,
        doseMg,
        doseMl

    });

}
/* ==========================================
   Show Result
==========================================*/

function showResult(result) {

    const {

        drug,
        strength,
        doseMg,
        doseMl

    } = result;

    resultCard.style.display = "block";

    drugNameResult.textContent = drug.name;

    doseMgResult.textContent =
        doseMg.toFixed(1) + " mg";

    doseMlResult.textContent =
        doseMl.toFixed(1) + " mL";

    frequencyResult.textContent =
        drug.frequency;

    noteResult.textContent =
        drug.notes || "";

    console.log(result);

}
/* ==========================================
   Reset Result
==========================================*/

function resetResult() {

    resultCard.style.display = "none";

}
/* ==========================================
   Format Number
==========================================*/

function formatNumber(value, digits = 1) {

    if (isNaN(value)) return "-";

    return Number(value).toFixed(digits);

}
/* ==========================================
   Calculate Volume
==========================================*/

function calculateVolume(doseMg, strength) {

    if (!strength) return 0;

    return (doseMg / strength.concentration) * 5;

}
/* ==========================================
   Apply Maximum Dose
==========================================*/

function applyMaximumDose(doseMg, drug) {

    if (!drug.maxDose) return doseMg;

    return Math.min(doseMg, drug.maxDose);

}
/* ==========================================
   Get Daily Maximum
==========================================*/

function getDailyMaximum(drug, weight) {

    if (!drug.doseRange) return null;

    // سيتم تطويرها لاحقاً حسب كل دواء
    return null;

}
function calculateDose() {

    if (!validateInputs()) return;

    const drug = getSelectedDrug();

    const strength = getSelectedStrength();

    const weight = parseFloat(weightInput.value);

    let doseMg = drug.mgPerKg * weight;

    doseMg = applyMaximumDose(doseMg, drug);

    const doseMl = calculateVolume(doseMg, strength);

    const result = {

        drug,

        strength,

        weight,

        age: parseFloat(ageInput.value),

        doseMg,

        doseMl

    };

    showResult(result);



}
/* ==========================================
   Selected Strength
==========================================*/

function getSelectedStrength(){

    if(!selectedDrug) return null;

    const index=parseInt(strengthSelect.value);

    return selectedDrug.strengths[index];

}
