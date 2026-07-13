document.getElementById("calculate").addEventListener("click", function () {

    const age = document.getElementById("age").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const drugId = document.getElementById("drug").value;

    const result = document.getElementById("result");

    if (!weight || !drugId) {
        result.innerHTML = "يرجى اختيار الدواء وإدخال الوزن.";
        return;
    }

    const drug = drugs[drugId];

    const doseMg = weight * drug.mgPerKg;
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

    </div>
    `;

});
