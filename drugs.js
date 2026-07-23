const drugs = {

paracetamol:{
    name:"Paracetamol",
    category:"Pain & Fever",
    diseases:["fever","pain"],

    mgPerKg:15,
    frequency:"كل 4-6 ساعات",
    maxDose:1000,

    minAge:0,
    maxAge:12,

    warnings:"لا تتجاوز الجرعة اليومية القصوى.",

    alerts:[
        "يمكن إعطاؤه مع الطعام أو بدونه.",
        "لا تجمعه مع أي دواء آخر يحتوي Paracetamol.",
        "راقب الجرعة اليومية القصوى."
    ],

    strengths:[
        {name:"120 mg / 5 mL", concentration:120},
        {name:"250 mg / 5 mL", concentration:250}
    ],

    notes:"يعطى عند الألم والحمى.",

    mechanism:"يثبط تصنيع البروستاغلاندينات داخل الجهاز العصبي المركزي مما يقلل الألم والحمى.",

    indications:"الحمى، الألم الخفيف إلى المتوسط.",

    contraindications:"حساسية للباراسيتامول، مرض كبدي شديد.",

    sideEffects:"غثيان، طفح جلدي، سمية كبدية عند الجرعات العالية.",

    pregnancy:"يعتبر آمناً عند استخدامه بالجرعات الموصى بها.",

    storage:"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة."
},

ibuprofen:{
    name:"Ibuprofen",
    category:"Pain & Fever",
    diseases:["fever","pain"],

    mgPerKg:10,
    frequency:"كل 6-8 ساعات",
    maxDose:400,

    minAge:0.5,
    maxAge:12,

    warnings:"يمنع عند الجفاف الشديد وقرحة المعدة.",

    alerts:[
        "يفضل إعطاؤه بعد الطعام.",
        "تجنب استخدامه عند الجفاف.",
        "لا يستخدم عند قرحة المعدة."
    ],

    strengths:[
        {name:"100 mg / 5 mL", concentration:100}
    ],

    notes:"يفضل بعد الطعام.",

    mechanism:"يثبط إنزيمات COX-1 و COX-2 مما يقلل تصنيع البروستاغلاندينات ويخفف الألم والحمى والالتهاب.",

    indications:"الحمى، الألم، الالتهابات.",

    contraindications:"قرحة المعدة، النزف، الحساسية لمضادات الالتهاب، الجفاف الشديد.",

    sideEffects:"ألم معدة، غثيان، قرحة، نزف معدي، اضطراب كلوي.",

    pregnancy:"يمنع في الثلث الأخير من الحمل ويستخدم بحذر في باقي الحمل.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

amoxicillin:{
    name:"Amoxicillin",
    category:"Antibiotics",
    diseases:["otitis","pharyngitis","sinusitis","pneumonia"],

    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:500,

    minAge:0,
    maxAge:12,

    warnings:"تأكد من عدم وجود حساسية للبنسلين.",

    alerts:[
        "أكمل مدة العلاج كاملة.",
        "رج العبوة جيداً قبل كل جرعة.",
        "لا توقف المضاد عند تحسن الأعراض."
    ],

    strengths:[
        {name:"125 mg / 5 mL", concentration:125},
        {name:"250 mg / 5 mL", concentration:250}
    ],

    notes:"أكمل العلاج للنهاية.",

    mechanism:"يثبط تصنيع جدار الخلية البكتيرية.",

    indications:"التهاب الأذن، التهاب الحلق، الجيوب الأنفية، الالتهاب الرئوي.",

    contraindications:"حساسية البنسلين.",

    sideEffects:"إسهال، طفح جلدي، غثيان.",

    pregnancy:"آمن أثناء الحمل عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة، والمعلق بعد التحضير في الثلاجة."
},

coamoxiclav:{
    name:"Co-amoxiclav",
    category:"Antibiotics",
    diseases:["otitis","sinusitis","pneumonia"],

    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:875,

    minAge:0,
    maxAge:12,

    warnings:"يعطى بعد الطعام.",

    alerts:[
        "قد يسبب اضطراباً هضمياً.",
        "رج العبوة جيداً قبل الاستخدام.",
        "يفضل تناوله بعد الوجبات."
    ],

    strengths:[
        {name:"228 mg / 5 mL", concentration:228},
        {name:"457 mg / 5 mL", concentration:457}
    ],

    notes:"يستخدم للالتهابات المتوسطة والشديدة.",

    mechanism:"أموكسيسيلين يثبط جدار الخلية، والكلافولانيك يمنع بيتا لاكتاماز.",

    indications:"التهابات الجهاز التنفسي، الأذن، الجيوب، الجلد.",

    contraindications:"حساسية البنسلين أو اضطرابات الكبد السابقة بسبب الدواء.",

    sideEffects:"إسهال، غثيان، طفح جلدي.",

    pregnancy:"يعتبر آمناً عند الحاجة.",

    storage:"يحفظ المعلق في الثلاجة بعد التحضير."
},
    azithromycin:{
    name:"Azithromycin",
    category:"Antibiotics",
    diseases:["pharyngitis","pneumonia"],

    mgPerKg:10,
    frequency:"مرة يومياً",
    maxDose:500,

    minAge:0,
    maxAge:12,

    warnings:"قد يسبب إطالة QT.",

    alerts:[
        "يعطى مرة واحدة يومياً.",
        "يمكن تناوله مع الطعام أو بدونه.",
        "أكمل مدة العلاج كاملة."
    ],

    strengths:[
        {name:"200 mg / 5 mL", concentration:200}
    ],

    notes:"يعطى مرة واحدة يومياً.",

    mechanism:"يثبط تصنيع البروتين البكتيري بالارتباط مع الوحدة 50S.",

    indications:"التهاب الحلق، الالتهاب الرئوي، التهابات الجهاز التنفسي.",

    contraindications:"حساسية الماكروليدات.",

    sideEffects:"إسهال، غثيان، ألم بطني، إطالة QT.",

    pregnancy:"يستخدم عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

cefixime:{
    name:"Cefixime",
    category:"Antibiotics",
    diseases:["uti","otitis"],

    mgPerKg:8,
    frequency:"مرة أو مرتين يومياً",
    maxDose:400,

    minAge:0.5,
    maxAge:12,

    warnings:"يعدل عند القصور الكلوي.",

    alerts:[
        "يعطى مع أو بدون الطعام.",
        "أكمل مدة العلاج كاملة."
    ],

    strengths:[
        {name:"100 mg / 5 mL", concentration:100}
    ],

    notes:"فعال ضد التهابات البول.",

    mechanism:"يثبط تصنيع جدار الخلية البكتيرية.",

    indications:"التهابات البول، الأذن، الجهاز التنفسي.",

    contraindications:"حساسية السيفالوسبورينات.",

    sideEffects:"إسهال، طفح جلدي، غثيان.",

    pregnancy:"آمن نسبياً.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

cefuroxime:{
    name:"Cefuroxime",
    category:"Antibiotics",
    diseases:["sinusitis","otitis"],

    mgPerKg:15,
    frequency:"كل 12 ساعة",
    maxDose:500,

    minAge:0.25,
    maxAge:12,

    warnings:"يفضل بعد الطعام.",

    alerts:[
        "يعطى بعد الطعام لتحسين الامتصاص.",
        "أكمل العلاج حتى النهاية."
    ],

    strengths:[
        {name:"125 mg / 5 mL", concentration:125}
    ],

    notes:"من الجيل الثاني للسيفالوسبورينات.",

    mechanism:"يثبط تصنيع جدار الخلية البكتيرية.",

    indications:"التهاب الجيوب، الأذن، الجهاز التنفسي.",

    contraindications:"حساسية السيفالوسبورينات.",

    sideEffects:"غثيان، إسهال، طفح جلدي.",

    pregnancy:"يستخدم عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

cephalexin:{
    name:"Cephalexin",
    category:"Antibiotics",
    diseases:["skin","pharyngitis"],

    mgPerKg:25,
    frequency:"كل 8 ساعات",
    maxDose:500,

    minAge:0,
    maxAge:12,

    warnings:"يستخدم بحذر عند حساسية السيفالوسبورينات.",

    alerts:[
        "أكمل مدة العلاج.",
        "يمكن تناوله مع الطعام."
    ],

    strengths:[
        {name:"125 mg / 5 mL", concentration:125},
        {name:"250 mg / 5 mL", concentration:250}
    ],

    notes:"مفيد لالتهابات الجلد والبلعوم.",

    mechanism:"يثبط تصنيع جدار الخلية البكتيرية.",

    indications:"التهابات الجلد، البلعوم، المسالك البولية.",

    contraindications:"حساسية السيفالوسبورينات.",

    sideEffects:"إسهال، غثيان، طفح جلدي.",

    pregnancy:"يعتبر آمناً عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

clarithromycin:{
    name:"Clarithromycin",
    category:"Antibiotics",
    diseases:["pneumonia","pharyngitis"],

    mgPerKg:7.5,
    frequency:"كل 12 ساعة",
    maxDose:500,

    minAge:0.5,
    maxAge:12,

    warnings:"قد يطيل QT ويتداخل مع أدوية عديدة.",

    alerts:[
        "تجنب مشاركته مع أدوية تطيل QT.",
        "أكمل العلاج كاملاً."
    ],

    strengths:[
        {name:"125 mg / 5 mL", concentration:125},
        {name:"250 mg / 5 mL", concentration:250}
    ],

    notes:"بديل عند حساسية البنسلين.",

    mechanism:"يثبط تصنيع البروتين البكتيري بالارتباط مع الوحدة 50S.",

    indications:"التهابات الجهاز التنفسي، التهاب الحلق، الالتهاب الرئوي.",

    contraindications:"حساسية الماكروليدات، إطالة QT.",

    sideEffects:"غثيان، إسهال، اضطراب التذوق.",

    pregnancy:"يستخدم عند الضرورة فقط.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},
    metronidazole:{
    name:"Metronidazole",
    category:"Antibiotics",
    diseases:["diarrhea"],

    mgPerKg:7.5,
    frequency:"كل 8 ساعات",
    maxDose:500,

    minAge:0,
    maxAge:12,

    warnings:"يمنع تناول الكحول معه.",

    alerts:[
        "يعطى بعد الطعام إذا سبب اضطراب المعدة.",
        "أكمل العلاج للنهاية."
    ],

    strengths:[
        {name:"125 mg / 5 mL", concentration:125},
        {name:"200 mg / 5 mL", concentration:200}
    ],

    notes:"فعال ضد الجراثيم اللاهوائية والطفيليات.",

    mechanism:"يثبط تصنيع الحمض النووي للكائنات اللاهوائية والطفيليات.",

    indications:"الجيارديا، الأميبيا، الالتهابات اللاهوائية.",

    contraindications:"الحساسية للدواء واستعمال الكحول.",

    sideEffects:"طعم معدني، غثيان، صداع.",

    pregnancy:"يستخدم بحذر خاصة في الأشهر الأولى.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

cetirizine:{
    name:"Cetirizine",
    category:"Antihistamines",
    diseases:["allergy"],

    mgPerKg:0.25,
    frequency:"مرة يومياً",
    maxDose:10,

    minAge:2,
    maxAge:12,

    warnings:"قد يسبب نعاساً خفيفاً.",

    alerts:[
        "قد يسبب نعاساً عند بعض الأطفال.",
        "يفضل مساءً إذا سبب النعاس."
    ],

    strengths:[
        {name:"5 mg / 5 mL", concentration:5}
    ],

    notes:"لعلاج الحساسية والشرى.",

    mechanism:"يثبط مستقبلات H1 للهيستامين.",

    indications:"الحساسية الموسمية، الشرى، الحكة.",

    contraindications:"الحساسية للسيتيريزين.",

    sideEffects:"نعاس خفيف، جفاف الفم.",

    pregnancy:"يستخدم عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

loratadine:{
    name:"Loratadine",
    category:"Antihistamines",
    diseases:["allergy"],

    mgPerKg:0.2,
    frequency:"مرة يومياً",
    maxDose:10,

    minAge:2,
    maxAge:12,

    warnings:"أقل تسبباً للنعاس.",

    alerts:[
        "يعطى مرة واحدة يومياً.",
        "يمكن تناوله مع الطعام أو بدونه."
    ],

    strengths:[
        {name:"5 mg / 5 mL", concentration:5}
    ],

    notes:"مضاد هيستامين طويل المفعول.",

    mechanism:"يثبط مستقبلات H1 دون عبور كبير للدماغ.",

    indications:"الحساسية الموسمية والشرى.",

    contraindications:"الحساسية للدواء.",

    sideEffects:"صداع، جفاف الفم.",

    pregnancy:"يستخدم عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

chlorpheniramine:{
    name:"Chlorpheniramine",
    category:"Antihistamines",
    diseases:["allergy"],

    mgPerKg:0.1,
    frequency:"كل 6-8 ساعات",
    maxDose:4,

    minAge:2,
    maxAge:12,

    warnings:"يسبب النعاس.",

    alerts:[
        "قد يسبب النعاس الشديد.",
        "تجنب استخدامه مع أدوية مهدئة."
    ],

    strengths:[
        {name:"2 mg / 5 mL", concentration:2}
    ],

    notes:"يستخدم للحساسية والحكة.",

    mechanism:"يثبط مستقبلات H1 ويعبر الحاجز الدماغي.",

    indications:"الحساسية، الحكة، الرشح.",

    contraindications:"الزرق ضيق الزاوية وحديثي الولادة.",

    sideEffects:"نعاس شديد، جفاف الفم، دوخة.",

    pregnancy:"يستخدم بحذر.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},
    salbutamol:{
    name:"Salbutamol",
    category:"Asthma",
    diseases:["asthma"],

    mgPerKg:0.15,
    frequency:"كل 6 ساعات",
    maxDose:4,

    minAge:2,
    maxAge:12,

    warnings:"قد يسبب رجفة وتسارع القلب.",

    alerts:[
        "قد يسبب رجفة بسيطة.",
        "قد يزيد نبض القلب.",
        "يستخدم عند الحاجة."
    ],

    strengths:[
        {name:"2 mg / 5 mL", concentration:2}
    ],

    notes:"موسع قصبي سريع المفعول.",

    mechanism:"ينبه مستقبلات β2 مما يؤدي إلى توسع القصبات الهوائية.",

    indications:"الربو، التشنج القصبي.",

    contraindications:"الحساسية للدواء.",

    sideEffects:"رجفة، تسارع القلب، عصبية.",

    pregnancy:"يستخدم عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

budesonide:{
    name:"Budesonide",
    category:"Asthma",
    diseases:["asthma"],

    mgPerKg:0.5,
    frequency:"مرتين يومياً",
    maxDose:2,

    minAge:1,
    maxAge:12,

    warnings:"يجب المضمضة بعد الاستخدام.",

    alerts:[
        "المضمضة بعد كل استخدام.",
        "ليس لإيقاف نوبة الربو الحادة."
    ],

    strengths:[
        {name:"0.5 mg / 2 mL", concentration:1.25}
    ],

    notes:"كورتيزون استنشاقي.",

    mechanism:"كورتيكوستيرويد يقلل الالتهاب داخل الشعب الهوائية.",

    indications:"السيطرة على الربو.",

    contraindications:"الحساسية للدواء.",

    sideEffects:"فطريات الفم، بحة الصوت.",

    pregnancy:"يستخدم عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

montelukast:{
    name:"Montelukast",
    category:"Asthma",
    diseases:["asthma","allergy"],

    mgPerKg:0.2,
    frequency:"مرة مساءً",
    maxDose:5,

    minAge:2,
    maxAge:12,

    warnings:"قد يسبب تغيرات سلوكية نادرة.",

    alerts:[
        "يفضل مساءً.",
        "ليس لإيقاف نوبة الربو."
    ],

    strengths:[
        {name:"4 mg Chewable", concentration:4},
        {name:"5 mg Chewable", concentration:5}
    ],

    notes:"للوقاية من الربو والحساسية.",

    mechanism:"يثبط مستقبلات الليكوترينات ويقلل التهاب الشعب الهوائية.",

    indications:"الربو، حساسية الأنف.",

    contraindications:"الحساسية للدواء.",

    sideEffects:"صداع، اضطرابات نوم، تغيرات سلوكية نادرة.",

    pregnancy:"يستخدم عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

ondansetron:{
    name:"Ondansetron",
    category:"Antiemetic",
    diseases:["vomiting"],

    mgPerKg:0.15,
    frequency:"كل 8 ساعات",
    maxDose:8,

    minAge:0.5,
    maxAge:12,

    warnings:"قد يسبب إطالة QT.",

    alerts:[
        "يراقب عند مرضى القلب.",
        "قد يسبب صداعاً أو إمساكاً."
    ],

    strengths:[
        {name:"4 mg / 5 mL", concentration:4}
    ],

    notes:"لعلاج الغثيان والتقيؤ.",

    mechanism:"يثبط مستقبلات 5-HT3 المضادة للغثيان.",

    indications:"الغثيان والتقيؤ.",

    contraindications:"الحساسية للدواء، إطالة QT.",

    sideEffects:"صداع، إمساك، دوخة.",

    pregnancy:"يستخدم عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},
    fluconazole:{
    name:"Fluconazole",
    category:"Antifungal",
    diseases:["fungal"],

    mgPerKg:6,
    frequency:"مرة يومياً",
    maxDose:400,

    minAge:0,
    maxAge:12,

    warnings:"يراقب عند مرضى الكبد.",

    alerts:[
        "قد يرفع إنزيمات الكبد.",
        "تجنب استخدامه مع الأدوية التي تطيل QT."
    ],

    strengths:[
        {name:"50 mg / 5 mL", concentration:50}
    ],

    notes:"لعلاج العدوى الفطرية.",

    mechanism:"يثبط تصنيع الإرغوستيرول في جدار الفطريات.",

    indications:"العدوى الفطرية المختلفة.",

    contraindications:"الحساسية للأزولات.",

    sideEffects:"غثيان، ارتفاع إنزيمات الكبد، طفح.",

    pregnancy:"يتجنب بجرعات عالية.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

albendazole:{
    name:"Albendazole",
    category:"Antiparasitic",
    diseases:["worms"],

    mgPerKg:15,
    frequency:"جرعة واحدة",
    maxDose:400,

    minAge:1,
    maxAge:12,

    warnings:"تعاد الجرعة بعد أسبوعين لبعض أنواع الديدان.",

    alerts:[
        "يفضل بعد الطعام.",
        "تعالج جميع أفراد الأسرة عند الحاجة."
    ],

    strengths:[
        {name:"200 mg / 5 mL", concentration:200}
    ],

    notes:"لعلاج معظم الديدان المعوية.",

    mechanism:"يثبط امتصاص الجلوكوز داخل الديدان.",

    indications:"الديدان المعوية.",

    contraindications:"الحساسية للدواء.",

    sideEffects:"ألم بطني، غثيان، صداع.",

    pregnancy:"يمنع أثناء الحمل.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

zinc:{
    name:"Zinc",
    category:"Vitamins",
    diseases:["diarrhea"],

    mgPerKg:1,
    frequency:"مرة يومياً",
    maxDose:20,

    minAge:0,
    maxAge:12,

    warnings:"قد يسبب اضطراباً بسيطاً بالمعدة.",

    alerts:[
        "يعطى مع ORS في حالات الإسهال.",
        "يفضل بعد الطعام."
    ],

    strengths:[
        {name:"20 mg / 5 mL", concentration:20}
    ],

    notes:"يعطى مع ORS في الإسهال.",

    mechanism:"يعوض نقص الزنك ويساعد على إصلاح الغشاء المخاطي للأمعاء.",

    indications:"الإسهال، نقص الزنك.",

    contraindications:"الحساسية للدواء.",

    sideEffects:"غثيان خفيف، اضطراب معدي.",

pregnancy:"آمن.",

storage:"يحفظ بدرجة حرارة الغرفة."
},

    iron:{
    name:"Iron",
    category:"Vitamins",
    diseases:["anemia"],

    mgPerKg:3,
    frequency:"مرة يومياً",
    maxDose:60,

    minAge:0,
    maxAge:12,

    warnings:"قد يسبب إمساكاً وتغير لون البراز.",

    alerts:[
        "يفضل إعطاؤه على معدة فارغة إن أمكن.",
        "لا يعطى مع الحليب أو الكالسيوم.",
        "يعطى مع فيتامين C لتحسين الامتصاص."
    ],

    strengths:[
        {name:"30 mg / 5 mL", concentration:30}
    ],

    notes:"لعلاج فقر الدم الناتج عن نقص الحديد.",

    mechanism:"يعوض نقص الحديد اللازم لتكوين الهيموغلوبين.",

    indications:"فقر الدم بنقص الحديد.",

    contraindications:"زيادة مخزون الحديد.",

    sideEffects:"إمساك، غثيان، تغير لون البراز.",

    pregnancy:"آمن ويوصى به عند الحاجة.",

    storage:"يحفظ بعيداً عن الأطفال."
},

calcium:{
    name:"Calcium",
    category:"Vitamins",
    diseases:["calcium"],

    mgPerKg:50,
    frequency:"مرة أو مرتين يومياً",
    maxDose:1000,

    minAge:0,
    maxAge:12,

    warnings:"يفضل تناوله بعيداً عن الحديد.",

    alerts:[
        "يفصل ساعتين عن الحديد.",
        "يفضل مع الطعام."
    ],

    strengths:[
        {name:"125 mg / 5 mL", concentration:125}
    ],

    notes:"لعلاج نقص الكالسيوم.",

    mechanism:"يعوض نقص الكالسيوم الضروري للعظام والعضلات.",

    indications:"نقص الكالسيوم.",

    contraindications:"فرط كالسيوم الدم.",

    sideEffects:"إمساك، انتفاخ.",

    pregnancy:"آمن.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

oralRehydration:{
    name:"ORS",
    category:"Vitamins",
    diseases:["diarrhea"],

    mgPerKg:10,
    frequency:"بعد كل إسهال",
    maxDose:1000,

    minAge:0,
    maxAge:12,

    warnings:"يحضر حسب التعليمات.",

    alerts:[
        "يحضر بالماء النظيف فقط.",
        "يرمى بعد 24 ساعة من التحضير."
    ],

    strengths:[
        {name:"جاهز للاستعمال", concentration:1}
    ],

    notes:"يعوض السوائل والأملاح.",

    mechanism:"يعوض الماء والأملاح المفقودة أثناء الإسهال.",

    indications:"الجفاف والإسهال.",

    contraindications:"انسداد الأمعاء أو القيء غير المسيطر عليه.",

    sideEffects:"نادراً اضطراب معدي.",

    pregnancy:"آمن.",

    storage:"يحفظ في مكان جاف، وبعد التحضير يستخدم خلال المدة الموصى بها."
},

nystatin:{
    name:"Nystatin",
    category:"Antifungal",
    diseases:["fungal"],

    mgPerKg:1,
    frequency:"4 مرات يومياً",
    maxDose:5,

    minAge:0,
    maxAge:12,

    warnings:"يرج جيداً قبل الاستعمال.",

    alerts:[
        "يحفظ داخل الفم أطول مدة ممكنة قبل البلع.",
        "يكمل العلاج عدة أيام بعد اختفاء الأعراض."
    ],

    strengths:[
        {name:"100000 IU / mL", concentration:100000}
    ],

    notes:"لعلاج فطريات الفم.",

    mechanism:"يرتبط بالإرغوستيرول ويؤدي إلى تدمير غشاء الخلية الفطرية.",

    indications:"فطريات الفم.",

    contraindications:"الحساسية للدواء.",

    sideEffects:"تهيج بسيط أو غثيان.",

    pregnancy:"آمن.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

cetirizineDrops:{
    name:"Cetirizine Drops",
    category:"Antihistamines",
    diseases:["allergy"],

    mgPerKg:0.25,
    frequency:"مرة يومياً",
    maxDose:10,

    minAge:0.5,
    maxAge:12,

    warnings:"قد يسبب نعاساً خفيفاً.",

    alerts:[
        "مناسب للأطفال الصغار.",
        "قد يسبب نعاساً بسيطاً."
    ],

    strengths:[
        {name:"10 mg / mL", concentration:10}
    ],

    notes:"مناسب للأطفال الصغار.",

    mechanism:"يثبط مستقبلات H1 للهيستامين.",

    indications:"الحساسية عند الأطفال.",

    contraindications:"الحساسية للدواء.",

    sideEffects:"نعاس خفيف.",

    pregnancy:"يستخدم عند الحاجة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

dexamethasone:{
    name:"Dexamethasone",
    category:"Steroids",
    diseases:["asthma","allergy"],

    mgPerKg:0.15,
    frequency:"حسب وصف الطبيب",
    maxDose:10,

    minAge:0,
    maxAge:12,

    warnings:"لا يوقف بشكل مفاجئ بعد الاستخدام الطويل.",

    alerts:[
        "يستخدم للحالات الخاصة فقط.",
        "لا يستعمل لفترات طويلة دون إشراف طبي."
    ],

    strengths:[
        {name:"0.5 mg / 5 mL", concentration:0.5}
    ],

    notes:"كورتيكوستيرويد للحالات الخاصة.",

    mechanism:"كورتيكوستيرويد قوي مضاد للالتهاب ومثبط للمناعة.",

    indications:"الحساسية الشديدة، الربو، الوذمة.",

    contraindications:"العدوى الفطرية الجهازية غير المعالجة.",

    sideEffects:"ارتفاع السكر، زيادة الشهية، تثبيط المناعة.",

    pregnancy:"يستخدم عند الضرورة.",

    storage:"يحفظ بدرجة حرارة الغرفة."
},

prednisolone:{
    name:"Prednisolone",
    category:"Steroids",
    diseases:["asthma","allergy"],

    mgPerKg:1,
    frequency:"مرة يومياً",
    maxDose:60,

    minAge:0,
    maxAge:12,

    warnings:"يؤخذ بعد الطعام.",

    alerts:[
        "لا يوقف فجأة بعد الاستخدام الطويل.",
        "يفضل صباحاً."
    ],

    strengths:[
        {name:"15 mg / 5 mL", concentration:15}
    ],

    notes:"يستخدم لنوبات الربو والحساسية.",

    mechanism:"كورتيكوستيرويد يقلل الالتهاب ويثبط الاستجابة المناعية.",

    indications:"الربو، الحساسية، الأمراض الالتهابية.",

    contraindications:"العدوى الفطرية الجهازية غير المعالجة.",

    sideEffects:"زيادة الشهية، ارتفاع السكر، اضطراب النوم.",

    pregnancy:"يستخدم عند الحاجة وتحت إشراف طبي.",

    storage:"يحفظ بدرجة حرارة الغرفة."
}

};
