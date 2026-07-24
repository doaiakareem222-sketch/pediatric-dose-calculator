// ======================================================
// DoseCare v6.0
// Main Script
// ======================================================

"use strict";
console.log("Script Started");

console.log(typeof drugs);

console.log(drugs);
// =========================================
// DOM Elements
// =========================================

const splash = document.getElementById("splash");

const diseaseSelect = document.getElementById("disease");

const diseaseGuide = document.getElementById("diseaseGuide");

const searchInput = document.getElementById("searchDrug");

const drugSelect = document.getElementById("drug");

const strengthSelect = document.getElementById("strength");

const drug2Select = document.getElementById("drug2");

const ageInput = document.getElementById("age");

const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculate");

const result = document.getElementById("result");

const drugCard = document.getElementById("drugCard");

const clinicalAlert = document.getElementById("clinicalAlert");

const historyBox = document.getElementById("history");

const calcCount = document.getElementById("calcCount");

const lastDrug = document.getElementById("lastDrug");

const modal = document.getElementById("drugInfoModal");

const modalContent = document.getElementById("drugInfoContent");

const closeModal = document.getElementById("closeModal");

// =========================================
// App Information
// =========================================

const APP = {

name: "DoseCare",

version: "6.0",

developer: "Duaa"

};

console.log(`${APP.name} ${APP.version} Loaded Successfully`);

// =========================================
// Global Variables
// =========================================

let selectedDrug = null;

let selectedStrength = null;

// =========================================
// Load Drugs
// =========================================

function loadDrugs() {

    if (typeof drugs === "undefined") {

        console.error("❌ drugs.js not loaded");

        return;

    }

    drugSelect.innerHTML =
        '<option value="">Select Drug</option>';

    drug2Select.innerHTML =
        '<option value="">None</option>';

    Object.keys(drugs).forEach((id) => {

        const drug = drugs[id];

        // القائمة الرئيسية
        const option1 = document.createElement("option");
        option1.value = id;
        option1.textContent = drug.name;
        drugSelect.appendChild(option1);

        // قائمة المقارنة
        const option2 = document.createElement("option");
        option2.value = id;
        option2.textContent = drug.name;
        drug2Select.appendChild(option2);

    });

 console.log("Script Started");

console.log(typeof drugs);

console.log(drugs); Loaded :", Object.keys(drugs).length);

}

// =========================================
// Start App
// =========================================

window.addEventListener("DOMContentLoaded", () => {

    loadDrugs();

});
