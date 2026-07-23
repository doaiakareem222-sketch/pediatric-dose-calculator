// =======================================
// DoseCare v4.0
// Main Script
// =======================================


// ==========================
// Variables
// ==========================

const drugSelect = document.getElementById("drug");
const drug2Select = document.getElementById("drug2");

const strengthSelect = document.getElementById("strength");
const diseaseSelect = document.getElementById("disease");
const searchInput = document.getElementById("searchDrug");

const ageInput = document.getElementById("age");
const weightInput = document.getElementById("weight");

const result = document.getElementById("result");
const historyDiv = document.getElementById("history");

const drugCard = document.getElementById("drugCard");
const clinicalAlert = document.getElementById("clinicalAlert");

const favoriteBtn = document.getElementById("favorite");
const showFavoritesBtn = document.getElementById("showFavorites");

const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");
const copyBtn = document.getElementById("copy");
const pdfBtn = document.getElementById("pdf");
const fluidBtn = document.getElementById("fluidBtn");
const infoBtn = document.getElementById("info");

const themeBtn = document.getElementById("themeBtn");
const colorBtn = document.getElementById("colorBtn");
const langBtn = document.getElementById("langBtn");


// ==========================
// App Version
// ==========================

const APP_VERSION = "4.0";

console.log("DoseCare v" + APP_VERSION + " Loaded Successfully");
// ==========================
// Drug Interactions
// ==========================

const interactions = {

"ibuprofen-paracetamol":"✅ يمكن استخدامهما معاً عند الحاجة.",
"ibuprofen-amoxicillin":"✅ لا يوجد تداخل مهم.",
"ibuprofen-cefixime":"✅ لا يوجد تداخل مهم.",
"ibuprofen-azithromycin":"✅ لا يوجد تداخل مهم.",

"amoxicillin-coamoxiclav":"❌ لا داعي للجمع بينهما.",
"amoxicillin-cephalexin":"⚠️ غالباً لا توجد فائدة.",

"cefixime-cefuroxime":"❌ لا يفضل الجمع.",
"cefixime-cephalexin":"❌ لا يوصى به.",

"cefuroxime-cephalexin":"❌ لا يوصى به.",

"azithromycin-amoxicillin":"✅ قد يستخدمان معاً.",
"azithromycin-cefixime":"✅ يستخدمان أحياناً.",

"clarithromycin-fluconazole":"⚠️ يزيد خطر QT.",
"clarithromycin-ondansetron":"⚠️ يزيد خطر QT.",

"fluconazole-ondansetron":"⚠️ قد يزيد اضطراب نظم القلب.",

"cetirizine-loratadine":"❌ لا يفضل الجمع.",
"cetirizine-chlorpheniramine":"⚠️ يزيد النعاس.",

"salbutamol-budesonide":"✅ يستخدمان معاً.",
"salbutamol-montelukast":"✅ علاج قياسي.",

"budesonide-montelukast":"✅ علاج قياسي."

};


// ==========================
// Disease Guide
// ==========================

const treatments={

fever:{
title:"🌡 Fever",
first:"Paracetamol أو Ibuprofen",
second:"الإكثار من السوائل."
},

pain:{
title:"💊 Pain",
first:"Paracetamol",
second:"Ibuprofen"
},

otitis:{
title:"👂 Otitis Media",
first:"Amoxicillin",
second:"Co-amoxiclav"
},

pharyngitis:{
title:"🦠 Pharyngitis",
first:"Amoxicillin",
second:"Azithromycin"
},

sinusitis:{
title:"👃 Sinusitis",
first:"Co-amoxiclav",
second:"Cefuroxime"
},

pneumonia:{
title:"🫁 Pneumonia",
first:"Amoxicillin",
second:"Azithromycin"
},

uti:{
title:"🚽 UTI",
first:"Cefixime",
second:"حسب نتيجة الزرع"
},

diarrhea:{
title:"💧 Diarrhea",
first:"ORS + Zinc",
second:"Metronidazole"
},

vomiting:{
title:"🤢 Vomiting",
first:"Ondansetron",
second:"تعويض السوائل"
},

asthma:{
title:"🫁 Asthma",
first:"Salbutamol",
second:"Budesonide + Montelukast"
},

allergy:{
title:"🤧 Allergy",
first:"Cetirizine",
second:"Loratadine"
},

fungal:{
title:"🍄 Fungal Infection",
first:"Fluconazole",
second:"حسب نوع العدوى"
},

worms:{
title:"🪱 Worm Infestation",
first:"Albendazole",
second:"إعادة الجرعة بعد أسبوعين"
}

};


// ==========================
// Disease Change
// ==========================

diseaseSelect.addEventListener("change",()=>{

const disease=diseaseSelect.value;

const guide=document.getElementById("diseaseGuide");

if(treatments[disease]){

guide.style.display="block";

guide.innerHTML=`

<h3>${treatments[disease].title}</h3>

<p><b>First Line:</b> ${treatments[disease].first}</p>

<p><b>Alternative:</b> ${treatments[disease].second}</p>

`;

}else{

guide.style.display="none";

}

});
// ==========================
// Fill Drug Lists
// ==========================

function loadDrugs() {

    // تنظيف القوائم
    drugSelect.innerHTML = '<option value="">اختر الدواء</option>';
    drug2Select.innerHTML = '<option value="">بدون</option>';

    // تعبئة الأدوية
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


// ==========================
// Drug Search
// ==========================

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    for (const option of drugSelect.options) {

        if (option.value === "") continue;

        if (option.text.toLowerCase().includes(value)) {

            drugSelect.value = option.value;

            drugSelect.dispatchEvent(new Event("change"));

            break;

        }

    }

});
// ==========================
// Drug Card
// ==========================

drugSelect.addEventListener("change", () => {

    strengthSelect.innerHTML = '<option value="">اختر التركيز</option>';

    const drug = drugs[drugSelect.value];

    if (!drug) {

        drugCard.style.display = "none";
        return;

    }

    // تعبئة التراكيز

    drug.strengths.forEach((item, index) => {

        const option = document.createElement("option");

        option.value = index;
        option.textContent = item.name;

        strengthSelect.appendChild(option);

    });

    // لون البطاقة

    drugCard.className = "drug-card";

    switch (drug.category) {

        case "Pain & Fever":
            drugCard.classList.add("drug-blue");
            break;

        case "Antibiotics":
            drugCard.classList.add("drug-red");
            break;

        case "Asthma":
            drugCard.classList.add("drug-purple");
            break;

        case "Antihistamines":
            drugCard.classList.add("drug-yellow");
            break;

        case "Vitamins":
            drugCard.classList.add("drug-green");
            break;

        case "Antifungal":
            drugCard.classList.add("drug-orange");
            break;

        case "Antiparasitic":
            drugCard.classList.add("drug-brown");
            break;

        default:
            drugCard.classList.add("drug-blue");

    }

    // عرض البطاقة

    drugCard.style.display = "block";

    drugCard.innerHTML = `

<h3>💊 ${drug.name}</h3>

<p><strong>📂 التصنيف:</strong> ${drug.category}</p>

<p><strong>💉 الجرعة:</strong> ${drug.mgPerKg} mg/kg</p>

<p><strong>⏰ التكرار:</strong> ${drug.frequency}</p>

<p><strong>🚫 الحد الأقصى:</strong> ${drug.maxDose} mg</p>

<p><strong>📝 الملاحظات:</strong> ${drug.notes}</p>

<p><strong>⚠️ التحذيرات:</strong></p>

<div class="info-row">

${drug.warnings}

</div>

`;

    // تنبيه سريري

    if (clinicalAlert) {

        if (drug.alert && drug.alert !== "") {

            clinicalAlert.style.display = "block";

            clinicalAlert.innerHTML = `
<b>🚨 Clinical Alert</b><br><br>
${drug.alert}
`;

        } else {

            clinicalAlert.style.display = "none";

        }

    }

});


// ==========================
// Restore Last Drug
// ==========================

const lastDrug = localStorage.getItem("favoriteDrug");

if (lastDrug && drugs[lastDrug]) {

    drugSelect.value = lastDrug;

    drugSelect.dispatchEvent(new Event("change"));

}
// ==========================
// Dose Calculator
// ==========================

calculateBtn.addEventListener("click", () => {

    const age = Number(ageInput.value);
    const weight = Number(weightInput.value);

    const drugId = drugSelect.value;
    const strengthIndex = strengthSelect.value;

    const drug2Id = drug2Select.value;

    // Validation

    if (!age) {

        result.innerHTML = `
<div class="warning-box">
⚠️ يرجى إدخال العمر
</div>`;
        return;

    }

    if (!weight) {

        result.innerHTML = `
<div class="warning-box">
⚠️ يرجى إدخال الوزن
</div>`;
        return;

    }

    if (!drugId) {

        result.innerHTML = `
<div class="warning-box">
⚠️ يرجى اختيار الدواء
</div>`;
        return;

    }

    if (strengthIndex === "") {

        result.innerHTML = `
<div class="warning-box">
⚠️ يرجى اختيار التركيز
</div>`;
        return;

    }

    const drug = drugs[drugId];

    // Age Check

    if (age < drug.minAge || age > drug.maxAge) {

        result.innerHTML = `
<div class="warning-box">
⚠️ هذا الدواء غير مناسب لهذا العمر
</div>`;

        return;

    }

    // Dose

    const concentration =
        drug.strengths[strengthIndex].concentration;

    let doseMg =
        weight * drug.mgPerKg;

    let warning = "";

    if (doseMg > drug.maxDose) {

        doseMg = drug.maxDose;

        warning = `
<div class="warning-box">
⚠️ تم اعتماد الحد الأعلى للجرعة
</div>`;

    }

    const doseMl =
        (doseMg / concentration) * 5;

    const dailyDose =
        doseMg * getFrequencyNumber(drug.frequency);

    // Drug Interaction

    let interactionMessage = "";

    if (drug2Id) {

        const key1 = drugId + "-" + drug2Id;
        const key2 = drug2Id + "-" + drugId;

        interactionMessage =
            interactions[key1] ||
            interactions[key2] ||
            "✅ لا يوجد تداخل دوائي مهم.";

    }

    // Result

    result.innerHTML = `

<div class="result-card">

<h2>💊 ${drug.name}</h2>

<div class="result-item">
<span>👶 العمر</span>
<strong>${age} سنة</strong>
</div>

<div class="result-item">
<span>⚖️ الوزن</span>
<strong>${weight} Kg</strong>
</div>

<div class="result-item">
<span>🧪 التركيز</span>
<strong>${drug.strengths[strengthIndex].name}</strong>
</div>

<div class="result-item">
<span>💉 الجرعة</span>
<strong>${doseMg.toFixed(1)} mg</strong>
</div>

<div class="result-item">
<span>🥄 الحجم</span>
<strong>${doseMl.toFixed(1)} mL</strong>
</div>

<div class="result-item">
<span>📅 الجرعة اليومية</span>
<strong>${dailyDose.toFixed(1)} mg/day</strong>
</div>

<div class="result-item">
<span>⏰ التكرار</span>
<strong>${drug.frequency}</strong>
</div>

<div class="result-item">
<span>🚫 الحد الأعلى</span>
<strong>${drug.maxDose} mg</strong>
</div>

${warning}

${drug2Id ? `
<div class="warning-box">
<h3>💊 Drug Interaction</h3>
<p>${interactionMessage}</p>
</div>
` : ""}

</div>

`;

    saveHistory(
        drug.name,
        weight,
        doseMg,
        doseMl
    );

    localStorage.setItem(
        "favoriteDrug",
        drugId
    );

});
// ==========================
// History
// ==========================

function saveHistory(drug, weight, dose, ml){

let history =
JSON.parse(localStorage.getItem("history")) || [];

history.unshift({

drug:drug,
weight:weight,
dose:dose.toFixed(1),
ml:ml.toFixed(1)

});

history = history.slice(0,5);

localStorage.setItem(
"history",
JSON.stringify(history)
);

let count =
parseInt(localStorage.getItem("calcCount")) || 0;

count++;

localStorage.setItem("calcCount",count);

localStorage.setItem("lastDrug",drug);

loadHistory();

updateDashboard();

}

function loadHistory(){

const history =
JSON.parse(localStorage.getItem("history")) || [];

historyDiv.innerHTML="<h3>📋 آخر العمليات</h3>";

if(history.length===0){

historyDiv.innerHTML+="<p>لا توجد عمليات.</p>";

return;

}

history.forEach(item=>{

historyDiv.innerHTML+=`

<div class="history-item">

💊 <b>${item.drug}</b><br>

⚖️ ${item.weight} Kg<br>

💉 ${item.dose} mg<br>

🥄 ${item.ml} mL

</div>

`;

});

}

loadHistory();
// ==========================
// Copy Result
// ==========================

copyBtn.addEventListener("click",()=>{

if(result.innerText.trim()===""){

alert("لا توجد نتيجة.");

return;

}

navigator.clipboard.writeText(result.innerText);

alert("✅ تم نسخ النتيجة");

});
