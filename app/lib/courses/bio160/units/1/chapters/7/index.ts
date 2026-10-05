import { Chapter } from "@/app/types";
import { ch7DiseasesAtAGlance } from "./sections/diseases-at-a-glance";

export const bio160Chapter7: Chapter = {
  id: "bio160-7",
  title: "Chapter 7: Diseases & Disorders: Blood",
  description: "Week 3, Chapter 7: Diseases & Disorders: Blood",
  number: 7,
  type: "chapter",
  sections: [ch7DiseasesAtAGlance],
  questions: [
    {
      id: "q1",
      question: "What substances does blood transport?",
      answer:
        "Oxygen, carbon dioxide, water, nutrients, hormones, proteins, cells, and wastes.",
      tags: ["blood-functions"],
    },
    {
      id: "q2",
      question:
        "Which blood component is mostly water and transports nutrients, wastes, ions, hormones, clotting factors, albumin, and antibodies?",
      options: ["Plasma", "Platelets", "Red blood cells", "White blood cells"],
      answer: "Plasma",
      tags: ["blood-components"],
    },
    {
      id: "q3",
      question: "Match each blood component with its primary function.",
      matches: [
        {
          left: "Red blood cells",
          right: "Transport oxygen and carbon dioxide",
        },
        {
          left: "White blood cells",
          right: "Defend against infection and foreign substances",
        },
        {
          left: "Platelets",
          right: "Assist with blood clotting",
        },
        {
          left: "Albumin",
          right: "Helps maintain fluid balance and blood-vessel pressure",
        },
      ],
      tags: ["blood-components"],
    },
    {
      id: "q4",
      question: "What is the approximate lifespan of a red blood cell?",
      options: ["7 days", "30 days", "120 days", "1 year"],
      answer: "120 days",
      tags: ["red-blood-cells"],
    },
    {
      id: "q5",
      question: "Which characteristics describe normal red blood cells?",
      answer: "They are biconcave, lack a nucleus, and contain hemoglobin.",
      tags: ["red-blood-cells"],
    },
    {
      id: "q6",
      question: "What are the two main components of hemoglobin?",
      answer: "Globin and iron-containing heme.",
      tags: ["hemoglobin"],
    },
    {
      id: "q7",
      question:
        "Which hemoglobin forms transport oxygen, and which transports carbon dioxide?",
      answer:
        "Oxyhemoglobin transports oxygen; carbhemoglobin transports carbon dioxide.",
      tags: ["hemoglobin"],
    },
    {
      id: "q8",
      question:
        "Where are red blood cells produced and where are they removed?",
      answer:
        "They are produced in red bone marrow and removed by the liver and spleen.",
      tags: ["red-blood-cells"],
    },
    {
      id: "q9",
      question: "What is erythropoiesis, and what hormone regulates it?",
      answer:
        "Erythropoiesis is red blood cell production, regulated by erythropoietin.",
      tags: ["red-blood-cells"],
    },
    {
      id: "q10",
      question: "What are immature red blood cells called?",
      options: ["Leukocytes", "Reticulocytes", "Thrombocytes", "Erythroblasts"],
      answer: "Reticulocytes",
      tags: ["red-blood-cells"],
    },
    {
      id: "q11",
      question: "Name the five major types of white blood cells.",
      answer:
        "Neutrophils, eosinophils, basophils, monocytes, and lymphocytes.",
      tags: ["white-blood-cells"],
    },
    {
      id: "q12",
      question: "What forms the mesh that stops bleeding?",
      answer: "Platelets and fibrin.",
      tags: ["hemostasis"],
    },
    {
      id: "q13",
      question:
        "Where are most clotting factors produced, and what vitamin is needed to produce prothrombin and thrombin?",
      answer:
        "Most clotting factors are produced in the liver; vitamin K is needed to produce prothrombin and thrombin.",
      tags: ["hemostasis"],
    },
    {
      id: "q14",
      question: "What does a differential blood analysis evaluate?",
      answer: "Blood-cell size, shape, and proportions.",
      tags: ["blood-tests"],
    },
    {
      id: "q15",
      question: "How are bone marrow samples commonly obtained?",
      answer: "By needle aspiration.",
      tags: ["blood-tests"],
    },
    {
      id: "q16",
      question: "What is anemia?",
      options: [
        "An abnormally high platelet count",
        "An abnormally low red blood cell count",
        "An excess of white blood cells",
        "A disorder of plasma proteins",
      ],
      answer: "An abnormally low red blood cell count",
      tags: ["anemia"],
    },
    {
      id: "q17",
      question: "List four possible causes of anemia.",
      answer:
        "Blood loss, increased red blood cell destruction, nutritional deficiencies, and chronic disease.",
      tags: ["anemia"],
    },
    {
      id: "q18",
      question: "What symptoms may occur with anemia?",
      answer:
        "Fatigue, exercise intolerance, dyspnea, palpitations, pallor, and, in severe or acute cases, shock.",
      tags: ["anemia"],
    },
    {
      id: "q19",
      question: "Which findings suggest hemolysis?",
      answer:
        "Jaundice, an enlarged spleen, increased bilirubin, tachycardia, and heart murmurs.",
      tags: ["anemia", "hemolysis"],
    },
    {
      id: "q20",
      question:
        "Why does iron deficiency cause small, pencil-shaped red blood cells?",
      answer:
        "Iron depletion impairs hemoglobin production, causing red blood cells to become small and pencil-shaped.",
      tags: ["iron-deficiency-anemia"],
    },
    {
      id: "q21",
      question:
        "Which form of dietary iron is absorbed more easily, and what improves absorption of nonheme iron?",
      answer:
        "Heme iron from meat and fish is absorbed more easily; vitamin C improves absorption of nonheme plant iron.",
      tags: ["iron-deficiency-anemia"],
    },
    {
      id: "q22",
      question:
        "Match each anemia type with its characteristic cause or finding.",
      matches: [
        {
          left: "Anemia of chronic disease",
          right:
            "Associated with chronic inflammation, infection, or autoimmune disease",
        },
        {
          left: "Renal anemia",
          right: "Kidney failure reduces erythropoietin production",
        },
        {
          left: "Megaloblastic anemia",
          right:
            "Impaired DNA synthesis causes abnormally large red blood cells",
        },
        {
          left: "Hemolytic anemia",
          right: "Accelerated destruction of red blood cells",
        },
      ],
      tags: ["anemia"],
    },
    {
      id: "q23",
      question: "What commonly causes megaloblastic anemia?",
      options: [
        "Vitamin B12 or folate deficiency",
        "Excess vitamin K",
        "Platelet destruction",
        "Dehydration",
      ],
      answer: "Vitamin B12 or folate deficiency",
      tags: ["megaloblastic-anemia"],
    },
    {
      id: "q24",
      question: "What can cause vitamin B12 deficiency or pernicious anemia?",
      answer:
        "Inadequate intake, poor absorption, or lack of intrinsic factor.",
      tags: ["vitamin-b12"],
    },
    {
      id: "q25",
      question: "Who is at increased risk for vitamin B12 deficiency?",
      answer: "Strict vegans and people with bowel or stomach disorders.",
      tags: ["vitamin-b12"],
    },
    {
      id: "q26",
      question: "What are common risk factors for folate-deficiency anemia?",
      answer:
        "Pregnancy, lactation, alcohol abuse, kidney disease, bowel inflammation, and certain medications.",
      tags: ["folate"],
    },
    {
      id: "q27",
      question: "What is sickle cell anemia?",
      answer:
        "An inherited hemoglobin disorder in which abnormal hemoglobin causes rigid, sickle-shaped red blood cells.",
      tags: ["hemoglobinopathies"],
    },
    {
      id: "q28",
      question:
        "What complications can result when sickled cells block small blood vessels?",
      answer:
        "Pain, ischemia, hemolysis, infections, and possible organ damage.",
      tags: ["sickle-cell-anemia"],
    },
    {
      id: "q29",
      question: "What causes thalassemia?",
      options: [
        "Deficient production of hemoglobin protein chains",
        "Excess platelet production",
        "Vitamin K deficiency",
        "Autoimmune destruction of neutrophils",
      ],
      answer: "Deficient production of hemoglobin protein chains",
      tags: ["thalassemia"],
    },
    {
      id: "q30",
      question: "What is polycythemia vera, and why is it dangerous?",
      answer:
        "It is an abnormally increased red blood cell mass, often with increased white blood cells and platelets. It thickens the blood and increases clot risk.",
      tags: ["polycythemia"],
    },
    {
      id: "q31",
      question: "What are the essential components of hemostasis?",
      answer: "Platelets, prothrombin, thrombin, vitamin K, and calcium.",
      tags: ["hemostasis"],
    },
    {
      id: "q32",
      question: "What is thrombocytopenia, and what signs may it cause?",
      answer:
        "It is an abnormally low platelet count. It may cause prolonged bleeding, petechiae, ecchymoses, and mucosal or internal bleeding.",
      tags: ["bleeding-disorders"],
    },
    {
      id: "q33",
      question: "What is idiopathic thrombocytopenic purpura (ITP)?",
      answer: "An autoimmune disorder in which platelets are destroyed.",
      tags: ["itp"],
    },
    {
      id: "q34",
      question: "How does ITP typically differ between children and adults?",
      answer:
        "In children it is often acute after a viral infection and resolves within weeks; in adults it is usually chronic.",
      tags: ["itp"],
    },
    {
      id: "q35",
      question: "Which clotting factors require vitamin K?",
      answer: "Factors VII, IX, X, and prothrombin.",
      tags: ["vitamin-k", "coagulation"],
    },
    {
      id: "q36",
      question: "What is hemophilia A?",
      options: [
        "An X-linked recessive disorder caused by factor VIII deficiency",
        "An autoimmune platelet disorder",
        "A disorder caused by excess vitamin K",
        "A condition caused by increased red blood cell production",
      ],
      answer: "An X-linked recessive disorder caused by factor VIII deficiency",
      tags: ["hemophilia"],
    },
    {
      id: "q37",
      question:
        "What are common bleeding sites and complications of hemophilia A?",
      answer:
        "Common sites include the gastrointestinal tract and joints. Complications include painful swollen joints, fibrosis, disability, and intracranial hemorrhage.",
      tags: ["hemophilia"],
    },
    {
      id: "q38",
      question: "What is von Willebrand disease?",
      answer:
        "An inherited deficiency or dysfunction of von Willebrand factor that impairs platelet adhesion; factor VIII may also be reduced.",
      tags: ["von-willebrand-disease"],
    },
    {
      id: "q39",
      question:
        "What causes disseminated intravascular coagulation (DIC) to produce both clotting and bleeding?",
      answer:
        "Excess thrombin causes widespread clots, consuming platelets and clotting factors; their depletion then causes severe bleeding.",
      tags: ["dic"],
    },
    {
      id: "q40",
      question: "What conditions are associated with DIC?",
      answer:
        "Sepsis, shock or endothelial damage, obstetric complications, and some cancers.",
      tags: ["dic"],
    },
    {
      id: "q41",
      question: "What is neutropenia, and what major risk does it create?",
      answer:
        "Neutropenia is a reduced number of circulating neutrophils, creating an increased risk of bacterial and fungal infections.",
      tags: ["neutropenia"],
    },
    {
      id: "q42",
      question:
        "Why may severe neutropenia cause little swelling or pus during infection?",
      answer:
        "Neutrophils produce acute inflammation, so their absence can reduce swelling and pus formation.",
      tags: ["neutropenia"],
    },
    {
      id: "q43",
      question: "Name three common causes of neutropenia.",
      answer:
        "Cancer chemotherapy or immune-suppressing drugs, autoimmune destruction, and bone marrow failure.",
      tags: ["neutropenia"],
    },
    {
      id: "q44",
      question: "What treatment may be needed for severe neutropenia?",
      answer:
        "Hospitalization, isolation, intravenous antibiotics, and sometimes colony-stimulating factors; corticosteroids may help autoimmune neutropenia.",
      tags: ["neutropenia"],
    },
    {
      id: "q45",
      question: "What is idiopathic hypereosinophilic syndrome?",
      answer:
        "A condition involving persistent eosinophilia that can damage the heart and nervous system, primarily affecting men ages 20–50.",
      tags: ["eosinophils"],
    },
    {
      id: "q46",
      question: "What is eosinophilia-myalgia syndrome associated with?",
      options: [
        "L-tryptophan supplements",
        "Vitamin C deficiency",
        "Factor VIII replacement",
        "Iron injections",
      ],
      answer: "L-tryptophan supplements",
      tags: ["eosinophils"],
    },
    {
      id: "q47",
      question: "What blood disorder is most common in adults over age 75?",
      answer: "Anemia.",
      tags: ["aging"],
    },
    {
      id: "q48",
      question: "How can untreated anemia affect older adults?",
      answer:
        "It may reduce physical performance, cause mental changes, and increase mortality.",
      tags: ["aging", "anemia"],
    },
    {
      id: "q49",
      question:
        "What blood abnormalities may result from malignancy or cancer treatment?",
      answer:
        "Neutropenia, thrombocytopenia, nutritional anemia, and immune deficiency.",
      tags: ["aging", "cancer"],
    },
    {
      question: "Which is not true of blood plasma?",
      options: [
        "it carries hormones",
        "it contains protein",
        "most of its volume consists of water",
        "it destroys foreign objects in the bloodstream",
      ],
      answer: "it destroys foreign objects in the bloodstream",
    },
    {
      question:
        "A lab technician spins blood samples in a centrifuge, machine designed for separating plasma from formed elements. The platelets will be found in which part of the separated blood?",
      options: [
        "in both plasma and among formed elements.",
        "plasma",
        "With the formed elements",
        "serum",
      ],
      answer: "With the formed elements",
    },
    {
      question:
        "How are erythrocytes produced in numbers sufficient for maintaining adequate gas exchange throughout the body?",
      options: [
        "Low levels of erythrocytes in the blood triggers red blood cells to divide",
        "Dead erythrocytes are absorbed by the liver, where iron stores are used to replenish their hemoglobin before they are returned to the bloodstream.",
        "Stored iron from the liver goes to the spleen, the iron bonds with globin protein and is encased in a cell membrane. Mature erythrocytes are released through the splenic duct.",
        "Erythropoetin stimulates stem cells in the bone marrow to produce more red blood cells.",
      ],
      answer:
        "Erythropoetin stimulates stem cells in the bone marrow to produce more red blood cells.",
    },
    {
      question: "How does an erythrocyte carry oxygen?",
      options: [
        "it binds to a receptor in the cell membrane",
        "it is held in the concave area on the cell surface",
        "it is held in microscopic gas pockets in the cytoplasm",
        "it is bound to hemoglobin",
      ],
      answer: "it is bound to hemoglobin",
    },
    {
      question:
        "A patient has made an appointment with a health care provider because he has been suffering from unexplained fevers and frequent infections that take a long time to recover from. Which blood component would the provider be most interested in evaluating?",
      options: ["erythrocytes", "leukocytes", "plasma protein", "platelets"],
      answer: "leukocytes",
    },
    {
      question:
        "You are working with a hematologist (specialist in diseases of the blood) and a patient with severe liver disease has been referred to your office. When preparing for the visit, you anticipate the patient will be evaluated for",
      options: [
        "infection",
        "high blood pressure",
        "rapid heart beat",
        "abnormal bleeding",
      ],
      answer: "abnormal bleeding",
    },
    {
      question:
        "A patient has a normal platelet count, very low levels of albumin in her blood, and is suffering from abnormally low blood pressure, agitation, bleeding gums, and has a rash on her torso. Which of these symptoms can be attributed to low levels of albumin?",
      options: ["agitation", "rash", "low blood pressure", "bleeding gums"],
      answer: "low blood pressure",
    },
    {
      question:
        "Anemic women may be able to return their red blood cell counts to normal levels with",
      options: [
        "reduced fat intake",
        "vitamin D supplements",
        "iron supplements",
        "increased water intake",
      ],
      answer: "iron supplements",
    },
    {
      question:
        "Which of the following problems may be prevented by routine injection of vitamin K at birth?",
      options: [
        "rapid heart beat",
        "decreased oxygenation",
        "systemic infection",
        "bleeding in the brain",
      ],
      answer: "bleeding in the brain",
    },
    {
      question:
        "Susan is has a history of anemia and is looking for dietary supplements that will help her to avoid this condition. Which of these supplements would not be useful in preventing anemia?",
      options: ["calcium", "vitamin B12", "folic acid", "iron"],
      answer: "calcium",
    },
  ],
};
