// ======================================================
// DoseCare AI v7
// Drugs Database
// ======================================================

const drugs = {
    paracetamol: {
  id: "paracetamol",

  name: "Paracetamol",

  genericName: "Paracetamol",

  brandNames: [
    "Panadol",
    "Calpol",
    "Adol",
    "Fevadol"
  ],

  category: "Pain & Fever",

  therapeuticClass: "Analgesic & Antipyretic",

  pharmacologicalClass: "Para-aminophenol Derivative",

  diseases: [
    "fever",
    "pain"
  ],

  mgPerKg: 15,

  frequency: "كل 4–6 ساعات",

  maxDose: 1000,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "120 mg / 5 mL",
      concentration: 120
    },
    {
      name: "250 mg / 5 mL",
      concentration: 250
    }
  ],

  mechanism:
    "يثبط تصنيع البروستاغلاندينات داخل الجهاز العصبي المركزي، مما يقلل الألم والحمى مع تأثير مضاد التهاب ضعيف.",

  indications:
    "الحمى، الألم الخفيف إلى المتوسط، الصداع، ألم الأسنان، الألم بعد التطعيم.",

  contraindications:
    "فرط الحساسية للباراسيتامول أو القصور الكبدي الشديد.",

  warnings:
    "لا تتجاوز الجرعة اليومية القصوى. يستخدم بحذر لدى مرضى الكبد أو عند تناول الكحول.",

  sideEffects:
    "غثيان، قيء، طفح جلدي، تفاعلات تحسسية. الجرعات العالية قد تسبب تسمماً كبدياً.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل عند استخدامه بالجرعات الموصى بها.",

  lactation:
    "آمن أثناء الرضاعة الطبيعية.",

  doseRange:
    "10–15 mg/kg كل 4–6 ساعات، بحد أقصى 75 mg/kg/day أو 4 g/day أيهما أقل.",

  onset:
    "30–60 دقيقة",

  duration:
    "4–6 ساعات",

  halfLife:
    "2–3 ساعات",

  proteinBinding:
    "10–25%",

  metabolism:
    "يستقلب في الكبد بواسطة Glucuronidation و Sulfation، وجزء صغير عبر CYP2E1.",

  elimination:
    "يطرح عن طريق الكلى على شكل مستقلبات.",

  storage:
    "يحفظ بدرجة حرارة أقل من 25°C بعيداً عن الرطوبة والضوء.",

  monitoring: [
    "مراقبة وظائف الكبد عند الاستخدام الطويل.",
    "التأكد من عدم تجاوز الجرعة اليومية.",
    "متابعة تحسن الحمى أو الألم."
  ],

  clinicalPearls: [
    "الخيار الأول لخفض الحرارة عند الأطفال.",
    "يمكن إعطاؤه مع أو بدون الطعام.",
    "التسمم يعالج بـ N-acetylcysteine إذا أعطي مبكراً."
  ],

  blackBox:
    "الجرعات الزائدة قد تسبب فشلاً كبدياً حاداً قد يؤدي إلى الوفاة.",

  interactions: [
    "Warfarin: قد يزيد INR عند الاستخدام الطويل.",
    "Alcohol: يزيد خطر السمية الكبدية.",
    "Phenytoin و Carbamazepine: قد يزيدان تكوين المستقلبات السامة."
  ],

  notes:
    "رج الزجاجة جيداً قبل الاستخدام واستعمل أداة قياس دقيقة للجرعة.",

  alerts: [
    "لا تتجاوز الجرعة اليومية القصوى.",
    "لا تجمعه مع أي دواء آخر يحتوي على Paracetamol.",
    "راجع الطبيب إذا استمرت الحمى أكثر من 3 أيام."
  ]
},
 ibuprofen: {
  id: "ibuprofen",

  name: "Ibuprofen",

  genericName: "Ibuprofen",

  brandNames: [
    "Brufen",
    "Nurofen",
    "Advil",
    "Profen"
  ],

  category: "Pain & Fever",

  therapeuticClass: "NSAID",

  pharmacologicalClass: "Propionic Acid Derivative",

  diseases: [
    "fever",
    "pain"
  ],

  mgPerKg: 10,

  frequency: "كل 6–8 ساعات",

  maxDose: 400,

  minAge: 0.5,

  maxAge: 18,

  strengths: [
    {
      name: "100 mg / 5 mL",
      concentration: 100
    },
    {
      name: "200 mg / 5 mL",
      concentration: 200
    }
  ],

  mechanism:
    "يثبط إنزيمي COX-1 و COX-2 مما يقلل تصنيع البروستاغلاندينات وبالتالي يخفف الألم والحمى والالتهاب.",

  indications:
    "الحمى، الألم الخفيف إلى المتوسط، التهاب الأذن، التهاب الحلق، آلام الأسنان، وآلام العضلات.",

  contraindications:
    "فرط الحساسية للإيبوبروفين أو مضادات الالتهاب غير الستيرويدية، قرحة المعدة النشطة، النزيف الهضمي، الفشل الكلوي الشديد.",

  warnings:
    "يستخدم بحذر عند مرضى الربو والجفاف وأمراض الكلى. يفضل إعطاؤه بعد الطعام لتقليل تهيج المعدة.",

  sideEffects:
    "ألم المعدة، غثيان، قيء، حرقة، طفح جلدي، دوخة، وقد يحدث نزيف معدي عند الاستخدام الطويل.",

  pregnancy:
    "يمنع استخدامه خلال الثلث الأخير من الحمل.",

  lactation:
    "يعد آمناً نسبياً أثناء الرضاعة الطبيعية.",

  doseRange:
    "5–10 mg/kg كل 6–8 ساعات، بحد أقصى 40 mg/kg/day.",

  onset:
    "30–60 دقيقة",

  duration:
    "6–8 ساعات",

  halfLife:
    "حوالي ساعتين",

  proteinBinding:
    "≈99%",

  metabolism:
    "يستقلب في الكبد بواسطة CYP2C9.",

  elimination:
    "يطرح عن طريق الكلى على شكل مستقلبات.",

  storage:
    "يحفظ بدرجة حرارة الغرفة بعيداً عن الحرارة والرطوبة.",

  monitoring: [
    "مراقبة وظائف الكلى عند الاستخدام الطويل.",
    "متابعة أعراض النزيف المعدي.",
    "مراقبة تحسن الحمى أو الألم."
  ],

  clinicalPearls: [
    "يفضل إعطاؤه بعد الطعام.",
    "تجنب استخدامه عند الأطفال المصابين بالجفاف الشديد.",
    "لا يستخدم للرضع أقل من 6 أشهر إلا بتوجيه طبي."
  ],

  blackBox:
    "قد يزيد خطر الأحداث القلبية الوعائية والنزيف أو التقرحات الهضمية عند الاستخدام المطول.",

  interactions: [
    "Warfarin: يزيد خطر النزيف.",
    "Aspirin: قد يقلل تأثير الأسبرين المضاد للصفيحات.",
    "ACE Inhibitors: قد يقلل فعاليتها ويزيد خطر إصابة الكلى."
  ],

  notes:
    "يستخدم مع الطعام أو الحليب إذا سبب اضطراباً بالمعدة.",

  alerts: [
    "لا يستخدم للأطفال أقل من 6 أشهر دون استشارة الطبيب.",
    "تجنب استخدامه عند وجود جفاف شديد.",
    "أوقف العلاج عند ظهور نزيف أو حساسية."
  ]
},ibuprofen: {
  id: "ibuprofen",

  name: "Ibuprofen",

  genericName: "Ibuprofen",

  brandNames: [
    "Brufen",
    "Nurofen",
    "Advil",
    "Profen"
  ],

  category: "Pain & Fever",

  therapeuticClass: "NSAID",

  pharmacologicalClass: "Propionic Acid Derivative",

  diseases: [
    "fever",
    "pain"
  ],

  mgPerKg: 10,

  frequency: "كل 6–8 ساعات",

  maxDose: 400,

  minAge: 0.5,

  maxAge: 18,

  strengths: [
    {
      name: "100 mg / 5 mL",
      concentration: 100
    },
    {
      name: "200 mg / 5 mL",
      concentration: 200
    }
  ],

  mechanism:
    "يثبط إنزيمي COX-1 و COX-2 مما يقلل تصنيع البروستاغلاندينات وبالتالي يخفف الألم والحمى والالتهاب.",

  indications:
    "الحمى، الألم الخفيف إلى المتوسط، التهاب الأذن، التهاب الحلق، آلام الأسنان، وآلام العضلات.",

  contraindications:
    "فرط الحساسية للإيبوبروفين أو مضادات الالتهاب غير الستيرويدية، قرحة المعدة النشطة، النزيف الهضمي، الفشل الكلوي الشديد.",

  warnings:
    "يستخدم بحذر عند مرضى الربو والجفاف وأمراض الكلى. يفضل إعطاؤه بعد الطعام لتقليل تهيج المعدة.",

  sideEffects:
    "ألم المعدة، غثيان، قيء، حرقة، طفح جلدي، دوخة، وقد يحدث نزيف معدي عند الاستخدام الطويل.",

  pregnancy:
    "يمنع استخدامه خلال الثلث الأخير من الحمل.",

  lactation:
    "يعد آمناً نسبياً أثناء الرضاعة الطبيعية.",

  doseRange:
    "5–10 mg/kg كل 6–8 ساعات، بحد أقصى 40 mg/kg/day.",

  onset:
    "30–60 دقيقة",

  duration:
    "6–8 ساعات",

  halfLife:
    "حوالي ساعتين",

  proteinBinding:
    "≈99%",

  metabolism:
    "يستقلب في الكبد بواسطة CYP2C9.",

  elimination:
    "يطرح عن طريق الكلى على شكل مستقلبات.",

  storage:
    "يحفظ بدرجة حرارة الغرفة بعيداً عن الحرارة والرطوبة.",

  monitoring: [
    "مراقبة وظائف الكلى عند الاستخدام الطويل.",
    "متابعة أعراض النزيف المعدي.",
    "مراقبة تحسن الحمى أو الألم."
  ],

  clinicalPearls: [
    "يفضل إعطاؤه بعد الطعام.",
    "تجنب استخدامه عند الأطفال المصابين بالجفاف الشديد.",
    "لا يستخدم للرضع أقل من 6 أشهر إلا بتوجيه طبي."
  ],

  blackBox:
    "قد يزيد خطر الأحداث القلبية الوعائية والنزيف أو التقرحات الهضمية عند الاستخدام المطول.",

  interactions: [
    "Warfarin: يزيد خطر النزيف.",
    "Aspirin: قد يقلل تأثير الأسبرين المضاد للصفيحات.",
    "ACE Inhibitors: قد يقلل فعاليتها ويزيد خطر إصابة الكلى."
  ],

  notes:
    "يستخدم مع الطعام أو الحليب إذا سبب اضطراباً بالمعدة.",

  alerts: [
    "لا يستخدم للأطفال أقل من 6 أشهر دون استشارة الطبيب.",
    "تجنب استخدامه عند وجود جفاف شديد.",
    "أوقف العلاج عند ظهور نزيف أو حساسية."
  ]
},
amoxicillin: {
  id: "amoxicillin",

  name: "Amoxicillin",

  genericName: "Amoxicillin",

  brandNames: [
    "Amoxil",
    "Mox",
    "Ospamox",
    "Hiconcil"
  ],

  category: "Antibiotic",

  therapeuticClass: "Penicillin Antibiotic",

  pharmacologicalClass: "Aminopenicillin",

  diseases: [
    "otitis",
    "pharyngitis",
    "sinusitis",
    "pneumonia"
  ],

  mgPerKg: 25,

  frequency: "كل 12 ساعة",

  maxDose: 1000,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "125 mg / 5 mL",
      concentration: 125
    },
    {
      name: "250 mg / 5 mL",
      concentration: 250
    }
  ],

  mechanism:
    "يثبط تصنيع جدار الخلية البكتيرية بالارتباط مع Penicillin-Binding Proteins مما يؤدي إلى قتل البكتيريا.",

  indications:
    "التهاب الأذن الوسطى، التهاب اللوزتين، التهاب الجيوب الأنفية، ذات الرئة، والتهابات الجلد.",

  contraindications:
    "فرط الحساسية للبنسلين أو أي من مضادات البيتالاكتام.",

  warnings:
    "يستخدم بحذر عند مرضى القصور الكلوي. يجب إكمال مدة العلاج كاملة.",

  sideEffects:
    "إسهال، غثيان، قيء، طفح جلدي، تفاعلات تحسسية.",

  pregnancy:
    "يعد آمناً أثناء الحمل عند الحاجة.",

  lactation:
    "آمن أثناء الرضاعة الطبيعية.",

  doseRange:
    "20–45 mg/kg/day مقسمة على جرعتين أو ثلاث حسب شدة العدوى.",

  onset:
    "1–2 ساعة",

  duration:
    "حوالي 8 ساعات",

  halfLife:
    "1–1.5 ساعة",

  proteinBinding:
    "17–20%",

  metabolism:
    "استقلاب محدود.",

  elimination:
    "يطرح بشكل رئيسي عن طريق الكلى.",

  storage:
    "يحفظ المعلق بعد التحضير في الثلاجة ويستخدم خلال 14 يوماً.",

  monitoring: [
    "متابعة التحسن السريري.",
    "مراقبة الحساسية.",
    "تقييم وظائف الكلى عند الاستخدام الطويل."
  ],

  clinicalPearls: [
    "يرج المعلق جيداً قبل كل جرعة.",
    "إكمال الكورس العلاجي حتى لو تحسنت الأعراض."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Warfarin: قد يزيد INR.",
    "Allopurinol: يزيد احتمال الطفح الجلدي."
  ],

  notes:
    "يمكن إعطاؤه مع أو بدون الطعام.",

  alerts: [
    "أوقف الدواء عند ظهور حساسية شديدة.",
    "لا يستخدم لعلاج العدوى الفيروسية."
  ]
},

co_amoxiclav: {
  id: "co_amoxiclav",

  name: "Co-amoxiclav",

  genericName: "Amoxicillin + Clavulanic Acid",

  brandNames: [
    "Augmentin",
    "Curam",
    "Amoclan"
  ],

  category: "Antibiotic",

  therapeuticClass: "Penicillin + Beta-lactamase Inhibitor",

  pharmacologicalClass: "Aminopenicillin Combination",

  diseases: [
    "otitis",
    "sinusitis",
    "pneumonia",
    "uti"
  ],

  mgPerKg: 22.5,

  frequency: "كل 12 ساعة",

  maxDose: 875,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "228.5 mg / 5 mL",
      concentration: 200
    },
    {
      name: "457 mg / 5 mL",
      concentration: 400
    }
  ],

  mechanism:
    "الأموكسيسيلين يثبط تصنيع جدار الخلية البكتيرية، بينما يحميه الكلافولانيك أسيد من إنزيمات Beta-lactamase.",

  indications:
    "التهاب الأذن، التهاب الجيوب، ذات الرئة، التهابات المسالك البولية، والتهابات الجلد.",

  contraindications:
    "فرط الحساسية للبنسلين أو وجود يرقان سابق مرتبط بالدواء.",

  warnings:
    "قد يسبب اضطرابات هضمية أو ارتفاع إنزيمات الكبد، ويستخدم بحذر عند مرضى الكبد.",

  sideEffects:
    "إسهال، غثيان، قيء، طفح جلدي، داء المبيضات.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "آمن أثناء الرضاعة الطبيعية.",

  doseRange:
    "يعتمد على محتوى الأموكسيسيلين: 25–45 mg/kg/day مقسمة كل 12 ساعة.",

  onset:
    "1–2 ساعة",

  duration:
    "حوالي 12 ساعة",

  halfLife:
    "حوالي ساعة واحدة",

  proteinBinding:
    "18–25%",

  metabolism:
    "استقلاب جزئي في الكبد.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ المعلق بعد التحضير في الثلاجة ويستخدم خلال 7–10 أيام.",

  monitoring: [
    "متابعة الاستجابة للعلاج.",
    "مراقبة وظائف الكبد عند العلاج الطويل.",
    "مراقبة الحساسية."
  ],

  clinicalPearls: [
    "يفضل إعطاؤه مع بداية الطعام.",
    "رج الزجاجة جيداً قبل كل جرعة."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Warfarin: قد يزيد INR.",
    "Methotrexate: قد يزيد سميته."
  ],

  notes:
    "يؤخذ مع الطعام لتقليل اضطرابات المعدة.",

  alerts: [
    "أوقف العلاج عند حدوث حساسية.",
    "قد يسبب إسهالاً مرتبطاً بالمضادات الحيوية."
  ] 
},
    cefixime: {
  id: "cefixime",

  name: "Cefixime",

  genericName: "Cefixime",

  brandNames: [
    "Suprax",
    "Cefspan",
    "Taxim-O"
  ],

  category: "Antibiotic",

  therapeuticClass: "Cephalosporin Antibiotic",

  pharmacologicalClass: "Third Generation Cephalosporin",

  diseases: [
    "otitis",
    "pharyngitis",
    "sinusitis",
    "uti"
  ],

  mgPerKg: 8,

  frequency: "مرة يومياً أو كل 12 ساعة",

  maxDose: 400,

  minAge: 0.5,

  maxAge: 18,

  strengths: [
    {
      name: "100 mg / 5 mL",
      concentration: 100
    }
  ],

  mechanism:
    "يثبط تصنيع جدار الخلية البكتيرية مما يؤدي إلى قتل البكتيريا.",

  indications:
    "التهاب الأذن الوسطى، التهاب الحلق، التهاب الجيوب الأنفية، والتهابات المسالك البولية.",

  contraindications:
    "فرط الحساسية للسيفالوسبورينات.",

  warnings:
    "يستخدم بحذر عند مرضى الكلى أو من لديهم حساسية للبنسلين.",

  sideEffects:
    "إسهال، غثيان، ألم بطني، طفح جلدي.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "آمن أثناء الرضاعة الطبيعية.",

  doseRange:
    "8 mg/kg/day مرة واحدة أو مقسمة كل 12 ساعة.",

  onset:
    "2–4 ساعات",

  duration:
    "24 ساعة",

  halfLife:
    "3–4 ساعات",

  proteinBinding:
    "65%",

  metabolism:
    "استقلاب محدود.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة، والمعلق يستخدم خلال 14 يوماً.",

  monitoring: [
    "متابعة الاستجابة للعلاج.",
    "مراقبة الحساسية."
  ],

  clinicalPearls: [
    "يمكن إعطاؤه مرة واحدة يومياً.",
    "رج الزجاجة جيداً قبل الاستعمال."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Warfarin: قد يزيد INR."
  ],

  notes:
    "يمكن إعطاؤه مع أو بدون الطعام.",

  alerts: [
    "أكمل مدة العلاج كاملة.",
    "لا يستخدم لعلاج العدوى الفيروسية."
  ]
},

cephalexin: {
  id: "cephalexin",

  name: "Cephalexin",

  genericName: "Cephalexin",

  brandNames: [
    "Keflex",
    "Ceporex",
    "Sporidex"
  ],

  category: "Antibiotic",

  therapeuticClass: "Cephalosporin Antibiotic",

  pharmacologicalClass: "First Generation Cephalosporin",

  diseases: [
    "pharyngitis",
    "skin",
    "uti"
  ],

  mgPerKg: 25,

  frequency: "كل 12 ساعة",

  maxDose: 1000,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "125 mg / 5 mL",
      concentration: 125
    },
    {
      name: "250 mg / 5 mL",
      concentration: 250
    }
  ],

  mechanism:
    "يثبط تصنيع جدار الخلية البكتيرية.",

  indications:
    "التهابات الجلد، التهاب الحلق، التهابات المسالك البولية، وبعض التهابات الجهاز التنفسي.",

  contraindications:
    "فرط الحساسية للسيفالوسبورينات.",

  warnings:
    "يستخدم بحذر عند مرضى الكلى.",

  sideEffects:
    "إسهال، غثيان، قيء، طفح جلدي.",

  pregnancy:
    "يعد آمناً أثناء الحمل.",

  lactation:
    "آمن أثناء الرضاعة الطبيعية.",

  doseRange:
    "25–50 mg/kg/day مقسمة على جرعتين إلى أربع جرعات.",

  onset:
    "1 ساعة",

  duration:
    "6–8 ساعات",

  halfLife:
    "حوالي ساعة",

  proteinBinding:
    "15%",

  metabolism:
    "لا يستقلب بشكل ملحوظ.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة، والمعلق يستخدم خلال 14 يوماً.",

  monitoring: [
    "متابعة التحسن السريري.",
    "مراقبة الحساسية."
  ],

  clinicalPearls: [
    "يفضل إكمال الكورس العلاجي.",
    "رج الزجاجة جيداً قبل الاستخدام."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Metformin: قد يزيد مستواه في الدم.",
    "Warfarin: قد يزيد INR."
  ],

  notes:
    "يمكن إعطاؤه مع الطعام إذا سبب اضطراباً بالمعدة.",

  alerts: [
    "أوقف العلاج عند ظهور حساسية.",
    "لا يستخدم دون وصفة طبية."
  ]
},
    cefuroxime: {
  id: "cefuroxime",

  name: "Cefuroxime",

  genericName: "Cefuroxime Axetil",

  brandNames: [
    "Zinnat",
    "Ceftin"
  ],

  category: "Antibiotic",

  therapeuticClass: "Cephalosporin Antibiotic",

  pharmacologicalClass: "Second Generation Cephalosporin",

  diseases: [
    "otitis",
    "pharyngitis",
    "sinusitis",
    "pneumonia"
  ],

  mgPerKg: 15,

  frequency: "كل 12 ساعة",

  maxDose: 500,

  minAge: 0.25,

  maxAge: 18,

  strengths: [
    {
      name: "125 mg / 5 mL",
      concentration: 125
    },
    {
      name: "250 mg / 5 mL",
      concentration: 250
    }
  ],

  mechanism:
    "يثبط تصنيع جدار الخلية البكتيرية بالارتباط مع Penicillin-Binding Proteins.",

  indications:
    "التهاب الأذن الوسطى، التهاب الجيوب الأنفية، التهاب اللوزتين، ذات الرئة.",

  contraindications:
    "فرط الحساسية للسيفالوسبورينات.",

  warnings:
    "يستخدم بحذر عند مرضى الكلى، ويؤخذ بعد الطعام لتحسين الامتصاص.",

  sideEffects:
    "إسهال، غثيان، قيء، ألم بطني، طفح جلدي.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "آمن أثناء الرضاعة الطبيعية.",

  doseRange:
    "20–30 mg/kg/day مقسمة كل 12 ساعة.",

  onset:
    "2–3 ساعات",

  duration:
    "12 ساعة",

  halfLife:
    "1–1.5 ساعة",

  proteinBinding:
    "35–50%",

  metabolism:
    "لا يستقلب بشكل ملحوظ.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة، والمعلق يستخدم خلال 10 أيام.",

  monitoring: [
    "متابعة التحسن السريري.",
    "مراقبة الحساسية."
  ],

  clinicalPearls: [
    "يفضل تناوله بعد الطعام.",
    "رج الزجاجة جيداً قبل الاستخدام."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Probenecid: يزيد تركيز الدواء.",
    "Warfarin: قد يزيد INR."
  ],

  notes:
    "يؤخذ بعد الطعام لتحسين الامتصاص.",

  alerts: [
    "أكمل مدة العلاج كاملة.",
    "أوقف العلاج عند حدوث حساسية."
  ]
},

azithromycin: {
  id: "azithromycin",

  name: "Azithromycin",

  genericName: "Azithromycin",

  brandNames: [
    "Zithromax",
    "Azithrocin",
    "Zeto"
  ],

  category: "Antibiotic",

  therapeuticClass: "Macrolide Antibiotic",

  pharmacologicalClass: "Azalide",

  diseases: [
    "pharyngitis",
    "sinusitis",
    "pneumonia"
  ],

  mgPerKg: 10,

  frequency: "مرة يومياً",

  maxDose: 500,

  minAge: 0.5,

  maxAge: 18,

  strengths: [
    {
      name: "100 mg / 5 mL",
      concentration: 100
    },
    {
      name: "200 mg / 5 mL",
      concentration: 200
    }
  ],

  mechanism:
    "يثبط تصنيع البروتين البكتيري بالارتباط مع الوحدة 50S من الريبوسوم.",

  indications:
    "التهاب الحلق، التهاب الجيوب الأنفية، ذات الرئة، وبعض التهابات الجلد.",

  contraindications:
    "فرط الحساسية للأزيثرومايسين أو الماكروليدات.",

  warnings:
    "قد يسبب إطالة QT ويستخدم بحذر عند مرضى اضطرابات القلب.",

  sideEffects:
    "إسهال، غثيان، ألم بطني، قيء، صداع.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "آمن أثناء الرضاعة الطبيعية.",

  doseRange:
    "10 mg/kg في اليوم الأول ثم 5 mg/kg يومياً حسب نوع العدوى.",

  onset:
    "2–3 ساعات",

  duration:
    "24 ساعة",

  halfLife:
    "حوالي 68 ساعة",

  proteinBinding:
    "7–50%",

  metabolism:
    "استقلاب كبدي محدود.",

  elimination:
    "يطرح بشكل رئيسي مع الصفراء.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة الاستجابة للعلاج.",
    "مراقبة أعراض اضطرابات القلب عند المرضى المعرضين."
  ],

  clinicalPearls: [
    "يعطى مرة واحدة يومياً.",
    "مدة العلاج أقصر من معظم المضادات الحيوية."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Warfarin: قد يزيد INR.",
    "Digoxin: قد يزيد مستواه."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "لا يوقف العلاج قبل إكمال الكورس.",
    "يستخدم بحذر عند مرضى اضطرابات نظم القلب."
  ]
},
    clarithromycin: {
  id: "clarithromycin",

  name: "Clarithromycin",

  genericName: "Clarithromycin",

  brandNames: [
    "Klacid",
    "Biaxin"
  ],

  category: "Antibiotic",

  therapeuticClass: "Macrolide Antibiotic",

  pharmacologicalClass: "Macrolide",

  diseases: [
    "pharyngitis",
    "sinusitis",
    "pneumonia"
  ],

  mgPerKg: 7.5,

  frequency: "كل 12 ساعة",

  maxDose: 500,

  minAge: 0.5,

  maxAge: 18,

  strengths: [
    {
      name: "125 mg / 5 mL",
      concentration: 125
    },
    {
      name: "250 mg / 5 mL",
      concentration: 250
    }
  ],

  mechanism:
    "يثبط تصنيع البروتين البكتيري بالارتباط مع الوحدة 50S من الريبوسوم.",

  indications:
    "التهاب اللوزتين، التهاب الجيوب الأنفية، التهاب الأذن الوسطى، ذات الرئة.",

  contraindications:
    "فرط الحساسية للماكروليدات أو وجود إطالة QT.",

  warnings:
    "يستخدم بحذر عند مرضى الكبد والقلب.",

  sideEffects:
    "غثيان، إسهال، ألم بطني، اضطراب التذوق، صداع.",

  pregnancy:
    "يستخدم فقط إذا كانت الفائدة تفوق الخطر.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "7.5 mg/kg كل 12 ساعة.",

  onset:
    "2 ساعة",

  duration:
    "12 ساعة",

  halfLife:
    "3–7 ساعات",

  proteinBinding:
    "70%",

  metabolism:
    "يستقلب في الكبد بواسطة CYP3A4.",

  elimination:
    "عن طريق الكلى والصفراء.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "مراقبة وظائف الكبد.",
    "متابعة الاستجابة للعلاج."
  ],

  clinicalPearls: [
    "يمكن تناوله مع الطعام.",
    "أكمل الكورس العلاجي."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Warfarin.",
    "Digoxin.",
    "Carbamazepine."
  ],

  notes:
    "قد يسبب طعماً معدنياً بالفم.",

  alerts: [
    "يستخدم بحذر مع الأدوية التي تطيل QT."
  ]
},

metronidazole: {
  id: "metronidazole",

  name: "Metronidazole",

  genericName: "Metronidazole",

  brandNames: [
    "Flagyl",
    "Metrogyl"
  ],

  category: "Antiprotozoal & Antibiotic",

  therapeuticClass: "Nitroimidazole",

  pharmacologicalClass: "Nitroimidazole Derivative",

  diseases: [
    "diarrhea"
  ],

  mgPerKg: 7.5,

  frequency: "كل 8 ساعات",

  maxDose: 500,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "125 mg / 5 mL",
      concentration: 125
    },
    {
      name: "200 mg / 5 mL",
      concentration: 200
    }
  ],

  mechanism:
    "يؤدي إلى إتلاف DNA للكائنات اللاهوائية والطفيليات.",

  indications:
    "الأميبيا، الجيارديا، العدوى اللاهوائية، والتهابات الجهاز الهضمي.",

  contraindications:
    "فرط الحساسية للدواء.",

  warnings:
    "يمنع تناول الكحول أثناء العلاج ولمدة 48 ساعة بعد انتهائه.",

  sideEffects:
    "غثيان، قيء، طعم معدني، صداع، دوخة.",

  pregnancy:
    "يستخدم عند الحاجة الطبية.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "7.5 mg/kg كل 8 ساعات حسب نوع العدوى.",

  onset:
    "1–2 ساعة",

  duration:
    "8 ساعات",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "20%",

  metabolism:
    "يستقلب في الكبد.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن الأعراض.",
    "مراقبة وظائف الكبد عند العلاج الطويل."
  ],

  clinicalPearls: [
    "يعالج معظم العدوى اللاهوائية.",
    "تجنب الكحول أثناء العلاج."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Warfarin.",
    "Alcohol.",
    "Lithium."
  ],

  notes:
    "يفضل تناوله بعد الطعام.",

  alerts: [
    "يمنع شرب الكحول أثناء العلاج."
  ]
}, 
    loratadine: {
  id: "loratadine",

  name: "Loratadine",

  genericName: "Loratadine",

  brandNames: [
    "Claritin",
    "Lorano",
    "Lorat"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية مما يقلل أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، والحكة.",

  contraindications:
    "فرط الحساسية للوراتادين.",

  warnings:
    "يستخدم بحذر عند مرضى الكبد.",

  sideEffects:
    "صداع، جفاف الفم، نعاس خفيف.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.2 mg/kg مرة يومياً بحد أقصى 10 mg.",

  onset:
    "1–3 ساعات",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "97%",

  metabolism:
    "يستقلب في الكبد بواسطة CYP3A4 و CYP2D6.",

  elimination:
    "عن طريق البول والبراز.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "لا يسبب النعاس غالباً.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Ketoconazole.",
    "Erythromycin."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "لا تتجاوز الجرعة اليومية."
  ]
},

cetirizine: {
  id: "cetirizine",

  name: "Cetirizine",

  genericName: "Cetirizine",

  brandNames: [
    "Zyrtec",
    "Cetzine",
    "Cetirin"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية ويخفف أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، الحكة.",

  contraindications:
    "فرط الحساسية للسيتريزين أو الهيدروكسيزين.",

  warnings:
    "قد يسبب نعاساً عند بعض المرضى.",

  sideEffects:
    "نعاس، صداع، جفاف الفم، تعب.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.25 mg/kg/day بحد أقصى 10 mg.",

  onset:
    "30–60 دقيقة",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "93%",

  metabolism:
    "استقلاب محدود.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "قد يسبب نعاساً أكثر من Loratadine.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Alcohol.",
    "CNS depressants."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "تجنب القيادة إذا سبب نعاساً."
  ]
},
    loratadine: {
  id: "loratadine",

  name: "Loratadine",

  genericName: "Loratadine",

  brandNames: [
    "Claritin",
    "Lorano",
    "Lorat"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية مما يقلل أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، والحكة.",

  contraindications:
    "فرط الحساسية للوراتادين.",

  warnings:
    "يستخدم بحذر عند مرضى الكبد.",

  sideEffects:
    "صداع، جفاف الفم، نعاس خفيف.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.2 mg/kg مرة يومياً بحد أقصى 10 mg.",

  onset:
    "1–3 ساعات",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "97%",

  metabolism:
    "يستقلب في الكبد بواسطة CYP3A4 و CYP2D6.",

  elimination:
    "عن طريق البول والبراز.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "لا يسبب النعاس غالباً.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Ketoconazole.",
    "Erythromycin."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "لا تتجاوز الجرعة اليومية."
  ]
},

cetirizine: {
  id: "cetirizine",

  name: "Cetirizine",

  genericName: "Cetirizine",

  brandNames: [
    "Zyrtec",
    "Cetzine",
    "Cetirin"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية ويخفف أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، الحكة.",

  contraindications:
    "فرط الحساسية للسيتريزين أو الهيدروكسيزين.",

  warnings:
    "قد يسبب نعاساً عند بعض المرضى.",

  sideEffects:
    "نعاس، صداع، جفاف الفم، تعب.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.25 mg/kg/day بحد أقصى 10 mg.",

  onset:
    "30–60 دقيقة",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "93%",

  metabolism:
    "استقلاب محدود.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "قد يسبب نعاساً أكثر من Loratadine.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Alcohol.",
    "CNS depressants."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "تجنب القيادة إذا سبب نعاساً."
  ]
},
    loratadine: {
  id: "loratadine",

  name: "Loratadine",

  genericName: "Loratadine",

  brandNames: [
    "Claritin",
    "Lorano",
    "Lorat"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية مما يقلل أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، والحكة.",

  contraindications:
    "فرط الحساسية للوراتادين.",

  warnings:
    "يستخدم بحذر عند مرضى الكبد.",

  sideEffects:
    "صداع، جفاف الفم، نعاس خفيف.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.2 mg/kg مرة يومياً بحد أقصى 10 mg.",

  onset:
    "1–3 ساعات",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "97%",

  metabolism:
    "يستقلب في الكبد بواسطة CYP3A4 و CYP2D6.",

  elimination:
    "عن طريق البول والبراز.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "لا يسبب النعاس غالباً.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Ketoconazole.",
    "Erythromycin."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "لا تتجاوز الجرعة اليومية."
  ]
},

cetirizine: {
  id: "cetirizine",

  name: "Cetirizine",

  genericName: "Cetirizine",

  brandNames: [
    "Zyrtec",
    "Cetzine",
    "Cetirin"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية ويخفف أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، الحكة.",

  contraindications:
    "فرط الحساسية للسيتريزين أو الهيدروكسيزين.",

  warnings:
    "قد يسبب نعاساً عند بعض المرضى.",

  sideEffects:
    "نعاس، صداع، جفاف الفم، تعب.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.25 mg/kg/day بحد أقصى 10 mg.",

  onset:
    "30–60 دقيقة",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "93%",

  metabolism:
    "استقلاب محدود.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "قد يسبب نعاساً أكثر من Loratadine.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Alcohol.",
    "CNS depressants."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "تجنب القيادة إذا سبب نعاساً."
  ]
},
    loratadine: {
  id: "loratadine",

  name: "Loratadine",

  genericName: "Loratadine",

  brandNames: [
    "Claritin",
    "Lorano",
    "Lorat"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية مما يقلل أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، والحكة.",

  contraindications:
    "فرط الحساسية للوراتادين.",

  warnings:
    "يستخدم بحذر عند مرضى الكبد.",

  sideEffects:
    "صداع، جفاف الفم، نعاس خفيف.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.2 mg/kg مرة يومياً بحد أقصى 10 mg.",

  onset:
    "1–3 ساعات",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "97%",

  metabolism:
    "يستقلب في الكبد بواسطة CYP3A4 و CYP2D6.",

  elimination:
    "عن طريق البول والبراز.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "لا يسبب النعاس غالباً.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Ketoconazole.",
    "Erythromycin."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "لا تتجاوز الجرعة اليومية."
  ]
},

cetirizine: {
  id: "cetirizine",

  name: "Cetirizine",

  genericName: "Cetirizine",

  brandNames: [
    "Zyrtec",
    "Cetzine",
    "Cetirin"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية ويخفف أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، الحكة.",

  contraindications:
    "فرط الحساسية للسيتريزين أو الهيدروكسيزين.",

  warnings:
    "قد يسبب نعاساً عند بعض المرضى.",

  sideEffects:
    "نعاس، صداع، جفاف الفم، تعب.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.25 mg/kg/day بحد أقصى 10 mg.",

  onset:
    "30–60 دقيقة",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "93%",

  metabolism:
    "استقلاب محدود.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "قد يسبب نعاساً أكثر من Loratadine.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Alcohol.",
    "CNS depressants."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "تجنب القيادة إذا سبب نعاساً."
  ]
},

    loratadine: {
  id: "loratadine",

  name: "Loratadine",

  genericName: "Loratadine",

  brandNames: [
    "Claritin",
    "Lorano",
    "Lorat"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية مما يقلل أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، والحكة.",

  contraindications:
    "فرط الحساسية للوراتادين.",

  warnings:
    "يستخدم بحذر عند مرضى الكبد.",

  sideEffects:
    "صداع، جفاف الفم، نعاس خفيف.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.2 mg/kg مرة يومياً بحد أقصى 10 mg.",

  onset:
    "1–3 ساعات",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "97%",

  metabolism:
    "يستقلب في الكبد بواسطة CYP3A4 و CYP2D6.",

  elimination:
    "عن طريق البول والبراز.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "لا يسبب النعاس غالباً.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Ketoconazole.",
    "Erythromycin."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "لا تتجاوز الجرعة اليومية."
  ]
},

cetirizine: {
  id: "cetirizine",

  name: "Cetirizine",

  genericName: "Cetirizine",

  brandNames: [
    "Zyrtec",
    "Cetzine",
    "Cetirin"
  ],

  category: "Antihistamine",

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
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 الطرفية ويخفف أعراض الحساسية.",

  indications:
    "التهاب الأنف التحسسي، الشرى، الحكة.",

  contraindications:
    "فرط الحساسية للسيتريزين أو الهيدروكسيزين.",

  warnings:
    "قد يسبب نعاساً عند بعض المرضى.",

  sideEffects:
    "نعاس، صداع، جفاف الفم، تعب.",

  pregnancy:
    "يعد آمناً نسبياً أثناء الحمل.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.25 mg/kg/day بحد أقصى 10 mg.",

  onset:
    "30–60 دقيقة",

  duration:
    "24 ساعة",

  halfLife:
    "8 ساعات",

  proteinBinding:
    "93%",

  metabolism:
    "استقلاب محدود.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن أعراض الحساسية."
  ],

  clinicalPearls: [
    "قد يسبب نعاساً أكثر من Loratadine.",
    "يعطى مرة واحدة يومياً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Alcohol.",
    "CNS depressants."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "تجنب القيادة إذا سبب نعاساً."
  ]
},

    chlorpheniramine: {
  id: "chlorpheniramine",

  name: "Chlorpheniramine",

  genericName: "Chlorpheniramine Maleate",

  brandNames: [
    "Piriton",
    "Chlor-Trimeton"
  ],

  category: "Antihistamine",

  therapeuticClass: "First Generation H1 Antihistamine",

  pharmacologicalClass: "Alkylamine Derivative",

  diseases: [
    "allergy"
  ],

  mgPerKg: 0.1,

  frequency: "كل 6-8 ساعات",

  maxDose: 4,

  minAge: 2,

  maxAge: 18,

  strengths: [
    {
      name: "2 mg / 5 mL",
      concentration: 2
    }
  ],

  mechanism:
    "يثبط مستقبلات H1 ويقلل تأثير الهيستامين على الجسم.",

  indications:
    "الحساسية، الشرى، الحكة، التهاب الأنف التحسسي.",

  contraindications:
    "فرط الحساسية، حديثو الولادة، الزرق مغلق الزاوية.",

  warnings:
    "قد يسبب النعاس ويستخدم بحذر مع مثبطات الجهاز العصبي المركزي.",

  sideEffects:
    "نعاس، دوخة، جفاف الفم، تشوش الرؤية.",

  pregnancy:
    "يستخدم عند الضرورة الطبية.",

  lactation:
    "يفضل تجنبه أثناء الرضاعة.",

  doseRange:
    "0.1 mg/kg/day مقسمة كل 6-8 ساعات.",

  onset:
    "30 دقيقة",

  duration:
    "4-6 ساعات",

  halfLife:
    "20 ساعة",

  proteinBinding:
    "72%",

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
    "قد يسبب نعاساً واضحاً.",
    "يفضل إعطاؤه ليلاً."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Alcohol.",
    "Sedatives.",
    "MAO inhibitors."
  ],

  notes:
    "يمكن تناوله مع الطعام إذا سبب اضطراباً بالمعدة.",

  alerts: [
    "قد يسبب النعاس.",
    "تجنب القيادة أو تشغيل الآلات."
  ]
},

salbutamol: {
  id: "salbutamol",

  name: "Salbutamol",

  genericName: "Salbutamol",

  brandNames: [
    "Ventolin",
    "Asthalin"
  ],

  category: "Bronchodilator",

  therapeuticClass: "Short-Acting Beta2 Agonist",

  pharmacologicalClass: "Selective β2 Adrenergic Agonist",

  diseases: [
    "asthma"
  ],

  mgPerKg: 0.15,

  frequency: "كل 6-8 ساعات",

  maxDose: 5,

  minAge: 2,

  maxAge: 18,

  strengths: [
    {
      name: "2 mg / 5 mL",
      concentration: 2
    }
  ],

  mechanism:
    "ينشط مستقبلات β2 في الشعب الهوائية مما يؤدي إلى ارتخاء العضلات الملساء وتوسع القصبات.",

  indications:
    "الربو، التشنج القصبي، أزيز الصدر.",

  contraindications:
    "فرط الحساسية للسالبوتامول.",

  warnings:
    "يستخدم بحذر عند مرضى القلب وفرط نشاط الغدة الدرقية.",

  sideEffects:
    "رعشة، خفقان، صداع، عصبية، نقص بوتاسيوم الدم.",

  pregnancy:
    "يستخدم عند الحاجة الطبية.",

  lactation:
    "يعد آمناً نسبياً أثناء الرضاعة.",

  doseRange:
    "0.1-0.15 mg/kg/dose كل 6-8 ساعات.",

  onset:
    "15-30 دقيقة",

  duration:
    "4-6 ساعات",

  halfLife:
    "4-6 ساعات",

  proteinBinding:
    "10%",

  metabolism:
    "يستقلب في الكبد.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "مراقبة معدل النبض.",
    "متابعة تحسن التنفس."
  ],

  clinicalPearls: [
    "دواء إسعافي وليس علاجاً وقائياً.",
    "إذا احتاجه الطفل كثيراً يجب مراجعة الطبيب."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Beta-blockers.",
    "Diuretics.",
    "Digoxin."
  ],

  notes:
    "يفضل استخدام البخاخ مع Spacer للأطفال عند الإمكان.",

  alerts: [
    "راجع الطبيب إذا لم تتحسن أعراض الربو.",
    "الإفراط في الاستخدام قد يدل على سوء السيطرة على الربو."
  ] 
},
    ondansetron: {
  id: "ondansetron",

  name: "Ondansetron",

  genericName: "Ondansetron",

  brandNames: [
    "Zofran",
    "Emeset"
  ],

  category: "Antiemetic",

  therapeuticClass: "5-HT3 Receptor Antagonist",

  pharmacologicalClass: "Selective Serotonin Antagonist",

  diseases: [
    "vomiting"
  ],

  mgPerKg: 0.15,

  frequency: "كل 8 ساعات عند الحاجة",

  maxDose: 8,

  minAge: 0.5,

  maxAge: 18,

  strengths: [
    {
      name: "4 mg / 5 mL",
      concentration: 4
    }
  ],

  mechanism:
    "يثبط مستقبلات السيروتونين 5-HT3 في الجهاز الهضمي ومركز القيء.",

  indications:
    "الغثيان والقيء.",

  contraindications:
    "فرط الحساسية للدواء.",

  warnings:
    "قد يسبب إطالة QT ويستخدم بحذر عند مرضى القلب.",

  sideEffects:
    "صداع، إمساك، دوخة.",

  pregnancy:
    "يستخدم عند الضرورة الطبية.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.15 mg/kg/dose كل 8 ساعات.",

  onset:
    "30 دقيقة",

  duration:
    "8-12 ساعة",

  halfLife:
    "3-6 ساعات",

  proteinBinding:
    "70-76%",

  metabolism:
    "يستقلب في الكبد.",

  elimination:
    "عن طريق البول.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة توقف القيء.",
    "مراقبة اضطرابات نظم القلب."
  ],

  clinicalPearls: [
    "فعال جداً في السيطرة على القيء.",
    "يعطى قبل العلاج الكيمياوي أو عند القيء الشديد."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Apomorphine.",
    "QT prolonging drugs."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "يستخدم بحذر عند مرضى القلب."
  ]
},

domperidone: {
  id: "domperidone",

  name: "Domperidone",

  genericName: "Domperidone",

  brandNames: [
    "Motilium",
    "Dompy"
  ],

  category: "Antiemetic",

  therapeuticClass: "Dopamine Antagonist",

  pharmacologicalClass: "Peripheral D2 Receptor Blocker",

  diseases: [
    "vomiting"
  ],

  mgPerKg: 0.25,

  frequency: "كل 8 ساعات",

  maxDose: 10,

  minAge: 1,

  maxAge: 18,

  strengths: [
    {
      name: "5 mg / 5 mL",
      concentration: 5
    }
  ],

  mechanism:
    "يثبط مستقبلات الدوبامين D2 ويزيد حركة المعدة ويقلل القيء.",

  indications:
    "الغثيان، القيء، وتأخر إفراغ المعدة.",

  contraindications:
    "نزيف أو انسداد الجهاز الهضمي، إطالة QT.",

  warnings:
    "قد يسبب اضطرابات نظم القلب.",

  sideEffects:
    "جفاف الفم، مغص، صداع.",

  pregnancy:
    "يستخدم عند الضرورة الطبية.",

  lactation:
    "قد يزيد إفراز الحليب.",

  doseRange:
    "0.2-0.4 mg/kg/dose كل 8 ساعات.",

  onset:
    "30-60 دقيقة",

  duration:
    "6-8 ساعات",

  halfLife:
    "7 ساعات",

  proteinBinding:
    "91-93%",

  metabolism:
    "يستقلب في الكبد.",

  elimination:
    "عن طريق البول والبراز.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن القيء.",
    "مراقبة أعراض اضطراب نظم القلب."
  ],

  clinicalPearls: [
    "يفضل تناوله قبل الطعام.",
    "لا يستخدم لفترات طويلة."
  ],

  blackBox:
    "قد يزيد خطر اضطرابات نظم القلب عند الجرعات العالية أو مع الأدوية التي تطيل QT.",

  interactions: [
    "Ketoconazole.",
    "Erythromycin.",
    "QT prolonging drugs."
  ],

  notes:
    "يعطى قبل الطعام بـ 15-30 دقيقة.",

  alerts: [
    "لا يستخدم عند وجود إطالة QT.",
    "لا تتجاوز الجرعة الموصى بها."
  ]
},
    zinc_sulfate: {
  id: "zinc_sulfate",

  name: "Zinc Sulfate",

  genericName: "Zinc Sulfate",

  brandNames: [
    "Zinc Sulfate",
    "Zinc Kid",
    "Zinco"
  ],

  category: "Supplement",

  therapeuticClass: "Mineral Supplement",

  pharmacologicalClass: "Zinc Salt",

  diseases: [
    "diarrhea"
  ],

  mgPerKg: 0,

  frequency: "مرة يومياً",

  maxDose: 20,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "10 mg / 5 mL",
      concentration: 10
    },
    {
      name: "20 mg Tablet",
      concentration: 20
    }
  ],

  mechanism:
    "يعوض نقص الزنك ويحسن وظيفة بطانة الأمعاء والمناعة، مما يقلل مدة وشدة الإسهال.",

  indications:
    "الإسهال الحاد عند الأطفال.",

  contraindications:
    "فرط الحساسية للزنك.",

  warnings:
    "قد يسبب اضطراباً معدياً خفيفاً إذا أخذ على معدة فارغة.",

  sideEffects:
    "غثيان، قيء، ألم معدي، طعم معدني.",

  pregnancy:
    "آمن عند الجرعات الموصى بها.",

  lactation:
    "آمن أثناء الرضاعة.",

  doseRange:
    "أقل من 6 أشهر: 10 mg يومياً لمدة 10–14 يوماً. 6 أشهر فأكثر: 20 mg يومياً لمدة 10–14 يوماً.",

  onset:
    "تدريجي",

  duration:
    "24 ساعة",

  halfLife:
    "غير محدد",

  proteinBinding:
    "مرتبط ببروتينات البلازما.",

  metabolism:
    "لا يستقلب.",

  elimination:
    "عن طريق البراز بشكل رئيسي.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن الإسهال.",
    "التأكد من إكمال 10–14 يوماً."
  ],

  clinicalPearls: [
    "يوصى به مع ORS في جميع حالات الإسهال الحاد عند الأطفال.",
    "يقلل احتمال تكرار الإسهال خلال الأشهر التالية."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Iron.",
    "Tetracyclines.",
    "Quinolones."
  ],

  notes:
    "يفضل إعطاؤه بعد الطعام.",

  alerts: [
    "ليس بديلاً عن ORS.",
    "أكمل العلاج لمدة 10–14 يوماً."
  ]
},

ors: {
  id: "ors",

  name: "Oral Rehydration Solution",

  genericName: "ORS",

  brandNames: [
    "WHO ORS",
    "Pedialyte",
    "Dioralyte"
  ],

  category: "Rehydration",

  therapeuticClass: "Oral Electrolyte Solution",

  pharmacologicalClass: "Glucose-Electrolyte Solution",

  diseases: [
    "diarrhea",
    "vomiting"
  ],

  mgPerKg: 75,

  frequency: "حسب الحاجة",

  maxDose: 0,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "WHO Formula",
      concentration: 1
    }
  ],

  mechanism:
    "يعوض السوائل والأملاح المفقودة ويعتمد على نقل الصوديوم والجلوكوز داخل الأمعاء.",

  indications:
    "الجفاف الناتج عن الإسهال أو القيء.",

  contraindications:
    "الجفاف الشديد الذي يتطلب سوائل وريدية أو انسداد الأمعاء.",

  warnings:
    "يجب تحضيره بالماء النظيف فقط وعدم إضافة السكر.",

  sideEffects:
    "نادراً ما يسبب قيئاً إذا أعطي بسرعة.",

  pregnancy:
    "آمن.",

  lactation:
    "آمن.",

  doseRange:
    "75 mL/kg خلال أول 4 ساعات في الجفاف الخفيف إلى المتوسط، ثم يعوض الفاقد بعد كل براز أو قيء.",

  onset:
    "فوري",

  duration:
    "حسب الحاجة",

  halfLife:
    "غير مطبق",

  proteinBinding:
    "لا يوجد",

  metabolism:
    "غير مطبق",

  elimination:
    "غير مطبق",

  storage:
    "بعد التحضير يحفظ في الثلاجة ويستخدم خلال 24 ساعة.",

  monitoring: [
    "علامات الجفاف.",
    "كمية البول.",
    "الوزن."
  ],

  clinicalPearls: [
    "العلاج الأول للإسهال عند الأطفال.",
    "يستخدم مع الزنك للحصول على أفضل النتائج."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [],

  notes:
    "يعطى بكميات صغيرة ومتكررة إذا كان الطفل يتقيأ.",

  alerts: [
    "إذا ظهرت علامات الجفاف الشديد يجب مراجعة المستشفى فوراً."
  ]
},
    zinc_sulfate: {
  id: "zinc_sulfate",

  name: "Zinc Sulfate",

  genericName: "Zinc Sulfate",

  brandNames: [
    "Zinc Sulfate",
    "Zinc Kid",
    "Zinco"
  ],

  category: "Supplement",

  therapeuticClass: "Mineral Supplement",

  pharmacologicalClass: "Zinc Salt",

  diseases: [
    "diarrhea"
  ],

  mgPerKg: 0,

  frequency: "مرة يومياً",

  maxDose: 20,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "10 mg / 5 mL",
      concentration: 10
    },
    {
      name: "20 mg Tablet",
      concentration: 20
    }
  ],

  mechanism:
    "يعوض نقص الزنك ويحسن وظيفة بطانة الأمعاء والمناعة، مما يقلل مدة وشدة الإسهال.",

  indications:
    "الإسهال الحاد عند الأطفال.",

  contraindications:
    "فرط الحساسية للزنك.",

  warnings:
    "قد يسبب اضطراباً معدياً خفيفاً إذا أخذ على معدة فارغة.",

  sideEffects:
    "غثيان، قيء، ألم معدي، طعم معدني.",

  pregnancy:
    "آمن عند الجرعات الموصى بها.",

  lactation:
    "آمن أثناء الرضاعة.",

  doseRange:
    "أقل من 6 أشهر: 10 mg يومياً لمدة 10–14 يوماً. 6 أشهر فأكثر: 20 mg يومياً لمدة 10–14 يوماً.",

  onset:
    "تدريجي",

  duration:
    "24 ساعة",

  halfLife:
    "غير محدد",

  proteinBinding:
    "مرتبط ببروتينات البلازما.",

  metabolism:
    "لا يستقلب.",

  elimination:
    "عن طريق البراز بشكل رئيسي.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "متابعة تحسن الإسهال.",
    "التأكد من إكمال 10–14 يوماً."
  ],

  clinicalPearls: [
    "يوصى به مع ORS في جميع حالات الإسهال الحاد عند الأطفال.",
    "يقلل احتمال تكرار الإسهال خلال الأشهر التالية."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Iron.",
    "Tetracyclines.",
    "Quinolones."
  ],

  notes:
    "يفضل إعطاؤه بعد الطعام.",

  alerts: [
    "ليس بديلاً عن ORS.",
    "أكمل العلاج لمدة 10–14 يوماً."
  ]
},

ors: {
  id: "ors",

  name: "Oral Rehydration Solution",

  genericName: "ORS",

  brandNames: [
    "WHO ORS",
    "Pedialyte",
    "Dioralyte"
  ],

  category: "Rehydration",

  therapeuticClass: "Oral Electrolyte Solution",

  pharmacologicalClass: "Glucose-Electrolyte Solution",

  diseases: [
    "diarrhea",
    "vomiting"
  ],

  mgPerKg: 75,

  frequency: "حسب الحاجة",

  maxDose: 0,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "WHO Formula",
      concentration: 1
    }
  ],

  mechanism:
    "يعوض السوائل والأملاح المفقودة ويعتمد على نقل الصوديوم والجلوكوز داخل الأمعاء.",

  indications:
    "الجفاف الناتج عن الإسهال أو القيء.",

  contraindications:
    "الجفاف الشديد الذي يتطلب سوائل وريدية أو انسداد الأمعاء.",

  warnings:
    "يجب تحضيره بالماء النظيف فقط وعدم إضافة السكر.",

  sideEffects:
    "نادراً ما يسبب قيئاً إذا أعطي بسرعة.",

  pregnancy:
    "آمن.",

  lactation:
    "آمن.",

  doseRange:
    "75 mL/kg خلال أول 4 ساعات في الجفاف الخفيف إلى المتوسط، ثم يعوض الفاقد بعد كل براز أو قيء.",

  onset:
    "فوري",

  duration:
    "حسب الحاجة",

  halfLife:
    "غير مطبق",

  proteinBinding:
    "لا يوجد",

  metabolism:
    "غير مطبق",

  elimination:
    "غير مطبق",

  storage:
    "بعد التحضير يحفظ في الثلاجة ويستخدم خلال 24 ساعة.",

  monitoring: [
    "علامات الجفاف.",
    "كمية البول.",
    "الوزن."
  ],

  clinicalPearls: [
    "العلاج الأول للإسهال عند الأطفال.",
    "يستخدم مع الزنك للحصول على أفضل النتائج."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [],

  notes:
    "يعطى بكميات صغيرة ومتكررة إذا كان الطفل يتقيأ.",

  alerts: [
    "إذا ظهرت علامات الجفاف الشديد يجب مراجعة المستشفى فوراً."
  ]
}, 
    albendazole: {
  id: "albendazole",

  name: "Albendazole",

  genericName: "Albendazole",

  brandNames: [
    "Zentel",
    "Albenza"
  ],

  category: "Anthelmintic",

  therapeuticClass: "Broad-spectrum Anthelmintic",

  pharmacologicalClass: "Benzimidazole",

  diseases: [
    "worms"
  ],

  mgPerKg: 15,

  frequency: "حسب نوع العدوى",

  maxDose: 400,

  minAge: 1,

  maxAge: 18,

  strengths: [
    {
      name: "200 mg / 5 mL",
      concentration: 200
    },
    {
      name: "400 mg Tablet",
      concentration: 400
    }
  ],

  mechanism:
    "يثبط تكوين الأنابيب الدقيقة داخل الديدان ويمنع امتصاص الجلوكوز مما يؤدي إلى موتها.",

  indications:
    "الديدان المعوية، الإسكارس، الدودة الدبوسية، الخطافية، الشريطية وبعض الطفيليات.",

  contraindications:
    "فرط الحساسية للألبيندازول أو مشتقات البنزيميدازول.",

  warnings:
    "يستخدم بحذر في أمراض الكبد وقد يحتاج إلى مراقبة وظائف الكبد عند العلاج الطويل.",

  sideEffects:
    "ألم بطني، غثيان، صداع، دوخة، ارتفاع إنزيمات الكبد.",

  pregnancy:
    "يمنع أثناء الحمل خاصة في الثلث الأول.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "400 mg جرعة واحدة لمعظم الديدان، أو 15 mg/kg/day لبعض الإصابات الخاصة بحد أقصى 400 mg.",

  onset:
    "عدة ساعات",

  duration:
    "حسب نوع العدوى",

  halfLife:
    "8-12 ساعات",

  proteinBinding:
    "70%",

  metabolism:
    "يستقلب في الكبد إلى Albendazole Sulfoxide.",

  elimination:
    "عن طريق البول والصفراء.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "وظائف الكبد عند العلاج الطويل.",
    "متابعة زوال العدوى."
  ],

  clinicalPearls: [
    "يفضل تناوله مع وجبة دهنية لزيادة الامتصاص.",
    "قد تحتاج بعض الإصابات إلى إعادة الجرعة بعد أسبوعين."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Dexamethasone.",
    "Cimetidine."
  ],

  notes:
    "يرج جيداً قبل استخدام المعلق.",

  alerts: [
    "يمنع أثناء الحمل.",
    "قد تحتاج الأسرة كلها للعلاج في الدودة الدبوسية."
  ]
},

mebendazole: {
  id: "mebendazole",

  name: "Mebendazole",

  genericName: "Mebendazole",

  brandNames: [
    "Vermox"
  ],

  category: "Anthelmintic",

  therapeuticClass: "Broad-spectrum Anthelmintic",

  pharmacologicalClass: "Benzimidazole",

  diseases: [
    "worms"
  ],

  mgPerKg: 0,

  frequency: "حسب نوع العدوى",

  maxDose: 500,

  minAge: 2,

  maxAge: 18,

  strengths: [
    {
      name: "100 mg / 5 mL",
      concentration: 100
    },
    {
      name: "100 mg Tablet",
      concentration: 100
    }
  ],

  mechanism:
    "يثبط تكوين الأنابيب الدقيقة ويمنع امتصاص الجلوكوز داخل الديدان.",

  indications:
    "الديدان الدبوسية، الإسكارس، الخطافية، السوطية.",

  contraindications:
    "فرط الحساسية للدواء.",

  warnings:
    "لا يستخدم للأطفال أقل من سنتين إلا بتوصية الطبيب.",

  sideEffects:
    "ألم بطني، إسهال، غثيان، طفح جلدي.",

  pregnancy:
    "يمنع أثناء الحمل خاصة في الثلث الأول.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "100 mg جرعة واحدة أو مرتين يومياً حسب نوع العدوى.",

  onset:
    "عدة ساعات",

  duration:
    "حسب نوع العدوى",

  halfLife:
    "3-6 ساعات",

  proteinBinding:
    "90-95%",

  metabolism:
    "يستقلب في الكبد.",

  elimination:
    "عن طريق البراز بشكل رئيسي.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "تحسن الأعراض.",
    "اختفاء العدوى."
  ],

  clinicalPearls: [
    "قد يلزم تكرار الجرعة بعد أسبوعين في الدودة الدبوسية.",
    "الاهتمام بالنظافة الشخصية يقلل إعادة العدوى."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Metronidazole.",
    "Carbamazepine."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "يمنع أثناء الحمل.",
    "عالج المخالطين عند الحاجة."
  ]
},
    fluconazole: {
  id: "fluconazole",

  name: "Fluconazole",

  genericName: "Fluconazole",

  brandNames: [
    "Diflucan",
    "Flucoral"
  ],

  category: "Antifungal",

  therapeuticClass: "Azole Antifungal",

  pharmacologicalClass: "Triazole",

  diseases: [
    "fungal"
  ],

  mgPerKg: 6,

  frequency: "مرة يومياً",

  maxDose: 400,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "50 mg / 5 mL",
      concentration: 50
    },
    {
      name: "150 mg Capsule",
      concentration: 150
    }
  ],

  mechanism:
    "يثبط إنزيم 14-alpha-demethylase المسؤول عن تصنيع Ergosterol في غشاء الخلية الفطرية.",

  indications:
    "داء المبيضات الفموي، المبيضات المهبلية، وبعض الالتهابات الفطرية الجهازية.",

  contraindications:
    "فرط الحساسية للفلوكونازول أو مركبات الأزول.",

  warnings:
    "يستخدم بحذر عند مرضى الكبد وقد يسبب إطالة QT.",

  sideEffects:
    "غثيان، ألم بطني، إسهال، صداع، ارتفاع إنزيمات الكبد.",

  pregnancy:
    "يستخدم فقط عند الضرورة وتحت إشراف طبي.",

  lactation:
    "يفرز بكميات قليلة في الحليب ويستخدم حسب الحاجة.",

  doseRange:
    "6 mg/kg/day بعد جرعة تحميل في بعض الحالات حسب شدة العدوى.",

  onset:
    "عدة ساعات",

  duration:
    "24 ساعة",

  halfLife:
    "30 ساعة",

  proteinBinding:
    "11-12%",

  metabolism:
    "استقلاب كبدي محدود.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "وظائف الكبد عند الاستخدام الطويل.",
    "متابعة تحسن العدوى."
  ],

  clinicalPearls: [
    "يمتاز بتوافر حيوي فموي ممتاز.",
    "يستخدم كثيراً لعلاج Candida."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [
    "Warfarin.",
    "Phenytoin.",
    "Sulfonylureas."
  ],

  notes:
    "يمكن تناوله مع أو بدون الطعام.",

  alerts: [
    "راقب أعراض سمية الكبد.",
    "لا يستخدم دون تشخيص فطري واضح."
  ]
},

nystatin: {
  id: "nystatin",

  name: "Nystatin",

  genericName: "Nystatin",

  brandNames: [
    "Mycostatin",
    "Nystacort"
  ],

  category: "Antifungal",

  therapeuticClass: "Polyene Antifungal",

  pharmacologicalClass: "Polyene",

  diseases: [
    "fungal"
  ],

  mgPerKg: 0,

  frequency: "4 مرات يومياً",

  maxDose: 4000000,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "100000 units / mL",
      concentration: 100000
    }
  ],

  mechanism:
    "يرتبط بـ Ergosterol في غشاء الخلية الفطرية مسبباً تسرب محتويات الخلية وموتها.",

  indications:
    "القلاع الفموي (Oral Thrush) وعدوى Candida الموضعية.",

  contraindications:
    "فرط الحساسية للنستاتين.",

  warnings:
    "لا يستخدم لعلاج العدوى الفطرية الجهازية.",

  sideEffects:
    "تهيج الفم، غثيان، إسهال بسيط.",

  pregnancy:
    "آمن غالباً عند الاستخدام الموضعي أو الفموي.",

  lactation:
    "آمن غالباً أثناء الرضاعة.",

  doseRange:
    "100000 وحدة فموية 4 مرات يومياً حسب العمر والحالة.",

  onset:
    "عدة أيام",

  duration:
    "6-8 ساعات",

  halfLife:
    "غير محدد",

  proteinBinding:
    "لا يوجد امتصاص جهازي مهم",

  metabolism:
    "لا يمتص بشكل كبير من الجهاز الهضمي.",

  elimination:
    "يطرح مع البراز.",

  storage:
    "يحفظ حسب تعليمات المستحضر.",

  monitoring: [
    "اختفاء بقع الفطريات.",
    "تحسن الأعراض."
  ],

  clinicalPearls: [
    "يجب إبقاء المعلق في الفم لأطول فترة ممكنة.",
    "فعال جداً ضد Candida."
  ],

  blackBox:
    "لا يوجد.",

  interactions: [],

  notes:
    "لا يفضل خلطه مباشرة مع الطعام.",

  alerts: [
    "أكمل مدة العلاج حتى اختفاء العدوى."
  ]
},
    hydrocortisone: {
  id: "hydrocortisone",

  name: "Hydrocortisone",

  genericName: "Hydrocortisone",

  brandNames: [
    "Cortef",
    "Solu-Cortef"
  ],

  category: "Corticosteroid",

  therapeuticClass: "Glucocorticoid",

  pharmacologicalClass: "Steroid Hormone",

  diseases: [
    "allergy",
    "asthma"
  ],

  mgPerKg: 2,

  frequency: "حسب الحالة",

  maxDose: 100,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "10 mg / 5 mL",
      concentration: 10
    }
  ],

  mechanism:
    "يرتبط بمستقبلات الجلوكوكورتيكويد ويقلل إنتاج المواد الالتهابية مثل البروستاغلاندينات والسيتوكينات.",

  indications:
    "الحساسية الشديدة، الالتهابات، نوبات الربو، وبعض الحالات الجلدية.",

  contraindications:
    "فرط الحساسية، العدوى الفطرية الجهازية غير المعالجة.",

  warnings:
    "الاستخدام الطويل قد يسبب تثبيط المناعة وتأثيرات جهازية.",

  sideEffects:
    "زيادة الشهية، ارتفاع سكر الدم، احتباس السوائل، تغيرات المزاج.",

  pregnancy:
    "يستخدم عند الحاجة وتحت إشراف طبي.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "1–2 mg/kg/day حسب الحالة وشدة الالتهاب.",

  onset:
    "1–2 ساعة",

  duration:
    "8–12 ساعة",

  halfLife:
    "1.5–2 ساعة",

  proteinBinding:
    "90%",

  metabolism:
    "يستقلب في الكبد.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "مراقبة سكر الدم عند الاستخدام الطويل.",
    "متابعة علامات العدوى."
  ],

  clinicalPearls: [
    "لا يوقف فجأة بعد الاستخدام الطويل.",
    "يستخدم بأقل جرعة فعالة ولأقصر مدة."
  ],

  blackBox:
    "الاستخدام الطويل قد يؤدي إلى تثبيط محور HPA.",

  interactions: [
    "NSAIDs.",
    "Vaccines.",
    "Rifampin."
  ],

  notes:
    "يفضل إعطاؤه مع الطعام لتقليل تهيج المعدة.",

  alerts: [
    "لا يستخدم بدون سبب طبي واضح.",
    "راقب علامات العدوى."
  ]
},

dexamethasone: {
  id: "dexamethasone",

  name: "Dexamethasone",

  genericName: "Dexamethasone",

  brandNames: [
    "Decadron",
    "Dexasone"
  ],

  category: "Corticosteroid",

  therapeuticClass: "Glucocorticoid",

  pharmacologicalClass: "Synthetic Steroid",

  diseases: [
    "asthma",
    "allergy"
  ],

  mgPerKg: 0.6,

  frequency: "جرعة واحدة أو حسب الحالة",

  maxDose: 16,

  minAge: 0,

  maxAge: 18,

  strengths: [
    {
      name: "0.5 mg / 5 mL",
      concentration: 0.5
    }
  ],

  mechanism:
    "يقلل الالتهاب عبر تثبيط تصنيع السيتوكينات والمواد الالتهابية.",

  indications:
    "نوبات الربو، الحساسية الشديدة، الالتهابات الشديدة.",

  contraindications:
    "فرط الحساسية، العدوى الفطرية الجهازية.",

  warnings:
    "قد يسبب زيادة سكر الدم وتثبيط المناعة.",

  sideEffects:
    "زيادة الشهية، أرق، تغيرات المزاج، ارتفاع ضغط الدم.",

  pregnancy:
    "يستخدم عند الضرورة الطبية.",

  lactation:
    "يستخدم بحذر أثناء الرضاعة.",

  doseRange:
    "0.15–0.6 mg/kg حسب الحالة.",

  onset:
    "1–2 ساعة",

  duration:
    "36–72 ساعة",

  halfLife:
    "36–54 ساعة",

  proteinBinding:
    "77%",

  metabolism:
    "يستقلب في الكبد بواسطة CYP3A4.",

  elimination:
    "عن طريق الكلى.",

  storage:
    "يحفظ بدرجة حرارة الغرفة.",

  monitoring: [
    "مراقبة سكر الدم.",
    "متابعة التحسن السريري."
  ],

  clinicalPearls: [
    "يمتاز بمدة تأثير طويلة.",
    "يستخدم كثيراً في نوبات الربو الحادة."
  ],

  blackBox:
    "الاستخدام الطويل قد يسبب تأثيرات جهازية خطيرة.",

  interactions: [
    "NSAIDs.",
    "Rifampin.",
    "Antidiabetic drugs."
  ],

  notes:
    "يفضل إعطاؤه صباحاً عند الاستخدام الطويل.",

  alerts: [
    "لا يستخدم لفترات طويلة بدون متابعة.",
    "تجنب التوقف المفاجئ بعد العلاج المطول."
  ]
},
    };
