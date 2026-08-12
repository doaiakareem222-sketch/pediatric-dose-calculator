// ======================================================
// DoseCare AI
// Asthma Drugs Database
// ======================================================

const asthmaDrugs = [

  {
    id: "salbutamol",
    name: "Salbutamol",
    genericName: "Salbutamol",
    brandNames: [
      "Ventolin",
      "Asthalin"
    ],

    category: "Asthma",
    therapeuticClass: "Short-Acting Beta2 Agonist",
    pharmacologicalClass: "Selective β2 Adrenergic Agonist",

    diseases: [
      "asthma",
      "bronchospasm",
      "wheezing"
    ],

    dosageForm: "Syrup",

    strengths: [
      {
        name: "2 mg / 5 mL Syrup",
        concentration: 2,
        unit: "mg/5mL"
      }
    ],

    dose: {
      type: "weight_based",

      mgPerKg: 0.1,

      frequency: "3–4 times daily",

      maxDoseMg: 4
    },

    age: {
      min: 2,
      max: 18
    },

    indications:
      "Symptomatic relief of bronchospasm and wheezing in selected pediatric patients.",

    contraindications:
      "Hypersensitivity to salbutamol.",

    warnings:
      "Use cautiously in children with significant cardiovascular disease, hyperthyroidism, or hypokalemia.",

    sideEffects:
      "Tremor, tachycardia, headache, nervousness, and hypokalemia.",

    notes:
      "Oral salbutamol is not generally preferred over inhaled therapy for acute asthma. Inhaled bronchodilator therapy is usually preferred.",

    storage:
      "Store at room temperature and keep out of reach of children.",

    monitoring: [
      "Heart rate.",
      "Response to treatment.",
      "Tremor or excessive stimulation."
    ],

    alerts: [
      "Severe asthma symptoms require urgent medical assessment.",
      "Do not rely on oral salbutamol as a substitute for appropriate inhaled therapy."
    ]
  },


  {
    id: "montelukast",
    name: "Montelukast",
    genericName: "Montelukast",
    brandNames: [
      "Singulair",
      "Montair"
    ],

    category: "Asthma",
    therapeuticClass: "Leukotriene Receptor Antagonist",
    pharmacologicalClass: "CysLT1 Receptor Antagonist",

    diseases: [
      "asthma",
      "allergic_rhinitis"
    ],

    dosageForm: "Oral Granules",

    strengths: [
      {
        name: "4 mg Oral Granules",
        concentration: 4,
        unit: "mg"
      }
    ],

    dose: {
      type: "age_based",

      age6MonthsTo5Years: {
        doseMg: 4,
        frequency: "Once daily"
      }
    },

    age: {
      min: 0.5,
      max: 5
    },

    indications:
      "Maintenance treatment of asthma and prevention of exercise-induced bronchoconstriction in appropriate age groups.",

    contraindications:
      "Hypersensitivity to montelukast.",

    warnings:
      "Neuropsychiatric events including agitation, sleep disturbances, mood changes, and suicidal thoughts have been reported.",

    sideEffects:
      "Headache, abdominal pain, sleep disturbances, and behavioral or mood changes.",

    notes:
      "Not intended for treatment of an acute asthma attack.",

    storage:
      "Store at room temperature in the original package.",

    monitoring: [
      "Asthma control.",
      "Behavior and mood changes.",
      "Sleep disturbances."
    ],

    alerts: [
      "Not a rescue medication.",
      "Stop and seek medical advice if significant behavioral or mood changes occur."
    ]
  }

];


// ======================================================
// Register Asthma Drugs
// ======================================================

if (typeof registerDrugs === "function") {
  registerDrugs(asthmaDrugs);
}
