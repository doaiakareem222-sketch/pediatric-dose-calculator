const drugs = {

paracetamol:{
    name:"Paracetamol",
    category:"Pain & Fever",
    diseases:["fever","pain"],
    mgPerKg:15,
    frequency:"كل 4-6 ساعات",
    maxDose:1000,
    warnings:"لا تتجاوز الجرعة اليومية القصوى.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"120 mg / 5 mL", concentration:120},
        {name:"250 mg / 5 mL", concentration:250}
    ],
    notes:"يعطى عند الألم والحمى.",

mechanism:"يثبط تصنيع البروستاغلاندينات داخل الجهاز العصبي المركزي.",

indications:"الحمى والألم.",

contraindications:"حساسية للباراسيتامول.",

sideEffects:"غثيان، طفح جلدي.",

pregnancy:"آمن عادة أثناء الحمل بالجرعات العلاجية.",

storage:"يحفظ بدرجة حرارة الغرفة."
},

ibuprofen:{
    name:"Ibuprofen",
    category:"Pain & Fever",
    diseases:["fever","pain"],
    mgPerKg:10,
    frequency:"كل 6-8 ساعات",
    maxDose:400,
    warnings:"يمنع عند الجفاف الشديد وقرحة المعدة.",
    minAge:0.5,
    maxAge:12,
    strengths:[
        {name:"100 mg / 5 mL", concentration:100}
    ],
    notes:"يفضل بعد الطعام."
},

amoxicillin:{
    name:"Amoxicillin",
    category:"Antibiotics",
    diseases:["otitis","pharyngitis","sinusitis","pneumonia"],
    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:500,
    warnings:"تأكد من عدم وجود حساسية للبنسلين.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"125 mg / 5 mL", concentration:125},
        {name:"250 mg / 5 mL", concentration:250}
    ],
    notes:"أكمل العلاج للنهاية."
},

coamoxiclav:{
    name:"Co-amoxiclav",
    category:"Antibiotics",
    diseases:["otitis","sinusitis","pneumonia"],
    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:875,
    warnings:"يعطى بعد الطعام.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"228 mg / 5 mL", concentration:228},
        {name:"457 mg / 5 mL", concentration:457}
    ],
    notes:"يستخدم للالتهابات المتوسطة والشديدة."
},

azithromycin:{
    name:"Azithromycin",
    category:"Antibiotics",
    diseases:["pharyngitis","pneumonia"],
    mgPerKg:10,
    frequency:"مرة يومياً",
    maxDose:500,
    warnings:"قد يسبب إطالة QT.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"200 mg / 5 mL", concentration:200}
    ],
    notes:"يعطى مرة واحدة يومياً."
},

cefixime:{
    name:"Cefixime",
    category:"Antibiotics",
    diseases:["uti","otitis"],
    mgPerKg:8,
    frequency:"مرة أو مرتين يومياً",
    maxDose:400,
    warnings:"يعدل عند القصور الكلوي.",
    minAge:0.5,
    maxAge:12,
    strengths:[
        {name:"100 mg / 5 mL", concentration:100}
    ],
    notes:"فعال ضد التهابات البول."
},

cefuroxime:{
    name:"Cefuroxime",
    category:"Antibiotics",
    diseases:["sinusitis","otitis"],
    mgPerKg:15,
    frequency:"كل 12 ساعة",
    maxDose:500,
    warnings:"يفضل بعد الطعام.",
    minAge:0.25,
    maxAge:12,
    strengths:[
        {name:"125 mg / 5 mL", concentration:125}
    ],
    notes:"من الجيل الثاني للسيفالوسبورينات."
},
    cephalexin:{
    name:"Cephalexin",
    category:"Antibiotics",
    diseases:["skin","pharyngitis"],
    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:500,
    warnings:"يستخدم بحذر عند حساسية السيفالوسبورينات.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"125 mg / 5 mL", concentration:125},
        {name:"250 mg / 5 mL", concentration:250}
    ],
    notes:"مفيد لالتهابات الجلد والبلعوم."
},

clarithromycin:{
    name:"Clarithromycin",
    category:"Antibiotics",
    diseases:["pneumonia","pharyngitis"],
    mgPerKg:7.5,
    frequency:"كل 12 ساعة",
    maxDose:500,
    warnings:"قد يطيل QT ويتداخل مع أدوية عديدة.",
    minAge:0.5,
    maxAge:12,
    strengths:[
        {name:"125 mg / 5 mL", concentration:125},
        {name:"250 mg / 5 mL", concentration:250}
    ],
    notes:"بديل عند حساسية البنسلين."
},

metronidazole:{
    name:"Metronidazole",
    category:"Antibiotics",
    diseases:["diarrhea"],
    mgPerKg:7.5,
    frequency:"كل 8 ساعات",
    maxDose:500,
    warnings:"يمنع تناول الكحول معه.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"125 mg / 5 mL", concentration:125},
        {name:"200 mg / 5 mL", concentration:200}
    ],
    notes:"فعال ضد الجراثيم اللاهوائية والطفيليات."
},

cetirizine:{
    name:"Cetirizine",
    category:"Antihistamines",
    diseases:["allergy"],
    mgPerKg:0.25,
    frequency:"مرة يومياً",
    maxDose:10,
    warnings:"قد يسبب نعاساً خفيفاً.",
    minAge:2,
    maxAge:12,
    strengths:[
        {name:"5 mg / 5 mL", concentration:5}
    ],
    notes:"لعلاج الحساسية والشرى."
},

loratadine:{
    name:"Loratadine",
    category:"Antihistamines",
    diseases:["allergy"],
    mgPerKg:0.2,
    frequency:"مرة يومياً",
    maxDose:10,
    warnings:"أقل تسبباً للنعاس.",
    minAge:2,
    maxAge:12,
    strengths:[
        {name:"5 mg / 5 mL", concentration:5}
    ],
    notes:"مضاد هيستامين طويل المفعول."
},

chlorpheniramine:{
    name:"Chlorpheniramine",
    category:"Antihistamines",
    diseases:["allergy"],
    mgPerKg:0.1,
    frequency:"كل 6-8 ساعات",
    maxDose:4,
    warnings:"يسبب النعاس.",
    minAge:2,
    maxAge:12,
    strengths:[
        {name:"2 mg / 5 mL", concentration:2}
    ],
    notes:"يستخدم للحساسية والحكة."
},

salbutamol:{
    name:"Salbutamol",
    category:"Asthma",
    diseases:["asthma"],
    mgPerKg:0.15,
    frequency:"كل 6 ساعات",
    maxDose:4,
    warnings:"قد يسبب رجفة وتسارع القلب.",
    minAge:2,
    maxAge:12,
    strengths:[
        {name:"2 mg / 5 mL", concentration:2}
    ],
    notes:"موسع قصبي سريع المفعول."
},
    budesonide:{
    name:"Budesonide",
    category:"Asthma",
    diseases:["asthma"],
    mgPerKg:0.5,
    frequency:"مرتين يومياً",
    maxDose:2,
    warnings:"يجب المضمضة بعد الاستخدام لتجنب فطريات الفم.",
    minAge:1,
    maxAge:12,
    strengths:[
        {name:"0.5 mg / 2 mL", concentration:1.25}
    ],
    notes:"كورتيزون استنشاقي للسيطرة على الربو."
},

montelukast:{
    name:"Montelukast",
    category:"Asthma",
    diseases:["asthma","allergy"],
    mgPerKg:0.2,
    frequency:"مرة مساءً",
    maxDose:5,
    warnings:"قد يسبب تغيرات سلوكية نادرة.",
    minAge:2,
    maxAge:12,
    strengths:[
        {name:"4 mg Chewable", concentration:4},
        {name:"5 mg Chewable", concentration:5}
    ],
    notes:"للوقاية من الربو والحساسية."
},

ondansetron:{
    name:"Ondansetron",
    category:"Antiemetic",
    diseases:["vomiting"],
    mgPerKg:0.15,
    frequency:"كل 8 ساعات",
    maxDose:8,
    warnings:"قد يسبب إطالة QT.",
    minAge:0.5,
    maxAge:12,
    strengths:[
        {name:"4 mg / 5 mL", concentration:4}
    ],
    notes:"لعلاج الغثيان والتقيؤ."
},

fluconazole:{
    name:"Fluconazole",
    category:"Antifungal",
    diseases:["fungal"],
    mgPerKg:6,
    frequency:"مرة يومياً",
    maxDose:400,
    warnings:"يراقب عند مرضى الكبد.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"50 mg / 5 mL", concentration:50}
    ],
    notes:"لعلاج العدوى الفطرية."
},

albendazole:{
    name:"Albendazole",
    category:"Antiparasitic",
    diseases:["worms"],
    mgPerKg:15,
    frequency:"جرعة واحدة",
    maxDose:400,
    warnings:"يعاد بعد أسبوعين لبعض أنواع الديدان.",
    minAge:1,
    maxAge:12,
    strengths:[
        {name:"200 mg / 5 mL", concentration:200}
    ],
    notes:"لعلاج معظم الديدان المعوية."
},

zinc:{
    name:"Zinc",
    category:"Vitamins",
    diseases:["diarrhea"],
    mgPerKg:1,
    frequency:"مرة يومياً",
    maxDose:20,
    warnings:"قد يسبب اضطراباً بسيطاً بالمعدة.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"20 mg / 5 mL", concentration:20}
    ],
    notes:"يعطى مع ORS في الإسهال."
},

vitaminD:{
    name:"Vitamin D",
    category:"Vitamins",
    diseases:["vitaminD"],
    mgPerKg:10,
    frequency:"مرة يومياً",
    maxDose:1000,
    warnings:"لا تتجاوز الجرعة دون وصفة.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"400 IU / mL", concentration:400}
    ],
    notes:"للوقاية وعلاج نقص فيتامين D."
},
    iron:{
    name:"Iron",
    category:"Vitamins",
    diseases:["anemia"],
    mgPerKg:3,
    frequency:"مرة يومياً",
    maxDose:60,
    warnings:"قد يسبب إمساكاً وتغير لون البراز.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"30 mg / 5 mL", concentration:30}
    ],
    notes:"لعلاج فقر الدم الناتج عن نقص الحديد."
},

calcium:{
    name:"Calcium",
    category:"Vitamins",
    diseases:["calcium"],
    mgPerKg:50,
    frequency:"مرة أو مرتين يومياً",
    maxDose:1000,
    warnings:"يفضل تناوله بعيداً عن الحديد.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"125 mg / 5 mL", concentration:125}
    ],
    notes:"لعلاج نقص الكالسيوم."
},

oralRehydration:{
    name:"ORS",
    category:"Vitamins",
    diseases:["diarrhea"],
    mgPerKg:10,
    frequency:"بعد كل إسهال",
    maxDose:1000,
    warnings:"يحضر حسب التعليمات.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"جاهز للاستعمال", concentration:1}
    ],
    notes:"يعوض السوائل والأملاح."
},

nystatin:{
    name:"Nystatin",
    category:"Antifungal",
    diseases:["fungal"],
    mgPerKg:1,
    frequency:"4 مرات يومياً",
    maxDose:5,
    warnings:"يرج جيداً قبل الاستعمال.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"100000 IU / mL", concentration:100000}
    ],
    notes:"لعلاج فطريات الفم."
},

cetirizineDrops:{
    name:"Cetirizine Drops",
    category:"Antihistamines",
    diseases:["allergy"],
    mgPerKg:0.25,
    frequency:"مرة يومياً",
    maxDose:10,
    warnings:"قد يسبب نعاساً خفيفاً.",
    minAge:0.5,
    maxAge:12,
    strengths:[
        {name:"10 mg / mL", concentration:10}
    ],
    notes:"مناسب للأطفال الصغار."
},

dexamethasone:{
    name:"Dexamethasone",
    category:"Steroids",
    diseases:["asthma","allergy"],
    mgPerKg:0.15,
    frequency:"حسب وصف الطبيب",
    maxDose:10,
    warnings:"لا يوقف بشكل مفاجئ بعد الاستخدام الطويل.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"0.5 mg / 5 mL", concentration:0.5}
    ],
    notes:"كورتيكوستيرويد للحالات الخاصة."
},

prednisolone:{
    name:"Prednisolone",
    category:"Steroids",
    diseases:["asthma","allergy"],
    mgPerKg:1,
    frequency:"مرة يومياً",
    maxDose:60,
    warnings:"يؤخذ بعد الطعام.",
    minAge:0,
    maxAge:12,
    strengths:[
        {name:"15 mg / 5 mL", concentration:15}
    ],
    notes:"يستخدم لنوبات الربو والحساسية."
}

};
