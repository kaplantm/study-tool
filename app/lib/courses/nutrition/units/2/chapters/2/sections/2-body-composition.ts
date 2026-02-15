import { Section } from "@/app/types";

export const section2BodyComposition: Section = {
  id: "2-2-body-composition",
  title: "Body Composition",
  description:
    "Covers BMI, anthropometric measures, and methods to assess body composition.",
  number: 2,
  type: "section",
  questions: [
    {
      id: "2-2-2-1",
      question:
        "You calculate a BMI as 19.49. What category does that put the person in?",
      answer: "Healthy weight.",
      hint: null,
      tags: ["BMI", "healthy weight"],
    },
    {
      id: "2-2-2-2",
      question:
        "Anthropometric measures typically consist of height, weight, skin fold thickness and: a) bone density b) oxygen intake c) blood tests d) waist circumference",
      answer: "Waist circumference.",
      hint: null,
      tags: ["anthropometric", "waist circumference"],
    },
    {
      id: "2-2-2-3",
      question:
        "Lean body mass (LBM) is analyzed by taking into account muscle mass, body water and: a) fat tissue b) bone mass c) height d) fat mass",
      answer: "Bone mass.",
      hint: null,
      tags: ["LBM", "bone mass"],
    },
    {
      id: "2-2-2-4",
      question: "What is the BMI equation?",
      answer: "BMI = kg/m^2.",
      hint: null,
      tags: ["BMI", "equation"],
    },
    {
      id: "2-2-2-5",
      question: "What are the components of lean body mass (LBM)?",
      answer: "Muscle mass, body water, and bone mass.",
      hint: null,
      tags: ["LBM", "body composition"],
    },
  ],
};
