import { Section } from "@/app/types";

const questions = [
  {
    id: "qq1",
    question: "Which structure drains urine from the kidney?",
    options: ["kidney", "nephron", "urethra", "ureter"],
    answer: "ureter",
    hint: null,
    moreInfo: [
      "Each kidney has a ureter that connects it to the urinary bladder.",
    ],
  },
  {
    id: "qq2",
    question:
      "What do the kidneys produce that stimulates red blood cell production?",
    options: ["antidiuretic hormone", "urine", "erythropoietin", "renin"],
    answer: "erythropoietin",
    hint: null,
    moreInfo: [
      "Erythropoietin is crucial for the production of red blood cells.",
    ],
  },
  {
    id: "qq3",
    question: "What is a function of the nephron?",
    options: [
      "drain urine from the urinary bladder",
      "reabsorb acid and urea",
      "regulate salt and water reabsorption",
      "filter metabolic waste products",
    ],
    answer: "filter metabolic waste products",
    hint: null,
    moreInfo: ["Nephrons filter blood and remove waste products."],
  },
  {
    id: "qq4",
    question: "Which structure within the nephron leads to a collecting duct?",
    options: [
      "Loop of Henle",
      "proximal tubule",
      "afferent arteriole",
      "distal convoluted tubule",
    ],
    answer: "distal convoluted tubule",
    hint: null,
    moreInfo: [
      "The distal convoluted tubule is part of the nephron that leads to the collecting duct.",
    ],
  },
  {
    id: "qq5",
    question: "Into which structure within the kidney does urine accumulate?",
    options: ["glomerulus", "urethra", "bladder", "renal calyces"],
    answer: "renal calyces",
    hint: null,
    moreInfo: [
      "Renal calyces are where urine accumulates before it passes to the ureter.",
    ],
  },
  {
    id: "qq6",
    question: "How much urine should a healthy patient produce in four hours?",
    options: ["160 mL", "240 mL", "80 mL", "40 mL"],
    answer: "240 mL",
    hint: "The rate of urine production is roughly 1 mL per minute.",
    moreInfo: [
      "Healthy urine production is critical for proper kidney function.",
    ],
  },
  {
    id: "qq7",
    question:
      "Which substance is normally reabsorbed during the production of urine?",
    options: ["urea", "acid", "glucose", "renin"],
    answer: "glucose",
    hint: null,
    moreInfo: [
      "Glucose reabsorption is essential for maintaining blood glucose levels.",
    ],
  },
  {
    id: "qq8",
    question: "What is a cause of acute kidney injury?",
    options: ["cystitis", "diabetes mellitus", "shock", "seasonal influenza"],
    answer: "shock",
    hint: null,
    moreInfo: [
      "Shock can significantly reduce blood flow to the kidneys, leading to acute injury.",
    ],
  },
  {
    id: "qq9",
    question: "Which sign will a patient with acute kidney injury demonstrate?",
    options: ["oliguria", "dysuria", "blood in the urine", "joint pain"],
    answer: "oliguria",
    hint: null,
    moreInfo: ["Oliguria is a sign of reduced kidney function."],
  },
  {
    id: "qq10",
    question:
      "In the patient with acute kidney injury, which electrolyte should be monitored to prevent cardiac arrest?",
    options: ["potassium", "magnesium", "chloride", "sodium"],
    answer: "potassium",
    hint: null,
    moreInfo: ["High potassium levels can cause serious heart problems."],
  },
];

export const ch10Practice: Section = {
  id: "bio160-10-practice",
  title: "Provided Practice Questions",
  description: "Provided Practice Questions",
  number: 3,
  type: "section",
  questions,
};
