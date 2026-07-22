// ==========================
// DoseCare v3.0
// Part 1
// Variables + Interactions + Drug Card
// ==========================


// ==========================
// Variables
// ==========================

const drugSelect = document.getElementById("drug");
const strengthSelect = document.getElementById("strength");
const diseaseSelect = document.getElementById("disease");
const searchInput = document.getElementById("searchDrug");

const result = document.getElementById("result");
const historyDiv = document.getElementById("history");

const drugCard = document.getElementById("drugCard");


// ==========================
// Drug Interactions
// ==========================

const interactions = {


// Pain & Fever

"ibuprofen-paracetamol":"✅ يمكن استخدامهما معاً عند الحاجة.",

"ibuprofen-amoxicillin":"✅ لا يوجد تداخل مهم.",

"ibuprofen-cefixime":"✅ لا يوجد تداخل مهم.",

"ibuprofen-azithromycin":"✅ لا يوجد تداخل مهم.",

"ibuprofen-cefuroxime":"✅ لا يوجد تداخل مهم.",


// Antibiotics

"amoxicillin-coamoxiclav":"❌ لا داعي للجمع بينهما.",

"amoxicillin-cephalexin":"⚠️ غالباً لا توجد فائدة من الجمع.",

"cefixime-cefuroxime":"❌ لا يفضل الجمع بين سيفالوسبورينين.",

"cefixime-cephalexin":"❌ لا يوصى به.",

"cefuroxime-cephalexin":"❌ لا يوصى به.",

"azithromycin-cefixime":"✅ يستخدم أحياناً حسب الحالة.",

"azithromycin-amoxicillin":"✅ قد يستخدمان معاً.",

"coamoxiclav-metronidazole":"✅ يستخدمان معاً ببعض الالتهابات.",

"coamoxiclav-fluconazole":"✅ لا يوجد تداخل مهم.",

"coamoxiclav-paracetamol":"✅ آمن.",


// Clarithromycin

"clarithromycin-fluconazole":"⚠️ يزيد خطر QT prolongation.",

"clarithromycin-ondansetron":"⚠️ يزيد احتمال إطالة QT.",

"clarithromycin-azithromycin":"❌ لا يفضل الجمع بين Macrolides.",

"clarithromycin-loratadine":"⚠️ قد يزيد تركيز Loratadine.",

"clarithromycin-cetirizine":"✅ لا يوجد تداخل مهم.",

"clarithromycin-budesonide":"⚠️ قد يزيد تأثير Budesonide.",

"clarithromycin-montelukast":"✅ لا يوجد تداخل مهم.",


// Fluconazole

"fluconazole-ondansetron":"⚠️ قد يزيد خطر اضطراب نظم القلب.",

"fluconazole-azithromycin":"⚠️ يزيد خطر QT.",

"fluconazole-loratadine":"⚠️ قد يزيد تركيز Loratadine.",

"fluconazole-budesonide":"⚠️ قد يزيد تأثير Budesonide.",

"fluconazole-metronidazole":"⚠️ يفضل الحذر.",

"fluconazole-paracetamol":"⚠️ يستخدم بحذر عند مرضى الكبد.",


// Metronidazole

"metronidazole-alcohol":"❌ يمنع تناول الكحول أثناء العلاج ولمدة 48 ساعة بعد آخر جرعة.",

"metronidazole-ondansetron":"⚠️ قد يزيد QT.",

"metronidazole-clarithromycin":"⚠️ يزيد احتمال اضطراب نظم القلب.",

"metronidazole-azithromycin":"⚠️ الحذر بسبب QT.",


// Allergy

"cetirizine-loratadine":"❌ لا يفضل الجمع.",

"cetirizine-chlorpheniramine":"⚠️ يزيد النعاس.",

"loratadine-chlorpheniramine":"⚠️ يزيد النعاس.",

"chlorpheniramine-ondansetron":"⚠️ قد يزيد الدوخة.",

"chlorpheniramine-montelukast":"✅ لا يوجد تداخل مهم.",


// Asthma

"salbutamol-budesonide":"✅ يستخدمان معاً.",

"salbutamol-montelukast":"✅ يستخدمان معاً.",

"budesonide-montelukast":"✅ علاج قياسي.",

"salbutamol-ondansetron":"⚠️ الحذر عند مرضى اضطراب نظم القلب.",

"salbutamol-azithromycin":"⚠️ احتمال زيادة QT.",


// Others

"zinc-amoxicillin":"✅ لا يوجد تداخل مهم.",

"zinc-cefixime":"✅ لا يوجد تداخل مهم.",

"zinc-fluconazole":"✅ لا يوجد تداخل مهم.",

"albendazole-metronidazole":"⚠️ قد يزيد اضطرابات الكبد.",

"albendazole-paracetamol":"⚠️ يستخدم بحذر عند مرضى الكبد."

};
// ==========================
// Disease Guide
// ==========================

const treatments = {

fever:{
title:"🌡 Fever",
first:"Paracetamol أو Ibuprofen",
second:"الإكثار من السوائل ومراجعة الطبيب إذا استمرت الحمى."
},

pain:{
title:"💊 Pain",
first:"Paracetamol",
second:"Ibuprofen إذا لم توجد موانع."
},

otitis:{
title:"👂 Otitis Media",
first:"Amoxicillin",
second:"Co-amoxiclav أو Cefixime."
},

pharyngitis:{
title:"🦠 Pharyngitis",
first:"Amoxicillin",
second:"Azithromycin عند حساسية البنسلين."
},

sinusitis:{
title:"👃 Sinusitis",
first:"Co-amoxiclav",
second:"Cefuroxime."
},

pneumonia:{
title:"🫁 Pneumonia",
first:"Amoxicillin",
second:"Azithromycin."
},

uti:{
title:"🚽 UTI",
first:"Cefixime",
second:"حسب نتيجة الزرع."
},

diarrhea:{
title:"💧 Diarrhea",
first:"ORS + Zinc",
second:"Metronidazole عند الحاجة."
},

vomiting:{
title:"🤢 Vomiting",
first:"Ondansetron",
second:"تعويض السوائل."
},

asthma:{
title:"🫁 Asthma",
first:"Salbutamol",
second:"Budesonide + Montelukast."
},

allergy:{
title:"🤧 Allergy",
first:"Cetirizine",
second:"Loratadine."
},

fungal:{
title:"🍄 Fungal Infection",
first:"Fluconazole",
second:"حسب نوع العدوى."
},

worms:{
title:"🪱 Worm Infestation",
first:"Albendazole",
second:"إعادة الجرعة بعد أسبوعين."
}

};


// ==========================
// Disease Change
// ==========================

diseaseSelect.addEventListener("change",function(){

const disease=this.value;

const guide=document.getElementById("diseaseGuide");

if(guide){

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

}

// إعادة تعبئة قائمة الأدوية

drugSelect.innerHTML='<option value="">اختر الدواء</option>';

for(const id in drugs){

const drug=drugs[id];

if(!disease || drug.diseases.includes(disease)){

const option=document.createElement("option");

option.value=id;

option.textContent=drug.name;

drugSelect.appendChild(option);

}

}

strengthSelect.innerHTML='<option value="">اختر التركيز</option>';

drugCard.style.display="none";

});
// ==========================
// Drug Search
// ==========================

searchInput.addEventListener("input",function(){

const value=this.value.toLowerCase();

for(let option of drugSelect.options){

if(option.value==="") continue;

if(option.text.toLowerCase().includes(value)){

drugSelect.value=option.value;

drugSelect.dispatchEvent(new Event("change"));

break;

}

}

});
// ==========================
// Drug Card
// ==========================

drugSelect.addEventListener("change",function(){

strengthSelect.innerHTML='<option value="">اختر التركيز</option>';

const drug=drugs[this.value];

if(!drug){

drugCard.style.display="none";

return;

}

// تعبئة التراكيز

drug.strengths.forEach((item,index)=>{

strengthSelect.innerHTML+=`

<option value="${index}">

${item.name}

</option>

`;

});

// لون البطاقة

drugCard.className="drug-card";

switch(drug.category){

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

}

drugCard.style.display="block";

drugCard.innerHTML=`

<h3>💊 ${drug.name}</h3>

<p><strong>📂 التصنيف:</strong> ${drug.category}</p>

<p><strong>⏰ التكرار:</strong> ${drug.frequency}</p>

<p><strong>🚫 الحد الأقصى:</strong> ${drug.maxDose} mg</p>

<p><strong>📝 الملاحظات:</strong> ${drug.notes}</p>

<div class="info-row">

<b>⚠️ التحذيرات:</b><br>

${drug.warnings}

</div>

`;

});
// ==========================
// Restore Last Drug
// ==========================

const savedDrug=localStorage.getItem("favoriteDrug");

if(savedDrug){

drugSelect.value=savedDrug;

drugSelect.dispatchEvent(new Event("change"));

}
// ==========================
// Dose Calculator
// ==========================

document.getElementById("calculate").addEventListener("click", function () {

const age = Number(document.getElementById("age").value);

const weight = Number(document.getElementById("weight").value);

const drugId = drugSelect.value;

const strengthIndex = strengthSelect.value;

const drug2Id = document.getElementById("drug2").value;


// ==========================
// Validation
// ==========================

if(!age){

result.innerHTML=`
<div class="warning-box">
⚠️ يرجى إدخال العمر.
</div>
`;

return;

}

if(!weight){

result.innerHTML=`
<div class="warning-box">
⚠️ يرجى إدخال الوزن.
</div>
`;

return;

}

if(!drugId){

result.innerHTML=`
<div class="warning-box">
⚠️ يرجى اختيار الدواء.
</div>
`;

return;

}

if(strengthIndex===""){

result.innerHTML=`
<div class="warning-box">
⚠️ يرجى اختيار التركيز.
</div>
`;

return;

}


// ==========================
// Drug Object
// ==========================

const drug = drugs[drugId];


// ==========================
// Age Validation
// ==========================

if(age < drug.minAge || age > drug.maxAge){

result.innerHTML=`

<div class="warning-box">

⚠️ هذا الدواء غير مناسب لهذا العمر.

</div>

`;

return;

}


// ==========================
// Dose Calculation
// ==========================

const concentration = drug.strengths[strengthIndex].concentration;

let doseMg = weight * drug.mgPerKg;

let warning = "";

if(doseMg > drug.maxDose){

doseMg = drug.maxDose;

warning=`

<div class="warning-box">

⚠️ تم اعتماد الحد الأقصى للجرعة.

</div>

`;

}

const doseMl = (doseMg / concentration) * 5;

const singleDose = doseMg;

const dailyDose = doseMg * getFrequencyNumber(drug.frequency);


// ==========================
// Drug Interaction
// ==========================

let interactionMessage="";

if(drug2Id){

const key1 = drugId + "-" + drug2Id;

const key2 = drug2Id + "-" + drugId;

interactionMessage =

interactions[key1]

||

interactions[key2]

||

"✅ لا يوجد تداخل دوائي مهم معروف.";

}
    // ==========================
// Result
// ==========================

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
<span>📂 التصنيف</span>
<strong>${drug.category}</strong>
</div>

<div class="result-item">
<span>🧪 التركيز</span>
<strong>${drug.strengths[strengthIndex].name}</strong>
</div>

<div class="result-item">
<span>💉 الجرعة الواحدة</span>
<strong>${singleDose.toFixed(1)} mg</strong>
</div>

<div class="result-item">
<span>📅 الجرعة اليومية</span>
<strong>${dailyDose.toFixed(1)} mg/day</strong>
</div>

<div class="result-item">
<span>🥄 تعادل</span>
<strong>${doseMl.toFixed(1)} mL</strong>
</div>

<div class="result-item">
<span>⏰ التكرار</span>
<strong>${drug.frequency}</strong>
</div>

<div class="result-item">
<span>🚫 الحد الأقصى</span>
<strong>${drug.maxDose} mg</strong>
</div>

<div class="result-item">
<span>📝 الملاحظات</span>
<strong>${drug.notes}</strong>
</div>

<div class="result-item">
<span>⚠️ التحذيرات</span>
<strong>${drug.warnings}</strong>
</div>

${warning}

${
drug2Id ?

`

<div class="warning-box">

<h3>💊 Drug Interaction Checker</h3>

<p>${interactionMessage}</p>

</div>

`

:

""

}

</div>

`;


// ==========================
// Save History
// ==========================

saveHistory(

drug.name,

weight,

doseMg,

doseMl

);


// حفظ آخر دواء

localStorage.setItem("favoriteDrug", drugId);

});
// ==========================
// Frequency Helper
// ==========================

function getFrequencyNumber(freq){

if(freq.includes("4")) return 6;

if(freq.includes("6")) return 4;

if(freq.includes("8")) return 3;

if(freq.includes("12")) return 2;

if(freq.includes("مرة")) return 1;

return 1;

}
// ==========================
// History
// ==========================

function saveHistory(drug, weight, dose, ml){

let history = JSON.parse(localStorage.getItem("history")) || [];

// إضافة العملية الجديدة

history.unshift({

drug: drug,

weight: weight,

dose: dose.toFixed(1),

ml: ml.toFixed(1)

});

// الاحتفاظ بآخر 5 عمليات فقط

history = history.slice(0,5);

localStorage.setItem(

"history",

JSON.stringify(history)

);


// تحديث Dashboard

let count = parseInt(localStorage.getItem("calcCount")) || 0;

count++;

localStorage.setItem("calcCount", count);

localStorage.setItem("lastDrug", drug);

updateDashboard();

loadHistory();

}


// ==========================
// Load History
// ==========================

function loadHistory(){

const history = JSON.parse(localStorage.getItem("history")) || [];

historyDiv.innerHTML = "<h3>📋 آخر العمليات</h3>";

if(history.length===0){

historyDiv.innerHTML += "<p>لا توجد عمليات بعد.</p>";

return;

}

history.forEach(item=>{

historyDiv.innerHTML += `

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
// Reset
// ==========================

document.getElementById("reset").addEventListener("click",function(){

document.getElementById("age").value="";

document.getElementById("weight").value="";

drugSelect.value="";

strengthSelect.innerHTML=`

<option value="">اختر التركيز</option>

`;

result.innerHTML="";

drugCard.style.display="none";

});


// ==========================
// Copy Result
// ==========================

document.getElementById("copy").addEventListener("click",function(){

if(result.innerText.trim()===""){

alert("لا توجد نتيجة لنسخها.");

return;

}

navigator.clipboard.writeText(result.innerText);

alert("✅ تم نسخ النتيجة.");

});
// ==========================
// Favorites
// ==========================

const favoritesList = document.getElementById("favoritesList");

function loadFavorites(){

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

if(favorites.length===0){

favoritesList.innerHTML="لا توجد أدوية محفوظة.";

updateDashboard();

return;

}

favoritesList.innerHTML="";

favorites.forEach((drug,index)=>{

favoritesList.innerHTML+=`

<div class="history-item">

💊 <b>${drug}</b>

<br><br>

<button
onclick="removeFavorite(${index})"
style="
background:#ef4444;
color:white;
padding:8px 15px;
border:none;
border-radius:8px;
cursor:pointer;">

❌ حذف

</button>

</div>

`;

});

updateDashboard();

}

loadFavorites();


// إضافة للمفضلة

document.getElementById("favorite").addEventListener("click",function(){

if(!drugSelect.value){

alert("اختر دواء أولاً.");

return;

}

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

const drugName = drugs[drugSelect.value].name;

if(!favorites.includes(drugName)){

favorites.push(drugName);

localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);

}

loadFavorites();

alert("⭐ تمت الإضافة للمفضلة.");

});


// حذف من المفضلة

function removeFavorite(index){

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

favorites.splice(index,1);

localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);

loadFavorites();

}


// إظهار وإخفاء المفضلة

document.getElementById("showFavorites").addEventListener("click",function(){

const fav=document.getElementById("favorites");

if(fav.style.display==="none" || fav.style.display===""){

fav.style.display="block";

}else{

fav.style.display="none";

}

});


// ==========================
// Dashboard
// ==========================

function updateDashboard(){

// عدد العمليات

const calcCountEl=document.getElementById("calcCount");

if(calcCountEl){

calcCountEl.innerText=

localStorage.getItem("calcCount") || 0;

}


// عدد المفضلة

const favCountEl=document.getElementById("favCount");

if(favCountEl){

const favorites=

JSON.parse(localStorage.getItem("favorites")) || [];

favCountEl.innerText=favorites.length;

}


// آخر دواء

const lastDrugEl=document.getElementById("lastDrug");

if(lastDrugEl){

lastDrugEl.innerText=

localStorage.getItem("lastDrug") || "-";

}

}

updateDashboard();
// ==========================
// Drug Information
// ==========================

const infoBtn = document.getElementById("info");

if(infoBtn){

infoBtn.addEventListener("click",function(){

if(!drugSelect.value){

alert("اختر دواء أولاً.");

return;

}

const drug = drugs[drugSelect.value];

document.getElementById("drugInfoContent").innerHTML = `

<h2>💊 ${drug.name}</h2>

<p><b>📂 التصنيف:</b> ${drug.category}</p>

<p><b>⚙️ آلية العمل:</b><br>${drug.mechanism || "-"}</p>

<p><b>✅ الاستعمالات:</b><br>${drug.indications || "-"}</p>

<p><b>⛔ موانع الاستعمال:</b><br>${drug.contraindications || "-"}</p>

<p><b>⚠️ الآثار الجانبية:</b><br>${drug.sideEffects || "-"}</p>

<p><b>👶 العمر المناسب:</b>

${drug.minAge} - ${drug.maxAge} سنة

</p>

<p><b>🤰 الحمل:</b><br>

${drug.pregnancy || "-"}

</p>

<p><b>📦 التخزين:</b><br>

${drug.storage || "-"}

</p>

<p><b>📝 الملاحظات:</b><br>

${drug.notes}

</p>

`;

document.getElementById("drugInfoModal").style.display="block";

});

}


// ==========================
// Close Modal
// ==========================

const closeModal=document.getElementById("closeModal");

if(closeModal){

closeModal.onclick=function(){

document.getElementById("drugInfoModal").style.display="none";

};

}


// ==========================
// Close Outside
// ==========================

window.addEventListener("click",function(event){

const modal=document.getElementById("drugInfoModal");

if(modal && event.target===modal){

modal.style.display="none";

}

});
// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML="☀️ الوضع النهاري";

}

themeBtn.addEventListener("click",function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML="☀️ الوضع النهاري";

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML="🌙 الوضع الليلي";

}

});

}


// ==========================
// Color Theme
// ==========================

const colorBtn=document.getElementById("colorBtn");

const colors=[

"#2563eb",

"#16a34a",

"#dc2626",

"#7c3aed",

"#ea580c",

"#0891b2"

];

let colorIndex=0;

const savedColor=localStorage.getItem("mainColor");

if(savedColor){

document.documentElement.style.setProperty(

"--main-color",

savedColor

);

colorIndex=colors.indexOf(savedColor);

if(colorIndex<0) colorIndex=0;

}

if(colorBtn){

colorBtn.addEventListener("click",function(){

colorIndex++;

if(colorIndex>=colors.length){

colorIndex=0;

}

document.documentElement.style.setProperty(

"--main-color",

colors[colorIndex]

);

localStorage.setItem(

"mainColor",

colors[colorIndex]

);

});

}
// ==========================
// Export PDF
// ==========================

const pdfBtn = document.getElementById("pdf");

if(pdfBtn){

pdfBtn.addEventListener("click",function(){

if(result.innerHTML.trim()===""){

alert("لا توجد نتيجة لحفظها.");

return;

}

html2pdf().from(result).save("DoseCare_Result.pdf");

});

}
// ==========================
// Language Support
// ==========================

let currentLang = localStorage.getItem("language") || "ar";

function applyLanguage(lang){

currentLang = lang;

localStorage.setItem("language", lang);

document.documentElement.lang = lang;

document.documentElement.dir = lang==="ar" ? "rtl" : "ltr";

const langBtn=document.getElementById("langBtn");

if(langBtn){

langBtn.innerHTML=

lang==="ar"

?

"🌐 English"

:

"🌐 العربية";

}

}

applyLanguage(currentLang);

const langBtn=document.getElementById("langBtn");

if(langBtn){

langBtn.addEventListener("click",function(){

applyLanguage(

currentLang==="ar"

?

"en"

:

"ar"

);

});

}
// ==========================
// Service Worker
// ==========================

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("sw.js")

.then(()=>{

console.log("✅ Service Worker Registered");

})

.catch(err=>{

console.log(err);

});

});

}
