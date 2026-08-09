// ======================================================
// DoseCare AI
// Cough & Cold Database
// ======================================================

const coughColdDrugs = [

  {
    id: "guaifenesin",
    name: "Guaifenesin",
    genericName: "Guaifenesin",
    brandNames: ["Mucinex", "Robitussin"],
    category: "Cough & Cold",
    therapeuticClass: "Expectorant",
    diseases: ["cough", "productive-cough"],
    dosageForm: "Syrup",
    strengths: ["100 mg / 5 mL"],
    mgPerKg: 10,
    frequency: "كل 4 ساعات",
    minAge: 2,
    maxAge: 18,
    maxDose: 400,
    indications: ["Productive cough"],
    contraindications: [],
    warnings: ["يُستخدم بحذر عند الأطفال الصغار"],
    notes: "الإكثار من السوائل يساعد على تأثير الدواء."
  },

  {
    id: "dextromethorphan",
    name: "Dextromethorphan",
    genericName: "Dextromethorphan",
    brandNames: ["Robitussin DM", "Benylin"],
    category: "Cough & Cold",
    therapeuticClass: "Antitussive",
    diseases: ["dry-cough"],
    dosageForm: "Syrup",
    strengths: ["15 mg / 5 mL"],
    frequency: "كل 4 ساعات عند الحاجة",
    minAge: 6,
    maxAge: 18,
    indications: ["Dry cough"],
    contraindications: ["MAOI use"],
    warnings: [
      "لا يُستخدم للأطفال دون 6 سنوات إلا بتوجيه طبي",
      "لا يُستخدم للسعال المصحوب ببلغم بكميات كبيرة"
    ],
    notes: "للسعال الجاف فقط."
  },

  {
    id: "ambroxol",
    name: "Ambroxol",
    genericName: "Ambroxol",
    brandNames: ["Mucosolvan"],
    category: "Cough & Cold",
    therapeuticClass: "Mucolytic",
    diseases: ["productive-cough", "thick-mucus"],
    dosageForm: "Syrup",
    strengths: ["15 mg / 5 mL"],
    frequency: "2–3 مرات يومياً",
    minAge: 2,
    maxAge: 18,
    indications: ["Thick respiratory mucus", "Productive cough"],
    contraindications: [],
    warnings: ["الحذر عند وجود قرحة معدية"],
    notes: "يُستخدم لتقليل لزوجة الإفرازات."
  },

  {
    id: "bromhexine",
    name: "Bromhexine",
    genericName: "Bromhexine",
    brandNames: ["Bisolvon"],
    category: "Cough & Cold",
    therapeuticClass: "Mucolytic",
    diseases: ["productive-cough", "thick-mucus"],
    dosageForm: "Syrup",
    strengths: ["4 mg / 5 mL"],
    frequency: "3 مرات يومياً",
    minAge: 2,
    maxAge: 18,
    indications: ["Thick mucus", "Productive cough"],
    contraindications: [],
    warnings: ["يُستخدم بحذر عند الأطفال الصغار"],
    notes: "يساعد على تسييل الإفرازات."
  },

  {
    id: "acetylcysteine",
    name: "Acetylcysteine",
    genericName: "Acetylcysteine",
    brandNames: ["Fluimucil"],
    category: "Cough & Cold",
    therapeuticClass: "Mucolytic",
    diseases: ["thick-mucus", "productive-cough"],
    dosageForm: "Oral Solution",
    strengths: ["100 mg / 5 mL", "200 mg / 5 mL"],
    frequency: "2–3 مرات يومياً",
    minAge: 2,
    maxAge: 18,
    indications: ["Thick respiratory secretions"],
    contraindications: [],
    warnings: ["قد يسبب الغثيان أو اضطرابات المعدة"],
    notes: "يُفضّل إعطاء سوائل كافية."
  }

];

export default coughColdDrugs;
