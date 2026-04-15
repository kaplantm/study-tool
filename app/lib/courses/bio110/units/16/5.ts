import { Chapter } from "@/app/types";

export const ch16_5: Chapter = {
  id: "5",
  title: "Eukaryotic Post-transcriptional Gene Regulation",
  description: "Eukaryotic Post-transcriptional Gene Regulation",
  number: 5,
  type: "chapter",
  sections: [],
  questions: [
    {
      question:
        "What is the term for the processing that takes place after an RNA molecule has been transcribed but before it is translated?",
      options: [
        "Pre-transcriptional regulation",
        "Post-transcriptional modification",
        "Epigenetic silencing",
        "Translational termination",
      ],
      answer: "Post-transcriptional modification",
    },
    {
      question:
        "Which regions of the RNA transcript are removed during the splicing process?",
      options: ["Exons", "Introns", "5' caps", "Poly-A tails"],
      answer: "Introns",
    },
    {
      question:
        "What complex is responsible for recognizing intron ends and joining exons together?",
      options: ["Ribosomes", "Polymerases", "Spliceosomes", "Dicers"],
      answer: "Spliceosomes",
    },
    {
      question:
        "What percentage of human genes are estimated to be expressed as multiple proteins through alternative splicing?",
      options: ["25 percent", "50 percent", "70 percent", "95 percent"],
      answer: "70 percent",
    },
    {
      question:
        "Which rule is always followed during alternative RNA splicing?",
      options: [
        "Introns are kept in the final sequence",
        "The original 5'-3' order of exons is conserved",
        "Exons can be rearranged in any random order",
        "The poly-A tail is removed",
      ],
      answer: "The original 5'-3' order of exons is conserved",
    },
    {
      question:
        "What molecule is typically used to create the 5' cap of an mRNA molecule?",
      options: [
        "Methylated guanosine triphosphate (GTP)",
        "Adenine nucleotide chain",
        "Deoxyribose nucleic acid",
        "Phenylalanine",
      ],
      answer: "Methylated guanosine triphosphate (GTP)",
    },
    {
      question:
        "What is the primary function of the 5' cap and the 3' poly-A tail?",
      options: [
        "To catalyze protein synthesis",
        "To prevent the RNA from degrading",
        "To remove introns from the strand",
        "To encode the start codon",
      ],
      answer: "To prevent the RNA from degrading",
    },
    {
      question:
        "What do you call the regions of mRNA that are not translated into protein but regulate localization and stability?",
      options: ["Introns", "Exons", "Untranslated regions (UTRs)", "Promoters"],
      answer: "Untranslated regions (UTRs)",
    },
    {
      question:
        "Which protein is responsible for chopping pre-miRNAs into mature microRNAs?",
      options: ["RISC", "Dicer", "Spliceosome", "Exonuclease"],
      answer: "Dicer",
    },
    {
      question: "What is the role of the RNA-induced silencing complex (RISC)?",
      options: [
        "To add a poly-A tail to the mRNA",
        "To transport mRNA from the nucleus to the cytoplasm",
        "To impede translation or lead to mRNA degradation",
        "To splice exons together in a specific order",
      ],
      answer: "To impede translation or lead to mRNA degradation",
    },
  ],
};
