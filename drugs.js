// ======================================================
// DoseCare AI v7
// Main Drugs Registry
// ======================================================

const drugs = {};

// ======================================================
// Register Drugs
// ======================================================

function registerDrugs(drugList) {

    if (!drugList) {
        return;
    }

    // ================================================
    // If drugList is an Array
    // ================================================

    if (Array.isArray(drugList)) {

        drugList.forEach(drug => {

            if (drug && drug.id) {

                drugs[drug.id] = drug;

            }

        });

        return;
    }

    // ================================================
    // If drugList is an Object
    // ================================================

    if (typeof drugList === "object") {

        Object.assign(drugs, drugList);

    }

}

// ======================================================
// Make available globally
// ======================================================

window.drugs = drugs;
window.registerDrugs = registerDrugs;

// ======================================================
// Debug
// ======================================================

console.log(
    "DoseCare Drugs Registry Loaded:",
    drugs
);
