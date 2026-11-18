// Science: Exploration — Class 9 NCERT 2026
// Audited and corrected against exploration-science-grade9.pdf (all chapters,
// including Pause and Ponder, Revise/Reflect/Refine, Chapter Exercises and activities).

export interface ScienceQuestion {
  id: string; number: string; text: string;
  figure?: string;
  parts?: string[];
  answer: { answerKey: string; solution: string; };
}
export interface ScienceExercise { id: string; title: string; questions: ScienceQuestion[]; }
export interface ScienceChapter {
  id: string; number: number; title: string; slug: string; code: string;
  description: string; exercises: ScienceExercise[];
}

export const SCIENCE_CHAPTERS: ScienceChapter[] = [
  {
    "id": "ch01",
    "number": 1,
    "title": "Exploration: Entering the World of Secondary Science",
    "slug": "exploration-entering-the-world-of-secondary-science",
    "code": "0906ch01",
    "description": "Scientific method, SI units and laboratory safety.",
    "exercises": [
      {
        "id": "ex1.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Think of a prediction you or your family made recently (for example, the outcome of a cricket match). Was it based on evidence and reasoning, or mainly on guesswork? How can scientific thinking improve such predictions?",
            "answer": {
              "answerKey": "A prediction is scientifically stronger when it is based on evidence and explicit reasoning rather than guesswork; scientific thinking tests it against data and revises it when new evidence appears.",
              "solution": "A prediction may begin as a guess, but scientific thinking improves it by identifying relevant evidence, stating the reasoning clearly, comparing the prediction with observations or data, and revising the prediction when new evidence disagrees."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Describe one situation where an approximate answer is good enough, and one where you would need a very exact value.",
            "answer": {
              "answerKey": "Approximate values are sufficient for rough estimates; exact values are needed when a small numerical error can materially change the result or safety.",
              "solution": "For a quick estimate, an approximate value such as the time needed to walk to a nearby place may be sufficient. An exact value is needed for situations such as measuring a medicine dose or carrying out a precise scientific experiment."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Choose a real‑life object (maybe a pressure cooker or a mobile phone) or a problem (maybe a traffic jam near your school). Make a sketch listing what kind of ideas from physics, chemistry, biology, earth science, or mathematics are involved. Show how at least two branches of science connect with your example.",
            "answer": {
              "answerKey": "Real-world systems commonly require ideas from multiple branches of science.",
              "solution": "Example: a mobile phone involves physics (electricity and electromagnetic waves), chemistry (battery materials), biology (human interaction and effects on the body), and mathematics (signal processing). Physics and chemistry, for example, connect in the design and operation of the battery and communication hardware."
            }
          }
        ]
      },
      {
        "id": "ex1.eg",
        "title": "Examples & Activities",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Suppose you ride a bicycle from your school to your home. You want to model the time it takes to go home from school. What details would you keep? What details could you ignore? Suggest why ignoring some details may actually be useful.",
            "answer": {
              "answerKey": "Keep variables that materially affect travel time (distance, route, speed, traffic/stops); omit details with negligible effect for the purpose of the model.",
              "solution": "Keep the route/distance, typical cycling speed, traffic, major stops and other factors that can noticeably change the travel time. You can ignore small details such as the exact shape or colour of objects along the route because they add complexity without improving the prediction for this purpose."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Think of some questions Meghna could ask Varsha to make this prediction scientifically testable.",
            "answer": {
              "answerKey": "Ask questions that specify the variable, conditions and measurable outcome needed to test the prediction.",
              "solution": "For example: What exactly are you predicting? Under what conditions? What measurements or observations would support or contradict it? What time interval, sample, or repeated trials would make the prediction testable?"
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "In Example 1.3, air occupies a measurable volume. What does this illustrate about using measurement and standard units in a scientific description?",
            "answer": {
              "answerKey": "A measurable quantity should be expressed with a number and an appropriate standard unit so that observations can be compared and reproduced.",
              "solution": "Scientific descriptions become comparable and reproducible when quantities are measured and reported with standard units (for example, litres for volume)."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch02",
    "number": 2,
    "title": "Cell: The Building Block of Life",
    "slug": "cell-the-building-block-of-life",
    "code": "0906ch02",
    "description": "Cell discovery, organelles, osmosis, cell division.",
    "exercises": [
      {
        "id": "ex2.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "What argument would you give for the necessity of a cell wall in plants usually fixed in one place versus in animals usually moving from one place to the other?",
            "answer": {
              "answerKey": "Cell wall gives rigidity to stationary plants; mobile animal cells need flexibility, not a rigid wall.",
              "solution": "Plants are stationary and must withstand <u>turgor pressure</u>, wind, and gravity — the rigid <u>cell wall</u> provides structural support. Animals move freely; a rigid wall would restrict movement. Their flexible <u>cell membrane</u> is sufficient."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "What consequences would you predict for a plant cell if its cell wall were to become as flexible as a cell membrane?",
            "answer": {
              "answerKey": "The plant cell would lose the rigid support normally provided by the wall and would be unable to maintain normal turgor safely.",
              "solution": "A plant cell without a rigid wall would lose mechanical support and would be more vulnerable to changes in water balance. In a hypotonic medium, water entering by <u>osmosis</u> could make the membrane swell and rupture because there is no strong cell wall to resist the pressure."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Why is it important to cut the two potato pieces in roughly equal size and measure their initial weight before placing them in different liquids?",
            "answer": {
              "answerKey": "To ensure a fair test; equal size ensures only the type of liquid is the variable.",
              "solution": "Equal size and initial weight ensure the experiment is <u>controlled</u> — the only variable is the type of liquid. Any observed change in weight can then be attributed solely to <u>osmosis</u>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Do white flowers contain any pigment? Give reasons.",
            "answer": {
              "answerKey": "No coloured pigments; white flowers reflect all wavelengths — contain leucoplasts or no plastids.",
              "solution": "White flowers do not contain coloured pigments like <u>anthocyanins</u> or <u>carotenoids</u>. Their cells contain <u>leucoplasts</u> (colourless plastids). The white colour results from reflection of all wavelengths of visible light."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Draw a well-labelled schematic diagram of a plant or an animal cell using these clues — (i) Nucleus appears as a dark and round body inside the cell. (ii) ER spreads like a network of extended nuclear envelope. (iii) Mitochondria and chloroplasts are rod shaped. You may refer to Fig. 2.10.",
              "figure": "/figs/science-ex2-pp-q5-fig2-10.png",
            "answer": {
              "answerKey": "Diagram: cell wall → membrane → nucleus (dark, round) → ER (network) → rod-shaped chloroplasts and mitochondria.",
              "solution": "<u>Plant Cell</u> (description): Rectangular boundary = cell wall. Just inside = cell membrane. Large central vacuole. Round dark nucleus with connected ER (network). Rod-shaped <u>chloroplasts</u> and <u>mitochondria</u>. Golgi body (stacked discs). Ribosomes (dots on RER)."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Instead of many small ones, why does a cell not have a single giant mitochondrion? How does this relate to the concept of surface area?",
            "answer": {
              "answerKey": "Many small mitochondria have greater total surface area-to-volume ratio, increasing ATP production efficiency.",
              "solution": "Many small mitochondria have a much larger total <u>surface area-to-volume ratio</u> than one large organelle. Cellular respiration occurs on the inner membrane (cristae) — more surface area means more reaction sites and greater <u>ATP synthesis</u>."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "If the skin cells start dividing by meiosis instead of mitosis, what do you think will happen to a cut on the skin?",
            "answer": {
              "answerKey": "Cut would not heal; meiosis produces haploid cells unsuitable for body tissue repair.",
              "solution": "Skin repair requires <u>diploid</u>, genetically identical cells. If skin cells divided by <u>meiosis</u>, the resulting haploid cells (half chromosome number) would be abnormal. The wound would fail to heal correctly."
            }
          }
        ]
      },
      {
        "id": "ex2.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Differentiate between the following pairs of terms based on the clues given in parentheses: (i) Cell membrane and cell wall (permeability) (ii) RER and SER (structure) (iii) Chloroplasts and chromoplasts (pigments)",
            "answer": {
              "answerKey": "(i) Selectively permeable vs. fully permeable. (ii) Has ribosomes vs. no ribosomes. (iii) Chlorophyll vs. carotenoids.",
              "solution": "(i) <u>Cell membrane</u>: selectively permeable; <u>Cell wall</u>: fully permeable. (ii) <u>RER</u>: ribosomes on surface; <u>SER</u>: smooth, no ribosomes. (iii) <u>Chloroplasts</u>: contain chlorophyll (green); <u>Chromoplasts</u>: contain yellow/orange/red carotenoid pigments."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Two similar animal cells are placed in two different solutions: • Cell X is placed in pure water. • Cell Y is placed in a concentrated salt solution. Cells are observed after some time. Cell X swells, and Cell Y shrinks. Which statement provides the correct explanation for the above observations? (i) Salt molecules moved into Cell Y, causing it to shrink. (ii) Water moved into Cell X and more water moved out of Cell Y than the salt solution entered it. (iii) Water moved into Cell X and moved out of Cell Y through the cell membrane. (iv) Solute movement caused osmosis in both cells.",
            "answer": {
              "answerKey": "(iii) is correct — water moves by osmosis from high to low water concentration.",
              "solution": "Option (iii) is correct. Pure water has higher water concentration than inside Cell X; water enters by <u>osmosis</u> and swells. Salt solution has lower water concentration outside Cell Y; water exits and cell shrinks. Only <u>water moves</u> through the selectively permeable membrane."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Look at the diagram of a cell in Fig. 2.20. Identify the parts labelled from (a) to (g) and correctly match them with their functions given below: (i) Controlling all the activities of a cell. (ii) Site of cellular respiration. (iii) Storage organelle that also provides rigidity to the cell. (iv) Separates the cell contents from surroundings. (v) Provides structural rigidity to the cell. (vi) Packs and stores materials received from ER. (vii) Helps in manufacturing food.",
              "figure": "/figs/science-ex2-rr-q3-fig2-20.png",
            "answer": {
              "answerKey": "a=Cell wall, b=Cell membrane, c=Vacuole, d=Nucleus, e=Mitochondria, f=Golgi body, g=Chloroplast.",
              "solution": "Matching: (a) <u>Cell wall</u> — structural rigidity; (b) <u>Cell membrane</u> — separates cell; (c) <u>Vacuole</u> — storage/rigidity; (d) <u>Nucleus</u> — controls activities; (e) <u>Mitochondria</u> — cellular respiration; (f) <u>Golgi body</u> — packs/stores from ER; (g) <u>Chloroplast</u> — manufactures food."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Which pair of organelles is correctly listed as (present in plant cells / absent in animal cells)? (i) Leucoplast/Cell wall; (ii) Mitochondria/Ribosome; (iii) Cell wall/Golgi; (iv) Lysosome/ER.",
            "answer": {
              "answerKey": "(i) is correct — leucoplast present in plants; cell wall absent in animal cells.",
              "solution": "Option (i) is correct: <u>Leucoplast</u> is present in plant cells (not in animal cells); <u>Cell wall</u> is absent in animal cells. (ii) incorrect — mitochondria/ribosomes are in both. (iii)(iv) — Golgi/ER/Lysosome are in animal cells too."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Two students, Renu and Rohit, were having a discussion on the plastids. Renu emphasised that all parts of the plants, even roots, contain plastids. However, Rohit did not agree with the statement and told her that plastids are absent in plant roots since the roots are underground and do not need to perform photosynthesis. Who is correct? Justify your answer.",
            "answer": {
              "answerKey": "Renu is correct: plant roots contain plastids, especially colourless leucoplasts; Rohit is wrong to say plastids are absent.",
              "solution": "Renu is correct. <u>Plant cells, including root cells, contain plastids</u>. Roots generally lack chloroplasts because they are not photosynthetic, but they can contain <u>leucoplasts</u>, colourless plastids involved in storage. Therefore Rohit’s statement that plastids are absent from roots is incorrect."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Mitochondria and chloroplasts are two important organelles in a plant cell. Discuss how these two organelles are structurally and functionally similar to each other, and different from each other.",
            "answer": {
              "answerKey": "Similar: double membrane, own DNA, 70S ribosomes. Different: mitochondria = respiration; chloroplasts = photosynthesis.",
              "solution": "<u>Similarities</u>: Both have double membrane, circular DNA, 70S ribosomes, and can self-replicate. <u>Differences</u>: Mitochondria — inner membrane forms cristae; site of <u>cellular respiration</u> (ATP). Chloroplasts — have thylakoids with chlorophyll; site of <u>photosynthesis</u>."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Which of the following pairs of cell organelles contains DNA? (i) Chloroplasts, Ribosomes (ii) Mitochondria, Nucleus (iii) Golgi bodies, Ribosomes (iv) Nucleus, Lysosomes",
            "answer": {
              "answerKey": "(ii) Mitochondria and Nucleus both contain DNA.",
              "solution": "Option (ii) is correct. <u>Nucleus</u> contains chromosomal DNA. <u>Mitochondria</u> contain their own circular DNA (mtDNA). Ribosomes, Golgi bodies, and Lysosomes do not contain DNA."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "A researcher carried out an experiment in which she took two carrots of similar size. She placed one carrot in plain water and the other carrot in concentrated salt solution (Fig. 2.21). After 24 hours she recorded her observations. (i) What hypothesis does she want to test through this experiment? (ii) What would you suggest for the improvement of this experiment? (iii) Why does the carrot in plain water stay stiff and crunchy, but the carrot in concentrated salt solution become rubbery and limp?",
              "figure": "/figs/science-ex2-rr-q8-fig2-21.png",
            "answer": {
              "answerKey": "Osmosis determines cell turgidity based on external solution. Use equal-sized carrots. Turgid vs. plasmolysed.",
              "solution": "(i) Hypothesis: <u>Osmosis</u> occurs across cell membranes — cells become turgid in plain water, plasmolysed in salt. (ii) Improvement: Equal-sized carrots; record mass before/after; use distilled water. (iii) Plain water → water enters → <u>turgid</u> (stiff). Salt solution → water exits → cells <u>plasmolysed</u> (limp)."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Indicate presence/absence of Chromosome, Nucleus, Mitochondria, Golgi complex, Chromoplasts in Bacterial cell and Animal cell.",
            "answer": {
              "answerKey": "Bacteria: chromosome present (circular, no membrane), others absent. Animal: all present except chromoplasts.",
              "solution": "<u>Bacterial cell</u>: Chromosome — Present (circular, in nucleoid); Nucleus — Absent; Mitochondria — Absent; Golgi — Absent; Chromoplasts — Absent. <u>Animal cell</u>: Chromosome — Present; Nucleus — Present; Mitochondria — Present; Golgi — Present; Chromoplasts — Absent."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Carry out the following experiment: Take four peeled potato halves and scoop each one out to make potato cups. One of these potato cups should be made from a boiled potato. Place each of the potato cups in a beaker containing water (Fig. 2.22). Now, set up the experiment as follows: (a) Keep Cup A empty. (b) Add one teaspoon sugar in Cup B. (c) Add one teaspoon salt in Cup C. (d) Add one teaspoon sugar in the boiled potato in Cup D. Observe the four potato cups at least two hours and answer the following questions: (i) Explain why water gathers in the hollowed portion of Cup B and Cup C. (ii) Why is Cup A necessary for this experiment? (iii) Explain why water does not gather in the hollowed portions of Cups A and D.",
              "figure": "/figs/science-ex2-rr-q10-fig2-22.png",
            "answer": {
              "answerKey": "(i) Osmosis — high solute draws water in. (ii) Control. (iii) No gradient in A; dead cells in D prevent osmosis.",
              "solution": "(i) Sugar/salt creates high solute concentration → water enters by <u>osmosis</u> from potato cells into cup. (ii) Cup A is the <u>control</u> — confirms water does not accumulate without a solute. (iii) A has no gradient; D has boiled (dead) cells — selectively permeable membranes are destroyed → <u>no osmosis</u>."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "Identify the incorrectly matched pair: (i) Ribosome — Protein synthesis; (ii) SER — Lipid and cellulose synthesis; (iii) Lysosome — Digestion of foreign agents.",
            "answer": {
              "answerKey": "(ii) is incorrect — SER synthesises lipids, NOT cellulose.",
              "solution": "Option (ii) is incorrect. <u>SER</u> is involved in lipid synthesis and detoxification — not cellulose. Cellulose is synthesised at the <u>Golgi body</u> and secreted to the cell wall. Options (i) and (iii) are correctly matched."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "What outcome do you expect if all mitochondria are removed from a eukaryotic cell?",
            "answer": {
              "answerKey": "Cell would die — no ATP production, no energy for cellular activities.",
              "solution": "<u>Mitochondria</u> are the site of cellular respiration and produce <u>ATP</u> (energy). Without them, the cell cannot perform active transport, biosynthesis, or movement. The cell would eventually die."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Which phenomenon inhibits the formation of tumors in the human body? Can plants also develop tumors? Explain.",
            "answer": {
              "answerKey": "Apoptosis prevents tumours. Yes — plants develop crown gall disease (Agrobacterium tumefaciens).",
              "solution": "<u>Apoptosis</u> (programmed cell death) and controlled cell cycle regulation prevent uncontrolled division. Plants can develop tumours — e.g., <u>crown gall disease</u> caused by Agrobacterium tumefaciens, which inserts DNA into plant cells causing uncontrolled growth."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "The cell membrane of a cell is made up of proteins and lipids. Which cell organelles help in the synthesis of cell membrane? Write the path of these compounds from their site of synthesis to the cell membrane and show this through a labelled diagram.",
            "answer": {
              "answerKey": "Ribosomes (proteins) + SER (lipids) → Golgi body → vesicles → cell membrane.",
              "solution": "Proteins synthesised by <u>ribosomes</u> on RER; lipids by <u>SER</u>. Both transported to <u>Golgi body</u> for processing into vesicles. Vesicles fuse with <u>cell membrane</u> supplying new components."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "What would happen if gametes were formed by mitotic divisions?",
            "answer": {
              "answerKey": "Gametes would be diploid; fertilisation would double the chromosome number each generation.",
              "solution": "Gametes formed by <u>mitosis</u> would be diploid (2n). Fertilisation of two such gametes would produce tetraploid (4n) offspring. Each successive generation would double the chromosome number → <u>chromosome imbalance</u> → species extinction."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "text": "A farmer, Deepa, was very happy with the harvest of amla (Indian Gooseberry) and lemons on her farm. However, she could sell only one-fourth of the produce in the local market. Recognising that a significant amount of produce may be lost post-harvest, she employed a traditional yet scientifically sound method to extend the shelf life of amla and lemons. She turned perishable produce into profitable products, such as pickles and sharbat. She used the excess produce to prepare pickles, murabbas, and sharbat by adding appropriate amounts of salt, sugar, or jaggery to small pieces of fruit and their juices. These were then stored in small glass bottles for sale, helping her prevent the wastage of post-harvest produce. This shift from farming to agro-processing would strengthen food security and boost the local economy, creating a sustainable model that cuts waste while increasing her income. Based on the above passage answer the following questions: (i) Which scientific concept has the farmer applied in the preservation of the farm produce? (ii) How does the addition of high concentrations of salt and sugar create an environment that prevents the growth of spoilage-causing bacteria and fungi? (iii) Suggest a healthy recipe of this kind for food preservation. (iv) What are the scientific values addressed in this case?",
            "answer": {
              "answerKey": "(i) Osmosis/plasmolysis. (ii) Hypertonic medium plasmolyses microbes. (iii) Amla murabba. (iv) Sustainable practices.",
              "solution": "(i) <u>Osmosis (plasmolysis)</u> — high salt/sugar creates hypertonic environment. (ii) Bacteria/fungi lose water by osmosis → <u>plasmolysed</u> → cannot grow or reproduce → food preserved. (iii) <u>Amla murabba</u>: Boil amla in sugar syrup; store in glass jars. (iv) Sustainable food practices, reduction of post-harvest waste."
            }
          }
        ]
      },
      {
        "id": "ex2.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 2.1 (estimate the size of a cell): focus a mm ruler on the microscope stage to measure the field diameter, convert mm to μm, count onion-peel cells along the diameter, and divide. If 25 cells span 5000 μm, what is one cell’s size? How is magnification found?",
            "answer": {
              "answerKey": "Cell size = field diameter ÷ cell count = 200 μm; magnification = observed size ÷ real size.",
              "solution": "Focus the <u>mm ruler</u> → field diameter (say 5 mm = <u>5000 μm</u>) → count cells across (say 25) → size = 5000 ÷ 25 = <u>200 μm</u>. <u>Magnification</u> = size seen in the eyepiece ÷ real size — e.g., if the 200 μm cell spans 20 mm in view, magnification = 20000 ÷ 200 = <u>100×</u>."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 2.2 (potato osmosis): weigh two potato pieces; keep one in plain water (Beaker A) and one in 20% salt/sugar solution (Beaker B) for an hour; reweigh. What do you observe and infer about weight change?",
            "answer": {
              "answerKey": "A swells and gains weight (water enters); B shrinks and loses weight (water leaves) — osmosis.",
              "solution": "<u>Beaker A</u>: cells take in water by <u>endosmosis</u> → piece swells, weight <u>increases</u>. <u>Beaker B</u>: concentrated solution draws water out by <u>exosmosis</u> → piece shrinks, weight <u>decreases</u>. Inference: water moves across the membrane from the dilute to the concentrated side."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 2.3 (onion and cheek cells): prepare slides of onion/Rhoeo peel (safranin) and cheek cells (methylene blue). Onion cells look box-like and regular, cheek cells irregular — why? What happens on adding 20% sugar solution?",
            "answer": {
              "answerKey": "Plant cells retain their shape because of the rigid cell wall; cheek cells lack a cell wall and are more irregular. A concentrated sugar solution causes water to leave cells; the term plasmolysis applies to plant cells.",
              "solution": "Onion cells look box-like because the <u>cell wall</u> provides rigid support; cheek cells lack a wall and therefore have a more irregular shape. In concentrated sugar solution, water leaves the cells by <u>osmosis</u>. Plant cells can show <u>plasmolysis</u>; animal cheek cells instead shrink/dehydrate, so calling the animal-cell change “plasmolysis” is incorrect."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Activity 2.4 (Let us study): observe the diagrams of a bacterial cell, a plant cell and an animal cell (Fig. 2.10) and record structures in Table 2.1. What key differences should the table show?",
            "answer": {
              "answerKey": "Bacteria: no nucleus or membrane-bound organelles; plant: wall, chloroplasts, big vacuole; animal: neither wall nor chloroplasts.",
              "solution": "Table should show: <u>bacterial cell</u> — no true nucleus, no membrane-bound organelles; <u>plant cell</u> — cell wall, chloroplasts, large central vacuole; <u>animal cell</u> — no wall, no chloroplasts, small vacuoles. Common to all: cell membrane, cytoplasm, ribosomes, DNA."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Activity 2.5 (onion root-tip mitosis): grow roots, fix in aceto-alcohol, soften with dilute HCl, stain with aceto-carmine, squash and observe. What structural differences do you expect among cells, and why?",
            "answer": {
              "answerKey": "Cells differ because each is caught in a different mitotic stage — prophase to telophase.",
              "solution": "Grow roots 5–6 days → fix → <u>HCl softens</u> tissue → <u>aceto-carmine stains chromosomes</u> → squash spreads cells. Cells look different because each is frozen in a different stage: <u>prophase</u> (condensing chromatin), <u>metaphase</u> (equatorial plate), <u>anaphase</u> (separating chromatids), <u>telophase</u> (two nuclei)."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Think It Over: Where does a cell come from?",
            "answer": {
              "answerKey": "Every cell comes from a pre-existing cell by division.",
              "solution": "All cells arise from <u>pre-existing cells</u> through division (cell theory). New cells are produced by <u>mitosis</u> (growth, repair) or <u>meiosis</u> (gametes); spontaneous generation does not occur."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Think It Over: How have technological interventions facilitated new knowledge of the world beyond the naked eye?",
            "answer": {
              "answerKey": "Microscopes, stains and imaging revealed cells, microbes and molecules invisible to the eye.",
              "solution": "The <u>light microscope</u> revealed cells; the <u>electron microscope</u> revealed organelles and viruses; <u>stains</u> (safranin, methylene blue) made transparent structures visible. Each tool extended sight, creating whole sciences — cytology, microbiology, molecular biology."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "Think It Over: How is the cell the structural and functional unit of life?",
            "answer": {
              "answerKey": "All organisms are built of cells, and all life processes occur within cells.",
              "solution": "<u>Structural</u>: every organism — from bacteria to banyan — is built of cells. <u>Functional</u>: respiration, photosynthesis, protein synthesis and division all occur <u>inside cells</u>. Hence nothing smaller than a cell is independently alive."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Think It Over: How does a cell multiply?",
            "answer": {
              "answerKey": "By mitosis (two identical cells) and meiosis (four gametes with half the chromosomes).",
              "solution": "Cells multiply by division: <u>mitosis</u> copies chromosomes once and splits once → two identical diploid cells (growth, repair). <u>Meiosis</u> copies once but splits twice → four haploid gametes for reproduction."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch03",
    "number": 3,
    "title": "Tissues in Action",
    "slug": "tissues-in-action",
    "code": "0906ch03",
    "description": "Plant and animal tissues — structure and function.",
    "exercises": [
      {
        "id": "ex3.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "You may have noticed that fibres of coconut husk are hard and brittle, whereas the leaf stalks of coriander are soft and flexible. Find out the reason.",
            "answer": {
              "answerKey": "Coconut husk: sclerenchyma (dead, lignified). Coriander stalk: collenchyma (living, pectin-thickened, flexible).",
              "solution": "Coconut husk fibres = <u>sclerenchyma</u> — dead cells with thick, lignified walls → hard and brittle. Coriander stalks contain <u>collenchyma</u> — living cells with cellulose/pectin deposits (not lignin) → flexible and soft."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Why do you think that a thick cuticle on the outer wall of epidermis is advantageous for a plant living in the desert but disadvantageous for a plant living underwater?",
            "answer": {
              "answerKey": "Desert: prevents water loss. Underwater: blocks absorption of water, CO₂, O₂ needed for survival.",
              "solution": "In <u>desert plants</u>, a thick cuticle reduces transpiration — conserves water. For <u>underwater plants</u>, the cuticle would block direct absorption of water, CO₂, and O₂ from the surrounding water, hindering photosynthesis and respiration."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Once water is absorbed by plant roots, it has to travel against gravity through xylem. How do the 'dead' cells of the xylem work together with the living cells of leaves at the top to keep the water moving?",
            "answer": {
              "answerKey": "Transpiration pull (cohesion-tension) from living stomata in leaves pulls water up through dead xylem tubes.",
              "solution": "Living <u>guard cells</u> open stomata → water evaporates (<u>transpiration</u>). This creates negative pressure (suction) that pulls the continuous water column upward through dead <u>xylem vessels</u> via cohesion of water molecules."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "What do you think will happen if there were no stomata in the epidermis of the stem or leaves?",
            "answer": {
              "answerKey": "No gas exchange → photosynthesis stops; no transpiration pull → water transport stops; plant dies.",
              "solution": "Without <u>stomata</u>, CO₂ cannot enter and O₂ cannot exit → photosynthesis stops. <u>Transpiration pull</u> ceases → water and mineral transport from roots stops. The plant would overheat, wilt, and die."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Look at the picture given below (Fig. 3.17). Carefully observe the various poses of classical and folk dances of India. Can you identify which joints are involved? Also, what type of movement each joint allows?",
              "figure": "/figs/science-ex3-pp-q5-fig3-17.png",
            "answer": {
              "answerKey": "Hip: ball-and-socket (all directions). Knee/Ankle: hinge (one plane). Wrist: ellipsoidal.",
              "solution": "<u>Hip joint</u>: ball-and-socket — movement in all directions. <u>Knee joint</u>: hinge — flexion and extension only. <u>Ankle joint</u>: hinge/gliding — up-down movement. <u>Shoulder joint</u>: ball-and-socket — wide range of arm movement."
            }
          }
        ]
      },
      {
        "id": "ex3.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Meristematic tissues divide repeatedly. Which property of their cells allows this? (i) Thick walls; (ii) Large vacuoles; (iii) Thin walls, dense cytoplasm, large nucleus; (iv) Functionally differentiated.",
            "answer": {
              "answerKey": "(iii) is correct — thin walls, dense cytoplasm, large nucleus enable active division.",
              "solution": "Option (iii) is correct. <u>Meristematic cells</u> have thin walls, dense cytoplasm, and a large prominent nucleus — features of actively dividing, undifferentiated cells. Thick walls and large vacuoles are features of mature, non-dividing permanent tissue."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "If a plant cannot transport food from leaves to roots, which tissue is malfunctioning? (i) Xylem; (ii) Phloem; (iii) Epidermis; (iv) Sclerenchyma.",
            "answer": {
              "answerKey": "(ii) Phloem — transports food from leaves (source) to roots (sink).",
              "solution": "Option (ii) <u>Phloem</u> is correct. Phloem transports prepared food (sugars) from the leaves to all other parts including roots — a process called <u>translocation</u>. Xylem transports only water and minerals upward."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Why are epithelial tissues lining internal organs usually only one or few cells thick? (i) Store food; (ii) Provide strength; (iii) Allow quick exchange of materials; (iv) Reduce friction.",
            "answer": {
              "answerKey": "(iii) — the correct option is that the thin epithelial layer allows quick exchange of materials.",
              "solution": "<u>Option (iii)</u> is correct. Internal epithelial tissues are thin to minimise the diffusion distance and allow rapid exchange of gases, nutrients and wastes."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Straight-leg jump vs. normal jump — how did ankle, knee, and hip positions differ?",
              "figure": "/figs/science-ex3-rr-q4-fig3-21.png",
            "answer": {
              "answerKey": "Normal jump: joints flex on landing, absorbing impact. Straight-leg jump: joints rigid, full impact on bones.",
              "solution": "In a <u>normal jump</u>: knee and ankle flex (bend) upon landing — impact force distributed over time, reducing stress. In a <u>straight-leg jump</u>: all joints rigid — full impact transmitted directly to bones → greater stress and discomfort."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Which joint is involved when you bend your knees and ankles? (i) Ball and socket; (ii) Hinge; (iii) Pivot.",
            "answer": {
              "answerKey": "(ii) Hinge joint — allows flexion and extension in one plane only.",
              "solution": "Option (ii) <u>Hinge joint</u> is correct. Knees and ankles are hinge joints that allow movement in only one plane (flexion/extension — like a door hinge)."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "In each of the following cases (A, B, C and D), choose the correct option as given below: (i) Both (A) and (R) are true, and (R) is the correct explanation of (A). (ii) Both (A) and (R) are true, but (R) is not the correct explanation of (A). (iii) (A) is true, but (R) is false. (iv) (A) is false, but (R) is true. A. Assertion: Epithelium is well-suited for gas exchange in the lungs. Reason: It consists of multiple layers of tall cells that slow down diffusion. B. Assertion: Cardiac muscle can contract continuously without fatigue. Reason: Cardiac muscle cells have a high number of mitochondria and an abundant blood supply. C. Assertion: Tendons connect bone to bone and allow joint movement. Reason: Tendons are made of tough connective tissue that transmits force from muscle to bone. D. Assertion: In a hinge joint, movement occurs primarily in one plane. Reason: The bone ends are shaped to allow sliding in all directions.",
            "answer": {
              "answerKey": "A:(iii) A true, R false. B:(i) Both true, R correct. C:(iv) A false, R true. D:(i) Both true, R correct.",
              "solution": "A: (iii) — <u>Squamous epithelium</u> is suited for gas exchange (thin → fast diffusion), but R is false (it is thin/flat, not multi-layered). B: (i) — <u>Cardiac muscle</u> has abundant mitochondria → never fatigues; R correctly explains. C: (iv) — A is false: <u>tendons</u> connect muscle to bone (ligaments connect bone to bone). D: (i) — Hinge joint moves in one plane; both true and related."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Plot a graph between the age of a tree (in years) on the x-axis and the diameter of the tree (in cm) along the y-axis, using the data given in the Table 3.7. (i) Analyse the graph in terms of the diameter of the stem over time and share the interpretation. (ii) What is the relation between the diameter of the teak tree to the annual rings formed? (iii) Which specialised tissue is responsible for the girth of the stem and where is it located?",
              "figure": "/figs/science-ex3-rr-q7-table3-7.png",
            "answer": {
              "answerKey": "(i) Diameter increases with age. (ii) Diameter proportional to annual rings. (iii) Vascular cambium (lateral meristem).",
              "solution": "(i) Diameter increases consistently with age — near-linear growth. (ii) Diameter is directly proportional to number of <u>annual rings</u>. (iii) <u>Vascular cambium</u> (lateral meristematic tissue) is responsible for secondary growth (girth increase)."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "In a forest, it was observed that one of the trees was severely debarked by an elephant to meet its food requirements, as the bark is a rich source of nutrients (Fig. 3.22). Based on your learning, answer the following: (i) Which function(s) of the tree is/are hampered by debarking? (ii) Which plant tissue would be affected by further damage to the tree trunk even after debarking? (iii) Which function of the tree would be hampered if the tissues beneath the bark were severely damaged? (iv) What assumptions are you making to answer the questions above? How would the answer change if your assumptions are also changed?",
              "figure": "/figs/science-ex3-rr-q8-fig3-22.png",
            "answer": {
              "answerKey": "(i) Protection and phloem food transport. (ii) Vascular cambium. (iii) Xylem water transport. (iv) Xylem intact below bark.",
              "solution": "(i) Bark functions lost: <u>protection</u> from pests/pathogens; <u>food transport</u> (phloem in bark). (ii) Further damage destroys <u>vascular cambium</u> → secondary growth stops. (iii) Below-bark damage destroys <u>xylem</u> → water/mineral transport upward stops → tree dies. (iv) Assumption: only bark removed; xylem remains intact."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Aamrapali observed that a young mango sapling's stem bends flexibly during monsoon winds and does not break. Which tissue is responsible for this flexibility? Predict and provide your explanation of the impact if the existing tissue was replaced by sclerenchyma.",
            "answer": {
              "answerKey": "Collenchyma provides flexibility. Sclerenchyma is lignified and dead — stem would snap in wind.",
              "solution": "<u>Collenchyma</u> — living cells with unevenly thickened pectin/cellulose walls — allows bending without breaking. If replaced by <u>sclerenchyma</u> (dead, lignified): stem becomes rigid and brittle → would break in strong winds."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Sohan designed an experiment for the regeneration of sugarcane, where he used cuttings to grow sugarcane. He used two types of cuttings, type 'A' and type 'B' (Fig. 3.23). After a few weeks, type 'B' cuttings sprouted and developed into sugarcane plants, whereas the type 'A' cuttings did not sprout. (i) Why were the type 'B' cuttings able to grow as sugarcane but type 'A' could not? (ii) What difference was present in type 'B' compared to type 'A'? (iii) What observation or measurement was made to determine whether this change had an effect? (iv) What parameters should be kept the same for both types of cuttings to ensure a fair comparison?",
              "figure": "/figs/science-ex3-rr-q10-fig3-23.png",
            "answer": {
              "answerKey": "(i) B had nodes (meristematic tissue); A had only internodes. (ii) Nodes with buds. (iii) Sprouting/root formation. (iv) Soil, water, light, cutting length.",
              "solution": "(i) Type B cuttings had <u>nodes</u> (with meristematic tissue/axillary buds); Type A had only internodes (no meristematic cells). (ii) Presence of nodes with buds. (iii) Observation: sprouting and new root development in Type B. (iv) Same: soil, water, light, temperature, cutting length."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "During the discussion in class, Rohan gives a statement that, \"A tissue is a group of similar cells performing similar functions\". But Rajiv counter argues that, \"this is true in case of simple tissues but quite different in case of complex tissues\". Provide your explanation in view of the discussion in class.",
            "answer": {
              "answerKey": "Simple tissues: same cell type, one function. Complex tissues: different cell types, work together for one function.",
              "solution": "Rohan is correct for <u>simple tissues</u>: e.g., parenchyma — all similar cells, storage/photosynthesis. Rajiv is correct for <u>complex tissues</u>: e.g., xylem contains tracheids, vessels, parenchyma, and fibres — different cells working together for water transport."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "Coconut husk fibres are used for mats which are tough and fibrous. Which tissue has structural features suitable for providing this strength? Explain why living parenchyma couldn't serve the same purpose.",
            "answer": {
              "answerKey": "Sclerenchyma (dead, lignified). Parenchyma is thin-walled and soft — cannot provide tensile strength.",
              "solution": "<u>Sclerenchyma</u> — dead cells with thick, lignified walls — extremely strong and rigid → suitable for mats. <u>Parenchyma</u> has thin, non-lignified walls and large vacuoles — soft and flexible → cannot withstand stress."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Vibha claims to her friend Neha that, \"Meristematic cells are located only at the root and shoot apices\". What do you think about this statement? What question can Neha ask Vibha to help her understand further if the statement is incorrect?",
            "answer": {
              "answerKey": "Incorrect — lateral meristems (vascular cambium) are also present along the sides of stems.",
              "solution": "Vibha's statement is incomplete. While <u>apical meristems</u> are at tips, <u>lateral meristems</u> (vascular cambium, cork cambium) are present along the sides of stems — enabling secondary growth. Neha can ask: \"How does a tree trunk increase in girth if meristems only exist at tips?\""
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "A plant cell and an animal cell are of the same size. (i) Which cell will have a larger vacuole? Give reasons. (ii) What assumptions are you making to answer the question above?",
            "answer": {
              "answerKey": "(i) Plant cell — large central vacuole occupies up to 90% of volume. (ii) Assuming typical mature cells.",
              "solution": "(i) The <u>plant cell</u> has a larger central vacuole — occupies up to 90% of cell volume for storage and turgor. Animal cells have only small, temporary vacuoles. (ii) Assumption: both are typical mature cells."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "A textbook states, \"Each plant tissue performs only one specific function\". What questions would you ask to critically examine the correctness of this statement? What examples of tissues would you take to find out the answers to these questions?",
            "answer": {
              "answerKey": "False — parenchyma performs multiple functions (storage, photosynthesis, repair). Xylem also provides structural support.",
              "solution": "Critical questions: \"Does parenchyma only store or also photosynthesise?\" Counter-examples: <u>Parenchyma</u> — storage, photosynthesis (chlorenchyma), secretion, repair. <u>Xylem</u> — water transport AND mechanical support. Statement is oversimplified."
            }
          }
        ]
      },
      {
        "id": "ex3.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 3.1 (onion root growth jars): place one onion bulb in each of two water jars; measure root lengths on days 1–3; on day 3 cut Jar B’s root tips by 1 cm and measure for four more days. What trend and inference do you expect?",
            "answer": {
              "answerKey": "Jar A roots keep growing; Jar B roots stop — growth happens at the root tip (apical meristem).",
              "solution": "Record lengths in Table 3.1 for both jars. <u>Jar A</u>: roots lengthen steadily. <u>Jar B</u>: after tip-cutting, growth <u>stops</u>. Inference: growth occurs at the <u>root tip (apical meristem)</u> — removing it removes the dividing cells, so elongation halts."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 3.2 (everyday blood experiences): a cut oozes red blood and clots; an infection reddens and swells; exercise quickens breathing and reddens the face. Which blood components explain each?",
            "answer": {
              "answerKey": "RBC haemoglobin (red colour), platelets (clotting), WBCs (infection), faster circulation (exercise).",
              "solution": "<u>Red colour</u>: <u>haemoglobin</u> in RBCs (replaced every ~4 months). <u>Clotting</u>: <u>platelets</u> seal the injury. <u>Exercise</u>: muscles need more oxygen → faster breathing and blood flow → red face. <u>Infection</u>: <u>WBCs</u> gather → inflammation, pus, redness, swelling."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 3.3 (identify connective tissues): perform the actions in Table 3.4 (e.g., bending, stretching body parts) and match each experience to a connective tissue in Fig. 3.12. How should you approach the matching?",
            "answer": {
              "answerKey": "Match the mechanical experience (stretch, cushion, pull) to the tissue built for it — tendon, ligament, cartilage, bone, blood.",
              "solution": "Do each action and note what you feel: <u>pull without stretch</u> (tendon — muscle to bone); <u>stretch and recoil</u> (ligament — bone to bone); <u>smooth cushioning</u> (cartilage — joints, nose); <u>rigidity</u> (bone); <u>flow/transport</u> (blood). Study each tissue’s fibres and matrix in Fig. 3.12 to confirm."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Activity 3.4 (body-weight components): weigh yourself; multiply by average bone (~12–15%) and muscle (~30–50%) percentages for your age and gender; compare with classmates. Why do values differ, and what do bones and muscles contribute?",
            "answer": {
              "answerKey": "Bone ≈ 12–15%, muscle ≈ 30–50% of body weight; differences come from age, gender, activity and build.",
              "solution": "Example: 40 kg × 13% ≈ <u>5.2 kg bone</u>; 40 kg × 40% ≈ <u>16 kg muscle</u>. Values differ due to <u>age, gender, exercise and body type</u>. Bones give <u>support and shape</u>; muscles give <u>movement and strength</u> — together they form most of body weight."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch04",
    "number": 4,
    "title": "Describing Motion Around Us",
    "slug": "describing-motion-around-us",
    "code": "0906ch04",
    "description": "Displacement, velocity, acceleration, equations of motion.",
    "exercises": [
      {
        "id": "ex4.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "In the example of an athlete running back and forth on a straight track (Fig. 4.4), when will the displacement of the athlete be zero? What will be the total distance travelled in that case?",
              "figure": "/figs/science-ex4-pp-q1-fig4-4.png",
            "answer": {
              "answerKey": "Displacement = 0 when athlete returns to starting point. Distance = 2 × track length.",
              "solution": "<u>Displacement is zero</u> when the athlete returns to the starting point after running to the end and back. If track length = d, total distance = 2d while displacement = 0."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Fuel used up in a vehicle depends on which of the following? Justify your answer. (i) Total distance travelled (ii) Displacement",
            "answer": {
              "answerKey": "(i) Total distance — fuel is burned for every metre of actual movement, regardless of direction.",
              "solution": "Fuel consumption depends on (i) <u>Total distance travelled</u>. Fuel is burned for every metre of actual movement, regardless of direction. Displacement measures only straight-line change in position."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "A ball rolls down an inclined track as shown in Fig. 4.6. Is its motion, a straight line motion? Assuming the starting point of the ball (O) to be the origin, can its motion from O to D be depicted using a horizontal line as shown in Fig. 4.3? Are the values of total distance travelled and magnitude of displacement from O equal or different at positions A, B, C and D?",
              "figure": "/figs/science-ex4-pp-q3-fig4-6.png",
            "answer": {
              "answerKey": "Motion is curved. Distance > displacement at A, B, C. They may be approximately equal at D.",
              "solution": "The ball follows the <u>curved inclined path</u>, not a true straight line. At intermediate positions A, B, C: total distance > displacement (path curves). Only near flat portion D might they be approximately equal."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "During a family road trip, you drive 200 km north in three hours. Afterwards, you drive 200 km south in two hours. Find the average speed and average velocity for your entire trip.",
            "answer": {
              "answerKey": "Average speed = 80 km/h; Average velocity = 0 km/h.",
              "solution": "Total distance = 200 + 200 = 400 km; Total time = 3 + 2 = 5 h\n\n<u>Average speed</u> = 400 ÷ 5 = <strong>80 km h⁻¹</strong>\n\nTotal displacement = 200N – 200S = 0; <u>Average velocity</u> = <strong>0 km h⁻¹</strong>"
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Under what condition(s) is the (i) magnitude of average velocity of an object equal to its average speed? (ii) magnitude of average velocity of an object zero while its average speed is not zero?",
            "answer": {
              "answerKey": "(i) Motion in one direction only. (ii) Object returns to starting point.",
              "solution": "(i) When object moves in a <u>straight line without reversing direction</u>, total distance = total displacement.\n(ii) When object <u>returns to starting point</u>, displacement = 0 → average velocity = 0; but distance ≠ 0 → average speed ≠ 0."
            }
          }
        ]
      },
      {
        "id": "ex4.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "My father went to a shop from home which is located at a distance of 250 m on a straight road. On reaching there, he discovered that he forgot to carry a cloth bag. He came home to take it, went to the shop again, bought provisions and came back home. How much was the total distance travelled by him? What was his displacement from home?",
            "answer": {
              "answerKey": "Total distance = 1000 m; Displacement = 0 m.",
              "solution": "4 trips of 250 m each.\n\n<u>Total distance</u> = 4 × 250 = <strong>1000 m</strong>\n\n<u>Displacement</u> = Start (home) to End (home) = <strong>0 m</strong>"
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "A student runs from the ground floor to the fourth floor of a school building to collect a book and then comes down to their classroom on the second floor. If the height of each floor is 3 m, find: (i) the total vertical distance travelled, and (ii) their displacement from the starting point.",
            "answer": {
              "answerKey": "(i) 18 m total distance; (ii) 6 m upward displacement.",
              "solution": "Ground → 4th floor: 4 × 3 = 12 m (upward)\n4th → 2nd floor: 2 × 3 = 6 m (downward)\n\n(i) <u>Total distance</u> = 12 + 6 = <strong>18 m</strong>\n(ii) <u>Displacement</u> = Ground to 2nd floor = 2 × 3 = <strong>6 m upward</strong>"
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "A girl is riding her scooter and finds that its speedometer reading is constant. Is it possible for her scooter to be accelerating and if so, how?",
            "answer": {
              "answerKey": "Yes — uniform circular motion: constant speed but changing direction = acceleration.",
              "solution": "Yes, the scooter can be accelerating even at constant speed. If moving along a <u>circular path</u>, the direction continuously changes. Since acceleration = change in velocity (speed or direction), this is <u>centripetal acceleration</u>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "A car starts from rest and its velocity reaches 24 m s⁻¹ in 6 s. Find the average acceleration and the distance travelled in these 6 s.",
            "answer": {
              "answerKey": "Acceleration = 4 m/s²; Distance = 72 m.",
              "solution": "u = 0, v = 24 m s⁻¹, t = 6 s\n\n<u>Acceleration</u> a = (v–u)/t = 24/6 = <strong>4 m s⁻²</strong>\n\n<u>Distance</u> s = ut + ½At² = 0 + ½×4×36 = <strong>72 m</strong>"
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "A motorbike moving with initial velocity 28 m s⁻¹ and constant acceleration stops after travelling 98 m. Find the acceleration of the motorbike and the time taken to come to a stop.",
            "answer": {
              "answerKey": "Acceleration = –4 m/s²; Time = 7 s.",
              "solution": "u = 28 m s⁻¹, v = 0, s = 98 m\n\nv² = u² + 2as → 0 = 784 + 2a×98 → <u>a = –4 m s⁻²</u>\n\nv = u + at → 0 = 28 + (–4)t → <u>t = 7 s</u>"
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Fig. 4.27 shows a position-time graph of two objects A and B that are moving along the parallel tracks in the same direction. Do objects A and B ever have equal velocity? Justify your answer.",
              "figure": "/figs/science-ex4-rr-q6-fig4-27.png",
            "answer": {
              "answerKey": "Yes — at the instant where the slopes (tangents) of their position-time graphs are equal.",
              "solution": "<u>Velocity = slope</u> of position-time graph. Two objects have equal velocity at the instant where their tangent slopes are equal. For curved graphs, it may occur at one or more instants."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "A graph in Fig. 4.28 shows the change in position with time for two objects A and B moving in a straight line from 0 to 10 seconds. Choose the correct option(s). (i) The average velocity of both over the 10 s time interval is equal since they have the same initial and final positions. (ii) The average speeds of both over the 10 s time interval are equal since both cover equal distance in equal time. (iii) The average speed of A over the 10 s time interval is lower than that of B since it covers a shorter distance than B in 10 seconds. (iv) The average speed of A over the 10 s time interval is greater than that of B since B's speed is lower than A's in some segments.",
              "figure": "/figs/science-ex4-rr-q7-fig4-28.png",
            "answer": {
              "answerKey": "(i) and (ii) are correct.",
              "solution": "The two objects have the same initial and final positions, so their displacements are equal and therefore their <u>average velocities</u> are equal. From the graph, the total distances travelled are also equal, so their <u>average speeds</u> are equal."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "A truck driver driving at a speed of 54 km h⁻¹ notices a road sign with a speed limit of 40 km h⁻¹ (Fig. 4.29) for trucks. He slows down to 36 km h⁻¹ in 36 s. What was the distance travelled by him during this time? Assume the acceleration to be constant while slowing down.",
              "figure": "/figs/science-ex4-rr-q8-fig4-29.png",
            "answer": {
              "answerKey": "Distance = 450 m.",
              "solution": "u = 54 km h⁻¹ = 15 m s⁻¹; v = 36 km h⁻¹ = 10 m s⁻¹; t = 36 s\n\na = (10–15)/36 = –5/36 m s⁻²\n\n<u>s</u> = ut + ½at² = 15×36 + ½×(–5/36)×36² = 540 – 90 = <strong>450 m</strong>"
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "A car starts from rest and accelerates uniformly to 20 m s⁻¹ in 5 seconds. It then travels at 20 m s⁻¹ for 10 seconds and finally applies the brake (with uniform acceleration) to stop in 6 seconds. Find the total distance travelled.",
            "answer": {
              "answerKey": "Total distance = 310 m.",
              "solution": "Phase 1 (acceleration): s₁ = ½×20×5 = 50 m\nPhase 2 (constant speed): s₂ = 20×10 = 200 m\nPhase 3 (braking): s₃ = (20+0)/2×6 = 60 m\n\n<u>Total distance</u> = 50 + 200 + 60 = <strong>310 m</strong>"
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "A bus is travelling at 36 km h⁻¹ when the driver sees an obstacle 30 m ahead. The driver takes 0.5 seconds to react before pressing the brake. Once the brake is applied, the velocity of the bus reduces with constant acceleration of 2.5 m s⁻². Will the bus be able to stop before reaching the obstacle?",
            "answer": {
              "answerKey": "Yes — total stopping distance = 25 m < 30 m. Bus stops safely.",
              "solution": "u = 36 km h⁻¹ = 10 m s⁻¹\n\nReaction distance = 10 × 0.5 = 5 m\nBraking: 0 = 100 + 2(–2.5)s → s = 20 m\n\nTotal = 5 + 20 = 25 m < 30 m → <u>Bus stops safely.</u>"
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "A student said, \"The Earth moves around the Sun\". In this context, discuss whether an object kept on the Earth can be considered to be at rest.",
            "answer": {
              "answerKey": "Yes — motion is relative; an object is at rest relative to Earth even though Earth moves.",
              "solution": "<u>Motion is relative</u>. An object on Earth is at rest relative to Earth (same reference frame). Relative to the Sun, it moves with Earth. We choose the reference frame based on convenience."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "The velocity-time graph from 0 s to 120 s for a cyclist is shown in Fig. 4.30. Shade the areas (in different colours) representing the displacement of the cyclist (i) while cyclist is moving with constant velocity. (ii) when the velocity of cyclist is decreasing. Also, calculate the displacement and average acceleration in the 120 s time interval.",
              "figure": "/figs/science-ex4-rr-q12-fig4-30.png",
            "answer": {
              "answerKey": "Displacement = 320 m; average acceleration = 1/60 m s⁻².",
              "solution": "From Fig. 4.30: displacement = triangular area (0–20 s) + rectangular area (20–100 s) + trapezoidal area (100–120 s) = ½×20×3 + 80×3 + ½×(3+2)×20 = <strong>320 m</strong>. Average acceleration = (final velocity − initial velocity)/time = (2−0)/120 = <strong>1/60 m s⁻²</strong>."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "A girl is preparing for her first marathon by running on a straight road. She uses a smartwatch to calculate her running speed at different intervals. The graph (Fig. 4.31) depicts her velocity versus time. Estimate the distance she ran based on the graph.",
              "figure": "/figs/science-ex4-rr-q13-fig4-31.png",
            "answer": {
              "answerKey": "Area under velocity-time graph = total distance ≈ 774 m.",
              "solution": "Estimate <u>area under v-t graph</u> using geometric shapes (triangles/rectangles/trapezoids).\n\nPer book data: <u>Total distance ≈ 774 m</u>\n\nMethod: Break graph into triangles and rectangles; calculate each area and sum."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "On entering a state highway, a car continues to move with a constant velocity of 6 m s⁻¹ for 2 minutes and then accelerates with a constant acceleration 1 m s⁻² for 6 seconds. Find the displacement of the car on the state highway in the 2 min + 6 s time interval by drawing a velocity-time graph for its motion.",
            "answer": {
              "answerKey": "Total displacement = 774 m.",
              "solution": "Phase 1: t = 120 s, v = 6 m s⁻¹ → s₁ = 6×120 = 720 m\n\nPhase 2: u = 6, a = 1 m s⁻², t = 6 s → s₂ = 6×6 + ½×1×36 = 36+18 = 54 m\n\n<u>Total displacement</u> = 720 + 54 = <strong>774 m</strong>"
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "Two cars A and B start moving with a constant acceleration from rest, in a straight line. Car A attains a velocity of 5 m s⁻¹ in 5 s. Car B attains a velocity of 3 m s⁻¹ in 10 s. Plot the velocity-time graphs for both the cars in the same graph. Using the graph, calculate the displacement in the two time intervals mentioned (Hint: Calculate the acceleration in both cases. Then calculate their velocities at five instants of time to plot the graph).",
            "answer": {
              "answerKey": "A: a = 1 m/s², displacement = 12.5 m. B: a = 0.3 m/s², displacement = 15 m.",
              "solution": "Car A: a = 5/5 = 1 m s⁻²; s = ½×1×25 = <strong>12.5 m</strong>\n\nCar B: a = 3/10 = 0.3 m s⁻²; s = ½×0.3×100 = <strong>15 m</strong>\n\nV-t graph: both are straight lines from origin — A steeper (slope 1); B less steep (slope 0.3)."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "text": "Rohan studies science from 6 PM to 7:30 PM at home. Consider the tip of the minute's hand of the wall clock. During the given time interval, what is its: (i) distance travelled, (ii) displacement, (iii) speed, and (iv) velocity. The length of the minute's hand is 7 cm (Fig. 4.32).",
              "figure": "/figs/science-ex4-rr-q16-clock.png",
            "answer": {
              "answerKey": "(i) 66 cm; (ii) 14 cm; (iii) 11/900 cm/s; (iv) 7/2700 cm/s.",
              "solution": "Time = 90 min = 5400 s; 1.5 revolutions; Circumference = 2π×7 ≈ 44 cm\n\n(i) <u>Distance</u> = 1.5×44 = <strong>66 cm</strong>\n(ii) After 1.5 rev, hand at 9 o'clock; <u>Displacement</u> = 2×7 = <strong>14 cm</strong> (diameter)\n(iii) <u>Speed</u> = 66/5400 = <strong>11/900 cm s⁻¹</strong>\n(iv) <u>Velocity</u> = 14/5400 = <strong>7/2700 cm s⁻¹</strong>"
            }
          }
        ]
      },
      {
        "id": "ex4.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 4.1 (ball thrown upwards): a ball goes straight up from O to B and falls back to O. Is this motion in a straight line? Fill Table 4.1 (distance vs displacement at O, A, B, C, O) and choose the true statement about displacement.",
            "answer": {
              "answerKey": "Yes, straight-line motion; displacement ≤ distance. Correct option: (iii).",
              "solution": "Up-and-down along one line is still <u>straight-line motion</u>. Distance keeps accumulating (O→B→O = twice the height); displacement rises to max at B then falls back to <u>zero at O</u>. Hence displacement is never more than distance — option <u>(iii): magnitude is less than or equal to total distance</u>."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 4.2 (car acceleration): look up the 0–100 km/h time for various cars and compute average acceleration. How is it calculated, and what are the units?",
            "answer": {
              "answerKey": "a = Δv/Δt; convert 100 km/h to 27.8 m/s, divide by time in seconds.",
              "solution": "Note each car’s 0–100 km/h time T from the internet. Convert: 100 km/h = <u>27.8 m s⁻¹</u>. Average acceleration <u>a = 27.8 ÷ T m s⁻²</u>. Example: T = 10 s → a ≈ <u>2.78 m s⁻²</u>. Shorter T means sportier (larger) acceleration."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 4.3 (plot a position–time graph): draw axes on graph paper, put time on X and position on Y, choose a scale (e.g., 5 divisions = 1 s; 5 divisions = 20 m), plot Table 4.3 and join the points. What shape do you get, and what does it mean?",
            "answer": {
              "answerKey": "A straight line through the origin — uniform velocity (equal distances in equal times).",
              "solution": "Mark time (1 s, 2 s …) on <u>X</u> and position (20 m, 40 m …) on <u>Y</u>; plot each pair and join. The points form a <u>straight line</u> (Fig. 4.11c) — position grows uniformly with time, meaning <u>constant (uniform) velocity</u>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Activity 4.4 (velocity from the graph): on segment AB draw lines parallel to the axes to form triangle ABC. What do sides BC and CA represent, and how do you get average velocity?",
            "answer": {
              "answerKey": "BC = change in position (s₂−s₁); CA = change in time (t₂−t₁); v = BC ÷ CA (slope).",
              "solution": "<u>BC</u> (vertical) = change in position <u>(s₂ − s₁)</u>; <u>CA</u> (horizontal) = change in time <u>(t₂ − t₁)</u>. Read s₁, s₂, t₁, t₂ off the graph; average velocity <u>v = (s₂ − s₁) ÷ (t₂ − t₁)</u> — the <u>slope</u> of AB. Steeper slope means faster motion."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch05",
    "number": 5,
    "title": "Exploring Mixtures and their Separation",
    "slug": "exploring-mixtures-and-their-separation",
    "code": "0906ch05",
    "description": "Solutions, colloids, suspensions and separation techniques.",
    "exercises": [
      {
        "id": "ex5.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "A common talcum powder contains 4 % m/m zinc oxide, which acts as an antiseptic. How much zinc oxide is present in 300 g of the talcum powder?",
            "answer": {
              "answerKey": "12 g of zinc oxide.",
              "solution": "Mass of ZnO = (4/100) × 300 = <strong>12 g</strong>"
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Your mother gives you a bottle of orange juice concentrate to mix with water and serve it to your visiting guests. She asks you to mix two tablespoons of the concentrate with water in a glass tumbler. If each tablespoons measures 15 mL and you make 150 mL of juice per person, what is the % v/v of orange juice concentrate in the mixture you prepared?",
            "answer": {
              "answerKey": "20% v/v.",
              "solution": "Volume of concentrate = 2×15 = 30 mL; Total volume = 150 mL\n\n<u>% v/v</u> = (30/150) × 100 = <strong>20% v/v</strong>"
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Vinegar, used as a food preservative and additive, contains 5 % v/v acetic acid. Glacial acetic acid, a liquid, i.e., 100% acetic acid. If you want to make vinegar from glacial acetic acid, how would you proceed?",
            "answer": {
              "answerKey": "Take 5 mL glacial acetic acid, add 95 mL distilled water to make 100 mL of 5% v/v solution.",
              "solution": "Take <u>5 mL of glacial acetic acid</u>. Slowly add 95 mL of distilled water while stirring. Final solution = 100 mL of 5% v/v vinegar. (Always add acid to water — never water to acid.)"
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Refer to the solubility curves given in Activity 5.2. If equal masses of hot, saturated solutions of compounds 'A' and 'B' are cooled from 80 °C to 60 °C, which solution is likely to deposit more solid?",
              "figure": "/figs/science-ex5-pp-q4-solubility.png",
            "answer": {
              "answerKey": "The compound whose solubility decreases more sharply between 80°C and 60°C deposits more solid.",
              "solution": "The amount of solid deposited equals the <u>decrease in solubility</u> × mass of solvent. The compound with a steeper solubility curve between 80°C and 60°C has greater decrease in solubility → deposits more crystals."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Will there be any change in the size of common salt crystals if the rate of evaporation is increased or decreased? Explain.",
            "answer": {
              "answerKey": "Faster evaporation → smaller crystals. Slower evaporation → larger, well-shaped crystals.",
              "solution": "At <u>faster evaporation</u>: salt crystallises rapidly → many small crystals form simultaneously. At <u>slower evaporation</u>: gradual crystallisation → fewer, larger, well-shaped crystals. Rate of evaporation controls nucleation and crystal growth."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "State whether the following statements are True or False. Also, correct the False statements. (i) Salt can be separated from a salt solution by evaporation or distillation. (ii) Distillation can be used for separation of two liquids even when these have the same boiling point. (iii) In paper chromatography, the solvent level should be above the sample spot at the beginning of the experiment. (iv) Evaporation and crystallization are the same processes.",
            "answer": {
              "answerKey": "(i) True. (ii) False. (iii) False. (iv) False.",
              "solution": "(i) <u>True</u> — both evaporation and distillation can separate salt from water. (ii) <u>False</u> — distillation works for liquids with different boiling points. (iii) <u>False</u> — solvent level must be below the sample spot (chromatography). (iv) <u>False</u> — evaporation removes solvent only; crystallisation controls cooling rate to form pure crystals."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Why do immiscible liquids form two separate layers in a separating funnel?",
            "answer": {
              "answerKey": "Different densities and unlike intermolecular forces prevent mixing; denser liquid settles below.",
              "solution": "Immiscible liquids have different <u>densities</u> and dissimilar intermolecular forces. <u>Denser liquid settles below</u>; lighter floats on top. A separating funnel exploits this to drain them separately."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "Is sublimation different from evaporation? Justify.",
            "answer": {
              "answerKey": "Yes — evaporation: liquid→gas. Sublimation: solid→gas directly, no liquid stage.",
              "solution": "Yes, they differ. <u>Evaporation</u>: liquid → gas (at any temperature, from surface). <u>Sublimation</u>: solid → gas directly (no liquid intermediate) — e.g., iodine, naphthalene, camphor."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Clouds are made up of tiny water droplets or ice crystals floating in the air. Based on what you know about solutions, suspensions and colloids, what type of mixture do you think clouds are and why?",
            "answer": {
              "answerKey": "Colloid (aerosol) — liquid/solid particles dispersed in gas (air).",
              "solution": "Clouds are <u>colloids (aerosols)</u>: tiny water droplets (1–1000 nm) dispersed in air. They show the <u>Tyndall effect</u>, do not settle quickly, and cannot be separated by filtration."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Why do cities with a lot of smoke and dust in the air often look hazy?",
            "answer": {
              "answerKey": "Smoke/dust particles form a colloid that scatters light (Tyndall effect), reducing visibility.",
              "solution": "Smoke and dust particles form a <u>colloidal system</u> in air. These particles scatter light — the <u>Tyndall effect</u> — making the sky look hazy and opaque. Scattering reduces direct transmission of sunlight, limiting visibility."
            }
          }
        ]
      },
      {
        "id": "ex5.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Which of the following mixtures are correctly classified as homogeneous (Hm) and heterogeneous (Ht)? Choose the correct option. (i) Air — Hm, Milk — Ht, Sugar solution — Hm, Smoke — Hm (ii) Brass — Ht, Fog — Ht, Vinegar — Ht, Muddy water — Hm (iii) Copper sulfate solution — Hm, Salt solution — Hm, Milk — Hm, Bronze — Hm (iv) Muddy water — Ht, Milk — Ht, Blood — Ht, Brass — Hm",
            "answer": {
              "answerKey": "(iv) is correct: Muddy water–Ht, Milk–Ht, Blood–Ht, Brass–Hm.",
              "solution": "Option (iv) is correct: Muddy water — <u>Ht</u> (suspension); Milk — <u>Ht</u> (colloid); Blood — <u>Ht</u> (colloid); Brass — <u>Hm</u> (alloy, uniform composition). Option (iii) is wrong: Milk is a colloid (heterogeneous), not homogeneous."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Choose the correct options, and explain the reason for the correct and incorrect options. Which among the following mixtures show the Tyndall Effect? A mixture of: (a) air and dust particles (b) copper sulfate and water (c) starch and water (d) acetone and water (i) a and b (ii) b and d (iii) a and c (iv) c and d",
            "answer": {
              "answerKey": "(iii) a and c are colloids and show the Tyndall Effect.",
              "solution": "Option (iii) a and c is correct. (a) Air + dust — <u>colloidal aerosol</u> → Tyndall effect. (c) Starch + water — <u>colloidal sol</u> → Tyndall effect. (b) CuSO₄ + water and (d) acetone + water — true solutions → no Tyndall effect."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Fill in the table for Solution, Suspension, and Colloid.",
            "answer": {
              "answerKey": "Solution: <1 nm, transparent, no settling. Suspension: >1000 nm, settles, filterable. Colloid: 1–1000 nm, Tyndall effect.",
              "solution": "<u>Solution</u>: particles <1 nm; transparent; do not settle; cannot be filtered. E.g., salt solution.\n<u>Suspension</u>: particles >1000 nm; settles on standing; filtered by filter paper. E.g., muddy water.\n<u>Colloid</u>: particles 1–1000 nm; scatter light (Tyndall effect); do not settle easily. E.g., milk, smoke."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Solve the following problems: (i) A cake recipe uses dry ingredients, namely 75 g of sugar for 420 g of all-purpose flour and 5 g of sodium hydrogencarbonate. Express the concentration of each component in the mixture using an appropriate method. (ii) A brass alloy contains 70% copper by mass. Calculate the quantities of copper and zinc present in 120 g of brass.",
            "answer": {
              "answerKey": "(i) Sugar=15%, Flour=84%, NaHCO₃=1%. (ii) Cu=84 g, Zn=36 g.",
              "solution": "(i) Total = 500 g; Sugar: <u>15%</u>; Flour: <u>84%</u>; NaHCO₃: <u>1%</u>\n(ii) Cu = 70% of 120 = <u>84 g</u>; Zn = 30% of 120 = <u>36 g</u>"
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "The label on a cooking oil pack says one litre (910 g). If this oil is mixed with water, will it form a separate layer? If so, which substance will be on top? How will you separate the two layers? Also, draw the diagram of the apparatus used.",
            "answer": {
              "answerKey": "Yes — oil less dense, floats on top. Separate using a separating funnel.",
              "solution": "Oil is immiscible with water and less dense (910 g/L vs water 1000 g/L) → <u>oil floats on top</u>. Separation: <u>Separating funnel</u> — water (denser) drains from bottom stopcock; oil remains on top and is collected."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Assertion (A): Solutions do not exhibit the Tyndall effect. Reason (R): The particles in solutions are larger than 100 nm, so they cannot scatter light. Choose the correct option: (i) Both A and R are true, and R is the correct explanation of A. (ii) Both A and R are true, but R is not the correct explanation of A. (iii) A is true, but R is false. (iv) A is false, but R is true.",
            "answer": {
              "answerKey": "(iii) Assertion true, Reason false — solution particles are <1 nm, not >100 nm.",
              "solution": "Option (iii) is correct. <u>Assertion is true</u>: Solutions do not show Tyndall effect. <u>Reason is false</u>: Solution particles are smaller than 1 nm — too small to scatter light. Tyndall effect requires particles in the 1–1000 nm (colloidal) range."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "How would you separate the mixtures given in Table 5.3? Mention the reason for choosing your method. If a mixture cannot be separated, explain why.",
            "answer": {
              "answerKey": "Filtration; Centrifugation; Sublimation; Filtration+Evaporation; Evaporation/Distillation; Separating funnel; Chromatography.",
              "solution": "Mud from muddy water: <u>Filtration</u>.\nPlasma from blood: <u>Centrifugation</u>.\nNaphthalene and sand: <u>Sublimation</u>.\nChalk and salt: <u>Filter</u> (chalk) → evaporate filtrate (salt).\nSalt and water: <u>Evaporation</u> or Distillation.\nOil from water: <u>Separating funnel</u>.\nFlower pigments: <u>Chromatography</u>."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "Two miscible liquids, A and B, are present in a mixture. The boiling point of A is 60 °C and the boiling point of B is 90 °C. Suggest a method to separate them. Also, draw a labelled diagram of the method suggested.",
            "answer": {
              "answerKey": "Fractional distillation — A distils at 60°C first, then B at 90°C.",
              "solution": "Method: <u>Fractional Distillation</u>. Heat mixture in a round-bottom flask. Liquid A (b.p. 60°C) vaporises first → passes through fractionating column → condenses → collected. Raise temperature to 90°C → B distils.\nDiagram: flask → fractionating column → condenser → collection flask."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Compare evaporation, crystallization and distillation. In which situation, would you prefer each of these over the others?",
            "answer": {
              "answerKey": "Evaporation: recover solid. Crystallization: pure crystals. Distillation: separate liquids with different boiling points.",
              "solution": "<u>Evaporation</u>: preferred to recover solid solute from solution (e.g., table salt from brine).\n<u>Crystallization</u>: preferred for pure solid crystals — e.g., pure alum crystals.\n<u>Distillation</u>: preferred to separate miscible liquids with different boiling points."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Blood is an example of a colloidal mixture. (i) What would happen if blood behaved like a true suspension inside the body? (ii) In a blood sample, identify the dispersed phase and the dispersion medium.",
            "answer": {
              "answerKey": "(i) Blood cells would settle — fatal. (ii) Dispersed phase: blood cells/proteins; Medium: plasma.",
              "solution": "(i) If blood were a suspension, blood cells would settle at vessel bottoms → blocking circulation → fatal. (ii) <u>Dispersed phase</u>: RBCs, WBCs, platelets, proteins. <u>Dispersion medium</u>: plasma (mostly water)."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "You are given a mixture of sand, common salt and naphthalene (Fig. 5.25a). The Fig. 5.25b depicts various steps used to separate the components of this mixture. Identify and write down the correct sequence of separation techniques.",
              "figure": "/figs/science-ex5-rr-q11-fig5-25.png",
            "answer": {
              "answerKey": "Sublimation (naphthalene) → Filter/dissolve in water (sand) → Evaporate (common salt).",
              "solution": "Step 1 — <u>Sublimation</u>: Heat mixture → naphthalene sublimes, collected on cold surface.\nStep 2 — <u>Dissolve + Filter</u>: Add water to sand+salt → filter to remove sand.\nStep 3 — <u>Evaporation</u>: Evaporate filtrate → common salt recovered."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "Why is distillation an effective method for separating water and acetone?",
            "answer": {
              "answerKey": "Water (b.p. 100°C) and acetone (b.p. 56°C) have very different boiling points — distillation separates them easily.",
              "solution": "Water boils at 100°C and acetone at 56°C — a 44°C difference. When heated to ~56°C, <u>acetone vaporises first</u>, is condensed and collected. Water remains until temperature is raised."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Answer the following questions with the help of the data given in Table 5.4. (i) What mass of potassium nitrate would be needed to prepare its saturated solution in 50 g of water at 40 °C? (ii) A student makes a saturated solution of potassium chloride in water at 80 °C and leaves the solution to cool at room temperature (25 °C). What would she observe as the solution cools? Explain. (iii) What is the effect of temperature on the solubility of salts? Also, compare the changes in the solubility of the four given salts with increasing temperature from 10 °C to 80 °C.",
            "answer": {
              "answerKey": "(i) 31 g. (ii) KCl crystals precipitate. (iii) Solubility of most solids increases with temperature.",
              "solution": "(i) KNO₃ solubility at 40°C = 62 g/100 g water. For 50 g: 62×50/100 = <u>31 g</u>\n(ii) Solubility of KCl drops from ~54 g/100 g (80°C) to ~35 g/100 g (25°C) → ~19 g of KCl <u>crystallises out</u>.\n(iii) Solubility of KNO₃, KCl, NH₄Cl increases with temperature; NaCl shows very little change."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "Three students, A, B and C, are preparing sugar solutions for an experiment: • Student A dissolves 20 g of sugar in 80 g of water. • Student B dissolves 20 g of sugar in 100 g of water. • Student C dissolves 30 g of sugar in 80 g of water. (i) Calculate the mass percentage (% m/m) concentration of sugar in each student's solution. (ii) Whose solution is the most concentrated? Explain why.",
            "answer": {
              "answerKey": "(i) A=20%, B=16.67%, C=27.27%. (ii) Student C.",
              "solution": "A: (20/100)×100 = <u>20%</u>\nB: (20/120)×100 = <u>16.67%</u>\nC: (30/110)×100 = <u>27.27%</u>\n\n<u>Student C</u> has the most concentrated solution."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "Examine Fig. 5.26. (i) Identify the separation technique marked as 'S'. (ii) Label the apparatus A, B and C. (iii) Which of the following mixtures can be separated by the technique identified above? Use the data given in Table 5.5. Mixtures: (a) water — acetone (b) water — salt (c) acetone — alcohol (d) sand — salt (e) alcohol — chloroform (f) alcohol — benzene.",
              "figure": "/figs/science-ex5-rr-q15-fig5-26.png",
            "answer": {
              "answerKey": "(i) Distillation. (ii) A=flask, B=thermometer, C=condenser. (iii) a, c, e, f (miscible liquids with different b.p.).",
              "solution": "(i) Technique S = <u>Distillation</u>.\n(ii) A = Round-bottom flask; B = Thermometer; C = Condenser.\n(iii) Can be separated: (a) water–acetone ✓; (c) acetone–alcohol ✓; (e) alcohol–chloroform ✓; (f) alcohol–benzene ✓.\nCannot: (b) water–salt (not liquid-liquid); (d) sand–salt (solid mixture)."
            }
          }
        ]
      },
      {
        "id": "ex5.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 5.1 (three mixtures): Group A stirs salt in water, Group B chalk powder in water, Group C milk drops in water. Check visibility, shine a laser through each, leave undisturbed, then filter. Are these the same kind of mixture?",
            "answer": {
              "answerKey": "No — A is a solution, B a suspension, C a colloid (different particle behaviour).",
              "solution": "<u>A (salt)</u>: particles invisible, no laser path, nothing on filter → <u>true solution</u>. <u>B (chalk)</u>: particles visible, settle down, residue on filter → <u>suspension</u>. <u>C (milk)</u>: invisible but shows a <u>laser path (Tyndall effect)</u>, no residue → <u>colloid</u>."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 5.3 (prepare crystals): dissolve copper sulphate in warm water with a drop of dilute sulphuric acid till saturated, filter hot, cool undisturbed, then filter and dry the crystals. What should you get, and what precautions apply?",
            "answer": {
              "answerKey": "Large, shiny blue copper sulphate crystals; handle chemicals only under teacher supervision.",
              "solution": "Saturate warm water with copper sulphate (teacher adds the acid drop) → <u>filter hot</u> to remove impurities → cool <u>slowly without disturbing</u> → <u>large, shiny blue crystals</u> separate; rinse with cold water and dry. Precautions: <u>do not touch chemicals</u>; teacher handles acid and heating."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 5.5 (paper chromatography): draw a pencil line 2 cm from the bottom of a paper strip, put a black ink spot on it, dip the strip in water (level below the spot) and watch. What do you notice and infer?",
            "answer": {
              "answerKey": "The black spot splits into separate coloured spots — black ink is a mixture of dyes.",
              "solution": "As water rises, the single black spot <u>separates into different colour bands</u>. Inference: black sketch-pen ink is a <u>mixture of dyes</u> that travel at different speeds on paper — the basis of <u>chromatography</u> as a separation technique."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Activity 5.6 (separating funnel): pour 5 mL mustard oil and 20 mL water into a separating funnel and let it stand. Which layer is which, and how do you collect them separately?",
            "answer": {
              "answerKey": "Oil floats on water; drain the lower water layer first through the stopcock, then the oil.",
              "solution": "On standing, <u>yellow oil forms the upper layer</u> (less dense, immiscible) and <u>water the lower layer</u>. Open the stopcock slowly to run the <u>water out first</u>; close it as the boundary arrives, discard the mixed drops, then collect the <u>oil separately</u>."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Activity 5.7 (camphor sublimation): heat crushed camphor–sand mixture in a china dish covered with an inverted cotton-plugged funnel. What deposits where, and what does it prove?",
            "answer": {
              "answerKey": "White camphor deposits on the funnel walls; sand stays behind — sublimation separates them.",
              "solution": "On gentle heating, <u>camphor sublimes</u> (solid → vapour) and re-deposits as <u>white solid on the cool funnel walls</u>; <u>sand stays</u> in the dish. This proves sublimation separates a <u>sublimable solid from a non-sublimable</u> one without any liquid stage."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch06",
    "number": 6,
    "title": "How Forces Affect Motion",
    "slug": "how-forces-affect-motion",
    "code": "0906ch06",
    "description": "Newton's laws, inertia, momentum and conservation.",
    "exercises": [
      {
        "id": "ex6.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "A weightlifter lifts a barbell (Fig. 6.8). List two forces that are acting on the barbell. Are these forces balanced if the weightlifter keeps the barbell steady?",
            "answer": {
              "answerKey": "Weight (gravitational force) downward and the weightlifter's upward force act on the barbell; yes, they are balanced when the barbell is steady.",
              "solution": "The barbell has its <u>weight</u> acting downward and the <u>upward force exerted by the weightlifter</u>. When the barbell is held steady, acceleration is zero, so the two forces are equal in magnitude and opposite in direction; the net force is zero."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Two players R and S are participating in an arm-wrestling match (Fig. 6.9). At the instant when the arms tilt to the front direction (out of the page towards you), are the forces exerted by the players balanced? If not, which player exerted the larger force?",
            "answer": {
              "answerKey": "They are not balanced; the player whose side the arms tilt towards exerts the larger force (S in the figure).",
              "solution": "The arms tilt toward the front, so the net force is not zero. The player whose force produces the observed direction of acceleration exerts the larger force; in the figure this is <u>S</u>."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "An object is moving with a constant velocity. Is there a net force acting upon it?",
            "answer": {
              "answerKey": "No. Constant velocity means zero acceleration, so the net force is zero.",
              "solution": "By Newton's second law, <u>F<sub>net</sub> = ma</u>. Constant velocity means <u>a = 0</u>, therefore the <u>net force is zero</u>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Suppose, no net force is acting on an object. Which of the following situations are possible? (i) Object remains at rest if at rest. (ii) Object keeps moving with a constant velocity if already moving. (iii) Object is moving with a constant acceleration.",
            "answer": {
              "answerKey": "(i) and (ii) are possible; (iii) is not.",
              "solution": "Zero net force means zero acceleration. Therefore an object can remain at rest if initially at rest, or continue with constant velocity if already moving. A non-zero constant acceleration is not possible when the net force is zero."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "In the real world, it is difficult to find a situation where no forces are acting on an object. But by applying additional forces, a condition can be achieved where the net force on the object is zero. Explain with the help of an example.",
            "answer": {
              "answerKey": "Different forces can balance so their vector sum is zero; e.g. a book resting on a table has weight downward and an equal normal force upward.",
              "solution": "Example: a book resting on a horizontal table has <u>gravitational force</u> downward and an equal <u>normal force</u> upward. Forces are present, but their vector sum is zero, so the book has no acceleration."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "A toy car of mass 100 g is moving with a constant velocity of 0.5 m s⁻¹. What is the net force acting on the toy car?",
            "answer": {
              "answerKey": "0 N.",
              "solution": "The velocity is constant, so acceleration is <strong>0 m s<sup>−2</sup></strong>. Therefore <u>F<sub>net</sub> = ma = 0.1 × 0 = 0 N</u>."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Two children of different masses are sitting on identical swings. To impart identical initial acceleration, for which child would you require to apply a larger force? Explain why.",
            "answer": {
              "answerKey": "The larger-mass child needs the larger force.",
              "solution": "From <u>F = ma</u>, for the same acceleration, force is directly proportional to mass. Therefore the child with the <u>larger mass</u> requires the larger applied force."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "How are glass items packed for transportation using a bubble wrap or hay protected from damage?",
            "answer": {
              "answerKey": "Bubble wrap or hay increases the stopping time during a collision, reducing the average force.",
              "solution": "When the package is dropped or struck, the cushioning material increases the time over which the item comes to rest. For the same change in momentum, increasing stopping time decreases the average impact force, reducing damage."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Why does a fireperson sometimes struggle when holding the pipe issuing water?",
            "answer": {
              "answerKey": "The outgoing water has momentum; the changing momentum of the water produces an equal and opposite reaction force on the pipe.",
              "solution": "Water is accelerated forward out of the nozzle and gains momentum. The corresponding reaction force acts backward on the pipe and the fireperson, so a substantial opposing force must be resisted."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Suppose a spacecraft is moving in a region of space where the gravitational force acting upon it is negligible. Suggest how can it change its velocity.",
            "answer": {
              "answerKey": "It can eject gas/propellant in one direction; the reaction force changes the spacecraft velocity in the opposite direction.",
              "solution": "The spacecraft can change its velocity by <u>expelling propellant</u>. The expelled gases gain momentum in one direction and the spacecraft receives an equal and opposite reaction, changing its velocity."
            }
          }
        ]
      },
      {
        "id": "ex6.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "A table is moved across the floor at constant velocity using force F. How much is the frictional force?",
            "answer": {
              "answerKey": "Frictional force = F, opposite to direction of motion.",
              "solution": "At constant velocity, acceleration = 0 → net force = 0. By Newton's Second Law, <u>friction must exactly equal F</u> in magnitude but act in the opposite direction to balance the applied force."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "For a ball on a frictionless surface: (i) No net force — velocity? (ii) Net force in direction of motion — velocity? (iii) Net force opposite to motion — velocity?",
            "answer": {
              "answerKey": "(i) Velocity unchanged. (ii) Velocity increases. (iii) Velocity decreases.",
              "solution": "(i) No net force → velocity remains the same (<u>inertia</u> — Newton's First Law).\n(ii) Force in direction of motion → velocity <u>increases</u> (positive acceleration).\n(iii) Force opposite to motion → velocity <u>decreases</u> (deceleration/retardation)."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Two blocks P and Q on a smooth horizontal surface are shown in Fig. 6.36a and Fig. 6.36b. Two forces of magnitudes 4 N and 5 N are acting in opposite directions on block P, while block Q is moving with a constant velocity. Which of the following statement is correct? (i) P experiences a net force and Q does not experience a net force. (ii) P does not experience a net force and Q experiences a net force. (iii) Both P and Q experience a net force. (iv) Neither P nor Q experiences a net force.",
              "figure": "/figs/science-ex6-rr-q3-fig6-36.png",
            "answer": {
              "answerKey": "(i) is correct — P: net force = 1 N; Q: constant velocity → net force = 0.",
              "solution": "Option (i) is correct. Block P: net force = 5–4 = <u>1 N</u> (net force present). Block Q: constant velocity → acceleration = 0 → <u>net force = 0</u>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "While practising for the snake boat race (Vallum kalli in Kerala), 100 oarsmen are rowing a boat together. Out of these, 95 row backwards to propel the boat forward. But by mistake, 5 oarsmen row in the opposite direction. If each oarsman applies a horizontal force of 200 N, what is the net force on the snake boat? (Ignore drag forces, air friction, etc.)",
            "answer": {
              "answerKey": "Net force = 18,000 N forward.",
              "solution": "Forward force = 95 × 200 = 19,000 N\nBackward force = 5 × 200 = 1,000 N\n\n<u>Net force</u> = 19,000 – 1,000 = <strong>18,000 N (forward)</strong>"
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "When a net force acts on an object, we observe that the object accelerates: (i) opposite to the direction of force, with acceleration proportional to the force acting on the object. (ii) opposite to the direction of force, with acceleration proportional to the mass of the object. (iii) in the direction of force, with acceleration inversely proportional to the force acting on the object. (iv) in the direction of force, with acceleration proportional to the force acting on the object.",
            "answer": {
              "answerKey": "(iv) is correct — Newton's Second Law: F = ma.",
              "solution": "Option (iv) is correct. By <u>Newton's Second Law</u>: F = ma. Object accelerates in the direction of the net force, with acceleration proportional to force and inversely proportional to mass."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Position-time graphs for A, B, C, D. Net force acts on which object?",
              "figure": "/figs/science-ex6-rr-q6-fig6-37.png",
            "answer": {
              "answerKey": "Object C — curved position-time graph indicates changing velocity (acceleration), hence net force.",
              "solution": "A net force causes acceleration = changing velocity → shown as a <u>curved line</u> on a position-time graph. A straight line = uniform velocity = no net force. <u>Object C</u> (curved graph) has acceleration → net force acts."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "A sailor jumps from a small boat to the shore. Does the boat move? In which direction? Why?",
              "figure": "/figs/science-ex6-rr-q7-fig6-38.png",
            "answer": {
              "answerKey": "Yes — boat moves backward (Newton's Third Law: equal and opposite reaction).",
              "solution": "Yes, the boat moves <u>backward</u>. By <u>Newton's Third Law</u>: when the sailor pushes off the boat forward, the boat receives an equal and opposite reaction force → moves away from the shore."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "During high jump, a landing mat or sand bed is placed. Explain the reason.",
              "figure": "/figs/science-ex6-rr-q8-fig6-39.png",
            "answer": {
              "answerKey": "Soft mat increases time of impact, reducing force on athlete (impulse = F × t = constant).",
              "solution": "By Newton's Second Law: F = Δp/Δt. A soft mat <u>increases the time (Δt)</u> for the athlete to stop. Since the change in momentum is fixed, larger Δt means <u>smaller force</u> on the athlete → prevents injury."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "A hand cart loaded with vegetables collides with an identical but empty hand cart. During the collision: (i) the loaded cart exerts a force of larger magnitude on the empty cart. (ii) the empty cart exerts a force of larger magnitude on the loaded cart. (iii) neither cart exerts a force on the other. (iv) the loaded cart and the empty cart, both exert an equal magnitude of force on each other.",
            "answer": {
              "answerKey": "Newton's Third Law: every action has an equal and opposite reaction.",
              "solution": "Option (iv) is correct. By <u>Newton's Third Law</u>: during collision, both carts exert <u>equal and opposite forces</u> on each other, regardless of their masses."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Acceleration-mass graph shows constant force F. Plot the force-mass graph.",
              "figure": "/figs/science-ex6-rr-q10-fig6-40.png",
            "answer": {
              "answerKey": "Force-mass graph is a horizontal straight line (F = constant regardless of mass).",
              "solution": "From a–m graph: a = F/m → a∝1/m (hyperbola). For the <u>Force-mass graph</u>: since F is constant, it is a <u>horizontal straight line</u> parallel to the mass-axis. Force does not change with mass (it is externally fixed)."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "Velocity-time graph for a 10 kg object (Fig. 6.41). Calculate force acting on it.",
              "figure": "/figs/science-ex6-rr-q11-fig6-41.png",
            "answer": {
              "answerKey": "Force = 25 N.",
              "solution": "From graph: a = slope of v-t graph\n\nF = ma = 10 × 2.5 = <strong>25 N</strong>"
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "A bullet of mass 50 g moving with a speed of 100 m s⁻¹ enters a heavy stationary wooden block and stops after penetrating a distance of 50 cm. Estimate the stopping force acting on the bullet (assume that the bullet undergoes constant acceleration within the block).",
            "answer": {
              "answerKey": "Stopping force = 500 N.",
              "solution": "m = 0.05 kg; u = 100 m s⁻¹; v = 0; s = 0.5 m\n\nv² = u² + 2as → 0 = 10000 + 2a×0.5 → a = –10000 m s⁻²\n\n<u>F</u> = ma = 0.05 × 10000 = <strong>500 N</strong> (opposing motion)"
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Football (0.4 kg) kicked to 108 km/h. Force applied = 800 N. Calculate time of contact.",
            "answer": {
              "answerKey": "Time = 0.015 s.",
              "solution": "v = 108 km h⁻¹ = 30 m s⁻¹; u = 0; m = 0.4 kg; F = 800 N\n\nImpulse: F×t = m(v–u) → 800×t = 0.4×30 = 12\n\n<u>t</u> = 12/800 = <strong>0.015 s</strong>"
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "Object: 2 kg, moving at 10 m/s. Friction = 7 N, additional opposing force = 3 N applied simultaneously. Find distance before stop.",
            "answer": {
              "answerKey": "Distance = 10 m.",
              "solution": "m = 2 kg; u = 10 m s⁻¹; v = 0\n\nTotal retarding force = 7 + 3 = 10 N; a = –F/m = –10/2 = –5 m s⁻²\n\nv² = u² + 2as → 0 = 100 – 10s → <u>s = 10 m</u>"
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "Tractor pulls harrow (mass m₁) with force F at acceleration a₁. Pulls trolley (m₂) with same F at acceleration a₂. If both pulled together by same F, find acceleration.",
            "answer": {
              "answerKey": "Resulting acceleration = a₁a₂/(a₁ + a₂).",
              "solution": "m₁ = F/a₁; m₂ = F/a₂\n\nCombined mass: F/a₁ + F/a₂ = F(a₁+a₂)/(a₁a₂)\n\n<u>New acceleration</u> a = F ÷ [F(a₁+a₂)/(a₁a₂)] = <strong>a₁a₂/(a₁+a₂)</strong>"
            }
          },
          {
            "id": "q16",
            "number": "16",
            "text": "When the pole of a bar magnet is brought close to a magnetic compass, the bar magnet and the compass needle (which is also a magnet) exert a magnetic force on each other. As per Newton's third law of motion, both the forces are equal in magnitude and opposite in direction. However, the compass needle moves, whereas the bar magnet does not move (Fig. 6.42). Explain why.",
              "figure": "/figs/science-ex6-rr-q16-fig6-42.png",
            "answer": {
              "answerKey": "Forces are equal, but compass needle has negligible mass — small force gives it large acceleration.",
              "solution": "Newton's Third Law holds: both experience equal and opposite magnetic forces. The compass needle has very small mass → by Newton's Second Law, a = F/m → <u>large acceleration</u> → rotates noticeably. Bar magnet has much larger mass → negligible acceleration."
            }
          }
        ]
      },
      {
        "id": "ex6.eoc",
        "title": "Chapter Exercises",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "A weightlifter lifts a barbell. List two forces acting on the barbell. Are these forces balanced if the weightlifter keeps the barbell steady?",
            "answer": {
              "answerKey": "Weight (gravity) downwards and muscular normal force upwards — balanced (net force zero) when steady.",
              "solution": "Two forces: <u>weight (gravity)</u> pulling down and the lifter’s <u>upward muscular force</u>. Since the barbell is steady (no acceleration), the net force is <u>zero</u> — the two forces are <u>balanced</u>."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Two players R and S are arm-wrestling. At the instant the arms tilt out of the page towards you, are the forces exerted by the players balanced? If not, which player exerted the larger force?",
            "answer": {
              "answerKey": "Not balanced — the player driving the motion exerts the larger force.",
              "solution": "Motion means a <u>net force</u> exists, so the forces are <u>unbalanced</u>. The player whose push <u>dominates and moves the arms</u> in that direction is exerting the <u>larger force</u> at that instant."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "An object is moving with a constant velocity. Is there a net force acting upon it?",
            "answer": {
              "answerKey": "No — constant velocity means zero acceleration, hence zero net force.",
              "solution": "By Newton’s First Law, <u>constant velocity</u> (fixed speed and direction) means <u>zero acceleration</u>, so the <u>net force is zero</u>. Individual forces may act, but they cancel out."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Suppose no net force acts on an object. Which are possible: (i) stays at rest if at rest; (ii) keeps moving with constant velocity; (iii) moves with constant acceleration?",
            "answer": {
              "answerKey": "Only (i) and (ii) are possible; acceleration needs a net force.",
              "solution": "With zero net force, acceleration is zero: a resting object <u>stays at rest (i)</u> and a moving object <u>keeps its velocity (ii)</u>. <u>(iii) is impossible</u> — constant acceleration requires a constant net force (F = ma)."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "In the real world no object is force-free, yet net force can be zero by applying additional forces. Explain with an example.",
            "answer": {
              "answerKey": "A book resting on a table: gravity is cancelled by the normal reaction — net force zero.",
              "solution": "Example: a <u>book on a table</u> — gravity pulls it down while the table pushes up with an equal <u>normal force</u>; they cancel → <u>net force zero</u>, book stays put. Similarly a car at steady speed: engine force cancels friction and air drag."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "A toy car of mass 100 g moves with a constant velocity of 0.5 m/s. What is the net force acting on it?",
            "answer": {
              "answerKey": "Zero — constant velocity implies zero acceleration and zero net force.",
              "solution": "Mass and speed are distractors. Since velocity is <u>constant</u>, acceleration a = 0, so F = ma = <u>0 N</u>. The net force on the toy car is <u>zero</u>."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Two children of different masses sit on identical swings. To give both the same initial acceleration, for which child must you apply a larger force? Why?",
            "answer": {
              "answerKey": "The heavier child — by F = ma, more mass needs more force for the same acceleration.",
              "solution": "By <u>F = ma</u>, force and mass are directly proportional for fixed acceleration. So the <u>heavier child</u> needs the <u>larger push</u> to achieve the same initial acceleration as the lighter child."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "How does packing glass items in bubble wrap or hay protect them during transportation?",
            "answer": {
              "answerKey": "Soft packing extends collision time, reducing the impact force (impulse spread over longer time).",
              "solution": "A sudden stop delivers a fixed <u>impulse</u> (change in momentum). Bubble wrap/hay <u>extends the stopping time</u>, so the same impulse acts with a much <u>smaller force</u> (F = impulse ÷ time) — below the glass’s breaking limit."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Why does a firefighter sometimes struggle while holding a pipe issuing water?",
            "answer": {
              "answerKey": "The fast water jet exerts an equal backward reaction force on the pipe (Newton’s Third Law).",
              "solution": "The pipe pushes water forward at high speed; by <u>Newton’s Third Law</u> the water pushes the pipe <u>backwards with equal force</u>. This strong, jerky reaction is what the firefighter must wrestle to control."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "A spacecraft moves where gravity is negligible. How can it change its velocity?",
            "answer": {
              "answerKey": "By expelling mass (thrusters) — the reaction pushes the craft the opposite way.",
              "solution": "It must throw something away: firing <u>thrusters</u> expels gas backwards, and the <u>reaction pushes the craft forwards</u> (Newton’s Third Law — same principle as a balloon rocket). Steering uses small side thrusters; nothing to push against is needed."
            }
          }
        ]
      },
      {
        "id": "ex6.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 6.1 (rubber band and coins): launch a taped coin-stack with a stretched rubber band on wood, laminated top and polished marble; measure travel distance each time. What do you conclude?",
            "answer": {
              "answerKey": "Smoother surface → longer travel → less friction; velocity drops slowest on marble.",
              "solution": "Stretch the band to mark C and release identically each time. The stack travels <u>farthest on polished marble</u>, less on laminate, least on wood. Conclusion: <u>smoother surfaces exert less friction</u>, so velocity decreases slowest there; friction opposes motion."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 6.2 (spring balance and block): pull a wooden block on the same three surfaces and note the balance reading just as motion starts. What does the reading mean, and how do surfaces compare?",
            "answer": {
              "answerKey": "Reading at the start of motion equals limiting friction — smallest on marble, largest on wood.",
              "solution": "Zero the horizontal balance, attach the block, pull gently: the reading <u>just as it slips</u> equals the <u>limiting friction</u> (net force zero at that instant). Readings differ by surface — <u>smallest on marble, largest on wood</u> — matching Activity 6.1’s distances in reverse."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 6.3 (cart, pulley, varying force): pull a wheeled cart with a thread over a pulley loaded by a cup of coins; time it over a fixed distance, then double the cup mass and repeat. Using s = ½aT², what is the conclusion?",
            "answer": {
              "answerKey": "Doubling the pulling force (shorter time) increases acceleration — a ∝ F for fixed mass.",
              "solution": "Same distance s both times: a₂/a₁ = <u>(T₁/T₂)²</u>. The heavier cup gives a <u>shorter time</u>, so a₂ > a₁. Conclusion: for a fixed cart mass, <u>acceleration rises as net force rises</u> — verifying F = ma qualitatively."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Activity 6.4 (double the cart mass): repeat Activity 6.3 keeping the cup mass fixed but doubling the cart’s mass. What happens to acceleration?",
            "answer": {
              "answerKey": "Acceleration falls (longer time) — for the same force, a is inversely related to mass.",
              "solution": "Same pull, heavier cart → the cart takes <u>longer</u> to cover the distance, so acceleration <u>decreases</u>. Conclusion: for a given force, <u>acceleration is inversely proportional to mass</u> (a = F/m) — heavier objects resist motion change more."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Activity 6.6 (two spring balances): hook two identical balances together, fix one end, pull the other, and compare readings at rest. What do you predict and observe?",
            "answer": {
              "answerKey": "Both balances always show the same reading — action equals reaction (Newton’s Third Law).",
              "solution": "Prediction: the readings <u>match</u>. Observation (repeated with different pulls): both scales read <u>identically every time</u>. Each balance pulls the other with an <u>equal and opposite force</u> — a direct static demo of action–reaction pairs."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Activity 6.7 (balloon rocket): thread a straw-mounted balloon along a taut line, release its tied neck, and watch. Which way does it move, and how does Newton’s Third Law explain it?",
            "answer": {
              "answerKey": "The balloon shoots away from the escaping air — air pushed back, balloon pushed forward.",
              "solution": "Air rushes <u>out of the neck backwards</u>; the reaction drives the <u>balloon-straw forwards</u> along the thread. This action–reaction pair is exactly how <u>rockets and jets</u> work — expelled mass one way, craft the other."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch07",
    "number": 7,
    "title": "Work, Energy, and Simple Machines",
    "slug": "work-energy-and-simple-machines",
    "code": "0906ch07",
    "description": "Work, kinetic and potential energy, power, simple machines.",
    "exercises": [
      {
        "id": "ex7.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "In the previous chapter, a weightlifter is shown holding a barbell steady in her hands (Fig. 6.8). Is she doing any work on the barbell while holding it steady?",
            "answer": {
              "answerKey": "No mechanical work is done on the barbell while it remains stationary because its displacement is zero.",
              "solution": "Mechanical work is <u>W = F × displacement in the direction of force</u>. While the barbell is held steady its displacement is zero, so the work done on the barbell is <strong>0</strong>."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Is the work done by friction on the stack of coins that travels on a rough surface (Fig. 6.13c) — positive, negative or zero?",
            "answer": {
              "answerKey": "Negative work.",
              "solution": "Friction acts opposite to the displacement of the moving stack, so the work done by friction is <u>negative</u>."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "When you pedal a bicycle on a flat road, your muscles supply energy. In what forms does this muscular energy appear as you ride?",
            "answer": {
              "answerKey": "It appears mainly as kinetic energy of the moving bicycle/rider and as thermal energy due to friction and air resistance, with some energy in other forms such as sound.",
              "solution": "The chemical energy supplied by the muscles is converted mainly into <u>kinetic energy</u> of the bicycle and rider. Part is dissipated as <u>thermal energy</u> because of friction and air resistance, and a small part appears as sound and other losses."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Two objects A and B of mass m and 4m have the same kinetic energy. What is the ratio of the magnitude of velocities of A and B?",
            "answer": {
              "answerKey": "v_A : v_B = 2 : 1.",
              "solution": "Since <u>K = ½mv²</u> and the kinetic energies are equal, m v<sub>A</sub><sup>2</sup> = 4m v<sub>B</sub><sup>2</sup>. Hence <u>v<sub>A</sub> : v<sub>B</sub> = 2 : 1</u>."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Does the kinetic energy of an object which moves with constant velocity change with its position?",
            "answer": {
              "answerKey": "No. For constant mass and constant velocity, kinetic energy remains constant.",
              "solution": "Kinetic energy is <u>K = ½mv²</u>. If mass and velocity are constant, kinetic energy does not change with position."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Does the potential energy of an object near the surface of the Earth change if it moves with constant velocity in the horizontal direction? What if the object is gradually raised in the vertical direction?",
            "answer": {
              "answerKey": "No for horizontal motion at constant height; yes, it increases when the object is raised vertically.",
              "solution": "Near Earth’s surface <u>PE = mgh</u>. Horizontal motion at constant height leaves h unchanged, so PE does not change. Raising the object increases h, so its potential energy increases."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "For the situation depicted in Fig. 7.19, calculate the mechanical energy of the ball just before it hits the ground and show that even at this position, it is mgh.",
              "figure": "/figs/science-ex7-pp-q7-fig7-19.png",
            "answer": {
              "answerKey": "The mechanical energy just before impact is mgh, equal to the initial potential energy (ignoring dissipative losses).",
              "solution": "Mechanical energy = kinetic + potential. Just before impact, the ball has converted the initial potential energy into kinetic energy (with zero height reference at the ground), so <u>E = K + U = mgh</u>."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "You may have seen an exhibit like that in Fig. 7.22 in a science park, where a ball is released from the highest point. Describe how the kinetic energy and potential energy change at points A, B and C. Why do subsequent points, such as C, D and E, usually have lower heights compared to the previous ones? Could it have anything to do with the energy lost due to friction?",
              "figure": "/figs/science-ex7-pp-q8-fig7-22.png",
            "answer": {
              "answerKey": "As the ball descends, potential energy decreases and kinetic energy increases; as it climbs, the reverse occurs. Later peaks are lower because mechanical energy is lost mainly to friction and air resistance.",
              "solution": "At a high point A the ball has more <u>potential energy</u> and less kinetic energy. Moving downward toward B, PE decreases and KE increases. Climbing toward C, KE decreases and PE increases. In a real system, friction and air resistance convert part of the mechanical energy into thermal energy, so successive turning points are lower."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Explain why roads on hills are built to wind around in gentle slopes rather than going straight up (Fig. 4.26).",
            "answer": {
              "answerKey": "An inclined road increases the distance over which the same height is gained, reducing the force needed at any instant.",
              "solution": "For a given height, a gentler slope means a longer path. The component of the vehicle’s weight along the slope is smaller, so the required driving force is reduced. The total gain in gravitational potential energy is still mgh."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "To reach a higher floor, we find climbing an inclined ladder easier in comparison to climbing a vertical ladder (Fig. 7.30). Explain why.",
              "figure": "/figs/science-ex7-pp-q10-fig7-30.png",
            "answer": {
              "answerKey": "The inclined ladder provides a longer path, reducing the required upward force for the same gain in height.",
              "solution": "An inclined ladder increases the distance over which the same vertical height is gained, reducing the component of gravitational force that must be overcome at any instant. The work against gravity remains approximately mgh, but the required force is smaller."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "Why is it easier to open the lid of a can by using a spoon as shown in Fig. 7.35?",
              "figure": "/figs/science-ex7-pp-q11-fig7-35.png",
            "answer": {
              "answerKey": "The spoon acts as a lever, increasing the turning effect of the applied force about the fulcrum.",
              "solution": "The spoon is a <u>lever</u>. Its long effort arm produces a larger turning effect (torque) for the same hand force, making it easier to lift the lid."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "Why do you push an object closer to scissors fulcrum when you want to cut an object which is hard?",
            "answer": {
              "answerKey": "Moving the object closer to the fulcrum reduces the load arm, increasing the mechanical advantage and cutting force.",
              "solution": "For a lever, torque balance gives <u>effort × effort arm = load × load arm</u>. Bringing the hard object closer to the scissors’ fulcrum decreases the load arm, so the same effort produces a larger force at the cutting point."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Throughout history, many designs of perpetual machines (using wheels, weights or magnets) have been proposed but never actually work. Why do all real machines eventually slow down and stop? Explain in terms of work and energy.",
            "answer": {
              "answerKey": "Real machines always dissipate some mechanical energy through friction, air resistance, deformation and other losses, so no machine can run forever without energy input.",
              "solution": "Real machines cannot avoid dissipative forces such as <u>friction</u> and air resistance. These convert useful mechanical energy into thermal energy (and sound, deformation, etc.). Without continuous external energy input, the machine’s useful mechanical energy decreases and it eventually slows and stops."
            }
          }
        ]
      },
      {
        "id": "ex7.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "State whether True or False.\n\n(i) Work is said to be done when a force is applied, even if the object does not move.\n\n(ii) Lifting a bucket vertically upward results in positive work done on the bucket.\n\n(iii) The SI unit for both work and energy is joule (J).\n\n(iv) A motionless stretched rubber band has kinetic energy.\n\n(v) Energy can change from one form to another.",
            "answer": {
              "answerKey": "(i) False. (ii) True. (iii) True. (iv) False. (v) True.",
              "solution": "(i) <u>False</u> — no displacement → no work. (ii) <u>True</u> — force and displacement both upward → W = +mgh. (iii) <u>True</u> — SI unit of work and energy is joule (J). (iv) <u>False</u> — stretched rubber band has elastic potential energy, not kinetic. (v) <u>True</u> — law of conservation of energy."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Fill in the blanks-\n\n(i) Work done = _____ × _____ (in the direction of force).\n\n(ii) 1 joule of work is done when a force of _____ newton displaces an object by 1 metre in the direction of the force.\n\n(iii) The expression for kinetic energy of a body of mass m and velocity v is ___.\n\n(iv) The potential energy of an object of mass m at a small height h from the Earth's surface is the _____.\n\n(v) Power is defined as the _____ at which work is done.",
            "answer": {
              "answerKey": "(i) Force × Displacement. (ii) 1 N. (iii) ½mv². (iv) mgh. (v) Rate.",
              "solution": "(i) Work = <u>Force × Displacement</u> (in direction of force). (ii) 1 joule when force = <u>1 Newton</u> displaces object by 1 m. (iii) KE = <u>½mv²</u>. (iv) PE = <u>mgh</u>. (v) Power = <u>rate</u> at which work is done (P = W/t)."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "When a ball thrown upwards reaches its highest point, tick which of the following statement(s) are correct?\n\n(i) The force acting on the ball is zero.\n\n(ii) The acceleration of the ball is zero.\n\n(iii) Its kinetic energy is zero.\n\n(iv) Its potential energy is maximum.",
            "answer": {
              "answerKey": "(iii) and (iv) are correct.",
              "solution": "At highest point:\n(i) False — gravity still acts (F = mg ≠ 0).\n(ii) False — acceleration = g downward throughout.\n(iii) <u>True</u> — velocity = 0 at highest point → KE = 0.\n(iv) <u>True</u> — all energy is potential → PE = maximum."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "For each of the following situations, identify the energy transformation that takes place: (i) a truck moving uphill, (ii) unwinding of a watch spring, (iii) photosynthesis in green leaves, (iv) water flowing from a dam, (v) burning of a matchstick, (vi) explosion of a fire cracker, (vii) speaking into a microphone, (viii) a glowing electric bulb, and (ix) a solar panel.",
            "answer": {
              "answerKey": "Chemical→KE+PE; Elastic PE→KE; Light→Chemical; PE→KE; Chemical→Heat+Light; Chemical→Sound+Heat+Light; Sound→Electrical; Electrical→Light+Heat; Solar→Electrical.",
              "solution": "(i) Chemical → KE + Potential. (ii) Elastic Potential → Kinetic. (iii) Light → Chemical (glucose). (iv) Potential → Kinetic. (v) Chemical → Heat + Light. (vi) Chemical → Sound + Heat + Light. (vii) Sound → Electrical. (viii) Electrical → Light + Heat. (ix) Solar → Electrical."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "A student is slowly lifted straight up in an elevator from the ground level to the top floor of a building. Later, the same student climbs the staircase, all the way to the top. Given that the height of the building is h = 72.5 m, acceleration due to gravity is g = 10 m s⁻², and student's mass is m = 50 kg.\n\n(i) Find the gain in the potential energy if the student is lifted straight up to the top.\n\n(ii) Find the gain in the potential energy when the student climbs the stairs to the same top.\n\n(iii) What do you conclude about the dependence of the potential energy on the path taken?",
            "answer": {
              "answerKey": "(i) PE = 36,250 J (elevator). (ii) PE = 36,250 J (stairs). (iii) PE is path-independent.",
              "solution": "PE = mgh = 50 × 10 × 72.5 = <strong>36,250 J</strong>\n\nElevator and stairs give the same PE — <u>PE depends only on height (h)</u>, not on the path taken."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "A crane lifts a mass m to the 10th floor of a building in a certain time. It then raises the same mass to the 20th floor of the same building in double the time. How much more energy and power are required? Assume that the height of all floors is equal.",
            "answer": {
              "answerKey": "Energy: twice as much (double height). Power: same (double energy in double time).",
              "solution": "Energy to 10th floor: W₁ = 10mgH; Energy to 20th floor: W₂ = 20mgH = <u>twice W₁</u>.\n\nPower₁ = 10mgH/t; Power₂ = 20mgH/2t = 10mgH/t → <u>same power</u>."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Which factors determine the energy required to raise a flag from the ground to the top of all flagpole using a pulley? Does raising the flag slowly or quickly change the amount of work done? If the speed at which the flag is raised is doubled, how does the power requirement change? Explain your answers.",
            "answer": {
              "answerKey": "Energy = mgh; Work same regardless of speed. Doubled speed → doubled power.",
              "solution": "Energy = <u>mgh</u> — depends on mass of flag and height of flagpole.\nWork is the same whether fast or slow (same F × same d).\nIf speed doubles, time halves → <u>Power = W/t doubles</u>."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "A man of mass 60 kg rides a scooter of mass 100 kg. He accelerates the scooter to a velocity v. The next day, his son with a mass of 40 kg joins him as a passenger. If the scooter reaches the same speed on both days in the same time interval, what is the ratio of the fuel of the tank used on the two days? Assume that the energy transfer to the scooter happens entirely due to fuel, and no other losses occur due to air resistance and friction.",
            "answer": {
              "answerKey": "Ratio = 4:5.",
              "solution": "KE day 1: ½(160)v² = 80v²\nKE day 2: ½(200)v² = 100v²\n\n<u>Ratio</u> = 80:100 = <strong>4:5</strong>"
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "On a seesaw with sliding seats, a child is sitting on one side and an adult on the other side. The adult weighs twice that of the child. The seesaw however is balanced. Draw a figure which depicts this situation showing the distances from the fulcrum where the child and the adult are seated.",
            "answer": {
              "answerKey": "Child at 2d; Adult at d from fulcrum (W × 2d = 2W × d).",
              "solution": "Principle of Moments: Clockwise moment = Anticlockwise moment.\n\nChild's weight W × 2d = Adult's weight 2W × d → balanced.\n\nDiagram: Fulcrum centre; <u>Child</u> at 2 units from fulcrum; <u>Adult</u> at 1 unit from fulcrum."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "A ball of mass 2 kg is thrown up with a velocity of 20 m s⁻¹.\n\n(i) Identify the sign of the work done by gravity on the ball during its upward motion and its downward motion.\n\n(ii) If the ball reaches a height of 19.4 m, how much work was done by air resistance (assume g = 10 m s⁻²).",
            "answer": {
              "answerKey": "(i) Upward: negative; Downward: positive. (ii) –12 J.",
              "solution": "(i) Upward: gravity force ↓, displacement ↑ → W = <u>negative</u>. Downward: both same direction → W = <u>positive</u>.\n(ii) KE at throw = ½×2×400 = 400 J; PE at max height = 2×10×19.4 = 388 J\n\n<u>Work by air resistance</u> = 388 – 400 = <strong>–12 J</strong>"
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "A 10.0 kg block is moving on horizontal floor with negligible friction. As shown in the Fig. 7.37, a variable force is applied on the block in its direction of motion from its position at 0 m till 4 m. If the block had a kinetic energy of 180 J when it was at 0 m, find the block's speed (i) at 0 m, and (ii) at 4 m. Does the block have negative acceleration in any portion of its motion?",
              "figure": "/figs/science-ex7-rr-q11-fig7-37.png",
            "answer": {
              "answerKey": "(i) v = 6 m/s. (ii) v = √66 m/s ≈ 8.1 m/s.",
              "solution": "(i) KE = ½mv² → 180 = ½×10×v² → <u>v = 6 m s⁻¹</u>\n(ii) Work done (area under graph, 0–4 m) = 150 J\nKE at 4 m = 180 + 150 = 330 J\n½×10×v² = 330 → <u>v = √66 ≈ 8.1 m s⁻¹</u>"
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "The gravitational attraction on the surface of the Moon (lunar surface) is about 1/6th of that on the surface of the Earth. An astronaut can throw a ball up to a height of 8 m from the surface of the Earth. How far up will the ball thrown with the same upward velocity travel from the surface of the Moon?",
              "figure": "/figs/science-ex7-rr-q12-fig7-38.png",
            "answer": {
              "answerKey": "Ball travels 48 m on the Moon.",
              "solution": "u² = 2g_E × h_E = 2g_E × 8 (same initial velocity)\n\nOn Moon: h_M = u²/(2g_M) = 2g_E×8/(2×g_E/6) = 8×6 = <strong>48 m</strong>"
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "A 1000 kg car is moving along a road at a constant speed. Suddenly, the driver notices some obstruction ahead and applies the brakes to come to a complete stop. The graphical representation of motion of the car starting from the instant the driver spots the traffic ahead is shown in Fig. 7.38\n\n(i) Describe how the car moves between positions A and B.\n\n(ii) Calculate the kinetic energy of the car at A.\n\n(iii) State the work done by the brakes in bringing the car to a halt between B and C.\n\n(iv) What does the kinetic energy of the car transform into?",
              "figure": "/figs/science-ex7-rr-q12-fig7-38.png",
            "answer": {
              "answerKey": "(i) Constant speed. (ii) 612,500 J. (iii) –612,500 J. (iv) Heat energy.",
              "solution": "(i) A–B: car moves at <u>constant speed</u> (reaction time). (ii) KE = ½×1000×35² = <strong>612,500 J</strong>. (iii) Work by brakes = <strong>–612,500 J</strong> (removes all KE). (iv) KE converts to <u>heat energy</u> due to friction between brake pads and wheels."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "The potential energy-displacement graph of a 0.5 kg ball moving along a frictionless track is shown in Fig. 7.39. At O, the velocity of the ball is 0 m s⁻¹ and potential energy is 30 J. Calculate the velocity of the ball at P, Q and R.",
              "figure": "/figs/science-ex7-rr-q14-fig7-39.png",
            "answer": {
              "answerKey": "At P: v = 2√10 m/s. At Q: v = 4√5 m/s. At R: ball cannot reach.",
              "solution": "Total energy (O) = 0 + 30 = 30 J\n\nAt P (PE=20 J): KE = 10 J → ½×0.5×v² = 10 → <u>v = 2√10 m s⁻¹</u>\nAt Q (PE=10 J): KE = 20 J → ½×0.5×v² = 20 → <u>v = 4√5 ≈ 8.9 m s⁻¹</u>\nAt R (PE=40 J): Total energy needed = 40 J > 30 J → <u>Ball cannot reach R.</u>"
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "A coconut of mass 1.5 kg falls from the top of a coconut tree onto the wet sand on a beach. The height of the tree is 10 m. On impact, the coconut comes to rest by making a depression in the sand.\n\n(i) Calculate the velocity of the coconut just before it hits the sand.\n\n(ii) Assume that the average resistive force of sand is 3000 N and all of the coconut's energy is used to create the depression in the sand. Calculate the depth of the depression the coconut makes in the sand. Assume g = 10 m s⁻².",
            "answer": {
              "answerKey": "(i) ≈ 14.1 m/s. (ii) 0.05 m.",
              "solution": "(i) v² = 2gh = 2×10×10 = 200 → <u>v = 10√2 ≈ 14.1 m s⁻¹</u>\n(ii) KE at impact = ½×1.5×200 = 150 J\nWork by sand = F×d → 3000×d = 150 → <u>d = 0.05 m (5 cm)</u>"
            }
          }
        ]
      },
      {
        "id": "ex7.eoc",
        "title": "Chapter Exercises",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "A weightlifter holds a barbell steady in her hands. Is she doing any work on the barbell while holding it steady?",
            "answer": {
              "answerKey": "No — work needs displacement; holding steady moves nothing.",
              "solution": "Work = force × <u>displacement in the force’s direction</u>. The barbell does not move, so displacement is <u>zero</u> → work done is <u>zero</u>, however tired her muscles feel (that energy goes into body heat, not the barbell)."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Is the work done by friction on the sliding coin-stack — positive, negative or zero?",
            "answer": {
              "answerKey": "Negative — friction opposes the displacement.",
              "solution": "Friction acts <u>opposite</u> to the stack’s motion, so the angle between force and displacement is 180° → work = F·s·cos180° = <u>negative</u>. That is why friction <u>removes kinetic energy</u> and slows the stack."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "When you pedal a bicycle on a flat road, your muscles supply energy. In what forms does this muscular energy appear as you ride?",
            "answer": {
              "answerKey": "Kinetic energy of motion, heat in the body, plus losses to friction, air drag and sound.",
              "solution": "Muscular (chemical) energy becomes: <u>kinetic energy</u> of rider + cycle; <u>heat</u> in muscles and from tyre/chain <u>friction</u>; energy lost to <u>air resistance</u> and a little <u>sound</u>. At steady speed the input exactly balances these losses."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Two objects A (mass m) and B (mass 4m) have the same kinetic energy. What is the ratio of the magnitudes of their velocities?",
            "answer": {
              "answerKey": "v_A : v_B = 2 : 1.",
              "solution": "½mv_A² = ½(4m)v_B² → v_A² = 4v_B² → v_A = <u>2v_B</u>. So the lighter object must move <u>twice as fast</u>; ratio v_A : v_B = <u>2 : 1</u>."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Does the kinetic energy of an object moving with constant velocity change with its position?",
            "answer": {
              "answerKey": "No — KE depends only on mass and speed, not on position.",
              "solution": "KE = <u>½mv²</u>: with constant velocity, v never changes, so KE stays <u>identical at every position</u>. (Potential energy may still vary with height — that is a separate store.)"
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Does the potential energy of an object near Earth’s surface change moving horizontally at constant velocity? What if it is gradually raised vertically?",
            "answer": {
              "answerKey": "No change horizontally (height fixed); PE rises with vertical lift (PE = mgh).",
              "solution": "Gravitational PE = <u>mgh</u> depends only on <u>height</u>. Moving <u>horizontally</u>, h is fixed → PE <u>unchanged</u>. Raised <u>vertically</u>, h grows → PE <u>increases</u>, the extra energy coming from the work done in lifting."
            }
          }
        ]
      },
      {
        "id": "ex7.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 7.2 (pendulum energy): release a pendulum bob from the drawn horizontal level and watch the first swings. Does it nearly regain that level? How do kinetic and potential energy change at points P, Q and R?",
            "answer": {
              "answerKey": "Yes, nearly — PE converts to KE and back; total stays almost constant (small friction loss).",
              "solution": "At release point <u>P</u>: max <u>PE</u>, zero KE. At bottom <u>Q</u>: PE → <u>max KE</u> (fastest). At far end <u>R</u>: KE → <u>PE</u>, nearly regaining the line. The bob <u>almost</u> reaches it — air friction steals a little energy each swing."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 7.3 (cart up a ramp): lift a cart vertically with a spring balance, then pull it up planks of decreasing steepness to the same height. How does the required force change?",
            "answer": {
              "answerKey": "Less steep → smaller force (same work = same mgh, spread over longer distance).",
              "solution": "Vertical lift needs the <u>full weight</u>. Up a plank, the balance reads <u>less</u> — and <u>still less</u> as the plank flattens. Work stays <u>mgh</u> in all cases (ignoring friction): a gentler slope trades <u>longer distance for smaller force</u> — the inclined plane’s advantage."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 7.5 (beam balance): hang a scale-beam with coin pans; balance 1 coin against 2, then 4, then 8 coins by shifting the heavier pan inward. What relation do the readings verify?",
            "answer": {
              "answerKey": "n₁ × L₁ = n₂ × L₂ — the lever (moments) principle.",
              "solution": "With 1 coin left and 2 right, balance returns when the right pan sits at <u>half the left distance</u>. Repeating with 4 and 8 coins confirms <u>effort × effort-arm = load × load-arm (n₁L₁ = n₂L₂)</u> — moments balance, the lever rule behind beam scales."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch08",
    "number": 8,
    "title": "Journey Inside the Atom",
    "slug": "journey-inside-the-atom",
    "code": "0906ch08",
    "description": "Atomic models — Thomson, Rutherford, Bohr, electronic configuration.",
    "exercises": [
      {
        "id": "ex8.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Suppose you made up your own ‘atom’, as Thomson described, using clay for the positive charge and small beads for the electrons spread through it. What will happen if: (i) the positive charge on the clay is lesser than the total negative charge of the beads? (ii) by mistake, the clay itself carries a bit of negative charge? Would your model still represent a neutral atom?",
            "answer": {
              "answerKey": "(i) The model would have a net negative charge. (ii) No; the model would not be neutral unless the total positive and negative charges exactly balance.",
              "solution": "An atom is neutral only when total positive charge equals total negative charge. If the positive charge on the clay is smaller, the model has a <u>net negative charge</u>. If the clay itself is also negatively charged, the total negative charge increases further, so the model is <u>not neutral</u>."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Could an orange or a lemon, which also contain seeds inside soft pulp, be a good comparison? In what ways does it match Thomson’s idea and where does it fall short?",
            "answer": {
              "answerKey": "It is a rough analogy because particles are embedded through a bulk material, but it fails because Thomson proposed a uniformly distributed positive charge with electrons embedded throughout, not discrete seeds in separate pulp pockets.",
              "solution": "The analogy works only in the limited sense that small objects are embedded within a larger body. It falls short because Thomson’s model had <u>positive charge spread uniformly through the atom</u> with electrons embedded in it; citrus seeds are discrete structures with a very non-uniform distribution."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Why did Thomson conclude that electrons are present in all atoms?",
            "answer": {
              "answerKey": "Cathode-ray experiments showed that the same negatively charged particles occur regardless of the material used for the electrodes/gas, implying electrons are constituents of all atoms.",
              "solution": "Cathode rays behaved similarly when produced using different materials. Thomson identified the particles as identical, negatively charged particles and concluded that <u>electrons are common constituents of atoms</u>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "What do you think would happen if α-particles were replaced with negatively charged particles in Rutherford’s gold foil experiment?",
            "answer": {
              "answerKey": "The negatively charged projectiles would be attracted toward the positively charged nucleus rather than repelled, so their deflection pattern would differ.",
              "solution": "Because the nucleus is positively charged, negatively charged particles would experience <u>electrostatic attraction</u> toward the nucleus. Their trajectories would therefore bend toward the nucleus rather than being repelled as positively charged alpha particles are."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Rutherford found that a few α-particles bounced back sharply. How does this single surprising result completely rule out Thomson’s ‘plum pudding model’ of the atom?",
            "answer": {
              "answerKey": "A sharp backward scattering requires a very concentrated region of positive charge and mass; Thomson’s diffuse positive charge could not produce such a strong deflection.",
              "solution": "A few alpha particles were deflected through very large angles or even backward. Such large deflections require a <u>small, dense, positively charged region</u> containing most of the mass — the nucleus — which is incompatible with Thomson’s uniformly spread positive charge."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "If you could ask Rutherford one question about his work, what would it be?",
            "answer": {
              "answerKey": "Open-ended; the question should be scientifically relevant to Rutherford’s experiment/model.",
              "solution": "A suitable question would be: “How did you estimate the size and charge concentration of the nucleus from the observed scattering angles?” Other scientifically relevant questions about the experimental setup or interpretation are also acceptable."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Assertion (A): Rutherford concluded that most of the mass of an atom is concentrated in a small region at the centre called the nucleus. Reason (R): According to Thomson’s model, electrons are embedded in a uniformly distributed positive charge sphere. Choose the correct option: (i) Both A and R are true, and R is the correct explanation of A. (ii) Both A and R are true, but R is not the correct explanation of A. (iii) A is true, but R is false. (iv) A is false, but R is true.",
            "answer": {
              "answerKey": "(ii) Both A and R are true, but R is not the correct explanation of A.",
              "solution": "Rutherford’s conclusion (A) is true. The statement about Thomson’s model (R) is also true, but it does <u>not explain</u> Rutherford’s conclusion; rather, Rutherford’s scattering results showed that Thomson’s model was inadequate."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "Imagine you are a scientist who has discovered a new element. Name this element after yourself and justify that the symbol you have chosen follows the IUPAC rules.",
            "answer": {
              "answerKey": "Open-ended; the proposed name should have a valid element-symbol convention (one/two letters, first capital, subsequent letter lowercase).",
              "solution": "Example: “Sarition” → symbol <strong>Sa</strong>. The symbol follows the standard rule: the first letter is capitalised and, if a second letter is used, it is lowercase. The proposed name should also be distinct from existing element names/symbols."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "What problems could arise if every scientist used different symbols for the same element?",
            "answer": {
              "answerKey": "Communication would become ambiguous and scientific results, equations, databases and safety information could be misinterpreted.",
              "solution": "A common symbolic system prevents ambiguity. Different symbols for the same element would make chemical equations, data tables, safety information, research papers and international communication difficult to interpret reliably."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "An atom with an atomic number of 26 has 56 nucleons. Find out its protons, electrons, and neutrons.",
            "answer": {
              "answerKey": "Electrons = 26; protons = 26; neutrons = 30.",
              "solution": "Atomic number Z = number of protons = 26. A neutral atom has 26 electrons. Neutrons = nucleons − protons = 56 − 26 = <strong>30</strong>."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "The nucleus of an atom contains 20 protons. If its mass number is 41, find the number of neutrons in it.",
            "answer": {
              "answerKey": "21 neutrons.",
              "solution": "Mass number = protons + neutrons. So neutrons = 41 − 20 = <strong>21</strong>."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "An atom has 18 neutrons and an atomic number of 17. What is its mass number?",
            "answer": {
              "answerKey": "35.",
              "solution": "Mass number A = protons + neutrons = 17 + 18 = <strong>35</strong>."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "An atom ²³A has 11 electrons. Find the number of neutrons in it.",
            "answer": {
              "answerKey": "12 neutrons.",
              "solution": "For a neutral atom, electrons = protons = 11. Neutrons = mass number − protons = 23 − 11 = <strong>12</strong>."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "Identify the number of electrons in the outermost shell of the following elements: (i) ¹²₆C (ii) ¹⁹₉F (iii) ²⁸₁₄Si.",
            "answer": {
              "answerKey": "(i) 4; (ii) 7; (iii) 4.",
              "solution": "Carbon (Z=6): configuration 2,4 → <strong>4</strong> valence electrons. Fluorine (Z=9): 2,7 → <strong>7</strong>. Silicon (Z=14): 2,8,4 → <strong>4</strong>."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "Write the electronic configuration of the elements having atomic numbers 12, 16 and 18.",
            "answer": {
              "answerKey": "Z=12: 2,8,2; Z=16: 2,8,6; Z=18: 2,8,8.",
              "solution": "Distribute electrons among shells: <strong>12 → 2,8,2</strong>; <strong>16 → 2,8,6</strong>; <strong>18 → 2,8,8</strong>."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "text": "Solve this riddle: I am an atom with a mass number of 23 and 11 protons. I am a soft metal and react vigorously with water. Who am I and how many neutrons do I have? You can also create one such riddle.",
            "answer": {
              "answerKey": "Sodium (Na); 12 neutrons.",
              "solution": "11 protons means atomic number 11, which is <strong>sodium</strong>. Neutrons = 23 − 11 = <strong>12</strong>."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "text": "Two different atoms have 11 protons each, but one has 12 neutrons, and the other has 13 neutrons. How do their atomic numbers and mass numbers compare? Are they the same element or different elements?",
            "answer": {
              "answerKey": "Both have atomic number 11, so they are the same element (sodium), but their mass numbers are 23 and 24; they are isotopes.",
              "solution": "Atomic number = protons = <strong>11</strong> for both. Mass numbers are <strong>11+12=23</strong> and <strong>11+13=24</strong>. Therefore they are the <u>same element</u> with different mass numbers — isotopes."
            }
          },
          {
            "id": "q18",
            "number": "18",
            "text": "If a bromine atom is available in the form of, say two isotopes, ⁷⁹₃₅Br (49.7%) and ⁸¹₃₅Br (50.3%), calculate the average atomic mass of the bromine atom.",
            "answer": {
              "answerKey": "80.006 u (approximately 80.01 u).",
              "solution": "Average atomic mass = (79×49.7/100) + (81×50.3/100) = 39.263 + 40.743 = <strong>80.006 u</strong>."
            }
          }
        ]
      },
      {
        "id": "ex8.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Choose the correct options and explain the reason for the correct and incorrect options in the context of Ernest Rutherford's gold foil experiment:\n\n(i) The experiment clearly showed the existence of neutrons in the nucleus.\n\n(ii) The results disproved the plum pudding model and led to the idea of a nucleus at the centre of the atom.\n\n(iii) The large deflection of a few alpha particles indicated that most of the mass of the atom and positive charge are packed into a tiny centre.\n\n(iv) The way alpha particles were deflected showed that electrons move around the nucleus.",
            "answer": {
              "answerKey": "(ii) and (iii) are correct.",
              "solution": "(i) Incorrect — neutrons discovered by Chadwick (1932), not from this experiment. (ii) <u>Correct</u> — large deflections disproved Thomson's model; led to nuclear model. (iii) <u>Correct</u> — few particles bounced back → nucleus is tiny, dense, positively charged. (iv) Incorrect — fixed orbits were Bohr's model."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Which of the following statements are correct or incorrect according to the Bohr's atomic model? Give a reason for each statement.\n\n(i) Electrons lose energy while moving in fixed orbits and slowly fall into the nucleus.\n\n(ii) Electrons can exist anywhere around the nucleus with no fixed energy.\n\n(iii) Electrons revolve around the nucleus in orbits of fixed energy without losing energy.\n\n(iv) Electrons can be found between energy levels as they move around the nucleus.",
            "answer": {
              "answerKey": "(iii) is correct. (i), (ii), (iv) are incorrect.",
              "solution": "(i) Incorrect: Bohr's model states electrons in fixed orbits do NOT lose energy. (ii) Incorrect: Electrons occupy only specific fixed energy levels. (iii) <u>Correct</u>: Electrons revolve in fixed stationary orbits without radiating energy. (iv) Incorrect: Electrons cannot exist between energy levels."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Nuclei: X (18p,19n), Y (17p,18n), Z (17p,20n). (i) Relation between Y and Z? (ii) Relation between Z and X?",
            "answer": {
              "answerKey": "(i) Y and Z are isotopes (same Z=17, different A). (ii) Z and X are isobars (same A=37, different Z).",
              "solution": "(i) Y (A=35) and Z (A=37): same atomic number 17 = same element (Cl), different mass numbers → <u>Isotopes</u>. (ii) Z (Z=17, A=37) and X (Z=18, A=37): same mass number = <u>Isobars</u>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "What conclusion did Rutherford draw about the positively charged part of the atom from alpha particles bouncing back?",
            "answer": {
              "answerKey": "The nucleus is tiny, very dense, and positively charged; almost all the atom's mass is concentrated there.",
              "solution": "Since only very few alpha particles bounced back, Rutherford concluded that <u>positive charge and most mass</u> are concentrated in a tiny, dense central <u>nucleus</u>. The rest of the atom is mostly empty space."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Explain and arrange the following statements in the correct chronological order to show how atomic models have evolved over time.\n\n(i) Bohr's model proposed that electrons move in fixed orbits around the nucleus, each with a definite energy.\n\n(ii) Thomson's model depicted the atom as a 'plum pudding' with electrons embedded in a sphere of positive charge.\n\n(iii) Rutherford's model proposed that atoms have a dense central nucleus.\n\n(iv) Dalton's model described atoms as indivisible particles.",
            "answer": {
              "answerKey": "Correct order: (iv) Dalton → (ii) Thomson → (iii) Rutherford → (i) Bohr.",
              "solution": "Chronological: (iv) <u>Dalton</u> (1803) — indivisible atom → (ii) <u>Thomson</u> (1897) — plum pudding → (iii) <u>Rutherford</u> (1911) — nuclear model → (i) <u>Bohr</u> (1913) — quantised orbit model."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Electrons move around nucleus. Why do they not fly away?",
            "answer": {
              "answerKey": "Electrostatic attraction between negative electrons and positive nucleus keeps them bound.",
              "solution": "Electrons are negatively charged and the nucleus is positively charged. The <u>electrostatic (Coulomb) force</u> of attraction between opposite charges keeps electrons in orbit. This provides the necessary centripetal force for their circular motion."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Assertion (A): The discovery of subatomic particles helped in understanding the atomic structure.\n\nReason (R): The number of electrons is equal to the number of protons in an atom.\n\nChoose the correct option: (i) Both A and R are true, and R is the correct explanation of A. (ii) Both A and R are true, but R is not the correct explanation of A. (iii) A is true, but R is false. (iv) A is false, but R is true.",
            "answer": {
              "answerKey": "(ii) Both A and R are true, but R is not the correct explanation of A.",
              "solution": "Option (ii) is correct. Both statements are individually true. However, the electron-proton equality is a consequence of <u>atomic neutrality</u>, not the reason why discovering subatomic particles helped understand atomic structure."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "Magnesium: mass number 24, atomic number 12. Find (i) protons, (ii) neutrons, (iii) electrons. Illustrate electron arrangement.",
            "answer": {
              "answerKey": "(i) 12 protons. (ii) 12 neutrons. (iii) 12 electrons. Configuration: 2, 8, 2.",
              "solution": "(i) Protons = Z = <u>12</u>\n(ii) Neutrons = A – Z = 24–12 = <u>12</u>\n(iii) Electrons = <u>12</u> (neutral atom)\nElectronic configuration: <u>2, 8, 2</u> (2 in K-shell, 8 in L-shell, 2 in M-shell)"
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Find the following information for the elements shown in Fig. 8.17:\n\n(i) Name of the element (ii) Symbol (iii) Total number of electrons (iv) Number of valence electrons (v) Valency of the element (vi) Number of protons (vii) Atomic number",
              "figure": "/figs/science-ex8-rr-q9-fig8-17.png",
            "answer": {
              "answerKey": "(a) Li Z=3; (b) N Z=7; (c) Al Z=13; (d) F Z=9.",
              "solution": "(a) <u>Lithium (Li)</u>: Z=3, e⁻=3, valence e⁻=1, valency=1.\n(b) <u>Nitrogen (N)</u>: Z=7, e⁻=7, valence e⁻=5, valency=3.\n(c) <u>Aluminium (Al)</u>: Z=13, e⁻=13, valence e⁻=3, valency=3.\n(d) <u>Fluorine (F)</u>: Z=9, e⁻=9, valence e⁻=7, valency=1."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Both Rutherford's and Bohr's models have electrons orbiting the nucleus. Why did Rutherford's model fail to explain atomic stability while Bohr's succeeded?",
            "answer": {
              "answerKey": "Rutherford's electrons would radiate energy and spiral into nucleus. Bohr proposed fixed orbits with no radiation.",
              "solution": "In <u>Rutherford's model</u>, electrons in circular orbits undergo centripetal acceleration → accelerating charges must radiate energy → electrons spiral into nucleus → atom would collapse. <u>Bohr</u> postulated that electrons in fixed orbits do not radiate energy, resolving this contradiction."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "Atom ⁷⁰X has 31 electrons. How many neutrons are in its nucleus?",
            "answer": {
              "answerKey": "39 neutrons.",
              "solution": "Z = 31 (electrons = protons); A = 70\n\nNeutrons = A – Z = 70 – 31 = <strong>39</strong>"
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "Atom has 79 protons and mass number 197. Calculate (i) neutrons, (ii) electrons.",
            "answer": {
              "answerKey": "(i) 118 neutrons. (ii) 79 electrons.",
              "solution": "(i) Neutrons = 197 – 79 = <u>118</u>\n(ii) Electrons = Protons = <u>79</u> (neutral atom — Gold, Au)"
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Complete Table 8.5: (Row 1) Z=5, n=6; (Row 2) A=14, e=7; (Row 3) A=24, Z=12; (Row 4) Z=15, n=16; (Row 5) A=1, n=0.",
            "answer": {
              "answerKey": "Boron; Nitrogen; Magnesium; Phosphorus; Hydrogen.",
              "solution": "Row 1: Z=5, n=6, A=11, <u>Boron (B)</u>\nRow 2: e=7→Z=7, n=7, A=14, <u>Nitrogen (N)</u>\nRow 3: Z=12, n=12, A=24, <u>Magnesium (Mg)</u>\nRow 4: Z=15, n=16, A=31, <u>Phosphorus (P)</u>\nRow 5: Z=1, n=0, A=1, <u>Hydrogen (H)</u>"
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "Element X: mass number 35, 18 neutrons. (i) Electrons/protons; (ii) Atomic number; (iii) Element; (iv) Electronic config; (v) Valence electrons; (vi) Mass number after adding 2 neutrons; (vii) Relation with new atom.",
            "answer": {
              "answerKey": "(i) 17e, 17p. (ii) 17. (iii) Chlorine. (iv) 2,8,7. (v) 7. (vi) 37. (vii) Isotopes.",
              "solution": "(i) p = 35–18 = <u>17</u>; e = <u>17</u>\n(ii) Z = <u>17</u>\n(iii) <u>Chlorine (Cl)</u>\n(iv) <u>2, 8, 7</u>\n(v) Valence e⁻ = <u>7</u>\n(vi) New A = 35+2 = <u>37</u>\n(vii) Cl-35 and Cl-37 → same Z, different A → <u>Isotopes</u>"
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "Atom: 12 protons, 12 neutrons. All electrons replaced by particles with same charge as electrons but 500× heavier. Effect on: (i) atomic number; (ii) atomic mass; (iii) mass number; (iv) overall charge.",
            "answer": {
              "answerKey": "(i) Unchanged. (ii) Increases. (iii) Unchanged. (iv) Unchanged (neutral).",
              "solution": "(i) <u>Atomic number unchanged</u> — protons not changed.\n(ii) <u>Atomic mass increases</u> — each heavy electron is ~500x electron mass; adds ~3.3 u total.\n(iii) <u>Mass number unchanged</u> — counts only protons + neutrons.\n(iv) <u>Overall charge unchanged</u> — 12 protons balanced by 12 heavy negative particles → neutral."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch09",
    "number": 9,
    "title": "Atomic Foundations of Matter",
    "slug": "atomic-foundations-of-matter",
    "code": "0906ch09",
    "description": "Atomic number, mass number, ions, chemical formulae, bonding.",
    "exercises": [
      {
        "id": "ex9.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "A student burns 10 g of ethanol in an open beaker. After the reaction, no residue is left in the beaker. Does this mean the Law of Conservation of Mass is violated? Explain.",
            "answer": {
              "answerKey": "No. Products such as gases and water vapour escape from the open beaker; the total mass is conserved in the complete system.",
              "solution": "No. The law applies to the <u>total closed system</u>. Burning ethanol forms gaseous products such as carbon dioxide and water vapour that leave the open beaker, so the residue in the beaker is not the total mass of products."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "When 20 g of hydrogen reacts completely with 160 g of oxygen, how much water is formed according to the Law of Conservation of Mass?",
            "answer": {
              "answerKey": "180 g of water.",
              "solution": "Mass of reactants = 20 + 160 = <strong>180 g</strong>. By conservation of mass, mass of water formed = <strong>180 g</strong>."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "A compound consists of 40% sulfur and 60% oxygen by mass. In a sample of the same compound containing 20 g of sulfur, what mass of oxygen must be present to satisfy the Law of Constant Proportions?",
            "answer": {
              "answerKey": "30 g oxygen.",
              "solution": "If sulfur is 40% and oxygen 60%, then oxygen:sulfur = 60:40 = 3:2. For 20 g sulfur, oxygen = 20×(3/2) = <strong>30 g</strong>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Carbon monoxide (CO) contains carbon and oxygen in the mass ratio of 3:4. How much oxygen will combine with 9 g of carbon to form carbon monoxide?",
            "answer": {
              "answerKey": "12 g oxygen.",
              "solution": "O:C = 4:3. For 9 g carbon, oxygen = 9×(4/3) = <strong>12 g</strong>."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "The Law of Definite Proportions holds true for compounds but not for mixtures. Give reason.",
            "answer": {
              "answerKey": "A pure compound has elements chemically combined in a fixed ratio by mass; a mixture can contain its components in any proportion.",
              "solution": "In a compound, elements are chemically combined in a definite stoichiometric ratio, so composition is fixed. In a mixture, substances are only physically combined and can be present in <u>variable proportions</u>."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Students X and Y, both prepared an oxide of copper by combining copper and oxygen in the ratios of 4:1 and 8:2, respectively. Do their results justify the Law of Constant Proportions? Explain.",
            "answer": {
              "answerKey": "Yes. 4:1 and 8:2 are equivalent ratios (both simplify to 4:1), so the compound has the same fixed composition.",
              "solution": "8:2 simplifies to <strong>4:1</strong>. Thus both samples have the same copper:oxygen mass ratio, consistent with the Law of Definite Proportions."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Assertion (A): 2 g of hydrogen combines with 16 g of oxygen to form 18 g of water. Reason (R): According to Dalton’s Atomic Theory, atoms combine in a simple whole number ratio by mass to form compounds. Choose the correct option: (i) Both A and R are true, and R is the correct explanation of A. (ii) Both A and R are true, but R is not the correct explanation of A. (iii) A is true, but R is false. (iv) A is false, but R is true.",
            "answer": {
              "answerKey": "(iii) A is true, but R is false.",
              "solution": "The mass calculation in A is consistent with conservation of mass for water. R, as worded, is not a correct statement of Dalton’s theory because the “simple whole number ratio” specifically describes combination of atoms, not a general mass-ratio statement."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "Nitrogen has five valence electrons. Draw the structure of the nitrogen molecule (N₂).",
            "answer": {
              "answerKey": "N₂ has a triple covalent bond, N≡N, with one lone pair on each nitrogen atom.",
              "solution": "Each nitrogen atom needs three more electrons to complete its octet. The two nitrogen atoms therefore share three pairs of electrons, forming <strong>N≡N</strong>; each N retains one lone pair."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "The atomic number of fluorine is 9. Explain the formation of the fluorine molecule (F₂).",
            "answer": {
              "answerKey": "Each fluorine atom has seven valence electrons and shares one electron with the other fluorine, forming a single covalent bond F–F.",
              "solution": "Fluorine has configuration 2,7 and needs one more electron for a stable octet. Two fluorine atoms share one electron each, forming a shared pair: <strong>F–F</strong>."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Show the formation of the following molecules: (i) Carbon dioxide (CO₂) (ii) Hydrogen sulfide (H₂S) (iii) Ammonia (NH₃).",
            "answer": {
              "answerKey": "CO₂: O=C=O; H₂S: H–S–H; NH₃: three N–H single covalent bonds with one lone pair on N.",
              "solution": "Carbon forms two double bonds with oxygen in <strong>O=C=O</strong>. Sulfur has two unpaired valence electrons available for bonding and forms <strong>H–S–H</strong>. Nitrogen has three unpaired valence electrons and forms three <strong>N–H</strong> bonds in NH₃, leaving one lone pair on N."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "Neon (atomic number 10) neither transfers nor shares its valence electrons. Explain.",
            "answer": {
              "answerKey": "Neon already has a stable octet (2,8), so it has little tendency to gain, lose or share electrons.",
              "solution": "Neon has electronic configuration <strong>2,8</strong>. Its outermost shell is complete, so it is already stable and normally does not need to gain, lose or share electrons to achieve an octet."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "What kind of ion will oxygen (O) form?",
            "answer": {
              "answerKey": "Oxide ion O²⁻ (an anion).",
              "solution": "Oxygen (Z=8) has configuration 2,6 and tends to gain two electrons to complete its octet, forming <strong>O²⁻</strong>."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Fill in the blanks. Among magnesium and chlorine, magnesium atom can give two electrons to become Mg²⁺. However, chlorine can take only one electron to become ____________. Now, __________ ion of magnesium and __________ ions of chlorine combine to give magnesium chloride.",
            "answer": {
              "answerKey": "Cl⁻; one Mg²⁺; two Cl⁻.",
              "solution": "Chlorine gains one electron to form <strong>Cl⁻</strong>. Therefore one <strong>Mg²⁺</strong> combines with two <strong>Cl⁻</strong> ions to form MgCl₂."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "Show the formation of cations of potassium (K) and calcium (Ca) atoms, and the formation of their corresponding chlorides using diagrams.",
            "answer": {
              "answerKey": "K forms K⁺ by losing one electron and KCl forms with one Cl⁻; Ca forms Ca²⁺ by losing two electrons and CaCl₂ forms with two Cl⁻.",
              "solution": "Potassium: <strong>K → K⁺ + e⁻</strong>, then K⁺ + Cl⁻ → KCl. Calcium: <strong>Ca → Ca²⁺ + 2e⁻</strong>, then Ca²⁺ + 2Cl⁻ → CaCl₂. Lewis/electron-dot diagrams should show the electron transfer and the resulting stable ions."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "Illustrate how sodium sulfide (Na₂S) is formed.",
            "answer": {
              "answerKey": "Two Na atoms each donate one electron to S, forming 2Na⁺ and S²⁻, which combine as Na₂S.",
              "solution": "Each sodium atom loses one electron: <strong>2Na → 2Na⁺ + 2e⁻</strong>. Sulfur gains two electrons: <strong>S + 2e⁻ → S²⁻</strong>. The ions combine in a 2:1 ratio to give <strong>Na₂S</strong>."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "text": "Name the following: (i) CO₂ (ii) NO₂ (iii) SF₆ (iv) PCl₃.",
            "answer": {
              "answerKey": "Carbon dioxide; nitrogen dioxide; sulfur hexafluoride; phosphorus trichloride.",
              "solution": "Apply the prefixes for the number of atoms: <strong>CO₂ carbon dioxide; NO₂ nitrogen dioxide; SF₆ sulfur hexafluoride; PCl₃ phosphorus trichloride</strong>."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "text": "Write the formula for the following: (i) Sodium hydrogencarbonate (ii) Sulfur dioxide (iii) Ferric chloride (iv) Cuprous oxide.",
            "answer": {
              "answerKey": "NaHCO₃; SO₂; FeCl₃; Cu₂O.",
              "solution": "Sodium hydrogencarbonate = <strong>NaHCO₃</strong>; sulfur dioxide = <strong>SO₂</strong>; ferric chloride (Fe³⁺, Cl⁻) = <strong>FeCl₃</strong>; cuprous oxide (Cu⁺, O²⁻) = <strong>Cu₂O</strong>."
            }
          },
          {
            "id": "q18",
            "number": "18",
            "text": "Write the formula for the compounds formed from the following pairs of ions: (i) Fe³⁺ and OH⁻ (ii) K⁺ and CO₃²⁻",
            "answer": {
              "answerKey": "Fe(OH)₃; K₂CO₃.",
              "solution": "Balance charges: Fe³⁺ needs three OH⁻ → <strong>Fe(OH)₃</strong>. Two K⁺ balance one CO₃²⁻ → <strong>K₂CO₃</strong>."
            }
          },
          {
            "id": "q19",
            "number": "19",
            "text": "What type of chemical bond is present in a solid compound that does not conduct electricity in the solid state but conducts electricity when dissolved in water?",
            "answer": {
              "answerKey": "An ionic bond.",
              "solution": "In a solid ionic compound, ions are fixed in a crystal lattice and cannot move, so it does not conduct. When dissolved in water, the ions become mobile and the solution conducts electricity."
            }
          },
          {
            "id": "q20",
            "number": "20",
            "text": "Metal M, with two electrons in its valence shell (M shell), reacts with oxygen to form a compound that is slightly soluble in water. Predict its: (i) formula (ii) type of bond (iii) electrical conductivity of its aqueous solution.",
            "answer": {
              "answerKey": "MO; ionic; aqueous solution conducts electricity because ions are present.",
              "solution": "M has valency 2 and oxygen forms O²⁻, so the simplest formula is <strong>MO</strong>. The bond is <strong>ionic</strong>. In water, the dissolved ions make the solution electrically conductive (to the extent that the compound dissolves)."
            }
          },
          {
            "id": "q21",
            "number": "21",
            "text": "Find the molecular mass of nitric acid (HNO₃). Atomic mass — H = 1 u; N = 14 u; O = 16 u.",
            "answer": {
              "answerKey": "63 u.",
              "solution": "HNO₃ = 1 + 14 + 3×16 = <strong>63 u</strong>."
            }
          },
          {
            "id": "q22",
            "number": "22",
            "text": "Find the molecular mass of methane (CH₄). Atomic mass — C = 12 u; H = 1 u.",
            "answer": {
              "answerKey": "16 u.",
              "solution": "CH₄ = 12 + 4×1 = <strong>16 u</strong>."
            }
          },
          {
            "id": "q23",
            "number": "23",
            "text": "Find the formula unit mass of potassium chloride (KCl). Atomic mass — K = 39 u; Cl = 35.5 u.",
            "answer": {
              "answerKey": "74.5 u.",
              "solution": "KCl = 39 + 35.5 = <strong>74.5 u</strong>."
            }
          },
          {
            "id": "q24",
            "number": "24",
            "text": "Find the formula unit mass of magnesium hydroxide, Mg(OH)₂. Atomic mass — Mg = 24 u; O = 16 u; H = 1 u.",
            "answer": {
              "answerKey": "58 u.",
              "solution": "Mg(OH)₂ = 24 + 2×(16+1) = <strong>58 u</strong>."
            }
          }
        ]
      },
      {
        "id": "ex9.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Element A has 1 electron in third shell. Element B has 6 electrons in second shell. (i)–(vi) as given.",
            "answer": {
              "answerKey": "(i) A gives 1e⁻. (ii) A⁺. (iii) B takes 2e⁻. (iv) B²⁻. (v) Ionic. (vi) A₂B.",
              "solution": "(i) A: valence e⁻=1 → gives 1 electron. (ii) Forms <u>Cation A⁺</u>. (iii) B: valence e⁻=6 → needs 2 more → takes 2 electrons. (iv) Forms <u>Anion B²⁻</u>. (v) Metal + non-metal → <u>Ionic bond</u>. (vi) 2A⁺ + B²⁻ → <u>A₂B</u>"
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Element X has 6 electrons in outer shell, forms diatomic molecule. (i) Why? (ii) Bond type? (iii) Draw X₂. (iv) Draw XY₂ where Y has 2 electrons in second shell.",
            "answer": {
              "answerKey": "(i) Needs 2 electrons — shares with another X. (ii) Covalent (double bond). (iii) O=O. (iv) Y=X=Y.",
              "solution": "(i) X has 6 valence electrons; needs 2 → shares 2 with another X → X₂ (diatomic). (ii) Two non-metals share → <u>covalent bond</u> (double bond). (iii) X₂: <u>X=X</u> (double covalent bond) e.g., O₂. (iv) XY₂: <u>Y=X=Y</u> e.g., CO₂ type structure."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Which gives correctly balanced charges (6+ and 6–)? (i) 2Al³⁺+3Cl⁻; (ii) 3Mg²⁺+PO₄³⁻; (iii) 2Fe³⁺+3O²⁻; (iv) 3Ca²⁺+2SO₄²⁻.",
            "answer": {
              "answerKey": "(iii) is correct: 2×3+ = 6+ and 3×2– = 6–.",
              "solution": "(i) 2Al³⁺=6+, 3Cl⁻=3– → NOT balanced. (ii) 3Mg²⁺=6+, PO₄³⁻=3– → NOT balanced. (iii) <u>2Fe³⁺=6+, 3O²⁻=6– → Balanced! Correct.</u> (iv) 3Ca²⁺=6+, 2SO₄²⁻=4– → NOT balanced."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Choose correct statements. (iv) Water = 2H covalently bonded with O is correct.",
            "answer": {
              "answerKey": "(iv) is correct. (i), (ii), (iii) are false.",
              "solution": "(i) False: Elements are made of atoms, not different molecules. (ii) False: A compound molecule is made of different atoms. (iii) False: N₂ has 2 nitrogen atoms, not 3. (iv) <u>True</u>: Water H₂O = 2H + 1O, covalently bonded."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Write formulae for: (i) Aluminium nitrate; (ii) Calcium oxide; (iii) Ferric oxide.",
            "answer": {
              "answerKey": "(i) Al(NO₃)₃. (ii) CaO. (iii) Fe₂O₃.",
              "solution": "(i) Al³⁺ + NO₃⁻(valency 1) → <u>Al(NO₃)₃</u>\n(ii) Ca²⁺ + O²⁻ → <u>CaO</u>\n(iii) Fe³⁺ + O²⁻ → cross multiply → <u>Fe₂O₃</u>"
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Write formulae: (i) Ca²⁺ and Br⁻; (ii) Al³⁺ and CO₃²⁻; (iii) K⁺ and SO₄²⁻; (iv) NH₄⁺ and Cl⁻.",
            "answer": {
              "answerKey": "(i) CaBr₂. (ii) Al₂(CO₃)₃. (iii) K₂SO₄. (iv) NH₄Cl.",
              "solution": "(i) <u>CaBr₂</u>\n(ii) <u>Al₂(CO₃)₃</u>\n(iii) <u>K₂SO₄</u>\n(iv) <u>NH₄Cl</u>"
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Which figure correctly represents Cl⁻ ion? (Atomic number of Cl = 17)",
              "figure": "/figs/science-ex9-rr-q7-fig9-18.png",
            "answer": {
              "answerKey": "(ii) is correct — 17 protons, 18 electrons, configuration 2,8,8.",
              "solution": "Cl⁻: Cl gains 1e⁻ → 18 electrons (2,8,8), 17 protons. Correct representation shows 3 shells: K=2, L=8, M=8. Per answer key: option <u>(ii)</u>."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "Determine formula unit mass of: (i) NH₄NO₃; (ii) H₃PO₄; (iii) NaHCO₃.",
            "answer": {
              "answerKey": "(i) 80 u. (ii) 98 u. (iii) 84 u.",
              "solution": "(i) NH₄NO₃: N(14)+H×4(4)+N(14)+O×3(48) = <u>80 u</u>\n(ii) H₃PO₄: H×3(3)+P(31)+O×4(64) = <u>98 u</u>\n(iii) NaHCO₃: Na(23)+H(1)+C(12)+O×3(48) = <u>84 u</u>"
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Write formulae for compounds formed by: (i) Mg+N; (ii) Li+N; (iii) Na+S; (iv) Al+O.",
            "answer": {
              "answerKey": "(i) Mg₃N₂. (ii) Li₃N. (iii) Na₂S. (iv) Al₂O₃.",
              "solution": "(i) Mg²⁺+N³⁻ → <u>Mg₃N₂</u>\n(ii) Li⁺+N³⁻ → <u>Li₃N</u>\n(iii) Na⁺+S²⁻ → <u>Na₂S</u>\n(iv) Al³⁺+O²⁻ → <u>Al₂O₃</u>"
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Complete Table 9.3: NH₄⁺, Li⁺, Al³⁺, Cu²⁺ with NO₃⁻, SO₄²⁻, PO₄³⁻.",
              "figure": "/figs/science-ex9-rr-q10-table9-3.png",
            "answer": {
              "answerKey": "NH₄NO₃, (NH₄)₂SO₄, (NH₄)₃PO₄; LiNO₃, Li₂SO₄, Li₃PO₄; Al(NO₃)₃, Al₂(SO₄)₃, AlPO₄; Cu(NO₃)₂, CuSO₄, Cu₃(PO₄)₂.",
              "solution": "NH₄⁺: <u>NH₄NO₃, (NH₄)₂SO₄, (NH₄)₃PO₄</u>\nLi⁺: <u>LiNO₃, Li₂SO₄, Li₃PO₄</u>\nAl³⁺: <u>Al(NO₃)₃, Al₂(SO₄)₃, AlPO₄</u>\nCu²⁺: <u>Cu(NO₃)₂, CuSO₄, Cu₃(PO₄)₂</u>"
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "5.3 g Na₂CO₃ + 6.0 g acetic acid → 2.2 g CO₂ + 0.9 g water + 8.2 g sodium acetate. Verify Law of Conservation of Mass.",
            "answer": {
              "answerKey": "Reactants = 11.3 g = Products = 11.3 g. Law of Conservation of Mass verified.",
              "solution": "Reactants: 5.3 + 6.0 = 11.3 g\nProducts: 2.2 + 0.9 + 8.2 = 11.3 g\n\nSince <u>Reactants = Products = 11.3 g</u>, the Law of Conservation of Mass is verified."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "Species: 11 protons, 12 neutrons, 10 electrons. (i) Atomic and mass number? (ii) Neutral/cation/anion? (iii) Config. (iv) Name.",
            "answer": {
              "answerKey": "(i) Z=11, A=23. (ii) Cation (Na⁺). (iii) 2,8. (iv) Sodium cation.",
              "solution": "(i) Z = p = <u>11</u>; A = 11+12 = <u>23</u>\n(ii) p(11) > e(10) → <u>Cation (Na⁺)</u>\n(iii) Na⁺ (10 electrons): <u>2, 8</u>\n(iv) <u>Sodium cation (Na⁺)</u>"
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Elements A (2,8,5) and B (2,8,7). (i) More reactive? (ii) Ionic or covalent? (iii) Formula of compound.",
            "answer": {
              "answerKey": "(i) B is more reactive (needs 1e⁻). (ii) Covalent (both non-metals). (iii) AB₃.",
              "solution": "(i) A: 5 valence e⁻ (needs 3); B: 7 valence e⁻ (needs 1). <u>B is more reactive</u>. (ii) Both non-metals → <u>Covalent bond</u>. (iii) A needs 3 e⁻; each B gives 1 → A+3B → <u>AB₃</u>"
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "Assertion: CuSO₄ conducts in molten state, not solid. Reason: Ions fixed in lattice in solid state, move freely when molten.",
            "answer": {
              "answerKey": "(iii) A is true, but R is false.",
              "solution": "The assertion is true: an ionic compound such as copper sulfate conducts when molten because its ions are free to move, whereas ions are fixed in the solid lattice. The reason is false because it <u>reverses</u> the states: it says ions are fixed in the molten state and mobile in the solid state."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "²⁷Al (13p), ⁸⁰Br⁻ (35p), ²⁰¹Hg²⁺ (80p). How many electrons and neutrons?",
            "answer": {
              "answerKey": "Al: 13e, 14n. ⁸₀Br⁻: 36e, 45n. ²⁰¹Hg²⁺: 78e, 121n.",
              "solution": "²⁷Al (Z=13, A=27): Electrons=<u>13</u>, Neutrons=27–13=<u>14</u>\n⁸₀Br⁻ (Z=35, A=80, gains 1e): Electrons=35+1=<u>36</u>, Neutrons=80–35=<u>45</u>\n²⁰¹Hg²⁺ (Z=80, A=201, loses 2e): Electrons=80–2=<u>78</u>, Neutrons=201–80=<u>121</u>"
            }
          }
        ]
      },
      {
        "id": "ex9.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 9.1 (physical change): weigh water in a beaker (tared balance), add a spatula of salt, record the mass, then stir till dissolved. What do you observe about mass, and what does it show?",
            "answer": {
              "answerKey": "Mass of solution equals salt + water — no mass change in a physical change.",
              "solution": "Reading after dissolving <u>equals the sum</u> of water and salt masses. Observation: salt <u>disappears visually</u> but mass is <u>conserved</u> — dissolving is a <u>physical change</u> (no new substance), so mass cannot change."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 9.2 (vinegar + baking soda): Setup 1 — mix openly on a balance and compare readings. Setup 2 — same reaction with a balloon sealing the flask. Are initial and final readings same in each case? Why the difference?",
            "answer": {
              "answerKey": "Setup 1 loses mass (CO₂ escapes); Setup 2 conserves mass (gas trapped in balloon).",
              "solution": "<u>Setup 1 (open)</u>: final reading is <u>lower</u> — <u>CO₂ gas escapes</u> into air. <u>Setup 2 (balloon sealed)</u>: readings are <u>equal</u> — gas is trapped and weighed too. Lesson: mass is conserved in a chemical change <u>only if nothing escapes</u> the system."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 9.3 (verify the law): weigh flasks A (sodium sulphate solution) and B (barium chloride solution) together, pour B into A, mix, and weigh again. What do you observe, and what law does it verify?",
            "answer": {
              "answerKey": "A white precipitate forms but total mass is unchanged — law of conservation of mass.",
              "solution": "On mixing, a <u>white precipitate of barium sulphate</u> appears, yet the balance reading <u>does not change</u> (closed system, nothing escapes). This verifies the <u>law of conservation of mass</u>: atoms only rearrange in a chemical reaction."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch10",
    "number": 10,
    "title": "Sound Waves: Characteristics and Applications",
    "slug": "sound-waves-characteristics-and-applications",
    "code": "0906ch10",
    "description": "Wave properties, echo, SONAR, ultrasound.",
    "exercises": [
      {
        "id": "ex10.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Explore various ways of producing sound.",
            "answer": {
              "answerKey": "Sound can be produced by vibrating objects in different ways, such as plucking, striking, rubbing or blowing.",
              "solution": "Try plucking a string, striking a metal object, rubbing surfaces or blowing across an air column. In each case, sound is associated with <u>vibrations</u> of the source."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Make a list of different types of musical instruments and identify their vibrating parts which produce sound.",
            "answer": {
              "answerKey": "Examples: string instruments—strings; membrane instruments—stretched membranes; wind instruments—air columns; some instruments use vibrating reeds or plates.",
              "solution": "Examples: guitar — <u>strings</u>; tabla — <u>stretched membrane</u>; flute — <u>air column</u>; harmonium — <u>reeds</u>; cymbal — <u>metal plate</u>."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Assertion (A): We cannot hear the sound of a bell ringing in a closed jar after most of the air is pumped out. Reason (R): Sound requires a medium to travel. Choose the correct statement: (i) Both A and R are true, but R is not the correct explanation of A. (ii) Both A and R are true, and R is the correct explanation of A. (iii) A is true, but R is false. (iv) A is false, but R is true.",
            "answer": {
              "answerKey": "(ii) Both A and R are true, and R is the correct explanation of A.",
              "solution": "A is true because the sound becomes inaudible as the air is removed, and R is true because sound needs a material medium. Thus R correctly explains A."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Assertion (A): Compressions and rarefactions move through the medium. Reason (R): Individual particles of the medium continuously move forward with the wave. Choose the correct statement: (i) Both A and R are true, but R is not the correct explanation of A. (ii) Both A and R are true, and R is the correct explanation of A. (iii) A is true, but R is false. (iv) A is false, but R is true.",
            "answer": {
              "answerKey": "(iii) A is true, but R is false.",
              "solution": "Compressions and rarefactions propagate through the medium, but particles of the medium oscillate about their mean positions; they do not continuously travel forward with the wave."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "When sound travels from a tuning fork to your ear, which of the following actually reaches your ear? (i) Air particles near the tuning fork (ii) Energy carried by sound waves (iii) The tuning fork material (iv) A continuous stream of compressed air",
            "answer": {
              "answerKey": "(ii) Energy carried by sound waves.",
              "solution": "The air particles oscillate locally. It is the <u>energy</u> of the sound wave that is transmitted from source to ear."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "The variation of density of medium for two sound waves is shown in Fig. 10.17 (a) and (b). Label compression and rarefaction by C and R on it. In the graph given in Fig. 10.17 (c) and (d), label the axes and draw the curves corresponding to Fig. 10.17 (a) and (b).",
              "figure": "/figs/science-ex10-pp-q6-fig10-17.png",
            "answer": {
              "answerKey": "C marks regions of above-average density; R marks below-average density. The corresponding graphs plot density on the vertical axis against distance on the horizontal axis.",
              "solution": "Mark <strong>C</strong> at the crowded/high-density regions and <strong>R</strong> at the spread-out/low-density regions. In the graph, put <u>distance</u> on the x-axis and <u>density</u> on the y-axis, with corresponding maxima (crests) and minima (troughs)."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Conduct Activity 10.1 once again with a thick rubber band and then with a thin rubber band. Does the thick rubber band vibrate faster than the thin rubber band? If yes, how do the frequency and time period of the sound produced by the thin rubber band differ from that of the thick rubber band?",
            "answer": {
              "answerKey": "The thin rubber band generally vibrates faster, so it has higher frequency and shorter time period than the thick rubber band.",
              "solution": "A thin, tightly stretched rubber band generally vibrates with a <u>higher frequency</u> than a thick one. Therefore its sound has a <u>higher frequency</u> and a <u>shorter time period</u> (T = 1/ν)."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "If the frequency of a sound wave produced by an oscillating piston of a long tube filled with air is 20 Hz, then how many oscillations does the piston complete per minute?",
            "answer": {
              "answerKey": "1200 oscillations per minute.",
              "solution": "20 oscillations/s × 60 s = <strong>1200 oscillations/min</strong>."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "For the sound wave represented by the graph shown in Fig. 10.19, what is half of its wavelength?",
              "figure": "/figs/science-ex10-pp-q9-fig10-19.png",
            "answer": {
              "answerKey": "1.5 cm.",
              "solution": "From the graph, one full wavelength is 3.0 cm. Therefore half the wavelength is <strong>1.5 cm</strong>."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Compare the speeds in different media by finding the ratio of (i) the speed of sound in water with respect to the speed in the air (ii) the speed of sound in steel with respect to the speed in the water.",
            "answer": {
              "answerKey": "(i) 75:17; (ii) 10:3.",
              "solution": "Water:air = 1500:340 = <strong>75:17</strong>. Steel:water = 5000:1500 = <strong>10:3</strong>."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "Two friends are standing along a steel fence at a distance of 340 m from each other (Fig. 10.23). Gunjan places her ear over the fence and her friend knocks the fence with a metal object. Using the values of the speed of sound in steel and air given in Table 10.1, calculate the time difference between the sound that reached Gunjan through the air and the steel. Would it have been possible for her to distinguish between the two sounds? (The time interval between two sounds must be at least 0.1 s to be heard separately.)",
              "figure": "/figs/science-ex10-pp-q11-fig10-23.png",
            "answer": {
              "answerKey": "0.932 s; Yes, the two sounds can be distinguished because the time difference exceeds 0.1 s.",
              "solution": "Through steel: t = 340/5000 = 0.068 s. Through air: t = 340/340 = 1.000 s. Time difference = 1.000−0.068 = <strong>0.932 s</strong>. Since 0.932 s > 0.1 s, <u>yes</u>, Gunjan could distinguish the two sounds."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "An experiment is being set up that requires echoes to arrive at least 0.2 s after the emission of sound. What minimum distance should a reflecting surface be placed at? Assume the speed of sound to be 343 m s⁻¹.",
            "answer": {
              "answerKey": "34.3 m.",
              "solution": "The sound travels to the reflecting surface and back, so 2d = vt = 343×0.2. Thus d = (343×0.2)/2 = <strong>34.3 m</strong>."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Sound travels much farther in water than light, and thus, is used for various underwater applications. A sonar signal sent to find the depth of ocean takes 4 s to return. What is the depth of the ocean at that location if the speed of sound in seawater is 1500 m s⁻¹?",
            "answer": {
              "answerKey": "3000 m.",
              "solution": "The 4 s is the round-trip time. Depth d = vt/2 = 1500×4/2 = <strong>3000 m</strong>."
            }
          }
        ]
      },
      {
        "id": "ex10.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Which observation best supports the idea that sound is a mechanical wave?\n\n(i) Sound shows reflection (ii) Sound needs a medium to propagate (iii) Sound has frequency (iv) Sound carries energy",
            "answer": {
              "answerKey": "(ii) is correct — mechanical waves require a material medium to propagate.",
              "solution": "Option (ii) is correct. A <u>mechanical wave</u> requires a material medium (solid, liquid, gas). Sound cannot travel in vacuum — this uniquely identifies it as mechanical."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "For a sound wave propagating in a medium, increasing its frequency will increase its\n\n(i) wavelength (ii) speed (iii) number of compressions per second (iv) time period",
            "answer": {
              "answerKey": "(iii) is correct — frequency = compressions per second.",
              "solution": "Option (iii) is correct. <u>Frequency</u> = number of complete oscillations (compressions) per second. Speed depends on medium; wavelength decreases; time period T = 1/f decreases."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "If 20 compressions pass a point in 4 seconds, the frequency is (i) 80 Hz (ii) 10 Hz (iii) 5 Hz (iv) 0.2 Hz",
            "answer": {
              "answerKey": "(ii) 5 Hz — frequency = 20/4 = 5 Hz.",
              "solution": "Frequency = compressions/time = 20/4 = <strong>5 Hz</strong>\n\nOption (ii) is correct."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Reflected sound reaches ear 0.05 s after production. Echo or reverberation? Justify.",
            "answer": {
              "answerKey": "Reverberation — echo requires ≥0.1 s; at 0.05 s the sounds overlap, creating reverberation.",
              "solution": "For an <u>echo</u>, time gap must be ≥ 0.1 s (sounds heard separately). At 0.05 s < 0.1 s, the reflected sound merges with the original → <u>reverberation</u> (prolonged sound)."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Graphs representing two sound waves are given in Fig. 10.30. If the scales on the X and Y axes of the two graphs are the same, which of the two sound waves has (i) greater wavelength, and (ii) smaller amplitude?",
              "figure": "/figs/science-ex10-rr-q5-fig10-30.png",
            "answer": {
              "answerKey": "(i) Graph with wider wave pattern. (ii) Graph with lower height.",
              "solution": "(i) <u>Greater wavelength</u>: wave with more spread-out crests and troughs (longer distance between successive compressions). (ii) <u>Smaller amplitude</u>: wave with less height of compressions — lower intensity/volume."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "The sound waves emitted by three sources A, B and C are represented in Fig. 10.31. If the frequency of A is maximum and C is minimum, identify the corresponding curves, and mark A, B and C on them.",
              "figure": "/figs/science-ex10-rr-q6-fig10-31.png",
            "answer": {
              "answerKey": "A (max frequency) = smallest wavelength curve. C (min frequency) = largest wavelength curve.",
              "solution": "A (max frequency): curve with <u>smallest wavelength</u> (most crests per unit distance). B (intermediate): medium wavelength. C (min frequency): curve with <u>largest wavelength</u> (fewest crests per unit distance)."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Draw a graph for a sound wave with density amplitude = 3 units and wavelength = 4 cm.",
            "answer": {
              "answerKey": "Sinusoidal wave: y-axis amplitude = ±3 units; x-axis one full cycle every 4 cm.",
              "solution": "Draw a <u>sinusoidal (sine) wave</u>:\nY-axis (density): peak at +3, trough at –3, equilibrium at 0.\nX-axis (distance in cm): one complete cycle every 4 cm.\nLabel: <u>amplitude = 3 units</u>, <u>wavelength = 4 cm</u>."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "In a movie, a spacecraft explodes in space — flash of light and sound shown simultaneously. What are the errors?",
            "answer": {
              "answerKey": "Error 1: Sound cannot travel in space (vacuum). Error 2: Light and sound cannot reach simultaneously — light is far faster.",
              "solution": "<u>Error 1</u>: Sound cannot travel in space — space is a vacuum with no medium for sound.\n<u>Error 2</u>: Light (3×10⁸ m/s) and sound (~340 m/s) travel at vastly different speeds → they would never arrive simultaneously at a distant point."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Sound wave: wavelength = 3.44 m, speed = 344 m/s. Find time period.",
            "answer": {
              "answerKey": "Time period = 0.01 s.",
              "solution": "f = v/λ = 344/3.44 = 100 Hz\n\n<u>T</u> = 1/f = <strong>0.01 s</strong>"
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Ship sends sonar signal; echo detected after 5 s. Speed in seawater = 1525 m/s. How deep is the sunken ship?",
            "answer": {
              "answerKey": "Depth = 3812.5 m.",
              "solution": "Total distance = 1525 × 5 = 7625 m\n\n<u>Depth</u> = 7625/2 = <strong>3812.5 m</strong>"
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "A vehicle is fitted with an ultrasonic distance sensor as part of parking assistance system which provides echolocation, while the driver is reversing the vehicle. It emits ultrasonic wave (about 40 kHz) which is reflected by the obstacle. When the warning beep starts sounding at a distance of 1.2 m from the obstacle, how much time is taken by ultrasonic wave to travel to the obstacle and come back? Assume the speed of ultrasonic wave in air to be 345 m s⁻¹.",
            "answer": {
              "answerKey": "Time ≈ 0.007 s.",
              "solution": "Distance = 2 × 1.2 = 2.4 m\n\n<u>Time</u> = 2.4/345 ≈ <strong>0.007 s</strong>"
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "The speed of sound in air is about 331 m s⁻¹ at 0 °C and nearly 344 m s⁻¹ at 22 °C. Roughly how much extra time will the sound of thunder take to travel a distance of 1720 m, if the air temperature changes from 22 °C to 0 °C? Assume that all other conditions remain unchanged.",
            "answer": {
              "answerKey": "Extra time = 65/331 s ≈ 0.196 s.",
              "solution": "t₁ (22°C) = 1720/344 = 5 s\nt₂ (0°C) = 1720/331 ≈ 5.196 s\n\n<u>Extra time</u> = t₂ – t₁ = 65/331 s ≈ <strong>0.196 s</strong>"
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "The variation of density of medium for a sound wave propagating with a speed of 340 m s⁻¹ is shown in Fig. 10.32. Calculate the wavelength and frequency of the sound wave.",
              "figure": "/figs/science-ex10-rr-q13-fig10-32.png",
            "answer": {
              "answerKey": "Wavelength = 0.04 m; Frequency = 8500 Hz.",
              "solution": "λ = 4 cm = 0.04 m\n\n<u>f</u> = v/λ = 340/0.04 = <strong>8500 Hz</strong>"
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "The graphical representation of two sound waves A and B propagating at the same speed of 345 m s⁻¹ is shown in Fig. 10.33. What is the wavelength of each of them? Also, calculate their frequencies.",
              "figure": "/figs/science-ex10-rr-q14-fig10-33.png",
            "answer": {
              "answerKey": "Wave A: f = 13,800 Hz. Wave B: f = 6,900 Hz.",
              "solution": "Wave A: λ = 2.5 cm = 0.025 m; f = 345/0.025 = <strong>13,800 Hz</strong>\nWave B: λ = 5.0 cm = 0.05 m; f = 345/0.05 = <strong>6,900 Hz</strong>"
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "Two identical sound sources are placed at A and B — one in air and one submerged in water (Fig. 10.34). Both produce sounds at the same time, which travel horizontally to the vertical side of the cliff and come back. If the time taken by the sound to return to A is 4.5 times than that of B, what is the ratio between the speeds of sound in air and water?",
              "figure": "/figs/science-ex10-rr-q15-fig10-34.png",
            "answer": {
              "answerKey": "Ratio = 1:4.5 = 2:9.",
              "solution": "For same distance d: t = 2d/v → v ∝ 1/t\n\nv_air/v_water = t_B/t_A = 1/4.5 = <strong>2:9</strong>"
            }
          }
        ]
      },
      {
        "id": "ex10.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 10.1 (rubber band and sound): pluck a band stretched over an open box; watch it vibrate; stop it and listen; change tension; then pluck it off the box near your ear. What links vibration and sound?",
            "answer": {
              "answerKey": "Sound lasts only while vibration lasts; tighter band → higher pitch; box amplifies (louder).",
              "solution": "Sound is heard <u>only while the band vibrates</u> — stopping it silences it. <u>More tension → shriller sound</u> (higher frequency). Off the box near the ear it sounds <u>feeble</u>: the box acts as a <u>soundboard</u> that amplifies. Conclusion: <u>vibrating bodies produce sound</u>."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 10.2 (tuning fork and water): strike a fork on a rubber pad, hold it near the ear, then touch a prong to water. What do the two observations prove?",
            "answer": {
              "answerKey": "The fork sounds near the ear and ripples water on touch — inaudible-fast vibration made visible.",
              "solution": "Near the ear you <u>hear the hum</u> though prongs look still. Touching water throws up <u>ripples/splashes</u> — the prongs <u>are vibrating</u>, too fast to see. Together: the fork is a <u>vibrating source</u>; water makes its motion visible."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 10.3 (sound through solids): a friend knocks on a desk — first listen with ear in air, then with ear pressed to the desk (other ear closed). Which hearing is clearer, and why?",
            "answer": {
              "answerKey": "Through the desk — solids conduct sound faster and with less loss than air.",
              "solution": "The knock heard <u>through the desk</u> is <u>louder and clearer</u> than through air. Sound travels <u>faster and more efficiently in solids</u> (particles tightly packed) than in air — proof that sound needs a medium and solids conduct best."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Activity 10.4 (spoons in water): clash two spoons in air and listen; then clash them submerged (not touching the bucket). Is sound still heard under water?",
            "answer": {
              "answerKey": "Yes — sound travels through water (liquids conduct sound).",
              "solution": "The clash is <u>clearly heard underwater</u> too (tone slightly different). Conclusion: <u>liquids also carry sound</u> — sound propagates through solids, liquids and gases, only <u>not through vacuum</u>."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Activity 10.5 (slinky wave): mark one turn; push-pull one end once, then repeatedly. Does the disturbance travel? Does the mark travel with it? What kind of wave is this?",
            "answer": {
              "answerKey": "Disturbance travels end to end but the mark only oscillates in place — a longitudinal wave.",
              "solution": "Each push sends a <u>compression travelling</u> to the friend’s end, yet the marked turn only <u>shuttles back and forth</u>. Since particle motion is <u>parallel to wave travel</u>, this is a <u>longitudinal wave</u> — the model for sound in air."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Activity 10.6 (sound shakes grains): stretch a sheet over a bowl, sprinkle grains, and produce loud sounds nearby. What happens on changing volume or sound source?",
            "answer": {
              "answerKey": "Grains jump and dance — louder sound shakes them more; sound carries energy that can move matter.",
              "solution": "The grains <u>jitter and jump</u> without being touched — vibrating air pushes the sheet. <u>Louder volume → livelier jumping</u>; different sources/grains respond differently. Proof: <u>sound is a form of energy</u> that can do work on matter."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Activity 10.7 (Phyphox audio spectrum): sing Sa–Re–Ga–Ma–Pa–Dha–Ni–Sa into the app’s Audio Spectrum and note each frequency; compare ratios to Sa. What pattern emerges?",
            "answer": {
              "answerKey": "Frequency rises stepwise with each note; ratios to Sa are simple and repeatable (musical scale).",
              "solution": "Each higher note shows a <u>higher Hz value</u> (e.g., Sa ≈ 240 Hz, higher Sa ≈ 480 Hz — <u>double</u>). Ratios like 9/8, 5/4, 3/2 recur, showing the scale’s <u>mathematical structure</u>. Voice vs app-generated same notes give <u>nearly equal</u> frequencies."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "Activity 10.8 (frequency steps): play 100 Hz, rise in 100 Hz steps to 1000 Hz, then drop from 50 Hz downwards. How does the sound change, and where does hearing stop?",
            "answer": {
              "answerKey": "Pitch rises with frequency; below ~20 Hz sound fades out (infrasound limit of hearing).",
              "solution": "Each 100 Hz step sounds <u>noticeably shriller</u> — <u>pitch follows frequency</u>. Dropping below ~50 Hz the tone deepens, and near <u>20 Hz it vanishes</u>: human hearing spans roughly <u>20 Hz–20 kHz</u>; lower is <u>infrasound</u>."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch11",
    "number": 11,
    "title": "Reproduction: How Life Continues",
    "slug": "reproduction-how-life-continues",
    "code": "0906ch11",
    "description": "Asexual and sexual reproduction, pollination, fertilisation, human reproduction.",
    "exercises": [
      {
        "id": "ex11.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "In a china-rose (hibiscus or gudhal) plant, a pollen tube grows and continues through the style after pollen lands on the stigma. Which process is about to happen next?",
            "answer": {
              "answerKey": "Fertilisation: the male gamete will reach the ovule/egg through the pollen tube and fuse with the female gamete.",
              "solution": "The pollen tube is growing toward the ovule. The next major step is <u>fertilisation</u>, in which the male gamete delivered by the pollen tube fuses with the female gamete in the ovule."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Look at the pictures (Fig. 11.16) of calotropis (madar) seeds and dandelion seeds. Can you guess what kind of seed dispersal these seeds are adapted for?",
              "figure": "/figs/science-ex11-pp-q2-fig11-16.png",
            "answer": {
              "answerKey": "Wind dispersal; the seeds have light, hairy/feathery structures that help them travel in air.",
              "solution": "Both are adapted for <u>wind dispersal</u>. Their light seeds and hair-like/feathery structures increase drag and allow the wind to carry them away from the parent plant."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "A farmer plants two varieties of maize side by side, but notices that seeds form only when pollen from one variety reaches the stigma of the other. What type of pollination is this?",
            "answer": {
              "answerKey": "Cross-pollination.",
              "solution": "Pollen is transferred from one plant to another plant of the same species, so it is <u>cross-pollination</u>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Why do animals with external fertilisation generally produce more eggs than animals with internal fertilisation?",
            "answer": {
              "answerKey": "External fertilisation exposes eggs/gametes to greater environmental loss and predation, so many more eggs are produced to increase the chance that some survive and are fertilised.",
              "solution": "In external fertilisation, eggs are released into the environment and are more exposed to currents, predators and other losses. Producing many eggs increases the probability that some are successfully fertilised and survive."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "In animals, which fertilisation method protects the gametes more?",
            "answer": {
              "answerKey": "Internal fertilisation.",
              "solution": "In <u>internal fertilisation</u>, the gametes meet inside the female body, where they are better protected from environmental conditions and predators."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Ravi suddenly notices that he is growing taller rapidly, his shoulders are broadening, and his voice cracks. What stage of life is he entering?",
            "answer": {
              "answerKey": "Adolescence.",
              "solution": "These are characteristic changes of <u>adolescence/puberty</u>, when reproductive organs mature and the body undergoes rapid physical changes."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Rina's period occurs every 28 days. Her last period was on the 5th of March. On which day is she most likely to get her next period?",
            "answer": {
              "answerKey": "2 April.",
              "solution": "A 28-day interval after 5 March gives approximately <strong>2 April</strong>."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "A human zygote has just formed. How many chromosomes does it have?",
            "answer": {
              "answerKey": "46 chromosomes.",
              "solution": "A human sperm and egg each carry 23 chromosomes. Fusion restores the diploid number: <strong>23 + 23 = 46</strong>."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "What protective devices can be used during sexual activity to reduce the spread of STIs?",
            "answer": {
              "answerKey": "They reduce the risk of pregnancy and help prevent transmission of many sexually transmitted infections.",
              "solution": "Condoms act as a barrier that can reduce the chance of sperm reaching the egg and can also reduce transmission of many <u>sexually transmitted infections</u>."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "If a couple uses oral contraceptive pills but not condoms, which risks remain and why?",
            "answer": {
              "answerKey": "They do not protect against sexually transmitted infections.",
              "solution": "Oral contraceptive pills can prevent ovulation and pregnancy but do <u>not</u> provide a barrier against sexually transmitted infections. Condoms provide STI protection in addition to contraception."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "In many animals, the young ones can walk or find food soon after birth but human babies are completely dependent on adults for a long time. What might be some advantages and disadvantages of this for humans as a species?",
            "answer": {
              "answerKey": "Human young are born with prolonged developmental needs and their brains/body systems continue to mature after birth, so extended parental care is needed.",
              "solution": "Human babies require prolonged care because many physical, behavioural and cognitive capacities continue developing after birth. Adults provide <u>food, protection, warmth and learning support</u> for an extended period."
            }
          }
        ]
      },
      {
        "id": "ex11.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "A flower’s anthers are removed before it matures. Later, pollen from another plant of the same species is dusted onto its stigma and seeds are produced. Which process has been ensured here? (i) Self-pollination (ii) Cross-pollination (iii) Fertilisation (iv) Tissue culture",
            "answer": {
              "answerKey": "(iii) Fertilisation.",
              "solution": "Removing the anthers prevents self-pollination; pollen from another plant is supplied to the stigma, and the production of seeds demonstrates that <u>fertilisation</u> has occurred. The textbook answer is <strong>(iii)</strong>."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Arrange stages of sexual reproduction in plants: (i) Pollen germination; (ii) Fertilisation; (iii) Pollination; (iv) Zygote formation.",
            "answer": {
              "answerKey": "Correct order: (iii) → (i) → (ii) → (iv).",
              "solution": "Correct sequence: (iii) <u>Pollination</u> → (i) <u>Pollen germination</u> (pollen tube grows) → (ii) <u>Fertilisation</u> → (iv) <u>Zygote formation</u>."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Assertion (A): The zygote formed after fertilisation immediately attaches to the uterus wall. Reason (R): The uterus wall is always prepared to receive the zygote. (i) Both A and R are true, and R is the correct explanation of A. (ii) Both A and R are true, but R is not the correct explanation of A. (iii) A is true, but R is false. (iv) A is false, but R is true.",
            "answer": {
              "answerKey": "(iv) A is false, R is true.",
              "solution": "Option (iv) is correct. <u>Assertion is false</u>: Zygote does NOT attach immediately — it divides to form a blastocyst and implants in 6–7 days. <u>Reason is true</u>: During luteal phase, endometrium thickens and prepares for implantation."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Why does asexual reproduction produce offspring genetically identical to the parent?",
            "answer": {
              "answerKey": "Only one parent; offspring produced by mitotic cell division — same genetic material, no gamete fusion.",
              "solution": "In asexual reproduction, only one parent is involved. Offspring are produced by <u>mitotic cell division</u>. No meiosis or fusion of gametes → no mixing of genetic material. Offspring receive exact DNA copies → <u>genetically identical (clones)</u>."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Explain why the menstrual cycle stops during pregnancy.",
            "answer": {
              "answerKey": "HCG from embryo maintains corpus luteum → progesterone secreted → uterine lining maintained → no menstruation.",
              "solution": "After fertilisation, embryo secretes <u>HCG</u> (Human Chorionic Gonadotropin), maintaining the corpus luteum. Corpus luteum continues secreting <u>progesterone</u>, keeping the uterine lining intact → menstrual cycle stops."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Why are flowers that bloom at night white or light-coloured compared to day-blooming flowers?",
            "answer": {
              "answerKey": "Night flowers are white to reflect moonlight and attract nocturnal pollinators (moths) using scent rather than colour.",
              "solution": "Night-blooming flowers are pollinated by nocturnal insects like moths. <u>White or pale colour reflects maximum moonlight</u> for visibility in low light. They also rely on strong fragrance to attract pollinators."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Why do vegetatively propagated plants tend to be more vulnerable to diseases than sexually reproduced plants?",
            "answer": {
              "answerKey": "Vegetative propagation produces clones — no genetic diversity — one disease can destroy the entire population.",
              "solution": "Vegetatively propagated plants are <u>genetically identical (clones)</u>, lacking genetic diversity. A single pathogen that overcomes one plant can destroy all plants simultaneously. Sexual reproduction generates variation, creating diverse disease resistances."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "If all flowers in a plant can only self-pollinate, how would genetic diversity change over several generations?",
            "answer": {
              "answerKey": "Genetic diversity would decrease — same genes repeated, no new alleles introduced, population becomes uniform.",
              "solution": "With only <u>self-pollination</u>, the same genetic combinations are repeated. No new genes from another individual are introduced. Over generations, the population becomes <u>genetically uniform</u> → reduced adaptability and increased disease vulnerability."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "A farmer wants many genetically identical plants quickly. Suggest reproduction methods.",
            "answer": {
              "answerKey": "Vegetative propagation (cuttings, grafting) or tissue culture — produce clones rapidly.",
              "solution": "<u>Vegetative propagation</u>: cutting stems/roots produces plants identical to parent — fast and reliable. <u>Tissue culture</u> (micropropagation): tiny plant parts grown in nutrient medium → thousands of identical plants quickly. Both ensure genetic uniformity and rapid multiplication."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Suresh makes pollen slides in sugar concentrations 0%, 2.5%, 5%, 7.5%, 10%. (i) Hypotheses? (ii) Parameters to keep same?",
            "answer": {
              "answerKey": "(i) Optimal sugar concentration triggers pollen germination. (ii) Temperature, humidity, time, species, volume.",
              "solution": "(i) Hypotheses: (a) Minimum sugar concentration needed for germination. (b) Optimal concentration for maximum germination. (c) Too high inhibits germination. (ii) Constants: <u>temperature, humidity, time of observation, volume of solution, pollen source, light conditions</u>."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "From pictures of tomato, wheat, and papaya — which type(s) of pollination might have occurred?",
              "figure": "/figs/science-ex11-rr-q11-pollination.png",
            "answer": {
              "answerKey": "Tomato: self-pollination. Wheat: self-pollination. Papaya: cross-pollination.",
              "solution": "<u>Tomato</u>: stamens surround stigma → self-pollination. <u>Wheat</u>: flowers open after pollination → self-pollination. <u>Papaya</u>: male and female flowers on separate trees → cross-pollination (dioecious plant)."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "Apple orchards: Place A (natural pollinators), Place B (beekeeping added). (i) Hypotheses? (ii) Parameters? (iii) Compare data. (iv) Inference?",
              "figure": "/figs/science-ex11-rr-q12-fig11-24.png",
            "answer": {
              "answerKey": "Beekeeping improves pollination. Place B has higher fruit setting and lower fruit drop. Bees boost apple yield.",
              "solution": "(i) Hypothesis: Managed honeybees increase cross-pollination efficiency → higher fruit yield. (ii) Constants: tree variety, soil, climate, irrigation. (iii) Place B: higher fruit setting, lower fruit drop than Place A. (iv) Inference: <u>Managed bee colonies significantly enhance pollination</u> → beekeeping is beneficial for apple farming."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "A student claims, 'In humans, ovulation always happens on day 14 of the menstrual cycle'. Critically examine this claim and state whether the claim is correct or not. Give at least two reasons for your answer.",
            "answer": {
              "answerKey": "Not always correct — cycle length varies; stress/illness can shift ovulation timing.",
              "solution": "The claim is <u>not entirely correct</u>.\nReason 1: The 28-day cycle is an average — cycles range 21–35 days, shifting ovulation timing.\nReason 2: Stress, illness, hormonal imbalance can delay or advance ovulation. Ovulation typically occurs 14 days before the next period, not necessarily on day 14."
            }
          }
        ]
      },
      {
        "id": "ex11.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 11.1 (cutting, grafting, layering): observe gardeners/farmers performing these three techniques and record the steps. What is each technique in one line?",
            "answer": {
              "answerKey": "Cutting: stem piece rooted. Grafting: scion joined to stock. Layering: stem rooted while attached.",
              "solution": "<u>Cutting</u>: a stem piece is cut and planted to root independently. <u>Grafting</u>: a <u>scion</u> (desired shoot) is joined onto a <u>stock</u> (rooted stem) so tissues fuse. <u>Layering</u>: a still-attached twig is bent into soil to root before separation. Record each step observed."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 11.2 (yeast budding): activate yeast in warm sugar solution, mount a drop after 1–2 hours, and observe under the microscope. What should you see, and what does it prove?",
            "answer": {
              "answerKey": "Small round buds growing out of parent cells — asexual reproduction by budding.",
              "solution": "After incubation, slides show round cells with <u>smaller outgrowths (buds)</u> attached. The bud enlarges, receives a copied nucleus, and <u>detaches as a new cell</u> — visible proof of <u>asexual reproduction by budding</u> in yeast."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 11.3 (bread mould): keep moistened bread/roti in a warm dark moist chamber; inspect daily; after 3 days mount some mould with cotton-blue stain. What growth and structures do you expect?",
            "answer": {
              "answerKey": "Cottony mould spreading daily; microscope shows thread-like hyphae with spore sacs (sporangia).",
              "solution": "White/grey <u>cottony patches spread</u> over 3 days (faster in warmth + moisture). Stained mounts reveal branching <u>hyphae</u> tipped with round <u>sporangia</u> full of spores — the fungus feeds on bread and <u>reproduces by spores</u>. Draw and label both."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Activity 11.4 (bead model of segregation): take three different-coloured bead pairs; build combinations picking one bead per pair. How many combinations, and what does scaling to 23 pairs imply?",
            "answer": {
              "answerKey": "2³ = 8 combinations with 3 pairs; 2²³ (≈ 84 lakh) with 23 — the source of genetic variety.",
              "solution": "Three pairs give <u>2 × 2 × 2 = 8</u> combinations. Scaling up: 23 chromosome pairs give <u>2²³ ≈ 84 lakh</u> gamete types from assortment alone — showing why <u>independent assortment</u> makes every individual (except identical twins) genetically unique."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "Activity 11.5 (flower parts): collect different flowers; observe whorls outer to inner; record in Table 11.1; cut ovary sections and draw. What should the table and drawings capture?",
            "answer": {
              "answerKey": "Presence/count of sepals, petals, stamens, carpels per flower, plus ovary-section sketches.",
              "solution": "For each flower record <u>calyx (sepals), corolla (petals), androecium (stamens), gynoecium (carpels)</u> — number and arrangement. <u>Ovary T.S.</u> shows chambers/ovules; <u>L.S.</u> shows style–stigma–ovary continuity. Functions: protection, attraction, male/female reproduction."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Activity 11.6 (pea pollination): emasculate selected buds/flowers, bag them with muslin, leave one flower open, and compare pod formation. What do the results in Table 11.2 prove?",
            "answer": {
              "answerKey": "Only unbagged/protected-open flowers set pods freely — pollination needs pollen transfer, shown by bagging controls.",
              "solution": "<u>Emasculated + bagged</u> flowers form <u>no pods</u> (no pollen reached them); <u>open flowers</u> set pods normally. The muslin bags act as <u>controls</u>, proving fruit needs <u>pollination</u> — and emasculation prevents self-pollination in breeding experiments."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Activity 11.7 (pollen vs seed data): wind-pollinated grasses release 5–10 lakh pollen for 50–200 seeds; insect-pollinated sunflower releases 20–40 thousand for 800–1000 seeds. Compare ratios and justify huge pollen output.",
            "answer": {
              "answerKey": "Wind: wasteful, ratio ~10⁴:1; insect: targeted, ratio ~30:1. Mass output compensates random delivery.",
              "solution": "<u>Pollen-to-seed ratio</u>: grasses ≈ <u>5000:1</u> (5,00,000 ÷ 100); sunflower ≈ <u>30:1</u>. Wind delivery is <u>random and wasteful</u>, so sheer numbers guarantee hits; insects deliver <u>precisely</u>, so fewer grains suffice. Huge output is the price of an unguided vector."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch12",
    "number": 12,
    "title": "Patterns in Life: Diversity and Classification",
    "slug": "patterns-in-life-diversity-and-classification",
    "code": "0906ch12",
    "description": "Five kingdoms, classification hierarchy, features of major groups.",
    "exercises": [
      {
        "id": "ex12.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Meena and Hari observed an animal in their garden. Hari called it an insect while Meena said it was an earthworm. Choose the correct option which confirms that it is an insect. (i) Bilateral symmetrical body (ii) Body with jointed legs (iii) Cylindrical body (iv) Body with little segmentation",
            "answer": {
              "answerKey": "(ii) Jointed legs — characteristic of Arthropoda; insects have 6 jointed legs.",
              "solution": "Option (ii) is correct. <u>Jointed legs</u> are characteristic of Arthropoda (insects have 3 pairs = 6 jointed legs). Earthworms are cylindrical, segmented worms with no jointed legs."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Sponges represent one of the simplest animal body plans. Their bodies lack true tissues and organs. Which feature of sponge cells supports its classification under the animal kingdom? (i) Absence of mitochondria (ii) Ability to photosynthesise (iii) Presence of a cell membrane (iv) Presence of a cell wall",
            "answer": {
              "answerKey": "(iii) Cell membrane — animals are eukaryotes with a cell membrane (no cell wall).",
              "solution": "Option (iii) is correct. All animal cells have a <u>cell membrane</u>. Sponges have no cell wall (plant feature), do not photosynthesise. The cell membrane confirms their animal nature."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Observe two animals in your environment. What features help distinguish them? How do features help place them in different groups?",
            "answer": {
              "answerKey": "Observable features: body covering, limbs, backbone, symmetry — reflect evolutionary relationships for classification.",
              "solution": "Example: <u>Butterfly vs. Lizard</u>. Butterfly: 6 legs, wings, exoskeleton, 3 body segments → Arthropoda. Lizard: 4 limbs, scales, backbone → Reptilia. Features like body symmetry, vascular tissue, notochord reflect evolutionary relationships used for hierarchical classification."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "How would a scientist justify cellular organisation as more fundamental than presence of xylem/phloem?",
            "answer": {
              "answerKey": "Cellular organisation (prokaryote vs. eukaryote) is universal. Xylem/phloem is limited to vascular plants — less fundamental.",
              "solution": "<u>Cellular organisation</u> applies to all living organisms and reflects the most fundamental evolutionary divergence. Xylem and phloem are found only in vascular plants — a narrow subset. More fundamental features capture wider, deeper evolutionary relationships."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "An unlabelled slide: single-celled organism with well-defined nucleus and multiple cilia. Which group?",
            "answer": {
              "answerKey": "Protista — unicellular, eukaryotic, ciliated (e.g., Paramecium).",
              "solution": "Belongs to Kingdom <u>Protista</u>. Reasons: (i) Unicellular. (ii) Well-defined nucleus — eukaryotic (not Monera). (iii) Multiple cilia — characteristic of ciliate protists like <u>Paramecium</u>."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "How does diversity of organisms contribute to balance and stability of an ecosystem?",
            "answer": {
              "answerKey": "Biodiversity ensures multiple species fill ecological roles — food webs are resilient, nutrient cycles continue.",
              "solution": "Each organism fills a specific <u>ecological niche</u>. Greater biodiversity means more species can perform similar functions → resilient food webs. Nutrient cycling, pollination, and decomposition continue uninterrupted with greater diversity."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "If all unicellular organisms were grouped into a single kingdom, what problems would arise?",
            "answer": {
              "answerKey": "Prokaryotic (bacteria) and eukaryotic (Amoeba) unicellular organisms would be incorrectly grouped — fundamentally different.",
              "solution": "<u>Bacteria (prokaryotes)</u> and <u>Amoeba/Paramecium (eukaryotes)</u> differ at the most fundamental level — no nuclear membrane vs. true nucleus. Grouping them would obscure evolutionary differences and make classification meaningless."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "Viruses were studied earlier. Why are they not placed in any of the five kingdoms?",
            "answer": {
              "answerKey": "Viruses are acellular, non-living outside host, lack metabolism — do not meet criteria of any kingdom.",
              "solution": "Viruses are <u>acellular</u> (no cells), non-living outside a host (no metabolism, no independent reproduction). The five kingdoms are based on cellular organisation — viruses lack cells → do not fit any kingdom."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Would you create a separate category for viruses or keep them outside the five kingdoms? Justify.",
            "answer": {
              "answerKey": "Yes — create a separate category; viruses have genetic material and replicate, yet are acellular — a unique entity.",
              "solution": "Yes, a separate category is justified: (i) Viruses have genetic material (DNA or RNA). (ii) Reproduce — but only inside host cells. (iii) Neither fully living nor non-living. This reflects the <u>evolving and flexible nature</u> of scientific classification."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Viruses have genetic material but lack cellular organisation. Which features prevent them from fitting the five kingdoms? What are the limitations of classification systems?",
            "answer": {
              "answerKey": "Viruses lack cells, metabolism, independent reproduction. Limitation: classification systems may not accommodate all entities.",
              "solution": "Excluding features: No cells, no cytoplasm, no organelles, no independent metabolism.\nLimitation: <u>Classification systems are human-made constructs</u> based on specific criteria. They may fail to accommodate organisms (viruses, prions) that do not fit neatly into existing categories."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "Pteridophytes and bryophytes both lack flowers and seeds, yet are in different groups. Explain using key features.",
            "answer": {
              "answerKey": "Bryophytes: no vascular tissue, no true roots. Pteridophytes: have vascular tissue, true roots, stems, leaves.",
              "solution": "<u>Bryophytes</u> (mosses): lack vascular tissue, no true roots — moisture-dependent, low-growing. <u>Pteridophytes</u> (ferns): possess vascular tissue (xylem and phloem), true roots, stems, leaves — reproduce by spores. <u>Vascular tissue</u> is the key evolutionary advancement separating the two groups."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "In the classification hierarchy, which group—class or genus—has fewer members but more features in common? Explain your answer.",
            "answer": {
              "answerKey": "Genus has fewer members and more features in common.",
              "solution": "<u>Genus</u> is a more specific taxonomic level — fewer species share more common features. Class is broader — contains many orders, genera, and species; members share fewer specific features. Specificity increases: Kingdom → Phylum → Class → Order → Family → <u>Genus</u> → Species."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "A scientist discovers a new organism with locomotion and autotrophic nutrition. Which characteristics would identify it as Protista?",
            "answer": {
              "answerKey": "Unicellular, eukaryotic, with both autotrophic (chloroplasts) and locomotive ability (flagella/cilia) → Protista.",
              "solution": "For classification under Kingdom Protista: (i) <u>Unicellular</u> nature. (ii) <u>Eukaryotic</u> (true nucleus). (iii) Both locomotion (flagella/cilia) and autotrophic nutrition (photosynthesis). Example: <u>Euglena</u>."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "A researcher identified a unicellular eukaryote as fungi. What identification key would you suggest?",
            "answer": {
              "answerKey": "Key criteria: eukaryotic, cell wall with chitin, heterotrophic (absorptive nutrition), reproduces by budding/spores.",
              "solution": "Identification key for unicellular Fungi: (i) Eukaryotic — true nucleus. (ii) Cell wall with <u>chitin</u> (not cellulose). (iii) <u>Heterotrophic</u> — absorptive nutrition (secretes enzymes, absorbs nutrients). (iv) Reproduces by budding or spore formation. Example: Yeast (Saccharomyces)."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "During a long-term ecological study, students examined organisms collected from three different environments — a freshwater pond, damp soil near decaying logs and the digestive tract of animals. Instead of naming organisms directly, scientists recorded only structural, cellular and nutritional features as given in the table below. Based on the case study, answer: (i) Identify one organism that clearly belongs to Kingdom Fungi and state one supporting observation. (ii) Which organism belongs to Kingdom Monera and what characteristic justifies it? (iii) Organisms R and Q are both eukaryotic, yet are placed in different kingdoms. Analyse the criteria that separate them. (iv) Explain why S cannot be classified using mode of nutrition alone. (v) T does not fit any of the five kingdoms. Which fundamental characteristic does it lack and what does this reveal about limitations of classification systems?",
              "figure": "/figs/science-ex12-rr-q15-table.png",
            "answer": {
              "answerKey": "(i) Q—multicellular, filamentous, cell wall, no chlorophyll, grows on dead organic matter. (ii) P—no true nucleus/prokaryotic. (iii) R is unicellular Protista with specialised features; Q is multicellular, filamentous Fungi with absorptive nutrition. (iv) S must be classified using multiple structural features, not nutrition alone. (v) T is acellular and lacks cellular organisation, showing the limits of a cellular five-kingdom scheme.",
              "solution": "<strong>(i)</strong> Q belongs to <u>Fungi</u>; it is multicellular and filamentous, has a cell wall, lacks chlorophyll and grows on dead organic matter. <strong>(ii)</strong> P belongs to <u>Monera</u>; it has no true nucleus, so it is prokaryotic. <strong>(iii)</strong> R is a unicellular eukaryote with a contractile vacuole, flagellar movement and flexible nutritional strategy, fitting <u>Protista</u>; Q is multicellular and filamentous with absorptive nutrition, fitting <u>Fungi</u>. <strong>(iv)</strong> S has multicellular organisation, differentiated tissues and a backbone; structural organisation and other characters are needed, not nutrition alone. <strong>(v)</strong> T is <u>acellular</u>, lacking the cellular organisation used by the five-kingdom system, illustrating a limitation of that classification."
            }
          }
        ]
      },
      {
        "id": "ex12.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 12.4 (bacteria and cyanobacteria slides): observe permanent slides under the microscope and compare with Fig. 12.6. What should you look for?",
            "answer": {
              "answerKey": "Tiny cells with no visible nucleus — prokaryotic organisation in both.",
              "solution": "Both show <u>very small cells without a defined nucleus</u> or membrane-bound organelles. Cyanobacteria may appear as <u>chains/filaments (sometimes greenish)</u>; bacteria as <u>rods, spheres or spirals</u>. Match shapes with Fig. 12.6 and note the prokaryotic plan."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Activity 12.5 (hay infusion): soak grass/straw in pond water in a muslin-covered bottle for a week, then examine a drop under the microscope. What moving organisms do you expect?",
            "answer": {
              "answerKey": "Free-swimming protists — Paramecium, Amoeba, Euglena — thriving on decay bacteria.",
              "solution": "The infusion breeds bacteria, which feed <u>protists</u>: slipping <u>Paramecium</u> (cilia), crawling <u>Amoeba</u> (pseudopodia), green whipping <u>Euglena</u> (flagellum). Record shape and movement of each — a living sample of Kingdom <u>Protista</u>."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Activity 12.6 (bryophytes): observe moss-like patches with a hand lens, then a wet mount under the dissecting microscope. How do they differ from ordinary leaves?",
            "answer": {
              "answerKey": "Tiny rootless, flowerless green tufts with single-cell-thick leaflets — no true roots, stem or veins.",
              "solution": "Bryophytes form <u>soft green cushions</u> with <u>rhizoids instead of roots</u> and <u>no veins, flowers or seeds</u>; their leaflets are often <u>one cell thick</u> and translucent. Ordinary leaves are larger, veined organs of vascular plants — a different grade of organisation."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Activity 12.9 (plant groups table): for Thallophyta, Bryophyta, Pteridophyta, Gymnosperms and Angiosperms, fill Table 12.3 with one survival advantage and one challenge each. What should the table show?",
            "answer": {
              "answerKey": "Each group’s key innovation and its limit — from simple thallus to flower/seed dominance.",
              "solution": "<u>Thallophyta</u>: simple, fast-spreading ↔ no land adaptations. <u>Bryophyta</u>: first land plants ↔ need water for reproduction. <u>Pteridophyta</u>: vascular tissue ↔ still spore-dependent. <u>Gymnosperms</u>: naked seeds, woody ↔ slow reproduction. <u>Angiosperms</u>: flowers/fruits, fast ↔ dominant competitors."
            }
          }
        ]
      },
      {
        "id": "ex12.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "If many organisms share common features, could they also share a common ancestry?",
            "answer": {
              "answerKey": "Yes. Shared structural or genetic features can indicate common ancestry, although the strength of the inference depends on the features and evidence considered.",
              "solution": "Shared features can provide evidence that organisms inherited traits from a <u>common ancestor</u>. Scientists compare multiple structural, developmental and genetic features rather than relying on one similarity alone."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "How can a single-celled organism carry out all its life processes when billions of cells are required to perform similar functions in multicellular organisms like us?",
            "answer": {
              "answerKey": "A unicellular organism performs all essential life processes within one cell because that cell contains all the required structures and biochemical machinery.",
              "solution": "A single cell can carry out nutrition, respiration, excretion, growth and reproduction because it contains the necessary cellular structures and molecular machinery. In multicellular organisms, specialised cells divide these functions among tissues and organs."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Which plant features reduce their dependence on water but still require moist conditions?",
            "answer": {
              "answerKey": "Features such as vascular tissues, protective surfaces and seeds reduce dependence on free water, but some groups still need moisture for reproduction.",
              "solution": "Vascular tissue, protective body surfaces and seeds helped plants live farther from water. However, groups such as bryophytes and pteridophytes still require <u>moisture/free water for reproduction</u>."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Why do taller plants need specialised transport tissues?",
            "answer": {
              "answerKey": "Because water/minerals must move upward over long distances and food must be distributed through the plant efficiently.",
              "solution": "In taller plants, roots and leaves are far apart. <u>Xylem</u> transports water and minerals upward and <u>phloem</u> transports food from photosynthetic tissues to other parts over long distances."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "How do seeds and fruits affect, where and how plants can survive?",
            "answer": {
              "answerKey": "They protect the developing embryo and provide mechanisms/resources for dispersal, allowing plants to colonise new places and survive away from standing water.",
              "solution": "Seeds protect the embryo and often contain stored food; fruits can aid seed protection and dispersal. Dispersal by wind, water, animals or other mechanisms lets plants reach <u>new habitats</u> and reduces competition with the parent plant."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "An earthworm (annelida) and a beetle (arthropoda), both have segmented bodies but the beetle has a hard external skeleton. How does the beetle’s external skeleton help it survive?",
            "answer": {
              "answerKey": "It protects the body, reduces water loss and provides support for muscles, helping the beetle survive exposed terrestrial conditions.",
              "solution": "The beetle’s hard <u>external skeleton</u> protects against injury, reduces water loss and provides a rigid surface for muscles to act on. These features are especially useful in dry, exposed terrestrial habitats."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Does the term “biodiversity” relate only to the variety of organisms, or does it encompass other elements?",
            "answer": {
              "answerKey": "It primarily refers to the variety of life, including diversity within species, between species and of ecosystems.",
              "solution": "Biodiversity is broader than simply counting species. It includes diversity <u>within species (genetic diversity), between species, and among ecosystems</u>."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "If you find a new organism in a pond, what features will you observe to classify it and why?",
            "answer": {
              "answerKey": "Observe features such as cell type, cellular organisation, nutrition, body organisation, reproduction and genetic/structural similarities because these traits distinguish major groups and indicate relationships.",
              "solution": "Useful observations include whether it is <u>prokaryotic/eukaryotic</u>, unicellular/multicellular, its mode of nutrition, cell wall, body organisation, reproduction and other structural/genetic features. These criteria allow comparison with known groups."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Why do genetic studies provide deep information about living beings?",
            "answer": {
              "answerKey": "DNA records inherited information and can reveal relationships, variation and ancestry more directly than many external features alone.",
              "solution": "Genes are inherited. Comparing DNA sequences can reveal <u>genetic similarity, variation and evolutionary relationships</u>, including relationships that may not be obvious from external appearance."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "How can changes in climate affect the biodiversity?",
            "answer": {
              "answerKey": "Climate change can alter temperature, rainfall, habitats and seasonal patterns, causing range shifts, population declines and extinctions.",
              "solution": "Changes in temperature, rainfall, sea level and extreme events can alter habitats and food availability. Species may shift ranges or breeding times; species unable to adapt or move can decline or become extinct, reducing biodiversity."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch13",
    "number": 13,
    "title": "Earth as a System: Energy, Matter, and Life",
    "slug": "earth-as-a-system-energy-matter-and-life",
    "code": "0906ch13",
    "description": "Biogeochemical cycles, greenhouse effect, climate change, ecosystems.",
    "exercises": [
      {
        "id": "ex13.rr",
        "title": "Revise, Reflect, Refine",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Choose the most appropriate option to describe the role of biogeochemical cycles in an ecosystem. (i) To provide food directly to all organisms. (ii) To recycle essential nutrients between biotic and abiotic components. (iii) To create new elements for use by living things. (iv) To remove pollutants and toxins from the organism.",
            "answer": {
              "answerKey": "(ii) is correct — biogeochemical cycles recycle essential elements between living and non-living components.",
              "solution": "Option (ii) is correct. <u>Biogeochemical cycles</u> (carbon, nitrogen, water, phosphorus) recycle essential elements between living organisms (biotic) and the environment (abiotic). Matter is conserved — not created or destroyed."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "Which of the following is primarily responsible for warming of the Earth? (i) Solar radiation is immediately absorbed by carbon dioxide, which then releases it as heat. (ii) The atmosphere's tiny particles absorb incoming solar radiation, which directly heats the Earth. (iii) The Earth's surface absorbs solar radiation, which is then re-radiated and trapped by greenhouse gases. (iv) The Earth's environment is heated only by the solar radiation reflected by the clouds.",
            "answer": {
              "answerKey": "(iii) is correct — the greenhouse effect mechanism.",
              "solution": "Option (iii) is correct. Solar radiation (short-wave) passes through atmosphere → absorbed by Earth's surface → re-radiated as infrared (long-wave) radiation → trapped by <u>greenhouse gases</u> (CO₂, methane) → Earth warms."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "Explain how climate change affects the water cycle. Illustrate with examples.",
            "answer": {
              "answerKey": "Higher temperatures increase evaporation, intensify precipitation, melt glaciers — disrupting the water cycle.",
              "solution": "Climate change increases global temperatures → increases <u>evaporation</u> from oceans and land. More moisture in atmosphere → heavier but more erratic rainfall. Example: Himalayan glaciers melting — initially floods, eventually reduced river flow threatening freshwater supply."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "Describe how albedo affects the Earth's surface temperature and climate.",
            "answer": {
              "answerKey": "High albedo (ice/snow) reflects solar radiation → cooling. Low albedo (ocean/forest) absorbs more heat → warming.",
              "solution": "<u>Albedo</u> = fraction of solar radiation reflected. Ice/snow: high albedo (~0.8) — reflects most sunlight, keeping polar regions cold. Forests/oceans: low albedo (~0.1–0.3) — absorb more heat. Melting ice reduces albedo → more heat absorbed → <u>positive feedback loop</u> accelerating warming."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "How are mountain and valley breezes formed? If one mountain is grass-covered and another is barren rock, would breezes differ?",
            "answer": {
              "answerKey": "Day: valley breeze (warm air rises from slopes). Night: mountain breeze (cool air flows down). Grass = cooler, moister breeze.",
              "solution": "<u>Valley breeze (Day)</u>: Mountain slopes heat faster → warm air rises → cooler valley air flows upward.\n<u>Mountain breeze (Night)</u>: Slopes cool faster → cold dense air flows down into valley.\n<u>Grass-covered mountain</u>: vegetation moderates temperature → cooler, more humid breeze.\n<u>Barren rock</u>: heats and cools more extremely → hotter day breeze, colder night breeze."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "You have witnessed winds, storms, rainfall. Which atmospheric layer is responsible, and why?",
            "answer": {
              "answerKey": "Troposphere — contains most water vapour; heated by Earth's surface, causing convection and weather.",
              "solution": "The <u>Troposphere</u> (0–12 km) is responsible for all weather. Primary reason: it contains most water vapour and is directly heated by Earth's surface → creates <u>convection currents</u> driving wind, storms, clouds, and rainfall."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "text": "Explain the processes of the nitrogen cycle. How would life be affected if nitrogen were not cycled?",
            "answer": {
              "answerKey": "Nitrogen fixation → nitrification → assimilation → denitrification. Without cycling, nitrogen depleted — no protein, no life.",
              "solution": "Nitrogen Cycle: (i) <u>Nitrogen fixation</u>: N₂ → NH₃ (by Rhizobium/lightning). (ii) <u>Nitrification</u>: NH₃ → nitrates (by bacteria). (iii) <u>Assimilation</u>: plants absorb nitrates → proteins. (iv) <u>Denitrification</u>: bacteria convert nitrates → N₂ back to atmosphere.\nWithout cycling: nitrogen unavailable → no protein or DNA synthesis → life would cease."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "text": "What are the impacts of deforestation on oxygen and carbon cycles? What are other consequences?",
            "answer": {
              "answerKey": "Reduces O₂ production; increases CO₂ (greenhouse effect). Also: soil erosion, biodiversity loss, climate change.",
              "solution": "<u>Oxygen cycle</u>: Trees produce O₂ via photosynthesis. Deforestation reduces O₂ production. <u>Carbon cycle</u>: Trees store carbon. Deforestation releases CO₂ → enhanced greenhouse effect. Other consequences: Soil erosion, flooding, loss of biodiversity, disruption of water cycle, displacement of communities."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "text": "Explain the path that carbon takes to go back to the atmosphere. Start from plants using CO₂.",
            "answer": {
              "answerKey": "Plants absorb CO₂ → photosynthesis → organic compounds → eaten by animals → respiration/decomposition → CO₂ released.",
              "solution": "Plants absorb CO₂ and fix it as <u>glucose</u> (photosynthesis). Plants eaten by animals → carbon moves through food chains. All organisms release CO₂ through <u>cellular respiration</u>. When organisms die, <u>decomposers</u> (bacteria, fungi) break down organic matter, releasing CO₂ back to atmosphere."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "text": "Why is excess CO₂ in the atmosphere undesirable even though plants need it?",
            "answer": {
              "answerKey": "Excess CO₂ enhances the greenhouse effect → global warming, rising sea levels, extreme weather — far more harmful than the benefit to plants.",
              "solution": "Plants need CO₂ for photosynthesis, but excess atmospheric CO₂ is a <u>greenhouse gas</u> — traps outgoing infrared radiation → <u>global warming and climate change</u>. This causes rising sea levels, extreme weather, and ecosystem disruption."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "text": "How is heat lost from the surface of the Earth? What is its significance?",
            "answer": {
              "answerKey": "Heat lost by infrared radiation, convection, conduction, and evaporation. Significance: maintains Earth's energy balance.",
              "solution": "Heat is lost through: (i) <u>Infrared radiation</u> — radiated to space (main route). (ii) <u>Convection</u> — warm air rises, transferring heat to upper atmosphere. (iii) <u>Evaporation</u> — latent heat absorbed during water evaporation.\nSignificance: Maintains <u>energy balance</u> — without heat loss, Earth would continuously warm."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "text": "If Earth were a flat disc instead of a sphere, how would solar radiation patterns and temperature differ?",
            "answer": {
              "answerKey": "A flat Earth would receive uniform solar radiation — no seasons, no polar-equatorial temperature gradient.",
              "solution": "On a flat disc, all regions would receive the same angle of solar radiation — <u>no variation with latitude</u>. No poles or equator → no seasons, no temperature gradient, no Coriolis effect, no jet streams."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "text": "Suppose atmospheric temperature rises. How would this affect the cryosphere, hydrosphere, and biosphere?",
            "answer": {
              "answerKey": "Cryosphere: glaciers melt, albedo drops. Hydrosphere: sea levels rise. Biosphere: habitat loss, species extinction.",
              "solution": "<u>Cryosphere</u>: Glaciers and ice caps melt → reduced albedo (positive feedback, more warming). <u>Hydrosphere</u>: Rising sea levels threatening coasts; ocean warming reduces dissolved oxygen. <u>Biosphere</u>: Habitat loss, migration of species, coral bleaching, disrupted food chains, potential mass extinctions."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "text": "Explain how the Earth's atmosphere helps maintain a suitable temperature for life.",
            "answer": {
              "answerKey": "Greenhouse gases trap heat; ozone blocks UV; atmosphere moderates day-night temperature extremes.",
              "solution": "(i) <u>Greenhouse effect</u>: CO₂, methane, water vapour trap outgoing infrared radiation → keeps Earth at ~15°C (without it: –18°C). (ii) <u>Ozone layer</u>: absorbs harmful UV radiation. (iii) <u>Heat distribution</u>: atmosphere moderates temperature extremes between day and night."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "text": "Describe the interrelationship between different spheres of the Earth. Illustrate with example how these spheres function in a delicate balance.",
            "answer": {
              "answerKey": "All spheres interact: geosphere, hydrosphere, atmosphere, biosphere. Monsoon example shows their delicate balance.",
              "solution": "The Earth's spheres are deeply interconnected. Example — <u>Monsoon</u>: Sunlight (solar energy + atmosphere) heats Arabian Sea (hydrosphere) → moist air rises → rainfall over India → rivers flow over rocks (geosphere) → water absorbed by soil and plants (biosphere). Disrupting any sphere (e.g., deforestation) affects all others."
            }
          }
        ]
      },
      {
        "id": "ex13.act",
        "title": "Activities — How to Do",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Activity 13.2 (albedo table): complete Table 13.1 from authentic sources — Snow 0.80–0.90, Ice 0.50–0.70, Crushed rock 0.25–0.30 are given. What typical values go against Light coloured soil, Black soil and Ocean water, and what does albedo mean?",
            "answer": {
              "answerKey": "Albedo = fraction of sunlight reflected; light soil ≈ 0.3–0.4, black soil ≈ 0.05–0.15, ocean ≈ 0.06–0.10.",
              "solution": "<u>Albedo</u> = reflected ÷ incoming solar radiation (0–1). Typical entries: <u>Light coloured soil ≈ 0.30–0.40</u> (reflects well), <u>Black soil ≈ 0.05–0.15</u> (absorbs most), <u>Ocean water ≈ 0.06–0.10</u> (absorbs most, slight angle dependence). Confirm exact figures from IMD/NCERT sources and note why snow cools while oceans warm."
            }
          }
        ]
      },
      {
        "id": "ex13.pp",
        "title": "Pause and Ponder",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "text": "Visit the website https://phet.colorado.edu/en/simulations/greenhouse-effect and study the effect of the concentration of greenhouse gas on surface temperature.",
            "answer": {
              "answerKey": "Increasing greenhouse-gas concentration in the simulation increases the trapping of outgoing infrared radiation and raises surface temperature.",
              "solution": "In the simulation, increasing greenhouse-gas concentration increases the amount of outgoing infrared energy absorbed and re-emitted by the atmosphere, so the <u>surface temperature rises</u>. Record the values/observations from the simulation."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "text": "How does the cool mountain breeze benefit agriculture activity, particularly the crops and soil?",
            "answer": {
              "answerKey": "It can lower temperatures and modify local moisture/evaporation conditions, helping reduce heat stress and water loss and influencing soil moisture.",
              "solution": "Cooler air over agricultural areas can moderate temperature, reduce heat stress on crops and can reduce excessive evaporation and moisture loss from soil. The exact effect depends on local terrain, humidity and timing."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "text": "What happens to the warm surface of water from the equator as it travels toward the poles? What impact does this movement have on the area?",
            "answer": {
              "answerKey": "Ocean currents transport heat toward higher latitudes, redistributing energy and moderating coastal temperatures and climate.",
              "solution": "Warm equatorial water is carried poleward by ocean currents. This transports <u>heat energy</u> from low to high latitudes, influencing coastal temperatures, weather and climate in the regions along the current."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "text": "The CO₂ dissolved in the ocean is disturbed when the global temperature increases. What will happen to marine life?",
            "answer": {
              "answerKey": "Warmer oceans generally absorb less CO₂; increasing atmospheric CO₂ also contributes to ocean acidification, which can stress corals and other marine organisms, disrupting marine ecosystems.",
              "solution": "Global warming can reduce the ocean’s capacity to absorb CO₂, while increased dissolved CO₂ contributes to <u>ocean acidification</u>. Changes in acidity and temperature can stress plankton, corals and shell-forming organisms and disrupt food webs and marine ecosystems."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "text": "What would happen to plants and animals on Earth if the biogeochemical cycles were disrupted and stopped? Explain by giving a few examples.",
            "answer": {
              "answerKey": "Essential nutrients and materials would no longer be reliably recycled, causing shortages/toxic accumulations and eventually severe ecosystem collapse.",
              "solution": "Without the water, carbon, nitrogen and oxygen cycles, organisms would lose reliable supplies of essential matter. For example, disruption of the <u>nitrogen cycle</u> would reduce plant growth; disruption of the <u>carbon/oxygen cycle</u> would affect photosynthesis and respiration; a halted water cycle would disrupt freshwater availability and ecosystems."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "text": "Discuss how human activities increase the concentration of greenhouse gases in the atmosphere. What would you do as an individual to reduce the emission of greenhouse gas?",
            "answer": {
              "answerKey": "Burning fossil fuels, deforestation and some agricultural/industrial activities raise greenhouse gases. Individuals can reduce emissions through energy efficiency, cleaner transport/energy choices, reduced waste and conservation.",
              "solution": "Major sources include <u>burning fossil fuels, deforestation, industrial processes and agriculture</u>. Individual actions include saving electricity, using efficient appliances, choosing walking/cycling/public transport where practical, reducing waste, reusing/recycling materials and supporting lower-carbon energy choices."
            }
          }
        ]
      }
    ]
  }
];

export const SCIENCE_BOOK_CONTEXT = `
SCIENCE (Exploration), Grade 9 — CBSE 2026:
Ch1: Exploration: Entering the World of Secondary Science — scientific method, observations, experiments, laboratory safety
Ch2: Cell: The Building Block of Life — cell structure, organelles, plant vs animal cell, microscope
Ch3: Tissues in Action — types of tissues, animal and plant tissues, organ systems
Ch4: Describing Motion Around Us — distance, displacement, speed, velocity, acceleration, graphs
Ch5: Exploring Mixtures and their Separation — pure substances, mixtures, separation techniques (filtration, distillation, etc.)
Ch6: How Forces Affect Motion — force, inertia, Newton's laws, friction
Ch7: Work, Energy, and Simple Machines — work, energy forms, machines, efficiency
Ch8: Journey Inside the Atom — structure of atom, protons, neutrons, electrons
Ch9: Atomic Foundations of Matter — elements, compounds, atomic number, mass number
Ch10: Sound Waves: Characteristics and Applications — sound production, propagation, characteristics, applications
Ch11: Reproduction: How Life Continues — modes of reproduction, reproductive organs
Ch12: Patterns in Life: Diversity and Classification — classification of organisms, taxonomy
Ch13: Earth as a System: Energy, Matter, and Life — geosphere, hydrosphere, atmosphere, biosphere, earth's systems
`;
