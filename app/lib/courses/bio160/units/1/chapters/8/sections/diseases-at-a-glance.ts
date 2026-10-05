import { Questions, Section } from "@/app/types";

const questions: Questions = [
  {
    id: "q1",
    question: "Match each upper-respiratory disease with its etiology.",
    matches: [
      { left: "Common cold", right: "Viral infection" },
      { left: "Allergic rhinitis", right: "Hypersensitivity to an allergen" },
      { left: "Sinusitis", right: "Viral infection" },
      { left: "Tonsillitis", right: "Bacterial or viral infection" },
      { left: "Pharyngitis", right: "Viral or bacterial infection" },
      {
        left: "Laryngitis",
        right: "Viral or bacterial infection or vocal overuse",
      },
    ],
    tags: ["upper-respiratory-diseases", "etiology"],
  },
  {
    id: "q2",
    question: "What are the symptoms and usual treatment for the common cold?",
    answer:
      "Sore throat, runny nose, sneezing, and cough; treatment is symptomatic and may include pain relievers, decongestants, antihistamines, and cough suppressants",
    tags: ["common-cold", "symptoms", "treatment"],
  },
  {
    id: "q3",
    question: "How is allergic rhinitis managed and prevented?",
    answer:
      "Management includes avoiding the allergen, nasal steroids, antihistamines, decongestants, and allergy shots; exposure to allergens should be avoided, although it is otherwise not preventable",
    tags: ["allergic-rhinitis", "treatment", "prevention"],
  },
  {
    id: "q4",
    question: "What are the presentation, diagnosis, and treatment of sinusitis?",
    answer:
      "Facial pain or pressure, nasal stuffiness, discharge, loss of smell, and cough; diagnosis uses history, physical examination, imaging, cultures, and allergy testing; treatment is symptomatic with saline spray, nasal corticosteroids, decongestants, and pain relievers",
    tags: ["sinusitis", "diagnosis", "treatment"],
  },
  {
    id: "q5",
    question: "How are tonsillitis, pharyngitis, and laryngitis distinguished and treated?",
    answer:
      "Tonsillitis causes severe sore throat, swollen tonsils, swallowing difficulty, and fever and is treated with antibiotics when bacterial or symptomatic care when viral; pharyngitis causes sore throat, fever, headache, swollen lymph nodes, and aches and is treated with salt-water gargles and anti-inflammatories when viral or antibiotics when bacterial; laryngitis causes hoarseness, swallowing difficulty, throat pain, and fever and is treated with voice rest and reducing irritant exposure",
    tags: ["tonsillitis", "pharyngitis", "laryngitis"],
  },
  {
    id: "q6",
    question: "What are the key features of influenza, and how can it be prevented?",
    answer:
      "Influenza causes fever, cough, body aches, headache, fatigue, and chest discomfort; treatment may include antiviral medications, acetaminophen, and cough suppressants; prevention includes influenza vaccination, handwashing, and avoiding close contact with sick people",
    tags: ["influenza", "prevention"],
  },
  {
    id: "q7",
    question: "What causes pneumonia, how is it diagnosed, and how can it be prevented?",
    answer:
      "It is caused by bacterial or viral infection and may cause cough with mucus or blood, fever, chills, dyspnea, and chest pain; diagnosis uses history, physical examination, and sputum culture; prevention includes influenza and pneumococcal vaccination, handwashing, and not smoking",
    tags: ["pneumonia", "diagnosis", "prevention"],
  },
  {
    id: "q8",
    question: "How do latent and active tuberculosis differ, and how is tuberculosis managed?",
    answer:
      "Latent tuberculosis is asymptomatic; active disease may cause chronic cough, chest pain, coughing blood, fatigue, and weight loss; diagnosis uses a TB skin or blood test, chest x-ray, and sputum smear, and treatment is with antibiotics",
    tags: ["tuberculosis", "diagnosis", "treatment"],
  },
  {
    id: "q9",
    question: "What is the primary cause, presentation, and prevention of COPD?",
    answer:
      "Tobacco use is the primary cause; symptoms include dyspnea, frequent coughing, wheezing, tachypnea, and chest tightness; diagnosis uses spirometry and may include chest x-ray or CT; treatment includes smoking cessation, inhaled steroids, oxygen, rehabilitation, and sometimes surgery; prevention is never smoking or quitting",
    tags: ["copd", "diagnosis", "prevention"],
  },
  {
    id: "q10",
    question: "How do chronic bronchitis and emphysema differ?",
    answer:
      "Chronic bronchitis is associated with smoking and industrial dust or fumes and causes a mucus-producing cough, wheezing, fatigue, and mild fever or chills; emphysema is associated with smoking or alpha-1-antitrypsin deficiency and causes dyspnea, coughing, cyanosis, edema, fatigue, and morning headache; both are evaluated with history, examination, imaging, and pulmonary-function testing and managed with smoking cessation and respiratory therapies",
    tags: ["chronic-bronchitis", "emphysema", "copd"],
  },
  {
    id: "q11",
    question: "What are the cause, symptoms, diagnosis, and treatment of asthma?",
    answer:
      "The cause is idiopathic; symptoms include shortness of breath, chest tightness, coughing, and wheezing; diagnosis uses symptoms, medical history, pulmonary-function tests, and sometimes chest x-ray; treatment includes steroids, anti-inflammatory drugs, and bronchodilators; it is not preventable",
    tags: ["asthma", "diagnosis", "treatment"],
  },
  {
    id: "q12",
    question: "What are the characteristic features of cystic fibrosis?",
    answer:
      "It is an autosomal recessive inherited disease that causes salty skin, dyspnea, wheezing, thick sputum, recurrent infections, and malnutrition; diagnosis uses newborn screening, genetic testing, and a sweat test; treatment includes chest physical therapy, nutritional therapy, and mucus-thinning medication; it is not preventable",
    tags: ["cystic-fibrosis", "diagnosis", "treatment"],
  },
  {
    id: "q13",
    question: "What causes pleurisy, and what are its characteristic symptoms and treatment?",
    answer:
      "It may result from infection, trauma, pulmonary embolism, or an unknown cause; it causes sharp chest pain that worsens with breathing or coughing and may cause dyspnea; treatment includes antibiotics and nonsteroidal anti-inflammatory drugs",
    tags: ["pleurisy", "symptoms", "treatment"],
  },
  {
    id: "q14",
    question: "What is a pneumothorax, and how is it treated?",
    answer:
      "A pneumothorax may result from chest injury, underlying lung disease, or ruptured blisters and causes sudden sharp pain on the affected side and dyspnea; diagnosis uses physical examination, arterial blood gas, and imaging; treatment ranges from monitoring to needle or chest-tube decompression and surgery",
    tags: ["pneumothorax", "diagnosis", "treatment"],
  },
  {
    id: "q15",
    question: "What causes atelectasis, and how is it treated?",
    answer:
      "It results from bronchial blockage or pressure on the lung and may cause no symptoms, dyspnea, chest pain, cyanosis, or cough; diagnosis uses history, physical examination, and chest x-ray; treatment includes aerosolized therapy, positioning, removing the obstruction, and breathing exercises",
    tags: ["atelectasis", "diagnosis", "treatment"],
  },
  {
    id: "q16",
    question: "What is the cause, presentation, and diagnosis of pulmonary embolism?",
    answer:
      "It is caused by a blood clot traveling from the leg to the lungs and may cause sudden dyspnea, tachypnea, chest pain, and bloody cough; diagnosis uses medical history, physical examination, and chest x-ray",
    tags: ["pulmonary-embolism", "etiology", "diagnosis"],
  },
  {
    id: "q17",
    question: "What are the major risk factor, symptoms, and evaluation of lung cancer in the provided material?",
    answer:
      "Smoking is the major listed risk factor; symptoms include coughing, chest pain, hemoptysis, and dyspnea; the provided material refers to the source document for diagnostic procedures, treatment options, and prevention methods",
    tags: ["lung-cancer", "etiology", "symptoms"],
  },
  {
    id: "q18",
    question: "Which respiratory diseases in this review are primarily infectious?",
    options: [
      "Common cold, sinusitis, tonsillitis, pharyngitis, laryngitis, influenza, pneumonia, and tuberculosis",
      "Asthma, cystic fibrosis, emphysema, and COPD",
      "Pleurisy, pneumothorax, atelectasis, and pulmonary embolism",
      "Allergic rhinitis and lung cancer",
    ],
    answer:
      "Common cold, sinusitis, tonsillitis, pharyngitis, laryngitis, influenza, pneumonia, and tuberculosis",
    tags: ["respiratory-diseases", "etiology"],
  },
  {
    id: "q19",
    question: "Which prevention measures recur across several respiratory diseases?",
    answer:
      "Handwashing and respiratory hygiene, vaccination when appropriate, avoiding close contact with infected people, avoiding smoking and secondhand smoke, and seeking early medical care for respiratory infections",
    tags: ["respiratory-diseases", "prevention"],
  },
];

export const ch8DiseasesAtAGlance: Section = {
  id: "bio160-8-diseases",
  title: "Ch8: Diseases At A Glance",
  description: "Ch8: Diseases At A Glance",
  number: 1,
  type: "section",
  questions,
};
