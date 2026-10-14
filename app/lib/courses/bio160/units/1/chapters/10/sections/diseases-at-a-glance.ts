import { Section } from "@/app/types";

const questions = [
  {
    id: "q1",
    question: "What are the primary etiologies of Acute kidney injury?",
    options: [
      "Shock, tubular necrosis, toxins, and medicines",
      "Pyogenic bacteria",
      "Genetic factors and urinary stasis",
      "Idiopathic and smoking",
    ],
    answer: "Shock, tubular necrosis, toxins, and medicines",
    tags: ["Acute Diseases", "Acute kidney injury"],
  },
  {
    id: "q2",
    question:
      "Which disease is characterized by pyuria, chills, high fever, sudden back pain, and dysuria?",
    options: [
      "Acute kidney injury",
      "Pyelonephritis",
      "IgA nephropathy",
      "Hydronephrosis",
    ],
    answer: "Pyelonephritis",
    tags: ["Acute Diseases", "Pyelonephritis"],
  },
  {
    id: "q3",
    question: "What is the typical treatment for Urethritis and cystitis?",
    options: [
      "Dialysis and transplantation",
      "Antibiotics",
      "Lithotripsy",
      "None for mild cases",
    ],
    answer: "Antibiotics",
    tags: ["Acute Diseases", "Urethritis and cystitis"],
  },
  {
    id: "q4",
    question:
      "Which condition involves hematuria, hypertension, and joint pain, diagnosed via kidney biopsy among other tests?",
    options: [
      "Lupus nephritis",
      "IgA nephropathy",
      "Acute post-streptococcal glomerulonephritis",
      "Diabetic nephropathy",
    ],
    answer: "Lupus nephritis",
    tags: ["Acute Diseases", "Lupus nephritis"],
  },
  {
    id: "q5",
    question:
      "For IgA nephropathy, what is the standard treatment for mild cases?",
    options: [
      "Immediate surgery and dialysis",
      "None for mild cases; treat hypertension",
      "Aggressive heavy immunosuppression",
      "Lithotripsy",
    ],
    answer: "None for mild cases; treat hypertension",
    tags: ["Acute Diseases", "IgA nephropathy"],
  },
  {
    id: "q6",
    question:
      "Which condition is an inflammatory, autoimmune reaction occurring after a streptococcal infection?",
    options: [
      "Lupus nephritis",
      "IgA nephropathy",
      "Acute post-streptococcal glomerulonephritis",
      "Diabetic nephropathy",
    ],
    answer: "Acute post-streptococcal glomerulonephritis",
    tags: ["Acute Diseases", "Acute post-streptococcal glomerulonephritis"],
  },
  {
    id: "q7",
    question:
      "What diagnostic tools are typically used for Urinary calculi (kidney stones)?",
    options: [
      "Patient history, blood and urinalysis, CT, ultrasound",
      "Kidney biopsy only",
      "Renal arteriography and renin levels",
      "Cystoscopy and biopsy",
    ],
    answer: "Patient history, blood and urinalysis, CT, ultrasound",
    tags: ["Acute Diseases", "Urinary calculi"],
  },
  {
    id: "q8",
    question: "What is the etiology of Diabetic nephropathy?",
    options: [
      "Atherosclerosis of renal arteries",
      "Diabetes-associated hypertension and high blood glucose",
      "Renal obstruction or congenital defect",
      "Autoimmune inflammatory reaction",
    ],
    answer: "Diabetes-associated hypertension and high blood glucose",
    tags: ["Chronic Diseases", "Diabetic nephropathy"],
  },
  {
    id: "q9",
    question:
      "Which chronic disease lists endarterectomy, angioplasty, and renal artery bypass as treatments?",
    options: [
      "Nephrotic syndrome",
      "Chronic glomerulonephritis",
      "Hypertensive kidney disease",
      "Polycystic kidney",
    ],
    answer: "Hypertensive kidney disease",
    tags: ["Chronic Diseases", "Hypertensive kidney disease"],
  },
  {
    id: "q10",
    question:
      "What are the primary symptoms associated with Nephrotic syndrome?",
    options: [
      "Edema, anorexia, low blood pressure, high blood lipids",
      "Sudden oliguria or anuria, seizure, coma",
      "Pain, nausea, vomiting",
      "Headache, heart palpitations, tachycardia",
    ],
    answer: "Edema, anorexia, low blood pressure, high blood lipids",
    tags: ["Chronic Diseases", "Nephrotic syndrome"],
  },
  {
    id: "q11",
    question: "What treatments are listed for Chronic glomerulonephritis?",
    options: [
      "Treat hypertension, dialysis, transplantation",
      "Antibiotics only",
      "Lithotripsy and surgery",
      "Behavior and diet modification",
    ],
    answer: "Treat hypertension, dialysis, transplantation",
    tags: ["Chronic Diseases", "Chronic glomerulonephritis"],
  },
  {
    id: "q12",
    question: "What causes Hydronephrosis?",
    options: [
      "Renal obstruction or congenital defect",
      "Genetic factors",
      "Streptococcal infection",
      "Idiopathic and smoking",
    ],
    answer: "Renal obstruction or congenital defect",
    tags: ["Other Disorders", "Hydronephrosis"],
  },
  {
    id: "q13",
    question:
      "What diagnostic method is specifically listed for Urinary incontinence in the table?",
    options: ["Cystoscopy", "Renal arteriography", "Kidney biopsy", "CT scan"],
    answer: "Cystoscopy",
    tags: ["Other Disorders", "Urinary incontinence"],
  },
  {
    id: "q14",
    question:
      "What is the primary prevention or risk reduction method for Polycystic kidney?",
    options: [
      "Control diabetes",
      "Prevent dehydration",
      "None",
      "Do not smoke",
    ],
    answer: "None",
    tags: ["Congenital Disorders", "Polycystic kidney"],
  },
  {
    id: "q15",
    question:
      "What are the primary symptoms associated with Medullary sponge kidney?",
    options: [
      "Few; recurrent kidney stones, hematuria, pain",
      "Severe hypertension and coma",
      "Painless hematuria and weight loss",
      "Urinary frequency and burning",
    ],
    answer: "Few; recurrent kidney stones, hematuria, pain",
    tags: ["Congenital Disorders", "Medullary sponge kidney"],
  },
  {
    id: "q16",
    question:
      "How are congenital disorders of the urinary bladder, ureters, and urethra diagnosed?",
    options: [
      "Physical exam, ultrasound",
      "Kidney biopsy",
      "Renal arteriography",
      "Cystoscopy only",
    ],
    answer: "Physical exam, ultrasound",
    tags: [
      "Congenital Disorders",
      "Congenital disorders of urinary bladder, ureters, and urethra",
    ],
  },
  {
    id: "q17",
    question:
      "Which malignancy is associated with painless hematuria, elevated white blood count, and an elevated risk for smokers?",
    options: [
      "Wilms’ tumor",
      "Bladder cancer",
      "Renal cell carcinoma",
      "Nephrotic syndrome",
    ],
    answer: "Renal cell carcinoma",
    tags: ["Malignancies", "Renal cell carcinoma"],
  },
  {
    id: "q18",
    question: "In which group does Wilms’ tumor typically occur?",
    options: [
      "Elderly patients",
      "Smokers over 50",
      "In young children",
      "Pregnant women",
    ],
    answer: "In young children",
    tags: ["Malignancies", "Wilms’ tumor"],
  },
  {
    id: "q19",
    question: "What is listed as a prevention method for Bladder cancer?",
    options: [
      "Uncertain; do not smoke",
      "Prevent dehydration",
      "Control diabetes",
      "None",
    ],
    answer: "Uncertain; do not smoke",
    tags: ["Malignancies", "Bladder cancer"],
  },
  {
    id: "match_classification_1",
    question: "Match each condition to its correct classification category:",
    columnLabels: ["Condition / Disease", "Classification"],
    matches: [
      {
        left: "Acute kidney injury",
        right: "Acute Diseases",
      },
      {
        left: "Diabetic nephropathy",
        right: "Chronic Diseases",
      },
      {
        left: "Hydronephrosis",
        right: "Other Disorders",
      },
      {
        left: "Polycystic kidney",
        right: "Congenital Disorders",
      },
      {
        left: "Renal cell carcinoma",
        right: "Malignancies",
      },
    ],
    tags: ["Matching", "Classification"],
  },
  {
    id: "match_etiology_all",
    question: "Match each acute or chronic condition to its specific etiology:",
    columnLabels: ["Condition / Disease", "Etiology"],
    matches: [
      {
        left: "Acute kidney injury",
        right: "Shock, tubular necrosis, toxins, and medicines",
      },
      {
        left: "Urethritis and cystitis",
        right: "Usually bacterial infection",
      },
      {
        left: "Urinary calculi (kidney stones)",
        right: "Urinary stasis, genetic factors",
      },
      {
        left: "Hypertensive kidney disease",
        right: "Atherosclerosis of renal arteries",
      },
      {
        left: "Nephrotic syndrome",
        right: "Chronic glomerulonephritis, diabetes",
      },
      {
        left: "Chronic glomerulonephritis",
        right:
          "Glomerular inflammatory conditions, untreated acute kidney injuries, hemolytic uremic syndrome, lupus",
      },
    ],
    tags: ["Matching", "Etiology"],
  },
  {
    id: "match_symptoms_1",
    question: "Match each condition to its characteristic signs and symptoms:",
    columnLabels: ["Condition / Disease", "Signs and Symptoms"],
    matches: [
      {
        left: "Acute kidney injury",
        right: "Sudden oliguria or anuria, headache, drowsiness, seizure, coma",
      },
      {
        left: "Pyelonephritis",
        right:
          "Pyuria, chills, high fever, sudden back pain, dysuria, hematuria, eventual renal failure, uremia",
      },
      {
        left: "Urethritis and cystitis",
        right:
          "Urinary frequency, urgency, burning sensation during urination, blood in urine",
      },
      {
        left: "Lupus nephritis",
        right: "Hematuria, hypertension, joint pain",
      },
      {
        left: "IgA nephropathy",
        right: "Hematuria, edema",
      },
      {
        left: "Acute post-streptococcal glomerulonephritis",
        right:
          "Chills, fever, loss of appetite, weakness, edema, albuminuria, hematuria, casts",
      },
    ],
    tags: ["Matching", "Signs and Symptoms"],
  },
  {
    id: "match_symptoms_2",
    question: "Match each condition to its characteristic signs and symptoms:",
    columnLabels: ["Condition / Disease", "Signs and Symptoms"],
    matches: [
      {
        left: "Diabetic nephropathy",
        right: "Fatigue, headache, itching, frothy urine, hiccups, edema",
      },
      {
        left: "Hypertensive kidney disease",
        right:
          "Headache, heart palpitations, tachycardia, light-headedness, anxiety",
      },
      {
        left: "Urinary incontinence",
        right: "Urgency, dribbling urine, or complete lack of urine control",
      },
      {
        left: "Medullary sponge kidney",
        right: "Few; recurrent kidney stones, hematuria, pain",
      },
      {
        left: "Congenital disorders of urinary bladder, ureters, and urethra",
        right: "Various symptoms associated with malformed organs",
      },
      {
        left: "Bladder cancer",
        right: "Hematuria, dysuria, fatigue, anorexia",
      },
    ],
    tags: ["Matching", "Signs and Symptoms"],
  },
  {
    id: "match_diagnosis_all",
    question:
      "Match each condition to its primary diagnostic method or key test:",
    columnLabels: ["Condition / Disease", "Diagnosis"],
    matches: [
      {
        left: "Pyelonephritis",
        right: "Urinalysis, pus and blood in urine",
      },
      {
        left: "Urethritis and cystitis",
        right: "Microscopic exam of urine, patient history",
      },
      {
        left: "Hypertensive kidney disease",
        right:
          "Patient history, ultrasound, renal arteriography, renin levels in renal veins",
      },
      {
        left: "Urinary incontinence",
        right: "Patient history, cystoscopy",
      },
      {
        left: "Congenital disorders of urinary bladder, ureters, and urethra",
        right: "Physical exam, ultrasound",
      },
      {
        left: "Bladder cancer",
        right: "Cystoscopy, biopsy, CT",
      },
    ],
    tags: ["Matching", "Diagnosis"],
  },
  {
    id: "match_treatment_all",
    question: "Match each condition to its specific treatment plan:",
    columnLabels: ["Condition / Disease", "Treatment"],
    matches: [
      {
        left: "Acute kidney injury",
        right:
          "Restricted sodium and protein diet, restrict fluid intake, dialysis for hyperkalemia",
      },
      {
        left: "Lupus nephritis",
        right:
          "Anti-inflammatories, immune-suppressants, antihypertensives, reduced salt and fat diet",
      },
      {
        left: "Diabetic nephropathy",
        right: "Antihypertensives, dialysis",
      },
      {
        left: "Nephrotic syndrome",
        right: "Treat underlying disease, manage symptoms",
      },
      {
        left: "Urinary incontinence",
        right: "Behavior and diet modification, pelvic exercise, surgery",
      },
      {
        left: "Polycystic kidney",
        right: "Treat symptoms, transplantation",
      },
    ],
    tags: ["Matching", "Treatment"],
  },
  {
    id: "match_prevention_all",
    question:
      "Match each condition to its primary prevention or risk reduction method:",
    columnLabels: ["Condition / Disease", "Prevention"],
    matches: [
      {
        left: "Pyelonephritis",
        right: "Treat lower urinary tract infections and kidney stones",
      },
      {
        left: "Urethritis and cystitis",
        right: "Maintain regular urination habits, good hygiene",
      },
      {
        left: "Acute post-streptococcal glomerulonephritis",
        right: "Reduce risk by treating streptococcal infections",
      },
      {
        left: "Urinary calculi (kidney stones)",
        right: "Prevent dehydration",
      },
      {
        left: "Hypertensive kidney disease",
        right: "Low lipid and sodium diet, not smoking, exercise",
      },
      {
        left: "Chronic glomerulonephritis",
        right: "Treat acute kidney injuries, lupus",
      },
    ],
    tags: ["Matching", "Prevention"],
  },
];

export const ch10DiseaseAtAGlance: Section = {
  id: "bio160-10-diseases-at-a-glance",
  title: "Diseases At a Glance",
  description: "Diseases At a Glance",
  number: 2,
  type: "section",
  questions,
};
