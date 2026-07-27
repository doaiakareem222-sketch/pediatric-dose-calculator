
// ======================================================
// DoseCare v7
// Main Application Script
// ======================================================


console.log("DoseCare v7 Started");


// ======================================================
// DOM Elements
// ======================================================

const welcomeScreen = document.getElementById("welcomeScreen");

const mainApp = document.getElementById("mainApp");

const diseaseSelect = document.getElementById("disease");

const diseaseGuide = document.getElementById("diseaseGuide");

const searchDrug = document.getElementById("searchDrug");

const drugSelect = document.getElementById("drug");

const strengthSelect = document.getElementById("strength");

const ageInput = document.getElementById("age");

const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculate");

const result = document.getElementById("result");

const drugCard = document.getElementById("drugCard");

const drugInfoContent = document.getElementById("drugInfoContent");

const clinicalAlert = document.getElementById("clinicalAlert");

const historyBox = document.getElementById("history");

const calcCount = document.getElementById("calcCount");

const lastDrug = document.getElementById("lastDrug");


// ======================================================
// Welcome Screen
// ======================================================


window.addEventListener("load",()=>{


setTimeout(()=>{

welcomeScreen.classList.add("hide");


},2500);


});
// ======================================================
// Load Drugs Database
// ======================================================


let allDrugs = Object.values(drugs);


// ======================================================
// Populate Drug Select
// ======================================================


function loadDrugs(list = allDrugs){


    drugSelect.innerHTML = `

    <option value="">
    Select Drug
    </option>

    `;


    list.forEach(drug=>{


        const option = document.createElement("option");


        option.value = drug.id;


        option.textContent =
        `${drug.name} (${drug.genericName})`;


        drugSelect.appendChild(option);


    });


}



loadDrugs();


// ======================================================
// Search Drug
// ======================================================


searchDrug.addEventListener("input",()=>{


    const keyword =
    searchDrug.value.toLowerCase();


    const filtered =
    allDrugs.filter(drug=>{


        return (

        drug.name.toLowerCase().includes(keyword)

        ||

        drug.genericName.toLowerCase().includes(keyword)

        ||

        drug.brandNames.some(brand=>

            brand.toLowerCase().includes(keyword)

        )

        );


    });


    loadDrugs(filtered);


});
// ======================================================
// Load Drug Strengths
// ======================================================


drugSelect.addEventListener("change",()=>{


    const selectedId = drugSelect.value;


    strengthSelect.innerHTML = `

    <option value="">
    Select Strength
    </option>

    `;


    if(!selectedId) return;


    const selectedDrug = drugs[selectedId];


    if(!selectedDrug) return;


    selectedDrug.strengths.forEach(strength=>{


        const option = document.createElement("option");


        option.value = strength.concentration;


        option.textContent = strength.name;


        strengthSelect.appendChild(option);


    });


});
// ======================================================
// Filter Drugs By Disease
// ======================================================


diseaseSelect.addEventListener("change",()=>{


    const selectedDisease = diseaseSelect.value;


    if(!selectedDisease){


        loadDrugs();


        diseaseGuide.innerHTML = "";


        return;

    }



    const filteredDrugs = allDrugs.filter(drug=>{


        return drug.diseases.includes(selectedDisease);


    });



    loadDrugs(filteredDrugs);



    // Disease Guide


    const diseaseNames = {


        fever:"Fever Management",

        pain:"Pain Management",

        otitis:"Otitis Media",

        pharyngitis:"Pharyngitis",

        sinusitis:"Sinusitis",

        pneumonia:"Pneumonia",

        uti:"Urinary Tract Infection",

        diarrhea:"Diarrhea",

        vomiting:"Vomiting",

        asthma:"Asthma",

        allergy:"Allergy",

        fungal:"Fungal Infection",

        worms:"Worm Infestation"

    };



    diseaseGuide.innerHTML = `

    <div class="disease-guide">

        Selected:
        <strong>

        ${diseaseNames[selectedDisease]}

        </strong>

        <br>

        Available medications:
        <strong>

        ${filteredDrugs.length}

        </strong>

    </div>

    `;

strengthSelect.innerHTML = `

<option value="">
Select Strength
</option>

`;
});
// ======================================================
// Dose Calculation
// ======================================================


const resultCard = document.getElementById("resultCard");

const drugNameResult = document.getElementById("drugName");

const doseMgResult = document.getElementById("doseMg");

const doseMlResult = document.getElementById("doseMl");

const frequencyResult = document.getElementById("frequency");

const noteResult = document.getElementById("note");



calculateBtn.addEventListener("click",()=>{


    const selectedDrugId = drugSelect.value;

    const weight = Number(weightInput.value);

    const age = Number(ageInput.value);

    const selectedStrength = Number(strengthSelect.value);



    if(!selectedDrugId){

        alert("Please select a drug");

        return;

    }


    if(!weight || weight <= 0){

        alert("Please enter valid weight");

        return;

    }



    const drug = drugs[selectedDrugId];



    if(!drug){

        return;

    }



    // Calculate mg dose

    let doseMg = weight * drug.mgPerKg;



    // Maximum dose protection

    if(drug.maxDose && doseMg > drug.maxDose){

        doseMg = drug.maxDose;

    }



    let doseMl = "-";



    // Convert mg to ml

    if(selectedStrength){


        doseMl =

        ((doseMg / selectedStrength) * 5)

        .toFixed(2);


    }



    // Display Result


    drugNameResult.textContent =
    drug.name;


    doseMgResult.textContent =
    `${doseMg.toFixed(2)} mg`;


    doseMlResult.textContent =
    doseMl === "-"
    ? "-"
    : `${doseMl} mL`;



    frequencyResult.textContent =
    drug.frequency;



    noteResult.textContent =
    drug.notes || "Follow clinical guidelines";



    resultCard.style.display="block";



});
