import { Section } from "@/app/types";

const questions = [
  {
    id: "q1",
    question:
      "Which organ and sphincter control the entry of acidic chyme into the small intestine?",
    options: [
      "Stomach / Cardiac sphincter",
      "Stomach / Pyloric sphincter",
      "Esophagus / Lower esophageal sphincter",
      "Large intestine / Ileocecal valve",
    ],
    answer: "Stomach / Pyloric sphincter",
  },
  {
    id: "q2",
    question:
      "Where does most chemical digestion occur in the digestive tract?",
    options: ["Stomach", "Duodenum", "Jejunum", "Cecum"],
    answer: "Duodenum",
  },
  {
    id: "q3",
    question:
      "Match each oral infection/pathogen with its defining characteristic.",
    matches: [
      {
        left: "Neisseria gonorrhoeae",
        right:
          "Causes painful ulcerations in the mouth and throat; treated with antibiotics",
      },
      {
        left: "Treponema pallidum",
        right: "Causes oral chancres and ulcerations; treated with antibiotics",
      },
      {
        left: "Herpes simplex Type 1",
        right:
          "Vesicles that rupture to form ulcers; spread by oral contact; symptoms last ~2 weeks",
      },
      {
        left: "Candida albicans",
        right: "Produces painless white patches resembling cheese curds",
      },
    ],
    columnLabels: ["Pathogen / Condition", "Characteristic"],
  },
  {
    id: "q4",
    question:
      "Which esophageal condition involves varicose, enlarged, and twisted veins in the esophagus with a main risk of severe hemorrhage?",
    options: ["GERD", "Esophageal varices", "Hiatal hernia", "Esophagitis"],
    answer: "Esophageal varices",
  },
  {
    id: "q5",
    question: "What is chronic atrophic gastritis?",
    options: [
      "Acute inflammation caused by aspirin or alcohol resulting in severe stomach bleeding",
      "Condition where stomach lining stops producing hydrochloric acid and intrinsic factor",
      "A sudden bacterial infection caused by H. pylori",
      "Protrusion of the stomach through the diaphragm",
    ],
    answer:
      "Condition where stomach lining stops producing hydrochloric acid and intrinsic factor",
  },
  {
    id: "q6",
    question:
      "Which stomach cancer diagnostic test uses a stomach tube to determine the absence of hydrochloric acid (achlorhydria)?",
    options: [
      "Gastric analysis",
      "Stool culture",
      "Barium fluoroscopy",
      "Liver biopsy",
    ],
    answer: "Gastric analysis",
  },
  {
    id: "q7",
    question:
      "Match the inflammatory bowel condition with its distinct features.",
    matches: [
      {
        left: "Appendicitis",
        right:
          "Pain shifts from middle abdomen to lower-right quadrant; elevated WBC count; risk of gangrene",
      },
      {
        left: "Regional enteritis (Crohn's)",
        right:
          "Thick/rigid walls, narrowed lumen, 3x more common in Ashkenazi Jews, affects upper colon / distal ileum",
      },
      {
        left: "Ulcerative colitis",
        right:
          "Bloody, mucus-filled diarrhea; primarily in young adult women; 'pipestem colon'",
      },
      {
        left: "Diverticulitis",
        right:
          "Infection/inflammation of pouches in intestinal wall; lower-left pain; linked to low-fiber diet",
      },
    ],
    columnLabels: ["Condition", "Key Features"],
  },
  {
    id: "q8",
    question:
      "What type of intestinal obstruction is caused by a decrease in peristalsis (e.g., from muscle spasms or peritonitis) rather than a physical barrier?",
    options: [
      "Organic obstruction",
      "Paralytic (functional) obstruction",
      "Volvulus",
      "Intussusception",
    ],
    answer: "Paralytic (functional) obstruction",
  },
  {
    id: "q9",
    question:
      "Match the stool appearance with the indicated underlying condition.",
    matches: [
      {
        left: "Bright-red blood",
        right:
          "Bleeding near rectum or colon (e.g., hemorrhoids or rectal cancer)",
      },
      {
        left: "Black, tarry stool (Melena)",
        right: "Bleeding from stomach or duodenum",
      },
      {
        left: "Pale, greasy, floating stool",
        right:
          "Excess fat in stool due to malabsorption or liver/gallbladder/pancreas disease",
      },
      {
        left: "Clay-colored stool",
        right: "Bile obstruction; bile is not secreted into the duodenum",
      },
    ],
    columnLabels: ["Stool Characteristic", "Indicated Condition"],
  },
  {
    id: "q10",
    question:
      "Which form of viral hepatitis is the leading cause of epidemics of infectious hepatitis worldwide and is transmitted via fecal-contaminated water?",
    options: ["Hepatitis A", "Hepatitis B", "Hepatitis C", "Hepatitis E"],
    answer: "Hepatitis E",
  },
  {
    id: "q11",
    question:
      "Which of the following is a symptom of end-stage cirrhosis caused by the liver's inability to deactivate estrogen?",
    options: [
      "Gynecomastia, red palms, and testicular atrophy",
      "Achlorhydria and melena",
      "Tremors known as asterixis",
      "Ascites and clay-colored stools",
    ],
    answer: "Gynecomastia, red palms, and testicular atrophy",
  },
  {
    id: "q12",
    question:
      "What triggers severe pain in a person suffering from cholecystitis?",
    options: [
      "High fiber intake",
      "Presence of fat in the duodenum stimulating gallbladder contraction",
      "Fasting or skipping meals",
      "Excessive water intake",
    ],
    answer:
      "Presence of fat in the duodenum stimulating gallbladder contraction",
  },
  {
    id: "q13",
    question:
      "Why does severe acute pancreatitis frequently result in tissue self-digestion?",
    options: [
      "Excessive hydrochloric acid leaks into the abdominal cavity",
      "Pancreatic enzymes become prematurely activated within the pancreas",
      "The gallbladder secretes excess bile directly into the pancreatic duct",
      "The liver fails to filter toxins such as ammonia",
    ],
    answer:
      "Pancreatic enzymes become prematurely activated within the pancreas",
  },
  {
    id: "q14",
    question:
      "Match the age group with its distinct gastrointestinal health concerns.",
    matches: [
      {
        left: "Children",
        right:
          "Vulnerable to rapid dehydration from diarrhea; Type 1 diabetes onset; cavities common",
      },
      {
        left: "Young Adults",
        right:
          "Appendicitis (puberty to 25); Ulcerative colitis (15–20); Crohn's disease (20–40)",
      },
      {
        left: "Older Adults (60+)",
        right:
          "Increased gallstone risk (highest over 80), higher esophageal cancer risk, slower motility, reduced taste buds/saliva",
      },
    ],
    columnLabels: ["Age Group", "Gastrointestinal Concerns"],
  },
];

export const ch9Reading: Section = {
  id: "bio160-9-reading",
  title: "Reading",
  description: "Reading",
  number: 1,
  type: "section",
  questions,
};
