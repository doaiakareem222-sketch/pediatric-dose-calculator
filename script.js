// ==========================
// DoseCare Script v1.0
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

drugSelect.addEventListener("change", function () {

    strengthSelect.innerHTML =
        '<option value="">اختر التركيز</option>';

    const drug = drugs[this.value];

    const card = document.getElementById("drugCard");

    if (!drug) {

        card.style.display = "none";

        return;

    }

    // تعبئة التركيزات

    drug.strengths.forEach((item, index) => {

        strengthSelect.innerHTML +=
        `<option value="${index}">
            ${item.name}
        </option>`;

    });

    // لون البطاقة

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
// استرجاع المفضلة
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

        result.innerHTML =
        `<div style="color:red;font-weight:bold;">
        يرجى إدخال العمر.
        </div>`;

        return;
    }

    if (!weight || weight <= 0) {

        result.innerHTML =
        `<div style="color:red;font-weight:bold;">
        يرجى إدخال الوزن.
        </div>`;

        return;
    }

    if (!drugId) {

        result.innerHTML =
        `<div style="color:red;font-weight:bold;">
        يرجى اختيار الدواء.
        </div>`;

        return;
    }

    if (strengthIndex === "") {

        result.innerHTML =
        `<div style="color:red;font-weight:bold;">
        يرجى اختيار التركيز.
        </div>`;

        return;
    }

    const drug = drugs[drugId];

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
        </div>`;

    }

    const doseMl = (doseMg / concentration) * 5;

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
<span>💉 الجرعة</span>
<strong>${doseMg.toFixed(1)} mg</strong>
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

</div>

`;

    saveHistory(drug.name, weight, doseMg, doseMl);

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

localStorage.setItem("lastDrug", drug.name);

updateDashboard();
    let history =
        JSON.parse(localStorage.getItem("history")) || [];

    history.unshift({

        drug,
        weight,
        dose: dose.toFixed(1),
        ml: ml.toFixed(1)

    });

    history = history.slice(0, 5);

    localStorage.setItem("history", JSON.stringify(history));

    loadHistory();

}

function loadHistory() {

    const history =
        JSON.parse(localStorage.getItem("history")) || [];

    historyDiv.innerHTML = "<h3>آخر العمليات</h3>";

    history.forEach(item => {

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

const favoritesList = document.getElementById("favoritesList");

function loadFavorites(){
updateDashboard();
    let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

    if(favorites.length===0){

        favoritesList.innerHTML="لا توجد أدوية محفوظة.";

        return;

    }

    favoritesList.innerHTML="";

    favorites.forEach((drug,index)=>{

        favoritesList.innerHTML+=`

<div class="history-item">

💊 ${drug}

<button onclick="removeFavorite(${index})"
updateDashboard();
style="
margin-top:10px;
background:#ef4444;
padding:8px;
font-size:14px;">
❌ حذف
</button>

</div>

`;

    });

}

document.getElementById("favorite").addEventListener("click",function(){

    if(!drugSelect.value){

        alert("اختر دواء أولاً");

        return;

    }

    let favorites=
    JSON.parse(localStorage.getItem("favorites"))||[];

    const drugName=drugs[drugSelect.value].name;

    if(!favorites.includes(drugName)){

        favorites.push(drugName);

        localStorage.setItem("favorites",JSON.stringify(favorites));

    }

    loadFavorites();

    alert("⭐ تمت الإضافة للمفضلة");

});

function removeFavorite(index){

    let favorites=
    JSON.parse(localStorage.getItem("favorites"))||[];

    favorites.splice(index,1);

    localStorage.setItem("favorites",JSON.stringify(favorites));

    loadFavorites();

}

loadFavorites();

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

        alert(

`💊 ${drug.name}

📂 ${drug.category}

⏰ ${drug.frequency}

🚫 Max Dose: ${drug.maxDose} mg

📝 ${drug.notes}`

        );

    });

}
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
// تغيير اللون
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

    document.documentElement.style.setProperty("--main-color", savedColor);

    colorIndex = colors.indexOf(savedColor);

    if (colorIndex < 0) colorIndex = 0;

}

if (colorBtn) {

    colorBtn.addEventListener("click", function () {

        colorIndex++;

        if (colorIndex >= colors.length)
            colorIndex = 0;

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
document.getElementById("showFavorites").addEventListener("click",function(){

    const fav=document.getElementById("favorites");

    if(fav.style.display==="none" || fav.style.display===""){

        fav.style.display="block";

    }else{

        fav.style.display="none";

    }
// ==========================
// Dashboard
// ==========================

function updateDashboard() {

    // عدد عمليات الحساب
    let calcCount =
        parseInt(localStorage.getItem("calcCount")) || 0;

    document.getElementById("calcCount").innerText = calcCount;

    // عدد المفضلة
    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    document.getElementById("favCount").innerText = favorites.length;

    // آخر دواء
    let lastDrug =
        localStorage.getItem("lastDrug") || "-";

    document.getElementById("lastDrug").innerText = lastDrug;

}

updateDashboard();
});
