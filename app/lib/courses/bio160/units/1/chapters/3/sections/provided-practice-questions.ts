import { Section } from "@/app/types";

const questions = [
  {
    question:
      "Cocci, bacilli, spirilla, and spirochetes are characteristics of what type of pathogen?",
    options: ["helminths", "bacteria", "virus", "fungus"],
    answer: "bacteria",
  },
  {
    question: "Antibiotics should only be used for ______ infections.",
    options: ["protozoa", "viral", "bacterial", "fungal"],
    answer: "bacterial",
  },
  {
    question:
      "When an epidemic has spread to include several areas worldwide, like HIV, this is called a/an _______________.",
    options: ["endemic", "epidemic", "outbreak", "pandemic"],
    answer: "pandemic",
  },
  {
    question: "What is the hallmark sign for mumps?",
    options: [
      "mild conjunctivitis",
      "headache",
      "pain in the parotid glands",
      "pain in the mouth",
    ],
    answer: "pain in the parotid glands",
  },
  {
    question:
      "Erin is a three-year-old who presents with fever, cough, runny nose, and fatigue followed by a rash that started at her head. Erin is most likely suffering from _____.",
    options: ["varicella", "rubella", "Bordetella pertussis", "measles"],
    answer: "measles",
  },
  {
    question: "Which vaccine can prevent the Bordetella pertussis infections?",
    options: [
      "diphtheria, tetanus, pertussis (DTap) vaccine",
      "varicella zoster vaccine",
      "Hib vaccine",
      "MMR vaccine",
    ],
    answer: "diphtheria, tetanus, pertussis (DTap) vaccine",
  },
  {
    question:
      "In 1990, administering the Hib vaccine dropped the incidence of the Hib infection by 99%.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "What is the principal route of transmission for nosocomial infections?",
    options: [
      "burns",
      "vertical transmission",
      "health care staff",
      "fecal-oral",
    ],
    answer: "health care staff",
  },
  {
    question: "German measles is also known as ____.",
    options: [
      "varicella zoster",
      "Streptococcus pneumonia",
      "rubella",
      "diphtheria",
    ],
    answer: "rubella",
  },
  {
    question: "One in three people in the world is infected with dormant TB.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Reservoirs include all the following examples except:",
    options: ["water", "fomites", "animals", "humans"],
    answer: "fomites",
  },
  {
    question:
      "What are infectious particles with a core of genetic material (either RNA or DNA) wrapped in a capsid?",
    options: ["fungus", "prions", "bacteria", "viruses"],
    answer: "viruses",
  },
  {
    question: "To cause disease microorganisms must enter a ________",
    options: ["fomites", "horizontal transmission", "reservoir", "host"],
    answer: "host",
  },
  {
    question:
      "What childhood infectious disease causes headache, loss of appetite, and mild conjunctivitis?",
    options: ["polio", "meningitis", "rubella", "chicken pox"],
    answer: "rubella",
  },
  {
    question: "Epidemiology is ____.",
    options: [
      "the study of origin, nature, and course of disease",
      "the study of the transmission, occurrence, distribution and control of disease",
      "the study of science of life or living matter in all its forms and phenomena",
      "the study of the heart and its functions in health and disease",
    ],
    answer:
      "the study of the transmission, occurrence, distribution and control of disease",
  },
  {
    question: "All of the following are notifiable infectious diseases except:",
    options: ["measles", "croup", "Legionnaire's disease", "tuberculosis"],
    answer: "croup",
  },
  {
    question:
      "When influenza occurs in unusually large numbers over a specific area, it is said to be a/an:",
    options: ["pandemic", "outbreak", "epidemic", "endemic"],
    answer: "epidemic",
  },
  {
    question: "What is direct transmission?",
    options: [
      "Occurs when a pathogen can withstand the environment outside its host for a long period of time before affecting another individual.",
      "Occurs when infectious diseases are transmitted from one generation to the next.",
      "Occurs when an individual is infected by contact with the reservoir.",
      "Occurs when food and beverages are contaminated then ingested.",
    ],
    answer:
      "Occurs when an individual is infected by contact with the reservoir.",
  },
  {
    question: "Lyme disease is transmitted by:",
    options: ["mosquitos", "deer ticks", "cows", "flies"],
    answer: "deer ticks",
  },
  {
    question:
      "At least one dose of measles vaccine can decrease morbidity and mortality rates in children.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Systemic treatment with antifungal drugs require careful dosing and monitoring for side effects.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Intravenous drug users can transmit infectious agents such as _______",
    options: ["cholera", "giardiasis", "hepatitis B", "Ophthalmia neonatorum"],
    answer: "hepatitis B",
  },
  {
    question:
      "Sally has been tested positive for an infectious disease and does not have any signs or symptoms. Sally is known to be a _______.",
    options: ["fomites", "reservoir", "host", "carrier"],
    answer: "carrier",
  },
  {
    question:
      "What infectious disease can be transmitted via parenteral route?",
    options: ["rotavirus", "influenza", "HIV", "measles"],
    answer: "HIV",
  },
  {
    question:
      "A four-year-old presents with fever, headache, neck stiffness, and acute flaccid paralysis of the right side. What does this child most likely have?",
    options: [
      "Corynebacterium diptheriae",
      "paralytic polio",
      "rubella",
      "Haemophilus influenzae",
    ],
    answer: "paralytic polio",
  },
  {
    question: "All the following are reemerging infectious diseases except:",
    options: ["cholera", "mumps", "valley fever", "coronavirus"],
    answer: "coronavirus",
  },
  {
    question: "Trichomonas vaginalis is an example of what type of pathogen?",
    options: ["helminths", "protozoa", "bacteria", "fungi"],
    answer: "protozoa",
  },
  {
    question:
      "What is the name of the microorganisms that help prevent overgrowth of harmful microorganisms and by producing vitamins in the human body?",
    options: ["sporozoan", "ciliates", "candidiasis", "normal flora"],
    answer: "normal flora",
  },
  {
    question: "A well-known prion disease-effecting cattle is commonly called?",
    options: [
      "ascaris",
      "flagellates",
      "Creutzfeldt-Jakob disease",
      "mad cow disease",
    ],
    answer: "mad cow disease",
  },
  {
    question: "What is a pathogen?",
    options: [
      "A pathogen is the study of the transmission, occurrence, distribution, and control of disease.",
      "A pathogen is any organism too small to be viewed by the unaided eye.",
      "A pathogen is a microorganism that can cause disease.",
      "A pathogen is hospital-acquired infections that are acquired in a healthcare facility.",
    ],
    answer: "A pathogen is a microorganism that can cause disease.",
  },
  {
    question:
      "What is the single most important method to prevent the spread of nosocomial infections?",
    options: ["mask", "hand-washing", "gloves", "protective eyewear"],
    answer: "hand-washing",
  },
  {
    question:
      "Vertical transmission can occur when a mother infects her newborn with what type of infectious disease?",
    options: ["HIV/AIDS", "measles", "influenza", "tuberculosis"],
    answer: "HIV/AIDS",
  },
  {
    question:
      "Protozoa are treated with drugs that interfere with protein synthesis and metabolism.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Antibiotic resistance is when bacteria _____.",
    options: [
      "are susceptible to antibiotics",
      "penetrate the cell wall and interfere with cell wall synthesis",
      "adapt to antibiotics making the antibiotics ineffective",
      "interfere with bacteria reproduction in the cell by acting as nucleic acid analogues",
    ],
    answer: "adapt to antibiotics making the antibiotics ineffective",
  },
  {
    question:
      "Every year 1.4 million children worldwide die from vaccine-preventable diseases before they reach age five.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Ringworm can be treated with what type of drug?",
    options: ["cephalosporins", "antibiotics", "antifungals", "antivirals"],
    answer: "antifungals",
  },
  {
    question: "Which is an example of antibiotic-resistant pathogens?",
    options: [
      "Klebsiella",
      "Group A Streptococcus",
      "E.Coli",
      "Vancomycin-resistant enterococci (VRE)",
    ],
    answer: "Vancomycin-resistant enterococci (VRE)",
  },
  {
    question: "What is a nosocomial infection?",
    options: [
      "the 100 trillion microorganisms that are commonly present in and on the human body",
      "a community acquired infection acquired from the community",
      "the separation of persons who maybe or may not be infected from healthy people",
      "a hospital-acquired infection obtained from a health care facility",
    ],
    answer:
      "a hospital-acquired infection obtained from a health care facility",
  },
  {
    question:
      "What type of helminths cause anemia and protein malnutrition and affects estimated 740 million people in developing countries of the tropics?",
    options: [
      "Entamoeba histolytica",
      "ascaris",
      "hookworms",
      "Enterobius vermicularis",
    ],
    answer: "hookworms",
  },
  {
    question:
      "Tuberculosis and measles are examples of what type of transmission?",
    options: [
      "parenteral transmission",
      "indirect transmission",
      "direct transmission",
      "vertical transmission",
    ],
    answer: "indirect transmission",
  },
  {
    question:
      "Epidemiologists track the ______ of disease (the number of new cases) and the number of existing cases of a disease which is known as ______.",
    options: [
      "prevalence; epidemic",
      "incidence; prevalence",
      "incidence; endemic",
      "endemic; epidemic",
    ],
    answer: "incidence; prevalence",
  },
  {
    question:
      "Hookworms, which are helminths, are susceptible to drugs that paralyze their muscles or interfere with their metabolism.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "What vaccine can be administered to prevent mumps?",
    options: ["MMR", "DTap", "Td", "Hib"],
    answer: "MMR",
  },
  {
    question: "What are emerging infectious diseases?",
    options: [
      "diseases whose incidence in humans has significantly increased in the past two decades",
      "diseases that reappear in the fall and winter seasons",
      "diseases that have reappeared after a significant decline in incidence",
      "diseases that have been eradicated and no longer a threat to society",
    ],
    answer:
      "diseases whose incidence in humans has significantly increased in the past two decades",
  },
  {
    question: "Which drug can be used to treat gram-positive bacteria?",
    options: ["fluconazole", "Tamiflu", "Flagyl", "penicillin"],
    answer: "penicillin",
  },
  {
    question: "What is the mode of transmission for mumps?",
    options: [
      "indirect transmission",
      "direct transmission",
      "fecal-oral transmission",
      "vertical transmission",
    ],
    answer: "direct transmission",
  },
  {
    question:
      "Candidiasis is an opportunistic infection caused by yeast (Candida albicans) and is considered what type of pathogen?",
    options: ["parasite", "bacteria", "hookworm", "fungi"],
    answer: "fungi",
  },
  {
    question:
      "Infectious diseases transmitted by human contact are said to be _______________.",
    options: [
      "outbreak",
      "notifiable",
      "pathogens",
      "contagious or communicable",
    ],
    answer: "contagious or communicable",
  },
];

export const ch3Practice: Section = {
  id: "bio160-3-practice",
  title: "Provided Practice Questions",
  description: "Provided Practice Questions",
  number: 3,
  type: "section",
  questions,
};
