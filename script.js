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
