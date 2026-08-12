// ======================================================
// DoseCare AI
// CNS / Neurological Database
// ======================================================

const cnsDrugs = [

  {
    id: "diazepam",
    name: "Diazepam",
    genericName: "Diazepam",
    brandNames: ["Valium"],
    category: "CNS",
    therapeuticClass: "Benzodiazepine",
    diseases: ["seizure", "status-epilepticus"],
    dosageForm: "Oral Solution",
    strengths: ["1 mg / 1 mL", "2 mg / 5 mL"],
    frequency: "حسب الحالة الطبية",
    minAge: 0,
    maxAge: 18,
    indications: ["Seizures", "Status epilepticus"],
    contraindications: ["Severe respiratory depression"],
    warnings: [
      "قد يسبب النعاس وتثبيط التنفس",
      "يُستخدم للأطفال تحت إشراف طبي"
    ],
    notes: "دواء إسعافي مهم للتشنجات، والجرعة تعتمد على العمر والوزن وطريق الإعطاء."
  },

  {
    id: "levetiracetam",
    name: "Levetiracetam",
    genericName: "Levetiracetam",
    brandNames: ["Keppra"],
    category: "CNS",
    therapeuticClass: "Antiepileptic",
    diseases: ["seizure", "epilepsy"],
    dosageForm: "Oral Solution",
    strengths: ["100 mg / mL"],
    mgPerKg: 10,
    frequency: "مرتين يومياً",
    minAge: 1,
    maxAge: 18,
    indications: ["Epilepsy", "Seizures"],
    contraindications: [],
    warnings: [
      "قد يسبب النعاس أو تغيرات سلوكية",
      "يجب تعديل الجرعة في القصور الكلوي"
    ],
    notes: "تُحدد الجرعة حسب نوع النوبة واستجابة الطفل."
  },

  {
    id: "sodium_valproate",
    name: "Sodium Valproate",
    genericName: "Valproic Acid / Sodium Valproate",
    brandNames: ["Epilim", "Depakine"],
    category: "CNS",
    therapeuticClass: "Antiepileptic",
    diseases: ["seizure", "epilepsy"],
    dosageForm: "Syrup",
    strengths: ["200 mg / 5 mL"],
    mgPerKg: 10,
    frequency: "2–3 مرات يومياً",
    minAge: 2,
    maxAge: 18,
    indications: ["Generalized seizures", "Epilepsy"],
    contraindications: ["Severe hepatic disease"],
    warnings: [
      "قد يسبب سمية كبدية",
      "يحتاج إلى متابعة طبية"
    ],
    notes: "الجرعة تعتمد على نوع الصرع والاستجابة للعلاج."
  },

  {
    id: "carbamazepine",
    name: "Carbamazepine",
    genericName: "Carbamazepine",
    brandNames: ["Tegretol"],
    category: "CNS",
    therapeuticClass: "Antiepileptic",
    diseases: ["epilepsy", "seizure"],
    dosageForm: "Syrup",
    strengths: ["100 mg / 5 mL"],
    mgPerKg: 5,
    frequency: "2–3 مرات يومياً",
    minAge: 1,
    maxAge: 18,
    indications: ["Focal seizures", "Epilepsy"],
    contraindications: ["Bone marrow depression"],
    warnings: [
      "قد يسبب دوخة ونعاس",
      "تحتاج بعض الحالات إلى متابعة تعداد الدم"
    ],
    notes: "تُزاد الجرعة تدريجياً حسب الاستجابة."
  },

  {
    id: "phenobarbital",
    name: "Phenobarbital",
    genericName: "Phenobarbital",
    brandNames: ["Luminal"],
    category: "CNS",
    therapeuticClass: "Barbiturate / Antiepileptic",
    diseases: ["seizure", "epilepsy"],
    dosageForm: "Oral Solution",
    strengths: ["20 mg / 5 mL"],
    frequency: "مرة أو مرتين يومياً حسب الحالة",
    minAge: 0,
    maxAge: 18,
    indications: ["Seizures", "Neonatal seizures"],
    contraindications: ["Severe respiratory depression"],
    warnings: [
      "قد يسبب النعاس وتثبيط الجهاز التنفسي",
      "يستخدم تحت إشراف طبي"
    ],
    notes: "مهم خصوصاً في بعض حالات تشنجات حديثي الولادة."
  }

];

// ======================================================
// Register CNS Drugs
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(cnsDrugs);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}

console.log(
    "CNS Database Loaded:",
    cnsDrugs.map(drug => drug.id)
);
