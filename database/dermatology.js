// ======================================================
// DoseCare AI
// Dermatology Database
// ======================================================

const dermatologyDrugs = [

  {
    id: "hydrocortisone",
    name: "Hydrocortisone",
    genericName: "Hydrocortisone",
    brandNames: ["Hydrocort"],
    category: "Dermatology",
    therapeuticClass: "Topical Corticosteroid",
    diseases: ["eczema", "dermatitis", "skin-inflammation"],
    dosageForm: "Cream",
    strengths: ["1%"],
    minAge: 0,
    maxAge: 18,
    indications: ["Mild eczema", "Dermatitis", "Skin inflammation"],
    contraindications: ["Untreated fungal or bacterial skin infection"],
    warnings: [
      "يُستخدم على المناطق المصابة فقط",
      "تجنب الاستخدام المطول دون إشراف طبي"
    ],
    notes: "الستيرويدات الموضعية تختلف في القوة ويجب اختيارها حسب العمر ومكان الإصابة."
  },

  {
    id: "calamine",
    name: "Calamine",
    genericName: "Calamine",
    brandNames: ["Calamine Lotion"],
    category: "Dermatology",
    therapeuticClass: "Skin Protectant / Antipruritic",
    diseases: ["itching", "rash", "insect-bites"],
    dosageForm: "Lotion",
    strengths: ["8%"],
    minAge: 0,
    maxAge: 18,
    indications: ["Itching", "Minor skin irritation", "Insect bites"],
    contraindications: [],
    warnings: [
      "للاستخدام الخارجي فقط",
      "تجنب ملامسة العينين"
    ],
    notes: "يستخدم لتخفيف الحكة والتهيج الجلدي البسيط."
  },

  {
    id: "clotrimazole_topical",
    name: "Clotrimazole",
    genericName: "Clotrimazole",
    brandNames: ["Canesten"],
    category: "Dermatology",
    therapeuticClass: "Topical Antifungal",
    diseases: ["fungal-skin-infection", "tinea", "candidiasis"],
    dosageForm: "Cream",
    strengths: ["1%"],
    minAge: 2,
    maxAge: 18,
    indications: ["Tinea", "Cutaneous candidiasis", "Fungal skin infections"],
    contraindications: [],
    warnings: [
      "للاستخدام الخارجي فقط",
      "تجنب ملامسة العينين"
    ],
    notes: "يستعمل على الجلد المصاب حسب مدة العلاج الموصى بها."
  },

  {
    id: "miconazole_topical",
    name: "Miconazole",
    genericName: "Miconazole",
    brandNames: ["Daktarin"],
    category: "Dermatology",
    therapeuticClass: "Topical Antifungal",
    diseases: ["fungal-skin-infection", "tinea", "candidiasis"],
    dosageForm: "Cream",
    strengths: ["2%"],
    minAge: 2,
    maxAge: 18,
    indications: ["Tinea", "Cutaneous fungal infections", "Candidiasis"],
    contraindications: [],
    warnings: [
      "للاستخدام الخارجي فقط",
      "تجنب ملامسة العينين"
    ],
    notes: "مضاد فطري موضعي لعلاج الالتهابات الفطرية الجلدية."
  },

  {
    id: "zinc_oxide",
    name: "Zinc Oxide",
    genericName: "Zinc Oxide",
    brandNames: ["Sudocrem", "Desitin"],
    category: "Dermatology",
    therapeuticClass: "Skin Protectant",
    diseases: ["diaper-rash", "skin-irritation"],
    dosageForm: "Cream",
    strengths: ["10%", "20%"],
    minAge: 0,
    maxAge: 18,
    indications: ["Diaper rash", "Skin irritation"],
    contraindications: [],
    warnings: [
      "للاستخدام الخارجي فقط",
      "لا يوضع على الجروح العميقة"
    ],
    notes: "يستخدم كحاجز واقٍ للجلد، خصوصاً في التهاب منطقة الحفاض."
  },

  {
    id: "permethrin",
    name: "Permethrin",
    genericName: "Permethrin",
    brandNames: ["Lyclear", "Nix"],
    category: "Dermatology",
    therapeuticClass: "Topical Antiparasitic",
    diseases: ["scabies", "pediculosis"],
    dosageForm: "Cream / Lotion",
    strengths: ["5%", "1%"],
    minAge: 2,
    maxAge: 18,
    indications: ["Scabies", "Head lice"],
    contraindications: [],
    warnings: [
      "تجنب ملامسة العينين",
      "يُستخدم حسب العمر والتركيز المناسب"
    ],
    notes: "يُستخدم تركيز 5% عادةً للجرب، بينما 1% يستخدم لقمل الرأس."
  }

];

// ======================================================
// Register Dermatology Drugs
// ======================================================

if (typeof registerDrugs === "function") {

    registerDrugs(dermatologyDrugs);

} else {

    console.error(
        "DoseCare Error: registerDrugs() is not available."
    );

}

console.log(
    "Dermatology Database Loaded:",
    dermatologyDrugs.map(drug => drug.id)
);
