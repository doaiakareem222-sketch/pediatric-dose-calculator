const drugs = {

paracetamol:{

name:"Paracetamol",

category:"Pain & Fever",

indication:"Pain, Fever",

mgPerKg:15,

frequency:"كل 4-6 ساعات",

maxDose:1000,

sideEffects:"Nausea, Rash",

contraindications:"Severe liver disease",

storage:"Store below 25°C",

strengths:[...],

notes:"..."
}
},

ibuprofen:{
    name:"Ibuprofen",
    category:"Pain & Fever",
    mgPerKg:10,
    frequency:"كل 6-8 ساعات",
    maxDose:400,
    strengths:[
        {
            name:"100 mg / 5 mL",
            concentration:100
        }
    ],
    notes:"يفضل إعطاؤه بعد الطعام."
},

amoxicillin:{
    name:"Amoxicillin",
    category:"Antibiotics",
    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:500,
    strengths:[
        {
            name:"250 mg / 5 mL",
            concentration:250
        }
    ],
    notes:"أكمل مدة العلاج."
},

coamoxiclav:{
    name:"Co-amoxiclav",
    category:"Antibiotics",
    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:875,
    strengths:[
        {
            name:"228 mg / 5 mL",
            concentration:228
        }
    ],
    notes:"يعطى مع الطعام."
},

azithromycin:{
    name:"Azithromycin",
    category:"Antibiotics",
    mgPerKg:10,
    frequency:"مرة يومياً",
    maxDose:500,
    strengths:[
        {
            name:"200 mg / 5 mL",
            concentration:200
        }
    ],
    notes:"مرة واحدة يومياً."
},

clarithromycin:{
    name:"Clarithromycin",
    category:"Antibiotics",
    mgPerKg:7.5,
    frequency:"كل 12 ساعة",
    maxDose:500,
    strengths:[
        {
            name:"125 mg / 5 mL",
            concentration:125
        }
    ],
    notes:"رج العبوة قبل الاستعمال."
},

cefixime:{
    name:"Cefixime",
    category:"Antibiotics",
    mgPerKg:8,
    frequency:"مرة أو مرتين يومياً",
    maxDose:400,
    strengths:[
        {
            name:"100 mg / 5 mL",
            concentration:100
        }
    ],
    notes:"يرج جيداً قبل الاستخدام."
},

cefuroxime:{
    name:"Cefuroxime",
    category:"Antibiotics",
    mgPerKg:15,
    frequency:"كل 12 ساعة",
    maxDose:500,
    strengths:[
        {
            name:"125 mg / 5 mL",
            concentration:125
        }
    ],
    notes:"يفضل بعد الطعام."
},

cephalexin:{
    name:"Cephalexin",
    category:"Antibiotics",
    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:1000,
    strengths:[
        {
            name:"250 mg / 5 mL",
            concentration:250
        }
    ],
    notes:"أكمل العلاج."
},

metronidazole:{
    name:"Metronidazole",
    category:"Antibiotics",
    mgPerKg:7.5,
    frequency:"كل 8 ساعات",
    maxDose:500,
    strengths:[
        {
            name:"125 mg / 5 mL",
            concentration:125
        }
    ],
    notes:"يفضل بعد الطعام."
},
    cetirizine:{
    name:"Cetirizine",
    category:"Antihistamines",
    mgPerKg:0.25,
    frequency:"مرة يومياً",
    maxDose:10,
    strengths:[
        {
            name:"5 mg / 5 mL",
            concentration:5
        }
    ],
    notes:"قد يسبب النعاس."
},

loratadine:{
    name:"Loratadine",
    category:"Antihistamines",
    mgPerKg:0.2,
    frequency:"مرة يومياً",
    maxDose:10,
    strengths:[
        {
            name:"5 mg / 5 mL",
            concentration:5
        }
    ],
    notes:"عادة لا يسبب النعاس."
},

chlorpheniramine:{
    name:"Chlorpheniramine",
    category:"Antihistamines",
    mgPerKg:0.1,
    frequency:"كل 6 ساعات",
    maxDose:4,
    strengths:[
        {
            name:"2 mg / 5 mL",
            concentration:2
        }
    ],
    notes:"قد يسبب النعاس."
},

salbutamol:{
    name:"Salbutamol",
    category:"Asthma",
    mgPerKg:0.15,
    frequency:"كل 4-6 ساعات",
    maxDose:5,
    strengths:[
        {
            name:"2 mg / 5 mL",
            concentration:2
        }
    ],
    notes:"رج العبوة جيداً قبل الاستخدام."
},

budesonide:{
    name:"Budesonide",
    category:"Asthma",
    mgPerKg:0.5,
    frequency:"مرتين يومياً",
    maxDose:2,
    strengths:[
        {
            name:"0.5 mg / 2 mL",
            concentration:1.25
        }
    ],
    notes:"للاستنشاق بواسطة النيبولايزر."
},

montelukast:{
    name:"Montelukast",
    category:"Asthma",
    mgPerKg:0.2,
    frequency:"مرة يومياً",
    maxDose:10,
    strengths:[
        {
            name:"4 mg Chewable",
            concentration:4
        },
        {
            name:"5 mg Chewable",
            concentration:5
        }
    ],
    notes:"يعطى مساءً."
},

ondansetron:{
    name:"Ondansetron",
    category:"Antiemetic",
    mgPerKg:0.15,
    frequency:"كل 8 ساعات",
    maxDose:8,
    strengths:[
        {
            name:"4 mg / 5 mL",
            concentration:4
        }
    ],
    notes:"لعلاج الغثيان والتقيؤ."
},

zinc:{
    name:"Zinc",
    category:"Vitamins",
    mgPerKg:1,
    frequency:"مرة يومياً",
    maxDose:20,
    strengths:[
        {
            name:"20 mg / 5 mL",
            concentration:20
        }
    ],
    notes:"يستخدم مع الإسهال."
},

fluconazole:{
    name:"Fluconazole",
    category:"Antifungal",
    mgPerKg:6,
    frequency:"مرة يومياً",
    maxDose:400,
    strengths:[
        {
            name:"50 mg / 5 mL",
            concentration:50
        }
    ],
    notes:"لعلاج الالتهابات الفطرية."
},

albendazole:{
    name:"Albendazole",
    category:"Antiparasitic",
    mgPerKg:15,
    frequency:"مرة يومياً",
    maxDose:400,
    strengths:[
        {
            name:"200 mg / 5 mL",
            concentration:200
        }
    ],
    notes:"لعلاج الديدان."
}

};
