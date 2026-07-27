"use strict";

/* ==========================================
   DoseCare AI
   Pediatric Dose Calculator
   Version 7.0
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
/* ==========================================
   Load Drugs
==========================================*/

function loadDrugs() {

    if (typeof drugs === "undefined") {

        console.error("Drug database not found.");

        return;

    }

    drugSelect.innerHTML =
        '<option value="">اختر الدواء</option>';

    Object.keys(drugs).forEach(key => {

        const option = document.createElement("option");

        option.value = key;

        option.textContent =
            drugs[key].arabic + " (" + drugs[key].name + ")";

        drugSelect.appendChild(option);

    });

}
/* ==========================================
   Selected Drug
==========================================*/

function getDrug() {

    const id = drugSelect.value;

    if (!id) return null;

    return drugs[id];

}
/* ==========================================
   Validation
==========================================*/

function validateInputs() {

    const drug = getDrug();

    const weight = parseFloat(weightInput.value);

    const age = parseFloat(ageInput.value);

    if (!drug) {

        alert("يرجى اختيار الدواء.");

        return false;

    }

    if (isNaN(weight) || weight <= 0) {

        alert("يرجى إدخال وزن صحيح.");

        return false;

    }

    if (isNaN(age) || age < 0) {

        alert("يرجى إدخال عمر صحيح.");

        return false;

    }

    return true;

}
/* ==========================================
   App Start
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    loadDrugs();

    console.log("Application Ready");

});
/* ==========================================
   Dose Calculation Engine
==========================================*/

function calculateDose() {

    if (!validateInputs()) return;

    const drug = getDrug();

    const weight = parseFloat(weightInput.value);

    // حساب الجرعة بالمليغرام
    let doseMg = drug.mgPerKg * weight;

    // تطبيق الحد الأقصى للجرعة إذا وجد
    if (drug.maxDose && doseMg > drug.maxDose) {
        doseMg = drug.maxDose;
    }

    // إرسال النتيجة للعرض
    showResult(drug, doseMg);

}
/* ==========================================
   Convert mg → mL
==========================================*/

function calculateVolume(doseMg, drug) {

    if (!drug.strengths || drug.strengths.length === 0) {

        return 0;

    }

    const concentration = drug.strengths[0].concentration;

    return ((doseMg / concentration) * 5);

}
/* ==========================================
   Show Result
==========================================*/

function showResult(drug, doseMg) {

    const volume = calculateVolume(doseMg, drug);

    drugNameResult.textContent =
        drug.arabic + " (" + drug.name + ")";

    doseMgResult.textContent =
        doseMg.toFixed(1) + " mg";

    doseMlResult.textContent =
        volume.toFixed(1) + " mL";

    frequencyResult.textContent =
        drug.frequency;

    noteResult.textContent =
        drug.note || "-";

    resultCard.style.display = "block";

}
/* ==========================================
   Events
==========================================*/

calculateBtn.addEventListener("click", calculateDose);
