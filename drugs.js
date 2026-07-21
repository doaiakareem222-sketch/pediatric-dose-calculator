const drugs = {

paracetamol:{
    name:"Paracetamol",
    category:"Pain & Fever",
    diseases:["fever","pain"],
    mgPerKg:15,
    frequency:"كل 4-6 ساعات",
    maxDose:1000,
    warnings:"لا تتجاوز الجرعة اليومية القصوى."
    minAge:0,
maxAge:12,
    strengths:[
        {
            name:"120 mg / 5 mL",
            concentration:120
        },
        {
            name:"250 mg / 5 mL",
            concentration:250
        }
    ],
    notes:"يعطى عند الألم والحمى، ولا تتجاوز الجرعة القصوى."
},

ibuprofen:{
    name:"Ibuprofen",
    category:"Pain & Fever",
diseases:["fever","pain"],
    mgPerKg:10,
    frequency:"كل 6-8 ساعات",
    maxDose:400,
        warnings:"يمنع عند قرحة المعدة والجفاف الشديد."
    minAge:0,
maxAge:12,
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
diseases:["otitis","pharyngitis","sinusitis","pneumonia"],
    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:500,
        warnings:"تأكد من عدم وجود حساسية للبنسلين."
    minAge:0,
maxAge:12,
    strengths:[
        {
            name:"125 mg / 5 mL",
            concentration:125
        },
        {
            name:"250 mg / 5 mL",
            concentration:250
        }
    ],
    notes:"أكمل مدة العلاج حتى النهاية."
},

coamoxiclav:{
    name:"Co-amoxiclav",
    category:"Antibiotics",
    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:875,
    diseases:["otitis","sinusitis","pneumonia"],
        warnings:"يعطى بعد الطعام لتقليل اضطرابات المعدة. يستخدم بحذر في مرضى الكبد."
    minAge:0,
maxAge:12,
    strengths:[
        {
            name:"228 mg / 5 mL",
            concentration:228
        },
        {
            name:"457 mg / 5 mL",
            concentration:457
        }
    ],
    notes:"يفضل تناوله مع بداية الوجبة."
},

azithromycin:{
    name:"Azithromycin",
    category:"Antibiotics",
    mgPerKg:10,
    frequency:"مرة يومياً",
    maxDose:500,
    diseases:["pharyngitis","pneumonia"],
        warnings:"يستخدم بحذر مع مرضى اضطرابات نظم القلب."
    minAge:0,
maxAge:12,
    strengths:[
        {
            name:"200 mg / 5 mL",
            concentration:200
        }
    ],
    notes:"يعطى مرة واحدة يومياً."
},

cefixime:{
    name:"Cefixime",
    category:"Antibiotics",
    mgPerKg:8,
    frequency:"مرة أو مرتين يومياً",
    maxDose:400,
    diseases:["uti","otitis"],
        warnings:"يعدل في القصور الكلوي."
    minAge:0,
maxAge:12,
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
    diseases:["sinusitis","otitis"],
        warnings:"يفضل تناوله بعد الطعام لتحسين الامتصاص. يستخدم بحذر عند حساسية السيفالوسبورينات."
    minAge:0,
maxAge:12,
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
    diseases:["skin","pharyngitis"],
        warnings:"قد يسبب حساسية متصالبة مع البنسلين. أكمل مدة العلاج كاملة."
    minAge:0,
maxAge:12,
    strengths:[
        {
            name:"250 mg / 5 mL",
            concentration:250
        }
    ],
    notes:"أكمل العلاج حتى النهاية."
},

clarithromycin:{
    name:"Clarithromycin",
    category:"Antibiotics",
    mgPerKg:7.5,
    frequency:"كل 12 ساعة",
    maxDose:500,
        warnings:"يتداخل مع العديد من الأدوية وقد يطيل فترة QT."
    minAge:0,
maxAge:12,
    strengths:[
        {
            name:"125 mg / 5 mL",
            concentration:125
        },
        {
            name:"250 mg / 5 mL",
            concentration:250
        }
    ],
    notes:"رج العبوة جيداً قبل الاستخدام."
},
    metronidazole:{
    name:"Metronidazole",
    category:"Antibiotics",
    mgPerKg:7.5,
    frequency:"كل 8 ساعات",
    maxDose:500,
        diseases:["diarrhea"],
        warnings:"يمنع تناول الكحول أثناء العلاج ولمدة 48 ساعة بعد آخر جرعة."
        minAge:0,
maxAge:12,
    strengths:[
        {
            name:"125 mg / 5 mL",
            concentration:125
        }
    ],
    notes:"يمكن إعطاؤه بعد الطعام لتقليل اضطراب المعدة."
},

cetirizine:{
    name:"Cetirizine",
    category:"Antihistamines",
    mgPerKg:0.25,
    frequency:"مرة يومياً",
    maxDose:10,
        warnings:"قد يسبب نعاساً عند بعض المرضى رغم أنه أقل من الجيل الأول."
    minAge:0,
maxAge:12,
    strengths:[
        {
            name:"5 mg / 5 mL",
            concentration:5
        }
    ],
    notes:"قد يسبب النعاس عند بعض الأطفال."
},

loratadine:{
    name:"Loratadine",
    category:"Antihistamines",
    mgPerKg:0.2,
    frequency:"مرة يومياً",
    maxDose:10,
        warnings:"نادراً ما يسبب النعاس. لا تتجاوز الجرعة الموصى بها."
    minAge:0,
maxAge:12,
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
    diseases:["allergy"],
        warnings:"يسبب النعاس ويجب تجنب القيادة أو تشغيل الآلات."
    minAge:0,
maxAge:12,
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
    diseases:["asthma"],
        warnings:"قد يسبب رجفة وخفقان القلب عند زيادة الجرعة."
    minAge:0,
maxAge:12,
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
    diseases:["asthma"],
        warnings:"اغسل الفم بعد الاستنشاق لتقليل خطر الفطريات الفموية."
    minAge:0,
maxAge:12,
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
    diseases:["asthma","allergy"],
        warnings:"راقب أي تغيرات في المزاج أو السلوك، خاصة عند الأطفال."
    minAge:0,
maxAge:12,
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
    diseases:["vomiting"],
        warnings:"قد يسبب إطالة QT خاصة عند الجرعات العالية أو مرضى القلب."
    minAge:0,
maxAge:12,
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
    diseases:["diarrhea"],
        warnings:"لا يؤخذ مع الحديد أو الكالسيوم في نفس الوقت لتجنب تقليل الامتصاص."
    minAge:0,
maxAge:12,
    strengths:[
        {
            name:"20 mg / 5 mL",
            concentration:20
        }
    ],
    notes:"يستخدم مع الإسهال الحاد."
},

fluconazole:{
    name:"Fluconazole",
    category:"Antifungal",
    mgPerKg:6,
    frequency:"مرة يومياً",
    maxDose:400,
    diseases:["fungal"],
        warnings:"قد يؤثر في وظائف الكبد ويتداخل مع عدة أدوية."
    minAge:0,
maxAge:12,
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
    diseases:["worms"],
        warnings:"يفضل تناوله بعد الطعام. قد يحتاج علاج جميع أفراد الأسرة في بعض حالات الديدان."
    minAge:0,
maxAge:12,
    strengths:[
        {
            name:"200 mg / 5 mL",
            concentration:200
        }
    ],
    notes:"لعلاج الديدان."
}

};
