import { Section } from "@/app/types";

export const section3PharmacologicalInterventions: Section = {
  id: "2-3-pharmacological-interventions",
  title: "Pharmacological Interventions for Weight Loss",
  description:
    "Reviews weight-loss medications, eligibility, and common drug types.",
  number: 3,
  type: "section",
  questions: [
    {
      id: "2-3-3-1",
      question:
        "Why might someone who is pregnant or planning to become pregnant want to avoid taking Qsymia?",
      answer: "It contains topiramate, which can cause birth defects.",
      hint: null,
      tags: ["Qsymia", "pregnancy"],
    },
    {
      id: "2-3-3-2",
      question: "What might one consider a benefit of Orlistat?",
      answer: "It is available over the counter.",
      hint: null,
      tags: ["orlistat", "OTC"],
    },
    {
      id: "2-3-3-3",
      question: "Which statement regarding weight loss drugs is true?",
      answer: "They are typically very expensive.",
      hint: null,
      tags: ["weight loss drugs", "cost"],
    },
    {
      id: "2-3-3-4",
      question:
        "Who typically qualifies for pharmacological intervention for weight loss?",
      answer:
        "People with BMI over 30, or BMI of 27 or higher with obesity-related health conditions.",
      hint: null,
      tags: ["BMI", "eligibility"],
    },
    {
      id: "2-3-3-5",
      question: "How does orlistat help with weight loss?",
      answer:
        "It inhibits pancreatic lipase, reducing absorption of dietary fat.",
      hint: null,
      tags: ["orlistat", "fat absorption"],
    },
  ],
};
