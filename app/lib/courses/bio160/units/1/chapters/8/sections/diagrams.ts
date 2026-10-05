import { Questions, Section } from "@/app/types";

const questions: Questions = [
  {
    question:
      "Respiratory System Diagram — identify the structures of the airway, trachea, and alveoli.",
    diagram: {
      imageUrl: "/diagrams/bio160/respiratory-system.png",
      alt:
        "Diagram of the respiratory system showing the airway, a section of the trachea, and alveolar structure.",
      targets: [
        { id: "1", label: "Nasal cavity", x: 45.5, y: 2.2, width: 15, height: 4 },
        { id: "2", label: "Pharynx", x: 49.8, y: 7.3, width: 10, height: 4 },
        { id: "3", label: "Larynx", x: 51.8, y: 14.2, width: 9, height: 4 },
        { id: "4", label: "Trachea", x: 6, y: 28.5, width: 10, height: 4 },
        { id: "5", label: "Bronchus", x: 3.5, y: 33, width: 11, height: 4 },
        { id: "6", label: "Lung", x: 20.5, y: 69.5, width: 7, height: 4 },
        { id: "7", label: "Diaphragm", x: 27, y: 74, width: 12, height: 4 },
        { id: "8", label: "Smooth muscle tissue", x: 69, y: 13.2, width: 22, height: 4 },
        { id: "9", label: "Supporting cartilage", x: 82, y: 24.5, width: 15, height: 6 },
        { id: "10", label: "Air space (trachea)", x: 82, y: 33.7, width: 10, height: 4 },
        { id: "11", label: "Lamina propria (connective tissue)", x: 82, y: 38.5, width: 15, height: 6 },
        { id: "12", label: "Respiratory epithelium", x: 82, y: 46.5, width: 15, height: 6 },
        { id: "13", label: "Capillaries", x: 82, y: 69.5, width: 11, height: 4 },
        { id: "14", label: "Air space (alveolus)", x: 85, y: 79, width: 10, height: 4 },
        { id: "15", label: "Squamous epithelium", x: 85, y: 87, width: 14, height: 6 },
        { id: "16", label: "Alveoli", x: 37, y: 89.8, width: 10, height: 4 },
      ],
    },
  },
];

export const ch8DiagramsSection: Section = {
  id: "bio160-8-diagrams",
  title: "Diagrams",
  description: "Respiratory system diagrams",
  number: 2,
  type: "section",
  questions,
};
