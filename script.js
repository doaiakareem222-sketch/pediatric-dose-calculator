// =========================
// حساب الجرعة
// =========================

document.getElementById("calculate").addEventListener("click", function () {

    const age = document.getElementById("age").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const drugId = document.getElementById("drug").value;
    const strengthIndex = document.getElementById("strength").value;

    const result = document.getElementById("result");

    if (!weight || !drugId) {
        result.innerHTML = `
        <div style="color:red;font-weight:bold;">
        يرجى اختيار الدواء وإدخال الوزن.
        </div>`;
        return;
    }

    const drug = drugs[drugId];

    if (drug.strengths && strengthIndex === "") {
        result.innerHTML = `
        <div style="color:red;font-weight:bold;">
        يرجى اختيار تركيز الدواء.
        </div>`;
        return;
    }

    let concentration = drug.concentration;

    if (drug.strengths) {
        concentration = drug.strengths[strengthIndex].concentration;
    }

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
        ⚠️ الجرعة المحسوبة تجاوزت الحد الأقصى، لذلك تم اعتماد الحد الأقصى الموصى به.
        </div>`;
    }

    const doseMl = (doseMg / concentration) * 5;

    result.innerHTML = `
let history = JSON.parse(localStorage.getItem("history")) || [];

history.unshift({

drug:drug.name,

age:age,

weight:weight,

dose:doseMg.toFixed(1),

ml:doseMl.toFixed(1)

});

history = history.slice(0,5);

localStorage.setItem("history",JSON.stringify(history));

loadHistory();
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
            <span>🧪 التركيز</span>
            <strong>${concentration} mg / 5 mL</strong>
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
            <strong>${drug.notes || "لا توجد ملاحظات."}</strong>
        </div>

        ${warning}

    </div>

    `;

});


// =========================
// إعادة التعيين
// =========================

document.getElementById("reset").addEventListener("click", function () {

    document.getElementById("drug").value = "";
    document.getElementById("strength").innerHTML =
    '<option value="">اختر التركيز</option>';

    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";

    document.getElementById("result").innerHTML = "";

});


// =========================
// نسخ النتيجة
// =========================

document.getElementById("copy").addEventListener("click", function () {

    const text = document.getElementById("result").innerText;

    if (text.trim() === "") {
        alert("لا توجد نتيجة لنسخها.");
        return;
    }

    navigator.clipboard.writeText(text);

    alert("✅ تم نسخ النتيجة.");

});


// =========================
// البحث عن الدواء
// =========================

const searchInput = document.getElementById("searchDrug");
const drugSelect = document.getElementById("drug");
const strengthSelect = document.getElementById("strength");

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


// =========================
// المفضلة
// =========================

document.getElementById("favorite").addEventListener("click", function () {

    const drug = drugSelect.value;

    if (!drug) {

        alert("اختر دواء أولاً");

        return;

    }

    localStorage.setItem("favoriteDrug", drug);

    alert("⭐ تم حفظ الدواء في المفضلة");

});

const savedDrug = localStorage.getItem("favoriteDrug");

if (savedDrug) {

    drugSelect.value = savedDrug;

}


// =========================
// تغيير التركيز حسب الدواء
// =========================

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
document.getElementById("info").addEventListener("click", function(){

const drugId=document.getElementById("drug").value;

if(!drugId){

alert("اختر دواء أولاً");

return;

}

const drug=drugs[drugId];

alert(

`💊 ${drug.name}

📂 التصنيف:
${drug.category}

✅ الاستعمالات:
${drug.indication}

🤢 الآثار الجانبية:
${drug.sideEffects}

🚫 موانع الاستعمال:
${drug.contraindications}

📦 الحفظ:
${drug.storage}

📝 ملاحظات:
${drug.notes}`

);

});
function loadHistory(){

const historyDiv=document.getElementById("history");

const history=JSON.parse(localStorage.getItem("history"))||[];

historyDiv.innerHTML="";

history.forEach(item=>{

historyDiv.innerHTML+=`

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
