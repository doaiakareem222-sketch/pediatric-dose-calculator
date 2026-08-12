// ======================================================
// DoseCare AI v7
// Antifungal Database
// Pediatric Oral Liquids
// ======================================================

const antifungalDrugs = {

    // ==================================================
    // 1. NYSTATIN
    // ==================================================

    nystatin: {

        id: "nystatin",

        name: "Nystatin",

        genericName: "Nystatin",

        brandNames: [
            "Mycostatin",
            "Nystan"
        ],

        category: "Antifungal",

        therapeuticClass:
            "Polyene Antifungal",

        pharmacologicalClass:
            "Polyenes",

        diseases: [
            "oral_candidiasis"
        ],

        dosageForm:
            "Oral Suspension",

        route:
            "Oral",

        strengths: [

            {
                name: "100,000 units / mL",

                concentration: 100000,

                volume: 1,

                unit: "units/mL"
            }

        ],

        dose: {

            type: "fixed_dose",

            infant: {

                doseMl: 2,

                doseUnits: 200000,

                frequency: "4 times daily",

                duration:
                    "Continue for at least 48 hours after symptoms disappear and clinical/mycological eradication is achieved."
            },

            children: {

                doseMl: 4,

                doseUnits: 400000,

                frequency: "4 times daily",

                duration:
                    "Continue according to clinical response and product labeling."
            },

            adults: {

                doseMl: 6,

                doseUnits: 600000,

                frequency: "4 times daily",

                duration:
                    "According to clinical response."
            }
        },

        age: {

            minAge: 0,

            maxAge: 18
        },

        indications:

            "Treatment of oral candidiasis (thrush) caused by susceptible Candida species.",

        contraindications:

            "Hypersensitivity to nystatin or any component of the formulation.",

        warnings:

            "Nystatin oral suspension has negligible gastrointestinal absorption. It is intended for local treatment of oral candidiasis and is not appropriate for systemic fungal infections.",

        sideEffects:

            "Nausea, vomiting, diarrhea, gastrointestinal discomfort and oral irritation may occur. Hypersensitivity reactions are uncommon.",

        notes:

            "Shake well before use. In infants and young children, divide the dose between both sides of the mouth and retain the suspension in the mouth as long as possible before swallowing.",

        monitoring: [

            "Clinical response of oral lesions.",

            "Persistence or worsening of oral candidiasis.",

            "Hypersensitivity reactions."
        ],

        alerts: [

            "Use the calibrated oral syringe/dropper when available.",

            "The concentration is expressed in units/mL rather than mg/mL.",

            "Do not convert nystatin units to mg using the standard mg → mL formula.",

            "Nystatin is for local oral treatment and is not a systemic antifungal."
        ],

        source:

            "FDA/DailyMed - Nystatin Oral Suspension USP 100,000 units/mL."
    },


    // ==================================================
    // 2. FLUCONAZOLE
    // ==================================================

    fluconazole: {

        id: "fluconazole",

        name: "Fluconazole",

        genericName: "Fluconazole",

        brandNames: [
            "Diflucan",
            "Fluconazole"
        ],

        category: "Antifungal",

        therapeuticClass:
            "Triazole Antifungal",

        pharmacologicalClass:
            "Triazole",

        diseases: [
            "oral_candidiasis",
            "esophageal_candidiasis",
            "systemic_candida",
            "cryptococcal_meningitis"
        ],

        dosageForm:
            "Oral Suspension",

        route:
            "Oral",

        strengths: [

            {
                name: "10 mg / mL",

                concentration: 10,

                volume: 1,

                unit: "mg/mL"
            },

            {
                name: "40 mg / mL",

                concentration: 40,

                volume: 1,

                unit: "mg/mL"
            }

        ],

        dose: {

            type: "disease_based",

            oral_candidiasis: {

                minAgeMonths: 6,

                day1MgPerKg: 6,

                maintenanceMgPerKg: 3,

                frequency:
                    "Once daily",

                duration:
                    "At least 2 weeks"
            },

            esophageal_candidiasis: {

                minAgeMonths: 6,

                day1MgPerKg: 6,

                maintenanceMgPerKg: 3,

                maxMgPerKgPerDay: 12,

                frequency:
                    "Once daily",

                duration:
                    "Minimum 3 weeks and at least 2 weeks after resolution of symptoms."
            },

            systemic_candida: {

                age3MonthsAndOlder: {

                    loadingMgPerKg: 25,

                    maintenanceMgPerKg: 12,

                    maxLoadingMg: 800,

                    maxMaintenanceMg: 400,

                    frequency:
                        "Once daily after loading dose"
                },

                birthTo3MonthsGA30OrMore: {

                    loadingMgPerKg: 25,

                    maintenanceMgPerKg: 12,

                    frequency:
                        "Once daily after loading dose"
                },

                birthTo3MonthsGALessThan30: {

                    loadingMgPerKg: 25,

                    maintenanceMgPerKg: 9,

                    frequency:
                        "Once daily after loading dose"
                },

                duration:
                    "Minimum 3 weeks and at least 2 weeks after resolution."
            },

            cryptococcal_meningitis: {

                loadingMgPerKg: 12,

                maintenanceMgPerKg: 6,

                alternativeMaintenanceMgPerKg: 12,

                frequency:
                    "Once daily",

                duration:
                    "10–12 weeks after CSF becomes culture negative."
            }
        },

        age: {

            minAge: 0,

            maxAge: 18
        },

        indications:

            "Oropharyngeal and esophageal candidiasis, selected systemic Candida infections, candidemia, and cryptococcal meningitis according to the clinical indication and specialist guidance.",

        contraindications:

            "Hypersensitivity to fluconazole or its excipients. Concomitant use with certain QT-prolonging CYP3A4 substrates such as erythromycin, pimozide, or quinidine is contraindicated according to labeling.",

        warnings:

            "Use with caution in hepatic dysfunction and renal impairment. Fluconazole may cause hepatotoxicity and QT prolongation and has clinically important drug interactions through CYP2C9, CYP2C19 and CYP3A4 inhibition.",

        sideEffects:

            "Nausea, vomiting, abdominal pain, diarrhea, headache and rash. Rare but serious effects include hepatotoxicity, QT prolongation, torsades de pointes and severe cutaneous reactions.",

        notes:

            "May be taken with or without food. Dose selection must be based on the fungal infection and patient age. Pediatric renal impairment may require dose adjustment.",

        monitoring: [

            "Clinical response.",

            "Liver function when clinically indicated.",

            "Renal function when multiple doses are used in patients with renal impairment.",

            "Potential drug interactions.",

            "QT risk in patients with relevant risk factors."
        ],

        alerts: [

            "⚠ Do not use one universal mg/kg dose for all fungal infections.",

            "⚠ The loading and maintenance doses differ according to indication.",

            "⚠ Check renal function when repeated dosing is required.",

            "⚠ Review CYP-mediated drug interactions.",

            "⚠ Confirm the suspension concentration before converting mg to mL."
        ],

        source:

            "FDA/DailyMed - Fluconazole for Oral Suspension USP."
    },


    // ==================================================
    // 3. GRISEOFULVIN
    // ==================================================

    griseofulvin: {

        id: "griseofulvin",

        name: "Griseofulvin",

        genericName: "Griseofulvin Microsize",

        brandNames: [
            "Gris-PEG",
            "Griseofulvin"
        ],

        category: "Antifungal",

        therapeuticClass:
            "Antidermatophyte Antifungal",

        pharmacologicalClass:
            "Fungal Mitotic Inhibitor",

        diseases: [
            "tinea_capitis",
            "tinea_corporis",
            "tinea_cruris",
            "tinea_pedis",
            "tinea_unguium"
        ],

        dosageForm:
            "Oral Suspension",

        route:
            "Oral",

        strengths: [

            {
                name: "125 mg / 5 mL",

                concentration: 125,

                volume: 5,

                unit: "mg/5mL"
            }

        ],

        dose: {

            type: "weight_based",

            pediatric: {

                minAgeYears: 2,

                mgPerKgPerDay: 10,

                frequency:
                    "Once daily or divided doses",

                duration:
                    "Depends on the site of infection and clinical/mycological response."
            },

            weightBasedLabelGuidance: {

                weightRange1: {

                    minLb: 30,

                    maxLb: 50,

                    doseRangeMgPerDay:
                        "125–250 mg/day"
                },

                weightRange2: {

                    minLb: 50,

                    doseRangeMgPerDay:
                        "250–500 mg/day"
                }
            }
        },

        age: {

            minAge: 2,

            maxAge: 18
        },

        indications:

            "Treatment of dermatophyte infections including tinea capitis, tinea corporis, tinea cruris and selected other dermatophyte infections when systemic therapy is appropriate.",

        contraindications:

            "Hypersensitivity to griseofulvin. Avoid use in patients with porphyria or severe hepatocellular failure according to product labeling.",

        warnings:

            "Griseofulvin should be used cautiously in patients with liver disease and may interact with other medicines by inducing hepatic drug-metabolizing enzymes. It does not treat bacterial or yeast infections associated with some dermatophyte infections.",

        sideEffects:

            "Headache, nausea, vomiting, diarrhea, abdominal discomfort, dizziness and skin reactions. Rare serious hepatic or hematologic reactions may occur.",

        notes:

            "Absorption is improved when administered with food, particularly a meal containing fat. Shake the oral suspension well before use.",

        monitoring: [

            "Clinical improvement of the dermatophyte infection.",

            "Treatment duration according to infection site.",

            "Liver function when prolonged treatment or hepatic risk factors are present.",

            "Signs of hypersensitivity or serious skin reactions."
        ],

        alerts: [

            "⚠ The labeled pediatric suspension is for children older than 2 years.",

            "⚠ Do not use griseofulvin for Candida infections.",

            "⚠ Give with food to improve absorption.",

            "⚠ Shake the suspension well before each dose.",

            "⚠ Treatment duration depends strongly on the infection site."
        ],

        source:

            "FDA/DailyMed - Griseofulvin Microsize Oral Suspension 125 mg/5 mL."
    }

};


// ======================================================
// Register Antifungal Database
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(antifungalDrugs);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}


// ======================================================
// Debug
// ======================================================

console.log(
    "Antifungal Drugs Loaded:",
    Object.keys(antifungalDrugs)
);
