// ======================================================
// DoseCare AI v7
// Antibiotics Database
// Pediatric Oral Liquids
// ======================================================

const antibioticDrugs = {

    // ==================================================
    // AMOXICILLIN
    // ==================================================

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

        dosageForm: "Oral Suspension",

        strengths: [
            {
                name: "125 mg / 5 mL",
                concentration: 125,
                volume: 5,
                unit: "mg/5mL"
            },
            {
                name: "250 mg / 5 mL",
                concentration: 250,
                volume: 5,
                unit: "mg/5mL"
            },
            {
                name: "400 mg / 5 mL",
                concentration: 400,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {
            mgPerKg: 25,
            frequency: "Every 8–12 hours",
            maxDoseMg: 4000
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        mechanism:
            "يثبط تصنيع جدار الخلية البكتيرية من خلال الارتباط ببروتينات ارتباط البنسلين (PBPs)، مما يمنع تكوين الروابط المتصالبة في الببتيدوغليكان ويؤدي إلى تحلل الخلية البكتيرية.",

        indications:
            "التهاب الأذن الوسطى، التهاب البلعوم واللوزتين، التهاب الجيوب الأنفية، ذات الرئة وبعض الالتهابات البكتيرية الأخرى الحساسة للأموكسيسيلين.",

        contraindications:
            "فرط الحساسية المعروف للأموكسيسيلين أو البنسلينات أو وجود تفاعل تحسسي شديد سابق مع مضادات البيتا-لاكتام.",

        warnings:
            "يستخدم بحذر عند وجود قصور كلوي أو تاريخ من الحساسية تجاه البنسلينات. يجب استخدامه فقط عند الاشتباه أو إثبات وجود عدوى بكتيرية.",

        sideEffects:
            "إسهال، غثيان، قيء، ألم بطني، طفح جلدي وتفاعلات تحسسية.",

        pregnancy:
            "يعد من المضادات الحيوية التي يمكن استخدامها أثناء الحمل عند وجود حاجة طبية.",

        lactation:
            "يمكن استخدامه أثناء الرضاعة عند الحاجة الطبية.",

        doseRange:
            "عادةً 20–45 mg/kg/day مقسمة على جرعتين أو ثلاث حسب نوع وشدة العدوى. بعض العدوى مثل التهاب الأذن الوسطى قد تحتاج جرعات أعلى حسب الإرشادات.",

        onset:
            "1–2 ساعة",

        duration:
            "حسب نوع العدوى",

        halfLife:
            "حوالي 1 ساعة",

        proteinBinding:
            "حوالي 17–20%",

        metabolism:
            "استقلاب محدود.",

        elimination:
            "يطرح بشكل رئيسي عن طريق الكلى.",

        storage:
            "يحفظ المعلق بعد التحضير حسب تعليمات الشركة المصنعة. يجب الرج جيداً قبل كل جرعة.",

        monitoring: [
            "متابعة الاستجابة للعلاج.",
            "مراقبة ظهور الحساسية.",
            "مراقبة وظائف الكلى عند وجود قصور كلوي."
        ],

        clinicalPearls: [
            "رج العبوة جيداً قبل كل جرعة.",
            "إكمال مدة العلاج الموصوفة حتى لو تحسنت الأعراض.",
            "لا يستخدم لعلاج العدوى الفيروسية."
        ],

        blackBox:
            "لا يوجد Black Box Warning خاص بالأموكسيسيلين.",

        interactions: [
            "Warfarin: قد يحدث تغير في INR.",
            "Allopurinol: قد يزيد احتمال ظهور الطفح الجلدي."
        ],

        notes:
            "يمكن إعطاؤه مع أو بدون الطعام. استخدم أداة قياس دقيقة للمعلق.",

        alerts: [
            "أوقف الدواء واطلب المساعدة الطبية عند حدوث تفاعل تحسسي شديد.",
            "لا تستخدم المضاد الحيوي للعدوى الفيروسية.",
            "أكمل الكورس حسب وصف الطبيب."
        ]
    },


    // ==================================================
    // CO-AMOXICLAV
    // ==================================================

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

        therapeuticClass:
            "Penicillin + Beta-lactamase Inhibitor",

        pharmacologicalClass:
            "Aminopenicillin Combination",

        diseases: [
            "otitis",
            "sinusitis",
            "pneumonia",
            "uti",
            "skin"
        ],

        dosageForm: "Oral Suspension",

        strengths: [
            {
                name: "228.5 mg / 5 mL",
                concentration: 200,
                volume: 5,
                unit: "mg/5mL",
                activeIngredient:
                    "Amoxicillin 200 mg + Clavulanic Acid 28.5 mg"
            },
            {
                name: "457 mg / 5 mL",
                concentration: 400,
                volume: 5,
                unit: "mg/5mL",
                activeIngredient:
                    "Amoxicillin 400 mg + Clavulanic Acid 57 mg"
            }
        ],

        dose: {
            mgPerKg: 22.5,
            frequency: "Every 12 hours",
            maxDoseMg: 875
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        mechanism:
            "الأموكسيسيلين يثبط تصنيع جدار الخلية البكتيرية، بينما يقوم Clavulanic Acid بتثبيط إنزيمات Beta-lactamase التي تنتجها بعض البكتيريا، مما يحمي الأموكسيسيلين من التحلل ويزيد فعاليته ضد البكتيريا المقاومة له وحده.",

        indications:
            "التهاب الأذن الوسطى، التهاب الجيوب الأنفية، بعض التهابات الجهاز التنفسي، التهابات المسالك البولية وبعض التهابات الجلد والأنسجة الرخوة.",

        contraindications:
            "فرط الحساسية للبنسلينات أو مكونات المستحضر، أو وجود تاريخ من اليرقان أو القصور الكبدي المرتبط سابقاً باستخدام Amoxicillin/Clavulanate.",

        warnings:
            "يستخدم بحذر عند مرضى الكبد أو الكلى. يجب اختيار الجرعة اعتماداً على محتوى Amoxicillin وليس مجموع مكونات المستحضر.",

        sideEffects:
            "إسهال، غثيان، قيء، ألم بطني، طفح جلدي، وداء المبيضات. قد تحدث اضطرابات كبدية نادراً.",

        pregnancy:
            "يمكن استخدامه عند وجود حاجة طبية وتحت إشراف الطبيب.",

        lactation:
            "يمكن استخدامه أثناء الرضاعة عند الحاجة الطبية.",

        doseRange:
            "تعتمد الجرعة على كمية Amoxicillin. غالباً 25–45 mg/kg/day مقسمة كل 12 ساعة حسب نوع وشدة العدوى.",

        onset:
            "1–2 ساعة",

        duration:
            "حوالي 12 ساعة",

        halfLife:
            "حوالي 1 ساعة للأموكسيسيلين",

        proteinBinding:
            "حوالي 18–25% للأموكسيسيلين",

        metabolism:
            "استقلاب جزئي.",

        elimination:
            "يطرح بشكل رئيسي عن طريق الكلى.",

        storage:
            "يحفظ المعلق المحضر حسب تعليمات الشركة المصنعة، ويرج جيداً قبل كل استخدام.",

        monitoring: [
            "متابعة الاستجابة للعلاج.",
            "مراقبة الحساسية.",
            "مراقبة وظائف الكبد عند الاستخدام المطول.",
            "مراقبة وظائف الكلى عند وجود قصور كلوي."
        ],

        clinicalPearls: [
            "يفضل إعطاؤه مع بداية الطعام لتقليل اضطرابات المعدة وتحسين تحمل الدواء.",
            "رج العبوة جيداً قبل كل جرعة.",
            "اختيار التركيز المناسب مهم لتقليل كمية Clavulanate غير الضرورية."
        ],

        blackBox:
            "لا يوجد Black Box Warning خاص بالمستحضر.",

        interactions: [
            "Warfarin: قد يحدث تغير في INR.",
            "Methotrexate: قد يزيد خطر السمية.",
            "Allopurinol: قد يزيد احتمال الطفح."
        ],

        notes:
            "يجب حساب الجرعة اعتماداً على مكون Amoxicillin. استخدم أداة قياس دقيقة.",

        alerts: [
            "لا تستخدمه للعدوى الفيروسية.",
            "أوقفه عند حدوث حساسية شديدة.",
            "يجب اختيار التركيز والجرعة حسب نوع العدوى وعمر ووزن الطفل."
        ]
    },


    // ==================================================
    // CEFALEXIN
    // ==================================================

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

        pharmacologicalClass:
            "First Generation Cephalosporin",

        diseases: [
            "pharyngitis",
            "skin",
            "uti"
        ],

        dosageForm: "Oral Suspension",

        strengths: [
            {
                name: "125 mg / 5 mL",
                concentration: 125,
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
            mgPerKg: 25,
            frequency: "Every 6–12 hours",
            maxDoseMg: 4000
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        mechanism:
            "يثبط تصنيع جدار الخلية البكتيرية من خلال الارتباط ببروتينات ارتباط البنسلين ومنع تكوين الببتيدوغليكان، مما يؤدي إلى موت الخلية البكتيرية.",

        indications:
            "التهابات الجلد والأنسجة الرخوة، التهاب البلعوم واللوزتين، والتهابات المسالك البولية وبعض الالتهابات التنفسية.",

        contraindications:
            "فرط الحساسية للسيفالوسبورينات. يستخدم بحذر عند وجود تاريخ من الحساسية الشديدة للبنسلين.",

        warnings:
            "يستخدم بحذر عند مرضى القصور الكلوي، وقد يحتاج إلى تعديل الجرعة.",

        sideEffects:
            "إسهال، غثيان، قيء، ألم بطني وطفح جلدي.",

        pregnancy:
            "يمكن استخدامه عند الحاجة الطبية.",

        lactation:
            "يمكن استخدامه أثناء الرضاعة عند الحاجة.",

        doseRange:
            "عادةً 25–50 mg/kg/day مقسمة على عدة جرعات حسب نوع العدوى وشدتها.",

        onset:
            "حوالي 1 ساعة",

        duration:
            "6–12 ساعة",

        halfLife:
            "حوالي 1 ساعة",

        proteinBinding:
            "حوالي 15%",

        metabolism:
            "لا يستقلب بشكل ملحوظ.",

        elimination:
            "يطرح بشكل رئيسي عن طريق الكلى.",

        storage:
            "يحفظ المعلق حسب تعليمات الشركة المصنعة ويرج جيداً قبل الاستخدام.",

        monitoring: [
            "متابعة الاستجابة للعلاج.",
            "مراقبة ظهور الحساسية.",
            "مراقبة وظائف الكلى عند وجود قصور كلوي."
        ],

        clinicalPearls: [
            "رج العبوة جيداً قبل كل جرعة.",
            "إكمال الكورس العلاجي حسب الوصفة.",
            "يمكن إعطاؤه مع الطعام إذا سبب اضطراباً بالمعدة."
        ],

        blackBox:
            "لا يوجد Black Box Warning خاص بالسيفالكسين.",

        interactions: [
            "Warfarin: قد يحدث تغير في INR.",
            "Metformin: قد يرتفع تركيز Metformin في بعض الحالات."
        ],

        notes:
            "يمكن إعطاؤه مع أو بدون الطعام.",

        alerts: [
            "أوقف الدواء عند حدوث تفاعل تحسسي شديد.",
            "لا تستخدمه للعدوى الفيروسية.",
            "يجب تعديل الجرعة عند وجود قصور كلوي."
        ]
    }

};


// ======================================================
// Register Antibiotics
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(antibioticDrugs);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}


// ======================================================
// Debug
// ======================================================

console.log(
    "Antibiotics Database Loaded:",
    Object.keys(antibioticDrugs)
);
