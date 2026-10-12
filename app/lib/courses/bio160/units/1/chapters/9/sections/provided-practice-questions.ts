import { Section } from "@/app/types";

const questions = [
  {
    id: "case-gerd-1",
    question:
      "A 45-year-old woman experiences frequent heartburn, difficulty swallowing, sharp pains below her sternum, and nighttime gastric reflux. What condition is the most likely cause of these symptoms?",
    options: [
      "Peptic ulcer disease",
      "Gastroesophageal reflux disease (GERD) with a potential hiatal hernia",
      "Cholelithiasis",
      "Crohn's disease",
    ],
    answer:
      "Gastroesophageal reflux disease (GERD) with a potential hiatal hernia",
    hint: "Involves a bad lower esophageal sphincter (LES) and acid reflux.",
    tags: ["case_study", "GERD"],
  },
  {
    id: "case-gerd-2",
    question:
      "What diagnostic procedures are typically used to evaluate chronic gastric reflux and difficulty swallowing?",
    options: [
      "Endoscopy / biopsy",
      "Stool occult blood test only",
      "Barium enema",
      "Colonoscopy",
    ],
    answer: "Endoscopy / biopsy",
    tags: ["case_study", "GERD", "diagnostics"],
  },
  {
    id: "case-gerd-3",
    question:
      "How are GERD and associated lower esophageal sphincter dysfunction primarily treated?",
    options: [
      "Antibiotics and high-fat diet",
      "Acid reducer + dietary changes (and surgical repair if a hiatal hernia is present)",
      "Laxatives and increased water intake",
      "Chemotherapy and radiation",
    ],
    answer:
      "Acid reducer + dietary changes (and surgical repair if a hiatal hernia is present)",
    tags: ["case_study", "GERD", "treatment"],
  },
  {
    id: "case-gallstones-1",
    question:
      "T.W. experiences sharp pain in his upper right abdomen after eating a high-fat meal and has grayish-white feces. What disease is the likely cause?",
    options: [
      "Cholelithiasis (gallstones)",
      "Gastritis",
      "Ulcerative colitis",
      "Cirrhosis",
    ],
    answer: "Cholelithiasis (gallstones)",
    tags: ["case_study", "gallstones"],
  },
  {
    id: "case-gallstones-2",
    question: "Why do grayish-white feces occur with a blocked bile duct?",
    options: [
      "Bile flow is blocked, leaving dietary fat undigested and unabsorbed, which appears in the feces.",
      "Excess red blood cell breakdown products stain the stool white.",
      "An infection of the large intestine prevents water absorption.",
      "Stomach acid destroys normal brown pigments.",
    ],
    answer:
      "Bile flow is blocked, leaving dietary fat undigested and unabsorbed, which appears in the feces.",
    tags: ["case_study", "gallstones", "physiology"],
  },
  {
    id: "case-cirrhosis-1",
    question: "In cirrhosis, why does jaundice occur?",
    options: [
      "Normal liver tissue is replaced by scar tissue, failing to process hemoglobin breakdown products which then build up in the blood and tint the skin and eyes yellow.",
      "Fatty deposits block the bile ducts inside the gallbladder.",
      "Clotting proteins fail to form, leading to internal bruising.",
      "Abdominal venous pressure increases sharply.",
    ],
    answer:
      "Normal liver tissue is replaced by scar tissue, failing to process hemoglobin breakdown products which then build up in the blood and tint the skin and eyes yellow.",
    tags: ["case_study", "cirrhosis", "jaundice"],
  },
  {
    id: "case-cirrhosis-2",
    question: "How does cirrhosis lead to esophageal varices?",
    options: [
      "Blood flow through the liver is restricted by scar tissue, increasing abdominal and esophageal venous pressure and distorting esophageal veins.",
      "The liver overproduces clotting proteins, causing vessel blockages.",
      "Undigested dietary fats erode the lower esophageal sphincter.",
      "Infection with Helicobacter pylori spreads from the stomach to the esophagus.",
    ],
    answer:
      "Blood flow through the liver is restricted by scar tissue, increasing abdominal and esophageal venous pressure and distorting esophageal veins.",
    tags: ["case_study", "cirrhosis", "esophageal_varices"],
  },
  {
    id: "mc-gastritis",
    question: "Which of the following is a sign of gastritis?",
    options: [
      "constipation",
      "inflammation of stomach mucosa",
      "achlorhydria",
      "diarrhea",
    ],
    answer: "inflammation of stomach mucosa",
    tags: ["multiple_choice", "gastritis"],
  },
  {
    id: "mc-colitis",
    question:
      "Recurrent bloody diarrhea may be a symptom of ____________________.",
    options: [
      "gastric ulcer",
      "ulcerative colitis",
      "hiatal hernia",
      "esophagitis",
    ],
    answer: "ulcerative colitis",
    tags: ["multiple_choice", "colitis"],
  },
  {
    id: "mc-celiac",
    question:
      "Which disease is characterized by the destruction of intestinal villi, leading to inability to absorb fats and other nutrients?",
    options: [
      "ulcerative colitis",
      "celiac disease",
      "Crohn’s disease",
      "peptic ulcer",
    ],
    answer: "celiac disease",
    tags: ["multiple_choice", "celiac_disease"],
  },
  {
    id: "mc-diverticulitis",
    question:
      "Small pouches of the large intestine become inflamed during which disease?",
    options: ["Crohn’s disease", "gastritis", "hemorrhoids", "diverticulitis"],
    answer: "diverticulitis",
    tags: ["multiple_choice", "diverticulitis"],
  },
  {
    id: "mc-pancreatic-cancer",
    question: "Which statement about pancreatic cancer is false?",
    options: [
      "It is characterized by abdominal pain, weakness, and weight loss.",
      "It has a higher incidence with age.",
      "Most cancers are diagnosed after the cancer has metastasized.",
      "The prognosis is good with an 85% cure rate.",
    ],
    answer: "The prognosis is good with an 85% cure rate.",
    tags: ["multiple_choice", "pancreatic_cancer"],
  },
  {
    id: "mc-cirrhosis-false",
    question: "Which statement about cirrhosis is false?",
    options: [
      "Irreversible degenerative changes occur in the liver.",
      "The normal liver tissue is replaced with fibrous scar tissue.",
      "It is most often caused by diabetes.",
      "It is associated with esophageal varices.",
    ],
    answer: "It is most often caused by diabetes.",
    tags: ["multiple_choice", "cirrhosis"],
  },
  {
    id: "mc-pancreatitis",
    question:
      "Acute pancreatitis is most closely associated with ____________________.",
    options: [
      "hepatitis C virus infection",
      "chronic alcoholism",
      "bile duct obstruction",
      "complication of cirrhosis",
    ],
    answer: "chronic alcoholism",
    tags: ["multiple_choice", "pancreatitis"],
  },
  {
    id: "mc-esophageal-varices",
    question: "Esophageal varices arise in which disease?",
    options: [
      "cirrhosis",
      "pancreatic cancer",
      "cholecystitis",
      "cholelithiasis",
    ],
    answer: "cirrhosis",
    tags: ["multiple_choice", "esophageal_varices"],
  },
  {
    id: "mc-oral-thrush",
    question: "Oral thrush is caused by ____________________.",
    options: [
      "Candida albicans",
      "herpes simplex virus type 1",
      "Treponema pallidum",
      "Streptococcus pyogenes virus type 1",
    ],
    answer: "Candida albicans",
    tags: ["multiple_choice", "oral_thrush"],
  },
  {
    id: "mc-cholecystitis",
    question:
      "Pain in the upper right quadrant, especially after eating, could be a sign of ____________________.",
    options: ["appendicitis", "pancreatitis", "cholecystitis", "colitis"],
    answer: "cholecystitis",
    tags: ["multiple_choice", "cholecystitis"],
  },
  {
    id: "tf-hemorrhoids",
    question: "Hemorrhoids are caused by infection with E. coli.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true_false", "hemorrhoids"],
  },
  {
    id: "tf-tobacco-alcohol",
    question:
      "Oral and esophageal cancers are linked to tobacco and alcohol use.",
    options: ["True", "False"],
    answer: "True",
    tags: ["true_false", "cancer"],
  },
  {
    id: "tf-water-diarrhea",
    question: "Drinking too much water causes diarrhea.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true_false", "diarrhea"],
  },
  {
    id: "tf-melena",
    question: "Dark stools are known as melena.",
    options: ["True", "False"],
    answer: "True",
    tags: ["true_false", "stools"],
  },
  {
    id: "tf-neurologic",
    question: "Neurologic disorders can accompany liver disease.",
    options: ["True", "False"],
    answer: "True",
    tags: ["true_false", "liver_disease"],
  },
  {
    id: "tf-hep-a",
    question: "Hepatitis A is acquired through blood products.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true_false", "hepatitis"],
  },
  {
    id: "tf-primary-liver",
    question: "Most cancer in the liver is primary liver cancer.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true_false", "liver_cancer"],
  },
  {
    id: "tf-gallstones-made",
    question:
      "Gallstones are made of undigested food particles too large to pass.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true_false", "gallstones"],
  },
  {
    id: "tf-hep-b-vaccine",
    question: "There is no vaccine for hepatitis B.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true_false", "hepatitis"],
  },
  {
    id: "tf-gastric-ulcers",
    question:
      "Gastric ulcers are caused by infection with Helicobacter pylori.",
    options: ["True", "False"],
    answer: "True",
    tags: ["true_false", "ulcers"],
  },
  {
    id: "fill-amebic-dysentery",
    question: "Entamoeba histolytica is the cause of _________ dysentery.",
    answer: "amebic",
    tags: ["fill_in_the_blank", "infections"],
  },
  {
    id: "fill-crohns",
    question:
      "Thickened intestinal walls, leading to obstruction and abdominal pain, are found in _________ disease.",
    answer: "crohn's",
    tags: ["fill_in_the_blank", "crohns_disease"],
  },
  {
    id: "fill-abdominal-hernia",
    question:
      "An abdominal hernia is protrusion of an organ through the _________ wall muscles.",
    answer: "abdominal",
    tags: ["fill_in_the_blank", "hernia"],
  },
  {
    id: "fill-endoscope",
    question:
      "An instrument called a(n) _________ is used to view the lining of the esophagus or other organs of the digestive tract.",
    answer: "endoscope",
    tags: ["fill_in_the_blank", "diagnostics"],
  },
  {
    id: "fill-hep-c",
    question: "Hepatitis type C is the major viral cause of _________.",
    answer: "cirrhosis",
    tags: ["fill_in_the_blank", "cirrhosis"],
  },
  {
    id: "fill-cholecystectomy",
    question: "_________ is used to treat gallstones.",
    answer: "Cholecystectomy",
    tags: ["fill_in_the_blank", "treatment"],
  },
  {
    id: "fill-biliary-cirrhosis",
    question:
      "Biliary cirrhosis arises if there is obstruction of the _________.",
    answer: "gallbladder",
    tags: ["fill_in_the_blank", "cirrhosis"],
  },
  {
    id: "fill-ascites",
    question: "Accumulation of fluid in the abdomen is called _________.",
    answer: "ascites",
    tags: ["fill_in_the_blank", "symptoms"],
  },
  {
    id: "fill-stomatitis",
    question: "_________ refers to inflammation of the mouth.",
    answer: "Stomatitis",
    tags: ["fill_in_the_blank", "inflammation"],
  },
  {
    id: "fill-large-intestine",
    question:
      "The primary function of the large intestine is to absorb _________.",
    answer: "water",
    tags: ["fill_in_the_blank", "physiology"],
  },
];

export const ch9Practice: Section = {
  id: "bio160-9-practice",
  title: "Provided Practice Questions",
  description: "Provided Practice Questions",
  number: 3,
  type: "section",
  questions,
};
