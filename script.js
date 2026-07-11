document.getElementById("calculate").addEventListener("click", function () {

const weight = parseFloat(document.getElementById("weight").value);
const drug = document.getElementById("drug").value;

let result = "";

if (!weight || !drug) {
    result = "يرجى إدخال الوزن واختيار الدواء.";
}
else {

    const medicine = drugs[drug];

    if (!medicine) {
        result = "الدواء غير موجود.";
    } else {

        const dose = weight * medicine.mgPerKg;

        result = `
        <b>${medicine.name}</b><br>
        الجرعة: ${dose.toFixed(1)} mg<br>
        عدد المرات: ${medicine.frequency}<br>
        الحد الأقصى: ${medicine.maxDose} mg
        `;

    }
}

document.getElementById("result").innerHTML = result;

});
