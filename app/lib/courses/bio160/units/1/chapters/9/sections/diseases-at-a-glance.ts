import { Section } from "@/app/types";

const questions = [
  {
    id: "q1",
    question: "What is the primary etiology and treatment for Stomatitis?",
    options: [
      "Bacteria, viruses, fungi / Antibiotics, antivirals, or antifungals",
      "Tobacco and alcohol use / Surgery and radiation",
      "Acid reflux / Antacids and nonirritating diet",
      "H. pylori infection / Antibiotics",
    ],
    answer:
      "Bacteria, viruses, fungi / Antibiotics, antivirals, or antifungals",
    tags: ["Stomatitis", "Etiology", "Treatment"],
  },
  {
    id: "q2",
    question:
      "Which disease is characterized by burning chest pain (heartburn) caused by acid reflux due to an incompetent cardiac sphincter?",
    options: ["Gastritis", "Esophagitis", "Hiatal hernia", "Peptic ulcer"],
    answer: "Esophagitis",
    tags: ["Esophagitis", "Signs and Symptoms", "Etiology"],
  },
  {
    id: "q3",
    question:
      "Match each digestive disease with its characteristic sign or symptom.",
    matches: [
      {
        left: "Esophageal varices",
        right: "Dilated esophageal veins, hemorrhage",
      },
      {
        left: "Appendicitis",
        right: "Acute lower right quadrant abdominal pain, nausea, fever",
      },
      {
        left: "Diverticulitis",
        right: "Cramping and pain in lower abdomen",
      },
      {
        left: "Pancreatitis",
        right:
          "Acute, severe, sharp, radiating abdominal pain; risk of hemorrhage",
      },
    ],
    columnLabels: ["Disease", "Signs and Symptoms"],
    tags: ["Matching", "Signs and Symptoms"],
  },
  {
    id: "q4",
    question:
      "What is the primary diagnosis method for Cancer of the esophagus?",
    options: [
      "Stool analysis and history",
      "EGD endoscopy and esophageal washings",
      "Physical exam and immunodiagnostic tests",
      "Ultrasound, CT scan, and needle biopsy",
    ],
    answer: "EGD endoscopy and esophageal washings",
    tags: ["Cancer of the esophagus", "Diagnosis"],
  },
  {
    id: "q5",
    question:
      "Which form of viral hepatitis is a rare bloodborne or sexually transmitted co-infection with hepatitis B virus?",
    options: ["Hepatitis A", "Hepatitis B", "Hepatitis C", "Hepatitis D"],
    answer: "Hepatitis D",
    tags: ["Hepatitis D", "Etiology"],
  },
  {
    id: "q6",
    question:
      "Match each Hepatitis virus with its primary transmission mode / etiology.",
    matches: [
      {
        left: "Hepatitis A",
        right: "Food- or waterborne infection with hepatitis A virus",
      },
      {
        left: "Hepatitis B",
        right:
          "Bloodborne or sexually transmitted infection with hepatitis B virus",
      },
      {
        left: "Hepatitis C",
        right:
          "Bloodborne or sexually transmitted infection with hepatitis C virus",
      },
      {
        left: "Hepatitis E",
        right: "Waterborne infection with hepatitis E virus",
      },
    ],
    columnLabels: ["Hepatitis Type", "Etiology"],
    tags: ["Hepatitis", "Etiology", "Matching"],
  },
  {
    id: "q7",
    question:
      "What is the specific etiology and prevention method for Peptic ulcer?",
    options: [
      "Infection with H. pylori and erosion of mucosa / Reduce stress",
      "Idiopathic / Reduce intake of salt and cured meat",
      "Obstruction with fecal material / Maintain good bowel habits",
      "Alcohol-induced damage / Treat underlying alcoholism",
    ],
    answer: "Infection with H. pylori and erosion of mucosa / Reduce stress",
    tags: ["Peptic ulcer", "Etiology", "Prevention"],
  },
  {
    id: "q8",
    question:
      "Which condition results from degeneration of stomach mucosa leading to no HCl secretion and no intrinsic factor secretion?",
    options: [
      "Gastritis",
      "Chronic atrophic gastritis",
      "Gastroenteritis",
      "Spastic colon / Irritable bowel syndrome",
    ],
    answer: "Chronic atrophic gastritis",
    tags: ["Chronic atrophic gastritis", "Etiology"],
  },
  {
    id: "q9",
    question: "What is the standard treatment for Cholecystitis?",
    options: [
      "Cholecystectomy",
      "Liver transplant",
      "Antibiotics and diet management",
      "Colostomy",
    ],
    answer: "Cholecystectomy",
    tags: ["Cholecystitis", "Treatment"],
  },
  {
    id: "q10",
    question:
      "Match each intestinal or bowel disorder with its typical treatment or prevention strategy.",
    matches: [
      {
        left: "Regional enteritis (Crohn's disease)",
        right: "Corticosteroids, surgery",
      },
      {
        left: "Chronic ulcerative colitis",
        right: "Corticosteroids, stress reduction, diet management, colostomy",
      },
      {
        left: "Spastic colon / Irritable bowel syndrome",
        right:
          "Avoid caffeine, alcohol, spicy food, fat; increase fiber; reduce stress",
      },
      {
        left: "Dysentery",
        right: "Antibiotics if bacterial and amebicides if caused by protozoa",
      },
    ],
    columnLabels: ["Disease", "Treatment"],
    tags: ["Treatment", "Matching"],
  },
  {
    id: "q11",
    question: "What is the etiology of Cancer of the mouth?",
    options: [
      "Use of tobacco products, especially in conjunction with consuming alcohol",
      "Infection with H. pylori",
      "Alcohol-induced damage to liver",
      "Idiopathic; associated with salted, cured foods",
    ],
    answer:
      "Use of tobacco products, especially in conjunction with consuming alcohol",
    tags: ["Cancer of the mouth", "Etiology"],
  },
  {
    id: "q12",
    question: "Match each condition with its primary etiology.",
    matches: [
      {
        left: "Hiatal hernia",
        right: "Stomach protrudes through weakened diaphragm",
      },
      {
        left: "Gastritis",
        right: "Aspirin, coffee, tobacco, alcohol, infection",
      },
      {
        left: "Gastroenteritis",
        right: "Food- and waterborne infection by bacteria, viruses, protozoa",
      },
      {
        left: "Appendicitis",
        right:
          "Obstruction with fecal material leads to infection, inflammation, and necrosis",
      },
    ],
    columnLabels: ["Disease", "Etiology"],
    tags: ["Etiology", "Matching"],
  },
  {
    id: "q13",
    question:
      "What are the characteristic signs and symptoms of Chronic atrophic gastritis?",
    options: [
      "Gastritis, poor digestion and absorption of nutrients, weight loss",
      "Upper abdominal pain, hemorrhage, blood in stool",
      "Acute lower right quadrant abdominal pain, nausea, fever",
      "Burning chest pain (heartburn), especially after eating",
    ],
    answer:
      "Gastritis, poor digestion and absorption of nutrients, weight loss",
    tags: ["Chronic atrophic gastritis", "Signs and Symptoms"],
  },
  {
    id: "q14",
    question:
      "Which condition is characterized by a failure to absorb fats and fat-soluble vitamins, and failure to grow in children?",
    options: [
      "Malabsorption syndrome",
      "Cirrhosis",
      "Cholelithiasis",
      "Pancreatitis",
    ],
    answer: "Malabsorption syndrome",
    tags: ["Malabsorption syndrome", "Signs and Symptoms"],
  },
  {
    id: "q15",
    question:
      "What diagnostic tools are typically used for Cancer of the stomach?",
    options: [
      "EGD endoscopy, biopsy, gastric fluid analysis (low HCl), barium x-ray",
      "Physical exam, immunodiagnostic tests, and pathogen culture",
      "Stool analysis, endoscopy, and history",
      "Ultrasound, CT scan, needle biopsy",
    ],
    answer:
      "EGD endoscopy, biopsy, gastric fluid analysis (low HCl), barium x-ray",
    tags: ["Cancer of the stomach", "Diagnosis"],
  },
  {
    id: "q16",
    question:
      "Match each liver or pancreatic condition with its primary etiology or risk factor.",
    matches: [
      {
        left: "Cirrhosis",
        right: "Alcohol-induced damage to liver; hepatitis",
      },
      {
        left: "Cholelithiasis",
        right:
          "Related to obesity; higher incidence in pregnancy and among women",
      },
      {
        left: "Pancreatitis",
        right:
          "Idiopathic, commonly associated with excessive alcohol consumption or with gallstones",
      },
      {
        left: "Cancer of the pancreas",
        right:
          "Linked to cigarette smoking, alcohol abuse, chemical carcinogens, chronic pancreatitis, diabetes mellitus",
      },
    ],
    columnLabels: ["Disease", "Etiology"],
    tags: ["Etiology", "Matching"],
  },
  {
    id: "q17",
    question:
      "What is the prevention strategy for Cancer of the colon and rectum?",
    options: [
      "Regular screening to include endoscopy and biopsy if at risk",
      "Avoid tobacco products; use alcohol only in moderation",
      "Safe food and water handling",
      "Reduce intake of salt and cured meat",
    ],
    answer: "Regular screening to include endoscopy and biopsy if at risk",
    tags: ["Cancer of colon and rectum", "Prevention"],
  },
  {
    id: "q18",
    question:
      "Which condition involves diverticula of the colon becoming impacted with fecal material and infected or inflamed?",
    options: [
      "Diverticulitis",
      "Regional enteritis (Crohn’s disease)",
      "Chronic ulcerative colitis",
      "Spastic colon / Irritable bowel syndrome",
    ],
    answer: "Diverticulitis",
    tags: ["Diverticulitis", "Etiology"],
  },
  {
    id: "q19",
    question: "What is the primary treatment for Cancer of the liver?",
    options: [
      "Chemotherapy (prognosis poor)",
      "Cholecystectomy",
      "Liver transplant only",
      "Antibiotics and fluid replacement",
    ],
    answer: "Chemotherapy (prognosis poor)",
    tags: ["Cancer of the liver", "Treatment"],
  },
  {
    id: "q20",
    question:
      "Match each remaining GI cancer or disorder with its key management/treatment feature.",
    matches: [
      {
        left: "Cancer of the mouth",
        right: "Surgical excision of tumor, radiation",
      },
      {
        left: "Esophageal varices",
        right:
          "Vasopressin or other medicines to reduce bleeding; bypass of portal veins",
      },
      {
        left: "Cancer of the stomach",
        right: "Surgery, chemotherapy",
      },
      {
        left: "Hepatitis C",
        right: "Ribavirin, interferon, liver transplant",
      },
    ],
    columnLabels: ["Disease", "Treatment"],
    tags: ["Treatment", "Matching"],
  },
];

export const ch9DiseaseAtAGlance: Section = {
  id: "bio160-9-diseases-at-a-glance",
  title: "Diseases At a Glance",
  description: "Diseases At a Glance",
  number: 2,
  type: "section",
  questions,
};
