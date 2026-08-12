// ======================================================
// DoseCare AI v7
// ANTIHISTAMINES DATABASE
// Pediatric Oral Liquids
// Part 1 - Complete
// ======================================================
//
// Sources:
// FDA / DailyMed official drug labels
// WHO Essential Drugs / Pediatric guidance
//
// IMPORTANT:
// All dose calculations must be verified against the
// current official product label / clinical reference.
// ======================================================


const antihistamineDrugs = {

    // ==================================================
    // 1. CETIRIZINE
    // ==================================================

    cetirizine: {

        id: "cetirizine",

        name: "Cetirizine",

        genericName: "Cetirizine Hydrochloride",

        brandNames: [
            "Zyrtec",
            "Reactine"
        ],

        category: "Antihistamine",

        therapeuticClass:
            "Second-Generation H1 Antihistamine",

        pharmacologicalClass:
            "Selective H1-Receptor Antagonist",

        diseases: [
            "allergy",
            "allergic_rhinitis",
            "urticaria"
        ],

        dosageForm: "Oral Solution",

        route: "Oral",

        strengths: [

            {
                name: "5 mg / 5 mL",
                concentration: 5,
                volume: 5,
                unit: "mg/5mL"
            },

            {
                name: "1 mg / mL",
                concentration: 1,
                volume: 1,
                unit: "mg/mL"
            }

        ],

        dose: {

            type: "age_based",

            allergic_rhinitis: {

                age_6months_to_23months: {
                    doseMg: 2.5,
                    volumeAt1mgPerMl: 2.5,
                    frequency: "Once daily"
                },

                age_12months_to_23months_max: {
                    doseMg: 5,
                    frequency: "Every 12 hours or once daily",
                    maxDoseMgPerDay: 5
                },

                age_2_to_5years: {
                    initialDoseMg: 2.5,
                    frequency: "Once daily",
                    maxDoseMgPerDay: 5
                },

                age_6years_and_older: {
                    doseMg: 5,
                    frequency: "Once daily",
                    maxDoseMgPerDay: 10
                }

            },

            urticaria: {

                age_6months_to_23months: {
                    doseMg: 2.5,
                    frequency: "Once daily"
                },

                age_2_to_5years: {
                    initialDoseMg: 2.5,
                    frequency: "Once daily",
                    maxDoseMgPerDay: 5
                },

                age_6years_and_older: {
                    doseMg: 5,
                    frequency: "Once daily",
                    maxDoseMgPerDay: 10
                }

            }

        },

        age: {
            minAge: 0.5,
            maxAge: 18
        },

        indications:
            "تخفيف أعراض allergic rhinitis وعلاج chronic urticaria حسب العمر والاستطباب.",

        contraindications:
            "فرط الحساسية لـ cetirizine أو hydroxyzine أو أي من مكونات المستحضر.",

        warnings:
            "قد يسبب النعاس عند بعض المرضى. يجب الحذر عند وجود قصور كلوي أو كبدي، وقد تحتاج الجرعة إلى تعديل حسب الحالة.",

        sideEffects:
            "نعاس، تعب، صداع، جفاف الفم، وأعراض هضمية مثل الغثيان أو ألم البطن.",

        notes:
            "يمكن تناوله مع أو بدون الطعام. استخدم أداة قياس مدرجة دقيقة عند إعطائه للأطفال.",

        monitoring: [
            "الاستجابة للأعراض التحسسية.",
            "النعاس أو التعب.",
            "وظائف الكلى عند وجود قصور كلوي."
        ],

        alerts: [
            "تأكد من عمر الطفل قبل اختيار الجرعة.",
            "لا تتجاوز الجرعة اليومية القصوى.",
            "تأكد من تركيز المستحضر قبل تحويل mg إلى mL."
        ],

        source:
            "FDA/DailyMed - Cetirizine Hydrochloride Oral Solution."
    },


    // ==================================================
    // 2. LORATADINE
    // ==================================================

    loratadine: {

        id: "loratadine",

        name: "Loratadine",

        genericName: "Loratadine",

        brandNames: [
            "Claritin",
            "Clarityn"
        ],

        category: "Antihistamine",

        therapeuticClass:
            "Second-Generation H1 Antihistamine",

        pharmacologicalClass:
            "Selective Peripheral H1-Receptor Antagonist",

        diseases: [
            "allergy",
            "allergic_rhinitis",
            "urticaria"
        ],

        dosageForm: "Oral Solution",

        route: "Oral",

        strengths: [

            {
                name: "5 mg / 5 mL",
                concentration: 5,
                volume: 5,
                unit: "mg/5mL"
            }

        ],

        dose: {

            type: "age_based",

            standard: {

                age_2_to_under_6years: {
                    doseMg: 5,
                    frequency: "Once daily",
                    maxDoseMgPerDay: 5
                },

                age_6years_and_older: {
                    doseMg: 10,
                    frequency: "Once daily",
                    maxDoseMgPerDay: 10
                },

                under_2years: {
                    dose: "Consult physician"
                }

            }

        },

        age: {
            minAge: 2,
            maxAge: 18
        },

        indications:
            "التخفيف المؤقت لأعراض allergic rhinitis مثل العطاس، سيلان الأنف والحكة، وعلاج أعراض الحساسية والشرى حسب الاستطباب.",

        contraindications:
            "فرط الحساسية لـ loratadine أو أي من مكونات المستحضر.",

        warnings:
            "يجب استشارة الطبيب عند وجود مرض كبدي أو كلوي، لأن تعديل الجرعة قد يكون مطلوباً.",

        sideEffects:
            "صداع، نعاس خفيف عند بعض المرضى، تعب وجفاف الفم.",

        notes:
            "عادةً لا يسبب النعاس بدرجة كبيرة مقارنة بالـ first-generation antihistamines، لكن النعاس قد يحدث.",

        monitoring: [
            "الاستجابة للأعراض.",
            "ظهور النعاس.",
            "وظائف الكبد أو الكلى عند وجود مرض معروف."
        ],

        alerts: [
            "لا تعطِ جرعة الأطفال تحت عمر سنتين دون توجيه طبي.",
            "تأكد من تركيز 5 mg/5 mL قبل حساب mL.",
            "لا تتجاوز الجرعة اليومية."
        ],

        source:
            "FDA/DailyMed - Loratadine Oral Solution 5 mg/5 mL."
    },


    // ==================================================
    // 3. DESLORATADINE
    // ==================================================

    desloratadine: {

        id: "desloratadine",

        name: "Desloratadine",

        genericName: "Desloratadine",

        brandNames: [
            "Clarinex",
            "Aerius"
        ],

        category: "Antihistamine",

        therapeuticClass:
            "Second-Generation H1 Antihistamine",

        pharmacologicalClass:
            "Selective H1-Receptor Antagonist",

        diseases: [
            "allergy",
            "allergic_rhinitis",
            "urticaria"
        ],

        dosageForm: "Oral Solution",

        route: "Oral",

        strengths: [

            {
                name: "0.5 mg / mL",
                concentration: 0.5,
                volume: 1,
                unit: "mg/mL"
            },

            {
                name: "2.5 mg / 5 mL",
                concentration: 2.5,
                volume: 5,
                unit: "mg/5mL"
            }

        ],

        dose: {

            type: "age_based",

            standard: {

                age_6_to_11months: {
                    doseMg: 1,
                    volumeAt0_5mgPerMl: 2,
                    frequency: "Once daily"
                },

                age_12months_to_5years: {
                    doseMg: 1.25,
                    volumeAt0_5mgPerMl: 2.5,
                    frequency: "Once daily"
                },

                age_6_to_11years: {
                    doseMg: 2.5,
                    volumeAt0_5mgPerMl: 5,
                    frequency: "Once daily"
                },

                age_12years_and_older: {
                    doseMg: 5,
                    volumeAt0_5mgPerMl: 10,
                    frequency: "Once daily"
                }

            }

        },

        age: {
            minAge: 0.5,
            maxAge: 18
        },

        indications:
            "تخفيف أعراض perennial allergic rhinitis وعلاج uncomplicated chronic idiopathic urticaria حسب العمر.",

        contraindications:
            "فرط الحساسية لـ desloratadine أو loratadine أو أي من مكونات المستحضر.",

        warnings:
            "قد تحدث تفاعلات فرط حساسية مثل الطفح، الحكة، الوذمة أو ضيق التنفس. يجب الحذر عند وجود قصور كبدي أو كلوي.",

        sideEffects:
            "صداع، التهاب البلعوم، جفاف الفم، تعب أو نعاس عند بعض المرضى.",

        notes:
            "يمكن تناوله مع أو بدون الطعام. استخدم syringe أو measuring device مدرج بدقة.",

        monitoring: [
            "الاستجابة للأعراض التحسسية.",
            "ظهور أعراض فرط الحساسية.",
            "وظائف الكبد والكلى عند وجود عوامل خطورة."
        ],

        alerts: [
            "جرعة الطفل تعتمد على العمر.",
            "لا تفترض أن جرعة loratadine تساوي جرعة desloratadine.",
            "تأكد من التركيز قبل تحويل mg إلى mL."
        ],

        source:
            "FDA/DailyMed - Desloratadine Oral Solution 0.5 mg/mL."
    },


    // ==================================================
    // 4. LEVOCETIRIZINE
    // ==================================================

    levocetirizine: {

        id: "levocetirizine",

        name: "Levocetirizine",

        genericName: "Levocetirizine Dihydrochloride",

        brandNames: [
            "Xyzal",
            "Levocet"
        ],

        category: "Antihistamine",

        therapeuticClass:
            "Second-Generation H1 Antihistamine",

        pharmacologicalClass:
            "Selective H1-Receptor Antagonist",

        diseases: [
            "allergy",
            "allergic_rhinitis",
            "urticaria"
        ],

        dosageForm: "Oral Solution",

        route: "Oral",

        strengths: [

            {
                name: "2.5 mg / 5 mL",
                concentration: 2.5,
                volume: 5,
                unit: "mg/5mL"
            },

            {
                name: "0.5 mg / mL",
                concentration: 0.5,
                volume: 1,
                unit: "mg/mL"
            }

        ],

        dose: {

            type: "age_based",

            allergic_rhinitis: {

                age_6months_to_2years: {
                    doseMg: 1.25,
                    volumeAt0_5mgPerMl: 2.5,
                    frequency: "Once daily in the evening",
                    maxDoseMgPerDay: 1.25
                }

            },

            urticaria: {

                age_6_to_11years: {
                    doseMg: 2.5,
                    volumeAt0_5mgPerMl: 5,
                    frequency: "Once daily in the evening"
                },

                age_12years_and_older: {
                    doseMg: 5,
                    volumeAt0_5mgPerMl: 10,
                    frequency: "Once daily in the evening"
                }

            }

        },

        age: {
            minAge: 0.5,
            maxAge: 18
        },

        indications:
            "تخفيف أعراض perennial allergic rhinitis وعلاج uncomplicated chronic idiopathic urticaria.",

        contraindications:
            "فرط الحساسية لـ levocetirizine أو cetirizine أو أي من مكونات المستحضر.",

        warnings:
            "قد يسبب النعاس والتعب. يجب الحذر وتعديل الجرعة حسب الحالة عند وجود قصور كلوي.",

        sideEffects:
            "نعاس، تعب، جفاف الفم وصداع.",

        notes:
            "يمكن تناوله مع أو بدون الطعام. الجرعة للأطفال الصغار محددة حسب العمر والاستطباب.",

        monitoring: [
            "الاستجابة للعلاج.",
            "النعاس.",
            "وظائف الكلى عند وجود قصور كلوي."
        ],

        alerts: [
            "لا تتجاوز الجرعة الموصى بها للعمر.",
            "تأكد من التركيز قبل حساب mL.",
            "الجرعة في renal impairment تحتاج مراجعة."
        ],

        source:
            "FDA/DailyMed - Levocetirizine Dihydrochloride Oral Solution."
    },


    // ==================================================
    // 5. FEXOFENADINE
    // ==================================================

    fexofenadine: {

        id: "fexofenadine",

        name: "Fexofenadine",

        genericName: "Fexofenadine Hydrochloride",

        brandNames: [
            "Allegra",
            "Telfast"
        ],

        category: "Antihistamine",

        therapeuticClass:
            "Second-Generation H1 Antihistamine",

        pharmacologicalClass:
            "Selective Peripheral H1-Receptor Antagonist",

        diseases: [
            "allergy",
            "allergic_rhinitis",
            "urticaria"
        ],

        dosageForm: "Oral Suspension",

        route: "Oral",

        strengths: [

            {
                name: "30 mg / 5 mL",
                concentration: 30,
                volume: 5,
                unit: "mg/5mL"
            }

        ],

        dose: {

            type: "age_based",

            allergic_rhinitis: {

                age_2_to_under_12years: {
                    doseMg: 30,
                    frequency: "Every 12 hours",
                    maxDoseMgPerDay: 60
                },

                age_12years_and_older: {
                    doseMg: 60,
                    frequency: "Every 12 hours",
                    maxDoseMgPerDay: 120
                }

            }

        },

        age: {
            minAge: 2,
            maxAge: 18
        },

        indications:
            "تخفيف أعراض seasonal allergic rhinitis مثل العطاس وسيلان الأنف وحكة الأنف أو الحلق والعيون الدامعة.",

        contraindications:
            "فرط الحساسية لـ fexofenadine أو أي من مكونات المستحضر.",

        warnings:
            "يجب استشارة الطبيب عند وجود مرض كلوي، وقد تحتاج الجرعة إلى تعديل.",

        sideEffects:
            "صداع، غثيان، دوخة أو تعب، وعادةً يكون أقل تسبباً بالنعاس من مضادات الهيستامين القديمة.",

        notes:
            "يرج جيداً قبل الاستخدام. لا يؤخذ في نفس الوقت مع مضادات الحموضة المحتوية على aluminum أو magnesium. تجنب أخذه مع عصائر الفواكه حسب تعليمات المستحضر.",

        monitoring: [
            "الاستجابة لأعراض الحساسية.",
            "وظائف الكلى عند وجود مرض كلوي.",
            "التأكد من الالتزام بالجرعة."
        ],

        alerts: [
            "رج العبوة جيداً قبل الاستخدام.",
            "لا تخلطه مع fruit juice عند استخدام المستحضر الذي يحمل هذا التحذير.",
            "لا يعطى تحت عمر سنتين إلا حسب توجيه طبي."
        ],

        source:
            "FDA/DailyMed - Fexofenadine Hydrochloride Oral Suspension 30 mg/5 mL."
    },


    // ==================================================
    // 6. DIPHENHYDRAMINE
    // ==================================================

    diphenhydramine: {

        id: "diphenhydramine",

        name: "Diphenhydramine",

        genericName: "Diphenhydramine Hydrochloride",

        brandNames: [
            "Benadryl"
        ],

        category: "Antihistamine",

        therapeuticClass:
            "First-Generation H1 Antihistamine",

        pharmacologicalClass:
            "Sedating H1-Receptor Antagonist",

        diseases: [
            "allergy",
            "urticaria"
        ],

        dosageForm: "Oral Solution",

        route: "Oral",

        strengths: [

            {
                name: "12.5 mg / 5 mL",
                concentration: 12.5,
                volume: 5,
                unit: "mg/5mL"
            }

        ],

        dose: {

            type: "age_based",

            standard: {

                age_6_to_11years: {
                    doseMg: 12.5,
                    frequency: "Every 4–6 hours",
                    maxDoseMgPerDay: 75
                },

                age_12years_and_older: {
                    doseMg: 25,
                    frequency: "Every 4–6 hours",
                    maxDoseMgPerDay: 300
                }

            },

            weight_based_reference: {

                doseMgPerKgPer24Hours: 5,

                maxDoseMgPerDay: 300

            }

        },

        age: {
            minAge: 6,
            maxAge: 18
        },

        indications:
            "التخفيف المؤقت لأعراض الحساسية مثل سيلان الأنف والعطاس والحكة وبعض حالات urticaria.",

        contraindications:
            "فرط الحساسية للدواء أو مكوناته. لا يستخدم كدواء لمساعدة الطفل على النوم.",

        warnings:
            "يسبب النعاس بشكل واضح وقد يسبب paradoxical excitation عند بعض الأطفال. يجب تجنب استخدامه مع أدوية أخرى تحتوي diphenhydramine.",

        sideEffects:
            "نعاس، دوخة، جفاف الفم، تشوش الرؤية، إمساك، احتباس البول، وقد يحدث excitation عند الأطفال.",

        notes:
            "لا تستخدمه لجعل الطفل ينام. يجب الانتباه إلى جميع المنتجات التي قد تحتوي diphenhydramine لتجنب الجرعة المكررة.",

        monitoring: [
            "النعاس أو excitation.",
            "الاستجابة للأعراض.",
            "علامات anticholinergic toxicity عند الجرعة الزائدة."
        ],

        alerts: [
            "لا يستخدم تحت عمر سنتين إلا بتوجيه طبي.",
            "لا تستخدمه كـ sleep aid للأطفال.",
            "انتبه للمنتجات المركبة التي تحتوي diphenhydramine.",
            "النعاس قد يكون واضحاً."
        ],

        source:
            "FDA/DailyMed - Diphenhydramine Hydrochloride Oral Solution."
    },


    // ==================================================
    // 7. CHLORPHENIRAMINE
    // ==================================================

    chlorpheniramine: {

        id: "chlorpheniramine",

        name: "Chlorpheniramine",

        genericName: "Chlorpheniramine Maleate",

        brandNames: [
            "Chlor-Trimeton"
        ],

        category: "Antihistamine",

        therapeuticClass:
            "First-Generation H1 Antihistamine",

        pharmacologicalClass:
            "Sedating H1-Receptor Antagonist",

        diseases: [
            "allergy",
            "allergic_rhinitis",
            "urticaria"
        ],

        dosageForm: "Oral Solution",

        route: "Oral",

        strengths: [

            {
                name: "2 mg / 5 mL",
                concentration: 2,
                volume: 5,
                unit: "mg/5mL"
            }

        ],

        dose: {

            type: "age_based",

            standard: {

                age_1_to_2years: {
                    doseMg: 1,
                    frequency: "Twice daily",
                    maxDoseMgPerDay: 2
                },

                age_2_to_6years: {
                    doseMg: 1,
                    frequency: "Every 4–6 hours",
                    maxDoseMgPerDay: 6
                },

                age_6_to_12years: {
                    doseMg: 2,
                    frequency: "Every 4–6 hours",
                    maxDoseMgPerDay: 12
                },

                age_12years_and_older: {
                    doseMg: 4,
                    frequency: "Every 4–6 hours",
                    maxDoseMgPerDay: 24
                }

            }

        },

        age: {
            minAge: 1,
            maxAge: 18
        },

        indications:
            "التخفيف العرضي من بعض حالات الحساسية مثل seasonal allergy وminor allergic reactions وurticaria.",

        contraindications:
            "فرط الحساسية للدواء. يجب الحذر في glaucoma وurinary retention وبعض الحالات التي تتأثر بمضادات الكولين.",

        warnings:
            "قد يسبب النعاس أو paradoxical excitation عند الأطفال. يجب الحذر عند استخدامه مع CNS depressants.",

        sideEffects:
            "نعاس، جفاف الفم، تشوش الرؤية، إمساك، tachycardia، احتباس البول، صداع أو excitation.",

        notes:
            "استخدمه لأقصر مدة ممكنة حسب الاستجابة. يجب الانتباه للمنتجات المركبة التي تحتوي decongestants أو antitussives.",

        monitoring: [
            "النعاس أو excitation.",
            "الأعراض anticholinergic.",
            "الاستجابة للحساسية."
        ],

        alerts: [
            "لا تتجاوز الحد الأقصى اليومي.",
            "تجنب الجمع غير الضروري مع CNS depressants.",
            "بعض المنتجات المركبة غير مناسبة للأطفال الصغار.",
            "تأكد من أن المنتج يحتوي chlorpheniramine وحده عند استخدام هذه الداتا."
        ],

        source:
            "WHO Essential Drugs / Pediatric guidance - Chlorpheniramine 2 mg/5 mL Oral Solution."
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
    "Antihistamines Loaded:",
    Object.keys(antihistamineDrugs)
);
