// ======================================================
// DoseCare AI
// ANTIPARASITIC — Pediatric Oral Liquids Only
// ======================================================

const ANTIPARASITIC_DRUGS = [

  // ====================================================
  // 1. ALBENDAZOLE
  // ====================================================

  {
    id: "albendazole",
    name: "Albendazole",
    genericName: "Albendazole",
    brandNames: ["Zentel"],
    category: "Antiparasitic",
    diseases: [
      "ascariasis",
      "hookworm",
      "enterobiasis",
      "trichuriasis",
      "intestinal_worms"
    ],

    dosageForm: "Suspension",
    route: "Oral",

    strengths: [
      "200 mg / 5 mL",
      "400 mg / 10 mL"
    ],

    mgPerKg: null,
    frequency: "According to indication",

    indications: [
      "Intestinal helminth infections",
      "Ascariasis",
      "Hookworm infection",
      "Enterobiasis",
      "Trichuriasis"
    ],

    contraindications: [
      "Hypersensitivity to albendazole"
    ],

    warnings: [
      "Use age-appropriate dosing",
      "Prolonged courses require medical supervision"
    ],

    notes: "Broad-spectrum anthelmintic used for several intestinal worm infections."
  },


  // ====================================================
  // 2. MEBENDAZOLE
  // ====================================================

  {
    id: "mebendazole",
    name: "Mebendazole",
    genericName: "Mebendazole",
    brandNames: ["Vermox"],
    category: "Antiparasitic",
    diseases: [
      "enterobiasis",
      "ascariasis",
      "hookworm",
      "trichuriasis",
      "intestinal_worms"
    ],

    dosageForm: "Suspension",
    route: "Oral",

    strengths: [
      "100 mg / 5 mL"
    ],

    mgPerKg: null,
    frequency: "According to indication",

    indications: [
      "Pinworm infection",
      "Ascariasis",
      "Hookworm infection",
      "Whipworm infection"
    ],

    contraindications: [
      "Hypersensitivity to mebendazole"
    ],

    warnings: [
      "Use according to age-specific recommendations",
      "Repeated treatment may be required for pinworm infection"
    ],

    notes: "Broad-spectrum anthelmintic commonly used for intestinal nematode infections."
  },


  // ====================================================
  // 3. PYRANTEL PAMOATE
  // ====================================================

  {
    id: "pyrantel",
    name: "Pyrantel Pamoate",
    genericName: "Pyrantel Pamoate",
    brandNames: ["Combantrin"],
    category: "Antiparasitic",
    diseases: [
      "enterobiasis",
      "ascariasis",
      "hookworm",
      "intestinal_worms"
    ],

    dosageForm: "Suspension",
    route: "Oral",

    strengths: [
      "250 mg / 5 mL"
    ],

    mgPerKg: null,
    frequency: "According to indication",

    indications: [
      "Pinworm infection",
      "Roundworm infection",
      "Hookworm infection"
    ],

    contraindications: [
      "Hypersensitivity to pyrantel"
    ],

    warnings: [
      "Dose according to body weight",
      "May cause gastrointestinal adverse effects"
    ],

    notes: "Anthelmintic used mainly for intestinal nematode infections."
  },


  // ====================================================
  // 4. METRONIDAZOLE
  // ====================================================

  {
    id: "metronidazole_antiparasitic",
    name: "Metronidazole",
    genericName: "Metronidazole",
    brandNames: ["Flagyl"],
    category: "Antiparasitic",
    diseases: [
      "giardiasis",
      "amoebiasis"
    ],

    dosageForm: "Suspension",
    route: "Oral",

    strengths: [
      "125 mg / 5 mL",
      "250 mg / 5 mL"
    ],

    mgPerKg: null,
    frequency: "According to indication",

    indications: [
      "Giardiasis",
      "Amoebiasis"
    ],

    contraindications: [
      "Hypersensitivity to metronidazole"
    ],

    warnings: [
      "Use indication-specific pediatric dosing",
      "Prolonged treatment should be medically supervised"
    ],

    notes: "Antiprotozoal medicine used for selected intestinal protozoal infections."
  },


  // ====================================================
  // 5. NITAZOXANIDE
  // ====================================================

  {
    id: "nitazoxanide",
    name: "Nitazoxanide",
    genericName: "Nitazoxanide",
    brandNames: ["Alinia"],
    category: "Antiparasitic",
    diseases: [
      "giardiasis",
      "cryptosporidiosis"
    ],

    dosageForm: "Suspension",
    route: "Oral",

    strengths: [
      "100 mg / 5 mL"
    ],

    mgPerKg: null,
    frequency: "Twice daily",

    indications: [
      "Giardiasis",
      "Cryptosporidiosis"
    ],

    contraindications: [
      "Hypersensitivity to nitazoxanide"
    ],

    warnings: [
      "Use age-appropriate dosing",
      "Take with food when recommended by the product information"
    ],

    notes: "Antiprotozoal agent available as an oral suspension."
  }

];
// ======================================================
// Register Antiparasitic Drugs
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(ANTIPARASITIC_DRUGS);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}


// ======================================================
// Debug
// ======================================================

console.log(
    "Antiparasitic Database Loaded:",
    ANTIPARASITIC_DRUGS.map(drug => drug.id)
);

// ======================================================
// EXPORT
// ======================================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = ANTIPARASITIC_DRUGS;
}
