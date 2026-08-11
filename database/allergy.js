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
// Register Allergy Drugs
// ======================================================

if (typeof registerDrugs === "function") {
    registerDrugs(allergyDrugs);
}

console.log(
    "Allergy Database Loaded:",
    Object.keys(allergyDrugs)
);
