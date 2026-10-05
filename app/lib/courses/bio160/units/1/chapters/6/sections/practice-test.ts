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
      "Causes of pulmonary arterial hypertension include ventricular septal defect, patent ductus arteriosus, and is unknown in many cases.",
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
      "Affected arteries are unable to stretch and rebound in response to blood pressure, which leads to hypertension.",
    ],
  },
  {
    question:
      "What role do triglycerides play in hyperlipidemia and atherosclerosis?",
    options: [
      "increases the risk for coronary artery disease",
      "facilitates fat in the body to take the form of high density lipoprotein",
      "helps to decrease cholesterol synthesis",
      "helps to remove cholesterol from the blood",
    ],
    answer: "increases the risk for coronary artery disease",
    moreInfo: [
      "High blood levels of triglycerides are linked to coronary artery disease.",
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
    question: "What are the signs and symptoms of aortic stenosis?",
    options: [
      "hypertrophy of the left ventricle and calcified deposits on the valve",
      "usually asymptomatic",
      "increased pressure in the heart, congestion of the veins, cyanosis, and congestive heart failure",
      "dilation of the ventricle, backflow of blood into the left ventricle, decreased diastolic pressure",
    ],
    answer:
      "hypertrophy of the left ventricle and calcified deposits on the valve",
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
  },
  {
    question: "Which are known as the 'good' cholesterol?",
    options: [
      "high-density lipoproteins",
      "low-density lipoproteins",
      "hypercholesterolemia",
      "triglycerides",
    ],
    answer: "high-density lipoproteins",
  },
  {
    question: "What effect does age have on systolic blood pressure?",
    options: [
      "remains unchanged",
      "unknown",
      "progressively increases",
      "progressively decreases",
    ],
    answer: "progressively increases",
  },
  {
    question:
      "What class of drug can be used medically to close a patent ductus arteriosus (PDA)?",
    options: [
      "antibiotics",
      "anticoagulants",
      "antispasmodics",
      "anti-inflammatories",
    ],
    answer: "anti-inflammatories",
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
      "Which organ or system is least likely to be affected by long-term hypertension?",
    options: ["cardiovascular", "liver", "kidneys", "eyes"],
    answer: "liver",
  },
  {
    question: "Which statement is correct regarding arteriosclerosis?",
    options: [
      "is caused by minerals accumulating within the walls of the arteries",
      "it leads to hypertension",
      "artery walls thicken and become soft",
      "artery walls become flexible",
    ],
    answer: "it leads to hypertension",
  },
  {
    question:
      "What estimated percentage of adults over the age of 20 in the United States has high levels of low-density lipoproteins (LDL)?",
    options: ["70%", "50%", "25%", "35%"],
    answer: "35%",
  },
  {
    question: "What is the most common heart rhythm disorder?",
    options: [
      "ventricular fibrillation",
      "tachycardia",
      "bradycardia",
      "atrial fibrillation",
    ],
    answer: "atrial fibrillation",
  },
  {
    question: "Which intervention helps relieve symptoms of varicose veins?",
    options: [
      "elevating the legs when seated",
      "avoiding support hose",
      "avoiding unnecessary walking",
      "increasing calcium in the diet",
    ],
    answer: "elevating the legs when seated",
  },
  {
    question:
      "Peripheral arterial disease occurs most commonly in which gender and age group?",
    options: [
      "men 70-80 years of age",
      "women 50-60 years of age",
      "men 55-65 years of age",
      "women 65-75 years of age",
    ],
    answer: "men 70-80 years of age",
  },
  {
    question:
      "How does high-density lipoprotein function in the body to help prevent hyperlipidemia?",
    options: [
      "it helps carry cholesterol away from the arteries",
      "it carries cholesterol to the kidneys so it can be eliminated from the body",
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
      "Arteriosclerosis is an etiology of which valvular heart disease?",
    options: [
      "mitral stenosis",
      "aortic stenosis",
      "aortic regurgitation",
      "mitral regurgitation",
    ],
    answer: "aortic stenosis",
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
    question: "Older age is an etiology of which cardiac disease?",
    options: [
      "mitral stenosis",
      "arterial hypertension",
      "chronic venous insufficiency",
      "hypertrophic cardiomyopathy",
    ],
    answer: "arterial hypertension",
  },
  {
    question:
      "Approximately how many infant births per 1,000 have some form of congenital heart disease?",
    options: ["eight", "twenty", "four", "ten"],
    answer: "eight",
  },
  {
    question:
      "An allergic reaction to penicillin can cause which type of shock?",
    options: ["hypovolemic", "neurogenic", "cardiogenic", "anaphylactic"],
    answer: "anaphylactic",
  },
  {
    question: "What causes varicose veins?",
    options: [
      "The cause of varicose veins is unknown",
      "The presence of chronic venous stasis leg ulcers",
      "The presence of chronic, untreated hypertension",
      "The pooling of blood within the veins due to decreased, stagnated blood flow",
    ],
    answer:
      "The pooling of blood within the veins due to decreased, stagnated blood flow",
  },
  {
    question: "Identify the causes of arterial hypertension.",
    options: [
      "older age, sedentary lifestyle, overweight, excessive dietary salt intake, family history",
      "ventricular septal defect, patent ductus arteriosus, unknown in many cases",
      "genetic, lifestyle, obesity and diabetes, diet high in saturated fat",
      "trauma, allergic reaction and drug, hemorrhage",
    ],
    answer:
      "older age, sedentary lifestyle, overweight, excessive dietary salt intake, family history",
  },
  {
    question:
      "Which action initiates the switch from placental to pulmonary oxygenation of blood?",
    options: [
      "the baby takes its first breath and the lungs expand",
      "the baby's passage through the birth canal and the change in atmospheric pressure",
      "the semilunar pulmonary valve closes",
      "the pulmonary veins close",
    ],
    answer: "the baby takes its first breath and the lungs expand",
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
    question: "Which are the signs and symptoms of varicose veins?",
    options: [
      "feet warm to the touch, bounding pulses in the lower extremities",
      "swollen, twisted, and painful veins in the lower legs",
      "blood clots, numbness, and tingling of the lower legs",
      "feet cool to the touch, faint pulses in the lower extremities",
    ],
    answer: "swollen, twisted, and painful veins in the lower legs",
  },
  {
    question: "Which etiologies are associated with shock?",
    options: [
      "genetic and mutation disorders",
      "minor burns and bleeding",
      "chills and fever",
      "damage to the nervous system and trauma",
    ],
    answer: "damage to the nervous system and trauma",
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
    question: "Identify the key manifestation of arterial hypertension.",
    options: [
      "elevated blood pressure",
      "bradycardia",
      "asymptomatic",
      "tachycardia",
    ],
    answer: "elevated blood pressure",
  },
  {
    question: "What is the key feature of varicose veins?",
    options: [
      "shrinking of the veins",
      "increased 'milking action' of the leg muscles",
      "increased blood flow",
      "incompetent valves",
    ],
    answer: "incompetent valves",
  },
  {
    question:
      "What is the etiology common to transposition of the great vessels, septal defects, patent ductus arteriosus, and coarctation of the aorta?",
    options: [
      "maternal smoking",
      "dilated vessels of the heart",
      "unknown",
      "maternal history of diabetes",
    ],
    answer: "unknown",
  },
  {
    question: "What is the most common cause of arteriosclerosis?",
    options: [
      "atherosclerosis",
      "smoking",
      "deep vein thrombosis (DVT)",
      "hypertension",
    ],
    answer: "atherosclerosis",
  },
  {
    question:
      "In teaching a patient about the development of venous thrombosis, which statement would be correct?",
    options: [
      "Excessive walking should be avoided, as it increases the risk of venous thrombosis formation.",
      "Being 75 years old puts one at increased risk of developing venous thrombosis.",
      "Most individuals will have pain in the calf if a venous thrombosis develops in this area.",
      "Try to avoid too much fiber as it is known to increase the risk of venous thrombosis.",
    ],
    answer:
      "Being 75 years old puts one at increased risk of developing venous thrombosis.",
  },
  {
    question: "How may septal defects be diagnosed?",
    options: [
      "by palpating the peripheral pulse",
      "by coronary arteriography",
      "by examination of the blood pressure",
      "by auscultation of a heart murmur",
    ],
    answer: "by auscultation of a heart murmur",
  },
  {
    question:
      "Which action can help reduce the risk of atherosclerosis and cardiovascular disease?",
    options: [
      "smoking light cigarettes",
      "decreasing physical activity",
      "treating hypertension",
      "increasing intake of low density lipoproteins",
    ],
    answer: "treating hypertension",
  },
  {
    question:
      "During fetal circulation, the ductus arteriosus facilitates the bypass of blood to which anatomical structure?",
    options: ["liver", "kidneys", "lungs", "heart"],
    answer: "lungs",
  },
  {
    question:
      "Which manifestation is present with acute infectious endocarditis?",
    options: [
      "hypertension",
      "sub-normal temperature",
      "vegetations",
      "intense chest pain",
    ],
    answer: "vegetations",
  },
  {
    question:
      "Extreme, persistent hypertension may cause which manifestations?",
    options: [
      "chest pain and shortness of breath",
      "palpitations and weakness",
      "flu-like illness and fever",
      "headache and dizziness",
    ],
    answer: "headache and dizziness",
  },
  {
    question:
      "Blood lipid and cholesterol levels are non-modifiable by which risk factor?",
    options: ["diet", "behavior", "genetics", "exercise"],
    answer: "genetics",
  },
  {
    question: "What is a supraventricular arrhythmia?",
    options: [
      "an arrhythmia that is generated by the pulmonary arteries",
      "an arrhythmia that is generated in the ventricular conduction system and in the ventricle",
      "an arrhythmia generated by electrical abnormalities in the sinoatrial (SA) node, atria, atrioventricular (AV) node, and junctional tissue in the heart",
      "an arrhythmia that is generated by an overload of blood in the myocardium and coronary arteries",
    ],
    answer:
      "an arrhythmia generated by electrical abnormalities in the sinoatrial (SA) node, atria, atrioventricular (AV) node, and junctional tissue in the heart",
  },
  {
    question: "What is the effect of low-density lipoproteins on the arteries?",
    options: [
      "formation of a soft, sticky plaque",
      "increased blood flow",
      "cushioning of the walls",
      "narrowing of the arteries",
    ],
    answer: "narrowing of the arteries",
  },
  {
    question:
      "Which etiology can be contributed to both supraventricular and ventricular arrhythmias?",
    options: ["endocarditis", "tachycardia", "drug abuse", "unknown"],
    answer: "drug abuse",
  },
  {
    question:
      "Identify which blood pressure reading represents stage 1 hypertension?",
    options: ["128/82", "144/90", "138/88", "162/100"],
    answer: "144/90",
  },
  {
    question:
      "Identify the key sign/symptom of pulmonary arterial hypertension?",
    options: [
      "elevated blood pressure",
      "bradycardia",
      "asymptomatic",
      "tachycardia",
    ],
    answer: "asymptomatic",
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
  title: "Practice Test",
  description: "Practice Test",
  number: 4,
  type: "section",
  questions,
};
