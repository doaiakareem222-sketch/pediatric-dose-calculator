// ======================================================
// DoseCare AI
// ANTIBIOTICS DATABASE — Pediatric Oral Liquids
// Clean standardized version
// ======================================================
// IMPORTANT:
// - All entries are oral liquid formulations only.
// - Dose calculations are based on the active component
//   specified in each drug's dose object.
// - mL conversion must use the selected strength.
// - Verify the final regimen against the current local
//   guideline / official product label before clinical use.
// ======================================================

const antibioticsDatabase = {

    // ==================================================
    // 1. AMOXICILLIN
    // ==================================================
    amoxicillin: {
        id: "amoxicillin",
        name: "Amoxicillin",
        genericName: "Amoxicillin",
        brandNames: ["Amoxil", "Moxatag"],
        category: "Antibiotic",
        therapeuticClass: "Penicillin Antibiotic",
        pharmacologicalClass: "Aminopenicillin",
        diseases: [
            "otitis",
            "sinusitis",
            "pneumonia",
            "pharyngitis",
            "uti"
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
            },
            {
                name: "400 mg / 5 mL",
                concentration: 400,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {
            type: "disease_based",

            standard: {
                mildModerateMgPerKgPerDay: 25,
                severeMgPerKgPerDay: 45,
                frequency: "Every 12 hours",
                alternativeFrequency: "Every 8 hours",
                maxWeightForPediatricRegimenKg: 40
            },

            neonates: {
                maxMgPerKgPerDay: 30,
                frequency: "Every 12 hours",
                age: "≤12 weeks"
            }
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "Susceptible bacterial infections including selected respiratory, ENT, skin and urinary infections.",

        contraindications:
            "Serious hypersensitivity to amoxicillin, penicillins or relevant beta-lactams.",

        warnings:
            "Use cautiously in severe beta-lactam allergy history and renal impairment. Antibiotics should be used only when bacterial infection is suspected or confirmed.",

        sideEffects:
            "Diarrhea, nausea, vomiting, abdominal discomfort, rash and hypersensitivity reactions.",

        notes:
            "Shake suspension well before use. Dose is expressed as amoxicillin component.",

        monitoring: [
            "Clinical response",
            "Allergic reactions",
            "Renal function when clinically indicated"
        ],

        alerts: [
            "Do not use for viral infections.",
            "Check concentration before converting mg to mL.",
            "Streptococcal pharyngitis generally requires an adequate treatment duration."
        ],

        source:
            "DailyMed/FDA: Amoxicillin for Oral Suspension."
    },


    // ==================================================
    // 2. AMOXICILLIN + CLAVULANATE
    // ==================================================
    amoxicillin_clavulanate: {

        id: "amoxicillin_clavulanate",

        name: "Amoxicillin + Clavulanate",

        genericName:
            "Amoxicillin + Clavulanate Potassium",

        brandNames: [
            "Augmentin",
            "Augmentin ES-600"
        ],

        category: "Antibiotic",

        therapeuticClass:
            "Penicillin + Beta-lactamase Inhibitor",

        pharmacologicalClass:
            "Aminopenicillin + Beta-lactamase Inhibitor",

        diseases: [
            "otitis",
            "sinusitis",
            "pneumonia",
            "skin",
            "uti"
        ],

        dosageForm: "Oral Suspension",
        route: "Oral",

        strengths: [

            {
                name: "200 mg / 28.5 mg per 5 mL",
                concentration: 200,
                clavulanate: 28.5,
                volume: 5,
                unit: "mg/5mL",
                doseComponent: "amoxicillin"
            },

            {
                name: "400 mg / 57 mg per 5 mL",
                concentration: 400,
                clavulanate: 57,
                volume: 5,
                unit: "mg/5mL",
                doseComponent: "amoxicillin"
            },

            {
                name: "600 mg / 42.9 mg per 5 mL",
                concentration: 600,
                clavulanate: 42.9,
                volume: 5,
                unit: "mg/5mL",
                doseComponent: "amoxicillin"
            }
        ],

        dose: {

            type: "component_based",

            component: "amoxicillin",

            standard: {
                minMgPerKgPerDay: 25,
                maxMgPerKgPerDay: 45,
                frequency: "Every 12 hours"
            },

            highDose: {
                mgPerKgPerDay: 90,
                frequency: "Every 12 hours",
                formulation: "600 mg/42.9 mg per 5 mL",
                age: "3 months to 12 years",
                maxWeightKg: 40
            }
        },

        age: {
            minAge: 0.25,
            maxAge: 18
        },

        indications:
            "Selected bacterial infections including acute otitis media, bacterial sinusitis, lower respiratory, skin/soft tissue and urinary infections.",

        contraindications:
            "Serious beta-lactam hypersensitivity or previous cholestatic jaundice/hepatic dysfunction associated with this drug.",

        warnings:
            "Different suspension strengths are not automatically interchangeable because the clavulanate amount differs. Dose is based on the amoxicillin component.",

        sideEffects:
            "Diarrhea, nausea, vomiting, abdominal discomfort, rash and hypersensitivity reactions.",

        notes:
            "Give at the start of a meal to improve clavulanate absorption and reduce GI intolerance. Shake well.",

        monitoring: [
            "Clinical response",
            "Allergy",
            "Liver function when indicated",
            "Renal function when indicated"
        ],

        alerts: [
            "Always identify the exact amoxicillin/clavulanate strength.",
            "Do not substitute formulations milligram-for-milligram.",
            "Convert mg to mL using the amoxicillin concentration."
        ],

        source:
            "DailyMed/FDA: Amoxicillin and Clavulanate Potassium for Oral Suspension."
    },


    // ==================================================
    // 3. PENICILLIN V
    // ==================================================
    penicillin_v: {

        id: "penicillin_v",

        name: "Penicillin V",

        genericName: "Penicillin V Potassium",

        brandNames: [
            "Pen-Vee K"
        ],

        category: "Antibiotic",

        therapeuticClass:
            "Penicillin Antibiotic",

        pharmacologicalClass:
            "Natural Penicillin",

        diseases: [
            "pharyngitis"
        ],

        dosageForm: "Oral Solution",
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

            pharyngitis: {
                mgPerKgPerDay: 25,
                frequency: "Divided doses",
                duration: "10 days"
            }
        },

        age: {
            minAge: 0,
            maxAge: 18
        },

        indications:
            "Selected susceptible streptococcal and other penicillin-sensitive infections, especially streptococcal pharyngitis.",

        contraindications:
            "Known serious hypersensitivity to penicillin.",

        warnings:
            "Dose depends on organism, infection severity and clinical response.",

        sideEffects:
            "Nausea, diarrhea, abdominal discomfort, rash and hypersensitivity reactions.",

        notes:
            "Oral solution must be shaken well. Reconstituted solution requires storage according to the product label.",

        monitoring: [
            "Clinical response",
            "Allergic reactions"
        ],

        alerts: [
            "Do not use for viral sore throat.",
            "Streptococcal pharyngitis requires an adequate treatment duration."
        ],

        source:
            "DailyMed/FDA: Penicillin V Potassium for Oral Solution."
    },


    // ==================================================
    // 4. CEPHALEXIN
    // ==================================================
    cephalexin: {

        id: "cephalexin",

        name: "Cephalexin",

        genericName: "Cephalexin",

        brandNames: [
            "Keflex"
        ],

        category: "Antibiotic",

        therapeuticClass:
            "Cephalosporin Antibiotic",

        pharmacologicalClass:
            "First Generation Cephalosporin",

        diseases: [
            "otitis",
            "pharyngitis",
            "skin",
            "uti"
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
                minMgPerKgPerDay: 25,
                maxMgPerKgPerDay: 50,
                frequency: "Divided doses",
                duration: "7–14 days"
            },

            otitis: {
                minMgPerKgPerDay: 75,
                maxMgPerKgPerDay: 100,
                frequency: "Divided doses every 6 hours"
            },

            severe: {
                minMgPerKgPerDay: 50,
                maxMgPerKgPerDay: 100,
                frequency: "Divided doses"
            }
        },

        age: {
            minAge: 1,
            maxAge: 18
        },

        indications:
            "Susceptible skin/soft-tissue infections, streptococcal pharyngitis, selected urinary infections and other susceptible bacterial infections.",

        contraindications:
            "Known hypersensitivity to cephalexin or cephalosporins.",

        warnings:
            "Use caution with significant beta-lactam allergy and renal impairment.",

        sideEffects:
            "Diarrhea, nausea, vomiting, abdominal pain, rash and hypersensitivity.",

        notes:
            "Shake suspension well before each dose.",

        monitoring: [
            "Clinical response",
            "Allergy",
            "Renal function when indicated"
        ],

        alerts: [
            "Check concentration before mL conversion.",
            "Do not use for viral infections.",
            "Dose may require adjustment in renal impairment."
        ],

        source:
            "DailyMed/FDA: Cephalexin for Oral Suspension."
    },


    // ==================================================
    // 5. CEFACLOR
    // ==================================================
    cefaclor: {

        id: "cefaclor",

        name: "Cefaclor",

        genericName: "Cefaclor",

        brandNames: [
            "Ceclor"
        ],

        category: "Antibiotic",

        therapeuticClass:
            "Cephalosporin Antibiotic",

        pharmacologicalClass:
            "Second Generation Cephalosporin",

        diseases: [
            "otitis",
            "pharyngitis",
            "skin",
            "uti"
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
            },
            {
                name: "375 mg / 5 mL",
                concentration: 375,
                volume: 5,
                unit: "mg/5mL"
            }
        ],

        dose: {

            type: "standard_pediatric",

            mgPerKgPerDay: 20,

            frequency: "Every 8 hours",

            maxDoseMgPerDay: 1000
        },

        age: {
            minAge: 1,
            maxAge: 18
        },

        indications:
            "Selected susceptible respiratory, otitis media, skin/soft tissue and urinary bacterial infections.",

        contraindications:
            "Known hypersensitivity to cefaclor or cephalosporins.",

        warnings:
            "Use cautiously in patients with beta-lactam allergy or renal impairment.",

        sideEffects:
            "Diarrhea, nausea, vomiting, abdominal discomfort and rash.",

        notes:
            "Shake suspension well before administration.",

        monitoring: [
            "Clinical response",
            "Allergic reactions",
            "Renal function when indicated"
        ],

        alerts: [
            "Check the selected strength before converting mg to mL.",
            "Do not use for viral infections."
        ],

        source:
            "DailyMed/FDA: Cefaclor Oral Suspension."
    },


    // ==================================================
    // 6. CEFUROXIME
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

        therapeuticClass:
            "Cephalosporin Antibiotic",

        pharmacologicalClass:
            "Second Generation Cephalosporin",

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
            "Otitis media, pharyngitis/tonsillitis, bacterial sinusitis and selected skin/soft-tissue infections.",

        contraindications:
            "Serious hypersensitivity to cefuroxime, cephalosporins or relevant beta-lactams.",

        warnings:
            "Use caution in severe penicillin allergy and renal impairment. Oral suspension and tablets are not necessarily interchangeable milligram-for-milligram.",

        sideEffects:
            "Diarrhea, nausea, vomiting, abdominal pain, rash and hypersensitivity.",

        notes:
            "Shake well before use. Administer with food according to the product labeling.",

        monitoring: [
            "Clinical response",
            "Allergic reactions",
            "Renal function when indicated"
        ],

        alerts: [
            "Shake the suspension well.",
            "Give with food.",
            "Check the exact formulation before calculating mL."
        ],

        source:
            "DailyMed/FDA: Cefuroxime Axetil Oral Suspension."
    }
 // ======================================================
// DoseCare AI v7
// Additional Antibiotics Database - Part 3
// Pediatric Oral Liquids
// ======================================================

const additionalAntibioticDrugsPart3 = {

    // ==================================================
    // 7. CEFIXIME
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

        therapeuticClass:
            "Cephalosporin Antibiotic",

        pharmacologicalClass:
            "Third Generation Cephalosporin",

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

            type: "weight_based",

            mgPerKgPerDay: 8,

            alternatives: [

                "8 mg/kg once daily",

                "4 mg/kg every 12 hours"

            ],

            maxDoseMgPerDay: 400,

            duration:

                "حسب نوع العدوى؛ Streptococcus pyogenes requires at least 10 days"

        },

        age: {

            minAge: 0.5,

            maxAge: 12

        },

        indications:

            "Uncomplicated urinary tract infections, acute otitis media, and pharyngitis/tonsillitis caused by susceptible bacteria.",

        contraindications:

            "Known hypersensitivity to cefixime or other cephalosporin antibiotics.",

        warnings:

            "Use cautiously in patients with severe beta-lactam allergy or renal impairment. The dose in mL must always be interpreted together with the suspension concentration.",

        sideEffects:

            "Diarrhea, nausea, abdominal pain, vomiting, dyspepsia, and skin rash. Serious hypersensitivity reactions and C. difficile-associated diarrhea may occur.",

        pregnancy:

            "Use only when clinically indicated and according to professional medical advice.",

        lactation:

            "Cefixime is generally considered compatible with breastfeeding; monitor the infant for gastrointestinal effects or rash.",

        notes:

            "Available oral suspension concentrations differ by product. Always verify the concentration before converting mg to mL.",

        monitoring: [

            "Clinical response to treatment.",

            "Signs of hypersensitivity.",

            "Renal function when clinically indicated.",

            "Persistent or severe diarrhea."

        ],

        interactions:

            "Check for clinically relevant interactions and anticoagulant effects when used with warfarin or other anticoagulants.",

        clinicalPearls:

            "For pediatric patients 6 months and older, the labeled dose is 8 mg/kg/day, given once daily or divided every 12 hours.",

        alerts: [

            "Minimum labeled pediatric age is 6 months.",

            "Always verify the suspension concentration before calculating mL.",

            "Do not use antibiotics for viral infections.",

            "Streptococcal pharyngitis requires an adequate treatment duration."

        ],

        blackBox:

            "No boxed warning in the current DailyMed labeling.",

        storage:

            "Store the reconstituted suspension according to the specific manufacturer's labeling.",

        metabolism:

            "Cefixime undergoes limited metabolism.",

        elimination:

            "Primarily eliminated through the kidneys.",

        onset:

            "Clinical improvement is generally expected after effective antibacterial therapy is initiated.",

        duration:

            "Depends on the indication and clinical response.",

        halfLife:

            "Approximately 3–4 hours.",

        proteinBinding:

            "Approximately 65%.",

        source:

            "FDA/DailyMed Cefixime for Oral Suspension."

    },


    // ==================================================
    // 8. CEFDINIR
    // ==================================================

    cefdinir: {

        id: "cefdinir",

        name: "Cefdinir",

        genericName: "Cefdinir",

        brandNames: [

            "Omnicef"

        ],

        category: "Antibiotic",

        therapeuticClass:

            "Cephalosporin Antibiotic",

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

            type: "weight_based",

            mgPerKgPerDay: 14,

            alternatives: [

                "7 mg/kg every 12 hours",

                "14 mg/kg once daily"

            ],

            maxDoseMgPerDay: 600,

            duration: "5–10 days depending on indication"

        },

        age: {

            minAge: 0.5,

            maxAge: 12

        },

        indications:

            "Acute bacterial otitis media, acute maxillary sinusitis, pharyngitis/tonsillitis, and uncomplicated skin and skin structure infections caused by susceptible organisms.",

        contraindications:

            "Known hypersensitivity to cefdinir or cephalosporin antibiotics.",

        warnings:

            "Use cautiously in patients with beta-lactam hypersensitivity or renal impairment. Iron-containing products may reduce cefdinir absorption.",

        sideEffects:

            "Diarrhea, nausea, abdominal pain, vomiting, headache, and rash.",

        pregnancy:

            "Use when clinically indicated after professional assessment.",

        lactation:

            "Use with clinical consideration; monitor the infant for diarrhea or candidiasis.",

        notes:

            "Cefdinir suspension may be administered without regard to meals. Iron-containing products should be separated because of reduced absorption.",

        monitoring: [

            "Clinical response.",

            "Hypersensitivity reactions.",

            "Renal function when indicated.",

            "Persistent diarrhea."

        ],

        interactions:

            "Iron-containing products and antacids containing aluminum or magnesium can reduce cefdinir absorption.",

        clinicalPearls:

            "The labeled pediatric total daily dose is 14 mg/kg/day, with a maximum of 600 mg/day.",

        alerts: [

            "Maximum pediatric dose is 600 mg/day.",

            "Check concentration before converting mg to mL.",

            "Separate from iron-containing products when appropriate.",

            "Do not use for viral infections."

        ],

        blackBox:

            "No boxed warning in current DailyMed labeling.",

        storage:

            "Store reconstituted suspension according to the manufacturer's labeling.",

        metabolism:

            "Limited metabolism.",

        elimination:

            "Primarily eliminated through the kidneys.",

        onset:

            "Clinical response usually develops after effective antibacterial therapy begins.",

        duration:

            "Usually 5–10 days depending on indication.",

        halfLife:

            "Approximately 1.7 hours in pediatric patients.",

        proteinBinding:

            "Approximately 60–70%.",

        source:

            "FDA/DailyMed Cefdinir for Oral Suspension."

    },


    // ==================================================
    // 9. CEFPODOXIME
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

        therapeuticClass:

            "Cephalosporin Antibiotic",

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

            type: "weight_based",

            mgPerKgPerDay: 10,

            frequency: "Every 12 hours",

            maxDoseMgPerDay: 400,

            duration: "Usually 5–10 days depending on indication"

        },

        age: {

            minAge: 0.0833,

            maxAge: 12

        },

        indications:

            "Selected bacterial infections including acute otitis media, pharyngitis/tonsillitis, and acute maxillary sinusitis in appropriate pediatric patients.",

        contraindications:

            "Known hypersensitivity to cefpodoxime, cephalosporins, or severe beta-lactam allergy.",

        warnings:

            "Use cautiously in patients with renal impairment or previous serious beta-lactam hypersensitivity. Food increases absorption of cefpodoxime proxetil.",

        sideEffects:

            "Diarrhea, nausea, vomiting, abdominal pain, headache, and rash.",

        pregnancy:

            "Use only when clinically indicated.",

        lactation:

            "Use with clinical consideration; monitor the infant for gastrointestinal effects.",

        notes:

            "Administer with food to improve absorption. Dose must be based on cefpodoxime component.",

        monitoring: [

            "Clinical response.",

            "Signs of hypersensitivity.",

            "Renal function when indicated.",

            "Persistent diarrhea."

        ],

        interactions:

            "Antacids and H2-receptor antagonists may reduce absorption by increasing gastric pH.",

        clinicalPearls:

            "Pediatric dosing is commonly expressed as 10 mg/kg/day divided every 12 hours, with indication-specific maximum doses.",

        alerts: [

            "Give with food.",

            "Check suspension concentration before calculating mL.",

            "Review renal function when clinically indicated.",

            "Avoid unnecessary antibiotic use."

        ],

        blackBox:

            "No boxed warning in current labeling.",

        storage:

            "Store reconstituted suspension according to the manufacturer's instructions.",

        metabolism:

            "Cefpodoxime proxetil is converted to the active cefpodoxime after absorption.",

        elimination:

            "Primarily renal elimination.",

        onset:

            "Clinical improvement generally follows effective antibacterial therapy.",

        duration:

            "Depends on infection and clinical response.",

        halfLife:

            "Approximately 2–3 hours.",

        proteinBinding:

            "Approximately 22–33%.",

        source:

            "FDA/DailyMed Cefpodoxime Proxetil for Oral Suspension."

    },


    // ==================================================
    // 10. AZITHROMYCIN
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

        therapeuticClass:

            "Macrolide Antibiotic",

        pharmacologicalClass:

            "Azalide Macrolide",

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

            "Selected bacterial respiratory infections, acute otitis media, and other susceptible infections according to the specific regimen and local guidance.",

        contraindications:

            "Known hypersensitivity to azithromycin, erythromycin, or macrolide antibiotics; history of cholestatic jaundice/hepatic dysfunction associated with previous azithromycin use.",

        warnings:

            "May prolong QT and increase risk of serious arrhythmias in susceptible patients. Hepatotoxicity and C. difficile-associated diarrhea are possible.",

        sideEffects:

            "Diarrhea, nausea, abdominal pain, vomiting, headache, and rarely hepatic or cardiac adverse effects.",

        pregnancy:

            "Use when clinically indicated after professional assessment.",

        lactation:

            "Generally considered compatible with breastfeeding; monitor infant for gastrointestinal effects.",

        notes:

            "May be administered with or without food depending on formulation.",

        monitoring: [

            "Clinical response.",

            "Hepatic symptoms when clinically indicated.",

            "QT risk factors in susceptible patients.",

            "Persistent diarrhea."

        ],

        interactions:

            "Review other QT-prolonging medicines and clinically important drug interactions.",

        clinicalPearls:

            "Azithromycin dosing varies considerably by indication. Do not use one regimen for every infection.",

        alerts: [

            "Do not use for viral infections.",

            "Review QT-prolongation risk.",

            "Choose the regimen according to the confirmed indication.",

            "Verify the suspension concentration before calculating mL."

        ],

        blackBox:

            "No boxed warning in current U.S. labeling.",

        storage:

            "Follow the specific manufacturer's storage instructions after reconstitution.",

        metabolism:

            "Hepatic metabolism is limited; azithromycin is extensively distributed into tissues.",

        elimination:

            "Primarily eliminated through biliary/fecal pathways.",

        onset:

            "Clinical improvement depends on infection and susceptibility.",

        duration:

            "Usually short-course therapy depending on indication.",

        halfLife:

            "Approximately 68 hours.",

        proteinBinding:

            "Approximately 7–51%, depending on concentration.",

        source:

            "FDA/DailyMed Azithromycin Oral Suspension."

    },


    // ==================================================
    // 11. CLARITHROMYCIN
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

        therapeuticClass:

            "Macrolide Antibiotic",

        pharmacologicalClass:

            "Macrolide",

        diseases: [

            "pharyngitis",
            "pneumonia",
            "respiratory_infection"

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

            type: "weight_based",

            mgPerKgPerDay: 15,

            frequency: "Every 12 hours",

            maxDoseMgPerDay: 1000,

            duration: "10 days"

        },

        age: {

            minAge: 0.5,

            maxAge: 18

        },

        indications:

            "Selected bacterial respiratory infections and other susceptible infections according to the specific clinical indication.",

        contraindications:

            "Known hypersensitivity to clarithromycin or macrolides; contraindicated with certain interacting drugs and in specific QT-risk situations.",

        warnings:

            "Strong CYP3A4 inhibitor. Can cause significant drug interactions, QT prolongation, hepatotoxicity, and C. difficile-associated diarrhea.",

        sideEffects:

            "Nausea, vomiting, diarrhea, abdominal pain, dysgeusia, headache, and hepatic or cardiac adverse effects.",

        pregnancy:

            "Use only when the expected benefit justifies potential risk.",

        lactation:

            "Use with clinical consideration and monitor the infant for gastrointestinal effects.",

        notes:

            "May be administered with or without food. Shake the suspension well before each dose.",

        monitoring: [

            "Clinical response.",

            "Drug interactions.",

            "Liver function when indicated.",

            "QT risk.",

            "Persistent diarrhea."

        ],

        interactions:

            "Major CYP3A4-mediated interactions may occur. Review all concomitant medications before use.",

        clinicalPearls:

            "The labeled pediatric dose for many indications is 15 mg/kg/day divided every 12 hours for 10 days, up to the adult dose.",

        alerts: [

            "Check CYP3A4 interactions.",

            "Review QT-prolonging drugs.",

            "Verify concentration before calculating mL.",

            "Do not use for viral infections."

        ],

        blackBox:

            "No boxed warning in current U.S. labeling.",

        storage:

            "Store reconstituted suspension according to product labeling.",

        metabolism:

            "Extensively metabolized in the liver, mainly via CYP3A4.",

        elimination:

            "Eliminated through hepatic metabolism and renal/fecal routes.",

        onset:

            "Clinical response depends on infection and bacterial susceptibility.",

        duration:

            "Usually 7–14 days depending on indication; product labeling specifies regimen-specific durations.",

        halfLife:

            "Approximately 3–7 hours depending on dose and formulation.",

        proteinBinding:

            "Approximately 42–70%.",

        source:

            "FDA/DailyMed Clarithromycin for Oral Suspension."

    },


    // ==================================================
    // 12. ERYTHROMYCIN
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

            severeMultiplier: 2

        },

        age: {

            minAge: 0,

            maxAge: 18

        },

        indications:

            "Selected bacterial respiratory infections, streptococcal infections, pertussis, and other susceptible infections.",

        contraindications:

            "Known hypersensitivity to erythromycin. Avoid clinically significant interacting combinations and use caution in patients with QT prolongation.",

        warnings:

            "Can prolong QT and cause serious drug interactions. Hepatotoxicity and gastrointestinal intolerance may occur.",

        sideEffects:

            "Nausea, vomiting, abdominal pain, diarrhea, and rarely hepatic or cardiac adverse effects.",

        pregnancy:

            "Use when clinically indicated after risk-benefit assessment.",

        lactation:

            "Generally compatible with breastfeeding in appropriate clinical use; monitor infant for gastrointestinal effects.",

        notes:

            "Dose depends on age, weight, severity, and infection. The ethylsuccinate formulation can be administered according to product-specific instructions.",

        monitoring: [

            "Clinical response.",

            "GI tolerance.",

            "Liver function when indicated.",

            "QT risk and interactions."

        ],

        interactions:

            "Erythromycin is a clinically important CYP3A4 inhibitor and can interact with numerous medications.",

        clinicalPearls:

            "For mild-to-moderate pediatric infections, the usual labeled dosage is 30–50 mg/kg/day divided every 6 hours.",

        alerts: [

            "Check QT-prolonging medications.",

            "Review CYP3A4 interactions.",

            "Verify the exact formulation and concentration.",

            "Do not use for viral infections."

        ],

        blackBox:

            "No boxed warning in current U.S. labeling.",

        storage:

            "Follow manufacturer-specific storage instructions for the reconstituted suspension.",

        metabolism:

            "Extensively metabolized in the liver.",

        elimination:

            "Primarily biliary/fecal elimination with some renal elimination.",

        onset:

            "Clinical response depends on infection and susceptibility.",

        duration:

            "Depends on the infection and treatment protocol.",

        halfLife:

            "Approximately 1.5–2 hours for erythromycin base; formulation dependent.",

        proteinBinding:

            "Approximately 70–90%.",

        source:

            "FDA/DailyMed Erythromycin Ethylsuccinate for Oral Suspension."

    },


    // ==================================================
    // 13. CLINDAMYCIN
    // ==================================================

    clindamycin: {

        id: "clindamycin",

        name: "Clindamycin",

        genericName: "Clindamycin Palmitate Hydrochloride",

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

            "Serious bacterial infections caused by susceptible organisms, including selected skin/soft tissue, dental, and anaerobic infections.",

        contraindications:

            "Known hypersensitivity to clindamycin or lincomycin.",

        warnings:

            "Clindamycin carries a major risk of antibiotic-associated diarrhea and C. difficile-associated colitis, which may be severe.",

        sideEffects:

            "Diarrhea, abdominal pain, nausea, vomiting, rash, and rarely severe C. difficile-associated colitis.",

        pregnancy:

            "Use when clinically indicated.",

        lactation:

            "Clindamycin can be used when indicated; monitor the infant for diarrhea, candidiasis, or blood in stool.",

        notes:

            "Significant diarrhea during therapy requires prompt clinical assessment and discontinuation when appropriate.",

        monitoring: [

            "Clinical response.",

            "Frequency and severity of diarrhea.",

            "Signs of C. difficile infection.",

            "Hepatic/renal status when clinically indicated."

        ],

        interactions:

            "May interact with neuromuscular blocking agents. Review concomitant medicines for clinically important interactions.",

        clinicalPearls:

            "Pediatric oral dosing is based on total body weight and infection severity, with labeled ranges of 8–25 mg/kg/day divided into 3 or 4 doses.",

        alerts: [

            "STOP and evaluate significant diarrhea.",

            "Consider C. difficile with severe or persistent diarrhea.",

            "Dose according to infection severity.",

            "Verify concentration before calculating mL."

        ],

        blackBox:

            "Boxed warning: Clindamycin can cause severe colitis that may be fatal.",

        storage:

            "Store according to the manufacturer's labeling.",

        metabolism:

            "Hepatically metabolized.",

        elimination:

            "Eliminated through hepatic metabolism with urinary and fecal excretion.",

        onset:

            "Clinical response depends on infection and susceptibility.",

        duration:

            "Usually determined by infection severity and clinical response.",

        halfLife:

            "Approximately 2–4 hours in pediatric patients.",

        proteinBinding:

            "Approximately 90%.",

        source:

            "FDA/DailyMed Clindamycin Palmitate Hydrochloride Oral Solution."

    },


    // ==================================================
    // 14. CO-TRIMOXAZOLE
    // ==================================================

    co_trimoxazole: {

        id: "co_trimoxazole",

        name: "Co-trimoxazole",

        genericName:
            "Trimethoprim + Sulfamethoxazole",

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
                name:
                    "40 mg Trimethoprim + 200 mg Sulfamethoxazole / 5 mL",

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

            "Selected urinary tract infections, otitis media, shigellosis, and other susceptible bacterial infections according to local susceptibility and clinical guidance.",

        contraindications:

            "Contraindicated in infants younger than 2 months and in patients with severe hypersensitivity to sulfonamides or trimethoprim.",

        warnings:

            "May cause serious skin reactions, blood dyscrasias, hyperkalemia, and renal adverse effects. Use caution in renal impairment.",

        sideEffects:

            "Nausea, vomiting, diarrhea, rash, hyperkalemia, photosensitivity, and hematologic abnormalities.",

        pregnancy:

            "Avoid when possible, particularly near term, unless clearly indicated by the treating clinician.",

        lactation:

            "Clinical consideration is required, especially in premature infants, newborns, or infants with hyperbilirubinemia or G6PD deficiency.",

        notes:

            "Pediatric dosing is based on the trimethoprim component while accounting for the sulfamethoxazole component.",

        monitoring: [

            "Clinical response.",

            "Renal function when indicated.",

            "Potassium in patients at risk.",

            "CBC during prolonged therapy.",

            "Skin reactions."

        ],

        interactions:

            "May interact with warfarin, ACE inhibitors/ARBs, potassium-sparing medicines, methotrexate, and other clinically important drugs.",

        clinicalPearls:

            "Always calculate using the trimethoprim component while verifying the sulfamethoxazole amount in the selected suspension.",

        alerts: [

            "Contraindicated under 2 months of age.",

            "Stop and seek evaluation for severe rash.",

            "Monitor potassium in high-risk patients.",

            "Check the exact formulation concentration."

        ],

        blackBox:

            "No boxed warning in current U.S. labeling.",

        storage:

            "Store according to manufacturer instructions.",

        metabolism:

            "Both components undergo hepatic metabolism.",

        elimination:

            "Primarily renal elimination of both components and metabolites.",

        onset:

            "Clinical response depends on infection and susceptibility.",

        duration:

            "Depends on the indication.",

        halfLife:

            "Trimethoprim approximately 8–10 hours; sulfamethoxazole approximately 10–13 hours.",

        proteinBinding:

            "Trimethoprim approximately 44%; sulfamethoxazole approximately 70%.",

        source:

            "FDA/DailyMed Sulfamethoxazole and Trimethoprim Oral Suspension."

    },


    // ==================================================
    // 15. METRONIDAZOLE
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

            },

            giardiasis: {

                mgPerKgPerDay: 15,

                frequency: "3 divided doses",

                duration: "5–7 days"

            }

        },

        age: {

            minAge: 0,

            maxAge: 18

        },

        indications:

            "Anaerobic bacterial infections and selected protozoal infections including amebiasis and giardiasis.",

        contraindications:

            "Known hypersensitivity to metronidazole or other nitroimidazole derivatives.",

        warnings:

            "Use cautiously in hepatic impairment and with drugs that have significant interactions. Neurologic toxicity may occur with prolonged therapy.",

        sideEffects:

            "Nausea, vomiting, diarrhea, abdominal discomfort, metallic taste, headache, and rarely peripheral neuropathy or seizures.",

        pregnancy:

            "Use when clinically indicated; treatment decisions should be based on the specific infection and pregnancy stage.",

        lactation:

            "Clinical consideration is required; exposure through breast milk should be considered according to dose and treatment duration.",

        notes:

            "The exact regimen depends strongly on the organism and infection. Some serious anaerobic infections may require intravenous therapy initially.",

        monitoring: [

            "Clinical response.",

            "Liver function in hepatic impairment.",

            "Neurologic symptoms during prolonged therapy.",

            "Drug interactions."

        ],

        interactions:

            "Important interactions include warfarin and other anticoagulants; review concomitant medications carefully.",

        clinicalPearls:

            "Do not use one metronidazole regimen for all infections. The indication determines dose, frequency, and duration.",

        alerts: [

            "Verify the exact indication.",

            "Review drug interactions.",

            "Monitor for neurologic adverse effects with prolonged treatment.",

            "Verify concentration before converting mg to mL."

        ],

        blackBox:

            "No boxed warning in current U.S. labeling.",

        storage:

            "Follow manufacturer-specific storage instructions.",

        metabolism:

            "Extensively metabolized in the liver.",

        elimination:

            "Primarily renal elimination of metabolites with some unchanged drug.",

        onset:

            "Clinical response depends on the underlying infection.",

        duration:

            "Depends on infection and clinical response.",

        halfLife:

            "Approximately 8 hours.",

        proteinBinding:

            "Less than 20%.",

        source:

            "FDA/DailyMed Metronidazole Oral Suspension."

    },


    // ==================================================
    // 16. NITROFURANTOIN
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

                "Usually continue according to the prescribed UTI treatment course and clinical response."

        },

        age: {

            minAge: 0.0833,

            maxAge: 18

        },

        indications:

            "Treatment of susceptible bacterial lower urinary tract infections.",

        contraindications:

            "Contraindicated in infants younger than 1 month and in patients with significant renal impairment according to product labeling. Not indicated for pyelonephritis or perinephric abscess.",

        warnings:

            "Administer with food to improve absorption and tolerance. Serious pulmonary, hepatic, neurologic, and hematologic reactions can occur, especially with prolonged use.",

        sideEffects:

            "Nausea, vomiting, abdominal discomfort, headache, and rare pulmonary, hepatic, neurologic, or hematologic toxicity.",

        pregnancy:

            "Use only when clinically indicated. Avoid near term according to product labeling because of potential neonatal hemolysis.",

        lactation:

            "Use with caution in infants with G6PD deficiency and in very young infants.",

        notes:

            "Nitrofurantoin is intended for lower UTI and should not be used to treat pyelonephritis because adequate renal tissue concentrations are not achieved.",

        monitoring: [

            "Clinical response to UTI treatment.",

            "Renal function when indicated.",

            "Pulmonary symptoms during prolonged treatment.",

            "Hepatic symptoms during prolonged treatment.",

            "Neurologic symptoms during prolonged treatment."

        ],

        interactions:

            "Antacids containing magnesium trisilicate may reduce absorption. Probenecid and other drugs affecting renal tubular secretion may alter nitrofurantoin exposure.",

        clinicalPearls:

            "For pediatric patients ≥1 month, the labeled dose is 5–7 mg/kg/day divided into four doses. The official label provides weight-based mL tables for 25 mg/5 mL and 50 mg/5 mL suspensions.",

        alerts: [

            "Minimum labeled pediatric age is 1 month.",

            "Give with food.",

            "Do NOT use for pyelonephritis.",

            "Verify renal function when clinically indicated.",

            "Use an oral syringe for accurate mL measurement."

        ],

        blackBox:

            "No boxed warning in current U.S. labeling.",

        storage:

            "Store according to the manufacturer's labeling.",

        metabolism:

            "Partially metabolized; exact pathways vary by formulation.",

        elimination:

            "Primarily eliminated through the kidneys.",

        onset:

            "Clinical improvement depends on bacterial susceptibility and infection severity.",

        duration:

            "Depends on UTI treatment protocol and clinical response.",

        halfLife:

            "Approximately 20 minutes.",

        proteinBinding:

            "Approximately 20–60%.",

        source:

            "FDA/DailyMed Nitrofurantoin Oral Suspension."

    }

};


// ======================================================
// Register Additional Antibiotics - Part 3
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(additionalAntibioticDrugsPart3);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}


// ======================================================
// Debug
// ======================================================

console.log(
    "Additional Antibiotics Part 3 Loaded:",
    Object.keys(additionalAntibioticDrugsPart3)
);
