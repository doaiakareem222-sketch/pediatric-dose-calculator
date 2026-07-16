// ==========================
// العناصر الأساسية
// ==========================

const drugSelect = document.getElementById("drug");
const strengthSelect = document.getElementById("strength");
const result = document.getElementById("result");
const historyDiv = document.getElementById("history");

// ==========================
// تغيير التركيز حسب الدواء
// ==========================

drugSelect.addEventListener("change", function () {

    strengthSelect.innerHTML =
    '<option value="">اختر التركيز</option>';

    const drug = drugs[this.value];

    if (!drug || !drug.strengths) return;

    drug.strengths.forEach((item, index) => {

        strengthSelect.innerHTML +=
        `<option value="${index}">
            ${item.name}
        </option>`;

    });

});

// ==========================
// البحث عن الدواء
// ==========================

document.getElementById("searchDrug")
.addEventListener("input", function () {

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
// حساب الجرعة
// ==========================

document.getElementById("calculate")
.addEventListener("click", function () {

    const age = document.getElementById("age").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const drugId = drugSelect.value;
    const strengthIndex = strengthSelect.value;

    if (!weight || !drugId || strengthIndex === "") {

        result.innerHTML = `
        <div style="color:red;font-weight:bold;">
        يرجى اختيار الدواء والتركيز وإدخال الوزن.
        </div>`;

        return;

    }

    const drug = drugs[drugId];
    const concentration =
    drug.strengths[strengthIndex].concentration;

    let doseMg = weight * drug.mgPerKg;

    if (doseMg > drug.maxDose) {
        doseMg = drug.maxDose;
    }

    const doseMl = (doseMg / concentration) * 5;

    result.innerHTML = `

    <div class="result-card">

        <h2>${drug.name}</h2>

        <div class="result-item">
            <span>📂 الفئة</span>
            <strong>${drug.category}</strong>
        </div>

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
            <span>📝 ملاحظات</span>
            <strong>${drug.notes}</strong>
        </div>

    </div>
    `;

    saveHistory(drug.name, weight, doseMg, doseMl);

});

// ==========================
// حفظ السجل
// ==========================

function saveHistory(drug, weight, dose, ml) {

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

// ==========================
// عرض السجل
// ==========================

function loadHistory() {

    const history =
    JSON.parse(localStorage.getItem("history")) || [];

    historyDiv.innerHTML = "";

    history.forEach(item => {

        historyDiv.innerHTML += `

        <div class="history-item">

            💊 ${item.drug}<br>
            ⚖️ ${item.weight} Kg<br>
            💉 ${item.dose} mg<br>
            🥄 ${item.ml} mL

        </div>`;

    });

}

loadHistory();

// ==========================
// إعادة التعيين
// ==========================

document.getElementById("reset")
.addEventListener("click", function () {

    drugSelect.value = "";

    strengthSelect.innerHTML =
    '<option value="">اختر التركيز</option>';

    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";

    result.innerHTML = "";

});

// ==========================
// نسخ النتيجة
// ==========================

document.getElementById("copy")
.addEventListener("click", function () {

    const text = result.innerText;

    if (text.trim() === "") {
        alert("لا توجد نتيجة لنسخها.");
        return;
    }

    navigator.clipboard.writeText(text);

    alert("✅ تم نسخ النتيجة.");

});

// ==========================
// معلومات الدواء
// ==========================

document.getElementById("info")
.addEventListener("click", function () {

    const drugId = drugSelect.value;

    if (!drugId) {
        alert("اختر دواء أولاً");
        return;
    }

    const drug = drugs[drugId];

    alert(
`💊 ${drug.name}

📂 الفئة:
${drug.category}

⏰ التكرار:
${drug.frequency}

🚫 الحد الأقصى:
${drug.maxDose} mg

📝 ملاحظات:
${drug.notes}`
    );

});

// ==========================
// المفضلة
// ==========================

document.getElementById("favorite")
.addEventListener("click", function () {

    const drug = drugSelect.value;

    if (!drug) {
        alert("اختر دواء أولاً");
        return;
    }

    localStorage.setItem("favoriteDrug", drug);

    alert("⭐ تم حفظ الدواء في المفضلة");

});

const savedDrug =
localStorage.getItem("favoriteDrug");

if (savedDrug) {

    drugSelect.value = savedDrug;

    drugSelect.dispatchEvent(new Event("change"));

}
const diseaseSelect = document.getElementById("disease");

if (diseaseSelect) {

    diseaseSelect.addEventListener("change", function () {

        switch (this.value) {

            case "fever":
            case "pain":
                document.getElementById("drug").value = "paracetamol";
                break;

            case "otitis":
            case "pharyngitis":
                document.getElementById("drug").value = "amoxicillin";
                break;

            case "sinusitis":
                document.getElementById("drug").value = "coamoxiclav";
                break;

            case "pneumonia":
                document.getElementById("drug").value = "azithromycin";
                break;

            case "uti":
                document.getElementById("drug").value = "cefixime";
                break;

            case "diarrhea":
                document.getElementById("drug").value = "zinc";
                break;

            case "vomiting":
                document.getElementById("drug").value = "ondansetron";
                break;

            case "asthma":
                document.getElementById("drug").value = "salbutamol";
                break;

            case "allergy":
                document.getElementById("drug").value = "cetirizine";
                break;

            case "fungal":
                document.getElementById("drug").value = "fluconazole";
                break;

            case "worms":
                document.getElementById("drug").value = "albendazole";
                break;

            default:
                document.getElementById("drug").value = "";
        }

        document.getElementById("drug").dispatchEvent(new Event("change"));

    });

}
const drugSelect = document.getElementById("drug");

drugSelect.addEventListener("change", function(){

    const drug = drugs[this.value];

    const card = document.getElementById("drugCard");

    if(!drug){

        card.style.display="none";

        return;

    }

    card.style.display="block";

    card.innerHTML=`

<h3>💊 ${drug.name}</h3>

<p><strong>📂 التصنيف:</strong> ${drug.category}</p>

<p><strong>⏰ التكرار:</strong> ${drug.frequency}</p>

<p><strong>🚫 الحد الأقصى:</strong> ${drug.maxDose} mg</p>

<p><strong>📝 الملاحظات:</strong> ${drug.notes}</p>

`;

});
