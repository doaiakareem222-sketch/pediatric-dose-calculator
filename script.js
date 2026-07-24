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

function window.addEventListener("DOMContentLoaded", () => {

    loadDrugs();

});
console.log(drugs);
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

        showClinicalAlerts(drug);
 
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
// ===============================
// Disease Guide
// ===============================

diseaseSelect.addEventListener("change", () => {

    const guide =
    document.getElementById("diseaseGuide");

    if (!guide) return;

    const disease =
    diseaseSelect.value;

    if (!disease || !treatments[disease]) {

        guide.style.display = "none";

        guide.innerHTML = "";

        return;

    }

    guide.style.display = "block";

    guide.innerHTML = `

<h3>${treatments[disease].title}</h3>

<p>

<b>First Line:</b>

${treatments[disease].first}

</p>

<p>

<b>Alternative:</b>

${treatments[disease].second}

</p>

`;

});


// ===============================
// Clinical Alerts
// ===============================

function showClinicalAlerts(drug){

    if(!clinicalAlert) return;

    if(

        !drug.alerts ||

        drug.alerts.length===0

    ){

        clinicalAlert.style.display="none";

        return;

    }

    clinicalAlert.style.display="block";

    clinicalAlert.innerHTML=`

<h3>Clinical Alerts</h3>

<ul>

${drug.alerts.map(alert=>`

<li>${alert}</li>

`).join("")}

</ul>

`;

}
// ===============================
// Dose Calculator
// ===============================

calculateBtn.addEventListener("click", () => {

    const age = Number(ageInput.value);

    const weight = Number(weightInput.value);

    const drugId = drugSelect.value;

    const strengthIndex = strengthSelect.value;

    if (!age) {

        result.innerHTML = `
<div class="warning-box">
Please enter age.
</div>`;

        return;

    }

    if (!weight) {

        result.innerHTML = `
<div class="warning-box">
Please enter weight.
</div>`;

        return;

    }

    if (!drugId) {

        result.innerHTML = `
<div class="warning-box">
Please select a drug.
</div>`;

        return;

    }

    if (strengthIndex === "") {

        result.innerHTML = `
<div class="warning-box">
Please select strength.
</div>`;

        return;

    }

    const drug = drugs[drugId];

    if (

        age < drug.minAge ||

        age > drug.maxAge

    ) {

        result.innerHTML = `
<div class="warning-box">

Drug is not recommended for this age.

</div>`;

        return;

    }

    const concentration =
    drug.strengths[strengthIndex].concentration;

    let doseMg =
    weight * drug.mgPerKg;

    let warning = "";

    if (doseMg > drug.maxDose) {

        doseMg = drug.maxDose;

        warning = `

<div class="warning-box">

Maximum dose reached.

</div>

`;

    }

    const doseMl =
    (doseMg / concentration) * 5;

    result.innerHTML = `

<div class="result-card">

<h2>${drug.name}</h2>

<div class="result-item">

<span>Age</span>

<strong>${age} Years</strong>

</div>

<div class="result-item">

<span>Weight</span>

<strong>${weight} Kg</strong>

</div>

<div class="result-item">

<span>Dose</span>

<strong>${doseMg.toFixed(1)} mg</strong>

</div>

<div class="result-item">

<span>Volume</span>

<strong>${doseMl.toFixed(1)} mL</strong>

</div>

<div class="result-item">

<span>Frequency</span>

<strong>${drug.frequency}</strong>

</div>

${warning}

</div>

`;

});
