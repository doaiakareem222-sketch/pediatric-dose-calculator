const interactions = {

"clarithromycin-fluconazole":
"⚠️ يزيد خطر اضطرابات نظم القلب (QT prolongation).",

"clarithromycin-ondansetron":
"⚠️ يزيد احتمال إطالة QT.",

"ibuprofen-paracetamol":
"✅ يمكن استخدامهما معاً عند الحاجة بالجرعات الصحيحة.",

"ibuprofen-amoxicillin":
"✅ لا يوجد تداخل مهم.",

"metronidazole-alcohol":
"❌ يمنع تناول الكحول أثناء العلاج.",

"fluconazole-ondansetron":
"⚠️ قد يزيد خطر اضطراب نظم القلب."
// Pain & Fever
"ibuprofen-paracetamol":"✅ يمكن استخدامهما معاً عند الحاجة.",
"ibuprofen-amoxicillin":"✅ لا يوجد تداخل مهم.",
"ibuprofen-cefixime":"✅ لا يوجد تداخل مهم.",
"ibuprofen-azithromycin":"✅ لا يوجد تداخل مهم.",
"ibuprofen-cefuroxime":"✅ لا يوجد تداخل مهم.",

// Macrolides
"clarithromycin-fluconazole":"⚠️ يزيد خطر اضطراب نظم القلب (QT prolongation).",
"clarithromycin-ondansetron":"⚠️ يزيد احتمال إطالة QT.",
"clarithromycin-azithromycin":"❌ لا يفضل الجمع بين ماكروليدين.",
"clarithromycin-loratadine":"⚠️ قد يزيد تركيز Loratadine.",
"clarithromycin-cetirizine":"✅ لا يوجد تداخل مهم.",
"clarithromycin-budesonide":"⚠️ قد يزيد تأثير Budesonide.",
"clarithromycin-montelukast":"✅ لا يوجد تداخل مهم.",

// Fluconazole
"fluconazole-ondansetron":"⚠️ قد يزيد خطر اضطراب نظم القلب.",
"fluconazole-azithromycin":"⚠️ يزيد خطر QT.",
"fluconazole-loratadine":"⚠️ قد يزيد تركيز Loratadine.",
"fluconazole-budesonide":"⚠️ قد يزيد تأثير Budesonide.",
"fluconazole-metronidazole":"⚠️ يفضل الحذر بسبب زيادة الآثار الجانبية.",
"fluconazole-paracetamol":"⚠️ يستخدم بحذر عند مرضى الكبد.",

// Metronidazole
"metronidazole-alcohol":"❌ يمنع تناول الكحول أثناء العلاج ولمدة 48 ساعة بعد آخر جرعة.",
"metronidazole-ondansetron":"⚠️ قد يزيد خطر QT.",
"metronidazole-clarithromycin":"⚠️ يزيد احتمال اضطراب نظم القلب.",
"metronidazole-azithromycin":"⚠️ الحذر بسبب QT.",

// Ondansetron
"ondansetron-azithromycin":"⚠️ يزيد خطر QT.",
"ondansetron-loratadine":"✅ لا يوجد تداخل مهم.",
"ondansetron-cetirizine":"✅ لا يوجد تداخل مهم.",
"ondansetron-salbutamol":"⚠️ الحذر عند المرضى المعرضين لاضطراب نظم القلب.",
    // Antibiotics
"amoxicillin-coamoxiclav":"❌ لا داعي للجمع بينهما.",
"amoxicillin-cephalexin":"⚠️ غالباً لا توجد فائدة من الجمع.",
"cefixime-cefuroxime":"❌ لا يفضل الجمع بين سيفالوسبورينين.",
"cefixime-cephalexin":"❌ لا يوصى به.",
"cefuroxime-cephalexin":"❌ لا يوصى به.",
"azithromycin-cefixime":"✅ يستخدم أحياناً حسب الحالة.",
"azithromycin-amoxicillin":"✅ قد يستخدمان معاً عند الحاجة.",
"coamoxiclav-metronidazole":"✅ يستخدمان معاً ببعض الالتهابات.",
"coamoxiclav-fluconazole":"✅ لا يوجد تداخل مهم.",
"coamoxiclav-paracetamol":"✅ آمن.",

// Allergy
"cetirizine-loratadine":"❌ لا يفضل الجمع بين مضادي هيستامين.",
"cetirizine-chlorpheniramine":"⚠️ يزيد النعاس.",
"loratadine-chlorpheniramine":"⚠️ يزيد النعاس.",
"chlorpheniramine-ondansetron":"⚠️ قد يزيد الدوخة.",
"chlorpheniramine-montelukast":"✅ لا يوجد تداخل مهم.",

// Asthma
"salbutamol-budesonide":"✅ يستخدمان معاً بشكل شائع.",
"salbutamol-montelukast":"✅ يستخدمان معاً.",
"budesonide-montelukast":"✅ علاج قياسي للربو.",
"salbutamol-ondansetron":"⚠️ الحذر عند مرضى اضطراب نظم القلب.",
"salbutamol-azithromycin":"⚠️ احتمال زيادة QT عند المرضى المعرضين.",

// Others
"zinc-amoxicillin":"✅ لا يوجد تداخل مهم.",
"zinc-cefixime":"✅ لا يوجد تداخل مهم.",
"zinc-fluconazole":"✅ لا يوجد تداخل مهم.",
"albendazole-metronidazole":"⚠️ قد يزيد اضطرابات الكبد.",
"albendazole-paracetamol":"⚠️ يستخدم بحذر عند مرضى الكبد."
};
// ==========================
// DoseCare Script v2.0
// الجزء الأول
// ==========================

// العناصر الأساسية

const drugSelect = document.getElementById("drug");
const strengthSelect = document.getElementById("strength");
const result = document.getElementById("result");
const historyDiv = document.getElementById("history");
const diseaseSelect = document.getElementById("disease");
const searchInput = document.getElementById("searchDrug");

// ==========================
// تغيير التركيز + بطاقة الدواء
// ==========================
diseaseSelect.addEventListener("change", function () {

    const disease = this.value;
const guide = document.getElementById("diseaseGuide");

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
first:"Amoxicillin/Clavulanate",
second:"Cefuroxime."
},

pneumonia:{
title:"🫁 Pneumonia",
first:"Amoxicillin",
second:"Azithromycin حسب الحالة."
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
second:"إعادة الجرعة بعد أسبوعين عند الحاجة."
}

};

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
    drugSelect.innerHTML = '<option value="">اختر الدواء</option>';

    for (const id in drugs) {

        const drug = drugs[id];

        if (!disease || drug.diseases.includes(disease)) {

            const option = document.createElement("option");
            option.value = id;
            option.textContent = drug.name;

            drugSelect.appendChild(option);
        }
    }

    strengthSelect.innerHTML =
        '<option value="">اختر التركيز</option>';

    document.getElementById("drugCard").style.display = "none";

});
drugSelect.addEventListener("change", function () {

    strengthSelect.innerHTML =
    '<option value="">اختر التركيز</option>';

    const drug = drugs[this.value];
    const card = document.getElementById("drugCard");

    if (!drug) {

        card.style.display = "none";
        return;

    }

    // تعبئة التراكيز

    drug.strengths.forEach((item, index) => {

        strengthSelect.innerHTML += `
        <option value="${index}">
            ${item.name}
        </option>`;

    });

    // ألوان البطاقة

    card.className = "drug-card";

    switch (drug.category) {

        case "Pain & Fever":
            card.classList.add("drug-blue");
            break;

        case "Antibiotics":
            card.classList.add("drug-red");
            break;

        case "Asthma":
            card.classList.add("drug-purple");
            break;

        case "Antihistamines":
            card.classList.add("drug-yellow");
            break;

        case "Vitamins":
            card.classList.add("drug-green");
            break;

        case "Antifungal":
            card.classList.add("drug-orange");
            break;

        case "Antiparasitic":
            card.classList.add("drug-brown");
            break;

    }

    card.style.display = "block";

    card.innerHTML = `

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
// البحث عن الدواء
// ==========================

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    for (let option of drugSelect.options) {

        if (option.value === "") continue;

        if (option.text.toLowerCase().includes(value)) {

            drugSelect.value = option.value;

            drugSelect.dispatchEvent(new Event("change"));

            break;

        }

    }

});

// ==========================
// اختيار المرض
// ==========================

diseaseSelect.addEventListener("change", function () {

    switch (this.value) {

        case "fever":
        case "pain":
            drugSelect.value = "paracetamol";
            break;

        case "otitis":
        case "pharyngitis":
            drugSelect.value = "amoxicillin";
            break;

        case "sinusitis":
            drugSelect.value = "coamoxiclav";
            break;

        case "pneumonia":
            drugSelect.value = "azithromycin";
            break;

        case "uti":
            drugSelect.value = "cefixime";
            break;

        case "diarrhea":
            drugSelect.value = "zinc";
            break;

        case "vomiting":
            drugSelect.value = "ondansetron";
            break;

        case "asthma":
            drugSelect.value = "salbutamol";
            break;

        case "allergy":
            drugSelect.value = "cetirizine";
            break;

        case "fungal":
            drugSelect.value = "fluconazole";
            break;

        case "worms":
            drugSelect.value = "albendazole";
            break;

        default:
            drugSelect.value = "";

    }

    drugSelect.dispatchEvent(new Event("change"));

});

// ==========================
// استرجاع آخر دواء مفضل
// ==========================

const savedDrug = localStorage.getItem("favoriteDrug");

if (savedDrug) {

    drugSelect.value = savedDrug;
    drugSelect.dispatchEvent(new Event("change"));

}
// ==========================
// حساب الجرعة
// ==========================

document.getElementById("calculate").addEventListener("click", function () {

    const age = document.getElementById("age").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const drugId = drugSelect.value;
    const strengthIndex = strengthSelect.value;

    if (!age || age <= 0) {

        result.innerHTML = `
        <div style="color:red;font-weight:bold;">
        يرجى إدخال العمر.
        </div>`;

        return;
    }

    if (!weight || weight <= 0) {

        result.innerHTML = `
        <div style="color:red;font-weight:bold;">
        يرجى إدخال الوزن.
        </div>`;

        return;
    }

    if (!drugId) {

        result.innerHTML = `
        <div style="color:red;font-weight:bold;">
        يرجى اختيار الدواء.
        </div>`;

        return;
    }

    if (strengthIndex === "") {

        result.innerHTML = `
        <div style="color:red;font-weight:bold;">
        يرجى اختيار التركيز.
        </div>`;

        return;
    }

    const drug = drugs[drugId];
    const drug2Id = document.getElementById("drug2").value;

let interactionMessage = "";

if (drug2Id) {

    const key1 = drugId + "-" + drug2Id;
    const key2 = drug2Id + "-" + drugId;

    interactionMessage =
        interactions[key1] ||
        interactions[key2] ||
        "✅ لا يوجد تداخل دوائي مهم معروف.";

}
if (age < drug.minAge || age > drug.maxAge) {

    result.innerHTML = `
    <div class="warning-box">
    ⚠️ هذا الدواء غير مناسب لهذا العمر.
    </div>
    `;

    return;
}
    const concentration =
    drug.strengths[strengthIndex].concentration;

    let doseMg = weight * drug.mgPerKg;

    let warning = "";

    if (doseMg > drug.maxDose) {

        doseMg = drug.maxDose;

        warning = `
        <div style="
        margin-top:15px;
        padding:12px;
        background:#fee2e2;
        color:#b91c1c;
        border-radius:10px;
        font-weight:bold;">
        ⚠️ تم اعتماد الحد الأقصى للجرعة.
        </div>
        `;

    }

    const doseMl = (doseMg / concentration) * 5;
// الجرعة اليومية الكلية
const dailyDose = doseMg * getFrequencyNumber(drug.frequency);

// جرعة كل مرة
const singleDose = doseMg;
    result.innerHTML = `

<div class="result-card">

<h2>${drug.name}</h2>

<div class="result-item">
<span>👶 العمر</span>
<strong>${age} سنة</strong>
</div>

<div class="result-item">
<span>⚖️ الوزن</span>
<strong>${weight} Kg</strong>
</div>

<div class="result-item">
<span>📂 الفئة</span>
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

${warning}
${drug2Id ? `
<div class="warning-box">
<h3>💊 Drug Interaction Checker</h3>
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
const loading = document.getElementById("loading");

loading.style.display = "block";

result.innerHTML = "";
});

// ==========================
// السجل
// ==========================

function saveHistory(drug, weight, dose, ml) {

    // تحديث الإحصائيات

    let count =
    parseInt(localStorage.getItem("calcCount")) || 0;

    count++;

    localStorage.setItem("calcCount", count);

    localStorage.setItem("lastDrug", drug);

    updateDashboard();

    // حفظ السجل

    let history =
    JSON.parse(localStorage.getItem("history")) || [];

    history.unshift({

        drug,
        weight,
        dose: dose.toFixed(1),
        ml: ml.toFixed(1)

    });

    history = history.slice(0,5);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    loadHistory();

}

function loadHistory(){

    const history =
    JSON.parse(localStorage.getItem("history")) || [];

    historyDiv.innerHTML =
    "<h3>آخر العمليات</h3>";

    history.forEach(item=>{

        historyDiv.innerHTML += `

<div class="history-item">

💊 ${item.drug}<br>

⚖️ ${item.weight} Kg<br>

💉 ${item.dose} mg<br>

🥄 ${item.ml} mL

</div>

`;

    });

}

loadHistory();
// ==========================
// إعادة التعيين
// ==========================

document.getElementById("reset").addEventListener("click", function () {

    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";

    drugSelect.value = "";
    strengthSelect.innerHTML =
    '<option value="">اختر التركيز</option>';
loading.style.display = "none";
    result.innerHTML = "";

    document.getElementById("drugCard").style.display = "none";

});

// ==========================
// نسخ النتيجة
// ==========================

document.getElementById("copy").addEventListener("click", function () {

    if (result.innerText.trim() === "") {

        alert("لا توجد نتيجة.");
        return;

    }

    navigator.clipboard.writeText(result.innerText);

    alert("✅ تم النسخ");

});

// ==========================
// المفضلة
// ==========================

const favoritesList =
document.getElementById("favoritesList");

function loadFavorites(){

    let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

    if(favorites.length===0){

        favoritesList.innerHTML =
        "لا توجد أدوية محفوظة.";

        updateDashboard();

        return;

    }

    favoritesList.innerHTML = "";

    favorites.forEach((drug,index)=>{

        favoritesList.innerHTML += `

<div class="history-item">

💊 ${drug}

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

document.getElementById("favorite").addEventListener("click",function(){

    if(!drugSelect.value){

        alert("اختر دواء أولاً");

        return;

    }

    let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

    const drugName =
    drugs[drugSelect.value].name;

    if(!favorites.includes(drugName)){

        favorites.push(drugName);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

    }

    loadFavorites();

    alert("⭐ تمت الإضافة للمفضلة");

});

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

loadFavorites();

// ==========================
// إظهار وإخفاء المفضلة
// ==========================

document.getElementById("showFavorites").addEventListener("click",function(){

    const fav =
    document.getElementById("favorites");

    if(fav.style.display==="none" || fav.style.display===""){

        fav.style.display="block";

    }else{

        fav.style.display="none";

    }

});

// ==========================
// معلومات الدواء
// ==========================

const infoBtn = document.getElementById("info");

if (infoBtn) {

    infoBtn.addEventListener("click", function () {

        if (!drugSelect.value) {

            alert("اختر دواء أولاً");

            return;

        }

        const drug = drugs[drugSelect.value];

        document.getElementById("drugInfoContent").innerHTML = `

<h2>💊 ${drug.name}</h2>

<p><b>📂 التصنيف:</b> ${drug.category}</p>

<p><b>⚙️ آلية العمل:</b><br>${drug.mechanism}</p>

<p><b>✅ الاستعمالات:</b><br>${drug.indications}</p>

<p><b>⛔ موانع الاستعمال:</b><br>${drug.contraindications}</p>

<p><b>⚠️ الآثار الجانبية:</b><br>${drug.sideEffects}</p>

<p><b>👶 العمر:</b> ${drug.minAge} - ${drug.maxAge} سنة</p>

<p><b>🤰 الحمل:</b><br>${drug.pregnancy}</p>

<p><b>📦 التخزين:</b><br>${drug.storage}</p>

<p><b>📝 ملاحظات:</b><br>${drug.notes}</p>

`;

        document.getElementById("drugInfoModal").style.display = "block";

    });

}

// زر الإغلاق

document.getElementById("closeModal").onclick = function () {

    document.getElementById("drugInfoModal").style.display = "none";

};

// إغلاق عند الضغط خارج النافذة

window.onclick = function (event) {

    const modal = document.getElementById("drugInfoModal");

    if (event.target == modal) {

        modal.style.display = "none";

    }

};
// ==========================
// الوضع الليلي
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    // استرجاع الوضع المحفوظ

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        themeBtn.innerHTML = "☀️ الوضع النهاري";

    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = "☀️ الوضع النهاري";

        } else {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = "🌙 الوضع الليلي";

        }

    });

}

// ==========================
// تغيير اللون الرئيسي
// ==========================

const colorBtn = document.getElementById("colorBtn");

const colors = [
    "#2563eb",
    "#16a34a",
    "#dc2626",
    "#7c3aed",
    "#ea580c",
    "#0891b2"
];

let colorIndex = 0;

// استرجاع اللون المحفوظ

const savedColor = localStorage.getItem("mainColor");

if (savedColor) {

    document.documentElement.style.setProperty(
        "--main-color",
        savedColor
    );

    colorIndex = colors.indexOf(savedColor);

    if (colorIndex < 0) colorIndex = 0;

}

if (colorBtn) {

    colorBtn.addEventListener("click", function () {

        colorIndex++;

        if (colorIndex >= colors.length) {

            colorIndex = 0;

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
// Dashboard
// ==========================

function updateDashboard() {

    // عدد العمليات

    let calcCount =
    parseInt(localStorage.getItem("calcCount")) || 0;

    const calcCountEl =
    document.getElementById("calcCount");

    if (calcCountEl) {

        calcCountEl.innerText = calcCount;

    }

    // عدد المفضلة

    let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

    const favCountEl =
    document.getElementById("favCount");

    if (favCountEl) {

        favCountEl.innerText = favorites.length;

    }

    // آخر دواء

    let lastDrug =
    localStorage.getItem("lastDrug") || "-";

    const lastDrugEl =
    document.getElementById("lastDrug");

    if (lastDrugEl) {

        lastDrugEl.innerText = lastDrug;

    }

}

// تشغيل Dashboard عند فتح الموقع

updateDashboard();

console.log("✅ DoseCare v2.0 Loaded Successfully");
function getFrequencyNumber(freq){

if(freq.includes("4"))
return 6;

if(freq.includes("6"))
return 4;

if(freq.includes("8"))
return 3;

if(freq.includes("12"))
return 2;

if(freq.includes("مرة"))
return 1;

return 1;

}
const pdfBtn = document.getElementById("pdf");

if (pdfBtn) {

    pdfBtn.addEventListener("click", function () {

        if (result.innerHTML.trim() === "") {

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

    const t = translations[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelector("h1").innerText = t.title;

    document.querySelector(".subtitle").innerText = t.subtitle;

    document.querySelector("label[for='disease']")?.innerText = t.searchDisease;

    document.querySelector("label[for='drug']")?.innerText = t.drug;

    document.querySelector("label[for='strength']")?.innerText = t.strength;

    document.querySelector("label[for='age']")?.innerText = t.age;

    document.querySelector("label[for='weight']")?.innerText = t.weight;

    document.getElementById("calculate").innerText = t.calculate;

    document.getElementById("reset").innerText = t.reset;

    document.getElementById("copy").innerText = t.copy;

    document.getElementById("info").innerText = t.info;

    document.getElementById("favorite").innerText = t.favorite;

    document.getElementById("showFavorites").innerText = t.showFavorites;

    document.getElementById("langBtn").innerText =
        lang === "ar" ? "🌐 English" : "🌐 العربية";

}
// تغيير Placeholders

document.getElementById("searchDrug").placeholder =
t.searchPlaceholder;

document.getElementById("age").placeholder =
t.agePlaceholder;

document.getElementById("weight").placeholder =
t.weightPlaceholder;

// تغيير أول خيار في القوائم

document.querySelector("#disease option").textContent =
t.selectDisease;

document.querySelector("#drug option").textContent =
t.selectDrug;

document.querySelector("#strength option").textContent =
t.selectStrength;

document.querySelector("#drug2 option").textContent =
t.selectDrug2;
applyLanguage(currentLang);

document.getElementById("langBtn").addEventListener("click",function(){

    applyLanguage(currentLang === "ar" ? "en" : "ar");

});
// ==========================
// Service Worker
// ==========================

if ("serviceWorker" in navigator) {

window.addEventListener("load", () => {

navigator.serviceWorker.register("sw.js")

.then(() => {

console.log("✅ Service Worker Registered");

})

.catch(err => {

console.log(err);

});

});

}
