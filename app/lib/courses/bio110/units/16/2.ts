import { Chapter } from "@/app/types";

export const ch16_2: Chapter = {
  id: "2",
  title: "Prokaryotic Gene Regulationn",
  description: "Prokaryotic Gene Regulation",
  number: 2,
  type: "chapter",
  sections: [],
  questions: [
    {
      question:
        "In prokaryotes, what are the blocks of genes called that are encoded together for a specific function?",
      options: ["Codons", "Operons", "Nucleoids", "Introns"],
      answer: "Operons",
    },
    {
      question:
        "Where do prokaryotic cells typically store their circular chromosome?",
      options: [
        "In the nucleus",
        "In the mitochondria",
        "Within the nucleoid region",
        "Attached to the ribosome",
      ],
      answer: "Within the nucleoid region",
    },
    {
      question:
        "Which regulatory molecule increases the transcription of a gene in response to an external stimulus?",
      options: ["Repressor", "Activator", "Inhibitor", "Terminator"],
      answer: "Activator",
    },
    {
      question:
        "In the trp operon, what happens when tryptophan is plentiful in the environment?",
      options: [
        "The operon is switched on to make more",
        "The operon is switched off",
        "RNA polymerase binds more tightly",
        "The cell dies",
      ],
      answer: "The operon is switched off",
    },
    {
      question:
        "What must bind to the trp repressor before it can bind to the operator?",
      options: ["Glucose", "Lactose", "Tryptophan", "cAMP"],
      answer: "Tryptophan",
    },
    {
      question: "Where does RNA polymerase bind to initiate transcription?",
      options: [
        "The operator",
        "The promoter",
        "The coding region",
        "The activator site",
      ],
      answer: "The promoter",
    },
    {
      question:
        "Which molecule accumulates in the cell as a signaling molecule when glucose levels drop?",
      options: [
        "Allolactose",
        "Tryptophan",
        "cyclic AMP (cAMP)",
        "Beta-galactosidase",
      ],
      answer: "cyclic AMP (cAMP)",
    },
    {
      question:
        "What is the function of the CAP protein when it binds to the promoter?",
      options: [
        "It blocks RNA polymerase",
        "It breaks down glucose",
        "It stabilizes the binding of RNA polymerase",
        "It synthesizes tryptophan",
      ],
      answer: "It stabilizes the binding of RNA polymerase",
    },
    {
      question:
        "For the lac operon to be fully activated, which two conditions must be met?",
      options: [
        "Glucose is high and lactose is high",
        "Glucose is absent and lactose is absent",
        "Glucose is high and lactose is absent",
        "Glucose is absent and lactose is present",
      ],
      answer: "Glucose is absent and lactose is present",
    },
    {
      question:
        "What specific molecule binds to the lac repressor to prevent it from binding to the operator?",
      options: ["Allolactose", "cAMP", "Glucose", "RNA polymerase"],
      answer: "Allolactose",
    },
  ],
};
