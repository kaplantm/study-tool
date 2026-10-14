import { Section } from "@/app/types";

const questions = [
  {
    question:
      "Which urinalysis indicator suggests very dilute urine, potentially pointing toward chronic kidney disease or diabetes?",
    options: [
      "High specific gravity",
      "Low specific gravity",
      "Presence of red blood cells",
      "High albumin levels",
    ],
    answer: "Low specific gravity",
    hint: "Specific gravity compares urine density to pure water.",
  },
  {
    question:
      "Match each type of Urinary Tract Infection (UTI) or its related symptom with its clinical definition.",
    matches: [
      {
        left: "Urethritis",
        right:
          "Inflammation of the urethra causing dysuria, itching, or discharge",
      },
      {
        left: "Cystitis",
        right:
          "Inflammation of the urinary bladder causing frequency, urgency, and lower back pressure",
      },
      {
        left: "Pyelonephritis",
        right:
          "Inflammation of the kidney caused by ascending pyogenic bacteria forming pus-filled abscesses",
      },
    ],
  },
  {
    question:
      "What is the primary mechanism or trigger of Acute Poststreptococcal Glomerulonephritis occurring 1–4 weeks after an infection?",
    options: [
      "Direct bacterial invasion and colonization of the loop of Henle",
      "Antigen-antibody immune complexes trapped within the glomeruli triggering inflammation",
      "Sudden obstruction of the ureters by calcium-based kidney stones",
      "Autoimmune destruction driven by mutated WT-1 genes",
    ],
    answer:
      "Antigen-antibody immune complexes trapped within the glomeruli triggering inflammation",
    hint: "It is classified as a Type III hypersensitivity reaction.",
  },
  {
    question: "Which of the following describes Nephrotic Syndrome features?",
    options: [
      "Proteinuria, hypoalbuminemia, hyperlipidemia, and edema",
      "High blood pressure, polyuria, low BUN, and hypercalcemia",
      "Anuria, high blood pH, and severe leukopenia",
      "Glycosuria, hypotension, and elevated kidney size without cysts",
    ],
    answer: "Proteinuria, hypoalbuminemia, hyperlipidemia, and edema",
    hint: "It results from major glomerular injury leading to massive protein loss.",
  },
  {
    question:
      "Match each renal malignancy or congenital condition with its key population or characteristic.",
    matches: [
      {
        left: "Wilms' Tumor",
        right:
          "Malignant kidney adenosarcoma in children ages 2–5 linked to WT-1 mutation",
      },
      {
        left: "Medullary Sponge Kidney",
        right:
          "Congenital disorder characterized by a sponge-like medulla appearance, leading to recurrent stones in adulthood",
      },
      {
        left: "Polycystic Kidney Disease",
        right:
          "Genetic condition causing fluid-filled cysts to enlarge kidneys significantly, with adult and child forms",
      },
      {
        left: "Renal Cell Carcinoma",
        right:
          "Rare cancer heavily linked to smoking, presenting with painless hematuria and abdominal mass",
      },
    ],
  },
  {
    question: "What distinguishes Hemodialysis from Peritoneal Dialysis?",
    options: [
      "Hemodialysis uses an external membrane filter machine, whereas peritoneal dialysis uses the patient's abdominal cavity lining.",
      "Hemodialysis is performed exclusively at home daily, while peritoneal dialysis requires a 6-hour clinic visit.",
      "Hemodialysis replaces the entire liver function, whereas peritoneal dialysis targets only the bladder.",
      "There is no functional difference; they use identical internal catheters.",
    ],
    answer:
      "Hemodialysis uses an external membrane filter machine, whereas peritoneal dialysis uses the patient's abdominal cavity lining.",
    hint: "Think about where the blood filtering process physically takes place.",
  },
];

export const ch10Reading: Section = {
  id: "bio160-10-reading",
  title: "Reading",
  description: "Reading",
  number: 1,
  type: "section",
  questions,
};
