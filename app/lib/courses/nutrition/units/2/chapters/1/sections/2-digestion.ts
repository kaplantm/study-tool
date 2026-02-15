import { Section } from "@/app/types";

export const section2Digestion: Section = {
  id: "2-digestion",
  title: "Digestion",
  description:
    "Covers mechanical and chemical digestion and the roles of digestive organs and secretions.",
  number: 2,
  type: "section",
  questions: [
    {
      id: "1-2-1",
      question: "Chewing is an example of ___.",
      answer: "Mechanical digestion.",
      hint: null,
      tags: ["mechanical digestion", "chewing"],
    },
    {
      id: "1-2-2",
      question:
        "Which process makes food smaller, increasing surface area so it is easier to move through the digestive tract?",
      answer: "Mechanical digestion.",
      hint: null,
      tags: ["mechanical digestion", "surface area"],
    },
    {
      id: "1-2-3",
      question:
        "Which secretion is important for properly absorbing vitamin B12?",
      answer: "Intrinsic factor.",
      hint: null,
      tags: ["vitamin B12", "intrinsic factor", "stomach"],
    },
    {
      id: "1-2-4",
      question: "What is segmentation in digestion?",
      answer:
        "A mechanical process in the small intestine involving small contractions that mix food contents to facilitate absorption.",
      hint: null,
      tags: ["segmentation", "small intestine"],
    },
    {
      id: "1-2-5",
      question: "What is chemical digestion?",
      answer:
        "Digestive secretions break food into basic building blocks, such as proteins into amino acids and carbohydrates into simple sugars.",
      hint: null,
      tags: ["chemical digestion", "enzymes"],
    },
  ],
};
