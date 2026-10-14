import { Section } from "@/app/types";

const questions = [
  {
    question:
      "Global pandemics of the influenza virus occur approximately every ____________.",
    options: ["25-30 years", "2-5 years", "10-15 years", "1-3 years"],
    answer: "10-15 years",
  },
  {
    question:
      "Which patient has a greater risk of developing complications from the flu?",
    options: [
      "male, 60, with emphysema",
      "female, 72, with asthma and diabetes mellitus",
      "male, 40, with chronic bronchitis",
      "female, 4, in good health",
    ],
    answer: "female, 72, with asthma and diabetes mellitus",
  },
  {
    question:
      "Which structures in the respiratory tract are primarily affected by pneumonia?",
    options: ["bronchioles", "alveoli", "pleura", "bronchi"],
    answer: "alveoli",
  },
  {
    question:
      "Which of these statements about a person with a latent tuberculosis infection is NOT accurate?",
    options: [
      "The bacteria are present, but the person's immune system is able to keep them from growing.",
      "They are asymptomatic.",
      "They are immune from developing active TB.",
      "They cannot spread the infection to others.",
    ],
    answer: "They are immune from developing active TB.",
  },
  {
    question:
      "What is the main cause of chronic obstructive pulmonary disease (COPD)?",
    options: [
      "inhalation of dust particles",
      "smoking cigarettes",
      "inhalation of chemical fumes",
      "air pollution",
    ],
    answer: "smoking cigarettes",
  },
  {
    question:
      "All of the following are treatments for Asthma except ________________",
    options: [
      "avoiding triggers",
      "anti-inflammatory medications",
      "antibiotics",
      "bronchodilators",
    ],
    answer: "antibiotics",
  },
  {
    question:
      "Which of these is NOT a test that screens for cystic fibrosis (CF) in newborns?",
    options: [
      "a sweat test to check the sweat for a higher than normal salt content",
      "genetic testing to check for the presence of gene defects",
      "checking to see if there is a reaction to the Mantoux skin test",
      "a blood test to check for high levels of IRT, or immunoreactive trypsinogen",
    ],
    answer: "checking to see if there is a reaction to the Mantoux skin test",
  },
  {
    question:
      "A collapse of lung tissue affecting part or all of one lung is called ______________.",
    options: ["bronchiectasis", "atelectasis", "hypoxia", "pleurisy"],
    answer: "atelectasis",
  },
  {
    question:
      "Which of the following statements about pulmonary embolism (PE) is incorrect?",
    options: [
      "The most common treatment for PE is clot dissolvers.",
      "In most cases, PE is caused by a blood clot in the leg that breaks loose and travels to the lungs.",
      "A symptom of PE is tachypnea, or rapid breathing.",
      "Prolonged immobility is a risk factor for PE.",
    ],
    answer: "The most common treatment for PE is clot dissolvers.",
  },
  {
    question:
      "Lung cancer can be caused by exposure to all of the following except ______________",
    options: ["cigarette smoke", "asbestos", "radon", "Pneumocystis jirovecii"],
    answer: "Pneumocystis jirovecii",
  },
  {
    question:
      "The average incidence of the common cold is _____ colds per year in adulthood.",
    options: ["three to four", "four to five", "one to two", "two to three"],
    answer: "two to three",
  },
  {
    question:
      "On average _____ square feet of the respiratory membrane is lost each year after age 30.",
    options: ["2", "1", "3", "4"],
    answer: "1",
  },
  {
    question:
      "What does cyanosis, a blue color in the skin and nails, indicate?",
    options: [
      "low fever",
      "high oxygen levels",
      "high fever",
      "low oxygen levels",
    ],
    answer: "low oxygen levels",
  },
  {
    question:
      "A treatment for _____ may include inserting a needle or tube into the chest cavity.",
    options: [
      "cystic fibrosis",
      "chronic bronchitis",
      "atelectasis",
      "pneumothorax",
    ],
    answer: "pneumothorax",
  },
  {
    question:
      "_____ is a collapse of lung tissue affecting part or all of one lung.",
    options: ["Asthma", "Embolism", "Cystic fibrosis", "Atelectasis"],
    answer: "Atelectasis",
  },
  {
    question:
      "There are two basic types of medications used in _____ treatment: steroids and other anti-inflammatory medications and bronchodilators.",
    options: ["COPD", "asthma", "cystic fibrosis", "bronchitis"],
    answer: "asthma",
  },
  {
    question: "Cystic fibrosis is an _____ disease.",
    options: ["autoimmune", "infectious", "inherited", "idiopathic"],
    answer: "inherited",
  },
  {
    question: "In pneumonia, the percussion note is _____.",
    options: ["dull", "resonance", "tympany", "hyperresonance"],
    answer: "dull",
  },
  {
    question:
      "While vaccinations for TB are available, they are not used in the United States.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "A rapid strep test and/or throat culture would be used to diagnose _____.",
    options: ["bronchitis", "tonsillitis", "sinusitis", "laryngitis"],
    answer: "tonsillitis",
  },
  {
    question: "_____ accounts for 80% of lung cancers.",
    options: ["CF", "PE", "NSCLC", "COPD"],
    answer: "NSCLC",
  },
  {
    question: "A seasonal vaccination can be used to prevent _____.",
    options: ["allergic rhinitis", "pharyngitis", "emphysema", "pneumonia"],
    answer: "pneumonia",
  },
  {
    question:
      "The signs and symptoms of the flu come on gradually, but last for a long period of time.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "What is the medical term for hoarseness?",
    options: ["dyslexia", "dysphonia", "dyspepsia", "dysplasia"],
    answer: "dysphonia",
  },
  {
    question: "The most common treatment for _____ is anticoagulants.",
    options: ["COPD", "CF", "NSCLC", "PE"],
    answer: "PE",
  },
  {
    question: "Pulmonary function tests are used to measure the ____.",
    options: [
      "oxygen and carbon dioxide exchange",
      "size and location of an embolism",
      "air flow within the lungs",
      "amount of oxygen saturation",
    ],
    answer: "air flow within the lungs",
  },
  {
    question: "The most common cause of laryngitis is a _____ infection.",
    options: ["viral", "bacterial", "fungul", "parasitic"],
    answer: "viral",
  },
  {
    question: "The flu is more common in the fall months of the year.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "Allergic rhinitis is an inflammation of the mucous membrane of the _____.",
    options: ["nose", "throat", "lungs", "bronchi"],
    answer: "nose",
  },
  {
    question:
      "In allergic rhinitis, _____ binds to mast cells and induces them to release histamine.",
    options: ["IgA", "IgM", "IgE", "IgG"],
    answer: "IgE",
  },
  {
    question: "COPD is characterized by _____ that is not fully reversible.",
    options: [
      "interference with diffusion of gases at the respiratory membrane",
      "infectious agents, most often viral",
      "interference with air flow",
      "blocked or reduced blood flow through alveolar capillaries",
    ],
    answer: "interference with air flow",
  },
  {
    question:
      "With pneumonia, the _____ fill with pus and fluid, which makes breathing painful and limits oxygen intake.",
    options: ["larynx", "alveoli", "trachea", "pharnyx"],
    answer: "alveoli",
  },
  {
    question:
      "Emphysema may be inherited, involving a genetic deficiency of alpha-1-antitrypsin.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "One of the risk factors for a PE is prolonged immobility.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "People with CF have a higher than normal level of _____ in their sweat.",
    options: ["salt", "potassium", "magnesium", "water"],
    answer: "salt",
  },
  {
    question:
      "Cystic fibrosis affects the endocrine glands, causing secretion of excessive thick mucus.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "The main symptom of laryngitis is _____.",
    options: ["dysphonia", "dypnea", "tachypnea", "hemoptysis"],
    answer: "dysphonia",
  },
  {
    question:
      "Which of the following does NOT describe a common symptom of respiratory disease?",
    options: ["frequent nosebleeds", "chest pain", "fatigue", "wheezing"],
    answer: "frequent nosebleeds",
  },
  {
    question:
      "Not everyone who gets infected with Mycobacterium tuberculosis gets sick.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "COPD is associated with an abnormal inflammatory response of the lungs.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "The main cause of COPD is tobacco use.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "People with a latent TB infection are _____.",
    options: [
      "symptomatic and can spread the infection to others",
      "symptomatic but cannot spread the infection to others",
      "asymptomatic but can spread the infection to others",
      "asymptomatic and cannot spread the infection to others",
    ],
    answer: "asymptomatic and cannot spread the infection to others",
  },
  {
    question: "One of the symptoms of sinusitis is the loss of _____.",
    options: ["smell", "taste", "touch", "hearing"],
    answer: "smell",
  },
  {
    question: "Normal oxygen saturation rates are greater than _____.",
    options: ["60%", "90%", "80%", "70%"],
    answer: "90%",
  },
  {
    question:
      "In most cases, a(n) _____ test is repeated three times to get an accurate measurement.",
    options: [
      "spirometer",
      "bronchial challenge",
      "pulmonary function",
      "arterial blood gas",
    ],
    answer: "spirometer",
  },
  {
    question: "In TB, healed lesions, visible on x-ray, are called _____.",
    options: ["Mantoux", "caseous", "tubercles", "emphysema"],
    answer: "tubercles",
  },
  {
    question: "One of the risk factors for tonsillitis is _____.",
    options: ["being female", "old age", "being male", "young age"],
    answer: "young age",
  },
  {
    question: "The most common cause of the common cold is the _____.",
    options: [
      "rhinovirus",
      "Streptococcus pneumoniae bacteria",
      "Staphylococcus aureus bacteria",
      "coronavirus",
    ],
    answer: "rhinovirus",
  },
  {
    question: "Tuberculosis is spread by _____.",
    options: [
      "contaminated food",
      "improper handwashing",
      "secondhand smoke",
      "air droplets",
    ],
    answer: "air droplets",
  },
  {
    question:
      "Pursed-lip breathing or exhaling through puckered lips is associated with _____.",
    options: ["atelectasis", "pleuritis", "emphysema", "COPD"],
    answer: "emphysema",
  },
  {
    question:
      "Tachypnea is a term that describes breathing that is abnormally __________.",
    options: ["labored", "rapid", "slow", "loud"],
    answer: "rapid",
  },
  {
    question: "_____ sounds sound like air being blown through a hollow tube.",
    options: ["Pharyngeal", "Bronchial", "Tracheal", "Laryngeal"],
    answer: "Bronchial",
  },
  {
    question:
      "Generally, two distinct diseases fall into the category of COPD: _____.",
    options: [
      "emphysema and chronic bronchitis",
      "pleuritis and cystic fibrosis",
      "asthma and tuberculosis",
      "atelectasis and pneumothorax",
    ],
    answer: "emphysema and chronic bronchitis",
  },
  {
    question:
      "In _____, the alveolar walls break down, adjacent alveoli fuse, and the lungs lose their elasticity.",
    options: ["COPD", "emphysema", "atelectasis", "pleuritis"],
    answer: "emphysema",
  },
  {
    question:
      "Although caused by a virus, a complication of the flu can include bacterial pneumonia.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Clubbing of the fingers or toes is an indicator of ___________ and __________.",
    options: [
      "poor oxygenation, circulatory problems",
      "poor oxygenation, a compromised immune system",
      "circulatory problems, malnutrition",
      "poor oxygenation, malnutrition",
    ],
    answer: "poor oxygenation, circulatory problems",
  },
  {
    question:
      "The fungus Pneumocystis jirovecii is a common cause of pneumonia in patients with AIDS.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Difficulty breathing is also known as ____________.",
    options: ["apnea", "asthma", "dyspnea", "hyperventilation"],
    answer: "dyspnea",
  },
  {
    question: "What does the term hemoptysis refer to?",
    options: [
      "coughing blood",
      "nonproductive cough",
      "abnormal breath sounds",
      "excessive sputum",
    ],
    answer: "coughing blood",
  },
  {
    question: "The etiology of asthma is idiopathic.",
    options: ["True", "False"],
    answer: "True",
  },
];

export const ch7PracticeQuestions: Section = {
  id: "bio160-7-practice",
  title: "Provided Practice Questions",
  description: "Provided Practice Questions",
  number: 5,
  type: "section",
  questions,
};
