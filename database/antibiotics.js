// ======================================================
// DoseCare AI v7
// Additional Antibiotics Database
// Pediatric Oral Liquids
// ======================================================

const additionalAntibioticDrugs = {

    // ==================================================
    // 1. AZITHROMYCIN
    // ==================================================

    azithromycin: {

        id: "azithromycin",

        name: "Azithromycin",

        genericName: "Azithromycin",

        brandNames: [
            "Zithromax",
            "Azithro"
        ],

        category: "Antibiotic",

        therapeuticClass: "Macrolide Antibiotic",

        pharmacologicalClass: "Azalide Macrolide",

        diseases: [
            "otitis",
            "sinusitis",
            "pneumonia",
            "pharyngitis"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

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

            type: "disease_based",

            otitis: {
                regimens: [
                    "30 mg/kg as a single dose",
                    "10 mg/kg once daily for 3 days",
                    "10 mg/kg on Day 1 followed by 5 mg/kg/day on Days 2–5"
                ]
            },

            sinusitis: {
                mgPerKg: 10,
                frequency: "Once daily",
                duration: "3 days"
            },

            pneumonia: {
                day1MgPerKg: 10,
                days2to5MgPerKg: 5,
                frequency: "Once daily",
                duration: "5 days"
            },

            pharyngitis: {
                mgPerKg: 12,
                frequency: "Once daily",
                duration: "5 days"
            }
        },

        age: {
            minAge: 0.5,
            maxAge: 18
        },

        indications:
            "بعض الالتهابات البكتيرية المحددة مثل التهاب الأذن الوسطى، التهاب الجيوب الأنفية وبعض حالات pneumonia وpharyngitis حسب التشخيص.",

        contraindications:
            "فرط الحساسية للـ macrolides أو وجود تاريخ من cholestatic jaundice/hepatic dysfunction associated with previous azithromycin use.",

        warnings:
            "قد يسبب إطالة QT واضطرابات نظم القلب، ويستخدم بحذر عند وجود عوامل خطورة قلبية أو أدوية أخرى تطيل QT.",

        sideEffects:
            "إسهال، غثيان، ألم بطني، قيء، صداع، وقد تحدث اضطرابات كبدية أو اضطرابات نظم نادراً.",

        notes:
            "يمكن إعطاؤه مع أو بدون الطعام. لا يستخدم لمجرد وجود أعراض تنفسية دون تشخيص عدوى بكتيرية مناسبة.",

        monitoring: [
            "متابعة الاستجابة للعلاج.",
            "مراقبة الأعراض الهضمية.",
            "مراقبة عوامل خطورة QT عند وجودها."
        ],

        alerts: [
            "لا تستخدمه للعدوى الفيروسية.",
            "انتبه للتداخلات التي قد تطيل QT.",
            "اختيار الجرعة يعتمد على نوع العدوى."
        ],

        source:
            "FDA/DailyMed Azithromycin Oral Suspension; WHO childhood infection guidance."
    },


    // ==================================================
    // 2. CLARITHROMYCIN
    // ==================================================

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
            "respiratory_infection",
            "pharyngitis",
            "pneumonia"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

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

            type: "standard_pediatric",

            mgPerKgPerDay: 15,

            frequency: "Every 12 hours",

            duration: "10 days",

            maxDoseMgPerDose: 500
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "بعض الالتهابات البكتيرية التنفسية وغيرها من الاستطبابات المحددة حسب التشخيص والبروتوكول.",

        contraindications:
            "فرط الحساسية للـ macrolides، وبعض التداخلات الدوائية الخطيرة، وبعض اضطرابات QT.",

        warnings:
            "Clarithromycin يملك تداخلات دوائية مهمة لأنه يؤثر في CYP3A4، وقد يسبب QT prolongation.",

        sideEffects:
            "غثيان، قيء، إسهال، ألم بطني، تغير أو طعم مر في الفم، صداع، واضطرابات كبدية أو قلبية نادرة.",

        notes:
            "يمكن إعطاؤه مع أو بدون الطعام حسب المستحضر. يجب مراجعة التداخلات الدوائية قبل الاستخدام.",

        monitoring: [
            "الاستجابة للعلاج.",
            "وظائف الكبد عند وجود عوامل خطورة.",
            "التداخلات الدوائية.",
            "QT risk عند وجود عوامل خطورة."
        ],

        alerts: [
            "انتبه للتداخلات الدوائية.",
            "لا تستخدمه للعدوى الفيروسية.",
            "الجرعة تختلف في بعض الاستطبابات الخاصة مثل MAC."
        ],

        source:
            "FDA/DailyMed Clarithromycin for Oral Suspension."
    },


    // ==================================================
    // 3. CEFUROXIME
    // ==================================================

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
            "sinusitis",
            "pharyngitis",
            "skin"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

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

            type: "disease_based",

            pharyngitis: {
                mgPerKgPerDay: 20,
                frequency: "Every 12 hours",
                duration: "10 days",
                maxDoseMgPerDay: 500
            },

            otitis: {
                mgPerKgPerDay: 30,
                frequency: "Every 12 hours",
                duration: "10 days",
                maxDoseMgPerDay: 1000
            },

            sinusitis: {
                mgPerKgPerDay: 30,
                frequency: "Every 12 hours",
                duration: "10 days",
                maxDoseMgPerDay: 1000
            },

            skin: {
                mgPerKgPerDay: 30,
                frequency: "Every 12 hours",
                duration: "10 days",
                maxDoseMgPerDay: 1000
            }
        },

        age: {
            minAge: 0.25,
            maxAge: 12
        },

        indications:
            "التهاب الأذن الوسطى، التهاب البلعوم واللوزتين، التهاب الجيوب الأنفية البكتيري وبعض التهابات الجلد المحددة.",

        contraindications:
            "فرط الحساسية للسيفالوسبورينات أو تفاعل تحسسي شديد سابق مع beta-lactam antibiotics.",

        warnings:
            "يجب الحذر عند وجود تاريخ من الحساسية للبنسلينات أو قصور كلوي. المعلق الفموي ليس بالضرورة مكافئاً للأقراص milligram-for-milligram.",

        sideEffects:
            "إسهال، غثيان، قيء، ألم بطني، طفح جلدي وتفاعلات تحسسية.",

        notes:
            "يعطى مع الطعام لتحسين الامتصاص حسب النشرة الرسمية، ويرج جيداً قبل الاستخدام.",

        monitoring: [
            "الاستجابة للعلاج.",
            "علامات الحساسية.",
            "وظائف الكلى عند وجود قصور."
        ],

        alerts: [
            "رج العبوة جيداً.",
            "يعطى مع الطعام.",
            "لا تستخدمه للعدوى الفيروسية."
        ],

        source:
            "FDA/DailyMed Cefuroxime Axetil Oral Suspension."
    },


    // ==================================================
    // 4. CEFIXIME
    // ==================================================

    cefixime: {

        id: "cefixime",

        name: "Cefixime",

        genericName: "Cefixime",

        brandNames: [
            "Suprax",
            "Cefix"
        ],

        category: "Antibiotic",

        therapeuticClass: "Cephalosporin Antibiotic",

        pharmacologicalClass: "Third Generation Cephalosporin",

        diseases: [
            "otitis",
            "pharyngitis",
            "uti"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

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

            type: "standard_pediatric",

            mgPerKgPerDay: 8,

            alternatives: [
                "8 mg/kg once daily",
                "4 mg/kg every 12 hours"
            ]
        },

        age: {
            minAge: 0.5,
            maxAge: 18
        },

        indications:
            "التهابات المسالك البولية غير المعقدة، التهاب الأذن الوسطى، التهاب البلعوم واللوزتين وبعض الاستطبابات المحددة الأخرى.",

        contraindications:
            "فرط الحساسية للسيفالوسبورينات.",

        warnings:
            "يستخدم بحذر عند وجود قصور كلوي، ويجب تعديل الجرعة عند الحاجة.",

        sideEffects:
            "إسهال، غثيان، ألم بطني، قيء وطفح جلدي.",

        notes:
            "يتوفر بعدة تراكيز للمعلق، لذلك يجب أن يظهر التركيز بوضوح عند حساب mL.",

        monitoring: [
            "الاستجابة للعلاج.",
            "علامات الحساسية.",
            "وظائف الكلى عند وجود قصور."
        ],

        alerts: [
            "العمر الأدنى الموصى به للمعلق هو 6 أشهر.",
            "تأكد من التركيز قبل تحويل mg إلى mL.",
            "لا تستخدمه للعدوى الفيروسية."
        ],

        source:
            "FDA/DailyMed Cefixime Oral Suspension."
    },


    // ==================================================
    // 5. CO-TRIMOXAZOLE
    // ==================================================

    co_trimoxazole: {

        id: "co_trimoxazole",

        name: "Co-trimoxazole",

        genericName: "Trimethoprim + Sulfamethoxazole",

        brandNames: [
            "Bactrim",
            "Septrin"
        ],

        category: "Antibiotic",

        therapeuticClass:
            "Sulfonamide + Folate Antagonist",

        pharmacologicalClass:
            "Trimethoprim-Sulfamethoxazole",

        diseases: [
            "uti",
            "otitis",
            "shigellosis"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

        strengths: [
            {
                name: "40 mg Trimethoprim + 200 mg Sulfamethoxazole / 5 mL",
                concentration: 40,
                sulfamethoxazole: 200,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {

            type: "component_based",

            uti: {
                trimethoprimMgPerKgPerDay: 8,
                sulfamethoxazoleMgPerKgPerDay: 40,
                frequency: "Every 12 hours",
                duration: "10 days"
            },

            otitis: {
                trimethoprimMgPerKgPerDay: 8,
                sulfamethoxazoleMgPerKgPerDay: 40,
                frequency: "Every 12 hours",
                duration: "10 days"
            },

            shigellosis: {
                trimethoprimMgPerKgPerDay: 8,
                sulfamethoxazoleMgPerKgPerDay: 40,
                frequency: "Every 12 hours",
                duration: "5 days"
            }
        },

        age: {
            minAge: 0.167,
            maxAge: 18
        },

        indications:
            "بعض التهابات المسالك البولية والتهاب الأذن الوسطى وحالات محددة من shigellosis حسب الحساسية والبروتوكول.",

        contraindications:
            "يمنع استخدامه عند الأطفال دون عمر شهرين، وكذلك عند وجود حساسية شديدة للسلفوناميدات أو trimethoprim وبعض حالات القصور الكلوي أو الكبدي الشديد.",

        warnings:
            "قد يسبب hyperkalemia، اضطرابات دموية، تفاعلات جلدية شديدة، ويحتاج إلى حذر عند وجود قصور كلوي.",

        sideEffects:
            "غثيان، قيء، طفح جلدي، فرط بوتاسيوم الدم، اضطرابات دموية وتفاعلات جلدية شديدة نادرة.",

        notes:
            "الجرعة يجب أن تحسب اعتماداً على مكون Trimethoprim مع الانتباه إلى كمية Sulfamethoxazole الموجودة في المستحضر.",

        monitoring: [
            "الاستجابة للعلاج.",
            "وظائف الكلى عند وجود عوامل خطورة.",
            "Potassium عند الاستخدام المطول أو وجود عوامل خطورة.",
            "CBC عند الاستخدام المطول."
        ],

        alerts: [
            "ممنوع تحت عمر شهرين.",
            "أوقفه واطلب المساعدة عند ظهور طفح جلدي شديد.",
            "تأكد من مكونات المستحضر قبل حساب الجرعة."
        ],

        source:
            "FDA/DailyMed Sulfamethoxazole + Trimethoprim Oral Suspension."
    }

};


// ======================================================
// Register Additional Antibiotics
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(additionalAntibioticDrugs);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}


// ======================================================
// Debug
// ======================================================

console.log(
    "Additional Antibiotics Loaded:",
    Object.keys(additionalAntibioticDrugs)
);
// ======================================================
// DoseCare AI v7
// Additional Antibiotics Database - Part 2
// Pediatric Oral Liquids
// ======================================================

const additionalAntibioticDrugsPart2 = {

    // ==================================================
    // 6. CEFDINIR
    // ==================================================

    cefdinir: {

        id: "cefdinir",

        name: "Cefdinir",

        genericName: "Cefdinir",

        brandNames: [
            "Omnicef",
            "Cefdinir"
        ],

        category: "Antibiotic",

        therapeuticClass: "Cephalosporin Antibiotic",

        pharmacologicalClass:
            "Third Generation Cephalosporin",

        diseases: [
            "otitis",
            "sinusitis",
            "pharyngitis",
            "skin"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

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

            type: "disease_based",

            standard: {
                mgPerKgPerDay: 14,
                maxDoseMgPerDay: 600
            },

            otitis: {
                mgPerKgPerDose: 7,
                frequency: "Every 12 hours",
                duration: "5–10 days"
            },

            sinusitis: {
                mgPerKgPerDose: 7,
                frequency: "Every 12 hours",
                duration: "10 days"
            },

            pharyngitis: {
                mgPerKgPerDose: 7,
                frequency: "Every 12 hours",
                duration: "5–10 days"
            },

            skin: {
                mgPerKgPerDose: 7,
                frequency: "Every 12 hours",
                duration: "10 days"
            }
        },

        age: {
            minAge: 0.5,
            maxAge: 12
        },

        indications:
            "التهاب الأذن الوسطى، التهاب الجيوب الأنفية البكتيري، التهاب البلعوم/اللوزتين وبعض التهابات الجلد والأنسجة الرخوة.",

        contraindications:
            "فرط الحساسية للسيفالوسبورينات أو وجود تفاعل تحسسي شديد سابق تجاه beta-lactam antibiotics.",

        warnings:
            "يستخدم بحذر عند وجود حساسية شديدة سابقة للبنسلينات أو قصور كلوي. يجب التأكد من التركيز قبل تحويل الجرعة إلى mL.",

        sideEffects:
            "إسهال، غثيان، قيء، ألم بطني وطفح جلدي.",

        notes:
            "يمكن إعطاؤه مع أو بدون الطعام. الجرعة القصوى للأطفال هي 600 mg/day.",

        monitoring: [
            "متابعة الاستجابة للعلاج.",
            "مراقبة الحساسية.",
            "مراقبة وظائف الكلى عند وجود عوامل خطورة."
        ],

        alerts: [
            "لا تستخدمه للعدوى الفيروسية.",
            "تأكد من التركيز قبل حساب mL.",
            "الجرعة القصوى 600 mg/day."
        ],

        source:
            "DailyMed - Cefdinir for Oral Suspension."
    },


    // ==================================================
    // 7. CEFPODOXIME
    // ==================================================

    cefpodoxime: {

        id: "cefpodoxime",

        name: "Cefpodoxime",

        genericName: "Cefpodoxime Proxetil",

        brandNames: [
            "Vantin",
            "Cefodox"
        ],

        category: "Antibiotic",

        therapeuticClass: "Cephalosporin Antibiotic",

        pharmacologicalClass:
            "Third Generation Cephalosporin",

        diseases: [
            "otitis",
            "sinusitis",
            "pharyngitis"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

        strengths: [
            {
                name: "50 mg / 5 mL",
                concentration: 50,
                volume: 5,
                unit: "mg/5mL"
            },
            {
                name: "100 mg / 5 mL",
                concentration: 100,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {

            type: "disease_based",

            otitis: {
                mgPerKgPerDose: 5,
                frequency: "Every 12 hours",
                duration: "5 days",
                maxDoseMgPerDose: 200
            },

            pharyngitis: {
                mgPerKgPerDose: 5,
                frequency: "Every 12 hours",
                duration: "5–10 days",
                maxDoseMgPerDose: 100
            },

            sinusitis: {
                mgPerKgPerDose: 5,
                frequency: "Every 12 hours",
                duration: "10 days",
                maxDoseMgPerDose: 200
            }
        },

        age: {
            minAge: 0.167,
            maxAge: 12
        },

        indications:
            "التهاب الأذن الوسطى، التهاب البلعوم واللوزتين، والتهاب الجيوب الأنفية البكتيري في الأعمار المناسبة.",

        contraindications:
            "فرط الحساسية للسيفالوسبورينات أو beta-lactam antibiotics.",

        warnings:
            "يستخدم بحذر عند وجود قصور كلوي أو تاريخ من الحساسية الشديدة للبنسلينات.",

        sideEffects:
            "إسهال، قيء، ألم بطني، غثيان وطفح جلدي.",

        notes:
            "الجرعة الموصى بها للأطفال هي 10 mg/kg/day مقسمة كل 12 ساعة، مع اختلاف الحد الأقصى حسب التشخيص.",

        monitoring: [
            "الاستجابة للعلاج.",
            "علامات الحساسية.",
            "وظائف الكلى عند وجود عوامل خطورة."
        ],

        alerts: [
            "تأكد من التركيز قبل حساب mL.",
            "لا تستخدمه للعدوى الفيروسية.",
            "التزم بالحد الأقصى الخاص بالتشخيص."
        ],

        source:
            "DailyMed - Cefpodoxime Proxetil for Oral Suspension."
    },


    // ==================================================
    // 8. CLINDAMYCIN
    // ==================================================

    clindamycin: {

        id: "clindamycin",

        name: "Clindamycin",

        genericName: "Clindamycin",

        brandNames: [
            "Cleocin",
            "Dalacin"
        ],

        category: "Antibiotic",

        therapeuticClass:
            "Lincosamide Antibiotic",

        pharmacologicalClass:
            "Lincosamide",

        diseases: [
            "skin",
            "dental",
            "anaerobic_infection"
        ],

        dosageForm: "Oral Solution",

        route: "Oral",

        strengths: [
            {
                name: "75 mg / 5 mL",
                concentration: 75,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {

            type: "severity_based",

            serious: {
                minMgPerKgPerDay: 8,
                maxMgPerKgPerDay: 12,
                frequency: "3–4 divided doses"
            },

            severe: {
                minMgPerKgPerDay: 13,
                maxMgPerKgPerDay: 16,
                frequency: "3–4 divided doses"
            },

            moreSevere: {
                minMgPerKgPerDay: 17,
                maxMgPerKgPerDay: 25,
                frequency: "3–4 divided doses"
            }
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "بعض التهابات الجلد والأنسجة الرخوة والالتهابات اللاهوائية وبعض الاستطبابات السنية حسب التشخيص.",

        contraindications:
            "فرط الحساسية للـ clindamycin أو lincomycin.",

        warnings:
            "قد يسبب antibiotic-associated diarrhea وC. difficile colitis، وقد تكون الحالة شديدة.",

        sideEffects:
            "إسهال، ألم بطني، غثيان، قيء وطفح جلدي.",

        notes:
            "في حالات الإسهال الشديد أثناء العلاج يجب إيقاف الدواء وتقييم المريض.",

        monitoring: [
            "الاستجابة للعلاج.",
            "مراقبة الإسهال.",
            "مراقبة علامات C. difficile infection."
        ],

        alerts: [
            "الإسهال الشديد أثناء العلاج علامة مهمة.",
            "لا يستخدم للعدوى الفيروسية.",
            "الجرعة تعتمد على شدة العدوى."
        ],

        source:
            "DailyMed - Clindamycin Palmitate Hydrochloride Oral Solution."
    },


    // ==================================================
    // 9. METRONIDAZOLE
    // ==================================================

    metronidazole: {

        id: "metronidazole",

        name: "Metronidazole",

        genericName: "Metronidazole",

        brandNames: [
            "Flagyl",
            "Likmez"
        ],

        category: "Antibiotic",

        therapeuticClass:
            "Nitroimidazole Antimicrobial",

        pharmacologicalClass:
            "Nitroimidazole",

        diseases: [
            "anaerobic_infection",
            "amebiasis",
            "giardiasis"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

        strengths: [
            {
                name: "500 mg / 10 mL",
                concentration: 50,
                volume: 10,
                unit: "mg/10mL"
            }
        ],

        dose: {

            type: "disease_based",

            amebiasis: {
                minMgPerKgPerDay: 35,
                maxMgPerKgPerDay: 50,
                frequency: "3 divided doses",
                duration: "10 days",
                maxDoseMgPerDay: 2250
            },

            anaerobic: {
                mgPerKgPerDose: 7.5,
                frequency: "Every 6 hours",
                duration: "7–10 days"
            }
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "بعض العدوى اللاهوائية والـ amebiasis وبعض الطفيليات المعوية حسب التشخيص والبروتوكول.",

        contraindications:
            "فرط الحساسية للـ metronidazole أو مشتقات nitroimidazole.",

        warnings:
            "يجب الانتباه إلى أمراض الكبد والتداخلات الدوائية، وتجنب الكحول أثناء العلاج وبعده حسب التوصيات الرسمية.",

        sideEffects:
            "غثيان، قيء، إسهال، ألم بطني وطعم معدني في الفم.",

        notes:
            "بعض حالات العدوى اللاهوائية الشديدة تحتاج إلى العلاج الوريدي أولاً.",

        monitoring: [
            "الاستجابة للعلاج.",
            "وظائف الكبد عند وجود عوامل خطورة.",
            "الأعراض العصبية عند الاستخدام المطول."
        ],

        alerts: [
            "لا يستخدم للعدوى الفيروسية.",
            "راجع التداخلات الدوائية.",
            "الجرعة تعتمد على نوع العدوى."
        ],

        source:
            "DailyMed - Metronidazole Oral Suspension."
    },


    // ==================================================
    // 10. NITROFURANTOIN
    // ==================================================

    nitrofurantoin: {

        id: "nitrofurantoin",

        name: "Nitrofurantoin",

        genericName: "Nitrofurantoin",

        brandNames: [
            "Furadantin",
            "Macrodantin"
        ],

        category: "Antibiotic",

        therapeuticClass:
            "Urinary Antibacterial",

        pharmacologicalClass:
            "Nitrofuran",

        diseases: [
            "uti"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

        strengths: [
            {
                name: "25 mg / 5 mL",
                concentration: 25,
                volume: 5,
                unit: "mg/5mL"
            },
            {
                name: "50 mg / 5 mL",
                concentration: 50,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {

            type: "weight_based",

            minMgPerKgPerDay: 5,
            maxMgPerKgPerDay: 7,

            frequency: "4 divided doses",

            duration:
                "حسب الاستجابة وبروتوكول علاج UTI"
        },

        age: {
            minAge: 0.0833,
            maxAge: 18
        },

        indications:
            "علاج التهابات المسالك البولية الناتجة عن البكتيريا الحساسة.",

        contraindications:
            "ممنوع تحت عمر شهر واحد. لا يستخدم لعلاج pyelonephritis أو perinephric abscess.",

        warnings:
            "يجب إعطاؤه مع الطعام لتحسين الامتصاص والتحمل. يحتاج إلى تقييم وظائف الكلى حسب الحالة.",

        sideEffects:
            "غثيان، قيء، ألم بطني، صداع، وقد تحدث تفاعلات رئوية أو كبدية نادرة خصوصاً مع الاستخدام المطول.",

        notes:
            "دواء مخصص للـ lower urinary tract infection وليس لعلاج pyelonephritis.",

        monitoring: [
            "الاستجابة لعلاج UTI.",
            "وظائف الكلى عند وجود عوامل خطورة.",
            "مراقبة الأعراض الرئوية أو الكبدية عند الاستخدام المطول."
        ],

        alerts: [
            "ممنوع تحت عمر شهر.",
            "يعطى مع الطعام.",
            "لا يستخدم لعلاج pyelonephritis."
        ],

        source:
            "DailyMed - Nitrofurantoin Oral Suspension."
    },


    // ==================================================
    // 11. ERYTHROMYCIN
    // ==================================================

    erythromycin: {

        id: "erythromycin",

        name: "Erythromycin",

        genericName: "Erythromycin Ethylsuccinate",

        brandNames: [
            "Ery-Ped",
            "EES"
        ],

        category: "Antibiotic",

        therapeuticClass:
            "Macrolide Antibiotic",

        pharmacologicalClass:
            "Macrolide",

        diseases: [
            "pharyngitis",
            "pertussis",
            "respiratory_infection"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

        strengths: [
            {
                name: "200 mg / 5 mL",
                concentration: 200,
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

            type: "weight_based",

            minMgPerKgPerDay: 30,
            maxMgPerKgPerDay: 50,

            frequency: "Every 6 hours",

            severeMultiplier:
                2
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "بعض الالتهابات البكتيرية التنفسية، streptococcal infections، pertussis وبعض الاستطبابات المحددة.",

        contraindications:
            "فرط الحساسية للإريثرومايسين أو وجود تداخلات دوائية خطيرة حسب المستحضر.",

        warnings:
            "قد يسبب QT prolongation وتداخلات دوائية، ويجب الانتباه إلى وظائف الكبد.",

        sideEffects:
            "غثيان، قيء، ألم بطني، إسهال واضطرابات كبدية أو قلبية نادرة.",

        notes:
            "يمكن إعطاؤه مع أو بدون الطعام حسب المستحضر.",

        monitoring: [
            "الاستجابة للعلاج.",
            "التداخلات الدوائية.",
            "وظائف الكبد عند وجود عوامل خطورة."
        ],

        alerts: [
            "انتبه للتداخلات الدوائية.",
            "مراقبة عوامل خطر QT.",
            "لا يستخدم للعدوى الفيروسية."
        ],

        source:
            "DailyMed - Erythromycin Ethylsuccinate Oral Suspension."
    }

};


// ======================================================
// Register Part 2
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(additionalAntibioticDrugsPart2);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}


// ======================================================
// Debug
// ======================================================

console.log(
    "Additional Antibiotics Part 2 Loaded:",
    Object.keys(additionalAntibioticDrugsPart2)
);
