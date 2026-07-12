document.getElementById("calculate").addEventListener("click", function () {

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
        <h3>${drug.name}</h3>
        <p><strong>الجرعة:</strong> ${doseMg.toFixed(1)} mg</p>
        <p><strong>تعادل:</strong> ${doseMl.toFixed(1)} mL</p>
        <p><strong>التكرار:</strong> ${drug.frequency}</p>
        <p><strong>الحد الأقصى:</strong> ${drug.maxDose} mg</p>
    `;
});
