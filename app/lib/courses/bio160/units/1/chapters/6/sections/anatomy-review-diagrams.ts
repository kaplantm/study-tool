import { Questions, Section } from "@/app/types";

const questions: Questions = [
  {
    id: "heart-anatomy-diagram",
    question: "Label the structures and major vessels of the human heart.",
    diagram: {
      imageUrl: "Screenshot 2026-10-01 at 2.23.35 AM.jpg",
      alt: "Diagram of the human heart showing internal chambers, valves, and major blood vessels.",
      targets: [
        {
          id: "t1",
          label: "Aorta",
          x: 51,
          y: 14,
        },
        {
          id: "t2",
          label: "Superior vena cava",
          x: 34,
          y: 25,
        },
        {
          id: "t3",
          label: "Right atrium",
          x: 28,
          y: 55,
        },
        {
          id: "t4",
          label: "Tricuspid valve",
          x: 38,
          y: 62,
        },
        {
          id: "t5",
          label: "Right ventricle",
          x: 48,
          y: 82,
        },
        {
          id: "t6",
          label: "Left atrium",
          x: 64,
          y: 45,
        },
        {
          id: "t7",
          label: "Bicuspid (mitral) valve",
          x: 58,
          y: 52,
        },
        {
          id: "t8",
          label: "Left ventricle",
          x: 68,
          y: 74,
        },
      ],
    },
    tags: ["anatomy", "cardiovascular", "heart"],
  },
];

export const ch6AnatomyReviewDiagramsSection: Section = {
  id: "bio160-6-anatomy-diagrams",
  title: "Anatomy Diagrams",
  description: "Anatomy review diagrams: Heart",
  number: 1,
  type: "section",
  questions,
};
