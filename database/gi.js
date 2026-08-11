// ======================================================
// DoseCare AI
// GI — Gastrointestinal Drugs
// Pediatric Oral Liquids Only
// ======================================================

const GI_DRUGS = [
  
  // ====================================================
  // 1. ORAL REHYDRATION SALTS
  // ====================================================

  {
    id: "ors",
    name: "Oral Rehydration Salts",
    genericName: "ORS",
    brandNames: ["Dioralyte", "Pedialyte"],
    category: "GI",
    diseases: ["diarrhea", "dehydration", "vomiting"],
    dosageForm: "Solution",
    route: "Oral",

    strengths: [
      "Standard ORS solution"
    ],

    mgPerKg: null,
    frequency: "After each loose stool",

    indications: [
      "Mild to moderate dehydration",
      "Acute diarrhea",
      "Fluid and electrolyte replacement"
    ],

    contraindications: [
      "Severe dehydration requiring IV therapy",
      "Intestinal obstruction",
      "Inability to drink"
    ],

    warnings: [
      "Use according to preparation instructions",
      "Do not excessively dilute or concentrate the solution"
    ],

    notes: "ORS is the preferred first-line treatment for mild to moderate dehydration due to diarrhea."
  },


  // ====================================================
  // 2. ZINC
  // ====================================================

  {
    id: "zinc",
    name: "Zinc Sulfate",
    genericName: "Zinc",
    brandNames: ["Zincovit", "Zinc Oral Solution"],
    category: "GI",
    diseases: ["diarrhea"],

    dosageForm: "Syrup",
    route: "Oral",

    strengths: [
      "20 mg / 5 mL"
    ],

    mgPerKg: null,
    frequency: "Once daily",

    indications: [
      "Acute diarrhea in children",
      "Zinc deficiency"
    ],

    contraindications: [
      "Hypersensitivity to zinc preparations"
    ],

    warnings: [
      "May cause nausea or vomiting if taken on an empty stomach"
    ],

    notes: "Zinc supplementation is recommended as an adjunct to ORS in childhood acute diarrhea."
  },


  // ====================================================
  // 3. DOMPERIDONE
  // ====================================================

  {
    id: "domperidone",
    name: "Domperidone",
    genericName: "Domperidone",
    brandNames: ["Motilium"],
    category: "GI",
    diseases: ["nausea", "vomiting"],

    dosageForm: "Suspension",
    route: "Oral",

    strengths: [
      "1 mg / mL"
    ],

    mgPerKg: 0.25,
    frequency: "Up to 3 times daily",

    indications: [
      "Nausea and vomiting"
    ],

    contraindications: [
      "QT prolongation",
      "Significant cardiac disease",
      "GI obstruction or perforation",
      "Moderate to severe hepatic impairment"
    ],

    warnings: [
      "Use only when clinically indicated",
      "Cardiac adverse effects may occur",
      "Avoid with medicines that prolong QT interval"
    ],

    notes: "Use should follow local pediatric guidance because of cardiac safety concerns."
  },


  // ====================================================
  // 4. LACTULOSE
  // ====================================================

  {
    id: "lactulose",
    name: "Lactulose",
    genericName: "Lactulose",
    brandNames: ["Duphalac"],
    category: "GI",
    diseases: ["constipation"],

    dosageForm: "Syrup",
    route: "Oral",

    strengths: [
      "3.335 g / 5 mL"
    ],

    mgPerKg: null,
    frequency: "1–2 times daily",

    indications: [
      "Constipation"
    ],

    contraindications: [
      "Intestinal obstruction",
      "Galactosemia"
    ],

    warnings: [
      "May cause abdominal bloating and flatulence",
      "Adjust dose according to stool response"
    ],

    notes: "Osmotic laxative used commonly for pediatric constipation."
  },


  // ====================================================
  // 5. MACROGOL / PEG
  // ====================================================

  {
    id: "macrogol",
    name: "Macrogol",
    genericName: "Polyethylene Glycol",
    brandNames: ["Movicol", "Laxido"],
    category: "GI",
    diseases: ["constipation"],

    dosageForm: "Oral Solution",
    route: "Oral",

    strengths: [
      "Powder for oral solution"
    ],

    mgPerKg: null,
    frequency: "Once or twice daily",

    indications: [
      "Functional constipation",
      "Fecal impaction"
    ],

    contraindications: [
      "Intestinal obstruction",
      "Bowel perforation",
      "Severe inflammatory bowel disease"
    ],

    warnings: [
      "Ensure adequate fluid intake",
      "May cause bloating or abdominal discomfort"
    ],

    notes: "Polyethylene glycol is commonly used as an osmotic laxative in children."
  },


  // ====================================================
  // 6. SIMETHICONE
  // ====================================================

  {
    id: "simethicone",
    name: "Simethicone",
    genericName: "Simethicone",
    brandNames: ["Infacol", "Mylicon"],
    category: "GI",
    diseases: ["gas", "colic", "bloating"],

    dosageForm: "Drops",
    route: "Oral",

    strengths: [
      "40 mg / 0.6 mL"
    ],

    mgPerKg: null,
    frequency: "After meals and at bedtime",

    indications: [
      "Infantile colic",
      "Excessive intestinal gas",
      "Bloating"
    ],

    contraindications: [
      "Hypersensitivity"
    ],

    warnings: [
      "Persistent abdominal pain requires medical evaluation"
    ],

    notes: "Simethicone reduces surface tension of gas bubbles and may help relieve symptoms."
  },


  // ====================================================
  // 7. ALUMINUM HYDROXIDE + MAGNESIUM HYDROXIDE
  // ====================================================

  {
    id: "antacid",
    name: "Aluminum Hydroxide + Magnesium Hydroxide",
    genericName: "Aluminum Hydroxide + Magnesium Hydroxide",
    brandNames: ["Maalox"],
    category: "GI",
    diseases: ["heartburn", "dyspepsia"],

    dosageForm: "Suspension",
    route: "Oral",

    strengths: [
      "Aluminum hydroxide + Magnesium hydroxide suspension"
    ],

    mgPerKg: null,
    frequency: "As directed",

    indications: [
      "Heartburn",
      "Acid indigestion"
    ],

    contraindications: [
      "Severe renal impairment"
    ],

    warnings: [
      "Separate from other oral medicines when appropriate",
      "Prolonged use in children should be medically supervised"
    ],

    notes: "Antacid combination; pediatric use should follow age-specific product guidance."
  },


  // ====================================================
  // 8. FAMOTIDINE
  // ====================================================

  {
    id: "famotidine",
    name: "Famotidine",
    genericName: "Famotidine",
    brandNames: ["Pepcid"],
    category: "GI",
    diseases: ["GERD", "acid_reflux"],

    dosageForm: "Suspension",
    route: "Oral",

    strengths: [
      "8 mg / mL"
    ],

    mgPerKg: 0.5,
    frequency: "Once or twice daily",

    indications: [
      "GERD",
      "Acid-related disorders"
    ],

    contraindications: [
      "Hypersensitivity to H2 receptor antagonists"
    ],

    warnings: [
      "Dose adjustment may be required in renal impairment"
    ],

    notes: "H2-receptor antagonist that reduces gastric acid secretion."
  },


  // ====================================================
  // 9. OMEPRAZOLE
  // ====================================================

  {
    id: "omeprazole",
    name: "Omeprazole",
    genericName: "Omeprazole",
    brandNames: ["Losec", "Prilosec"],
    category: "GI",
    diseases: ["GERD", "acid_reflux"],

    dosageForm: "Suspension",
    route: "Oral",

    strengths: [
      "2 mg / mL"
    ],

    mgPerKg: null,
    frequency: "Once daily",

    indications: [
      "GERD",
      "Acid-peptic disorders"
    ],

    contraindications: [
      "Hypersensitivity to proton pump inhibitors"
    ],

    warnings: [
      "Long-term use should be medically supervised",
      "May interact with other medicines"
    ],

    notes: "Proton-pump inhibitor that suppresses gastric acid secretion."
  },


  // ====================================================
  // 10. HYOSCINE BUTYLBROMIDE
  // ====================================================

  {
    id: "hyoscine",
    name: "Hyoscine Butylbromide",
    genericName: "Hyoscine Butylbromide",
    brandNames: ["Buscopan"],
    category: "GI",
    diseases: ["abdominal_cramps", "spasm"],

    dosageForm: "Syrup",
    route: "Oral",

    strengths: [
      "5 mg / 5 mL"
    ],

    mgPerKg: null,
    frequency: "As directed",

    indications: [
      "Gastrointestinal smooth muscle spasm",
      "Abdominal cramps"
    ],

    contraindications: [
      "Myasthenia gravis",
      "Narrow-angle glaucoma",
      "Intestinal obstruction",
      "Urinary retention"
    ],

    warnings: [
      "Use cautiously in children",
      "Anticholinergic adverse effects may occur"
    ],

    notes: "Antispasmodic medicine; pediatric use depends on age and local product guidance."
  }

];


// ======================================================
// EXPORT
// ======================================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = GI_DRUGS;
}
