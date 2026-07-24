"use strict";

/* =========================================
   DoseCare v6
========================================= */

console.log("DoseCare Started");

/* =========================================
   DOM Elements
========================================= */

const welcomeScreen = document.getElementById("welcomeScreen");

const diseaseSelect = document.getElementById("disease");

const searchInput = document.getElementById("searchDrug");

const drugSelect = document.getElementById("drug");

const drug2Select = document.getElementById("drug2");

const strengthSelect = document.getElementById("strength");

const ageInput = document.getElementById("age");

const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculate");

const result = document.getElementById("result");

const drugCard = document.getElementById("drugCard");

const clinicalAlert = document.getElementById("clinicalAlert");

const historyBox = document.getElementById("history");

const calcCount = document.getElementById("calcCount");

const lastDrug = document.getElementById("lastDrug");

/* =========================================
   Welcome Screen Test
========================================= */

window.addEventListener("load", () => {

alert("JavaScript Works");

setTimeout(() => {

welcomeScreen.classList.add("hide");

}, 2000);

});
/* =========================================
   Load Drugs
========================================= */

function loadDrugs() {

    if (typeof drugs === "undefined") {

        console.error("drugs.js not loaded");

        return;

    }

    drugSelect.innerHTML =
        '<option value="">Select Drug</option>';

    if (drug2Select) {

        drug2Select.innerHTML =
            '<option value="">None</option>';

    }

    Object.keys(drugs).forEach((id) => {

        const drug = drugs[id];

        // Drug List
        const option = document.createElement("option");
        option.value = id;
        option.textContent = drug.name;
        drugSelect.appendChild(option);

        // Second Drug List
        if (drug2Select) {

            const option2 = document.createElement("option");
            option2.value = id;
            option2.textContent = drug.name;
            drug2Select.appendChild(option2);

        }

    });

}

loadDrugs();
