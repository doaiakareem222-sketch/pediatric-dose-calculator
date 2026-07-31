adrenaline:{

id:"adrenaline",

name:"Adrenaline",

genericName:"Epinephrine",

brandNames:[
"Adrenaline Injection",
"EpiPen"
],

category:"Emergency",

therapeuticClass:"Sympathomimetic",

pharmacologicalClass:"Alpha & Beta Adrenergic Agonist",

diseases:[
"anaphylaxis",
"cardiacArrest"
],

mgPerKg:0.01,

frequency:"Repeat every 5–15 minutes if needed",

maxDose:0.5,

minAge:0,

maxAge:12,

strengths:[
{
name:"1 mg/mL Injection (1:1000)",
concentration:1
}
],

mechanism:"Stimulates alpha and beta adrenergic receptors causing vasoconstriction and bronchodilation.",

indications:"Anaphylaxis, cardiac arrest.",

contraindications:"None in life-threatening emergencies.",

warnings:"Use correct concentration.",

sideEffects:"Tachycardia, hypertension, tremor.",

pregnancy:"C",

lactation:"Compatible",

doseRange:"0.01 mg/kg IM",

onset:"Immediate",

duration:"10–20 minutes",

halfLife:"2 minutes",

proteinBinding:"Low",

metabolism:"Hepatic",

elimination:"Renal",

storage:"Protect from light.",

monitoring:[
"Blood pressure",
"Heart rate"
],

clinicalPearls:[
"First-line drug for anaphylaxis."
],

interactions:[
"Beta blockers"
],

alerts:[
"Never delay administration in anaphylaxis."
],

blackBox:""

},
diazepam:{

id:"diazepam",

name:"Diazepam",

genericName:"Diazepam",

brandNames:[
"Valium"
],

category:"Emergency",

therapeuticClass:"Benzodiazepine",

pharmacologicalClass:"GABA Agonist",

diseases:[
"seizure"
],

mgPerKg:0.2,

frequency:"Single dose",

maxDose:10,

minAge:0,

maxAge:12,

strengths:[
{
name:"5 mg/mL Injection",
concentration:5
},
{
name:"Rectal Gel",
concentration:5
}
],

mechanism:"Enhances GABA-mediated inhibition.",

indications:"Status epilepticus.",

contraindications:"Myasthenia gravis.",

warnings:"May cause respiratory depression.",

sideEffects:"Drowsiness, hypotension.",

pregnancy:"D",

lactation:"Use with caution",

doseRange:"0.2 mg/kg",

onset:"1–3 minutes IV",

duration:"30–60 minutes",

halfLife:"30 hours",

proteinBinding:"98%",

metabolism:"Hepatic",

elimination:"Renal",

storage:"Room temperature",

monitoring:[
"Respiratory rate"
],

clinicalPearls:[
"Rectal route useful outside hospital."
],

interactions:[
"Opioids"
],

alerts:[
"Monitor airway."
],

blackBox:"Risk of respiratory depression."

},
dextrose:{

id:"dextrose",

name:"Dextrose",

genericName:"Dextrose",

brandNames:[
"Dextrose Injection"
],

category:"Emergency",

therapeuticClass:"Hyperglycemic Agent",

pharmacologicalClass:"Carbohydrate",

diseases:[
"hypoglycemia"
],

mgPerKg:2,

frequency:"Single dose",

maxDose:25,

minAge:0,

maxAge:12,

strengths:[
{
name:"10% Dextrose",
concentration:10
},
{
name:"25% Dextrose",
concentration:25
}
],

mechanism:"Rapidly increases blood glucose.",

indications:"Severe hypoglycemia.",

contraindications:"Hyperglycemia.",

warnings:"Avoid extravasation.",

sideEffects:"Hyperglycemia, phlebitis.",

pregnancy:"Safe",

lactation:"Safe",

doseRange:"2–5 mL/kg (D10)",

onset:"Immediate",

duration:"Variable",

halfLife:"-",

proteinBinding:"0%",

metabolism:"Cellular metabolism",

elimination:"Metabolized",

storage:"Room temperature",

monitoring:[
"Blood glucose"
],

clinicalPearls:[
"D10 is preferred in children."
],

interactions:[
"Insulin"
],

alerts:[
"Recheck glucose after treatment."
],

blackBox:""

}, 
sodiumBicarbonate:{

id:"sodiumBicarbonate",

name:"Sodium Bicarbonate",

genericName:"Sodium Bicarbonate",

brandNames:[
"Sodium Bicarbonate Injection"
],

category:"Emergency",

therapeuticClass:"Alkalinizing Agent",

pharmacologicalClass:"Buffer",

diseases:[
"metabolicAcidosis",
"cardiacArrest"
],

mgPerKg:1,

frequency:"Single dose",

maxDose:50,

minAge:0,

maxAge:12,

strengths:[
{
name:"8.4% Injection",
concentration:84
}
],

mechanism:"Neutralizes excess hydrogen ions and corrects metabolic acidosis.",

indications:"Severe metabolic acidosis, prolonged cardiac arrest.",

contraindications:"Metabolic alkalosis.",

warnings:"Use only when indicated.",

sideEffects:"Hypernatremia, alkalosis.",

pregnancy:"C",

lactation:"Compatible",

doseRange:"1–2 mEq/kg",

onset:"Immediate",

duration:"Variable",

halfLife:"-",

proteinBinding:"0%",

metabolism:"-",

elimination:"Renal",

storage:"Room temperature",

monitoring:[
"Blood gases",
"Electrolytes"
],

clinicalPearls:[
"Routine use in cardiac arrest is not recommended."
],

interactions:[
"Calcium salts"
],

alerts:[
"Use ABG guidance whenever possible."
],

blackBox:"",

references:[
"BNFc 2025",
"PALS Guidelines"
]

},
naloxone:{

id:"naloxone",

name:"Naloxone",

genericName:"Naloxone",

brandNames:[
"Narcan"
],

category:"Emergency",

therapeuticClass:"Opioid Antagonist",

pharmacologicalClass:"Competitive Opioid Receptor Antagonist",

diseases:[
"opioidOverdose"
],

mgPerKg:0.1,

frequency:"Repeat every 2–3 minutes if needed",

maxDose:2,

minAge:0,

maxAge:12,

strengths:[
{
name:"0.4 mg/mL Injection",
concentration:0.4
}
],

mechanism:"Reverses opioid-induced respiratory depression.",

indications:"Opioid overdose.",

contraindications:"Hypersensitivity.",

warnings:"Short duration compared with many opioids.",

sideEffects:"Withdrawal symptoms.",

pregnancy:"B",

lactation:"Compatible",

doseRange:"0.1 mg/kg",

onset:"1–2 minutes",

duration:"30–90 minutes",

halfLife:"60 minutes",

proteinBinding:"45%",

metabolism:"Hepatic",

elimination:"Renal",

storage:"Room temperature",

monitoring:[
"Respiratory status"
],

clinicalPearls:[
"Observe patient for recurrent respiratory depression."
],

interactions:[
"Opioids"
],

alerts:[
"May require repeated doses."
],

blackBox:"",

references:[
"BNFc 2025",
"Lexicomp Pediatric"
]

},
glucagon:{

id:"glucagon",

name:"Glucagon",

genericName:"Glucagon",

brandNames:[
"GlucaGen"
],

category:"Emergency",

therapeuticClass:"Hyperglycemic Agent",

pharmacologicalClass:"Pancreatic Hormone",

diseases:[
"hypoglycemia"
],

mgPerKg:0.03,

frequency:"Single dose",

maxDose:1,

minAge:0,

maxAge:12,

strengths:[
{
name:"1 mg Injection",
concentration:1
}
],

mechanism:"Stimulates hepatic glycogen breakdown.",

indications:"Severe hypoglycemia when IV access unavailable.",

contraindications:"Pheochromocytoma.",

warnings:"Requires adequate glycogen stores.",

sideEffects:"Nausea, vomiting.",

pregnancy:"B",

lactation:"Compatible",

doseRange:"0.03 mg/kg",

onset:"10 minutes",

duration:"20–30 minutes",

halfLife:"8 minutes",

proteinBinding:"0%",

metabolism:"Hepatic",

elimination:"Renal",

storage:"Refrigerated before reconstitution.",

monitoring:[
"Blood glucose"
],

clinicalPearls:[
"Give oral carbohydrate once patient regains consciousness."
],

interactions:[
"Warfarin"
],

alerts:[
"Less effective in malnourished children."
],

blackBox:"",

references:[
"BNFc 2025",
"AAP Pediatric Emergency"
]

},
