// ======================================================
// DoseCare v6.0
// Main Script
// ======================================================

"use strict";

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
