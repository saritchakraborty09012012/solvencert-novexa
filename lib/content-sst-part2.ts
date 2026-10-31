// SST: Understanding Society — India and Beyond (Grade 9, Part 2)
// Full textbook question and activity coverage: chapter-end exercises, Big Questions, and in-text prompts.
// Model answers are written in a clear, examination-ready style; structure follows content-sst.ts (Part 1).

export interface SstQuestion {
  id: string;
  number: string;
  text: string;
  parts?: string[];
  isHard: boolean;
  answer: { answerKey: string; schoolMethod: string; };
}
export interface SstSection { id: string; title: string; questions: SstQuestion[]; }
export interface SstChapter {
  id: string; number: number; title: string; slug: string; code: string;
  description: string; exercises: SstSection[];
}

export const SST_CHAPTERS: SstChapter[] = [
  {
    "id": "ch01",
    "number": 1,
    "title": "Oceans and Life",
    "slug": "oceans-and-life",
    "code": "0908ch01",
    "description": "Explores the oceans, their physical features, movements, resources, maritime zones and the importance of international rules for safe and sustainable use.",
    "exercises": [
      {
        "id": "sec1",
        "title": "QUESTIONS AND ACTIVITIES",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "How do different features of the ocean floor affect human activities such as fishing, transport, and underwater exploration?",
            "answer": {
              "answerKey": "Continental shelves support fishing and ports, while slopes, ridges, plains and trenches create varied habitats and influence navigation, resource extraction and underwater exploration.",
              "schoolMethod": "The ocean floor has several physical features that influence human activities:\n1. Continental shelves are shallow, sunlit areas rich in nutrients and marine life. They support fishing and often contain petroleum and natural gas deposits.\n2. Continental slopes descend steeply into deeper oceans and make seabed exploration and construction more difficult.\n3. Deep-sea plains provide relatively level areas, while ocean ridges and seamounts influence currents and create habitats for marine organisms.\n4. Ocean trenches are extremely deep and difficult to explore because of immense water pressure.\n5. Underwater cables and pipelines must be planned according to the relief of the seabed. Thus, ocean-floor features affect fishing grounds, navigation, resource extraction and scientific exploration."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "How do waves, tides, and ocean currents influence climate, marine life, and human activities around the world?",
            "answer": {
              "answerKey": "1. Waves mix surface water, distribute oxygen and nutrients, shape coastlines and influence coastal activities.",
              "schoolMethod": "1. Waves mix surface water, distribute oxygen and nutrients, shape coastlines and influence coastal activities. Very high waves and storm surges can damage settlements and ports.\n2. Tides cause the regular rise and fall of sea level. They support tidal ecosystems, help flush estuaries and can be used to generate tidal energy. They also affect the timing of navigation and fishing.\n3. Ocean currents transport warm and cold water. Warm currents can make nearby coastal regions milder, while cold currents may cool them and encourage fog.\n4. Currents redistribute heat around the planet and influence rainfall, weather and climate.\n5. Currents also transport nutrients and plankton, affecting marine food chains and fishing grounds. Ships use favourable currents where possible, while fishers and coastal communities plan activities around sea conditions."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Describe the importance of marine resources.",
            "answer": {
              "answerKey": "Marine resources provide food and livelihoods, support trade and tourism, supply minerals and energy, and help maintain marine biodiversity.",
              "schoolMethod": "Marine resources are important in several ways:\n1. Food: Fish, prawns, crabs, seaweed and other organisms provide nutrition and support food security.\n2. Livelihoods: Fishing, aquaculture, shipping, tourism and port activities employ millions of people.\n3. Minerals and energy: Oceans contain salt, sand, minerals, petroleum and natural gas; offshore wind, tidal and wave energy also offer renewable possibilities.\n4. Trade and transport: Sea routes carry a large share of international cargo and connect countries.\n5. Medicines and research: Marine organisms provide substances useful in medical research and biotechnology.\n6. Climate regulation: Oceans absorb and store heat and carbon dioxide and help regulate the global climate.\nThese resources must be used sustainably to prevent pollution, habitat destruction and overfishing."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Draw a poster that encourages people to protect marine resources. Include a slogan (like Save Our Seas or Fish for the Future) and explain your message in 2–3 sentences.",
            "answer": {
              "answerKey": "**Poster text:**\n\n**SAVE OUR SEAS — EVERY DROP OF ACTION COUNTS!**\n\nSay NO to plastic pollution • Choose sustainable seafood • Protect coral reefs • Keep beaches clean\n\n**Message:** Oceans provide food, livelihoods, biodiversity and climate regulation, but pollution and overfishing threaten them.",
              "schoolMethod": "**Poster text:**\n\n**SAVE OUR SEAS — EVERY DROP OF ACTION COUNTS!**\n\nSay NO to plastic pollution • Choose sustainable seafood • Protect coral reefs • Keep beaches clean\n\n**Message:** Oceans provide food, livelihoods, biodiversity and climate regulation, but pollution and overfishing threaten them. By reducing single-use plastic, disposing of waste responsibly and supporting sustainable fishing, each of us can help keep marine ecosystems healthy for future generations."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "Using a map of India, mark at least five coastal states that might need tsunami warnings.",
            "answer": {
              "answerKey": "On an outline map of India, mark and label these coastal states: **Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Odisha and West Bengal.** Any five or more are acceptable.",
              "schoolMethod": "On an outline map of India, mark and label these coastal states: **Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Odisha and West Bengal.** Any five or more are acceptable. The Andaman and Nicobar Islands should also be marked as a Union Territory. All coastal regions may require tsunami preparedness; the east coast and island regions are particularly exposed to tsunami hazards arising from seismic activity in the Indian Ocean and adjoining tectonic zones."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "Work in a group and act out what would happen when a cyclone warning is issued. Highlight what role different people, like scientists, officials, and coastal villagers, would play.",
            "answer": {
              "answerKey": "Scientists detect and forecast hazards; authorities send alerts and organise shelters or evacuation; residents follow warnings, move to safe places and help vulnerable people.",
              "schoolMethod": "**Model response — cyclone warning and community action:**\n1. Scientists at the India Meteorological Department monitor satellite images, sea conditions and wind patterns, forecast the cyclone's path and issue warnings.\n2. Disaster-management authorities and district officials communicate alerts through television, radio, mobile messages, sirens and local volunteers. They identify vulnerable areas and arrange evacuation, shelters, food, drinking water and medical help.\n3. Police, rescue teams and local administration guide people to safe shelters, keep roads clear and assist children, older persons and persons with disabilities.\n4. Coastal villagers secure boats, switch off electricity where advised, carry essential medicines and documents, and move to designated shelters. They do not go to the shore to watch the storm.\n5. After the cyclone, officials assess damage, restore essential services and organise relief, while residents follow safety instructions and report urgent needs.\n**Conclusion:** Timely scientific warnings, coordinated administration and public cooperation reduce loss of life and property."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "Suppose a foreign ship is sailing through India’s territorial sea. What principle allows the ship to pass through these waters, subject to certain conditions?",
            "answer": {
              "answerKey": "The principle is **innocent passage** under the law of the sea.",
              "schoolMethod": "The principle is **innocent passage** under the law of the sea. A foreign ship may pass continuously and expeditiously through India's territorial sea, provided its passage is not prejudicial to India's peace, good order or security. It must obey applicable laws and must not engage in activities such as fishing, weapons exercises, spying or pollution."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "A country has an Exclusive Economic Zone (EEZ) extending up to 200 nautical miles from its baseline. What rights does the country have over the natural resources in this zone?",
            "answer": {
              "answerKey": "Within its EEZ, a coastal country has **sovereign rights** to explore, exploit, conserve and manage natural resources of the waters, seabed and subsoil.",
              "schoolMethod": "Within its EEZ, a coastal country has **sovereign rights** to explore, exploit, conserve and manage natural resources of the waters, seabed and subsoil. These include fish, other living resources, petroleum, natural gas and minerals. It may regulate activities such as fishing and offshore resource extraction and has jurisdiction over artificial islands, marine scientific research and protection of the marine environment. The EEZ is not the same as territorial waters: other countries retain freedoms such as navigation and overflight, subject to international law."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": true,
            "text": "Create a model of an ocean with ship routes, protected zones, and safety measures. Based on the model, explain how it follows maritime laws and protects the ocean.",
            "answer": {
              "answerKey": "**Model description:** Make a base showing the coastline, baseline, territorial sea, EEZ and high seas.",
              "schoolMethod": "**Model description:** Make a base showing the coastline, baseline, territorial sea, EEZ and high seas. Mark a clearly defined shipping lane, a port, a lighthouse, a marine protected area and a fishing zone. Add symbols for a no-dumping rule, speed limits near sensitive habitats, life-saving equipment, emergency communication and oil-spill response.\n\n**Explanation:** The marked shipping lane keeps vessels on a safe route and reduces collision risk. Ships must follow navigation and safety rules, maintain pollution-control systems and avoid discharging waste. Fishing is regulated to prevent overexploitation, while the protected area safeguards breeding grounds and biodiversity. The territorial sea and EEZ are labelled according to maritime law, and foreign vessels' lawful navigation rights are respected. The model therefore combines safe navigation, sustainable resource use and marine conservation."
            },
            "parts": [
              "Build a model showing the ocean and its main zones.",
              "Include ship routes, protected zones and safety measures.",
              "Explain how the model follows maritime laws and helps protect the ocean."
            ]
          }
        ]
      },
      {
        "id": "sec2",
        "title": "THE BIG QUESTIONS — Chapter overview (Textbook p. 1)",
        "questions": [
          {
            "id": "bq1",
            "number": "BQ1",
            "isHard": false,
            "text": "What is the importance of ocean relief?",
            "answer": {
              "answerKey": "Ocean relief shapes marine habitats, currents, navigation, fishing, resource extraction and underwater exploration.",
              "schoolMethod": "Ocean relief refers to the varied features of the ocean floor, such as continental shelves, slopes, abyssal plains, ridges, seamounts and trenches. These landforms create different habitats and influence the distribution of marine organisms and resources. Shallow continental shelves support rich fisheries and may contain oil and gas. Slopes, ridges and trenches affect seabed movement, currents and the difficulty of exploration. Knowledge of relief is essential for safe navigation, laying cables and pipelines, locating resources and protecting marine ecosystems."
            }
          },
          {
            "id": "bq2",
            "number": "BQ2",
            "isHard": false,
            "text": "How does ocean water movement impact life and the environment?",
            "answer": {
              "answerKey": "Waves shape coasts, tides affect coastal life and navigation, and currents redistribute heat and nutrients.",
              "schoolMethod": "Waves erode and deposit materials along coastlines, forming beaches, caves, arches and other landforms. Tides raise and lower sea levels, influencing fishing, harbour access and coastal habitats; tidal movements can also generate electricity. Ocean currents transport warm and cold water, redistribute heat, influence rainfall and coastal temperatures, and carry nutrients that support plankton and fish. Together, these movements shape marine ecosystems, climate, transport and coastal livelihoods."
            }
          },
          {
            "id": "bq3",
            "number": "BQ3",
            "isHard": false,
            "text": "Why are maritime zones important for a country?",
            "answer": {
              "answerKey": "Maritime zones define a country’s rights and responsibilities over coastal waters, resources, security and navigation.",
              "schoolMethod": "Maritime zones establish the extent of a coastal State’s authority under international law. In its territorial sea, a State exercises sovereignty subject to rules such as innocent passage. In the contiguous zone it may enforce specified customs, immigration, fiscal and sanitary laws. In its Exclusive Economic Zone (EEZ), it has sovereign rights to explore, exploit, conserve and manage natural resources, while other States retain specified freedoms such as navigation and overflight. Clear zones reduce disputes, support resource management, protect the marine environment and help regulate safe international movement."
            }
          },
          {
            "id": "bq4",
            "number": "BQ4",
            "isHard": false,
            "text": "How can we use ocean resources in a sustainable way?",
            "answer": {
              "answerKey": "Use marine resources within ecological limits through conservation, pollution control, responsible fishing and scientific management.",
              "schoolMethod": "Sustainable use means meeting present needs without damaging the ability of future generations to benefit from the oceans. Important measures include regulating fishing and preventing overfishing; protecting coral reefs, mangroves and breeding grounds; reducing plastics, sewage, oil and chemical pollution; using marine minerals and energy responsibly; following maritime law; supporting coastal communities and traditional knowledge; and monitoring ecosystems scientifically. The Blue Economy links economic growth and livelihoods with the long-term health of marine ecosystems."
            }
          },
          {
            "id": "bq5",
            "number": "BQ5",
            "isHard": false,
            "text": "How do early warning systems help protect people from tsunamis and cyclones?",
            "answer": {
              "answerKey": "They detect hazards, forecast their movement, send timely alerts and enable evacuation and preparedness.",
              "schoolMethod": "Early warning systems combine scientific monitoring, forecasting, communication and community preparedness. Seismic stations detect undersea earthquakes; ocean-bottom pressure recorders and tide gauges help confirm and track tsunami waves. Satellites, radar, ocean observations and weather models help forecast cyclones and storm surges. Warning centres transmit alerts to governments, emergency services and the public through mobile messages, radio, television, sirens and other channels. Training, evacuation routes, shelters and public awareness turn warnings into life-saving action."
            }
          }
        ]
      },
      {
        "id": "sec3",
        "title": "IN-TEXT QUESTIONS AND ACTIVITIES — Chapter 1 (Textbook pp. 3–18)",
        "questions": [
          {
            "id": "it1",
            "number": "p. 3",
            "isHard": true,
            "text": "Looking at Fig. 1.2, answer the following questions.",
            "answer": {
              "answerKey": "Ocean-floor features form through tectonic activity, volcanism, sedimentation and erosion; they create varied habitats and influence water movement.",
              "schoolMethod": "1. **How the features form:** Continental shelves and slopes are the submerged edges of continents. Mid-ocean ridges form where tectonic plates move apart and magma rises and cools. Trenches form at subduction zones where one plate sinks beneath another. Seamounts are commonly volcanic; wave action may flatten their summits to form guyots. Abyssal plains become smooth through the accumulation of fine sediments.\n2. **Deep and shallow areas:** Continental shelves are relatively shallow. Continental slopes descend to deeper water; abyssal plains are very deep and broad, while trenches are the deepest features. Ridges and seamounts rise above the surrounding seabed.\n3. **Effects:** Shelves receive sunlight and nutrients and support productive fisheries. Ridges, seamounts and trenches provide specialised habitats. Relief can redirect currents, influence mixing and affect the location of nutrients and marine organisms."
            },
            "parts": [
              "How do you think these oceanic features would have been formed?",
              "Which part of the ocean floor appears deep and shallow?",
              "How do you think these underwater features would have an effect on marine life and ocean movements?"
            ]
          },
          {
            "id": "it9",
            "number": "p. 4",
            "isHard": true,
            "text": "Observe Fig. 1.3 and Fig. 1.4. Identify a wave’s crest and trough, and describe the sequence of erosional landforms shown, including the original headland.",
            "answer": {
              "answerKey": "A crest is a wave’s highest point and a trough its lowest point; wave erosion can develop cracks, caves, arches, stacks and stumps from a headland.",
              "schoolMethod": "In Fig. 1.3, the **crest** is the highest part of a wave and the **trough** is the lowest part between two crests. In Fig. 1.4, waves repeatedly attack weaknesses in a rocky headland. Cracks may widen into sea caves; continued erosion can cut through a headland to form an arch. When the arch roof collapses, an isolated sea stack remains. Further erosion and weathering may reduce the stack to a low stump. A headland is a piece of land that projects out into the sea. Beaches are depositional landforms, not part of this erosional sequence."
            },
            "parts": [
              "What are the crests and troughs in a wave?",
              "How do wave actions create the erosional landforms shown in Fig. 1.4?",
              "What is the original headland?"
            ]
          },
          {
            "id": "it2",
            "number": "p. 5",
            "isHard": false,
            "text": "Find the names of some famous sea beaches in India and locate them on a map of India.",
            "answer": {
              "answerKey": "Examples include Marina Beach (Tamil Nadu), Puri Beach (Odisha), Kovalam (Kerala), Calangute (Goa), Juhu (Maharashtra) and Radhanagar Beach (Andaman and Nicobar Islands).",
              "schoolMethod": "On an outline map of India, mark and label a selection of well-known beaches. Suitable examples are: Marina Beach—Chennai, Tamil Nadu; Puri Beach—Odisha; Kovalam—Kerala; Calangute or Baga—Goa; Juhu—Mumbai, Maharashtra; Radhanagar Beach—Swaraj Dweep, Andaman and Nicobar Islands; and Digha—West Bengal. Add a title, north arrow and a simple legend. The list is illustrative; any correctly located Indian sea beach is acceptable."
            },
            "parts": [
              "Find names of famous sea beaches in India.",
              "Locate and label the selected beaches on a map of India."
            ]
          },
          {
            "id": "it3",
            "number": "p. 5",
            "isHard": false,
            "text": "Observe Fig. 1.5 and describe the change in water level during high and low tides.",
            "answer": {
              "answerKey": "At high tide, seawater rises and covers more of the shore; at low tide, the sea level falls and exposes more of the shore.",
              "schoolMethod": "The diagram shows tidal water bulging on opposite sides of the Earth. At high tide, the sea reaches a higher level and advances farther over the coast. At low tide, the water level falls and the shoreline retreats, exposing parts of the seabed. The regular change is mainly caused by the gravitational pull of the Moon and, to a lesser extent, the Sun, together with the Earth–Moon system’s motion."
            },
            "parts": [
              "Observe Fig. 1.5.",
              "Describe how the water level changes during high tide.",
              "Describe how the water level changes during low tide."
            ]
          },
          {
            "id": "it10",
            "number": "p. 7",
            "isHard": false,
            "text": "Observe Fig. 1.7. How do high and low tides influence fishing activities?",
            "answer": {
              "answerKey": "During high tide, many fish move closer to the shore in search of food and shelter, helping coastal fishing communities obtain a better catch.",
              "schoolMethod": "During high tide, rising water allows many fish to move closer to the shore in search of food and shelter. Fishers can use this movement and their knowledge of local tidal timings to plan fishing activities and may obtain a better catch. Tides also change the depth and accessibility of coastal waters, so fishers need to consider tidal conditions for safety. The figure’s main point is that high tides can bring fish nearer to the shore."
            },
            "parts": [
              "Observe Fig. 1.7.",
              "Explain how high tides influence fishing activities.",
              "Explain how low tides influence fishing activities."
            ]
          },
          {
            "id": "it4",
            "number": "p. 8",
            "isHard": false,
            "text": "Observe the map of warm and cold ocean currents. Do these currents affect the temperature of nearby coastal regions?",
            "answer": {
              "answerKey": "Yes. Warm currents generally raise nearby coastal temperatures, while cold currents generally lower them and may encourage fog.",
              "schoolMethod": "Warm currents transport water from lower latitudes and can make nearby coastal areas milder and warmer. The Gulf Stream, for example, helps keep parts of north-western Europe relatively mild. Cold currents carry water from higher latitudes and cool nearby coasts; the Labrador Current contributes to colder conditions and sea ice along parts of eastern Canada. Currents also influence humidity, fog, rainfall and marine productivity, although local climate is affected by several factors."
            },
            "parts": [
              "Observe the map of warm and cold ocean currents.",
              "Explain whether these currents affect the temperature of nearby coastal regions."
            ]
          },
          {
            "id": "it5",
            "number": "p. 8",
            "isHard": false,
            "text": "Observe Fig. 1.9 and note the ocean currents along the coastline of India. What is the nature of these currents?",
            "answer": {
              "answerKey": "Currents in the northern Indian Ocean are strongly influenced by monsoon winds and reverse direction seasonally.",
              "schoolMethod": "The surface-current pattern around India changes with the monsoon. During the south-west monsoon, strong winds drive currents in a different direction from those during the north-east monsoon; therefore, the circulation in the Arabian Sea and Bay of Bengal shows a seasonal reversal. Currents also vary with the coastline, temperature, salinity and the wider Indian Ocean circulation. For the map activity, trace the arrows shown in Fig. 1.9 and label the currents as warm or cold only where the map or reliable atlas identifies them."
            },
            "parts": [
              "Observe Fig. 1.9.",
              "Identify the ocean currents shown along the coastline of India.",
              "Describe the nature or direction of these currents."
            ]
          },
          {
            "id": "it6",
            "number": "p. 9–10",
            "isHard": false,
            "text": "The people of Simeulue were partly protected during the 2004 tsunami by local folklore. Find out whether similar traditional stories or practices related to natural disasters exist in your culture, and explain how traditional knowledge can help keep communities safe.",
            "answer": {
              "answerKey": "Traditional stories can preserve warnings such as unusual sea withdrawal, strong ground shaking or strange coastal behaviour and encourage people to move to higher ground.",
              "schoolMethod": "Model response: In many coastal communities, elders pass down stories about unusual natural signs and the need to move away from the shore when the sea suddenly withdraws or the ground shakes strongly. Such knowledge can alert people before official warnings reach them. It should complement, not replace, scientific alerts and evacuation instructions. Families should learn safe routes, practise evacuation and share reliable information with neighbours. Replace this example with a story or practice actually reported by elders in your community."
            },
            "parts": [
              "Find out whether communities in India or elsewhere have traditions or stories that warn people about tsunamis or other coastal hazards.",
              "Describe the tradition and explain how it can help people respond to danger."
            ]
          },
          {
            "id": "it7",
            "number": "p. 14",
            "isHard": false,
            "text": "If you receive a tsunami or cyclone alert on your phone, what five steps should your family take to stay safe?",
            "answer": {
              "answerKey": "Follow official alerts, move to a safe place, take essential supplies, keep communication open and return only after the all-clear.",
              "schoolMethod": "1. Read the alert carefully and follow instructions from the district administration and disaster-management authorities.\n2. Move immediately to a designated cyclone shelter or to higher ground and inland areas for a tsunami; do not go to the beach to watch the waves.\n3. Carry an emergency kit containing drinking water, essential medicines, a torch, a charged phone, basic food and important documents in a waterproof pouch.\n4. Help children, older persons and people with disabilities, and keep family members informed through a planned contact method.\n5. Stay away from floodwater, damaged wires and the coast; return home only after authorities issue an official all-clear."
            },
            "parts": [
              "State five practical steps your family should take after receiving a tsunami or cyclone alert on a phone."
            ]
          },
          {
            "id": "it11",
            "number": "p. 16",
            "isHard": false,
            "text": "Observe Fig. 1.20 and note the extent of India’s territorial sea in nautical miles.",
            "answer": {
              "answerKey": "India’s territorial sea extends up to 12 nautical miles from its baseline.",
              "schoolMethod": "The territorial sea extends **12 nautical miles** from the legally defined baseline. Within this zone, India exercises sovereignty over the water, seabed, subsoil and airspace, subject to international law, including the right of innocent passage for foreign ships. Do not confuse it with the contiguous zone, which extends up to 24 nautical miles from the baseline, or the Exclusive Economic Zone, which extends up to 200 nautical miles."
            },
            "parts": [
              "Observe Fig. 1.20.",
              "Identify the extent of India’s territorial sea shown in nautical miles."
            ]
          },
          {
            "id": "it8",
            "number": "p. 18",
            "isHard": false,
            "text": "Find examples of countries that have disagreements over territorial sea waters or maritime areas.",
            "answer": {
              "answerKey": "Examples include overlapping maritime claims involving China and the Philippines in the South China Sea and Greece and Türkiye in the Aegean region.",
              "schoolMethod": "Examples commonly discussed in geography are the overlapping maritime claims involving China and the Philippines in parts of the South China Sea, and disagreements between Greece and Türkiye concerning parts of the Aegean and eastern Mediterranean. Such disputes may concern islands, maritime boundaries, fishing grounds, seabed resources or navigation. Countries use diplomacy, bilateral agreements, arbitration and international law, including the United Nations Convention on the Law of the Sea (UNCLOS), to resolve disputes peacefully. The exact status of a dispute should be checked from a current, reliable source before a class presentation."
            },
            "parts": [
              "Give examples of countries that have disagreements over territorial sea waters or other maritime areas.",
              "Briefly identify the disputed area or issue and explain why maritime boundaries matter."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ch02",
    "number": 2,
    "title": "Life on Earth",
    "slug": "life-on-earth",
    "code": "0908ch02",
    "description": "Explains terrestrial and aquatic biomes, the relationship between geography and biodiversity, and the role of communities in forest conservation and ecological balance.",
    "exercises": [
      {
        "id": "sec1",
        "title": "QUESTIONS AND ACTIVITIES",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Why does India have diverse biomes? How does the local geography connect to the diversity?",
            "answer": {
              "answerKey": "India has diverse biomes because it has great variations in relief, altitude, temperature, rainfall and soil.",
              "schoolMethod": "India has diverse biomes because it has great variations in relief, altitude, temperature, rainfall and soil. The Himalayas have cold alpine and temperate ecosystems; the Northern Plains support grasslands and fertile agricultural landscapes; the Thar has arid desert vegetation; the Western Ghats and North-East receive heavy rainfall and support tropical forests; and the coasts, islands, rivers and wetlands contain rich aquatic ecosystems. Local factors such as slope, aspect, drainage, distance from the sea and monsoon rainfall determine which plants and animals can survive in a region. Thus, India's varied geography produces a wide range of habitats and biodiversity."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Make a list of economically valuable native plants in your region and comment on their abundance.",
            "answer": {
              "answerKey": "Examples for Jharkhand include sal, mahua, kendu/tendu, bamboo, neem, amla and palash; verify their abundance through local observation.",
              "schoolMethod": "**Illustrative answer for Jharkhand (adapt the list to the student's own district):**\n1. **Sal:** an important timber tree; occurs in forested tracts and supports forest-based livelihoods.\n2. **Mahua:** its flowers and seeds are used for food and other products; it is important in many forest communities.\n3. **Kendu/tendu:** its leaves are collected as a forest product and provide income to gatherers.\n4. **Bamboo:** used for construction, baskets and crafts; its local availability varies.\n5. **Palash:** occurs in dry deciduous areas; its flowers have cultural and traditional uses.\n6. **Neem and amla:** valued for shade, fruit and traditional uses; they may be found in village landscapes and cultivated areas.\nThese plants provide food, materials and income. To comment on abundance, observe the local area or consult a reliable Forest Department source; do not assume that every species is equally common in every district."
            },
            "parts": [
              "List economically valuable native plants found in your region.",
              "Comment on their abundance, using local observation or reliable sources."
            ]
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Prepare a map of your state or Union Territory showing national parks and sanctuaries.",
            "answer": {
              "answerKey": "Mark the national park and wildlife sanctuaries in your own State/UT, label each accurately and add a legend.",
              "schoolMethod": "**Model for Jharkhand (adapt if your State/UT is different):** On an outline map of Jharkhand, mark and label **Betla National Park/Palamau Tiger Reserve**, **Dalma Wildlife Sanctuary**, **Hazaribagh Wildlife Sanctuary**, **Koderma Wildlife Sanctuary**, **Lawalong Wildlife Sanctuary**, **Palkot Wildlife Sanctuary**, **Topchanchi Wildlife Sanctuary** and **Mahuadanr Wolf Sanctuary**. Use separate symbols for the national park/tiger reserve and wildlife sanctuaries, add a title, north arrow and legend, and place each label in the correct district or region. Verify boundaries and current notified names using the latest Jharkhand Forest Department map. Students from another State/UT should use the equivalent official map for their own region."
            },
            "parts": [
              "Prepare a map of your State or Union Territory.",
              "Mark and label its national parks and wildlife sanctuaries."
            ]
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Study the impact of forest fires on people dependent on forests. Try to include the causes, losses, and preventive measures.",
            "answer": {
              "answerKey": "Forest fires harm forest-dependent communities in social, economic and environmental ways.",
              "schoolMethod": "Forest fires harm forest-dependent communities in social, economic and environmental ways.\n**Causes:** prolonged heat and dry weather; lightning; unattended campfires; burning of agricultural waste; deliberate burning; and careless disposal of cigarettes or matches.\n**Losses:** fires destroy timber, bamboo, fodder, medicinal plants and non-timber forest produce, reducing household income. They kill wildlife, damage soil, increase erosion and pollute air with smoke, causing respiratory problems. They may also destroy homes, livestock and community infrastructure.\n**Prevention:** create and maintain fire lines; remove excess dry litter where appropriate; prohibit unsafe burning; spread awareness; monitor forests during high-risk months; and involve trained local communities.\n**Mitigation:** establish early-warning systems, local fire-response teams, safe water points and evacuation plans. After a fire, restore native vegetation and support affected families. Community participation is essential."
            },
            "parts": [
              "Identify the main causes of forest fires.",
              "Explain the losses suffered by people dependent on forests.",
              "Suggest preventive and mitigation measures."
            ]
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "Why are forests often called the ‘lungs of the Earth’?",
            "answer": {
              "answerKey": "Forests are called the 'lungs of the Earth' because green plants absorb carbon dioxide during photosynthesis and release oxygen.",
              "schoolMethod": "Forests are called the 'lungs of the Earth' because green plants absorb carbon dioxide during photosynthesis and release oxygen. Forests also store large quantities of carbon in trees and soils, regulate the water cycle, influence rainfall and temperature, prevent soil erosion and provide habitats for biodiversity. The expression is a useful comparison, although oceans and other ecosystems also contribute significantly to global oxygen and carbon cycles."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "If large forest areas continue to be destroyed, what do you think would be its long-term effect on the global climate?",
            "answer": {
              "answerKey": "Continued deforestation would worsen climate change because fewer trees would absorb carbon dioxide, while burning and decomposition of cleared vegetation would release stored carbon.",
              "schoolMethod": "Continued deforestation would worsen climate change because fewer trees would absorb carbon dioxide, while burning and decomposition of cleared vegetation would release stored carbon. Reduced forest cover can disturb evapotranspiration and rainfall patterns, increase local temperatures, intensify soil erosion and floods, and reduce the resilience of ecosystems to droughts. Biodiversity loss would also weaken ecosystem services. These effects can create a cycle in which climate stress further damages forests."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "Discuss some traditional forest conservation methods with your grandparents or an elderly person.",
            "answer": {
              "answerKey": "Traditional conservation includes sacred groves, community rules, protection of sacred species, seasonal restrictions and sustainable collection of forest produce.",
              "schoolMethod": "Traditional Indian communities have conserved forests through practices such as **sacred groves**, where cutting trees and hunting are restricted due to religious or cultural beliefs; protection of particular trees and species; community rules for collecting fuelwood, fruits and fodder; seasonal restrictions on harvesting; rotational use of forest resources; and protection of water sources. Examples include sacred groves in the North-East and Western Ghats, and community-based protection traditions in Rajasthan. Such customs combine cultural values with practical rules for sustainable use."
            },
            "parts": [
              "Discuss traditional forest-conservation methods with your grandparents or an elderly person.",
              "Record the practice, the community context and how it helps conserve forests."
            ]
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "How do forest dwellers contribute to the protection and conservation of forests?",
            "answer": {
              "answerKey": "Forest-dwelling communities possess detailed knowledge of local plants, animals, seasons and water sources.",
              "schoolMethod": "Forest-dwelling communities possess detailed knowledge of local plants, animals, seasons and water sources. They help conserve forests by:\n1. Protecting sacred groves and culturally important species.\n2. Using forest produce such as fruits, leaves, honey and medicinal plants sustainably.\n3. Preventing and reporting illegal felling, poaching and forest fires.\n4. Participating in community forest management, restoration and plantation of native species.\n5. Sharing traditional ecological knowledge and helping monitor wildlife and habitat changes.\nTheir rights, livelihoods and participation must be respected because conservation is more effective when local communities are genuine partners."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": true,
            "text": "What is a forest fire? Prepare a plan for prevention and mitigation of forest fires.",
            "answer": {
              "answerKey": "A **forest fire** is an uncontrolled fire that spreads through forest vegetation, including grasses, shrubs, leaf litter and trees.",
              "schoolMethod": "A **forest fire** is an uncontrolled fire that spreads through forest vegetation, including grasses, shrubs, leaf litter and trees.\n**Prevention plan:** (i) identify high-risk areas and seasons; (ii) maintain fire lines and safe access paths; (iii) prohibit unattended fires and careless disposal of burning materials; (iv) conduct awareness programmes; (v) involve local residents in surveillance; and (vi) use weather and satellite-based alerts.\n**Mitigation plan:** (i) train and equip local fire crews; (ii) maintain water, communication and protective equipment; (iii) evacuate people from danger zones; (iv) coordinate with the Forest Department and disaster-response agencies; (v) protect homes and critical infrastructure; and (vi) assess damage and restore native vegetation after the fire."
            }
          }
        ]
      },
      {
        "id": "sec2",
        "title": "THE BIG QUESTIONS — Chapter overview (Textbook p. 21)",
        "questions": [
          {
            "id": "bq1",
            "number": "BQ1",
            "isHard": false,
            "text": "How do physiography and climate shape life on Earth?",
            "answer": {
              "answerKey": "Landforms, altitude, temperature and rainfall determine the habitats, vegetation, wildlife and human activities of a region.",
              "schoolMethod": "Physiography includes landforms such as mountains, plains, plateaus, valleys and coasts. Climate includes long-term patterns of temperature and precipitation. Together they determine soil, water availability, growing seasons and habitat conditions. For example, high mountains have colder climates and specialised vegetation, while warm, wet regions support dense forests. Deserts have sparse vegetation and drought-adapted organisms. People adapt their homes, clothing, food, occupations and farming practices to these local conditions."
            }
          },
          {
            "id": "bq2",
            "number": "BQ2",
            "isHard": false,
            "text": "How are humans and other life forms interconnected?",
            "answer": {
              "answerKey": "Humans depend on plants, animals and ecosystems for food, water, materials and services, while human actions also change habitats.",
              "schoolMethod": "Plants provide food, oxygen, medicines and raw materials; animals contribute to pollination, seed dispersal, food chains and livelihoods; and microorganisms recycle nutrients and decompose waste. Humans depend on forests, grasslands, rivers, oceans and soil for survival. In return, farming, construction, pollution, hunting and conservation alter natural ecosystems. Sustainable use, habitat protection and respect for local communities help maintain this interdependence."
            }
          },
          {
            "id": "bq3",
            "number": "BQ3",
            "isHard": false,
            "text": "What is the importance of preserving various life forms, and how can we contribute to their conservation?",
            "answer": {
              "answerKey": "Biodiversity maintains ecosystem balance, supports human well-being and resilience, and can be protected through habitat conservation and sustainable practices.",
              "schoolMethod": "Biodiversity provides food, medicines, pollination, clean water, fertile soil, climate regulation and cultural value. Each species plays a role in food webs and ecosystem functioning; losing species can make ecosystems less stable and less able to recover from disturbances. We can conserve biodiversity by protecting habitats, planting native species, avoiding litter and harmful chemicals, reducing resource waste, respecting wildlife, supporting protected areas and reporting illegal hunting or tree felling. Conservation is most effective when local communities participate."
            }
          }
        ]
      },
      {
        "id": "sec3",
        "title": "IN-TEXT QUESTIONS AND ACTIVITIES — Chapter 2 (Textbook pp. 22–42)",
        "questions": [
          {
            "id": "it1",
            "number": "p. 22",
            "isHard": true,
            "text": "Study the world map of biomes (Fig. 2.2) and answer the following.",
            "answer": {
              "answerKey": "Temperate deciduous forests occur in comparatively separated regions; Antarctica has very limited mapped terrestrial biomes because of its permanent ice cover.",
              "schoolMethod": "1. **Small, separate regions:** The temperate deciduous biome is shown in separated belts, mainly in eastern North America, Europe and East Asia. Its distribution depends on moderate temperatures and seasonal rainfall, and much of its former area has been converted to agriculture and settlements.\n2. **Least variety:** Antarctica has the least variety of the mapped terrestrial biomes because much of the continent is covered by permanent ice and has extremely harsh conditions. If the question is restricted to inhabited continents, Australia also shows a relatively limited range, with large arid areas.\n3. **Areas without a specific biome:** Permanent ice, very high mountains, transitional zones between biomes and heavily modified landscapes may not fit neatly into one category. The map is simplified and does not show every local ecosystem."
            },
            "parts": [
              "Which type of biome is found in smaller, separate regions, and why?",
              "Which continent has the least number of biomes? What could be the reason for this?",
              "Why are there areas that do not have any specific biomes?"
            ]
          },
          {
            "id": "it2",
            "number": "p. 24",
            "isHard": false,
            "text": "Look at the layers of vegetation in a rainforest. What do the yellow shapes in Fig. 2.4 indicate?",
            "answer": {
              "answerKey": "They represent the relative amount of sunlight reaching the different rainforest layers, which decreases from the emergent layer to the forest floor.",
              "schoolMethod": "The emergent layer receives the greatest amount of direct sunlight. The upper canopy receives strong sunlight but is partly shaded by taller trees. Much less sunlight reaches the understory, and very little reaches the forest floor because the dense canopy blocks it. The yellow shapes illustrate this decreasing availability of sunlight at lower levels."
            },
            "parts": [
              "Look at the layers of vegetation in the rainforest shown in Fig. 2.4.",
              "Explain what the yellow shapes indicate."
            ]
          },
          {
            "id": "it3",
            "number": "p. 25",
            "isHard": false,
            "text": "Observe Fig. 2.5 and identify which of the pictured animals are found in the grasslands of India.",
            "answer": {
              "answerKey": "Elephants and lions have wild populations in India; many Indian grasslands also support blackbuck, chinkara, nilgai, wolves and the Great Indian bustard.",
              "schoolMethod": "Among the animals shown, elephants and lions have wild populations in India, although the Indian lion is mainly associated with the Gir landscape and surrounding dry habitats rather than all grasslands. Giraffes and zebras are African animals and are not native wild species of India. Indian grasslands and open scrub also support blackbuck, chinkara, nilgai, Indian wolf, foxes and the Great Indian bustard. The exact species vary with region and habitat."
            },
            "parts": [
              "Observe Fig. 2.5.",
              "Identify which of the pictured animals are found in the grasslands of India."
            ]
          },
          {
            "id": "it4",
            "number": "p. 26",
            "isHard": false,
            "text": "What activities do people in desert regions undertake to sustain their households and livelihoods, and how do they manage water scarcity?",
            "answer": {
              "answerKey": "Common livelihoods include animal rearing, farming where irrigation is possible, handicrafts, trade and tourism; water is conserved through harvesting, storage and careful use.",
              "schoolMethod": "People in desert regions may rear camels, sheep, goats and other livestock; grow drought-resistant crops where water permits; make handicrafts and textiles; trade; work in mining; or provide tourism services. To manage scarce water, communities use tanks, johads, stepwells, rooftop rainwater harvesting, check dams, traditional channels and carefully managed wells. Drip irrigation, drought-resistant crops, wastewater reuse and protection of local water bodies also help. The mix of activities varies by region."
            },
            "parts": [
              "Describe activities through which people in desert regions sustain their households and livelihoods.",
              "Explain how people manage limited water in desert environments."
            ]
          },
          {
            "id": "it5",
            "number": "p. 26",
            "isHard": false,
            "text": "Compare the Rajasthan camel with the Nubra Valley camel. Why does the Nubra Valley camel have a different fur density?",
            "answer": {
              "answerKey": "The Rajasthan dromedary has one hump and a short coat for hot, dry conditions; the Nubra Valley Bactrian camel has two humps and a thick coat for cold desert winters.",
              "schoolMethod": "The Rajasthan camel is generally a one-humped dromedary with long legs and a relatively short coat, adaptations suited to hot desert conditions. The Nubra Valley camel is a two-humped Bactrian camel with a dense, woolly coat that provides insulation against the severe cold of the high-altitude cold desert. Its thick coat is shed partly in warmer months. The difference in fur density is therefore an adaptation to temperature, not simply to sand or dryness."
            },
            "parts": [
              "Compare the camel of Rajasthan with the camel of the Nubra Valley.",
              "Explain why the Nubra Valley camel has a different fur density."
            ]
          },
          {
            "id": "it6",
            "number": "p. 27",
            "isHard": false,
            "text": "Compare vegetation and animals in the polar tundra and the Himalaya. Why are they different, and which species are found only in the Himalaya?",
            "answer": {
              "answerKey": "Polar tundra has mosses, lichens and low shrubs; the Himalaya has altitude-zoned forests and alpine vegetation, with specialised species such as the red panda, Himalayan monal and snow leopard.",
              "schoolMethod": "Polar tundra experiences extremely low temperatures, permafrost, strong winds and a short growing season, so vegetation is mainly mosses, lichens, grasses and small shrubs. The Himalaya has a wide range of altitudes, slopes and local climates. Its lower and middle slopes support broad-leaved and coniferous forests, while higher areas have alpine meadows and sparse vegetation. Himalayan wildlife includes the snow leopard, red panda, Himalayan monal, musk deer, Himalayan tahr and yak. These species are adapted to mountain habitats; not all are strictly endemic only to the Himalaya, so a precise “found only” list should be based on the species distribution map or a reliable biodiversity source."
            },
            "parts": [
              "Compare vegetation in the polar tundra and the Himalaya.",
              "Compare the animals found in these regions.",
              "Explain the environmental reasons for the differences.",
              "Give examples of species found in each region."
            ]
          },
          {
            "id": "it7",
            "number": "p. 28",
            "isHard": false,
            "text": "Observe your local environment and complete the table with examples of plants, insects, animals and non-living things, showing how they interact with humans.",
            "answer": {
              "answerKey": "A model survey may record neem trees, bees, butterflies, squirrels, birds, soil, water and buildings, then explain their uses and interactions.",
              "schoolMethod": "Model observation table (replace these examples with what you actually observe):\n| Component | Examples observed | Interaction with humans |\n|---|---|---|\n| Trees/vegetation/plants | Neem, peepal, grass, kitchen-garden plants | Give shade, oxygen, food, medicine and habitat; people water or prune them |\n| Insects | Bees, butterflies, ants | Bees and butterflies pollinate plants; ants recycle organic matter, though some may be pests |\n| Animals | Squirrels, sparrows, cows, dogs | Provide companionship, food or services; some feed on insects or disperse seeds |\n| Non-living things | Soil, water, rocks, air, buildings | Support life, farming, drinking, construction and daily activities |\nThe conclusion should explain that people depend on the local environment and must avoid pollution, habitat destruction and waste."
            },
            "parts": [
              "Observe your local environment.",
              "Complete the table with examples of plants, insects, animals and non-living things.",
              "Explain briefly how the living and non-living components interact."
            ]
          },
          {
            "id": "it8",
            "number": "p. 29",
            "isHard": false,
            "text": "Mark Andaman and Nicobar Islands, Keralam, Ladakh, Chhattisgarh, Odisha, Meghalaya and Lakshadweep at suitable positions on the biome diagram. Where would you place your home?",
            "answer": {
              "answerKey": "Use approximate climate zones: Ladakh—cold desert/alpine; Meghalaya and Andaman and Nicobar—wet tropical; Chhattisgarh and much of Odisha—tropical seasonal or deciduous; Keralam—tropical wet; Lakshadweep—tropical maritime.",
              "schoolMethod": "The diagram is a simplified climate–biome model, so placements are approximate rather than exact state-wide classifications. Ladakh belongs near the cold, dry or alpine end. Meghalaya and the Andaman and Nicobar Islands are generally warm and wet, supporting tropical forests. Much of Chhattisgarh and Odisha has tropical seasonal or deciduous vegetation, although local climates vary. Keralam is tropical and receives heavy monsoon rainfall, supporting wet evergreen and moist deciduous forests. Lakshadweep has a warm tropical maritime environment. Place your home according to the local temperature and rainfall pattern of your town or village, not simply the state name."
            },
            "parts": [
              "Mark Andaman and Nicobar Islands, Keralam, Ladakh, Chhattisgarh, Odisha, Meghalaya and Lakshadweep at suitable positions on the map.",
              "Use the map to connect each location with its characteristic biome or ecosystem, as shown in the textbook."
            ]
          },
          {
            "id": "it9",
            "number": "p. 29",
            "isHard": false,
            "text": "The biome pyramid has no arrow on its third side. If an arrow were drawn, which direction should it point and why?",
            "answer": {
              "answerKey": "The arrow should point upwards to show the transfer of energy from producers to consumers, although the available energy decreases at each higher trophic level.",
              "schoolMethod": "Energy enters the ecosystem through producers such as plants and algae, which capture sunlight. Herbivores feed on producers, and carnivores feed on other consumers. Therefore, the direction of energy transfer is upward from the base towards higher trophic levels. The amount of available energy, biomass and often the number of organisms generally decreases at higher levels because energy is lost as heat during life processes."
            },
            "parts": [
              "Identify the missing arrow on the third side of the biome pyramid.",
              "State the direction in which it should point.",
              "Explain the direction using the relationship among producers, consumers and energy flow."
            ]
          },
          {
            "id": "it10",
            "number": "p. 31",
            "isHard": false,
            "text": "Mark the six biodiversity regions listed in Fig. 2.13 on the map of India and collect information about their features.",
            "answer": {
              "answerKey": "Mark Namdapha National Park, Rann of Kutch, Gahirmatha Beach, Gulf of Mannar, Pachmarhi and Achanakmar–Amarkantak, then describe their distinctive ecosystems.",
              "schoolMethod": "1. **Namdapha National Park:** Arunachal Pradesh; Eastern Himalayan forests with exceptional biodiversity.\n2. **Rann of Kutch:** Gujarat; seasonal salt marsh and desert wetlands supporting flamingos and other wildlife.\n3. **Gahirmatha Beach:** Odisha; important nesting site for Olive Ridley sea turtles.\n4. **Gulf of Mannar:** Tamil Nadu; marine biosphere reserve with coral reefs, seagrass and coastal biodiversity.\n5. **Pachmarhi:** Madhya Pradesh; Satpura hill forests and diverse central Indian species.\n6. **Achanakmar–Amarkantak:** Chhattisgarh–Madhya Pradesh region; forested highlands and important watershed habitats.\nUse the map scale, label each place clearly and add a legend."
            },
            "parts": [
              "Mark the six biodiversity regions listed in Fig. 2.13 on a map of India.",
              "Collect information about the characteristic features of each region."
            ]
          },
          {
            "id": "it11",
            "number": "p. 32",
            "isHard": false,
            "text": "Is there an ecotourism site in your State or Union Territory? Collect information and discuss it with your friends.",
            "answer": {
              "answerKey": "A suitable example is a responsibly managed national park, wildlife sanctuary or forest destination that combines nature education, conservation and local employment.",
              "schoolMethod": "Model response: Thenmala in Keralam is described in the textbook as India’s first planned ecotourism destination. It combines recreation and environmental education with forest conservation and local employment, including guides and service providers from nearby communities. For a local answer, choose a recognised forest or wildlife destination in your State/UT, then describe its ecosystem, visitor activities, conservation rules, community participation and benefits to local livelihoods. Do not claim that a site is sustainable merely because it attracts tourists; explain the safeguards it uses."
            },
            "parts": [
              "Identify an ecotourism site in your State or Union Territory.",
              "Collect information about its ecosystem, attractions and conservation practices.",
              "Discuss how tourism can support local people without damaging the environment."
            ]
          },
          {
            "id": "it12",
            "number": "p. 33",
            "isHard": false,
            "text": "What should a tourist’s behaviour be while visiting a tourist site? What should one be mindful of?",
            "answer": {
              "answerKey": "Tourists should follow local rules, avoid littering and noise, respect wildlife and culture, stay on marked paths and conserve water and energy.",
              "schoolMethod": "Visitors should carry reusable items, put waste in the proper bins, avoid single-use plastic, stay on marked paths, and never feed, chase or disturb wildlife. They should not pluck plants, damage monuments, make excessive noise or light fires in prohibited areas. Visitors must respect local customs, seek permission before photographing people, conserve water and energy, use local services responsibly and follow the instructions of guides and forest authorities."
            },
            "parts": [
              "Describe how tourists should behave while visiting a tourist site.",
              "State what visitors should be mindful of to protect local people, wildlife and the environment."
            ]
          },
          {
            "id": "it13",
            "number": "p. 33",
            "isHard": false,
            "text": "Why are sacred groves special, and how do they help conserve biodiversity?",
            "answer": {
              "answerKey": "Sacred groves are community-protected forest patches that preserve native species, rare plants, wildlife and sometimes important water sources.",
              "schoolMethod": "Sacred groves are forest patches protected through religious, cultural or customary rules. Because tree cutting and hunting may be restricted, they can preserve old native vegetation, rare medicinal plants, birds, insects and other wildlife in landscapes where natural habitats have otherwise declined. Their vegetation protects soil, supports pollinators and may help maintain springs and groundwater. Sacred groves also preserve traditional ecological knowledge and show how cultural practices can support conservation."
            },
            "parts": [
              "Explain why sacred groves are special.",
              "Describe how sacred groves help conserve biodiversity."
            ]
          },
          {
            "id": "it14",
            "number": "p. 34",
            "isHard": false,
            "text": "Add examples of forest produce from your own State or Union Territory to the map in Fig. 2.16.",
            "answer": {
              "answerKey": "Examples include bamboo, tendu leaves, mahua flowers, sal seeds, honey, lac, medicinal herbs, gums, wild fruits and mushrooms; choose products found in your own region.",
              "schoolMethod": "Model examples to place only where they are locally found: bamboo and cane in Assam, Tripura and parts of the North-East; tendu leaves, mahua flowers, sal seeds and lac in parts of central and eastern India; honey, wild fruits, mushrooms and medicinal plants in forested regions; and herbs such as neem, tulsi and ashwagandha in suitable areas. Add the product name beside the State/UT and verify it with a local forest department, market or community source."
            },
            "parts": [
              "Add examples of forest produce from your own State or Union Territory to the map in Fig. 2.16.",
              "Identify the location and the forest product associated with it."
            ]
          },
          {
            "id": "it15",
            "number": "p. 36",
            "isHard": false,
            "text": "Identify and classify the items for sale in Fig. 2.18. Also list food and medicinal varieties available in your local market.",
            "answer": {
              "answerKey": "Classify the pictured livelihoods as forest-based crafts, food products and medicinal/plant products; local examples may include honey, fruits, spices, herbs and bamboo goods.",
              "schoolMethod": "The photographs show traditional forest-based livelihoods, including people making or selling woven bamboo products, food items and gathered forest produce. A useful classification is: (i) **food products**—honey, wild fruits, nuts, mushrooms, roots, tubers and local grains; (ii) **medicinal products**—herbs, leaves, roots and plant-based preparations; and (iii) **craft and household products**—bamboo baskets, mats and other handmade goods. A local-market list may include turmeric, ginger, tulsi, neem, honey, amla, tamarind and seasonal fruits. Record only products actually found in your market."
            },
            "parts": [
              "Identify the items for sale in Fig. 2.18.",
              "Classify the items into suitable categories.",
              "List food products and medicinal varieties available in your local market."
            ]
          },
          {
            "id": "it16",
            "number": "p. 38",
            "isHard": false,
            "text": "Explain how GI tagging of forest products connects geography, cultural traditions, local governance and the rural economy. Name GI-tagged forest products from your State or Union Territory.",
            "answer": {
              "answerKey": "GI tags link a product’s qualities and reputation to its place of origin, protect traditional knowledge and can improve market recognition and rural income.",
              "schoolMethod": "A Geographical Indication identifies goods whose quality, reputation or other characteristics are essentially linked to a particular geographical origin. Soil, climate, forest vegetation and local biodiversity can influence the product. Traditional communities preserve the skills and methods used to produce it; producer groups and public institutions help maintain standards and protect the name. Recognition can improve marketing, create value for local producers and encourage conservation of the landscape and knowledge on which the product depends.\nExamples shown in the textbook include Ramban Sulai Honey (Jammu and Kashmir), Tezpur Litchi (Assam), Channapatna Toys made from Wrightia tinctoria wood (Karnataka), Kandhamal Haldi (Odisha), Erode Turmeric (Tamil Nadu), Nilgiri Tea, Tripura Queen Pineapple and Khasi Mandarin (Meghalaya). Select the item relevant to your own State/UT and confirm the current GI register when preparing a formal project."
            },
            "parts": [
              "Explain how GI tagging of forest products connects geography with cultural traditions.",
              "Explain the role of local governance.",
              "Explain possible benefits for the rural economy and producers."
            ]
          },
          {
            "id": "it17",
            "number": "p. 38–39",
            "isHard": false,
            "text": "Explore forest-fire locations on the School Bhuvan–NCERT Geoportal. Identify the patterns you observe and explain how the location, season, forest type, nearby settlements and local conditions may help in understanding fire risk.",
            "answer": {
              "answerKey": "Record the location, date or season, forest type and nearby settlements or roads. Compare clusters with dry weather, vegetation and human activity, but verify causes from reliable forest-department information.",
              "schoolMethod": "Use the School Bhuvan–NCERT Geoportal to identify clusters of reported fires. For each location, record the State/UT, date or season, forest type, proximity to roads or settlements and any other information shown by the map. Compare the pattern with rainfall, temperature, drought, dry vegetation and human activities such as unattended campfires, discarded smoking materials, agricultural burning or deliberate land clearing. A map shows where fires were reported; it does not, by itself, establish why a particular fire started. Check official Forest Department or Forest Survey of India information before assigning a cause. Conclude with prevention measures such as community awareness, early reporting, fire lines where appropriate, careful management of dry vegetation, trained response teams and protection of vulnerable settlements."
            },
            "parts": [
              "What patterns can be observed in the locations and seasonal distribution of forest fires?",
              "What information about forest type, nearby roads or settlements, weather and vegetation should be recorded?",
              "Why can a map show where fires occurred but not, by itself, prove the cause of a particular fire?"
            ]
          },
          {
            "id": "it17b",
            "number": "p. 38–39",
            "text": "Think About It — The textbook notes that a substantial share of India’s forest cover is prone to forest fires and that climate change and human activities contribute to the risk. Explain why forest fires are a serious concern, identify factors that increase their likelihood, and suggest preventive measures.",
            "parts": [
              "What damage can forest fires cause to forests, wildlife, soil, homes and the livelihoods of forest-dependent communities?",
              "How can climatic conditions and human activities increase the likelihood or spread of forest fires?",
              "What practical measures can communities and authorities take before, during and after a forest fire?"
            ],
            "isHard": false,
            "answer": {
              "answerKey": "Forest fires destroy habitats and livelihoods and can damage soil, property and human health. Hot, dry and windy conditions, drought and human negligence or deliberate burning can raise risk; prevention requires awareness, monitoring, early reporting and trained response.",
              "schoolMethod": "Forest fires are serious because they can destroy vegetation and wildlife habitats, reduce biodiversity, damage soil, release smoke and harmful gases, threaten homes and roads, and interrupt the livelihoods of forest-dependent communities. The textbook cites a Forest Survey of India estimate that about 36 per cent of the country’s forest cover is prone to fires, with nearly 4 per cent described as extremely prone; these are the figures cited in the textbook, not a substitute for checking the latest official assessment.\n\n**Factors increasing risk:** prolonged dry spells, high temperatures, low humidity, strong winds and dry leaf litter can allow a fire to start or spread. Climate change can intensify some fire-weather conditions. Human causes include unattended campfires, burning of waste or farm residues, discarded smoking materials, deliberate fires and careless use of fire near forests.\n\n**Prevention and response:** communities should avoid lighting fires in or near forests, extinguish permitted fires completely, report smoke or flames immediately, follow official warnings and keep roads and access routes clear for response teams. Forest authorities can monitor high-risk areas, maintain suitable fire lines, train local response teams, conduct awareness programmes and use early-detection systems. People should move away from danger and follow evacuation instructions rather than attempting to fight a large fire themselves."
            }
          },
          {
            "id": "it18",
            "number": "p. 39",
            "isHard": false,
            "text": "How are the benefits of the Pradhan Mantri Ujjwala Yojana (PMUY) affecting women’s health?",
            "answer": {
              "answerKey": "Access to LPG can reduce exposure to smoke from solid fuels, lower indoor air pollution and reduce time spent collecting firewood.",
              "schoolMethod": "The PMUY supports eligible households in obtaining LPG connections. Replacing or reducing the use of wood, dung and crop residues for cooking can reduce exposure to smoke and fine particles inside the home. This can lower the risk of respiratory irritation and other health problems, improve kitchen conditions and reduce the time and physical effort often spent collecting fuelwood. The benefits depend on whether households can afford and regularly obtain LPG refills; access to a connection alone does not guarantee complete transition to clean cooking."
            },
            "parts": [
              "Explain how the benefits of the Pradhan Mantri Ujjwala Yojana (PMUY) can affect women’s health.",
              "Mention the role of cleaner cooking fuel and the importance of safe, sustained access and use."
            ]
          },
          {
            "id": "it19",
            "number": "p. 39",
            "isHard": false,
            "text": "Which wild animals have you seen in or near your residential area? Identify why they enter human settlements.",
            "answer": {
              "answerKey": "Animals may enter settlements because of habitat loss and fragmentation, blocked wildlife corridors, food waste, water scarcity and seasonal movement.",
              "schoolMethod": "Model response: Depending on the region, residents may see monkeys, deer, wild boar, elephants, snakes or birds near settlements. Such encounters can increase when forests are cleared or fragmented, roads and buildings interrupt animal corridors, crops and garbage provide food, or drought reduces water and natural food. Seasonal movement and population growth may also bring animals closer to people. Communities should secure waste and crops, protect corridors, avoid feeding wildlife and contact trained forest officials rather than harming animals."
            },
            "parts": [
              "Identify wild animals you have seen in or near your residential area.",
              "Suggest reasons why these animals may enter human settlements.",
              "Mention a safe, non-harmful response that reduces conflict."
            ]
          },
          {
            "id": "it20",
            "number": "p. 42",
            "isHard": false,
            "text": "Study Fig. 2.24. Identify water tanks and mark the agricultural fields irrigated by them.",
            "answer": {
              "answerKey": "Locate visible water-storage tanks, trace nearby channels or command areas, and mark adjoining fields that appear to receive irrigation.",
              "schoolMethod": "This is a map-reading activity based on the School Bhuvan image. First identify the tanks or reservoirs as distinct water bodies. Next look for channels, field boundaries and cultivated plots connected to or lying below the tanks. Shade or outline the likely irrigated fields and add a legend distinguishing tanks, channels and agricultural land. The precise fields must be taken from the displayed image and local map layers; do not invent tank names or boundaries when they are not legible."
            },
            "parts": [
              "Study Fig. 2.24.",
              "Identify the water tanks shown.",
              "Mark the agricultural fields irrigated by those tanks."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ch03",
    "number": 3,
    "title": "Resistance and Resilience (1000–1700 CE)",
    "slug": "resistance-and-resilience",
    "code": "0908ch03",
    "description": "Examines political resistance, alliances, forts, economic networks and cultural resilience in the Indian subcontinent between 1000 and 1700 CE.",
    "exercises": [
      {
        "id": "sec1",
        "title": "QUESTIONS AND ACTIVITIES",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Choose the most appropriate answer.\n\nResistance and resilience are closely connected because:\n(a) Resistance always involves warfare.\n(b) Resilience enables communities to endure difficulties and sustain resistance.\n(c) Resistance is possible only when a kingdom has a large army.\n(d) Resilient societies avoid all forms of conflict.",
            "answer": {
              "answerKey": "**Correct option: (b) Resilience enables communities to endure difficulties and sustain resistance.** Resilience gives a community the capacity to adapt, preserve its identity and continue resisting a threat despite setbacks.",
              "schoolMethod": "**Correct option: (b) Resilience enables communities to endure difficulties and sustain resistance.** Resilience gives a community the capacity to adapt, preserve its identity and continue resisting a threat despite setbacks. Resistance need not always involve warfare, and it does not depend only on the size of an army."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Why and how did groups such as the Sikhs, Marathas, and Rajputs assert their political power and identity during periods of changing political authority?",
            "answer": {
              "answerKey": "These groups asserted their political power to protect their territories, autonomy, traditions and community interests amid changing regional and imperial authority.",
              "schoolMethod": "These groups asserted their political power to protect their territories, autonomy, traditions and community interests amid changing regional and imperial authority.\n1. **Rajputs** used military resistance, strategic alliances, diplomacy and control of forts to preserve or expand their influence.\n2. **Marathas** built mobile military forces, used forts and local networks, and developed administrative and revenue systems under leaders such as Shivaji.\n3. **Sikhs** developed strong community institutions and, over time, organised military resistance to protect their religious community and political interests.\nTheir methods included warfare, negotiation, alliances, administration and mobilisation of local support. Their histories show that political identity was maintained through both resistance and adaptation."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Why did some Rajput rulers decide to negotiate alliances with the Mughal power?",
            "answer": {
              "answerKey": "Some Rajput rulers negotiated alliances with the Mughals because diplomacy could protect their kingdoms and secure favourable terms without continuous warfare.",
              "schoolMethod": "Some Rajput rulers negotiated alliances with the Mughals because diplomacy could protect their kingdoms and secure favourable terms without continuous warfare. Alliances could provide military support, access to imperial offices and influence at court, while allowing rulers to retain significant control over their territories and internal affairs. Such decisions were strategic responses to the political conditions of the time; different Rajput houses adopted different approaches."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Imagine a market in a port town of India such as Surat, Masulipatnam, or Puducherry. You are a foreign trader from Italy or France and want to make a deal of cotton textiles. How would you secure the product in the local market? Whose help would you seek and what kind of challenges would you face in terms of language, quality of product, prices of commodities, etc.?",
            "answer": {
              "answerKey": "As a foreign trader, I would first visit the local port and market and contact a reputable Indian merchant, broker or textile wholesaler.",
              "schoolMethod": "As a foreign trader, I would first visit the local port and market and contact a reputable Indian merchant, broker or textile wholesaler. I would seek help from an interpreter, local agents, bankers or money changers, transporters and officials who could explain customs duties and trading rules.\nI would inspect samples for quality, compare prices and measures, agree on quantity, delivery time and payment terms, and obtain a written contract or receipt. I would arrange secure storage and transport to the port.\nThe main challenges would be language differences, unfamiliar weights and measures, fluctuating prices, differences in textile quality, customs duties, competition, trust and the risk of delayed delivery or damage. Reliable local partners and clear agreements would help reduce these risks."
            },
            "parts": [
              "Explain how you would secure a supply of cotton textiles in the local market.",
              "Identify whose help you would seek, such as a merchant, broker, translator or wholesaler.",
              "Discuss challenges involving language, product quality, prices, trust, payment and transport."
            ]
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "Watch any video at the given link (https://www.indianculture.gov.in/forts-of-india/tales-of-forts) and analyse the various functions of forts and fortresses. How did rulers perceive the importance of forts in terms of strategic concerns?",
            "answer": {
              "answerKey": "Forts provided defence, observation, control of routes, storage, administration and refuge during a siege.",
              "schoolMethod": "Forts served several strategic and administrative purposes:\n1. **Defence:** high walls, gates, bastions and watchtowers helped repel attacks and control entry.\n2. **Observation:** elevated positions allowed guards to monitor enemy movements and important routes.\n3. **Shelter and survival:** forts could contain wells, food stores, armouries and residential areas, helping defenders withstand a siege.\n4. **Administration:** rulers used forts as centres of governance, command and collection of revenue.\n5. **Control of territory and trade:** forts near passes, roads, rivers and ports helped secure strategic routes and surrounding regions.\nRulers therefore viewed forts as symbols of sovereignty as well as practical military bases. Their location, water supply, access routes and defensive design were crucial."
            },
            "parts": [
              "Analyse the different functions of forts and fortresses using the video or other reliable information.",
              "Explain why rulers considered forts strategically important."
            ]
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "What architectural changes occurred in temple construction during the period under study? How do these changes reflect upon the resilient nature of Indian civilisation?",
            "answer": {
              "answerKey": "Temples continued to be built, maintained and restored despite conflict. From the 16th century, some were designed in less visible haveli-like forms, with simpler exteriors and fewer tall shikharas, so that communities could preserve worship under difficult conditions.",
              "schoolMethod": "Temple architecture and patronage changed in several ways during this period:\n1. **Expansion and regional development:** Between the 7th and 13th centuries, temple construction expanded under different dynasties. Large temple complexes and distinctive regional styles developed. Temples such as the Brihadeeswara Temple at Thanjavur became important religious, cultural and economic centres.\n2. **Maintenance and restoration:** From the 11th century, some temples were damaged or plundered during invasions. However, local rulers, merchant groups and religious communities continued to maintain, rebuild and patronise sacred places. Examples discussed in the textbook include restoration at Kannanur, patronage of Govind Devji at Vrindavan and the rebuilding of temples at Varanasi and Mathura.\n3. **Adaptation in design and location:** From the 16th century, some temples were built in less visible locations, along narrow lanes, with entrances away from main streets. Some resembled ordinary houses or havelis; detailed external decoration and tall shikharas were often avoided. This helped communities reduce the risk of destruction while continuing worship. Historians sometimes describe such structures as “haveli temples”.\n4. **Cultural continuity:** Despite political changes and threats, people adapted the form and location of sacred buildings, restored important sites and continued religious and artistic practices. Thus, temple construction reflects resilience through continuity, community support and adaptation rather than through one unchanging architectural style."
            },
            "parts": [
              "Describe the main changes in temple construction and design between the 11th and 17th centuries.",
              "Explain how the construction, maintenance, restoration and adaptation of temples demonstrate the resilience of Indian civilisation."
            ]
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "A kingdom has limited military resources but possesses fertile agricultural land, strong local support, and detailed knowledge of its terrain.\n\nExplain two ways in which these resources could contribute to the kingdom’s resilience when faced with a threat.",
            "answer": {
              "answerKey": "1. **Food and economic strength:** fertile land can provide grain and other supplies to sustain the population and defenders during a prolonged crisis.",
              "schoolMethod": "1. **Food and economic strength:** fertile land can provide grain and other supplies to sustain the population and defenders during a prolonged crisis. Agricultural surplus can also support trade and generate revenue to obtain essential resources.\n2. **Local knowledge and cooperation:** people familiar with hills, forests, rivers and routes can guide defenders, protect supplies, use suitable terrain and avoid enemy movements. Strong community support helps organise communication, shelter, intelligence and resistance. These advantages can compensate partly for limited military strength."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "Consider the following statement:\n\n“A tradition becomes more resilient when people can carry it with them.”\n\nDo you agree? Explain using examples from the Bhakti tradition.",
            "answer": {
              "answerKey": "Yes. A tradition is more resilient when it can be practised in everyday life and adapted to different places and circumstances.",
              "schoolMethod": "Yes. A tradition is more resilient when it can be practised in everyday life and adapted to different places and circumstances. The Bhakti tradition spread through devotional songs, poetry, stories, congregational singing and teachings in regional languages. Saints and poet-singers such as Kabir, Mirabai, Namdev and Chaitanya communicated devotion beyond formal institutions and across social boundaries. People could remember and share songs and teachings while travelling or living under changing political conditions. This flexibility helped preserve devotional ideas and make them accessible to wider communities."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": true,
            "text": "Voices from the Past\n\nChoose any two of the following and write a short first-person account explaining what resilience means from that person’s perspective:\n- A Bhakti saint\n- A Rajput soldier\n- An Ahom commander\n- A Maratha administrator\n- A merchant\n- A Jat leader.",
            "answer": {
              "answerKey": "**A Bhakti saint:** “I teach that sincere devotion is more important than outward status or ritual alone.",
              "schoolMethod": "**A Bhakti saint:** “I teach that sincere devotion is more important than outward status or ritual alone. I share my message through the language people speak and through songs they can remember. Even when my ideas are criticised, I continue to teach compassion, equality and devotion. For me, resilience means holding firmly to spiritual values while communicating them in ways people can understand.”\n\n**A Rajput soldier:** “I serve my ruler and protect the people and territory entrusted to us. When our kingdom faces a stronger enemy, I rely not only on courage but also on discipline, knowledge of the land, supplies and cooperation with allies. If circumstances require negotiation or rebuilding after defeat, I adapt without abandoning my community's identity. Resilience means recovering from hardship and continuing to protect what matters.”"
            },
            "parts": [
              "Choose any two of the listed figures.",
              "Write a short first-person account from each person’s perspective explaining what resilience means to them."
            ]
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": true,
            "text": "Design a Fort\n\nYou are a military architect advising a ruler.\n\nDraw a simple, labelled plan of a fort that includes the following:\n- Residential complex\n- Defensive walls\n- Water source\n- Food storage\n- Escape route\n- Watchtower\n- Administrative area\n\nNow, write a few sentences explaining how your design would help the kingdom withstand a long siege.",
            "answer": {
              "answerKey": "**Model design (labels to include in the drawing):**\n- Outer defensive wall with a guarded main gate and bastions.",
              "schoolMethod": "**Model design (labels to include in the drawing):**\n- Outer defensive wall with a guarded main gate and bastions.\n- Watchtower at the highest point with a clear view of approach routes.\n- Protected well or reservoir inside the walls.\n- Granary and food store placed in a dry, secure area.\n- Residential complex for the ruler, soldiers and essential workers.\n- Administrative area near the main courtyard for records and command.\n- A concealed, guarded escape route leading to a safe natural passage.\n\n**Explanation:** Thick walls, bastions and a controlled gate make direct entry difficult. The watchtower gives early warning. A protected water source and sufficient food stores allow residents to survive when supplies are cut off. The administrative area helps coordinate defence and rationing. A concealed escape route provides an emergency option if the fort is about to fall. The design therefore combines defence, supplies, communication and continuity of administration."
            },
            "parts": [
              "Draw a simple labelled fort plan.",
              "Include a residential complex, defensive walls, water source, food storage, escape route, watchtower and administrative area.",
              "Explain how the design would help the kingdom withstand a long siege."
            ]
          }
        ]
      },
      {
        "id": "sec2",
        "title": "THE BIG QUESTIONS — Chapter overview (Textbook p. 45)",
        "questions": [
          {
            "id": "bq1",
            "number": "BQ1",
            "isHard": false,
            "text": "How did Indian rulers use resistance and alliances to safeguard their lands?",
            "answer": {
              "answerKey": "Rulers used military resistance, forts, guerrilla tactics, diplomacy, strategic alliances and knowledge of local terrain.",
              "schoolMethod": "Rajput, Ahom, Vijayanagara, Maratha, Sikh and Jat powers used different methods according to their circumstances. They defended forts and strategic routes, organised armies, used mobile or guerrilla warfare, exploited local terrain and built alliances with neighbouring rulers or communities. Some negotiated treaties when these protected autonomy or reduced destructive conflict. Resistance was therefore not limited to battlefield fighting; it also involved diplomacy, administration and local cooperation."
            }
          },
          {
            "id": "bq2",
            "number": "BQ2",
            "isHard": false,
            "text": "What factors contributed to the resilience of different kingdoms and communities during this period?",
            "answer": {
              "answerKey": "Resilience was strengthened by local knowledge, social support, adaptable institutions, economic resources, cultural continuity and effective leadership.",
              "schoolMethod": "Kingdoms and communities survived difficult periods through strong local networks, knowledge of geography, military organisation, diplomacy, agriculture, irrigation, trade, financial instruments and shared cultural traditions. Community participation and support from groups such as the Bhils strengthened resistance. Adaptable institutions and devotional practices also allowed people to preserve identity while circumstances changed. No single factor explains resilience; it arose from the interaction of political, economic, social and cultural strengths."
            }
          },
          {
            "id": "bq3",
            "number": "BQ3",
            "isHard": false,
            "text": "How did the Bhakti tradition foster a sense of solidarity?",
            "answer": {
              "answerKey": "Bhakti encouraged personal devotion, equality, inclusiveness and shared worship through accessible local languages and devotional songs.",
              "schoolMethod": "Bhakti saints composed hymns and teachings in languages understood by ordinary people. Their emphasis on devotion, ethical conduct and access to the divine challenged barriers based on status or social background. Saints came from varied communities and traditions, and devotional singing, poetry and gatherings created shared spaces. The use of local languages and practices such as nām kīrtan helped transmit spiritual ideas across regions and generations, strengthening social and cultural solidarity."
            }
          },
          {
            "id": "bq4",
            "number": "BQ4",
            "isHard": false,
            "text": "How did the expansion of agriculture, trade and commerce keep the economy sound?",
            "answer": {
              "answerKey": "Irrigation and agricultural expansion increased production, while markets, merchant networks, hundis and overseas trade moved goods, money and knowledge.",
              "schoolMethod": "Agricultural expansion, improved irrigation and water-management systems supported food production and rural livelihoods. Local and long-distance markets connected villages with towns. Merchant communities and caravans moved goods and artisanal knowledge across inland routes, while seaborne trade linked Indian ports with the Persian Gulf, Arabian Sea and wider Indian Ocean. Hundis enabled payments and credit without transporting large amounts of cash. These activities generated income, supported rulers and communities, and helped society withstand political instability."
            }
          }
        ]
      },
      {
        "id": "sec3",
        "title": "IN-TEXT QUESTIONS AND ACTIVITIES — Chapter 3 (Textbook pp. 53–76)",
        "questions": [
          {
            "id": "it9",
            "number": "p. 47",
            "isHard": true,
            "text": "Recall the invasions of Mahmūd of Ghaznī and Muhammad Ghūrī mentioned in the chapter. How did Indian rulers respond, and what impact did these invasions have?",
            "answer": {
              "answerKey": "Several Indian dynasties resisted the invasions; Queen Nāikī Devī defeated Muhammad Ghūrī at Kasahrada in 1178, while the invasions and later conquests disrupted the subcontinent’s political and social order.",
              "schoolMethod": "Mahmūd of Ghaznī began his invasions of the north-western Indian subcontinent in the early 11th century, including his campaign against Jayapāla in 1001. Indian powers such as the Hindu Shāhis, Chandellas, Solankīs and Chauhāns opposed the invaders. In 1178, Queen Nāikī Devī of the Chaulukya kingdom defeated Muhammad Ghūrī at Kasahrada near Mount Abu. Ghūrī later won the Second Battle of Tarain in 1192 against Prithvīrāj Chauhān, helping establish Turkish political control in parts of northern India. Resistance continued in regions such as Gujarat, Malwa, Bundelkhand, Odisha, Assam and Rajputana. The textbook notes that these invasions and conquests seriously disrupted the political, social and religious fabric of the subcontinent; the extent and nature of change varied by region."
            },
            "parts": [
              "Recall the invasions of Mahmūd of Ghaznī and Muhammad Ghūrī mentioned in the chapter.",
              "Explain how Indian rulers responded to these invasions.",
              "Compare the aims or outcomes of the two invasions, as discussed in the textbook."
            ]
          },
          {
            "id": "it1",
            "number": "p. 53",
            "isHard": false,
            "text": "Explain the contribution of the Bhil community to Mahārāṇā Pratāp’s resistance, as recalled in the textbook.",
            "answer": {
              "answerKey": "The Bhils provided tactical and logistical support, guided forces through the Aravalli terrain and used their archery and knowledge of guerrilla warfare.",
              "schoolMethod": "The Bhil community supported Mahārāṇā Pratāp through detailed knowledge of the Aravalli hills, forest routes and local terrain. They acted as guides, supplied tactical and logistical assistance, used archery and helped in guerrilla-style operations. Their alliance strengthened Mewar’s ability to resist a more powerful Mughal force. The textbook notes that the partnership was later represented in Mewar’s state emblem."
            },
            "parts": [
              "Explain the contribution of the Bhil community to Mahārāṇā Pratāp’s resistance, as recalled in the textbook."
            ]
          },
          {
            "id": "it2",
            "number": "p. 54",
            "isHard": false,
            "text": "Identify any two actions in Dursā Arhā’s poem that show Mahārāṇā Pratāp maintained independence from the Mughal court.",
            "answer": {
              "answerKey": "He kept his horses unbranded and refused to attend the Nauroz festival or perform guard duty during Jharokha Darshan.",
              "schoolMethod": "Any two of the following are acceptable: (i) he kept his horses unbranded, avoiding a symbol of Mughal imperial control; (ii) he did not participate in the Nauroz festival; and (iii) he did not mount guard for the emperor during Jharokha Darshan. These actions are presented in the poem as signs that he did not accept the ceremonial subordination expected by the Mughal court."
            },
            "parts": [
              "Identify any two actions described in Dursā Arhā’s poem.",
              "Explain how each action shows that Mahārāṇā Pratāp maintained independence from the Mughal court."
            ]
          },
          {
            "id": "it10",
            "number": "p. 57",
            "isHard": false,
            "text": "Recall the achievements of Vijayanagara under Kṛiṣhṇadevarāya. What happened to the empire after the Battle of Talikota in 1565?",
            "answer": {
              "answerKey": "Kṛiṣhṇadevarāya strengthened Vijayanagara’s military power and supported temples and culture; after the 1565 defeat at Talikota, the capital was sacked and the empire gradually fragmented.",
              "schoolMethod": "Kṛiṣhṇadevarāya (r. 1509–1529) expanded and secured Vijayanagara’s dominance in the Deccan, won campaigns against neighbouring powers and supported temples, including Tirupati and the Vitthala temple at the capital. His reign is associated with military strength and cultural patronage. In 1565, an alliance of Deccan sultanates defeated the Vijayanagara army at the Battle of Talikota. The city was subsequently sacked and largely abandoned, and the empire gradually broke into smaller Nāyaka-ruled kingdoms."
            },
            "parts": [
              "Recall the achievements of Vijayanagara under Kṛiṣhṇadevarāya.",
              "Explain what happened to the empire after the Battle of Talikota."
            ]
          },
          {
            "id": "it3",
            "number": "p. 58",
            "isHard": false,
            "text": "Recall the strategies and institutions that helped Chhatrapati Śhivājī and the Marathas establish and strengthen their power.",
            "answer": {
              "answerKey": "The Marathas used forts, mobile forces, guerrilla tactics, local geographical knowledge, naval strength and organised administration.",
              "schoolMethod": "Model answer: Chhatrapati Śhivājī used the Deccan’s hills, forests and passes to conduct swift attacks and avoid unfavourable battles. A network of forts protected territory, supplies and routes. Mobile cavalry and guerrilla methods (often called ganimi kāva) helped challenge larger armies. The Marathas also developed naval capabilities along the coast and organised administration, including the council of ministers known as the Aṣṭapradhān. Local revenue arrangements and disciplined administration helped sustain the state. Use the exact institutions taught in the Grade 8 Part 1 chapter as the primary reference."
            },
            "parts": [
              "Recall the strategies used by Chhatrapati Śhivājī and the Marathas to establish and strengthen their power.",
              "Identify the institutions that supported their administration."
            ]
          },
          {
            "id": "it4",
            "number": "p. 64",
            "isHard": false,
            "text": "Explore how the Nayanar saints Karaikal Ammaiyar and the Alvar saint Andal contributed to the spread of Bhakti in peninsular India.",
            "answer": {
              "answerKey": "Karaikal Ammaiyar expressed intense devotion to Shiva through Tamil hymns; Andal composed devotional poetry to Vishnu and made Bhakti accessible through song and poetry.",
              "schoolMethod": "Karaikal Ammaiyar was an early Tamil Shaiva poet-saint whose hymns expressed intense personal devotion to Shiva and contributed to the Nayanar tradition. Andal, one of the Alvar saints, composed Tamil devotional works such as the Tiruppavai and Nachiyar Tirumoli, expressing love and surrender to Vishnu. Their poetry used the language of the people, connected devotion with everyday emotion and worship, and helped spread Bhakti beyond formal institutions. Their lives also show that women played an important role in devotional traditions."
            },
            "parts": [
              "Explain how Karaikal Ammaiyar contributed to the spread of Bhakti.",
              "Explain how the Alvar saint Andal contributed to the spread of Bhakti in peninsular India."
            ]
          },
          {
            "id": "it5",
            "number": "p. 67",
            "isHard": false,
            "text": "Locate the present-day states associated with the Bhakti saints shown in the infographic. Add a saint from your own State/UT and explain a song, poem or verse by one of the saints.",
            "answer": {
              "answerKey": "Map each saint to the region given in the infographic; examples include Andal and Karaikal Ammaiyar in Tamil Nadu, Kabir in Uttar Pradesh and Lāl Ded in Kashmir.",
              "schoolMethod": "Use the saint names and regions printed in the textbook infographic as the authority for the map. Examples for a short explanation include: Andal’s Tamil hymns express loving devotion to Vishnu; Kabir’s verses criticise empty ritual and stress inner devotion and ethical living; Lāl Ded’s vakhs encourage spiritual truth to be lived rather than merely memorised. Add a saint from your own State/UT only after checking a reliable regional source. Mark the relevant State/UT clearly and write two or three sentences explaining the chosen verse in your own words."
            },
            "parts": [
              "Locate the present-day states associated with the Bhakti saints shown in the infographic.",
              "Add a Bhakti saint from your own State or region and briefly describe their contribution."
            ]
          },
          {
            "id": "it6",
            "number": "p. 67",
            "isHard": false,
            "text": "Lāl Ded says it is easy to learn scriptures but hard to live them. What is the difference between knowing a rule and actually following it? Give an example from daily life.",
            "answer": {
              "answerKey": "Knowing a rule means understanding it; following it means applying it consistently through one’s actions.",
              "schoolMethod": "Knowing a rule is intellectual understanding, while following it requires discipline and action. For example, a student may know that littering harms the environment but still drop a wrapper; the student follows the rule only when they put waste in the correct bin and encourage others to do the same. The saying teaches that values become meaningful when they shape behaviour, not merely when they are memorised."
            },
            "parts": [
              "Explain the difference between knowing a rule or teaching and putting it into practice.",
              "Use Lāl Ded’s statement to show why lived values are more difficult and important than merely memorising scriptures."
            ]
          },
          {
            "id": "it7",
            "number": "p. 74",
            "isHard": false,
            "text": "Why was a hundi a safer and more convenient choice than physically transporting money over long distances?",
            "answer": {
              "answerKey": "A hundi was a written financial instrument that enabled payment or credit through trusted merchant networks without carrying large amounts of cash.",
              "schoolMethod": "A hundi allowed a trader to deposit or arrange money with a trusted banker or merchant in one place and receive payment through an associate elsewhere. It reduced the need to carry heavy quantities of coins, lowering the risk of theft, robbery and loss during travel. It made trade faster and supported long-distance commercial networks. Trust, reputation and enforceable commercial practices were still essential; hundis were not risk-free."
            },
            "parts": [
              "Explain why a hundi was safer than physically carrying money over long distances.",
              "Explain why it was more convenient for merchants and traders."
            ]
          },
          {
            "id": "it8",
            "number": "p. 76",
            "isHard": false,
            "text": "Identify cultural and economic pillars in a community. How do they contribute to resilience when society faces invasions or external pressures?",
            "answer": {
              "answerKey": "Shared beliefs, language, traditions, community institutions, agriculture, crafts, markets, trade and financial networks help communities preserve identity and livelihoods.",
              "schoolMethod": "Cultural pillars include places of worship, festivals, languages, oral traditions, music, literature, customary practices and shared values. Economic pillars include farming, irrigation, artisans, merchants, markets, trade routes, credit networks and community-owned resources. They contribute to resilience by maintaining social unity, transmitting knowledge, providing food and income, preserving identity and enabling people to reorganise after disruption. Strong institutions and cooperation help communities adapt without losing their cultural continuity."
            },
            "parts": [
              "Identify cultural pillars in a community.",
              "Identify economic pillars in a community.",
              "Explain how these pillars help a society remain resilient during invasions or other crises."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ch04",
    "number": 4,
    "title": "Governance and Public Policy",
    "slug": "governance-and-public-policy",
    "code": "0908ch04",
    "description": "Explains governance, public policy, the policy cycle, good-governance principles and the shared role of citizens and institutions in public welfare.",
    "exercises": [
      {
        "id": "sec1",
        "title": "QUESTIONS AND ACTIVITIES",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "“Good governance is the responsibility of the government alone.” Do you agree with this statement? Give reasons to support your answer.",
            "answer": {
              "answerKey": "No. Government institutions have the primary legal and administrative responsibility to make and implement public decisions, but good governance requires cooperation among government, citizens, civil society, businesses and other institutions.",
              "schoolMethod": "No. Government institutions have the primary legal and administrative responsibility to make and implement public decisions, but good governance requires cooperation among government, citizens, civil society, businesses and other institutions.\n1. Citizens follow laws, pay taxes, vote, raise concerns and monitor public services.\n2. Community groups and civil-society organisations identify local needs, spread awareness and help reach vulnerable groups.\n3. Businesses can follow regulations and contribute responsibly to public welfare.\n4. Media and independent institutions can improve transparency and accountability.\n5. Public participation helps policies reflect actual needs and exposes gaps in implementation.\nTherefore, good governance is a shared responsibility, although public authorities remain accountable for their duties."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Do you think students can contribute to good governance? Write a short note describing any five ways in which students can become more responsible and active citizens.",
            "answer": {
              "answerKey": "Students can follow rules, protect public property, keep surroundings clean, join community work and give constructive feedback.",
              "schoolMethod": "Yes. Students can contribute in the following ways:\n1. **Follow rules:** respect school rules, traffic regulations and public laws.\n2. **Keep surroundings clean:** avoid littering, segregate waste and participate in cleanliness drives.\n3. **Conserve resources:** save water and electricity and encourage responsible use of public property.\n4. **Participate democratically:** take part in student councils, discussions and community activities while respecting different views.\n5. **Raise issues responsibly:** report unsafe conditions, discrimination, corruption or service problems to appropriate authorities with facts and respect.\nStudents can also spread awareness, volunteer and help ensure that public facilities are accessible to everyone."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Choose any one public policy [for example, Right to Education (RTE), Swachh Bharat Mission, PM POSHAN, Ayushman Bharat, Digital India, or Jal Jeevan Mission] and prepare a chart showing the following aspects:\n- The problem it addresses\n- The major stakeholders involved\n- How different actors coordinate\n- The role of citizens in its success\n\nPresent your findings to the class.",
            "answer": {
              "answerKey": "**Example: Jal Jeevan Mission (rural household tap-water programme)**\n- **Problem addressed:** inadequate access to safe and reliable drinking water in rural households, often requiring long journeys to collect water.",
              "schoolMethod": "**Example: Jal Jeevan Mission (rural household tap-water programme)**\n- **Problem addressed:** inadequate access to safe and reliable drinking water in rural households, often requiring long journeys to collect water.\n- **Major stakeholders:** Union and State governments, Public Health Engineering/Rural Water Supply departments, Gram Panchayats, village water and sanitation committees, engineers, contractors and households.\n- **Coordination:** governments provide policy guidance and funds; state and district agencies plan and construct water-supply systems; Gram Panchayats and village committees help select, monitor and maintain local systems; technical agencies test water quality.\n- **Citizens’ role:** participate in village meetings, protect water sources, use water carefully, report leaks and contamination, monitor service quality and support maintenance.\n**Expected outcome:** more reliable access to safe drinking water, improved health and reduced time spent collecting water."
            },
            "parts": [
              "Identify the public problem addressed by the selected policy.",
              "Identify the major stakeholders involved.",
              "Explain how the different actors coordinate.",
              "Explain the role of citizens in the policy’s success.",
              "Present the findings as a chart."
            ]
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Answer the following in one or two sentences.\n(a) What is governance?\n(b) How is governance different from government?\n(c) What is meant by public policy?\n(d) Name any four principles of good governance.",
            "answer": {
              "answerKey": "(a) **Governance** is the process through which public decisions are made, implemented and monitored by government and other stakeholders.",
              "schoolMethod": "(a) **Governance** is the process through which public decisions are made, implemented and monitored by government and other stakeholders.\n(b) **Government** refers to the formal institutions and authorities that exercise public power; **governance** is the wider process of decision-making and collective action involving government, citizens and other actors.\n(c) **Public policy** is a deliberate course of action adopted by public authorities to address a public problem or achieve a public objective.\n(d) Four principles are **transparency, accountability, participation and rule of law**. Responsiveness, equity, effectiveness and inclusiveness are also important principles."
            },
            "parts": [
              "Define governance.",
              "Explain how governance differs from government.",
              "Define public policy.",
              "Name any four principles of good governance."
            ]
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "Compare the following and present your answer in a tabular form.\n(a) Government and governance\n(b) Policy and public policy.",
            "answer": {
              "answerKey": "Government means formal public institutions; governance is the wider process of making, implementing and reviewing decisions with multiple stakeholders.",
              "schoolMethod": "| Basis | Government | Governance |\n|---|---|---|\n| Meaning | Formal institutions that exercise public authority | Process of making, implementing and monitoring collective decisions |\n| Participants | Legislature, executive, judiciary and public agencies | Government plus citizens, civil society, businesses and other stakeholders |\n| Focus | Authority, laws and administration | Cooperation, participation, accountability and outcomes |\n| Scope | Comparatively narrower | Wider |\n\n| Basis | Policy | Public policy |\n|---|---|---|\n| Meaning | A plan or course of action adopted by an individual or organisation | A course of action adopted by public authorities to address a public issue |\n| Maker | Individuals, firms, institutions or governments | Government/public authorities, often after consultation |\n| Purpose | Guides decisions within its relevant organisation or area | Promotes public welfare and addresses collective needs |\n| Example | A school's homework policy | Right to Education or a public vaccination programme |"
            },
            "parts": [
              "Compare government and governance in a table.",
              "Compare policy and public policy in a table."
            ]
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "Imagine you have been appointed to advise the district administration on improving governance. You have proposed six points (given below), but the administration decides to prioritise only three areas for improvement. Which three would you recommend as priority areas, and which one out of the three do you feel is the most important?\n(a) Improve drinking water facilities in schools.\n(b) Improve sanitation and public toilets in schools and market areas.\n(c) Provide tricycles for orthopaedically challenged students.\n(d) Install open-area swings and open-air gym in public parks.\n(e) Ensure the vaccination of stray dogs to prevent rabies.\n(f) Ensure distribution of iron and folic acid tablets for female students in schools.",
            "answer": {
              "answerKey": "I would prioritise:\n1. **Improve drinking-water facilities in schools** — safe water is essential for health, concentration and attendance.",
              "schoolMethod": "I would prioritise:\n1. **Improve drinking-water facilities in schools** — safe water is essential for health, concentration and attendance.\n2. **Improve sanitation and public toilets in schools and market areas** — sanitation prevents disease and ensures dignity, especially for girls, children and persons with disabilities.\n3. **Ensure distribution of iron and folic-acid tablets for female students** — when delivered with proper health guidance, this helps address nutritional deficiencies and anaemia.\n\nThe most important immediate priority is **safe drinking water in schools**, because every student needs it daily and unsafe water can cause widespread illness. The other two priorities should also be implemented through a phased plan, with monitoring and consultation with health and education departments."
            },
            "parts": [
              "Select three priority areas from the six proposals.",
              "Explain why each selected area deserves priority.",
              "Identify which of the three is the most important and justify the choice."
            ]
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "Match the policy action point to its corresponding stage in the policy cycle.\n\n| S. no. | Policy action point | Stage of policy cycle (as listed in the textbook) |\n|---|---|---|\n| 1 | Assessing the impact of the policy | Policy implementation |\n| 2 | Putting the policy into action | Policy evaluation |\n| 3 | Framing the legislation | Policy adoption |\n| 4 | Multi-dimensional consultation with stakeholders | Policy formulation |\n| 5 | Addressing a new need of the people | Policy desirability (problem identification) |",
            "answer": {
              "answerKey": "The correct matches are: impact—evaluation; putting into action—implementation; legislation—adoption; stakeholder consultation—formulation; new need—problem identification.",
              "schoolMethod": "Correct matching:\n1. Assessing the impact of the policy — **Policy evaluation**.\n2. Putting the policy into action — **Policy implementation**.\n3. Framing the legislation — **Policy adoption**.\n4. Multi-dimensional consultation with stakeholders — **Policy formulation**.\n5. Addressing a new need of the people — **Policy desirability/problem identification**.\nThe policy cycle therefore moves from identifying a problem to formulating and adopting a response, implementing it and evaluating its results."
            },
            "parts": [
              "Match “assessing the impact of the policy” to the correct policy-cycle stage.",
              "Match “putting the policy into action” to the correct stage.",
              "Match “framing the legislation” to the correct stage.",
              "Match “multi-dimensional consultation with stakeholders” to the correct stage.",
              "Match “addressing a new need of the people” to the correct stage."
            ]
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "Read the following case and answer the given questions.\n\nThe government launches a programme to plant one lakh trees in a city. Funds are allocated, but only a few saplings survive because they are not watered or protected.\n(a) Which stage of the policy cycle appears to be weak?\n(b) Which organisations should coordinate to improve the programme?\n(c) Suggest two measures that could improve the outcome.",
            "answer": {
              "answerKey": "The implementation stage is weak; saplings need suitable planting, watering, protection, coordinated responsibility and survival monitoring.",
              "schoolMethod": "(a) The **implementation** stage is weak. Funds and targets alone do not ensure success; saplings need proper planting, watering, protection and follow-up.\n(b) The Municipal Corporation, Forest Department, urban-development and horticulture departments, local resident associations, schools, NGOs and ward-level officials should coordinate. Local communities can help monitor individual sites.\n(c) Two measures are: (1) assign responsibility for watering, fencing, mulching and maintenance to named teams, with a survival target and regular inspections; and (2) plant suitable native species in the right season and maintain a public record/GIS register of saplings, survival rates and replacement needs."
            },
            "parts": [
              "Identify the weak stage of the policy cycle.",
              "Name the organisations that should coordinate to improve the programme.",
              "Suggest two measures that could improve the outcome."
            ]
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": true,
            "text": "Read each statement carefully. Do you agree or disagree? Give reasons for your answer.\n(a) A good public policy can fail if it is not implemented properly.\n(b) Citizen participation sometimes makes decision-making slower, but it can improve governance.\n(c) Technology alone cannot ensure good governance.",
            "answer": {
              "answerKey": "(a) **Agree.** A well-designed policy may fail if funds are delayed, staff are untrained, coordination is poor or beneficiaries do not receive services.",
              "schoolMethod": "(a) **Agree.** A well-designed policy may fail if funds are delayed, staff are untrained, coordination is poor or beneficiaries do not receive services. Effective implementation and monitoring are essential.\n(b) **Agree.** Consultation may take additional time, but it helps identify local needs, build trust, reduce mistakes and make decisions more legitimate and effective.\n(c) **Agree.** Technology can improve access, speed and transparency, but it cannot replace ethical leadership, capable staff, fair laws, accountability, inclusion and human judgment. Digital systems must also be accessible to people who lack devices or connectivity."
            },
            "parts": [
              "State whether you agree or disagree that a good policy can fail through poor implementation, and give reasons.",
              "State whether citizen participation can slow decisions but improve governance, and give reasons.",
              "Explain why technology alone cannot ensure good governance."
            ]
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": true,
            "text": "Design a public policy.\n\nYou are a member of your school’s student representative body. Identify one issue, for example, plastic waste, water wastage, road safety, energy conservation, or littering in public places. Prepare a simple policy proposal that includes the following aspects of policymaking:\n- The reason for selecting the issue\n- Your proposed solution\n- Who should implement it?\n- How will students participate?\n- How will you know whether the policy has succeeded?\n\nPresent your proposal to the class as a chart or slideshow presentation.",
            "answer": {
              "answerKey": "**School Water-Conservation Policy**\n- **Issue and reason:** Water is wasted through leaking taps and taps left running.",
              "schoolMethod": "**School Water-Conservation Policy**\n- **Issue and reason:** Water is wasted through leaking taps and taps left running. This increases costs and reduces water available for essential use.\n- **Proposed solution:** repair leaks promptly, install push/low-flow taps where feasible, display reminders, collect rainwater where safe and suitable, and monitor daily water use.\n- **Implementers:** school principal, maintenance staff, student council, teachers and the school management committee.\n- **Student participation:** form a water-monitoring team, report leaks, close taps properly, conduct awareness activities and record observations.\n- **Success indicators:** fewer reported leaks, reduced water consumption per student, functioning rainwater-harvesting arrangements and regular publication of monitoring results.\nThe policy should be reviewed every term and improved using feedback."
            },
            "parts": [
              "Identify the issue and explain why it should be addressed.",
              "Describe the proposed solution.",
              "Identify who will implement the policy.",
              "Explain how students will participate.",
              "State how the policy’s success will be measured."
            ]
          }
        ]
      },
      {
        "id": "sec2",
        "title": "THE BIG QUESTIONS — Chapter overview (Textbook p. 81)",
        "questions": [
          {
            "id": "bq1",
            "number": "BQ1",
            "isHard": false,
            "text": "What is governance, and how have its meaning and practice evolved over time?",
            "answer": {
              "answerKey": "Governance is the process of making, implementing and monitoring decisions; it has evolved from traditional institutions to constitutional, participatory democratic systems.",
              "schoolMethod": "Governance is broader than the formal government: it includes the processes through which decisions are made, put into practice and reviewed for public welfare. Indian ideas include Sabhā and Samiti, Rājadharma and the ideal of people-centred rule. Colonial rule changed institutions, but after Independence the Constitution established democratic institutions, rights, accountability and elected representation. Modern governance also involves local bodies, civil society, the media, private organisations and citizens."
            }
          },
          {
            "id": "bq2",
            "number": "BQ2",
            "isHard": false,
            "text": "What is public policy? How does it affect our day-to-day lives, and what makes it public?",
            "answer": {
              "answerKey": "Public policy is government action to address public problems and promote welfare; it is public because it concerns society, uses public authority and often public resources.",
              "schoolMethod": "Public policy is a course of action adopted by government to solve problems, meet people’s needs and promote public welfare. It affects education, health, roads, transport, sanitation, water, safety and the environment. It is public when it addresses issues affecting society as a whole, is formulated or authorised by public institutions, uses public powers or resources and allows citizens to participate or provide feedback. A private school or company policy is not automatically a public policy."
            }
          },
          {
            "id": "bq3",
            "number": "BQ3",
            "isHard": false,
            "text": "What are the various stages of policy-making and policy implementation?",
            "answer": {
              "answerKey": "The policy cycle includes identifying a problem, prioritising it, consulting stakeholders, formulating and adopting a policy, implementing it, monitoring it and evaluating outcomes.",
              "schoolMethod": "A typical policy cycle begins with identifying a public need or problem and deciding its priority. The government gathers evidence and consults citizens, experts and affected groups. It then formulates a proposal, assesses feasibility, and adopts the policy or legal framework. Departments and partners implement it through programmes and schemes. Monitoring checks progress and accountability; evaluation measures outcomes and impact. Feedback may lead to improvement or a revised policy. The cycle is continuous, not a one-time linear event."
            }
          },
          {
            "id": "bq4",
            "number": "BQ4",
            "isHard": false,
            "text": "Who are the major contributors to policy-making and implementation?",
            "answer": {
              "answerKey": "Contributors include citizens, elected representatives, government departments, civil society, experts, media, private organisations and international bodies.",
              "schoolMethod": "Citizens identify needs and provide feedback; elected representatives raise issues and approve laws and budgets; government ministries and local departments design and implement programmes; experts and researchers provide evidence; NGOs and civil society represent communities and monitor outcomes; media informs the public; private organisations may provide skills, technology and resources; and international organisations may offer technical assistance. Their roles differ, but coordination is essential."
            }
          },
          {
            "id": "bq5",
            "number": "BQ5",
            "isHard": false,
            "text": "What role do citizens play in shaping public policy and strengthening good governance?",
            "answer": {
              "answerKey": "Citizens vote, follow laws, identify problems, participate in consultations, use public services responsibly, give feedback and hold authorities accountable.",
              "schoolMethod": "Citizens are not passive recipients of government decisions. They elect representatives, raise local problems, attend public consultations and Gram Sabha meetings, submit suggestions, use grievance-redressal systems, monitor public services and provide feedback. They also follow laws, pay applicable taxes honestly, protect public property and support community initiatives. These actions improve transparency, responsiveness and accountability and help ensure that policies reflect people’s actual needs."
            }
          }
        ]
      },
      {
        "id": "sec3",
        "title": "IN-TEXT QUESTIONS AND ACTIVITIES — Chapter 4 (Textbook pp. 81–102)",
        "questions": [
          {
            "id": "it1",
            "number": "p. 82",
            "isHard": false,
            "text": "Discuss how the town should respond to several days of unusually heavy rainfall.",
            "answer": {
              "answerKey": "An effective response requires coordinated municipal services, road repair, police, schools, health workers, local representatives and residents.",
              "schoolMethod": "1. **People and organisations:** Municipal corporation, Public Works Department, police, schools, health workers, local elected representatives, disaster-management teams, NGOs and residents.\n2. **Why one department is insufficient:** Flooding affects drainage, roads, transport, health, education, power and safety at the same time; each requires specialised staff and resources.\n3. **If departments do not coordinate:** Drainage may remain blocked, ambulances may be delayed, schools may issue conflicting instructions and relief may not reach vulnerable people.\n4. **Citizen role:** Before rainfall, clear household drains where safe and follow alerts; during it, avoid floodwater, help vulnerable neighbours and report hazards; afterwards, maintain hygiene, report damage and support clean-up.\n5. **Effective qualities:** Clear communication, defined responsibilities, timely information, trained staff, accessible shelters, accountability and community participation."
            },
            "parts": [
              "Identify the people and organisations involved in responding to the heavy rainfall.",
              "Explain why a single department cannot solve the problem on its own.",
              "Describe what could happen if departments did not communicate or coordinate.",
              "Explain the role citizens can play before, during and after the rainfall.",
              "List the qualities that make the collective response effective."
            ]
          },
          {
            "id": "it2",
            "number": "p. 83–84",
            "isHard": false,
            "text": "Using the street-lighting example, explain the difference between government and governance. Give other examples from everyday life.",
            "answer": {
              "answerKey": "Government refers to the institutions responsible for public services; governance is the coordinated process of planning, delivering, maintaining and reviewing those services.",
              "schoolMethod": "A municipal corporation or panchayat is part of government and has the authority to provide street lights. Governance includes identifying dark spots with residents, budgeting, installing lights, maintaining them, receiving complaints about faults and checking whether streets become safer. Other examples include: a public school being run by education authorities while governance includes teacher attendance, parent feedback and monitoring learning; or a water department supplying water while governance includes testing quality, repairing leaks and responding to complaints."
            },
            "parts": [
              "Using street lighting, explain the difference between government and governance.",
              "Give other examples from everyday life that illustrate the difference."
            ]
          },
          {
            "id": "it3",
            "number": "p. 85",
            "isHard": false,
            "text": "Find out more about the journey of the Sengol through historical pictures and explain its connection with governance.",
            "answer": {
              "answerKey": "The textbook presents the Sengol as a ceremonial symbol associated with righteous authority, the transfer of power in 1947 and its installation in the new Parliament in 2023.",
              "schoolMethod": "Model response based on the textbook: The Sengol is a ceremonial sceptre associated with the Chola tradition and the idea that authority carries a duty to govern justly. The textbook states that it was presented to Jawaharlal Nehru by Adheenam saints around Independence in August 1947 and was placed in the newly inaugurated Parliament building in 2023. For the visual project, arrange dated photographs and captions in chronological order and explain the values of responsibility, justice and public welfare associated with the symbol. Distinguish the textbook’s account from any additional historical interpretation you may find."
            },
            "parts": [
              "Find historical pictures or reliable sources about the journey of the Sengol.",
              "Explain its historical and cultural significance.",
              "Explain its connection with rulership and good governance."
            ]
          },
          {
            "id": "it16",
            "number": "p. 86",
            "isHard": false,
            "text": "Recall the Sabhā and Samiti mentioned in the Ṛigveda. What role did these institutions play in matters of governance and public welfare?",
            "answer": {
              "answerKey": "The Sabhā and Samiti were important Vedic institutions in which matters concerning governance and public welfare were discussed.",
              "schoolMethod": "The Ṛigveda refers to the **Sabhā** and **Samiti** as important assemblies associated with collective discussion in the Vedic period. They provided settings in which matters of governance and public welfare could be considered. Their reference shows that consultation and deliberation had a place in early Indian political traditions. They should not be described as identical to modern elected legislatures, because their composition, powers and social context were different."
            },
            "parts": [
              "Recall the Sabhā and Samiti mentioned in the Ṛigveda.",
              "Explain their role in governance and public welfare."
            ]
          },
          {
            "id": "it4",
            "number": "p. 87",
            "isHard": false,
            "text": "Select two Indian cities recognised for cleanliness and prepare a visual presentation explaining their good-governance models.",
            "answer": {
              "answerKey": "A presentation should show how local government, residents, markets and civil-society groups coordinate waste segregation, collection, sanitation and public awareness.",
              "schoolMethod": "Use two cities and state the Swachh Survekshan edition or award year being discussed, because rankings change by year. Indore and Surat can be used as illustrative case studies if they match the selected edition. For each city, explain: (i) door-to-door waste collection; (ii) segregation at source; (iii) processing or composting of wet waste; (iv) recycling and responsible disposal of dry waste; (v) public toilets and street cleaning; (vi) citizen complaints and monitoring; and (vii) participation by market associations, resident groups, schools and NGOs. Add photographs, a comparison table and sources."
            },
            "parts": [
              "Select two Indian cities recognised for cleanliness.",
              "Explain the good-governance models used by each city.",
              "Show how local government, citizens and other organisations contribute."
            ]
          },
          {
            "id": "it5",
            "number": "p. 88",
            "isHard": false,
            "text": "Choose a State or Union Territory and prepare a short paper on good-governance initiatives and suggestions for improvement.",
            "answer": {
              "answerKey": "Describe existing e-services, local-government participation, service delivery and grievance systems, then suggest improvements in access, transparency and accountability.",
              "schoolMethod": "Model structure: (1) Name the State/UT and introduce its governance priorities. (2) Describe two or three initiatives, such as online certificates, land-record services, public grievance portals, digital payments, health or education services, and local-government programmes. (3) Explain who implements them and how citizens access them. (4) Identify gaps such as poor connectivity, language barriers, delays or lack of awareness. (5) Suggest help desks, accessible language, public dashboards, timely grievance disposal and regular social audits. Replace the examples with verified initiatives from the State/UT chosen by your group."
            },
            "parts": [
              "Choose one State or Union Territory.",
              "Describe its good-governance initiatives.",
              "Suggest practical improvements to strengthen service delivery and accountability."
            ]
          },
          {
            "id": "it6",
            "number": "p. 88",
            "isHard": false,
            "text": "Why is 25 December observed as National Good Governance Day, and how is it celebrated in your district?",
            "answer": {
              "answerKey": "It is observed on 25 December, the birth anniversary of former Prime Minister Atal Bihari Vajpayee; local activities may include awareness programmes and service-delivery reviews.",
              "schoolMethod": "National Good Governance Day is observed on 25 December because it is the birth anniversary of former Prime Minister Atal Bihari Vajpayee. The day is used to highlight transparent, accountable and citizen-centred administration. Activities may include seminars, public-service camps, awareness drives, grievance-redressal reviews, discussions and pledges. District-level programmes vary, so confirm the actual activities from the district administration’s notice or official website before writing about your own district."
            },
            "parts": [
              "Explain why 25 December is observed as National Good Governance Day.",
              "Find out and report how it is celebrated in your district."
            ]
          },
          {
            "id": "it7",
            "number": "p. 89",
            "isHard": false,
            "text": "Complete the e-governance chart by stating the objective of each initiative and add two initiatives of your State Government.",
            "answer": {
              "answerKey": "UMANG provides access to government services; Aadhaar supports identity verification; GeM supports public procurement; DigiLocker stores digital documents; CPGRAMS handles grievances; APAAR creates a student academic record ID.",
              "schoolMethod": "| Initiative | Main objective |\n|---|---|\n| UMANG | A unified platform to access many Central and participating State government services |\n| Aadhaar | A unique identity number used for identity verification and authentication where legally permitted |\n| GeM | An online marketplace for transparent procurement of goods and services by government buyers |\n| DigiLocker | Secure digital storage and sharing of authentic documents and certificates |\n| CPGRAMS | Centralised online system for submitting and tracking public grievances |\n| APAAR | A unique student identity/academic account intended to help organise and access academic records |\nFor two State initiatives, add the State e-District/service portal and the State land-records or public-grievance portal, using their official names and URLs."
            },
            "parts": [
              "State the objective of UMANG.",
              "State the objective of Aadhaar.",
              "State the objective of GeM.",
              "State the objective of DigiLocker.",
              "State the objective of CPGRAMS.",
              "State the objective of APAAR.",
              "Add two e-governance initiatives undertaken by your State Government."
            ]
          },
          {
            "id": "it8",
            "number": "p. 90",
            "isHard": false,
            "text": "Interview people about six services and compare their experience before and after e-governance.",
            "answer": {
              "answerKey": "Online applications and digital records often reduce visits, paperwork and delays, but depend on internet access, digital skills and reliable systems.",
              "schoolMethod": "Prepare a table for birth certificates, admit cards, marksheets, salary receipt, rail/flight tickets and vehicle registration. Ask each person how the service was obtained earlier, how long it took, how many visits or documents were needed, and how it works now. Common findings: earlier services often required paper forms, queues and repeated visits; digital platforms can allow online applications, status tracking, downloads and cashless payment. However, poor connectivity, lack of devices, language barriers, technical errors and cyber-fraud risks can still exclude users. Record actual interview responses rather than assuming everyone had the same experience."
            },
            "parts": [
              "Interview seniors, teachers, security guards, administrative staff and parents.",
              "Ask about obtaining a birth certificate.",
              "Ask about obtaining an admit card.",
              "Ask about collecting and storing marksheets.",
              "Ask about receiving salary.",
              "Ask about booking rail or flight tickets.",
              "Ask about registering a vehicle.",
              "Find out whether each person had internet and a smartphone or computer.",
              "Compare the problems experienced before e-governance with the experience after its introduction."
            ]
          },
          {
            "id": "it9",
            "number": "p. 92–93",
            "isHard": false,
            "text": "Classify each example as a policy or a public policy and give a reason.",
            "answer": {
              "answerKey": "Government-wide actions such as a sports policy, safe drinking water, municipal waste segregation and child vaccination are public policies; company and housing-society rules are organisational policies.",
              "schoolMethod": "| Example | Classification | Reason |\n|---|---|---|\n| Government introduces a sports policy | Public policy | Government action for a public sector and wider population |\n| Government campaign for safe drinking water for every household | Public policy | Addresses a society-wide public-health need |\n| Company permits work from home twice a week | Organisational policy | Applies to employees of that company |\n| Municipality introduces city waste segregation | Public policy | Addresses a public sanitation and environmental issue |\n| Housing society fixes guest visiting hours | Organisational/community policy | Applies to a limited residential group |\n| Government provides free vaccination for children | Public policy | Protects public health across the community |"
            },
            "parts": [
              "Classify the government sports policy example.",
              "Classify the safe-drinking-water campaign.",
              "Classify the company work-from-home rule.",
              "Classify the municipal waste-segregation initiative.",
              "Classify the housing-society visitor rule.",
              "Classify the government child-vaccination programme.",
              "Give a reason for each classification."
            ]
          },
          {
            "id": "it10",
            "number": "p. 95–96",
            "isHard": false,
            "text": "Your school’s main gate faces a road that connects residential areas and a major market area. There is heavy traffic congestion on the road, especially during morning and afternoon hours. Pedal rickshaws, electric rickshaws, school buses, private vehicles, and pedestrians—all struggle to get their way. Form groups in your class and choose a course of action from the options given below: (1) Form a group of volunteers to regulate traffic in rush hours. (2) Write an application to the principal about the issue. (3) Meet the principal, along with all the class representatives of the school, to discuss the gravity of the situation and then impress upon the principal the need to take up the issue with the local people’s representative so that a traffic signal can be installed. (4) Request the school management to construct and open another gate on the other side of the school. (5) Suggest that the school shift its pick-up and drop-off point to a location slightly away from the main gate. (6) Change school timings so that the school’s opening and closing hours do not coincide with the busiest traffic hours in the market. Answer the follow-up questions about your choice, a better solution, stakeholders and a feedback loop.",
            "answer": {
              "answerKey": "A coordinated plan is preferable: document the congestion, consult the principal and community, involve traffic police and local authorities, organise a safe pick-up zone and staggered dispersal, and review results through a regular feedback process.",
              "schoolMethod": "**1. Choice and reason:** I would choose option 3: class representatives and the principal should document the problem and raise it with the local people’s representative and traffic authorities. This is safer and more likely to produce a lasting, lawful solution than asking students to regulate moving traffic themselves.\n\n**2. Better combined solution:** Conduct a short traffic survey during arrival and dispersal; designate a pick-up/drop-off point away from the gate; stagger dispersal times where feasible; provide a safe pedestrian crossing and clear signs; prevent vehicles from stopping across the gate; and request traffic-police support at peak times. Compare the options: a written application creates a record but may be slow on its own; another gate may be costly and require approval; shifting the pick-up point and staggered timings can reduce congestion more quickly; and a signal may help only if traffic engineers find it suitable. A combination should be selected after a site assessment.\n\n**3. Stakeholders and roles:** The principal and school management coordinate school timings and pick-up arrangements; teachers and class representatives communicate the plan; parents and school-bus operators follow designated routes and timings; traffic police manage traffic and pedestrian safety; the municipal/local authority assesses road markings, crossings, signs and any signal; local residents and market associations share concerns and avoid obstructing the road. Students may share feedback only under adult supervision and must never be placed in the roadway to direct vehicles.\n\n**4. Feedback loop:** Record traffic queues, unsafe crossings, blocked gates and near-misses before the change. Collect feedback from parents, residents, drivers, students and traffic police after implementation. Review the information weekly for the first month, identify what is not working, adjust timings or pick-up arrangements, communicate revisions, and measure the same indicators again. Continue periodic checks so that new problems are detected early."
            },
            "parts": [
              "Which option did you choose and why?",
              "Can you suggest a better solution to address the problem? Compare your suggestion with the other options.",
              "Which stakeholders would be involved in solving the problem through your suggested solution? Explain their roles.",
              "Suggest a feedback loop to ensure that the problem does not recur."
            ]
          },
          {
            "id": "it12",
            "number": "p. 96–97",
            "isHard": true,
            "text": "Read the “A Ramp to Better Healthcare” case study and answer the questions about the policy stages, stakeholders and accessibility improvements for another public building.",
            "answer": {
              "answerKey": "The policy sequence is problem identification, consultation, formulation, approval, implementation, monitoring and evaluation; several public and community stakeholders participate.",
              "schoolMethod": "1. **Stages in sequence:** identify the access problem; consult patients, staff, disability groups and experts; prepare the accessibility plan; obtain government approval and funding; construct the improvements; monitor their use; collect feedback and evaluate whether access has improved.\n2. **Stakeholders:** patients and families, hospital management, Health Department, PWD, district administration, architects, disability-rights organisations, senior citizens and local representatives.\n3. **Local building improvements:** a school, bus station, public office or library may need ramps, lifts, handrails, tactile paths, Braille and high-contrast signs, accessible toilets, reserved parking and clear routes. Ask users with different needs to review the design."
            },
            "parts": [
              "Arrange the stages of the policy process in sequence for upgrading the hospital.",
              "Identify at least three stakeholders involved in solving the problem.",
              "Identify a public building in your locality that could be made more accessible.",
              "Suggest suitable accessibility improvements for that building."
            ]
          },
          {
            "id": "it13",
            "number": "p. 99",
            "isHard": false,
            "text": "In a role-play on the National Education Policy (NEP) 2020, explain how each stakeholder can contribute to its successful implementation.",
            "answer": {
              "answerKey": "Government provides policy, funds and coordination; school leaders organise implementation; teachers teach and assess; parents and students participate; NGOs and media support awareness and accountability.",
              "schoolMethod": "The Union Government sets the national framework, provides guidance and coordinates with States. State governments adapt and implement the policy, allocate resources and monitor schools. Principals prepare school plans and support teachers. Teachers use appropriate pedagogy and assessment. Parents encourage attendance and communicate students’ needs. Students participate actively and provide feedback. NGOs may support inclusion, teacher training and community outreach; journalists can report progress and gaps accurately. Effective implementation requires cooperation rather than the responsibility of one stakeholder alone."
            },
            "parts": [
              "Explain the contribution of the Union and State Governments.",
              "Explain the contribution of school leaders and teachers.",
              "Explain the contribution of parents and students.",
              "Explain how NGOs, communities and the media can support implementation of NEP 2020."
            ]
          },
          {
            "id": "it14",
            "number": "p. 99",
            "isHard": false,
            "text": "What would be the implications if any step in policy-making or implementation were skipped? Give a suitable example.",
            "answer": {
              "answerKey": "Skipping a stage can produce poorly designed, unfair, underfunded or ineffective policies and prevent problems from being identified and corrected.",
              "schoolMethod": "If consultation is skipped, the policy may ignore the needs of affected communities. If evidence and feasibility checks are skipped, the plan may be unrealistic. If adoption or legal approval is bypassed, implementation may lack authority. If departments are not coordinated or resources are not provided, the programme may fail. If monitoring and evaluation are skipped, problems may continue unnoticed. For example, planting one lakh trees without selecting suitable native species, watering them or monitoring survival can result in very few trees surviving."
            },
            "parts": [
              "Explain the consequences of skipping a stage in policy-making or implementation.",
              "Give a suitable example showing how the omission could affect the policy’s success."
            ]
          },
          {
            "id": "it15",
            "number": "p. 102",
            "isHard": false,
            "text": "Answer the following questions about Khelo Bharat Niti 2025.",
            "answer": {
              "answerKey": "Students can participate in sport, promote inclusion and fitness, help organise events, and encourage fair play; schools should create safe sports opportunities and coordinate with relevant ministries.",
              "schoolMethod": "1. **Student role:** Take part in sports, encourage classmates (including girls and students with disabilities), follow fair play, volunteer in supervised events and provide suggestions for improving facilities.\n2. **School as sports ambassador:** Prepare an inclusive sports calendar, identify student talent, provide safe facilities and equipment, train teachers/coaches, organise inter-house and community events, maintain fitness and safety standards, and connect with local sports bodies.\n3. **Ministries:** The Ministry of Youth Affairs and Sports has the lead role. The Ministry of Education and State education departments support school sports; the Ministry of Health and Family Welfare can support fitness and health awareness; and other departments may help with infrastructure, inclusion and community participation. Coordination is needed across levels."
            },
            "parts": [
              "Explain how students can contribute to Khelo Bharat Niti 2025.",
              "Suggest how your school can act as a sports ambassador.",
              "Identify the ministries that should work together and explain their roles."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ch05",
    "number": 5,
    "title": "Managing Your Personal Finances",
    "slug": "managing-your-personal-finances",
    "code": "0908ch05",
    "description": "Introduces personal finance, budgeting, saving, investment, inflation, insurance, responsible financial decisions and household financial planning.",
    "exercises": [
      {
        "id": "sec1",
        "title": "QUESTIONS AND ACTIVITIES",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Why is managing money wisely important for all individuals irrespective of their income?",
            "answer": {
              "answerKey": "Managing money wisely is important at every income level because resources are limited while needs and wants are many.",
              "schoolMethod": "Managing money wisely is important at every income level because resources are limited while needs and wants are many. Careful planning helps people meet essential expenses, avoid unnecessary debt, prepare for emergencies, save for education or other goals and make informed financial decisions. A budget also helps a person understand where money goes and reduce waste. Even a small, regular saving can build financial discipline and security over time."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "How can budgeting help people balance their present needs with their future financial goals? Give examples.",
            "answer": {
              "answerKey": "A budget records expected income and expenses and assigns money to priorities before it is spent.",
              "schoolMethod": "A budget records expected income and expenses and assigns money to priorities before it is spent. It helps distinguish needs from wants, control unnecessary purchases and reserve a portion for future goals. For example, a family can first set aside money for food, rent, school fees and medicines, then save monthly for a child's education or an emergency fund. A student receiving pocket money can plan for transport and stationery while saving a fixed amount for books. A budget therefore balances today's requirements with tomorrow's needs."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "School Reopening Budget Activity\n\nYour parents have given you ₹3,000 to prepare for the new school year. Make a list of the items you need, find out their prices (by visiting local stores, or asking a parent or teacher), and prepare a budget. Calculate the total cost and check whether it stays within ₹3,000.\n- If your total is less than ₹3,000, you may add one additional item of your choice.\n- If your total exceeds ₹3,000, decide which item(s) you can postpone or avoid buying to stay within your budget.\n\nUse the budget template provided and ensure that all expenses are accurately calculated.\n\n| School Reopening Budget | Amount |\n|---|---:|\n| Total Amount | ₹3,000 |\n| School bag | ₹ |\n| Books | ₹ |\n| Uniform and shoes | ₹ |\n| Notebooks | ₹ |\n| Pens | ₹ |\n| Pencils | ₹ |\n| Art supplies | ₹ |\n| Total Expenses | ₹ |\n| Savings | ₹ |",
            "answer": {
              "answerKey": "An illustrative ₹3,000 school budget spends ₹2,700 on essentials and keeps ₹300 as a balance or saving; actual prices should be checked locally.",
              "schoolMethod": "**Illustrative school-reopening budget**\n\n| Item | Amount (₹) |\n|---|---:|\n| School bag | 650 |\n| Books | 700 |\n| Uniform and shoes | 650 |\n| Notebooks | 400 |\n| Pens | 100 |\n| Pencils | 50 |\n| Art supplies | 150 |\n| **Total expenses** | **2,700** |\n| **Savings/balance** | **300** |\n| **Total available** | **3,000** |\n\nThe estimated expenses are ₹2,700, which is within the ₹3,000 budget. The remaining ₹300 is kept as savings for an unexpected school requirement. Actual prices should be checked locally; if prices differ, adjust non-essential purchases while keeping necessary items first."
            },
            "parts": [
              "List the school items required for the new academic year.",
              "Find or estimate the price of each item.",
              "Calculate the total and check whether it stays within ₹3,000.",
              "If the total is below ₹3,000, decide whether to add one useful item.",
              "If the total exceeds ₹3,000, identify items that can be postponed or avoided.",
              "Calculate the remaining balance or savings."
            ]
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Why is saving alone often not enough to build wealth in the long run? How do investments help increase the value of money over time?",
            "answer": {
              "answerKey": "Saving protects money and keeps it available for future needs, but the interest earned in some savings accounts may be lower than inflation.",
              "schoolMethod": "Saving protects money and keeps it available for future needs, but the interest earned in some savings accounts may be lower than inflation. As prices rise, the purchasing power of money can fall. Investments such as fixed deposits, government securities, bonds, mutual funds and shares may offer returns that help money grow over time. However, returns are not guaranteed for all investments and risk differs. A suitable plan should consider the investor's goals, time period, liquidity needs and ability to bear losses. Emergency savings should generally be kept accessible and relatively safe."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "Investment Planning Activity\n\nSuppose you received cash gifts worth ₹3,000 on your last birthday and decided to save ₹1,500. With the help of your teacher, calculate the returns you might have earned if you had invested this amount in different combinations of investments. For example, what returns would you have received if you had invested ₹500 in a fixed deposit, ₹800 in the stock market, and ₹200 in gold? Try other combinations and find information on the returns from different investment options using reliable sources, such as newspapers, magazines, or official websites. Based on your findings, prepare an investment plan explaining why you think each investment option is suitable or unsuitable.",
            "answer": {
              "answerKey": "Using illustrative one-year assumptions—6.5% for a fixed deposit, an 8% rise in the stock investment and a 5% rise in gold—the example portfolio of ₹500, ₹800 and ₹200 would be worth about ₹1,606.50, a hypothetical gain of ₹106.50. Actual stock and gold returns can be negative, and FD rates vary.",
              "schoolMethod": "**Illustrative one-year calculation (the rates below are assumptions for demonstrating the method, not current quotations or guaranteed returns):**\n\n| Investment | Amount invested | Assumed one-year return | Gain/loss | Value after one year |\n|---|---:|---:|---:|---:|\n| Bank fixed deposit | ₹500 | 6.5% interest | +₹32.50 | ₹532.50 |\n| Stock-market investment | ₹800 | 8% rise in value | +₹64.00 | ₹864.00 |\n| Gold | ₹200 | 5% rise in price | +₹10.00 | ₹210.00 |\n| **Total** | **₹1,500** | — | **+₹106.50** | **₹1,606.50** |\n\nFor the fixed deposit, interest = ₹500 × 6.5/100 = **₹32.50**. For the stock-market example, gain = ₹800 × 8/100 = **₹64**. For gold, gain = ₹200 × 5/100 = **₹10**. Total illustrative gain = ₹32.50 + ₹64 + ₹10 = **₹106.50**. The assumed portfolio return is 7.1% for the year (₹106.50 ÷ ₹1,500 × 100).\n\n**Why these choices may or may not be suitable:** A fixed deposit generally offers a more predictable interest rate if held according to its terms, although early withdrawal can involve a penalty. Shares or equity funds may offer higher long-term growth but can fall sharply and are unsuitable for money that must be available soon. Gold can diversify a portfolio, but its price fluctuates and it does not pay regular interest. An investor should compare time horizon, risk, liquidity, costs and tax treatment.\n\n**Important:** Stock-market and gold returns are not fixed. If their values fall, the investor may lose money. For the activity, replace the assumed rates with figures collected on the same date from reliable sources, record the source and period, and calculate each gain or loss using `Gain/Loss = Amount invested × Return rate ÷ 100`. A minor should involve a parent or guardian and follow the applicable rules; this is a classroom example, not an investment recommendation."
            },
            "parts": [
              "Calculate the return on each investment option in the example portfolio.",
              "Try other combinations of fixed deposits, shares and gold.",
              "Find rates or returns from reliable sources and record the date and period.",
              "Prepare an investment plan and explain why each option is suitable or unsuitable."
            ]
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "How does inflation affect the value of money over time? Why should people consider inflation while making financial decisions?",
            "answer": {
              "answerKey": "Inflation is a sustained rise in the general price level.",
              "schoolMethod": "Inflation is a sustained rise in the general price level. When prices rise, the same amount of money buys fewer goods and services; therefore, its purchasing power decreases. For example, if an item costs ₹100 today and its price rises by 5%, it will cost ₹105 after one year. People should consider inflation while planning education, healthcare and retirement expenses, comparing investment returns and deciding how much to save. The return on an investment should be assessed after accounting for inflation, taxes and risk."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "Different investment options involve different levels of risk and return. Do you think taking higher risks is always the best way to earn higher returns? How should a person decide which investment option is most suitable for them?",
            "answer": {
              "answerKey": "No. Higher-risk investments may offer the possibility of higher returns, but they can also cause larger losses; higher returns are never guaranteed.",
              "schoolMethod": "No. Higher-risk investments may offer the possibility of higher returns, but they can also cause larger losses; higher returns are never guaranteed. A person should choose investments by considering:\n1. Financial goal and amount required.\n2. Time horizon — when the money will be needed.\n3. Risk tolerance and ability to absorb losses.\n4. Need for liquidity and emergency savings.\n5. Diversification across suitable assets.\n6. Costs, taxes, safety, regulation and reliability of the provider.\nA short-term essential goal generally needs safer and more liquid options, while a long-term goal may allow some exposure to market risk. Advice should be taken from qualified, regulated professionals where necessary."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "Why do people buy insurance policies even though they may never face a major loss? How does insurance provide financial security?",
            "answer": {
              "answerKey": "People buy insurance to protect themselves against uncertain events that could cause large financial losses.",
              "schoolMethod": "People buy insurance to protect themselves against uncertain events that could cause large financial losses. Many policyholders contribute premiums to a common pool, from which the insurer pays eligible claims according to policy terms. Health insurance can help meet covered medical costs; life insurance can provide financial support to dependants after the insured person's death; and motor or property insurance can cover specified losses. Although a person may never make a claim, insurance transfers or reduces the financial impact of specified risks. Policyholders must understand exclusions, limits, waiting periods and premium obligations."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": true,
            "text": "Imagine your family receives ₹1,00,000 from farming, a small business, livestock sales, and savings. Help your family decide how to use the money wisely.\n\n**Step 1: Prepare a Budget**\nAllocate the ₹1,00,000 among the following categories: savings, education, household expenses, health and emergency fund, farm or business investment, home improvement, festivals and recreation, and other. Show the amount and percentage for each category. The total must be ₹1,00,000 and 100%.\n\n**Step 2: Needs vs Wants**\nClassify each expense as a need or a want and give a reason. Examples: school fees; new mobile phone; better seeds or livestock feed; festival celebrations; water storage tank.\n\n**Step 3: Save for the Future**\nSuppose your family saves ₹30,000 at 8% compound interest per year. Using the formula A = P(1 + r)ⁿ, where A is the amount, P is the principal, r is the rate of compound interest and n is the number of years, calculate (1) the amount after 5 years and (2) the interest earned.\n\n**Step 4: Save First, Spend Later**\nMany financial experts recommend: Expenses = Income – Savings. If your family receives ₹1,00,000 and saves ₹20,000 first, only ₹80,000 is available for spending. This helps ensure that future needs and emergencies can be met.\n\n**Step 5: Reflect**\n(1) What percentage of the money did you save? (2) Which expenses were needs and which were wants? (3) How can savings improve a family’s financial security? (4) How does compound interest help money grow?\n\n**Challenge:** Create a pie chart showing how the ₹1,00,000 was allocated across different categories.",
            "answer": {
              "answerKey": "The sample budget saves ₹10,000 (10%); ₹30,000 compounded annually at 8% for five years grows to about ₹44,080, earning about ₹14,080 interest.",
              "schoolMethod": "**Step 1 — Illustrative budget**\n\n| Category | Amount (₹) | Percentage |\n|---|---:|---:|\n| Savings | 10,000 | 10% |\n| Education | 12,000 | 12% |\n| Household expenses | 25,000 | 25% |\n| Health/emergency fund | 10,000 | 10% |\n| Farm/business investment | 25,000 | 25% |\n| Home improvement | 8,000 | 8% |\n| Festivals/recreation | 5,000 | 5% |\n| Other | 5,000 | 5% |\n| **Total** | **1,00,000** | **100%** |\n\n**Step 2 — Needs and wants:** School fees are a need because education is essential. Better seeds or livestock feed are productive needs for a farming/livestock household. A water-storage tank may be a need where reliable water access is a problem. A new mobile phone is generally a want if the existing phone works; festival celebrations are usually discretionary wants, although modest cultural participation may be important to the family.\n\n**Step 3 — Compound interest:** P = ₹30,000, r = 0.08, n = 5.\nA = P(1 + r)^n = 30,000 × (1.08)^5 = 30,000 × 1.4693280768 = **₹44,079.84** (approximately ₹44,080).\nInterest = A − P = ₹44,079.84 − ₹30,000 = **₹14,079.84** (approximately ₹14,080).\n\n**Step 4 — Save first:** If ₹20,000 is saved from ₹1,00,000 first, the amount available for spending is ₹80,000.\n\n**Step 5 — Reflection:** In the sample budget, ₹10,000 is saved, which is **10%** of the total. School fees, essential household costs, health needs and productive farm inputs are needs; a new phone and optional recreation are wants. Savings provide funds for emergencies and future goals. Compound interest earns returns on both the original principal and previously accumulated interest, so money can grow faster over time. The sample allocation is illustrative and should be adjusted to the family's actual needs and income."
            },
            "parts": [
              "Allocate the ₹1,00,000 among the listed categories and show both amounts and percentages.",
              "Classify each expense as a need or a want and justify the classification.",
              "Calculate the five-year compound amount and interest on ₹30,000 at 8% per year.",
              "Apply the “save first, spend later” approach to the ₹1,00,000 income example.",
              "Answer the four reflection questions on savings, needs and wants, security and compound interest.",
              "Create a pie chart showing the allocation."
            ]
          }
        ]
      },
      {
        "id": "sec2",
        "title": "THE BIG QUESTIONS — Chapter overview (Textbook p. 107)",
        "questions": [
          {
            "id": "bq1",
            "number": "BQ1",
            "isHard": false,
            "text": "What is personal finance and why is it important for individuals?",
            "answer": {
              "answerKey": "Personal finance is the planning and management of income, spending, saving, investment, borrowing and protection to meet present and future needs.",
              "schoolMethod": "Personal finance means making informed decisions about how money is earned, spent, saved, invested and protected. It helps individuals and families meet daily needs, plan for education or housing, prepare for emergencies, manage debt, protect assets and achieve long-term goals. A budget and suitable saving and investment decisions reduce waste and improve financial security, whatever a person’s income level."
            }
          },
          {
            "id": "bq2",
            "number": "BQ2",
            "isHard": false,
            "text": "What are the pillars of personal finance?",
            "answer": {
              "answerKey": "The five pillars are income, budgeting, saving, investing, and protection and risk management.",
              "schoolMethod": "1. **Income:** money received from work, business, rent, interest or other sources.\n2. **Budgeting:** planning income and expenses and prioritising needs.\n3. **Saving:** setting aside money for future goals and emergencies.\n4. **Investing:** putting savings into suitable assets to seek growth or income.\n5. **Protection and risk management:** managing debt and using suitable insurance or other safeguards against financial loss."
            }
          },
          {
            "id": "bq3",
            "number": "BQ3",
            "isHard": false,
            "text": "What are some common savings and investment options?",
            "answer": {
              "answerKey": "Options include bank or post-office deposits, PPF and small-savings schemes, bonds, shares and mutual funds; each has different risks, returns and liquidity.",
              "schoolMethod": "Savings options include savings accounts, recurring deposits, fixed deposits and government-backed small-savings schemes such as PPF and NSC. Investment options include government or corporate bonds, shares and mutual funds. A person should compare safety, expected return, risk, liquidity, time horizon, fees and tax treatment. Returns are not guaranteed for market-linked products, and investment choices should match the person’s goals and ability to bear losses."
            }
          },
          {
            "id": "bq4",
            "number": "BQ4",
            "isHard": false,
            "text": "How can you protect your savings and assets?",
            "answer": {
              "answerKey": "Protection includes emergency savings, appropriate insurance, responsible borrowing, secure financial practices and avoiding fraud.",
              "schoolMethod": "Individuals can protect savings by maintaining an emergency fund, keeping money with regulated financial institutions, using strong passwords and two-factor authentication, never sharing OTPs or PINs, checking statements and avoiding suspicious offers. Suitable health, life, motor, home or crop insurance can reduce the impact of covered losses. Borrow only when necessary and ensure that EMIs are affordable. Read policy documents and loan terms carefully and seek qualified advice for major decisions."
            }
          },
          {
            "id": "bq5",
            "number": "BQ5",
            "isHard": false,
            "text": "What is income tax?",
            "answer": {
              "answerKey": "Income tax is a direct tax levied on taxable income under the law; it helps finance public services and infrastructure.",
              "schoolMethod": "Income tax is a direct tax paid by individuals or entities on taxable income according to the applicable law and tax regime. Taxable income is calculated after permitted deductions or adjustments, and rates may be structured in slabs. Revenue from income tax helps fund public services such as education, healthcare, roads, defence and other infrastructure. Tax rules, slabs, exemptions and filing requirements change, so real returns should be prepared using current official information."
            }
          }
        ]
      },
      {
        "id": "sec3",
        "title": "IN-TEXT QUESTIONS AND ACTIVITIES — Chapter 5 (Textbook pp. 107–120)",
        "questions": [
          {
            "id": "it1",
            "number": "p. 107",
            "isHard": false,
            "text": "Reflect on how you use pocket money or money received during festivals and special occasions.",
            "answer": {
              "answerKey": "A balanced approach is to plan spending, save part of the money, keep savings safely and set goals for larger purchases.",
              "schoolMethod": "Model response: I divide the money into three parts: essential or planned spending, savings for a future goal and a small amount for optional treats. I keep savings in a safe place with the help of a parent or guardian and record what I spend. For travel, stationery and canteen purchases, I estimate the cost beforehand and avoid spending the entire amount immediately. The exact amounts should reflect the student’s real circumstances."
            },
            "parts": [
              "Reflect on how you use pocket money or money received during festivals and special occasions.",
              "Explain whether you spend or save it immediately.",
              "Describe where you keep savings, such as a piggybank or another safe option.",
              "Explain how you manage daily expenses and plan a saving goal."
            ]
          },
          {
            "id": "it2",
            "number": "p. 108",
            "isHard": false,
            "text": "Have you thought about earning your own money? What skills would you need and what work would you choose?",
            "answer": {
              "answerKey": "Useful skills include communication, subject knowledge, digital literacy, creativity and reliability; any activity must be age-appropriate and lawful.",
              "schoolMethod": "Model response: A student could develop skills such as explaining school subjects, designing simple posters, basic coding, craft-making or helping with a supervised family/community project. The most important requirements are honesty, punctuality, communication, problem-solving and safe use of technology. Any paid activity by a young person must follow applicable child-protection and labour laws and be approved by a parent or guardian; education and safety must come first."
            },
            "parts": [
              "Consider whether you have thought about earning your own money.",
              "Identify the skills you would need.",
              "Suggest suitable work you could choose, keeping your age, safety and school responsibilities in mind."
            ]
          },
          {
            "id": "it3",
            "number": "p. 109",
            "isHard": false,
            "text": "Set a financial goal by answering the four questions given in the textbook.",
            "answer": {
              "answerKey": "A good goal states what is needed, the amount, a deadline and the regular steps required to achieve it.",
              "schoolMethod": "Model goal: I want to buy a badminton racket costing ₹1,200. I need ₹1,200 and would like to buy it in six months. I will save ₹200 each month, compare prices before buying and avoid unnecessary spending. The goal is specific, measurable and time-bound. Replace the product, amount and deadline with your own realistic goal."
            },
            "parts": [
              "What do I want to achieve?",
              "How much money will I need?",
              "By when do I want to achieve this goal?",
              "What steps can help me reach this goal?"
            ]
          },
          {
            "id": "it4",
            "number": "p. 109",
            "isHard": false,
            "text": "You and your friends need new badminton rackets for a tournament. How would you manage the budget?",
            "answer": {
              "answerKey": "Estimate the total cost, compare prices, use planned savings where possible and reduce non-essential expenses rather than borrowing unnecessarily.",
              "schoolMethod": "First find the number of rackets required and compare prices and quality at different shops. Calculate the total cost, including any necessary accessories. Decide how much each person can contribute and whether existing savings are sufficient. If the amount is too high, choose a durable lower-cost option or postpone non-essential purchases. Borrowing should be considered only with parental guidance and a clear repayment plan. Record the expenses so that the group does not exceed its budget."
            },
            "parts": [
              "Estimate the total cost of the badminton rackets needed for the tournament.",
              "Explain how you would manage the budget.",
              "Suggest expenses that could be reduced and state whether borrowing would be appropriate."
            ]
          },
          {
            "id": "it5",
            "number": "p. 109",
            "isHard": false,
            "text": "Prepare a weekly or monthly budget using the template referred to on page 122.",
            "answer": {
              "answerKey": "List expected income, classify needs and wants, estimate each expense, calculate the total and set aside savings before discretionary spending.",
              "schoolMethod": "Model weekly budget (illustrative): money available ₹500; travel ₹150; stationery ₹80; meals/snacks ₹100; school activities ₹50; savings ₹100; other ₹20. Total = ₹500. A monthly budget should use actual amounts and include regular as well as occasional costs. If expenses exceed income, review wants first, compare prices and adjust the plan rather than using unplanned debt."
            },
            "parts": [
              "Prepare a weekly or monthly budget using the template referred to on page 122.",
              "List the sources of income or money available during the chosen period.",
              "Classify expenses into needs and wants, and distinguish fixed from variable expenses where appropriate.",
              "Set aside a realistic amount for savings and check that total planned expenses do not exceed available income."
            ]
          },
          {
            "id": "it6",
            "number": "p. 111",
            "isHard": false,
            "text": "Reflect on receiving ₹100, spending on needs or wants, saving first and whether low-income people can save.",
            "answer": {
              "answerKey": "Save a realistic portion if possible, prioritise needs over wants and remember that even small, regular savings can help when income is limited.",
              "schoolMethod": "Model response: I would first consider whether I have an immediate need, then save a portion of the ₹100 and use the remainder for a necessary or planned purchase. Needs such as food, transport or school supplies should generally come before wants such as an extra treat. “Save first, spend later” encourages discipline, but the amount must be realistic after essential expenses. People with low incomes may save small amounts when possible, but they also need fair wages, affordable services and protection from emergencies; saving is not equally easy for everyone."
            },
            "parts": [
              "What would you do if you received ₹100 today? Would you save some or all of it, or spend it right away?",
              "Would you prefer spending the money on a want or a need?",
              "Do you agree with the suggestion to save first and spend what is left?",
              "Can individuals with low income also save? Why or why not?"
            ]
          },
          {
            "id": "it7",
            "number": "p. 112",
            "isHard": false,
            "text": "Why are the curves in Fig. 5.4 flatter at first and steeper in later years? Find the fixed-deposit rates offered by a bank.",
            "answer": {
              "answerKey": "The curves steepen because compound returns are earned on both the original savings and previously earned returns; FD rates vary by bank and tenure.",
              "schoolMethod": "At the beginning, the investment base is small, so the annual addition is modest. As returns are reinvested, future returns are earned on a larger balance, producing compound growth and a steeper curve. For the second task, compare current fixed-deposit rates from the official websites of two or more banks. Record the date checked, deposit period, general-customer rate and senior-citizen rate where applicable. Rates change, so do not treat an old textbook figure as a current offer."
            },
            "parts": [
              "Explain why the curves in Fig. 5.4 are flatter in the early years and steeper later.",
              "Find fixed-deposit rates offered by a bank.",
              "Record the date, tenure and relevant customer category when comparing rates."
            ]
          },
          {
            "id": "it8",
            "number": "p. 114",
            "isHard": false,
            "text": "Why does the BSE SENSEX fluctuate over short periods even though the graph may rise over the long term?",
            "answer": {
              "answerKey": "Short-term changes reflect company results, economic data, interest rates, inflation, global events, investor expectations and market sentiment.",
              "schoolMethod": "Share prices change as investors respond to information and expectations. Short-term fluctuations can be caused by company profits or losses, policy announcements, interest-rate changes, inflation, exchange rates, global crises, elections, natural disasters and changes in investor confidence. Over long periods, economic growth, business expansion and rising corporate earnings may contribute to an upward trend, but the market does not rise every year and past performance does not guarantee future returns."
            },
            "parts": [
              "Explain why the BSE SENSEX fluctuates over short periods.",
              "Explain why the long-term graph may show a different overall trend."
            ]
          },
          {
            "id": "it9",
            "number": "p. 115",
            "isHard": false,
            "text": "Why do mutual-fund advertisements include the warning that investments are subject to market risks?",
            "answer": {
              "answerKey": "The warning reminds investors that mutual-fund values can rise or fall and returns are not guaranteed; they must read scheme documents before investing.",
              "schoolMethod": "Mutual funds invest in market-linked assets such as shares and bonds. Their value may fall due to company performance, interest rates, economic conditions or market volatility, and investors can lose part of their money. The warning communicates that returns are not guaranteed and that investors should understand the scheme’s objective, risk level, asset mix, fees, time horizon and exit conditions before investing. Diversification can reduce some risks but cannot remove market risk."
            },
            "parts": [
              "Explain why mutual-fund advertisements carry the warning that investments are subject to market risks.",
              "Describe what an investor should understand before investing."
            ]
          },
          {
            "id": "it10",
            "number": "p. 117",
            "isHard": false,
            "text": "Why might a family buy something on EMI even if it costs more in the long run? Can too many EMIs affect savings and emergency funds?",
            "answer": {
              "answerKey": "EMIs spread the cost over time but add interest and obligations; too many EMIs reduce disposable income and can weaken emergency savings.",
              "schoolMethod": "A family may choose an EMI because it cannot or does not want to pay the full price at once, because the item is urgently needed, or because instalments fit its monthly cash flow. However, the total amount paid includes interest and possibly fees. Multiple EMIs can consume a large share of income, leaving less money for savings, essentials and emergencies. Before borrowing, compare the total repayment, interest rate, fees, loan duration and affordability."
            },
            "parts": [
              "Explain why a family might choose to buy something on EMI even if the total cost is higher.",
              "Explain how too many EMIs can affect savings and emergency funds."
            ]
          },
          {
            "id": "it11",
            "number": "p. 120",
            "isHard": false,
            "text": "Sai’s taxable income is ₹3,80,000. How much income tax does Sai pay under the tax slabs shown in the textbook? Also prepare a short report on how to file an income-tax return.",
            "answer": {
              "answerKey": "Under the textbook’s FY 2025–26 slab table, taxable income up to ₹4,00,000 is taxed at 0%, so Sai’s tax is ₹0 under that example.",
              "schoolMethod": "**Calculation using the textbook table:** Sai’s taxable income = ₹3,80,000. The first slab is “up to ₹4,00,000” at 0%. Therefore, tax = ₹3,80,000 × 0% = **₹0** under the table printed in the textbook. This is a classroom calculation, not a statement about every filing obligation or a substitute for current tax rules.\n**Model report on filing an income-tax return:** A taxpayer gathers PAN and income details, salary or interest statements, tax-deduction information and the relevant annual tax statement. They select the applicable assessment year and tax regime, calculate income and permitted deductions, complete the return on the official Income Tax e-Filing portal, check the entries, submit the return and complete e-verification. They save the acknowledgement and respond to any official notice. Current rules, forms, deadlines and filing requirements should be checked on the official portal or with a qualified tax professional."
            },
            "parts": [
              "Calculate Sai’s income tax under the tax slabs shown in the textbook for taxable income of ₹3,80,000.",
              "Prepare the requested report on income tax and the Income Tax Return (ITR), using the textbook’s assumptions."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ch06",
    "number": 6,
    "title": "From Ideas to Startups",
    "slug": "from-ideas-to-startups",
    "code": "0908ch06",
    "description": "Introduces entrepreneurship, business functions, business planning, market research, financial planning, innovation and the social responsibilities of enterprises.",
    "exercises": [
      {
        "id": "sec1",
        "title": "QUESTIONS AND ACTIVITIES",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Explain why a business can fail even with a great idea if one functional area [finance, human resources (HR), operations, or marketing] is weak. If you were running a bakery, which functional area would you prioritise first and why?",
            "answer": {
              "answerKey": "A business depends on several connected functional areas.",
              "schoolMethod": "A business depends on several connected functional areas. Weak finance can cause cash shortages; weak human resources can lead to poor service; weak operations can cause low quality or delayed production; and weak marketing can leave products unsold. A promising idea cannot compensate for persistent failures in these areas.\nFor a bakery, I would first establish **operations and production quality**: safe food handling, consistent recipes, reliable ingredients and timely preparation are essential. I would simultaneously prepare a basic cash-flow budget and test local demand. Once quality and supply are reliable, marketing and expansion can be strengthened."
            },
            "parts": [
              "Explain why a business can fail even when its idea is good if one functional area is weak.",
              "State which functional area you would prioritise first when running a bakery and explain why."
            ]
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Do you think innovation alone is enough to make a business successful? Why or why not?",
            "answer": {
              "answerKey": "No. Innovation can create a useful or distinctive product, but success also depends on customer demand, product quality, affordable pricing, finance, skilled employees, reliable operations, marketing, legal compliance and customer service.",
              "schoolMethod": "No. Innovation can create a useful or distinctive product, but success also depends on customer demand, product quality, affordable pricing, finance, skilled employees, reliable operations, marketing, legal compliance and customer service. A technically new product may fail if customers do not need it or cannot afford it. A business must test its idea, understand the market, manage costs and adapt using customer feedback. Innovation is important, but it must be supported by effective execution."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "“A business plan is a dynamic roadmap for a startup.” Explain this statement with suitable examples. When should one change the business plan?",
            "answer": {
              "answerKey": "A business plan is a roadmap because it sets out the business idea, target customers, product, resources, operations, marketing, costs, expected revenue, risks and goals.",
              "schoolMethod": "A business plan is a roadmap because it sets out the business idea, target customers, product, resources, operations, marketing, costs, expected revenue, risks and goals. It is dynamic because actual conditions can differ from initial assumptions. For example, a bakery may plan to sell mainly cakes but discover greater demand for affordable snacks; it may then adjust its product mix and marketing. A plan should be revised when customer preferences change, costs or suppliers change, sales differ from forecasts, competitors enter, technology changes, regulations are updated or the business expands. Changes should be based on evidence and careful financial analysis."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Do you think every entrepreneur should think about the impact of their goods or services on society and the environment? Explain using relevant examples.",
            "answer": {
              "answerKey": "Yes. Businesses use shared resources and affect workers, customers, communities and the environment.",
              "schoolMethod": "Yes. Businesses use shared resources and affect workers, customers, communities and the environment. Entrepreneurs should provide safe products, treat employees fairly, follow laws, reduce waste and pollution and use resources responsibly. For example, a food business can use safe ingredients and reduce food waste; a clothing business can improve working conditions and use durable materials; and a delivery service can optimise routes and use recyclable packaging. Responsible practices protect public health and the environment, build customer trust and support long-term business success."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "In 1931, two brothers, Digambar and Govind Dandekar, started a small business in South Mumbai selling ink powder. They began with limited resources, using recycled glass bottles to sell liquid ink. At first, they faced financial problems and struggled to convince customers to trust their products. Instead of giving up, they focused on providing good-quality stationery at affordable prices. As the business grew, they noticed that artists in India did not have access to good art materials. Seeing this as an opportunity, they travelled to Glasgow to study colour chemistry and improve their products. After returning to India, they set up a laboratory to develop colours and art supplies suited to Indian needs. Over time, the company expanded into pencils, crayons, geometry boxes, and paints, eventually becoming a well-known brand.\n\nAnswer the following:\n- What entrepreneurial qualities did the Dandekar brothers display?\n- What opportunity did they identify in the market?\n- Was travelling to Glasgow a risky decision?\n- Which functional area helped the company improve its products?\n- How did they serve society apart from earning profits?",
            "answer": {
              "answerKey": "1. **Qualities:** perseverance, initiative, resourcefulness, willingness to learn, innovation, long-term vision and ability to recognise opportunities.",
              "schoolMethod": "1. **Qualities:** perseverance, initiative, resourcefulness, willingness to learn, innovation, long-term vision and ability to recognise opportunities. They began with limited resources, used recycled bottles and continued despite financial and trust-related difficulties.\n2. **Opportunity:** they recognised the lack of good-quality art materials suited to Indian users and the potential to develop affordable stationery and colours locally.\n3. **Risk:** travelling to Glasgow required money, time and uncertainty, so it was a calculated risk. They undertook it to gain knowledge of colour chemistry and improve their products.\n4. **Functional area:** research and development within the operations/product-development function helped improve the quality and range of products.\n5. **Social contribution:** they made useful stationery and art materials more accessible, supported education and creativity, developed local production capabilities and created employment as the enterprise expanded."
            },
            "parts": [
              "Identify the entrepreneurial qualities displayed by the Dandekar brothers.",
              "Explain the market opportunity they identified.",
              "Discuss whether travelling to Glasgow was a risky decision.",
              "Identify the functional area that helped improve their products.",
              "Explain how they served society apart from earning profits."
            ]
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "How do you think entrepreneurship is important for India’s goal of becoming a developed nation by 2047?",
            "answer": {
              "answerKey": "Entrepreneurship creates jobs, promotes innovation, solves problems, develops markets and contributes to India's development by 2047.",
              "schoolMethod": "Entrepreneurship can support the vision of a developed India by 2047 in several ways:\n1. It creates jobs and self-employment, including opportunities in smaller towns and rural areas.\n2. It encourages innovation and develops solutions in agriculture, health, education, energy and technology.\n3. It increases productivity, competition and the supply of goods and services.\n4. It supports local manufacturing, exports and stronger supply chains.\n5. It can empower women, young people and underserved communities through inclusive enterprises.\n6. Responsible startups can develop sustainable technologies and address social and environmental problems.\nFor these benefits to be realised, entrepreneurs need skills, finance, infrastructure, fair regulation and access to markets."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "Choose a product or service and develop a business plan for it using the following template:\n- Business name\n- Business idea\n- Target customers\n- Product/service and price\n- Marketing idea\n- Basic cost and expected profit.",
            "answer": {
              "answerKey": "A sample plan for a school refreshment service identifies customers, product, price, marketing, costs and expected profit.",
              "schoolMethod": "**Business name:** FreshSip School Refreshments.\n**Business idea:** Prepare hygienic, affordable seasonal fruit drinks and lemon water for school events, using reusable or recyclable serving materials.\n**Target customers:** students, teachers, parents and visitors at school functions.\n**Product and price:** lemon water at ₹20 per glass and seasonal fruit drink at ₹30 per glass.\n**Marketing:** attractive posters, a clean stall, clear price display, word-of-mouth and a small tasting sample where permitted.\n**Illustrative one-event financial plan:**\n- Ingredients: ₹900\n- Cups/serving materials: ₹250\n- Ice, water and hygiene supplies: ₹200\n- Stall/display and other costs: ₹150\n- **Total cost: ₹1,500**\n- Expected sales: 60 lemon waters × ₹20 = ₹1,200; 30 fruit drinks × ₹30 = ₹900.\n- **Expected revenue: ₹2,100**\n- **Expected profit: ₹2,100 − ₹1,500 = ₹600.**\nThese are estimates; actual sales, wastage and school permissions must be considered."
            },
            "parts": [
              "Choose a product or service and give it a business name.",
              "Describe the business idea and target customers.",
              "State the product or service and its price.",
              "Suggest a marketing idea.",
              "Estimate basic costs, expected revenue and expected profit."
            ]
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "Find out about various government schemes to promote entrepreneurs in India. Learn about the eligibility requirements of these schemes. Prepare a write-up and discuss in the class.",
            "answer": {
              "answerKey": "Relevant support includes Startup India, MUDRA, PMEGP, Stand-Up India and PM Vishwakarma, subject to each scheme's eligibility rules.",
              "schoolMethod": "Examples of Indian entrepreneurship-support initiatives include:\n1. **Startup India:** provides recognition and access to specified benefits to eligible innovative entities that meet the government's conditions, including limits relating to age of the entity, turnover and innovation/scalability. Recognition is not automatic for every new business.\n2. **Pradhan Mantri MUDRA Yojana (PMMY):** facilitates loans through lending institutions for eligible non-corporate, non-farm small/micro enterprises. Loan approval depends on lender assessment and applicable scheme rules.\n3. **Prime Minister's Employment Generation Programme (PMEGP):** supports eligible individuals and institutions establishing new micro-enterprises, subject to age, education, project-cost, activity and other guidelines; implementing agencies and banks assess applications.\n4. **Stand-Up India:** supports eligible SC/ST and women entrepreneurs setting up greenfield enterprises through bank loans, subject to scheme conditions.\n5. **PM Vishwakarma:** supports eligible traditional artisans and craftspeople in specified trades through recognition, training, toolkit support and credit-related assistance, subject to verification and scheme rules.\nApplicants should check current eligibility, documents, limits and application procedures on the official government portals because scheme rules can change."
            },
            "parts": [
              "Find government schemes that promote entrepreneurship in India.",
              "Research the eligibility requirements of each selected scheme.",
              "Prepare a write-up and discuss it in class."
            ]
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": true,
            "text": "Take any popular brand and identify:\n- The problem it tackles\n- Its initial target customers\n- How it differentiated itself from other competitors or brands\n- The resources it may have started with.",
            "answer": {
              "answerKey": "**Example: Amul**\n- **Problem addressed:** linking milk producers with organised markets and supplying consumers with reliable dairy products.",
              "schoolMethod": "**Example: Amul**\n- **Problem addressed:** linking milk producers with organised markets and supplying consumers with reliable dairy products.\n- **Initial target customers:** households and consumers needing milk and dairy products; the cooperative structure also served milk-producing farmers.\n- **Differentiation:** a farmer-owned cooperative model, organised milk procurement, processing and distribution, quality control and a recognisable brand.\n- **Initial resources:** milk supplied by local farmers, collection centres, chilling and processing facilities, transport, trained workers, cooperative organisation, finance and distribution networks.\nThe example shows that a brand's success depends not only on advertising but also on a reliable supply chain and a value proposition for both producers and consumers."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": true,
            "text": "Over the next week, observe your daily routine at school and home. Identify 2–3 problems or inconveniences you or others face. For each problem, answer the following questions in a tabular format:\n- Who faces this problem?\n- How often does it occur?\n- Why hasn’t it been solved yet?\n- What business idea could solve it?\n- Would people pay for your solution?",
            "answer": {
              "answerKey": "Use direct observation to identify real school or home problems, then test who faces them, how often they occur and whether people would pay for a solution.",
              "schoolMethod": "**Illustrative observation table:**\n\n| Problem | Who faces it / frequency | Why it may remain unsolved | Possible business idea | Would people pay? |\n|---|---|---|---|---|\n| Students forget homework and deadlines | Students; several times a week | Information is spread across notebooks and messages | A simple school planner/reminder service | Some families or schools may pay for useful premium features; a basic version could be free |\n| Reusable books and stationery are difficult to exchange | Students and parents; each school year | No organised, trusted exchange point | A verified second-hand book and stationery exchange | A small service fee may be acceptable if it saves money |\n| Household waste is not separated | Families; daily | Lack of clear instructions and collection arrangements | Doorstep segregated-waste collection and composting service | Some households or housing societies may pay for reliable collection |\nA good entrepreneur should verify these problems by interviewing potential users before investing."
            },
            "parts": [
              "Identify a real problem you notice at school or home.",
              "Explain who faces the problem and how often it occurs.",
              "Explain why it has not already been solved.",
              "Suggest a business idea that could solve it.",
              "Assess whether people would pay for the solution."
            ]
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": true,
            "text": "Think of your startup idea and fill in the business plan template given below.\n\n**a. Business idea**\n- Name of the company or shop\n- Product/service\n- Tagline (optional)\n\n**b. Entrepreneur profile**\n- Founder(s)\n- Why did you choose this business idea?\n- What problem does your business solve?\n\n**c. Target customers**\nWho will buy your product or service? (Students; Parents; Local residents; Tourists; Farmers; Businesses; Others.) Describe your target customers.\n\n**d. Market research**\nFind answers to: What do the customers need? What products or services already exist? How is your idea different?\n\n**e. Product or service description**\nDescribe your product or service. List its key features and benefits.\n\n**f. Resources required**\nState what is needed and how much for human resources, finance, materials, technology and infrastructure.\n\n**g. Operations plan**\nHow will the business work? Write the steps. You may depict this using a flow chart.\n\n**h. Marketing plan**\nHow will customers learn about your business? Consider posters, social media, word of mouth, school events, local market, newspapers or other methods.\n\n**i. Financial plan**\nState sources of finance; estimated monthly costs; expected monthly revenue; and expected profit (revenue minus cost).\n\n**j. Risks and challenges**\nWhat challenges might your business face?\n\n**k. Social and environmental impact**\nHow will your business help people or the environment?\n\n**l. Conclusion**\nWhy do you believe your business will succeed?",
            "answer": {
              "answerKey": "The ReBook sample plan covers the business idea, founders, customers, market research, product, resources, operations, marketing, finances, risks and impact.",
              "schoolMethod": "**Sample business plan: ReBook — a student book-exchange service**\n\n**a. Business idea:** ReBook; a platform and school-based collection point for exchanging or purchasing verified pre-owned textbooks and reference books. Tagline: “Good books deserve another chapter.”\n\n**b. Entrepreneur profile:** Founded by a student team with a teacher mentor. The idea was selected to reduce the cost of school books and prevent usable books from becoming waste. It solves the problem of expensive books and limited access to second-hand copies.\n\n**c. Target customers:** students, parents, schools and local book donors. The main customers are families seeking affordable books for the next academic year.\n\n**d. Market research:** Interview students and parents; record which titles are needed; compare prices of new and used books; check condition and edition requirements. Existing options include local second-hand shops and informal exchanges. ReBook differs through school-level verification, clear book-condition grading and convenient collection.\n\n**e. Product/service:** listing, checking, grading, exchanging and selling used books. Benefits include lower costs, reuse and convenient access. Only current editions in acceptable condition are listed.\n\n**f. Resources:** one coordinator, student volunteers and a teacher supervisor; small startup fund; shelves, labels and packaging; a basic website/spreadsheet; and a secure collection area.\n\n**g. Operations:** collect books → record title/edition/condition → inspect and grade → list available books → match buyers and donors → arrange exchange/payment → issue receipt → collect feedback.\n\n**h. Marketing:** school noticeboards, parent groups, student representatives, school events and word of mouth, with permission from the school.\n\n**i. Illustrative monthly financial plan:**\n- Sources of finance: founders' contribution and a school-approved small grant.\n- Costs: labels/packing ₹500; transport ₹700; website/printing ₹300; storage/miscellaneous ₹500. **Total cost = ₹2,000.**\n- Expected service fees/donations: ₹2,800. **Expected surplus = ₹800.** The service should prioritise affordability and transparency rather than profit maximisation.\n\n**j. Risks:** incorrect editions, damaged books, low participation, disputes and data privacy. Reduce them through edition checks, condition photographs, clear exchange rules, limited data collection and adult supervision.\n\n**k. Social/environmental impact:** lower education costs, greater access to books, reuse of paper resources and less waste.\n\n**l. Conclusion:** ReBook can succeed if schools and families trust its verification process, enough books are available and operations remain simple and transparent."
            },
            "parts": [
              "Complete the business idea and entrepreneur profile.",
              "Describe target customers and market research.",
              "Describe the product or service and required resources.",
              "Prepare the operations and marketing plans.",
              "Estimate sources of finance, monthly costs, revenue and expected profit.",
              "Identify risks and challenges.",
              "Explain the social and environmental impact and conclude why the business may succeed."
            ]
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": true,
            "text": "Visit a factory or a production unit.\n\nExplore how a business operates by visiting a factory or production unit that manufactures a product. Prepare questions for the owner or manager, such as:\n- What product does the factory produce?\n- Who are its customers?\n- How did the business start?\n- What challenges did the business face in its early years?\n- How does the business manage its finances?\n- How are employees recruited and trained?\n- How are products supplied to wholesalers, retailers, or consumers?\n\nDuring the visit, observe the production process carefully. Note the resources used, such as raw materials, machinery and technology, workers, and managers. Interact with the owner or manager and record key information. Take notes and photographs (if permitted).\n\nAfter the visit:\n- Understand the manufacturing process and create a process map showing the journey of the product from raw materials to the final customer.\n- Identify barriers to growth, such as financial barriers (lack of capital, difficulty obtaining loans or credit), technical barriers (outdated machinery, limited access to technology), human-resource barriers (skill shortages, difficulty hiring or retaining workers), market barriers (competition, limited access to suppliers or customers), and regulatory barriers (complex procedures, licences, approvals or paperwork).\n- Recommend practical solutions through which the business could overcome these challenges.\n\nShare your findings by preparing a presentation and a report highlighting your observations, analysis and recommendations. The format of the report may be as follows: Introduction; production or service-delivery process (with diagrams or flowcharts); resources required; barriers identified (supported by observations or evidence); suggested solutions; and reflection on key lessons learned from the visit.",
            "answer": {
              "answerKey": "A factory-visit report should document the process, resources, barriers, practical solutions and lessons learned, using actual observations.",
              "schoolMethod": "**Model report format (illustrative small bakery visit; replace observations with those from the actual visit):**\n\n**Introduction:** The visit aimed to understand how a small bakery converts raw materials into finished products and supplies customers.\n\n**Questions for the owner/manager:** What products are made? Who are the customers? How did the business begin? What were its early challenges? How are money and stock managed? How are employees recruited and trained? How are products delivered?\n\n**Production process:** purchase ingredients → inspect and store ingredients → measure and mix → prepare dough/batter → bake → cool → quality-check → pack and label → store safely → sell or deliver to customers.\n\n**Resources:** flour, sugar, milk, eggs or suitable alternatives, yeast, oil/butter, packaging, ovens, mixers, electricity, clean water, workers, manager, storage and working capital.\n\n**Possible barriers and solutions:**\n1. Financial — limited working capital; maintain cash-flow records, control wastage and explore suitable bank credit.\n2. Technical — old ovens or equipment; schedule maintenance and upgrade gradually after cost-benefit assessment.\n3. Human resources — shortage of trained staff; provide food-safety and production training.\n4. Market — competition and changing demand; gather customer feedback, maintain quality and offer suitable product variety.\n5. Regulatory — food-safety and licensing requirements; obtain required registrations, maintain hygiene and follow applicable standards.\n\n**Reflection:** The visit shows that successful production depends on coordination among purchasing, operations, finance, human resources, quality control and marketing. The final report should distinguish direct observations from suggestions and include photographs only with permission."
            },
            "parts": [
              "Prepare questions for the factory owner or manager about the product, customers, business history, early challenges, finances, recruitment and distribution.",
              "Observe the production process and record the raw materials, machinery, technology, workers and managers involved.",
              "Prepare a process map showing the product’s journey from raw materials to the final customer.",
              "Identify financial, technical, human-resource, market and regulatory barriers to growth.",
              "Recommend practical solutions to the barriers identified.",
              "Prepare a presentation and report with an introduction, process, resources, barriers, solutions and reflection."
            ]
          }
        ]
      },
      {
        "id": "sec2",
        "title": "THE BIG QUESTIONS — Chapter overview (Textbook p. 125)",
        "questions": [
          {
            "id": "bq1",
            "number": "BQ1",
            "isHard": false,
            "text": "How does entrepreneurship impact society and the economy?",
            "answer": {
              "answerKey": "Entrepreneurship turns ideas into useful products and services, creates jobs and incomes, encourages innovation, pays taxes and helps solve social problems.",
              "schoolMethod": "Entrepreneurs identify needs and organise resources to create goods or services. Successful ventures provide employment, income and new choices for consumers; introduce innovations; develop suppliers and local markets; contribute taxes; and may address social or environmental challenges. Responsible entrepreneurship can improve quality of life and economic activity. Benefits depend on fair working conditions, customer safety, sound management and responsible use of resources."
            }
          },
          {
            "id": "bq2",
            "number": "BQ2",
            "isHard": false,
            "text": "What are some functional areas of a business?",
            "answer": {
              "answerKey": "Key functional areas include management and operations, finance and accounting, human resources, and marketing and sales.",
              "schoolMethod": "Management and operations plan and deliver production or services. Finance obtains and manages funds, while accounting records transactions and measures profit or loss. Human resources recruit, train and support employees. Marketing and sales understand customers, promote products and generate sales. These functions are interdependent: a business needs suitable products, skilled people, adequate finance, reliable operations and customers."
            }
          },
          {
            "id": "bq3",
            "number": "BQ3",
            "isHard": false,
            "text": "How can a business plan be developed?",
            "answer": {
              "answerKey": "A business plan sets out the idea, target customers, market research, product, resources, operations, marketing, finance, risks and social impact.",
              "schoolMethod": "A business plan begins with a clear problem or customer need and a product or service that may meet it. It identifies target customers and competitors, describes the product and its benefits, lists people, materials, technology and infrastructure required, explains daily operations, sets a marketing strategy, estimates start-up and monthly costs and expected revenue, calculates likely profit or loss, identifies risks and explains social and environmental impact. The plan should be reviewed as evidence, costs and customer needs change."
            }
          }
        ]
      },
      {
        "id": "sec3",
        "title": "IN-TEXT QUESTIONS AND ACTIVITIES — Chapter 6 (Textbook pp. 125–137)",
        "questions": [
          {
            "id": "it1",
            "number": "p. 125",
            "isHard": false,
            "text": "Imagine running a lemonade stall at the school festival. What would be required to run it successfully?",
            "answer": {
              "answerKey": "Plan the product, ingredients, suppliers, equipment, hygiene, team, price, expected demand, records and profit or loss.",
              "schoolMethod": "A student team should estimate how many glasses may be sold, calculate the cost of lemons, sugar, water, ice and cups, and identify a safe and reliable supplier. It should arrange clean drinking water, hygienic preparation, suitable equipment, a clean serving area and proper waste disposal. The team should decide a fair selling price, assign roles, obtain school permission, record sales and expenses, and calculate profit or loss as revenue minus total costs. Any figures used should be labelled as estimates."
            },
            "parts": [
              "Identify the product and customers for a lemonade stall at the school festival.",
              "List the materials, equipment, people and funds required.",
              "Explain how you would set the price, maintain hygiene and attract customers."
            ]
          },
          {
            "id": "it2",
            "number": "p. 127",
            "isHard": false,
            "text": "What can be learned from the Jataka story of the young man who turned a dead mouse into wealth? Is success about spotting opportunities or working smart? What traits do entrepreneurs need?",
            "answer": {
              "answerKey": "The story highlights resourcefulness, initiative, observation, persistence, creativity, prudent reinvestment and the ability to recognise opportunities.",
              "schoolMethod": "The young man noticed a small opportunity, began with the limited resources available, exchanged goods strategically and reinvested his earnings. His progress depended both on spotting opportunities and working intelligently. Useful entrepreneurial traits include creativity, initiative, perseverance, problem-solving, market awareness, communication, adaptability, financial discipline, risk assessment and honesty. The story also shows social responsibility because he later shared his wealth with the community."
            },
            "parts": [
              "Summarise the Jataka story of the young man who turned a dead mouse into wealth.",
              "Explain how he identified an opportunity and created value.",
              "Discuss whether success depends only on spotting opportunities or also on effort, planning and trust."
            ]
          },
          {
            "id": "it3",
            "number": "p. 128",
            "isHard": false,
            "text": "Think about the Lijjat Papad cooperative. What problem did it solve beyond selling papads? What challenges might its founders have faced, and what similar cooperative could be started in your community?",
            "answer": {
              "answerKey": "Lijjat created income, collective ownership and financial independence for women; early challenges likely included capital, market access, quality control and trust.",
              "schoolMethod": "1. **Problem beyond sales:** It created a means for women to earn income, participate in a member-owned enterprise, share profits and gain economic independence and confidence.\n2. **Possible early challenges:** limited starting capital, lack of machinery and premises, finding buyers, maintaining uniform quality, organising production across homes, transport and competition. The founders could respond through shared rules, cooperative ownership, consistent standards, pooled resources and reliable distribution.\n3. **Community idea:** a women’s or youth cooperative that processes local grains, pickles, honey, millets, handicrafts or reusable cloth bags. Members should agree on quality, pricing, accounts, decision-making and fair sharing of income."
            },
            "parts": [
              "Identify the problem that the Lijjat Papad cooperative solved beyond selling papads.",
              "Explain how collective work created income and opportunities for women.",
              "Discuss challenges the founders may have faced while building the cooperative."
            ]
          },
          {
            "id": "it4",
            "number": "p. 130–132",
            "isHard": true,
            "text": "Use the bakery example to explain all the key questions that should be considered while preparing a business plan, including customer needs, target customers, finance, location, staff, pricing, promotion, packaging, customer service, inventory, quality, demand and competition.",
            "answer": {
              "answerKey": "A bakery plan must assess customer needs and target groups, product choices, start-up funds and costs, location and sales channels, staffing, affordable pricing, marketing and packaging, customer service, inventory, product quality, changing demand and competition.",
              "schoolMethod": "**Model bakery plan**\n\n1. **Needs and idea:** Survey local people to learn whether they prefer fresh bread, cakes, pastries, whole-wheat products or healthier snacks. Offer products that meet a real need and have a clear difference, such as fresh, hygienic, affordable or locally distinctive goods.\n2. **Potential customers:** Identify likely customers—families, school or college students, young adults, nearby offices and older people. Choose the product range according to their preferences rather than trying to serve everyone in the same way.\n3. **Money and costs:** Estimate the cost of an oven, mixer, utensils, rent, electricity, ingredients, packaging, salaries, transport, licences and working capital. Arrange funds through the owners’ savings or suitable loans or investment, after comparing the terms and repayment burden.\n4. **Location and sales channels:** Choose a hygienic, accessible location with suitable rent and customer footfall, such as near a market, school or residential area. Online ordering and mobile apps may extend the customer base, provided delivery can maintain product quality.\n5. **Human resources:** Decide how many trained bakers, helpers, billing staff and delivery workers are needed. Assign clear duties and train employees in hygiene, food handling, customer service and equipment safety.\n6. **Pricing and profits:** Calculate the cost per product, add a reasonable margin and compare prices with customers’ ability to pay. Different sizes or options, such as smaller cake jars, can provide affordable choices without selling below cost.\n7. **Promotion, packaging and service:** Use a clear business name, signs, posters, social media, samples and suitable offers. Packaging should be food-safe, clean, protective and appropriate for the product so that freshness and shelf life are maintained. Take orders accurately, respond politely to complaints and provide reliable service to encourage repeat customers.\n8. **Inventory and quality:** Forecast demand, purchase perishable ingredients in suitable quantities, store them at safe temperatures and use stock before it spoils. Follow standard recipes, hygiene checks and quality-control procedures so that products remain consistent.\n9. **Challenges and risks:** Plan for competition, changing customer preferences, seasonal demand, rising ingredient prices, equipment failure and food wastage. Use customer feedback, backup suppliers, maintenance, careful cash-flow records and a flexible product mix to respond.\n\nA sound business plan links all these decisions. It should be reviewed when costs, demand, customer preferences or business conditions change."
            },
            "parts": [
              "What do customers need, which bakery products should be offered, and what will make the idea fresh, affordable or unique?",
              "Who are the potential customers, and should the bakery specialise in products for children, young adults, families or other groups?",
              "How much start-up money is required, what expenses must be estimated, and where could the funds come from?",
              "Where should the bakery be located, and how could online orders or mobile apps expand its reach?",
              "How many employees are needed, and what skills and training should bakers, helpers, billing staff and delivery workers have?",
              "How can prices cover costs and generate profit while remaining affordable? Would different sizes or price options help?",
              "How should the bakery promote its products, choose suitable packaging, protect shelf life and improve customer service?",
              "How can perishable inventory be managed and consistent product quality maintained?",
              "How should the business respond to changing customer demand, rising costs and competition from other bakeries?"
            ]
          },
          {
            "id": "it5",
            "number": "p. 136",
            "isHard": false,
            "text": "Interview two people in your vicinity who run a business and prepare a short report about their journey. Also prepare a report on the tasks an entrepreneur performs at each stage. Using the case study of Mohan Singh Oberoi, identify the functional area that helped improve the quality of the company’s services and explain how the functional areas worked together. Finally, create a business plan for your own idea using the template on pages 142–144.",
            "answer": {
              "answerKey": "Interview reports should record why owners started, challenges, risks and lessons. Entrepreneurs identify opportunities, plan, organise resources, lead and review performance. Oberoi’s service quality depended most directly on operations and management, supported by HR, finance, marketing and customer service. The activity also requires a complete business plan using the textbook template.",
              "schoolMethod": "**1. Interview report:** Interview two nearby business owners, such as a shopkeeper, tailor or factory owner. Ask why each person started the business, what challenges they faced, what risks they took and what they learned. Add the business type, approximate starting resources, customers and main products or services. Obtain permission before recording or taking photographs.\n\n**2. Tasks performed by an entrepreneur:** (i) identify a need or opportunity; (ii) develop and test an idea; (iii) prepare a business plan; (iv) arrange finance, people, materials and technology; (v) start operations and take calculated risks; (vi) lead employees and coordinate functional areas; (vii) market the product and serve customers; and (viii) monitor results, solve problems and improve the business.\n\n**3. Mohan Singh Oberoi case:** The functional area most directly responsible for maintaining the quality and efficiency of hotel services is **operations and management**. It ensures that rooms, facilities and service processes meet required standards. **Human resources** recruits and trains staff; **finance and accounting** manages investment, costs and expansion; **marketing and sales** builds the brand and attracts guests; and customer-service practices keep guest satisfaction central. These areas coordinate, so the success of the hotel business cannot be credited to only one department.\n\n**4. Model business plan — CycleCare Bicycle Service**\n\n**a. Business idea:** CycleCare; a small, appointment-based bicycle repair and maintenance service. Tagline: “Safe rides, reliable repairs.”\n**b. Entrepreneur profile:** A student team with an adult mentor and a trained bicycle mechanic. The idea addresses the difficulty of finding convenient, fairly priced bicycle repairs.\n**c. Target customers:** Students, parents, local residents and people who use bicycles for commuting.\n**d. Market research:** Interview cyclists and compare nearby repair shops, prices, waiting times and common repair needs. The service would differentiate itself through transparent estimates, convenient appointments and basic maintenance reminders.\n**e. Product/service:** Puncture repair, brake and chain checks, tyre inflation, cleaning and routine servicing. Safety-critical work is performed or checked by a trained adult mechanic.\n**f. Resources:** A trained mechanic, supervised student support, repair stand, spanners, tyre levers, pump, patch kits, spare tubes, cleaning materials, a small workspace and start-up funds.\n**g. Operations:** Receive the bicycle and describe the issue → inspect it → explain the fault and estimate → obtain the customer’s approval → complete the repair → test safety → provide a receipt and maintenance advice → collect feedback.\n**h. Marketing:** Use permission-based posters, local community groups, word of mouth and tie-ups with schools or residential associations.\n**i. Illustrative monthly finance:** Start-up finance from the owners’ contribution; estimated monthly rent and utilities ₹2,000, consumables and spare parts ₹3,000, transport and printing ₹500, and other costs ₹500. Total estimated cost = ₹6,000. If 60 services earn an average of ₹150, expected revenue = ₹9,000 and estimated surplus = ₹3,000. These are sample figures and must be replaced with local quotes.\n**j. Risks and challenges:** Competition, shortage of spare parts, incorrect repairs, seasonal demand and customer safety. Mitigate them through trained work, quality checks, safe storage, clear estimates and responsible records.\n**k. Social and environmental impact:** Affordable repair can improve access to mobility, extend the life of bicycles and reduce waste.\n**l. Conclusion:** CycleCare can succeed if it is trusted, safe, fairly priced and responsive to local customers. The plan should be revised after collecting feedback and checking actual costs."
            },
            "parts": [
              "Ask each business owner why they started the business, what challenges they faced, what risks they took and what they learned.",
              "Prepare a short report on the tasks an entrepreneur performs at each stage, referring to Fig. 6.2.",
              "In the Mohan Singh Oberoi case, identify the functional area most directly responsible for maintaining service quality and explain how the other functional areas supported success.",
              "Create a business plan for your own idea using the template on pages 142–144: idea, entrepreneur profile, target customers, market research, product/service, resources, operations, marketing, finance, risks, social/environmental impact and conclusion."
            ]
          },
          {
            "id": "it6",
            "number": "p. 137",
            "isHard": false,
            "text": "Find out about other regional communities in India that have excelled as entrepreneurs.",
            "answer": {
              "answerKey": "Examples for research include the Marwari, Gujarati, Chettiar, Sindhi and Bohra trading communities; focus on documented occupations, skills and business networks rather than stereotypes.",
              "schoolMethod": "A short research note may compare two communities using reliable historical or regional sources. For example, the textbook describes Chettiars as traders, bankers and moneylenders with strong accounting and record-keeping traditions and business links across South and South-East Asia. Research may also examine particular Marwari, Gujarati, Sindhi or Bohra business networks. Explain the region, historical occupations, products or services, trade routes, financial practices and community institutions. Avoid assuming that every member of a community has the same occupation or business ability."
            },
            "parts": [
              "Find examples of regional communities in India that have excelled as entrepreneurs.",
              "Research their historical occupations, skills, networks or institutions using reliable sources.",
              "Avoid stereotypes and explain that individuals within any community have diverse occupations and abilities."
            ]
          }
        ]
      }
    ]
  }
]

/**
 * Compact Part II textbook map for the AI chatbot / practice generator.
 * Built from the chapter data above so it can never drift out of sync with
 * the published solutions.
 */
export const SST_PART2_BOOK_CONTEXT: string = [
  'UNDERSTANDING SOCIETY: INDIA AND BEYOND — PART II · Grade 9 Social Science (NCERT 2026 Revised)',
  '',
  ...SST_CHAPTERS.flatMap(ch => [
    `CHAPTER ${ch.number}: ${ch.title}`,
    `Focus: ${ch.description}`,
    ...ch.exercises.flatMap(ex => [
      `${ex.title}:`,
      ...ex.questions.map(q => `- Q${q.number}: ${q.text}`),
    ]),
    '',
  ]),
].join('\n');