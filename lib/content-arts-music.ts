export const MUSIC_ARTS_CHAPTERS = [
  {
    id: 'ch07', number: 7,
    title: 'The Science of Music',
    slug: 'the-science-of-music',
    code: '0907ar07',
    description: 'Links the science of sound to music — how pitch, loudness and tone quality work, the human vocal system, and rhythm through mathematics and tala.',
    exercises: [
      {
        id: 's1',
        title: 'Section A - The Science of Sound',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "What do you hear when you hold the rubber band between your fingers and strum it?",
            answer: { answerKey: "A very faint, weak sound is heard, since the vibrating band has no surface to amplify it.", schoolMethod: "A very faint, weak sound is heard, since the vibrating band has no surface to amplify it." },
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "What happens to the loudness when the rubber band is stretched across the hollow box and plucked?",
            answer: { answerKey: "The loudness increases, as the hollow box resonates and amplifies the vibrations of the band.", schoolMethod: "The loudness increases, as the hollow box resonates and amplifies the vibrations of the band." },
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: "What happens to the pitch when the band is stretched tighter and plucked again -- does it become higher or lower?",
            answer: { answerKey: "The pitch becomes higher, because a tighter string vibrates at a faster rate (higher frequency).", schoolMethod: "The pitch becomes higher, because a tighter string vibrates at a faster rate (higher frequency)." },
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: "How does the sound change when rubber bands of different thickness are used?",
            answer: { answerKey: "The sound quality (tone/timbre) changes with the thickness of the vibrating band; the textbook treats thickness/material as affecting the quality of sound.", schoolMethod: "The sound quality (tone/timbre) changes with the thickness of the vibrating band; the textbook treats thickness/material as affecting the quality of sound." },
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: "How does the sound change when the rubber band is replaced with a piece of string or thread?",
            answer: { answerKey: "The tone quality (timbre) changes -- the string produces a clearer, sharper sound than the rubber band, since the material of the vibrating object affects the quality of sound.", schoolMethod: "The tone quality (timbre) changes -- the string produces a clearer, sharper sound than the rubber band, since the material of the vibrating object affects the quality of sound." },
          },
          {
            id: 'q6', number: '6', isHard: false,
            text: "Observe that the instrument has a hollow body. How does this enhance the sound?",
            answer: { answerKey: "The hollow body acts as a resonating chamber that amplifies the vibrations of the string, making the sound louder and fuller.", schoolMethod: "The hollow body acts as a resonating chamber that amplifies the vibrations of the string, making the sound louder and fuller." },
          },
          {
            id: 'q7', number: '7', isHard: false,
            text: "When the strings are tightened, the pitch -- (increases/decreases/stays the same)?",
            answer: { answerKey: "Increases (the pitch becomes higher).", schoolMethod: "Increases (the pitch becomes higher)." },
          },
          {
            id: 'q8', number: '8', isHard: false,
            text: "When the strings are loosened, the pitch -- (increases/decreases/stays the same)?",
            answer: { answerKey: "Decreases (the pitch becomes lower).", schoolMethod: "Decreases (the pitch becomes lower)." },
          },
          {
            id: 'q9', number: '9', isHard: false,
            text: "How does the thickness of the string affect the sound?",
            answer: { answerKey: "Changing the thickness of the string changes the quality (tone/timbre) of the sound; the textbook specifically describes thickness/material as affecting sound quality.", schoolMethod: "Changing the thickness of the string changes the quality (tone/timbre) of the sound; the textbook specifically describes thickness/material as affecting sound quality." },
          },
          {
            id: 'q10', number: '10', isHard: false,
            text: "Describe the tone of a note played on the instrument -- is it short or sustained? Is it high-pitched or low-pitched?",
            answer: { answerKey: "This depends on the instrument used in class and the note played. Describe whether the note is short or sustained and whether it is high- or low-pitched, based on your actual observation.", schoolMethod: "This depends on the instrument used in class and the note played. Describe whether the note is short or sustained and whether it is high- or low-pitched, based on your actual observation." },
          },
        ],
      },
      {
        id: 's2',
        title: 'Section B - Mathematics in Tāla',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "Write a rhythmic phrase (bol) for 7 akharas.",
            answer: { answerKey: "4 + 3 = tha ka di mi ta kita.", schoolMethod: "4 + 3 = tha ka di mi ta kita." },
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "Write a rhythmic phrase (bol) for 8 akharas.",
            answer: { answerKey: "4 + 4 = tha ka di mi tha ka di mi.", schoolMethod: "4 + 4 = tha ka di mi tha ka di mi." },
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: "Write a rhythmic phrase (bol) for 9 akharas.",
            answer: { answerKey: "3 + 3 + 3 = ta kita ta kita ta kita.", schoolMethod: "3 + 3 + 3 = ta kita ta kita ta kita." },
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: "After how many cycles will Group 1 (reciting the 3-beat phrase) and Group 2 (reciting the 4-beat phrase) clap together?",
            answer: { answerKey: "After the 12th beat -- the Lowest Common Multiple of 3 and 4 is 12. By then, Group 1 completes 4 cycles of 3 beats and Group 2 completes 3 cycles of 4 beats, so both say `ta' and clap together.", schoolMethod: "After the 12th beat -- the Lowest Common Multiple of 3 and 4 is 12. By then, Group 1 completes 4 cycles of 3 beats and Group 2 completes 3 cycles of 4 beats, so both say `ta' and clap together." },
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: "The LCM of 12 (Ektala) and 16 (Teental) is ___.",
            answer: { answerKey: "48.", schoolMethod: "48." },
          },
          {
            id: 'q6', number: '6', isHard: false,
            text: "After ___ beats, both tālas would have completed full cycles.",
            answer: { answerKey: "48 beats -- Teental completes 3 full cycles (16 × 3) and Ektala completes 4 full cycles (12 × 4).", schoolMethod: "48 beats -- Teental completes 3 full cycles (16 × 3) and Ektala completes 4 full cycles (12 × 4)." },
          },
        ],
      },
      {
        id: 's3',
        title: 'Exercises',
        questions: [
          {
            id: 'q1', number: 'Q1', isHard: false,
            text: "Fill in the blanks: (i) When a string is tightened, the pitch ______. (ii) The diaphragm and lungs form part of the ______ subsystem. (iii) The hollow body of a musical instrument is important because ______.",
            answer: { answerKey: "• When a string is tightened, the pitch increases (becomes higher).\n• The diaphragm and lungs form part of the Air Pressure subsystem.\n• The hollow body of a musical instrument is important because it resonates and amplifies the sound, increasing its loudness.", schoolMethod: "• When a string is tightened, the pitch increases (becomes higher).\n• The diaphragm and lungs form part of the Air Pressure subsystem.\n• The hollow body of a musical instrument is important because it resonates and amplifies the sound, increasing its loudness." },
          },
          {
            id: 'q2', number: 'Q2', isHard: false,
            text: "State whether the following statements are True or False: (i) The thickness of a string affects the quality of sound. (ii) Drinking water is bad for the voice. (iii) C.V. Raman conducted experiments on the sound of the veena.",
            answer: { answerKey: "• The thickness of a string affects the quality of sound. -- True.\n• Drinking water is bad for the voice. -- False (drinking water keeps vocal cords hydrated and helps them vibrate efficiently).\n• C.V. Raman conducted experiments on the sound of the veena. -- False (Raman experimented on the mridangam and the tabla).", schoolMethod: "• The thickness of a string affects the quality of sound. -- True.\n• Drinking water is bad for the voice. -- False (drinking water keeps vocal cords hydrated and helps them vibrate efficiently).\n• C.V. Raman conducted experiments on the sound of the veena. -- False (Raman experimented on the mridangam and the tabla)." },
          },
          {
            id: 'q3', number: 'Q3', isHard: false,
            text: "Name the three subsystems of the human vocal system, and describe the function of each.",
            answer: { answerKey: "The three subsystems are:\n• Air Pressure System (diaphragm, lungs, surrounding muscles) -- supplies the breath that powers the voice.\n• Vibratory System (larynx/voice box and vocal cords) -- vibrates to produce musical sound .\n• Resonating System (throat, mouth, nasal cavities) -- shapes and amplifies the vibrations into distinct vowel tones.", schoolMethod: "The three subsystems are:\n• Air Pressure System (diaphragm, lungs, surrounding muscles) -- supplies the breath that powers the voice.\n• Vibratory System (larynx/voice box and vocal cords) -- vibrates to produce musical sound .\n• Resonating System (throat, mouth, nasal cavities) -- shapes and amplifies the vibrations into distinct vowel tones." },
          },
          {
            id: 'q4', number: 'Q4', isHard: false,
            text: "Describe some ways to ensure our voices are in good condition.",
            answer: { answerKey: "Drink sufficient water to keep the vocal cords hydrated; eat a healthy diet and avoid oily or acidic food; speak at a moderate volume; and do regular vocal warm-ups to prevent fatigue.", schoolMethod: "Drink sufficient water to keep the vocal cords hydrated; eat a healthy diet and avoid oily or acidic food; speak at a moderate volume; and do regular vocal warm-ups to prevent fatigue." },
          },
          {
            id: 'q5', number: 'Q5', isHard: false,
            text: "Jhaptala has 10 beats (mātrās) in a cycle, and Keherwa Tāla has 8 beats. After how many beats will they both complete full cycles together?",
            answer: { answerKey: "The LCM of 10 and 8 is 40. Both tālas will complete full cycles together after 40 beats -- Jhaptala completes 4 cycles and Keherwa completes 5 cycles.", schoolMethod: "The LCM of 10 and 8 is 40. Both tālas will complete full cycles together after 40 beats -- Jhaptala completes 4 cycles and Keherwa completes 5 cycles." },
          },
          {
            id: 'q6', number: 'Q6', isHard: false,
            text: "Describe a warm-up routine that can be done daily to keep the voice in good condition.",
            answer: { answerKey: "A daily vocal warm-up routine (each exercise practised 5–6 times) includes:\n• Breathing and Diaphragm Exercise -- deep inhalation, holding, and slow exhalation to activate breath control.\n• Humming (Bhramari pranayama) -- humming while sliding pitch up and down to warm up the cords and improve resonance.\n• Lip Trills/Bubbles -- blowing air through closed lips to relax facial muscles and improve airflow.\n• Sargam Exercises -- singing alankara patterns at varying speeds to improve flexibility and breath control.", schoolMethod: "A daily vocal warm-up routine (each exercise practised 5–6 times) includes:\n• Breathing and Diaphragm Exercise -- deep inhalation, holding, and slow exhalation to activate breath control.\n• Humming (Bhramari pranayama) -- humming while sliding pitch up and down to warm up the cords and improve resonance.\n• Lip Trills/Bubbles -- blowing air through closed lips to relax facial muscles and improve airflow.\n• Sargam Exercises -- singing alankara patterns at varying speeds to improve flexibility and breath control." },
          },
          {
            id: 'q7', number: 'Q7', isHard: false,
            text: "Write a Konnakkol/Bol phrase for: (i) 5 akharas (ii) 6 akharas.",
            answer: { answerKey: "• 5 akharas: 2 + 3 = taka takita.\n• 6 akharas: 3 + 3 = takita takita (or 2 + 2 + 2 = taka taka taka).", schoolMethod: "• 5 akharas: 2 + 3 = taka takita.\n• 6 akharas: 3 + 3 = takita takita (or 2 + 2 + 2 = taka taka taka)." },
          },
          {
            id: 'q8', number: 'Q8', isHard: false,
            text: "Describe the connection between the science of sound and musical instruments (50 words).",
            answer: { answerKey: "Musical instruments work on the scientific principles of vibration: tightening or loosening a string changes its pitch, a hollow resonating body increases loudness, and the thickness or material of the vibrating part determines tone quality. These same principles govern how every instrument is designed and played.", schoolMethod: "Musical instruments work on the scientific principles of vibration: tightening or loosening a string changes its pitch, a hollow resonating body increases loudness, and the thickness or material of the vibrating part determines tone quality. These same principles govern how every instrument is designed and played." },
          },
          {
            id: 'q9', number: 'Q9', isHard: false,
            text: "If you were to design a string instrument using the principles of sound, how would it look and sound? (Diagram description)",
            answer: { answerKey: "Design description: A string instrument with the following labelled parts, based on the science of sound learnt in this chapter:\n• A hollow wooden resonator box -- to amplify the sound (loudness).\n• A long neck fitted with tuning pegs -- to tighten or loosen the strings and control pitch.\n• Several strings of different thickness/material, chosen to provide the desired tone quality.\n• A bridge over the resonator -- to transmit string vibrations to the hollow body for a richer, sustained tone.\n(Draw and label these parts -- resonator box, neck, tuning pegs, strings of varying thickness, and bridge -- on a simple outline sketch.)", schoolMethod: "Design description: A string instrument with the following labelled parts, based on the science of sound learnt in this chapter:\n• A hollow wooden resonator box -- to amplify the sound (loudness).\n• A long neck fitted with tuning pegs -- to tighten or loosen the strings and control pitch.\n• Several strings of different thickness/material, chosen to provide the desired tone quality.\n• A bridge over the resonator -- to transmit string vibrations to the hollow body for a richer, sustained tone.\n(Draw and label these parts -- resonator box, neck, tuning pegs, strings of varying thickness, and bridge -- on a simple outline sketch.)" },
          },
          {
            id: 'q10', number: 'Q10', isHard: false,
            text: "Which category of instrument (tata, sushira, avanaddha, ghana) does the human voice belong to? Justify your answer.",
            answer: { answerKey: "The human voice is closest to the tata (string) category. The vocal cords act as the vibrating source, like a string; the lungs and diaphragm provide the driving force, like bowing or plucking; and the throat, mouth and nasal cavities resonate the sound, like the hollow body of a stringed instrument.", schoolMethod: "The human voice is closest to the tata (string) category. The vocal cords act as the vibrating source, like a string; the lungs and diaphragm provide the driving force, like bowing or plucking; and the throat, mouth and nasal cavities resonate the sound, like the hollow body of a stringed instrument." },
          },
        ],
      },
      {
        id: 's4', title: 'Activities — How to Do',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Activity 7.3 (experiencing the vocal system): feel the belly move on breathing; add a soft mmmm on exhaling; then shape mmmm into aaaa, oooo, eeee, uuuuu. What three systems are you feeling?',
            answer: {
              answerKey: 'Air-pressure system (belly/lungs), vibratory system (voice box), resonating system (throat–mouth–nose).',
              schoolMethod: 'Hand on belly: expansion shows the <u>air-pressure system</u> (diaphragm, lungs). Adding <u>mmmm</u> links breath to the <u>vibratory system</u> (larynx, vocal folds). Shaping vowels shows the <u>resonating system</u> (throat, mouth, nasal cavities) colouring the tone.',
            }
          },
        ]
      },
    ]
  },
  {
    id: 'ch08', number: 8,
    title: 'Raga and Tala',
    slug: 'raga-and-tala',
    code: '0907ar08',
    description: 'Introduces raga scales and jatis, achala and chala swaras, and the tala system including Teental and its notation.',
    exercises: [
      {
        id: 's1',
        title: 'Section A - Rāga',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "Write any Audava Rāga scale.",
            answer: { answerKey: "Rāga Bhoopali (Hindustani): S R G P D S -- a 5-note (audava) scale.", schoolMethod: "Rāga Bhoopali (Hindustani): S R G P D S -- a 5-note (audava) scale." },
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "Write any Shadava Rāga scale.",
            answer: { answerKey: "Rāga Gurjari Todi (Hindustani): S R G M D N S -- a 6-note (shadava) scale.", schoolMethod: "Rāga Gurjari Todi (Hindustani): S R G M D N S -- a 6-note (shadava) scale." },
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: "Write any Auḍava-Ṣhāḍava scale (5 notes in ascent, 6 in descent).",
            answer: { answerKey: "Arohana (5 notes): S G M P N ; Avarohana (6 notes): N D P M G S.", schoolMethod: "Arohana (5 notes): S G M P N ; Avarohana (6 notes): N D P M G S." },
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: "If you could name a rāga, what would it be? Describe how you would like it to make a listener feel.",
            answer: { answerKey: "Sample answer: `Rāga Śānti' -- using soft, sustained notes in the lower octave, sung slowly, so that the listener feels a deep sense of calm, peace and quiet reflection.", schoolMethod: "Sample answer: `Rāga Śānti' -- using soft, sustained notes in the lower octave, sung slowly, so that the listener feels a deep sense of calm, peace and quiet reflection." },
          },
        ],
      },
      {
        id: 's2',
        title: 'Section B - Tāla',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "Write a lyric to Tāla (Sample Answer).",
            answer: { answerKey: "Teental (16 mātrā, one syllable per beat), sample lyric line -- continuing the given example:\n• Mātrā 1–4: Ran into the -- Mātrā 5–8: gar-den to play -- Mātrā 9–12: ran-ning a-round -- Mātrā 13–16: un-der the sun.\nRupaka Tāla (6 mātrā, in the pattern 1-2 / 3-4-5-6), sample lyric -- continuing the given example:\n• Mātrā 1–2: Ra dha -- Mātrā 3–6: Sha ya ma la.\n(These are sample fills -- any lyric, in any language, may be fitted with one syllable per beat, as instructed in the activity.)", schoolMethod: "Teental (16 mātrā, one syllable per beat), sample lyric line -- continuing the given example:\n• Mātrā 1–4: Ran into the -- Mātrā 5–8: gar-den to play -- Mātrā 9–12: ran-ning a-round -- Mātrā 13–16: un-der the sun.\nRupaka Tāla (6 mātrā, in the pattern 1-2 / 3-4-5-6), sample lyric -- continuing the given example:\n• Mātrā 1–2: Ra dha -- Mātrā 3–6: Sha ya ma la.\n(These are sample fills -- any lyric, in any language, may be fitted with one syllable per beat, as instructed in the activity.)" },
          },
        ],
      },
      {
        id: 's3',
        title: 'Exercises',
        questions: [
          {
            id: 'q1', number: 'Q1', isHard: false,
            text: "Explain the following in one line:",
            answer: { answerKey: "• Ṣhāḍava-Saṁpūrṇa -- a rāga-Jāti in which the Arohana uses 6 notes and the Avarohana uses 7 notes (or vice versa).\n• Vibhag -- a division or group of beats within a tāla.\n• Jatis in Hindustani Music -- the classification of rāgas according to the number of notes (5, 6, or 7) used in their ascending and descending scales.", schoolMethod: "• Ṣhāḍava-Saṁpūrṇa -- a rāga-Jāti in which the Arohana uses 6 notes and the Avarohana uses 7 notes (or vice versa).\n• Vibhag -- a division or group of beats within a tāla.\n• Jatis in Hindustani Music -- the classification of rāgas according to the number of notes (5, 6, or 7) used in their ascending and descending scales." },
          },
          {
            id: 'q2', number: 'Q2', isHard: false,
            text: "If a rāga has 6 svaras in the ārohaṇa and 6 in the avarohaṇa, what is the jāti of the rāga? Give an example from the rāgas you have learnt.",
            answer: { answerKey: "The Jāti is Shadava-Shadava. Example: Rāga Gurjari Todi (S R G M D N S), which uses 6 notes in both ascent and descent.", schoolMethod: "The Jāti is Shadava-Shadava. Example: Rāga Gurjari Todi (S R G M D N S), which uses 6 notes in both ascent and descent." },
          },
          {
            id: 'q3', number: 'Q3', isHard: false,
            text: "Which are achala-svaras/prakṛiti-svaras and chala-svaras/vikṛiti-svaras? Explain with examples.",
            answer: { answerKey: "• Achala-svaras/prakṛiti-svaras -- the invariant notes that have no variant form: S (Shadja) and P (Panchama).\n• Chala-svaras/vikṛiti-svaras -- the movable notes that have a lower and a higher variant: R, G, M, D and N. For example, R has Komala R (lower) and Shuddha R (higher).", schoolMethod: "• Achala-svaras/prakṛiti-svaras -- the invariant notes that have no variant form: S (Shadja) and P (Panchama).\n• Chala-svaras/vikṛiti-svaras -- the movable notes that have a lower and a higher variant: R, G, M, D and N. For example, R has Komala R (lower) and Shuddha R (higher)." },
          },
          {
            id: 'q4', number: 'Q4', isHard: false,
            text: "Name two rāgas and their scales derived from Śhaṅkarābharaṇam.",
            answer: { answerKey: "• Rāga Hamsadhvani (audava) -- Arohana: S R G P N ; Avarohana: N P G R S -- formed by removing M and D from Śhaṅkarābharaṇam.\n• The textbook explicitly demonstrates Hamsadhvani as the named example; it does not name a second rāga in this section.", schoolMethod: "• Rāga Hamsadhvani (audava) -- Arohana: S R G P N ; Avarohana: N P G R S -- formed by removing M and D from Śhaṅkarābharaṇam.\n• The textbook explicitly demonstrates Hamsadhvani as the named example; it does not name a second rāga in this section." },
          },
          {
            id: 'q5', number: 'Q5', isHard: false,
            text: "Answer the following:",
            answer: { answerKey: "• A rāga with 5 notes is called Audava.\n• The Melakarta system was devised by Venkatamakhi.\n• Vishnu Narayan Bhatkhande grouped the Hindustani rāgas in the That system.\n• Complete the series: SMGR, RPMG, _____.", schoolMethod: "• A rāga with 5 notes is called Audava.\n• The Melakarta system was devised by Venkatamakhi.\n• Vishnu Narayan Bhatkhande grouped the Hindustani rāgas in the That system.\n• Complete the series: SMGR, RPMG, _____." },
          },
          {
            id: 'q6', number: 'Q6', isHard: false,
            text: "What is the difference between Jatisvaram and Svarajati?",
            answer: { answerKey: "A Jatisvaram uses only svaras and rhythmic syllables (jatis), with no lyrics (sahitya). A Svarajati combines svaras and jatis with simple lyrics (sahitya).", schoolMethod: "A Jatisvaram uses only svaras and rhythmic syllables (jatis), with no lyrics (sahitya). A Svarajati combines svaras and jatis with simple lyrics (sahitya)." },
          },
          {
            id: 'q7', number: 'Q7', isHard: false,
            text: "Give a brief introduction of Rāga Hamsadhvani.",
            answer: { answerKey: "Hamsadhvani is an audava (5-note) janya rāga derived from Śhaṅkarābharaṇam, formed by omitting M and D. Arohana: S R G P N ; Avarohana: N P G R S. The textbook shows its five-note scale and explains that M and D are removed from Śhaṅkarābharaṇam to form it.", schoolMethod: "Hamsadhvani is an audava (5-note) janya rāga derived from Śhaṅkarābharaṇam, formed by omitting M and D. Arohana: S R G P N ; Avarohana: N P G R S. The textbook shows its five-note scale and explains that M and D are removed from Śhaṅkarābharaṇam to form it." },
          },
          {
            id: 'q8', number: 'Q8', isHard: false,
            text: "Describe one system of classification of rāgas with examples.",
            answer: { answerKey: "Rāgas are classified by Rāga-Jāti -- the number of notes used in the Arohana and Avarohana. A 7-note scale is Sampurna (e.g., Yaman), a 6-note scale is Shadava (e.g., Gurjari Todi), and a 5-note scale is Audava (e.g., Bhoopali).", schoolMethod: "Rāgas are classified by Rāga-Jāti -- the number of notes used in the Arohana and Avarohana. A 7-note scale is Sampurna (e.g., Yaman), a 6-note scale is Shadava (e.g., Gurjari Todi), and a 5-note scale is Audava (e.g., Bhoopali)." },
          },
          {
            id: 'q9', number: 'Q9', isHard: false,
            text: "Find out about the contributions of the following stalwarts to Indian music.",
            answer: { answerKey: "Refer to the table of stalwarts in the textbook and write each one's contribution to Indian music.", schoolMethod: "Refer to the table of stalwarts in the textbook and write each one's contribution to Indian music." },
          },
          {
            id: 'q10', number: 'Q10', isHard: false,
            text: "Identify the Rāga-jāti based on the following:",
            answer: { answerKey: "Identify the Rāga-jāti from the given table using the number of svaras in the ārohaṇa and avarohaṇa.", schoolMethod: "Identify the Rāga-jāti from the given table using the number of svaras in the ārohaṇa and avarohaṇa." },
          },
          {
            id: 'q11', number: 'Q11', isHard: false,
            text: "Complete the table.",
            answer: { answerKey: "Complete the table as given in the textbook.", schoolMethod: "Complete the table as given in the textbook." },
          },
          {
            id: 'q12', number: 'Q12', isHard: false,
            text: "Write the tāla lipi (notation) of Teen Tāla.",
            answer: { answerKey: "Teen Tāla (16 mātrās, 4-4-4-4) — notation: X 2 3 4 | 2 3 4 | X 3 4 | 2 3 4 (X = sam, khālī marks the 9th mātrā).", schoolMethod: "Teen Tāla has 16 mātrās divided into four vibhāgas of four beats each. Its tāla lipi is written with the sam (X) on the first beat and the khālī sign on the ninth." },
          },
        ],
      },
      {
        id: 's4', title: 'Activities — How to Do (Tala)',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Activity 8.2 (identifying bols): listen to a theka recording on tabla and pick out its bols. How should you listen?',
            answer: {
              answerKey: 'Replay short stretches, vocalise each stroke sound, and map bols to beats till the cycle is clear.',
              schoolMethod: 'Play the theka in <u>short loops</u>; <u>speak each bol</u> (dha, dhin, na…) aloud with the strokes; count which bol falls on each <u>beat</u>. Repeat till you can recite the full <u>bol-cycle from memory</u>.',
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Activity 8.3 (finding sam): follow the bandish\u2019s tabla theka in class and catch the sam; watch how the artist lands on it differently each time. What should you track?',
            answer: {
              answerKey: 'Keep the beat count running, mark each sam arrival, and note the artist\u2019s different routes to it.',
              schoolMethod: 'Keep <u>silent beat-counting</u> through the theka; raise a finger at every <u>sam</u>. During elaboration, track <u>how the artist curves back</u> to sam each cycle — different phrases, same landing point.',
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'Activity 8.4 (tala pattern of a song): first respond naturally (tap, clap), then find how many beats the tala cycle holds. What is the method?',
            answer: {
              answerKey: 'Feel the pulse physically first, then count beats per cycle to name the tala length.',
              schoolMethod: '<u>Tap or clap along</u> freely till the pulse sits in the body. Then <u>count beats</u> from one sam to the next — that number is the <u>tala\u2019s cycle length</u> (e.g., 8 for Keherwa, 16 for Teental).',
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: 'Activity 8.6 (fitting your song to tala): take your Activity 6.7 family song — does it fall into a tala? Reshape it (speed, stretched/compressed syllables, added/dropped words) and sing it on a steady beat. What should you test?',
            answer: {
              answerKey: 'Check natural fit, reshape rhythm elements to lock to a tala, and feel how the mood shifts.',
              schoolMethod: 'Sing the song against a <u>steady clap</u>: does it already <u>sit in a cycle</u>? If not, <u>speed/slow it, stretch or squeeze syllables, add or drop a word</u> till it locks. Note <u>how the feel changes</u> once tala holds it.',
            }
          },
        ]
      },
    ]
  },
  {
    id: 'ch09', number: 9,
    title: 'Music Travels Around the World',
    slug: 'music-travels-around-the-world',
    code: '0907ar09',
    description: 'Shows how music travels with migration, and classifies instruments into families such as the zither, lute and flute families.',
    exercises: [
      {
        id: 's1',
        title: 'Section A - Music and Migration',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "Has someone you know migrated to another town, city, or country? Share a song that reminds them of home.",
            answer: { answerKey: "Sample answer: My grandfather migrated from his village to the city for work; he often hums old folk songs from his village, which remind him of his childhood home and family gatherings.", schoolMethod: "Sample answer: My grandfather migrated from his village to the city for work; he often hums old folk songs from his village, which remind him of his childhood home and family gatherings." },
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "If you had to write a song about your home and family to take with you to a different place, what would it be like? Write a few lines.",
            answer: { answerKey: "Sample lines: `Far from home my heart still sings, of courtyard talks and evening things; though miles apart, our bond stays true, my family's love, I carry with you.'", schoolMethod: "Sample lines: `Far from home my heart still sings, of courtyard talks and evening things; though miles apart, our bond stays true, my family's love, I carry with you.'" },
          },
        ],
      },
      {
        id: 's2',
        title: 'Section B - Families of Musical Instruments',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "Find 4–5 instruments from around the world that belong to the zither family and compare them.",
            answer: { answerKey: "<table><thead><tr><th>Instrument</th><th>Country/Region</th><th>Material</th><th>Playing Technique</th></tr></thead><tbody><tr><td>Santoor</td><td>India</td><td>Walnut wood, metal strings</td><td>Struck with light wooden mallets</td></tr><tr><td>Guzheng</td><td>China</td><td>Wutong wood, silk/steel strings</td><td>Plucked with finger picks</td></tr><tr><td>Koto</td><td>Japan</td><td>Paulownia wood, silk/nylon strings</td><td>Plucked with finger picks</td></tr><tr><td>Cimbalom</td><td>Hungary</td><td>Wood, metal strings</td><td>Struck with padded beaters</td></tr><tr><td>Autoharp</td><td>Europe/USA</td><td>Wood, steel strings</td><td>Strummed, with chord bars</td></tr></tbody></table>", schoolMethod: "<table><thead><tr><th>Instrument</th><th>Country/Region</th><th>Material</th><th>Playing Technique</th></tr></thead><tbody><tr><td>Santoor</td><td>India</td><td>Walnut wood, metal strings</td><td>Struck with light wooden mallets</td></tr><tr><td>Guzheng</td><td>China</td><td>Wutong wood, silk/steel strings</td><td>Plucked with finger picks</td></tr><tr><td>Koto</td><td>Japan</td><td>Paulownia wood, silk/nylon strings</td><td>Plucked with finger picks</td></tr><tr><td>Cimbalom</td><td>Hungary</td><td>Wood, metal strings</td><td>Struck with padded beaters</td></tr><tr><td>Autoharp</td><td>Europe/USA</td><td>Wood, steel strings</td><td>Strummed, with chord bars</td></tr></tbody></table>" },
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "Listen to two different stringed instruments; note their similarities, differences, and emotional effect.",
            answer: { answerKey: "Sample observation: The sitar (plucked, India) has a bright, sustained, slightly nasal tone that suits meditative or devotional moods, while the guitar (plucked, Europe) has a warmer, rounder tone often used for rhythmic or romantic music. Both are chordophones, but differ in resonance, material and cultural association.", schoolMethod: "Sample observation: The sitar (plucked, India) has a bright, sustained, slightly nasal tone that suits meditative or devotional moods, while the guitar (plucked, Europe) has a warmer, rounder tone often used for rhythmic or romantic music. Both are chordophones, but differ in resonance, material and cultural association." },
          },
        ],
      },
      {
        id: 's3',
        title: 'Exercises',
        questions: [
          {
            id: 'q1', number: 'Q1', isHard: false,
            text: "Name two instruments that belong to the flute family and identify where they are from.",
            answer: { answerKey: "Bansuri (India) -- a transverse bamboo flute; Shakuhachi (Japan) -- an end-blown bamboo flute.", schoolMethod: "Bansuri (India) -- a transverse bamboo flute; Shakuhachi (Japan) -- an end-blown bamboo flute." },
          },
          {
            id: 'q2', number: 'Q2', isHard: false,
            text: "Describe some features of Chutney music (50 words).",
            answer: { answerKey: "Chutney music emerged from Indian migrants in the Caribbean. It blends Bhojpuri folk songs and bhajans with Caribbean soca and calypso. Its lyrics mix Bhojpuri, Hindi, English and Creole, while instruments like the dholak, tassa, dhantal and keyboards give it an energetic, dance-driven sound.", schoolMethod: "Chutney music emerged from Indian migrants in the Caribbean. It blends Bhojpuri folk songs and bhajans with Caribbean soca and calypso. Its lyrics mix Bhojpuri, Hindi, English and Creole, while instruments like the dholak, tassa, dhantal and keyboards give it an energetic, dance-driven sound." },
          },
          {
            id: 'q3', number: 'Q3', isHard: false,
            text: "Give two examples of musical instruments and the materials used to make them.",
            answer: { answerKey: "• Sarod (India) -- wooden body with a stretched goatskin top.\n• Shamisen (Japan) -- wooden body traditionally covered with cat skin.", schoolMethod: "• Sarod (India) -- wooden body with a stretched goatskin top.\n• Shamisen (Japan) -- wooden body traditionally covered with cat skin." },
          },
          {
            id: 'q4', number: 'Q4', isHard: false,
            text: "Match the following:",
            answer: { answerKey: "<table><thead><tr><th>Instrument</th><th>Region</th></tr></thead><tbody><tr><td>Cuatro</td><td>Puerto Rico</td></tr><tr><td>Sarod</td><td>India</td></tr><tr><td>Shamisen</td><td>Japan</td></tr><tr><td>Oud</td><td>West Asia</td></tr></tbody></table>", schoolMethod: "<table><thead><tr><th>Instrument</th><th>Region</th></tr></thead><tbody><tr><td>Cuatro</td><td>Puerto Rico</td></tr><tr><td>Sarod</td><td>India</td></tr><tr><td>Shamisen</td><td>Japan</td></tr><tr><td>Oud</td><td>West Asia</td></tr></tbody></table>" },
          },
          {
            id: 'q5', number: 'Q5', isHard: false,
            text: "Besides tata, sushira, avanaddha and ghana, what are some other ways of classifying musical instruments?",
            answer: { answerKey: "Instruments can also be classified by the musical genre they belong to, by the country or region they come from, or by shared family characteristics, such as the lute family, flute family, or zither family.", schoolMethod: "Instruments can also be classified by the musical genre they belong to, by the country or region they come from, or by shared family characteristics, such as the lute family, flute family, or zither family." },
          },
          {
            id: 'q6', number: 'Q6', isHard: false,
            text: "Describe some characteristic features of instruments belonging to the lute family, and share some examples.",
            answer: { answerKey: "Lute-family instruments are plucked strings sharing a wide resonating body and a narrow neck; the belly may be wood or skin. Examples: oud (West Asia, wood belly), banjo (Europe, skin belly), shamisen (Japan, cat skin), sarod (India, goatskin), and cuatro (Puerto Rico, jagrumo wood).", schoolMethod: "Lute-family instruments are plucked strings sharing a wide resonating body and a narrow neck; the belly may be wood or skin. Examples: oud (West Asia, wood belly), banjo (Europe, skin belly), shamisen (Japan, cat skin), sarod (India, goatskin), and cuatro (Puerto Rico, jagrumo wood)." },
          },
          {
            id: 'q7', number: 'Q7', isHard: false,
            text: "What purpose does music serve when people migrate?",
            answer: { answerKey: "Migrant music provides a link to home, helps migrants bond with fellow migrants, preserves cultural practices, and lets them express their feelings and hardships in a new land.", schoolMethod: "Migrant music provides a link to home, helps migrants bond with fellow migrants, preserves cultural practices, and lets them express their feelings and hardships in a new land." },
          },
          {
            id: 'q8', number: 'Q8', isHard: false,
            text: "Do you think the mixing of musical genres as a result of migration is beneficial? Justify your answer.",
            answer: { answerKey: "Yes, it is beneficial -- fusion genres such as Chutney music and UK Bhangra create vibrant new art forms, enrich the cultural landscape, and help migrant communities preserve their identity while embracing their new environment.", schoolMethod: "Yes, it is beneficial -- fusion genres such as Chutney music and UK Bhangra create vibrant new art forms, enrich the cultural landscape, and help migrant communities preserve their identity while embracing their new environment." },
          },
          {
            id: 'q9', number: 'Q9', isHard: false,
            text: "Imagine you have migrated to another state in India, leaving your family behind. Write a few lines of a song describing your emotions.",
            answer: { answerKey: "Sample lines: `New city lights, unfamiliar sound, yet in my heart, home still is found; I carry your voice in every song I sing, until the day our reunion it will bring.'", schoolMethod: "Sample lines: `New city lights, unfamiliar sound, yet in my heart, home still is found; I carry your voice in every song I sing, until the day our reunion it will bring.'" },
          },
          {
            id: 'q10', number: 'Q10', isHard: false,
            text: "Listen to the violin (bowed) and the guitar (plucked). Explain the difference in their sounds.",
            answer: { answerKey: "The bowed violin produces a continuous, sustained sound because the moving bow keeps re-exciting the string. The plucked guitar produces a sound that begins sharply and then decays, since the string is set vibrating only once per pluck.", schoolMethod: "The bowed violin produces a continuous, sustained sound because the moving bow keeps re-exciting the string. The plucked guitar produces a sound that begins sharply and then decays, since the string is set vibrating only once per pluck." },
          },
        ],
      },
    ],
  },
];
