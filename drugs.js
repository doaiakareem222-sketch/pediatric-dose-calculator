// ======================================================
// DoseCare v5.0
// Drugs Database
// ======================================================

const drugs = {

paracetamol:{

id:"paracetamol",

name:"Paracetamol",

category:"Pain & Fever",

diseases:[
"fever",
"pain"
],

mgPerKg:15,

frequency:"كل 4-6 ساعات",

maxDose:1000,

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

mechanism:
"يثبط تصنيع البروستاغلاندينات داخل الجهاز العصبي المركزي.",

indications:
"الحمى والألم الخفيف إلى المتوسط.",

contraindications:
"حساسية الباراسيتامول أو مرض كبدي شديد.",

sideEffects:
"غثيان، طفح جلدي، سمية كبدية عند الجرعات العالية.",

pregnancy:
"يعتبر آمناً عند الحاجة.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

notes:
"يمكن إعطاؤه مع أو بدون الطعام.",

alerts:[

"لا تتجاوز الجرعة اليومية القصوى.",

"لا تجمعه مع أي دواء يحتوي Paracetamol.",

"راقب وظائف الكبد عند الاستخدام الطويل."

]

},

ibuprofen:{

id:"ibuprofen",

name:"Ibuprofen",

category:"Pain & Fever",

diseases:[
"fever",
"pain"
],

mgPerKg:10,

frequency:"كل 6-8 ساعات",

maxDose:400,

minAge:0.5,

maxAge:12,

strengths:[

{
name:"100 mg / 5 mL",
concentration:100
}

],

mechanism:
"يثبط COX-1 و COX-2 مما يقلل تصنيع البروستاغلاندينات.",

indications:
"الحمى والألم والالتهاب.",

contraindications:
"قرحة المعدة، الحساسية للـ NSAIDs، الجفاف الشديد.",

sideEffects:
"ألم معدة، غثيان، نزف معدي، اضطراب كلوي.",

pregnancy:
"يمنع في الثلث الأخير من الحمل.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

notes:
"يفضل تناوله بعد الطعام.",

alerts:[

"قد يسبب نزفاً معدياً.",

"تجنب استخدامه عند الجفاف.",

"لا يعطى مع NSAIDs أخرى."

]

},

amoxicillin:{

id:"amoxicillin",

name:"Amoxicillin",

category:"Antibiotics",

diseases:[
"otitis",
"pharyngitis",
"sinusitis",
"pneumonia"
],

mgPerKg:25,

frequency:"كل 8 ساعات",

maxDose:500,

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

mechanism:
"يثبط تصنيع جدار الخلية البكتيرية.",

indications:
"التهابات الأذن والبلعوم والجيوب والرئة.",

contraindications:
"حساسية البنسلين.",

sideEffects:
"إسهال، طفح جلدي، غثيان.",

pregnancy:
"آمن عند الحاجة.",

storage:
"المعلق يحفظ بالثلاجة بعد التحضير.",

notes:
"أكمل العلاج حتى نهايته.",

alerts:[

"اسأل عن حساسية البنسلين.",

"رج العبوة جيداً.",

"لا توقف المضاد عند تحسن الأعراض."

]

},

coamoxiclav:{

id:"coamoxiclav",

name:"Co-amoxiclav",

category:"Antibiotics",

diseases:[
"otitis",
"sinusitis",
"pneumonia"
],

mgPerKg:25,

frequency:"كل 8 ساعات",

maxDose:875,

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

mechanism:
"أموكسيسيلين يثبط جدار الخلية، والكلافولانيك يمنع بيتا لاكتاماز.",

indications:
"التهابات الجهاز التنفسي، الأذن، الجيوب، الجلد.",

contraindications:
"حساسية البنسلين أو اضطرابات الكبد السابقة بسبب الدواء.",

sideEffects:
"إسهال، غثيان، طفح جلدي.",

pregnancy:
"آمن عند الحاجة.",

storage:
"يحفظ المعلق بالثلاجة بعد التحضير.",

notes:
"يفضل تناوله بعد الطعام.",

alerts:[

"رج العبوة جيداً.",

"أكمل العلاج للنهاية.",

"قد يسبب اضطراباً بالمعدة."

]

},

azithromycin:{

id:"azithromycin",

name:"Azithromycin",

category:"Antibiotics",

diseases:[
"pharyngitis",
"pneumonia"
],

mgPerKg:10,

frequency:"مرة يومياً",

maxDose:500,

minAge:0,

maxAge:12,

strengths:[

{
name:"200 mg / 5 mL",
concentration:200
}

],

mechanism:
"يثبط تصنيع البروتين البكتيري بالارتباط مع الوحدة 50S.",

indications:
"التهاب الحلق، الالتهاب الرئوي، التهابات الجهاز التنفسي.",

contraindications:
"حساسية الماكروليدات.",

sideEffects:
"إسهال، غثيان، ألم بطني، إطالة QT.",

pregnancy:
"يستخدم عند الحاجة.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

notes:
"يعطى مرة واحدة يومياً.",

alerts:[

"قد يطيل QT.",

"يمكن إعطاؤه مع الطعام أو بدونه.",

"أكمل العلاج كاملاً."

]

},

cefixime:{

id:"cefixime",

name:"Cefixime",

category:"Antibiotics",

diseases:[
"uti",
"otitis"
],

mgPerKg:8,

frequency:"مرة أو مرتين يومياً",

maxDose:400,

minAge:0.5,

maxAge:12,

strengths:[

{
name:"100 mg / 5 mL",
concentration:100
}

],

mechanism:
"يثبط تصنيع جدار الخلية البكتيرية.",

indications:
"التهابات البول والأذن والجهاز التنفسي.",

contraindications:
"حساسية السيفالوسبورينات.",

sideEffects:
"إسهال، طفح جلدي، غثيان.",

pregnancy:
"آمن نسبياً.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

notes:
"يستخدم كثيراً في التهابات البول.",

alerts:[

"يعدل عند القصور الكلوي.",

"أكمل العلاج كاملاً."

]

},

cefuroxime:{

id:"cefuroxime",

name:"Cefuroxime",

category:"Antibiotics",

diseases:[
"sinusitis",
"otitis"
],

mgPerKg:15,

frequency:"كل 12 ساعة",

maxDose:500,

minAge:0.25,

maxAge:12,

strengths:[

{
name:"125 mg / 5 mL",
concentration:125
}

],

mechanism:
"يثبط تصنيع جدار الخلية البكتيرية.",

indications:
"التهاب الجيوب والأذن والجهاز التنفسي.",

contraindications:
"حساسية السيفالوسبورينات.",

sideEffects:
"غثيان، إسهال، طفح جلدي.",

pregnancy:
"آمن.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

notes:
"يفضل بعد الطعام.",

alerts:[

"يحسن الطعام امتصاصه.",

"أكمل العلاج."

]

},

cephalexin:{

id:"cephalexin",

name:"Cephalexin",

category:"Antibiotics",

diseases:[
"skin",
"pharyngitis"
],

mgPerKg:25,

frequency:"كل 8 ساعات",

maxDose:500,

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

mechanism:
"يثبط تصنيع جدار الخلية البكتيرية.",

indications:
"التهابات الجلد والبلعوم.",

contraindications:
"حساسية السيفالوسبورينات.",

sideEffects:
"غثيان، إسهال، طفح جلدي.",

pregnancy:
"آمن.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

notes:
"مناسب لالتهابات الجلد.",

alerts:[

"أكمل العلاج.",

"يمكن تناوله مع الطعام."

]

},

clarithromycin:{

id:"clarithromycin",

name:"Clarithromycin",

category:"Antibiotics",

diseases:[
"pneumonia",
"pharyngitis"
],

mgPerKg:7.5,

frequency:"كل 12 ساعة",

maxDose:500,

minAge:0.5,

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

mechanism:
"يثبط تصنيع البروتين البكتيري.",

indications:
"التهابات الجهاز التنفسي.",

contraindications:
"حساسية الماكروليدات.",

sideEffects:
"غثيان، اضطراب التذوق، إسهال.",

pregnancy:
"يستخدم عند الضرورة.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

notes:
"بديل جيد عند حساسية البنسلين.",

alerts:[

"قد يسبب إطالة QT.",

"يتداخل مع أدوية كثيرة.",

"أكمل العلاج."

]

},
    metronidazole:{

id:"metronidazole",

name:"Metronidazole",

category:"Antibiotics",

diseases:["diarrhea"],

mgPerKg:7.5,

frequency:"كل 8 ساعات",

maxDose:500,

minAge:0,

maxAge:12,

strengths:[

{
name:"125 mg / 5 mL",
concentration:125
},

{
name:"200 mg / 5 mL",
concentration:200
}

],

mechanism:"يثبط تصنيع الحمض النووي للبكتيريا اللاهوائية والطفيليات.",

indications:"Giardiasis، Amoebiasis، الالتهابات اللاهوائية.",

contraindications:"الحساسية للدواء.",

sideEffects:"غثيان، طعم معدني، صداع.",

pregnancy:"يستخدم بحذر.",

storage:"يحفظ بدرجة حرارة الغرفة.",

notes:"يمنع تناول الكحول معه.",

alerts:[

"يمنع تناول الكحول.",

"أكمل العلاج.",

"قد يسبب طعماً معدنياً."

]

},

cetirizine:{

id:"cetirizine",

name:"Cetirizine",

category:"Antihistamines",

diseases:["allergy"],

mgPerKg:0.25,

frequency:"مرة يومياً",

maxDose:10,

minAge:2,

maxAge:12,

strengths:[

{
name:"5 mg / 5 mL",
concentration:5
}

],

mechanism:"يثبط مستقبلات H1.",

indications:"الحساسية والشرى.",

contraindications:"الحساسية للسيتيريزين.",

sideEffects:"نعاس خفيف، جفاف الفم.",

pregnancy:"آمن نسبياً.",

storage:"يحفظ بدرجة حرارة الغرفة.",

notes:"يمكن تناوله مع الطعام أو بدونه.",

alerts:[

"قد يسبب نعاساً.",

"يفضل مساءً إذا سبب النعاس."

]

},

loratadine:{

id:"loratadine",

name:"Loratadine",

category:"Antihistamines",

diseases:["allergy"],

mgPerKg:0.2,

frequency:"مرة يومياً",

maxDose:10,

minAge:2,

maxAge:12,

strengths:[

{
name:"5 mg / 5 mL",
concentration:5
}

],

mechanism:"يثبط مستقبلات H1 دون عبور الدماغ بشكل كبير.",

indications:"الحساسية الموسمية والشرى.",

contraindications:"الحساسية للدواء.",

sideEffects:"صداع، جفاف الفم.",

pregnancy:"آمن نسبياً.",

storage:"يحفظ بدرجة حرارة الغرفة.",

notes:"أقل تسبباً للنعاس.",

alerts:[

"مرة واحدة يومياً.",

"أقل تسبباً للنعاس."

]

},

chlorpheniramine:{

id:"chlorpheniramine",

name:"Chlorpheniramine",

category:"Antihistamines",

diseases:["allergy"],

mgPerKg:0.1,

frequency:"كل 6-8 ساعات",

maxDose:4,

minAge:2,

maxAge:12,

strengths:[

{
name:"2 mg / 5 mL",
concentration:2
}

],

mechanism:"يثبط مستقبلات H1.",

indications:"الحساسية والحكة.",

contraindications:"حديثي الولادة والزرق.",

sideEffects:"نعاس شديد، دوخة، جفاف الفم.",

pregnancy:"بحذر.",

storage:"يحفظ بدرجة حرارة الغرفة.",

notes:"يسبب النعاس أكثر من الجيل الثاني.",

alerts:[

"قد يسبب نعاساً شديداً.",

"تجنب إعطاءه مع المهدئات."

]

},

salbutamol:{

id:"salbutamol",

name:"Salbutamol",

category:"Asthma",

diseases:["asthma"],

mgPerKg:0.15,

frequency:"كل 6 ساعات",

maxDose:4,

minAge:2,

maxAge:12,

strengths:[

{
name:"2 mg / 5 mL",
concentration:2
}

],

mechanism:"منبه لمستقبلات β2.",

indications:"الربو والتشنج القصبي.",

contraindications:"الحساسية للدواء.",

sideEffects:"رجفة، تسرع القلب.",

pregnancy:"عند الحاجة.",

storage:"يحفظ بدرجة حرارة الغرفة.",

notes:"موسع قصبي سريع.",

alerts:[

"قد يسبب رجفة.",

"قد يزيد نبض القلب."

]

},

budesonide:{

id:"budesonide",

name:"Budesonide",

category:"Asthma",

diseases:["asthma"],

mgPerKg:0.5,

frequency:"مرتين يومياً",

maxDose:2,

minAge:1,

maxAge:12,

strengths:[

{
name:"0.5 mg / 2 mL",
concentration:1.25
}

],

mechanism:"كورتيكوستيرويد مضاد للالتهاب.",

indications:"السيطرة على الربو.",

contraindications:"الحساسية.",

sideEffects:"فطريات الفم، بحة الصوت.",

pregnancy:"آمن.",

storage:"يحفظ بدرجة حرارة الغرفة.",

notes:"يجب المضمضة بعد الاستخدام.",

alerts:[

"المضمضة بعد كل جرعة.",

"ليس لإيقاف نوبة الربو."

]

},

montelukast:{

id:"montelukast",

name:"Montelukast",

category:"Asthma",

diseases:["asthma","allergy"],

mgPerKg:0.2,

frequency:"مرة مساءً",

maxDose:5,

minAge:2,

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

mechanism:"يثبط مستقبلات الليكوترينات.",

indications:"الربو وحساسية الأنف.",

contraindications:"الحساسية للدواء.",

sideEffects:"صداع، اضطرابات نوم.",

pregnancy:"يستخدم عند الحاجة.",

storage:"يحفظ بدرجة حرارة الغرفة.",

notes:"يعطى مساءً.",

alerts:[

"ليس لإيقاف نوبة الربو.",

"راقب أي تغيرات سلوكية."

]

},
    ondansetron: {
    name: "Ondansetron",
    category: "Antiemetic",
    diseases: ["vomiting"],

    mgPerKg: 0.15,
    frequency: "كل 8 ساعات",
    maxDose: 8,

    minAge: 0.5,
    maxAge: 12,

    warnings: "قد يسبب إطالة QT.",

    alert: "يراقب عند مرضى القلب واضطرابات النظم.",

    strengths: [
        {
            name: "4 mg / 5 mL",
            concentration: 4
        }
    ],

    notes: "لعلاج الغثيان والتقيؤ.",

    mechanism:
        "5-HT3 receptor antagonist.",

    indications:
        "Vomiting, nausea.",

    contraindications:
        "QT prolongation.",

    sideEffects:
        "Headache, constipation.",

    pregnancy:
        "Use only if needed.",

    storage:
        "Room temperature."
},

fluconazole: {
    name: "Fluconazole",
    category: "Antifungal",
    diseases: ["fungal"],

    mgPerKg: 6,
    frequency: "مرة يومياً",
    maxDose: 400,

    minAge: 0,
    maxAge: 12,

    warnings: "راقب وظائف الكبد.",

    alert: "تجنب دمجه مع الأدوية التي تطيل QT.",

    strengths: [
        {
            name: "50 mg / 5 mL",
            concentration: 50
        }
    ],

    notes: "لعلاج العدوى الفطرية.",

    mechanism:
        "Inhibits fungal ergosterol synthesis.",

    indications:
        "Fungal infections.",

    contraindications:
        "Azole allergy.",

    sideEffects:
        "Nausea, elevated liver enzymes.",

    pregnancy:
        "Avoid high doses.",

    storage:
        "Room temperature."
},

albendazole: {
    name: "Albendazole",
    category: "Antiparasitic",
    diseases: ["worms"],

    mgPerKg: 15,
    frequency: "جرعة واحدة",
    maxDose: 400,

    minAge: 1,
    maxAge: 12,

    warnings: "قد تحتاج إعادة الجرعة بعد أسبوعين.",

    alert: "يفضل إعطاؤه بعد الطعام.",

    strengths: [
        {
            name: "200 mg / 5 mL",
            concentration: 200
        }
    ],

    notes: "لعلاج الديدان المعوية.",

    mechanism:
        "Inhibits glucose uptake in parasites.",

    indications:
        "Helminth infections.",

    contraindications:
        "Hypersensitivity.",

    sideEffects:
        "Abdominal pain, nausea.",

    pregnancy:
        "Contraindicated.",

    storage:
        "Room temperature."
},
    vitaminD:{

name:"Vitamin D3",
category:"Vitamins",
diseases:["vitamin"],

mgPerKg:10,
frequency:"مرة يومياً",
maxDose:1000,

minAge:0,
maxAge:18,

warnings:"يعطى حسب وصف الطبيب.",

alerts:[
"يفضل مع الطعام.",
"لا تتجاوز الجرعة."
],

strengths:[
{name:"400 IU / mL", concentration:400},
{name:"800 IU / mL", concentration:800}
],

notes:"لعلاج نقص فيتامين D.",

mechanism:"يزيد امتصاص الكالسيوم والفوسفور.",

indications:"Vitamin D deficiency",

contraindications:"Hypercalcemia",

sideEffects:"نادراً اضطراب معدي.",

pregnancy:"Safe",

storage:"Room Temperature"

},

omeprazole:{

name:"Omeprazole",
category:"GIT",
diseases:["gastritis"],

mgPerKg:1,
frequency:"مرة يومياً",
maxDose:40,

minAge:1,
maxAge:18,

warnings:"قبل الطعام.",

alerts:[
"يعطى قبل الإفطار.",
"لا يسحق الكبسول."
],

strengths:[
{name:"10 mg",concentration:10},
{name:"20 mg",concentration:20}
],

notes:"يقلل حموضة المعدة.",

mechanism:"Proton Pump Inhibitor",

indications:"GERD, Gastritis",

contraindications:"Hypersensitivity",

sideEffects:"Headache, diarrhea",

pregnancy:"Safe",

storage:"Room Temperature"

},

domperidone:{

name:"Domperidone",
category:"GIT",
diseases:["vomiting"],

mgPerKg:0.25,
frequency:"3 مرات يومياً",
maxDose:30,

minAge:1,
maxAge:18,

warnings:"قد يطيل QT.",

alerts:[
"قبل الطعام.",
"لا يستخدم لفترات طويلة."
],

strengths:[
{name:"5 mg / 5 mL",concentration:5}
],

notes:"مضاد للإقياء.",

mechanism:"D2 blocker",

indications:"Nausea & Vomiting",

contraindications:"QT prolongation",

sideEffects:"Dry mouth",

pregnancy:"Avoid unless needed",

storage:"Room Temperature"

},

loperamide:{

name:"Loperamide",
category:"GIT",
diseases:["diarrhea"],

mgPerKg:0.1,
frequency:"بعد كل إسهال",
maxDose:8,

minAge:2,
maxAge:18,

warnings:"يمنع في الإسهال الدموي.",

alerts:[
"لا يستخدم عند وجود حرارة شديدة.",
"يستخدم لفترة قصيرة."
],

strengths:[
{name:"1 mg / 5 mL",concentration:1}
],

notes:"مضاد للإسهال.",

mechanism:"Opioid receptor agonist",

indications:"Acute diarrhea",

contraindications:"Bloody diarrhea",

sideEffects:"Constipation",

pregnancy:"Use with caution",

storage:"Room Temperature"

},
    vitaminD: {
    name: "Vitamin D3",
    category: "Vitamins",
    diseases: ["vitaminD"],

    mgPerKg: 10,
    frequency: "مرة يومياً",
    maxDose: 1000,

    minAge: 0,
    maxAge: 12,

    warnings: "لا تتجاوز الجرعة الموصى بها.",

    alerts: [
        "يعطى مع الطعام.",
        "مهم لصحة العظام والأسنان."
    ],

    strengths: [
        { name: "400 IU / mL", concentration: 400 }
    ],

    notes: "لعلاج نقص فيتامين D.",

    mechanism: "يزيد امتصاص الكالسيوم والفوسفور.",

    indications: "نقص فيتامين D.",

    contraindications: "فرط فيتامين D.",

    sideEffects: "نادراً ارتفاع الكالسيوم.",

    pregnancy: "آمن.",

    storage: "يحفظ بدرجة حرارة الغرفة."
},

domperidone: {
    name: "Domperidone",
    category: "Antiemetic",
    diseases: ["vomiting"],

    mgPerKg: 0.25,
    frequency: "كل 8 ساعات",
    maxDose: 10,

    minAge: 1,
    maxAge: 12,

    warnings: "لا يستخدم لفترات طويلة.",

    alerts: [
        "قد يطيل QT.",
        "يستخدم عند الحاجة فقط."
    ],

    strengths: [
        { name: "5 mg / 5 mL", concentration: 5 }
    ],

    notes: "مضاد للغثيان.",

    mechanism: "يثبط مستقبلات الدوبامين D2.",

    indications: "الغثيان والتقيؤ.",

    contraindications: "انسداد الأمعاء.",

    sideEffects: "جفاف الفم، صداع.",

    pregnancy: "بحذر.",

    storage: "يحفظ بدرجة حرارة الغرفة."
},

amikacin: {
    name: "Amikacin",
    category: "Antibiotics",
    diseases: ["sepsis"],

    mgPerKg: 15,
    frequency: "مرة يومياً",
    maxDose: 1500,

    minAge: 0,
    maxAge: 12,

    warnings: "يراقب السمع ووظائف الكلى.",

    alerts: [
        "يعطى حقناً فقط.",
        "يحتاج مراقبة وظائف الكلى."
    ],

    strengths: [
        { name: "100 mg / 2 mL", concentration: 50 }
    ],

    notes: "مضاد حيوي أمينوغلايكوسايد.",

    mechanism: "يثبط تصنيع البروتين البكتيري (30S).",

    indications: "الإنتانات الشديدة.",

    contraindications: "الحساسية للأمينوغلايكوسايد.",

    sideEffects: "سمية كلوية وسمعية.",

    pregnancy: "يستخدم عند الضرورة.",

    storage: "يحفظ بدرجة حرارة الغرفة."
},

ceftriaxone: {
    name: "Ceftriaxone",
    category: "Antibiotics",
    diseases: ["pneumonia", "sepsis"],

    mgPerKg: 50,
    frequency: "مرة يومياً",
    maxDose: 2000,

    minAge: 0,
    maxAge: 12,

    warnings: "يعطى حقناً.",

    alerts: [
        "لا يخلط مع محاليل الكالسيوم للمواليد.",
        "يعطى IM أو IV."
    ],

    strengths: [
        { name: "1 g Vial", concentration: 1000 }
    ],

    notes: "سيفالوسبورين واسع الطيف.",

    mechanism: "يثبط تصنيع جدار الخلية.",

    indications: "الالتهاب الرئوي، التهاب السحايا، الإنتان.",

    contraindications: "حساسية السيفالوسبورينات.",

    sideEffects: "إسهال، طفح جلدي.",

    pregnancy: "آمن.",

    storage: "يحفظ بدرجة حرارة الغرفة."
},

vancomycin: {
    name: "Vancomycin",
    category: "Antibiotics",
    diseases: ["sepsis"],

    mgPerKg: 15,
    frequency: "كل 6 ساعات",
    maxDose: 2000,

    minAge: 0,
    maxAge: 12,

    warnings: "يعطى ببطء وريداً.",

    alerts: [
        "خطر Red Man Syndrome.",
        "يراقب مستوى الدواء."
    ],

    strengths: [
        { name: "500 mg Vial", concentration: 500 }
    ],

    notes: "لعلاج الجراثيم المقاومة.",

    mechanism: "يثبط تصنيع جدار الخلية.",

    indications: "MRSA والإنتانات الشديدة.",

    contraindications: "الحساسية للدواء.",

    sideEffects: "سمية كلوية، Red Man Syndrome.",

    pregnancy: "بحذر.",

    storage: "يحفظ بدرجة حرارة الغرفة."
},
    oralRehydration: {
    name: "ORS",
    category: "Rehydration",
    diseases: ["diarrhea"],

    mgPerKg: 10,
    frequency: "بعد كل إسهال",
    maxDose: 1000,

    minAge: 0,
    maxAge: 12,

    warnings: "يحضر حسب التعليمات ولا يستخدم بعد 24 ساعة من التحضير.",

    alerts: [
        "أفضل علاج للجفاف.",
        "يعطى على جرعات صغيرة ومتكررة."
    ],

    strengths: [
        { name: "ORS Solution", concentration: 1 }
    ],

    notes: "يعوض السوائل والأملاح.",

    mechanism: "يعوض الماء والصوديوم والبوتاسيوم المفقود.",

    indications: "الإسهال والجفاف.",

    contraindications: "الصدمة أو الجفاف الشديد الذي يحتاج سوائل وريدية.",

    sideEffects: "نادراً انتفاخ بسيط.",

    pregnancy: "آمن.",

    storage: "بعد التحضير يستخدم خلال 24 ساعة."
},

adrenaline: {
    name: "Adrenaline",
    category: "Emergency",
    diseases: ["anaphylaxis"],

    mgPerKg: 0.01,
    frequency: "حسب الحاجة",
    maxDose: 0.5,

    minAge: 0,
    maxAge: 12,

    warnings: "يعطى عضلياً في حالات الحساسية المفرطة.",

    alerts: [
        "دواء منقذ للحياة.",
        "لا تؤخر إعطاءه عند الشك بوجود Anaphylaxis."
    ],

    strengths: [
        { name: "1 mg/mL", concentration: 1 }
    ],

    notes: "للطوارئ فقط.",

    mechanism: "ينشط مستقبلات Alpha و Beta.",

    indications: "Anaphylaxis.",

    contraindications: "لا يوجد مانع عند الحساسية المفرطة.",

    sideEffects: "تسرع القلب، رجفة.",

    pregnancy: "يعطى عند الضرورة.",

    storage: "يحفظ بعيداً عن الضوء."
},

hydrocortisone: {
    name: "Hydrocortisone",
    category: "Steroids",
    diseases: ["anaphylaxis"],

    mgPerKg: 2,
    frequency: "حسب الطبيب",
    maxDose: 100,

    minAge: 0,
    maxAge: 12,

    warnings: "ليس بديلاً عن الأدرينالين.",

    alerts: [
        "يستخدم بعد إعطاء Adrenaline.",
        "يساعد على منع عودة الأعراض."
    ],

    strengths: [
        { name: "100 mg Vial", concentration: 100 }
    ],

    notes: "كورتيزون للطوارئ.",

    mechanism: "يثبط الالتهاب والمناعة.",

    indications: "الحساسية الشديدة.",

    contraindications: "عدوى فطرية جهازية غير معالجة.",

    sideEffects: "ارتفاع السكر، اضطراب المزاج.",

    pregnancy: "بحذر.",

    storage: "يحفظ بدرجة حرارة الغرفة."
},

insulin: {
    name: "Regular Insulin",
    category: "Endocrine",
    diseases: ["diabetes"],

    mgPerKg: 0.5,
    frequency: "حسب الطبيب",
    maxDose: 100,

    minAge: 0,
    maxAge: 12,

    warnings: "يستخدم فقط تحت إشراف طبي.",

    alerts: [
        "راقب السكر باستمرار.",
        "قد يسبب هبوط السكر."
    ],

    strengths: [
        { name: "100 IU/mL", concentration: 100 }
    ],

    notes: "لعلاج السكري.",

    mechanism: "يزيد دخول الجلوكوز إلى الخلايا.",

    indications: "Diabetes Mellitus.",

    contraindications: "Hypoglycemia.",

    sideEffects: "هبوط السكر.",

    pregnancy: "آمن.",

    storage: "يحفظ في الثلاجة."
},

glucagon: {
    name: "Glucagon",
    category: "Emergency",
    diseases: ["hypoglycemia"],

    mgPerKg: 0.03,
    frequency: "جرعة واحدة",

    maxDose: 1,

    minAge: 0,
    maxAge: 12,

    warnings: "للحالات الطارئة فقط.",

    alerts: [
        "يعطى عند فقدان الوعي بسبب انخفاض السكر.",
        "يجب مراجعة المستشفى بعد إعطائه."
    ],

    strengths: [
        { name: "1 mg Injection", concentration: 1 }
    ],

    notes: "يرفع مستوى السكر بسرعة.",

    mechanism: "يحفز تحرير الجلوكوز من الكبد.",

    indications: "Hypoglycemia الشديدة.",

    contraindications: "ورم القواتم.",

    sideEffects: "غثيان وقيء.",

    pregnancy: "آمن.",

    storage: "يحفظ في الثلاجة."
}

};
    
    
