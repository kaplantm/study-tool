import { Chapter } from "@/app/types";
import { ch6AnatomyReviewSection } from "./sections/anatomy-review";
import { ch6AnatomyReviewDiagramsSection } from "./sections/anatomy-review-diagrams";
import { ch6DiagramsSection } from "./sections/digrams";

export const bio160Chapter6: Chapter = {
  id: "bio160-6",
  title: "Chapter 6: Diseases & Disorders: Cardiovascular System",
  description: "Week 3, Chapter 6: Diseases & Disorders: Cardiovascular System",
  number: 6,
  type: "chapter",
  sections: [
    ch6AnatomyReviewSection,
    ch6AnatomyReviewDiagramsSection,
    ch6DiagramsSection,
  ],
  questions: [
    {
      id: "ch6-01",
      question: "What are the main functions of the circulatory system?",
      answer:
        "It transports oxygen, nutrients, wastes, electrolytes, leukocytes, and hormones.",
      tags: ["circulatory system", "functions"],
    },
    {
      id: "ch6-02",
      question: "What are the three main components of the circulatory system?",
      options: [
        "Heart, blood vessels, and blood",
        "Lungs, kidneys, and blood",
        "Heart, lungs, and lymph nodes",
        "Arteries, veins, and capillaries",
      ],
      answer: "Heart, blood vessels, and blood",
      tags: ["circulatory system"],
    },
    {
      id: "ch6-03",
      question: "Match each blood vessel with its primary function.",
      matches: [
        {
          left: "Arteries",
          right: "Carry blood away from the heart",
        },
        {
          left: "Veins",
          right: "Return blood to the heart",
        },
        {
          left: "Capillaries",
          right: "Exchange gases, nutrients, and wastes with tissues",
        },
      ],
      tags: ["blood vessels"],
    },
    {
      id: "ch6-04",
      question:
        "How many chambers does the heart have, and what are they called?",
      answer:
        "Four chambers: right atrium, right ventricle, left atrium, and left ventricle.",
      tags: ["heart anatomy"],
    },
    {
      id: "ch6-05",
      question: "What is the function of the atria and ventricles?",
      answer:
        "The atria receive blood and pass it to the ventricles; the ventricles pump blood to the lungs and body.",
      tags: ["heart anatomy"],
    },
    {
      id: "ch6-06",
      question: "Match each heart structure with its description.",
      matches: [
        {
          left: "Myocardium",
          right: "Cardiac muscle layer",
        },
        {
          left: "Endocardium",
          right: "Smooth inner lining",
        },
        {
          left: "Pericardium",
          right: "Double-layered membrane surrounding the heart",
        },
        {
          left: "Septa",
          right: "Structures that separate oxygenated and deoxygenated blood",
        },
      ],
      tags: ["heart anatomy"],
    },
    {
      id: "ch6-07",
      question:
        "Which valve is located between the right atrium and right ventricle?",
      options: [
        "Mitral valve",
        "Tricuspid valve",
        "Aortic semilunar valve",
        "Pulmonary semilunar valve",
      ],
      answer: "Tricuspid valve",
      tags: ["heart valves"],
    },
    {
      id: "ch6-08",
      question:
        "Which valve is located between the left atrium and left ventricle?",
      options: [
        "Tricuspid valve",
        "Mitral valve",
        "Pulmonary semilunar valve",
        "Aortic semilunar valve",
      ],
      answer: "Mitral valve",
      tags: ["heart valves"],
    },
    {
      id: "ch6-09",
      question:
        "What is the function of the pulmonary and aortic semilunar valves?",
      answer:
        "The pulmonary semilunar valve controls flow from the right ventricle to the pulmonary artery, and the aortic semilunar valve controls flow from the left ventricle to the aorta.",
      tags: ["heart valves"],
    },
    {
      id: "ch6-10",
      question: "What happens during diastole and systole?",
      answer:
        "During diastole, the chambers relax and fill with blood. During systole, the chambers contract and pump blood.",
      tags: ["cardiac cycle"],
    },
    {
      id: "ch6-11",
      question: "Approximately how long does one cardiac cycle last?",
      options: ["0.08 seconds", "0.8 seconds", "8 seconds", "80 seconds"],
      answer: "0.8 seconds",
      tags: ["cardiac cycle"],
    },
    {
      id: "ch6-12",
      question: "What is the role of the SA node?",
      answer: "The SA node is the natural pacemaker that starts the heartbeat.",
      tags: ["heart conduction"],
    },
    {
      id: "ch6-13",
      question: "Place the cardiac conduction pathway in the correct order.",
      options: [
        "SA node → atria → AV node → bundle branches → Purkinje fibers",
        "AV node → SA node → Purkinje fibers → atria",
        "Purkinje fibers → SA node → AV node → bundle branches",
        "Atria → Purkinje fibers → SA node → AV node",
      ],
      answer: "SA node → atria → AV node → bundle branches → Purkinje fibers",
      tags: ["heart conduction"],
    },
    {
      id: "ch6-14",
      question:
        "Which nervous system activity slows the heart rate during rest and sleep?",
      options: [
        "Sympathetic nervous system activity",
        "Vagus nerve activity and acetylcholine",
        "Epinephrine release",
        "Norepinephrine release",
      ],
      answer: "Vagus nerve activity and acetylcholine",
      tags: ["heart rate regulation"],
    },
    {
      id: "ch6-15",
      question: "What increases heart rate during stress or exercise?",
      answer:
        "The sympathetic nervous system, along with epinephrine and norepinephrine, increases heart rate.",
      tags: ["heart rate regulation"],
    },
    {
      id: "ch6-16",
      question: "What is the function of the coronary arteries?",
      answer: "They supply blood to the heart muscle.",
      tags: ["circulation"],
    },
    {
      id: "ch6-17",
      question: "Match each circulation route with its pathway.",
      matches: [
        {
          left: "Systemic circulation",
          right: "Left ventricle → aorta → body tissues → right atrium",
        },
        {
          left: "Pulmonary circulation",
          right: "Right ventricle → pulmonary trunk → lungs → left atrium",
        },
      ],
      tags: ["circulatory routes"],
    },
    {
      id: "ch6-18",
      question:
        "What is the correct order of blood flow through the major blood vessels?",
      answer: "Aorta → arteries → arterioles → capillaries → venules → veins.",
      tags: ["blood vessel pathway"],
    },
    {
      id: "ch6-19",
      question:
        "What do the superior and inferior venae cavae return to the heart?",
      answer:
        "The superior vena cava returns blood from the upper body, and the inferior vena cava returns blood from the lower body. Both empty into the right atrium.",
      tags: ["blood vessel pathway"],
    },
    {
      id: "ch6-20",
      question:
        "Which blood vessels can constrict or dilate to control blood flow to tissues?",
      options: ["Arteries", "Arterioles", "Capillaries", "Venules"],
      answer: "Arterioles",
      tags: ["blood vessels"],
    },
    {
      id: "ch6-21",
      question: "What is unique about capillary structure?",
      answer:
        "Capillaries have a lumen about as wide as one red blood cell and walls made entirely of a single layer of endothelium.",
      tags: ["blood vessels"],
    },
    {
      id: "ch6-22",
      question: "Why do veins have valves, especially in the legs?",
      answer:
        "Their valves help pump blood upward against gravity and prevent backflow.",
      tags: ["blood vessels"],
    },
    {
      id: "ch6-23",
      question: "Match each diagnostic test with its purpose.",
      matches: [
        {
          left: "Auscultation",
          right: "Listening to the heart with a stethoscope",
        },
        {
          left: "Electrocardiogram",
          right: "Recording the electrical activity of the heart",
        },
        {
          left: "Echocardiography",
          right: "Using ultrasound to assess heart structure and motion",
        },
        {
          left: "Exercise tolerance test",
          right: "Monitoring ECG and blood pressure during exercise",
        },
        {
          left: "Cardiac catheterization",
          right: "Measuring oxygen levels and pressure in heart chambers",
        },
      ],
      tags: ["diagnostic tests"],
    },
    {
      id: "ch6-24",
      question: "What does color Doppler echocardiography evaluate?",
      answer:
        "It tracks blood-flow patterns and velocity to evaluate valve stenosis or insufficiency.",
      tags: ["diagnostic tests"],
    },
    {
      id: "ch6-25",
      question: "What is hyperlipidemia?",
      options: [
        "Abnormally low blood pressure",
        "Elevated lipids in the blood",
        "A lack of red blood cells",
        "A blockage in a vein",
      ],
      answer: "Elevated lipids in the blood",
      tags: ["lipids", "cholesterol"],
    },
    {
      id: "ch6-26",
      question: "Compare LDL and HDL cholesterol.",
      answer:
        "LDL carries cholesterol to tissues and can form artery-narrowing plaque. HDL carries cholesterol away from arteries to the liver for elimination.",
      tags: ["cholesterol"],
    },
    {
      id: "ch6-27",
      question: "What is atherosclerosis?",
      answer:
        "Thickening, narrowing, and hardening of arteries caused by fatty material accumulation.",
      tags: ["arterial disease"],
    },
    {
      id: "ch6-28",
      question:
        "What is the medically important feature of a fibrous atheromatous plaque?",
      answer:
        "It has a lipid core covered by plaque and scar tissue that can narrow or block arteries and may hemorrhage, ulcerate, or cause thrombosis.",
      tags: ["atherosclerosis"],
    },
    {
      id: "ch6-29",
      question: "Match each arterial occlusion with its possible consequence.",
      matches: [
        {
          left: "Coronary occlusion",
          right: "Chest pain and shortness of breath",
        },
        {
          left: "Carotid occlusion",
          right: "Reduced brain blood supply and stroke",
        },
        {
          left: "Peripheral vascular disease",
          right: "Leg pain, ulcers, and infections",
        },
      ],
      tags: ["arterial disease"],
    },
    {
      id: "ch6-30",
      question:
        "What is the most common symptom of peripheral arterial disease?",
      options: [
        "Intermittent claudication",
        "Persistent cough",
        "Severe chest pain",
        "High fever",
      ],
      answer: "Intermittent claudication",
      tags: ["peripheral arterial disease"],
    },
    {
      id: "ch6-31",
      question:
        "Which arteries are most commonly affected by peripheral arterial disease?",
      answer:
        "The femoral arteries of the upper leg and popliteal arteries of the lower leg.",
      tags: ["peripheral arterial disease"],
    },
    {
      id: "ch6-32",
      question: "What is Raynaud’s disease?",
      answer:
        "An arterial disorder causing sudden contractions, or vasospasms, of the arteries in the fingers and toes.",
      tags: ["Raynaud disease"],
    },
    {
      id: "ch6-33",
      question: "What commonly triggers Raynaud’s disease?",
      options: [
        "Cold exposure or emotional stress",
        "High-protein meals",
        "Bright light",
        "Physical contact with water",
      ],
      answer: "Cold exposure or emotional stress",
      tags: ["Raynaud disease"],
    },
    {
      id: "ch6-34",
      question: "What is an aortic aneurysm?",
      answer:
        "An abnormal dilation or ballooning of the aorta caused by weakness in the arterial wall.",
      tags: ["aortic aneurysm"],
    },
    {
      id: "ch6-35",
      question: "Match each aneurysm classification with its description.",
      matches: [
        {
          left: "Fusiform",
          right: "Symmetrical and uniform, tapered at both ends",
        },
        {
          left: "Saccular",
          right: "Out-pouching of a portion of the arterial wall",
        },
        {
          left: "Abdominal aneurysm",
          right: "Located below the kidneys and most common",
        },
        {
          left: "Thoracic aneurysm",
          right: "Located in the chest",
        },
        {
          left: "Cerebral aneurysm",
          right: "Located in the brain",
        },
      ],
      tags: ["aortic aneurysm"],
    },
    {
      id: "ch6-36",
      question: "Why can an aortic aneurysm be life-threatening?",
      answer:
        "It may be asymptomatic until it ruptures, causing life-threatening internal hemorrhage.",
      tags: ["aortic aneurysm"],
    },
    {
      id: "ch6-37",
      question: "How is arterial blood pressure measured?",
      answer: "It is measured with a sphygmomanometer, or blood pressure cuff.",
      tags: ["hypertension"],
    },
    {
      id: "ch6-38",
      question:
        "Which blood pressure reading is classified as hypertension according to the review?",
      options: [
        "Less than 120/80 mm Hg",
        "120–139/80–89 mm Hg",
        "Greater than 140/90 mm Hg",
        "Exactly 100/60 mm Hg",
      ],
      answer: "Greater than 140/90 mm Hg",
      tags: ["hypertension"],
    },
    {
      id: "ch6-39",
      question:
        "What is the difference between primary and secondary hypertension?",
      answer:
        "Primary hypertension has no identifiable underlying disease and accounts for about 90–95% of cases. Secondary hypertension results from another condition, such as kidney disease.",
      tags: ["hypertension"],
    },
    {
      id: "ch6-40",
      question: "Why is hypertension often called a silent condition?",
      answer:
        "It is usually asymptomatic, although long-term high blood pressure can damage the kidneys, eyes, and heart.",
      tags: ["hypertension"],
    },
    {
      id: "ch6-41",
      question: "Which lifestyle changes can help manage hypertension?",
      answer:
        "Weight loss, regular exercise, and reducing salt intake; treatment may also include stage-specific medications and treatment of underlying diseases.",
      tags: ["hypertension"],
    },
    {
      id: "ch6-42",
      question:
        "Which blood vessel has the ability to change its diameter to dilate and contract in order to alter blood flow to the tissues?",
      options: ["Venule", "Aorta", "Arteriole", "Capillary"],
      answer: "Arteriole",
      tags: ["blood vessels"],
    },
    {
      id: "ch6-43",
      question: "Which statement is accurate regarding the cardiac cycle?",
      options: [
        "Diastole is the refilling of the heart chambers upon contraction.",
        "The alternating relaxation and contraction of the atria and ventricles comprise the cardiac cycle.",
        "Systole is the relaxation of the heart chambers.",
        "One cardiac cycle takes approximately eight seconds.",
      ],
      answer:
        "The alternating relaxation and contraction of the atria and ventricles comprise the cardiac cycle.",
      tags: ["cardiac cycle"],
    },
    {
      id: "ch6-44",
      question: "What is the primary symptom of peripheral arterial disease?",
      options: [
        "Ulcers on the lower extremities",
        "Lower leg pulse faint or absent",
        "Feet are cold to touch",
        "Intermittent claudication",
      ],
      answer: "Intermittent claudication",
      tags: ["peripheral arterial disease"],
    },
    {
      id: "ch6-45",
      question: "What are the signs and symptoms of coronary artery disease?",
      options: [
        "Dyspnea, orthopnea, weakness, fatigue, ascites, and peripheral edema",
        "Angina pectoris, palpitations, and myocardial infarction",
        "Fever, chest pain, shortness of breath, and tachycardia",
        "Fever, inflammation of the joints, and rash",
      ],
      answer: "Angina pectoris, palpitations, and myocardial infarction",
      tags: ["coronary artery disease"],
    },
    {
      id: "ch6-46",
      question: "Which disease is asymptomatic?",
      options: [
        "Aortic aneurysm",
        "Varicose veins",
        "Pulmonary arterial hypertension",
        "Arterial hypertension",
      ],
      answer: "Pulmonary arterial hypertension",
      tags: ["cardiovascular diseases"],
    },
    {
      id: "q1",
      question:
        "What are the two major types of veins in the lower extremities?",
      answer: "Superficial (saphenous) veins and deep veins",
      tags: ["venous-system"],
    },
    {
      id: "q2",
      question:
        "What is the normal direction of blood flow in the veins of the lower extremities?",
      options: [
        "Heart → deep veins → superficial veins → skin",
        "Skin/subcutaneous tissue → superficial veins → deep veins → heart",
        "Deep veins → superficial veins → heart → skin",
        "Heart → superficial veins → deep veins → skin",
      ],
      answer:
        "Skin/subcutaneous tissue → superficial veins → deep veins → heart",
      tags: ["venous-system"],
    },
    {
      id: "q3",
      question:
        "How do one-way valves and leg muscles assist venous blood flow?",
      answer:
        "One-way valves prevent backflow, while leg muscles act as a pump to push blood upward toward the heart.",
      tags: ["venous-system"],
    },
    {
      id: "q4",
      question:
        "Which condition is characterized by dilated, distorted, swollen, and knotty veins?",
      options: [
        "Deep vein thrombosis",
        "Varicose veins",
        "Myocarditis",
        "Cardiomyopathy",
      ],
      answer: "Varicose veins",
      tags: ["varicose-veins"],
    },
    {
      id: "q5",
      question: "What causes varicose veins?",
      answer:
        "Blood pooling from decreased or stagnant flow increases pressure on thin vein walls, causing valves to fail.",
      tags: ["varicose-veins"],
    },
    {
      id: "q6",
      question:
        "Which of the following is NOT a risk factor for varicose veins?",
      options: [
        "Pregnancy",
        "Obesity",
        "Sedentary lifestyle",
        "Regular walking",
      ],
      answer: "Regular walking",
      tags: ["varicose-veins"],
    },
    {
      id: "q7",
      question: "What are spider veins?",
      answer: "Small red or blue discolorations visible in the skin.",
      tags: ["varicose-veins"],
    },
    {
      id: "q8",
      question: "Match each varicose-vein treatment with its description.",
      matches: [
        {
          left: "Conservative treatment",
          right: "Walking, leg elevation, weight loss, and elastic support",
        },
        {
          left: "Surgical vein stripping",
          right:
            "Removal of a vein segment while collateral circulation compensates",
        },
        {
          left: "Compression sclerotherapy",
          right:
            "Saline injection scars and fuses veins shut, followed by compression and walking",
        },
      ],
      tags: ["varicose-veins", "treatment"],
    },
    {
      id: "q9",
      question: "What is chronic venous insufficiency?",
      answer: "Poor venous blood return to the heart.",
      tags: ["chronic-venous-insufficiency"],
    },
    {
      id: "q10",
      question:
        "What condition most commonly causes chronic venous insufficiency?",
      options: [
        "Myocarditis",
        "Deep vein thrombosis",
        "Coronary atherosclerosis",
        "Hypertrophic cardiomyopathy",
      ],
      answer: "Deep vein thrombosis",
      tags: ["chronic-venous-insufficiency"],
    },
    {
      id: "q11",
      question:
        "Which symptoms may occur with advanced chronic venous insufficiency?",
      answer:
        "Tissue edema, necrosis, skin atrophy, pain during walking, and venous stasis ulcers.",
      tags: ["chronic-venous-insufficiency"],
    },
    {
      id: "q12",
      question:
        "What tests may be used to diagnose chronic venous insufficiency?",
      answer:
        "Physical examination, medical history, ultrasound, venography, CT, MRI, and a D-dimer blood test.",
      tags: ["chronic-venous-insufficiency", "diagnosis"],
    },
    {
      id: "q13",
      question: "What is deep vein thrombosis?",
      answer:
        "The development of a blood clot in a superficial or deep leg vein, often without symptoms.",
      tags: ["deep-vein-thrombosis"],
    },
    {
      id: "q14",
      question:
        "What are the three major contributing factors to deep vein thrombosis?",
      answer: "Venous stasis, vascular trauma, and hypercoagulability.",
      tags: ["deep-vein-thrombosis"],
    },
    {
      id: "q15",
      question:
        "What potentially fatal complication can result from deep vein thrombosis?",
      answer:
        "An embolus may break loose and travel to a vital organ, such as the lungs.",
      tags: ["deep-vein-thrombosis"],
    },
    {
      id: "q16",
      question: "How is deep vein thrombosis treated and prevented?",
      answer:
        "It is treated with blood thinners or surgical clot removal. Prevention includes early walking after surgery or childbirth, leg exercises, and compression stockings.",
      tags: ["deep-vein-thrombosis", "treatment"],
    },
    {
      id: "q17",
      question: "What is coronary artery disease?",
      options: [
        "Inflammation of the heart muscle",
        "Reduced coronary blood flow supplying the heart",
        "A clot in a leg vein",
        "Weakening of the heart valves",
      ],
      answer: "Reduced coronary blood flow supplying the heart",
      tags: ["coronary-artery-disease"],
    },
    {
      id: "q18",
      question: "What causes more than 90% of coronary artery disease cases?",
      answer: "Coronary atherosclerosis.",
      tags: ["coronary-artery-disease"],
    },
    {
      id: "qq19",
      question: "What is angina pectoris?",
      answer:
        "Chest pain or pressure caused by ischemia, or inadequate blood flow to the heart muscle.",
      tags: ["coronary-artery-disease"],
    },
    {
      id: "qq20",
      question:
        "Which symptom pattern is most associated with myocardial infarction or cardiac arrest?",
      options: [
        "Crushing chest pain, shortness of breath, nausea, pallor, weakness, and faintness",
        "Leg swelling and deep muscle tenderness only",
        "Flu-like symptoms without chest discomfort",
        "Abdominal fluid buildup and peripheral edema only",
      ],
      answer:
        "Crushing chest pain, shortness of breath, nausea, pallor, weakness, and faintness",
      tags: ["coronary-artery-disease", "myocardial-infarction"],
    },
    {
      id: "qq21",
      question:
        "Match each coronary artery disease procedure with its purpose.",
      matches: [
        {
          left: "Angioplasty and stenting",
          right:
            "Uses a balloon catheter to open a narrowed lumen and a mesh stent to keep it open",
        },
        {
          left: "Coronary artery bypass graft",
          right:
            "Reroutes blood around a severe blockage using a healthy vessel segment",
        },
      ],
      tags: ["coronary-artery-disease", "treatment"],
    },
    {
      id: "qq22",
      question: "What is myocarditis?",
      answer: "An inflammatory disease of the heart muscle.",
      tags: ["myocarditis"],
    },
    {
      id: "qq23",
      question:
        "Which infections or diseases can increase the risk of myocarditis?",
      answer:
        "Viral infections such as Coxsackie virus, parvovirus, adenovirus, and echovirus; HIV/AIDS; Lyme disease; streptococcal or staphylococcal infections; and illegal drug use.",
      tags: ["myocarditis"],
    },
    {
      id: "qq24",
      question: "How can myocarditis progress from its early stage?",
      answer:
        "It may begin asymptomatically and progress to flu-like illness, fatigue, fever, chest pain, shortness of breath, and tachycardia.",
      tags: ["myocarditis"],
    },
    {
      id: "qq25",
      question: "What is cardiomyopathy?",
      answer:
        "A disorder in which the heart becomes weakened and enlarged or rigid.",
      tags: ["cardiomyopathy"],
    },
    {
      id: "qq26",
      question:
        "Which type of cardiomyopathy is most common and is associated with ventricular dilation and congestive heart failure?",
      options: [
        "Dilated cardiomyopathy",
        "Hypertrophic cardiomyopathy",
        "Restrictive cardiomyopathy",
        "Inflammatory cardiomyopathy",
      ],
      answer: "Dilated cardiomyopathy",
      tags: ["cardiomyopathy"],
    },
    {
      id: "qq27",
      question: "What is congestive heart failure?",
      answer:
        "A chronic and progressive reduction in the heart's ability to pump blood.",
      tags: ["cardiomyopathy", "heart-failure"],
    },
    {
      id: "qq28",
      question:
        "Which type of cardiomyopathy is inherited, causes abnormal thickening of the heart muscle, and is a common cause of sudden cardiac death in young people?",
      answer: "Hypertrophic cardiomyopathy.",
      tags: ["cardiomyopathy"],
    },
    {
      id: "qq29",
      question: "What characterizes restrictive cardiomyopathy?",
      answer:
        "It is the least common type and is associated with reduced heart filling and ventricular endocardial scarring.",
      tags: ["cardiomyopathy"],
    },
    {
      id: "q30",
      question: "What are ascites and peripheral edema?",
      answer:
        "Ascites is excess fluid buildup in the abdominal cavity. Peripheral edema is swelling caused by fluid accumulation in tissues, especially the limbs.",
      tags: ["cardiomyopathy", "symptoms"],
    },
    {
      id: "qq31",
      question: "Match each condition with its defining feature.",
      matches: [
        {
          left: "Varicose veins",
          right: "Dilated, twisted, swollen superficial veins",
        },
        {
          left: "Chronic venous insufficiency",
          right: "Poor return of venous blood to the heart",
        },
        {
          left: "Deep vein thrombosis",
          right: "Blood clot in a leg vein",
        },
        {
          left: "Coronary artery disease",
          right: "Reduced blood flow through the coronary arteries",
        },
        {
          left: "Myocarditis",
          right: "Inflammation of the heart muscle",
        },
        {
          left: "Cardiomyopathy",
          right: "A weakened, enlarged, or rigid heart",
        },
      ],
      tags: ["review"],
    },
    {
      id: "q2-2",
      question:
        "A 65-year-old woman has shortness of breath, faintness, dizziness, a productive cough, low blood pressure, lung congestion, and abnormal heart sounds. Which diseases should be considered?",
      options: [
        "Coronary heart disease, congestive heart disease, and myocarditis",
        "Atherosclerosis only",
        "Chronic venous insufficiency only",
        "Carotid artery disease only",
      ],
      answer:
        "Coronary heart disease, congestive heart disease, and myocarditis",
      tags: ["cardiovascular disease", "clinical scenarios"],
    },
    {
      id: "q2-3",
      question:
        "A 30-year-old obese woman who smokes and is borderline diabetic has pain with walking. How do her risk factors increase her risk of cardiovascular disease?",
      answer:
        "Smoking increases the risk of atherosclerosis, chronic venous insufficiency, and cardiac arrhythmia. Diabetes increases the risk of atherosclerosis, hypercholesterolemia, peripheral artery disease, and coronary heart disease.",
      tags: ["risk factors", "smoking", "diabetes"],
    },
    {
      id: "q2-4",
      question: "Syncope is best described as:",
      options: [
        "Lightheadedness",
        "High blood pressure",
        "Chest congestion",
        "An abnormal heartbeat",
      ],
      answer: "Lightheadedness",
      tags: ["cardiovascular terminology"],
    },
    {
      id: "q2-5",
      question: "Diastole is the:",
      options: [
        "Filling phase of the heart",
        "Contraction phase of the heart",
        "Electrical shock phase",
        "Valve-narrowing phase",
      ],
      answer: "Filling phase of the heart",
      tags: ["cardiac physiology"],
    },
    {
      id: "q2-6",
      question: "What is the major cholesterol carrier in the blood?",
      answer: "Low-density lipoprotein (LDL)",
      tags: ["cholesterol", "lipoproteins"],
    },
    {
      id: "q2-7",
      question:
        "Blockage of which artery can reduce blood supply to the brain and cause a stroke?",
      answer: "The carotid artery",
      tags: ["stroke", "arteries"],
    },
    {
      id: "q2-8",
      question: "What is the most common cause of an aortic aneurysm?",
      answer: "Atherosclerosis",
      tags: ["aneurysm", "atherosclerosis"],
    },
    {
      id: "q2-9",
      question:
        "What procedure uses a balloon-tipped catheter to crush plaque in a coronary artery?",
      answer: "Angioplasty",
      tags: ["coronary disease", "procedures"],
    },
    {
      id: "q2-10",
      question: "Where is the mitral valve located?",
      options: [
        "Between the left atrium and the left ventricle",
        "Between the right atrium and the right ventricle",
        "Between the left ventricle and the aorta",
        "Between the right ventricle and the pulmonary artery",
      ],
      answer: "Between the left atrium and the left ventricle",
      tags: ["heart valves", "anatomy"],
    },
    {
      id: "q2-11",
      question: "What is the pacemaker of the heart?",
      answer: "The sinoatrial node",
      tags: ["cardiac conduction", "anatomy"],
    },
    {
      id: "q2-12",
      question: "An inflammatory disease of the heart muscle is called:",
      answer: "Myocarditis",
      tags: ["inflammation", "heart disease"],
    },
    {
      id: "q2-13",
      question:
        "Rheumatic heart disease is also known as what type of disease because it results from a reaction between bacterial antigens and the patient's antibodies?",
      answer: "An autoimmune disease",
      tags: ["rheumatic heart disease", "autoimmune disease"],
    },
    {
      id: "q2-14",
      question:
        "Infants born with chromosomal abnormalities have a higher risk for congenital heart disease.",
      options: ["True", "False"],
      answer: "True",
      tags: ["congenital heart disease"],
    },
    {
      id: "q2-15",
      question:
        "Salt and water restriction can be used to treat congestive heart failure.",
      options: ["True", "False"],
      answer: "True",
      tags: ["congestive heart failure", "treatment"],
    },
    {
      id: "q2-16",
      question:
        "An interruption of the flow of impulses through the conduction system is called bradycardia.",
      options: ["True", "False"],
      answer: "False",
      moreInfo: [
        "Bradycardia is an abnormally slow heart rate; interruption of impulse conduction is a conduction block.",
      ],
      tags: ["cardiac conduction", "bradycardia"],
    },
    {
      id: "q2-17",
      question:
        "In ventricular fibrillation, the heart quivers but is able to maintain cardiac output.",
      options: ["True", "False"],
      answer: "False",
      tags: ["ventricular fibrillation", "cardiac output"],
    },
    {
      id: "q2-18",
      question:
        "In mitral valve stenosis, delivery of blood via the pulmonary veins to the right atrium is impaired.",
      options: ["True", "False"],
      answer: "False",
      moreInfo: [
        "Mitral stenosis impairs blood flow from the left atrium to the left ventricle.",
      ],
      tags: ["mitral stenosis", "heart valves"],
    },
    {
      id: "q2-19",
      question: "Cardiomyopathy may be a congenital disease of the heart.",
      options: ["True", "False"],
      answer: "False",
      tags: ["cardiomyopathy"],
    },
    {
      id: "q2-20",
      question:
        "The most common cause of infective endocarditis is a bacterial infection.",
      options: ["True", "False"],
      answer: "True",
      tags: ["infective endocarditis"],
    },
    {
      id: "q2-21",
      question:
        "The early form of fatty deposits that leads to atherosclerosis is called a fatty streak.",
      options: ["True", "False"],
      answer: "True",
      tags: ["atherosclerosis"],
    },
    {
      id: "q2-22",
      question: "Intact aortic aneurysms typically cause symptoms.",
      options: ["True", "False"],
      answer: "False",
      tags: ["aortic aneurysm"],
    },
    {
      id: "q2-23",
      question: "The most common cause of chronic venous insufficiency is:",
      answer: "Deep vein thrombosis",
      tags: ["venous disease"],
    },
    {
      id: "q2-24",
      question: "More than 90% of patients with coronary heart disease have:",
      answer: "Atherosclerosis",
      tags: ["coronary heart disease", "atherosclerosis"],
    },
    {
      id: "q2-25",
      question:
        "Which type of cardiomyopathy is associated with reduced heart-filling pressure and endocardial scarring?",
      answer: "Restrictive cardiomyopathy",
      tags: ["cardiomyopathy"],
    },
    {
      id: "q2-26",
      question: "What does valvular stenosis refer to?",
      answer: "Narrowing of the heart valves",
      tags: ["heart valves", "stenosis"],
    },
    {
      id: "q2-27",
      question: "The predominant cause of mitral stenosis is:",
      options: [
        "Rheumatic fever",
        "Atherosclerosis",
        "Deep vein thrombosis",
        "Myocarditis",
      ],
      answer: "Rheumatic fever",
      tags: ["mitral stenosis", "rheumatic fever"],
    },
    {
      id: "q2-28",
      question:
        "Backflow of blood in aortic regurgitation causes which chamber to dilate?",
      answer: "The left ventricle",
      tags: ["aortic regurgitation", "heart chambers"],
    },
    {
      id: "q2-29",
      question: "An abnormal or uncoordinated heartbeat is called:",
      answer: "An arrhythmia",
      tags: ["arrhythmia", "cardiac rhythm"],
    },
    {
      id: "q2-30",
      question:
        "What device delivers electrical shocks to help reestablish a normal heart rhythm?",
      answer: "An automated external defibrillator (AED)",
      tags: ["defibrillation", "cardiac emergencies"],
    },
    {
      id: "q2-31",
      question: "The most serious type of fibrillation affects the:",
      options: ["Ventricles", "Atria", "Carotid arteries", "Pulmonary veins"],
      answer: "Ventricles",
      tags: ["fibrillation", "ventricles"],
    },
    {
      id: "q2-32",
      question:
        "Which blood vessels provide the heart muscle with blood and oxygen?",
      answer: "The coronary arteries",
      tags: ["coronary arteries", "heart anatomy"],
    },
    {
      id: "q2-33",
      question: "Match each structure or condition with its description.",
      matches: [
        {
          left: "Sinoatrial node",
          right: "Pacemaker of the heart",
        },
        {
          left: "Mitral valve",
          right: "Located between the left atrium and left ventricle",
        },
        {
          left: "Coronary arteries",
          right: "Supply the heart muscle with blood and oxygen",
        },
        {
          left: "Carotid artery",
          right: "Supplies blood to the brain",
        },
      ],
      tags: ["matching", "heart anatomy"],
    },
    {
      id: "q2-34",
      question: "Match each condition with its associated feature.",
      matches: [
        {
          left: "Myocarditis",
          right: "Inflammation of the heart muscle",
        },
        {
          left: "Restrictive cardiomyopathy",
          right: "Reduced heart filling and endocardial scarring",
        },
        {
          left: "Aortic regurgitation",
          right: "Backflow that causes left ventricular dilation",
        },
        {
          left: "Ventricular fibrillation",
          right:
            "Quivering ventricles that cannot maintain effective cardiac output",
        },
      ],
      tags: ["matching", "heart disease"],
    },
    {
      id: "q3-1",
      question: "What is endocarditis?",
      answer: "An infection of the endocardium and heart valves",
      tags: ["endocarditis"],
    },
    {
      id: "q3-2",
      question: "Which factors increase the risk of endocarditis?",
      options: [
        "Rheumatic, degenerative, or congenital heart disease; valve disorders; and IV drug abuse",
        "Only hypertension and diabetes",
        "Only viral respiratory infections",
        "Low-salt diet and regular exercise",
      ],
      answer:
        "Rheumatic, degenerative, or congenital heart disease; valve disorders; and IV drug abuse",
      tags: ["endocarditis"],
    },
    {
      id: "q3-3",
      question: "What forms the vegetative lesions seen in endocarditis?",
      answer: "Infectious organisms and cellular debris within a fibrous clot",
      tags: ["endocarditis"],
    },
    {
      id: "q3-4",
      question:
        "What complications can occur when fragments of endocardial vegetations break off?",
      answer: "Emboli can damage organs or rupture blood vessels",
      tags: ["endocarditis"],
    },
    {
      id: "q3-5",
      question:
        "Which test definitively identifies the organism causing endocarditis?",
      options: [
        "Blood culture",
        "ECG",
        "Chest X-ray",
        "Cardiac catheterization",
      ],
      answer: "Blood culture",
      tags: ["endocarditis", "diagnosis"],
    },
    {
      id: "q3-6",
      question: "How is endocarditis treated and prevented?",
      answer:
        "It is treated with antibiotics and, if needed, surgical valve repair; prevention includes managing heart or valve disease and avoiding IV drug use",
      tags: ["endocarditis"],
    },
    {
      id: "q3-7",
      question: "What is rheumatic fever?",
      answer:
        "A rare autoimmune disease of heart tissue and valves, primarily affecting children ages 5–15",
      tags: ["rheumatic fever"],
    },
    {
      id: "q3-8",
      question:
        "Rheumatic fever usually begins how long after a group A streptococcal infection?",
      options: [
        "About 2 weeks",
        "Within 1 hour",
        "After 6 months",
        "Only after adulthood",
      ],
      answer: "About 2 weeks",
      tags: ["rheumatic fever"],
    },
    {
      id: "q3-9",
      question:
        "Which valve is frequently permanently damaged by rheumatic fever?",
      answer: "The mitral valve",
      tags: ["rheumatic fever"],
    },
    {
      id: "q3-10",
      question: "How can rheumatic fever be prevented?",
      answer: "By promptly treating streptococcal infections with antibiotics",
      tags: ["rheumatic fever"],
    },
    {
      id: "q3-11",
      question: "Match each valve disorder with its description.",
      matches: [
        {
          left: "Stenosis",
          right: "Narrowing or failure of a valve to open normally",
        },
        {
          left: "Insufficiency/regurgitation",
          right: "Backward flow of blood through a valve",
        },
      ],
      tags: ["heart valves"],
    },
    {
      id: "q3-12",
      question: "What is the primary function of the heart valves?",
      answer: "To maintain unidirectional blood flow through the heart",
      tags: ["heart valves"],
    },
    {
      id: "q3-13",
      question: "What can occur in advanced heart valve disease?",
      options: [
        "Muscle hypertrophy, weakness, shortness of breath, cyanosis, and congestive heart failure",
        "Improved cardiac output and lower blood pressure",
        "Only digestive symptoms",
        "Permanent immunity to arrhythmias",
      ],
      answer:
        "Muscle hypertrophy, weakness, shortness of breath, cyanosis, and congestive heart failure",
      tags: ["heart valves"],
    },
    {
      id: "q3-14",
      question: "What is a cardiac arrhythmia?",
      answer:
        "An abnormal heart rhythm caused by irregular impulse generation or conduction",
      tags: ["arrhythmias"],
    },
    {
      id: "q3-15",
      question: "Where do supraventricular arrhythmias originate?",
      answer: "In the SA node, atria, AV node, or junctional tissue",
      tags: ["arrhythmias"],
    },
    {
      id: "q3-16",
      question: "Why are ventricular arrhythmias especially dangerous?",
      answer:
        "They originate in the ventricular conduction system or ventricles, which pump blood from the heart, and may be life-threatening",
      tags: ["arrhythmias"],
    },
    {
      id: "q3-17",
      question: "Match each rhythm disorder with its definition.",
      matches: [
        {
          left: "Tachycardia",
          right: "Sustained heart rate above 100 beats per minute",
        },
        {
          left: "Bradycardia",
          right: "Abnormally low heart rate below 50 beats per minute",
        },
        {
          left: "Atrial fibrillation",
          right: "Disorganized, uncoordinated atrial contraction",
        },
        {
          left: "Ventricular fibrillation",
          right: "Disorganized, uncoordinated ventricular contraction",
        },
        {
          left: "Heart block",
          right: "Atria and ventricles contract independently",
        },
      ],
      tags: ["arrhythmias"],
    },
    {
      id: "q3-18",
      question:
        "Which rhythm disorder is the most common, and which is a life-threatening emergency?",
      answer:
        "Atrial fibrillation is the most common; ventricular fibrillation is a life-threatening emergency that can cause cardiac arrest",
      tags: ["arrhythmias"],
    },
    {
      id: "q3-19",
      question:
        "What symptoms may indicate a cardiac conduction disorder or arrhythmia?",
      answer: "Syncope or lightheadedness, edema, and shortness of breath",
      tags: ["arrhythmias"],
    },
    {
      id: "q3-20",
      question: "What does catheter ablation accomplish?",
      answer:
        "It uses energy delivered through a catheter to sever abnormal rhythm pathways",
      tags: ["arrhythmias"],
    },
    {
      id: "q3-21",
      question: "What is congestive heart failure?",
      answer:
        "A chronic, progressive reduction in the heart's ability to pump blood",
      tags: ["CHF"],
    },
    {
      id: "q3-22",
      question:
        "Which symptom pattern suggests progression from mild to severe congestive heart failure?",
      options: [
        "Ankle swelling and exertional shortness of breath progressing to shortness of breath at rest, fatigue, neck vein swelling, rales, pulmonary edema, and cyanosis",
        "Fever progressing to rash only",
        "Joint pain progressing to uncontrolled hand movements",
        "Cold legs progressing to clubbing only",
      ],
      answer:
        "Ankle swelling and exertional shortness of breath progressing to shortness of breath at rest, fatigue, neck vein swelling, rales, pulmonary edema, and cyanosis",
      tags: ["CHF"],
    },
    {
      id: "q3-23",
      question: "Can congestive heart failure be cured or reversed?",
      answer:
        "No. Treatment focuses on relieving symptoms and reducing stress on the heart",
      tags: ["CHF"],
    },
    {
      id: "q3-24",
      question:
        "What lifestyle and medication measures are used to manage congestive heart failure?",
      answer:
        "Salt and water restriction, lifestyle modification, treatment of underlying causes, diuretics, cardiac output enhancers, antihypertensives, antiarrhythmics, and heart-rate slowers",
      tags: ["CHF"],
    },
    {
      id: "q3-25",
      question: "What is shock?",
      answer:
        "A life-threatening drop in blood pressure that causes inadequate cellular blood supply and rapid, irreversible cell death",
      tags: ["shock"],
    },
    {
      id: "q3-26",
      question: "Match each type of shock with its underlying cause.",
      matches: [
        {
          left: "Cardiogenic shock",
          right: "Cardiac arrhythmias or myocardial infarction",
        },
        {
          left: "Hypovolemic shock",
          right: "Hemorrhage, trauma, surgery, or extensive burns",
        },
        {
          left: "Anaphylactic shock",
          right: "Severe allergic reaction",
        },
        {
          left: "Septic shock",
          right: "Toxins released by a bacterial infection",
        },
        {
          left: "Neurogenic shock",
          right: "Damage to the central nervous system",
        },
      ],
      tags: ["shock"],
    },
    {
      id: "q3-27",
      question:
        "What changes occur during the transition from fetal to postnatal circulation?",
      answer:
        "The first breath expands the lungs; cord clamping removes placental circulation and raises left ventricular pressure; the foramen ovale closes as right atrial pressure falls and left atrial pressure rises; and the ductus arteriosus closes as blood flow shifts to the lungs",
      tags: ["fetal circulation"],
    },
    {
      id: "q3-28",
      question: "What are the four abnormalities in tetralogy of Fallot?",
      answer:
        "Ventricular septal defect, pulmonary valve stenosis, a misplaced aorta, and right ventricular hypertrophy",
      tags: ["congenital heart disease"],
    },
    {
      id: "q3-29",
      question: "Which findings are characteristic of tetralogy of Fallot?",
      answer:
        "Cyanosis that worsens during crying or feeding, poor weight gain, clubbing, and squatting",
      tags: ["congenital heart disease"],
    },
    {
      id: "q3-30",
      question:
        "What is abnormal about the great arteries in transposition of the great arteries?",
      answer:
        "The aorta connects to the right ventricle and the pulmonary artery connects to the left ventricle, creating independent blood loops",
      tags: ["congenital heart disease"],
    },
    {
      id: "q3-31",
      question:
        "Why are prostaglandins used in transposition of the great arteries?",
      answer:
        "To keep the ductus arteriosus open so blood can mix until corrective surgery is performed",
      tags: ["congenital heart disease"],
    },
    {
      id: "q3-32",
      question:
        "What is the difference between an atrial septal defect and a ventricular septal defect?",
      answer:
        "An atrial septal defect is an opening between the atria, while a ventricular septal defect is an opening between the ventricles",
      tags: ["congenital heart disease"],
    },
    {
      id: "q3-33",
      question: "What happens in patent ductus arteriosus?",
      answer:
        "The ductus arteriosus fails to close, allowing blood to recirculate from the aorta into the lungs and increasing the risk of heart failure",
      tags: ["congenital heart disease"],
    },
    {
      id: "q3-34",
      question: "What is coarctation of the aorta?",
      answer:
        "A congenital narrowing of the aorta, usually near the ductus arteriosus, that increases resistance against the left ventricle",
      tags: ["congenital heart disease"],
    },
    {
      id: "q3-35",
      question: "Which symptoms may occur with coarctation of the aorta?",
      answer: "Dizziness, cold legs, shortness of breath, and heart murmurs",
      tags: ["congenital heart disease"],
    },
    {
      id: "q3-36",
      question: "What are important risk factors for congenital heart disease?",
      answer:
        "Family history, chromosomal abnormalities such as Down syndrome or Turner syndrome, maternal diabetes, congenital rubella, and maternal drug or alcohol abuse",
      tags: ["congenital heart disease"],
    },
    {
      id: "q3-37",
      question: "Which cardiovascular changes are associated with aging?",
      answer:
        "Increased systolic blood pressure, increased left ventricular mass, arterial thickening, vascular stiffness, decreased ventricular filling, lower heart rate and cardiac output, reduced exercise capacity, and reduced stress responsiveness",
      tags: ["aging"],
    },
    {
      id: "q3-38",
      question: "What is the impact of cardiovascular disease in older adults?",
      answer:
        "It is the leading cause of death in people age 65 and older, and hypertension affects approximately 50–66% of this group",
      tags: ["aging"],
    },
    {
      id: "q3-2-1",
      question:
        "A 59-year-old man develops severe chest pain while playing golf. Which heart or vascular diseases should be considered?",
      options: [
        "Atherosclerosis, coronary heart disease, and myocarditis",
        "Chronic venous insufficiency and cardiomyopathy only",
        "Mitral stenosis and rheumatic fever only",
        "Ventricular fibrillation only",
      ],
      answer: "Atherosclerosis, coronary heart disease, and myocarditis",
      tags: ["cardiovascular disease", "clinical scenarios"],
    },
  ],
};
