import { Section } from "@/app/types";

export const section2HerbalSupplements: Section = {
  id: "2-herbal-supplements",
  title: "Herbal Supplements",
  description:
    "Covers benefits, risks, and interactions of herbal supplements.",
  number: 2,
  type: "section",
  questions: [
    {
      id: "3-2-1",
      question:
        "A client has used an herb to treat gastric ulcers but now has high blood pressure. Which herb do you suspect?",
      answer: "Licorice root.",
      hint: null,
      tags: ["licorice root", "herbal supplements"],
    },
    {
      id: "3-2-2",
      question:
        "Which supplement is specifically recommended for women of childbearing age?",
      answer: "Folate.",
      hint: null,
      tags: ["folate", "supplements"],
    },
    {
      id: "3-2-3",
      question:
        "What is the main concern of taking Chinese herbs chuanwu and caowu?",
      answer: "High blood pressure.",
      hint: null,
      tags: ["chuanwu", "caowu", "risk"],
    },
    {
      id: "3-2-4",
      question: "What are herbal supplements?",
      answer:
        "Dietary supplements made from parts of plants such as leaves, roots, seeds, flowers, rhizomes, bark, or fruits.",
      hint: null,
      tags: ["herbal supplements", "definition"],
    },
    {
      id: "3-2-5",
      question: "What is a drug-nutrient interaction (DNI)?",
      answer:
        "When a drug changes the effect of a nutrient or a nutrient changes the effect of a drug.",
      hint: null,
      tags: ["DNI", "interactions"],
    },
  ],
};
