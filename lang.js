const translations = {

ar:{

appTitle:"🩺 DoseCare",

appSubtitle:"حاسبة جرعات الأطفال بالاعتماد على الوزن",

lblDisease:"🔍 البحث حسب المرض",

lblSearchDrug:"البحث عن الدواء",

lblDrug:"اسم الدواء",

lblDrug2:"الدواء الثاني (اختياري)",

lblStrength:"تركيز الدواء",

lblAge:"العمر (بالسنوات)",

lblWeight:"الوزن (Kg)",

btnCalculate:"احسب الجرعة",

btnReset:"إعادة تعيين",

btnCopy:"نسخ النتيجة",

btnInfo:"معلومات الدواء",

btnFavorite:"إضافة إلى المفضلة",

btnShowFavorites:"عرض المفضلة",

dashboardTitle:"📊 لوحة الإحصائيات",

txtCalcCount:"عدد الحسابات",

txtFavorites:"المفضلة",

txtLastDrug:"آخر دواء",

favoritesTitle:"⭐ الأدوية المفضلة",

aboutTitle:"ℹ️ About DoseCare",
  diseases:{

fever:"الحمى",

pain:"الألم",

otitis:"التهاب الأذن",

pharyngitis:"التهاب البلعوم",

sinusitis:"التهاب الجيوب",

pneumonia:"ذات الرئة",

uti:"التهاب المسالك",

diarrhea:"الإسهال",

vomiting:"التقيؤ",

asthma:"الربو",

allergy:"الحساسية",

fungal:"عدوى فطرية",

worms:"الديدان"

},

aboutText:"DoseCare هو مشروع لحساب جرعات الأطفال اعتماداً على الوزن والمراجع الدوائية القياسية.",

warningText:"⚠️ النتائج لغرض التعليم والمراجعة فقط ولا تغني عن استشارة الطبيب أو الصيدلي."

  searchPlaceholder:"اكتب اسم الدواء...",

agePlaceholder:"مثال: 5",

weightPlaceholder:"مثال: 18",

selectDisease:"اختر المرض",

selectDrug:"اختر الدواء",

selectStrength:"اختر التركيز",

selectDrug2:"بدون"
},

en:{

appTitle:"🩺 DoseCare",

appSubtitle:"Pediatric Dose Calculator",

lblDisease:"🔍 Search by Disease",

lblSearchDrug:"Search Drug",

lblDrug:"Drug",

lblDrug2:"Second Drug (Optional)",

lblStrength:"Strength",

lblAge:"Age (Years)",

lblWeight:"Weight (Kg)",

btnCalculate:"Calculate Dose",

btnReset:"Reset",

btnCopy:"Copy Result",

btnInfo:"Drug Information",

btnFavorite:"Add to Favorites",

btnShowFavorites:"Show Favorites",

dashboardTitle:"📊 Dashboard",

txtCalcCount:"Calculations",

txtFavorites:"Favorites",

txtLastDrug:"Last Drug",

favoritesTitle:"⭐ Favorite Drugs",

aboutTitle:"ℹ️ About DoseCare",
diseases:{

fever:"Fever",

pain:"Pain",

otitis:"Otitis Media",

pharyngitis:"Pharyngitis",

sinusitis:"Sinusitis",

pneumonia:"Pneumonia",

uti:"UTI",

diarrhea:"Diarrhea",

vomiting:"Vomiting",

asthma:"Asthma",

allergy:"Allergy",

fungal:"Fungal Infection",

worms:"Worm Infestation"

},
aboutText:"DoseCare is a pediatric dose calculator based on body weight and standard drug references.",

warningText:"⚠️ Results are for educational purposes only and do not replace medical advice."

  searchPlaceholder:"Search drug...",

agePlaceholder:"Example: 5",

weightPlaceholder:"Example: 18",

selectDisease:"Select Disease",

selectDrug:"Select Drug",

selectStrength:"Select Strength",

selectDrug2:"None"
}

};
// ==========================

// Language Switcher

// ==========================

let currentLanguage =

localStorage.getItem("language") || "ar";

function setLanguage(lang){

currentLanguage = lang;

localStorage.setItem("language",lang);

const t = translations[lang];

document.documentElement.lang = lang;

document.documentElement.dir =

lang === "ar" ? "rtl" : "ltr";

for(const key in t){

const element =

document.getElementById(key);

if(element){

element.innerHTML = t[key];

}

}

document.getElementById("langBtn").innerHTML =

lang==="ar" ?

"🌐 English" :

"🌐 العربية";

}

setLanguage(currentLanguage);
const diseaseSelect = document.getElementById("disease");

for(let i=1;i<diseaseSelect.options.length;i++){

const option=diseaseSelect.options[i];

const value=option.value;

if(t.diseases[value]){

option.textContent=t.diseases[value];

}

}
document.getElementById("langBtn")

.addEventListener("click",()=>{

setLanguage(

currentLanguage==="ar" ? "en" : "ar"

);

});
