// ======================================================
// DoseCare AI v7
// Allergy Drugs Database
// ======================================================

const allergyDrugs = {

  // ====================================================
  // Cetirizine
  // ====================================================

  cetirizine: {
    id: "cetirizine",

    name: "Cetirizine",

    genericName: "Cetirizine",

    brandNames: [
      "Zyrtec",
      "Cetzine",
      "Cetirin"
    ],

    category: "Allergy",

    therapeuticClass: "Second Generation H1 Antihistamine",

    pharmacologicalClass: "Piperazine Derivative",

    diseases: [
      "allergy"
    ],

    mgPerKg: 0.25,

    frequency: "مرة يومياً",

    maxDose: 10,

    minAge: 0.5,

    maxAge: 18,

    strengths: [
      {
        name: "5 mg / 5 mL Syrup",
        concentration: 5,
        unit: "mg/5mL"
      }
    ],

    indications:
      "التهاب الأنف التحسسي، العطاس، سيلان الأنف، الحكة، والشرى.",

    contraindications:
      "فرط الحساسية للسيتريزين أو الهيدروكسيزين.",

    warnings:
      "قد يسبب النعاس عند بعض الأطفال، ويستخدم بحذر في القصور الكلوي.",

    sideEffects:
      "نعاس، صداع، جفاف الفم، تعب.",

    pregnancy:
      "يستخدم عند الحاجة وتحت إشراف طبي.",

    lactation:
      "يستخدم بحذر أثناء الرضاعة.",

    doseRange:
      "يعتمد على العمر والحالة، مع عدم تجاوز الجرعة القصوى الموصى بها.",

    onset:
      "30–60 دقيقة",

    duration:
      "24 ساعة",

    halfLife:
      "حوالي 8 ساعات",

    proteinBinding:
      "حوالي 93%",

    metabolism:
      "استقلاب محدود.",

    elimination:
      "عن طريق الكلى بشكل رئيسي.",

    storage:
      "يحفظ بدرجة حرارة الغرفة بعيداً عن الحرارة والرطوبة.",

    monitoring: [
      "متابعة تحسن أعراض الحساسية.",
      "مراقبة النعاس.",
      "تعديل الجرعة عند وجود قصور كلوي."
    ],

    clinicalPearls: [
      "يعطى عادة مرة واحدة يومياً.",
      "قد يسبب نعاساً عند بعض الأطفال.",
      "يستخدم لعلاج أعراض الحساسية وليس لعلاج العدوى."
    ],

    blackBox:
      "لا يوجد.",

    interactions: [
      "Alcohol.",
      "CNS depressants."
    ],

    notes:
      "رج الزجاجة جيداً قبل الاستخدام واستعمل أداة قياس دقيقة.",

    alerts: [
      "لا تتجاوز الجرعة اليومية.",
      "راقب النعاس.",
      "استشر الطبيب عند وجود مرض كلوي."
    ]
  },


  // ====================================================
  // Loratadine
  // ====================================================

  loratadine: {
    id: "loratadine",

    name: "Loratadine",

    genericName: "Loratadine",

    brandNames: [
      "Claritin",
      "Lorano",
      "Lorat"
    ],

    category: "Allergy",

    therapeuticClass: "Second Generation H1 Antihistamine",

    pharmacologicalClass: "Piperidine Derivative",

    diseases: [
      "allergy"
    ],

    mgPerKg: 0.2,

    frequency: "مرة يومياً",

    maxDose: 10,

    minAge: 2,

    maxAge: 18,

    strengths: [
      {
        name: "5 mg / 5 mL Syrup",
        concentration: 5,
        unit: "mg/5mL"
      }
    ],

    indications:
      "التهاب الأنف التحسسي، العطاس، سيلان الأنف، الحكة، والشرى.",

    contraindications:
      "فرط الحساسية للوراتادين.",

    warnings:
      "يستخدم بحذر عند الأطفال المصابين بأمراض الكبد.",

    sideEffects:
      "صداع، جفاف الفم، تعب، ونعاس خفيف عند بعض المرضى.",

    pregnancy:
      "يستخدم عند الحاجة الطبية.",

    lactation:
      "يستخدم بحذر أثناء الرضاعة.",

    doseRange:
      "حسب العمر، مع عدم تجاوز 10 mg يومياً.",

    onset:
      "1–3 ساعات",

    duration:
      "24 ساعة",

    halfLife:
      "حوالي 8 ساعات",

    proteinBinding:
      "حوالي 97%",

    metabolism:
      "يستقلب في الكبد بواسطة CYP3A4 و CYP2D6.",

    elimination:
      "عن طريق البول والبراز.",

    storage:
      "يحفظ بدرجة حرارة الغرفة.",

    monitoring: [
      "متابعة تحسن أعراض الحساسية.",
      "مراقبة النعاس عند حدوثه.",
      "الحذر عند وجود مرض كبدي."
    ],

    clinicalPearls: [
      "عادة لا يسبب النعاس بشكل واضح.",
      "يعطى مرة واحدة يومياً.",
      "فعال في التهاب الأنف التحسسي والشرى."
    ],

    blackBox:
      "لا يوجد.",

    interactions: [
      "Ketoconazole.",
      "Erythromycin."
    ],

    notes:
      "رج الزجاجة جيداً قبل الاستخدام واستعمل أداة قياس دقيقة.",

    alerts: [
      "لا تتجاوز الجرعة اليومية.",
      "استشر الطبيب عند وجود مرض كبدي."
    ]
  },


  // ====================================================
  // Chlorpheniramine
  // ====================================================

  chlorpheniramine: {
    id: "chlorpheniramine",

    name: "Chlorpheniramine",

    genericName: "Chlorpheniramine Maleate",

    brandNames: [
      "Piriton",
      "Chlor-Trimeton"
    ],

    category: "Allergy",

    therapeuticClass: "First Generation H1 Antihistamine",

    pharmacologicalClass: "Alkylamine Derivative",

    diseases: [
      "allergy"
    ],

    mgPerKg: 0.1,

    frequency: "كل 6–8 ساعات",

    maxDose: 4,

    minAge: 2,

    maxAge: 18,

    strengths: [
      {
        name: "2 mg / 5 mL Syrup",
        concentration: 2,
        unit: "mg/5mL"
      }
    ],

    indications:
      "الحساسية، التهاب الأنف التحسسي، العطاس، سيلان الأنف، الحكة والشرى.",

    contraindications:
      "فرط الحساسية، حديثو الولادة، والزرق مغلق الزاوية.",

    warnings:
      "قد يسبب النعاس بشكل واضح ويستخدم بحذر مع الأدوية المثبطة للجهاز العصبي المركزي.",

    sideEffects:
      "نعاس، دوخة، جفاف الفم، تشوش الرؤية.",

    pregnancy:
      "يستخدم عند الضرورة الطبية.",

    lactation:
      "يفضل تجنبه أثناء الرضاعة إلا بتوجيه طبي.",

    doseRange:
      "حسب العمر والحالة، مع عدم تجاوز الجرعة القصوى.",

    onset:
      "30 دقيقة",

    duration:
      "4–6 ساعات",

    halfLife:
      "حوالي 20 ساعة",

    proteinBinding:
      "حوالي 72%",

    metabolism:
      "يستقلب في الكبد.",

    elimination:
      "عن طريق الكلى.",

    storage:
      "يحفظ بدرجة حرارة الغرفة.",

    monitoring: [
      "مراقبة النعاس.",
      "متابعة تحسن أعراض الحساسية."
    ],

    clinicalPearls: [
      "من مضادات الهيستامين من الجيل الأول.",
      "قد يسبب نعاساً واضحاً.",
      "يفضل الحذر عند إعطائه مع المهدئات."
    ],

    blackBox:
      "لا يوجد.",

    interactions: [
      "Alcohol.",
      "Sedatives.",
      "MAO inhibitors."
    ],

    notes:
      "رج الزجاجة جيداً قبل الاستخدام.",

    alerts: [
      "قد يسبب النعاس.",
      "تجنب القيادة أو تشغيل الآلات.",
      "لا تتجاوز الجرعة الموصى بها."
    ]
  }

};


// ======================================================
// Export
// ======================================================

if (typeof module !== "undefined") {
  module.exports = 
    allergyDrugs;
}
// ======================================================
// DoseCare AI
// GI / Gastrointestinal Drugs Database
// ======================================================

const systemDrugs = [

  // ====================================================
  // ZINC
  // ====================================================

  {
    id: "zinc",
    name: "Zinc",
    genericName: "Zinc Sulfate",
    brandNames: [
      "Zinc Syrup"
    ],

    category: "GI",
    therapeuticClass: "Zinc Supplement",
    pharmacologicalClass: "Mineral Supplement",

    diseases: [
      "diarrhea",
      "acute_diarrhea"
    ],

    dosageForm: "Syrup",

    strengths: [
      {
        name: "20 mg / 5 mL Syrup",
        concentration: 20,
        unit: "mg/5mL"
      }
    ],

    dose: {
      type: "age_based",

      under6Months: {
        doseMg: 10,
        volumeMl: 2.5,
        frequency: "Once daily",
        duration: "10–14 days"
      },

      sixMonthsAndOlder: {
        doseMg: 20,
        volumeMl: 5,
        frequency: "Once daily",
        duration: "10–14 days"
      }
    },

    age: {
      min: 0,
      max: 18
    },

    indications:
      "Adjunctive treatment of acute diarrhea in children.",

    contraindications:
      "Hypersensitivity to zinc or formulation components.",

    warnings:
      "Should be used as an adjunct to oral rehydration and appropriate feeding during diarrhea.",

    sideEffects:
      "Nausea, vomiting, abdominal discomfort.",

    notes:
      "Dose is age-based rather than weight-based.",

    storage:
      "Store at room temperature and keep out of reach of children.",

    monitoring: [
      "Hydration status.",
      "Frequency and duration of diarrhea.",
      "Vomiting or intolerance."
    ],

    alerts: [
      "Do not use zinc as a replacement for ORS.",
      "Seek medical care if there is blood in stool, severe dehydration, or persistent diarrhea."
    ]
  },


  // ====================================================
  // LACTULOSE
  // ====================================================

  {
    id: "lactulose",
    name: "Lactulose",
    genericName: "Lactulose",
    brandNames: [
      "Duphalac",
      "Lactulose"
    ],

    category: "GI",
    therapeuticClass: "Osmotic Laxative",
    pharmacologicalClass: "Synthetic Disaccharide",

    diseases: [
      "constipation"
    ],

    dosageForm: "Oral Solution / Syrup",

    strengths: [
      {
        name: "10 g / 15 mL Oral Solution",
        concentration: 10,
        unit: "g/15mL"
      }
    ],

    dose: {
      type: "age_based",

      infants: {
        dose: "2.5–10 mL/day",
        frequency: "Divided doses"
      },

      children: {
        dose: "40–90 mL/day",
        frequency: "Divided doses"
      }
    },

    age: {
      min: 0,
      max: 18
    },

    indications:
      "Treatment of constipation requiring an osmotic laxative.",

    contraindications:
      "Intestinal obstruction or hypersensitivity to lactulose.",

    warnings:
      "Excessive doses may cause diarrhea and electrolyte disturbances.",

    sideEffects:
      "Flatulence, abdominal cramps, diarrhea, nausea.",

    notes:
      "Dose should be adjusted according to stool consistency and clinical response.",

    storage:
      "Store at room temperature.",

    monitoring: [
      "Stool frequency.",
      "Stool consistency.",
      "Abdominal symptoms.",
      "Signs of diarrhea or dehydration."
    ],

    alerts: [
      "Reduce the dose if diarrhea occurs.",
      "Do not use when intestinal obstruction is suspected."
    ]
  },


  // ====================================================
  // ONDANSETRON
  // ====================================================

  {
    id: "ondansetron",
    name: "Ondansetron",
    genericName: "Ondansetron Hydrochloride",
    brandNames: [
      "Zofran",
      "Ondansetron"
    ],

    category: "GI",
    therapeuticClass: "Antiemetic",
    pharmacologicalClass: "5-HT3 Receptor Antagonist",

    diseases: [
      "nausea",
      "vomiting"
    ],

    dosageForm: "Oral Solution",

    strengths: [
      {
        name: "4 mg / 5 mL Oral Solution",
        concentration: 4,
        unit: "mg/5mL"
      }
    ],

    dose: {
      type: "clinical_protocol",

      age4To11Years: {
        doseMg: 4,
        volumeMl: 5,
        frequency: "Every 8 hours",
        indication: "Chemotherapy-induced nausea and vomiting"
      },

      age12YearsAndOlder: {
        doseMg: 8,
        volumeMl: 10,
        frequency: "Every 12 hours",
        indication: "Chemotherapy-induced nausea and vomiting"
      }
    },

    age: {
      min: 4,
      max: 18
    },

    indications:
      "Prevention of nausea and vomiting associated with emetogenic chemotherapy and selected postoperative settings.",

    contraindications:
      "Hypersensitivity to ondansetron or concomitant use with apomorphine.",

    warnings:
      "May prolong the QT interval. Use caution in patients with cardiac risk factors or electrolyte abnormalities.",

    sideEffects:
      "Headache, constipation, fatigue.",

    notes:
      "Dose depends on indication and age. Do not automatically use the chemotherapy dosing regimen for ordinary gastroenteritis.",

    storage:
      "Store at room temperature.",

    monitoring: [
      "Vomiting control.",
      "Hydration status.",
      "QT-risk factors when clinically relevant."
    ],

    alerts: [
      "Do not use the chemotherapy dosing protocol for unrelated vomiting without an appropriate clinical protocol.",
      "Consider QT-prolonging drug interactions."
    ]
  }

];


// ======================================================
// Register GI Drugs
// ======================================================

if (typeof registerDrugs === "function") {
  registerDrugs(systemDrugs);
}
