// ======================================================
// DoseCare AI v7
// Pain & Fever Database
// Pediatric Oral Liquids
// ======================================================

const painFeverDrugs = {

    // ==================================================
    // PARACETAMOL
    // ==================================================

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

        dosageForm: "Syrup / Suspension",

        strengths: [
            {
                name: "120 mg / 5 mL",
                concentration: 120,
                volume: 5,
                unit: "mg/5mL"
            },
            {
                name: "250 mg / 5 mL",
                concentration: 250,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {
            mgPerKg: 15,
            frequency: "Every 4–6 hours",
            maxDoseMg: 1000
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        mechanism:
            "يثبط تصنيع البروستاغلاندينات داخل الجهاز العصبي المركزي، مما يقلل الألم والحمى.",

        indications:
            "الحمى والألم الخفيف إلى المتوسط.",

        contraindications:
            "فرط الحساسية للباراسيتامول أو القصور الكبدي الشديد.",

        warnings:
            "تجنب تجاوز الجرعة الموصى بها، وانتبه لعدم إعطاء أكثر من مستحضر يحتوي على Paracetamol في الوقت نفسه.",

        sideEffects:
            "غثيان، قيء، طفح جلدي وتفاعلات تحسسية. الجرعات الزائدة قد تسبب سمية كبدية.",

        pregnancy:
            "يستخدم عند الحاجة الطبية وبالجرعات الموصى بها.",

        lactation:
            "يعد متوافقاً مع الرضاعة عند استخدامه بالجرعات الموصى بها.",

        doseRange:
            "10–15 mg/kg/dose كل 4–6 ساعات حسب الحاجة.",

        onset:
            "30–60 دقيقة",

        duration:
            "4–6 ساعات",

        halfLife:
            "2–3 ساعات",

        proteinBinding:
            "10–25%",

        metabolism:
            "يستقلب بشكل رئيسي في الكبد بواسطة Glucuronidation وSulfation.",

        elimination:
            "يطرح بشكل رئيسي عن طريق الكلى على شكل مستقلبات.",

        storage:
            "يحفظ حسب تعليمات الشركة المصنعة وبعيداً عن الحرارة والرطوبة.",

        monitoring: [
            "متابعة تحسن الحمى أو الألم.",
            "التأكد من عدم تجاوز الجرعة اليومية.",
            "مراقبة وظائف الكبد عند الاستخدام المطول أو عند وجود عوامل خطورة."
        ],

        clinicalPearls: [
            "من الخيارات الشائعة لعلاج الحمى والألم عند الأطفال.",
            "يمكن إعطاؤه مع أو بدون الطعام.",
            "استخدم أداة قياس مدرجة بدقة."
        ],

        blackBox:
            "الجرعة الزائدة قد تسبب أذية كبدية شديدة.",

        interactions: [
            "Warfarin: قد يزداد تأثيره مع الاستخدام المنتظم المطول.",
            "Alcohol: قد يزيد خطر السمية الكبدية."
        ],

        notes:
            "رج العبوة جيداً إذا كان المستحضر Suspension، واستخدم أداة قياس دقيقة.",

        alerts: [
            "لا تجمعه مع دواء آخر يحتوي على Paracetamol.",
            "لا تتجاوز الجرعة الموصى بها.",
            "راجع الطبيب إذا استمرت الحمى أو ساءت حالة الطفل."
        ]
    },


    // ==================================================
    // IBUPROFEN
    // ==================================================

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

        dosageForm: "Syrup / Suspension",

        strengths: [
            {
                name: "100 mg / 5 mL",
                concentration: 100,
                volume: 5,
                unit: "mg/5mL"
            },
            {
                name: "200 mg / 5 mL",
                concentration: 200,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {
            mgPerKg: 10,
            frequency: "Every 6–8 hours",
            maxDoseMg: 400
        },

        age: {
            minAge: 0.5,
            maxAge: 18
        },

        mechanism:
            "يثبط إنزيمي COX-1 وCOX-2 مما يقلل تصنيع البروستاغلاندينات ويخفف الألم والحمى والالتهاب.",

        indications:
            "الحمى والألم الخفيف إلى المتوسط وبعض الحالات الالتهابية.",

        contraindications:
            "فرط الحساسية للإيبوبروفين أو مضادات الالتهاب غير الستيرويدية، النزيف أو القرحة الهضمية النشطة، والقصور الكلوي الشديد.",

        warnings:
            "يستخدم بحذر عند الأطفال المصابين بالجفاف أو أمراض الكلى أو تاريخ من مشاكل الجهاز الهضمي.",

        sideEffects:
            "ألم أو اضطراب المعدة، غثيان، قيء، حرقة، طفح جلدي، ونادراً نزيف هضمي.",

        pregnancy:
            "لا يستخدم خلال الثلث الأخير من الحمل.",

        lactation:
            "يعد متوافقاً مع الرضاعة عند استخدامه بالجرعات الموصى بها.",

        doseRange:
            "5–10 mg/kg/dose كل 6–8 ساعات حسب الحاجة.",

        onset:
            "30–60 دقيقة",

        duration:
            "6–8 ساعات",

        halfLife:
            "حوالي ساعتين",

        proteinBinding:
            "حوالي 99%",

        metabolism:
            "يستقلب في الكبد بشكل رئيسي.",

        elimination:
            "يطرح بشكل رئيسي عن طريق الكلى على شكل مستقلبات.",

        storage:
            "يحفظ حسب تعليمات الشركة المصنعة وبعيداً عن الحرارة والرطوبة.",

        monitoring: [
            "متابعة تحسن الحمى أو الألم.",
            "مراقبة علامات النزيف أو اضطرابات المعدة.",
            "مراقبة وظائف الكلى عند الاستخدام المطول أو عند وجود عوامل خطورة."
        ],

        clinicalPearls: [
            "يفضل إعطاؤه مع الطعام إذا سبب اضطراباً بالمعدة.",
            "تجنب استخدامه عند وجود جفاف واضح.",
            "لا يستخدم للأطفال دون 6 أشهر إلا بتوجيه طبي."
        ],

        blackBox:
            "قد تزيد مضادات الالتهاب غير الستيرويدية من خطر النزيف الهضمي والمضاعفات القلبية الوعائية، خصوصاً مع الاستخدام المطول.",

        interactions: [
            "Warfarin: قد يزيد خطر النزيف.",
            "ACE inhibitors: قد تقل فعاليتها وقد يزداد خطر أذية الكلى.",
            "Aspirin: قد يتداخل مع تأثيره المضاد للصفيحات."
        ],

        notes:
            "رج العبوة جيداً إذا كان المستحضر Suspension، واستخدم أداة قياس دقيقة.",

        alerts: [
            "لا يستخدم عند وجود جفاف شديد.",
            "لا يستخدم للأطفال دون 6 أشهر إلا بتوجيه طبي.",
            "أوقف الدواء واطلب المشورة الطبية عند ظهور علامات حساسية أو نزيف."
        ]
    }

};


// ======================================================
// Register Pain & Fever Drugs
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(painFeverDrugs);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}


// ======================================================
// Debug
// ======================================================

console.log(
    "Pain & Fever Database Loaded:",
    Object.keys(painFeverDrugs)
);
