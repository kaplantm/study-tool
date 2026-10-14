import { Questions, Section } from "@/app/types";

const questions: Questions = [
  {
    question:
      "Which category of disease is caused by a disruption of the normal processes of converting food to energy on a cellular level?",
    options: ["Degenerative", "Congenital", "Traumatic", "Metabolic"],
    answer: "Metabolic",
  },
  {
    question: "What is the predicted course and outcome of a disease called?",
    options: ["Exacerbation", "Prognosis", "Diagnosis", "Relapse"],
    answer: "Prognosis",
  },
  {
    question:
      "Symptoms are evidence of disease, observed on physical examination.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "The Centers for Disease Control and Prevention acts as a coordinating authority on international public health.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "A relapse describes the return of a disease weeks or months after its apparent cure.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Signs and symptoms are measures of various physiological statistics in order to assess the most basic body functions, and vary with age, sex, weight, exercise tolerance, and physical condition.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "What category of disease best describes a condition in which the function or structure of the affected tissues or organs progressively deteriorates over time?",
    options: ["Metabolic", "Neoplastic", "Inflammatory", "Degenerative"],
    answer: "Degenerative",
  },
  {
    question:
      "More than 75% of U.S. healthcare dollars go to the treatment of _____ diseases instead of prevention.",
    options: ["Acute", "Chronic", "Exacerbation", "Sequela"],
    answer: "Chronic",
  },
  {
    question:
      "An example of a _____ is a person confined to bed with a serious fracture developing pneumonia due to inactivity.",
    options: ["Relapse", "Complication", "Sequela", "Remission"],
    answer: "Complication",
  },
  {
    question: "A disease that will end in death is called a _____ disease.",
    options: ["Terminal", "Palliative", "Exacerbation", "Chronic"],
    answer: "Terminal",
  },
  {
    question:
      "By eliminating known _____ for a disease, a person may reduce the chance of developing that disease.",
    options: ["Risk factors", "Etiology", "Categories", "Sequela"],
    answer: "Risk factors",
  },
  {
    question:
      "Examples of _____ diseases include heart disease, cancer, stroke, diabetes, and arthritis.",
    options: ["Chronic", "Acute", "Terminal", "Exacerbation"],
    answer: "Chronic",
  },
  {
    question:
      "A disease can be recognized through its characteristic signs and symptoms.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "What term describes how the cause of a disease leads to anatomical and physiological changes in the body that ultimately result in the disease?",
    options: ["Etiology", "Sequela", "Pathogenesis", "Idiopathic"],
    answer: "Pathogenesis",
  },
  {
    question:
      "An example of a _____ is rheumatic fever causing permanent damage to the heart.",
    options: ["Sequela", "Complication", "Relapse", "Remission"],
    answer: "Sequela",
  },
  {
    question:
      "Which statement regarding smoking cessation would a primary care provider most likely tell a patient?",
    options: [
      '"Within five years of quitting, an ex-smoker\'s risk for heart disease is about the same as that of a lifelong nonsmoker."',
      '"Within one day of quitting, an ex-smoker\'s risk for heart attack drops."',
      '"Within three months of quitting, an ex-smoker\'s lung function begins to improve."',
      '"Within one week of quitting, an ex-smoker\'s risk for heart disease is about the same as that of a lifelong nonsmoker."',
    ],
    answer:
      '"Within three months of quitting, an ex-smoker\'s lung function begins to improve."',
  },
  {
    question:
      "What type of disease is caused by an abnormality in an individual's genes or chromosomes?",
    options: ["Nutritional", "Metabolic", "Hereditary", "Congenital"],
    answer: "Hereditary",
  },
  {
    question: "What is the study of disease called?",
    options: ["Pathology", "Chemistry", "Anthropology", "Biology"],
    answer: "Pathology",
  },
  {
    question:
      "A complication is a related disease or other abnormal state that develops in a person already suffering from a disease.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Which modifiable risk factor has been proven to increase the chance of developing coronary artery disease?",
    options: ["Physical inactivity", "Family history", "Gender", "Race"],
    answer: "Physical inactivity",
  },
  {
    question:
      "What advice will a primary care provider most likely give to a client requesting information on fall prevention?",
    options: [
      '"Make sure to remain physically active to improve muscle strength and balance."',
      '"It is important to place rugs in high-traffic areas of your home to improve traction."',
      '"It is important to wear loose-fitted shoes to help prevent tripping."',
      '"Make sure to place your corrective lenses within walking distance of your bed at night."',
    ],
    answer:
      '"Make sure to remain physically active to improve muscle strength and balance."',
  },
  {
    question:
      "Treatment aims to _____ a disease or reduce the severity of its signs and symptoms.",
    options: ["Prevent", "Relapse", "Cure", "Exacerbate"],
    answer: "Cure",
  },
  {
    question:
      "What term refers to the percentage of a population affected with a particular disease at a given time?",
    options: ["Prevalence", "Morbidity", "Incidence", "Mortality"],
    answer: "Prevalence",
  },
  {
    question:
      "A disorder is an abnormal structure or function characterized by a group of signs and symptoms that usually occur together.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "What is the chief epidemiologic institution in the United States?",
    options: [
      "Centers for Disease Control and Prevention",
      "Department of Health and Human Services",
      "American Medical Association",
      "World Health Organization",
    ],
    answer: "Centers for Disease Control and Prevention",
  },
  {
    question:
      "Inflammatory, autoimmune, and allergic diseases are the result of abnormal immune function.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "What is the etiology of iron-deficiency anemia?",
    options: ["Trauma", "Neoplasm", "Infection", "Nutritional imbalance"],
    answer: "Nutritional imbalance",
  },
  {
    question: "What category of disease is sickle cell anemia?",
    options: ["Hereditary", "Degenerative", "Metabolic", "Infectious"],
    answer: "Hereditary",
  },
  {
    question: "What is an example of an autoimmune disease?",
    options: ["Cystic fibrosis", "Sickle cell anemia", "Lupus", "Hemophilia"],
    answer: "Lupus",
  },
  {
    question:
      "Risk factors increase a person's chance of developing a disease (equivalent to etiology).",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "What is the leading cause of death in the United States?",
    options: [
      "Cerebrovascular diseases (stroke)",
      "Malignant neoplasms (cancer)",
      "Diseases of the heart",
      "Diseases of the respiratory tract",
    ],
    answer: "Diseases of the heart",
  },
  {
    question:
      "A period of _____ occurs when signs and symptoms grow more severe.",
    options: ["Complication", "Remission", "Exacerbation", "Relapse"],
    answer: "Exacerbation",
  },
  {
    question:
      "Some diseases enter a period of _____ during which signs and symptoms subside or disappear.",
    options: ["Exacerbation", "Relapse", "Remission", "Sequela"],
    answer: "Remission",
  },
  {
    question: "What is the best definition of health?",
    options: [
      "The condition in which the human body is free from disease",
      "The condition of relative well-being without the presence of disorders or syndromes",
      "The condition in which the human body performs its vital functions normally",
      "The condition of relative stability of internal structures under changing external conditions",
    ],
    answer:
      "The condition in which the human body performs its vital functions normally",
  },
  {
    question:
      "What is the single most avoidable cause of disease, disability, and death in the United States?",
    options: ["Obesity", "Alcohol use", "High fat diet", "Tobacco use"],
    answer: "Tobacco use",
  },
  {
    question:
      "A remission may last days, months, or years, after which the disease can recur.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "The study of disease includes the study of its causes, mechanisms, signs and symptoms, treatments, and prevention.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "What term represents the number of cases of a disease in a population?",
    options: ["Morbidity", "Mortality", "Incidence", "Prevalence"],
    answer: "Morbidity",
  },
  {
    question:
      "The goal of _____ treatment is to provide comfort and relieve pain.",
    options: ["Preventable", "Modifiable", "Curative", "Palliative"],
    answer: "Palliative",
  },
  {
    question: "A chronic disease has a sudden onset and short duration.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "What is true regarding risk factors related to disease?",
    options: [
      "Risk factors guarantee a disease will develop.",
      "Risk factors are the etiology of disease.",
      "Risk factors increase a person's chance of developing a disease.",
      "Risk factors are always present with the development of disease.",
    ],
    answer: "Risk factors increase a person's chance of developing a disease.",
  },
  {
    question:
      "What term is used for the number of deaths that occur among people with a certain disease?",
    options: ["Morbidity", "Prevalence", "Incidence", "Mortality"],
    answer: "Mortality",
  },
  {
    question:
      "The prognosis may state the chances for complete recovery, predict the permanent loss of function, or give the probability of survival.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "What physical assessment technique produces sounds by tapping on specific areas of the body using fingers, hands, or a small instrument?",
    options: ["Palpation", "Auscultation", "Percussion", "Inspection"],
    answer: "Percussion",
  },
  {
    question:
      "Congenital diseases can be acquired through heredity or acquired during development in the uterus.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "An important aspect of any disease is its _____, or cause.",
    options: ["Sequela", "Etiology", "Idiopathic", "Pathogenesis"],
    answer: "Etiology",
  },
  {
    question:
      "A significant disturbance in the homeostasis of the body leads to disease.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "According to the United States Health and Human Services, what choice best demonstrates a component of a healthy plate?",
    options: [
      "Enriched white rice covering 25% of the plate",
      "Green leafy vegetables covering 50% of the plate",
      "Lean, fatty fish covering 50% of the plate",
      "Whole grain rice covering 10% of the plate",
    ],
    answer: "Green leafy vegetables covering 50% of the plate",
  },
];

export const ch1PracticeTest: Section = {
  id: "bio160-1-practice-test",
  title: "Ch1: Practice Quiz",
  description: "Ch1: Practice Quiz",
  number: 2,
  type: "section",
  questions,
};
