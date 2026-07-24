// ======================================================
// DoseCare v6.0
// Main Script
// ======================================================

"use strict";

// ===============================
// DOM Elements
// ===============================

const splash = document.getElementById("splash");

const diseaseSelect = document.getElementById("disease");

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

const dashboard = {

calcCount: document.getElementById("calcCount"),

lastDrug: document.getElementById("lastDrug")

};

const modal = document.getElementById("drugInfoModal");

const modalContent = document.getElementById("drugInfoContent");

const closeModal = document.getElementById("closeModal");

// ===============================
// App Info
// ===============================

const APP = {

name: "DoseCare",

version: "6.0"

};

console.log(`${APP.name} ${APP.version} Loaded`);
// ===============================
// Load Drugs
// ===============================

function loadDrugs() {

    if (typeof drugs === "undefined") {

        console.error("drugs.js not loaded");

        return;

    }

    drugSelect.innerHTML =
    '<option value="">Select Drug</option>';

    drug2Select.innerHTML =
    '<option value="">None</option>';

    Object.keys(drugs).forEach(id => {

        const option1 = document.createElement("option");

        option1.value = id;

        option1.textContent = drugs[id].name;

        drugSelect.appendChild(option1);

        const option2 = document.createElement("option");

        option2.value = id;

        option2.textContent = drugs[id].name;

        drug2Select.appendChild(option2);

    });

}

loadDrugs();


// ===============================
// Drug Search
// ===============================

searchInput.addEventListener("input", () => {

    const keyword =
    searchInput.value.toLowerCase().trim();

    drugSelect.innerHTML =
    '<option value="">Select Drug</option>';

    Object.keys(drugs).forEach(id => {

        const drug = drugs[id];

        if (

            keyword === "" ||

            drug.name.toLowerCase().includes(keyword)

        ) {

            const option = document.createElement("option");

            option.value = id;

            option.textContent = drug.name;

            drugSelect.appendChild(option);

        }

    });

});


// ===============================
// Drug Change
// ===============================

drugSelect.addEventListener("change", () => {

    strengthSelect.innerHTML =
    '<option value="">Select Strength</option>';

    const drug = drugs[drugSelect.value];

    if (!drug) {

        drugCard.style.display = "none";

        return;

    }

    drug.strengths.forEach((strength, index) => {

        const option = document.createElement("option");

        option.value = index;

        option.textContent = strength.name;

        strengthSelect.appendChild(option);

    });

    drugCard.style.display = "block";

    drugCard.innerHTML = `

<h3>${drug.name}</h3>

<p><b>Category:</b> ${drug.category}</p>

<p><b>Dose:</b> ${drug.mgPerKg} mg/kg</p>

<p><b>Frequency:</b> ${drug.frequency}</p>

<p><b>Maximum:</b> ${drug.maxDose} mg</p>

<p>${drug.notes}</p>

`;

});
