// ======================================================
// DoseCare AI v7
// Main Drugs Registry
// ======================================================

const drugs = {};

// ======================================================
// Register Drugs
// ======================================================

function registerDrugs(drugList) {

    if (!drugList || typeof drugList !== "object") {
        return;
    }

    Object.assign(drugs, drugList);
}

// ======================================================
// Make available globally
// ======================================================

window.drugs = drugs;
window.registerDrugs = registerDrugs;

console.log("DoseCare Drugs Registry Loaded");
