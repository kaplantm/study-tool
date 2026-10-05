import { Questions, Section } from "@/app/types";

const questions: Questions = [
  {
    question:
      "Which patient would be at greatest risk of developing a venous thrombosis?",
    options: [
      "patient with numerous spider veins on the lower legs",
      "patient on bedrest after abdominal surgery",
      "patient who wears compression stockings",
      "patient with infected ulcers on lower extremities",
    ],
    answer: "patient on bedrest after abdominal surgery",
    moreInfo: [
      "Post-surgical patients are at increased risk for venous thrombosis because immobility reduces blood flow in the extremities.",
    ],
  },
  {
    question: "What causes septic shock?",
    options: [
      "damage to the nervous system",
      "an allergic reaction",
      "toxins released by a bacterial infection",
      "cardiac arrhythmias and myocardial infarction",
    ],
    answer: "toxins released by a bacterial infection",
    moreInfo: [
      "Septic shock is caused by toxins released by a bacterial infection.",
    ],
  },
  {
    question: "Identify the causes of pulmonary arterial hypertension.",
    options: [
      "trauma, allergic reaction and drug, hemorrhage",
      "ventricular septal defect, patent ductus arteriosus, unknown in many cases",
      "older age, sedentary lifestyle, overweight, excessive dietary salt intake, family history",
      "genetic, lifestyle, obesity and diabetes, diet high in saturated fat",
    ],
    answer:
      "ventricular septal defect, patent ductus arteriosus, unknown in many cases",
    moreInfo: [
      "Causes of pulmonary arterial hypertension include ventricular septal defect, patent ductus arteriosus, and is unknown, in many cases.",
    ],
  },
  {
    question: "Arteriosclerosis can lead to which manifestation?",
    options: [
      "increased blood flow",
      "hypertension",
      "elevated blood cholesterol levels",
      "elevated blood lipid levels",
    ],
    answer: "hypertension",
    moreInfo: [
      "Affected arteries are unable to stretch and rebound in response to the pressure of blood as it is forced through them by contraction of the heart, which leads to hypertension.",
    ],
  },
  {
    question:
      "Which diagnostic test provides a definitive diagnosis of causative organism of infective endocarditis of the heart valves?",
    options: [
      "electrocardiogram",
      "computerized tomography",
      "blood culture",
      "echocardiogram",
    ],
    answer: "blood culture",
  },
  {
    question: "Which statement is true regarding hypertension?",
    options: [
      "Its most common symptom is headache.",
      "It affects about 30% of the adult population worldwide.",
      "It remains untreated or undertreated in the majority of affected individuals.",
      "It is the second most common cardiovascular disorder.",
    ],
    answer:
      "It remains untreated or undertreated in the majority of affected individuals.",
    moreInfo: [
      "It is true that hypertension remains untreated or undertreated in the majority of affected individuals.",
    ],
  },
  {
    question: "Which individual is at greatest risk for hypertension?",
    options: [
      "excessive dietary intake of salt, consumes 2 beers a day, 52 years old, male",
      "prehypertensive, marathon runner, 60 year old, female",
      "family history of hypertension, sedentary lifestyle, 72 years old, female",
      "African-American ancestry, obese, 42 years old, male",
    ],
    answer:
      "family history of hypertension, sedentary lifestyle, 72 years old, female",
  },
  {
    question: "Which are the complications of varicose veins?",
    options: [
      "ulcers, fever, and loss of sensation",
      "ulcers, infection, and hemorrhage",
      "ulcers, thinning of the skin, and excessive itching",
      "ulcers, necrosis, and numbness",
    ],
    answer: "ulcers, infection, and hemorrhage",
  },
  {
    question:
      "How does high-density lipoprotein function in the body to help prevent hyperlipidemia?",
    options: [
      "it helps carry cholesterol away from the arteries",
      "it carries cholesterol to the kidneys so it can be eliminated from the body.",
      "it helps to store cholesterol in the body",
      "it carries about one-half of the cholesterol in the body",
    ],
    answer: "it helps carry cholesterol away from the arteries",
    moreInfo: [
      "High-density lipoprotein carries cholesterol to the liver so it can be eliminated from the body.",
    ],
  },
  {
    question: "What dysfunction is present when an individual has heart block?",
    options: [
      "The mitral valve remains partially open.",
      "the atrial contractions are disorganized and uncoordinated",
      "the ventricular contractions are disorganized and uncoordinated",
      "the atria and ventricles contract independently of each other",
    ],
    answer: "the atria and ventricles contract independently of each other",
  },
  {
    question:
      "After birth, the decrease in right and left atrial pressure produces a closure of which structure(s)?",
    options: [
      "pulmonary veins",
      "foramen ovale",
      "displaced aorta",
      "pulmonary semilunar valve",
    ],
    answer: "foramen ovale",
  },
  {
    question:
      "Difficulty feeding, failure to gain weight, poor development, cyanosis, and fainting are signs and symptoms of which congenital heart defect?",
    options: [
      "tetralogy of Fallot",
      "transposition of the great arteries",
      "patent ductus arteriosus",
      "coarctation of the aorta",
    ],
    answer: "tetralogy of Fallot",
  },
  {
    question:
      "Signs and symptoms of rheumatic fever begin approximately _________ following a _________ infection?",
    options: [
      "two weeks, streptococcal",
      "two weeks, staphylococcal",
      "seven days, staphylococcal",
      "seven days, streptococcal",
    ],
    answer: "two weeks, streptococcal",
  },
  {
    question:
      "What is the single most effective nondrug method to reduce blood pressure?",
    options: [
      "lose weight",
      "reduce dietary salt intake",
      "exercise",
      "limit alcohol consumption",
    ],
    answer: "lose weight",
    moreInfo: [
      "Weight loss is the single most effective nondrug method to reduce blood pressure.",
    ],
  },
];

export const ch6PracticeTest: Section = {
  id: "s3-bio160-6-practice-test",
  title: "Diagrams",
  description: "Practice Test",
  number: 4,
  type: "section",
  questions,
};
