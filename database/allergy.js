// ======================================================
// DoseCare AI v7
// Allergy Drugs Database
// Pediatric Allergy Support
// ======================================================

const allergyDrugs = {

    // ==================================================
    // EPINEPHRINE
    // ==================================================

    epinephrine_allergy: {

        id: "epinephrine_allergy",

        name: "Epinephrine",

        genericName: "Epinephrine (Adrenaline)",

        brandNames: [
            "Adrenaline",
            "Epinephrine",
            "EpiPen"
        ],

        category: "Allergy",

        therapeuticClass: "Adrenergic Agonist",

        pharmacologicalClass:
            "Alpha & Beta Adrenergic Agonist",

        diseases: [
            "anaphylaxis",
            "severe_allergic_reaction"
        ],

        dosageForm: "Auto-injector / Injection",

        routes: [
            "IM"
        ],

        strengths: [
            {
                name: "0.15 mg Auto-injector",
                concentration: 0.15,
                unit: "mg"
            },
            {
                name: "0.3 mg Auto-injector",
                concentration: 0.3,
                unit: "mg"
            }
        ],

        dose: {
            type: "weight_based",

            mgPerKg: 0.01,

            frequency:
                "يمكن تكراره حسب الاستجابة والبروتوكول الطارئ",

            maxDoseMg: 0.5
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "العلاج الأول للتأق والتفاعل التحسسي الشديد المهدد للحياة.",

        contraindications:
            "لا توجد موانع مطلقة لاستخدامه في Anaphylaxis المهدد للحياة.",

        warnings:
            "يجب إعطاؤه IM في الجزء الوحشي من الفخذ بأسرع وقت ممكن عند الاشتباه بالتأق.",

        sideEffects:
            "خفقان، رجفة، قلق، صداع، شحوب، ارتفاع ضغط الدم واضطرابات نظم القلب.",

        notes:
            "Epinephrine هو العلاج الأول في Anaphylaxis ولا يجب تأخيره بسبب إعطاء مضادات الهيستامين أو الكورتيكوستيرويدات.",

        monitoring: [
            "Airway.",
            "Breathing.",
            "Circulation.",
            "Heart rate.",
            "Blood pressure.",
            "Response to treatment."
        ],

        clinicalPearls: [
            "لا تنتظر ظهور جميع أعراض التأق قبل إعطاء Epinephrine.",
            "يعطى IM في الفخذ الوحشي.",
            "قد تحتاج الجرعة إلى التكرار حسب الاستجابة والبروتوكول."
        ],

        alerts: [
            "Anaphylaxis = Epinephrine first.",
            "لا تستبدله بمضاد الهيستامين.",
            "تأكد من الجرعة والتركيز قبل الاستخدام."
        ]
    },


    // ==================================================
    // HYDROCORTISONE
    // ==================================================

    hydrocortisone_allergy: {

        id: "hydrocortisone_allergy",

        name: "Hydrocortisone",

        genericName: "Hydrocortisone",

        brandNames: [
            "Solu-Cortef"
        ],

        category: "Allergy",

        therapeuticClass: "Glucocorticoid",

        pharmacologicalClass:
            "Corticosteroid",

        diseases: [
            "severe_allergy",
            "anaphylaxis",
            "allergic_inflammation"
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

        dose: {
            type: "protocol_based",

            frequency:
                "حسب الحالة والبروتوكول"
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "بعض الحالات التحسسية الشديدة أو الالتهابية حسب البروتوكول الطبي.",

        contraindications:
            "لا توجد موانع مطلقة في بعض الحالات الإسعافية المهددة للحياة، ويعتمد الاستخدام على الحالة.",

        warnings:
            "ليس بديلاً عن Epinephrine في Anaphylaxis.",

        sideEffects:
            "ارتفاع سكر الدم، ارتفاع ضغط الدم، اضطرابات المزاج واضطرابات الشوارد عند الاستخدام المناسب.",

        notes:
            "لا يستخدم بشكل روتيني كعلاج أول للتأق.",

        monitoring: [
            "Blood Glucose.",
            "Blood Pressure.",
            "Clinical response."
        ],

        clinicalPearls: [
            "Epinephrine يبقى العلاج الأول للتأق.",
            "الكورتيكوستيرويدات لا تعالج الانسداد الهوائي الحاد بسرعة."
        ],

        alerts: [
            "لا تستبدل Epinephrine بـ Hydrocortisone في Anaphylaxis."
        ]
    },


    // ==================================================
    // PREDNISOLONE
    // ==================================================

    prednisolone_allergy: {

        id: "prednisolone_allergy",

        name: "Prednisolone",

        genericName: "Prednisolone",

        brandNames: [
            "Predsol",
            "Orapred"
        ],

        category: "Allergy",

        therapeuticClass: "Glucocorticoid",

        pharmacologicalClass:
            "Systemic Corticosteroid",

        diseases: [
            "allergic_inflammation",
            "severe_allergy",
            "urticaria"
        ],

        dosageForm: "Oral Solution / Syrup",

        routes: [
            "Oral"
        ],

        strengths: [
            {
                name: "15 mg / 5 mL",
                concentration: 15,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {
            type: "condition_based",

            frequency:
                "حسب الحالة والبروتوكول"
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "بعض الحالات الالتهابية والتحسسية التي تتطلب Corticosteroid systemic therapy.",

        contraindications:
            "فرط الحساسية للدواء وبعض الالتهابات الجهازية غير المعالجة حسب الحالة.",

        warnings:
            "لا يستخدم لفترة طويلة دون إشراف طبي. لا يعتبر علاجاً أولياً للتأق.",

        sideEffects:
            "ارتفاع سكر الدم، اضطرابات المعدة، تغيرات المزاج وزيادة خطر العدوى عند الاستخدام المطول.",

        pregnancy:
            "يستخدم عند الحاجة الطبية وتحت إشراف الطبيب.",

        lactation:
            "يمكن استخدامه عند الحاجة الطبية وبحسب الجرعة.",

        doseRange:
            "تختلف الجرعة بشكل كبير حسب المرض وشدته؛ تعتمد على البروتوكول الطبي.",

        onset:
            "يختلف حسب الحالة.",

        duration:
            "حسب مدة العلاج.",

        monitoring: [
            "Clinical response.",
            "Blood Glucose عند الحاجة.",
            "علامات العدوى عند الاستخدام المطول."
        ],

        clinicalPearls: [
            "استخدم أقل جرعة فعالة ولأقصر مدة مناسبة عند العلاج الجهازي.",
            "لا يستبدل Epinephrine في Anaphylaxis."
        ],

        alerts: [
            "لا تستخدمه كبديل عن Epinephrine في التأق.",
            "لا توقف العلاج المطول فجأة دون توجيه طبي."
        ]
    },


    // ==================================================
    // CALAMINE
    // ==================================================

    calamine: {

        id: "calamine",

        name: "Calamine",

        genericName: "Calamine Lotion",

        brandNames: [
            "Calamine Lotion"
        ],

        category: "Allergy",

        therapeuticClass:
            "Topical Skin Protectant / Antipruritic",

        pharmacologicalClass:
            "Topical Protective Agent",

        diseases: [
            "itching",
            "rash",
            "allergic_skin_reaction"
        ],

        dosageForm: "Lotion",

        routes: [
            "Topical"
        ],

        strengths: [
            {
                name: "Calamine Lotion",
                concentration: null,
                unit: "topical"
            }
        ],

        dose: {
            type: "topical",

            frequency:
                "يستخدم موضعياً حسب الحاجة وتعليمات المنتج"
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "تخفيف الحكة والتهيج الجلدي البسيط في بعض الطفوح والحالات الجلدية.",

        contraindications:
            "فرط الحساسية للمكونات.",

        warnings:
            "للاستخدام الخارجي فقط. تجنب العينين والأغشية المخاطية.",

        sideEffects:
            "تهيج أو جفاف الجلد أو تفاعل تحسسي موضعي.",

        notes:
            "لا يستخدم على الجلد المتضرر بشدة أو الجروح المفتوحة إلا حسب توجيه طبي.",

        monitoring: [
            "تحسن الحكة والطفح.",
            "ظهور أي تهيج موضعي."
        ],

        alerts: [
            "للاستخدام الخارجي فقط.",
            "تجنب ملامسة العينين."
        ]
    },


    // ==================================================
    // HYDROCORTISONE TOPICAL
    // ==================================================

    hydrocortisone_topical: {

        id: "hydrocortisone_topical",

        name: "Hydrocortisone Topical",

        genericName: "Hydrocortisone",

        brandNames: [
            "Hydrocortisone Cream"
        ],

        category: "Allergy",

        therapeuticClass:
            "Topical Corticosteroid",

        pharmacologicalClass:
            "Low-Potency Corticosteroid",

        diseases: [
            "eczema",
            "allergic_dermatitis",
            "itching",
            "skin_inflammation"
        ],

        dosageForm: "Cream / Ointment",

        routes: [
            "Topical"
        ],

        strengths: [
            {
                name: "1% Cream",
                concentration: 1,
                unit: "%"
            }
        ],

        dose: {
            type: "topical",

            frequency:
                "حسب المنطقة والحالة وتعليمات الطبيب أو المنتج"
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "تخفيف الالتهاب والحكة في بعض الأمراض الجلدية الالتهابية والتحسسية.",

        contraindications:
            "بعض الالتهابات الجلدية غير المعالجة وفرط الحساسية للمستحضر.",

        warnings:
            "يستخدم بحذر عند الأطفال، خصوصاً على الوجه أو مناطق الجلد الرقيقة أو عند الاستخدام المطول.",

        sideEffects:
            "ترقق الجلد، تغيرات جلدية موضعية، تهيج وقد تحدث آثار جهازية عند الاستخدام المفرط.",

        notes:
            "يجب استخدام أقل كمية فعالة ولأقصر مدة مناسبة.",

        monitoring: [
            "تحسن الطفح والحكة.",
            "ظهور ترقق أو تغيرات في الجلد.",
            "علامات العدوى الجلدية."
        ],

        clinicalPearls: [
            "تجنب الاستخدام المطول دون إشراف.",
            "الحذر عند استخدامه على الوجه أو مناطق الجلد الرقيقة."
        ],

        alerts: [
            "للاستخدام الخارجي فقط.",
            "لا يستخدم على العدوى الجلدية غير المعالجة دون تقييم طبي."
        ]
    }

};


// ======================================================
// Register Allergy Drugs
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(allergyDrugs);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}


// ======================================================
// Debug
// ======================================================

console.log(
    "Allergy Database Loaded:",
    Object.keys(allergyDrugs)
);
