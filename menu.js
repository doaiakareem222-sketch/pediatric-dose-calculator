// ======================================================
// DoseCare AI
// Menu Controller
// ======================================================

console.log("Menu Loaded");
alert("menu يعمل");
// ======================================================
// Menu Elements
// ======================================================

const menuBtn = document.getElementById("menuBtn");

const sideMenu = document.getElementById("sideMenu");

const menuOverlay = document.getElementById("menuOverlay");


// ======================================================
// Open Menu
// ======================================================

if(menuBtn && sideMenu && menuOverlay){

    menuBtn.addEventListener("click",()=>{

        sideMenu.classList.add("open");

        menuOverlay.classList.add("show");

    });


    // ======================================================
    // Close Menu
    // ======================================================

    menuOverlay.addEventListener("click",()=>{

        sideMenu.classList.remove("open");

        menuOverlay.classList.remove("show");

    });

}



// ======================================================
// Language System
// ======================================================

let currentLanguage = 
localStorage.getItem("language") || "en";



const language = {

    en:{

        language:"🌐 Language",

        appearance:"🌙 Appearance",

        about:"ℹ️ About",

        contact:"📩 Contact & Support"

    },


    ar:{

        language:"🌐 اللغة",

        appearance:"🌙 المظهر",

        about:"ℹ️ حول التطبيق",

        contact:"📩 التواصل والدعم"

    }

};



// ======================================================
// Language Elements
// ======================================================

const languageBtn = document.getElementById("languageBtn");

const languageMenu = document.getElementById("languageMenu");

const englishBtn = document.getElementById("englishBtn");

const arabicBtn = document.getElementById("arabicBtn");



// ======================================================
// Open Language Menu
// ======================================================

if(languageBtn && languageMenu){

    languageBtn.addEventListener("click",()=>{

        languageMenu.classList.toggle("show");

    });

}



// ======================================================
// Update Menu Language
// ======================================================

function updateLanguage(){


    const lang = language[currentLanguage];


    const langBtn = document.getElementById("languageBtn");

    const themeBtn = document.getElementById("themeBtn");

    const aboutBtn = document.getElementById("aboutBtn");

    const contactBtn = document.getElementById("contactBtn");



    if(langBtn)

        langBtn.innerHTML = lang.language;


    if(themeBtn)

        themeBtn.innerHTML = lang.appearance;


    if(aboutBtn)

        aboutBtn.innerHTML = lang.about;


    if(contactBtn)

        contactBtn.innerHTML = lang.contact;


}



// ======================================================
// Change To English
// ======================================================

if(englishBtn){

    englishBtn.addEventListener("click",()=>{


        currentLanguage="en";


        localStorage.setItem(
            "language",
            "en"
        );


        updateLanguage();


    });

}



// ======================================================
// Change To Arabic
// ======================================================

if(arabicBtn){

    arabicBtn.addEventListener("click",()=>{


        currentLanguage="ar";


        localStorage.setItem(
            "language",
            "ar"
        );


        updateLanguage();


    });

}
// ======================================================
// Initialize Language
// ======================================================

updateLanguage();



// ======================================================
// Theme Menu
// ======================================================

const themeBtn = document.getElementById("themeBtn");

const themeMenu = document.getElementById("themeMenu");


if(themeBtn && themeMenu){

    themeBtn.addEventListener("click",()=>{

        themeMenu.classList.toggle("show");

    });

}



// ======================================================
// Theme Switch
// ======================================================

const darkBtn = document.getElementById("darkBtn");

const lightBtn = document.getElementById("lightBtn");



if(darkBtn){

    darkBtn.addEventListener("click",()=>{


        document.body.classList.remove("light");


        localStorage.setItem(
            "theme",
            "dark"
        );


    });

}



if(lightBtn){

    lightBtn.addEventListener("click",()=>{


        document.body.classList.add("light");


        localStorage.setItem(
            "theme",
            "light"
        );


    });

}



// ======================================================
// Load Saved Theme
// ======================================================

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "light"){

    document.body.classList.add("light");

}
