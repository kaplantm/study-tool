import { Chapter } from "@/app/types";

export const ch16_4: Chapter = {
  id: "4",
  title: "Eukaryotic Transcription Gene Regulation",
  description: "Eukaryotic Transcription Gene Regulation",
  number: 4,
  type: "chapter",
  sections: [],
  questions: [
    {
      question:
        "What is a major difference between prokaryotic and eukaryotic RNA polymerase initiation?",
      options: [
        "Eukaryotic RNA polymerase binds directly to the DNA without help.",
        "Eukaryotic RNA polymerase requires transcription factors to initiate.",
        "Prokaryotic RNA polymerase requires TFIID to function.",
        "Eukaryotic cells do not use RNA polymerase.",
      ],
      answer:
        "Eukaryotic RNA polymerase requires transcription factors to initiate.",
    },
    {
      question:
        "Which type of transcription factor binds to the core promoter region to assist RNA polymerase binding?",
      options: [
        "Specific transcription factors",
        "Enhancer proteins",
        "General (basal) transcription factors",
        "Repressor proteins",
      ],
      answer: "General (basal) transcription factors",
    },
    {
      question:
        "Where is the TATA box typically located in relation to the transcriptional start site?",
      options: [
        "100 to 200 bases upstream",
        "25 to 35 bases upstream",
        "Immediately downstream",
        "Thousands of nucleotides away",
      ],
      answer: "25 to 35 bases upstream",
    },
    {
      question: "Which protein complex initially binds to the TATA box?",
      options: ["TFIIB", "RNA polymerase II", "TFIID", "DNA bending protein"],
      answer: "TFIID",
    },
    {
      question: "What is the consensus sequence of the TATA box?",
      options: ["5’-CCAAT-3’", "5’-GGGCGG-3’", "5’-TATAAA-3’", "5’-GATAAA-3’"],
      answer: "5’-TATAAA-3’",
    },
    {
      question:
        "Why are elements like the CAAT box and GC box called 'cis-acting' elements?",
      options: [
        "Because they are on a different chromosome from the gene.",
        "Because they are located on the same chromosome next to the gene.",
        "Because they only interact with repressor proteins.",
        "Because they are located within the protein-coding sequence.",
      ],
      answer:
        "Because they are located on the same chromosome next to the gene.",
    },
    {
      question: "Which statement best describes the location of enhancers?",
      options: [
        "They must be within 10 nucleotides of the TATA box.",
        "They are always located downstream of the gene.",
        "They can be upstream, downstream, or thousands of nucleotides away.",
        "They are only found within the promoter-proximal elements.",
      ],
      answer:
        "They can be upstream, downstream, or thousands of nucleotides away.",
    },
    {
      question:
        "What allows an enhancer region that is distant from the promoter to interact with the transcription machinery?",
      options: [
        "The DNA breaks and rejoins.",
        "The RNA polymerase travels to the enhancer first.",
        "DNA bending proteins fold the DNA to bring the regions together.",
        "The enhancer moves closer to the promoter via active transport.",
      ],
      answer:
        "DNA bending proteins fold the DNA to bring the regions together.",
    },
    {
      question:
        "What is the function of transcriptional repressors in eukaryotic cells?",
      options: [
        "To increase the speed of RNA polymerase.",
        "To bind to promoters or enhancers and block transcription.",
        "To help recruit TFIID to the TATA box.",
        "To change the sequence of the DNA template.",
      ],
      answer: "To bind to promoters or enhancers and block transcription.",
    },
    {
      question:
        "How does the length of a promoter region generally affect gene control?",
      options: [
        "Longer promoters provide more space for proteins to bind, adding more control.",
        "Shorter promoters are more complex and harder to regulate.",
        "Promoter length has no effect on the level of gene expression.",
        "Longer promoters prevent RNA polymerase from reaching the gene.",
      ],
      answer:
        "Longer promoters provide more space for proteins to bind, adding more control.",
    },
  ],
};
