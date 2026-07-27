
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
