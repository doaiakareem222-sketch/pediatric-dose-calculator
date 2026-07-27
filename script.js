
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
