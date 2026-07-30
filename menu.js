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
