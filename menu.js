// ======================================================
// DoseCare AI
// Menu Controller
// ======================================================

console.log("Menu Loaded");

// ======================================================
// Menu Elements
// ======================================================

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
