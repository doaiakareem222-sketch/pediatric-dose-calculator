// ======================================================
// DoseCare AI v7
// Emergency Drugs Database
// ======================================================

const emergencyDrugs = {

  // ====================================================
  // EPINEPHRINE / ADRENALINE
  // ====================================================

  epinephrine: {
    id: "epinephrine",

    name: "Epinephrine",

    genericName: "Epinephrine (Adrenaline)",

    brandNames: [
      "Adrenaline",
      "Epinephrine"
    ],

    category: "Emergency",

    therapeuticClass: "Adrenergic Agonist",

    pharmacologicalClass: "Alpha & Beta Adrenergic Agonist",

    diseases: [
      "anaphylaxis",
      "cardiac_arrest",
      "severe_asthma"
    ],

    dosageForm: "Injection",

    routes: [
      "IM",
      "IV",
      "IO"
    ],

    strengths: [
      {
        name: "1 mg/mL (1:1000)",
        concentration: 1,
        unit: "mg/mL"
      },
      {
        name: "0.1 mg/mL (1:10000)",
        concentration: 0.1,
        unit: "mg/mL"
      }
    ],

    dose: "Anaphylaxis: 0.01 mg/kg IM",

    maxDose: 0.5,

    frequency: "يمكن تكراره كل 5–15 دقيقة حسب الاستجابة",

    mechanism:
      "ينشط مستقبلات Alpha وBeta الأدرينرجية، مما يسبب تضيق الأوعية، زيادة ضغط الدم، توسع القصبات وتحسين النتاج القلبي.",

    indications:
      "التأق، توقف القلب، والتشنج القصبي الشديد ضمن بروتوكولات الطوارئ.",

    contraindications:
      "في حالات الطوارئ المهددة للحياة لا توجد موانع مطلقة لاستخدامه.",

    warnings:
      "يجب التأكد من التركيز وطريق الإعطاء لتجنب أخطاء الجرعات، خصوصاً الفرق بين 1 mg/mL و0.1 mg/mL.",

    sideEffects:
      "خفقان، رجفة، شحوب، قلق، صداع، ارتفاع ضغط الدم واضطرابات نظم القلب.",

    notes:
      "دواء إسعافي أساسي. في التأق يعطى IM في الفخذ الوحشي.",

    alerts: [
      "تحقق من تركيز المستحضر قبل الحساب.",
      "لا تخلط بين 1 mg/mL و0.1 mg/mL.",
      "التأق يحتاج إلى Epinephrine IM بشكل عاجل."
    ]
  },


  // ====================================================
  // MIDAZOLAM
  // ====================================================

  midazolam: {
    id: "midazolam",

    name: "Midazolam",

    genericName: "Midazolam",

    brandNames: [
      "Dormicum",
      "Versed"
    ],

    category: "Emergency",

    therapeuticClass: "Benzodiazepine",

    pharmacologicalClass: "Short-Acting Benzodiazepine",

    diseases: [
      "seizure",
      "status_epilepticus"
    ],

    dosageForm: "Injection / Buccal / Intranasal",

    routes: [
      "IV",
      "IM",
      "Buccal",
      "Intranasal"
    ],

    strengths: [
      {
        name: "5 mg/mL",
        concentration: 5,
        unit: "mg/mL"
      }
    ],

    dose: "Seizure: 0.2 mg/kg حسب الطريق والبروتوكول",

    maxDose: 10,

    frequency: "جرعة إسعافية ويمكن تكرارها حسب البروتوكول",

    mechanism:
      "يعزز تأثير GABA-A في الجهاز العصبي المركزي مما يؤدي إلى تثبيط النشاط العصبي والسيطرة على التشنجات.",

    indications:
      "النوبات التشنجية الحادة وStatus epilepticus.",

    contraindications:
      "فرط الحساسية للدواء.",

    warnings:
      "قد يسبب تثبيط التنفس وانخفاض ضغط الدم، ويجب مراقبة مجرى الهواء والتنفس.",

    sideEffects:
      "نعاس، تثبيط التنفس، انخفاض ضغط الدم، دوخة.",

    notes:
      "يستخدم فقط ضمن بروتوكول الطوارئ مع توفر دعم مجرى الهواء والتنفس.",

    alerts: [
      "راقب التنفس باستمرار.",
      "جهز وسائل دعم مجرى الهواء.",
      "لا تتجاوز الجرعة الموصى بها."
    ]
  },


  // ====================================================
  // DIAZEPAM
  // ====================================================

  diazepam: {
    id: "diazepam",

    name: "Diazepam",

    genericName: "Diazepam",

    brandNames: [
      "Valium",
      "Diazepam"
    ],

    category: "Emergency",

    therapeuticClass: "Benzodiazepine",

    pharmacologicalClass: "Long-Acting Benzodiazepine",

    diseases: [
      "seizure",
      "status_epilepticus"
    ],

    dosageForm: "Injection / Rectal",

    routes: [
      "IV",
      "Rectal"
    ],

    strengths: [
      {
        name: "5 mg/mL",
        concentration: 5,
        unit: "mg/mL"
      }
    ],

    dose: "0.15–0.2 mg/kg حسب الطريق والبروتوكول",

    maxDose: 10,

    frequency: "حسب الاستجابة والبروتوكول",

    mechanism:
      "يزيد تأثير GABA في الجهاز العصبي المركزي مما يقلل النشاط العصبي والتشنجات.",

    indications:
      "النوبات التشنجية الحادة وحالات الاختلاج المطول.",

    contraindications:
      "فرط الحساسية، قصور التنفس الشديد.",

    warnings:
      "قد يسبب تثبيط التنفس وانخفاض ضغط الدم، خصوصاً عند إعطائه بسرعة أو مع مثبطات الجهاز العصبي المركزي.",

    sideEffects:
      "نعاس، تثبيط التنفس، انخفاض ضغط الدم، ترنح.",

    notes:
      "يستخدم ضمن بروتوكول علاج التشنجات مع مراقبة التنفس.",

    alerts: [
      "راقب التنفس.",
      "تجنب الإعطاء السريع IV.",
      "جهز وسائل دعم التنفس."
    ]
  },


  // ====================================================
  // DEXTROSE
  // ====================================================

  dextrose: {
    id: "dextrose",

    name: "Dextrose",

    genericName: "Dextrose / Glucose",

    brandNames: [
      "Dextrose",
      "Glucose"
    ],

    category: "Emergency",

    therapeuticClass: "Carbohydrate / Antihypoglycemic",

    pharmacologicalClass: "Glucose",

    diseases: [
      "hypoglycemia"
    ],

    dosageForm: "IV Solution",

    routes: [
      "IV",
      "IO"
    ],

    strengths: [
      {
        name: "10% Dextrose",
        concentration: 100,
        unit: "mg/mL"
      },
      {
        name: "25% Dextrose",
        concentration: 250,
        unit: "mg/mL"
      }
    ],

    dose: "Hypoglycemia: 0.5–1 g/kg حسب العمر والحالة والبروتوكول",

    maxDose: null,

    frequency: "حسب مستوى glucose والاستجابة",

    mechanism:
      "يرفع مستوى Glucose في الدم ويوفر مصدراً سريعاً للطاقة للدماغ والأنسجة.",

    indications:
      "نقص سكر الدم العرضي أو الشديد.",

    contraindications:
      "لا توجد موانع مطلقة في نقص السكر المهدد للحياة.",

    warnings:
      "يجب إعطاؤه بتركيز وطريق مناسبين للعمر والحالة لتجنب فرط السكر أو أذية الأنسجة عند تسرب المحلول خارج الوريد.",

    sideEffects:
      "فرط سكر الدم، اضطرابات الشوارد، تهيج أو أذية موضعية عند التسرب.",

    notes:
      "يجب إعادة فحص Blood Glucose بعد العلاج.",

    alerts: [
      "راقب Blood Glucose بعد الإعطاء.",
      "تأكد من الطريق والتركيز المناسبين.",
      "تجنب إعطاء تركيزات عالية بشكل غير مناسب."
    ]
  },


  // ====================================================
  // SODIUM BICARBONATE
  // ====================================================

  sodium_bicarbonate: {
    id: "sodium_bicarbonate",

    name: "Sodium Bicarbonate",

    genericName: "Sodium Bicarbonate",

    brandNames: [
      "Sodium Bicarbonate"
    ],

    category: "Emergency",

    therapeuticClass: "Alkalinizing Agent",

    pharmacologicalClass: "Systemic Alkalinizer",

    diseases: [
      "severe_acidosis",
      "hyperkalemia",
      "toxicology"
    ],

    dosageForm: "Injection",

    routes: [
      "IV",
      "IO"
    ],

    strengths: [
      {
        name: "8.4%",
        concentration: 84,
        unit: "mg/mL"
      },
      {
        name: "4.2%",
        concentration: 42,
        unit: "mg/mL"
      }
    ],

    dose: "حسب الحالة ودرجة الحماض والبروتوكول",

    maxDose: null,

    frequency: "حسب الاستجابة والغازات والشوارد",

    mechanism:
      "يزيد تركيز البيكربونات في الدم مما يساعد على رفع pH وتصحيح الحماض في الحالات المحددة.",

    indications:
      "بعض حالات الحماض الاستقلابي الشديد، فرط البوتاسيوم وبعض حالات التسمم المحددة.",

    contraindications:
      "قلوية الدم الشديدة أو الحالات التي لا تستدعي تصحيح البيكربونات.",

    warnings:
      "لا يستخدم بشكل روتيني في كل حالات توقف القلب أو الحماض. يجب تحديد السبب ومراقبة الغازات والشوارد.",

    sideEffects:
      "قلوية الدم، فرط الصوديوم، نقص البوتاسيوم، احتباس السوائل.",

    notes:
      "استخدامه يعتمد على سبب الحالة ونتائج المختبر والبروتوكول.",

    alerts: [
      "لا يستخدم روتينياً في Cardiac Arrest.",
      "راقب Na+ وK+ وpH.",
      "تحقق من التركيز قبل الإعطاء."
    ]
  },


  // ====================================================
  // NALOXONE
  // ====================================================

  naloxone: {
    id: "naloxone",

    name: "Naloxone",

    genericName: "Naloxone",

    brandNames: [
      "Narcan"
    ],

    category: "Emergency",

    therapeuticClass: "Opioid Antagonist",

    pharmacologicalClass: "Competitive Opioid Receptor Antagonist",

    diseases: [
      "opioid_overdose",
      "respiratory_depression"
    ],

    dosageForm: "Injection / Intranasal",

    routes: [
      "IV",
      "IM",
      "SC",
      "Intranasal"
    ],

    strengths: [
      {
        name: "0.4 mg/mL",
        concentration: 0.4,
        unit: "mg/mL"
      },
      {
        name: "1 mg/mL",
        concentration: 1,
        unit: "mg/mL"
      }
    ],

    dose: "حسب شدة تثبيط التنفس وطريق الإعطاء والبروتوكول",

    maxDose: null,

    frequency: "يمكن تكراره حسب الاستجابة",

    mechanism:
      "مضاد تنافسي لمستقبلات الأفيونات، ويعكس تثبيط التنفس وتأثيرات الأفيونات.",

    indications:
      "تسمم الأفيونات وتثبيط التنفس الناتج عنها.",

    contraindications:
      "فرط الحساسية، مع عدم وجود مانع في حالة overdose المهددة للحياة.",

    warnings:
      "قد يسبب أعراض انسحاب حادة لدى الأشخاص المعتمدين على الأفيونات.",

    sideEffects:
      "غثيان، قيء، تعرق، تسرع القلب، ارتفاع ضغط الدم وأعراض انسحاب الأفيونات.",

    notes:
      "أولوية العلاج هي دعم مجرى الهواء والتنفس بالإضافة إلى Naloxone عند الاشتباه بتسمم الأفيونات.",

    alerts: [
      "دعم التنفس أساسي.",
      "قد يحتاج إلى جرعات متكررة.",
      "راقب عودة تثبيط التنفس."
    ]
  },


  // ====================================================
  // ATROPINE
  // ====================================================

  atropine: {
    id: "atropine",

    name: "Atropine",

    genericName: "Atropine Sulfate",

    brandNames: [
      "Atropine"
    ],

    category: "Emergency",

    therapeuticClass: "Antimuscarinic",

    pharmacologicalClass: "Muscarinic Receptor Antagonist",

    diseases: [
      "bradycardia",
      "organophosphate_poisoning"
    ],

    dosageForm: "Injection",

    routes: [
      "IV",
      "IO",
      "IM"
    ],

    strengths: [
      {
        name: "0.1 mg/mL",
        concentration: 0.1,
        unit: "mg/mL"
      }
    ],

    dose: "حسب العمر والوزن والحالة والبروتوكول",

    maxDose: null,

    frequency: "حسب الاستجابة والبروتوكول",

    mechanism:
      "يحجب مستقبلات Muscarinic ويقلل تأثير الجهاز نظير الودي مما يزيد معدل القلب ويقلل الإفرازات.",

    indications:
      "بطء القلب العرضي وبعض حالات تسمم Organophosphate.",

    contraindications:
      "تستخدم بحذر حسب الحالة ولا تؤخر علاج الحالات المهددة للحياة.",

    warnings:
      "قد تسبب تسرع القلب واضطرابات نظم وتشوشاً بالرؤية واحتباس البول.",

    sideEffects:
      "جفاف الفم، تسرع القلب، توسع الحدقة، احتباس البول، ارتفاع الحرارة.",

    notes:
      "الجرعة تختلف بشكل كبير حسب سبب الاستخدام.",

    alerts: [
      "لا تعتمد على جرعة واحدة لجميع الحالات.",
      "راقب معدل القلب.",
      "في التسمم الفوسفاتي العضوي قد تحتاج جرعات متكررة."
    ]
  },


  // ====================================================
  // CALCIUM GLUCONATE
  // ====================================================

  calcium_gluconate: {
    id: "calcium_gluconate",

    name: "Calcium Gluconate",

    genericName: "Calcium Gluconate",

    brandNames: [
      "Calcium Gluconate"
    ],

    category: "Emergency",

    therapeuticClass: "Calcium Salt",

    pharmacologicalClass: "Electrolyte Replacement",

    diseases: [
      "hyperkalemia",
      "hypocalcemia"
    ],

    dosageForm: "Injection",

    routes: [
      "IV",
      "IO"
    ],

    strengths: [
      {
        name: "10%",
        concentration: 100,
        unit: "mg/mL"
      }
    ],

    dose: "حسب الحالة وECG والبروتوكول",

    maxDose: null,

    frequency: "حسب الاستجابة",

    mechanism:
      "يزيد تركيز الكالسيوم خارج الخلايا ويساعد على استقرار غشاء عضلة القلب في بعض اضطرابات الشوارد.",

    indications:
      "نقص الكالسيوم الشديد وبعض حالات Hyperkalemia مع تغيرات ECG.",

    contraindications:
      "تستخدم بحذر شديد حسب الحالة والقلب والشوارد.",

    warnings:
      "الإعطاء السريع قد يسبب اضطرابات نظم قلبية. يجب التأكد من الطريق والتركيز.",

    sideEffects:
      "بطء القلب، اضطرابات نظم، تهيج موضعي وأذية الأنسجة عند التسرب.",

    notes:
      "في Hyperkalemia لا يخفض Serum potassium بحد ذاته؛ دوره الأساسي حماية القلب.",

    alerts: [
      "مراقبة ECG.",
      "تأكد من وجود indication واضح.",
      "تجنب التسرب خارج الوريد."
    ]
  },


  // ====================================================
  // MAGNESIUM SULFATE
  // ====================================================

  magnesium_sulfate: {
    id: "magnesium_sulfate",

    name: "Magnesium Sulfate",

    genericName: "Magnesium Sulfate",

    brandNames: [
      "Magnesium Sulfate"
    ],

    category: "Emergency",

    therapeuticClass: "Electrolyte / Anticonvulsant",

    pharmacologicalClass: "Magnesium Salt",

    diseases: [
      "torsades",
      "severe_asthma",
      "hypomagnesemia"
    ],

    dosageForm: "Injection",

    routes: [
      "IV",
      "IO"
    ],

    strengths: [
      {
        name: "50%",
        concentration: 500,
        unit: "mg/mL"
      },
      {
        name: "20%",
        concentration: 200,
        unit: "mg/mL"
      }
    ],

    dose: "حسب الحالة والبروتوكول",

    maxDose: null,

    frequency: "حسب الحالة",

    mechanism:
      "يعوض المغنيسيوم ويؤثر على النقل العصبي والعضلي واستقرار النشاط الكهربائي للقلب.",

    indications:
      "Torsades de pointes، نقص المغنيسيوم الشديد وبعض حالات الربو الشديد حسب البروتوكول.",

    contraindications:
      "فرط المغنيسيوم أو قصور كلوي شديد إلا ضمن إشراف طبي متخصص.",

    warnings:
      "قد يسبب انخفاض ضغط الدم وتثبيط التنفس عند الجرعات العالية.",

    sideEffects:
      "احمرار، انخفاض ضغط الدم، ضعف عضلي، تثبيط التنفس.",

    notes:
      "يستخدم فقط عند وجود indication واضح.",

    alerts: [
      "راقب التنفس وضغط الدم.",
      "انتبه للتركيز العالي 50%.",
      "تعديل الجرعة ضروري في القصور الكلوي."
    ]
  },


  // ====================================================
  // GLUCAGON
  // ====================================================

  glucagon: {
    id: "glucagon",

    name: "Glucagon",

    genericName: "Glucagon",

    brandNames: [
      "Glucagon",
      "Baqsimi"
    ],

    category: "Emergency",

    therapeuticClass: "Antihypoglycemic Agent",

    pharmacologicalClass: "Pancreatic Hormone",

    diseases: [
      "severe_hypoglycemia"
    ],

    dosageForm: "Injection / Intranasal",

    routes: [
      "IM",
      "SC",
      "Intranasal"
    ],

    strengths: [
      {
        name: "1 mg",
        concentration: 1,
        unit: "mg"
      }
    ],

    dose: "حسب العمر والمنتج المستخدم",

    maxDose: null,

    frequency: "جرعة إسعافية حسب الاستجابة",

    mechanism:
      "يحفز تحلل Glycogen في الكبد ويرفع مستوى Glucose في الدم.",

    indications:
      "نقص السكر الشديد عندما يتعذر إعطاء Glucose عن طريق الوريد.",

    contraindications:
      "Pheochromocytoma وبعض الحالات الخاصة حسب المنتج.",

    warnings:
      "قد يسبب الغثيان والقيء، ويحتاج الطفل إلى مصدر Glucose بعد استعادة الوعي عند الحاجة.",

    sideEffects:
      "غثيان، قيء، صداع، تسرع القلب.",

    notes:
      "يستخدم كخيار إنقاذي عند عدم توفر IV access أو تعذر إعطاء glucose.",

    alerts: [
      "بعد استعادة الوعي يجب إعطاء مصدر مناسب من الكربوهيدرات عند الحاجة.",
      "راقب Blood Glucose.",
      "لا يؤخر طلب المساعدة الطبية."
    ]
  },


  // ====================================================
  // HYDROCORTISONE
  // ====================================================

  hydrocortisone_emergency: {
    id: "hydrocortisone_emergency",

    name: "Hydrocortisone",

    genericName: "Hydrocortisone",

    brandNames: [
      "Solu-Cortef"
    ],

    category: "Emergency",

    therapeuticClass: "Glucocorticoid",

    pharmacologicalClass: "Corticosteroid",

    diseases: [
      "adrenal_crisis",
      "severe_allergy",
      "severe_asthma"
    ],

    dosageForm: "Injection",

    routes: [
      "IV",
      "IM"
    ],

    strengths: [
      {
        name: "100 mg",
        concentration: 100,
        unit: "mg"
      }
    ],

    dose: "حسب العمر والحالة والبروتوكول",

    maxDose: null,

    frequency: "حسب الحالة",

    mechanism:
      "يرتبط بمستقبلات Glucocorticoid ويقلل الاستجابة الالتهابية ويعوض نقص الكورتيزول.",

    indications:
      "Adrenal crisis وبعض حالات الحساسية أو الربو الشديد ضمن البروتوكولات العلاجية.",

    contraindications:
      "لا توجد موانع مطلقة في الحالات الإسعافية المهددة للحياة.",

    warnings:
      "ليس بديلاً عن Epinephrine في Anaphylaxis.",

    sideEffects:
      "ارتفاع سكر الدم، ارتفاع ضغط الدم، اضطرابات المزاج، تثبيط المناعة.",

    notes:
      "في التأق، Epinephrine هو العلاج الأول؛ Hydrocortisone ليس بديلاً عنه.",

    alerts: [
      "لا تستبدل Epinephrine بـ Hydrocortisone في التأق.",
      "راقب Blood Glucose.",
      "استخدم حسب indication واضح."
    ]
  }

};


// ======================================================
// EXPORT
// ======================================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = emergencyDrugs;
}
