document.getElementById("calculate").addEventListener("click", function () {

    const age = document.getElementById("age").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const drugId = document.getElementById("drug").value;

    const result = document.getElementById("result");

    if (!weight || !drugId) {
        result.innerHTML = `
        <div style="color:red;font-weight:bold;">
            يرجى اختيار الدواء وإدخال الوزن.
        </div>
        `;
        return;
    }

    const drug = drugs[drugId];

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
            font-weight:bold;
        ">
            ⚠️ الجرعة المحسوبة تجاوزت الحد الأقصى، لذلك تم اعتماد الحد الأقصى الموصى به.
        </div>
        `;
    }

    const doseMl = (doseMg / drug.concentration) * 5;

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
document.getElementById("reset").addEventListener("click", function () {

    document.getElementById("drug").value = "";
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";

    document.getElementById("result").innerHTML = "";

});
document.getElementById("copy").addEventListener("click", function () {

    const text = document.getElementById("result").innerText;

    if(text.trim() === ""){
        alert("لا توجد نتيجة لنسخها.");
        return;
    }

    navigator.clipboard.writeText(text);

    alert("✅ تم نسخ النتيجة.");
});
const searchInput = document.getElementById("searchDrug");
const drugSelect = document.getElementById("drug");

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    for (let option of drugSelect.options) {

        if (option.value === "") continue;

        if (option.text.toLowerCase().includes(value)) {
            drugSelect.value = option.value;
            break;
        }

    }

});
document.getElementById("favorite").addEventListener("click", function(){

    const drug = document.getElementById("drug").value;

    if(!drug){
        alert("اختر دواء أولاً");
        return;
    }

    localStorage.setItem("favoriteDrug", drug);

    alert("⭐ تم حفظ الدواء في المفضلة");
});
const savedDrug = localStorage.getItem("favoriteDrug");

if(savedDrug){
    document.getElementById("drug").value = savedDrug;
}
