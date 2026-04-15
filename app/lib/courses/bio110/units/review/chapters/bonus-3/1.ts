import { Chapter } from "@/app/types";

export const bio110Studocu: Chapter = {
  id: "all-3",
  title: "Studocu Questions",
  description: "studocu",
  number: 103,
  type: "chapter",
  sections: [],
  questions: [
    // Carbon prefixes
    {
      question: "What is the prefix for 1 carbon?",
      options: ["meth", "eth", "prop", "but"],
      answer: "meth",
      hint: "Think of the simplest alkane: methane.",
      tags: ["organic chemistry", "nomenclature", "alkanes"],
    },
    {
      question: "What is the prefix for 2 carbons?",
      options: ["meth", "eth", "prop", "but"],
      answer: "eth",
      hint: "Used in names like ethane or ethanol.",
      tags: ["organic chemistry", "nomenclature"],
    },
    {
      question: "What is the prefix for 3 carbons?",
      options: ["eth", "prop", "but", "pent"],
      answer: "prop",
      hint: "Propane is used in many outdoor grills.",
      tags: ["organic chemistry", "nomenclature"],
    },
    {
      question: "What is the prefix for 4 carbons?",
      options: ["prop", "but", "pent", "hex"],
      answer: "but",
      hint: "This prefix is used for butane lighters.",
      tags: ["organic chemistry", "nomenclature"],
    },
    {
      question: "What is the prefix for 5 carbons?",
      options: ["but", "pent", "hex", "hept"],
      answer: "pent",
      hint: "Think of a five-sided polygon.",
      tags: ["organic chemistry", "nomenclature"],
    },
    {
      question: "What is the prefix for 6 carbons?",
      options: ["pent", "hex", "hept", "oct"],
      answer: "hex",
      hint: "A hexagon has this many sides.",
      tags: ["organic chemistry", "nomenclature"],
    },
    {
      question: "What is the prefix for 7 carbons?",
      options: ["hex", "hept", "oct", "non"],
      answer: "hept",
      hint: "The Greek-derived prefix for seven.",
      tags: ["organic chemistry", "nomenclature"],
    },
    {
      question: "What is the prefix for 8 carbons?",
      options: ["hept", "oct", "non", "dec"],
      answer: "oct",
      hint: "An octopus has this many legs.",
      tags: ["organic chemistry", "nomenclature"],
    },
    {
      question: "What is the prefix for 9 carbons?",
      options: ["oct", "non", "dec", "undec"],
      answer: "non",
      hint: "Similar to the word 'nine'.",
      tags: ["organic chemistry", "nomenclature"],
    },
    {
      question: "What is the prefix for 10 carbons?",
      options: ["non", "dec", "undec", "dodec"],
      answer: "dec",
      hint: "A decade consists of this many years.",
      tags: ["organic chemistry", "nomenclature"],
    },
    // BIO 110 - Lab 12 Quiz - Matching Terms and Definitions
    {
      question:
        "Sister chromatids separate and move toward the poles of the cell.",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      answer: "Anaphase",
      tags: ["BIO 110", "Lab 12", "Mitosis"],
    },
    {
      question:
        "In plant cells, the location of a new plasma membrane for each daughter cell.",
      options: ["Cleavage furrow", "Cell plate", "Centromere", "Cytokinesis"],
      answer: "Cell plate",
      tags: ["BIO 110", "Lab 12", "Plant Cells"],
    },
    {
      question: "A constriction where sister chromatids are held together.",
      options: ["Centromere", "Centrosome", "Cell plate", "Chromatin"],
      answer: "Centromere",
      tags: ["BIO 110", "Lab 12", "Cell Structure"],
    },
    {
      question:
        "In animal cells, the location of a new plasma membrane for each daughter cell.",
      options: ["Cell plate", "Cleavage furrow", "Cytokinesis", "Centromere"],
      answer: "Cleavage furrow",
      tags: ["BIO 110", "Lab 12", "Animal Cells"],
    },
    {
      question: "The division of the cytoplasm.",
      options: ["Mitosis", "Interphase", "Cytokinesis", "Telophase"],
      answer: "Cytokinesis",
      tags: ["BIO 110", "Lab 12", "Cell Cycle"],
    },
    {
      question: "The portion of the cell cycle between cell divisions.",
      options: ["Interphase", "Prophase", "Metaphase", "Anaphase"],
      answer: "Interphase",
      tags: ["BIO 110", "Lab 12", "Cell Cycle"],
    },
    {
      question:
        "Centromeres of duplicated chromosomes are aligned at the middle of the cell.",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      answer: "Metaphase",
      tags: ["BIO 110", "Lab 12", "Mitosis"],
    },
    {
      question: "Nuclear division of somatic cells.",
      options: ["Meiosis", "Cytokinesis", "Mitosis", "Interphase"],
      answer: "Mitosis",
      tags: ["BIO 110", "Lab 12", "Mitosis"],
    },
    {
      question:
        "Nucleolus has disappeared and duplicated chromosomes are visible.",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      answer: "Prophase",
      tags: ["BIO 110", "Lab 12", "Mitosis"],
    },
    {
      question:
        "Daughter cells form as nuclear envelopes and nucleoli reappear.",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      answer: "Telophase",
      tags: ["BIO 110", "Lab 12", "Mitosis"],
    },
    // BIO 110 - Lab 11 Quiz - Cellular Respiration Insights
    {
      id: "1",
      question:
        "What is the general chemical equation for cellular respiration?",
      answer: "C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + 36 ATP",
      tags: ["biochemistry", "equations"],
    },
    {
      id: "2",
      question: "From which molecule can our cells harvest the most energy?",
      options: ["Glucose", "Oxygen", "Carbon Dioxide", "Water"],
      answer: "Glucose",
      hint: "It is a simple sugar used as a primary fuel source.",
      tags: ["energy", "molecules"],
    },
    {
      id: "3",
      question:
        "As respiration increases, the body's demand for which molecule also increases?",
      options: ["Glucose", "Oxygen", "Carbon Dioxide", "Nitrogen"],
      answer: "Oxygen",
      tags: ["physiology", "respiration"],
    },
    {
      id: "4",
      question: "What energy molecule is consumed as a muscle moves?",
      options: ["Glucose", "ATP", "ADP", "NADH"],
      answer: "ATP",
      hint: "Known as the energy currency of the cell.",
      tags: ["energy", "muscles"],
    },
    {
      id: "5",
      question:
        "In the laboratory investigation, what was the dependent variable?",
      answer:
        "A dependent variable is what you measure in the experiment and what is affected during the experiment. The dependent variable responds to the independent variable. It is called dependent because it 'depends' on the independent variable. In a scientific experiment, you cannot have a dependent variable without an independent variable.",
      tags: ["lab-methods"],
    },
    {
      id: "6",
      question:
        "What were the two methods used to measure the dependent variable (respiration)?",
      options: [
        "Pulse rate and CO2 production",
        "Glucose levels and O2 levels",
        "Temperature and sweat rate",
        "Muscle mass and ATP",
      ],
      answer: "Pulse rate and CO2 production",
      tags: ["lab-methods", "measurement"],
    },
    {
      id: "7",
      question: "Name a possible independent variable from the experiment.",
      answer: "Exercise",
      tags: ["lab-methods"],
    },
    {
      id: "8",
      question:
        "According to the experimental results, what happens to pulse rate and CO2 production as respiration increases?",
      options: [
        "They decrease",
        "They stay the same",
        "They increase",
        "They fluctuate randomly",
      ],
      answer: "They increase",
      tags: ["data-analysis"],
    },
    // BIO 110 - Lab 10 Quiz - Short Answer and Matching Questions
    {
      question:
        "If you are working with a 20% NaCl solution, what percentage of the solution is water?",
      answer: "80%",
      tags: ["solute", "calculation"],
    },
    {
      question:
        "The diffusion of two different substances at different rates due to their molecular characteristics.",
      answer: "Dialysis",
      tags: ["matching", "diffusion"],
    },
    {
      question: "The movement of particles due to a concentration gradient.",
      answer: "Diffusion",
      tags: ["matching"],
    },
    {
      question: "A solution that has higher solute concentration than another.",
      answer: "Hypertonic",
      tags: ["matching", "tonicity"],
    },
    {
      question:
        "A solution that has a lower solute concentration than another.",
      answer: "Hypotonic",
      tags: ["matching", "tonicity"],
    },
    {
      question: "A solution that has the same solute concentration as another.",
      answer: "Isotonic",
      tags: ["matching", "tonicity"],
    },
    {
      question: "The control of water balance in relation to the environment.",
      answer: "Osmoregulation",
      tags: ["matching"],
    },
    {
      question:
        "The diffusion of water molecules due to a concentration gradient.",
      answer: "Osmosis",
      tags: ["matching"],
    },
    {
      question:
        "The shriveling of a plant cell caused by water loss and the separation of the plasma membrane from the cell wall.",
      answer: "Plasmolysis",
      tags: ["matching", "plant biology"],
    },
    {
      question:
        "Compares the concentrations of solutes in two different places.",
      answer: "Tonicity",
      tags: ["matching"],
    },
    // BIO 110 - Lab 9 Quiz - Particle Motion and Diffusion Concepts
    {
      id: "1",
      question:
        "What is the term for the random motion of particles observed in a carmine suspension?",
      options: [
        "Osmosis",
        "Brownian movement",
        "Active transport",
        "Centrifugation",
      ],
      answer: "Brownian movement",
      tags: ["Particle Motion", "Lab 9"],
    },
    {
      id: "2",
      question:
        "In the carmine suspension experiment, which particles moved faster under magnification?",
      options: [
        "The largest particles",
        "The smallest particles",
        "The heaviest particles",
        "All particles moved at the same speed",
      ],
      answer: "The smallest particles",
      tags: ["Particle Motion"],
    },
    {
      id: "3",
      question:
        "What happened to the movement of carmine particles when heated pennies were placed near the slide?",
      options: [
        "The particles stopped moving",
        "The particles moved slower",
        "The particles moved faster",
        "The motion became directional",
      ],
      answer: "Faster",
      tags: ["Temperature", "Kinetic Energy"],
    },
    {
      id: "4",
      question:
        "Which process describes the natural movement of particles from an area of higher concentration to lower concentration?",
      options: ["Diffusion", "Filtration", "Bulk flow", "Phagocytosis"],
      answer: "Diffusion",
      tags: ["Diffusion"],
    },
    {
      id: "5",
      question:
        "What is the term for the difference in concentrations between any two locations?",
      options: [
        "Equilibrium",
        "Concentration gradient",
        "Osmotic pressure",
        "Solubility",
      ],
      answer: "Concentration gradient",
      tags: ["Concentration"],
    },
    {
      id: "6",
      question:
        "Why did Potassium permanganate (MW 158.03) diffuse farther across agar than Methylene Blue (MW 319.87)?",
      options: [
        "Larger particles diffuse faster",
        "Methylene Blue is more soluble",
        "Smaller particles diffuse faster than larger ones",
        "The agar attracts smaller molecules",
      ],
      answer: "Smaller particles diffuse faster than larger ones",
      tags: ["Molecular Weight", "Diffusion Rate"],
    },
    {
      id: "7",
      question:
        "The cell membrane allows some molecules to pass through but not others. This quality is called:",
      options: [
        "Total permeability",
        "Selective permeability",
        "Impermeability",
        "Active diffusion",
      ],
      answer: "Selective permeability",
      tags: ["Cell Membrane"],
    },
    {
      id: "8",
      question:
        "In the dialysis bag experiment, the solution inside the bag turned bright pink. What passed into the bag to cause this?",
      options: ["Starch", "Iodine", "NaOH", "Phenolphthalein"],
      answer: "NaOH",
      hint: "NaOH is a base that reacts with phenolphthalein to turn pink.",
      tags: ["Dialysis", "Permeability"],
    },
    {
      id: "9",
      question:
        "The solution in the beaker turned pale pink during the dialysis experiment. This indicates that which substance passed into the beaker?",
      options: ["NaOH", "Phenolphthalein", "Agar", "Water"],
      answer: "Phenolphthalein",
      tags: ["Dialysis"],
    },
    {
      id: "10",
      question:
        "When a starch solution bag was placed in an iodine beaker, the bag turned black but the beaker color remained unchanged. Why?",
      options: [
        "Iodine moved into the bag, but starch particles were too large to move out",
        "Starch moved out into the beaker",
        "The iodine and starch neutralized each other",
        "The dialysis tubing was impermeable to iodine",
      ],
      answer:
        "The iodine had passed into the bag, but the starch particles were too big for it to leak out the beaker",
      tags: ["Molecular Size", "Dialysis"],
    },
    // BIO 110 - Lab 8 Quiz - Enzyme Reactions and Lipase Activity
    {
      question:
        "In the reaction 2H2O2 -> 2H2O + O2, what type of reaction is occurring?",
      options: ["Synthesis", "Degradation", "Replacement", "Oxidation"],
      answer: "Degradation",
      tags: ["Enzymes", "Catalase"],
    },
    {
      question:
        "What are the end products of the reaction involving hydrogen peroxide and catalase?",
      options: [
        "Hydrogen and Oxygen",
        "Water and Carbon Dioxide",
        "Water and Oxygen",
        "Hydrogen Peroxide and Water",
      ],
      answer: "Water and Oxygen",
      tags: ["Enzymes", "Chemical Reactions"],
    },
    {
      question:
        "Which substance serves as the substrate in the catalase reaction?",
      options: ["Water", "Oxygen", "Catalase", "Hydrogen peroxide"],
      answer: "Hydrogen peroxide",
      tags: ["Enzymes", "Substrates"],
    },
    {
      question: "What is the specific role of the active site of an enzyme?",
      options: [
        "It produces energy for the cell",
        "It binds the substrate and orients it for catalysis",
        "It changes the enzyme's primary structure",
        "It acts as a storage site for products",
      ],
      answer: "It binds the substrate and orients it for catalysis",
      tags: ["Enzyme Structure"],
    },
    {
      question:
        "Why would a boiled sample of catalase be less reactive than a warmed sample?",
      options: [
        "The temperature was too low",
        "The enzyme denatured due to high heat",
        "The substrate was destroyed",
        "The reaction reached equilibrium too fast",
      ],
      answer: "The enzyme denatured due to high heat",
      hint: "High temperatures can change the shape of a protein.",
      tags: ["Temperature", "Denaturation"],
    },
    {
      question:
        "Which of the following components are required for lipase to successfully digest fat droplets?",
      options: [
        "Water and lipase only",
        "Fat droplets and water only",
        "Lipase, fat droplets, and NaHCO3",
        "Lipase and NaHCO3 only",
      ],
      answer: "Lipase, fat droplets, and NaHCO3",
      hint: "Lipase needs both its substrate and a basic environment.",
      tags: ["Lipase", "Digestion"],
    },
    {
      question:
        "In a lab experiment, why would a tube containing water, fat droplets, and lipase (Tube D) fail to show digestion?",
      options: [
        "There is no substrate",
        "The enzyme is missing",
        "There is no NaHCO3 to provide basic conditions",
        "Fat and water do not mix",
      ],
      answer: "There is no NaHCO3 to provide basic conditions",
      tags: ["Lipase", "pH"],
    },
    // BIO 110 - Lab 7 Quiz - Microscope and Magnification Insights
    {
      question:
        "What type of microscope is typically used in a standard biology lab as shown in the material?",
      options: [
        "Electron microscope",
        "Compound light microscope",
        "Dissecting microscope",
        "Scanning probe microscope",
      ],
      answer: "Compound light microscope",
      tags: ["microscope-types"],
    },
    {
      question: "How is the total magnification of a microscope calculated?",
      options: [
        "Adding the ocular and objective lens magnifications",
        "Magnification of the ocular lens times the magnification of the objective lens",
        "Subtracting the objective lens from the ocular lens",
        "Dividing the objective lens by the ocular lens magnification",
      ],
      answer:
        "Magnification of the ocular lens times the magnification of the objective lens",
      tags: ["calculations", "magnification"],
    },
    {
      question:
        "What is the term for the circle visible through the microscope lenses?",
      options: [
        "Depth of field",
        "Focal point",
        "Field of view",
        "Resolution circle",
      ],
      answer: "Field of view",
      tags: ["terminology"],
    },
    {
      // Note: Due to the inverted image in compound microscopes
      question:
        "If a Euglena is swimming up, which way should you move your slide to keep it in view?",
      options: ["Up", "Down", "Left", "Right"],
      answer: "Down",
      hint: "Move the slide in the opposite direction of the specimen's movement.",
      tags: ["lab-skills"],
    },
    {
      question:
        "What is a primary advantage of an electron microscope over a light microscope?",
      options: [
        "Cheaper to maintain",
        "Portability",
        "Better magnification",
        "Easier to use",
      ],
      answer: "Better magnification",
      tags: ["microscope-comparison"],
    },
    {
      question:
        "Why is locating an object more difficult if you start with the high power objective rather than the scanning objective?",
      options: [
        "The light is too bright",
        "The lens is too long",
        "Field of view is too small at high power",
        "The image is upside down",
      ],
      answer: "Field of view is too small at high power",
      tags: ["lab-skills", "optics"],
    },
    // BIO 110 - Lab 6 Quiz - Organic Molecules and Proteins
    {
      question:
        "Large organic molecules form during what type of synthesis, where water is given off as smaller molecules bond?",
      answer: "Dehydration",
      tags: ["synthesis", "organic molecules"],
    },
    {
      question:
        "What are the smaller organic molecules called that bond together to form large organic molecules?",
      answer: "Monomers",
      tags: ["structure", "organic molecules"],
    },
    {
      question:
        "Proteins are formed when which molecules bond together in chains?",
      answer: "Amino acids",
      tags: ["proteins", "monomers"],
    },
    {
      question:
        "What is the specific name for the bonds that connect amino acids to form proteins?",
      answer: "Peptide",
      tags: ["proteins", "bonds"],
    },
    {
      question:
        "What specific kind of protein acts as a catalyst to speed up chemical reactions?",
      answer: "Enzyme",
      tags: ["proteins", "enzymes"],
    },
    {
      question:
        "Which organic molecules consist of sugars in either single or long chain formations?",
      answer: "Carbohydrates",
      tags: ["carbohydrates"],
    },
    {
      question:
        "Which single sugar unit is utilized by all organisms as a primary energy source?",
      answer: "Glucose",
      tags: ["carbohydrates", "energy"],
    },
    {
      question:
        "In lab, iodine was used to detect the presence of which plant-based energy storage polysaccharide?",
      answer: "Starch",
      tags: ["lab procedure", "polysaccharides"],
    },
    {
      question:
        "What class of large organic molecules includes fats and oils and is insoluble in water?",
      answer: "Lipids",
      tags: ["lipids"],
    },
    {
      question:
        "What substance can be used to cause a fat to disperse in water?",
      answer: "Emulsifier",
      tags: ["lipids", "solubility"],
    },
    // BIO 110 - Lab 5 Quiz - Matching Terms and Definitions
    {
      question: "What is the definition of an Amino acid?",
      options: [
        "Bonds between amino acids",
        "Molecule with carbon, hydrogen, amino group, carboxyl group, side group (“R” group)",
        "Polymer of amino acids",
        "Molecule with a carbon-carbon bond",
      ],
      answer:
        "Molecule with carbon, hydrogen, amino group, carboxyl group, side group (“R” group)",
      tags: ["biochemistry", "amino acids"],
    },
    {
      question:
        "Which term describes a molecule containing only carbon, oxygen, and hydrogen?",
      options: ["Hydrocarbon", "Organic molecule", "Carbohydrate", "Polar"],
      answer: "Carbohydrate",
      tags: ["biochemistry", "carbohydrates"],
    },
    {
      question: "What is Cellulose?",
      options: [
        "A simple sugar used for energy",
        "Long hydrocarbons with occasional double bonds",
        "Complex carbohydrate that provides structure in plants",
        "Molecule with a carbon-carbon bond",
      ],
      answer: "Complex carbohydrate that provides structure in plants",
      tags: ["biochemistry", "plants"],
    },
    {
      question: "How is a Fat defined in this context?",
      options: [
        "Made of saturated fatty acids",
        "Made of unsaturated fatty acids",
        "A polymer of amino acids",
        "A molecule with only hydrogen and carbon",
      ],
      answer: "Made of saturated fatty acids",
      tags: ["biochemistry", "lipids"],
    },
    {
      question: "What is a Hydrocarbon?",
      options: [
        "Molecule with carbon, oxygen, and hydrogen",
        "Molecule with only hydrogen and carbon",
        "Molecule with a carbon-carbon bond",
        "Bonds between amino acids",
      ],
      answer: "Molecule with only hydrogen and carbon",
      tags: ["biochemistry", "organic chemistry"],
    },
    {
      question: "Which of the following describes an Oil?",
      options: [
        "Made of saturated fatty acids",
        "Complex carbohydrate that provides structure",
        "Long hydrocarbons with occasional double bonds",
        "Molecule with a positively and negatively charged region",
      ],
      answer: "Long hydrocarbons with occasional double bonds",
      tags: ["biochemistry", "lipids"],
    },
    {
      question: "What is an Organic molecule?",
      options: [
        "Molecule with a carbon-carbon bond",
        "Molecule with only hydrogen and carbon",
        "Molecule with a positively charged region",
        "Polymer of amino acids",
      ],
      answer: "Molecule with a carbon-carbon bond",
      tags: ["biochemistry", "organic chemistry"],
    },
    {
      question: "In biochemistry, what does the term Peptide refer to?",
      options: [
        "The R-group of an amino acid",
        "Bonds between amino acids",
        "A complex carbohydrate",
        "A long hydrocarbon chain",
      ],
      answer: "Bonds between amino acids",
      tags: ["biochemistry", "proteins"],
    },
    {
      question: "What does it mean for a molecule to be Polar?",
      options: [
        "It contains only carbon and hydrogen",
        "It is a polymer of amino acids",
        "Molecule with a positively charged region and a negatively charged region",
        "It has a carbon-carbon bond",
      ],
      answer:
        "Molecule with a positively charged region and a negatively charged region",
      tags: ["biochemistry", "chemistry"],
    },
    {
      question: "What is a Protein?",
      options: [
        "Bonds between amino acids",
        "Made of saturated fatty acids",
        "Polymer of amino acids",
        "Complex carbohydrate",
      ],
      answer: "Polymer of amino acids",
      tags: ["biochemistry", "proteins"],
    },
    // BIO 110 - Lab 4 Quiz - Quiz
    {
      question:
        "A substance that CHANGES COLOR in response to a change in pH is called an:",
      options: ["Buffer", "Indicator", "Solvent", "Acid"],
      answer: "Indicator",
      tags: ["pH", "Lab Basics"],
    },
    {
      question:
        "What is the term for substances that resist or LIMIT CHANGE in pH?",
      options: ["Catalyst", "Base", "Buffer", "Indicator"],
      answer: "Buffer",
      tags: ["pH", "Buffers"],
    },
    {
      question: "An ACIDIC solution has (more/less) H+ ions than OH- ions?",
      options: ["More", "Less"],
      answer: "More",
      tags: ["Acidity", "Ions"],
    },
    {
      question:
        "If the H+ ion concentration of an aqueous solution is 1/10000 (10^-4), what is the pH?",
      options: ["10", "4", "1", "14"],
      answer: "4",
      hint: "pH is the negative log of the H+ concentration.",
      tags: ["pH Calculation"],
    },
    {
      question: "A solution with a pH of 4 is considered:",
      options: ["Acidic", "Basic", "Neutral"],
      answer: "Acidic",
      tags: ["pH Scale"],
    },
    {
      question: "What is the pH of PURE WATER?",
      options: ["0", "14", "1", "7"],
      answer: "7",
      tags: ["Neutrality"],
    },
    {
      question:
        "In PURE WATER, the concentration of H+ IONS is _____ the concentration of OH- IONS.",
      options: ["More than", "Less than", "Equal to"],
      answer: "Equal to",
      tags: ["Ions", "Neutrality"],
    },
    {
      question: "The pH of the MOST ACIDIC solutions is:",
      options: ["0", "7", "14", "-1"],
      answer: "0",
      tags: ["pH Scale"],
    },
    {
      question:
        "The most acidic solutions would have the HIGHEST CONCENTRATION of which ions?",
      options: ["H+", "OH-"],
      answer: "H+",
      tags: ["Acidity", "Ions"],
    },
    {
      question: "The MOST BASIC solutions have a pH of:",
      options: ["0", "10", "14", "7"],
      answer: "14",
      tags: ["pH Scale", "Basicity"],
    },
    {
      question: "Which of the following is an example of an ACIDIC solution?",
      options: ["Bleach", "Pure water", "Lime juice", "Baking soda"],
      answer: "Lime juice",
      tags: ["Examples"],
    },
    {
      question: "Which of the following is an example of a BASIC solution?",
      options: ["Lime juice", "Bleach", "Pure water", "Battery acid"],
      answer: "Bleach",
      tags: ["Examples"],
    },
    {
      question: "Which of the following is a NEUTRAL solution?",
      options: ["Lime juice", "Bleach", "Pure water", "Vinegar"],
      answer: "Pure water",
      tags: ["Examples"],
    },
    // BIO 110 - Lab 3 Quiz - Atomic Structure and Elements
    {
      question:
        "What is the term for the smallest particle of an element that retains all its properties?",
      options: ["Molecule", "Atom", "Isotope", "Proton"],
      answer: "Atom",
      tags: ["vocabulary", "atomic-structure"],
    },
    {
      question:
        "The number of protons an atom of an element contains is defined as the:",
      options: [
        "Mass number",
        "Atomic weight",
        "Atomic number",
        "Isotope number",
      ],
      answer: "Atomic number",
      tags: ["periodic-table", "atomic-structure"],
    },
    {
      question:
        "A substance that cannot be converted to any simpler substance through chemical reaction is a(n):",
      options: ["Element", "Compound", "Mixture", "Isotope"],
      answer: "Element",
      tags: ["vocabulary"],
    },
    {
      question:
        "Which term describes atoms with the same atomic number but different mass numbers?",
      options: ["Ions", "Isotopes", "Elements", "Molecules"],
      answer: "Isotopes",
      tags: ["atomic-structure"],
    },
    {
      question: "What is the definition of matter?",
      options: [
        "Anything that has energy",
        "Anything that occupies space and has mass",
        "Anything that can be seen",
        "The sum of protons and neutrons",
      ],
      answer: "Anything that occupies space and has mass",
      tags: ["physics", "chemistry-basics"],
    },
    {
      question:
        "The sum of the protons and neutrons in the nucleus is known as the:",
      options: [
        "Atomic number",
        "Electron count",
        "Mass number",
        "Chemical symbol",
      ],
      answer: "Mass number",
      tags: ["atomic-structure"],
    },
    {
      question:
        "Based on the periodic table, how many protons are in an atom of Carbon (C)?",
      options: ["12", "4", "8", "6"],
      answer: "6",
      hint: "The atomic number of Carbon is 6.",
      tags: ["carbon", "periodic-table"],
    },
    {
      question: "How many electrons does a neutral atom of Carbon have?",
      options: ["6", "12", "2", "8"],
      answer: "6",
      tags: ["carbon", "electrons"],
    },
    {
      question: "In a standard atom of Carbon, how many neutrons are present?",
      options: ["12", "6", "0", "14"],
      answer: "6",
      tags: ["carbon", "neutrons"],
    },
    {
      question:
        "When sketching a Carbon atom, where should the 6 protons and 6 neutrons be located?",
      options: [
        "In the electron shells",
        "Orbiting the atom",
        "In the nucleus",
        "Outside the atom",
      ],
      answer: "In the nucleus",
      hint: "The center of the atom contains the mass.",
      tags: ["sketching", "atomic-structure"],
    },
    // BIO 110 - Lab 2 Quiz - Measurement Units and Conversion
    {
      question: "On which temperature scale does water freeze at 0 degrees?",
      options: ["Fahrenheit", "Celsius", "Kelvin", "Rankine"],
      answer: "Celsius",
      tags: ["temperature", "water"],
    },
    {
      question:
        "When reading a glass graduated cylinder, what is the name of the lowest curved margin of the liquid level?",
      options: ["Concave", "Cylinder line", "Meniscus", "Gradient"],
      answer: "Meniscus",
      hint: "You should always read at eye level from this point.",
      tags: ["equipment", "measurement"],
    },
    {
      question:
        "What is the standard system of measurement used by scientists throughout the world?",
      options: [
        "Imperial System",
        "US Customary System",
        "Metric System",
        "Natural Units",
      ],
      answer: "Metric System",
      tags: ["standards"],
    },
    {
      question: "What is the basic unit of length in the metric system?",
      options: ["Inches", "Feet", "Meters", "Kilometers"],
      answer: "Meters",
      tags: ["length", "units"],
    },
    {
      question: "On a ruler, units representing 1/100 of a meter are called:",
      options: ["Millimeters", "Centimeters", "Decimeters", "Kilometers"],
      answer: "Centimeters",
      tags: ["length", "units"],
    },
    {
      question: "What is the basic unit of mass in the metric system?",
      options: ["Pounds", "Ounces", "Grams", "Tons"],
      answer: "Grams",
      tags: ["mass", "units"],
    },
    {
      question:
        "Which division of 1/1000 of a gram would be used to weigh very small, light items?",
      options: ["Centigrams", "Decigrams", "Kilograms", "Milligrams"],
      answer: "Milligrams",
      tags: ["mass", "units"],
    },
    {
      question: "What is the basic unit of volume in the metric system?",
      options: ["Gallons", "Liters", "Quarts", "Pints"],
      answer: "Liters",
      tags: ["volume", "units"],
    },
    {
      question:
        "What specific unit of volume would you use to express the amount of liquid held in a small glass of juice?",
      options: ["Milliliters", "Kiloliters", "Meters", "Microliters"],
      answer: "Milliliters",
      tags: ["volume", "practical"],
    },
    {
      question: "If a set of keys weighs 50 grams, how many kilograms is that?",
      options: [
        "0.5 kilograms",
        "0.05 kilograms",
        "5.0 kilograms",
        "0.005 kilograms",
      ],
      answer: "0.05 kilograms",
      hint: "Divide the number of grams by 1,000.",
      tags: ["conversion", "mass"],
    },
    {
      question:
        "If the length of one side of a glass cube is 3 cm, what is the total volume of the cube?",
      options: ["9 cm³", "12 cm³", "27 cm³", "81 cm³"],
      answer: "27 cm³",
      hint: "Volume = Length x Width x Height",
      tags: ["volume", "math"],
    },
    // BIO 110 - Lab 1 Quiz - Key Terms and Experiment Variables
    {
      id: "q1",
      question:
        "Variable(s) that is/are held constant during an experiment, to insure only 1 factor is being tested.",
      answer: "Controlled",
      tags: ["Vocabulary", "Scientific Method"],
    },
    {
      id: "q2",
      question:
        "The factor the investigator tests or changes during an experiment; the factor thought to be affecting what is being measured.",
      answer: "Independent",
      tags: ["Vocabulary", "Scientific Method"],
    },
    {
      id: "q3",
      question:
        "A visual representation of data gathered during an experiment.",
      answer: "Graph/Table",
      tags: ["Vocabulary"],
    },
    {
      id: "q4",
      question: "A possible explanation to a problem or answer to a question.",
      answer: "Hypothesis",
      tags: ["Vocabulary", "Scientific Method"],
    },
    {
      id: "q5",
      question:
        "What the investigator measures, observes or records during an experiment; this is being influenced by what is being tested.",
      answer: "Dependent",
      tags: ["Vocabulary", "Scientific Method"],
    },
    {
      id: "q6",
      question:
        "A step-by-step process of answering a question or solving a problem.",
      answer: "Scientific Method",
      tags: ["Vocabulary"],
    },
    {
      id: "q7",
      question:
        "In the sunflower experiment (testing fertilizer effects), what is the dependent variable?",
      answer: "Provides more blooming for sunflowers",
      hint: "It is what you are measuring at the end.",
      tags: ["Application", "Variables"],
    },
    {
      id: "q8",
      question:
        "In the sunflower experiment, what is the independent variable?",
      answer: "Using fertilizer",
      hint: "It is the factor you are changing.",
      tags: ["Application", "Variables"],
    },
    {
      id: "q9",
      question:
        "In the sunflower experiment, what control treatment should be used?",
      answer: "No fertilizer",
      tags: ["Application", "Experimental Design"],
    },
    {
      id: "q10",
      question:
        "Name 1 variable that should be controlled in the sunflower experiment.",
      answer: "Type of fertilizer",
      tags: ["Application", "Experimental Design"],
    },
    // BIO 110 - Chapter 10 Genetics and Molecular Biology Study Guide
    {
      id: "q1",
      question:
        "In regard to a baby’s color blindness, a sex-linked recessive trait, which of the following is true?",
      options: [
        "A son can only inherit it from his father.",
        "A son can inherit color blindness if his mother has the recessive allele.",
        "A daughter cannot be a carrier.",
        "It is passed only through Y chromosomes.",
      ],
      answer:
        "A son can inherit color blindness if his mother has the recessive allele.",
      tags: ["genetics", "sex-linked"],
    },
    {
      id: "q2",
      question:
        "Which researchers conducted the experiment demonstrating that DNA is the genetic material of bacteriophages?",
      options: [
        "Watson and Crick",
        "Franklin and Wilkins",
        "Hershey and Chase",
        "Griffith and Avery",
      ],
      answer: "Hershey and Chase",
      tags: ["history of science", "DNA"],
    },
    {
      id: "q3",
      question: "What is the term for a virus that infects bacteria?",
      answer: "Phage",
      tags: ["microbiology", "viruses"],
    },
    {
      id: "q4",
      question:
        "When a T2 bacteriophage infects an E. coli cell, what part enters the bacterial cytoplasm?",
      options: [
        "The entire virus",
        "Only the protein coat",
        "Only the DNA",
        "The tail fibers",
      ],
      answer: "Only the DNA",
      tags: ["viruses", "DNA"],
    },
    {
      id: "q5",
      question:
        "The entry of bacteriophage genetic material into a bacterium is most similar to:",
      answer: "A drug being injected with a hypodermic needle.",
      tags: ["viruses", "analogy"],
    },
    {
      id: "q6",
      question: "What are the monomers of DNA and RNA?",
      answer: "Nucleotides",
      tags: ["molecular biology", "biochemistry"],
    },
    {
      id: "q7",
      question: "Which of the following statements regarding DNA is false?",
      options: [
        "DNA uses the sugar deoxyribose.",
        "DNA is a double helix.",
        "DNA uses the nitrogenous base uracil.",
        "DNA contains phosphate groups.",
      ],
      answer: "DNA uses the nitrogenous base uracil.",
      hint: "Uracil is specific to RNA.",
      tags: ["DNA structure"],
    },
    {
      id: "q8",
      question: "Which of the following statements regarding RNA is false?",
      options: [
        "RNA is usually single-stranded.",
        "RNA uses the sugar dextrose.",
        "RNA contains adenine.",
        "RNA contains uracil.",
      ],
      answer: "RNA uses the sugar dextrose.",
      hint: "RNA uses ribose sugar.",
      tags: ["RNA structure"],
    },
    {
      id: "q9",
      question:
        "How would the shape of a DNA molecule change if adenine paired with guanine and cytosine paired with thymine?",
      answer: "The DNA molecule would have irregular widths along its length.",
      tags: ["DNA structure", "base-pairing"],
    },
    {
      id: "q10",
      question:
        "True or False: The sequence of nucleotides along the length of a DNA strand is restricted by base-pairing rules.",
      answer: "False",
      hint: "Base-pairing rules apply between strands, not along a single strand's length.",
      tags: ["DNA structure"],
    },
    {
      id: "q11",
      question: "The shape of a DNA molecule is most like a:",
      answer: "Twisted rope ladder.",
      tags: ["DNA structure", "analogy"],
    },
    {
      id: "q12",
      question: "In a DNA double helix, which relationship is always true?",
      answer:
        "The amount of adenine is equal to the amount of thymine, and guanine equals cytosine.",
      tags: ["DNA structure", "Chargaff's rule"],
    },
    {
      id: "q13",
      question: "Which statement best describes DNA replication?",
      answer:
        "It uses each strand of a DNA molecule as a template for the creation of a new strand.",
      tags: ["DNA replication"],
    },
    {
      id: "q14",
      question:
        "If one strand of DNA is CGGTAC, what is the corresponding strand?",
      answer: "GCCATG",
      tags: ["DNA replication", "base-pairing"],
    },
    {
      id: "q15",
      question: "The copying mechanism of DNA is most like:",
      answer: "Using a photographic negative to make a positive image.",
      tags: ["DNA replication", "analogy"],
    },
    {
      id: "q16",
      question:
        "When one DNA molecule is copied to make two, the new DNA contains what percentage of the parent DNA?",
      answer: "50%",
      tags: ["DNA replication", "semi-conservative"],
    },
    {
      id: "q17",
      question:
        "What is the purpose of multiple origins of replication in eukaryotic cells?",
      answer: "To shorten the time necessary for DNA replication.",
      tags: ["DNA replication", "eukaryotes"],
    },
    {
      id: "q18",
      question: "Which enzyme catalyzes the elongation of a new DNA strand?",
      answer: "DNA polymerase",
      tags: ["enzymes", "DNA replication"],
    },
    {
      id: "q19",
      question: "Why does a DNA strand grow only in the 5’ to 3’ direction?",
      answer:
        "Because DNA polymerases can only add nucleotides to the 3’ end of the growing molecule.",
      tags: ["DNA replication", "biochemistry"],
    },
    {
      id: "q20",
      question: "Which option depicts the flow of information in a cell?",
      answer: "DNA → RNA → protein",
      tags: ["central dogma"],
    },
    {
      id: "q21",
      question:
        "What is the transfer of genetic information from DNA to RNA called?",
      answer: "Transcription",
      tags: ["transcription"],
    },
    {
      id: "q22",
      question: "The 'one gene-one polypeptide' theory states that:",
      answer:
        "The function of an individual gene is to dictate the production of a specific polypeptide.",
      tags: ["genetics", "theory"],
    },
    {
      id: "q23",
      question: "The units of the genetic code that specify amino acids are:",
      answer: "Three-nucleotide sequences",
      tags: ["genetic code", "codons"],
    },
    {
      id: "q24",
      question: "How many nucleotides in an RNA molecule make up a codon?",
      answer: "3",
      tags: ["genetic code", "codons"],
    },
    {
      id: "q25",
      question:
        "A 15-nucleotide sequence ending with a stop codon will direct the production of a polypeptide consisting of how many amino acids?",
      answer: "4 amino acids",
      hint: "15 nucleotides / 3 = 5 codons. Subtract 1 for the stop codon.",
      tags: ["translation", "math"],
    },
    {
      id: "q26",
      question:
        "In the genetic code, many amino acids are specified by more than one codon. This means the code is:",
      answer: "Redundant",
      tags: ["genetic code"],
    },
    {
      id: "q27",
      question:
        "Which enzyme catalyzes the linking of RNA nucleotides to form RNA?",
      answer: "RNA polymerase",
      tags: ["enzymes", "transcription"],
    },
    {
      id: "q28",
      question: "What occurs when RNA polymerase attaches to the promoter DNA?",
      answer: "Initiation of a new RNA molecule",
      tags: ["transcription"],
    },
    {
      id: "q29",
      question:
        "What marks the end of a gene and causes transcription to stop?",
      answer: "A terminator",
      tags: ["transcription"],
    },
    {
      id: "q30",
      question:
        "Where do transcription and translation occur in prokaryotic cells?",
      answer: "In the cytoplasm",
      tags: ["prokaryotes", "cell biology"],
    },
    {
      id: "q31",
      question: "Which statement about eukaryotic RNA is true?",
      answer: "Exons are spliced together.",
      hint: "Introns are removed.",
      tags: ["RNA processing", "eukaryotes"],
    },
    {
      id: "q32",
      question: "What takes place during translation?",
      answer:
        "Translation is the process where ribosomes in the cytoplasm read a messenger RNA (mRNA) sequence and use transfer RNA (tRNA) to assemble amino acids into a polypeptide chain.",
      tags: ["translation"],
    },
    {
      id: "q33",
      question: "What is a function of a tRNA molecule?",
      answer: "Joining to only one specific type of amino acid.",
      tags: ["tRNA", "translation"],
    },
    {
      id: "q34",
      question:
        "Which of the following is NOT needed for translation to occur?",
      options: ["tRNA", "Ribosomes", "DNA template", "Sources of energy"],
      answer: "DNA template",
      tags: ["translation"],
    },
    {
      id: "q35",
      question:
        "True or False: The ribosomes of prokaryotes and eukaryotes are identical in structure and function.",
      answer: "False",
      tags: ["ribosomes", "cell biology"],
    },
    {
      id: "q36",
      question:
        "True or False: An mRNA molecule transcribed from DNA is shorter than the genetic message it carries.",
      answer: "False",
      tags: ["mRNA", "transcription"],
    },
    {
      id: "q37",
      question: "What is the correct sequence of events in translation?",
      answer:
        "Codon recognition → peptide bond formation → translocation → termination",
      tags: ["translation"],
    },
    {
      id: "q38",
      question: "Which of the following regarding genetic flow is false?",
      answer: "Transcription occurs in the cytoplasm of eukaryotic cells.",
      hint: "Transcription occurs in the nucleus for eukaryotes.",
      tags: ["central dogma", "eukaryotes"],
    },
    {
      id: "q39",
      question: "Any change in the nucleotide sequence of DNA is called a:",
      answer: "Mutation",
      tags: ["mutation"],
    },
    {
      id: "q40",
      question:
        "Using the sentence 'The dog did not eat', which variation represents a base substitution mutation?",
      answer: "The doe did not eat.",
      tags: ["mutation", "analogy"],
    },
    {
      id: "q41",
      question:
        "Using the sentence 'The dog did not eat', which variation represents a reading frame mutation?",
      answer: "The dod idn ote at.",
      tags: ["mutation", "analogy"],
    },
    {
      id: "q42",
      question:
        "A physical or chemical agent that changes the DNA sequence is a:",
      answer: "Mutagen",
      tags: ["mutation"],
    },
    {
      id: "q43",
      question: "What is the protein coat enclosing a viral genome called?",
      answer: "Capsid",
      tags: ["viruses"],
    },
    {
      id: "q44",
      question:
        "Which feature characterizes the lytic cycle of a viral infection?",
      answer: "The cycle typically leads to the lysis of the host cell.",
      tags: ["viruses", "lytic cycle"],
    },
    {
      id: "q45",
      question:
        "True or False: The lysogenic cycle typically results in the rapid lysis of all infected cells.",
      answer: "False",
      tags: ["viruses", "lysogenic cycle"],
    },
    {
      id: "q46",
      question: "Viral DNA incorporated into host cell DNA is known as a:",
      answer: "Prophage",
      tags: ["viruses", "genetics"],
    },
    {
      id: "q47",
      question: "What is the function of the envelope of a mumps virus?",
      answer: "Helps the virus enter the cell.",
      tags: ["viruses"],
    },
    {
      id: "q48",
      question: "Which statement about herpesviruses is false?",
      answer: "Herpesviruses reproduce inside the host cell’s mitochondria.",
      tags: ["viruses"],
    },
    {
      id: "q49",
      question:
        "True or False: There are many successful ways to rid infected plants of a virus.",
      answer: "False",
      tags: ["viruses", "botany"],
    },
    {
      id: "q50",
      question:
        "True or False: Few new human diseases originate in animals because genetic differences are too great.",
      answer: "False",
      tags: ["viruses", "evolution"],
    },
    {
      id: "q51",
      question: "The 2009 H1N1 flu virus evolved through:",
      answer:
        "Genetic reshuffling of viruses that infect humans, birds, and pigs.",
      tags: ["viruses", "evolution"],
    },
    {
      id: "q52",
      question: "What kind of virus is HIV?",
      answer: "A retrovirus",
      tags: ["viruses", "HIV"],
    },
    {
      id: "q53",
      question:
        "Which enzyme does HIV use to synthesize DNA on an RNA template?",
      answer: "Reverse transcriptase",
      tags: ["enzymes", "HIV"],
    },
    {
      id: "q54",
      question: "HIV does the greatest damage to which cells?",
      answer: "White blood cells",
      tags: ["HIV", "biology"],
    },
    {
      id: "q55",
      question: "How do viroids harm plants?",
      answer: "By altering the plants’ growth.",
      tags: ["viroids", "botany"],
    },
    {
      id: "q56",
      question: "Which statement about prion infection treatment is true?",
      answer: "There is no known treatment or cure for prion infections.",
      tags: ["prions"],
    },
    {
      id: "q57",
      question:
        "Frederick Griffith’s 1920s experiment with pneumonia-causing bacteria demonstrated which process?",
      answer: "Transformation",
      tags: ["genetics", "history of science"],
    },
    {
      id: "q58",
      question: "What is transduction?",
      answer:
        "Occurs when a phage transfers bacterial DNA from one bacterium to another.",
      tags: ["genetics", "bacteria"],
    },
    {
      id: "q59",
      question: "What is conjugation?",
      answer: "The direct transfer of DNA from one bacterium to another.",
      tags: ["genetics", "bacteria"],
    },
    {
      id: "q60",
      question: "Conjugation, transformation, and transduction all serve to:",
      answer: "Increase their genetic diversity.",
      tags: ["genetics", "bacteria"],
    },
    // BIO 110 - Chapter 9 Test Review: Genetics Concepts Explained
    {
      id: "1",
      question:
        "Mendel conducted his most memorable experiments on which of the following?",
      options: ["Peas", "Fruit flies", "Mice", "Moths"],
      answer: "Peas",
      hint: "Think about the garden plants Mendel is famous for studying.",
    },
    {
      id: "2",
      question:
        "Varieties of plants in which self-fertilization produces offspring that are identical to the parents are referred to as?",
      options: ["Hybrid", "Heterozygous", "True-breeding", "Cross-pollinated"],
      answer: "True-breeding",
    },
    {
      id: "3",
      question:
        "The law of segregation of genes during gamete formation applies to which group?",
      options: [
        "Only pea plants",
        "All sexually reproducing organisms",
        "Only animals",
        "Only humans",
      ],
      answer: "All sexually reproducing organisms",
    },
    {
      id: "4",
      question:
        "Where are the alleles of a gene found on homologous chromosomes?",
      options: [
        "At different loci",
        "On the centromere",
        "At the same locus",
        "Only on the X chromosome",
      ],
      answer: "At the same locus",
    },
    {
      id: "5",
      question:
        "If A is dominant to a and B is dominant to b, what is the expected phenotypic ratio of the cross: AaBb x AaBb?",
      options: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
      answer: "9:3:3:1",
      hint: "This is a classic dihybrid cross ratio.",
    },
    {
      id: "6",
      question: "What does Mendel’s law of independent assortment state?",
      options: [
        "Alleles always stay together during gamete formation",
        "Each pair of alleles segregates independently of other pairs during gamete formation",
        "Dominant alleles always mask recessive ones",
        "Genes on the same chromosome always sort together",
      ],
      answer:
        "Each pair of alleles segregates independently of other pairs during gamete formation",
    },
    {
      id: "7",
      question:
        "A testcross is a mating between an individual of unknown genotype and an individual who is?",
      options: [
        "Homozygous dominant",
        "Heterozygous",
        "Homozygous recessive",
        "A carrier",
      ],
      answer: "Homozygous recessive",
    },
    {
      id: "8",
      question:
        "If the probability of having a female is 50% and a male is 50%, what is the probability that the first child is female and the second is male?",
      options: ["50%", "100%", "25%", "75%"],
      answer: "25%",
      hint: "Multiply the probability of the first event by the probability of the second.",
    },
    {
      id: "9",
      question:
        "A carrier of a genetic disorder who does not show symptoms is most likely to be?",
      options: [
        "Homozygous recessive and unable to transmit it",
        "Heterozygous and able to transmit it",
        "Homozygous dominant and able to transmit it",
        "Heterozygous and unable to transmit it",
      ],
      answer: "Heterozygous and able to transmit it",
    },
    {
      id: "10",
      question: "Most genetic disorders in humans are caused by?",
      options: [
        "Dominant alleles",
        "Recessive alleles",
        "Mutations",
        "Environmental factors",
      ],
      answer: "Recessive alleles",
    },
    {
      id: "11",
      question:
        "Most people afflicted with recessive disorders are born to parents who were?",
      options: [
        "Both affected by the disease",
        "Not affected at all by the disease",
        "One affected and one carrier",
        "Homozygous dominant",
      ],
      answer: "Not affected at all by the disease",
    },
    {
      id: "12",
      question:
        "Amniocentesis and chorionic villus sampling allow for which two procedures to test a fetus for abnormalities?",
      options: [
        "Blood typing and ultrasound",
        "Karyotyping and biochemical testing",
        "Gene therapy and surgery",
        "X-rays and MRI",
      ],
      answer: "Karyotyping, biochemical testing",
    },
    {
      id: "13",
      question:
        "If all offspring of a red-flowered and white-flowered plant cross have pink flowers, the allele for red is?",
      options: ["Codominant", "Dominant", "Incompletely dominant", "Recessive"],
      answer: "Incompletely dominant",
    },
    {
      id: "14",
      question:
        "The expression of both alleles for a trait in a heterozygous individual illustrates?",
      options: [
        "Incomplete dominance",
        "Pleiotropy",
        "Codominance",
        "Polygenic inheritance",
      ],
      answer: "Codominance",
    },
    {
      id: "15",
      question: "Sickle-cell disease is an example of?",
      options: [
        "Polygenic inheritance",
        "Pleiotropy",
        "Codominance",
        "Linked genes",
      ],
      answer: "Pleiotropy",
    },
    {
      id: "16",
      question:
        "A situation where a single phenotypic character is determined by the additive effects of two or more genes is?",
      options: [
        "Incomplete dominance",
        "Pleiotropy",
        "Polygenic inheritance",
        "Codominance",
      ],
      answer: "Polygenic inheritance",
    },
    {
      id: "17",
      question: "The individual features of all organisms are the result of?",
      options: [
        "Genetics only",
        "Environment only",
        "Genetics and the environment",
        "Mutation only",
      ],
      answer: "Genetics and the environment",
    },
    {
      id: "18",
      question: "The chromosome theory of inheritance states that?",
      options: [
        "Genes are not located on chromosomes",
        "The behavior of chromosomes during meiosis and fertilization accounts for inheritance patterns",
        "Only sex chromosomes determine traits",
        "Chromosomes do not segregate during gamete formation",
      ],
      answer:
        "The behavior of chromosomes during meiosis and fertilization accounts for patterns of inheritance",
    },
    {
      id: "19",
      question:
        "Genes located close together on the same chromosomes are referred to as?",
      options: [
        "Alleles",
        "Linked genes",
        "Homologous genes",
        "Polygenic genes",
      ],
      answer: "Linked, do not sort independently during meiosis",
    },
    {
      id: "20",
      question:
        "The mechanism that 'breaks' the linkage between linked genes is?",
      options: [
        "Independent assortment",
        "Self-fertilization",
        "Crossing over",
        "Mutation",
      ],
      answer: "Crossing over",
    },
    {
      id: "21",
      question:
        "Which data can map the relative position of three genes on a chromosome?",
      options: [
        "The age of the organism",
        "The size of the chromosomes",
        "The frequencies with which corresponding traits occur together in offspring",
        "The number of alleles per gene",
      ],
      answer:
        "The frequencies with which the corresponding traits occur together in offspring",
    },
    {
      id: "22",
      question: "How many sex chromosomes are in a human gamete?",
      options: ["One", "Two", "23", "46"],
      answer: "One",
    },
    {
      id: "23",
      question:
        "What is meant by the statement that 'male bees are fatherless'?",
      options: [
        "They have no DNA from a queen",
        "They develop from unfertilized eggs",
        "They are clones of the father",
        "They do not have chromosomes",
      ],
      answer: "Male bees develop from unfertilized eggs",
    },
    {
      id: "24",
      question: "Any gene located on a sex chromosome is called a?",
      options: [
        "Linked gene",
        "Recessive gene",
        "Sex-linked gene",
        "Dominant gene",
      ],
      answer: "Is called a sex-linked gene",
    },
    {
      id: "25",
      question:
        "Sex-linked conditions are more common in men than women because?",
      options: [
        "Men have two X chromosomes",
        "Men need only one copy of the recessive allele for expression",
        "The Y chromosome carries more genes",
        "Women cannot be carriers",
      ],
      answer:
        "Men need to inherit only one copy of the recessive allele for the condition to be fully expressed",
    },
    {
      id: "26",
      question:
        "Female inheritance patterns cannot be analyzed simply by studying the X chromosome because?",
      options: [
        "They only have one X chromosome",
        "The X chromosome is obtained from both father and mother",
        "The X chromosome is only for sex determination",
        "X chromosomes do not carry genetic disorders",
      ],
      answer: "The X chromosome is obtained from both father and mother",
    },
    {
      id: "27",
      question:
        "A black striped cat (unknown genotype) mated with a brown marbled cat (bbss) produced 3 brown marbled, 2 brown striped, 2 black marbled, and 3 black striped. What is the genotype of the rescued cat?",
      options: ["BBSS", "BbSs", "BBss", "bbSs"],
      answer: "BbSs",
    },
    {
      id: "28",
      question:
        "A karyotype shows 22 pairs of equal length and one pair with one chromosome longer than the other. What is the organism's sex?",
      options: ["Female", "Male", "Hermaphrodite", "Unknown"],
      answer: "The organism that this cell came from is likely a male",
    },
    {
      id: "29",
      question:
        "In a family pedigree, which finding would rule out an X-linked hypothesis for a newborn boy's disorder?",
      options: [
        "The father has the disorder",
        "The mother is a carrier",
        "Neither parent has the disorder",
        "The grandmother was affected",
      ],
      answer: "Neither parent has the disorder",
    },
    {
      id: "30",
      question:
        "What type of inheritance fits a pedigree where unaffected parents have an affected child?",
      options: [
        "Autosomal dominant",
        "Sex-linked dominant",
        "Autosomal recessive",
        "Incomplete dominance",
      ],
      answer: "Autosomal recessive",
    },
    {
      id: "Bonus 1",
      question:
        "Dr. Smith has recessive deafness (dd), but both parents have normal hearing. What are the parents' genotypes?",
      options: ["DD and DD", "Dd and Dd", "DD and Dd", "dd and dd"],
      answer: "Dd and Dd",
    },
    {
      id: "Bonus 2",
      question:
        "Justin (Type A) and Brittany (Type B) both have parents with Type AB blood. What are the chances their son Theodore has Type A blood?",
      options: ["25%", "50%", "0%", "100%"],
      answer: "0%",
      hint: "Consider the specific alleles Justin and Brittany must have based on their parents.",
    },
    // BIO 110 - Chapter 8 Test Review - Cell Division & Reproduction
    {
      id: "1",
      question:
        "What is the term for the creation of genetically identical offspring by a single parent without sperm and egg?",
      options: [
        "Sexual reproduction",
        "Asexual reproduction",
        "Binary fission",
        "Regeneration",
      ],
      answer: "Asexual reproduction",
      hint: "This process involves only one parent and no gametes.",
    },
    {
      id: "2",
      question:
        "Asexual reproduction requires ____ individual(s), whereas sexual reproduction requires ____ individual(s).",
      options: ["2; 1", "1; 1", "1; 2", "2; 2"],
      answer: "1; 2",
      hint: "Think about the number of parents involved in each process.",
    },
    {
      id: "3",
      question:
        "Why do siblings with the same biological parents typically look similar but not identical?",
      options: [
        "They have identical genes but different environments.",
        "They have a similar but not identical combination of genes.",
        "They are produced via asexual reproduction.",
        "One sibling inherits more genes than the other.",
      ],
      answer: "A similar but not identical combination of genes.",
      hint: "Genetic variation occurs during the formation of gametes.",
    },
    {
      id: "4",
      question:
        "How do eukaryotic chromosomes differ from prokaryotic chromosomes?",
      options: [
        "They are circular in shape.",
        "They are housed in a membrane-enclosed nucleus.",
        "They lack proteins.",
        "They are floating freely in the cytoplasm.",
      ],
      answer: "Are housed in a membrane-enclosed nucleus.",
      hint: "Consider the structural defining feature of a eukaryote.",
    },
    {
      id: "5",
      question: "Sister chromatids are joined together at a:",
      options: ["Centriole", "Centrosome", "Centromere", "Spindle fiber"],
      answer: "Joined together at a centromere.",
      hint: "This is the 'waist' of the duplicated chromosome.",
    },
    {
      id: "6",
      question:
        "In which phase do eukaryotic cells spend most of their cell cycle?",
      options: ["Prophase", "Metaphase", "Interphase", "Telophase"],
      answer: "Interphase.",
      hint: "This is the phase of growth and DNA replication.",
    },
    {
      id: "7",
      question: "Which of the following occurs during interphase?",
      options: [
        "Separation of sister chromatids",
        "Cell growth and duplication of chromosomes",
        "Formation of the mitotic spindle",
        "Cytokinesis",
      ],
      answer: "Cell growth and duplication of the chromosomes.",
      hint: "The cell prepares for division during this time.",
    },
    {
      id: "8",
      question:
        "A cell with a narrow middle separating two bulging ends (looking like a number 8) is likely:",
      options: [
        "In prophase",
        "In S phase",
        "Undergoing cytokinesis",
        "In G1 phase",
      ],
      answer: "Undergoing cytokinesis.",
      hint: "This is the physical division of the cytoplasm.",
    },
    {
      id: "9",
      question:
        "During which phase of mitosis does the mitotic spindle begin to form?",
      options: ["Prophase", "Anaphase", "Metaphase", "Telophase"],
      answer: "Prophase.",
      hint: "It is the first stage of mitosis.",
    },
    {
      id: "10",
      question: "What happens at the start of mitotic anaphase?",
      options: [
        "The nuclear envelope reforms.",
        "Chromosomes line up at the equator.",
        "The centromeres of each chromosome come apart.",
        "DNA starts to replicate.",
      ],
      answer: "The centromeres of each chromosome come apart.",
      hint: "Sister chromatids begin to move to opposite poles.",
    },
    {
      id: "11",
      question:
        "During which phase of mitosis does the nuclear envelope re-form?",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      answer: "Telophase.",
      hint: "This is the final stage of mitosis.",
    },
    {
      id: "12",
      question:
        "Which feature accounts for the difference between plant and animal cell cytokinesis?",
      options: ["Centrioles", "Cell walls", "Mitochondria", "Ribosomes"],
      answer: "Plant cells have cell walls.",
      hint: "Plants must build a new barrier between daughter cells.",
    },
    {
      id: "13",
      question:
        "Cells stopping division once they form a single layer in a petri dish is an example of:",
      options: [
        "Cleavage furrowing",
        "Density-dependent inhibition",
        "Cellular respiration",
        "Nondisjunction",
      ],
      answer: "Density-dependent inhibition.",
      hint: "The physical contact with other cells signals the stop.",
    },
    {
      id: "14",
      question:
        "What is the division status of mature human neurons and muscle cells?",
      options: [
        "They divide rapidly.",
        "They are permanently in a state of nondivision.",
        "They only divide in petri dishes.",
        "They bypass interphase.",
      ],
      answer: "They are permanently in a state of nondivision.",
      hint: "These cells usually enter the G0 phase.",
    },
    {
      id: "15",
      question:
        "If cultured animal cells fail to exhibit density-dependent inhibition, the sample is likely:",
      options: ["Healthy skin", "A muscle fiber", "A cancer", "A plant root"],
      answer: "A cancer.",
      hint: "Cancer cells divide uncontrollably regardless of crowding.",
    },
    {
      id: "16",
      question: "How does a benign tumor differ from a malignant tumor?",
      options: [
        "It is larger.",
        "It does not metastasize.",
        "It contains prokaryotic cells.",
        "It lacks DNA.",
      ],
      answer: "Does not metastasize.",
      hint: "Benign tumors remain at their original site.",
    },
    {
      id: "17",
      question:
        "Two chromosomes that carry genes controlling the same inherited characteristics are called:",
      options: [
        "Sister chromatids",
        "Homologous chromosomes",
        "Heterozygous pairs",
        "Karyotypes",
      ],
      answer: "Homologous chromosomes.",
      hint: "One is inherited from each biological parent.",
    },
    {
      id: "18",
      question:
        "Which describes the behavior of a tetrad during anaphase I of meiosis?",
      options: [
        "It stays together at the center.",
        "It splits into two pairs of sister chromatids, and one pair goes to each pole.",
        "It dissolves into the cytoplasm.",
        "It replicates its DNA again.",
      ],
      answer:
        "It splits into two pairs of sister chromatids, and one pair goes to each pole of the dividing cell.",
      hint: "This is when the chromosome number is halved.",
    },
    {
      id: "19",
      question:
        "Independent orientation of chromosomes at metaphase I results in an increase in:",
      options: [
        "Mutation rates",
        "Possible combinations of characteristics",
        "The size of the nucleus",
        "The number of ribosomes",
      ],
      answer: "Possible combination of characteristics.",
      hint: "This contributes to genetic variety in offspring.",
    },
    {
      id: "20",
      question: "What can karyotyping reveal?",
      options: [
        "The rate of mitosis",
        "Alterations in chromosome number",
        "The specific DNA sequence of a gene",
        "The cell's metabolism",
      ],
      answer: "Can reveal alterations in chromosome number.",
      hint: "It involves a visual display of an individual's chromosomes.",
    },
    {
      id: "21",
      question: "Nondisjunction occurs when:",
      options: [
        "Cells enter interphase.",
        "Members of a chromosome pair fail to separate.",
        "DNA replication stops.",
        "The cell wall breaks down.",
      ],
      answer: "Members of a chromosome pair fail to separate.",
      hint: "This leads to an abnormal number of chromosomes in gametes.",
    },
    {
      id: "22",
      question: "Which type of organism commonly demonstrates polyploidy?",
      options: ["Mammals", "Flowering plants", "Bacteria", "Viruses"],
      answer: "Flowering plants.",
      hint: "Many agricultural crops are polyploid.",
    },
    {
      id: "23",
      question:
        "What is the chromosomal abnormality called if a fragment reattaches in the reverse direction?",
      options: ["Deletion", "Duplication", "Inversion", "Translocation"],
      answer: "Inversion.",
      hint: "Think of the orientation being flipped.",
    },
    {
      id: "24",
      question: "Why is cancer not usually inherited?",
      options: [
        "Cancer cells cannot divide.",
        "Chromosomal changes are usually confined to somatic cells.",
        "It only occurs in gametes.",
        "Natural selection prevents it.",
      ],
      answer:
        "The chromosomal changes in cancer are usually confined to somatic cells.",
      hint: "Only mutations in germ-line cells (egg/sperm) are inherited.",
    },
    {
      id: "25",
      question:
        "If one cell becomes four identical cells with the same DNA amount overnight, what happened?",
      options: [
        "The cell underwent meiosis.",
        "Sexual reproduction occurred.",
        "The cell divided into two, and those two each divided again via asexual reproduction.",
        "A mutation doubled the cell count.",
      ],
      answer:
        "The single cell divided to form two new cells, and the two new cells each divided to form four total cells, all by asexual reproduction.",
      hint: "This describes two rounds of mitotic division.",
    },
    {
      id: "26",
      question:
        "A cell with a cell wall forms a cell plate and divides. What are you observing?",
      options: [
        "Animal cell in prophase",
        "Plant cell in telophase and cytokinesis",
        "Bacteria in binary fission",
        "Yeast cell in budding",
      ],
      answer: "Plant cell; telophase and cytokinesis of mitosis.",
      hint: "A cell plate is specific to plant cytokinesis.",
    },
    {
      id: "27",
      question:
        "How could you determine if an individual has Jacobsen syndrome (deletion on chromosome 11)?",
      options: [
        "Take a blood pressure reading.",
        "Perform a karyotype using white blood cells.",
        "Check their heart rate.",
        "Sequence their entire genome.",
      ],
      answer: "Perform a karyotype using a person’s white blood cells.",
      hint: "Karyotypes can show large-scale chromosomal changes like deletions.",
    },
    {
      id: "28",
      question:
        "What is a common technique to determine if a tissue sample is cancerous?",
      options: [
        "Check for the presence of a cell wall.",
        "Compare its growth in a culture dish against noncancerous cells.",
        "Count the number of mitochondria.",
        "Measure the cell's volume.",
      ],
      answer:
        "Add cells from the tissue sample to a cell culture dish and compare their growth against a sample of noncancerous cells from the patient.",
      hint: "Look for a lack of density-dependent inhibition.",
    },
    {
      id: "29",
      question:
        "If a plant cell is shown forming a cell plate, what event follows immediately?",
      options: [
        "The cell enters S phase.",
        "The cell will divide into two plant cells.",
        "Chromosomes will condense.",
        "The mitotic spindle will form.",
      ],
      answer: "The cell will divide into two plant cells.",
      hint: "Cytokinesis completes the division process.",
    },
    {
      id: "30",
      question:
        "If a diploid cell (2n=4) divides into four cells with abnormal numbers, what occurred?",
      options: [
        "Normal mitosis",
        "Independent assortment",
        "Nondisjunction",
        "Inversion",
      ],
      answer: "Nondisjunction.",
      hint: "Failure of separation leads to unequal chromosome distribution.",
    },
    {
      id: "bonus1",
      question:
        "A cell with several nuclei most likely experienced a failure in which process?",
      options: ["DNA replication", "Mitosis", "Cytokinesis", "Prophase"],
      answer: "Failure of cytokinesis following mitosis.",
      hint: "The nuclei divided, but the cell body did not.",
    },
    {
      id: "bonus2",
      question:
        "What is the stage if a diploid organism has 7 chromosomes, each with sister chromatids?",
      options: [
        "Mitosis metaphase",
        "Meiosis I anaphase",
        "Meiosis II prophase",
        "Meiosis II telophase",
      ],
      answer: "Meiosis II prophase.",
      hint: "The chromosome count is half the original (haploid), but chromatids are still joined.",
    },
    // BIO 110 - Chapter 6 Cellular Respiration Test Notes
    {
      id: "q1",
      question:
        "How do cells capture the energy released by cellular respiration?",
      options: [
        "By producing ATP",
        "By breaking down CO2",
        "By absorbing light",
        "By creating glucose",
      ],
      answer: "By producing ATP",
      tags: ["energy capture", "ATP"],
    },
    {
      id: "q2",
      question:
        "During the energy conversions of photosynthesis and cellular respiration, what happens to some of the energy?",
      options: [
        "It is destroyed",
        "It is lost in the form of heat",
        "It is converted into matter",
        "It is stored as oxygen",
      ],
      answer: "It is lost in the form of heat",
      tags: ["energy conversion", "thermodynamics"],
    },
    {
      id: "q3",
      question: "Which of the following are products of cellular respiration?",
      options: [
        "Oxygen and glucose",
        "Energy to make ATP, carbon dioxide, and water",
        "Pyruvate and light",
        "Starch and glycogen",
      ],
      answer: "Energy to make ATP, carbon dioxide, and water",
      tags: ["products", "chemical reactions"],
    },
    {
      id: "q4",
      question:
        "What is the overall equation for the cellular respiration of glucose?",
      options: [
        "C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + energy",
        "6 CO2 + 6 H2O + light → C6H12O6 + 6 O2",
        "C6H12O6 + 6 CO2 → 6 O2 + 6 H2O",
        "6 O2 + 6 H2O → C6H12O6 + 6 CO2 + energy",
      ],
      answer: "C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + energy",
      tags: ["equation", "glucose"],
    },
    {
      id: "q5",
      question:
        "About what percentage of daily calories do humans use to maintain brain cells and power life-sustaining activities?",
      options: ["10%", "25%", "50%", "75%"],
      answer: "75%",
      tags: ["metabolism", "calories"],
    },
    {
      id: "q6",
      question: "A kilocalorie is defined as:",
      options: [
        "The energy found in one gram of sugar",
        "The quantity of heat needed to raise the temperature of 1 kg of water by 1°C",
        "The amount of ATP produced by one glucose molecule",
        "The speed of an electron in the transport chain",
      ],
      answer:
        "The quantity of heat needed to raise the temperature of 1 kg of water by 1°C",
      tags: ["definitions", "kilocalorie"],
    },
    {
      id: "q7",
      question:
        "In chemical reactions, oxidation is the ______ and reduction is the ______.",
      options: [
        "gain of electrons; loss of electrons",
        "loss of electrons; gain of electrons",
        "gain of protons; loss of protons",
        "loss of oxygen; gain of oxygen",
      ],
      answer: "loss of electrons, gain of electrons",
      tags: ["redox", "chemistry"],
    },
    {
      id: "q8",
      question: "During cellular respiration, what is the role of NADH?",
      options: [
        "It acts as the final electron acceptor",
        "It delivers its electron load to the first electron carrier molecule",
        "It produces water from oxygen",
        "It oxidizes glucose directly",
      ],
      answer:
        "Delivers its electron load to the first electron carrier molecule",
      tags: ["NADH", "electron transport"],
    },
    {
      id: "q9",
      question:
        "A drug that creates holes in both mitochondrial membranes would be harmful because it inhibits:",
      options: [
        "Glycolysis and fermentation",
        "The citric acid cycle and oxidative phosphorylation",
        "Photosynthesis",
        "The hydrolyzing of starch",
      ],
      answer: "The citric acid cycle and oxidative phosphorylation",
      tags: ["mitochondria", "inhibition"],
    },
    {
      id: "q10",
      question:
        "Which metabolic pathway is common to both aerobic and anaerobic metabolism?",
      options: [
        "The citric acid cycle",
        "Oxidative phosphorylation",
        "Glycolysis",
        "Chemiosmosis",
      ],
      answer: "Glycolysis",
      tags: ["metabolism", "glycolysis"],
    },
    {
      id: "q11",
      question: "What is a direct result of glycolysis?",
      options: [
        "The production of CO2 and water",
        "Conversion of glucose to two three-carbon compounds",
        "Synthesis of 32 ATP molecules",
        "The release of light energy",
      ],
      answer: "Conversion of glucose to two three-carbon compounds",
      tags: ["glycolysis", "glucose"],
    },
    {
      id: "q12",
      question:
        "What occurs after glycolysis but before the citric acid cycle?",
      options: [
        "Pyruvate is oxidized",
        "ATP is hydrolyzed",
        "Oxygen is reduced to water",
        "Glucose is formed",
      ],
      answer: "Pyruvate is oxidized",
      tags: ["pyruvate", "metabolic steps"],
    },
    {
      id: "q13",
      question: "Where are the enzymes of the citric acid cycle located?",
      options: [
        "Cytoplasm",
        "Matrix and inner mitochondrial membrane",
        "The stroma of the chloroplast",
        "The outer mitochondrial membrane",
      ],
      answer: "Matrix and inner mitochondrial membrane",
      tags: ["anatomy", "citric acid cycle"],
    },
    {
      id: "q14",
      question:
        "The end products of the citric acid cycle include all of the following EXCEPT:",
      options: ["CO2", "ATP", "FADH2", "Pyruvate"],
      answer: "Pyruvate",
      tags: ["citric acid cycle", "products"],
    },
    {
      id: "q15",
      question: "What happens during chemiosmosis?",
      options: [
        "Glucose is split into two",
        "ATP is synthesized when H+ ions move through a channel in ATP synthase",
        "Oxygen is used to create CO2",
        "Light energy is captured by chlorophyll",
      ],
      answer:
        "ATP is synthesized when H+ ions move through a channel in ATP synthase",
      tags: ["chemiosmosis", "ATP synthase"],
    },
    {
      id: "q16",
      question: "Mitochondrial cristae are an adaptation that:",
      options: [
        "Prevents the leakage of electrons",
        "Increases the space for more copies of the electron transport chain and ATP synthase",
        "Allows the cell to survive without oxygen",
        "Stores glucose for later use",
      ],
      answer:
        "Increases the space for more copies of the electron transport chain and ATP synthase complexes",
      tags: ["anatomy", "mitochondria"],
    },
    {
      id: "q17",
      question:
        "In the electron transport chain, the final electron acceptor is:",
      options: ["Carbon dioxide", "Water", "Oxygen", "NAD+"],
      answer: "Oxygen",
      tags: ["ETC", "oxygen"],
    },
    {
      id: "q18",
      question: "Why do insects die when exposed to the poison Rotenone?",
      options: [
        "They can no longer breathe",
        "They will no longer be able to produce adequate amounts of ATP",
        "It turns their blood into acid",
        "It prevents them from absorbing glucose",
      ],
      answer: "They will no longer be able to produce adequate amounts of ATP",
      tags: ["toxins", "ATP"],
    },
    {
      id: "q19",
      question:
        "Which process produces the most ATP per molecule of glucose oxidized?",
      options: [
        "Lactic acid fermentation",
        "Alcohol fermentation",
        "Aerobic respiration",
        "Anaerobic respiration",
      ],
      answer: "Aerobic respiration",
      tags: ["ATP yield", "respiration"],
    },
    {
      id: "q20",
      question: "In fermentation, ______ is ______.",
      options: [
        "NAD+, reduced",
        "NADH, oxidized",
        "Glucose, synthesized",
        "Pyruvate, oxidized",
      ],
      answer: "NADH, oxidized",
      tags: ["fermentation", "redox"],
    },
    {
      id: "q21",
      question:
        "What is a characteristic of yeast cells in anaerobic conditions?",
      options: [
        "They produce lactic acid",
        "Alcohol is produced after glycolysis",
        "They die immediately without oxygen",
        "They produce more ATP than in aerobic conditions",
      ],
      answer: "Alcohol is produced after glycolysis",
      tags: ["yeast", "fermentation"],
    },
    {
      id: "q22",
      question:
        "Bacteria that are unable to survive in the presence of oxygen are called:",
      options: [
        "Facultative anaerobes",
        "Obligate aerobes",
        "Obligate anaerobes",
        "Photosynthetic bacteria",
      ],
      answer: "Obligate anaerobes",
      tags: ["bacteria", "anaerobes"],
    },
    {
      id: "q23",
      question:
        "To obtain energy from starch and glycogen, the body must first:",
      options: [
        "Convert them to fats",
        "Hydrolyze both starch and glycogen to glucose",
        "Oxidize them directly in the citric acid cycle",
        "Ferment them into alcohol",
      ],
      answer: "Hydrolyzing both starch and glycogen to glucose",
      tags: ["digestion", "energy"],
    },
    {
      id: "q24",
      question:
        "If ATP accumulates in a cell, what happens to cellular respiration?",
      options: [
        "It speeds up to use the ATP",
        "Feedback inhibition slows down cellular respiration",
        "The cell switches to fermentation",
        "The cell dies from energy overload",
      ],
      answer: "Feedback inhibition slows down cellular respiration",
      tags: ["regulation", "ATP"],
    },
    {
      id: "q25",
      question:
        "Which of the following is true regarding slow-twitch muscle fibers in marathon runners?",
      options: [
        "They function without mitochondria",
        "They have lots of mitochondria to make ATP aerobically",
        "They primarily use alcohol fermentation",
        "They are designed for short bursts of speed",
      ],
      answer:
        "Slow-twitch fibers have lots of mitochondria to make ATP aerobically",
      tags: ["muscles", "biology"],
    },
    {
      id: "bonus1",
      question:
        "If a child has a disease where mitochondria are missing from skeletal muscle, why do the muscles still function?",
      options: [
        "They use light for energy",
        "The muscles contain large amounts of lactate following mild exercise",
        "They use oxygen more efficiently than normal cells",
        "They do not require ATP to move",
      ],
      answer:
        "Muscles contain large amounts of lactate following even mild physical exercise",
      tags: ["pathology", "fermentation"],
    },
    {
      id: "bonus2",
      question:
        "According to the Pasteur Effect, why do yeasts consume glucose at a higher rate under anaerobic conditions?",
      options: [
        "Glucose is more delicious without oxygen",
        "Less ATP is made under anaerobic conditions, so more glucose must be consumed",
        "Anaerobic conditions speed up enzymes",
        "Yeasts grow much larger without oxygen",
      ],
      answer:
        "Less ATP is made under anaerobic conditions, so more glucose must be consumed to produce an equivalent amount of ATP",
      tags: ["Pasteur Effect", "ATP yield"],
    },
    // BIO 110 - Chapter 4 Test Review: Light Microscopes & Cell Function
    {
      id: "q1",
      question: "What is the primary function of a light microscope?",
      options: [
        "To view the internal atomic structure of dead cells",
        "To use light and glass lenses to magnify an image",
        "To use electron beams to create 3D images",
        "To measure the chemical composition of the cell wall",
      ],
      answer: "To use light and glass lenses to magnify an image",
      tags: ["microscopy"],
    },
    {
      id: "q2",
      question: "In microscopy, 'resolution' is defined as the:",
      options: [
        "Ability to increase the size of an object",
        "Ability of an optical instrument to show two close objects as separate",
        "Clearance of the lenses used in the microscope",
        "Total magnification power of the ocular lens",
      ],
      answer:
        "Ability of an optical instrument to show two close objects as separate",
      tags: ["microscopy"],
    },
    {
      id: "q3",
      question:
        "A scientist wants to examine living respiratory cells using their tiny hairs (cilia) to move mucus. Which instrument is best and why?",
      options: [
        "Scanning electron microscope for high detail",
        "Transmission electron microscope to see internal organelles",
        "A light microscope, because it allows observations of whole, live cells",
        "A magnifying glass for simple observation",
      ],
      answer:
        "A light microscope, because it allows observations of whole, live cells",
      tags: ["microscopy", "cell-function"],
    },
    {
      id: "q4",
      question: "According to cell theory:",
      options: [
        "All cells have a nucleus",
        "Living things are composed of cells and all cells come from other cells",
        "Cells arise spontaneously from non-living matter",
        "All cells are roughly the same size",
      ],
      answer:
        "Living things are composed of cells and all cells come from other cells",
      tags: ["cell-theory"],
    },
    {
      id: "q5",
      question: "What happens as a cell increases in size?",
      options: [
        "The surface area increases more than the volume",
        "The volume increases proportionally more than the surface area",
        "The surface area and volume increase at the exact same rate",
        "The cell's ability to move nutrients increases",
      ],
      answer: "The volume increases proportionally more than the surface area",
      hint: "Think about the surface area-to-volume ratio.",
      tags: ["cell-size"],
    },
    {
      id: "q6",
      question:
        "Which statement correctly describes phospholipid heads in the plasma membrane?",
      options: [
        "They are hydrophobic and face inward",
        "They are hydrophilic and face toward the aqueous solution on both sides",
        "They are located only on the outside of the membrane",
        "They are responsible for protein synthesis",
      ],
      answer:
        "They are hydrophilic and face toward the aqueous solution on both sides",
      tags: ["plasma-membrane"],
    },
    {
      id: "q7",
      question: "Which type of cells lack a membrane-enclosed nucleus?",
      options: ["Eukaryotic", "Plant cells", "Prokaryotic", "Animal cells"],
      answer: "Prokaryotic",
      tags: ["cell-types"],
    },
    {
      id: "q8",
      question:
        "What is the primary benefit of the membranous compartmentalization of a cell?",
      options: [
        "It allows the cell to grow to an infinite size",
        "It allows different chemical conditions to be maintained in different parts of the cell",
        "It makes the cell more rigid",
        "It prevents the cell from using energy",
      ],
      answer:
        "Allows different chemical conditions to be maintained in different parts of the cell",
      tags: ["organelles"],
    },
    {
      id: "q9",
      question:
        "You observe a cell under a microscope and see both cell walls and membrane-bound organelles. You conclude these are:",
      options: [
        "Animal cells",
        "Bacterial cells",
        "Plant cells",
        "Prokaryotic cells",
      ],
      answer: "Plant cells",
      tags: ["cell-types"],
    },
    {
      id: "q10",
      question: "The primary function of the nucleus is to:",
      options: [
        "Produce ATP",
        "Contain DNA",
        "Store lipids",
        "Synthesize carbohydrates",
      ],
      answer: "Contain DNA",
      tags: ["organelles"],
    },
    {
      id: "q11",
      question: "What is the function of the nucleolus?",
      options: [
        "To manufacture polypeptides",
        "To package proteins for export",
        "To break down toxins",
        "To duplicate DNA",
      ],
      answer: "To manufacture polypeptides",
      tags: ["organelles"],
    },
    {
      id: "q12",
      question: "During protein synthesis, mRNA is used to:",
      options: [
        "Create DNA strands",
        "Act as a structural component of the cell wall",
        "Be translated by ribosomes into amino acid sequences",
        "Store energy for the cell",
      ],
      answer: "Be translated by ribosomes into amino acid sequences",
      tags: ["protein-synthesis"],
    },
    {
      id: "q13",
      question: "The endomembrane system includes all of the following EXCEPT:",
      options: [
        "Golgi apparatus",
        "Endoplasmic reticulum",
        "Peroxisome",
        "Lysosome",
      ],
      answer: "Peroxisome",
      tags: ["organelles"],
    },
    {
      id: "q14",
      question:
        "A plasma cell that produces thousands of proteins (antibodies) per second would have a very prominent:",
      options: [
        "Smooth ER",
        "Rough endoplasmic reticulum",
        "Contractile vacuole",
        "Flagella",
      ],
      answer: "Rough endoplasmic reticulum",
      tags: ["organelles", "protein-synthesis"],
    },
    {
      id: "q15",
      question: "Secretory proteins are defined as proteins that are:",
      options: [
        "Kept permanently in the nucleus",
        "Used only within the mitochondria",
        "Released from the cell through the plasma membrane",
        "Used to build the cytoskeleton",
      ],
      answer: "Released from the cell through the plasma membrane",
      tags: ["protein-synthesis"],
    },
    {
      id: "q16",
      question: "The Golgi apparatus functions to:",
      options: [
        "Store, modify, and package proteins",
        "Perform cellular respiration",
        "Digestion of cellular waste",
        "Synthesize lipids",
      ],
      answer: "Store, modify, and package proteins",
      tags: ["organelles"],
    },
    {
      id: "q17",
      question: "Tay-Sachs disease is characterized by:",
      options: [
        "The inability to produce insulin",
        "An accumulation of lipids in brain cells",
        "A failure in the mitochondrial respiratory chain",
        "The overproduction of mucus in the lungs",
      ],
      answer: "An accumulation of lipids in brain cells",
      tags: ["diseases"],
    },
    {
      id: "q18",
      question: "What is the role of contractile vacuoles in certain protists?",
      options: [
        "To store food",
        "To perform photosynthesis",
        "To prevent cells from bursting by expelling excess water",
        "To house DNA",
      ],
      answer:
        "Prevent cells from bursting as a result of the influx of excess water",
      tags: ["organelles"],
    },
    {
      id: "q19",
      question:
        "Which is the correct order of structures insulin passes through from production to exit?",
      options: [
        "Golgi, Rough ER, Vesicle, Membrane",
        "Rough ER, Transport Vesicles, Golgi, Transport Vesicles, Cell Membrane",
        "Nucleus, Ribosome, Golgi, Membrane",
        "Smooth ER, Lysosome, Golgi, Membrane",
      ],
      answer:
        "Rough ER, transport vesicles, Golgi apparatus, transport vesicles, cell membrane",
      tags: ["protein-pathway"],
    },
    {
      id: "q20",
      question: "What is the function of the mitochondria?",
      options: [
        "Photosynthesis",
        "Cellular respiration",
        "Lipid storage",
        "Movement",
      ],
      answer: "Cellular respiration",
      tags: ["organelles"],
    },
    {
      id: "q21",
      question: "What is the function of chloroplasts?",
      options: [
        "Protein folding",
        "Photosynthesis",
        "Waste breakdown",
        "Cellular division",
      ],
      answer: "Photosynthesis",
      tags: ["organelles"],
    },
    {
      id: "q22",
      question: "The Endosymbiosis Hypothesis suggests that:",
      options: [
        "Cells evolved from volcanic vents",
        "A small cell lived inside a larger cell to the benefit of both",
        "Multicellular organisms evolved from single cells",
        "Viruses are the ancestors of bacteria",
      ],
      answer:
        "A small cell lived inside a larger cell to the benefit from the other",
      tags: ["evolution"],
    },
    {
      id: "q23",
      question: "How do microfilaments differ from microtubules?",
      options: [
        "Microfilaments are for storage, microtubules are for movement",
        "Microfilaments are composed of actin, microtubules are composed of tubulin",
        "Microtubules are smaller than microfilaments",
        "Microfilaments are only found in plant cells",
      ],
      answer:
        "Are mainly composed of actin, whereas microtubules are composed of tubulin",
      tags: ["cytoskeleton"],
    },
    {
      id: "q24",
      question: "Cilia differ from flagella because cilia are usually:",
      options: [
        "Longer and fewer in number",
        "More numerous and shorter than flagella",
        "Only used for eating",
        "Found only on bacteria",
      ],
      answer: "Cilia are typically more numerous and shorter than flagella",
      tags: ["cytoskeleton"],
    },
    {
      id: "q25",
      question: "What is the role of dynein feet?",
      options: [
        "They anchor the cell to the extracellular matrix",
        "They cause movement in cilia/flagella by pulling at adjacent microtubule doublets",
        "They synthesize proteins in the cytoplasm",
        "They help the cell wall maintain its shape",
      ],
      answer:
        "Are found on microtubules in cilia and flagella and cause movement by grabbing and pulling at adjacent microtubule doublets",
      tags: ["cytoskeleton"],
    },
    {
      id: "q26",
      question:
        "The extracellular matrix binds to ________ in the plasma membrane via glycoproteins.",
      options: ["Phospholipids", "Integrins", "Ribosomes", "Cellulose"],
      answer: "Integrins",
      tags: ["plasma-membrane"],
    },
    {
      id: "q27",
      question: "Skin cells are fastened into strong sheets by:",
      options: [
        "Gap junctions",
        "Tight junctions",
        "Plasmodesmata",
        "Microvilli",
      ],
      answer: "Tight junctions",
      tags: ["cell-junctions"],
    },
    {
      id: "q28",
      question:
        "Which structures are associated with the breakdown of harmful substances?",
      options: ["Peroxisomes", "Ribosomes", "Nucleoli", "Chloroplasts"],
      answer: "Peroxisomes",
      tags: ["organelles"],
    },
    {
      id: "q29",
      question:
        "Which cellular structure makes GPCRs (receptor proteins found in the plasma membrane)?",
      options: [
        "Free ribosomes",
        "Mitochondria",
        "Golgi apparatus",
        "Lysosomes",
      ],
      answer: "Golgi apparatus",
      tags: ["organelles"],
    },
    {
      id: "q30",
      question:
        "Which cellular structure makes Hexokinase (an enzyme used in the cytoplasm)?",
      options: ["Free ribosomes", "Rough ER", "Smooth ER", "Nucleolus"],
      answer: "Free ribosomes",
      tags: ["organelles"],
    },
    {
      id: "b1",
      question:
        "BONUS: A drug that interferes with microtubule formation would most likely disrupt:",
      options: [
        "Protein synthesis",
        "The movement of sperm cells",
        "Cell wall construction",
        "ATP production",
      ],
      answer: "The movements of sperm cells",
      tags: ["bonus"],
    },
    {
      id: "b2",
      question:
        "BONUS: If a chemical paralyzes the contractile vacuoles of a protist, what happens to the organism?",
      options: [
        "It will shrink and dehydrate",
        "It will stop producing proteins",
        "It will gain water and burst",
        "It will turn into a plant cell",
      ],
      answer: "Have gained water and burst",
      tags: ["bonus"],
    },
    // Chapter 3 Test Notes: Organic Compounds & Proteins
    {
      question: "Lactose intolerance is defined as the inability to:",
      options: [
        "Produce lactose",
        "Digest lactose",
        "Absorb glucose",
        "Produce insulin",
      ],
      answer: "Digest lactose",
      tags: ["Lactose", "Digestive System"],
    },
    {
      question:
        "By definition, all organic compounds must contain which element?",
      options: ["Nitrogen", "Oxygen", "Carbon", "Phosphorus"],
      answer: "Carbon",
      tags: ["Organic Chemistry"],
    },
    {
      question: "Propanol and isopropanol are isomers. This means they have:",
      options: [
        "The same molecular formula, but different chemical properties",
        "Different molecular formulas, but the same chemical properties",
        "The same number of bonds, but different elements",
        "The same chemical properties, but different masses",
      ],
      answer: "The same molecular formula, but different chemical properties",
      tags: ["Isomers", "Chemistry"],
    },
    {
      question: "Which of the following represents an amino group?",
      options: ["-COOH", "-OH", "-NH2", "-PO4"],
      answer: "-NH2",
      tags: ["Functional Groups"],
    },
    {
      question:
        "Which molecule contains both a carboxyl group and an amino group?",
      options: [
        "Triglycerides",
        "Amino acids",
        "Monosaccharides",
        "Nucleotides",
      ],
      answer: "Amino acids",
      tags: ["Amino Acids", "Functional Groups"],
    },
    {
      question:
        "The results of dehydration reactions can be reversed by which process?",
      options: [
        "Hydrogenation",
        "Polymerization",
        "Hydrolysis reactions",
        "Oxidation",
      ],
      answer: "Hydrolysis reactions",
      tags: ["Chemical Reactions"],
    },
    {
      question: "A molecule with the formula C55H110O55 is most likely a:",
      options: ["Protein", "Lipid", "Polysaccharide", "Nucleic acid"],
      answer: "Polysaccharide",
      hint: "Note the 1:2:1 ratio of Carbon, Hydrogen, and Oxygen.",
      tags: ["Carbohydrates"],
    },
    {
      question: "How does a disaccharide form?",
      options: [
        "Two monosaccharides join by hydrolysis",
        "Two starches join by dehydration reactions",
        "Two monosaccharides join by dehydration reactions",
        "A lipid and a sugar join",
      ],
      answer: "Two monosaccharides join by dehydration reactions",
      tags: ["Carbohydrates"],
    },
    {
      question: "Which of the following lists contains ONLY polysaccharides?",
      options: [
        "Sucrose, starch, and fructose",
        "Cellulose, starch, and glycogen",
        "Glucose, glycogen, and cellulose",
        "Starch, amino acids, and glycogen",
      ],
      answer: "Cellulose, starch, and glycogen",
      tags: ["Carbohydrates"],
    },
    {
      question:
        "In which forms are carbohydrates stored in animals and plants, respectively?",
      options: [
        "Starch, glycogen",
        "Glycogen, cellulose",
        "Glycogen, starch",
        "Cellulose, starch",
      ],
      answer: "Glycogen, starch",
      tags: ["Carbohydrates"],
    },
    {
      question:
        "How can an oil be converted into a substance that is solid at room temperature?",
      options: [
        "Adding hydrogens to decrease double bonds",
        "Removing hydrogens to increase double bonds",
        "Adding carbon chains",
        "Cooling it until it denatures",
      ],
      answer:
        "Adding hydrogens, decreasing the number of double bonds in the molecules",
      tags: ["Lipids"],
    },
    {
      question: "What specific feature of fats makes them hydrophobic?",
      options: [
        "Polar carboxyl groups",
        "Nonpolar hydrocarbon chains",
        "The presence of glycerol",
        "Their solid state at room temperature",
      ],
      answer: "Fats have nonpolar hydrocarbon chains",
      tags: ["Lipids"],
    },
    {
      question:
        "Fatty acids containing double bonds between some of their carbons are:",
      options: ["Saturated", "Unsaturated", "Hydrogenated", "Phospholipids"],
      answer: "Unsaturated",
      tags: ["Lipids"],
    },
    {
      question:
        "To lower the risk of atherosclerosis, one should prefer olive oil that is:",
      options: [
        "Solid at room temperature",
        "Liquid at room temperature",
        "Hydrogenated",
        "High in trans fats",
      ],
      answer: "Liquid at room temperature",
      tags: ["Health", "Lipids"],
    },
    {
      question: "The major type of lipid found in cell membranes is:",
      options: [
        "Triglycerides",
        "Cholesterol",
        "Phospholipids",
        "Saturated fat",
      ],
      answer: "Phospholipids",
      tags: ["Lipids", "Cell Biology"],
    },
    {
      question: "Amino acids are distinguished from one another by:",
      options: [
        "The number of amino groups",
        "The type of sugar they contain",
        "The chemical properties of their R groups",
        "The length of their backbone",
      ],
      answer: "The chemical properties of their R groups",
      tags: ["Proteins", "Amino Acids"],
    },
    {
      question: "Proteins differ from one another primarily because:",
      options: [
        "The peptide bonds are different",
        "The sequence of amino acids in the polypeptide chain differs",
        "The number of nitrogen atoms varies significantly",
        "Some contain carbon and others do not",
      ],
      answer:
        "The sequence of amino acids in the polypeptide chain differs from protein to protein",
      tags: ["Proteins"],
    },
    {
      question: "Glucose is to starch as ________ are to protein.",
      options: ["Nucleotides", "Amino acids", "Fatty acids", "Monosaccharides"],
      answer: "Amino acids",
      tags: ["Proteins", "Carbohydrates"],
    },
    {
      question: "Which of the following is classified as a protein?",
      options: ["Starch", "Cholesterol", "Enzymes", "DNA"],
      answer: "Enzymes",
      tags: ["Proteins"],
    },
    {
      question: "Where are structural proteins typically found in the body?",
      options: [
        "Muscles and blood",
        "Hair and tendons",
        "Enzymes and hormones",
        "DNA and RNA",
      ],
      answer: "Are found in hair and tendons",
      tags: ["Proteins"],
    },
    {
      question: "The primary structure of a protein is defined as:",
      options: [
        "The folding into alpha helices",
        "The overall three-dimensional shape",
        "The amino acid sequence of the polypeptide chain",
        "The bonding of two or more polypeptide chains",
      ],
      answer: "The amino acid sequence of the polypeptide chain",
      tags: ["Proteins", "Structure"],
    },
    {
      question: "The tertiary structure of a polypeptide refers to:",
      options: [
        "The sequence of amino acids",
        "The overall three-dimensional structure",
        "Local folding patterns",
        "The presence of multiple subunits",
      ],
      answer: "The overall three-dimensional structure",
      tags: ["Proteins", "Structure"],
    },
    {
      question: "How do cells use genes to build proteins?",
      options: [
        "DNA is converted directly into protein",
        "RNA directs the synthesis of DNA, which builds protein",
        "DNA directs the synthesis of an RNA molecule, which is used to build a protein",
        "Amino acids are converted into DNA",
      ],
      answer:
        "The genes in DNA direct the synthesis of an RNA molecule, which is used to build a protein",
      tags: ["Genetics", "Proteins"],
    },
    {
      question: "Which option correctly pairs a polymer and its monomer?",
      options: [
        "DNA, nucleotides",
        "Protein, monosaccharides",
        "Starch, fatty acids",
        "RNA, amino acids",
      ],
      answer: "DNA, nucleotides",
      tags: ["Molecules"],
    },
    {
      question: "DNA differs from RNA because DNA:",
      options: [
        "Is single-stranded",
        "Contains uracil in place of thymine",
        "Contains thymine in place of uracil",
        "Does not contain a phosphate group",
      ],
      answer: "Contains thymine in place of uracil",
      tags: ["Nucleic Acids"],
    },
    {
      question:
        "If you followed a 100% vegan diet, which molecule would you never consume?",
      options: ["Starch", "Cholesterol", "Cellulose", "Phospholipids"],
      answer: "Cholesterol",
      tags: ["Lipids", "Nutrition"],
    },
    {
      question:
        "Which meal is high in fiber, low in saturated fats, and high in unsaturated fats?",
      options: [
        "Steak and baked potato",
        "Spaghetti noodles with olive oil and broccoli",
        "Cheese pizza with pepperoni",
        "Fried chicken and biscuits",
      ],
      answer: "Spaghetti noodles with olive oil and broccoli",
      tags: ["Nutrition"],
    },
    {
      question:
        "Which type of fat is associated with the highest risk of heart disease?",
      options: [
        "Saturated fat",
        "Unsaturated fat",
        "Trans fat",
        "Phospholipids",
      ],
      answer: "Trans fat",
      tags: ["Health", "Lipids"],
    },
    {
      question: "A nucleotide is composed of which three components?",
      options: [
        "An amino group, a carboxyl group, and an R group",
        "A sugar, a nitrogenous base, and a phosphate group",
        "Glycerol and three fatty acids",
        "Carbon, Hydrogen, and Oxygen",
      ],
      answer: "A sugar, a nitrogenous base, and a phosphate group",
      tags: ["Nucleic Acids"],
    },
    {
      question: "What is the correct flow of information in gene expression?",
      options: [
        "RNA -> DNA -> Protein",
        "Protein -> RNA -> DNA",
        "DNA -> RNA -> Protein",
        "DNA -> Protein -> RNA",
      ],
      answer: "DNA – RNA – Protein",
      tags: ["Genetics"],
    },
    {
      question:
        "Bonus: What happens if phospholipids are dropped into a cup of vegetable oil?",
      options: [
        "They dissolve completely",
        "They form a sphere with the heads on the outside",
        "They form a sphere with the heads on the inside",
        "They form a flat layer on the bottom",
      ],
      answer:
        "The phospholipids would form a sphere with the heads on the inside",
      hint: "Think about where the hydrophobic tails would want to be in an oil environment.",
      tags: ["Lipids", "Phospholipids"],
    },
    {
      question: "Bonus: How are two amino acids attached together?",
      options: [
        "Carboxyl group to carboxyl group",
        "Amino group to amino group",
        "Amino group to carboxyl group",
        "R group to R group",
      ],
      answer: "Amino group to carboxyl group",
      tags: ["Proteins", "Amino Acids"],
    },
    // Chapter 1 Test Review - Cellular Activities & Ecosystems
    {
      id: "1",
      question:
        "Which of the following statements regarding a common cellular activity is FALSE?",
      options: [
        "New cells are derived from cellular components like organelles.",
        "Cells arise from pre-existing cells.",
        "Cell division is necessary for growth and repair.",
        "Genetic information is passed from parent cells to daughter cells.",
      ],
      answer: "New cells are derived from cellular components like organelles.",
      hint: "Consider the core tenets of Cell Theory.",
      tags: ["Cell Theory", "Cellular Activities"],
    },
    {
      id: "2",
      question:
        "Which sequence correctly lists the hierarchy of life from LEAST INCLUSIVE to MOST INCLUSIVE?",
      options: [
        "Organism, population, community, ecosystem, molecule, organelle, cell.",
        "Molecule, organelle, cell, tissue, organ, organ system, organism, population, community, ecosystem.",
        "Ecosystem, community, population, organism, organ system, organ, tissue, cell, organelle, molecule.",
        "Cell, tissue, organ, organism, molecule, organelle, population, community, ecosystem.",
      ],
      answer:
        "Molecule, organelle, cell, tissue, organ, organ system, organism, population, community, ecosystem.",
      hint: "Start with the smallest chemical level and build up to global systems.",
      tags: ["Biological Hierarchy", "Organization of Life"],
    },
    {
      id: "3",
      question:
        "Which statement BEST describes the relationship between a tissue and an organ system?",
      options: [
        "An organ system is made of only one type of tissue.",
        "Tissues are larger than organ systems.",
        "An organ system includes tissues.",
        "There is no direct relationship between tissues and organ systems.",
      ],
      answer: "An organ system includes tissues.",
      hint: "Think about how smaller units build into larger, more complex structures.",
      tags: ["Biological Hierarchy"],
    },
    {
      id: "4",
      question:
        "The tree in your backyard is home to two cardinals, a colony of ants, a wasp’s nest, two squirrels, and millions of bacteria. Together, ALL OF THESE ORGANISMS REPRESENT a?",
      options: ["Population", "Ecosystem", "Biosphere", "Community"],
      answer: "Community",
      hint: "Focus on the collection of different species living in the same area.",
      tags: ["Ecosystems", "Ecology"],
    },
    {
      id: "5",
      question:
        "What levels of organization are represented in a hamburger (ground-up beef muscle)?",
      options: [
        "Organism and population",
        "Organelle, cell, and tissue",
        "Organ system and organism",
        "Molecule and organelle only",
      ],
      answer: "Organelle, cell, and tissue",
      hint: "Muscle is a specific group of similar cells working together.",
      tags: ["Biological Hierarchy"],
    },
    {
      id: "6",
      question: "Which statement about ecosystems is FALSE?",
      options: [
        "Plants are typically the producers.",
        "Bacteria and fungi recycle energy within an ecosystem.",
        "Nutrients cycle through an ecosystem.",
        "Energy enters as sunlight.",
      ],
      answer: "Bacteria and fungi recycle energy within an ecosystem.",
      hint: "Does energy cycle like nutrients, or does it flow one-way?",
      tags: ["Ecosystems", "Energy Flow"],
    },
    {
      id: "7",
      question: "In an ecosystem, ENERGY?",
      options: [
        "Cycles between consumers and producers.",
        "Typically flows from producers to a series of consumers.",
        "Is created by decomposers.",
        "Remains constant and never leaves the system.",
      ],
      answer: "Typically flows from producers to a series of consumers.",
      hint: "Energy flow is a one-way street starting with sunlight.",
      tags: ["Ecosystems", "Energy Flow"],
    },
    {
      id: "8",
      question: "Which statement about genetics is TRUE?",
      options: [
        "DNA is only found in eukaryotic cells.",
        "Differences among organisms reflect different nucleotide sequences in their DNA.",
        "All organisms have the exact same DNA sequence.",
        "Genetics does not play a role in evolution.",
      ],
      answer:
        "Differences among organisms reflect different nucleotide sequences in their DNA.",
      hint: "The 'alphabet' of DNA is the same, but the 'words' differ.",
      tags: ["Genetics", "DNA"],
    },
    {
      id: "9",
      question: "Which statement about bacteria is TRUE?",
      options: [
        "Bacteria belong to the domain Eukarya.",
        "Bacteria are multicellular organisms.",
        "Bacteria are in a domain of their own.",
        "Bacteria do not have DNA.",
      ],
      answer: "Bacteria are in a domain of their own.",
      hint: "Think about the three-domain system of classification.",
      tags: ["Classification", "Bacteria"],
    },
    {
      id: "10",
      question: "Members of the kingdom Animalia?",
      options: [
        "Are primarily decomposers.",
        "Can obtain their food by eating other organisms.",
        "Are mostly single-celled.",
        "Perform photosynthesis.",
      ],
      answer: "Can obtain their food by eating other organisms.",
      hint: "Animals are ingestive heterotrophs.",
      tags: ["Classification", "Kingdom Animalia"],
    },
    {
      id: "11",
      question: "The kingdom Fungi includes species?",
      options: [
        "That are all photosynthetic.",
        "That obtain food by decomposing dead organisms and absorbing the nutrients.",
        "That are strictly autotrophic.",
        "That belong to the domain Bacteria.",
      ],
      answer:
        "That obtain food by decomposing dead organisms and absorbing the nutrients.",
      hint: "Fungi act as nature's recyclers.",
      tags: ["Classification", "Kingdom Fungi"],
    },
    {
      id: "12",
      question: "Which of the following is a group within the domain Eukarya?",
      options: ["Archaea", "Bacteria", "Fungi", "Viruses"],
      answer: "Fungi",
      hint: "This domain includes organisms with complex cells containing a nucleus.",
      tags: ["Classification", "Domain Eukarya"],
    },
    {
      id: "13",
      question: "Organisms belonging to the kingdom Plantae?",
      options: [
        "Are all decomposers.",
        "Are photosynthetic.",
        "Are primarily unicellular.",
        "Lack a cell wall.",
      ],
      answer: "Are photosynthetic.",
      hint: "Plants produce their own food using sunlight.",
      tags: ["Classification", "Kingdom Plantae"],
    },
    {
      id: "14",
      question:
        "The broad teeth of horses for grinding and the pointed teeth of lions for ripping illustrate?",
      options: [
        "Acquired characteristics during a lifetime.",
        "A lack of evolutionary change.",
        "A result of natural selection as well as the connection between form and function.",
        "Random mutations with no survival benefit.",
      ],
      answer:
        "A result of natural selection as well as the connection between form and function.",
      hint: "Anatomy often matches the lifestyle of the organism.",
      tags: ["Evolution", "Natural Selection"],
    },
    {
      id: "15",
      question:
        "Which statement is NOT consistent with Darwin’s theory of natural selection?",
      options: [
        "Population size is limited by resources.",
        "Individual organisms experience genetic change during their life spans to better fit their environment.",
        "Individuals with favorable traits are more likely to survive.",
        "Evolution occurs over many generations.",
      ],
      answer:
        "Individual organisms experience genetic change during their life spans to better fit their environment.",
      hint: "Evolution happens to populations over time, not to individuals in their lifetime.",
      tags: ["Evolution", "Natural Selection"],
    },
    {
      id: "16",
      question:
        "If an antibiotic kills 99.9% of a bacterial population, you would expect the next generation to be?",
      options: [
        "Identical to the previous generation.",
        "More resistant to that antibiotic.",
        "Completely wiped out.",
        "More susceptible to the antibiotic.",
      ],
      answer: "More resistant to that antibiotic.",
      hint: "Think about the survivors passing on their traits.",
      tags: ["Evolution", "Natural Selection"],
    },
    {
      id: "17",
      question: "Which statement about evolution is TRUE?",
      options: [
        "Evolution is just a guess.",
        "Evolution can result in adaptation.",
        "Evolution happens quickly in individuals.",
        "Evolution has no supporting evidence.",
      ],
      answer: "Evolution can result in adaptation.",
      hint: "Adaptations are traits that enhance survival in a specific environment.",
      tags: ["Evolution"],
    },
    {
      id: "18",
      question: "A hypothesis is?",
      options: [
        "A proven fact.",
        "A broad explanation supported by vast evidence.",
        "A proposed explanation for a set of observations.",
        "An observation made with the naked eye.",
      ],
      answer: "A proposed explanation for a set of observations.",
      hint: "It is a starting point for further investigation.",
      tags: ["Scientific Method"],
    },
    {
      id: "19",
      question:
        "Thinking that a bookstore recently started selling a new sweatshirt style because you see many students wearing it is an example of a?",
      options: ["Theory", "Hypothesis", "Control", "Law"],
      answer: "Hypothesis",
      hint: "You are proposing an explanation for what you observed.",
      tags: ["Scientific Method"],
    },
    {
      id: "20",
      question: "A theory is a?",
      options: [
        "Narrow guess about a single observation.",
        "Explanation of an idea that is broad in scope and supported by a large body of evidence.",
        "Hypothesis that has not yet been tested.",
        "Step in the scientific method used only for recording data.",
      ],
      answer:
        "Explanation of an idea that is broad in scope and supported by a large body of evidence.",
      hint: "Theories are much more comprehensive than hypotheses.",
      tags: ["Scientific Method"],
    },
    {
      id: "21",
      question: "To be scientifically valid, a hypothesis must be?",
      options: [
        "Testable and falsifiable.",
        "Already proven correct.",
        "Based on personal opinion.",
        "Impossible to disprove.",
      ],
      answer: "Testable and falsifiable.",
      hint: "You must be able to run an experiment that could potentially prove it wrong.",
      tags: ["Scientific Method"],
    },
    {
      id: "22",
      question: "The role of a control in an experiment is to?",
      options: [
        "Ensure the experiment proceeds as quickly as possible.",
        "Provide a basis of comparison to the experimental group.",
        "Include as many variables as possible.",
        "Guarantee the results match the hypothesis.",
      ],
      answer: "Provide a basis of comparison to the experimental group.",
      hint: "The control group does not receive the specific treatment being tested.",
      tags: ["Scientific Method", "Experimental Design"],
    },
    {
      id: "23",
      question:
        "A scientist performs a controlled experiment. This means that?",
      options: [
        "The scientist controls every single outcome.",
        "Two versions of the experiment are conducted, one differing from the other by only a single variable.",
        "The experiment is done without any variables.",
        "The results are kept secret until the end.",
      ],
      answer:
        "Two versions of the experiment are conducted, one differing from the other by only a single variable.",
      hint: "Isolating one factor allows you to see its specific effect.",
      tags: ["Scientific Method", "Experimental Design"],
    },
    {
      id: "24",
      question:
        "Which of the following is NOT an accurate pairing of a technology and a discovery?",
      options: [
        "Sequencing DNA and forensic science.",
        "Invention of the microscope and creation of evolutionary trees.",
        "Satellite imaging and tracking climate change.",
        "Vaccine development and disease prevention.",
      ],
      answer: "Invention of the microscope and creation of evolutionary trees.",
      hint: "While microscopes helped see cells, evolutionary trees are primarily based on genetics and shared ancestry.",
      tags: ["Science and Technology"],
    },
    {
      id: "25",
      question:
        "Which statement is NOT an example of evolution that has resulted from human activity?",
      options: [
        "Pesticide resistance in insects.",
        "Antibiotic resistance in bacteria.",
        "Because of hunting, organisms such as bears and wolves are fewer in number.",
        "Selective breeding of dogs.",
      ],
      answer:
        "Because of hunting, organisms such as bears and wolves are fewer in number.",
      hint: "Decreasing in population size is not the same as an evolutionary change in traits.",
      tags: ["Evolution", "Human Impact"],
    },
    {
      id: "26",
      question:
        "During a discussion, a student says 'Plants eat sunlight.' What is the most accurate response?",
      options: [
        "Plants don't eat sunlight; they use sunlight to make sugars.",
        "Plants do eat sunlight through their roots.",
        "Plants don't use sunlight at all.",
        "Only some plants eat sunlight; others eat soil.",
      ],
      answer: "Plants don't eat sunlight; they use sunlight to make sugars.",
      hint: "Recall the process of photosynthesis.",
      tags: ["Ecosystems", "Photosynthesis"],
    },
    {
      id: "27",
      question: "Which statement about ecosystems is FALSE?",
      options: [
        "Producers provide food for consumers.",
        "Energy cycles from organisms through the atmosphere and back to the organisms.",
        "Chemical nutrients are recycled.",
        "Decomposers break down waste.",
      ],
      answer:
        "Energy cycles from organisms through the atmosphere and back to the organisms.",
      hint: "Energy is eventually lost as heat, not recycled back into the start.",
      tags: ["Ecosystems", "Energy Flow"],
    },
    {
      id: "28",
      question:
        "Which sequence is NOT a correct pathway of energy through an ecosystem?",
      options: [
        "Sun – grass – cow.",
        "Bacteria – plants – birds.",
        "Plants – deer – wolf.",
        "Algae – small fish – shark.",
      ],
      answer: "Bacteria – plants – birds.",
      hint: "Energy generally flows from producers (like plants) upward.",
      tags: ["Ecosystems", "Energy Flow"],
    },
    {
      id: "29",
      question:
        "In a study on cold recovery using a supplement, which was the experimental group?",
      options: [
        "Group B (placebo group)",
        "The researchers",
        "Group A only (received the supplement)",
        "Both Group A and Group B",
      ],
      answer: "Group A only.",
      hint: "This group receives the actual factor being tested.",
      tags: ["Scientific Method", "Experimental Design"],
    },
    {
      id: "30",
      question:
        "Which statement provides the BEST evidence of a common genetic code demonstrating the unity of life?",
      options: [
        "All organisms have blood.",
        "Through genetic engineering, a gene from a firefly can be inserted into a bacterium to make it glow.",
        "Every organism has a heart.",
        "All organisms live in the same ecosystem.",
      ],
      answer:
        "Through genetic engineering, a gene from a firefly can be inserted into a bacterium to make it glow.",
      hint: "This shows that different species can 'read' each other's DNA instructions.",
      tags: ["Genetics", "Unity of Life"],
    },
  ],
};
