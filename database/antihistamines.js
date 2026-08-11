// ======================================================
// DoseCare AI v7
// Antihistamines Database
// Pediatric Oral Liquids
// ======================================================

const antihistamineDrugs = {

    // ==================================================
    // CETIRIZINE
    // ==================================================

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

        dosageForm: "Oral Solution / Syrup",

        strengths: [
            {
                name: "5 mg / 5 mL",
                concentration: 1,
                volume: 5,
                unit: "mg/mL"
            },
            {
                name: "10 mg / 5 mL",
                concentration: 2,
                volume: 5,
                unit: "mg/mL"
            }
        ],

        dose: {
            mgPerKg: 0.25,
            frequency: "Once daily",
            maxDoseMg: 10
        },

        age: {
            minAge: 0.5,
            maxAge: 18
        },

        mechanism:
            "يثبط مستقبلات الهيستامين H1 الطرفية بشكل انتقائي، مما يقلل أعراض الحساسية مثل العطاس وسيلان الأنف والحكة والشرى.",

        indications:
            "التهاب الأنف التحسسي، العطاس، سيلان الأنف، حكة العينين والشرى.",

        contraindications:
            "فرط الحساسية للسيتريزين أو Hydroxyzine أو مشتقات Piperazine.",

        warnings:
            "قد يسبب النعاس لدى بعض الأطفال. يستخدم بحذر عند مرضى القصور الكلوي.",

        sideEffects:
            "نعاس، تعب، صداع، جفاف الفم، وأحياناً اضطرابات هضمية.",

        pregnancy:
            "يستخدم أثناء الحمل عند الحاجة الطبية وبعد تقييم الفائدة والمخاطر.",

        lactation:
            "يمكن استخدامه عند الحاجة الطبية، مع مراعاة انتقال كميات صغيرة إلى حليب الأم.",

        doseRange:
            "للأطفال حسب العمر والحالة؛ الجرعات الشائعة تكون مرة يومياً، ولا تتجاوز الجرعة القصوى الموصى بها.",

        onset:
            "30–60 دقيقة",

        duration:
            "حوالي 24 ساعة",

        halfLife:
            "حوالي 8–10 ساعات عند الأطفال، وقد تختلف حسب العمر.",

        proteinBinding:
            "حوالي 93%",

        metabolism:
            "استقلاب كبدي محدود.",

        elimination:
            "يطرح بشكل رئيسي عن طريق الكلى.",

        storage:
            "يحفظ بدرجة حرارة الغرفة وبعيداً عن الحرارة والرطوبة، حسب تعليمات المستحضر.",

        monitoring: [
            "متابعة تحسن أعراض الحساسية.",
            "مراقبة النعاس.",
            "مراقبة وظائف الكلى عند المرضى المصابين بقصور كلوي."
        ],

        clinicalPearls: [
            "عادةً يسبب نعاساً أقل من مضادات الهيستامين من الجيل الأول.",
            "يعطى عادةً مرة واحدة يومياً.",
            "رج العبوة جيداً إذا كان المستحضر معلقاً."
        ],

        blackBox:
            "لا يوجد Black Box Warning خاص بالسيتريزين.",

        interactions: [
            "Alcohol: قد يزيد التأثير المثبط للجهاز العصبي المركزي.",
            "CNS depressants: قد تزيد النعاس."
        ],

        notes:
            "يمكن إعطاؤه مع أو بدون الطعام. استخدم أداة قياس دقيقة.",

        alerts: [
            "راقب النعاس خصوصاً عند بدء العلاج.",
            "لا تتجاوز الجرعة اليومية الموصى بها."
        ]
    },


    // ==================================================
    // LORATADINE
    // ==================================================

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

        dosageForm: "Syrup / Oral Solution",

        strengths: [
            {
                name: "5 mg / 5 mL",
                concentration: 1,
                volume: 5,
                unit: "mg/mL"
            }
        ],

        dose: {
            mgPerKg: 0.2,
            frequency: "Once daily",
            maxDoseMg: 10
        },

        age: {
            minAge: 2,
            maxAge: 18
        },

        mechanism:
            "يثبط مستقبلات الهيستامين H1 الطرفية بشكل انتقائي، مما يقلل أعراض الحساسية دون تأثير مهدئ واضح عند معظم المرضى.",

        indications:
            "التهاب الأنف التحسسي، العطاس، سيلان الأنف، الحكة والشرى.",

        contraindications:
            "فرط الحساسية للوراتادين أو لأي من مكونات المستحضر.",

        warnings:
            "يستخدم بحذر عند مرضى القصور الكبدي أو الكلوي، وقد تحتاج الجرعة إلى تعديل.",

        sideEffects:
            "صداع، تعب، جفاف الفم، ونعاس خفيف لدى بعض المرضى.",

        pregnancy:
            "يستخدم أثناء الحمل عند الحاجة الطبية وبعد تقييم الفائدة والمخاطر.",

        lactation:
            "يستخدم عند الحاجة الطبية، مع مراعاة انتقال مستقلبه الفعال إلى الحليب بكميات محدودة.",

        doseRange:
            "للأطفال بعمر سنتين فأكثر، الجرعة تعتمد على العمر والحالة، وعادةً تعطى مرة واحدة يومياً بحد أقصى 10 mg/day.",

        onset:
            "1–3 ساعات",

        duration:
            "24 ساعة",

        halfLife:
            "حوالي 8 ساعات للوراتادين وقرابة 28 ساعة للمستقلب الفعال.",

        proteinBinding:
            "حوالي 97%",

        metabolism:
            "يستقلب في الكبد بشكل رئيسي بواسطة CYP3A4 وCYP2D6 إلى مستقبله الفعال Desloratadine.",

        elimination:
            "يطرح عن طريق البول والبراز.",

        storage:
            "يحفظ بدرجة حرارة الغرفة وبعيداً عن الحرارة والرطوبة.",

        monitoring: [
            "متابعة تحسن أعراض الحساسية.",
            "مراقبة النعاس.",
            "مراقبة المرضى المصابين بقصور كبدي أو كلوي."
        ],

        clinicalPearls: [
            "عادةً لا يسبب النعاس بشكل واضح.",
            "يعطى مرة واحدة يومياً.",
            "يمكن إعطاؤه مع أو بدون الطعام."
        ],

        blackBox:
            "لا يوجد Black Box Warning خاص بالوراتادين.",

        interactions: [
            "Ketoconazole: قد يزيد تركيز Loratadine.",
            "Erythromycin: قد يزيد تركيز Loratadine.",
            "Cimetidine: قد يزيد التعرض للوراتادين."
        ],

        notes:
            "استخدم أداة قياس دقيقة عند إعطاء الشراب للأطفال.",

        alerts: [
            "لا تتجاوز الجرعة اليومية القصوى.",
            "يجب الانتباه إلى العمر قبل إعطاء الدواء."
        ]
    },


    // ==================================================
    // CHLORPHENIRAMINE
    // ==================================================

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

        dosageForm: "Syrup",

        strengths: [
            {
                name: "2 mg / 5 mL",
                concentration: 0.4,
                volume: 5,
                unit: "mg/mL"
            }
        ],

        dose: {
            mgPerKg: 0.1,
            frequency: "Every 6–8 hours",
            maxDoseMg: 4
        },

        age: {
            minAge: 2,
            maxAge: 18
        },

        mechanism:
            "يثبط مستقبلات الهيستامين H1، مما يقلل تأثير الهيستامين على الأوعية والأنسجة ويخفف أعراض الحساسية.",

        indications:
            "التهاب الأنف التحسسي، العطاس، سيلان الأنف، الحكة والشرى.",

        contraindications:
            "فرط الحساسية للدواء، وبعض الحالات مثل الزرق مغلق الزاوية واحتباس البول حسب الحالة الطبية.",

        warnings:
            "قد يسبب النعاس والدوخة. يستخدم بحذر مع المهدئات ومثبطات الجهاز العصبي المركزي.",

        sideEffects:
            "نعاس، دوخة، جفاف الفم، تشوش الرؤية، وإمساك.",

        pregnancy:
            "يستخدم عند الضرورة الطبية وبعد تقييم الفائدة والمخاطر.",

        lactation:
            "يستخدم بحذر أثناء الرضاعة.",

        doseRange:
            "تعتمد الجرعة على عمر الطفل، وتستخدم جرعات مقسمة كل 6–8 ساعات عند الحاجة وفق التوصيات.",

        onset:
            "30 دقيقة تقريباً",

        duration:
            "4–6 ساعات",

        halfLife:
            "تختلف حسب العمر وقد تكون أطول عند الأطفال.",

        proteinBinding:
            "حوالي 70%",

        metabolism:
            "يستقلب في الكبد.",

        elimination:
            "يطرح بشكل رئيسي عن طريق الكلى.",

        storage:
            "يحفظ بدرجة حرارة الغرفة وبعيداً عن متناول الأطفال.",

        monitoring: [
            "مراقبة النعاس.",
            "متابعة تحسن أعراض الحساسية.",
            "مراقبة التأثيرات المضادة للكولين عند الاستخدام."
        ],

        clinicalPearls: [
            "يسبب النعاس أكثر من مضادات الهيستامين من الجيل الثاني.",
            "قد يكون مناسباً لبعض الحالات التي تتطلب تأثيراً مهدئاً، لكن يجب الحذر عند الأطفال.",
            "تجنب الجمع غير الضروري مع أدوية مهدئة أخرى."
        ],

        blackBox:
            "لا يوجد Black Box Warning خاص بالكلورفينيرامين.",

        interactions: [
            "Alcohol: يزيد التأثير المهدئ.",
            "Sedatives: قد تزيد النعاس.",
            "MAO inhibitors: قد تزيد التأثيرات المضادة للكولين والمهدئة."
        ],

        notes:
            "استخدم أداة قياس دقيقة، ولا تتجاوز الجرعة الموصى بها.",

        alerts: [
            "قد يسبب نعاساً واضحاً.",
            "تجنب الجمع مع المهدئات دون توجيه طبي.",
            "لا تتجاوز الجرعة اليومية."
        ]
    }

};


// ======================================================
// Register Antihistamines
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(antihistamineDrugs);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}


// ======================================================
// Debug
// ======================================================

console.log(
    "Antihistamines Database Loaded:",
    Object.keys(antihistamineDrugs)
);
