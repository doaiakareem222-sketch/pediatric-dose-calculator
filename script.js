// ======================================================
// DoseCare v5.0
// Main Script
// ======================================================

"use strict";

// ========================================
// DOM Elements
// ========================================

const drugSelect = document.getElementById("drug");
const drug2Select = document.getElementById("drug2");

const strengthSelect = document.getElementById("strength");
const diseaseSelect = document.getElementById("disease");

const ageInput = document.getElementById("age");
const weightInput = document.getElementById("weight");

const searchInput = document.getElementById("searchDrug");

const calculateBtn = document.getElementById("calculate");

const result = document.getElementById("result");

const drugCard = document.getElementById("drugCard");

const clinicalAlert = document.getElementById("clinicalAlert");

const historyBox = document.getElementById("history");

const dashboard = {

calcCount:document.getElementById("calcCount"),

lastDrug:document.getElementById("lastDrug")

};

const modal = document.getElementById("drugInfoModal");

const modalContent = document.getElementById("drugInfoContent");

const infoBtn = document.getElementById("info");

const splash = document.getElementById("splash");

// ========================================
// Application
// ========================================

const APP = {

name:"DoseCare",

version:"5.0",

developer:"Duaa"

};

console.log(`${APP.name} v${APP.version} Loaded`);
// ========================================
// Load Drugs
// ========================================

function loadDrugs() {

    drugSelect.innerHTML =
    '<option value="">اختر الدواء</option>';

    drug2Select.innerHTML =
    '<option value="">بدون</option>';

    for (const id in drugs) {

        const drug = drugs[id];

        const option1 = document.createElement("option");

        option1.value = id;

        option1.textContent = drug.name;

        drugSelect.appendChild(option1);

        const option2 = document.createElement("option");

        option2.value = id;

        option2.textContent = drug.name;

        drug2Select.appendChild(option2);

    }

}

loadDrugs();


// ========================================
// Drug Search
// ========================================

searchInput.addEventListener("input", () => {

    const keyword =
    searchInput.value.toLowerCase().trim();

    if(keyword==="") return;

    for(const option of drugSelect.options){

        if(option.value==="") continue;

        if(option.textContent.toLowerCase().includes(keyword)){

            drugSelect.value = option.value;

            drugSelect.dispatchEvent(
                new Event("change")
            );

            break;

        }

    }

});


// ========================================
// Disease Guide
// ========================================

diseaseSelect.addEventListener("change",()=>{

    const guide =
    document.getElementById("diseaseGuide");

    const disease =
    diseaseSelect.value;

    if(
        !guide ||
        !treatments[disease]
    ){

        if(guide)
        guide.style.display="none";

        return;

    }

    guide.style.display="block";

    guide.innerHTML=`

<h3>${treatments[disease].title}</h3>

<p><b>First Line:</b>
${treatments[disease].first}
</p>

<p><b>Alternative:</b>
${treatments[disease].second}
</p>

`;

});
// ========================================
// Drug Change
// ========================================

drugSelect.addEventListener("change", () => {

    strengthSelect.innerHTML =
    '<option value="">اختر التركيز</option>';

    const drug = drugs[drugSelect.value];

    if (!drug) {

        drugCard.style.display = "none";

        if (clinicalAlert)
            clinicalAlert.style.display = "none";

        return;

    }

    // تعبئة التراكيز

    drug.strengths.forEach((strength, index) => {

        const option = document.createElement("option");

        option.value = index;

        option.textContent = strength.name;

        strengthSelect.appendChild(option);

    });

    // عرض بطاقة الدواء

    drugCard.style.display = "block";

    drugCard.innerHTML = `

<h3>${drug.name}</h3>

<p><strong>التصنيف:</strong> ${drug.category}</p>

<p><strong>الجرعة:</strong> ${drug.mgPerKg} mg/kg</p>

<p><strong>التكرار:</strong> ${drug.frequency}</p>

<p><strong>الحد الأعلى:</strong> ${drug.maxDose} mg</p>

<p><strong>العمر:</strong> ${drug.minAge} - ${drug.maxAge} سنة</p>

<div class="info-row">

<b>ملاحظات:</b><br>

${drug.notes}

</div>

`;

    // Clinical Alert

    if (clinicalAlert) {

        if (drug.alerts && drug.alerts.length > 0) {

            clinicalAlert.style.display = "block";

            clinicalAlert.innerHTML = `

<h3>Clinical Alerts</h3>

<ul>

${drug.alerts
.map(alert => `<li>${alert}</li>`)
.join("")}

</ul>

`;

        } else {

            clinicalAlert.style.display = "none";

        }

    }

});
// ========================================
// Dose Calculator
// ========================================

calculateBtn.addEventListener("click", () => {

    const age = Number(ageInput.value);
    const weight = Number(weightInput.value);

    const drugId = drugSelect.value;
    const strengthIndex = strengthSelect.value;

    const secondDrug = drug2Select.value;

    // =====================
    // Validation
    // =====================

    if (!age) {

        result.innerHTML = `
<div class="warning-box">
يرجى إدخال العمر.
</div>`;

        return;
    }

    if (!weight) {

        result.innerHTML = `
<div class="warning-box">
يرجى إدخال الوزن.
</div>`;

        return;
    }

    if (!drugId) {

        result.innerHTML = `
<div class="warning-box">
يرجى اختيار الدواء.
</div>`;

        return;
    }

    if (strengthIndex === "") {

        result.innerHTML = `
<div class="warning-box">
يرجى اختيار التركيز.
</div>`;

        return;
    }

    const drug = drugs[drugId];

    // =====================
    // Age Check
    // =====================

    if (
        age < drug.minAge ||
        age > drug.maxAge
    ) {

        result.innerHTML = `
<div class="warning-box">

هذا الدواء غير مناسب لهذا العمر.

</div>`;

        return;

    }

    // =====================
    // Dose Calculation
    // =====================

    const concentration =
    drug.strengths[strengthIndex].concentration;

    let doseMg =
    weight * drug.mgPerKg;

    let warning = "";

    if (doseMg > drug.maxDose) {

        doseMg = drug.maxDose;

        warning = `

<div class="warning-box">

تم اعتماد الحد الأعلى للجرعة.

</div>

`;

    }

    const doseML =
    (doseMg / concentration) * 5;

    const dailyDose =
    doseMg * getFrequencyNumber(drug.frequency);

    // =====================
    // Interaction
    // =====================

    let interaction = "";

    if (secondDrug) {

        const key1 =
        drugId + "-" + secondDrug;

        const key2 =
        secondDrug + "-" + drugId;

        interaction =
        interactions[key1] ||
        interactions[key2] ||
        "لا يوجد تداخل دوائي مهم.";

    }

    // =====================
    // Result
    // =====================

    result.innerHTML = `

<div class="result-card">

<h2>${drug.name}</h2>

<div class="result-item">
<span>العمر</span>
<strong>${age} سنة</strong>
</div>

<div class="result-item">
<span>الوزن</span>
<strong>${weight} kg</strong>
</div>

<div class="result-item">
<span>التركيز</span>
<strong>${drug.strengths[strengthIndex].name}</strong>
</div>

<div class="result-item">
<span>الجرعة</span>
<strong>${doseMg.toFixed(1)} mg</strong>
</div>

<div class="result-item">
<span>الحجم</span>
<strong>${doseML.toFixed(1)} mL</strong>
</div>

<div class="result-item">
<span>الجرعة اليومية</span>
<strong>${dailyDose.toFixed(1)} mg/day</strong>
</div>

<div class="result-item">
<span>التكرار</span>
<strong>${drug.frequency}</strong>
</div>

${warning}

${secondDrug ? `

<div class="clinical-alert">

<h3>Drug Interaction</h3>

<p>${interaction}</p>

</div>

` : ""}

</div>

`;

    saveHistory(

        drug.name,

        weight,

        doseMg,

        doseML

    );

});
// ========================================
// Save History
// ========================================

function saveHistory(drug, weight, dose, ml) {

    let history =
    JSON.parse(localStorage.getItem("history")) || [];

    history.unshift({

        drug:drug,

        weight:weight,

        dose:dose.toFixed(1),

        ml:ml.toFixed(1),

        date:new Date().toLocaleDateString()

    });

    history = history.slice(0,5);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    let count =
    Number(localStorage.getItem("calcCount")) || 0;

    count++;

    localStorage.setItem("calcCount",count);

    localStorage.setItem("lastDrug",drug);

    loadHistory();

    updateDashboard();

}


// ========================================
// Load History
// ========================================

function loadHistory(){

    if(!historyBox) return;

    const history =
    JSON.parse(localStorage.getItem("history")) || [];

    historyBox.innerHTML="<h2>آخر العمليات</h2>";

    if(history.length===0){

        historyBox.innerHTML +=
        "<p>لا توجد عمليات حتى الآن.</p>";

        return;

    }

    history.forEach(item=>{

        historyBox.innerHTML += `

<div class="history-item">

<b>${item.drug}</b><br>

الوزن : ${item.weight} kg<br>

الجرعة : ${item.dose} mg<br>

الحجم : ${item.ml} mL<br>

${item.date}

</div>

`;

    });

}

loadHistory();


// ========================================
// Dashboard
// ========================================

function updateDashboard(){

    if(dashboard.calcCount){

        dashboard.calcCount.textContent =
        localStorage.getItem("calcCount") || 0;

    }

    if(dashboard.lastDrug){

        dashboard.lastDrug.textContent =
        localStorage.getItem("lastDrug") || "-";

    }

}

updateDashboard();


// ========================================
// Frequency Helper
// ========================================

function getFrequencyNumber(freq){

    if(freq.includes("4")) return 6;

    if(freq.includes("6")) return 4;

    if(freq.includes("8")) return 3;

    if(freq.includes("12")) return 2;

    if(freq.includes("مرة")) return 1;

    return 1;

}
// ========================================
// Drug Information
// ========================================

if(infoBtn){

infoBtn.addEventListener("click",()=>{

if(!drugSelect.value){

alert("اختر دواء أولاً");

return;

}

const drug=drugs[drugSelect.value];

modalContent.innerHTML=`

<h2>${drug.name}</h2>

<p><b>التصنيف:</b> ${drug.category}</p>

<p><b>آلية العمل:</b><br>${drug.mechanism}</p>

<p><b>دواعي الاستعمال:</b><br>${drug.indications}</p>

<p><b>موانع الاستعمال:</b><br>${drug.contraindications}</p>

<p><b>الآثار الجانبية:</b><br>${drug.sideEffects}</p>

<p><b>الحمل:</b><br>${drug.pregnancy}</p>

<p><b>التخزين:</b><br>${drug.storage}</p>

<p><b>الملاحظات:</b><br>${drug.notes}</p>

`;

modal.style.display="block";

});

}


// ========================================
// Close Modal
// ========================================

const closeModal=document.getElementById("closeModal");

if(closeModal){

closeModal.onclick=()=>{

modal.style.display="none";

};

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

};


// ========================================
// Splash Screen
// ========================================

window.addEventListener("load",()=>{

if(splash){

setTimeout(()=>{

splash.classList.add("hide");

},2000);

}

});

// ==========================
// BSA Calculator
// ==========================

const bsaBtn = document.getElementById("bsaBtn");

if (bsaBtn) {

    bsaBtn.addEventListener("click", () => {

        const weight = Number(weightInput.value);
        const age = Number(ageInput.value);

        if (!weight || !age) {

            clinicalResult.innerHTML = `
            <div class="warning-box">
                أدخل العمر والوزن أولاً.
            </div>
            `;
            return;

        }

        // تقدير الطول للأطفال
        let height = age * 6 + 77;

        const bsa = Math.sqrt((height * weight) / 3600);

        clinicalResult.innerHTML = `

        <div class="result-card">

            <h2>Body Surface Area</h2>

            <div class="result-item">
                <span>Estimated Height</span>
                <strong>${height.toFixed(0)} cm</strong>
            </div>

            <div class="result-item">
                <span>BSA</span>
                <strong>${bsa.toFixed(2)} m²</strong>
            </div>

        </div>

        `;

    });

}
// ==========================
// Burn Fluid Calculator
// ==========================

const burnFluidBtn = document.getElementById("burnFluidBtn");

if (burnFluidBtn) {

    burnFluidBtn.addEventListener("click", () => {

        const weight = Number(weightInput.value);

        if (!weight) {

            clinicalResult.innerHTML = `
            <div class="warning-box">
                أدخل الوزن أولاً.
            </div>
            `;
            return;

        }

        let burnPercent = prompt("Burn %TBSA");

        if (burnPercent === null) return;

        burnPercent = Number(burnPercent);

        if (!burnPercent || burnPercent <= 0) {

            clinicalResult.innerHTML = `
            <div class="warning-box">
                نسبة الحرق غير صحيحة.
            </div>
            `;
            return;

        }

        const totalFluid = 4 * weight * burnPercent;

        const first8 = totalFluid / 2;

        const next16 = totalFluid / 2;

        clinicalResult.innerHTML = `

        <div class="result-card">

            <h2>Parkland Formula</h2>

            <div class="result-item">
                <span>Total Fluid</span>
                <strong>${totalFluid.toFixed(0)} mL</strong>
            </div>

            <div class="result-item">
                <span>First 8 Hours</span>
                <strong>${first8.toFixed(0)} mL</strong>
            </div>

            <div class="result-item">
                <span>Next 16 Hours</span>
                <strong>${next16.toFixed(0)} mL</strong>
            </div>

        </div>

        `;

    });

}
// ==========================
// Paracetamol Toxicity Calculator
// ==========================

const paracetamolToxicBtn = document.getElementById("paracetamolToxicBtn");

if (paracetamolToxicBtn) {

    paracetamolToxicBtn.addEventListener("click", () => {

        const weight = Number(weightInput.value);

        if (!weight) {

            clinicalResult.innerHTML = `
            <div class="warning-box">
                أدخل الوزن أولاً.
            </div>
            `;
            return;

        }

        let takenDose = prompt("Amount Taken (mg)");

        if (takenDose === null) return;

        takenDose = Number(takenDose);

        if (!takenDose || takenDose <= 0) {

            clinicalResult.innerHTML = `
            <div class="warning-box">
                الجرعة غير صحيحة.
            </div>
            `;
            return;

        }

        const mgKg = takenDose / weight;

        let status = "";
        let color = "";

        if (mgKg < 150) {

            status = "Low Risk";
            color = "#16a34a";

        } else if (mgKg < 200) {

            status = "Observe Patient";
            color = "#f59e0b";

        } else {

            status = "Possible Toxic Dose";
            color = "#dc2626";

        }

        clinicalResult.innerHTML = `

        <div class="result-card">

            <h2>Paracetamol Toxicity</h2>

            <div class="result-item">
                <span>Dose / Kg</span>
                <strong>${mgKg.toFixed(1)} mg/kg</strong>
            </div>

            <div class="result-item">
                <span>Status</span>
                <strong style="color:${color}">
                    ${status}
                </strong>
            </div>

        </div>

        `;

    });

}

// ========================================
// Service Worker
// ========================================

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("sw.js")

.then(()=>{

console.log("Service Worker Registered");

})

.catch((err)=>{

console.log(err);

});

});

}


// ========================================
// App Ready
// ========================================

window.addEventListener("DOMContentLoaded",()=>{

loadDrugs();

loadHistory();

updateDashboard();

});
// ========================================
// Smart Search
// ========================================

searchInput?.addEventListener("keydown", (e) => {

    if (e.key !== "Enter") return;

    const value = searchInput.value.trim().toLowerCase();

    if (value === "") return;

    for (const id in drugs) {

        if (
            drugs[id].name.toLowerCase().includes(value)
        ) {

            drugSelect.value = id;

            drugSelect.dispatchEvent(
                new Event("change")
            );

            break;

        }

    }

});


// ========================================
// Safe Event Binding
// ========================================

function safeClick(element, callback){

    if(element){

        element.addEventListener("click", callback);

    }

}


// ========================================
// Future AI Placeholder
// ========================================

const AI = {

enabled:false,

checkDose:function(){

console.log("AI Dose Checker Coming Soon");

},

checkInteraction:function(){

console.log("AI Interaction Checker Coming Soon");

}

};


// ========================================
// Application Ready
// ========================================

console.log(

`${APP.name} v${APP.version} Ready ✅`

);
