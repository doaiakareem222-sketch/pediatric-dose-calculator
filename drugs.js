// ======================================================
// DoseCare v5.0
// Drugs Database
// ======================================================

const drugs = {

paracetamol:{

id:"paracetamol",

name:"Paracetamol",

genericName:"Paracetamol",

brandNames:[
"Panadol",
"Calpol",
"Adol",
"Fevadol"
],

category:"Pain & Fever",

therapeuticClass:"Analgesic & Antipyretic",

pharmacologicalClass:"Para-aminophenol Derivative",

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
"يثبط تصنيع البروستاغلاندينات داخل الجهاز العصبي المركزي، مما يقلل الألم والحمى مع تأثير مضاد التهاب ضعيف.",

indications:
"الحمى، الألم الخفيف إلى المتوسط، الصداع، ألم الأسنان، الألم بعد التطعيم.",

contraindications:
"حساسية الباراسيتامول، القصور الكبدي الشديد.",

warnings:
"لا تتجاوز الجرعة اليومية القصوى. يستخدم بحذر لدى مرضى الكبد أو عند تناول الكحول.",

sideEffects:
"غثيان، قيء، طفح جلدي، تفاعلات تحسسية. الجرعات العالية قد تسبب فشلاً كبدياً.",

pregnancy:
"يعد آمناً نسبياً أثناء الحمل عند استخدامه بالجرعات الموصى بها.",

lactation:
"آمن أثناء الرضاعة الطبيعية.",

doseRange:
"10–15 mg/kg كل 4–6 ساعات، وبحد أقصى 75 mg/kg/day للأطفال.",

onset:
"30–60 دقيقة",

duration:
"4–6 ساعات",

halfLife:
"2–3 ساعات",

proteinBinding:
"10–25%",

metabolism:
"يستقلب في الكبد بواسطة Glucuronidation و Sulfation.",

elimination:
"يطرح عن طريق الكلى على شكل مستقلبات.",

storage:
"يحفظ بدرجة حرارة أقل من 25°C بعيداً عن الرطوبة والضوء.",

monitoring:[

"مراقبة وظائف الكبد عند الاستخدام الطويل.",

"التأكد من عدم تجاوز الجرعة اليومية.",

"متابعة تحسن الحمى أو الألم."

],

clinicalPearls:[

"الخيار الأول لخفض الحرارة عند الأطفال.",

"يفضل على NSAIDs عند مرضى الربو في معظم الحالات.",

"التسمم يعالج بـ N-acetylcysteine إذا أعطي مبكراً."

],

blackBox:
"الجرعات الزائدة قد تسبب تسمماً كبدياً شديداً قد يؤدي إلى الوفاة.",

interactions:[

"Warfarin (يزيد INR عند الاستخدام الطويل).",

"Alcohol (يزيد خطر السمية الكبدية).",

"Phenytoin و Carbamazepine قد يزيدان السمية الكبدية."

],

notes:
"يمكن إعطاؤه مع أو بدون الطعام.",

alerts:[

"لا تتجاوز الجرعة اليومية القصوى.",

"لا تجمعه مع أي دواء يحتوي على Paracetamol.",

"راقب وظائف الكبد عند الاستخدام الطويل."

]

},
ibuprofen:{

id:"ibuprofen",

name:"Ibuprofen",

genericName:"Ibuprofen",

brandNames:[
"Brufen",
"Nurofen",
"Advil",
"Profen"
],

category:"Pain & Fever",

therapeuticClass:"NSAID",

pharmacologicalClass:"Propionic Acid Derivative",

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
"يثبط إنزيمي COX-1 و COX-2 مما يقلل تصنيع البروستاغلاندينات، وبالتالي يخفف الألم والالتهاب والحمى.",

indications:
"الحمى، الألم الخفيف إلى المتوسط، التهاب الحلق، ألم الأسنان، التهاب الأذن، التهاب المفاصل.",

contraindications:
"حساسية تجاه NSAIDs، قرحة المعدة النشطة، النزف الهضمي، القصور الكلوي الشديد، الجفاف الشديد.",

warnings:
"يعطى بعد الطعام لتقليل تهيج المعدة. يستخدم بحذر عند مرضى الربو أو أمراض الكلى.",

sideEffects:
"ألم معدة، غثيان، قيء، نزف معدي، اضطراب كلوي، طفح جلدي، احتباس سوائل.",

pregnancy:
"يمنع استخدامه في الثلث الأخير من الحمل.",

lactation:
"يمكن استخدامه أثناء الرضاعة الطبيعية عند الحاجة.",

doseRange:
"5–10 mg/kg كل 6–8 ساعات، وبحد أقصى 40 mg/kg/day للأطفال.",

onset:
"30 دقيقة",

duration:
"6–8 ساعات",

halfLife:
"2 ساعات",

proteinBinding:
"≈99%",

metabolism:
"يستقلب في الكبد بواسطة CYP2C9.",

elimination:
"يطرح عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة أقل من 25°C بعيداً عن الرطوبة.",

monitoring:[

"مراقبة علامات النزف الهضمي.",

"مراقبة وظائف الكلى عند الاستخدام الطويل.",

"متابعة تحسن الحمى أو الألم."

],

clinicalPearls:[

"يفضل إعطاؤه بعد الطعام.",

"لا يستخدم للأطفال أقل من 6 أشهر إلا بتوجيه طبي.",

"تجنب إعطاءه مع NSAIDs أخرى."

],

blackBox:
"قد يزيد خطر النزف الهضمي والأحداث القلبية الوعائية عند الاستخدام الطويل أو الجرعات العالية.",

interactions:[

"Warfarin (يزيد خطر النزف).",

"Aspirin (يزيد خطر قرحة المعدة).",

"Corticosteroids (يزيد خطر النزف الهضمي).",

"ACE Inhibitors ومدرات البول (قد تقل كفاءة العلاج وتزداد خطورة إصابة الكلى)."

],

notes:
"يفضل تناوله بعد الطعام مع كمية كافية من الماء.",

alerts:[

"قد يسبب نزفاً معدياً.",

"تجنب استخدامه عند الجفاف.",

"لا يعطى مع NSAIDs أخرى.",

"يستخدم بحذر عند مرضى الربو."

]

},
amoxicillin:{

id:"amoxicillin",

name:"Amoxicillin",

genericName:"Amoxicillin",

brandNames:[
"Amoxil",
"Ospamox",
"Hymox",
"Mox"
],

category:"Antibiotics",

therapeuticClass:"Penicillin Antibiotic",

pharmacologicalClass:"Aminopenicillin",

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
"يثبط تصنيع جدار الخلية البكتيرية بالارتباط مع Penicillin-Binding Proteins مما يؤدي إلى قتل البكتيريا.",

indications:
"التهاب الأذن الوسطى، التهاب البلعوم، التهاب الجيوب الأنفية، الالتهاب الرئوي، التهابات الجلد، التهابات المسالك البولية وبعض التهابات الأسنان.",

contraindications:
"حساسية الأموكسيسيلين أو أي من أدوية البنسلين.",

warnings:
"يستخدم بحذر عند مرضى القصور الكلوي أو من لديهم تاريخ حساسية للبنسلين أو السيفالوسبورينات.",

sideEffects:
"إسهال، غثيان، قيء، طفح جلدي، حساسية، عدوى فطرية بالفم أو المهبل.",

pregnancy:
"يعد آمناً أثناء الحمل عند الحاجة.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"20–40 mg/kg/day مقسمة كل 8 ساعات حسب شدة العدوى.",

onset:
"1–2 ساعة",

duration:
"8 ساعات",

halfLife:
"حوالي 1 ساعة",

proteinBinding:
"≈20%",

metabolism:
"استقلاب بسيط في الكبد.",

elimination:
"يطرح بشكل رئيسي عن طريق الكلى.",

storage:
"يحفظ المعلق بعد التحضير في الثلاجة ويستخدم خلال 14 يوماً.",

monitoring:[

"متابعة تحسن أعراض العدوى.",

"مراقبة ظهور الطفح أو الحساسية.",

"تعديل الجرعة عند القصور الكلوي."

],

clinicalPearls:[

"يجب إكمال مدة العلاج كاملة.",

"رج الزجاجة جيداً قبل كل جرعة.",

"يمكن تناوله مع الطعام أو بدونه.",

"فعال فقط ضد العدوى البكتيرية."

],

blackBox:
"قد تحدث تفاعلات تحسسية شديدة (Anaphylaxis) عند المرضى الذين لديهم حساسية للبنسلين.",

interactions:[

"Warfarin (قد يزيد INR).",

"Allopurinol (يزيد احتمال الطفح الجلدي).",

"Methotrexate (يزيد سميته).",

"Probenecid (يزيد تركيز الأموكسيسيلين في الدم)."

],

notes:
"أكمل العلاج حتى نهايته حتى مع تحسن الأعراض.",

alerts:[

"اسأل عن حساسية البنسلين.",

"رج العبوة جيداً قبل الاستخدام.",

"لا توقف المضاد الحيوي عند تحسن الأعراض.",

"احفظ المعلق في الثلاجة بعد التحضير."

]

},
coamoxiclav:{

id:"coamoxiclav",

name:"Co-amoxiclav",

genericName:"Amoxicillin + Clavulanic Acid",

brandNames:[
"Augmentin",
"Curam",
"Clavulin",
"Amoclan"
],

category:"Antibiotics",

therapeuticClass:"Penicillin Antibiotic",

pharmacologicalClass:"Aminopenicillin + Beta-lactamase Inhibitor",

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
"الأموكسيسيلين يثبط تصنيع جدار الخلية البكتيرية، بينما يمنع حمض الكلافولانيك إنزيمات Beta-lactamase مما يحمي الأموكسيسيلين من التحلل.",

indications:
"التهاب الأذن الوسطى، التهاب الجيوب الأنفية، الالتهاب الرئوي، التهابات الجلد، التهابات الأسنان، والتهابات المسالك البولية.",

contraindications:
"حساسية البنسلين أو السيفالوسبورينات، أو حدوث يرقان أو اضطراب كبدي سابق بسبب Co-amoxiclav.",

warnings:
"يستخدم بحذر عند مرضى الكبد أو القصور الكلوي، ويجب تعديل الجرعة عند انخفاض وظائف الكلى.",

sideEffects:
"إسهال، غثيان، قيء، طفح جلدي، اضطرابات هضمية، ارتفاع إنزيمات الكبد، وعدوى فطرية.",

pregnancy:
"يعتبر آمناً نسبياً أثناء الحمل عند الحاجة.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"25–45 mg/kg/day (Amoxicillin component) مقسمة كل 8 أو 12 ساعة حسب شدة العدوى.",

onset:
"1–2 ساعة",

duration:
"8 ساعات",

halfLife:
"حوالي 1 ساعة",

proteinBinding:
"Amoxicillin ≈20% ، Clavulanic Acid ≈25%",

metabolism:
"يستقلب جزئياً في الكبد.",

elimination:
"يطرح بشكل رئيسي عن طريق الكلى.",

storage:
"يحفظ المعلق بعد التحضير في الثلاجة ويستخدم خلال 7–10 أيام حسب الشركة المصنعة.",

monitoring:[

"متابعة تحسن أعراض العدوى.",

"مراقبة وظائف الكبد عند العلاج الطويل.",

"تعديل الجرعة في القصور الكلوي."

],

clinicalPearls:[

"يفضل تناوله بعد الطعام لتقليل اضطرابات المعدة.",

"رج الزجاجة جيداً قبل كل جرعة.",

"أكمل مدة العلاج كاملة.",

"فعال ضد البكتيريا المنتجة لـ Beta-lactamase."

],

blackBox:
"قد يسبب تفاعلات تحسسية شديدة أو اضطرابات كبدية نادرة.",

interactions:[

"Warfarin (قد يزيد INR).",

"Allopurinol (يزيد احتمال الطفح الجلدي).",

"Methotrexate (يزيد سميته).",

"Probenecid (يزيد تركيز الأموكسيسيلين في الدم)."

],

notes:
"يفضل تناوله بعد الطعام مع كمية كافية من الماء.",

alerts:[

"رج العبوة جيداً قبل الاستخدام.",

"أكمل العلاج للنهاية.",

"قد يسبب اضطراباً بالمعدة.",

"احفظ المعلق في الثلاجة بعد التحضير."

]

},

azithromycin:{

id:"azithromycin",

name:"Azithromycin",

genericName:"Azithromycin",

brandNames:[
"Zithromax",
"Azomax",
"Z-Pak",
"Azithrocin"
],

category:"Antibiotics",

therapeuticClass:"Macrolide Antibiotic",

pharmacologicalClass:"Azalide",

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
"يثبط تصنيع البروتين البكتيري بالارتباط مع الوحدة 50S من الريبوسوم، مما يمنع نمو البكتيريا.",

indications:
"التهاب البلعوم، الالتهاب الرئوي، التهاب الشعب الهوائية، التهاب الأذن الوسطى، التهاب الجيوب الأنفية، وبعض التهابات الجلد.",

contraindications:
"حساسية الأزيثرومايسين أو أي من المضادات الحيوية من مجموعة الماكروليدات.",

warnings:
"يستخدم بحذر عند مرضى الكبد أو المرضى المعرضين لإطالة QT أو اضطرابات نظم القلب.",

sideEffects:
"إسهال، غثيان، قيء، ألم بطني، صداع، طفح جلدي، إطالة QT، ارتفاع إنزيمات الكبد.",

pregnancy:
"يمكن استخدامه أثناء الحمل عند الحاجة.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"10 mg/kg مرة يومياً لمدة 3 أيام أو حسب نوع العدوى.",

onset:
"2–3 ساعات",

duration:
"يستمر تأثيره عدة أيام بسبب عمره النصفي الطويل.",

halfLife:
"≈68 ساعات",

proteinBinding:
"≈50%",

metabolism:
"استقلاب كبدي محدود.",

elimination:
"يطرح بشكل رئيسي مع الصفراء، وجزء بسيط عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة.",

monitoring:[

"متابعة تحسن العدوى.",

"مراقبة أعراض اضطراب نظم القلب عند المرضى المعرضين لذلك.",

"مراقبة وظائف الكبد عند العلاج الطويل."

],

clinicalPearls:[

"يعطى مرة واحدة يومياً مما يحسن التزام المريض.",

"يمكن تناوله مع الطعام أو بدونه.",

"يفضل إعطاؤه في نفس الوقت يومياً.",

"أكمل مدة العلاج حتى نهايتها."

],

blackBox:
"قد يسبب اضطرابات خطيرة في نظم القلب (QT prolongation) عند المرضى المعرضين لذلك.",

interactions:[

"Warfarin (قد يزيد INR).",

"Digoxin (قد يزيد تركيزه).",

"Antacids المحتوية على الألمنيوم أو المغنيسيوم تقلل الامتصاص؛ يفضل الفصل ساعتين.",

"الأدوية التي تطيل QT مثل Amiodarone و Sotalol."

],

notes:
"يعطى مرة واحدة يومياً ويمكن تناوله مع الطعام أو بدونه.",

alerts:[

"قد يسبب إطالة QT.",

"يمكن إعطاؤه مع الطعام أو بدونه.",

"أكمل العلاج كاملاً.",

"يفضل عدم تناوله مع مضادات الحموضة في نفس الوقت."

]

},
cefixime:{

id:"cefixime",

name:"Cefixime",

genericName:"Cefixime",

brandNames:[
"Suprax",
"Cefspan",
"Taxim-O",
"Cefix"
],

category:"Antibiotics",

therapeuticClass:"Cephalosporin Antibiotic",

pharmacologicalClass:"Third Generation Cephalosporin",

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
"يثبط تصنيع جدار الخلية البكتيرية بالارتباط مع Penicillin-Binding Proteins مما يؤدي إلى قتل البكتيريا.",

indications:
"التهابات المسالك البولية، التهاب الأذن الوسطى، التهاب البلعوم، التهاب اللوزتين، التهاب الشعب الهوائية، وبعض التهابات الجهاز التنفسي.",

contraindications:
"حساسية السيفالوسبورينات أو حدوث تفاعل تحسسي شديد سابق لها.",

warnings:
"يستخدم بحذر عند مرضى القصور الكلوي أو المرضى الذين لديهم حساسية للبنسلين.",

sideEffects:
"إسهال، غثيان، قيء، ألم بطني، طفح جلدي، حساسية، وعدوى فطرية.",

pregnancy:
"يعتبر آمناً نسبياً أثناء الحمل عند الحاجة.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"8 mg/kg/day تعطى مرة واحدة يومياً أو تقسم إلى جرعتين، وبحد أقصى 400 mg/day.",

onset:
"2–4 ساعات",

duration:
"24 ساعة",

halfLife:
"3–4 ساعات",

proteinBinding:
"≈65%",

metabolism:
"استقلاب محدود.",

elimination:
"يطرح بشكل رئيسي عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة، ويستخدم المعلق حسب تعليمات الشركة المصنعة بعد التحضير.",

monitoring:[

"متابعة تحسن أعراض العدوى.",

"تعديل الجرعة عند القصور الكلوي.",

"مراقبة حدوث الإسهال الشديد أو الحساسية."

],

clinicalPearls:[

"يستخدم كثيراً لعلاج التهابات المسالك البولية.",

"يمكن تناوله مع الطعام أو بدونه.",

"أكمل مدة العلاج كاملة حتى مع تحسن الأعراض.",

"رج الزجاجة جيداً قبل كل جرعة."

],

blackBox:
"قد يسبب تفاعلات تحسسية شديدة أو التهاب قولون مرتبط بالمضادات الحيوية (C. difficile).",

interactions:[

"Warfarin (قد يزيد INR).",

"Probenecid (يزيد تركيز Cefixime).",

"Carbamazepine (قد يزيد تركيزه في الدم)."

],

notes:
"يستخدم كثيراً في علاج التهابات البول والأذن عند الأطفال.",

alerts:[

"يعدل عند القصور الكلوي.",

"أكمل العلاج كاملاً.",

"اسأل عن حساسية البنسلين أو السيفالوسبورينات.",

"رج العبوة جيداً قبل الاستخدام."

]

},

cefuroxime:{

id:"cefuroxime",

name:"Cefuroxime",

genericName:"Cefuroxime Axetil",

brandNames:[
"Zinnat",
"Ceftin",
"Cefurix",
"Zinacef"
],

category:"Antibiotics",

therapeuticClass:"Cephalosporin Antibiotic",

pharmacologicalClass:"Second Generation Cephalosporin",

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
"يثبط تصنيع جدار الخلية البكتيرية بالارتباط مع Penicillin-Binding Proteins مما يؤدي إلى قتل البكتيريا.",

indications:
"التهاب الجيوب الأنفية، التهاب الأذن الوسطى، التهاب اللوزتين، التهاب البلعوم، الالتهاب الرئوي، التهاب الشعب الهوائية، وبعض التهابات الجلد.",

contraindications:
"حساسية السيفالوسبورينات أو حدوث تفاعل تحسسي شديد سابق لها.",

warnings:
"يستخدم بحذر عند مرضى القصور الكلوي أو المرضى الذين لديهم حساسية للبنسلين.",

sideEffects:
"غثيان، قيء، إسهال، ألم بطني، طفح جلدي، حساسية، وعدوى فطرية.",

pregnancy:
"يعتبر آمناً أثناء الحمل عند الحاجة.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"10–15 mg/kg كل 12 ساعة حسب شدة العدوى، وبحد أقصى 500 mg لكل جرعة.",

onset:
"2–3 ساعات",

duration:
"12 ساعة",

halfLife:
"1–2 ساعة",

proteinBinding:
"≈35–50%",

metabolism:
"يتم تحويل Cefuroxime Axetil إلى Cefuroxime الفعال بعد الامتصاص.",

elimination:
"يطرح بشكل رئيسي عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة، ويستخدم المعلق حسب تعليمات الشركة المصنعة بعد التحضير.",

monitoring:[

"متابعة تحسن أعراض العدوى.",

"تعديل الجرعة عند القصور الكلوي.",

"مراقبة ظهور الحساسية أو الإسهال الشديد."

],

clinicalPearls:[

"يفضل تناوله بعد الطعام لتحسين الامتصاص.",

"رج الزجاجة جيداً قبل كل جرعة.",

"أكمل مدة العلاج كاملة.",

"فعال ضد كثير من بكتيريا الجهاز التنفسي."

],

blackBox:
"قد يسبب تفاعلات تحسسية شديدة أو التهاب قولون مرتبط بالمضادات الحيوية (C. difficile).",

interactions:[

"Warfarin (قد يزيد INR).",

"Probenecid (يزيد تركيز Cefuroxime).",

"Antacids قد تقلل امتصاص Cefuroxime Axetil."

],

notes:
"يفضل تناوله بعد الطعام لتحسين الامتصاص وتقليل اضطرابات المعدة.",

alerts:[

"يحسن الطعام امتصاصه.",

"أكمل العلاج كاملاً.",

"اسأل عن حساسية البنسلين أو السيفالوسبورينات.",

"رج العبوة جيداً قبل الاستخدام."

]

},

cephalexin:{

id:"cephalexin",

name:"Cephalexin",

genericName:"Cephalexin",

brandNames:[
"Keflex",
"Ceporex",
"Rilexine",
"Sporidex"
],

category:"Antibiotics",

therapeuticClass:"Cephalosporin Antibiotic",

pharmacologicalClass:"First Generation Cephalosporin",

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
"يثبط تصنيع جدار الخلية البكتيرية بالارتباط مع Penicillin-Binding Proteins مما يؤدي إلى قتل البكتيريا.",

indications:
"التهابات الجلد والأنسجة الرخوة، التهاب البلعوم، التهاب اللوزتين، التهاب المسالك البولية، وبعض التهابات الجهاز التنفسي.",

contraindications:
"حساسية السيفالوسبورينات أو حدوث تفاعل تحسسي شديد سابق لها.",

warnings:
"يستخدم بحذر عند مرضى القصور الكلوي أو المرضى الذين لديهم حساسية للبنسلين.",

sideEffects:
"غثيان، قيء، إسهال، ألم بطني، طفح جلدي، حساسية، وعدوى فطرية.",

pregnancy:
"يعتبر آمناً أثناء الحمل عند الحاجة.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"25–50 mg/kg/day مقسمة كل 6–8 ساعات، وقد تصل إلى 100 mg/kg/day في العدوى الشديدة.",

onset:
"1 ساعة",

duration:
"6–8 ساعات",

halfLife:
"0.5–1.2 ساعة",

proteinBinding:
"≈10–15%",

metabolism:
"لا يستقلب بشكل ملحوظ.",

elimination:
"يطرح بشكل رئيسي عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة، ويستخدم المعلق حسب تعليمات الشركة المصنعة بعد التحضير.",

monitoring:[

"متابعة تحسن أعراض العدوى.",

"تعديل الجرعة عند القصور الكلوي.",

"مراقبة الحساسية أو الإسهال الشديد."

],

clinicalPearls:[

"مناسب جداً لعلاج التهابات الجلد الناتجة عن Streptococcus و Staphylococcus الحساسة.",

"يمكن تناوله مع الطعام لتقليل اضطرابات المعدة.",

"أكمل مدة العلاج كاملة.",

"رج الزجاجة جيداً قبل كل جرعة."

],

blackBox:
"قد يسبب تفاعلات تحسسية شديدة أو التهاب قولون مرتبط بالمضادات الحيوية (C. difficile).",

interactions:[

"Warfarin (قد يزيد INR).",

"Metformin (قد يزيد تركيزه).",

"Probenecid (يزيد تركيز Cephalexin)."

],

notes:
"يعد من أفضل الخيارات لعلاج التهابات الجلد البكتيرية البسيطة.",

alerts:[

"أكمل العلاج كاملاً.",

"يمكن تناوله مع الطعام.",

"اسأل عن حساسية البنسلين أو السيفالوسبورينات.",

"رج العبوة جيداً قبل الاستخدام."

]

},
clarithromycin:{

id:"clarithromycin",

name:"Clarithromycin",

genericName:"Clarithromycin",

brandNames:[
"Klacid",
"Biaxin",
"Claritek",
"Claromycin"
],

category:"Antibiotics",

therapeuticClass:"Macrolide Antibiotic",

pharmacologicalClass:"Macrolide",

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
"يثبط تصنيع البروتين البكتيري بالارتباط مع الوحدة 50S من الريبوسوم مما يمنع نمو البكتيريا.",

indications:
"الالتهاب الرئوي، التهاب البلعوم، التهاب اللوزتين، التهاب الشعب الهوائية، التهاب الجيوب الأنفية، التهاب الأذن الوسطى وبعض التهابات الجلد.",

contraindications:
"حساسية الكلاريثرومايسين أو أي من الماكروليدات، أو الاستخدام المتزامن مع أدوية تسبب اضطرابات نظم القلب.",

warnings:
"يستخدم بحذر عند مرضى الكبد أو المرضى المعرضين لإطالة QT أو اضطرابات نظم القلب.",

sideEffects:
"غثيان، قيء، إسهال، ألم بطني، اضطراب التذوق، صداع، ارتفاع إنزيمات الكبد، إطالة QT.",

pregnancy:
"يستخدم فقط عند الضرورة وتحت إشراف الطبيب.",

lactation:
"يفرز بكميات قليلة في حليب الأم ويستخدم بحذر أثناء الرضاعة.",

doseRange:
"7.5 mg/kg كل 12 ساعة، وبحد أقصى 500 mg لكل جرعة.",

onset:
"2 ساعات",

duration:
"12 ساعة",

halfLife:
"3–7 ساعات",

proteinBinding:
"≈70%",

metabolism:
"يستقلب في الكبد بواسطة CYP3A4.",

elimination:
"يطرح عن طريق الكبد والكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة.",

monitoring:[

"متابعة تحسن العدوى.",

"مراقبة وظائف الكبد عند العلاج الطويل.",

"مراقبة اضطرابات نظم القلب عند المرضى المعرضين لذلك."

],

clinicalPearls:[

"بديل ممتاز عند حساسية البنسلين.",

"يمكن تناوله مع الطعام أو بدونه.",

"له تداخلات دوائية كثيرة بسبب CYP3A4.",

"أكمل مدة العلاج كاملة."

],

blackBox:
"قد يسبب اضطرابات خطيرة في نظم القلب (QT prolongation) وتداخلات دوائية مهمة.",

interactions:[

"Warfarin (يزيد INR).",

"Digoxin (يزيد تركيزه).",

"Simvastatin و Atorvastatin (يزيد خطر اعتلال العضلات).",

"Carbamazepine (يزيد تركيزه).",

"الأدوية التي تطيل QT مثل Amiodarone و Sotalol."

],

notes:
"يعد بديلاً جيداً للمرضى الذين لديهم حساسية للبنسلين.",

alerts:[

"قد يسبب إطالة QT.",

"يتداخل مع أدوية كثيرة.",

"أكمل العلاج كاملاً.",

"راجع جميع الأدوية التي يتناولها المريض قبل وصفه."

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

genericName:"Loratadine",

brandNames:[
"Claritin",
"Lorano",
"Lorine",
"Lorat"
],

category:"Antihistamines",

therapeuticClass:"Second Generation Antihistamine",

pharmacologicalClass:"Selective H1 Receptor Antagonist",

diseases:[
"allergy"
],

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

mechanism:
"يثبط مستقبلات الهيستامين H1 بشكل انتقائي مع عبور محدود للحاجز الدماغي، لذلك يسبب نعاساً أقل من مضادات الهيستامين القديمة.",

indications:
"الحساسية الموسمية، التهاب الأنف التحسسي، الشرى (Urticaria)، الحكة الجلدية.",

contraindications:
"الحساسية للوراتادين أو لأي من مكونات المستحضر.",

warnings:
"يستخدم بحذر عند مرضى القصور الكبدي الشديد، وقد يحتاج إلى تعديل الجرعة.",

sideEffects:
"صداع، جفاف الفم، تعب، نعاس خفيف، غثيان (نادراً).",

pregnancy:
"يعتبر آمناً نسبياً أثناء الحمل عند الحاجة.",

lactation:
"يفرز بكميات قليلة في حليب الأم ويستخدم بحذر أثناء الرضاعة.",

doseRange:
"0.2 mg/kg مرة واحدة يومياً، وبحد أقصى 10 mg/day.",

onset:
"1–3 ساعات",

duration:
"24 ساعة",

halfLife:
"≈8 ساعات (المستقلب الفعال حوالي 27 ساعة).",

proteinBinding:
"≈97%",

metabolism:
"يستقلب في الكبد بواسطة CYP3A4 و CYP2D6.",

elimination:
"يطرح عن طريق البول والبراز.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة والحرارة.",

monitoring:[

"متابعة تحسن أعراض الحساسية.",

"مراقبة ظهور النعاس أو التحسس.",

"تعديل الجرعة في القصور الكبدي عند الحاجة."

],

clinicalPearls:[

"من أقل مضادات الهيستامين تسبباً للنعاس.",

"يكفي إعطاؤه مرة واحدة يومياً.",

"يمكن تناوله مع الطعام أو بدونه.",

"يفضل لمرضى الحساسية الذين يحتاجون إلى التركيز أثناء الدراسة أو العمل."

],

blackBox:
"لا توجد تحذيرات Black Box معتمدة.",

interactions:[

"Ketoconazole (قد يزيد تركيز Loratadine).",

"Erythromycin (قد يزيد مستواه في الدم).",

"Cimetidine (قد يزيد تركيز الدواء)."

],

notes:
"يعد من أفضل مضادات الهيستامين غير المسببة للنعاس.",

alerts:[

"يعطى مرة واحدة يومياً.",

"أقل تسبباً للنعاس من الجيل الأول.",

"يمكن تناوله مع الطعام أو بدونه.",

"لا تتجاوز الجرعة اليومية القصوى."

]

},

chlorpheniramine:{

id:"chlorpheniramine",

name:"Chlorpheniramine",

genericName:"Chlorpheniramine Maleate",

brandNames:[
"Piriton",
"Chlor-Trimeton",
"Histafen",
"Allermine"
],

category:"Antihistamines",

therapeuticClass:"First Generation Antihistamine",

pharmacologicalClass:"H1 Receptor Antagonist",

diseases:[
"allergy"
],

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

mechanism:
"يثبط مستقبلات الهيستامين H1 ويعبر الحاجز الدماغي، لذلك يسبب تأثيراً مهدئاً ونعاساً واضحاً.",

indications:
"التهاب الأنف التحسسي، الشرى، الحكة، الحساسية الجلدية، لسعات الحشرات.",

contraindications:
"حديثو الولادة، الحساسية للدواء، الزرق ضيق الزاوية، احتباس البول الشديد.",

warnings:
"قد يسبب نعاساً شديداً ويؤثر في التركيز. يستخدم بحذر عند مرضى الربو، تضخم البروستات، والزرق.",

sideEffects:
"نعاس، دوخة، جفاف الفم، تشوش الرؤية، إمساك، احتباس البول، غثيان.",

pregnancy:
"يستخدم فقط عند الضرورة وتحت إشراف الطبيب.",

lactation:
"لا يفضل أثناء الرضاعة لأنه قد يسبب نعاساً للرضيع ويقلل إدرار الحليب.",

doseRange:
"0.1 mg/kg كل 6–8 ساعات، مع عدم تجاوز الجرعة القصوى المناسبة للعمر.",

onset:
"30–60 دقيقة",

duration:
"4–6 ساعات",

halfLife:
"20–24 ساعة",

proteinBinding:
"≈70%",

metabolism:
"يستقلب في الكبد.",

elimination:
"يطرح عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة والضوء.",

monitoring:[

"متابعة تحسن أعراض الحساسية.",

"مراقبة النعاس والدوخة.",

"الحذر عند استخدامه لفترات طويلة."

],

clinicalPearls:[

"يسبب النعاس أكثر من مضادات الهيستامين الحديثة.",

"يفضل إعطاؤه مساءً إذا سبب النعاس.",

"يمكن تناوله مع الطعام لتقليل اضطراب المعدة.",

"تجنب قيادة المركبات أو تشغيل الآلات بعد تناوله."

],

blackBox:
"لا توجد تحذيرات Black Box معتمدة.",

interactions:[

"المهدئات والمنومات (يزيد النعاس).",

"الكحول (يزيد تثبيط الجهاز العصبي المركزي).",

"مثبطات MAO قد تزيد الآثار الجانبية."

],

notes:
"من مضادات الهيستامين من الجيل الأول، ويتميز بتأثيره المهدئ.",

alerts:[

"قد يسبب نعاساً شديداً.",

"تجنب إعطاءه مع المهدئات أو الكحول.",

"يفضل تناوله مساءً إذا سبب النعاس.",

"لا تتجاوز الجرعة الموصى بها."

]

},
salbutamol:{

id:"salbutamol",

name:"Salbutamol",

genericName:"Salbutamol (Albuterol)",

brandNames:[
"Ventolin",
"Asthalin",
"Salamol",
"Airomir"
],

category:"Asthma",

therapeuticClass:"Bronchodilator",

pharmacologicalClass:"Short-Acting β2 Agonist (SABA)",

diseases:[
"asthma"
],

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

mechanism:
"ينبه مستقبلات β2 في العضلات الملساء للقصبات الهوائية مما يؤدي إلى ارتخائها وتوسيع الشعب الهوائية بسرعة.",

indications:
"الربو، التشنج القصبي، الوقاية من التشنج القصبي الناتج عن الجهد، مرض الانسداد الرئوي المزمن (COPD).",

contraindications:
"الحساسية للسالبوتامول أو لأي من مكونات الدواء.",

warnings:
"يستخدم بحذر عند مرضى أمراض القلب، ارتفاع ضغط الدم، فرط نشاط الغدة الدرقية، وداء السكري.",

sideEffects:
"رجفة، تسرع القلب، خفقان، صداع، عصبية، تشنجات عضلية، نقص بوتاسيوم الدم عند الجرعات العالية.",

pregnancy:
"يمكن استخدامه أثناء الحمل عند الحاجة وتحت إشراف الطبيب.",

lactation:
"يعتبر متوافقاً مع الرضاعة الطبيعية.",

doseRange:
"0.1–0.15 mg/kg لكل جرعة كل 6–8 ساعات، وبحد أقصى 4 mg لكل جرعة.",

onset:
"15–30 دقيقة",

duration:
"4–6 ساعات",

halfLife:
"4–6 ساعات",

proteinBinding:
"≈10%",

metabolism:
"يستقلب جزئياً في الكبد.",

elimination:
"يطرح بشكل رئيسي عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة والحرارة.",

monitoring:[

"متابعة تحسن أعراض الربو.",

"مراقبة معدل نبض القلب.",

"مراقبة مستوى البوتاسيوم عند الجرعات العالية أو العلاج الطويل."

],

clinicalPearls:[

"يعد موسعاً قصبياً سريع المفعول (Rescue Medication).",

"لا يستخدم بشكل متكرر دون مراجعة الطبيب لأن ذلك قد يدل على سوء السيطرة على الربو.",

"يفضل استخدام البخاخ عند توفره لأنه أكثر فعالية وأقل آثاراً جانبية من الشراب."

],

blackBox:
"لا توجد تحذيرات Black Box معتمدة.",

interactions:[

"Beta-blockers مثل Propranolol تقلل تأثيره.",

"Diuretics قد تزيد خطر نقص البوتاسيوم.",

"MAO Inhibitors و Tricyclic Antidepressants قد تزيد التأثيرات القلبية."

],

notes:
"يعد من أفضل موسعات الشعب الهوائية السريعة لعلاج نوبات الربو الحادة.",

alerts:[

"قد يسبب رجفة باليدين.",

"قد يزيد نبض القلب.",

"راجع الطبيب إذا احتجته أكثر من مرتين أسبوعياً.",

"يفضل استخدام البخاخ عند توفره."

]

},

budesonide:{

id:"budesonide",

name:"Budesonide",

genericName:"Budesonide",

brandNames:[
"Pulmicort",
"Budecort",
"Budeson",
"Respules"
],

category:"Asthma",

therapeuticClass:"Inhaled Corticosteroid (ICS)",

pharmacologicalClass:"Glucocorticoid",

diseases:[
"asthma"
],

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

mechanism:
"كورتيكوستيرويد مستنشق يقلل الالتهاب داخل الشعب الهوائية ويخفض فرط الاستجابة القصبية ويمنع نوبات الربو.",

indications:
"العلاج الوقائي طويل الأمد للربو، والوقاية من نوبات الربو المتكررة.",

contraindications:
"الحساسية للبوديزونيد أو لأي من مكونات المستحضر.",

warnings:
"ليس لعلاج نوبة الربو الحادة. يستخدم بحذر عند وجود عدوى فطرية أو فيروسية غير معالجة.",

sideEffects:
"فطريات الفم، بحة الصوت، تهيج الحلق، سعال، ونادراً تثبيط النمو عند الجرعات العالية طويلة الأمد.",

pregnancy:
"يعتبر من أكثر الكورتيكوستيرويدات المستنشقة أماناً أثناء الحمل.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"0.25–0.5 mg مرتين يومياً حسب شدة الربو، وبحد أقصى 2 mg/day.",

onset:
"خلال 24 ساعة، بينما يظهر التأثير الكامل خلال 1–2 أسبوع.",

duration:
"حوالي 12 ساعة",

halfLife:
"2–3 ساعات",

proteinBinding:
"≈85–90%",

metabolism:
"يستقلب في الكبد بواسطة CYP3A4.",

elimination:
"يطرح عن طريق البول على شكل مستقلبات.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الضوء، وتستخدم الأمبولات مباشرة بعد فتحها.",

monitoring:[

"متابعة السيطرة على الربو.",

"مراقبة سرعة النمو عند الأطفال عند الاستخدام الطويل.",

"فحص الفم دورياً للكشف عن الفطريات."

],

clinicalPearls:[

"ليس دواء إسعافياً لنوبة الربو.",

"يجب المضمضة وغسل الفم بعد كل جرعة.",

"الاستخدام المنتظم أهم من الاستخدام عند الحاجة.",

"لا توقف الدواء فجأة دون استشارة الطبيب."

],

blackBox:
"لا توجد تحذيرات Black Box معتمدة.",

interactions:[

"Ketoconazole يزيد تركيز Budesonide.",

"Itraconazole يزيد مستواه في الدم.",

"Ritonavir قد يزيد الآثار الجانبية للكورتيكوستيرويد."

],

notes:
"يستخدم للسيطرة طويلة الأمد على الربو وليس لعلاج النوبة الحادة.",

alerts:[

"المضمضة بعد كل جرعة.",

"ليس لإيقاف نوبة الربو.",

"يستخدم بانتظام حتى مع اختفاء الأعراض.",

"لا توقف العلاج فجأة."

]

},

montelukast:{

id:"montelukast",

name:"Montelukast",

genericName:"Montelukast",

brandNames:[
"Singulair",
"Montiget",
"Montair",
"Lukast"
],

category:"Asthma",

therapeuticClass:"Leukotriene Receptor Antagonist",

pharmacologicalClass:"CysLT1 Receptor Antagonist",

diseases:[
"asthma",
"allergy"
],

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

mechanism:
"يثبط مستقبلات الليكوترينات (CysLT1) مما يقلل التهاب الشعب الهوائية ويمنع تضيقها ويخفف أعراض الحساسية.",

indications:
"السيطرة طويلة الأمد على الربو، التهاب الأنف التحسسي، الوقاية من التشنج القصبي الناتج عن المجهود.",

contraindications:
"الحساسية للمونتيلوكاست أو لأي من مكونات المستحضر.",

warnings:
"ليس لعلاج نوبة الربو الحادة. يجب مراقبة أي تغيرات نفسية أو سلوكية أثناء العلاج.",

sideEffects:
"صداع، اضطرابات النوم، كوابيس، ألم بطني، عطش، دوخة، ونادراً تغيرات سلوكية أو اكتئاب.",

pregnancy:
"يمكن استخدامه أثناء الحمل عند الحاجة وتحت إشراف الطبيب.",

lactation:
"متوافق مع الرضاعة الطبيعية عند الحاجة.",

doseRange:
"4 mg يومياً للأطفال 2–5 سنوات، و5 mg يومياً للأطفال 6–14 سنة.",

onset:
"خلال يوم واحد",

duration:
"24 ساعة",

halfLife:
"2.7–5.5 ساعات",

proteinBinding:
">99%",

metabolism:
"يستقلب في الكبد بواسطة CYP3A4 و CYP2C9 و CYP2C8.",

elimination:
"يطرح بشكل رئيسي مع الصفراء.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة والضوء.",

monitoring:[

"متابعة السيطرة على الربو.",

"مراقبة أعراض الحساسية.",

"مراقبة أي تغيرات سلوكية أو نفسية."

],

clinicalPearls:[

"يعطى مرة واحدة مساءً.",

"ليس بديلاً عن بخاخات الإسعاف (Salbutamol).",

"يفيد بشكل خاص عند وجود الربو مع حساسية الأنف.",

"يؤخذ بانتظام حتى مع اختفاء الأعراض."

],

blackBox:
"لا توجد تحذيرات Black Box، لكن توجد تحذيرات مهمة بشأن التغيرات النفسية والسلوكية.",

interactions:[

"Phenobarbital يقلل تركيز Montelukast.",

"Rifampicin يقلل فعاليته.",

"Gemfibrozil قد يزيد تركيز Montelukast."

],

notes:
"يفضل إعطاؤه مساءً لأنه يحقق أفضل سيطرة على أعراض الربو الليلية.",

alerts:[

"ليس لإيقاف نوبة الربو.",

"راقب أي تغيرات سلوكية أو نفسية.",

"يؤخذ مرة واحدة مساءً.",

"لا توقف العلاج دون استشارة الطبيب."

]

},
    ondansetron:{

id:"ondansetron",

name:"Ondansetron",

genericName:"Ondansetron",

brandNames:[
"Zofran",
"Emeset",
"Ondem",
"Vonau"
],

category:"Antiemetic",

therapeuticClass:"Antiemetic",

pharmacologicalClass:"5-HT3 Receptor Antagonist",

diseases:[
"vomiting"
],

mgPerKg:0.15,

frequency:"كل 8 ساعات",

maxDose:8,

minAge:0.5,

maxAge:12,

strengths:[

{
name:"4 mg / 5 mL",
concentration:4
}

],

mechanism:
"يثبط مستقبلات السيروتونين 5-HT3 في الجهاز الهضمي والجهاز العصبي المركزي مما يمنع الغثيان والتقيؤ.",

indications:
"الغثيان والتقيؤ الناتج عن التهاب المعدة والأمعاء، العلاج الكيمياوي، العلاج الإشعاعي، أو بعد العمليات الجراحية.",

contraindications:
"الحساسية للأوندانسيترون أو لأي من مضادات مستقبلات 5-HT3، وإطالة QT الخلقية.",

warnings:
"يستخدم بحذر عند المرضى المصابين بإطالة QT، اضطرابات نظم القلب، أو نقص البوتاسيوم والمغنيسيوم.",

sideEffects:
"صداع، إمساك، دوخة، تعب، إطالة QT، ونادراً اضطرابات نظم القلب.",

pregnancy:
"يستخدم فقط عند الحاجة وتحت إشراف الطبيب.",

lactation:
"يستخدم بحذر أثناء الرضاعة الطبيعية.",

doseRange:
"0.15 mg/kg لكل جرعة كل 8 ساعات، وبحد أقصى 8 mg لكل جرعة.",

onset:
"30 دقيقة",

duration:
"8–12 ساعة",

halfLife:
"3–6 ساعات",

proteinBinding:
"≈70–75%",

metabolism:
"يستقلب في الكبد بواسطة CYP3A4 و CYP2D6 و CYP1A2.",

elimination:
"يطرح عن طريق البول والبراز.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة والضوء.",

monitoring:[

"متابعة توقف القيء.",

"مراقبة تخطيط القلب عند المرضى المعرضين لإطالة QT.",

"تصحيح نقص البوتاسيوم أو المغنيسيوم قبل العلاج."

],

clinicalPearls:[

"لا يغني عن معالجة سبب القيء.",

"يعطى قبل العلاج الكيمياوي للوقاية من القيء.",

"يمكن إعطاؤه مع الطعام أو بدونه.",

"ينصح بإعطاء سوائل كافية لمنع الجفاف."

],

blackBox:
"لا توجد تحذيرات Black Box معتمدة.",

interactions:[

"Apomorphine (مضاد استطباب).",

"Amiodarone و Sotalol (يزيد خطر إطالة QT).",

"SSRIs و SNRIs (قد يزيد خطر متلازمة السيروتونين)."

],

notes:
"يستخدم لعلاج الغثيان والتقيؤ، وليس لعلاج سبب القيء نفسه.",

alerts:[

"قد يسبب إطالة QT.",

"يراقب عند مرضى القلب واضطرابات النظم.",

"يعوض السوائل عند وجود جفاف.",

"لا تتجاوز الجرعة القصوى."

]

},

fluconazole:{

id:"fluconazole",

name:"Fluconazole",

genericName:"Fluconazole",

brandNames:[
"Diflucan",
"Flucoral",
"Fluzole",
"Forcan"
],

category:"Antifungal",

therapeuticClass:"Antifungal",

pharmacologicalClass:"Triazole Antifungal",

diseases:[
"fungal"
],

mgPerKg:6,

frequency:"مرة يومياً",

maxDose:400,

minAge:0,

maxAge:12,

strengths:[

{
name:"50 mg / 5 mL",
concentration:50
}

],

mechanism:
"يثبط تصنيع الإرغوستيرول في جدار الخلية الفطرية عن طريق تثبيط إنزيم 14α-demethylase مما يؤدي إلى موت الفطريات.",

indications:
"داء المبيضات الفموي، داء المبيضات الجهازي، العدوى الفطرية الجلدية، التهاب السحايا بالمستخفيات.",

contraindications:
"الحساسية للفلوكونازول أو لمضادات الفطريات من مجموعة Azoles.",

warnings:
"يستخدم بحذر عند مرضى الكبد أو القصور الكلوي، وقد يسبب إطالة QT.",

sideEffects:
"غثيان، قيء، ألم بطني، ارتفاع إنزيمات الكبد، طفح جلدي، صداع.",

pregnancy:
"تجنب الجرعات العالية أثناء الحمل إلا عند الضرورة القصوى.",

lactation:
"متوافق مع الرضاعة الطبيعية بجرعات العلاج المعتادة.",

doseRange:
"3–12 mg/kg/day حسب نوع وشدة العدوى، وبحد أقصى 400 mg/day.",

onset:
"1–2 ساعة",

duration:
"24 ساعة",

halfLife:
"≈30 ساعة",

proteinBinding:
"≈11%",

metabolism:
"استقلاب كبدي محدود.",

elimination:
"يطرح بشكل رئيسي عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الرطوبة.",

monitoring:[

"مراقبة وظائف الكبد.",

"تعديل الجرعة في القصور الكلوي.",

"متابعة تحسن العدوى."

],

clinicalPearls:[

"يعطى مرة واحدة يومياً.",

"يمتاز بنفاذ جيد إلى السائل الدماغي الشوكي.",

"يمكن تناوله مع الطعام أو بدونه."

],

blackBox:
"لا توجد تحذيرات Black Box معتمدة.",

interactions:[

"Warfarin (يزيد INR).",

"Phenytoin (يزيد تركيزه).",

"Cyclosporine.",

"الأدوية التي تطيل QT."

],

notes:
"يعالج معظم عدوى المبيضات عند الأطفال.",

alerts:[

"راقب وظائف الكبد.",

"تجنب دمجه مع الأدوية التي تطيل QT.",

"أكمل العلاج للنهاية."

]

},
    albendazole:{

id:"albendazole",

name:"Albendazole",

genericName:"Albendazole",

brandNames:[
"Zentel",
"Albenza",
"Eskazole",
"Albend"
],

category:"Antiparasitic",

therapeuticClass:"Anthelmintic",

pharmacologicalClass:"Benzimidazole",

diseases:[
"worms"
],

mgPerKg:15,

frequency:"جرعة واحدة",

maxDose:400,

minAge:1,

maxAge:12,

strengths:[

{
name:"200 mg / 5 mL",
concentration:200
}

],

mechanism:
"يثبط امتصاص الغلوكوز داخل الديدان ويمنع تكوين الأنابيب الدقيقة مما يؤدي إلى موت الطفيليات.",

indications:
"الديدان الدبوسية، الإسكارس، الأنكلستوما، الدودة الشريطية، الجيارديا وبعض الطفيليات الأخرى.",

contraindications:
"الحساسية للألبيندازول أو للبنزيميدازولات.",

warnings:
"قد يحتاج تكرار الجرعة بعد أسبوعين في بعض أنواع الديدان. يستخدم بحذر عند مرضى الكبد.",

sideEffects:
"ألم بطني، غثيان، قيء، دوخة، صداع، ارتفاع إنزيمات الكبد عند العلاج الطويل.",

pregnancy:
"مضاد استطباب أثناء الحمل وخاصة الثلث الأول.",

lactation:
"يستخدم بحذر أثناء الرضاعة.",

doseRange:
"15 mg/kg جرعة واحدة، وبحد أقصى 400 mg.",

onset:
"عدة ساعات",

duration:
"يعتمد على نوع العدوى.",

halfLife:
"8–12 ساعة (للمستقلب الفعال).",

proteinBinding:
"≈70%",

metabolism:
"يستقلب في الكبد إلى Albendazole Sulfoxide الفعال.",

elimination:
"يطرح عن طريق البول والصفراء.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

monitoring:[

"مراقبة وظائف الكبد عند العلاج الطويل.",

"متابعة اختفاء أعراض العدوى.",

"إعادة الجرعة عند الحاجة."

],

clinicalPearls:[

"يفضل إعطاؤه بعد وجبة دسمة لزيادة الامتصاص.",

"قد تحتاج جميع أفراد الأسرة للعلاج في حالة الديدان الدبوسية.",

"الاهتمام بالنظافة الشخصية لمنع إعادة العدوى."

],

blackBox:
"لا توجد تحذيرات Black Box معتمدة.",

interactions:[

"Cimetidine يزيد تركيز الدواء.",

"Dexamethasone يزيد تركيز المستقلب الفعال.",

"Praziquantel قد يزيد مستواه."

],

notes:
"يعد من أكثر أدوية الديدان استخداماً عند الأطفال.",

alerts:[

"قد تحتاج إعادة الجرعة بعد أسبوعين.",

"يفضل إعطاؤه بعد الطعام.",

"لا يستخدم أثناء الحمل.",

"راقب وظائف الكبد عند العلاج الطويل."

]

},
    vitaminD:{

id:"vitaminD",

name:"Vitamin D3",

genericName:"Cholecalciferol",

brandNames:[
"Vigantol",
"Ddrops",
"Vit D3",
"Devarol"
],

category:"Vitamins",

therapeuticClass:"Vitamin",

pharmacologicalClass:"Fat-Soluble Vitamin",

diseases:[
"vitamin"
],

mgPerKg:10,

frequency:"مرة يومياً",

maxDose:1000,

minAge:0,

maxAge:18,

strengths:[

{
name:"400 IU / mL",
concentration:400
},

{
name:"800 IU / mL",
concentration:800
}

],

mechanism:
"يزيد امتصاص الكالسيوم والفوسفور من الأمعاء ويحافظ على صحة العظام.",

indications:
"علاج والوقاية من نقص فيتامين D، الكساح، لين العظام.",

contraindications:
"فرط كالسيوم الدم، فرط فيتامين D.",

warnings:
"تجنب تجاوز الجرعات الموصى بها، ومراقبة مستوى الكالسيوم عند العلاج الطويل.",

sideEffects:
"نادراً: غثيان، إمساك، فرط كالسيوم الدم عند الجرعات العالية.",

pregnancy:
"يعتبر آمناً عند الجرعات الموصى بها.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"400–1000 IU/day حسب العمر والحالة.",

onset:
"عدة أيام",

duration:
"طويلة",

halfLife:
"حوالي 15 يوم",

proteinBinding:
"مرتبط ببروتين ناقل فيتامين D",

metabolism:
"يستقلب في الكبد ثم الكلى.",

elimination:
"يطرح مع الصفراء.",

storage:
"يحفظ بدرجة حرارة الغرفة بعيداً عن الضوء.",

monitoring:[

"Vitamin D Level",

"Serum Calcium",

"Serum Phosphate"

],

clinicalPearls:[

"يفضل تناوله مع الطعام.",

"يزداد امتصاصه مع الوجبات الدهنية.",

"الجرعات العالية تعطى فقط بإشراف الطبيب."

],

blackBox:
"لا يوجد.",

interactions:[

"Phenytoin",

"Phenobarbital",

"Cholestyramine"

],

notes:
"لعلاج نقص فيتامين D.",

alerts:[

"يفضل مع الطعام.",

"لا تتجاوز الجرعة."

]

},
omeprazole:{

id:"omeprazole",

name:"Omeprazole",

genericName:"Omeprazole",

brandNames:[
"Prilosec",
"Losec",
"Omez",
"Omep"
],

category:"GIT",

therapeuticClass:"Proton Pump Inhibitor",

pharmacologicalClass:"PPI",

diseases:[
"gastritis"
],

mgPerKg:1,

frequency:"مرة يومياً",

maxDose:40,

minAge:1,

maxAge:18,

strengths:[

{
name:"10 mg",
concentration:10
},

{
name:"20 mg",
concentration:20
}

],

mechanism:
"يثبط مضخة البروتون H+/K+ ATPase في المعدة مما يقلل إفراز الحمض.",

indications:
"GERD، التهاب المعدة، قرحة المعدة، قرحة الاثني عشر.",

contraindications:
"الحساسية للأوميبرازول.",

warnings:
"الاستخدام الطويل قد يسبب نقص المغنيسيوم وفيتامين B12.",

sideEffects:
"صداع، إسهال، ألم بطني، غثيان.",

pregnancy:
"يعتبر آمناً نسبياً.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"0.7–1.5 mg/kg/day حسب الحالة.",

onset:
"1 ساعة",

duration:
"24 ساعة",

halfLife:
"1 ساعة",

proteinBinding:
"≈95%",

metabolism:
"يستقلب بواسطة CYP2C19 و CYP3A4.",

elimination:
"عن طريق البول.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

monitoring:[

"تحسن أعراض GERD",

"Magnesium عند العلاج الطويل"

],

clinicalPearls:[

"يعطى قبل الطعام بـ30 دقيقة.",

"لا تكسر الكبسولة."

],

blackBox:
"لا يوجد.",

interactions:[

"Clopidogrel",

"Warfarin",

"Phenytoin"

],

notes:
"يقلل حموضة المعدة.",

alerts:[

"يعطى قبل الإفطار.",

"لا يسحق الكبسول."

]

},
    domperidone:{

id:"domperidone",

name:"Domperidone",

genericName:"Domperidone",

brandNames:[
"Motilium",
"Dompy",
"Domstal",
"Domperon"
],

category:"GIT",

therapeuticClass:"Antiemetic",

pharmacologicalClass:"Peripheral Dopamine D2 Antagonist",

diseases:[
"vomiting"
],

mgPerKg:0.25,

frequency:"3 مرات يومياً",

maxDose:30,

minAge:1,

maxAge:18,

strengths:[

{
name:"5 mg / 5 mL",
concentration:5
}

],

mechanism:
"يثبط مستقبلات الدوبامين D2 خارج الجهاز العصبي المركزي مما يزيد حركة المعدة ويقلل الغثيان.",

indications:
"الغثيان، التقيؤ، بطء إفراغ المعدة.",

contraindications:
"إطالة QT، نزف أو انسداد الجهاز الهضمي، الحساسية للدواء.",

warnings:
"قد يسبب اضطرابات نظم القلب خاصة عند الجرعات العالية.",

sideEffects:
"جفاف الفم، صداع، مغص، إطالة QT، اضطراب نظم القلب.",

pregnancy:
"يستخدم فقط عند الضرورة.",

lactation:
"يستخدم بحذر أثناء الرضاعة.",

doseRange:
"0.25 mg/kg ثلاث مرات يومياً.",

onset:
"30 دقيقة",

duration:
"6–8 ساعات",

halfLife:
"7 ساعات",

proteinBinding:
"≈91%",

metabolism:
"يستقلب بواسطة CYP3A4.",

elimination:
"عن طريق البول والبراز.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

monitoring:[

"تحسن القيء",

"ECG عند المرضى المعرضين لإطالة QT"

],

clinicalPearls:[

"يفضل قبل الطعام بـ15–30 دقيقة.",

"لا يستخدم لفترات طويلة دون مراجعة الطبيب."

],

blackBox:
"زيادة خطر اضطرابات نظم القلب عند الجرعات العالية.",

interactions:[

"Ketoconazole",

"Erythromycin",

"Clarithromycin",

"الأدوية التي تطيل QT"

],

notes:
"مضاد للإقياء.",

alerts:[

"قبل الطعام.",

"لا يستخدم لفترات طويلة.",

"راقب اضطرابات نظم القلب."

]

},
loperamide:{

id:"loperamide",

name:"Loperamide",

genericName:"Loperamide",

brandNames:[
"Imodium",
"Lopamid",
"Diastop",
"Lopedium"
],

category:"GIT",

therapeuticClass:"Antidiarrheal",

pharmacologicalClass:"Peripheral Opioid Receptor Agonist",

diseases:[
"diarrhea"
],

mgPerKg:0.1,

frequency:"بعد كل إسهال",

maxDose:8,

minAge:2,

maxAge:18,

strengths:[

{
name:"1 mg / 5 mL",
concentration:1
}

],

mechanism:
"ينشط مستقبلات الأفيون μ في الأمعاء مما يقلل حركة الأمعاء ويزيد امتصاص الماء والشوارد.",

indications:
"الإسهال الحاد غير الدموي والإسهال المزمن.",

contraindications:
"الإسهال الدموي، الحمى الشديدة، التهاب القولون التقرحي الحاد، الأطفال أقل من سنتين.",

warnings:
"لا يستخدم عند وجود حرارة مرتفعة أو دم في البراز.",

sideEffects:
"إمساك، مغص بطني، غثيان، انتفاخ، نعاس (نادراً).",

pregnancy:
"يستخدم بحذر عند الحاجة.",

lactation:
"يستخدم بحذر أثناء الرضاعة.",

doseRange:
"0.1 mg/kg بعد كل إسهال مع عدم تجاوز الجرعة اليومية القصوى.",

onset:
"1 ساعة",

duration:
"8–12 ساعة",

halfLife:
"10–14 ساعة",

proteinBinding:
"≈95%",

metabolism:
"يستقلب في الكبد بواسطة CYP3A4 و CYP2C8.",

elimination:
"عن طريق البراز.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

monitoring:[

"عدد مرات الإسهال.",

"علامات الجفاف."

],

clinicalPearls:[

"يعالج العرض وليس السبب.",

"الإماهة الفموية أهم من مضادات الإسهال.",

"يوقف فور حدوث إمساك شديد."

],

blackBox:
"لا يوجد.",

interactions:[

"Quinidine",

"Ritonavir",

"Ketoconazole"

],

notes:
"مضاد للإسهال.",

alerts:[

"يمنع في الإسهال الدموي.",

"لا يستخدم عند وجود حرارة شديدة.",

"يستخدم لفترة قصيرة."

]

},
amikacin:{

id:"amikacin",

name:"Amikacin",

genericName:"Amikacin",

brandNames:[
"Amikin",
"Amikacina",
"Amikacin Hikma",
"Amikozit"
],

category:"Antibiotics",

therapeuticClass:"Aminoglycoside Antibiotic",

pharmacologicalClass:"Aminoglycoside",

diseases:[
"sepsis"
],

mgPerKg:15,

frequency:"مرة يومياً",

maxDose:1500,

minAge:0,

maxAge:12,

strengths:[

{
name:"100 mg / 2 mL",
concentration:50
}

],

mechanism:
"يثبط تصنيع البروتين البكتيري بالارتباط مع الوحدة 30S من الريبوسوم مما يؤدي إلى قتل البكتيريا.",

indications:
"الإنتانات الشديدة، تجرثم الدم، الإنتان الوليدي، التهابات البول الشديدة، الالتهاب الرئوي الشديد.",

contraindications:
"الحساسية للأمينوغلايكوسيدات.",

warnings:
"قد يسبب سمية كلوية وسمعية خاصة عند العلاج الطويل.",

sideEffects:
"سمية كلوية، سمية سمعية، دوخة، حصار عصبي عضلي (نادراً).",

pregnancy:
"يستخدم فقط عند الضرورة.",

lactation:
"متوافق مع الرضاعة بحذر.",

doseRange:
"15 mg/kg/day جرعة واحدة يومياً أو حسب البروتوكول.",

onset:
"30 دقيقة",

duration:
"24 ساعة",

halfLife:
"2–3 ساعات",

proteinBinding:
"منخفض (<10%).",

metabolism:
"لا يستقلب.",

elimination:
"عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

monitoring:[

"Serum Creatinine",

"وظائف الكلى",

"اختبار السمع",

"Drug Levels عند الحاجة"

],

clinicalPearls:[

"يعطى حقناً فقط.",

"يشجع إعطاء جرعة واحدة يومياً.",

"تعديل الجرعة ضروري عند القصور الكلوي."

],

blackBox:
"يزيد خطر السمية الكلوية والسمعية.",

interactions:[

"Vancomycin",

"Furosemide",

"Cisplatin",

"Amphotericin B"

],

notes:
"مضاد حيوي أمينوغلايكوسايد واسع الطيف.",

alerts:[

"يراقب السمع ووظائف الكلى.",

"يعطى حقناً فقط.",

"يعدل في القصور الكلوي."

]

},
ceftriaxone:{

id:"ceftriaxone",

name:"Ceftriaxone",

genericName:"Ceftriaxone",

brandNames:[
"Rocephin",
"Cefaxon",
"Ceftriax",
"Ceftria"
],

category:"Antibiotics",

therapeuticClass:"Third Generation Cephalosporin",

pharmacologicalClass:"Cephalosporin",

diseases:[
"pneumonia",
"sepsis"
],

mgPerKg:50,

frequency:"مرة يومياً",

maxDose:2000,

minAge:0,

maxAge:12,

strengths:[

{
name:"1 g Vial",
concentration:1000
}

],

mechanism:
"يثبط تصنيع جدار الخلية البكتيرية مما يؤدي إلى قتل البكتيريا.",

indications:
"الالتهاب الرئوي، التهاب السحايا، الإنتان، التهاب البول، التهاب الأذن، التهاب العظام والمفاصل.",

contraindications:
"الحساسية للسيفالوسبورينات أو الحساسية الشديدة للبنسلين.",

warnings:
"لا يخلط مع المحاليل المحتوية على الكالسيوم عند حديثي الولادة.",

sideEffects:
"إسهال، طفح جلدي، ألم مكان الحقن، ارتفاع إنزيمات الكبد، حصوات مرارية كاذبة.",

pregnancy:
"يعتبر آمناً نسبياً.",

lactation:
"متوافق مع الرضاعة الطبيعية.",

doseRange:
"50–100 mg/kg/day حسب شدة العدوى، وبحد أقصى 2 g/day.",

onset:
"سريع",

duration:
"24 ساعة",

halfLife:
"6–9 ساعات",

proteinBinding:
"≈95%",

metabolism:
"استقلاب محدود.",

elimination:
"عن طريق الكلى والصفراء.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

monitoring:[

"تحسن العدوى",

"CBC",

"وظائف الكبد والكلى"

],

clinicalPearls:[

"يعطى مرة واحدة يومياً في معظم الحالات.",

"يمكن إعطاؤه IM أو IV.",

"لا يخلط مع محاليل الكالسيوم للمواليد."

],

blackBox:
"لا يوجد.",

interactions:[

"Calcium Solutions",

"Warfarin"

],

notes:
"سيفالوسبورين واسع الطيف.",

alerts:[

"لا يخلط مع محاليل الكالسيوم للمواليد.",

"يعطى IM أو IV."

]

},
vancomycin:{

id:"vancomycin",

name:"Vancomycin",

genericName:"Vancomycin",

brandNames:[
"Vancocin",
"Vancomycin Hikma",
"Vanco",
"Vanmix"
],

category:"Antibiotics",

therapeuticClass:"Glycopeptide Antibiotic",

pharmacologicalClass:"Glycopeptide",

diseases:[
"sepsis"
],

mgPerKg:15,

frequency:"كل 6 ساعات",

maxDose:2000,

minAge:0,

maxAge:12,

strengths:[

{
name:"500 mg Vial",
concentration:500
}

],

mechanism:
"يثبط تصنيع جدار الخلية البكتيرية بالارتباط مع D-Ala-D-Ala.",

indications:
"MRSA، الإنتانات الشديدة، التهاب السحايا، التهاب العظام، التهاب الشغاف.",

contraindications:
"الحساسية للفانكومايسين.",

warnings:
"يعطى ببطء وريداً لتجنب Red Man Syndrome.",

sideEffects:
"سمية كلوية، سمية سمعية، Red Man Syndrome، طفح جلدي.",

pregnancy:
"يستخدم عند الضرورة.",

lactation:
"متوافق مع الرضاعة بحذر.",

doseRange:
"10–15 mg/kg كل 6 ساعات حسب البروتوكول.",

onset:
"فوري",

duration:
"6 ساعات",

halfLife:
"4–6 ساعات",

proteinBinding:
"≈50%",

metabolism:
"لا يستقلب.",

elimination:
"عن طريق الكلى.",

storage:
"يحفظ بدرجة حرارة الغرفة.",

monitoring:[

"Vancomycin Trough",

"وظائف الكلى",

"مستوى السمع"

],

clinicalPearls:[

"يعطى بالتسريب الوريدي البطيء.",

"يحتاج متابعة مستويات الدواء.",

"لا يعطى IM."

],

blackBox:
"زيادة خطر السمية الكلوية والسمعية.",

interactions:[

"Amikacin",

"Furosemide",

"Amphotericin B"

],

notes:
"لعلاج الجراثيم المقاومة.",

alerts:[

"خطر Red Man Syndrome.",

"يراقب مستوى الدواء.",

"يعطى ببطء وريداً."

]

},
    oralRehydration:{

id:"oralRehydration",

name:"ORS",

genericName:"Oral Rehydration Solution",

brandNames:[
"WHO ORS",
"Pedialyte",
"Hydralyte",
"Rehydralyte"
],

category:"Rehydration",

therapeuticClass:"Oral Rehydration",

pharmacologicalClass:"Electrolyte Solution",

diseases:[
"diarrhea"
],

mgPerKg:10,

frequency:"بعد كل إسهال",

maxDose:1000,

minAge:0,

maxAge:12,

strengths:[

{
name:"ORS Solution",
concentration:1
}

],

mechanism:
"يعوض الماء والأملاح المفقودة ويعتمد على النقل المشترك للصوديوم والغلوكوز لتحسين امتصاص السوائل.",

indications:
"الإسهال، الجفاف الخفيف والمتوسط، القيء.",

contraindications:
"الصدمة، الجفاف الشديد الذي يحتاج سوائل وريدية، انسداد الأمعاء.",

warnings:
"يحضر حسب التعليمات ويستخدم خلال 24 ساعة من التحضير.",

sideEffects:
"نادراً انتفاخ أو قيء بسيط عند إعطائه بسرعة.",

pregnancy:
"آمن.",

lactation:
"آمن.",

doseRange:
"10 mL/kg بعد كل براز مائي.",

onset:
"فوري",

duration:
"حسب الحاجة",

halfLife:
"غير مطبق",

proteinBinding:
"غير مطبق",

metabolism:
"غير مطبق",

elimination:
"تعويض سوائل طبيعي.",

storage:
"بعد التحضير يحفظ في الثلاجة ويستخدم خلال 24 ساعة.",

monitoring:[

"علامات الجفاف",

"كمية البول",

"عدد مرات الإسهال"

],

clinicalPearls:[

"أفضل علاج للجفاف الخفيف والمتوسط.",

"يعطى بكميات صغيرة ومتكررة.",

"يستمر الطفل بالرضاعة الطبيعية أثناء العلاج."

],

blackBox:
"لا يوجد.",

interactions:[],

notes:
"يعوض السوائل والأملاح.",

alerts:[

"أفضل علاج للجفاف.",

"يعطى على جرعات صغيرة ومتكررة.",

"يحضر حسب التعليمات فقط."

]

},
adrenaline:{

id:"adrenaline",

name:"Adrenaline",

genericName:"Epinephrine",

brandNames:[
"EpiPen",
"Adrenalin",
"Epinephrine Injection"
],

category:"Emergency",

therapeuticClass:"Sympathomimetic",

pharmacologicalClass:"Alpha & Beta Adrenergic Agonist",

diseases:[
"anaphylaxis"
],

mgPerKg:0.01,

frequency:"حسب الحاجة",

maxDose:0.5,

minAge:0,

maxAge:12,

strengths:[

{
name:"1 mg/mL",
concentration:1
}

],

mechanism:
"ينشط مستقبلات Alpha و Beta مما يؤدي إلى تضييق الأوعية وتوسيع القصبات وزيادة ضغط الدم.",

indications:
"الحساسية المفرطة (Anaphylaxis)، توقف القلب، تشنج القصبات الشديد.",

contraindications:
"لا يوجد مانع عند علاج الحساسية المفرطة.",

warnings:
"يعطى عضلياً في منتصف الفخذ الخارجي فوراً.",

sideEffects:
"تسرع القلب، رجفة، قلق، صداع، ارتفاع الضغط.",

pregnancy:
"يعطى عند الضرورة لإنقاذ الحياة.",

lactation:
"يستخدم عند الحاجة.",

doseRange:
"0.01 mg/kg IM وبحد أقصى 0.5 mg.",

onset:"3-5 دقائق",

duration:"10-20 دقيقة",

halfLife:"2-3 دقائق",

proteinBinding:"منخفض",

metabolism:"MAO و COMT",

elimination:"عن طريق البول",

storage:"يحفظ بعيداً عن الضوء.",

monitoring:[

"ضغط الدم",

"النبض",

"التنفس"

],

clinicalPearls:[

"هو العلاج الأول للحساسية المفرطة.",

"لا تؤخر إعطاءه.",

"يمكن تكراره بعد 5-15 دقيقة."

],

blackBox:"لا يوجد.",

interactions:[

"Beta-blockers",

"MAO inhibitors",

"Tricyclic antidepressants"

],

notes:"دواء منقذ للحياة.",

alerts:[

"لا تؤخر إعطاءه عند الشك بالحساسية المفرطة.",

"يعطى عضلياً في الفخذ.",

"يمكن تكرار الجرعة."

]

},
    hydrocortisone:{

id:"hydrocortisone",

name:"Hydrocortisone",

genericName:"Hydrocortisone",

brandNames:[
"Solu-Cortef",
"Hydrocort"
],

category:"Steroids",

therapeuticClass:"Corticosteroid",

pharmacologicalClass:"Glucocorticoid",

diseases:[
"anaphylaxis"
],

mgPerKg:2,

frequency:"حسب الطبيب",

maxDose:100,

minAge:0,

maxAge:12,

strengths:[

{
name:"100 mg Vial",
concentration:100
}

],

mechanism:
"يثبط الالتهاب ويقلل الاستجابة المناعية.",

indications:
"الحساسية الشديدة، الصدمة التحسسية، أزمة الربو.",

contraindications:
"عدوى فطرية جهازية غير معالجة.",

warnings:
"ليس بديلاً عن الأدرينالين.",

sideEffects:
"ارتفاع السكر، ارتفاع الضغط، اضطراب المزاج.",

pregnancy:"يستخدم عند الضرورة.",

lactation:"متوافق مع الرضاعة.",

doseRange:"2 mg/kg IV.",

onset:"1 ساعة",

duration:"8-12 ساعة",

halfLife:"1.5 ساعة",

proteinBinding:"≈90%",

metabolism:"الكبد",

elimination:"الكلى",

storage:"يحفظ بدرجة حرارة الغرفة.",

monitoring:[

"ضغط الدم",

"سكر الدم"

],

clinicalPearls:[

"يعطى بعد الأدرينالين.",

"يمنع ارتداد أعراض الحساسية."

],

blackBox:"لا يوجد.",

interactions:[

"NSAIDs",

"Warfarin"

],

notes:"كورتيزون للطوارئ.",

alerts:[

"ليس بديلاً عن Adrenaline.",

"يعطى بعد الأدرينالين."

]

},
    insulin:{

id:"insulin",

name:"Regular Insulin",

genericName:"Regular Human Insulin",

brandNames:[
"Actrapid",
"Humulin R",
"Novolin R"
],

category:"Endocrine",

therapeuticClass:"Insulin",

pharmacologicalClass:"Short Acting Insulin",

diseases:[
"diabetes"
],

mgPerKg:0.5,

frequency:"حسب الطبيب",

maxDose:100,

minAge:0,

maxAge:12,

strengths:[

{
name:"100 IU/mL",
concentration:100
}

],

mechanism:
"يزيد دخول الغلوكوز إلى الخلايا ويخفض مستوى السكر في الدم.",

indications:
"داء السكري، الحماض الكيتوني السكري.",

contraindications:
"هبوط السكر.",

warnings:
"يستخدم فقط تحت إشراف طبي.",

sideEffects:
"هبوط السكر، زيادة الوزن، نقص البوتاسيوم.",

pregnancy:"آمن.",

lactation:"آمن.",

doseRange:"0.5-1 IU/kg/day حسب الحالة.",

onset:"30 دقيقة",

duration:"6-8 ساعات",

halfLife:"عدة دقائق",

proteinBinding:"منخفض",

metabolism:"الكبد والكلى",

elimination:"الكلى",

storage:"يحفظ في الثلاجة.",

monitoring:[

"سكر الدم",

"البوتاسيوم"

],

clinicalPearls:[

"يحقن قبل الطعام بـ30 دقيقة.",

"يجب توفر مصدر سكر دائماً."

],

blackBox:"لا يوجد.",

interactions:[

"Steroids",

"Beta blockers"

],

notes:"لعلاج السكري.",

alerts:[

"راقب السكر باستمرار.",

"قد يسبب هبوط السكر."

]

},
    glucagon:{

id:"glucagon",

name:"Glucagon",

genericName:"Glucagon",

brandNames:[
"GlucaGen",
"Baqsimi"
],

category:"Emergency",

therapeuticClass:"Hyperglycemic Agent",

pharmacologicalClass:"Glucagon Hormone",

diseases:[
"hypoglycemia"
],

mgPerKg:0.03,

frequency:"جرعة واحدة",

maxDose:1,

minAge:0,

maxAge:12,

strengths:[

{
name:"1 mg Injection",
concentration:1
}

],

mechanism:
"يحرض الكبد على تحرير الغلوكوز المخزن ورفع مستوى السكر في الدم.",

indications:
"هبوط السكر الشديد مع فقدان الوعي.",

contraindications:
"ورم القواتم (Pheochromocytoma).",

warnings:
"يعطى للحالات الطارئة فقط.",

sideEffects:
"غثيان، قيء، صداع.",

pregnancy:"آمن.",

lactation:"آمن.",

doseRange:"0.03 mg/kg وبحد أقصى 1 mg.",

onset:"10 دقائق",

duration:"30-90 دقيقة",

halfLife:"10 دقائق",

proteinBinding:"منخفض",

metabolism:"الكبد والكلى",

elimination:"الكلى",

storage:"يحفظ في الثلاجة.",

monitoring:[

"سكر الدم",

"استعادة الوعي"

],

clinicalPearls:[

"بعد تحسن المريض يجب إعطاؤه كربوهيدرات فموية.",

"لا يغني عن مراجعة المستشفى."

],

blackBox:"لا يوجد.",

interactions:[

"Warfarin",

"Insulin"

],

notes:"يرفع مستوى السكر بسرعة.",

alerts:[

"يعطى عند فقدان الوعي بسبب انخفاض السكر.",

"يجب مراجعة المستشفى بعد إعطائه."

]

};
console.log(Object.keys(drugs).length);
