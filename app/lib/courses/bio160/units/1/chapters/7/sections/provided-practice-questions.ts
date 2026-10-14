import { Section } from "@/app/types";

const questions = [
  {
    question: "Hemophilia A is an X-linked _____.",
    options: [
      "recessive disorder that primarily affects males",
      "dominant disorder that primarily affects males",
      "recessive disorder that primarily affects females",
      "dominant disorder that primarily affects females",
    ],
    answer: "recessive disorder that primarily affects males",
  },
  {
    question:
      "In iron-deficiency anemia, the red blood cells appear cigar-shaped or pencil-shaped.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "In some cases of anemia of chronic disease, therapy with the hormone _____ may be used.",
    options: [
      "testosterone",
      "estrogen",
      "erythropoietin",
      "antidiuretic hormone",
    ],
    answer: "erythropoietin",
  },
  {
    question:
      "_____ is a reduction in circulating red blood cells that is caused by accelerated destruction of red blood cells.",
    options: [
      "Sickle cell anemia",
      "Anemia of renal disease",
      "Hemolytic anemia",
      "Pernicious anemia",
    ],
    answer: "Hemolytic anemia",
  },
  {
    question:
      "What type of anemia is caused by the failure to produce adequate amounts of erythropoietin?",
    options: [
      "Hemolytic anemia",
      "Anemia of renal disease",
      "Pernicious anemia",
      "Sickle cell anemia",
    ],
    answer: "Anemia of renal disease",
  },
  {
    question: "Hemophilia A is caused by a deficiency in clotting factor",
    options: ["VIII", "IX", "X", "VII"],
    answer: "VIII",
  },
  {
    question: "Iron deficiency is the leading cause of anemia worldwide.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Old red blood cells are removed from the body by the _____.",
    options: [
      "liver and spleen",
      "kidneys and intestine",
      "stomach and spleen",
      "bone marrow and thymus",
    ],
    answer: "liver and spleen",
  },
  {
    question:
      "In sickle cell disease, red blood cells contain an abnormal form of _____.",
    options: ["plasma", "bilirubin", "hemoglobin", "platelets"],
    answer: "hemoglobin",
  },
  {
    question:
      "The principal dietary sources of vitamin B12 include fruits and vegetables.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "The signs and symptoms of _____ result from increased viscosity of the blood.",
    options: [
      "polycythemia vera",
      "thrombocytopenia",
      "sickle cell anemia",
      "thalassemia",
    ],
    answer: "polycythemia vera",
  },
  {
    question:
      "The most severe forms of thalassemia produce severe, life-threatening _____.",
    options: ["petechiae", "ischemia", "anemia", "hemolysis"],
    answer: "anemia",
  },
  {
    question: "Idiopathic thrombocytopenic purpura is an _____ disease.",
    options: ["acute degenerative", "infectious", "inflammatory", "autoimmune"],
    answer: "autoimmune",
  },
  {
    question:
      "An abnormally small number of circulating _____ is the condition of thrombocytopenia.",
    options: ["platelets", "erythrocytes", "hemoglobin", "leukocytes"],
    answer: "platelets",
  },
  {
    question:
      "Idiopathic thrombocytopenic purpura most commonly occurs as an acute problem in _____ following a viral infection.",
    options: ["elderly", "women", "men", "children"],
    answer: "children",
  },
  {
    question:
      "In relative polycythemia, the increase in red blood cell mass is due to a loss of plasma volume.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Treatment for sickle cell anemia is aimed at preventing sickle cell _____.",
    options: ["ecchymosis", "petechiae", "hemolysis", "ischemia"],
    answer: "hemolysis",
  },
  {
    question:
      "Coagulation factors VII, IX, X, and _____ require the presence of vitamin K for normal activity.",
    options: ["platelets", "prothrombin", "hemoglobin", "bilirubin"],
    answer: "prothrombin",
  },
  {
    question:
      "_____ can usually be corrected by treating the underlying cause.",
    options: [
      "Thrombocytopenia",
      "Sickle cell anemia",
      "Hemophilia",
      "Thalassemia",
    ],
    answer: "Thrombocytopenia",
  },
  {
    question:
      "Unlike other anemias, hemolytic anemia produces increased serum levels of _____.",
    options: ["heme", "iron", "bilirubin", "erythrocytes"],
    answer: "bilirubin",
  },
  {
    question:
      "Because of the increased concentration of blood cells in patients with _____, a patient may experience itching and pain in their fingers and toes.",
    options: [
      "polycythemia vera",
      "sickle cell anemia",
      "thalassemia",
      "thrombocytopenia",
    ],
    answer: "polycythemia vera",
  },
  {
    question:
      "The etiology of anemia of chronic disease most often is a defect in erythropoesis.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "A common cause of _____ is cancer chemotherapy or radiation treatment.",
    options: [
      "thalassemia",
      "polycythemia vera",
      "thrombocytopenia",
      "sickle cell anemia",
    ],
    answer: "thrombocytopenia",
  },
  {
    question:
      "The _____ stage of iron-deficiency anemia occurs when the iron stores of the body become depleted.",
    options: ["third", "first", "fourth", "second"],
    answer: "second",
  },
  {
    question: "Vegetarians who eat no animal products may develop _____.",
    options: [
      "polycythemia vera",
      "pernicious anemia",
      "thalassemia",
      "sickle cell anemia",
    ],
    answer: "pernicious anemia",
  },
  {
    question:
      "The most frequent cause of iron deficiency in men and postmenopausal women is _____.",
    options: [
      "cardiovascular disease",
      "gastrointestinal bleeding",
      "vitamin B12 deficiency",
      "infectious diseases",
    ],
    answer: "gastrointestinal bleeding",
  },
  {
    question:
      "_____, or red blood cells, make up about half of the blood's volume.",
    options: ["Leukocytes", "Lymphocytes", "Monocytes", "Erythrocytes"],
    answer: "Erythrocytes",
  },
  {
    question:
      "Approximately _____ of African Americans have the sickle cell anemia trait.",
    options: ["20%", "30%", "40%", "10%"],
    answer: "10%",
  },
  {
    question:
      "Vitamin _____ is required for the synthesis of the prothrombin and thrombin clotting factors.",
    options: ["K", "E", "A", "D"],
    answer: "K",
  },
  {
    question:
      "Hypereosinophilia can occur in response to a _____ infection and is a normal immune response.",
    options: ["parasitic", "fungal", "bacterial", "viral"],
    answer: "parasitic",
  },
  {
    question:
      "In sickle cell disease, tissue death caused by _____ causes great pain and may lead to organ failure.",
    options: ["ecchymosis", "hemolysis", "petechiae", "ischemia"],
    answer: "ischemia",
  },
  {
    question:
      "The pathogenesis of DIC involves the release of thrombin into the systemic circulation.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "The underlying cause of impaired erythropoiesis in megaloblastic anemia is deficiency in vitamin _____ and/or folic acid.",
    options: ["K", "E", "B12", "C"],
    answer: "B12",
  },
  {
    question: "Red blood cells are the most abundant cells in the human body.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Plasma contains the protein _____, which promotes the blood's ability to hold water and maintain pressure inside the blood vessels.",
    options: ["platelets", "albumin", "lymphocytes", "hemoglobin"],
    answer: "albumin",
  },
  {
    question:
      "Symptoms of _____ include abdominal distress, nausea and vomiting, and burning of the tongue.",
    options: [
      "thalassemia",
      "polycythemia vera",
      "sickle cell anemia",
      "pernicious anemia",
    ],
    answer: "pernicious anemia",
  },
  {
    question:
      "The _____ stage in the development of iron-deficiency anemia is a negative iron balance, in which the demands for iron exceed the body's ability to absorb iron from the diet.",
    options: ["first", "third", "fourth", "second"],
    answer: "first",
  },
  {
    question: "The _____ are caused by impaired DNA synthesis.",
    options: [
      "folic acid-deficiency anemias",
      "vitamin B12 anemias",
      "iron-deficiency anemias",
      "megaloblastic anemias",
    ],
    answer: "megaloblastic anemias",
  },
  {
    question:
      "In hemolytic anemia, the accumulation of _____ causes a jaundiced or yellow-orange appearance in the tissues, urine, and feces.",
    options: ["hemoglobin", "erythrocytes", "bilirubin", "platelets"],
    answer: "bilirubin",
  },
  {
    question: "Polycythemia vera is most commonly seen in _____.",
    options: ["younger men", "younger women", "older women", "older men"],
    answer: "older men",
  },
  {
    question: "In the lungs, hemoglobin binds to oxygen, becoming _____.",
    options: [
      "erythropoeisis",
      "hemoglobinopathies",
      "carboxyhemoglobin",
      "oxyhemoglobin",
    ],
    answer: "oxyhemoglobin",
  },
  {
    question:
      "It would take approximately three to six _____ for a normal individual to become deficient in vitamin B12 if absorption were to cease abruptly.",
    options: ["months", "days", "years", "weeks"],
    answer: "years",
  },
  {
    question:
      "Thrombocytopenia makes the body vulnerable to prolonged bleeding.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "The symptoms of anemia are due to tissue hypoxia.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Risk factors for _____ anemia include excessive blood loss, menstruation, pregnancy, and rapid growth during adolescence.",
    options: [
      "iron-deficiency",
      "folic acid-deficiency",
      "vitamin B12",
      "megaloblastic",
    ],
    answer: "iron-deficiency",
  },
  {
    question:
      "Vitamin _____ is a fat-soluble vitamin that is synthesized by intestinal bacteria.",
    options: ["C", "K", "B", "Z"],
    answer: "K",
  },
  {
    question:
      "Von Willebrand's disease is an inherited bleeding disorder that is most often diagnosed in children.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Patients with chronic neutropenia may experience chronic infections.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Which condition is characterized by an increase in blood viscosity along with associated neurological symptoms?",
    options: [
      "A) Thalassemia",
      "B) Polycythemia vera",
      "C) Idiopathic thrombocytopenic purpura",
      "D) Hemophilia A",
    ],
    answer: "B) Polycythemia vera",
  },
  {
    question: "What is the primary function of white blood cells (leukocytes)?",
    options: [
      "A) Transporting oxygen",
      "B) Maintaining osmotic pressure",
      "C) Destroying foreign objects and fighting infections in the bloodstream",
      "D) Clotting blood",
    ],
    answer:
      "C) Destroying foreign objects and fighting infections in the bloodstream",
  },
  {
    question:
      "Which vitamin is crucial for the synthesis of blood-clotting factors and can prevent bleeding in the brain when routinely injected at birth?",
    options: [
      "A) Vitamin D",
      "B) Vitamin B12",
      "C) Folic acid",
      "D) Vitamin K",
    ],
    answer: "D) Vitamin K",
  },
  {
    question:
      "Hemophilia A is an X-linked recessive disorder that primarily affects males and results in a deficiency of which clotting factor?",
    options: ["A) Factor VIII", "B) Factor IX", "C) Factor X", "D) Factor V"],
    answer: "A) Factor VIII",
  },
  {
    question:
      "Match the blood or hematological term with its correct definition or characteristic.",
    matches: [
      {
        left: "Erythrocytes",
        right: "Mature red blood cells",
      },
      {
        left: "Thrombocytopenia",
        right: "A disease involving circulating levels of platelets",
      },
      {
        left: "Neutropenia",
        right:
          "A reduction in circulating white blood cells increasing infection risk",
      },
      {
        left: "Hemoglobinopathy",
        right:
          "Disorders affecting the structure, function, or production of hemoglobin",
      },
    ],
  },
  {
    question:
      "Which condition is characterized by an increase in blood viscosity along with associated neurological symptoms?",
    options: [
      "A) Thalassemia",
      "B) Polycythemia vera",
      "C) Idiopathic thrombocytopenic purpura",
      "D) Hemophilia A",
    ],
    answer: "B) Polycythemia vera",
  },
  {
    question: "What is the primary function of white blood cells (leukocytes)?",
    options: [
      "A) Transporting oxygen",
      "B) Maintaining osmotic pressure",
      "C) Destroying foreign objects and fighting infections in the bloodstream",
      "D) Clotting blood",
    ],
    answer:
      "C) Destroying foreign objects and fighting infections in the bloodstream",
  },
  {
    question:
      "Which vitamin is crucial for the synthesis of blood-clotting factors and can prevent bleeding in the brain when routinely injected at birth?",
    options: [
      "A) Vitamin D",
      "B) Vitamin B12",
      "C) Folic acid",
      "D) Vitamin K",
    ],
    answer: "D) Vitamin K",
  },
  {
    question:
      "Hemophilia A is an X-linked recessive disorder that primarily affects males and results in a deficiency of which clotting factor?",
    options: ["A) Factor VIII", "B) Factor IX", "C) Factor X", "D) Factor V"],
    answer: "A) Factor VIII",
  },
  {
    question:
      "Match the blood or hematological term with its correct definition or characteristic.",
    matches: [
      {
        left: "Erythrocytes",
        right: "Mature red blood cells",
      },
      {
        left: "Thrombocytopenia",
        right: "A disease involving circulating levels of platelets",
      },
      {
        left: "Neutropenia",
        right:
          "A reduction in circulating white blood cells increasing infection risk",
      },
      {
        left: "Hemoglobinopathy",
        right:
          "Disorders affecting the structure, function, or production of hemoglobin",
      },
    ],
  },
];

export const ch7Practice: Section = {
  id: "bio160-7-practice",
  title: "Provided Practice Questions",
  description: "Provided Practice Questions",
  number: 3,
  type: "section",
  questions,
};
