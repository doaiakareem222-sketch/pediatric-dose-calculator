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

menuBtn.addEventListener("click", () => {

    sideMenu.classList.add("open");

    menuOverlay.style.display = "block";

});

// ======================================================
// Close Menu
// ======================================================

menuOverlay.addEventListener("click", () => {

    sideMenu.classList.remove("open");

    menuOverlay.style.display = "none";

});
// ===============================
// Language
// ===============================

let currentLanguage = "en";
const language = {

    en: {

        language: "🌐 Language",

        appearance: "🌙 Appearance",

        about: "ℹ️ About",

        contact: "📩 Contact & Support"

    },

    ar: {

        language: "🌐 اللغة",

        appearance: "🌙 المظهر",

        about: "ℹ️ حول التطبيق",

        contact: "📩 التواصل والدعم"

    }

};
// ===============================
// Update Language
// ===============================

function updateLanguage(){
alert(currentLanguage);
    document.getElementById("languageBtn").innerHTML =
    language[currentLanguage].language;

    document.getElementById("themeBtn").innerHTML =
    language[currentLanguage].appearance;

    document.getElementById("aboutBtn").innerHTML =
    language[currentLanguage].about;

    document.getElementById("contactBtn").innerHTML =
    language[currentLanguage].contact;

}
// ===============================
// Language Buttons
// ===============================

const englishBtn = document.getElementById("englishBtn");
const arabicBtn = document.getElementById("arabicBtn");

englishBtn.addEventListener("click",()=>{

    currentLanguage = "en";

    localStorage.setItem("language","en");

    updateLanguage();

});

arabicBtn.addEventListener("click",()=>{

    currentLanguage = "ar";

    localStorage.setItem("language","ar");

    updateLanguage();
    
    });

 // ===============================
// Load Saved Language
//  ===============================

const savedLanguage = localStorage.getItem("language");

if(savedLanguage){

    currentLanguage = savedLanguage;

}

updateLanguage();
});
