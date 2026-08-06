// ======================================================
// DoseCare AI
// Menu Controller
// ======================================================

console.log("Menu Loaded");

// ======================================================
// Menu Elements
// ======================================================
alert("وصلت إلى جزء الحاسبات");
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

// ======================================================
// Open Menu
// ======================================================

if (menuBtn && sideMenu && menuOverlay) {

    menuBtn.addEventListener("click", () => {

        sideMenu.classList.add("open");
        
        menuOverlay.classList.add("show");

    });

    menuOverlay.addEventListener("click", () => {

        sideMenu.classList.remove("open");
        menuOverlay.classList.remove("show");

    });

}

// ======================================================
// Theme Menu
// ======================================================

const themeBtn = document.getElementById("themeBtn");
const themeMenu = document.getElementById("themeMenu");

if (themeBtn && themeMenu) {

    themeBtn.addEventListener("click", () => {

        themeMenu.classList.toggle("show");

    });

}

// ======================================================
// Theme Switch
// ======================================================

const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");

    });

}

if (lightBtn) {

    lightBtn.addEventListener("click", () => {

        document.body.classList.add("light");
        localStorage.setItem("theme", "light");

    });

}

// ======================================================
// Load Saved Theme
// ======================================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

}

// ======================================================
// About Modal
// ======================================================

const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeAbout = document.getElementById("closeAbout");
const closeAboutIcon = document.getElementById("closeAboutIcon");

if (aboutBtn && aboutModal) {

    aboutBtn.addEventListener("click", () => {

        aboutModal.style.display = "flex";

    });

}

if (closeAbout) {

    closeAbout.addEventListener("click", () => {

        aboutModal.style.display = "none";

    });

}

if (closeAboutIcon) {

    closeAboutIcon.addEventListener("click", () => {

        aboutModal.style.display = "none";

    });

}

if (aboutModal) {

    aboutModal.addEventListener("click", (e) => {

        if (e.target === aboutModal) {

            aboutModal.style.display = "none";

        }

    });

}
// ======================================================
// Contact & Support
// ======================================================

const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");

const closeContact = document.getElementById("closeContact");

const telegramBtn = document.getElementById("telegramBtn");
const bugBtn = document.getElementById("bugBtn");
const featureBtn = document.getElementById("featureBtn");
const rateBtn = document.getElementById("rateBtn");

if(contactBtn){

    contactBtn.addEventListener("click",()=>{

        contactModal.style.display="flex";

    });

}

if(closeContact){

    closeContact.addEventListener("click",()=>{

        contactModal.style.display="none";

    });

}

if(contactModal){

    contactModal.addEventListener("click",(e)=>{

        if(e.target===contactModal){

            contactModal.style.display="none";

        }

    });

}

// Telegram

if(telegramBtn){

    telegramBtn.addEventListener("click",()=>{

        window.open(
        "https://t.me/ph1_dk",
        "_blank"
        );

    });

}

// Report Bug

if(bugBtn){

    bugBtn.addEventListener("click",()=>{

        const text =
`🐞 Bug Report

Device:

Problem:

Steps to reproduce:

Screenshot:
`;

        window.open(
`https://t.me/ph1_dk?text=${encodeURIComponent(text)}`,
"_blank"
);

    });

}

// Feature Request

if(featureBtn){

    featureBtn.addEventListener("click",()=>{

        const text =
`💡 Feature Request

I would like DoseCare AI to include:

`;

        window.open(
`https://t.me/ph1_dk?text=${encodeURIComponent(text)}`,
"_blank"
);

    });

}

// Rate DoseCare

if(rateBtn){

    rateBtn.addEventListener("click",()=>{

        alert(
`⭐⭐⭐⭐⭐

Thank you for using DoseCare AI ❤️

Your support motivates us to keep improving the application.`
        );

    });

}
const drugCounter=document.getElementById("drugCounter");

if(drugCounter){

drugCounter.innerHTML=
`${Object.keys(drugs).length} Drugs Available`;

}

// ======================================================
// Drug Calculators
// ======================================================

const calculatorBtn =
document.getElementById("calculatorBtn");

const calculatorModal =
document.getElementById("calculatorModal");

const closeCalculator =
document.getElementById("closeCalculator");

if(calculatorBtn){

calculatorBtn.addEventListener("click",()=>{

calculatorModal.style.display="flex";

});

}

if(closeCalculator){

closeCalculator.addEventListener("click",()=>{

calculatorModal.style.display="none";

});

}

if(calculatorModal){

calculatorModal.addEventListener("click",(e)=>{

if(e.target===calculatorModal){

calculatorModal.style.display="none";

}

});

}
// ======================================
// Emergency Guide
// ======================================

const emergencyBtn =
document.getElementById("emergencyBtn");

const emergencyModal =
document.getElementById("emergencyModal");

const closeEmergency =
document.getElementById("closeEmergency");

if (emergencyBtn) {

    emergencyBtn.addEventListener("click", () => {

        emergencyModal.style.display = "flex";

    });

}

if (closeEmergency) {

    closeEmergency.addEventListener("click", () => {

        emergencyModal.style.display = "none";

    });

}

if (emergencyModal) {

    emergencyModal.addEventListener("click", (e) => {

        if (e.target === emergencyModal) {

            emergencyModal.style.display = "none";

        }

    });

}
// ======================================
// Emergency Details
// ======================================

document.querySelectorAll(".emergency-card").forEach(card => {

    card.addEventListener("click", () => {

        const id = card.dataset.id;

        const emergency = emergencyDB[id];

        if (!emergency) return;

        document.getElementById("emergencyTitle").textContent =
            emergency.title;

        document.getElementById("emergencySymptoms").innerHTML =
            emergency.symptoms.map(x => "• " + x).join("<br>");

        document.getElementById("emergencyTreatment").innerHTML =
            emergency.treatment.map(x => "• " + x).join("<br>");

        document.getElementById("emergencyDose").innerHTML =
            emergency.drugs.map(x => "• " + x).join("<br>");

        document.getElementById("emergencyWarning").textContent =
            emergency.warning;

        document.getElementById("emergencyDetails").style.display = "flex";

    });

});
// ======================================
// Close Emergency Details
// ======================================

document.getElementById("closeEmergencyDetails")
.addEventListener("click", () => {

    document.getElementById("emergencyDetails").style.display = "none";

});
// ======================================
// Anaphylaxis Guide
// ======================================

const anaphylaxisBtn =
document.getElementById("anaphylaxisBtn");

const anaphylaxisModal =
document.getElementById("anaphylaxisModal");

const closeAnaphylaxis =
document.getElementById("closeAnaphylaxis");

if(anaphylaxisBtn){

    anaphylaxisBtn.addEventListener("click",()=>{

        emergencyModal.style.display="none";

        anaphylaxisModal.style.display="flex";

    });

}

if(closeAnaphylaxis){

    closeAnaphylaxis.addEventListener("click",()=>{

        anaphylaxisModal.style.display="none";

    });

}

if(anaphylaxisModal){

    anaphylaxisModal.addEventListener("click",(e)=>{

        if(e.target===anaphylaxisModal){

            anaphylaxisModal.style.display="none";

        }

    });

}
// ======================================
// Status Asthmaticus
// ======================================

const asthmaBtn =
document.getElementById("asthmaBtn");

const asthmaModal =
document.getElementById("asthmaModal");

const closeAsthma =
document.getElementById("closeAsthma");

if(asthmaBtn){

    asthmaBtn.addEventListener("click",()=>{

        emergencyModal.style.display="none";

        asthmaModal.style.display="flex";

    });

}

if(closeAsthma){

    closeAsthma.addEventListener("click",()=>{

        asthmaModal.style.display="none";

    });

}

if(asthmaModal){

    asthmaModal.addEventListener("click",(e)=>{

        if(e.target===asthmaModal){

            asthmaModal.style.display="none";

        }

    });

}
// ======================================
// Hypoglycemia
// ======================================

const hypoglycemiaBtn =
document.getElementById("hypoglycemiaBtn");

const hypoglycemiaModal =
document.getElementById("hypoglycemiaModal");

const closeHypoglycemia =
document.getElementById("closeHypoglycemia");

if(hypoglycemiaBtn){

    hypoglycemiaBtn.addEventListener("click",()=>{

        emergencyModal.style.display="none";

        hypoglycemiaModal.style.display="flex";

    });

}

if(closeHypoglycemia){

    closeHypoglycemia.addEventListener("click",()=>{

        hypoglycemiaModal.style.display="none";

    });

}

if(hypoglycemiaModal){

    hypoglycemiaModal.addEventListener("click",(e)=>{

        if(e.target===hypoglycemiaModal){

            hypoglycemiaModal.style.display="none";

        }

    });

}
// ======================================
// Febrile Seizure
// ======================================

const febrileBtn =
document.getElementById("seizureBtn");
const febrileModal =
document.getElementById("febrileModal");

const closeFebrile =
document.getElementById("closeFebrile");

if(febrileBtn){

    febrileBtn.addEventListener("click",()=>{

        emergencyModal.style.display="none";

        febrileModal.style.display="flex";

    });

}

if(closeFebrile){

    closeFebrile.addEventListener("click",()=>{

        febrileModal.style.display="none";

    });

}

if(febrileModal){

    febrileModal.addEventListener("click",(e)=>{

        if(e.target===febrileModal){

            febrileModal.style.display="none";

        }

    });

}
// ======================================
// Dehydration
// ======================================

const dehydrationBtn =
document.getElementById("dehydrationBtn");

const dehydrationModal =
document.getElementById("dehydrationModal");

const closeDehydration =
document.getElementById("closeDehydration");

if(dehydrationBtn){

    dehydrationBtn.addEventListener("click",()=>{

        emergencyModal.style.display="none";

        dehydrationModal.style.display="flex";

    });

}

if(closeDehydration){

    closeDehydration.addEventListener("click",()=>{

        dehydrationModal.style.display="none";

    });

}

if(dehydrationModal){

    dehydrationModal.addEventListener("click",(e)=>{

        if(e.target===dehydrationModal){

            dehydrationModal.style.display="none";

        }

    });

}
// ======================================================
// Open mg ⇄ mL Calculator
// ======================================================

const mgMlBtn = document.getElementById("mgMlBtn");
const mgMlModal = document.getElementById("mgMlModal");
const closeMgMl = document.getElementById("closeMgMl");

if (mgMlBtn) {

    mgMlBtn.addEventListener("click", () => {

        calculatorModal.style.display = "none";
        mgMlModal.style.display = "flex";

    });

}

if (closeMgMl) {

    closeMgMl.addEventListener("click", () => {

        mgMlModal.style.display = "none";

    });

}

if (mgMlModal) {

    mgMlModal.addEventListener("click", (e) => {

        if (e.target === mgMlModal) {

            mgMlModal.style.display = "none";

        }

    });

}
// ======================================================
// mg ⇄ mL Calculation
// ======================================================

const calcMg = document.getElementById("calcMg");
const calcConc = document.getElementById("calcConc");
const calculateMl = document.getElementById("calculateMl");
const calcResult = document.getElementById("calcResult");

if (calculateMl) {

    calculateMl.addEventListener("click", () => {

        const mg = parseFloat(calcMg.value);
        const conc = parseFloat(calcConc.value);

        if (isNaN(mg) || isNaN(conc) || mg <= 0 || conc <= 0) {

            calcResult.innerHTML = "⚠️ Please enter valid values";

            return;

        }

        const ml = ((mg / conc) * 5).toFixed(2);

        calcResult.innerHTML = `
        💉 Required Volume

        <br><br>

        <strong>${ml} mL</strong>
        `;

    });

}
// ======================================
// Open mg/kg Calculator
// ======================================

const mgKgBtn = document.getElementById("mgKgBtn");
const mgKgModal = document.getElementById("mgKgModal");
const closeMgKg = document.getElementById("closeMgKg");

if (mgKgBtn) {

    mgKgBtn.addEventListener("click", () => {

        calculatorModal.style.display = "none";
        mgKgModal.style.display = "flex";

    });

}

if (closeMgKg) {

    closeMgKg.addEventListener("click", () => {

        mgKgModal.style.display = "none";

    });

}

if (mgKgModal) {

    mgKgModal.addEventListener("click", (e) => {

        if (e.target === mgKgModal) {

            mgKgModal.style.display = "none";

        }

    });

}
// ======================================
// mg/kg Calculator
// ======================================

document.getElementById("calculateMgKg").addEventListener("click", () => {

    const weight = parseFloat(
        document.getElementById("kgWeight").value
    );

    const mgPerKg = parseFloat(
        document.getElementById("mgPerKg").value
    );

    if (!weight || !mgPerKg) {

        alert("Please enter Weight and mg/kg");

        return;

    }

    const totalDose = weight * mgPerKg;

    document.getElementById("mgKgResult").textContent =
        totalDose.toFixed(2) + " mg";

});
// ======================================
// Open Dose by Weight Calculator
// ======================================

const doseWeightBtn =
document.getElementById("doseWeightBtn");

const doseWeightModal =
document.getElementById("doseWeightModal");

const closeDoseWeight =
document.getElementById("closeDoseWeight");

if (doseWeightBtn) {

    doseWeightBtn.addEventListener("click", () => {

        calculatorModal.style.display = "none";

        doseWeightModal.style.display = "flex";

    });

}

if (closeDoseWeight) {

    closeDoseWeight.addEventListener("click", () => {

        doseWeightModal.style.display = "none";

    });

}

if (doseWeightModal) {

    doseWeightModal.addEventListener("click", (e) => {

        if (e.target === doseWeightModal) {

            doseWeightModal.style.display = "none";

        }

    });

}
// ======================================
// Dose by Weight Calculator
// ======================================

document.getElementById("calculateDoseWeight").addEventListener("click", () => {

    const weight = parseFloat(
        document.getElementById("doseWeightKg").value
    );

    const dosePerKg = parseFloat(
        document.getElementById("dosePerKg").value
    );

    const maxDose = parseFloat(
        document.getElementById("maxDose").value
    );

    if (!weight || !dosePerKg) {

        alert("Please enter Weight and Dose.");

        return;

    }

    let totalDose = weight * dosePerKg;

    if (!isNaN(maxDose) && totalDose > maxDose) {

        totalDose = maxDose;

    }

    document.getElementById("doseWeightResult").textContent =
        totalDose.toFixed(2) + " mg";

});
// ======================================
// Open IV Calculator
// ======================================

const ivBtn = document.getElementById("ivBtn");
const ivModal = document.getElementById("ivModal");
const closeIV = document.getElementById("closeIV");

if (ivBtn) {

    ivBtn.addEventListener("click", () => {

        calculatorModal.style.display = "none";
        ivModal.style.display = "flex";

    });

}

if (closeIV) {

    closeIV.addEventListener("click", () => {

        ivModal.style.display = "none";

    });

}

if (ivModal) {

    ivModal.addEventListener("click", (e) => {

        if (e.target === ivModal) {

            ivModal.style.display = "none";

        }

    });

}
// ======================================
// IV Fluid Calculator
// Holliday–Segar (4-2-1 Rule)
// ======================================

document.getElementById("calculateIV").addEventListener("click", () => {

    const weight = parseFloat(
        document.getElementById("ivWeight").value
    );

    if (!weight || weight <= 0) {

        alert("Please enter a valid weight.");

        return;

    }

    let rate = 0;

    if (weight <= 10) {

        rate = weight * 4;

    } else if (weight <= 20) {

        rate = 40 + ((weight - 10) * 2);

    } else {

        rate = 60 + ((weight - 20) * 1);

    }

    const daily = rate * 24;

    document.getElementById("ivResult").innerHTML = `
        ${rate.toFixed(1)} mL/hr
        <br><br>
        ${daily.toFixed(0)} mL/day
    `;

});
