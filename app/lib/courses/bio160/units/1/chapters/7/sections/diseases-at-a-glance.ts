import { Questions, Section } from "@/app/types";

const questions: Questions = [
  {
    id: "q1",
    question: "What is the primary cause of iron-deficiency anemia?",
    answer: "Iron loss",
    tags: ["anemia", "etiology"],
  },
  {
    id: "q2",
    question: "Which symptoms are associated with iron-deficiency anemia?",
    options: [
      "Fatigue, decreased exercise tolerance, and shortness of breath",
      "Dizziness, headaches, and visual disturbances",
      "Abdominal distress, nausea, vomiting, and burning of the tongue",
      "Bleeding and skin inflammation",
    ],
    answer: "Fatigue, decreased exercise tolerance, and shortness of breath",
    tags: ["iron-deficiency anemia", "symptoms"],
  },
  {
    id: "q3",
    question: "Match each type of anemia with its etiology.",
    matches: [
      {
        left: "Iron-deficiency anemia",
        right: "Iron loss",
      },
      {
        left: "Anemia of chronic disease and renal disease",
        right: "Defect in erythropoiesis",
      },
      {
        left: "Vitamin B12–deficiency anemia",
        right: "Impaired intake or absorption of vitamin B12",
      },
      {
        left: "Folic acid–deficiency anemia",
        right: "Impaired intake and depletion of body stores",
      },
    ],
    tags: ["anemia", "etiology"],
  },
  {
    id: "q4",
    question:
      "What is the usual treatment for anemia of chronic disease and renal disease?",
    answer:
      "Erythropoietin and iron, along with treatment of the underlying disease",
    tags: ["anemia", "treatment"],
  },
  {
    id: "q5",
    question: "Which symptoms may indicate vitamin B12–deficiency anemia?",
    answer: "Abdominal distress, nausea, vomiting, and burning of the tongue",
    tags: ["vitamin B12", "symptoms"],
  },
  {
    id: "q6",
    question: "How is vitamin B12–deficiency anemia diagnosed and treated?",
    answer:
      "Diagnosis uses blood tests and health history; treatment involves vitamin B12 replacement and treatment of the underlying absorption problem",
    tags: ["vitamin B12", "diagnosis", "treatment"],
  },
  {
    id: "q7",
    question:
      "What is the recommended prevention for folic acid–deficiency anemia?",
    answer: "A folic acid–fortified diet",
    tags: ["folic acid", "prevention"],
  },
  {
    id: "q8",
    question:
      "Match each inherited blood disorder with its characteristic defect.",
    matches: [
      {
        left: "Sickle cell anemia",
        right: "Abnormal hemoglobin",
      },
      {
        left: "Thalassemia",
        right: "Defective hemoglobin",
      },
      {
        left: "Hemophilia A",
        right: "Deficiency of clotting factor VIII",
      },
      {
        left: "Von Willebrand’s disease",
        right: "Decreased platelet adhesion",
      },
    ],
    tags: ["genetic disorders", "hematology"],
  },
  {
    id: "q9",
    question: "Which symptoms are characteristic of sickle cell anemia?",
    options: [
      "Pallor, fatigue, shortness of breath, and painful sickle cell crisis",
      "Bleeding and congestive heart failure",
      "Skin changes and pulmonary hypertension",
      "Dizziness, headaches, and visual disturbances",
    ],
    answer:
      "Pallor, fatigue, shortness of breath, and painful sickle cell crisis",
    tags: ["sickle cell anemia", "symptoms"],
  },
  {
    id: "q10",
    question: "What treatments may be used for sickle cell anemia?",
    answer:
      "Prevention of sickle cell crises, supportive therapy, analgesics, and blood transfusion",
    tags: ["sickle cell anemia", "treatment"],
  },
  {
    id: "q11",
    question: "How are sickle cell anemia and thalassemia diagnosed?",
    answer: "Genetic testing and blood tests",
    tags: ["sickle cell anemia", "thalassemia", "diagnosis"],
  },
  {
    id: "q12",
    question:
      "What is the cause, presentation, and treatment of polycythemia vera?",
    answer:
      "Its cause is idiopathic or unknown; symptoms include dizziness, headaches, and visual disturbances; treatment includes chemotherapy and blood letting",
    tags: ["polycythemia vera"],
  },
  {
    id: "q13",
    question: "Match each platelet or coagulation disorder with its treatment.",
    matches: [
      {
        left: "Idiopathic thrombocytopenic purpura",
        right: "Corticosteroids and splenectomy",
      },
      {
        left: "Hemophilia A",
        right: "Replacement of factor VIII",
      },
      {
        left: "Von Willebrand’s disease",
        right: "Desmopressin",
      },
      {
        left: "Disseminated intravascular coagulation",
        right: "Supportive care and platelet transfusions",
      },
    ],
    tags: ["coagulation disorders", "treatment"],
  },
  {
    id: "q14",
    question:
      "What causes idiopathic thrombocytopenic purpura, and what is its main sign?",
    answer:
      "It may follow a viral infection in children, while the cause is unknown in adults; its main sign is bleeding",
    tags: ["idiopathic thrombocytopenic purpura"],
  },
  {
    id: "q15",
    question:
      "What conditions can cause disseminated intravascular coagulation?",
    options: [
      "Sepsis, endothelial damage, and shock",
      "Iron loss and poor dietary intake",
      "L-tryptophan ingestion and pulmonary hypertension",
      "Cancer, chemotherapy, and immune disorders",
    ],
    answer: "Sepsis, endothelial damage, and shock",
    tags: ["disseminated intravascular coagulation", "etiology"],
  },
  {
    id: "q16",
    question: "How is disseminated intravascular coagulation diagnosed?",
    answer:
      "With blood tests and clinical signs and symptoms in high-risk patients",
    tags: ["disseminated intravascular coagulation", "diagnosis"],
  },
  {
    id: "q17",
    question: "Match each white blood cell disorder with its cause or trigger.",
    matches: [
      {
        left: "Neutropenia",
        right: "Medications, cancer, chemotherapy, or immune disorders",
      },
      {
        left: "Idiopathic hypereosinophilic syndrome",
        right: "Unknown",
      },
      {
        left: "Eosinophilia myalgia syndrome",
        right: "Ingestion of dietary supplements containing L-tryptophan",
      },
    ],
    tags: ["white blood cell disorders", "etiology"],
  },
  {
    id: "q18",
    question: "What are the signs, diagnosis, and treatment of neutropenia?",
    answer:
      "Signs include infection, fever, and skin inflammation; diagnosis is by blood test; treatment includes medications that increase neutrophil count and antibiotics",
    tags: ["neutropenia"],
  },
  {
    id: "q19",
    question:
      "What serious complication can result from idiopathic hypereosinophilic syndrome, and how is it treated?",
    answer:
      "Cardiac symptoms can lead to congestive heart failure; treatment is chemotherapy",
    tags: ["idiopathic hypereosinophilic syndrome"],
  },
  {
    id: "q20",
    question:
      "What are the symptoms, treatment, and prevention considerations for eosinophilia myalgia syndrome?",
    answer:
      "Symptoms include skin changes, nervous system abnormalities, and pulmonary hypertension; treatment is discontinuation of the causative agent; prevention is uncertain because contaminants may be present without notice",
    tags: ["eosinophilia myalgia syndrome"],
  },
  {
    id: "q21",
    question:
      "Which conditions cannot currently be prevented according to the provided material?",
    answer:
      "Sickle cell disease, thalassemia, hemophilia, von Willebrand’s disease, and neutropenia; disseminated intravascular coagulation is difficult to predict, and prevention is not possible",
    tags: ["prevention", "hematology"],
  },
  {
    id: "q22",
    question: "What prevention is recommended for iron-deficiency anemia?",
    answer:
      "An iron-fortified diet and iron replacement in high-risk individuals",
    tags: ["iron-deficiency anemia", "prevention"],
  },
  {
    id: "q23",
    question:
      "A 42-year-old woman has experienced fatigue for several months. The onset was poorly defined, and she has no other complaints except low energy and shortness of breath when climbing stairs or walking for a prolonged distance. She recently lost weight after the death of her mother. What diseases or conditions should be considered, and what additional information is needed to make a diagnosis?",
    answer:
      "Anemia should be considered. Weight loss may occur with gastrointestinal malabsorption, stress, or cancer. A health history and blood tests are needed to confirm the diagnosis and identify its cause.",
    tags: ["anemia", "diagnosis", "case study"],
  },
  {
    id: "q24",
    question:
      "B.K. is a 65-year-old man admitted for surgery. He previously took blood thinners to treat a clotting disorder and is fearful because he experienced severe bleeding during a prior hospitalization. What conditions should B.K.'s doctors consider, and what symptoms and diagnostic tests should be evaluated?",
    answer:
      "Thrombocytopenia, impaired synthesis of clotting factors, and vitamin K deficiency should be considered. Symptoms include prolonged bleeding, petechiae, and ecchymosis. Evaluation includes blood tests and, when indicated, bone marrow testing.",
    tags: ["coagulation disorders", "diagnosis", "case study"],
  },
  {
    id: "q25",
    question: "What is the oxygen-carrying component of red blood cells?",
    answer: "Hemoglobin",
    tags: ["hemoglobin", "red-blood-cells"],
  },
  {
    id: "q26",
    question:
      "In anemia of chronic disease and anemia of chronic renal failure, what defect contributes to impaired red blood cell synthesis?",
    answer: "Defective erythropoiesis",
    tags: ["anemia", "erythropoiesis"],
  },
  {
    id: "q27",
    question: "What causes pernicious anemia?",
    answer: "Inadequate absorption of vitamin B12",
    tags: ["pernicious anemia", "vitamin B12"],
  },
  {
    id: "q28",
    question: "What hormone produced by the kidneys stimulates erythrocyte production?",
    answer: "Erythropoietin",
    tags: ["erythropoietin", "red-blood-cells"],
  },
  {
    id: "q29",
    question:
      "What are disorders affecting the structure, function, or production of hemoglobin called?",
    answer: "Hemoglobinopathies",
    tags: ["hemoglobinopathies"],
  },
  {
    id: "q30",
    question:
      "What disorder is characterized by deficient synthesis of one or more alpha or beta chains of hemoglobin?",
    answer: "Thalassemia",
    tags: ["thalassemia"],
  },
  {
    id: "q31",
    question:
      "What disease is characterized by increased blood viscosity with associated neurologic symptoms?",
    answer: "Polycythemia vera",
    tags: ["polycythemia vera"],
  },
  {
    id: "q32",
    question:
      "What autoimmune disorder results in destruction of platelets?",
    answer: "Idiopathic thrombocytopenic purpura",
    tags: ["idiopathic thrombocytopenic purpura"],
  },
  {
    id: "q33",
    question:
      "What X-linked recessive disorder primarily affects males and results from a deficiency of clotting factor VIII?",
    answer: "Hemophilia A",
    tags: ["hemophilia A"],
  },
  {
    id: "q34",
    question:
      "What condition is a reduction in circulating white blood cells that increases the risk of severe bacterial and fungal infections?",
    answer: "Neutropenia",
    tags: ["neutropenia"],
  },
  {
    id: "q35",
    question: "Chemotherapy can be used to treat idiopathic hypereosinophilic syndrome.",
    options: ["True", "False"],
    answer: "True",
    tags: ["idiopathic hypereosinophilic syndrome", "true-false"],
  },
  {
    id: "q36",
    question: "Hemoglobin is the most important component of white blood cells.",
    options: ["True", "False"],
    answer: "False",
    tags: ["hemoglobin", "true-false"],
  },
  {
    id: "q37",
    question:
      "The production of red blood cells is regulated by a kidney hormone called erythropoietin.",
    options: ["True", "False"],
    answer: "True",
    tags: ["erythropoietin", "true-false"],
  },
  {
    id: "q38",
    question: "The symptoms of neutropenia are due to hypoxia.",
    options: ["True", "False"],
    answer: "False",
    tags: ["neutropenia", "true-false"],
  },
  {
    id: "q39",
    question:
      "The diagnosis of anemia requires hematocrit measurement and microscopic examination of a peripheral blood smear.",
    options: ["True", "False"],
    answer: "True",
    tags: ["anemia", "diagnosis", "true-false"],
  },
  {
    id: "q40",
    question: "Vitamin K is required for the synthesis of clotting factors.",
    options: ["True", "False"],
    answer: "True",
    tags: ["vitamin K", "coagulation", "true-false"],
  },
  {
    id: "q41",
    question: "Von Willebrand disease is a hereditary deficiency of vitamin K.",
    options: ["True", "False"],
    answer: "False",
    tags: ["von Willebrand disease", "true-false"],
  },
  {
    id: "q42",
    question:
      "The depletion of platelets in disseminated intravascular coagulation is also known as consumptive coagulopathy.",
    options: ["True", "False"],
    answer: "True",
    tags: ["disseminated intravascular coagulation", "true-false"],
  },
  {
    id: "q43",
    question: "Enlargement of the spleen occurs in anemia caused by hemolysis.",
    options: ["True", "False"],
    answer: "True",
    tags: ["hemolysis", "true-false"],
  },
  {
    id: "q44",
    question: "Iron supplementation can be used to treat the most common form of anemia.",
    options: ["True", "False"],
    answer: "True",
    tags: ["iron-deficiency anemia", "true-false"],
  },
  {
    id: "q45",
    question: "What are white blood cells called?",
    answer: "Leukocytes",
    tags: ["white-blood-cells"],
  },
  {
    id: "q46",
    question: "What are mature red blood cells called?",
    answer: "Erythrocytes",
    tags: ["red-blood-cells"],
  },
  {
    id: "q47",
    question:
      "What type of hemoglobin forms cross-links and causes sickling of red blood cells in sickle cell disease?",
    answer: "Hemoglobin S",
    tags: ["sickle cell anemia", "hemoglobin"],
  },
  {
    id: "q48",
    question: "What is thrombocytopenia?",
    answer: "A reduction in the circulating level of platelets",
    tags: ["thrombocytopenia"],
  },
  {
    id: "q49",
    question: "What are the two common and severe forms of thalassemia?",
    answer: "Alpha thalassemia and beta thalassemia",
    tags: ["thalassemia"],
  },
  {
    id: "q50",
    question: "What is the leading cause of anemia worldwide?",
    answer: "Iron deficiency",
    tags: ["iron-deficiency anemia", "epidemiology"],
  },
  {
    id: "q51",
    question: "What condition can result from vitamin B12 or folic acid deficiency?",
    answer: "Anemia",
    tags: ["anemia", "vitamin B12", "folic acid"],
  },
  {
    id: "q52",
    question: "How long do red blood cells normally survive in the circulation?",
    answer: "Approximately 120 days",
    tags: ["red-blood-cells"],
  },
  {
    id: "q53",
    question:
      "What condition is characterized by a rise in red blood cell mass accompanied by increases in white blood cells and platelets?",
    answer: "Polycythemia vera",
    tags: ["polycythemia vera"],
  },
  {
    id: "q54",
    question:
      "What is the pathogenesis of disseminated intravascular coagulation?",
    answer:
      "The release of tissue factor initiates extensive coagulation, followed by consumption of platelets and clotting factors.",
    tags: ["disseminated intravascular coagulation", "pathogenesis"],
  },
];

export const ch7DiseasesAtAGlance: Section = {
  id: "bio160-7-diseases",
  title: "Ch7: Diseases At A Glance",
  description: "Ch7: Diseases At A Glance",
  number: 1,
  type: "section",
  questions,
};
