// ======================================================
// DoseCare AI v7
// Allergy Drugs Database
// ======================================================

const allergyDrugs = {


// ======================================================
// Register Allergy Drugs
// ======================================================

if (typeof registerDrugs === "function") {
    registerDrugs(allergyDrugs);
}

console.log(
    "Allergy Database Loaded:",
    Object.keys(allergyDrugs)
);
