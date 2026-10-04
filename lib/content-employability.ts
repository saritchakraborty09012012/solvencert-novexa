import type { Chapter } from './content';

// ── EMPLOYABILITY SKILLS BOOK CONTEXT FOR GROQ ─────────────────────────────
export const EMPLOYABILITY_BOOK_CONTEXT = `
EMPLOYABILITY SKILLS — Class IX (NCERT / PSSCIVE, 2026 Revised Syllabus)
Part A of the vocational curriculum (Part B is Information Technology, Code 402).

UNIT 1: Communication Skills (10 sessions)
- Introduction to communication, verbal/non-verbal communication
- Communication barriers (language, emotional, environmental, cultural)
- Writing skills: parts of speech, sentence construction, punctuation
- Pronunciation basics, greetings & introductions, asking questions (open/close-ended)

UNIT 2: Self-Management Skills (6 sessions)
- Self-awareness, strength/weakness analysis, self-confidence
- Positive thinking, personal hygiene, grooming

UNIT 3: Information & Communication Technology (ICT) Skills (12 sessions)
- Introduction to ICT, smartphones/tablets, parts of a computer & peripherals
- Basic computer operations, file operations, internet basics & browsing
- Email: creating an account, writing, sending, receiving and replying

UNIT 4: Entrepreneurship Skills (7 sessions)
- What is entrepreneurship, role of entrepreneurship, qualities of an entrepreneur
- Entrepreneurship vs wage employment, types of business activities
- Product/service/hybrid businesses, entrepreneurship development process

UNIT 5: Green Skills (3 sessions)
- Society and environment, conserving natural resources
- Sustainable development and green economy, green skills for the future

Note: Some sessions include personal/reflective or activity-based questions (opinions,
drawing/labelling tasks). For these, a complete, exam-safe sample answer or model
approach is given, since the actual content is naturally personal to the student.
`;

export const EMPLOYABILITY_CHAPTERS: Chapter[] = [
  {
    id: 'ch01', number: 1,
    title: 'Communication Skills',
    slug:  'communication-skills',
    code:  '17974ch01',
    exercises: [
      {
        id: 's1', title: 'Session 1: Introduction to Communication',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What is the purpose of communication?', parts: ['(a) Inform', '(b) Influence', '(c) Share thoughts, ideas, feelings', '(d) All of the above'], answer: { answerKey: '(d) All of the above', schoolMethod: '(d) All of the above' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which of the following methods are used to receive information from the sender through a letter?', parts: ['(a) Listening', '(b) Speaking', '(c) Reading', '(d) Writing'], answer: { answerKey: '(c) Reading', schoolMethod: '(c) Reading' } },
          { id: 'q3', number: '3', isHard: false, text: 'How do you receive information on phone?', parts: ['(a) Listening', '(b) Speaking', '(c) Reading', '(d) Writing'], answer: { answerKey: '(a) Listening', schoolMethod: '(a) Listening' } },
          {
            id: 'q4', number: '4', isHard: false, text: 'Match the Columns (Communication Barriers): Language, Emotional, Environmental, Cultural.',
            answer: {
              answerKey: '1-C, 2-D, 3-A, 4-B',
              schoolMethod: '1. Language → C. Talking in Hindi when others know only Tamil.\n2. Emotional → D. Parent is not talking to the child.\n3. Environmental → A. Trying to read a book when somebody else is watching TV in the same room.\n4. Cultural → B. In some cultures, wearing shoes and walking inside the kitchen is considered rude and disrespectful.'
            }
          },
          { id: 'q5', number: '5', isHard: false, text: 'Write down the seven factors affecting perspectives in communication.', answer: { answerKey: 'Culture, emotions, perception, knowledge/experience, values/beliefs, environment, physical/mental state.', schoolMethod: '• Culture\n• Emotions\n• Perception\n• Knowledge/experience\n• Values and beliefs\n• Environment\n• Physical/mental state' } },
          { id: 'q6', number: '6', isHard: false, text: 'Give an example of the following: (a) Clear communication (b) Complete communication.', answer: { answerKey: 'Clear = exact/unambiguous message; Complete = includes all necessary details.', schoolMethod: '(a) Clear: "Please submit the assignment by 5 p.m. tomorrow" – exact and unambiguous. (b) Complete: "The meeting is at 10 a.m. on Monday in Room 12" – gives all necessary details.' } },
        ]
      },
      {
        id: 's2', title: 'Session 2: Verbal Communication',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Choose the correct example of oral communication.', parts: ['(a) Reports', '(b) Newspapers', '(c) Face-to-face conversation', '(d) Notes'], answer: { answerKey: '(c) Face-to-face conversation', schoolMethod: '(c) Face-to-face conversation' } },
          { id: 'q2', number: '2', isHard: false, text: 'When we communicate verbally, we should use ______.', parts: ['(a) difficult words', '(b) simple words', '(c) confusing words', '(d) abbreviations'], answer: { answerKey: '(b) simple words', schoolMethod: '(b) simple words' } },
          { id: 'q3', number: '3', isHard: false, text: 'Why do we send emails?', parts: ['(a) To reach on time', '(b) To share documents and files', '(c) To talk to each other', '(d) To meet each other'], answer: { answerKey: '(b) To share documents and files', schoolMethod: '(b) To share documents and files' } },
          { id: 'q4', number: '4', isHard: false, text: 'Write down the different types of verbal communication. Give an example for each type.', answer: { answerKey: 'Oral, Written, Formal, Informal — each with an example.', schoolMethod: '• Oral – face-to-face conversation\n• Written – letters, emails, reports\n• Formal – speaking to a teacher/boss\n• Informal – chatting with friends' } },
        ]
      },
      {
        id: 's3', title: 'Session 3: Non-Verbal Communication',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Which of these is a positive (good) facial expression?', parts: ['(a) Staring hard', '(b) Nodding while listening', '(c) Wrinkled forehead', '(d) Looking away from the speaker'], answer: { answerKey: '(b) Nodding while listening', schoolMethod: '(b) Nodding while listening' } },
          { id: 'q2', number: '2', isHard: false, text: 'What does an upright (straight) body posture convey/show?', parts: ['(a) Shyness', '(b) Fear', '(c) Confidence', '(d) Intelligence'], answer: { answerKey: '(c) Confidence', schoolMethod: '(c) Confidence' } },
          { id: 'q3', number: '3', isHard: false, text: 'Which of these is not an appropriate non-verbal communication at work?', parts: ["(a) Putting arm around a coworker's shoulder", '(b) Shaking hands firmly', '(c) Looking at the speaker with a smile', '(d) Standing with an upright posture'], answer: { answerKey: "(a) Putting arm around a coworker's shoulder", schoolMethod: "(a) Putting arm around a coworker's shoulder" } },
          { id: 'q4', number: '4', isHard: false, text: 'When you are preparing for a presentation, you should ______.', parts: ['(a) focus on the objectives', '(b) practice your speech in front of a mirror or friend', '(c) do rehearsals to time your presentation', '(d) All of the above'], answer: { answerKey: '(d) All of the above', schoolMethod: '(d) All of the above' } },
          {
            id: 'q5', number: '5', isHard: false, text: 'Mark (×) the incorrect non-verbal actions from the list: Laughing during formal communication; Scratching head; Smiling when speaking to a friend; Nodding when you agree; Standing straight; Yawning while listening; Sitting straight; Maintaining eye contact while speaking; Biting nails; Firm handshake; Clenching jaws; Looking away when someone is speaking to you; Intense stare.',
            answer: {
              answerKey: 'Incorrect (×): Laughing during formal communication; Scratching head; Yawning while listening; Biting nails; Clenching jaws; Looking away when spoken to; Intense stare.',
              schoolMethod: '× marked (incorrect) actions: Laughing during formal communication; Scratching head; Yawning while listening; Biting nails; Clenching jaws; Looking away when someone is speaking to you; Intense stare. (The remaining actions – smiling at a friend, nodding in agreement, standing/sitting straight, eye contact, firm handshake – are correct.)'
            }
          },
          { id: 'q6', number: '6', isHard: false, text: 'Give examples of any four common signs used for visual communication.', answer: { answerKey: 'Traffic signals, no-smoking/no-entry signs, exit/washroom symbols, road signs.', schoolMethod: '• Traffic signals (red/yellow/green lights)\n• No-smoking/no-entry signboards\n• Exit and washroom symbols\n• Road signs like speed limit or school-zone signs' } },
        ]
      },
      {
        id: 's4', title: 'Session 4: Writing Skills — Parts of Speech',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What is a sentence?', parts: ['(a) A group of ideas that form a complete paragraph', '(b) A group of words that communicate a complete thought', '(c) A set of rules that we must follow to write correctly', '(d) A set of words that contains all the basic punctuation marks'], answer: { answerKey: '(b) A group of words that communicate a complete thought', schoolMethod: '(b) A group of words that communicate a complete thought' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which of these sentences use uppercase letters correctly?', parts: ['(a) I am Hungry.', '(b) Divya and sunil are reading.', '(c) The bucket is Full of water.', '(d) She lives in Delhi.'], answer: { answerKey: '(d) She lives in Delhi.', schoolMethod: '(d) She lives in Delhi.' } },
          { id: 'q3', number: '3', isHard: false, text: 'Which of these sentences are punctuated correctly?', parts: ['(a) Where are you going.', '(b) I have a pen a notebook and a pencil.', '(c) I am so happy to see you!', "(d) This is Abdul's house."], answer: { answerKey: "(c) and (d)", schoolMethod: "(c) I am so happy to see you! and (d) This is Abdul's house." } },
          { id: 'q4', number: '4', isHard: false, text: 'Underline the noun, pronoun, adjective, verb and adverb in: (a) Sanjay plays football everyday. (b) Divya gave him new books. (c) I opened the red box carefully.', answer: { answerKey: 'Identify each part of speech in the three sentences.', schoolMethod: '(a) Sanjay(noun) plays(verb) football(noun) everyday(adverb). (b) Divya(noun) gave(verb) him(pronoun) new(adjective) books(noun). (c) I(pronoun) opened(verb) the red(adjective) box(noun) carefully(adverb).' } },
          { id: 'q5', number: '5', isHard: false, text: 'Fill correct nouns and verbs from the box (girl, girls, boy, milk, dog, skipping, riding, running, studying, drinking, barking) to complete sentences like: a. The ___ is ___. b. The ___ is ___. etc.', answer: { answerKey: 'a. boy/running b. boy/riding c. boy/studying d. girls/running e. Raju/studying f. dog/barking', schoolMethod: 'The pictures determine the intended matches: (a) The boy is running. (b) The boy is riding. (c) The boy is studying. (d) The girls are running. (e) Raju is studying. (f) The dog is barking.' } },
          { id: 'q6', number: '6', isHard: false, text: 'Identify the conjunctions and prepositions from the box (Under, And, In, At, Or, Up) and list them in the correct column.', answer: { answerKey: 'Conjunctions: And, Or. Prepositions: Under, In, At, Up.', schoolMethod: 'Conjunctions: And, Or. Prepositions: Under, In, At, Up.' } },
        ]
      },
      {
        id: 's5', title: 'Session 5: Writing Skills — Sentences',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Identify the subject in the sentence, "The children played football."', parts: ['(a) The children', '(b) Children played', '(c) Played', '(d) Football'], answer: { answerKey: '(a) The children', schoolMethod: '(a) The children – the subject is the person or thing that does the action, and here "The children" played.' } },
          { id: 'q2', number: '2', isHard: false, text: 'Identify the object in the sentence, "The children played football."', parts: ['(a) The children', '(b) Children played', '(c) Played', '(d) Football'], answer: { answerKey: '(d) Football', schoolMethod: '(d) Football – the object is the thing that receives the action, and "football" is what was played.' } },
          { id: 'q3', number: '3', isHard: false, text: 'Which of these sentences has both indirect and direct objects?', parts: ['(a) I am watching TV.', '(b) She bought a blue pen.', '(c) The girls played cricket.', '(d) He wrote his sister a letter.'], answer: { answerKey: '(d) He wrote his sister a letter.', schoolMethod: '(d) He wrote his sister a letter. – Direct object: a letter (what was written). Indirect object: his sister (to whom it was written).' } },
          { id: 'q4', number: '4', isHard: false, text: 'Which of these sentences is in passive voice?', parts: ['(a) They are watching a movie.', '(b) The clock was repaired by Raju.', '(c) He is sleeping in the room.', '(d) My pet dog bit the postman.'], answer: { answerKey: '(b) The clock was repaired by Raju.', schoolMethod: '(b) The clock was repaired by Raju. – here the subject (the clock) receives the action instead of doing it.' } },
          { id: 'q5', number: '5', isHard: false, text: 'Write one sentence of each type — statement, question, exclamatory and order.', answer: { answerKey: 'Statement: I go to school every day. Question: Did you complete your homework? Exclamatory: What a wonderful match it was! Order: Please close the door.', schoolMethod: '• Statement (Declarative): I go to school every day.\n• Question (Interrogative): Did you complete your homework?\n• Exclamatory: What a wonderful match it was!\n• Order (Imperative): Please close the door.' } },
          { id: 'q6', number: '6', isHard: false, text: 'Which is your favourite festival? Write two paragraphs about your favourite festival. Each paragraph should have a minimum of four sentences.', answer: { answerKey: 'Sample two-paragraph answer on a favourite festival.', schoolMethod: '(Sample) My favourite festival is Diwali. It is the festival of lights and is celebrated in October or November every year. People clean and decorate their houses with lamps, candles and colourful rangolis. Families worship Goddess Lakshmi in the evening.\nOn the main day, everyone wears new clothes and exchanges sweets and gifts. People burst firecrackers and share greetings with friends and neighbours. I love Diwali because my whole family gets together and we have a lot of fun. It teaches us to remove darkness of ignorance with the light of knowledge.' } },
          { id: 'q7', number: '7', isHard: false, text: 'Practice speaking correct sentences with your classmates. Try and find the parts of sentences which you use commonly.', answer: { answerKey: 'Activity: sample conversation identifying subject-verb-object.', schoolMethod: '(Activity based) Sample: "Divya (subject) reads (verb) a book (object)." "I (subject) ate (verb) an apple (object)." Practise such everyday sentences aloud and point out the subject, verb and object in each one.' } },
        ]
      },
      {
        id: 's6', title: 'Session 6: Pronunciation Basics',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What is phonetics?', parts: ['(a) It is the study of how we write words in English.', '(b) It is the study of how people understand sentences.', '(c) It is the study of how many words the English language has.', '(d) It is the study of the sounds we make when we speak.'], answer: { answerKey: '(d) It is the study of the sounds we make when we speak.', schoolMethod: '(d) It is the study of the sounds we make when we speak.' } },
          { id: 'q2', number: '2', isHard: false, text: 'What are the different types of sounds used in English pronunciation?', parts: ['(a) Vowel sounds', '(b) Diphthong sounds', '(c) Consonant sounds', '(d) All of the above'], answer: { answerKey: '(d) All of the above', schoolMethod: '(d) All of the above' } },
        ]
      },
      {
        id: 's7', title: 'Session 7: Greetings and Introduction',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: "You say 'Good Morning' when it is ______.", parts: ['(a) 11 am', '(b) 9 am', '(c) 8 am', '(d) All (a), (b) and (c)'], answer: { answerKey: '(d) All (a), (b) and (c)', schoolMethod: '(d) All (a), (b) and (c)' } },
          { id: 'q2', number: '2', isHard: false, text: "You may say 'Hi' when you meet ______.", parts: ['(a) your teacher in class', '(b) a senior in the office', '(c) your Principal', '(d) your friends at a shop'], answer: { answerKey: '(d) your friends at a shop', schoolMethod: '(d) your friends at a shop' } },
          { id: 'q3', number: '3', isHard: false, text: "You say 'Good Afternoon' when it is ______.", parts: ['(a) 10 am', '(b) 11.59 am', '(c) 6 pm', '(d) 1 pm'], answer: { answerKey: '(d) 1 pm', schoolMethod: '(d) 1 pm' } },
          { id: 'q4', number: '4', isHard: false, text: "You say 'Good Evening' when it is ______.", parts: ['(a) 11 am', '(b) 9 am', '(c) 2 pm', '(d) 7 pm'], answer: { answerKey: '(d) 7 pm', schoolMethod: '(d) 7 pm' } },
          { id: 'q5', number: '5', isHard: false, text: 'Write two to three lines you would use to introduce yourself.', answer: { answerKey: 'A short self-introduction giving name, class, school, and a hobby.', schoolMethod: '"Good morning, my name is [Name]. I am a Class IX student studying at [School Name]. I enjoy reading and playing badminton in my free time."' } },
        ]
      },
      {
        id: 's8', title: 'Session 8: Talking about Self',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Use the words (football and swimming, seven-years-old, Hassan, Yasmin, in Bengaluru) to complete: (a) My first name is ___. (b) My surname is ___. (c) I am ___. (d) I live ___. (e) I like ___.', answer: { answerKey: '(a) Yasmin (b) Hassan (c) seven-years-old (d) in Bengaluru (e) football and swimming.', schoolMethod: '(a) My first name is Yasmin. (b) My surname is Hassan. (c) I am seven-years-old. (d) I live in Bengaluru. (e) I like football and swimming.' } },
          { id: 'q2', number: '2', isHard: false, text: 'A postal code is ______.', parts: ['(a) a group of numbers/letters used to identify a government building', '(b) a code used to indicate the door number of a house', '(c) a group of numbers or letters used by the post office to identify a region', '(d) a code used to identify different post offices'], answer: { answerKey: '(c) a group of numbers or letters used by the post office to identify a region', schoolMethod: '(c) a group of numbers or letters used by the post office to identify a region' } },
        ]
      },
      {
        id: 's9', title: 'Session 9: Asking Questions I',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Raju is the class monitor. He wants to know why Ramesh is coming late every day. Which question can Raju ask?', parts: ['(a) Do you come on time?', '(b) Are you late?', '(c) Why are you late every day?', '(d) Will it not be easier to complete your work if you come on time?'], answer: { answerKey: '(c) Why are you late every day?', schoolMethod: '(c) Why are you late every day?' } },
          { id: 'q2', number: '2', isHard: false, text: 'If you have not understood a task given to you, which question should you ask?', parts: ['(a) Where are the reports of this task?', '(b) Can you repeat the instructions for this task?', '(c) Can you give me an example of this task?', '(d) Why are you doing this task?'], answer: { answerKey: '(b) Can you repeat the instructions for this task?', schoolMethod: '(b) Can you repeat the instructions for this task?' } },
          { id: 'q3', number: '3', isHard: false, text: 'Sheela does not have time so she decides to delay a task. Which question should she ask before ignoring the task?', parts: ['(a) What is this task?', '(b) When does this task need to be completed?', '(c) Is this task important?', '(d) No need to ask any question.'], answer: { answerKey: '(c) Is this task important?', schoolMethod: '(c) Is this task important?' } },
          { id: 'q4', number: '4', isHard: false, text: 'Renuka is joining a new school. Which question will help her become comfortable with new classmates?', parts: ['(a) How long have you been studying here?', '(b) Would you like to share my lunch?', '(c) What do you all do in your free time?', '(d) All the options are correct.'], answer: { answerKey: '(d) All the options are correct.', schoolMethod: '(d) All the options are correct.' } },
          { id: 'q5', number: '5', isHard: false, text: "Re-arrange: (a) she/like/sing?/Does/to (b) waiting/What/are/you/for? (c) play/like/football?/Do/you/to (d) fighting?/they/are/Why", answer: { answerKey: '(a) Does she like to sing? (b) What are you waiting for? (c) Do you like to play football? (d) Why are they fighting?', schoolMethod: '(a) Does she like to sing? (b) What are you waiting for? (c) Do you like to play football? (d) Why are they fighting?' } },
        ]
      },
      {
        id: 's10', title: 'Session 10: Asking Questions II',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What are close-ended questions?', parts: ['(a) Questions that can have any answer', '(b) Questions that do not have answers', '(c) Questions with yes/no answers', '(d) Questions that have many answers'], answer: { answerKey: '(c) Questions with yes/no answers', schoolMethod: '(c) Questions with yes/no answers' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which of these are open-ended questions?', parts: ['(a) Where do you live?', '(b) Are you hungry?', '(c) How do you feel?', '(d) Did you meet him?'], answer: { answerKey: '(a) and (c)', schoolMethod: '(a) Where do you live? and (c) How do you feel?' } },
          { id: 'q3', number: '3', isHard: false, text: 'Which of these are question words?', parts: ['(a) What', '(b) Want', '(c) Which', '(d) How'], answer: { answerKey: '(a), (c), (d)', schoolMethod: '(a) What, (c) Which, (d) How' } },
          { id: 'q4', number: '4', isHard: false, text: 'Which is the correct way to convert "You are studying" into a question?', parts: ['(a) You are studying?', '(b) Studying you are?', '(c) Are you studying?', '(d) Studying are you?'], answer: { answerKey: '(c) Are you studying?', schoolMethod: '(c) Are you studying?' } },
          { id: 'q5', number: '5', isHard: false, text: 'Make a note of five questions your friends asked you. How many were open-ended? Make a list of five close-ended questions you asked others in a day.', answer: { answerKey: 'Sample open-ended and close-ended questions.', schoolMethod: '(Sample) Open-ended examples: "How was your weekend?", "What did you learn today?" Close-ended examples: "Are you coming to school tomorrow?", "Did you finish your homework?", "Is this your bag?", "Do you like tea?", "Will you play today?"' } },
        ]
      },
    ]
  },
  {
    id: 'ch02', number: 2,
    title: 'Self-Management Skills',
    slug:  'self-management-skills',
    code:  '17974ch02',
    exercises: [
      {
        id: 's1', title: 'Session 1: Introduction to Self-management',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Which of the following is not a self-management skill?', parts: ['(a) Problem solving', '(b) Bargaining', '(c) Understanding self', '(d) Confidence building'], answer: { answerKey: '(b) Bargaining', schoolMethod: '(b) Bargaining' } },
          { id: 'q2', number: '2', isHard: false, text: 'Grooming is a term associated with', parts: ['(a) time management', '(b) problem solving', '(c) neat and clean appearance', '(d) self-management'], answer: { answerKey: '(c) neat and clean appearance', schoolMethod: '(c) neat and clean appearance' } },
          { id: 'q3', number: '3', isHard: false, text: 'Write a short note on the factors influencing self-management.', answer: { answerKey: 'Habits, attitude, values, emotions, upbringing, environment, self-awareness.', schoolMethod: 'Self-management is influenced by our habits, attitude, values, emotions, family upbringing, environment, and level of self-awareness, which together shape how well we control our own behaviour and choices.' } },
          { id: 'q4', number: '4', isHard: false, text: 'List any 5 self-management skills.', answer: { answerKey: 'Self-awareness, self-confidence, time management, positive thinking, grooming.', schoolMethod: '• Self-awareness\n• Self-confidence\n• Time management\n• Positive thinking\n• Personal hygiene and grooming' } },
          { id: 'q5', number: '5', isHard: false, text: 'Draw an outline of your right hand and label each finger with different factors that influence you in managing yourself.', answer: { answerKey: 'Label fingers: Family, Friends, Teachers, Media/Environment, Personal values.', schoolMethod: '(Activity based) Label the five fingers with: Family, Friends, Teachers, Media/Environment, and Personal values – as the five factors that influence self-management.' } },
        ]
      },
      {
        id: 's2', title: 'Session 2: Strength and Weakness Analysis',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Fill in the table to prepare an action plan to overcome your weaknesses, listing your Strengths, Weaknesses, and an Action plan for each weakness.', answer: { answerKey: 'Sample: Strength/Weakness/Action plan table.', schoolMethod: 'Sample: Strength – I can speak many languages. Weakness – I do not understand computers. Action plan – Improve computer skills by attending extra computer classes after school and practising regularly at home.' } },
        ]
      },
      {
        id: 's3', title: 'Session 3: Self-confidence',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What steps should one take to build confidence?', parts: ['(a) Set goals in life', '(b) Appreciate oneself for all achievements', '(c) Always think positively', '(d) Talk to people who are confident'], answer: { answerKey: 'All of (a), (b), (c), (d) help build confidence.', schoolMethod: 'All of (a), (b), (c) and (d) help build confidence.' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which of the following is a quality of a self-confident person?', parts: ['(a) Patient', '(b) Compassionate', '(c) Committed', '(d) Passionate'], answer: { answerKey: '(c) Committed', schoolMethod: '(c) Committed' } },
          { id: 'q3', number: '3', isHard: false, text: 'What are the factors that affect self-confidence?', answer: { answerKey: 'Family/upbringing, past experiences, feedback, self-image, comparison with others.', schoolMethod: '• Family and upbringing\n• Past experiences and achievements\n• Feedback and encouragement from others\n• Self-image and body image\n• Comparing oneself with others' } },
        ]
      },
      {
        id: 's4', title: 'Session 4: Positive Thinking',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What is the best way to start our day positively?', parts: ['(a) Think about all that can go wrong.', '(b) Think about the difficult test you will face.', '(c) Think about all your accomplishments so far and feel good about it.', '(d) Think about the traffic on the road and feel stressed.'], answer: { answerKey: '(c) Think about all your accomplishments so far and feel good about it.', schoolMethod: '(c) Think about all your accomplishments so far and feel good about it.' } },
          { id: 'q2', number: '2', isHard: false, text: 'Rahul gets feedback on his project work from his class teacher. Which option demonstrates a positive attitude?', parts: ['(a) Rahul ignores the feedback.', '(b) Rahul takes the feedback but does not use it.', '(c) Rahul tells others that the teacher is wrong.', '(d) Rahul learns from the feedback and makes his project better.'], answer: { answerKey: '(d) Rahul learns from the feedback and makes his project better.', schoolMethod: '(d) Rahul learns from the feedback and makes his project better.' } },
          { id: 'q3', number: '3', isHard: false, text: 'What can you do to get rid of negative thoughts or feelings?', parts: ['(a) Meditate to calm down and feel positive.', '(b) Ignore them and move on in life.', '(c) Act based on the negative thoughts or feelings.', '(d) Talk to a friend and share all your negative feelings.'], answer: { answerKey: '(a) Meditate to calm down and feel positive.', schoolMethod: '(a) Meditate to calm down and feel positive.' } },
        ]
      },
      {
        id: 's5', title: 'Session 5: Personal Hygiene',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Do you think people living in hill stations can skip taking a bath for many days?', parts: ['(a) No, irrespective of climate, one should bathe regularly.', '(b) Yes, acceptable in cold climate.', '(c) Yes, if wiped with a wet cloth.', '(d) None of the above'], answer: { answerKey: '(a) No, irrespective of climate, one should bathe regularly.', schoolMethod: '(a) No, irrespective of climate, one should bathe regularly.' } },
          { id: 'q2', number: '2', isHard: false, text: 'Radha applies a lot of hair oil and does not wash her hair for days, and it smells bad. What would be your suggestion?', parts: ['(a) She can leave the oil in her hair.', '(b) She can leave it on at night and wash her hair every day before leaving home.', '(c) She should not apply oil at all.', '(d) She can apply oil and pour a little water before leaving home.'], answer: { answerKey: '(b) She can leave it on at night and wash her hair every day before leaving home.', schoolMethod: '(b) She can leave it on at night and wash her hair every day before leaving home.' } },
          { id: 'q3', number: '3', isHard: false, text: 'List three things you will do for personal grooming in each of CARE, WASH and AVOID to keep clean.', answer: { answerKey: 'CARE: hair/skin/teeth care. WASH: hands/bath/clothes. AVOID: unhygienic habits.', schoolMethod: '• CARE: keep hair free of dandruff, apply oil/cream on skin, brush teeth daily\n• WASH: wash hands frequently, take a bath every day, wash clothes regularly\n• AVOID: blowing nose without a handkerchief, wearing damp socks, sharing personal items like combs/towels' } },
        ]
      },
      {
        id: 's6', title: 'Session 6: Grooming',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Dressing and grooming are important because they help us to look ______.', parts: ['(a) smart', '(b) untidy', '(c) shabby', '(d) All of the above'], answer: { answerKey: '(a) smart', schoolMethod: '(a) smart' } },
          { id: 'q2', number: '2', isHard: false, text: 'A shirt with bright colours, prints and worn casually is an example of ______ shirt.', parts: ['(a) informal', '(b) formal', '(c) Both of the above', '(d) None of the above'], answer: { answerKey: '(a) informal', schoolMethod: '(a) informal' } },
          { id: 'q3', number: '3', isHard: false, text: 'A plain, well-fitted T-shirt worn for casual outings is an example of ______ T-shirt.', parts: ['(a) informal', '(b) formal', '(c) Both of the above', '(d) None of the above'], answer: { answerKey: '(a) informal', schoolMethod: '(a) informal' } },
        ]
      },
    ]
  },
  {
    id: 'ch03', number: 3,
    title: 'Information & Communication Technology (ICT) Skills',
    slug:  'ict-skills',
    code:  '17974ch03',
    exercises: [
      {
        id: 's1', title: 'Session 1: Introduction to ICT',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'True/False: The full form of ICT is Information Commuting Technology.', answer: { answerKey: 'False (Information and Communication Technology)', schoolMethod: 'False (Information and Communication Technology)' } },
          { id: 'q2', number: '2', isHard: false, text: 'True/False: Live sports and news can only be shown using ICT.', answer: { answerKey: 'False', schoolMethod: 'False' } },
          { id: 'q3', number: '3', isHard: false, text: 'Give any two uses of ICT at home.', answer: { answerKey: 'TV entertainment; smartphones/internet for communication, banking, shopping.', schoolMethod: '• Watching news/entertainment on TV\n• Using smartphones/internet for communication, banking and online shopping' } },
          { id: 'q4', number: '4', isHard: false, text: 'What are the emerging skills in ICT?', answer: { answerKey: 'Cloud computing, data analytics, AI/automation, cyber security, app development.', schoolMethod: '• Cloud computing\n• Data analytics\n• Artificial Intelligence and automation\n• Cyber security\n• Mobile app development' } },
          { id: 'q5', number: '5', isHard: false, text: 'What are the key skills one should possess to use ICT?', answer: { answerKey: 'Basic device operation, internet/email skills, typing, online safety awareness.', schoolMethod: '• Basic computer/smartphone operating skills\n• Internet browsing and email skills\n• Typing and digital communication skills\n• Awareness of online safety and security' } },
        ]
      },
      {
        id: 's2', title: 'Session 2: ICT Tools — Smartphones and Tablets I',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Identify the following symbols and write their names.', answer: { answerKey: 'Wi-Fi, Bluetooth, Battery, Camera, Gallery, Settings icons.', schoolMethod: 'Common smartphone icons include: Wi-Fi signal, Bluetooth, Battery status, Camera, Gallery/Photos, and Settings (gear icon).' } },
          { id: 'q2', number: '2', isHard: false, text: 'Write any two differences between a smartphone and a tablet.', answer: { answerKey: 'Smartphone: pocket-size, mainly for calls. Tablet: larger screen, usually no regular calls.', schoolMethod: 'A smartphone is smaller, fits in a pocket, and is mainly used for calling. A tablet has a larger screen for reading/viewing but usually cannot make regular phone calls.' } },
        ]
      },
      {
        id: 's3', title: 'Session 3: ICT Tools — Smartphones and Tablets II',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What is a short-range wireless communication technology called?', parts: ['(a) Wi-Fi', '(b) Internet', '(c) Bluetooth', '(d) PS'], answer: { answerKey: '(c) Bluetooth', schoolMethod: '(c) Bluetooth' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which part of the home screen is visible on all pages?', parts: ['(a) Status bar', '(b) Main icon area', '(c) Dock', '(d) Clock'], answer: { answerKey: '(c) Dock', schoolMethod: '(c) Dock' } },
          { id: 'q3', number: '3', isHard: false, text: 'What does GPS stand for?', parts: ['(a) Global Positioning System', '(b) Global Payment System', '(c) Global Program System', '(d) Global Pointing System'], answer: { answerKey: '(a) Global Positioning System', schoolMethod: '(a) Global Positioning System' } },
        ]
      },
      {
        id: 's4', title: 'Session 4: Parts of Computer and Peripherals',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Which of the following units make up the CPU? (Tick all correct)', parts: ['(a) Processing Unit', '(b) Input Unit', '(c) Memory Unit', '(d) Control Unit', '(e) Output Unit'], answer: { answerKey: '(a), (c), (d)', schoolMethod: '(a) Processing (Arithmetic-Logic) Unit, (c) Memory Unit, (d) Control Unit' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which of the following are names of ports in a computer? (Tick all correct)', parts: ['(a) HDMI', '(b) Input', '(c) VGA', '(d) USB', '(e) Ethernet'], answer: { answerKey: '(a), (c), (d), (e)', schoolMethod: '(a) HDMI, (c) VGA, (d) USB, (e) Ethernet' } },
          { id: 'q3', number: '3', isHard: false, text: 'There is a talent contest in your town. For the audition, you need to send a recording of a song. What would you connect to your computer to record your song?', parts: ['(a) Keyboard', '(b) Microphone', '(c) Scanner', '(d) Mouse'], answer: { answerKey: '(b) Microphone', schoolMethod: '(b) Microphone' } },
          { id: 'q4', number: '4', isHard: false, text: 'Write the purpose of the I/O devices: Mic/microphone, Scanner, Camera, Barcode Reader, Printer, Speaker.', answer: { answerKey: 'Mic (sound input), Scanner (digitise documents), Camera (photo/video), Barcode Reader (product info), Printer (hard copy), Speaker (audio output).', schoolMethod: '• Mic/microphone – records sound/voice input\n• Scanner – converts paper documents/images into digital form\n• Camera – captures photos/videos as input\n• Barcode Reader – reads barcodes to fetch product information\n• Printer – gives printed (hard copy) output\n• Speaker – gives sound/audio output' } },
        ]
      },
      {
        id: 's5', title: 'Session 5: Basic Computer Operations',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Which of the following functions are performed using a mouse? (Tick all correct)', parts: ['(a) Turn on computer', '(b) Typing', '(c) Right click', '(d) Drag and Drop an Icon'], answer: { answerKey: '(c), (d)', schoolMethod: '(c) Right click, (d) Drag and Drop an Icon' } },
          { id: 'q2', number: '2', isHard: false, text: 'What is the term used when you press and hold the left mouse key and move the mouse around?', parts: ['(a) Highlighting', '(b) Dragging', '(c) Selecting', '(d) Moving'], answer: { answerKey: '(b) Dragging', schoolMethod: '(b) Dragging' } },
          { id: 'q3', number: '3', isHard: false, text: 'Rearrange the steps for starting a computer: (a) Desktop appears after login (b) Login screen appears (c) Power on Self-Test (POST) starts (d) Operating system starts (e) Welcome screen appears', answer: { answerKey: 'c → d → e → b → a', schoolMethod: 'Correct order: (c) POST starts → (d) Operating system starts → (e) Welcome screen appears → (b) Login screen appears → (a) Desktop appears after login.' } },
          { id: 'q4', number: '4', isHard: false, text: 'Describe the functions of at least 5 types of keys.', answer: { answerKey: 'Alphanumeric, Function, Arrow, Enter, Shift keys.', schoolMethod: '• Alphanumeric keys – type letters and numbers\n• Function keys (F1-F12) – perform special software-specific tasks\n• Arrow keys – move the cursor\n• Enter key – confirms a command/moves to a new line\n• Shift key – types capital letters/symbols' } },
          { id: 'q5', number: '5', isHard: false, text: 'Describe the functions of a mouse.', answer: { answerKey: 'Pointing device to move cursor, click/double-click, right-click, drag-and-drop.', schoolMethod: 'A mouse is a pointing device used to move the on-screen cursor, select/open items with a click or double-click, right-click for options, and drag-and-drop to move objects on screen.' } },
        ]
      },
      {
        id: 's6', title: 'Session 6: Performing Basic File Operations',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Which shortcut key is used to paste a file?', parts: ['(a) Ctrl + C', '(b) Ctrl + P', '(c) Ctrl + V', '(d) Ctrl + X'], answer: { answerKey: '(c) Ctrl + V', schoolMethod: '(c) Ctrl + V' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which of the following is a valid file extension for a Notepad file?', parts: ['(a) .jpg', '(b) .doc', '(c) .text', '(d) .txt'], answer: { answerKey: '(d) .txt', schoolMethod: '(d) .txt' } },
          { id: 'q3', number: '3', isHard: false, text: 'Which key do you use to copy something?', parts: ['(a) Ctrl+X', '(b) Ctrl+C', '(c) Ctrl+Z', '(d) Ctrl+T'], answer: { answerKey: '(b) Ctrl+C', schoolMethod: '(b) Ctrl+C' } },
        ]
      },
      {
        id: 's7', title: 'Session 7: Communication and Networking — Basics of Internet',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'To connect to the Internet, the computer has to be connected to the ______.', parts: ['(a) Internet Society', '(b) Internet Architecture', '(c) Internet Service Provider', '(d) Large Area Network'], answer: { answerKey: '(c) Internet Service Provider', schoolMethod: '(c) Internet Service Provider' } },
          { id: 'q2', number: '2', isHard: false, text: 'What is the Internet?', parts: ['(a) Phone connections', '(b) Collection of computer networks', '(c) Network of computers in an office', '(d) None of the above'], answer: { answerKey: '(b) Collection of computer networks', schoolMethod: '(b) Collection of computer networks' } },
          { id: 'q3', number: '3', isHard: false, text: 'Write a short note on the uses of internet.', answer: { answerKey: 'Communication, information, education, entertainment, banking/shopping, social networking.', schoolMethod: 'The internet is used for communication (email, messaging), gathering information, online education, entertainment, online banking and shopping, and social networking with people worldwide.' } },
        ]
      },
      {
        id: 's8', title: 'Session 8: Communication and Networking — Internet Browsing',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What do I need to get information from the World Wide Web?', parts: ['(a) Computer', '(b) Browser', '(c) Internet Connection', '(d) All of the above'], answer: { answerKey: '(d) All of the above', schoolMethod: '(d) All of the above' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which of the following is a web browser?', parts: ['(a) Internet', '(b) Chrome', '(c) Windows', '(d) None of the above'], answer: { answerKey: '(b) Chrome', schoolMethod: '(b) Chrome' } },
          { id: 'q3', number: '3', isHard: false, text: 'List the steps to search for information using a web browser.', answer: { answerKey: 'Open browser → address bar → type search/keyword → Enter → review results → click link.', schoolMethod: 'Open the browser → click on the address bar → type the search engine name (e.g. google.com) or keyword → press Enter → review the search results → click the relevant link to view information.' } },
        ]
      },
      {
        id: 's9', title: 'Session 9: Communication and Networking — Introduction to E-mail',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'True/False: Email cannot be sent to more than one person at a time.', answer: { answerKey: 'False', schoolMethod: 'False' } },
          { id: 'q2', number: '2', isHard: false, text: 'True/False: Email is an electronic message sent over the Internet or a computer network.', answer: { answerKey: 'True', schoolMethod: 'True' } },
          { id: 'q3', number: '3', isHard: false, text: 'True/False: Pictures, videos, audio files, and spreadsheet files cannot be attached with an e-mail.', answer: { answerKey: 'False', schoolMethod: 'False' } },
        ]
      },
      {
        id: 's10', title: 'Session 10: Communication and Networking — Creating an E-mail Account',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Steps to sign in to your Gmail account: (i) Type username (ii) Go to www.gmail.com (iii) Click Sign in (iv) Type password. Choose the correct order.', parts: ['(a) i>ii>iv>iii', '(b) ii>i>iii>iv', '(c) ii>i>iv>iii', '(d) ii>iii>i>iv'], answer: { answerKey: '(c) ii > i > iv > iii', schoolMethod: '(c) ii > i > iv > iii' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which of the following statements is false?', parts: ['(a) You need to create an account before you can send an e-mail.', '(b) You should sign out of your account when not using the computer.', '(c) You do not need an Internet connection to use your Gmail account.', '(d) You must not share your password with others.'], answer: { answerKey: '(c) — false, an internet connection IS required.', schoolMethod: '(c) You do not need an Internet connection to use your Gmail account – this is FALSE (an internet connection is required).' } },
          { id: 'q3', number: '3', isHard: false, text: 'Which of the following is an e-mail service?', parts: ['(a) WhatsApp', '(b) WeChat', '(c) Gmail', '(d) Facebook'], answer: { answerKey: '(c) Gmail', schoolMethod: '(c) Gmail' } },
          { id: 'q4', number: '4', isHard: false, text: 'What characters should the password have in an e-mail address, to make it more secure?', answer: { answerKey: 'Mix of upper/lowercase, numbers, special characters, min 8 characters.', schoolMethod: 'A secure password should have a mix of uppercase and lowercase letters, numbers, and special characters (like @, #, $), and should be at least 8 characters long.' } },
        ]
      },
      {
        id: 's11', title: 'Session 11: Communication and Networking — Writing an E-mail',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What do you type in the "To" field?', parts: ['(a) The topic of the e-mail', '(b) The main message', "(c) Email address of the person you're sending a copy to", '(d) Email address of the person you are sending the mail to'], answer: { answerKey: '(d) Email address of the person you are sending the mail to', schoolMethod: '(d) Email address of the person you are sending the mail to' } },
          { id: 'q2', number: '2', isHard: false, text: "You want to send an e-mail to your friend Sushil. In which order will you perform: (i) Type Sushil's e-mail address, subject and message (ii) Click on the Compose button (iii) Click Send (iv) Open your e-mail account.", parts: ['(a) (iv)>(ii)>(i)>(iii)', '(b) (iv)>(i)>(ii)>(iii)', '(c) (iv)>(i)>(iii)>(ii)', '(d) (iii)>(i)>(ii)>(iv)'], answer: { answerKey: '(a) (iv)>(ii)>(i)>(iii)', schoolMethod: '(a) (iv) Open your e-mail account > (ii) Click Compose > (i) Type address, subject, message > (iii) Click Send' } },
          { id: 'q3', number: '3', isHard: false, text: 'In "To:" section ________ is typed for sending a message through e-mail.', answer: { answerKey: "the recipient's e-mail address", schoolMethod: "the recipient's e-mail address" } },
          { id: 'q4', number: '4', isHard: false, text: 'The Attach button in e-mail often has a ________ as its symbol.', answer: { answerKey: 'paperclip', schoolMethod: 'paperclip' } },
          { id: 'q5', number: '5', isHard: false, text: 'In the ________ section of the e-mail, the topic of the mail is written.', answer: { answerKey: 'Subject', schoolMethod: 'Subject' } },
          { id: 'q6', number: '6', isHard: false, text: 'After typing the message in the main body of the e-mail, you need to click on ________ button to send the e-mail.', answer: { answerKey: 'Send', schoolMethod: 'Send' } },
        ]
      },
      {
        id: 's12', title: 'Session 12: Communication and Networking — Receiving and Replying to E-mails',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'True/False: By choosing the "Reply" option, the e-mail address of the sender of the original message will appear in the "To" field.', answer: { answerKey: 'True', schoolMethod: 'True' } },
          { id: 'q2', number: '2', isHard: false, text: 'True/False: Email is an electronic message transmitted over the Internet or computer network from one user to another.', answer: { answerKey: 'True', schoolMethod: 'True' } },
          { id: 'q3', number: '3', isHard: false, text: 'True/False: You can forward the e-mail by clicking on the delete icon.', answer: { answerKey: 'False', schoolMethod: 'False' } },
        ]
      },
    ]
  },
  {
    id: 'ch04', number: 4,
    title: 'Entrepreneurship Skills',
    slug:  'entrepreneurship-skills',
    code:  '17974ch04',
    exercises: [
      {
        id: 's1', title: 'Session 1: What is Entrepreneurship?',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Business is a(n) ______ activity.', parts: ['(a) social', '(b) economic', '(c) hazardous', '(d) selling'], answer: { answerKey: '(b) economic', schoolMethod: '(b) economic' } },
          { id: 'q2', number: '2', isHard: false, text: 'What is the aim of entrepreneurship?', parts: ['(a) Earn a profit', "(b) Solve customers' need innovatively", '(c) Both of the above', '(d) None of the above'], answer: { answerKey: '(c) Both of the above', schoolMethod: '(c) Both of the above' } },
          { id: 'q3', number: '3', isHard: false, text: 'List three businesses seen around you. Share details of what the business does, and how they run it.', answer: { answerKey: 'Sample: grocery store, tailoring shop, tuition centre.', schoolMethod: '(Sample) 1. A grocery store – sells daily household items, run by ordering stock from wholesalers and selling at a margin. 2. A tailoring shop – stitches clothes on order. 3. A tuition centre – teaches students for a monthly fee.' } },
          { id: 'q4', number: '4', isHard: false, text: 'Ravi made tea for his friends in the office and everyone liked it very much. Is Ravi an entrepreneur? (Yes/No)', answer: { answerKey: 'No', schoolMethod: 'No – Ravi has not started a business or sold his product; he only received praise, not identified/served a market need commercially.' } },
          { id: 'q5', number: '5', isHard: false, text: 'Savita notices tired, hungry students and sells them Neembu Pani and samosas for money. Is Savita an entrepreneur? (Yes/No)', answer: { answerKey: 'Yes', schoolMethod: 'Yes – she identified a customer need and started selling a product to earn money, which is an entrepreneurial activity.' } },
          { id: 'q6', number: '6', isHard: false, text: "Rahul starts his own 'hotel for dogs' where owners pay him to take care of their dogs. Is Rahul an entrepreneur? (Yes/No)", answer: { answerKey: 'Yes', schoolMethod: 'Yes – he identified an opportunity (pet care while owners travel) and started a company to earn money from it.' } },
          { id: 'q7', number: '7', isHard: false, text: "Monica takes care of a neighbour's baby in the evening and is given chocolates in return. Is Monica an entrepreneur? (Yes/No)", answer: { answerKey: 'No', schoolMethod: 'No – Monica is helping out of goodwill and receiving a gift, not running a business for regular monetary profit.' } },
        ]
      },
      {
        id: 's2', title: 'Session 2: Role of Entrepreneurship',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Gulab collected money, helped village women get material and sell their paintings/handicrafts in big cities. How is Gulab helping society as an entrepreneur?', answer: { answerKey: 'Creates employment/income for women, promotes handicrafts, connects rural producers to urban markets.', schoolMethod: 'Gulab is creating employment and income for village women, promoting local handicrafts, connecting rural producers to urban markets, and improving the economic condition of her society.' } },
          { id: 'q2', number: '2', isHard: false, text: 'Give examples of three entrepreneurs you know who live around you. Write how they are helping your city.', answer: { answerKey: 'Sample: dairy owner, factory owner, shopkeeper.', schoolMethod: '(Sample) A local dairy owner supplies fresh milk and employs helpers; a small factory owner provides jobs to workers; a shopkeeper offers daily necessities, saving people time and supporting the local economy.' } },
        ]
      },
      {
        id: 's3', title: 'Session 3: Qualities of a Successful Entrepreneur',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Anil started a special travel service for senior citizens, something no one had thought of before. Identify his quality.', answer: { answerKey: 'Innovativeness/creativity.', schoolMethod: 'Anil shows the quality of innovativeness/creativity – he thought of a new, original idea that no one else had attempted before.' } },
          { id: 'q2', number: '2', isHard: false, text: 'Rakesh opened a secure playground for children after noticing his friends felt unsafe playing outdoors. Identify his quality.', answer: { answerKey: 'Opportunity-seeking and social responsibility.', schoolMethod: 'Rakesh shows the quality of opportunity-seeking and social responsibility – he noticed a problem (lack of safety) and took initiative to solve it for the community.' } },
          { id: 'q3', number: '3', isHard: false, text: 'Radhika was stopped from running her food stall by the police but did not give up and started a Tiffin service instead. Identify her quality.', answer: { answerKey: 'Perseverance/risk-taking.', schoolMethod: 'Radhika shows the quality of perseverance/risk-taking – she did not give up after facing a setback and found an alternative way to continue her business.' } },
          { id: 'q4', number: '4', isHard: false, text: 'Do you think you have the qualities of an entrepreneur in you? If yes, give examples when you have shown these qualities.', answer: { answerKey: 'Self-reflective sample answer showing initiative/risk-taking.', schoolMethod: '(Sample, self-reflective answer) Yes, I once organised a small class fundraiser by selling handmade cards, showing initiative, planning and risk-taking qualities of an entrepreneur.' } },
          { id: 'q5', number: '5', isHard: false, text: 'Read the story of Sushma, the Toy Maker, and fill in the boxes mentioning the various qualities she possessed as an entrepreneur.', answer: { answerKey: 'Creativity, hard work, risk-taking, self-confidence, problem-solving.', schoolMethod: 'Qualities shown by Sushma as an entrepreneur likely include: creativity/innovation (designing new toys), hard work, risk-taking, self-confidence, and problem-solving ability in running her toy-making business.' } },
        ]
      },
      {
        id: 's4', title: 'Session 4: Distinguishing Characteristics of Entrepreneurship and Wage Employment',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Rahul starts a shop to sell Chaat and special Paani Puri. He is an ______.', answer: { answerKey: 'Entrepreneur', schoolMethod: 'Entrepreneur' } },
          { id: 'q2', number: '2', isHard: false, text: 'Shahid becomes the manager of a dealership selling food products. He is an ______.', answer: { answerKey: 'Employee', schoolMethod: 'Employee' } },
          { id: 'q3', number: '3', isHard: false, text: 'Ritu leaves her company and starts catering food for marriage programmes. She is an ______.', answer: { answerKey: 'Entrepreneur', schoolMethod: 'Entrepreneur' } },
          { id: 'q4', number: '4', isHard: false, text: 'List any four characteristics of entrepreneurship.', answer: { answerKey: 'Risk-taking, innovation, self-employment, profit uncertainty.', schoolMethod: '• Risk-taking\n• Innovation and creativity\n• Self-employment/independence\n• Profit uncertainty (income is not fixed)' } },
          { id: 'q5', number: '5', isHard: false, text: 'List any two characteristics of wage employment.', answer: { answerKey: 'Fixed salary, works under employer supervision.', schoolMethod: "• Fixed, regular salary/wages\n• Works under an employer's instructions and supervision" } },
          { id: 'q6', number: '6', isHard: false, text: 'Name any one factor that is common to both entrepreneurship and wage employment on contract basis.', answer: { answerKey: 'Both require hard work/skill; contract wage work also has uncertain income.', schoolMethod: 'Both require hard work and skill to earn an income; a contract-based wage employee, like an entrepreneur, also has uncertain/time-bound income depending on the contract.' } },
        ]
      },
      {
        id: 's5', title: 'Session 5: Types of Business Activities',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Arun bakery, which makes and sells bread to people. State the type of business.', answer: { answerKey: 'Manufacturing/Product-based business', schoolMethod: 'Manufacturing/Product-based business' } },
          { id: 'q2', number: '2', isHard: false, text: "Ram's repair shop, which repairs motorcycles. State the type of business.", answer: { answerKey: 'Service-based business', schoolMethod: 'Service-based business' } },
          { id: 'q3', number: '3', isHard: false, text: "Hari's hair-salon, where he cuts hair for women and men. State the type of business.", answer: { answerKey: 'Service-based business', schoolMethod: 'Service-based business' } },
          { id: 'q4', number: '4', isHard: false, text: 'What are the 3 types of business activities? Explain with examples.', answer: { answerKey: 'Manufacturing, Trading, Service — with examples.', schoolMethod: '• Manufacturing – making goods, e.g. a bakery making bread\n• Trading – buying and selling goods, e.g. a grocery store\n• Service – providing a service, e.g. a repair shop or salon' } },
        ]
      },
      {
        id: 's6', title: 'Session 6: Product, Service and Hybrid Businesses',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Ice-cream seller — Write P (Product), S (Service), or H (Hybrid).', answer: { answerKey: 'P (Product)', schoolMethod: 'P (Product)' } },
          { id: 'q2', number: '2', isHard: false, text: 'Restaurant/Cafeteria Owner — Write P (Product), S (Service), or H (Hybrid).', answer: { answerKey: 'H (Hybrid)', schoolMethod: 'H (Hybrid – sells food product along with dine-in service)' } },
          { id: 'q3', number: '3', isHard: false, text: 'Car-driving School owner — Write P (Product), S (Service), or H (Hybrid).', answer: { answerKey: 'S (Service)', schoolMethod: 'S (Service)' } },
          { id: 'q4', number: '4', isHard: false, text: 'What are the key differences between product- and service-based businesses?', answer: { answerKey: 'Product = tangible/storable goods; Service = intangible, consumed as delivered.', schoolMethod: 'A product-based business sells physical/tangible goods (e.g. bread, clothes) that can be stored, while a service-based business offers intangible help/work (e.g. repair, teaching) that is consumed as it is delivered.' } },
          { id: 'q5', number: '5', isHard: false, text: 'If you had a choice to start a business of your own, which business will you start, and why?', answer: { answerKey: 'Self-reflective sample answer.', schoolMethod: '(Sample, self-reflective answer) I would start a stationery shop (product-based) because students in my area need affordable school supplies nearby, and I enjoy organising and selling items.' } },
          { id: 'q6', number: '6', isHard: false, text: 'What is the meaning of manufacturing and trading based business?', answer: { answerKey: 'Manufacturing makes goods from raw materials; trading resells finished goods unchanged.', schoolMethod: 'A manufacturing business makes goods from raw materials (e.g. a bakery making bread), while a trading business buys finished goods and resells them to customers without changing them (e.g. a grocery store).' } },
        ]
      },
      {
        id: 's7', title: 'Session 7: Entrepreneurship Development Process',
        questions: [
          {
            id: 'q1', number: '1', isHard: false, text: 'Match the Columns: Business idea, Get money, Customer needs, Attract customers.',
            answer: {
              answerKey: '1-B, 2-A, 3-D, 4-C',
              schoolMethod: '1. Business idea → B. Arun and Shyam are thinking about selling tea in front of their school.\n2. Get money → A. Arun goes to the bank to get a loan for the shop.\n3. Customer needs → D. Shyam takes his tea samples to customers to understand their taste preferences.\n4. Attract customers → C. Arun and Shyam decide to sell tea along with free biscuits.'
            }
          },
          { id: 'q2', number: '2', isHard: false, text: 'My customers are not buying my food product because they do not like the flavour of it. What step of the business should I follow next?', answer: { answerKey: "Go back to 'Understanding Customer Needs' and revise the product.", schoolMethod: "I should go back to the step of 'Understanding Customer Needs' – collect customer feedback, improve or change the flavour based on their preference, and then offer the revised product again." } },
          { id: 'q3', number: '3', isHard: false, text: 'Write the four steps of entrepreneurship development. Give one example.', answer: { answerKey: 'Identify idea, arrange money, understand customer needs, attract/retain customers.', schoolMethod: '• Identify a business idea – e.g. selling tea near a school\n• Arrange money/resources – e.g. taking a bank loan\n• Understand customer needs – e.g. taking samples to customers\n• Attract and retain customers – e.g. offering free biscuits with tea' } },
        ]
      },
    ]
  },
  {
    id: 'ch05', number: 5,
    title: 'Green Skills',
    slug:  'green-skills',
    code:  '17974ch05',
    exercises: [
      {
        id: 's1', title: 'Session 1: Society and Environment',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What are some environmental changes caused due to modern methods of agriculture?', parts: ['(a) Chemical pollution due to fertilisers', '(b) Improvement in the environment', '(c) Lower air pollution due to crops', '(d) Decrease in forest areas'], answer: { answerKey: '(a) and (d)', schoolMethod: '(a) Chemical pollution due to fertilisers, and (d) Decrease in forest areas' } },
          { id: 'q2', number: '2', isHard: false, text: 'How can we conserve our health and environment? (Choose all correct options)', parts: ['(a) Grow organic crops', '(b) Use natural fertilisers', '(c) Manage waste water', '(d) Use more air conditioning'], answer: { answerKey: '(a), (b), (c)', schoolMethod: '(a) Grow organic crops, (b) Use natural fertilisers, (c) Manage waste water' } },
          { id: 'q3', number: '3', isHard: false, text: 'A steel factory burns firewood and charcoal for heating and melting steel. What are the possible effects on the environment? (Choose all correct options)', parts: ['(a) Increase in global temperature', '(b) Decrease in global temperature', '(c) Increase in air pollution', '(d) Decrease in air pollution'], answer: { answerKey: '(a) and (c)', schoolMethod: '(a) Increase in global temperature, (c) Increase in air pollution' } },
          { id: 'q4', number: '4', isHard: false, text: 'What are the five sources of energy available to us? Give two examples of each source.', answer: { answerKey: 'Solar energy (nuclear fusion in the Sun); gravity generated by the Earth and Moon; nuclear fission; energy in the interior of the Earth; energy stored in chemical bonds — give two examples of each.', schoolMethod: 'The textbook lists five fundamental sources: (1) nuclear fusion in the Sun/solar energy — e.g. sunlight and solar heating; (2) gravity generated by the Earth and Moon — e.g. tides and tidal power; (3) nuclear fission reactions — e.g. uranium-fission power generation; (4) energy in the interior of the Earth — e.g. geothermal heat and geothermal power; (5) energy stored in chemical bonds — e.g. food and fossil fuels.' } },
          { id: 'q5', number: '5', isHard: false, text: 'What are the sources of pollution?', answer: { answerKey: 'Vehicle/factory smoke, sewage/industrial waste, pesticides/fertilisers, loudspeakers/traffic.', schoolMethod: '• Vehicle and factory smoke (air pollution)\n• Untreated sewage/industrial waste (water pollution)\n• Pesticides and chemical fertilisers (soil pollution)\n• Loudspeakers/traffic (noise pollution)' } },
          { id: 'q6', number: '6', isHard: false, text: 'Classify Air, iron, sand, petroleum, wind, clay, fish, forest, gold, pearls under Inexhaustible, Renewable and Non-renewable resources.', answer: { answerKey: 'Inexhaustible: Air, wind. Renewable: fish, forest, pearls. Non-renewable: iron, sand, petroleum, clay, gold.', schoolMethod: '• Inexhaustible: Air, wind\n• Renewable: fish, forest, pearls\n• Non-renewable: iron, sand, petroleum, clay and gold. The textbook explicitly classifies mineral resources such as iron, clay and sand as non-renewable.' } },
        ]
      },
      {
        id: 's2', title: 'Session 2: Conserving Natural Resources',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'What does conservation of energy mean? (Choose all options that apply)', parts: ['(a) Saving energy', '(b) Producing energy', '(c) Using energy efficiently', '(d) Creating energy sources'], answer: { answerKey: '(a) and (c)', schoolMethod: '(a) Saving energy, (c) Using energy efficiently' } },
          { id: 'q2', number: '2', isHard: false, text: 'Which of the following are non-renewable resources? (Choose all options that apply)', parts: ['(a) Coal', '(b) Diesel', '(c) Sun', '(d) Water'], answer: { answerKey: '(a) and (b)', schoolMethod: '(a) Coal, (b) Diesel' } },
          { id: 'q3', number: '3', isHard: false, text: 'Which of the following is an example of renewable resources?', parts: ['(a) Coal', '(b) Solar Energy', '(c) CNG', '(d) Petroleum'], answer: { answerKey: '(b) Solar Energy', schoolMethod: '(b) Solar Energy' } },
          { id: 'q4', number: '4', isHard: false, text: 'Write any three actions which you can take to conserve energy.', answer: { answerKey: 'Switch off unused devices, use LED bulbs, use natural light.', schoolMethod: '• Switch off lights and fans when not in use\n• Use energy-efficient LED bulbs\n• Use natural light and ventilation during the day instead of electric lights/fans' } },
          { id: 'q5', number: '5', isHard: false, text: 'Describe any three methods of water conservation.', answer: { answerKey: 'Rainwater harvesting, fixing leaks, reusing greywater.', schoolMethod: '• Rainwater harvesting\n• Repairing leaking taps and pipes promptly\n• Reusing wastewater (grey water) for gardening/cleaning' } },
          { id: 'q6', number: '6', isHard: false, text: 'What is the purpose of soil conservation?', answer: { answerKey: 'Protects topsoil from erosion, maintains soil quality, prevents desertification.', schoolMethod: 'Soil conservation protects fertile topsoil from erosion, maintains soil quality for farming, prevents desertification, and ensures long-term availability of land for agriculture.' } },
          { id: 'q7', number: '7', isHard: false, text: 'State any three ways by which we can save energy.', answer: { answerKey: 'Switch off appliances, use public transport, use solar heaters.', schoolMethod: '• Switch off electrical appliances when not needed\n• Use public transport or carpool instead of individual vehicles\n• Use solar water heaters and energy-efficient appliances' } },
        ]
      },
      {
        id: 's3', title: 'Session 3: Sustainable Development and Green Economy',
        questions: [
          { id: 'q1', number: '1', isHard: false, text: 'Which of the following options describe a green economy correctly? A green economy ______.', parts: ['(a) uses less resources', '(b) uses more resources', '(c) wastes less items', '(d) wastes more items'], answer: { answerKey: '(a) and (c)', schoolMethod: '(a) uses less resources, and (c) wastes less items' } },
          { id: 'q2', number: '2', isHard: false, text: 'What are green skills?', answer: { answerKey: 'Knowledge/values/abilities for a resource-efficient, sustainable society.', schoolMethod: 'Green skills are the knowledge, values and abilities needed to live in, develop and support a resource-efficient and sustainable society that reduces environmental damage and conserves natural resources.' } },
          { id: 'q3', number: '3', isHard: false, text: 'Give two examples of green skills that you can start learning from now.', answer: { answerKey: 'Waste segregation/recycling; water/energy conservation methods.', schoolMethod: '• Practising waste segregation and recycling at home/school\n• Learning water and energy conservation methods, such as rainwater harvesting or using solar devices' } },
        ]
      },
    ]
  },
];
