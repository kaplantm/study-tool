import { Section } from "@/app/types";

export const section1AnatomyDigestiveTract: Section = {
  id: "1-anatomy-digestive-tract",
  title: "Anatomy of the Digestive Tract",
  description:
    "Introduces digestion, the digestive tract, and the movement of food through the GI system.",
  number: 1,
  type: "section",
  questions: [
    {
      id: "1-1-1",
      question:
        "Which of the following is a muscular contraction that helps push the bolus down the digestive tract?",
      answer: "Peristalsis.",
      hint: null,
      tags: ["peristalsis", "digestion", "GI"],
    },
    {
      id: "1-1-2",
      question: "Which organ in the digestive tract comes after the esophagus?",
      answer: "The stomach.",
      hint: null,
      tags: ["esophagus", "stomach", "digestive tract"],
    },
    {
      id: "1-1-3",
      question:
        "Explain what happens when one takes in more food energy than is used in activity.",
      answer: "Excess energy is stored as fat.",
      hint: null,
      tags: ["energy balance", "fat storage"],
    },
    {
      id: "1-1-4",
      question: "What is digestion?",
      answer:
        "Digestion is the breakdown of food into smaller components for absorption, using both physical and chemical processes.",
      hint: null,
      tags: ["digestion", "mechanical", "chemical"],
    },
    {
      id: "1-1-5",
      question: "Which organs are included in the digestive tract?",
      answer:
        "The mouth, pharynx (throat), esophagus, stomach, small intestine, large intestine, rectum, and anus.",
      hint: null,
      tags: ["digestive tract", "organs"],
    },
  ],
};
