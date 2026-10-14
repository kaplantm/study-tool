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
  {
    question:
      "Chyme passes from the stomach into the small intestine through the _____ sphincter.",
    options: ["pyloric", "duodenal", "peristalsis", "hiatal"],
    answer: "pyloric",
  },
  {
    question:
      "Diverticular disease is most prevalent in nations where fiber consumption is lowest.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      '_____ causes burning chest pains, "heartburn," which can resemble the pain of heart disease.',
    options: ["Hepatitis", "Stomatitis", "Esophagitis", "Pancreatitis"],
    answer: "Esophagitis",
  },
  {
    question: "GERD may be caused by an incompetent pyloric sphincter.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "Esophageal varices is caused by either a congenital defect in the diaphragm or by increased intra-abdominal pressure.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "Because of the chronic blood loss, anemia often accompanies ulcerative colitis.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "During regional enteritis flare-ups, the inflammation can also manifest as rheumatoid arthritis.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Diagnosis for esophageal varices requires an EGD.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Causes of _____ include heredity, poor dietary habits, inadequate fiber, overuse of laxatives, and lack of exercise.",
    options: ["proctoscope", "flatus", "prolapse", "hemorrhoids"],
    answer: "hemorrhoids",
  },
  {
    question: "The most serious danger in esophageal varices is _____.",
    options: ["bleeding", "dysphagia", "constipation", "diarrhea"],
    answer: "bleeding",
  },
  {
    question: "A(n) _____ occurs when the intestine twists upon itself.",
    options: [
      "adhesion",
      "hiatal or inquinal hernia",
      "intussusception",
      "volvulus",
    ],
    answer: "volvulus",
  },
  {
    question: "Ulcerative colitis occurs primarily in _____.",
    options: [
      "young adults, especially male",
      "elderly",
      "young adults, especially female",
      "children",
    ],
    answer: "young adults, especially female",
  },
  {
    question: "Hydrochloric acid aids protein digestion.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Diverticulitis is caused by intolerance to gluten, a protein component of wheat.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "Hemorrhoids are varicose veins in the lining of the intestine or colon.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "One of the most common forms of food poisoning is caused by the bacterium Helicobacter pylori.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "A(n) _____ occurs when the intestine pinches as it protrudes through muscle of the body wall.",
    options: [
      "adhesion",
      "intussusception",
      "hiatal or inquinal hernia",
      "volvulus",
    ],
    answer: "hiatal or inquinal hernia",
  },
  {
    question:
      "A(n) _____ occurs when there is linking of two surfaces by fibrous scars.",
    options: [
      "hiatal or inquinal hernia",
      "adhesion",
      "intussusception",
      "volvulus",
    ],
    answer: "adhesion",
  },
  {
    question:
      "The painful symptoms of _____ frequently occur at night when the body is horizontal and relaxed.",
    options: ["EGD", "CT", "MRI", "GERD"],
    answer: "GERD",
  },
  {
    question:
      "Intestinal obstructions in which there is a decrease in peristalsis are classed _____.",
    options: [
      "paralytic or organic",
      "functional or organic",
      "paralytic or functional",
      "functional, organic, and paralytic",
    ],
    answer: "paralytic or functional",
  },
  {
    question: "Jaundice is frequently associated with _____ disease.",
    options: ["intestinal", "liver", "stomach", "pancreatic"],
    answer: "liver",
  },
  {
    question: "The onset of celiac disease usually occurs in _____.",
    options: ["elderly", "adulthood", "puberty", "infancy"],
    answer: "infancy",
  },
  {
    question:
      "Antibiotic therapy, along with acid reducers, is required to reduce the rate of _____ relapse.",
    options: [
      "celiac disease",
      "volvulus",
      "peptic ulcers",
      "malabsorption syndrome",
    ],
    answer: "peptic ulcers",
  },
  {
    question: "Pernicious anemia generally accompanies cancer of the stomach.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Regional enteritis is an _____ disease of the intestine.",
    options: ["inflammatory", "autoimmune", "infectious", "opportunistic"],
    answer: "inflammatory",
  },
  {
    question:
      "The muscular contractions of peristalsis intensify the pain associated with gastric ulcers.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Varicose veins that develop in the esophagus are called esophageal varices.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Dysentery is an _____ disease with acute inflammation of the colon.",
    options: ["autoimmune", "opportunistic", "inflammatory", "infectious"],
    answer: "infectious",
  },
  {
    question:
      "Treatment for hemorrhoids includes adding fiber and water to the diet.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Hepatitis _____ was formerly called serum hepatitis.",
    options: ["D", "A", "B", "C"],
    answer: "B",
  },
  {
    question:
      "A(n) _____ occurs when a segment of the intestine telescopes into the part forward of it.",
    options: [
      "volvulus",
      "hiatal or inquinal hernia",
      "adhesion",
      "intussusception",
    ],
    answer: "intussusception",
  },
  {
    question:
      "_____ is diagnosed by the signs and symptoms as well as a biopsy of the small intestine.",
    options: [
      "Celiac disease",
      "Intussusception",
      "Malabsorption syndrome",
      "Diverticulitis",
    ],
    answer: "Celiac disease",
  },
  {
    question:
      'The appearance of a straight and rigid "pipestem colon" is characteristic of _____.',
    options: [
      "diverticulitis",
      "stomatitis",
      "hepatitis",
      "ulcerative colitis",
    ],
    answer: "ulcerative colitis",
  },
  {
    question:
      "Treatment for _____ involves elimination of gluten from the diet.",
    options: [
      "Celiac disease",
      "Intussusception",
      "Diverticulitis",
      "Malabsorption syndrome",
    ],
    answer: "Celiac disease",
  },
  {
    question: "Hepatitis _____ is the least serious form of hepatitis.",
    options: ["A", "D", "C", "B"],
    answer: "A",
  },
  {
    question:
      "_____ results when the contents of the small intestine are rushed through the large intestine.",
    options: ["Flatus", "Constipation", "Bile", "Diarrhea"],
    answer: "Diarrhea",
  },
  {
    question: "The pain associated with cholecystitis occurs _____.",
    options: [
      "in the lower right quadrant of the abdomen",
      "in the lower thoracic cavity",
      "under the right rib cage",
      "midline of the umbilicus",
    ],
    answer: "under the right rib cage",
  },
  {
    question:
      "Hepatitis C viral infections is the most common reason for kidney transplants.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "_____ is required for absorption of vitamin B12.",
    options: ["Intrinsic factor", "Bile", "Chyme", "Hydrochloric acid"],
    answer: "Intrinsic factor",
  },
  {
    question:
      "Hepatitis D virus is described as a defective virus because it cannot reproduce in a cell unless the cell is also infected with hepatitis _____.",
    options: ["C", "A", "B", "E"],
    answer: "B",
  },
  {
    question: "Diagnosis of a hiatal hernia is based on _____.",
    options: [
      "a chest x-ray or EGD",
      "a chest x-ray or MRI",
      "an abdominal x-ray or GERD",
      "an abdominal x-ray or CT",
    ],
    answer: "a chest x-ray or EGD",
  },
  {
    question: "A barium swallow would be used to diagnose _____.",
    options: ["diabetes", "hepatitis", "diverticulitis", "peptic ulcer"],
    answer: "peptic ulcer",
  },
  {
    question:
      "Blood may appear in the stool, where it gives the stool a dark, tarry appearance, referred to as melena.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "The typical symptoms of _____ include diarrhea with pus, blood, and mucus in the stool.",
    options: [
      "ulcerative colitis",
      "hepatitis",
      "stomatitis",
      "diverticulitis",
    ],
    answer: "ulcerative colitis",
  },
  {
    question:
      "_____ mainly affect alcoholics and those with cirrhosis of the liver.",
    options: [
      "Esophageal varices",
      "Intussusception",
      "Hemorrhoids",
      "Adhesions",
    ],
    answer: "Esophageal varices",
  },
  {
    question: "The fulminating form of hepatitis B is always fatal.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Irritable bowel syndrome is like chronic ulcerative colitis, in that there are lesions, tumors, and ulcerations.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "_____, inflammation of the lining of the abdominal cavity, usually results when digestive enzymes enter the cavity.",
    options: ["Pancreatitis", "Peritonitis", "Hepatitis", "Stomatitis"],
    answer: "Peritonitis",
  },
  {
    question: "_____ is secreted by the liver and stored in the gallbladder.",
    options: ["Chyme", "GERD", "Varices", "Bile"],
    answer: "Bile",
  },
  {
    question:
      "The symptoms of hepatitis B are similar to those of hepatitis A, but develop faster.",
    options: ["True", "False"],
    answer: "False",
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
