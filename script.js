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

const modal = document.getElementById("drugInfoModal");
const modalContent = document.getElementById("modalBody");

/* =========================================
   Welcome Screen
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (welcomeScreen) {
            welcomeScreen.classList.add("hide");
        }

        const app = document.getElementById("mainApp");

        if (app) {
            app.classList.add("show");
        }

    }, 2200);

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

    Object.keys(drugs).forEach((id) => {

        const option = document.createElement("option");

        option.value = id;
        option.textContent = drugs[id].name;

        drugSelect.appendChild(option);

    });

}

loadDrugs();

/* =========================================
   Search Drugs
========================================= */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const keyword = searchInput.value.toLowerCase();

        drugSelect.innerHTML =
            '<option value="">Select Drug</option>';

        Object.keys(drugs).forEach((id) => {

            const drug = drugs[id];

            if (

                drug.name.toLowerCase().includes(keyword) ||

                (drug.genericName &&
                 drug.genericName.toLowerCase().includes(keyword))

            ) {

                const option = document.createElement("option");

                option.value = id;
                option.textContent = drug.name;

                drugSelect.appendChild(option);

            }

        });

    });

}/* =========================================
   Drug Selection
========================================= */

drugSelect.addEventListener("change", () => {

    const drugId = drugSelect.value;

    loadStrengths(drugId);

    showDrugInformation(drugs[drugId]);

});

/* =========================================
   Load Strengths
========================================= */

function loadStrengths(drugId) {

    strengthSelect.innerHTML =
        '<option value="">Select Strength</option>';

    const drug = drugs[drugId];

    if (!drug) return;

    drug.strengths.forEach((strength, index) => {

        const option = document.createElement("option");

        option.value = index;
        option.textContent = strength.name;

        strengthSelect.appendChild(option);

    });

}

/* =========================================
   Disease Filter
========================================= */

if (diseaseSelect) {

    diseaseSelect.addEventListener("change", () => {

        const disease = diseaseSelect.value;

        drugSelect.innerHTML =
            '<option value="">Select Drug</option>';

        Object.keys(drugs).forEach((id) => {

            const drug = drugs[id];

            if (
                disease === "" ||
                (drug.diseases &&
                 drug.diseases.includes(disease))
            ) {

                const option =
                    document.createElement("option");

                option.value = id;
                option.textContent = drug.name;

                drugSelect.appendChild(option);

            }

        });

        strengthSelect.innerHTML =
            '<option value="">Select Strength</option>';

        drugCard.style.display = "none";

    });

}

/* =========================================
   Show Drug Information
========================================= */

function showDrugInformation(drug) {

    const card =
        document.getElementById("drugCard");

    const content =
        document.getElementById("drugInfoContent");

    if (!drug) {

        card.style.display = "none";

        return;

    }

    card.style.display = "block";

    content.innerHTML = `

<div class="info-item">
<div class="info-title">Generic Name</div>
<div class="info-text">${drug.genericName || "-"}</div>
</div>

<div class="info-item">
<div class="info-title">Brand Names</div>
<div class="info-text">
${drug.brandNames ? drug.brandNames.join(", ") : "-"}
</div>
</div>

<div class="info-item">
<div class="info-title">Mechanism</div>
<div class="info-text">${drug.mechanism || "-"}</div>
</div>

<div class="info-item">
<div class="info-title">Indications</div>
<div class="info-text">${drug.indications || "-"}</div>
</div>

<div class="info-item">
<div class="info-title">Contraindications</div>
<div class="info-text">${drug.contraindications || "-"}</div>
</div>

<div class="info-item">
<div class="info-title">Side Effects</div>
<div class="info-text">${drug.sideEffects || "-"}</div>
</div>

<div class="info-item">
<div class="info-title">Warnings</div>
<div class="info-text">${drug.warnings || "-"}</div>
</div>

<div class="info-item">
<div class="info-title">Clinical Notes</div>
<div class="info-text">${drug.notes || "-"}</div>
</div>

`;

}
/* =========================================
   Dose Calculator
========================================= */

calculateBtn.addEventListener("click", () => {

    const age = Number(ageInput.value);
    const weight = Number(weightInput.value);
    const drugId = drugSelect.value;
    const strengthIndex = strengthSelect.value;

    if (!age) {
        alert("Enter Age");
        return;
    }

    if (!weight) {
        alert("Enter Weight");
        return;
    }

    if (!drugId) {
        alert("Select Drug");
        return;
    }

    if (strengthIndex === "") {
        alert("Select Strength");
        return;
    }

    const drug = drugs[drugId];

    if (
        age < drug.minAge ||
        age > drug.maxAge
    ) {

        result.innerHTML = `

<div class="warning-box">
This drug is not suitable for this age.
</div>

`;

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

    saveHistory(
        drug.name,
        weight,
        doseMg,
        doseMl
    );

    loadHistory();

    updateDashboard();

});

/* =========================================
   Save History
========================================= */

function saveHistory(drugName, weight, doseMg, doseMl){

    let history =
        JSON.parse(localStorage.getItem("history")) || [];

    history.unshift({

        drug: drugName,
        weight: weight,
        dose: doseMg.toFixed(1),
        volume: doseMl.toFixed(1),
        date: new Date().toLocaleDateString()

    });

    history = history.slice(0,5);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

}

/* =========================================
   Load History
========================================= */

function loadHistory(){

    if(!historyBox) return;

    const history =
        JSON.parse(localStorage.getItem("history")) || [];

    historyBox.innerHTML =
        "<h2>Recent Calculations</h2>";

    if(history.length===0){

        historyBox.innerHTML +=
            "<p>No calculations yet.</p>";

        return;

    }

    history.forEach(item=>{

        historyBox.innerHTML += `

<div class="history-item">

<b>${item.drug}</b><br>

Weight : ${item.weight} Kg<br>

Dose : ${item.dose} mg<br>

Volume : ${item.volume} mL<br>

${item.date}

</div>

`;

    });

}

/* =========================================
   Dashboard
========================================= */

function updateDashboard(){

    const history =
        JSON.parse(localStorage.getItem("history")) || [];

    if(calcCount){

        calcCount.textContent =
            history.length;

    }

    if(lastDrug){

        lastDrug.textContent =
            history.length
            ? history[0].drug
            : "-";

    }

}

loadHistory();
updateDashboard();
/* =========================================
   Drug Information Modal
========================================= */

function showDrugInfo() {

    const drugId = drugSelect.value;

    if (!drugId) return;

    const drug = drugs[drugId];

    modal.style.display = "block";

    modalContent.innerHTML = `

<h2>${drug.name}</h2>

<p><b>Category:</b> ${drug.category}</p>

<hr>

<p><b>Mechanism</b></p>
<p>${drug.mechanism}</p>

<hr>

<p><b>Indications</b></p>
<p>${drug.indications}</p>

<hr>

<p><b>Contraindications</b></p>
<p>${drug.contraindications}</p>

<hr>

<p><b>Side Effects</b></p>
<p>${drug.sideEffects}</p>

<hr>

<p><b>Pregnancy</b></p>
<p>${drug.pregnancy}</p>

<hr>

<p><b>Lactation</b></p>
<p>${drug.lactation}</p>

<hr>

<p><b>Storage</b></p>
<p>${drug.storage}</p>

<hr>

<p><b>Clinical Notes</b></p>
<p>${drug.notes}</p>

`;

}

/* =========================================
   Close Modal
========================================= */

const closeModal =
document.getElementById("closeModal");

if (closeModal) {

    closeModal.onclick = () => {

        modal.style.display = "none";

    };

}

window.onclick = (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

};

/* =========================================
   App Initialization
========================================= */

window.addEventListener("DOMContentLoaded", () => {

    console.log("DoseCare Ready ✅");

    loadDrugs();
    loadHistory();
    updateDashboard();

});

/* =========================================
   Service Worker
========================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./sw.js")
            .then(() => {

                console.log("Service Worker Registered");

            })
            .catch((err) => {

                console.log(err);

            });

    });

}
