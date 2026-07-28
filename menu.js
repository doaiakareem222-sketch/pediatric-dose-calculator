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
