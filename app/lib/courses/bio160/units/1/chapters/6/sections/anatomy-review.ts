import { Questions, Section } from "@/app/types";

const questions: Questions = [
  {
    id: "q1",
    question: "What are the three main components of the circulatory system?",
    answer: "The heart, blood vessels, and blood.",
    tags: ["circulatory-system"],
  },
  {
    id: "q2",
    question: "What is the primary function of arteries?",
    options: [
      "Carry blood toward the heart",
      "Carry blood away from the heart",
      "Exchange gases with tissues",
      "Produce blood cells",
    ],
    answer: "Carry blood away from the heart",
    tags: ["blood-vessels"],
  },
  {
    id: "q3",
    question: "Which heart chambers receive blood?",
    answer: "The atria.",
    tags: ["heart-structure"],
  },
  {
    id: "q4",
    question: "Which heart chambers pump blood out of the heart?",
    options: ["Atria", "Ventricles", "Septums", "Nodes"],
    answer: "Ventricles",
    tags: ["heart-structure"],
  },
  {
    id: "q5",
    question: "What is the myocardium?",
    answer: "The cardiac muscle layer of the heart.",
    tags: ["heart-structure"],
  },
  {
    id: "q6",
    question:
      "Which valve is located between the right atrium and right ventricle?",
    options: [
      "Mitral valve",
      "Aortic semilunar valve",
      "Tricuspid valve",
      "Pulmonary semilunar valve",
    ],
    answer: "Tricuspid valve",
    tags: ["heart-valves"],
  },
  {
    id: "q7",
    question: "What happens during diastole?",
    answer: "The heart chambers relax and fill with blood.",
    tags: ["cardiac-cycle"],
  },
  {
    id: "q8",
    question: "What happens during systole?",
    answer: "The heart chambers contract and pump blood.",
    tags: ["cardiac-cycle"],
  },
  {
    id: "q9",
    question: "What is the function of the SA node?",
    answer:
      "It acts as the heart’s natural pacemaker and starts the heartbeat.",
    tags: ["heart-conduction"],
  },
  {
    id: "q10",
    question: "Which nerve slows the heart rate during rest and sleep?",
    options: ["Vagus nerve", "Optic nerve", "Phrenic nerve", "Spinal nerve"],
    answer: "Vagus nerve",
    tags: ["heart-regulation"],
  },
  {
    id: "q11",
    question:
      "Which circulation carries blood from the right ventricle to the lungs?",
    options: [
      "Systemic circulation",
      "Pulmonary circulation",
      "Coronary circulation",
      "Cerebral circulation",
    ],
    answer: "Pulmonary circulation",
    tags: ["circulation"],
  },
  {
    id: "q12",
    question:
      "Which circulation delivers oxygenated blood from the left ventricle to the body?",
    answer: "Systemic circulation.",
    tags: ["circulation"],
  },
  {
    id: "q13",
    question: "What is exchanged between blood and tissues in the capillaries?",
    answer: "Oxygen, nutrients, carbon dioxide, and other wastes.",
    tags: ["capillaries"],
  },
  {
    id: "q14",
    question: "Match each structure with its description.",
    matches: [
      {
        left: "SA node",
        right: "Natural pacemaker of the heart",
      },
      {
        left: "Tricuspid valve",
        right: "Between the right atrium and right ventricle",
      },
      {
        left: "Mitral valve",
        right: "Between the left atrium and left ventricle",
      },
      {
        left: "Pericardium",
        right: "Membrane surrounding the heart",
      },
    ],
    tags: ["heart-structures"],
  },
  {
    id: "q15",
    question:
      "Place the blood vessels in order from largest arteries to larger veins.",
    matches: [
      {
        values: ["Arteries", "Carry blood away from the heart"],
      },
      {
        values: ["Arterioles", "Smallest arteries"],
      },
      {
        values: ["Capillaries", "Exchange materials with tissues"],
      },
      {
        values: ["Venules", "Smallest veins"],
      },
      {
        values: ["Veins", "Return blood to the heart"],
      },
    ],
    tags: ["blood-vessels"],
  },
  {
    id: "q16",
    question: "Where is the heart located?",
    answer: "In the center of the chest.",
    tags: ["heart-structure"],
  },
  {
    id: "q17",
    question: "What is the function of the endocardium?",
    answer: "It forms the smooth inner lining of the heart chambers.",
    tags: ["heart-structure"],
  },
  {
    id: "q18",
    question:
      "Which valve controls blood flow from the left ventricle into the aorta?",
    answer: "The aortic semilunar valve.",
    tags: ["heart-valves"],
  },
  {
    id: "q19",
    question:
      "Which valve controls blood flow from the right ventricle into the pulmonary artery?",
    answer: "The pulmonary semilunar valve.",
    tags: ["heart-valves"],
  },
  {
    id: "q20",
    question: "How long does one cardiac cycle take?",
    options: ["0.2 seconds", "0.5 seconds", "0.8 seconds", "2 seconds"],
    answer: "0.8 seconds",
    tags: ["cardiac-cycle"],
  },
  {
    id: "q21",
    question: "What is the role of the AV node?",
    answer:
      "It passes the electrical impulse from the atria to the ventricles.",
    tags: ["heart-conduction"],
  },
  {
    id: "q22",
    question: "Where do Purkinje fibers carry electrical impulses?",
    answer: "Throughout the walls of the ventricles.",
    tags: ["heart-conduction"],
  },
  {
    id: "q23",
    question: "Which hormones increase heart rate?",
    options: [
      "Insulin and glucagon",
      "Epinephrine and norepinephrine",
      "Estrogen and progesterone",
      "Thyroxine and melatonin",
    ],
    answer: "Epinephrine and norepinephrine",
    tags: ["heart-regulation"],
  },
  {
    id: "q24",
    question: "Which artery supplies blood to the heart muscle?",
    answer: "The coronary arteries.",
    tags: ["coronary-circulation"],
  },
  {
    id: "q25",
    question: "What does the left coronary artery branch into?",
    answer:
      "The anterior interventricular coronary artery and the circumflex artery.",
    tags: ["coronary-circulation"],
  },
  {
    id: "q26",
    question: "Where does systemic circulation begin?",
    options: [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle",
    ],
    answer: "Left ventricle",
    tags: ["circulation"],
  },
  {
    id: "q27",
    question: "Where does pulmonary circulation begin?",
    answer: "The right ventricle.",
    tags: ["circulation"],
  },
  {
    id: "q28",
    question: "Which chamber receives deoxygenated blood from the body?",
    options: [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle",
    ],
    answer: "Right atrium",
    tags: ["blood-flow"],
  },
  {
    id: "q29",
    question: "Which chamber receives oxygenated blood from the lungs?",
    answer: "The left atrium.",
    tags: ["blood-flow"],
  },
  {
    id: "q30",
    question: "What is the function of the septa?",
    answer: "They separate oxygenated blood from deoxygenated blood.",
    tags: ["heart-structure"],
  },
  {
    id: "q31",
    question:
      "Which vessels carry blood from the lower body to the right atrium?",
    options: [
      "Pulmonary veins",
      "Superior vena cava",
      "Inferior vena cava",
      "Coronary arteries",
    ],
    answer: "Inferior vena cava",
    tags: ["blood-vessels"],
  },
  {
    id: "q32",
    question:
      "Which vessel returns blood from the upper body to the right atrium?",
    answer: "The superior vena cava.",
    tags: ["blood-vessels"],
  },
  {
    id: "q33",
    question: "What are arterioles?",
    answer: "The smallest arteries that lead into capillaries.",
    tags: ["blood-vessels"],
  },
  {
    id: "q34",
    question: "What are venules?",
    answer: "The smallest veins that receive blood from capillaries.",
    tags: ["blood-vessels"],
  },
  {
    id: "q35",
    question: "Match each structure with its function.",
    matches: [
      {
        left: "Atria",
        right: "Receive blood",
      },
      {
        left: "Ventricles",
        right: "Pump blood out of the heart",
      },
      {
        left: "Capillaries",
        right: "Exchange substances with tissues",
      },
      {
        left: "Coronary arteries",
        right: "Supply the heart muscle",
      },
    ],
    tags: ["heart-structure", "blood-vessels"],
  },
  {
    id: "q36",
    question: "Match each vessel with the blood flow direction.",
    matches: [
      {
        left: "Aorta",
        right: "Left ventricle to the body",
      },
      {
        left: "Pulmonary artery",
        right: "Right ventricle to the lungs",
      },
      {
        left: "Pulmonary veins",
        right: "Lungs to the left atrium",
      },
      {
        left: "Venae cavae",
        right: "Body to the right atrium",
      },
    ],
    tags: ["blood-flow"],
  },
];

export const ch6AnatomyReviewSection: Section = {
  id: "bio160-2-1",
  title: "Anatomy Review",
  description: "Anatomy Review",
  number: 1,
  type: "section",
  questions,
};
