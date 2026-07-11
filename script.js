document.getElementById("calculate").addEventListener("click", function () {

const weight = parseFloat(document.getElementById("weight").value);
const drug = document.getElementById("drug").value;

let result = "";

if (!weight || !drug) {
    result = "يرجى إدخال الوزن واختيار الدواء.";
}
else if (drug === "paracetamol") {

    const dose = weight * 15;

    result = `جرعة الباراسيتامول: ${dose.toFixed(1)} mg لكل جرعة.`;

}
else if (drug === "ibuprofen") {

    const dose = weight * 10;

    result = `جرعة الإيبوبروفين: ${dose.toFixed(1)} mg لكل جرعة.`;

}
else if (drug === "amoxicillin") {

    const dose = weight * 25;

    result = `جرعة الأموكسيسيلين: ${dose.toFixed(1)} mg لكل جرعة.`;

}

document.getElementById("result").innerHTML = result;

});
