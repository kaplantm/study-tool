import { Section } from "@/app/types";

export const section6HealthGiTract: Section = {
  id: "2-6-health-gi-tract",
  title: "Health of the GI Tract",
  description:
    "Reviews gut microbiome health, prebiotics and probiotics, and common GI conditions.",
  number: 6,
  type: "section",
  questions: [
    {
      id: "2-1-6-1",
      question:
        "People with ___ cannot eat gluten because it damages their small intestines.",
      answer: "Celiac disease.",
      hint: null,
      tags: ["celiac disease", "gluten"],
    },
    {
      id: "2-1-6-2",
      question:
        "Which diet would be most successful at supporting a healthy gut microbiome?",
      answer: "A diet rich in fruits and vegetables with lots of fiber.",
      hint: null,
      tags: ["gut microbiome", "fiber"],
    },
    {
      id: "2-1-6-3",
      question:
        "Which substance is made of non-digestible food components (mostly fibers) that enhance growth of beneficial gut bacteria?",
      answer: "Prebiotics.",
      hint: null,
      tags: ["prebiotics", "microbiome"],
    },
    {
      id: "2-1-6-4",
      question: "What are probiotics?",
      answer:
        "Beneficial live bacteria found in fermented foods or supplements that support gut health.",
      hint: null,
      tags: ["probiotics", "gut health"],
    },
    {
      id: "2-1-6-5",
      question: "What are synbiotics?",
      answer:
        "Products that combine prebiotics and probiotics to support the gut microbiome.",
      hint: null,
      tags: ["synbiotics", "prebiotics", "probiotics"],
    },
    {
      id: "2-1-6-6",
      question: "List the basic steps of digestion in order.",
      answer:
        "Ingestion, swallowing, entrance to the stomach, movement to the small intestine, absorption, entering the large intestine, and excretion.",
      hint: null,
      tags: ["digestion", "process"],
    },
  ],
};
