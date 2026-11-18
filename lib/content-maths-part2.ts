import type { Chapter } from './content';

/**
 * Complete worked solutions for Ganita Manjari Grade 9 — Part II.
 * Question prompts and exercise order are based on the supplied textbook PDF.
 * Open-ended estimation/project tasks state their sample assumptions explicitly.
 */

// Fig. 9.1 — △ABC with the angle bisectors at B and C meeting at the incentre I,
// extended beyond I to meet AC at E and AB at F.
const FIG_9_1_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="262" viewBox="0 0 300 262" role="img" aria-label="Fig. 9.1: triangle ABC whose angle bisectors at B and C meet at the incentre I and are extended to E on AC and F on AB">
  <polygon points="150,28 30,222 270,222" fill="#fbf2e7"/>
  <path d="M150 28 L30 222 L270 222 Z" fill="none" stroke="#3b3228" stroke-width="1.6" stroke-linejoin="round"/>
  <line x1="30" y1="222" x2="216" y2="134" stroke="#1f2937" stroke-width="1.4"/>
  <line x1="270" y1="222" x2="84" y2="134" stroke="#1f2937" stroke-width="1.4"/>
  <g fill="#111827">
    <circle cx="150" cy="28" r="3.2"/>
    <circle cx="30" cy="222" r="3.2"/>
    <circle cx="270" cy="222" r="3.2"/>
    <circle cx="84" cy="134" r="3.2"/>
    <circle cx="216" cy="134" r="3.2"/>
    <circle cx="150" cy="165" r="3.2"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="15" fill="#111827">
    <text x="150" y="18" text-anchor="middle">A</text>
    <text x="20" y="244" text-anchor="middle">B</text>
    <text x="280" y="244" text-anchor="middle">C</text>
    <text x="74" y="128" text-anchor="end">F</text>
    <text x="226" y="128" text-anchor="start">E</text>
    <text x="158" y="184" text-anchor="start">I</text>
  </g>
</svg>`;

export const MATHS_PART2_CHAPTERS: Chapter[] = [
  {
    "id": "ch09",
    "number": 9,
    "title": "Propositions and Their Converses",
    "slug": "propositions-and-their-converses",
    "code": "0904ch09",
    "exercises": [
      {
        "id": "ex9.1",
        "title": "Exercise Set 9.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "instruction": "Frame the converse for each of the propositions in Questions 1–12. Then, determine if each of the two statements is true or not. Justify the true statements and give a counterexample for each false statement.",
            "text": "If two lines are parallel, then the corresponding angles formed by a transversal are equal.",
            "answer": {
              "answerKey": "Both the proposition and its converse are true.",
              "schoolMethod": "**Proposition:** If two lines are parallel, their corresponding angles are equal.\n\n**Converse:** If a pair of corresponding angles formed by a transversal are equal, then the two lines are parallel.\n\nThe proposition is the corresponding-angles property of parallel lines. The converse is the converse of that theorem: equality of a pair of corresponding angles implies that the two lines are parallel. Hence, both statements are true."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "If a quadrilateral is a square, then all its angles are equal.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "**Proposition:** A square has four right angles, so all its angles are equal. This is true.\n\n**Converse:** If all four angles of a quadrilateral are equal, then it is a square. Since a quadrilateral has angle sum 360°, each angle is 90°. It is therefore a rectangle, but its adjacent sides need not be equal. For example, a 4 cm by 2 cm rectangle has four equal angles but is not a square. Thus the converse is false."
            }
          },
          {
            "id": "q3",
            "number": "★3",
            "isHard": true,
            "text": "Given any ∆ABC, let us bisect the angles at B and C. The bisectors meet at the incentre I of the triangle. Now extend the bisectors beyond I till they meet the opposite sides at E and F respectively, as shown. Proposition: If AB = AC, then IE = IF.",
            "figure": { "svg": FIG_9_1_SVG, "caption": "Fig. 9.1" },
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "**Proposition:** If AB = AC, then △ABC is isosceles at A, so ∠B = ∠C. The figure is symmetric about the bisector of ∠A. The B- and C-angle-bisectors and their intersection I are interchanged by this symmetry, as are E and F. Hence IE = IF.\n\n**Converse:** If IE = IF, then AB = AC. This is false. For example, take ∠A = 60°, ∠B = 40° and ∠C = 80°. The angles between the extended bisectors and the opposite sides are supplementary in pairs, so their sines are equal; since the inradius is the same, IE = IF, while ∠B ≠ ∠C and therefore AB ≠ AC. Hence this is a counterexample."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "If x = y, then a + x = a + y, where x, y and a are any three numbers. This proposition and its converse are routinely used while solving equations.",
            "answer": {
              "answerKey": "Both are true.",
              "schoolMethod": "**Proposition:** If x = y, adding the same number a to both sides gives a + x = a + y.\n\n**Converse:** If a + x = a + y, subtract a from both sides to obtain x = y.\n\nBoth statements are true by the addition and cancellation properties of equality."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "If a and b are perfect squares, then ab is a perfect square.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "Write a = r² and b = s². Then ab = r²s² = (rs)², a perfect square; so the proposition is true.\n\n**Converse:** If ab is a perfect square, then a and b are both perfect squares. This is false: a = 2 and b = 8 are not perfect squares, but ab = 16 = 4²."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "instruction": "In Questions 6 and 7, x and y are real numbers.",
            "text": "If x = y, then x² = y².",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "If x = y, squaring both sides gives x² = y².\n\n**Converse:** If x² = y², then x = y. From x² − y² = 0, we get (x − y)(x + y) = 0, so x = y **or** x = −y. For x = 2 and y = −2, x² = y² but x ≠ y. Thus the converse is false."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "If x = y, then x³ = y³.",
            "answer": {
              "answerKey": "Both are true.",
              "schoolMethod": "Cubing x = y proves x³ = y³.\n\n**Converse:** If x³ = y³, then x³ − y³ = (x − y)(x² + xy + y²) = 0. Alternatively, the cube function is one-to-one on the real numbers. Since x² + xy + y² is non-negative and can be zero only when x = y = 0, the equality forces x = y. Thus the converse is true."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "instruction": "In Questions 8–12, n is a positive integer.",
            "text": "If n is divisible by 24, then it is divisible by both 4 and 6.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "Since 24 = 4 × 6, every multiple of 24 is divisible by both 4 and 6.\n\n**Converse:** If n is divisible by 4 and 6, then n is divisible by 24. A number divisible by both 4 and 6 need only be divisible by lcm(4,6) = 12. Counterexample: n = 12 is divisible by 4 and 6 but not by 24."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "If n is divisible by 60, then it is divisible by both 5 and 12.",
            "answer": {
              "answerKey": "Both are true.",
              "schoolMethod": "Because 60 is divisible by both 5 and 12, any multiple of 60 is divisible by each of them.\n\n**Converse:** If n is divisible by 5 and 12, then n is divisible by 60. Since gcd(5,12)=1, lcm(5,12)=5×12=60. Every common multiple is therefore a multiple of 60. The converse is true."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "text": "If n is the square of a prime number, then it has exactly 3 factors.",
            "answer": {
              "answerKey": "Both are true.",
              "schoolMethod": "If n = p² for a prime p, its positive factors are exactly 1, p and p².\n\n**Converse:** If n has exactly three positive factors, then n is the square of a prime. A number with exactly three factors must have factor pairs 1·n and one repeated pair p·p, so n = p². Any non-prime p would introduce more factors. Hence the converse is true."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "text": "If n is a product of two unequal prime numbers, then it has exactly 4 divisors.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "If n = pq for distinct primes p and q, its positive divisors are 1, p, q and pq, so it has exactly four.\n\n**Converse:** If n has exactly four divisors, then it is a product of two unequal primes. False: 8 = 2³ has exactly four positive divisors, 1, 2, 4 and 8, but it is not a product of two unequal primes."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "text": "If n and n + 3 have no factors in common, then n is not a multiple of 3.",
            "answer": {
              "answerKey": "Both are true.",
              "schoolMethod": "If 3 divides n, it also divides n + 3, so the two numbers have a common factor 3. The contrapositive proves that if they have no common factor, n is not a multiple of 3.\n\n**Converse:** If n is not a multiple of 3, then n and n + 3 have no factors in common. Any common divisor divides their difference (n + 3) − n = 3, so it can only be 1 or 3. Since 3 does not divide n, their only common positive divisor is 1. The converse is true."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": false,
            "text": "Find counterexamples: (i) all numbers of the form 4n² + 1 are prime; (ii) all numbers of the form n² + n + 11 are prime; (iii) all numbers of the form 4ⁿ + 3 are prime.",
            "answer": {
              "answerKey": "Examples: (i) n=6 gives 145; (ii) n=10 gives 121; (iii) n=4 gives 259, all composite.",
              "schoolMethod": "(i) For n = 6, 4n² + 1 = 4(36) + 1 = 145 = 5 × 29, which is composite.\n\n(ii) For n = 10, n² + n + 11 = 100 + 10 + 11 = 121 = 11², which is composite.\n\n(iii) For n = 4, 4ⁿ + 3 = 256 + 3 = 259 = 7 × 37, which is composite. Each is a counterexample to the corresponding claim."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": false,
            "text": "Find counterexamples: (i) if n is prime, then 2ⁿ − 1 is prime; (ii) if n is even, then 2ⁿ + 1 is prime.",
            "answer": {
              "answerKey": "(i) n=11; (ii) n=6.",
              "schoolMethod": "(i) Let n = 11, which is prime. Then 2¹¹ − 1 = 2048 − 1 = 2047 = 23 × 89, so it is not prime.\n\n(ii) Let n = 6, which is even. Then 2⁶ + 1 = 64 + 1 = 65 = 5 × 13, so it is not prime."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": false,
            "text": "Consider the statement: ‘If a number is divisible by 8, then it is divisible by both 2 and 4’. (i) Justify the statement. (ii) Recall the divisibility shortcuts that we have studied for different numbers. To check whether a given number is divisible by 8, is it enough to check whether it is divisible by 2 and 4? Why or why not?",
            "answer": {
              "answerKey": "(i) True — every multiple of 8 is a multiple of both 2 and 4. (ii) No — 12 is divisible by 2 and 4 but not by 8.",
              "schoolMethod": "(i) Let n be a number divisible by 8, so n = 8k for some integer k. Then n = 2 × 4k, so n is divisible by 2, and n = 4 × 2k, so n is divisible by 4. Hence the statement is true.\n\n(ii) No. A number is divisible by 4 when the number formed by its last two digits is a multiple of 4, and every such number is automatically divisible by 2 as well. For example, 12 is divisible by both 2 and 4, but 12 is not divisible by 8. So checking divisibility by 2 and 4 is not enough to decide whether a number is divisible by 8."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": false,
            "text": "Recall that a shortcut to check whether a given number is divisible by 3 is to add the digits of the number and check if the sum is a multiple of 3. Express the relationship between ‘a number is divisible by 3’ and ‘sum of the digits is a multiple of 3’ using ‘If-then’ sentences.",
            "answer": {
              "answerKey": "Both if-then sentences are true.",
              "schoolMethod": "1. If a number is divisible by 3, then the sum of its digits is a multiple of 3.\n2. If the sum of the digits of a number is a multiple of 3, then the number is divisible by 3.\n\n**Reason:** Powers of 10 leave remainder 1 on division by 3 (10 = 3 × 3 + 1, 100 = 3 × 33 + 1, and so on), so a number and the sum of its digits always leave the same remainder when divided by 3. Hence each of the two if-then sentences is true."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "isHard": true,
            "text": "We have identified different types of quadrilaterals — squares, rectangles, parallelograms, rhombi, kites and trapezia. One can identify more types (e.g., we could create a category of quadrilaterals that have equal-length opposite sides).\n\nSuppose we have identified a category of quadrilaterals called Q, and we have to construct a quadrilateral of this type. For this, we are to use two thin sticks, put them together as diagonals so that the quadrilateral obtained by joining their endpoints is of type Q (see Fig. 9.2).\n\n(i) Suppose Q satisfies the following property: If a quadrilateral is of type Q, then it has equal-length diagonals.\n(a) Should the two sticks be of equal length? Why or why not?\n(b) Will it matter how the two sticks are put together?\n\n(ii) Instead of the property mentioned above, suppose Q satisfies the following property: If a quadrilateral has equal diagonals, then it is of type Q. What will be your answers to (a) and (b) now?",
            "figure": {
              "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"250\" viewBox=\"0 0 300 250\" role=\"img\" aria-label=\"Fig. 9.2: two sticks placed as the diagonals of a quadrilateral\"><polygon points=\"55,38 255,52 208,208 92,202\" fill=\"#fbf2e7\"/><path d=\"M55 38 L255 52 L208 208 L92 202 Z\" fill=\"none\" stroke=\"#3b3228\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><line x1=\"55\" y1=\"38\" x2=\"208\" y2=\"208\" stroke=\"#8a4b1e\" stroke-width=\"7\" stroke-linecap=\"round\"/><line x1=\"55\" y1=\"38\" x2=\"208\" y2=\"208\" stroke=\"#d4924f\" stroke-width=\"4.5\" stroke-linecap=\"round\"/><line x1=\"255\" y1=\"52\" x2=\"92\" y2=\"202\" stroke=\"#8a4b1e\" stroke-width=\"7\" stroke-linecap=\"round\"/><line x1=\"255\" y1=\"52\" x2=\"92\" y2=\"202\" stroke=\"#c07838\" stroke-width=\"4.5\" stroke-linecap=\"round\"/><g fill=\"#111827\"><circle cx=\"55\" cy=\"38\" r=\"3.2\"/><circle cx=\"255\" cy=\"52\" r=\"3.2\"/><circle cx=\"208\" cy=\"208\" r=\"3.2\"/><circle cx=\"92\" cy=\"202\" r=\"3.2\"/></g><g font-family=\"Georgia, 'Times New Roman', serif\" font-size=\"15\" fill=\"#111827\"><text x=\"42\" y=\"30\" text-anchor=\"end\">A</text><text x=\"268\" y=\"48\" text-anchor=\"start\">B</text><text x=\"221\" y=\"228\" text-anchor=\"start\">C</text><text x=\"79\" y=\"228\" text-anchor=\"end\">D</text></g></svg>",
              "caption": "Fig. 9.2 — Two thin sticks placed as the diagonals; joining their endpoints gives the quadrilateral."
            },
            "answer": {
              "answerKey": "(i) Sticks must be equal; arrangement may matter. (ii) Sticks must be equal; arrangement does not matter.",
              "schoolMethod": "(i) (a) Yes, the two sticks must be of equal length. The given property says every quadrilateral of type Q has equal-length diagonals, and the sticks are used as those diagonals. If the sticks were unequal, the quadrilateral formed could never have equal diagonals, so it could not be of type Q.\n(b) Yes, it can matter. The property is only necessary: equal diagonals alone do not guarantee that the quadrilateral obtained belongs to category Q, so how the sticks are put together can decide whether the result is of type Q.\n\n(ii) (a) Yes, the sticks must still be of equal length, because this property also requires the diagonals to be equal.\n(b) No, it will not matter. Any quadrilateral formed by joining the endpoints of two equal sticks has equal diagonals, and the property says every such quadrilateral is of type Q — so any arrangement works."
            }
          }
        ]
      },
      {
        "id": "ex9.reflect",
        "title": "Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": true,
            "page": 1,
            "text": "We have proved the first statement in an earlier grade. Is the second statement (Statement 2: If two angles of a triangle are equal, then the sides opposite the equal angles have equal lengths) true? Can you prove it? (Hint: Draw the altitude from the vertex containing the third angle.)",
            "answer": {
              "answerKey": "Yes — the second statement is true. The sides opposite the equal angles are equal: AB = AC, so the triangle is isosceles.",
              "schoolMethod": "**Given:** In △ABC, ∠B = ∠C (two angles of the triangle are equal).\n**To prove:** AB = AC, i.e. the sides opposite the equal angles are equal.\n**Construction:** From vertex A — the vertex containing the third angle — draw AD ⟂ BC, meeting BC at D.\n\n**Proof:**\nIn △ABD and △ACD,\n∠ABD = ∠ACD  (∠B = ∠C, given)\n∠ADB = ∠ADC = 90°  (by construction)\nAD = AD  (common side)\n\n∴ △ABD ≅ △ACD  (AAS congruence rule: two angles and a non-included side)\n∴ AB = AC  (CPCT — corresponding parts of congruent triangles)\n\n**Conclusion:** The second statement is true. If two angles of a triangle are equal, the sides opposite them are equal, so △ABC is an isosceles triangle with AB = AC. Together with Statement 1 (proved in an earlier grade), this shows that here both a proposition and its converse are true."
            }
          },
          {
            "id": "q2",
            "number": "1",
            "isHard": false,
            "page": 3,
            "text": "It can also happen that both the proposition and its converse are false! Can you give an example?",
            "answer": {
              "answerKey": "Yes. Take “If an integer is divisible by 2, then it is divisible by 3.” The proposition fails for n = 2, and its converse “If an integer is divisible by 3, then it is divisible by 2” fails for n = 3 — so both the proposition and the converse are false.",
              "schoolMethod": "**Proposition:** If an integer is divisible by 2, then it is divisible by 3.\nTake n = 2: 2 is divisible by 2, but 2 is not divisible by 3. So the proposition is false.\n\n**Converse:** If an integer is divisible by 3, then it is divisible by 2.\nTake n = 3: 3 is divisible by 3, but 3 is not divisible by 2. So the converse is false too.\n\n**Conclusion:** A single counterexample is enough to disprove a universal statement, and here each of the two statements has its own counterexample. Hence this is an example in which both a proposition and its converse are false."
            }
          },
          {
            "id": "q4",
            "number": "1",
            "isHard": false,
            "page": 5,
            "text": "Identify real-life examples in which a proposition is true but not the converse. Give nice counterexamples!",
            "answer": {
              "answerKey": "“If a person lives in Jaipur, then the person lives in Rajasthan” is true, but its converse is false — a person living in Udaipur lives in Rajasthan but not in Jaipur.",
              "schoolMethod": "**Example 1 — Cities.**\n**Proposition:** If a person lives in Jaipur, then the person lives in Rajasthan. True — Jaipur is a city in Rajasthan.\n**Converse:** If a person lives in Rajasthan, then the person lives in Jaipur. False — a person living in Udaipur lives in Rajasthan but not in Jaipur.\n\n**Example 2 — Vehicles.**\n**Proposition:** If a vehicle is a car, then it runs on four wheels. True — a car has four wheels.\n**Converse:** If a vehicle runs on four wheels, then it is a car. False — a four-wheeled truck runs on four wheels but is not a car.\n\n**Example 3 — Weather.**\n**Proposition:** If it is raining, then the road is wet. True — rain wets the road.\n**Converse:** If the road is wet, then it is raining. False — a water tanker may have just sprinkled the road on a sunny day.\n\n**Conclusion:** Each proposition is true, yet each converse fails the moment one counterexample is produced."
            }
          },
          {
            "id": "q5",
            "number": "2",
            "isHard": false,
            "page": 5,
            "text": "Give more examples from geometry as well as number theory in which a proposition is true but not its converse. Give appropriate counterexamples.",
            "answer": {
              "answerKey": "Geometry: congruent triangles have equal areas, but equal-area triangles need not be congruent; every square is a rectangle, but a 4 cm × 2 cm rectangle is not a square. Number theory: every multiple of 4 is even, but 6 is even and not a multiple of 4; every multiple of 9 is a multiple of 3, but 6 is a multiple of 3 and not of 9.",
              "schoolMethod": "**Geometry**\n(1) **Proposition:** If two triangles are congruent, then they have the same area. True — congruent figures are identical in shape and size.\n**Converse:** If two triangles have the same area, then they are congruent. False — a triangle with base 12 cm and height 1 cm has area 6 cm², and a triangle with base 3 cm and height 4 cm also has area 6 cm², but their sides are different, so they are not congruent.\n\n(2) **Proposition:** If a quadrilateral is a square, then it is a rectangle. True — a square is a rectangle with all sides equal.\n**Converse:** If a quadrilateral is a rectangle, then it is a square. False — a rectangle of sides 4 cm and 2 cm has four right angles but unequal adjacent sides.\n\n**Number theory**\n(1) **Proposition:** If n is a multiple of 4, then n is even. True — n = 4k = 2(2k) is even.\n**Converse:** If n is even, then n is a multiple of 4. False — n = 6 is even, but 6 ÷ 4 leaves remainder 2.\n\n(2) **Proposition:** If n is a multiple of 9, then n is a multiple of 3. True — n = 9k = 3(3k).\n**Converse:** If n is a multiple of 3, then n is a multiple of 9. False — n = 6 is a multiple of 3 but not of 9.\n\n**Conclusion:** In every pair the proposition holds in all cases, while one counterexample is enough to show that its converse fails."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch10",
    "number": 10,
    "title": "How Quantities Combine: Understanding Data",
    "slug": "how-quantities-combine-understanding-data",
    "code": "0904ch10",
    "beta": true,
    "exercises": [
      {
        "id": "ex10.1",
        "title": "Exercise Set 10.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "The average score of students on a test in Section A is 72 and that of students in Section B is 76. What is the combined average of both the sections given that Section A has 30 students and Section B has 25 students?",
            "answer": {
              "answerKey": "73.82 marks approximately.",
              "schoolMethod": "Combined total of marks = 30×72 + 25×76 = 2160 + 1900 = 4060.\nTotal students = 30 + 25 = 55.\n\nCombined average = $\\dfrac{4060}{55}$ = 73.818… ≈ **73.82 marks**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "A farmer mixes three equal quantities of fertilisers. The first one contains $\\dfrac{1}{10}$ nitrogen, the second contains $\\dfrac{9}{50}$ nitrogen, and the third contains $\\dfrac{3}{60}$ nitrogen. What is the fraction of nitrogen in the mixture?",
            "answer": {
              "answerKey": "$\\dfrac{11}{100}$ = 11%.",
              "schoolMethod": "The quantities are equal, so the nitrogen fraction is the mean of the three fractions.\n\nNitrogen fraction = ($\\dfrac{1}{10}$ + $\\dfrac{9}{50}$ + $\\dfrac{3}{60}$) ÷ 3 = $\\dfrac{99}{300}$ ÷ 3 = **$\\dfrac{11}{100}$**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "(Śrīdhārācārya, Pāṭīgaṇita, c. 750 CE) In ancient India, Varṇa was the measure of gold purity. A purity of 16 varṇa meant pure gold; in general, a purity of k varṇa meant that the gold-alloy was $\\dfrac{k}{16}$ gold and the rest impurities. (Now the term used is karat; 16 Varṇa = 24 karat.) Suppose a goldsmith melts together three pieces of gold: 9 units at 12 varṇa, 5 units at 10 varṇa, and 17 units at 11 varṇa. Find the purity in varṇa of the combined gold.",
            "answer": {
              "answerKey": "$\\dfrac{345}{31}$ ≈ 11.13 varṇa.",
              "schoolMethod": "Total pure-gold equivalent = 9×12 + 5×10 + 17×11 = 108 + 50 + 187 = 345.\nTotal alloy = 9 + 5 + 17 = 31 units.\n\nCombined purity = $\\dfrac{345}{31}$ = **11.129… ≈ 11.13 varṇa**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "The average rainfall per day in the months of May, June, and July in a certain location are 3.5 mm, 10 mm and 8.7 mm respectively. Write an expression that gives their combined average.",
            "answer": {
              "answerKey": "$\\dfrac{31×3.5 + 30×10 + 31×8.7}{92}$ ≈ 7.37 mm.",
              "schoolMethod": "May, June and July have 31, 30 and 31 days. The combined average must weight each monthly average by the number of days.\n\nCombined mean = $\\dfrac{31×3.5 + 30×10 + 31×8.7}{31+30+31}$ = $\\dfrac{678.2}{92}$ ≈ **7.37 mm per day**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Calculate the concentration of spice mix in these two scenarios. (i) A 100 mL kashayam/kadha with 5% spice mix, a 200 mL one with 10% spice mix, and a 300 mL one with 15% spice mix are combined. (ii) A 300 mL kashayam/kadha with 5% spice mix, a 200 mL one with 10% spice mix, and a 100 mL one with 15% spice mix are mixed.",
            "answer": {
              "answerKey": "(i) 11.67%; (ii) 8.33%.",
              "schoolMethod": "(i) Spice amount = 100(0.05)+200(0.10)+300(0.15)=5+20+45=70 mL. Total volume = 600 mL. Concentration = $\\dfrac{70}{600}$×100% = **11.67%**.\n\n(ii) Spice amount = 300(0.05)+200(0.10)+100(0.15)=15+20+15=50 mL. Concentration = $\\dfrac{50}{600}$×100% = **8.33%**."
            }
          }
        ]
      },
      {
        "id": "ex10.2",
        "title": "Exercise Set 10.2",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Savitri’s marks in Kashmiri are as follows: 35 out of 50 in internal tests, 44 out of 60 in the project, and 80 out of 100 in the final exam. The annual percentage score is calculated by combining the internals, project, and final exam in the ratio 3 : 4 : 5. Which of the following expression(s) gives her annual score (as a percentage) in Kashmiri?\n(i) $\\dfrac{35 \\times 3 + 44 \\times 4 + 80 \\times 5}{3 + 4 + 5}$\n(ii) $\\dfrac{(\\dfrac{35}{100}) \\times 3 + (\\dfrac{44}{100}) \\times 4 + (\\dfrac{80}{100}) \\times 5}{3 + 4 + 5}$\n(iii) $\\dfrac{(\\dfrac{35}{50}) \\times 3 + (\\dfrac{44}{60}) \\times 4 + (\\dfrac{80}{100}) \\times 5}{3 + 4 + 5} \\times 100$\n(iv) $\\dfrac{(\\dfrac{35}{50} \\times 100) \\times 3 + (\\dfrac{44}{60} \\times 100) \\times 4 + (\\dfrac{80}{100} \\times 100) \\times 5}{3 + 4 + 5}$",
            "answer": {
              "answerKey": "Expressions (iii) and (iv) are correct. Her annual percentage is approximately 75.28%.",
              "schoolMethod": "Internal tests: ($\\dfrac{35}{50}$)×100 = 70%.\nProject: ($\\dfrac{44}{60}$)×100 = 73⅓%.\nFinal exam: ($\\dfrac{80}{100}$)×100 = 80%.\n\nWeighted percentage\n= [3(70) + 4(73⅓) + 5(80)]/(3+4+5)\n= $\\dfrac{903⅓}{12}$\n= 75.277…% ≈ **75.28%**.\n\nSo (iii) and (iv) only are correct. [(i) uses raw marks with different maxima; (ii) wrongly takes 100 as the maximum of every component.]"
            }
          }
        ]
      },
      {
        "id": "ex10.3",
        "title": "Exercise Set 10.3",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "A stationery shop owner made ₹8000 selling books, of which 30% is the profit amount, and ₹1000 selling book covers, of which 50% is the profit amount. What is the percentage of profit on the total sales?",
            "answer": {
              "answerKey": "32.22% (taking profit percentages as a fraction of sales).",
              "schoolMethod": "Profit from books = 30% of ₹8,000 = ₹2,400. Profit from covers = 50% of ₹1,000 = ₹500.\nTotal sales = ₹9,000; total profit = ₹2,900.\n\nProfit percentage = ($\\dfrac{2900}{9000}$)×100% = **32.22%**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "A white stork’s migration is tracked. The average daily distance travelled, calculated over 20 days, is 44.5 km. On the 21st day, it flew 55 km. What is the average daily distance travelled over these 21 days? Make a guess before you calculate.",
            "answer": {
              "answerKey": "45 km per day.",
              "schoolMethod": "Distance in first 20 days = 20×44.5 = 890 km.\nTotal for 21 days = 890+55 = 945 km.\nAverage = $\\dfrac{945}{21}$ = **45 km per day**. The new average rises slightly because 55 km exceeds the previous average."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "A 600 mL solution with 5% salt is mixed with a 300 mL solution with 8% sugar. What are the concentrations of salt and sugar in the mixture?\n(i) Salt: 5%, Sugar: 8%\n(ii) Salt: 13%, Sugar: 3%\n(iii) Salt: 6%, Sugar: 6%\n(iv) Salt: 5.55%, Sugar: 8.88%\n(v) Salt: 3.33%, Sugar: 2.67%\n(vi) Salt: 4.1%, Sugar: 7.08%",
            "answer": {
              "answerKey": "Salt = 3⅓%; sugar = 2⅔% (option v).",
              "schoolMethod": "Salt amount = 5% of 600 = 30 mL. Sugar amount = 8% of 300 = 24 mL. Total mixture = 900 mL.\nSalt concentration = $\\dfrac{30}{900}$×100% = **3.33%**. Sugar concentration = $\\dfrac{24}{900}$×100% = **2.67%**. Therefore option (v) is correct."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "At a panipuri (golgappa) stall, the concentration of spice in the pani (spiced water) was 8%. Many customers complained that it was too spicy. What quantity of regular water should be mixed into the 10 litres of pani so that the spice level is reduced to ($\\dfrac{3}{4}$)th of the original concentration?",
            "answer": {
              "answerKey": "$\\dfrac{10}{3}$ L = 3⅓ L.",
              "schoolMethod": "Spice initially = 8% of 10 = 0.8 L-equivalent. The target concentration is ($\\dfrac{3}{4}$)×8% = 6%. Let x L of water be added.\n\n$\\dfrac{0.8}{10+x}$=0.06 ⇒ 0.8=0.6+0.06x ⇒ x=$\\dfrac{0.2}{0.06}$=**$\\dfrac{10}{3}$ L = 3⅓ L**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "A physical fitness evaluation is being undertaken. The final marks are calculated by combining the marks for strength, flexibility, and agility in the ratio 4 : 5 : 6. Rashi has scored 60, 65, and 70. Keerthi has scored 55, 65, and 75 respectively.\n(i) Find out whose total is more without calculating.\n(ii) What are their final marks?",
            "answer": {
              "answerKey": "Keerthi scores higher: Rashi = 65⅔; Keerthi = 66⅓.",
              "schoolMethod": "(i) Compared with Rashi, Keerthi has 5 fewer strength marks (weight 4), equal flexibility marks, and 5 more agility marks (weight 6). The gain 5×6 = 30 exceeds the loss 5×4 = 20, so Keerthi scores higher.\n\n(ii) Rashi = [4(60)+5(65)+6(70)]/15 = $\\dfrac{985}{15}$ = **65⅔**.\nKeerthi = [4(55)+5(65)+6(75)]/15 = $\\dfrac{995}{15}$ = **66⅓**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "A restaurant collected ratings from 10 customers on a scale of 1 to 5. The resulting data is shown in the table below.\n\n| | 5 | 4 | 3 | 2 | 1 |\n|---|---|---|---|---|---|\n| Food | 5 | 3 | 2 | 0 | 0 |\n| Ambience | 0 | 4 | 5 | 1 | 0 |\n| Service | 1 | 2 | 2 | 4 | 1 |\n\nWhat is the average rating if the metrics are combined with the weights food : ambience : service = 6 : 5 : 4?",
            "answer": {
              "answerKey": "Food: 4.3; ambience: 3.3; service: 2.8. With aspect weights 6:5:4, the overall weighted rating is 3.57 (approximately).",
              "schoolMethod": "For each aspect, multiply every rating by its frequency, add these products and divide by the 10 customers.\n\n**Food:** $\\dfrac{5×5+4×3+3×2}{10}$ = $\\dfrac{25+12+6}{10}$ = **4.3**.\n\n**Ambience:** $\\dfrac{5×0+4×4+3×5+2×1+1×0}{10}$ = $\\dfrac{16+15+2}{10}$ = **3.3**.\n\n**Service:** $\\dfrac{5×1+4×2+3×2+2×4+1×1}{10}$ = $\\dfrac{5+8+6+8+1}{10}$ = **2.8**.\n\nNow apply weights 6, 5 and 4 to food, ambience and service: overall rating = [6(4.3)+5(3.3)+4(2.8)]/(6+5+4) = $\\dfrac{25.8+16.5+11.2}{15}$ = $\\dfrac{53.5}{15}$ = 3.566… ≈ **3.57 out of 5**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "The following table shows the weight data of langurs in an animal facility. Without doing any computations, can you tell whether there are more male langurs or more female langurs? Or are they equal in number?\n\n| | Male langurs | Female langurs | All langurs |\n|---|---|---|---|\n| Average weight | 16.5 kg | 13.8 kg | 14.925 kg |\n| Number of langurs | | | 60 |\n\n(i) Which of the following expression(s) describes the given scenario?\n(a) $\\dfrac{16.5x + 13.8y}{x + y} = 14.925$\n(b) $\\dfrac{16.5x + 13.8y}{60} = – 14.925$\n(c) $\\dfrac{16.5x + 13.8y}{2} = – 14.925$\n(d) $\\dfrac{16.5x + 13.8y}{16.5 + 13.8} = – 14.925$\n(ii) Find out how many male langurs are present.\n(iii) A female langur weighing 15.2 kg is admitted to the facility. What is the average weight of the female langurs after this?\n(iv) Two male langurs weighing 16.9 kg and 16.1 kg are released from the facility. What is the average weight of the male langurs after this?\n(v) Now, suppose one of the male langurs lost 1 kg of weight. What is the average weight of all the male langurs after this?",
            "answer": {
              "answerKey": "(i) Both (a) and (b). (ii) 25 male langurs. (iii) 13.84 kg average female weight. (iv) 16.5 kg average male weight. (v) 16.46 kg average male weight after the loss. In the book, options (b)–(d) print an en dash before 14.925 instead of '='; this is a printing slip.",
              "schoolMethod": "Let x be the number of male langurs and y the number of female langurs. The total number is x+y=60.\n\n**(i) Correct expression(s).** The mean formula gives $\\dfrac{16.5x+13.8y}{x+y}$=14.925. Since x+y=60, this is also $\\dfrac{16.5x+13.8y}{60}$=14.925. Therefore both (a) and (b) are correct. Options (b)–(d) are printed with an en dash in place of the equals sign before 14.925, which is a printing slip; read as '=', (b) is valid while (c) and (d) use the wrong denominator.\n\n**(ii) Number of males.** Solve x+y=60 and 16.5x+13.8y=14.925(60)=895.5. Put y=60−x: 16.5x+13.8(60−x)=895.5 ⇒ 2.7x=67.5 ⇒ **x=25**. Hence y=60−25=35; there are 25 males and 35 females.\n\n**(iii) New female mean.** Original total female weight = 35×13.8=483 kg. After adding a 15.2 kg female, total weight = 483+15.2=498.2 kg and number =36. Mean =$\\dfrac{498.2}{36}$=13.838… ≈ **13.84 kg**.\n\n**(iv) New male mean after releasing two males.** Original male total =25×16.5=412.5 kg. Released weight =16.9+16.1=33 kg, so remaining total =412.5−33=379.5 kg for 23 males. Mean =$\\dfrac{379.5}{23}$=**16.5 kg**. This remains unchanged because the two released males’ average, $\\dfrac{16.9+16.1}{2}$, is exactly 16.5 kg.\n\n**(v) One remaining male loses 1 kg.** The male total becomes 379.5−1=378.5 kg, while the number remains 23. New mean =$\\dfrac{378.5}{23}$=16.4565… ≈ **16.46 kg**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "Dorjee has collected 1 litre of water from the Dead Sea! Using the information in the table, answer the following questions. A calculator can be used if necessary.\n\n| Water Source | Salinity |\n|---|---|\n| Dead Sea | ≈ 34% |\n| Other seas and oceans | ≈ 3.5% |\n| Ground water | ≈ 0.01% |\n| Purified drinking water | ≈ 0.001% |\n\n(i) What is the salinity of the mixture if he mixes 1 litre of water from the Dead Sea with 2 litres of purified drinking water?\n(ii) Is it possible to mix water from the Dead Sea and purified drinking water to get a mixture with the salinity of groundwater? Why/Why not? What quantity of purified drinking water should Dorjee mix with 1 litre of water from the Dead Sea to get a mixture having the salinity of groundwater?\n(iii) Is it possible to mix water from the Dead Sea and groundwater to get a mixture with the salinity of purified drinking water? Why/Why not? What quantity of groundwater should he mix with 1 litre of water from the Dead Sea to get a mixture having the salinity of purified drinking water?",
            "answer": {
              "answerKey": "(i) ≈11.334%. (ii) Yes; add ≈3,776.67 L purified water to 1 L Dead Sea water. (iii) Impossible: no nonnegative quantity of groundwater can lower the mixture below 0.01%.",
              "schoolMethod": "Treat the listed salinities as percentages of the mixture.\n\n**(i) Dead Sea + purified water.** Salt-equivalent amount = 1(0.34)+2(0.00001)=0.34002 L. Total volume = 3 L. Salinity = $\\dfrac{0.34002}{3}$×100% = **11.334% approximately**.\n\n**(ii) Reach groundwater salinity 0.01%.** Let x litres of purified water be added to the 1 L of Dead Sea water. Using fractions,\n\n$\\dfrac{0.34+0.00001x}{1+x}$=0.0001.\n\nThus 0.34+0.00001x=0.0001+0.0001x ⇒ 0.3399=0.00009x ⇒ x≈**3,776.67 L**.\n\n**(iii) Reach purified-water salinity 0.001% using groundwater.** The two starting salinities are 34% and 0.01%. Any mixture containing positive amounts of both has salinity between 0.01% and 34%, so it cannot be as low as 0.001%. Even adding unlimited groundwater only approaches 0.01% from above. Therefore it is **impossible**, and no nonnegative quantity of groundwater satisfies the request."
            }
          }
        ]
      },
      {
        "id": "ex10.4",
        "title": "Exercise Set 10.4",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "The following stacked column chart shows the number of animal species in the IUCN Red List, by class, over time.\n\n![The number of endangered species is rising — number of animal species on the IUCN Red List, by class](/figs/maths-0904ch10-ex10-4-q1.png)\n\n> The International Union for Conservation of Nature (IUCN) Red List is a large, regularly-updated database that tells us the extinction risk of species across the world. It classifies species into groups such as Least Concern, Vulnerable, Endangered, Critically Endangered, Extinct in the Wild and Extinct, based on scientific data about their numbers, trends and habitats.\n\n(i) What does the number 14,234 on the top of the column 2019 represent?\n(ii) Approximately how many reptile species were in the list in 2016?\n(iii) Which class(es) of species have seen a relatively small increase in count between 2007 and 2019?",
            "answer": {
              "answerKey": "(i) The species assessed on the IUCN Red List in 2019: 14,234. (ii) Approximately 1,100 reptile species in 2016. (iii) Mammals, birds and amphibians show relatively small increases between 2007 and 2019.",
              "schoolMethod": "(i) **14,234** is the total height of the full 2019 stacked column, so it is the number of species assessed on the IUCN Red List in 2019, added up over all the classes shown.\n\n(ii) In the 2016 column the reptile segment rises from the baseline to about **1,100** on the vertical scale, so approximately **1,100 reptile species** were in the list in 2016.\n\n(iii) Between 2007 and 2019: **Mammals** about 1,080 → 1,240, **birds** about 1,210 → 1,510, **amphibians** about 1,810 → 2,210 — each grew by only a few hundred species, while fish, molluscs, insects and reptiles roughly doubled or more. So the classes with a relatively small increase are **mammals, birds and amphibians**."
            },
            "solNote": "These are approximate values according to visual perception. Answers may vary and are not to scale."
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "The wickets taken by a bowler in International Cricket matches till 2025 are shown in the table. Complete the given stacked bar charts (the bar lengths can be approximate),\n\n| | Test | ODI | T20 |\n|---|---|---|---|\n| Home | 62 | 100 | 32 |\n| Overseas | 172 | 49 | 71 |\n\n(i) comparing the total wickets taken at home vs. overseas:\n\n![Wickets taken at home vs. overseas](/figs/maths-0904ch10-ex10-4-q2-i.png)\n\n(ii) The total wickets taken in each format:\n\n![Wickets taken in different formats](/figs/maths-0904ch10-ex10-4-q2-ii.png)",
            "answer": {
              "answerKey": "Home total 194; overseas total 292. Format totals: Test 234, ODI 149, T20 103.",
              "schoolMethod": "(i) Home total = 62+100+32 = **194 wickets**\nOverseas total = 172+49+71 = **292 wickets**\n\n![Completed stacked bar chart of total wickets taken at home and overseas](/figs/maths-0904ch10-ex10-4-q2-i-solved.svg)\n\n(ii) Totals by format:\nTest = 62+172 = **234**\nODI = 100+49 = **149**\nT20 = 32+71 = **103**\n\n![Completed stacked bar chart of total wickets in each format, split into home and overseas](/figs/maths-0904ch10-ex10-4-q2-ii-solved.svg)"
            }
          }
        ]
      },
      {
        "id": "ex10.5",
        "title": "Exercise Set 10.5",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "The smart watch data of 5 people was tracked from Monday to Friday. The recorded data tells us how many hours each person spent lying down, sitting, and standing or moving around, etc., as shown in the following table.\n\n**Table 10.3:** Average number of hours spent per day (Monday–Friday) lying down, sitting, and standing or moving around, etc., of 5 people\n\n| | Lying down | Sitting | Standing or Moving around etc. |\n|---|---|---|---|\n| Pavani (Patient) | 20 | 3 | 1 |\n| Raghu (Nurse) | 7 | 4 | 13 |\n| Zakir (Teacher) | 8 | 6 | 10 |\n| Sahana (Student) | | | |\n| Julie (________) | 8 | 10 | 6 |\n\n(i) How much time does Sahana spend per day in each of these body-states? Make a reasonable guess and fill her row in the table.\n\n(ii) Guess what activity or work Julie could be engaged in based on the data. Find out what your classmates' guesses are.\n\n(iii) Complete the chart below based on the tabular data.\n\n![100% stacked bar chart of the body-state data; Sahana's bar is left blank to be completed](/figs/maths-0904ch10-ex10-5-q1.svg)",
            "answer": {
              "answerKey": "(i) Sample row for Sahana: 8 h lying down, 6 h sitting, 10 h standing/moving (the three entries must total 24 h; any reasonable row summing to 24 is acceptable). (ii) Julie's largest time block is sitting: 10 h > 8 h > 6 h [lying down and moving around respectively] — likely seated work such as a desk/office job. (iii) Percentages (lying down, sitting, standing/moving): Pavani 83.33%, 12.50%, 4.17%; Raghu 29.17%, 16.67%, 54.17%; Zakir 33.33%, 25.00%, 41.67%; Sahana (sample) 33.33%, 25.00%, 41.67%; Julie 33.33%, 41.67%, 25.00%.",
              "schoolMethod": "**(i) Sahana's row (reasonable guess).** Sahana is a student. A reasonable split of her 24-hour day is:\n\n- Lying down (sleep and rest): **8 h**\n- Sitting (classroom, study, meals): **6 h**\n- Standing or moving around (school commute, games, chores): **10 h**\n\nCheck: 8 + 6 + 10 = **24 h** ✓, so her completed row is\n\n| | Lying down | Sitting | Standing or Moving around etc. |\n|---|---|---|---|\n| Sahana (Student) | 8 | 6 | 10 |\n\n*Note:* This is only an estimate — any three non-negative numbers that add to 24 are acceptable, provided they suit a student's day.\n\n**(ii) Julie's activity.** Julie's row:\n\n- Lying down = 8 h\n- Sitting = 10 h\n- Moving = 6 h\n\nHer **largest time block = sitting**, which is 10 h, i.e. > 8 h > 6 h [lying down and moving around respectively].\n\nA person who spends the biggest part of the day seated is probably engaged in **seated work** — for example, a desk or office job, working on a computer, tailoring, or work at a counter.\n\n**(iii) Completing the 100% stacked bar chart.** In a 100% stacked bar chart every bar has the same total length (100%), and it is divided into segments proportional to the three times.\n\n**Formula:**\n\nsegment percentage = (hours ÷ 24) × 100%\n\nPercentage of each segment (in the order lying down, sitting, standing/moving):\n\n- **Pavani:**\n  - Lying down = $\\dfrac{20}{24} \\times 100$ = 83.33%\n  - Sitting = $\\dfrac{3}{24} \\times 100$ = 12.50%\n  - Standing/Moving = $\\dfrac{1}{24} \\times 100$ ≈ 4.17% (sum = 100%)\n- **Raghu:**\n  - Lying down = $\\dfrac{7}{24} \\times 100$ = 29.17%\n  - Sitting = $\\dfrac{4}{24} \\times 100$ = 16.67%\n  - Standing/Moving = $\\dfrac{13}{24} \\times 100$ = 54.17% (sum = 100.01%, due to rounding)\n- **Zakir:**\n  - Lying down = $\\dfrac{8}{24} \\times 100$ = 33.33%\n  - Sitting = $\\dfrac{6}{24} \\times 100$ = 25.00%\n  - Standing/Moving = $\\dfrac{10}{24} \\times 100$ = 41.67% (sum = 100%)\n- **Sahana (from (i)):**\n  - Lying down = $\\dfrac{8}{24} \\times 100$ = 33.33%\n  - Sitting = $\\dfrac{6}{24} \\times 100$ = 25.00%\n  - Standing/Moving = $\\dfrac{10}{24} \\times 100$ = 41.67% (sum = 100%)\n- **Julie:**\n  - Lying down = $\\dfrac{8}{24} \\times 100$ = 33.33%\n  - Sitting = $\\dfrac{10}{24} \\times 100$ = 41.67%\n  - Standing/Moving = $\\dfrac{6}{24} \\times 100$ = 25.00% (sum = 100%)\n\nCompleting that graph with Sahana's data:\n\n![Completed 100% stacked bar chart; Sahana's bar is filled with the sample row 8, 6, 10](/figs/maths-0904ch10-ex10-5-q1-solved.svg)\n\n*Tip for drawing:* when rounded percentages are added, the total may come to 99.99% or 100.01% because of rounding (e.g. Raghu's row). Mark the segment boundaries using the exact hour fractions ($\\dfrac{x}{24}$ of the bar length), and the three segments will always fit the bar exactly."
            },
            "solNote": "Sahana's row is only a reasonable guess and Julie's work is only an inference — answers may vary."
          }
        ]
      },
      {
        "id": "ex10.end",
        "title": "End-of-Chapter Exercises",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "In cricket, the run rate is the average number of runs scored per over. In a T20 match, a team scored 6 runs in the first over making the run rate 6.\n\n(i) In the second over they scored 12 runs. What is the run rate now?\n\n(ii) After Over 19, their run rate was 6. What is the run rate after 20 overs given the team made 12 runs in the last over?",
            "answer": {
              "answerKey": "(i) 9 runs/over; (ii) 6.3 runs/over.",
              "schoolMethod": "(i) Total after two overs = 6+12=18.\n\nRun rate = $\\dfrac{18}{2}$ = **9 runs per over**.\n\n(ii) Runs after 19 overs = 19×6=114.\n\nAfter scoring 12, total =126 in 20 overs.\n\nFinal run rate =$\\dfrac{126}{20}$=**6.3 runs per over**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Five friends who play badminton surveyed the city and collected the price of shuttlecocks across brands and types (Nylon and Feather). The following is the list of the prices, in rupees (₹), that each one compiled.\n\nYusuf: 40(N), 105(N), 383(F), 108(N), 165(F), 116(F)\nSrikanth: 194(N), 85(N), 93(N), 121(N)\nKashvi: 49(N), 297(F), 105(N), 275(F), 40(N)\nPrasanna: 124(N), 333(F), 182(N), 258(F)\nGracy: 220(F), 458(F), 129(F), 183(N)\n\nCan you describe a way they can work together to find the average price of a shuttlecock across types?\n\n(i) Each one calculated the average of the prices they had gathered. Suppose these are $a_y$, $a_s$, $a_k$, $a_p$, $a_g$ respectively. Write an expression that gives the combined average.\n\n(ii) Suppose $a_n$, $a_f$ are the average prices of the nylon shuttlecocks and the feather shuttlecocks, respectively. Write an expression that gives the average price of a shuttlecock. Will this be equal to the answer we got using the method in the previous part?",
            "answer": {
              "answerKey": "(i) Combined mean = $\\dfrac{6a_y + 4a_s + 5a_k + 4a_p + 4a_g}{23}$. (ii) If 13 prices are nylon with mean $a_n$ and 10 are feather with mean $a_f$, the overall mean is $\\dfrac{13a_n + 10a_f}{23}$. Using the textbook's listed data, the mean is $\\dfrac{4063}{23}$ ≈ ₹176.65.",
              "schoolMethod": "From the list in the question:\n\n<table style='border-collapse:collapse'><tbody><tr><td style='border:0;padding:0 1.25rem 0 0;vertical-align:top'>No. of prices Yusuf collected</td><td style='border:0;padding:0;vertical-align:top'>= 6</td></tr><tr><td style='border:0;padding:0 1.25rem 0 0;vertical-align:top'>No. of prices Srikanth collected</td><td style='border:0;padding:0;vertical-align:top'>= 4</td></tr><tr><td style='border:0;padding:0 1.25rem 0 0;vertical-align:top'>No. of prices Kashvi collected</td><td style='border:0;padding:0;vertical-align:top'>= 5</td></tr><tr><td style='border:0;padding:0 1.25rem 0 0;vertical-align:top'>No. of prices Prasanna collected</td><td style='border:0;padding:0;vertical-align:top'>= 4</td></tr><tr><td style='border:0;padding:0 1.25rem 0 0;vertical-align:top'>No. of prices Gracy collected</td><td style='border:0;padding:0;vertical-align:top'>= (+) 4</td></tr><tr><td style='border:0;padding:0 1.25rem 0 0;vertical-align:top'>Total no. of prices</td><td style='border:0;padding:0;vertical-align:top'>= 23</td></tr></tbody></table>\n\n**(i)** If their means are $a_y$, $a_s$, $a_k$, $a_p$ and $a_g$, the combined mean must weight each mean by how many prices contributed:\n\nCombined mean = $\\dfrac{6a_y + 4a_s + 5a_k + 4a_p + 4a_g}{23}$.\n\nUsing the actual prices listed in the question, the total is ₹4,063, so the combined mean is $\\dfrac{4063}{23}$ ≈ **₹176.65**.\n\n**(ii)** The 13 nylon prices have mean $a_n=\\dfrac{1429}{13}$≈₹109.92.\n\nThe 10 feather prices have mean $a_f=\\dfrac{2634}{10}$=₹263.40.\n\nTherefore the combined mean is\n\n$\\dfrac{13a_n+10a_f}{23}$\n\n\u00a0\u00a0\u00a0= $\\dfrac{4063}{23}$ ≈ **₹176.65**. Both approaches agree because they give each individual price equal weight."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Shreyas holds 25 shares of a company at an average price of ₹150 and Vaishnavi holds 5 shares of the same company at an average price of ₹150.\n\n(i) Shreyas buys 10 shares of this company at a price of ₹30 each. What is the average price per share for him after the purchase?\n\n(ii) Vaishnavi buys some shares of this company at a price of ₹30 each and the average price per share for her after the purchase is ₹70. How many shares did she buy?",
            "answer": {
              "answerKey": "(i) ₹115.71 approx; (ii) 10 shares.",
              "schoolMethod": "(i) Initial cost\n\n\u00a0\u00a0\u00a0= 25×150\n\n\u00a0\u00a0\u00a0= ₹3,750.\n\nNew purchase\n\n\u00a0\u00a0\u00a0= 10×30\n\n\u00a0\u00a0\u00a0= ₹300.\n\nTotal cost\n\n\u00a0\u00a0\u00a0= ₹4,050 for 35 shares.\n\nNew average\n\n\u00a0\u00a0\u00a0= $\\dfrac{4050}{35}$ ≈ **₹115.71 per share**.\n\n(ii) Vaishnavi’s initial cost\n\n\u00a0\u00a0\u00a0= 5×150\n\n\u00a0\u00a0\u00a0= ₹750.\n\nLet x be the number bought at ₹30.\n\n$\\dfrac{750+30x}{5+x}$ = 70\n\n\u00a0\u00a0\u00a0⇒ 750+30x = 350+70x\n\n\u00a0\u00a0\u00a0⇒ 400 = 40x\n\n\u00a0\u00a0\u00a0⇒ **x = 10 shares**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "(Pṛthūdakasvāmī, commentary on Brahmagupta's Brāhmasphuṭasiddhānta, c. 864 CE) A “hasta” (meaning “forearm”) refers to a unit of length measuring around 18 inches. A pool 30 hastas long is dug to different depths along its length. It is divided into 5 sections having lengths 4, 5, 6, 7, and 8 hastas, and is dug to depths of 9, 7, 7, 3, and 2 hastas, respectively. Find the mean depth of the pool.",
            "answer": {
              "answerKey": "5 hastas.",
              "schoolMethod": "Mean depth is weighted by the lengths of the sections.\nTotal length =4+5+6+7+8=30 hastas.\nWeighted depth sum =4×9+5×7+6×7+7×3+8×2=36+35+42+21+16=150.\nMean depth =$\\dfrac{150}{30}$=**5 hastas**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Suvarna had purchased 1g gold at ₹15k (short for ₹15,000). This is shown by point O denoting the average price of gold that she possesses. Six different scenarios are given below for her next transaction. For each scenario estimate and mark the average price of gold she will have after the transaction.\n\n![Number line from 0 to 30 with point O marked at 15](/figs/maths-0904ch10-eoc-q5-numberline.png)\n\n(i) Purchase 1g gold at ₹30k (ii) Purchase 2g gold at ₹30k\n(iii) Purchase 1g gold at ₹10k (iv) Purchase 10g gold at ₹10k\n(v) Purchase 0.5g gold at ₹30k (vi) Purchase 0.5g gold at ₹15k",
            "answer": {
              "answerKey": "(i) ₹22,500; (ii) ₹25,000; (iii) ₹12,500; (iv) ₹10,454.55; (v) ₹20,000; (vi) ₹15,000 per g.",
              "schoolMethod": "Treat the original gram as costing ₹15,000. The new average is total cost divided by total grams.\n(i) $\\dfrac{15,000+30,000}{2}$=**₹22,500/g**.\n(ii) $\\dfrac{15,000+2×30,000}{3}$=**₹25,000/g**.\n(iii) $\\dfrac{15,000+10,000}{2}$=**₹12,500/g**.\n(iv) $\\dfrac{15,000+10×10,000}{11}$=$\\dfrac{115,000}{11}$≈**₹10,454.55/g**.\n(v) $\\dfrac{15,000+0.5×30,000}{1.5}$=$\\dfrac{30,000}{1.5}$=**₹20,000/g**.\n(vi) $\\dfrac{15,000+0.5×15,000}{1.5}$=$\\dfrac{22,500}{1.5}$=**₹15,000/g**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "Given some data with corresponding weights, how would the weighted average change if all the weights are doubled? If required, experiment with some data. What do you observe? Justify your answer using algebra.",
            "answer": {
              "answerKey": "It remains unchanged.",
              "schoolMethod": "For values xᵢ with weights wᵢ, the mean is μ=Σwᵢxᵢ/Σwᵢ. After doubling every weight,\nμ′=Σ(2wᵢ)xᵢ/Σ(2wᵢ)=2Σwᵢxᵢ/(2Σwᵢ)=Σwᵢxᵢ/Σwᵢ=μ.\nTherefore doubling all weights does **not** change the weighted mean."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "Answer the following questions based on the graph.\n\n![Cumulative number of objects currently orbiting Earth, by year of launch/separation (as of Apr. 24, 2026)](/figs/maths-0904ch10-eoc-q7-graph.png)\n\n(i) In 2003, approximately how many total objects were found orbiting Earth in space? In what year did this number double?\n\n(ii) Find the approximate number and share of payload objects and other objects in the year 2025.\n\n(iii) What can you say about the number of payload objects over time, and the number of other objects over time? What can you say about the share of payload objects over time, and the share of other objects over time?",
            "answer": {
              "answerKey": "(i) About 10,000 objects in 2003; the total reaches roughly 20,000 around 2021. (ii) In 2025, about 33,000 objects in total: approximately 17,000 payloads (about 52%) and 16,000 other objects (about 48%). (iii) Both categories increase in number; payloads rise particularly quickly in later years, so their share grows to about half while the share of other objects decreases.",
              "schoolMethod": "**(i) Doubling the total.** Read the stacked graph at 2003: the total is approximately **10,000 objects**. Twice this is 2 × 10,000 = 20,000. The cumulative total reaches about 20,000 near **2021** (read approximately from the graph).\n\n**(ii) Split in 2025.** The total height is approximately 33,000. The payload portion is about 17,000, so \\(\\dfrac{17,000}{33,000}\\times100\\%\\approx51.5\\%\\approx52\\%\\). The other-object count is about 33,000 − 17,000 = **16,000**, or \\(\\dfrac{16,000}{33,000}\\times100\\%\\approx48.5\\%\\approx48\\%\\). These are estimates because the graph is read visually.\n\n**(iii) Trend.** Both the payload count and other-object count increase over time. Payloads increase more sharply in the later years; consequently, payloads make up about 52% of the 2025 total and other objects about 48%, even though the number of other objects also continues to grow."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "Observe the following infographic.\n\n![What percentage of schools have a playground — map of India](/figs/maths-0904ch10-eoc-q8-map.png)\n\n(i) Identify the correct inference(s) from the statements given.\n\n(a) More schools have a playground in Haryana compared to Uttarakhand.\n\n(b) Approximately every 2 out of 3 schools in Arunachal Pradesh have a playground.\n\n(c) Punjab has the highest number of schools with a playground.\n\n(d) Suppose it is given that Maharashtra has more schools than Telangana. Then the number of schools having a playground is more in Maharashtra.\n\n(ii) Using the information given, can we find the nation-wide percentage of schools with a playground? If not, what additional information is needed?",
            "answer": {
              "answerKey": "(i) (b) and (d) can be inferred. (a) and (c) cannot be concluded from the displayed percentages alone. (ii) No. The number of schools in each state/UT (or the total count of schools and playground schools) is needed.",
              "schoolMethod": "**(i)(a)** The statement compares absolute counts, not percentages. The chart gives the share of schools with playgrounds; without knowing how many schools each state has, the count cannot be compared. **Not inferable.**\n\n**(i)(b)** Two out of three is about 66.7%, matching the displayed share for Arunachal Pradesh. **Inferable.**\n\n**(i)(c)** Punjab may have the highest displayed percentage, but that does not prove it has the largest count; state totals may differ. **Not inferable.**\n\n**(i)(d)** Given that Maharashtra has more schools than Telangana and the chart shows Maharashtra’s playground percentage is higher, the number with playgrounds must also be higher. If M and T are total schools and pM>pT while M>T, then MpM>TpT. **Inferable.**\n\n**(ii)** A national percentage is a weighted percentage: total schools with playgrounds divided by all schools. We need the number of schools in every state/UT (and then the corresponding playground counts), or equivalent nationwide totals. An unweighted average of state percentages would generally be incorrect."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "Decision Dilemma:\n\n(i) Which of the plays would you choose to watch based on the following chart?\n\n![Share of ratings of three plays — 100% stacked bar chart](/figs/maths-0904ch10-eoc-q9a-chart.png)\n\n(ii) The corresponding stacked bar chart is shown below. Would you change your decision after looking at this chart? Why/ Why not? Discuss.\n\n![Ratings of three plays — stacked bar chart](/figs/maths-0904ch10-eoc-q9b-chart.png)",
            "answer": {
              "answerKey": "(i) Play B is a reasonable overall choice: it has the largest combined share of 4-star and 5-star ratings and the smallest 1-star share. Play C has the largest 5-star share but also a substantial 1-star share. (ii) The absolute-count chart also favours B for the number of favourable ratings because many more ratings were recorded for B.",
              "schoolMethod": "**(i) Percentage chart.** All bars total 100%, so compare the distribution of ratings. Combining the 4-star (red) and 5-star (blue) portions, Play B has the largest favourable share. Play C has the largest 5-star portion alone, but also a sizeable 1-star (grey) portion. On an overall balance of very positive ratings and fewest 1-star ratings, **Play B** is the most defensible choice. A different personal preference (for example, valuing only 5-star ratings) could lead to a different choice.\n\n**(ii) Absolute-count chart.** This chart shows counts rather than shares. Play B has far more ratings than the other plays and therefore also the largest absolute number of 4- and 5-star ratings. Thus the second chart supports choosing **Play B** too, but it answers a different question: total counts versus proportion of each play’s ratings."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "text": "A triathlon is an endurance race consisting of swimming 3.8 km, cycling 180 km, and running 42.2 km. Athletes compete for the fastest overall time, completing each segment in that order. The following table shows the finish time of 3 athletes in each segment.\n\n**Table 10.4:** Finish time of three athletes in each segment of a triathlon race (values in hh : mm)\n\n| | Swimming | Cycling | Running |\n|---|---|---|---|\n| Athlete 1 | 01:08 | 05:00 | 03:15 |\n| Athlete 2 | 01:05 | 05:10 | 03:35 |\n| Athlete 3 | 01:22 | 05:55 | 03:50 |\n\n(i) What is a suitable representation of this data — a stacked bar chart or a 100% stacked bar chart? Why do you think so?\n\n(ii) Suppose a 100% stacked bar chart is drawn. Which of the following question(s) can be answered by looking at just that chart?\n\n(a) Who finished the race first?\n\n(b) Approximately what fraction of their race time did Athlete 1 spend cycling?\n\n(c) Which athlete took the longest for running?",
            "answer": {
              "answerKey": "(i) Stacked bar chart. (ii) Only (b).",
              "schoolMethod": "(i) Use a **stacked bar chart**, because the total elapsed time matters and must be compared in absolute units. Convert to minutes if needed: Athlete 1 =68+300+195=563 min (9 h 23 min); Athlete 2 =65+310+215=590 min (9 h 50 min); Athlete 3 =82+355+230=667 min (11 h 7 min). Thus Athlete 1 finishes first.\n\n(ii) A 100% chart shows proportions of each athlete’s time, so it answers **(b)**: Athlete 1’s cycling share is $\\dfrac{300}{563}$≈53.3%. It does not establish (a), since total durations are lost; nor (c), because a segment’s share cannot by itself tell which athlete had the greatest absolute running time."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "text": "Look at the following graph. What do you notice? What do you wonder? Write your inferences.\n\n![Distribution of disabled persons by age group and type of disability in India (Census 2011)](/figs/maths-0904ch10-eoc-q11-graph.png)",
            "answer": {
              "answerKey": "The chart compares proportions of disability types within each age group; movement/seeing/hearing categories are substantial, and patterns vary by age.",
              "schoolMethod": "Each bar represents 100% of the disabled persons in one age group, so compare segment **shares**, not absolute numbers. A suitable observation is that the mix of disability types differs across age groups; movement-related disability tends to occupy a larger share among older groups, while some other types take larger relative shares among younger groups. The chart alone does not tell how many disabled persons are in each age group because absolute group totals are not shown. Useful follow-up questions include the counts by age group, causes of disability, and how trends differ by gender or region."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "text": "Individual project: Do at least one of the following.\n\n(i) Recall the previous day and fill in the approximate time spent lying down, sitting, and standing/moving around, etc. Ask at least 2 of your family members about their day and fill it in. Alternatively, you can choose to track just your own body-state for any one of the weekdays, Saturday, and Sunday. Visualise it using a stacked bar chart. Discuss with your class how you arrived at the estimated time spent in each state.\n\n(ii) Visualise your family’s monthly expenditure using a 100% stacked bar chart.\n\n(a) First, identify the expense categories in your family budget.\n\n(b) Discuss with your family members to decide how you will collect and organise the data.\n\n(c) Collect expense data for at least 3 months.\n\n(d) Represent the data in a 100% stacked bar chart, with each bar showing how the total monthly expenditure is divided across the different categories.\n\n(e) Finally, write your observations and inferences based on the chart.",
            "answer": {
              "answerKey": "Sample project solution provided.",
              "schoolMethod": "**Sample response for (i):** Record 24-hour totals (lying/sitting/moving): Student = (8,7,9), parent 1 = (7,8,9), parent 2 = (7,7,10). Each row sums to 24 hours. Percentages are each hours÷24×100; for the student, 33.3%, 29.2%, 37.5%. Draw equal-length 100% bars split into these three categories.\n\n**Sample response for (ii):** Suppose monthly expenditure in ₹ is Housing/Food/Education/Transport/Health/Other: January 8,000/6,000/2,000/1,500/1,000/1,500; February 8,000/6,200/2,000/1,600/800/1,400; March 8,000/5,800/2,000/1,700/1,200/1,300. Convert each category to a percentage of that month’s total and draw one 100% bar per month. Compare changes in shares, not just rupee amounts; note that actual family data should replace these illustrative figures."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": false,
            "text": "Small-group project: Make a group of 3–4 students. Choose one scenario to design a custom rating scheme by assigning appropriate weights: (a) shopping experience at a cloth store, (b) travel experience in a bus, (c) tourism experience of a nearby tourist spot, (d) clinic/hospital experience\n\n(i) Discuss and arrive at 4–6 aspects to rate. For each aspect chosen, justify why it matters for an overall experience.\n\n(ii) Discuss and decide the relative weights and justify.\n\n(iii) Collect or imagine ratings from at least 10 people on a scale of 1–5 (5 being very good).\n\n(iv) Compute each individual rating. Compute the overall average across individuals.\n\n(v) Make a 100% stacked bar chart using your data.\n\n(vi) Write a short note on the observations and inferences, what your rating system captures well and what it misses.",
            "answer": {
              "answerKey": "Illustrative weighted-rating project included.",
              "schoolMethod": "**Example: local tourist spot.** Rate cleanliness, accessibility, safety, information/signage and attractions on a 1–5 scale, with weights 3:2:3:1:4 respectively. The weights sum to 13. For a visitor who gives 4, 3, 5, 4, 5, the score is [3(4)+2(3)+3(5)+1(4)+4(5)]/13=$\\dfrac{53}{13}$≈4.08.\n\nUse the same weighted-mean formula for each of ten visitors, then average their ten scores. For the 100% stacked chart, show each visitor’s ratings as shares of their weighted total or show the proportion of respondents in each rating band per aspect. Report which aspects score highest/lowest and acknowledge that a 1–5 rating may not capture every aspect. This is a complete model; replace sample ratings with the group’s ten responses."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": false,
            "text": "Whole class project: Each student shares the average age of their family and the number of family members. Discuss among the class and come up with a way to find out the average age of all the families of the class.",
            "answer": {
              "answerKey": "Weighted average: Σ(family size × family mean age)/Σ(family sizes).",
              "schoolMethod": "For family i, let nᵢ be the number of members and aᵢ their average age. Their combined ages total nᵢaᵢ. Add all family totals and divide by the total number of people: **class average age = $\\dfrac{\\Sigma n_i a_i}{\\Sigma n_i}$**. A simple average of the family averages would be wrong unless every family had the same size."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": true,
            "text": "Given some data with corresponding weights, what would happen to the weighted average if all the weights are increased by a constant value, say 1? If required, experiment with some data. What do you observe? Justify your answer using algebra.",
            "answer": {
              "answerKey": "It generally changes, moving toward the unweighted mean; it does not have a fixed direction for every data set.",
              "schoolMethod": "Original weighted mean: μ=$\\dfrac{\\Sigma w_i x_i}{\\Sigma w_i}$. If each of n weights is increased by c, then μ′=$\\dfrac{\\Sigma w_i x_i+c\\Sigma x_i}{\\Sigma w_i+nc}$. This is generally different from μ and can be written as a weighted combination of the old weighted mean and the unweighted mean.\n\nExample: values 10 and 20 with weights 1 and 3 give μ=$\\dfrac{10+60}{4}$=17.5. Increasing both weights by 1 gives μ′=$\\dfrac{2×10+4×20}{6}$=$\\dfrac{100}{6}$≈16.67. Thus increasing all weights by the same additive constant is not the same as multiplying all weights by a common factor."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": false,
            "text": "A farm has some cows, sheep, and chickens. Last year the cows made up 60%, the sheep 25%, and the chickens 15%. There was a decrease in the number of all three animals’ population over the year. Choose the possibilities for the change in their respective shares of the population —\n\n(i) % of cows decreased, % of sheep decreased, % of chickens decreased\n\n(ii) % of cows increased, % of sheep increased, % of chickens increased\n\n(iii) % of cows remained the same, % of sheep remained the same, % of chickens remained the same\n\n(iv) % of cows decreased, % of sheep increased, % of chickens remained the same\n\n(v) % of cows increased, % of sheep increased, % of chickens decreased.",
            "answer": {
              "answerKey": "(iii), (iv) and (v) are possible; (i) and (ii) are impossible.",
              "schoolMethod": "The three shares must always add to 100%, so they cannot **all decrease** or **all increase**; (i) and (ii) are impossible.\n\n(iii) is possible if all three populations shrink by the same percentage, preserving their ratios.\n\n(iv) is possible if the chicken population shrinks by the same factor as the total, sheep shrink less rapidly, and cows shrink more rapidly. For example, initial counts (60,25,15) can become (24,18.5,7.5), with all populations smaller but shares 48%, 37%, 15%.\n\n(v) is possible if cows and sheep shrink less rapidly than the chicken population, so their shares rise while the chicken share falls."
            }
          }
        ]
      },
      {
        "id": "ex10.reflect",
        "title": "Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "page": 8,
            "text": "Why did Method 1 not work?",
            "answer": {
              "answerKey": "Method 1 treats the average heights of seniors and juniors equally — but there are many more seniors (8) than juniors (3).",
              "schoolMethod": "**Method 1 does not work because it treats the average heights of seniors and of juniors equally — but there are many more seniors than juniors!**\n\nMethod 1 simply averages the two group averages: (165.5 + 149.33) ÷ 2 = 157.415 cm. This gives the senior average and the junior average equal weight, as if there were equal numbers of seniors and juniors.\n\nBut there are 8 seniors and only 3 juniors, so the seniors are most of the group. The combined average must lie much closer to 165.5 than to 149.33. Method 2 does it correctly: (165.5 × 8 + 149.33 × 3) ÷ 11 = 1772 ÷ 11 = **161.09 cm** — a weighted mean where every student counts equally.\n\n**Remember:** never average averages unless the groups are the same size."
            }
          },
          {
            "id": "q3",
            "number": "1",
            "isHard": false,
            "page": 26,
            "text": "What does this say about the scope of the stacked bars and 100% stacked bars?",
            "answer": {
              "answerKey": "Stacked bars show the actual quantities (and totals); 100% stacked bars show only the proportions — percentages alone cannot tell the actual number.",
              "schoolMethod": "**This says that** stacked bars show actual quantities and totals, while 100% stacked bars show proportions only — percentages alone cannot tell the actual number. For example, Fatima's garden can have a higher percentage of blooms yet fewer actual blooms than Naveen's."
            }
          },
          {
            "id": "q3b",
            "number": "2",
            "isHard": false,
            "page": 26,
            "text": "Given a stacked bar chart can we make a corresponding 100% stacked bar chart?",
            "answer": {
              "answerKey": "Yes — we divide each segment by the bar's total and multiply by 100%.",
              "schoolMethod": "**Yes.** We divide each segment by the bar's total and multiply by 100%. The new segments are the percentage shares, and the bar totals 100% — a 100% stacked bar chart."
            }
          },
          {
            "id": "q3c",
            "number": "3",
            "isHard": false,
            "page": 26,
            "text": "Given a 100% stacked bar chart can we make a corresponding stacked bar chart?",
            "answer": {
              "answerKey": "No, we cannot make a corresponding stacked bar chart because percentages alone do not tell the original totals.",
              "schoolMethod": "**No, we cannot make a corresponding stacked bar chart because** percentages alone do not tell the original totals: the same percentages can describe bars of very different sizes (in Case 1 both gardens had 42 blooms, yet the percentages were different)."
            }
          },
          {
            "id": "q3d",
            "number": "4",
            "isHard": false,
            "page": 26,
            "text": "What kind of inferences or comparisons can be made from a stacked bar chart and in a 100% stacked bar chart?",
            "answer": {
              "answerKey": "Stacked bars: compare totals and absolute amounts. 100% stacked bars: compare compositions/shares within each total.",
              "schoolMethod": "**From a stacked bar chart we can compare totals and the absolute amount of each category. From a 100% stacked bar chart we can compare the composition (percentage share of each category) within each total — but not the actual numbers.**"
            }
          },
          {
            "id": "q4",
            "number": "1",
            "isHard": false,
            "page": 27,
            "instruction": "When we visualise the same data by grouping ages, we get the following stacked column chart:<br /><img src=\"/figs/maths-0904ch10-fig10-6.png\" alt=\"Fig. 10.6 Age-wise grouping of data\" style=\"display:block;width:100%;max-width:520px;height:auto;margin-top:10px;border-radius:8px;border:1px solid var(--border)\" /><div style=\"font-size:11px;font-style:italic;color:var(--note-text);margin-top:6px\">Fig. 10.6: Age-wise grouping of data (Values are rounded off). Source: National Time Use Survey 2024.</div>",
            "text": "What do you find interesting in the chart above? What can you infer? Discuss.",
            "answer": {
              "answerKey": "Children spend more time learning, adults spend more time in paid and unpaid work, and sleep declines with age.",
              "schoolMethod": "In Fig. 10.6, children (6–14 years) devote the largest share of their day to Learning, while the 15–24 group and adults devote most time to Paid Work and Unpaid Work & Care; sleep is the largest single block in every age group but slowly falls with age. We infer that activity patterns shift systematically across age — learning declines, work rises and sleep falls slightly."
            }
          },
          {
            "id": "q4b",
            "number": "2",
            "isHard": false,
            "page": 27,
            "text": "Do you remember the sleep time over age trend that you studied last year? Does that trend align with this chart?",
            "answer": {
              "answerKey": "Yes — sleep time decreases with age, which is exactly what this chart shows.",
              "schoolMethod": "Last year we read that sleep time steadily falls as age increases. The same trend is visible here: children sleep the most, the 15–24 group sleeps a little less, and adults sleep the least of the three age groups. The chart aligns with the known trend."
            }
          },
          {
            "id": "q4c",
            "number": "3",
            "isHard": false,
            "page": 27,
            "text": "Can you explain why the learning time of people in the age group 15 – 24 has reduced significantly compared to that of the age group 6 – 14?",
            "answer": {
              "answerKey": "Because 15–24-year-olds spend far more time in paid and unpaid work — learning is no longer their main activity, unlike children aged 6–14.",
              "schoolMethod": "For children aged 6–14, school is their main activity, so Learning takes up the largest share of the day. The 15–24 group is at the stage of higher studies, job hunting and early careers: many have left school, and they spend much more time in Paid Work (or preparing for it) and Unpaid Work & Care. So the time devoted to Learning falls sharply — not because learning becomes unimportant, but because the structure of the day shifts from schooling to work and other responsibilities."
            }
          },
          {
            "id": "q4d",
            "number": "4",
            "isHard": false,
            "page": 27,
            "text": "Do adults spend about an equal amount of time in paid and unpaid work? What do you think?",
            "answer": {
              "answerKey": "Yes — the Paid Work segment and the Unpaid Work & Care segment are almost equal in size for the adult groups.",
              "schoolMethod": "**Yes.** In Fig. 10.6, the Paid Work and Unpaid Work & Care segments of the adult groups are almost equal in size. Unpaid work — cooking, cleaning and care work — takes roughly as much time as paid work."
            }
          },
          {
            "id": "q5",
            "number": "1",
            "isHard": false,
            "page": 28,
            "text": "Do you remember the ‘What Can A Strip Say?’ activity from last year? In each strip, if we club the tiny strips belonging to each activity together, will we get a 100% stacked bar chart like the one in Fig. 10.6?",
            "answer": {
              "answerKey": "Yes — clubbing each activity's strips gives shares adding to 24 hours = 100%, so the grouped strip is a 100% stacked bar chart.",
              "schoolMethod": "**Yes.** A single strip represents one full day (24 hours). Clubbing the strips of each activity gives that activity's total time in the day, and the shares add to 100%. Each strip, drawn with equal total length and the activity segments placed consecutively, is a 100% stacked bar chart like Fig. 10.6."
            }
          },
          {
            "id": "q6",
            "number": "1",
            "isHard": false,
            "page": 30,
            "text": "Will the bars look similar if a different teacher’s data is considered instead of Zakir’s?",
            "answer": {
              "answerKey": "No. Different teachers have different routines, travel, duties and home responsibilities, so their exact hours differ.",
              "schoolMethod": "**No.** A different teacher's hours in each activity will differ — routines, travel, duties and home responsibilities are never identical. The bars will not look the same as Zakir's."
            }
          },
          {
            "id": "q6b",
            "number": "2",
            "isHard": false,
            "page": 30,
            "text": "Will the bars look different if the data for all 7 days of the week is considered?",
            "answer": {
              "answerKey": "Yes. Adding Saturday and Sunday lowers the School share and raises leisure/personal care, so the proportions change.",
              "schoolMethod": "**Yes.** The five-weekday chart clearly shows School on working days. Saturday and Sunday have no school, so over seven days the School share shrinks and Leisure, Social & Travel and Personal Care increase. The total remains 100%, so the bars look different."
            }
          },
          {
            "id": "q6c",
            "number": "3",
            "isHard": false,
            "page": 30,
            "text": "Some bars in the chart may also match people doing other kinds of work/activities. Can you think of any? Discuss.",
            "answer": {
              "answerKey": "Yes — doctors, police officers, farmers and homemakers share the same work + care + sleep pattern.",
              "schoolMethod": "**Yes.** Doctors/nurses (long work + study), police officers/soldiers (shifts + rest + travel), farmers (seasonal work), homemakers (large unpaid core) and shopkeepers (long paid hours plus family work) all mix work, unpaid care, sleep, personal care and leisure in the same building blocks. One day-chart alone cannot uniquely identify a job."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch11",
    "number": 11,
    "title": "The World of Algorithms",
    "slug": "the-world-of-algorithms",
    "code": "0904ch11",
    "beta": true,
    "exercises": [
      {
        "id": "ex11.1",
        "title": "Exercise Set 11.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Add two 4-digit numbers using the steps we have written down. Make sure you follow the steps precisely; do not perform any action that is not explicitly mentioned. Are you able to obtain the correct result?",
            "answer": {
              "answerKey": "Example: 4738 + 6957 = 11695.",
              "schoolMethod": "Take 4738 and 6957.\n\nUnits: 8+7=15; write 5, carry 1.\nTens: 3+5+1=9; write 9, carry 0.\nHundreds: 7+9=16; write 6, carry 1.\nThousands: 4+6+1=11; write 1, carry 1.\nNo digits remain, so the final carry 1 is written at the left.\n\nTherefore **4738+6957=11695**. The result agrees with direct addition."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "What happens if you add a 5-digit number to a 3-digit number? Do our steps handle this situation correctly?",
            "answer": {
              "answerKey": "Only if the shorter number is padded with leading zeros or missing digits are treated as zero.",
              "schoolMethod": "The column algorithm must line up digits by place value from the right. For example, 54321+789 is written as 54321+00789. The columns then give 10 in the units (write 0, carry 1), 9 in tens, 1 in hundreds, 4 in thousands and 5 in ten-thousands, so the answer is **55110**. If the algorithm requires a digit in every column, the shorter number must be padded by leading zeros; otherwise the written steps need this clarification."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Why is it important to align the columns from right to left?",
            "answer": {
              "answerKey": "To align units with units, tens with tens, hundreds with hundreds, etc.",
              "schoolMethod": "In the decimal place-value system, a digit’s value depends on its position. Aligning from the right places units above units, tens above tens, and so on. Then each column adds quantities of the same place value, and each carry is transferred to the next place. Misalignment would add different place values together and give an incorrect sum."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "In Step 3, why cannot the value of carry be more than 1?",
            "answer": {
              "answerKey": "Maximum digit-column sum is 9+9+1=19, so the carry is at most 1.",
              "schoolMethod": "Each digit is at most 9 and the previous carry is either 0 or 1. Thus the largest possible column sum is 9+9+1=19. The carry is the number of tens in that sum, which can only be 0 or 1. It can never be 2 or more."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "What happens if we do not include the fifth step in the algorithm above? Give examples where the algorithm will work correctly and where it will fail to work.",
            "answer": {
              "answerKey": "It works if the leftmost column produces no carry; it fails if a carry remains.",
              "schoolMethod": "For 1234+2345=3579, no carry remains after the thousands column, so omitting Step 5 does not change the result.\n\nFor 4738+6957, the thousands column gives 4+6+1=11, leaving a carry of 1 after all displayed columns are used. If Step 5 is omitted, the written answer would be 1695 instead of 11695. Hence the final-carry step is essential whenever a carry remains."
            }
          }
        ]
      },
      {
        "id": "ex11.2",
        "title": "Exercise Set 11.2",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Suppose List 1 and List 2 are two lists of numbers in increasing order:\n\n(i) Write an algorithm to find elements in List 1 that are not present in List 2.\n\n(ii) Write an algorithm to find elements in List 2 that are not present in List 1.",
            "answer": {
              "answerKey": "Use two-pointer scans; advance the smaller value and record it when it occurs only in its own list.",
              "schoolMethod": "**Algorithm for List 1 \\ List 2** (indices i=j=0):\n1. While i is within List 1 and j is within List 2: if L1[i] < L2[j], output L1[i] and increment i; if L1[i] > L2[j], increment j; if equal, increment both i and j.\n2. Output all remaining elements of L1.\n\n**Algorithm for List 2 \\ List 1:** exchange the roles of the lists. If duplicate values are allowed, first specify whether “elements” means distinct values or occurrences; for set difference, output each distinct missing value once. The increasing order makes these scans efficient."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Describe an algorithm to compute the least common multiple (lcm) of two numbers.",
            "answer": {
              "answerKey": "Compute lcm(m,n)=$\\dfrac{mn}{\\gcd(m,n)}$.",
              "schoolMethod": "A correct algorithm is:\n```text\nLCM(m,n):\n    g := GCD(m,n)\n    return (m / g) * n\n```\nHere `GCD` can be Euclid’s division algorithm. Since m and n share exactly their gcd as common prime-factor content, dividing m by g before multiplying by n avoids counting shared factors twice. The answer is the least positive integer divisible by both m and n."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": true,
            "text": "Divisors occur in pairs. For instance, the divisors of 18 are (1, 18), (2, 9) and (3, 6).\n\n(i) If we write out divisors in pairs, how many numbers do we have to examine between 1 and n to find all the divisors of n?\n\n(ii) If we list out the divisors in pairs, will our gcd algorithm still work in the manner we have described?",
            "answer": {
              "answerKey": "(i) Check through ⌊√n⌋. (ii) Yes, after ordering/comparing common divisors rather than relying on the last item in an unsorted list.",
              "schoolMethod": "(i) If j divides n, the paired factor is $\\dfrac{n}{j}$. At least one of the pair is at most √n, since if both were larger their product would exceed n. Therefore check j=1,2,…,⌊√n⌋. Whenever j divides n, record both j and $\\dfrac{n}{j}$ (record only one copy if j=√n).\n\n(ii) Yes, the common-divisor method still works if the divisors are paired. However, the list may no longer be in increasing order. So one cannot automatically report the rightmost/last common divisor as the gcd; instead compare all common divisors and report the largest, or use a descending search that stops at the first common divisor."
            }
          }
        ]
      },
      {
        "id": "ex11.3",
        "title": "Exercise Set 11.3",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "How would our original algorithm change if we computed the divisors of n by examining the numbers from 1 to n in reverse order, from n down to 1?",
            "answer": {
              "answerKey": "Scan n,n−1,…,1; divisors are output in decreasing order.",
              "schoolMethod": "Initialize an empty list D. For j = n, n−1, …, 1, if n mod j = 0, append j to D. Because the scan is descending, D contains the divisors in decreasing order. The first divisor found is n and the last is 1."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "What about the last algorithm described above? What happens when we look at common divisors starting from min(m, n) and work backwards to 1?",
            "answer": {
              "answerKey": "The first common divisor found is gcd(m,n), so the scan can stop immediately.",
              "schoolMethod": "Set s=min(m,n). For j=s,s−1,…,1, test whether m mod j=0 and n mod j=0. The first j satisfying both conditions is the **greatest** common divisor, because every larger candidate has already been checked and rejected. Thus return j immediately; no list of common divisors is needed."
            }
          }
        ]
      },
      {
        "id": "ex11.end",
        "title": "End-of-Chapter Exercises",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Compute the following using the improved version of Euclid’s algorithm.\n\n(i) gcd(375, 825)\n\n(ii) gcd(51000, 81000)\n\n(iii) gcd(1789287, 237656)\n\n(iv) gcd(2587392, 157656)",
            "answer": {
              "answerKey": "(i) 75; (ii) 3000; (iii) 1; (iv) 24.",
              "schoolMethod": "(i) 825=2(375)+75; 375=5(75)+0, so gcd=**75**.\n\n(ii) 81000=1(51000)+30000; 51000=1(30000)+21000; 30000=1(21000)+9000; 21000=2(9000)+3000; 9000=3(3000)+0. Hence gcd=**3000**.\n\n(iii) Euclid’s algorithm gives successive remainders until the final non-zero remainder is 1, so gcd=**1** (the numbers are coprime).\n\n(iv) The successive remainders terminate at 24, with the next remainder 0, so gcd=**24**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Assume that m ≥ n. Verify that d divides m and n if and only if d divides both n and m mod n.",
            "answer": {
              "answerKey": "The common divisors of (m,n) are exactly the common divisors of (n,m mod n).",
              "schoolMethod": "**Proof.** Write m=qn+r, where r=m mod n.\n\n(⇒) If d|m and d|n, then d divides m−qn=r. Hence d|n and d|r.\n\n(⇐) If d|n and d|r, then d divides qn+r=m. Hence d|m and d|n.\n\nBoth directions hold, so the two pairs have exactly the same common divisors; in particular, their gcds are equal."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Write an algorithm prime(n) to check if n is prime.\n\n(Hint: A prime number p has exactly two distinct factors, 1 and p. Can you make use of divisors(n) to write out prime(n)?)",
            "answer": {
              "answerKey": "Return true exactly when divisors(n) has two elements.",
              "schoolMethod": "```text\nprime(n):\n    if n < 2: return false\n    D := divisors(n)\n    if length(D) = 2: return true\n    else: return false\n```\nA prime integer has exactly two positive divisors, 1 and itself. A number below 2 is not prime. Hence the test correctly distinguishes primes from composites."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Write an algorithm primedivisors(n) to compute the list of divisors of n that are prime numbers.\n\n(Hint: Compute divisors(n) and then filter out the primes in this list.)",
            "answer": {
              "answerKey": "Compute divisors and retain only primes.",
              "schoolMethod": "```text\nprimedivisors(n):\n    D := divisors(n)\n    P := empty list\n    for each d in D:\n        if prime(d): append d to P\n    return P\n```\nFor example, divisors(180) = [1,2,3,4,5,6,9,10,12,15,18,20,30,36,45,60,90,180], so primedivisors(180) = **[2,3,5]**. The algorithm checks every divisor and keeps precisely the prime ones."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "We can also find the gcd of two numbers by computing prime factorisation of both the numbers. Try to write an algorithm to compute the prime factorisation of a number.\n\n(i) The prime factorisation of 180 is 2² × 3² × 5¹. How would you represent this?\n\n(ii) How would you compare the prime factorisations of two numbers?",
            "answer": {
              "answerKey": "Represent as [(2,2),(3,2),(5,1)] or {2:2,3:2,5:1}; compare exponents.",
              "schoolMethod": "```text\nprimeFactorisation(n):\n    F := empty list of (prime, exponent) pairs\n    p := 2\n    while p*p <= n:\n        e := 0\n        while n mod p = 0:\n            n := n / p\n            e := e + 1\n        if e > 0: append (p,e) to F\n        p := p + 1\n    if n > 1: append (n,1) to F\n    return F\n```\n\n(i) Store 180=2²×3²×5 as **[(2,2),(3,2),(5,1)]**, meaning prime 2 has exponent 2, prime 3 exponent 2 and prime 5 exponent 1.\n\n(ii) For two numbers, compare the exponents of each prime, treating a missing prime as exponent 0. The gcd uses the **minimum** exponent for each prime; the lcm uses the **maximum** exponent. If every exponent in one factorisation is no larger than the corresponding exponent in the other, the first number divides the second."
            }
          }
        ]
      },
      {
        "id": "ex11.reflect",
        "title": "Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "page": 39,
            "text": "See if you can complete the argument about grouping by units, tens, hundreds, … to justify why the addition algorithm works.",
            "answer": {
              "answerKey": "Each column represents a power of ten; ten units of one place make one unit of the next, so carrying preserves the total value.",
              "schoolMethod": "Group both numbers into units, tens, hundreds, and so on. Adding a column gives a digit sum; write its remainder after division by 10 in that column and carry the quotient to the next column, because ten units of a place value equal one unit of the next place value. Doing this for every column keeps the total value unchanged, so the final digit string is the sum."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "page": 39,
            "text": "How would you modify the algorithm to add two decimal fractions?",
            "answer": {
              "answerKey": "Align the decimal points (pad with zeros) and add column by column, placing the decimal point in the answer. Example: 12.5 + 3.78 = 16.28.",
              "schoolMethod": "Align the decimal points and pad the shorter decimal with zeros so both have the same number of decimal places: 12.50 + 3.78. Now add column by column from the right, carrying exactly as for whole numbers, and place the decimal point in the same position in the answer: 12.50 + 3.78 = 16.28. Equivalently, multiply by 100 to get 1250 + 378 = 1628, then divide by 100."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "page": 41,
            "text": "Try to execute the algorithm to compute the divisors of 15, 135, and 775. How does the amount of work increase as the numbers grow?",
            "answer": {
              "answerKey": "Divisors: 15 → {1,3,5,15}; 135 → {1,3,5,9,15,27,45,135}; 775 → {1,5,25,31,155,775}.",
              "schoolMethod": "Check positive integers for exact divisibility and list each divisor once. Since 15 = 3 × 5, its divisors are 1, 3, 5, 15. Since 135 = 3³ × 5, its divisors are 1, 3, 5, 9, 15, 27, 45, 135. Since 775 = 5² × 31, its divisors are 1, 5, 25, 31, 155, 775. The algorithm tests every integer up to n, so the work grows in proportion to n; testing factor pairs only up to √n reduces the work substantially."
            }
          }
        
        ]
      }
    ]
  },
  {
    "id": "ch12",
    "number": 12,
    "title": "Quadrilaterals",
    "slug": "quadrilaterals",
    "code": "0904ch12",
    "beta": true,
    "exercises": [
      {
        "id": "ex12.1",
        "title": "Exercise Set 12.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Let ABCD be a quadrilateral.\n\n(i) List all sides of ABCD adjacent to side AB. List all sides opposite to AB.\n\n(ii) List all angles of ABCD adjacent to ∠A. List all angles opposite to ∠A.\n\n(iii) Define a pair of opposite sides and a pair of opposite angles without using the names of the vertices.",
            "answer": {
              "answerKey": "(i) AD, BC; CD. (ii) ∠B and ∠D; ∠C.",
              "schoolMethod": "(i) Sides adjacent to AB are **AD and BC**; the side opposite AB is **CD**.\n\n(ii) The angles adjacent to ∠A are **∠B and ∠D**; the angle opposite ∠A is **∠C**.\n\n(iii) Opposite sides are sides that do not share an endpoint. Opposite angles are angles whose vertices are not endpoints of the same side (the pair of non-adjacent vertex angles)."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": true,
            "text": "You have used internal angles of quadrilaterals, but they too require an exact definition, just like how we gave one for a quadrilateral. Precisely define the internal angle of a quadrilateral at a given vertex. Your answer should work for a non-convex quadrilateral too. (Hint: use the opposite vertex as well.)",
            "answer": {
              "answerKey": "It is the angle region bounded by the two adjacent sides that contains the opposite vertex; it may be reflex.",
              "schoolMethod": "At vertex A of quadrilateral ABCD, consider rays AB and AD. The **internal angle at A** is the angle swept from ray AB to ray AD through the region containing the opposite vertex C (equivalently, the side of the boundary designated as the quadrilateral’s interior). For a convex quadrilateral this is the smaller angle, less than 180°; at a reflex vertex of a non-convex quadrilateral it is the reflex angle, greater than 180°. This specification distinguishes the interior angle from the exterior angle."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "In a quadrilateral ABCD, suppose AB ∥ DC. Can ABCD be non-convex? What if we instead assume AB = CD? What if we instead assume ∠A = ∠C?",
            "answer": {
              "answerKey": "(i) No for a simple quadrilateral. (ii) Yes. (iii) Yes.",
              "schoolMethod": "(i) If opposite sides AB and DC are parallel in a simple quadrilateral, they lie on distinct parallel lines and the other two sides connect those lines without crossing. The four interior angles are all below 180°; hence ABCD is convex, not non-convex.\n\n(ii) **Yes.** Equal lengths of one pair of opposite sides alone do not force convexity. A concave four-sided figure can be constructed with AB and CD adjusted to have the same length while one interior angle is reflex.\n\n(iii) **Yes.** Equality of just one pair of opposite angles also does not force convexity. For instance, a concave quadrilateral can have ∠A=∠C=60° while its other angles are 190° and 50°; the angle sum is 360° and one angle is reflex."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Consider three non-collinear points A, B, C and draw the lines AB, BC, CA. For every possible location of point D in the plane outside these lines, decide if ABCD is self-intersecting, non-convex, or convex. (Hint: the three lines divide the plane into 7 regions.)",
            "answer": {
              "answerKey": "1 region gives a convex quadrilateral, 4 regions give non-convex quadrilaterals, and 2 regions give self-intersecting quadrilaterals.",
              "schoolMethod": "The three lines divide the plane into seven regions: the interior of △ABC, three regions immediately across its sides, and three outer vertex regions. For each position of D, connect A–B–C–D–A.\n\n• If D is inside △ABC, the quadrilateral is non-convex, with a reflex angle at D.\n• If D lies across AC, on the side opposite B, ABCD is convex.\n• If D lies in the region across AB, CD crosses AB; if it lies across BC, AD crosses BC. These are the two self-intersecting cases.\n• In each of the three outer vertex regions, one of A, B or C lies inside the triangle formed by the other three; the quadrilateral is non-convex.\n\nHence the count is **1 convex, 4 non-convex and 2 self-intersecting**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Can a quadrilateral be both self-intersecting and non-planar?",
            "answer": {
              "answerKey": "No.",
              "schoolMethod": "A self-intersecting quadrilateral has two non-adjacent side segments that cross. The crossing sides lie on two intersecting lines, which determine a plane containing all four endpoints. Therefore all four vertices are coplanar. A non-planar quadrilateral has non-coplanar vertices, so it cannot also be self-intersecting."
            }
          }
        ]
      },
      {
        "id": "ex12.2",
        "title": "Exercise Set 12.2",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "True or false?\n\n(i) A parallelogram with a right angle is a rectangle.\n\n(ii) A rhombus with perpendicular diagonals is a square.\n\n(iii) If the diagonals of a parallelogram are equal, then it is a rectangle.",
            "answer": {
              "answerKey": "(i) True. (ii) False. (iii) True.",
              "schoolMethod": "(i) **True.** Adjacent angles in a parallelogram are supplementary. If one angle is 90°, its adjacent angle is also 90°, and then all four angles are right angles: it is a rectangle.\n\n(ii) **False.** The diagonals of every rhombus are perpendicular, but a rhombus need not be a square. A non-square rhombus is a counterexample. Add the condition that a diagonal’s length equals the other (or that one angle is 90°) to force a square.\n\n(iii) **True.** In a parallelogram, equal diagonals imply two adjacent triangles are congruent in a way that makes an angle a right angle; equivalently, a parallelogram with equal diagonals is a rectangle."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "The diagonal AC of a parallelogram ABCD bisects ∠A. Show that it also bisects ∠C and that ABCD is a rhombus.",
            "answer": {
              "answerKey": "AC bisects ∠C and AB=BC=CD=DA.",
              "schoolMethod": "**Given:** ABCD is a parallelogram and ∠DAC=∠CAB.\n**To prove:** ∠DCA=∠ACB and ABCD is a rhombus.\n\nSince AB∥DC, ∠DCA=∠CAB (alternate interior angles). Given ∠CAB=∠DAC, so ∠DCA=∠DAC. Hence △ADC is isosceles and **AD=DC**. In a parallelogram, opposite sides are equal: AB=DC and AD=BC. Therefore AB=BC=CD=DA, so ABCD is a rhombus. Also, AD∥BC gives ∠DAC=∠ACB; together with ∠DAC=∠CAB and ∠DCA=∠CAB, we obtain ∠DCA=∠ACB. Hence AC bisects ∠C as required."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "The following questions examine converses of true properties. Answer them with Yes or No. If your answer is No, what extra condition can you add so that the answer becomes Yes?\n\n(i) If the diagonals of a quadrilateral ABCD bisect its angles, must ABCD be a rhombus?\n\n(ii) If the diagonals of a quadrilateral ABCD bisect each other at right angles, must ABCD be a rhombus?\n\n(iii) If the diagonals of a quadrilateral ABCD are of equal length, must ABCD be a rectangle? (In the ancient Indian study of quadrilaterals, equality of diagonals was considered significant. Quadrilaterals were first classified according to whether their diagonals were equal or not, before considering equality of sides.)",
            "answer": {
              "answerKey": "(i) Yes. (ii) Yes. (iii) No; add that ABCD is a parallelogram.",
              "schoolMethod": "(i) **Yes.** If both diagonals bisect the opposite angles, the adjacent right triangles formed by the diagonals are congruent; this gives equal adjacent sides, and the quadrilateral is a rhombus.\n\n(ii) **Yes.** If the diagonals bisect each other, ABCD is a parallelogram. If they also meet at right angles, its adjacent sides form equal right triangles, so adjacent sides are equal; hence it is a rhombus.\n\n(iii) **No.** An isosceles trapezium has equal diagonals but need not be a rectangle. Add the condition that ABCD is a **parallelogram**; a parallelogram with equal diagonals is a rectangle."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Let ABCD be a parallelogram with AB ≠ BC. Show that the pairwise intersection points of the four angle bisectors form the vertices of a rectangle (see Fig. 12.11). Why did we assume AB ≠ BC?\n\n![ch12-ex12-2-q4-fig12-11](/figs/maths-0904ch12-ex12-2-q4-fig12-11.png)",
            "answer": {
              "answerKey": "The four intersection angles are 90°, so the inner quadrilateral is a rectangle; AB≠BC avoids a degenerate rhombus case.",
              "schoolMethod": "**Proof:** In a parallelogram, each pair of adjacent interior angles is supplementary. Let ∠A=α and ∠B=180°−α. Their internal bisectors make an angle $\\dfrac{\\alpha}{2}+\\dfrac{180^\\circ-\\alpha}{2}$=90°. The same calculation holds at each intersection of adjacent angle bisectors. Thus the quadrilateral formed by the four intersection points has four right angles and is a **rectangle**.\n\nIf AB=BC, the parallelogram is a rhombus. The bisectors of opposite angles then lie along the same diagonals, causing the “four intersection points” to coincide in pairs, so the inner rectangle degenerates. The assumption AB≠BC excludes that case."
            }
          }
        ]
      },
      {
        "id": "ex12.3",
        "title": "Exercise Set 12.3",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "(i) If P, Q, R are the midpoints of sides AB, AC, BC respectively of △ABC, show that △PQR is congruent to △QPA and to two other triangles which you should identify.\n\n(ii) Suppose someone erases △ABC, leaving only △PQR on the paper. Can you reconstruct △ABC from △PQR?\n\n![ch12-ex12-3-q1-fig12-22](/figs/maths-0904ch12-ex12-3-q1-fig12-22.png)",
            "answer": {
              "answerKey": "All four small triangles are congruent; PQR alone fixes the three side lengths of ABC, but not its orientation (which is irrelevant to congruence).",
              "schoolMethod": "(i) By the Midpoint Theorem, PQ=$\\dfrac{BC}{2}$, PR=$\\dfrac{AC}{2}$ and QR=$\\dfrac{AB}{2}$. Also AP=PB=$\\dfrac{AB}{2}$, AQ=QC=$\\dfrac{AC}{2}$ and BR=RC=$\\dfrac{BC}{2}$. Thus each of △APQ, △PBR, △QCR and △PQR has side lengths $\\dfrac{AB}{2}$, $\\dfrac{AC}{2}$, $\\dfrac{BC}{2}$ in some order. By **SSS**, all four are congruent.\n\n(ii) Yes, up to congruence: construct a triangle whose sides are twice the corresponding side lengths of △PQR; its side lengths are AB, AC and BC. By SSS, this reconstructed △A′B′C′ is congruent to △ABC."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "In △ABC, let M and N be midpoints of AB and AC respectively. Let D be any point on BC. Show that MN bisects AD.",
            "answer": {
              "answerKey": "If MN meets AD at P, then AP=PD.",
              "schoolMethod": "**Given:** M and N are the midpoints of AB and AC; D lies on BC. Let AD meet MN at P.\n**To prove:** AP=PD.\n\nBy the Midpoint Theorem in △ABC, MN∥BC. Since D lies on BC, MN∥BD. In △ABD, M is the midpoint of AB and the line MP (part of MN) is parallel to BD. By the **converse of the Midpoint Theorem**, P is the midpoint of AD. Thus AP=PD."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "In a quadrilateral ABCD, suppose AB ∥ DC and AB ≠ CD. Suppose G and H are the midpoints of AC and BD respectively. Prove that GH ∥ AB. (Why did we assume AB ≠ CD?)",
            "answer": {
              "answerKey": "GH is parallel to both bases; AB≠DC avoids the parallelogram case where G=H.",
              "schoolMethod": "**Proof:** Draw diagonal AC. In △ABC, G and H are not both midpoints of the same triangle; instead use coordinates or a standard trapezium mid-segment argument. Set A=(0,h), B=(b,h), D=(d,0), C=(d+c,0), where AB=b and DC=c. Then G=($\\dfrac{d+c}{2}$,$\\dfrac{h}{2}$) and H=($\\dfrac{b+d}{2}$,$\\dfrac{h}{2}$). They have the same y-coordinate, so **GH∥AB∥DC**.\n\nIf AB=DC while the bases are parallel, ABCD is a parallelogram. Its diagonals bisect each other, so G=H and GH is not a non-zero segment. The condition prevents this degenerate case."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Suppose the midpoints of sides AB, BC, CD and DA of a quadrilateral ABCD are P, Q, R and S respectively.\n\n(i) Show that PR and QS bisect each other.\n\n(ii) Show that if AC = BD, then PR and QS are perpendicular. Is the converse true?",
            "answer": {
              "answerKey": "PR and QS bisect each other. Also, PR ⟂ QS if and only if AC = BD; therefore the converse is true.",
              "schoolMethod": "**(i) Given:** P, Q, R, S are the midpoints of AB, BC, CD and DA.\n\nBy the Midpoint Theorem in △ABC and △ADC, PQ ∥ AC and PQ=$\\dfrac{AC}{2}$; similarly SR ∥ AC and SR=$\\dfrac{AC}{2}$. Hence PQ ∥ SR and PQ=SR. Likewise, QR ∥ BD and QR=$\\dfrac{BD}{2}$, while PS ∥ BD and PS=$\\dfrac{BD}{2}$. Therefore PQRS is a parallelogram (both pairs of opposite sides are parallel). The diagonals of a parallelogram bisect each other, so **PR and QS bisect each other**.\n\n**(ii)** If AC=BD, then PQ=$\\dfrac{AC}{2}$=$\\dfrac{BD}{2}$=QR. Thus the parallelogram PQRS has equal adjacent sides and is a rhombus. The diagonals of a rhombus are perpendicular, so PR ⟂ QS.\n\n**Converse:** Suppose PR ⟂ QS. Since PR and QS bisect each other, PQRS is a parallelogram whose diagonals are perpendicular; hence it is a rhombus. Thus PQ=QR. Since PQ=$\\dfrac{AC}{2}$ and QR=$\\dfrac{BD}{2}$, we obtain $\\dfrac{AC}{2}$=$\\dfrac{BD}{2}$, so **AC=BD**. Hence the converse is true."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "Suppose PQRS is the Varignon parallelogram of ABCD.\n\n(i) Copy only PQRS on another paper. Show how you will recreate a congruent copy A′B′C′D′ of ABCD from PQRS. This will be relevant when we return to study tilings at the end of this chapter. (Hint: How will you place vertex A′? How will you place B′, C′ and D′?)\n\n(ii) There are multiple ways to construct A′B′C′D′ in (i). Justify why the quadrilateral A′B′C′D′ you constructed is congruent to ABCD. You may need to show why S is collinear with the points A′ and D′ that you constructed, and similarly for P, Q and R. (Hint: Use congruence of triangles, for example ΔSDR ≅ ΔSD′R.)\n\n(iii) Show that if PQRS is a square, then AC and BD are perpendicular and equal. Prove the converse.",
            "answer": {
              "answerKey": "(i)–(ii) As stated, PQRS alone does not determine a unique congruence class for ABCD, so an arbitrary original quadrilateral cannot always be reconstructed congruently without extra information. (iii) PQRS is a square if and only if AC=BD and AC ⟂ BD.",
              "schoolMethod": "**(i)–(ii) Important mathematical qualification.** Copying only the Varignon parallelogram PQRS does not, in general, determine a unique quadrilateral ABCD up to congruence. The construction “copy △APS” would require knowing AP and AS or the position of A, but neither is specified by PQRS alone.\n\nA counterexample shows the underdetermination. The square with vertices A=(−2,0), B=(0,2), C=(2,0), D=(0,−2) has midpoint quadrilateral with vertices (−1,1), (1,1), (1,−1), (−1,−1), a square of side 2. The non-square convex quadrilateral A=(−2,0), B=(0,1), C=(2,0), D=(0,−3) has midpoint quadrilateral (−1,0.5), (1,0.5), (1,−1.5), (−1,−1.5), also a square of side 2, yet its side lengths are √5, √5, √13, √13 instead of 2√2, 2√2, 2√2, 2√2. Therefore these two original quadrilaterals are not congruent, although their Varignon parallelograms are congruent. More information (for example, a diagonal-intersection position or one additional appropriate measurement) is needed for a unique reconstruction.\n\n**(iii) Square condition.** By the Midpoint Theorem, adjacent sides of PQRS are parallel to the diagonals AC and BD of ABCD and have lengths $\\dfrac{AC}{2}$ and $\\dfrac{BD}{2}$. If PQRS is a square, its adjacent sides are equal and perpendicular, so AC=BD and AC ⟂ BD. Conversely, if AC=BD and AC ⟂ BD, adjacent sides of PQRS are equal and perpendicular. Since PQRS is a parallelogram, it is then a square."
            }
          }
        ]
      },
      {
        "id": "ex12.4",
        "title": "Exercise Set 12.4",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Justify why the plane cannot be tiled with a regular pentagon. (Hint: Read the first 3 sentences of 'Think and Reflect' in the section on tiling.) (There are many ways to tile the plane using a suitable irregular pentagon. The most recent method was found in 2015.)\n\n![ch12-ex12-4-q1-pentagon](/figs/maths-0904ch12-ex12-4-q1-pentagon.png)",
            "answer": {
              "answerKey": "Each regular pentagon has interior angle 108°, and no integer multiple of 108° equals 360°.",
              "schoolMethod": "The interior angle of a regular n-gon is $\\dfrac{(n-2)\\times180^\\circ}{n}$. For n=5, it is $\\dfrac{3\\times180^\\circ}{5}$=**108°**. At a point in a tiling, the angles of the tiles around that point must add to 360°. But $\\dfrac{360^\\circ}{108^\\circ}$=$\\dfrac{10}{3}$ is not an integer. Three pentagons leave 36° uncovered, while four overlap. Therefore regular pentagons alone cannot tile the plane."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Draw a non-convex 4-gon DART. Show how we can tile the plane with copies of DART. Both methods that we discussed earlier will work. Which do you prefer?",
            "answer": {
              "answerKey": "Both the 180°-rotation edge method and the Varignon-parallelogram grid method can tile the plane.",
              "schoolMethod": "Take a simple concave quadrilateral DART with one reflex angle. **Method 1:** place one copy beside another by rotating a copy through 180° about the midpoint of a shared edge. The two copies match along that edge; repeat at every exposed edge to extend the pattern without gaps. The four angles of the original quadrilateral sum to 360°, which allows the vertices to close around a point.\n\n**Method 2:** join the midpoints of each copy’s sides. These form a Varignon parallelogram. Tile the plane with copies of that parallelogram, then place the matching DART in each parallelogram cell using the same midpoint arrangement. Both methods give a tiling. The 180°-rotation method is usually easier to construct by hand because each new copy is placed directly against a shared edge."
            }
          }
        ]
      },
      {
        "id": "ex12.end",
        "title": "End-of-Chapter Exercises",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Using a fact about parallelograms, show how to tile the plane using any given triangle. (Hint: Can you use the parallelogram tiling in the introduction?)",
            "answer": {
              "answerKey": "Two congruent copies of any triangle form a parallelogram; parallelograms tile the plane, so the triangle also tiles the plane.",
              "schoolMethod": "Take △ABC and a congruent copy. Rotate the copy through 180° about the midpoint M of side BC. The vertices B and C swap, and M is also the midpoint of the segment joining A to its image A′. Thus the diagonals AA′ and BC of quadrilateral ABA′C bisect each other at M, so ABA′C is a parallelogram. Parallelograms tile the plane by translations. Each parallelogram is split by a diagonal into two copies of △ABC; therefore copies of the given triangle tile the plane without gaps or overlaps."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Mark the midpoint of the line drawn on the paper (see Fig. 12.33), given that the horizontal lines are equally spaced. Justify your answer.\n\n![ch12-end-q2-fig12-33](/figs/maths-0904ch12-end-q2-fig12-33.png)",
            "answer": {
              "answerKey": "The midpoint is where the slanted segment crosses the fourth horizontal line (halfway between its endpoints on the second and sixth lines).",
              "schoolMethod": "The endpoints of the slanted segment lie on the second and sixth horizontal rules. Mark M where the segment crosses the fourth rule, halfway between those two rules. To justify this, draw a perpendicular through M to the horizontal rules, meeting the second and sixth rules at U and V. Equal spacing gives MU=MV. The triangles at the two ends, △MUX and △MVY (where X,Y are the segment endpoints), have a right angle, equal vertical angles at M, and MU=MV; hence they are congruent by ASA. Therefore MX=MY and **M is the midpoint** of the slanted segment."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "You know that the sum of angles of a quadrilateral is 360°, even for a non-convex quadrilateral (Recall the proof.) Now consider a self-intersecting quadrilateral ABCD, where AB and CD intersect at point E. Show that ∠A + ∠B + ∠C + ∠D < 360°. Can you construct ABCD such that ∠A + ∠B + ∠C + ∠D = 2°?",
            "answer": {
              "answerKey": "∠A+∠B+∠C+∠D = 360°−2∠AED, so the sum is less than 360°. Yes: choose ∠AED=179° to obtain 2°.",
              "schoolMethod": "Since E lies on AB and CD, the crossing divides the figure into triangles △EAD and △EBC. Let x=∠AED. The vertically opposite angle ∠BEC also equals x. In △EAD, ∠A+∠D=180°−x; in △EBC, ∠B+∠C=180°−x. Adding gives ∠A+∠B+∠C+∠D=360°−2x<360°, because x>0°. To make the sum 2°, set 360°−2x=2°, giving x=179°. Choose the two crossing lines so that the relevant angle is 179° (the adjacent angle is 1°), and place A,B,C,D on the two lines in the order shown. Then the vertex-angle sum is exactly **2°**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "In a parallelogram ABCD, two points P and Q are taken on diagonal BD such that DP = BQ (see Fig. 12.34). Show that APCQ is a parallelogram.\n\n![ch12-end-q4-fig12-34](/figs/maths-0904ch12-end-q4-fig12-34.png)",
            "answer": {
              "answerKey": "The diagonals AC and PQ bisect each other at O; hence APCQ is a parallelogram.",
              "schoolMethod": "Let O be the intersection of diagonals AC and BD. Since ABCD is a parallelogram, OA=OC and OB=OD. Given DP=BQ, OP=OD−DP and OQ=OB−BQ. Since OD=OB and DP=BQ, OP=OQ. Thus O is the midpoint of both AC and PQ. These are the diagonals of quadrilateral APCQ; a quadrilateral whose diagonals bisect each other is a parallelogram. Hence **APCQ is a parallelogram**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "A right-triangle shaped cutout of a paper is folded such that point A touches point B (Fig. 12.35). Show that the crease line can be used to find the midpoint of not only AB but also that of AC.\n\n![ch12-end-q5-fig12-35](/figs/maths-0904ch12-end-q5-fig12-35.png)",
            "answer": {
              "answerKey": "The crease is the perpendicular bisector of AB; since it is parallel to BC and passes through the midpoint of AB, it also passes through the midpoint of AC.",
              "schoolMethod": "Let the crease meet AB at M and AC at N. Folding A onto B makes every point of the crease equidistant from A and B; therefore the crease is the perpendicular bisector of AB. Hence AM=MB and crease MN⊥AB. Since △ABC is right-angled at B, BC⊥AB as well, so MN∥BC. In △ABC, a line through midpoint M of AB parallel to BC meets AC at its midpoint (Converse of the Midpoint Theorem). Therefore AN=NC. The same crease identifies the midpoints of **both AB and AC**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "You saw how to use the Midpoint Theorem to divide a given triangle into 4 congruent triangles. Can we divide a triangle into 3 congruent triangles? This exercise shows us how to do that and more, provided we are allowed to cut and reassemble.\n\n(i) Draw medians AP, BQ and CR of ΔABC, meeting in a common point M. Cut along each median to get 6 triangles. Show with justification how to assemble the 6 pieces into 3 congruent triangles! (Hint: Align ΔMPB and ΔMPC along equal sides PB and PC, matching P with itself and B with C.) Prove that you get a triangle. What are its side lengths?\n\n*(ii) Repeat the procedure with each of the 3 assembled triangles you got in (i). Show that each of the resulting 9 triangles has sides AB/3, BC/3 and AC/3.\n\nThe procedure and the result above were unnoticed till 2014, when they were discovered by Lee Sallows, an amateur mathematician!\n\n(iii) Can we next ask about the possibility of cutting a triangle and reassembling it into 2 congruent triangles. You were asked this question in the chapter Measuring Space: Perimeter and Area. Can you solve this now? (Hint: Use median AP in ΔABC and then a median of ΔAPB.)\n\nFor any two given figures with straight sides, we can ask whether one figure can be cut (using only straight cuts) into pieces and reassembled to make the other. This notion is called scissors congruence. The figures need not be in the plane. Research on such questions at a higher level is ongoing.",
            "answer": {
              "answerKey": "(i) Three congruent triangles with sides $\\dfrac{2}{3}$ of the three medians. (ii) Nine congruent triangles, each with side lengths $\\dfrac{AB}{3}$, $\\dfrac{BC}{3}$, $\\dfrac{AC}{3}$. (iii) Three pieces can be reassembled into two congruent triangles.",
              "schoolMethod": "**(i)** Let P,Q,R be the midpoints of BC, CA, AB. The centroid theorem gives AM=2MP, BM=2MQ and CM=2MR. Rotate △MPB by 180° about P. Since PB=PC, B lands on C and M lands on M′ with P the midpoint of MM′. Because B,P,C are collinear, M,P,M′ are collinear; the moved △MPB joins △MPC to form triangle △MM′C. Its sides are MM′=2MP=AM, M′C=MB and MC. Since MB=2MQ and MC=2MR, the lengths are the three centroid-to-vertex segments AM, BM, CM (equivalently, two-thirds of the corresponding medians). Pair the other two pairs around Q and R in the same way. All three resulting triangles have the same three side lengths, so they are congruent by SSS.\n\n**(ii)** In an assembled triangle from part (i), the three medians have lengths $\\dfrac{BC}{2}$, $\\dfrac{CA}{2}$ and $\\dfrac{AB}{2}$: this follows from the parallelograms formed by the half-turn construction and the midpoint relations. Reapplying part (i) makes the sides of each of its three pieces two-thirds of those medians, namely ($\\dfrac{2}{3}$)($\\dfrac{AB}{2}$)=$\\dfrac{AB}{3}$, ($\\dfrac{2}{3}$)($\\dfrac{BC}{2}$)=$\\dfrac{BC}{3}$ and ($\\dfrac{2}{3}$)($\\dfrac{AC}{2}$)=$\\dfrac{AC}{3}$. Doing this for each of the three assembled triangles produces **nine congruent triangles** with those side lengths.\n\n**(iii)** First cut along median AP, producing △APB and △APC, with P the midpoint of BC. In △APB, let K be the midpoint of AB and draw median PK. Cut along PK. Rotate △PKB by 180° about K: B maps to A, and P maps to P′, with K the midpoint of PP′. The pieces △PKA and the rotated △PKB form △APP′ because P,K,P′ are collinear. Its sides are AP, AP′=BP=PC and PP′=2PK=AC (by the Midpoint Theorem in △ABC). Thus △APP′ and △APC have the same three side lengths AP, PC and AC, so they are congruent by SSS. This gives two congruent triangles after cutting and rearranging the three pieces."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "A more general midpoint theorem and its converse. In a quadrilateral ABCD, suppose AB ∥ DC. Recall that such ABCD is called a trapezium. Let E be the midpoint of AD. A line drawn through E intersects side BC at F.\n\n(i) If EF ∥ AB, then show that F is the midpoint of BC. Conclude that EF = (AB+CD)/2.\n\n(ii) If F is the midpoint of BC, then show that EF ∥ AB.\n\nThere are at least two ways to solve (ii). Do it directly by using the midpoint M of BD and showing that EM and FM are the same lines. Or use (i) along with the same idea used in the second proof of the converse of the Midpoint Theorem. Which way do you think is simpler?\n\n![ch12-end-q7-fig12-36](/figs/maths-0904ch12-end-q7-fig12-36.png)",
            "answer": {
              "answerKey": "(i) F is the midpoint of BC and EF=$\\dfrac{AB+CD}{2}$. (ii) EF∥AB.",
              "schoolMethod": "**(i)** Draw diagonal AC and let EF meet it at G. In △ADC, E is the midpoint of AD and EG∥DC, so by the Converse of the Midpoint Theorem G is the midpoint of AC and EG=$\\dfrac{DC}{2}$. In △CAB, G is the midpoint of CA and GF∥AB, so F is the midpoint of CB and GF=$\\dfrac{AB}{2}$. Hence EF=EG+GF=$\\dfrac{DC}{2}$+$\\dfrac{AB}{2}$=$\\dfrac{AB+CD}{2}$.\n\n**(ii)** Let M be the midpoint of BD. In △DAB, E and M are the midpoints of DA and DB, so EM∥AB. In △DBC, M and F are the midpoints of DB and BC, so MF∥DC∥AB. Since EM and MF pass through M and are both parallel to AB, they are the same line. Therefore E,M,F are collinear and **EF∥AB**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "The diagonals AC and BD of a parallelogram ABCD intersect at O. A line through O meets AB and CD at points P and Q respectively. Show that O is the midpoint of PQ. (Multiple proofs are possible. Which is the simplest?)\n\n![ch12-end-q8-fig12-37](/figs/maths-0904ch12-end-q8-fig12-37.png)",
            "answer": {
              "answerKey": "OP=OQ; therefore O is the midpoint of PQ.",
              "schoolMethod": "Consider △OAP and △OCQ. OA=OC because diagonals of a parallelogram bisect each other. Since AB∥CD, ∠OAP=∠OCQ (alternate interior angles), and ∠AOP=∠COQ (vertically opposite angles). Thus △OAP≅△OCQ by ASA. Hence OP=OQ. As P,O,Q lie on the same line, **O is the midpoint of PQ**."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": true,
            "text": "ABCD is a trapezium with parallel sides AD = 3 cm and BC = 5 cm. E and F are the midpoints of the non-parallel sides. Find the ratio of the areas of the 4-gons AEFD and EBCF.\n\n![ch12-end-q9-fig12-38](/figs/maths-0904ch12-end-q9-fig12-38.png)",
            "answer": {
              "answerKey": "Area(AEFD) : Area(EBCF) = 7 : 9.",
              "schoolMethod": "By the trapezium midpoint theorem, EF∥AD∥BC and EF=$\\dfrac{AD+BC}{2}$=$\\dfrac{3+5}{2}$=4 cm. Let h be the distance between the two parallel sides. Since E and F are midpoints of the non-parallel sides, EF lies halfway between the bases, so each smaller trapezium has height $\\dfrac{h}{2}$.\n\nArea(AEFD)=½(AD+EF)($\\dfrac{h}{2}$)=½(3+4)($\\dfrac{h}{2}$)=7$\\dfrac{h}{4}$.\nArea(EBCF)=½(EF+BC)($\\dfrac{h}{2}$)=½(4+5)($\\dfrac{h}{2}$)=9$\\dfrac{h}{4}$.\n\nTherefore the ratio is (7$\\dfrac{h}{4}$):(9$\\dfrac{h}{4}$)=**7:9**."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "text": "Consider 4 points A, B, C, D in the plane with no three collinear. Answer the following questions. Some answers may require you to consider different cases, depending on how the points are positioned in the plane.\n\n(i) How many different quadrilaterals do they form if the quadrilateral is allowed to be self-intersecting or non-convex?\n\n(ii) How many of these quadrilaterals are self-intersecting? How many are convex?",
            "answer": {
              "answerKey": "There are 3 different cyclic orders. If the points are in convex position, 1 quadrilateral is convex and 2 are self-intersecting. If one point lies inside the triangle of the other three, all 3 are non-convex and simple; none is convex or self-intersecting.",
              "schoolMethod": "**(i)** Fix A as the first vertex. The remaining three points can be arranged in 3!=6 orders, but traversing a quadrilateral in reverse gives the same four sides. Thus the number of distinct quadrilaterals is $\\dfrac{6}{2}$=**3** (for example, ABCD, ABDC and ACBD).\n\n**(ii)** There are two configurations. If all four points are vertices of their convex hull, only the order around the outside is convex; the other two cyclic orders cross, so there is 1 convex and 2 self-intersecting quadrilaterals. If one point lies inside the triangle formed by the other three, each of the 3 orders gives a simple concave quadrilateral; none is convex or self-intersecting."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": true,
            "text": "Suppose P is a point on side AB of ΔABC and the line through P parallel to BC meets AC in point Q. For parts (i) to (iii), assume AP = 1, AQ = √5, and see Fig. 12.39.\n\n(i) If PB = 2 find QC. (Hint: See the dotted line)\n\n*(ii) If PB = 1/3 find QC. (Hint: See the dotted lines)\n\n*(iii) If PB = 2/3 find QC. (Hint: Divide both PB and AP suitably.)\n\n*(iv) Show that if AP/PB is a rational number, then AP/PB = AQ/QC. In Grade 10, you will prove this equality without assuming that AP/PB is rational. That will require a new idea.\n\n![ch12-end-q11-fig12-39](/figs/maths-0904ch12-end-q11-fig12-39.png)",
            "answer": {
              "answerKey": "(i) QC=2√5. (ii) QC=$\\dfrac{\\sqrt{5}}{3}$. (iii) QC=$\\dfrac{2\\sqrt{5}}{3}$. (iv) If $\\dfrac{AP}{PB}$=$\\dfrac{m}{n}$ in positive integers, equal-intercept construction gives $\\dfrac{AQ}{QC}$=$\\dfrac{m}{n}$.",
              "schoolMethod": "Because PQ∥BC, equally spaced subdivisions on AB produce equally spaced corresponding subdivisions on AC (Intercept Theorem; it can be proved stepwise using the converse of the Midpoint Theorem).\n\n**(i)** AP=1 and PB=2, so AB has 3 equal unit lengths: AP is 1 part and PB is 2 parts. Correspondingly AQ:QC=1:2. Since AQ=√5, QC=2√5.\n\n**(ii)** PB=$\\dfrac{1}{3}$ and AP=1, so AP:PB=3:1. Thus AQ:QC=3:1, and QC=$\\dfrac{AQ}{3}$=$\\dfrac{\\sqrt{5}}{3}$.\n\n**(iii)** PB=$\\dfrac{2}{3}$, so AP:PB=1:($\\dfrac{2}{3}$)=3:2. Hence AQ:QC=3:2 and QC=($\\dfrac{2}{3}$)AQ=$\\dfrac{2\\sqrt{5}}{3}$.\n\n**(iv)** Let $\\dfrac{AP}{PB}$=$\\dfrac{m}{n}$ for positive integers m,n. Divide AP into m equal parts and PB into n equal parts, all of common length. Through the division points draw lines parallel to BC. By repeated use of the midpoint/intercept result, the corresponding parts of AC are equal. The m parts comprising AQ therefore have the same unit length as each of the n parts comprising QC, so $\\dfrac{AQ}{QC}$=$\\dfrac{m}{n}$=$\\dfrac{AP}{PB}$."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "text": "(i) Suppose ABCD is a parallelogram and M, N are midpoints of AB and CD respectively. Show that segments DM and BN trisect segment AC.\n\n(ii) Use part (i) to find a procedure to trisect any given segment PQ. Find two other ways to trisect PQ, one using Exercise 11 above and a third using the Centroid Theorem.\n\n![ch12-end-q12-fig12-40](/figs/maths-0904ch12-end-q12-fig12-40.png)",
            "answer": {
              "answerKey": "The two intersections of DM and BN with AC divide AC into three equal parts. A segment can be trisected using this parallelogram construction, equal parallel intercepts, or the Centroid Theorem.",
              "schoolMethod": "**(i)** Since M,N are midpoints, MB=$\\dfrac{AB}{2}$ and DN=$\\dfrac{CD}{2}$. In a parallelogram AB=CD, so MB=DN; also MB∥DN. Therefore MBND is a parallelogram and DM∥BN. Let DM meet AC at X, and BN meet AC at Y. In △ABY, M is the midpoint of AB and MX∥BY, so X is the midpoint of AY: AX=XY. In △CDX, N is the midpoint of CD and NY∥DX, so Y is the midpoint of CX: CY=YX. Hence **AX=XY=YC**.\n\n**(ii), Method 1 (parallelogram):** Make PQ a diagonal of a parallelogram PBQD. Let O be the midpoint of PQ; choose B,D on any line through O with OB=OD and construct the parallelogram. Find M and N, the midpoints of PB and QD; the lines DM and BN meet PQ at its trisection points by part (i).\n\n**Method 2 (parallel intercepts):** Draw a ray from P and mark three consecutive equal segments on it, ending at X₃. Join X₃ to Q. Through the first two marks draw lines parallel to X₃Q; by the equal-intercept theorem they cut PQ into three equal parts.\n\n**Method 3 (centroid):** Construct △PBC so that PQ is a median (choose B and C on a line through Q with QB=QC). Draw a second median from B to the midpoint of PC, meeting PQ at centroid G. The centroid theorem gives PG:GQ=2:1, so GQ=$\\dfrac{PQ}{3}$. Bisect PG to obtain the other trisection point."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": true,
            "text": "Is the Midpoint Theorem for Quadrilaterals (Theorem 9) true when the quadrilateral is non-convex? How about when it is self-intersecting? Experiment and check. The pictures may look strange, but the theorem appears to be true.\n\n(i) Can you explain why is this so? See the geometric reasoning in the text.\n\n(ii) There is one exception: In a very special case the Varignon parallelogram becomes a single segment. When will this happen?\n\n*(iii) Does your reasoning apply even when ABCD is non-planar?",
            "answer": {
              "answerKey": "(i) Yes for non-convex and self-intersecting quadrilaterals. (ii) When AC∥BD, the midpoint parallelogram degenerates to a segment. (iii) Yes; the midpoint quadrilateral remains planar and is a parallelogram.",
              "schoolMethod": "Let P,Q,R,S be the midpoints of AB, BC, CD, DA. The proof of Varignon’s theorem uses only the Midpoint Theorem in the four triangles formed by the diagonals; it does not use convexity. Thus PQ∥AC∥SR and PQ=SR=$\\dfrac{AC}{2}$, while QR∥BD∥PS and QR=PS=$\\dfrac{BD}{2}$. This proves PQRS is a parallelogram for non-convex and self-intersecting figures as well.\n\nThe parallelogram collapses when its adjacent sides PQ and QR are parallel, that is, when AC∥BD. This occurs in a special crossed configuration.\n\nThe same vector/midpoint reasoning works in space: opposite midpoint segments remain equal and parallel, so the four midpoint points are coplanar and form a planar parallelogram even if A,B,C,D themselves are non-coplanar."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": false,
            "text": "Let P, Q, R, S be four points on sides AB, BC, CD and DA respectively of a quadrilateral ABCD. Suppose PQRS is a parallelogram. Must P, Q, R and S be midpoints of the respective sides? This can be considered a possible converse question to Theorem 9.",
            "answer": {
              "answerKey": "No. In a square of side 4, choosing each point one unit from the next corner produces a smaller square PQRS, although no chosen point is a midpoint.",
              "schoolMethod": "Take square ABCD of side 4. Let P be on AB with AP=1, Q on BC with BQ=1, R on CD with CR=1, and S on DA with DS=1. Each corner triangle, such as △SAP, is right-angled with legs 1 and 3. These four triangles are congruent by SAS, so their opposite hypotenuses satisfy PQ=QR=RS=SP. The four segments also have equal side directions by the symmetry of the square; hence PQRS is a square and therefore a parallelogram. But AP=1 while $\\dfrac{AB}{2}$=2, so P is not a midpoint; similarly for Q,R,S. Thus the converse is **false**."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": false,
            "text": "(i) Complete the following proof of the Midpoint Theorem. Extend segment PQ beyond Q until point S. By how much should we extend PQ?\n\nIt would be good to be able to prove that ΔAPQ ≅ ΔCSQ. (Why?) Use this as a guide to specify the location of S and then complete this proof.\n\n(ii) Give a similar proof of the converse of the Midpoint Theorem (Theorem 7). Start by extending PQ up to a suitable point S.\n\n![ch12-end-q15-fig12-41](/figs/maths-0904ch12-end-q15-fig12-41.png)",
            "answer": {
              "answerKey": "(i) Extend to S so that QS=PQ; then △APQ≅△CSQ and PBCS is a parallelogram. (ii) For the converse, extend to S so that PS=BC; again PBCS is a parallelogram and Q is the midpoint of AC.",
              "schoolMethod": "**(i)** Given P and Q are the midpoints of AB and AC, extend PQ beyond Q to S so that QS=PQ. Then Q is the midpoint of PS. In △APQ and △CSQ, AQ=CQ, PQ=SQ and ∠AQP=∠CQS (vertically opposite), so the triangles are congruent by SAS. Thus CS=AP=PB and CS∥AB∥PB. Since one pair of opposite sides of PBCS is equal and parallel, PBCS is a parallelogram. Therefore PS∥BC and PS=BC. As PS=PQ+QS=2PQ, we obtain PQ∥BC and PQ=$\\dfrac{BC}{2}$.\n\n**(ii)** Now P is the midpoint of AB and PQ∥BC. Extend PQ to S so that PS=BC. Since PS∥BC and PS=BC, PBCS is a parallelogram, so CS∥AB and CS=PB=AP. Compare △APQ and △CSQ: AP=CS, ∠PAQ=∠SCQ and ∠APQ=∠CSQ (alternate angles). They are congruent by ASA; hence AQ=CQ, so Q is the midpoint of AC. Also PQ=$\\dfrac{PS}{2}$=$\\dfrac{BC}{2}$."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": true,
            "text": "Review all the properties of a rhombus/rectangle/square that you proved in Grade 8. Formulate a converse of each. Decide if the converse is true. There are many possibilities here!",
            "answer": {
              "answerKey": "Examples: (a) diagonals bisecting each other at right angles ⇒ rhombus (true); (b) diagonals bisecting the angles ⇒ rhombus (true); (c) perpendicular diagonals ⇒ rhombus (false); (d) equal diagonals ⇒ rectangle (false in general); (e) equal, bisecting diagonals ⇒ rectangle (true); (f) equal perpendicular diagonals ⇒ square (false in general); (g) equal, perpendicular diagonals that bisect each other ⇒ square (true).",
              "schoolMethod": "Possible converses (many answers are valid):\n\n**Rhombus.** (a) If the diagonals of a quadrilateral bisect each other at right angles, then it is a rhombus — **true**: bisection makes a parallelogram; perpendicular diagonals make its adjacent sides equal. (b) If both diagonals bisect the angles, it is a rhombus — **true**, by congruent triangles about each diagonal. (c) If the diagonals are perpendicular, it is a rhombus — **false**; a kite can have perpendicular diagonals without all four sides equal.\n\n**Rectangle.** (d) If the diagonals are equal, it is a rectangle — **false**; an isosceles trapezium has equal diagonals but is not a rectangle. (e) If the diagonals are equal and bisect each other, it is a rectangle — **true**: bisection gives a parallelogram, and a parallelogram with equal diagonals is a rectangle.\n\n**Square.** (f) If diagonals are equal and perpendicular, it is a square — **false** without bisection (a suitable kite is a counterexample). (g) If diagonals are equal, perpendicular and bisect each other, it is a square — **true**: the figure is both a rectangle and a rhombus, hence a square."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "isHard": true,
            "text": "Show that the sum of angles of a non-planar quadrilateral is always less than 360°. Can you find a non-planar quadrilateral ABCD for which ∠A + ∠B + ∠C + ∠D = 2°?\n\n(Hint: Think of a diagonal, say AC, as a hinge around which triangles ABC and ADC can rotate.) What happens to each angle of ABCD as you do this rotation?",
            "answer": {
              "answerKey": "For a genuinely folded quadrilateral, the angle sum is less than 360°. Yes; by choosing two very thin triangles and continuously rotating one about AC, the sum can be made exactly 2°.",
              "schoolMethod": "Start with a flat convex quadrilateral ABCD whose angle sum is 360°, and treat AC as a hinge. Keep △ADC fixed while rotating △ABC out of its plane. The angles ∠B and ∠D remain unchanged because each belongs to a rigid triangle. The angles at A and C decrease: as B moves from the opposite side of AC towards D’s side, the distance BD decreases; with AB and AD fixed, the angle between them (∠A) decreases, and similarly ∠C decreases. Therefore, once the quadrilateral is genuinely non-planar, the total is strictly less than 360°.\n\nTo obtain 2°, choose two very thin triangles on AC, so the limiting sum during near-complete folding can be made smaller than 2°. Initially the flat sum is 360°; during rotation the sum changes continuously. By the intermediate value property, at some non-flat position the sum is exactly **2°**."
            }
          },
          {
            "id": "q18",
            "number": "18",
            "isHard": true,
            "text": "Let us see a third method to tile the plane using a 4-gon.\n\nFocus on only two coloured copies of SOME sharing a vertex. What do you see? It appears that each 4-gon is just a shifted copy of the other. Let us see exactly how. Draw two copies of SOME as shown in Fig. 12.42 so that the diagonals EO and E'O' are collinear with O = E'. Now place a cutout of one copy on top of SOME with diagonal EO drawn on it. Slide this cutout so that segment EO moves along EO' until EO matches E'O'. Verify that your cutout exactly matches S'O'ME'.\n\n(i) Prove the exact match of SOME with S'O'ME' using four parallelograms.\n\n(ii) Follow the described procedure along each diagonal of the starting coloured 4-gon in both directions to get 4 new 4-gons. Using these 4 copies, repeat the procedure 4 more times to place 4 new copies, resulting in a 3 by 3 grid of 9 copies exactly like the 9 coloured copies in Fig. 12.42. These 9 copies meet each other only at vertices and once again the blank spaces among them also form 4-gons congruent to SOME!\n\n![ch12-end-q18-fig12-42](/figs/maths-0904ch12-end-q18-fig12-42.png)",
            "answer": {
              "answerKey": "Sliding by the vector from E to O produces an exact translated copy; four parallelograms establish the matching sides. Repetition along both diagonals makes a grid with congruent quadrilaterals and congruent gaps.",
              "schoolMethod": "**(i)** Slide a cutout of SOME by the same vector \\(\\overrightarrow{EO}\\), so E maps to E′=O and O maps to O′. Every point shifts by the same vector; hence SS′∥EO, MM′∥EO and each has length EO. Together with E′=O and the collinearity of E,O,O′, the four quadrilaterals ESS′E′, OSS′O′, EMM′E′ and OMM′O′ each have one pair of opposite sides equal and parallel. Each is therefore a parallelogram. Their other sides are equal and parallel too, showing that each side of S′O′M′E′ matches the corresponding side of SOME. Thus the two quadrilaterals coincide exactly after translation.\n\n**(ii)** Translate copies in both directions along diagonals EO and SM. Four new copies fit around the initial quadrilateral, meeting it only at vertices. Repeat outward from each of those copies to make a 3×3 grid and continue. Each blank region between four translated copies is another congruent quadrilateral (possibly rotated 180°), so the copies and the gaps cover the plane exactly without overlap or uncovered region."
            }
          },
          {
            "id": "q19",
            "number": "19",
            "isHard": true,
            "text": "Is there a 4-gon with given side lengths?\n\n(i) Recall the following fact about triangles and check it by construction. For given positive numbers a, b, c, is there a triangle whose sides have these lengths? The answer is Yes exactly when the sum of any two numbers is greater than the third. If we arrange the numbers in increasing order (suppose a ≤ b ≤ c), then this amounts to requiring a + b > c. (Hint: Start by drawing a segment of length c.)\n\n(ii) Suppose a 4-gon has 2, 5, 11 as three side lengths. Can the length of the fourth side be 100? Can it be 10? Can it be 1? What are the possible lengths of the fourth side?\n\n(iii) For given positive numbers a, b, c, d, how will you decide if there is a 4-gon whose sides have these lengths?",
            "answer": {
              "answerKey": "(i) A triangle exists exactly when a+b>c. (ii) 100: no; 10: yes; 1: no; possible fourth side x satisfies 4<x<18. (iii) The longest side must be shorter than the sum of the other three.",
              "schoolMethod": "**(i)** Draw a segment of length c. Draw a circle of radius a at one endpoint and radius b at the other. They meet away from the segment exactly when a+b>c; equality gives a degenerate straight line and a+b<c gives no intersection.\n\n**(ii)** Let the fourth length be x. A quadrilateral can exist only if every side is shorter than the sum of the other three. Thus 11<2+5+x, giving x>4, and x<2+5+11=18. Hence the range is **4<x<18**. So 100 is impossible, 10 is possible, and 1 is impossible.\n\n**(iii)** For four positive lengths, a non-degenerate quadrilateral exists exactly when the largest length is less than the sum of the other three. Necessity follows because the other three sides must form a broken path between the endpoints of the longest side. For sufficiency, choose a diagonal length that satisfies the triangle inequalities for two triangles using the four sides, then place those triangles on opposite sides of the diagonal; the resulting quadrilateral has the required four side lengths."
            }
          },
          {
            "id": "q20",
            "number": "20",
            "isHard": true,
            "text": "Counting diagonals of a polygon.\n\n(i) How should we define a diagonal of an n-gon? How many diagonals does an n-gon have? Make a table for small values of n. A 3-gon has no diagonals. A 4-gon has 2. How many diagonals does a 5-gon have? A 6-gon? Try to find a pattern and guess the answers for n = 7 and n = 8. Check your guesses by systematic counting.\n\n(ii) Can you guess a formula for the number of diagonals? How many diagonals get added when we increase the number of sides by 1? Can you now justify why the formula you guessed is true for all n?",
            "answer": {
              "answerKey": "Counts for n=3,4,5,6,7,8 are 0,2,5,9,14,20. D(n)=$\\dfrac{n(n-3)}{2}$, and adding one side to an n-gon adds n−1 diagonals.",
              "schoolMethod": "A **diagonal** is a segment joining two non-adjacent vertices. The counts are: n=3→0, n=4→2, n=5→5, n=6→9, n=7→14, n=8→20.\n\nFrom each of n vertices, diagonals can be drawn to n−3 other vertices (exclude itself and its two neighbours). This gives n(n−3) diagonal-ends, but each diagonal has two ends, so \\(D(n)=\\dfrac{n(n-3)}2\\).\n\nIncreasing the number of sides from n to n+1 adds n−1 diagonals: the new vertex joins to n−2 old non-neighbours, and the old side between its two neighbours becomes one new diagonal. Algebraically, D(n+1)−D(n)=$\\dfrac{(n+1)(n-2)-n(n-3)}{2}$=n−1."
            }
          },
          {
            "id": "q21",
            "number": "21",
            "isHard": true,
            "text": "Sum of angles of a polygon. What is the sum of angles of a (planar non-self-intersecting) n-gon? We know that the answer is 180° for n = 3 and 360° for n = 4. Find the next few values. Then find a formula in terms of n and prove it.",
            "answer": {
              "answerKey": "The sums are 180°, 360°, 540°, 720°, 900°, 1080°, respectively; the general sum is (n−2)×180°.",
              "schoolMethod": "Join one vertex of a convex n-gon to all its non-adjacent vertices. The diagonals divide the polygon into n−2 non-overlapping triangles. Each triangle has angle sum 180°, and together their angles make precisely the polygon’s internal angles. Therefore the sum is \\((n-2)\times180^\\circ\\). For n=3,4,5,6,7,8 the values are **180°, 360°, 540°, 720°, 900°, 1080°**."
            }
          },
          {
            "id": "q22",
            "number": "22",
            "isHard": true,
            "text": "Multiple converses to a theorem. Let us see how multiple statements can be considered converses to the Midpoint Theorem and how Theorem 7 is one of them.\n\nTo formulate a converse we should express the original statement in \"If ... then ...\" form. For a complex statement, there may be multiple ways to do it. For the Midpoint Theorem, there starts with ΔABC and points P and Q on sides AB and AC respectively.\n\nThe theorem has two assumptions and two conclusions, which we have named for further discussion.\n\nAssumptions: (P MID) P is the midpoint of AB, and (Q MID) Q is the midpoint of AC.\n\nConclusions: (PRLL) PQ ∥ BC, and (HALF) PQ = BC/2.\n\nLet us use these four named conditions to discuss various possible statements.\n\n(i) A natural converse of the Midpoint Theorem would be: \"If (PRLL) and (HALF) are true, then (P MID) and (Q MID) are true.\" Write out this statement fully. Experiment and see that it seems to be true! Prove the statement. (Hint: Try to run a proof of the Midpoint Theorem backwards.)\n\n(ii) To see Theorem 7 as a converse of the Midpoint Theorem, we first write the Midpoint Theorem as follows: \"Suppose P is the midpoint of side AB of ΔABC and Q is a point on side AC. If Q is the midpoint of AC then PQ ∥ BC.\" (Also PQ = BC/2, but let us set that aside for now.) Write the converse of the same sentence in quotes in keeping the first sentence the same. Verify that Theorem 7 is what you get! (And PQ = BC/2 also follows.) Now write Theorem 7 in terms of the four named conditions.\n\n(iii) The discussion so far suggests that it is reasonable to take two of the four listed statements as assumptions and ask if the other two are true. Verify that only one such combination remains to be examined. \"If (P MID) and (HALF) are true, then can we conclude (Q MID) and/or (PRLL)?\" Write this out in words. This is a precise version of question (1) stated before Theorem 7. Can you answer it?\n\nIn the text, why did we focus only on Theorem 7 among the multiple possibilities? Because Theorem 7 turns out to be particularly useful. It is still important to pursue various avenues while exploring a subject: often it is only after examining multiple possibilities that we can judge what is most valuable.",
            "answer": {
              "answerKey": "(i) Yes: similarity gives AP=PB and AQ=QC. (ii) If P is midpoint of AB and PQ∥BC, then Q is midpoint of AC (and PQ=$\\dfrac{BC}{2}$). (iii) No: P midpoint and PQ=$\\dfrac{BC}{2}$ alone imply neither Q is midpoint nor PQ∥BC.",
              "schoolMethod": "**(i)** Since PQ∥BC, △APQ∼△ABC. The ratio $\\dfrac{PQ}{BC}$=$\\dfrac{1}{2}$ therefore gives $\\dfrac{AP}{AB}$=$\\dfrac{AQ}{AC}$=$\\dfrac{1}{2}$. Thus AP=PB and AQ=QC, so P and Q are the midpoints.\n\n**(ii)** The statement is: “If P is the midpoint of AB and the line through P parallel to BC meets AC at Q, then Q is the midpoint of AC.” By Theorem 7, PQ=$\\dfrac{BC}{2}$ as well.\n\n**(iii)** Neither conclusion follows. A counterexample: take A=(0,0), B=(2,0), C=(3,1) and P=(1,0), which is the midpoint of AB. Let Q=(0.3,0.1), on AC. Then PQ²=(0.3−1)²+(0.1−0)²=0.50, so PQ=√0.5=$\\dfrac{\\sqrt{2}}{2}$; BC=√2 and hence PQ=$\\dfrac{BC}{2}$. But Q is not the midpoint of AC (that would be (1.5,0.5)) and the slope of PQ is −$\\dfrac{1}{7}$ while the slope of BC is 1, so PQ is not parallel to BC. Thus P MID and HALF alone imply neither Q MID nor PRLL."
            }
          },
          {
            "id": "q23",
            "number": "23",
            "isHard": true,
            "text": "Validity of tiling methods. Show using reasoning that each of the three tiling methods we saw produces a tiling of the plane using the given 4-gon. You have to prove that when we place new copies using any of the three procedures, the entire plane is covered with no gaps and no overlaps. First, think carefully about what it means to prove this. Then find a proof for each procedure.",
            "answer": {
              "answerKey": "The half-turn method matches complete edges; the vertex method uses the 360° angle sum; the translation method builds congruent translated cells and congruent gaps.",
              "schoolMethod": "**Method 1: half-turn about a side midpoint.** Rotate a copy of the quadrilateral by 180° about the midpoint of a side. The side endpoints swap, so the two copies share the complete side exactly. Repeating at each exposed side gives an edge-to-edge pattern. Around each meeting vertex the four interior angles of the quadrilateral occur once each; their sum is 360°, so there is neither a gap nor an overlap.\n\n**Method 2: fit four copies around a vertex.** Place four copies so that their four interior angles meet at one point. A quadrilateral’s angles sum to 360°, so they fill the full turn exactly. Continue the pattern by matching copies along full sides using half-turns; every local gap is filled and no two interiors overlap.\n\n**Method 3: translation grid.** The construction in Exercise 18 shows that a copy translated by a diagonal vector matches exactly. Repeating the same translation in both diagonal directions creates a grid of translated copies. Each remaining gap is a congruent, turned copy of the original quadrilateral, so the copies and gaps fill the plane without overlap."
            }
          },
          {
            "id": "q24",
            "number": "24",
            "isHard": true,
            "text": "What fraction of the square is shaded?\n\n![ch12-end-q24-fig12-43](/figs/maths-0904ch12-end-q24-fig12-43.png)",
            "answer": {
              "answerKey": "The shaded fraction is $\\dfrac{1}{5}$ of the square.",
              "schoolMethod": "Let the square have side 1, with corners (0,0), (1,0), (1,1), (0,1). The marked points are the midpoints of all four sides. The four lines shown have equations (after matching them to the figure): y=1−2x, y=$\\dfrac{1}{2}$+$\\dfrac{x}{2}$, y=2−2x and y=$\\dfrac{x}{2}$. Their consecutive intersections forming the shaded parallelogram are ($\\dfrac{1}{5,3}$/5), ($\\dfrac{3}{5,4}$/5), ($\\dfrac{4}{5,2}$/5) and ($\\dfrac{2}{5,1}$/5). Adjacent side vectors can be taken as ($\\dfrac{2}{5,1}$/5) and ($\\dfrac{1}{5}$,−$\\dfrac{2}{5}$). The parallelogram area is the absolute determinant: |($\\dfrac{2}{5}$)(−$\\dfrac{2}{5}$)−($\\dfrac{1}{5}$)($\\dfrac{1}{5}$)|=|−$\\dfrac{4}{25}$−$\\dfrac{1}{25}$|=$\\dfrac{5}{25}$=$\\dfrac{1}{5}$. The square’s area is 1, so the shaded fraction is **$\\dfrac{1}{5}$**."
            }
          }
        ]
      },
      {
        "id": "ex12.reflect",
        "title": "Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "page": 51,
            "text": "Can we use any given quadrilateral to tile the plane? If not, which quadrilaterals can be used and which cannot?",
            "answer": {
              "answerKey": "See the discussion in the book.",
              "schoolMethod": "Refer to the corresponding Think and Reflect discussion in the textbook on page 51."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "page": 52,
            "text": "Informally, a quadrilateral is a figure with four straight sides, as in the first figure ABCD in Fig. 12.2 below. But consider the other six figures in Fig. 12.2: the five plane figures NOPE, SILY, DART, CUTS, OPENS, and the non-planar BENT. Should we call all these figures quadrilaterals? If you answer 'no' for any of them, how will you define a quadrilateral so that such a figure is excluded? As you can see, some care is needed to precisely define what we think of as a quadrilateral.",
            "answer": {
              "answerKey": "See the discussion in the book.",
              "schoolMethod": "Refer to the corresponding Think and Reflect discussion in the textbook on page 52."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "page": 53,
            "text": "Can we similarly define a quadrilateral ABCD?",
            "answer": {
              "answerKey": "See the discussion in the book.",
              "schoolMethod": "Refer to the corresponding Think and Reflect discussion in the textbook on page 53."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "page": 59,
            "text": "The angles of a quadrilateral add up to 360°. Therefore, if the opposite angles are equal, what can we say about adjacent angles? Is the converse of your answer true? Conclude that Theorem 3 can also be stated as follows. \"If each pair of adjacent angles in a quadrilateral ABCD... then ABCD is a parallelogram.\" Fill in the blank.",
            "answer": {
              "answerKey": "See the discussion in the book.",
              "schoolMethod": "Refer to the corresponding Think and Reflect discussion in the textbook on page 59."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "page": 62,
            "text": "Try to prove directly that the four smaller triangles are congruent. You will see that no congruence test applies, because many quantities are unknown.",
            "answer": {
              "answerKey": "See the discussion in the book.",
              "schoolMethod": "Refer to the corresponding Think and Reflect discussion in the textbook on page 62."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "page": 63,
            "text": "Read the statement of the Midpoint Theorem again. The following questions seem natural to ask. What can we say about (1) a segment PQ (with P on side AB and Q on AC) that is parallel to the third side and has half the length, and (2) the line that passes through the midpoint of one side and is parallel to another side? We will address question (1) in Exercise 22 at the end of the chapter. For now, experiment and see if you can make a guess about question (2). It appears that this line must bisect the remaining side! Let us try to justify this.",
            "answer": {
              "answerKey": "See the discussion in the book.",
              "schoolMethod": "Refer to the corresponding Think and Reflect discussion in the textbook on page 63."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "page": 66,
            "text": "Give another proof of the Centroid Theorem using a clever construction that we will describe only partly and ask you to complete. Once again let M be the intersection point of the two medians CP and BQ. We want to show that the intersection point of line AM with side BC is the midpoint of BC. For this, extend AM up to a carefully chosen point S such that BSCM becomes a parallelogram. (Hint: To arrange MC ∥ BS, first note that PM and MC are along the same line. Now where should M be on segment AS? Does your placement of S also prove MB ∥ CS?)",
            "answer": {
              "answerKey": "See the discussion in the book.",
              "schoolMethod": "Refer to the corresponding Think and Reflect discussion in the textbook on page 66."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "page": 70,
            "text": "Suppose we have a tiling of the plane. Consider any vertex. As we go around this vertex and consider the angles made by consecutive lines, the total of these angles must be 360°. This suggests an idea. What if we take 4 copies of SOME and fit them together around a common point so that each angle is used once as we go around?",
            "answer": {
              "answerKey": "See the discussion in the book.",
              "schoolMethod": "Refer to the corresponding Think and Reflect discussion in the textbook on page 70."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "page": 69,
            "text": "Before you see the answer in Fig. 12.28, see the hints below and try to find a tiling using the given irregular 4-gon SOME. First, trace SOME on paper with its four angles labelled 1, 2, 3, 4. Remember that they add up to 360°. Cut out 15 identical copies.",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 69 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "page": 70,
            "text": "There are multiple ways of doing this, as shown in Fig. 12.27. Can you use any of these ways to continue fitting further copies of SOME to tile the plane? Try it with the 15 copies you made!\n\n![fig12-27](/figs/maths-0904ch12-reflect-fig12-27.png)",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 70 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "page": 70,
            "text": "Here is how one can tile! Recreate it with your pieces.\n\n![fig12-28](/figs/maths-0904ch12-reflect-fig12-28.png)",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 70 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "page": 70,
            "text": "How can we understand the figure? There seems to be a repeating pattern. (1) Can you precisely describe a procedure to draw the pattern so that someone can draw the tiling on their own, based only on your description? (2) Can you justify why your procedure works?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 70 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": false,
            "page": 71,
            "text": "Now repeat this procedure at each edge of every copy of SOME that you add. Verify that this will result in a tiling! Two steps of a possible continuation are shown in Fig. 12.30. The first step (Fig. 12.30 A) adds 4 copies around the starting copy and the second step (Fig. 12.30 B) adds 4 more copies. Note two interesting things about the second step: (1) each new copy can be obtained by rotating any one of its neighbours, and both ways give the same result. (2) The new copies fit perfectly. Can you explain these facts by reasoning? This is needed to prove that the method works!\n\n![fig12-30](/figs/maths-0904ch12-reflect-fig12-30.png)",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 71 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": false,
            "page": 71,
            "text": "Do you see which of the three possibilities shown in Fig. 12.27 occurs in the tiling?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 71 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": false,
            "page": 72,
            "text": "Before we explain Method 2, let us conduct a thought experiment. Remember the Varignon parallelogram for 4-gons (Theorem 9). Imagine that we have drawn this parallelogram in each copy of SOME in the tiling shown earlier in Fig. 12.28. Visualise what the picture looks like. Fig. 12.31 shows the result. It appears that the Varignon parallelograms form a grid, giving the same parallelogram tiling we saw in the introduction!\n\n![fig12-31](/figs/maths-0904ch12-reflect-fig12-31.png)",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 72 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": false,
            "page": 72,
            "text": "This suggests an idea. What if we start by drawing just the simple grid tiling made by the Varignon parallelogram of SOME? Can we use this grid to construct the new tiling by SOME?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 72 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "isHard": false,
            "page": 72,
            "text": "A grid of Varignon parallelograms of SOME is given in Fig. 12.32. To begin with, focus only on the 9 green coloured copies of SOME in Fig. 12.31. We will first place only these 9 copies in Fig. 12.32. The corresponding parallelograms are shaded in Fig. 12.32. Place 9 copies of SOME so as to match the way the green coloured copies of SOME are placed in Fig. 12.31 (You were asked to give a precise description of how to do this in Exercise Set 12.3, Q5.) If done carefully, you will observe that each 4-gon you placed meets other placed copies exactly at vertices. Now see how 4 copies of SOME are made automatically in the gaps! Carefully place four more copies of SOME in these gaps. Continuing this process with more copies of SOME will give us the desired tiling.\n\n![fig12-32](/figs/maths-0904ch12-reflect-fig12-32.png)",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 72 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q18",
            "number": "18",
            "isHard": false,
            "page": 73,
            "text": "It should be emphasised that our procedure needs to be justified to assure us that it will always work. We will not do this here, but invite you to try it on your own!",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 73 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q19",
            "number": "19",
            "isHard": false,
            "page": 74,
            "text": "A Cutting-edge Discovery\n\nThe following shape—the first of its kind!—that leads to aperiodic tilings was discovered only recently in 2023 by a team of four mathematicians (Smith, Myers, Kaplan and Goodman-Strauss).\n\nCut out 15 identical copies of the following shape (known as the 'hat') and start to tile with it. Do you see any pattern? You will find that the hat shape will tile the plane endlessly, but without ever quite repeating the same pattern. That is why it is called an 'aperiodic' tiling.\n\n![hat](/figs/maths-0904ch12-reflect-hat.png)",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the tiling exploration on page 74 of Ganita Manjari, Grade 9, Part II."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch13",
    "number": 13,
    "title": "Two Variables, One Line",
    "slug": "two-variables-one-line",
    "code": "0904ch13",
    "beta": true,
    "exercises": [
      {
        "id": "ex13.1",
        "title": "Exercise Set 13.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Write a linear equation in two variables in which a = 3, b = 0 and c = −1/5.",
            "answer": {
              "answerKey": "3x+0y−$\\dfrac{1}{5}$=0; equivalently, 15x−1=0.",
              "schoolMethod": "Substitute the given coefficients into ax+by+c=0:\n\n3x+0y−$\\dfrac{1}{5}$=0.\n\nMultiplying every term by 5 gives **15x−1=0**. The coefficient of y is zero, which is allowed: this is a linear equation in two variables whose graph is a vertical line."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Complete the following table after expressing the given linear equations in standard form.\n\n| Linear equation in two variables | Standard Form | Coefficient of x | Coefficient of y | Constant term |\n|---|---|---|---|---|\n| y − 15 = √2x | | | | |\n| 3y − 2x = 0 | | | | |\n| 5x = 3y | | | | |\n| x = 8 | | | | |\n| 3y = 1 | | | | |",
            "answer": {
              "answerKey": "(i) √2x−y+15=0: (a,b,c)=(√2,−1,15); (ii) −2x+3y=0: (−2,3,0); (iii) 5x−3y=0: (5,−3,0); (iv) x−8=0: (1,0,−8); (v) 3y−1=0: (0,3,−1).",
              "schoolMethod": "**Standard form:** collect all terms on the left so the equation is ax + by + c = 0. The coefficient triple is (a,b,c).\n\n(i) y − 15 = √2x ⇒ **√2x − y + 15 = 0**; (a,b,c) = (√2, −1, 15).\n\n(ii) 3y − 2x = 0 ⇒ **−2x + 3y + 0 = 0**; (a,b,c) = (−2, 3, 0).\n\n(iii) 5x = 3y ⇒ **5x − 3y + 0 = 0**; (a,b,c) = (5, −3, 0).\n\n(iv) x = 8 ⇒ **x + 0y − 8 = 0**; (a,b,c) = (1, 0, −8).\n\n(v) 3y = 1 ⇒ **0x + 3y − 1 = 0**; (a,b,c) = (0, 3, −1).\n\nMultiplying an equation by −1 gives an equivalent standard form, provided all three coefficients change sign together."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "(i) The cost of a notebook is twice the cost of a pen. Consider the cost of a notebook to be ₹t and that of a pen to be ₹p. Charlie wrote t = 2p, whereas Meera wrote p = 2t. Which of these two representations is correct?\n\n(ii) In a one-day International Cricket match between India and Sri Lanka played in Nagpur, two Indian batsmen together scored 176 runs. Manisha expressed this situation as x + y = 176, where the number of runs scored by one batsman is x, and the number of runs scored by the other is y. Is this a correct representation?",
            "answer": {
              "answerKey": "(i) Charlie is correct: t=2p. (ii) Yes, x+y=176.",
              "schoolMethod": "(i) “The notebook costs twice the pen” means t=2×p. Therefore **t=2p** is correct. The equation p=2t would say the pen costs twice as much as the notebook, so Meera’s representation reverses the relationship.\n\n(ii) If the two scores are x and y, their combined score is x+y. Since it is 176, **x+y=176** is a correct mathematical representation. A single equation does not determine the two scores uniquely; it represents every pair whose sum is 176."
            }
          }
        ]
      },
      {
        "id": "ex13.2",
        "title": "Exercise Set 13.2",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Verify if the ordered pair (4, 3) is a solution of 5x − 6y = 2. Explain your reasoning.",
            "answer": {
              "answerKey": "Yes, (4,3) is a solution.",
              "schoolMethod": "Substitute x=4 and y=3:\n\n5x−6y=5(4)−6(3)=20−18=2.\n\nThis equals the right-hand side, 2. Hence **(4,3) is a solution**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Find any two solutions for each of the following equations:\n\n(i) 7x − 3y = 21    (ii) 2x + 3y = 5",
            "answer": {
              "answerKey": "(i) (3,0), (0,−7). (ii) (1,1), (4,−1).",
              "schoolMethod": "(i) For 7x−3y=21: set y=0 to obtain x=3, giving (3,0). Set x=0: −3y=21, so y=−7, giving (0,−7).\n\n(ii) For 2x+3y=5: set x=1, then 2+3y=5, so y=1 and (1,1). Set y=−1, then 2x−3=5, so x=4 and (4,−1). Substitution verifies all four ordered pairs."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "In the equations given below, m and n are unknown constants: 2mx + 3y = 7; 4x + ny = −10. If (2, −1) is the solution of both equations, find the values of m and n.",
            "answer": {
              "answerKey": "m=$\\dfrac{5}{2}$ and n=18.",
              "schoolMethod": "Substitute x=2, y=−1 into 2mx+3y=7:\n\n2m(2)+3(−1)=7 ⇒ 4m−3=7 ⇒ 4m=10 ⇒ **m=$\\dfrac{5}{2}$**.\n\nNow substitute in 4x+ny=−10:\n\n4(2)+n(−1)=−10 ⇒ 8−n=−10 ⇒ **n=18**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Find two solutions which lie in different quadrants for each of the following linear equations. Identify the quadrants in which the points lie.\n\n(i) 5x + 3y = 7    (ii) 5x − 3y = 7    (iii) −5x + 3y = 7    (iv) −5x − 3y = 7\n\nVerify your solutions by representing the linear equations on a graph paper.",
            "answer": {
              "answerKey": "(i) ($\\dfrac{1,2}{3}$) QI and (2,−1) QIV; (ii) (1,−$\\dfrac{2}{3}$) QIV and (2,1) QI; (iii) (−$\\dfrac{1,2}{3}$) QII and ($\\dfrac{2,17}{3}$) QI; (iv) (−1,−$\\dfrac{2}{3}$) QIII and (−2,1) QII.",
              "schoolMethod": "Substitute each selected x-value and solve for y.\n\n(i) 5x+3y=7: x=1 gives 5+3y=7, y=$\\dfrac{2}{3}$ (QI); x=2 gives 10+3y=7, y=−1 (QIV).\n\n(ii) 5x−3y=7: x=1 gives 5−3y=7, y=−$\\dfrac{2}{3}$ (QIV); x=2 gives 10−3y=7, y=1 (QI).\n\n(iii) −5x+3y=7: x=−1 gives 5+3y=7, y=$\\dfrac{2}{3}$ (QII); x=2 gives −10+3y=7, y=$\\dfrac{17}{3}$ (QI).\n\n(iv) −5x−3y=7: x=−1 gives 5−3y=7, y=−$\\dfrac{2}{3}$ (QIII); x=−2 gives 10−3y=7, y=1 (QII).\n\nEach pair satisfies its equation and lies in two different quadrants. Plotting either pair for an equation and joining the points gives its straight-line graph."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Consider the graph of the equation 3x − 7y = 21 shown below. Does the point C (2, 3) lie on the line? Does it satisfy the equation? Can points that do not lie on the line satisfy the equation?\n\n![ch13-ex13-2-q5-graph](/figs/maths-0904ch13-ex13-2-q5-graph.png)",
            "answer": {
              "answerKey": "No: (2,3) gives −15, not 21. No point off the graph can satisfy the equation.",
              "schoolMethod": "Substitute C=(2,3): 3(2)−7(3)=6−21=−15, which is not 21. Thus C does not satisfy the equation and does not lie on the graph. By definition, the graph consists exactly of the points whose coordinates satisfy the equation. Therefore a point not on the line cannot satisfy it."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "State whether the following sentences are True or False. Justify your answer.\n\n(i) A linear equation in two variables has only one solution.\n\n(ii) The graph of a linear equation in two variables always passes through the origin.\n\n(iii) A linear equation in two variables can never have rational solutions.\n\n(iv) x = 3 is a valid linear equation in two variables.\n\n(v) The equation 2x + 3y = 7 has infinitely many solutions.\n\n(vi) The point (1, 2) is a solution of the equation 2x + 3y = 7.",
            "answer": {
              "answerKey": "(i) F; (ii) F; (iii) F; (iv) T; (v) T; (vi) F.",
              "schoolMethod": "(i) **False:** a non-vertical linear equation has infinitely many ordered-pair solutions; for example, ($\\dfrac{0,7}{3}$) and ($\\dfrac{1,5}{3}$) solve 2x+3y=7.\n\n(ii) **False:** only equations with zero constant term (in standard form ax+by+c=0, c=0) necessarily pass through (0,0); 2x+3y=7 does not.\n\n(iii) **False:** for 2x+3y=7, (2,1) is an integer solution and hence rational.\n\n(iv) **True:** x=3 can be written x+0y−3=0, a linear equation in two variables.\n\n(v) **True:** choose any x and solve y=$\\dfrac{7-2x}{3}$, giving infinitely many solutions.\n\n(vi) **False:** 2(1)+3(2)=8≠7."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "(i) Compare the solutions of the equations 3x + 4y = 7 and 6x + 8y = 14. Argue that they have the same set of solutions, that is, every solution of one is also a solution of the other.\n\n(ii) Show that the equations ax + by = c and kax + kby = kc, with k ≠ 0, have the same set of solutions.",
            "answer": {
              "answerKey": "Each pair has exactly the same solution set.",
              "schoolMethod": "(i) Divide 6x+8y=14 by 2 to get 3x+4y=7. Thus the equations are equivalent, so every solution of either satisfies the other.\n\n(ii) If ax+by=c, multiplying both sides by non-zero k gives kax+kby=kc. Conversely, divide the second equation by k (permitted because k≠0) to recover ax+by=c. Hence the two equations have the **same solution set**."
            }
          }
        ]
      },
      {
        "id": "ex13.3",
        "title": "Exercise Set 13.3",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "The following diagrams represent ski hills. Rank the hills in order of their steepness, from least to greatest.\n\n![ch13-ex13-3-q1-ski](/figs/maths-0904ch13-ex13-3-q1-ski.png)",
            "answer": {
              "answerKey": "B, C, A.",
              "schoolMethod": "Steepness is represented by slope = rise/run.\n\nA: $\\dfrac{60}{70}$=$\\dfrac{6}{7}$≈0.857.\nB: $\\dfrac{60}{110}$=$\\dfrac{6}{11}$≈0.545.\nC: $\\dfrac{80}{100}$=0.8.\n\nSince 0.545<0.8<0.857, the order from least to greatest steepness is **B, C, A**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "The ramp at a loading dock rises 2.5 metres over a run of 4 metres. Find the slope of the ramp.\n\n![ch13-ex13-3-q2-ramp](/figs/maths-0904ch13-ex13-3-q2-ramp.png)",
            "answer": {
              "answerKey": "$\\dfrac{5}{8}$=0.625.",
              "schoolMethod": "Slope = vertical rise / horizontal run = $\\dfrac{2.5}{4}$ = $\\dfrac{25}{40}$ = **$\\dfrac{5}{8}$ = 0.625**. The slope is dimensionless when both measurements use metres."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Find the slope of the line l in each of the following diagrams.\n\n![ch13-ex13-3-q3-i](/figs/maths-0904ch13-ex13-3-q3-i.png)\n\n![ch13-ex13-3-q3-ii](/figs/maths-0904ch13-ex13-3-q3-ii.png)\n\n![ch13-ex13-3-q3-iii](/figs/maths-0904ch13-ex13-3-q3-iii.png)\n\n![ch13-ex13-3-q3-iv](/figs/maths-0904ch13-ex13-3-q3-iv.png)",
            "answer": {
              "answerKey": "(i) 0; (ii) −1; (iii) $\\dfrac{2}{3}$; (iv) undefined.",
              "schoolMethod": "(i) The line is horizontal, so its rise is 0 for every non-zero run. Its slope is **0**.\n\n(ii) Two marked grid points are (−4, 4) and (4, −4). Therefore,\n\\[m=\\dfrac{−4−4}{4−(−4)}=\\dfrac{−8}{8}=\\mathbf{−1}.\\]\n\n(iii) Two marked grid points are (−4, −2) and (2, 2). Therefore,\n\\[m=\\dfrac{2−(−2)}{2−(−4)}=\\dfrac{4}{6}=\\mathbf{\\dfrac{2}{3}}.\\]\n\n(iv) The line is vertical, so its horizontal run is 0. Division by zero is not defined; hence the slope is **undefined**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "An accessibility ramp for wheelchairs is to be made alongside the staircase. The guidelines given for the slope of the ramp is 1 cm vertical rise to 12 cm horizontal length. What should be the horizontal length of the ramp if the total height of the stairs is 18 cm?\n\n![ch13-ex13-3-q4-wheelchair](/figs/maths-0904ch13-ex13-3-q4-wheelchair.png)",
            "answer": {
              "answerKey": "216 cm = 2.16 m.",
              "schoolMethod": "The slope guideline means rise/run=$\\dfrac{1}{12}$. With a rise of 18 cm,\n\$\\dfrac{n18}{run}$=$\\dfrac{1}{12}$ ⇒ run=18×12=**216 cm = 2.16 m**."
            }
          }
        ]
      },
      {
        "id": "ex13.4",
        "title": "Exercise Set 13.4",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "A family buys movie tickets and snack boxes on two days. If a ticket costs ₹x and a snack box costs ₹y, write equations for (i) 2 tickets and 3 snack boxes cost ₹850; (ii) 4 tickets and 1 snack box cost ₹1100.",
            "answer": {
              "answerKey": "2x+3y=850 and 4x+y=1100.",
              "schoolMethod": "(i) Two tickets cost 2x and three snack boxes cost 3y, so **2x+3y=850**.\n\n(ii) Four tickets cost 4x and one snack box costs y, so **4x+y=1100**. These equations model the two purchases."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "A taxi fare consists of fixed charge ₹x plus ₹y per kilometre. Sahil travels 6 km for ₹122 and Meena 8 km for ₹160. Form a pair of equations.",
            "answer": {
              "answerKey": "x+6y=122 and x+8y=160.",
              "schoolMethod": "Fixed charge is x, and the distance charge is y per kilometre. For 6 km, the total is x+6y=122. For 8 km, it is x+8y=160. Hence the system is **x+6y=122, x+8y=160**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Adult tickets cost ₹150 and children’s tickets cost ₹100. There are 200 people and ₹25,000 is collected. If x adult and y child tickets are sold, form the equations.",
            "answer": {
              "answerKey": "x+y=200 and 150x+100y=25,000; solution x=100, y=100.",
              "schoolMethod": "Total attendance gives **x+y=200**. Ticket revenue gives **150x+100y=25,000**, or 3x+2y=500 after dividing by 50. From x+y=200, 2x+2y=400. Subtracting this from 3x+2y=500 gives x=100, so y=100. Thus 100 adult tickets and 100 children’s tickets fit the data."
            }
          }
        ]
      },
      {
        "id": "ex13.5",
        "title": "Exercise Set 13.5",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Form a pair of linear equations for each of the following problems and find their solutions.\n\n(i) The sum of two integers is +5 and their difference is −21. Find the two numbers.\n\n(ii) The difference between two numbers is 26 and one number is three times the other. Find the numbers.\n\n(iii) The coach of a cricket team buys 7 bats and 6 balls for ₹8880. Later, she buys 3 bats and 5 balls for ₹4000. Find the cost of each bat and each ball.\n\n(iv) The taxi charges in a city consist of a fixed charge together with the charge for the distance covered for every km. For a distance of 10 km, the total amount paid is ₹155 and for a journey of 15 km, the total amount paid is ₹220. What is the fixed charge and the charge per km? How much does a person have to pay for travelling a distance of 25 km?\n\n(v) A fraction becomes equal to 9/11 if 2 is added to both the numerator and the denominator. If 3 is added to both the numerator and the denominator, it becomes equal to 5/6. Find the fraction.\n\n(vi) If we add 1 to the numerator and subtract 1 from the denominator, a fraction reduces to 1. It becomes equal to 1/2 if we add 1 only to the denominator. What is the fraction?\n\n(vii) Five years ago, Nuri was thrice as old as Sonu. Ten years later, Nuri will be twice as old as Sonu. How old are Nuri and Sonu?\n\n(viii) The sum of the digits of a two-digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits. Find the number.\n\n(ix) Meena went to a bank to withdraw ₹2000. She asked the cashier to give her ₹50 and ₹100 notes only. Meena got 25 notes in all. Find how many notes of ₹50 and ₹100 did she receive?\n\n(x) A lending library has a fixed charge for the first three days and an additional charge for each day thereafter. Saritha paid ₹27 for a book kept for seven days, while Susy paid ₹21 for the book she kept for five days. Find the fixed charge and the charge for each extra day.",
            "answer": {
              "answerKey": "(i) −8 and 13; (ii) 39 and 13; (iii) bat ₹1200, ball ₹80; (iv) fixed ₹25, ₹13/km, 25 km costs ₹350; (v) $\\dfrac{7}{9}$; (vi) $\\dfrac{3}{5}$; (vii) Nuri 50, Sonu 20; (viii) 18; (ix) ten ₹50 notes and fifteen ₹100 notes; (x) fixed ₹15, then ₹3 per extra day.",
              "schoolMethod": "**(i)** Let the integers be x,y. x+y=5 and x−y=−21. Adding gives 2x=−16 ⇒ x=−8; hence y=13.\n\n**(ii)** Let the larger number x and smaller y. x−y=26 and x=3y. Thus 3y−y=26 ⇒ y=13, x=39.\n\n**(iii)** Let bat cost b and ball cost c. 7b+6c=8880 ...(1), 3b+5c=4000 ...(2). Multiply (1) by 5 and (2) by 6: 35b+30c=44400; 18b+30c=24000. Subtract: 17b=20400, so b=₹1200. Substitute into (2): 3600+5c=4000 ⇒ c=₹80.\n\n**(iv)** Let fixed charge f and per-km fare r. f+10r=155, f+15r=220. Subtracting gives 5r=65 ⇒ r=₹13/km. Then f=155−130=₹25. For 25 km, fare=25+13×25=**₹350**.\n\n**(v)** Let the fraction be $\\dfrac{x}{y}$. $\\dfrac{x+2}{y+2}$=$\\dfrac{9}{11}$ ⇒ 11x−9y=−4 ...(1). $\\dfrac{x+3}{y+3}$=$\\dfrac{5}{6}$ ⇒ 6x−5y=−3 ...(2). Multiplying (1) by 5 and (2) by 9: 55x−45y=−20, 54x−45y=−27. Thus x=7; substituting in (2), 42−5y=−3 ⇒ y=9. Fraction=**$\\dfrac{7}{9}$**.\n\n**(vi)** $\\dfrac{x+1}{y-1}$=1 gives y=x+2. Also $\\dfrac{x}{y+1}$=$\\dfrac{1}{2}$ gives 2x=y+1. Substitute: 2x=x+3 ⇒ x=3 and y=5. The fraction is **$\\dfrac{3}{5}$**.\n\n**(vii)** Let current ages be N and S. N−5=3(S−5) ⇒ N=3S−10. N+10=2(S+10) ⇒ N=2S+10. Equating, 3S−10=2S+10 ⇒ S=20, N=50.\n\n**(viii)** Let tens digit a and units digit b. a+b=9. The number is 10a+b, reversed is 10b+a, and 9(10a+b)=2(10b+a). Simplify: 88a=11b, hence b=8a. Therefore 9a=9 ⇒ a=1,b=8, number **18**.\n\n**(ix)** Let x be the number of ₹50 notes and y the number of ₹100 notes. x+y=25 and 50x+100y=2000, i.e. x+2y=40. Subtract x+y=25: y=15, so x=10.\n\n**(x)** Let F be the fee for the first three days and r the charge for each additional day. F+4r=27 and F+2r=21. Subtract: 2r=6 ⇒ r=₹3; F=21−6=₹15."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Form a pair of linear equations and find their common solutions graphically.\n\n10 students of Grade 9 took part in a Mathematics quiz. If the number of girls is 4 more than the number of boys, find the number of boys and girls who took part in the quiz.",
            "answer": {
              "answerKey": "3 boys and 7 girls.",
              "schoolMethod": "Let b be boys and g be girls. Total students: b+g=10. “Four more girls than boys” gives g−b=4. Add the equations: 2g=14 ⇒ g=7; then b=3.\n\nFor a graph, write g=10−b and g=b+4. Plot the first through (0,10),(10,0), and the second through (0,4),(3,7). They intersect at **(b,g)=(3,7)**, giving 3 boys and 7 girls."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Use the ratios a₁/a₂, b₁/b₂, c₁/c₂, to determine whether the lines representing the following pairs of linear equations intersect at a point, are parallel or are coincident.\n\n(i) 5x − 4y + 8 = 0; 7x + 6y − 9 = 0\n\n(ii) 9x + 3y + 12 = 0; 18x + 6y + 24 = 0\n\n(iii) 6x − 3y + 10 = 0; 2x − y + 9 = 0",
            "answer": {
              "answerKey": "(i) Intersect at one point; (ii) coincident; (iii) parallel and distinct.",
              "schoolMethod": "(i) $\\dfrac{a₁}{a₂}$=$\\dfrac{5}{7}$, $\\dfrac{b₁}{b₂}$=−$\\dfrac{4}{6}$=−$\\dfrac{2}{3}$; these differ. So the lines intersect at one point. Solving 5x−4y=−8 and 7x+6y=9 gives 29x=−6, so x=−$\\dfrac{6}{29}$ and y=$\\dfrac{101}{58}$.\n\n(ii) $\\dfrac{18}{9}$=$\\dfrac{6}{3}$=$\\dfrac{24}{12}$=2. All coefficient and constant ratios agree, so the equations describe **coincident lines** and have infinitely many common solutions.\n\n(iii) $\\dfrac{6}{2}$=3 and $\\dfrac{-3}{-1}$=3, but $\\dfrac{10}{9}$≠3. Coefficients are proportional while constants are not, so the lines are **parallel and distinct**; there is no common solution."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Which of the following pairs of linear equations have solutions? If they have solutions, find them graphically.\n\n(i) x + y = 5, 2x + 2y = 10\n\n(ii) x − y = 8, 3x − 3y = 16\n\n(iii) 2x + y − 6 = 0, 4x − 2y − 4 = 0\n\n(iv) 2x − 2y − 2 = 0, 4x − 4y − 5 = 0",
            "answer": {
              "answerKey": "(i) Coincident, infinitely many solutions; (ii) no solution; (iii) (2,2); (iv) no solution.",
              "schoolMethod": "(i) Dividing the second equation by 2 gives x+y=5, the first equation itself. The graphs coincide, so every point on x+y=5 is a common solution.\n\n(ii) The equations reduce to x−y=8 and x−y=$\\dfrac{16}{3}$. These are distinct parallel lines; there is **no solution**.\n\n(iii) 2x+y=6 and 4x−2y=4. Doubling the first gives 4x+2y=12. Add the second: 8x=16 ⇒ x=2; then y=2. The graphs intersect at **(2,2)**.\n\n(iv) The first reduces to x−y=1 and the second to x−y=$\\dfrac{5}{4}$. The lines are parallel and distinct, so there is no solution."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Half the perimeter of a rectangular garden, whose length is 4 m more than its width, is 36 m. Find the dimensions of the garden.",
            "answer": {
              "answerKey": "Length 20 m; width 16 m.",
              "schoolMethod": "Let width=w m, length=l m. Half the perimeter is l+w=36, and l=w+4. Substitute: (w+4)+w=36 ⇒ 2w=32 ⇒ w=16 m. Then l=20 m. Check: l+w=36 and l−w=4."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "Given the linear equation 2x + 3y − 8 = 0, write another linear equation in two variables so that the graphs of the pair formed represent (i) intersecting lines (ii) parallel lines (iii) coincident lines.",
            "answer": {
              "answerKey": "Examples: (i) x+y−1=0; (ii) 4x+6y−10=0; (iii) 4x+6y−16=0.",
              "schoolMethod": "(i) **Intersecting:** choose x+y−1=0. Its x:y coefficient ratio 1:1 differs from 2:3, so there is one intersection.\n\n(ii) **Parallel, distinct:** choose 4x+6y−10=0. The x and y coefficients are twice those of the original, but the constant −10 is not twice −8 (which would be −16). So the lines are parallel but not coincident.\n\n(iii) **Coincident:** multiply the whole original equation by 2, obtaining **4x+6y−16=0**. Both equations represent the same line."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "Here is a problem that was posed by Mahāvīrāchārya in Gaṇita sāra saṅgraha (c. 850 CE).\n\nThe price of 9 citrons and 7 fragrant wood-apples taken together is 107; and the price of 7 citrons and 9 fragrant wood-apples taken together is 101.\n\nO mathematician, tell me quickly the price of each citron and of each fragrant wood-apple.\n\n(Hint: The given problem can be modelled as\n\n9x + 7y = 107\n7x + 9y = 101\n\nCan you figure out a way of solving these equations without directly using elimination or the substitution method? What is special in this pair of equations? The x and y coefficients are interchanged in the 2 equations.\n\nWhat will happen if we add the pair of equations? What will happen if we subtract the pair of equations? Can the resulting equations be solved to find the values of x and y?)",
            "answer": {
              "answerKey": "Citron ₹8; fragrant wood-apple ₹5.",
              "schoolMethod": "Add the equations: 16x+16y=208 ⇒ x+y=13. Subtract the second equation from the first: 2x−2y=6 ⇒ x−y=3. Add these simpler equations: 2x=16, so x=8. Then y=13−8=5. Therefore one citron costs **₹8** and one fragrant wood-apple **₹5**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "5 pencils and 7 pens together cost ₹50, whereas 7 pencils and 5 pens together cost ₹46. Find the cost of each pencil and pen.",
            "answer": {
              "answerKey": "Pencil ₹3; pen ₹5.",
              "schoolMethod": "Let pencil cost be p and pen cost be q. 5p+7q=50 and 7p+5q=46. Adding: 12p+12q=96 ⇒ p+q=8. Subtracting the first from the second: 2p−2q=−4 ⇒ p−q=−2. Add the last two relations: 2p=6 ⇒ p=3; hence q=5. Check: 5(3)+7(5)=50 and 7(3)+5(5)=46."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "Find the height of the stool.\n\n![ch13-ex13-5-q9-stool](/figs/maths-0904ch13-ex13-5-q9-stool.png)",
            "answer": {
              "answerKey": "Stool height = 55 cm; cat height = 30 cm.",
              "schoolMethod": "Let s be stool height and c be cat height. In the first picture, the cat is on the stool, so s+c=85. In the second, the cat is on the floor and the stool seat is 25 cm above its head, so s−c=25. Add the equations: 2s=110 ⇒ **s=55 cm**. Then c=85−55=30 cm. The stool is 55 cm high."
            }
          }
        ]
      },
      {
        "id": "ex13.end",
        "title": "End-of-Chapter Exercises",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "The graph of the line y = 3x, passing through (0, 0) and (2, 6) is given below.\n\n(i) Identify the slope of the line from the graph and explain how you calculated it using the two points on the line.\n\n(ii) What is the y-intercept of the line? Explain its significance.\n\n(iii) A water tank is being filled so that the water level y (in cm) after x minutes follows this graph.\n\n(a) How high is the water after 5 minutes?\n\n(b) How many minutes will it take for the water to reach a height of 21 cm?\n\n(iv) Without drawing a new graph, determine whether the point (4, 10) lies on this line. Justify your answer.\n\n(v) Plot the point where this line intersects the line x = 3. Explain how you found the coordinates.\n\n![ch13-end-q1-graph](/figs/maths-0904ch13-end-q1-graph.png)",
            "answer": {
              "answerKey": "Slope 3; y-intercept 0; 15 cm after 5 min; 7 min for 21 cm; (4,10) is not on line; intersection (3,9).",
              "schoolMethod": "(i) Slope m=$\\dfrac{y₂-y₁}{x₂-x₁}$=$\\dfrac{6-0}{2-0}$=**3**.\n\n(ii) At x=0, y=0, so the y-intercept is 0. In the tank context, the water level starts at 0 cm.\n\n(iii)(a) At x=5, y=3(5)=**15 cm**. (b) For y=21, 21=3x, so x=**7 minutes**.\n\n(iv) At x=4 the line predicts y=3(4)=12, not 10. Therefore (4,10) does not lie on the line.\n\n(v) If x=3, then y=3×3=9. The intersection point is **(3,9)**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "In countries like the USA, temperature is measured in Fahrenheit, whereas in countries like India, it is measured in Celsius. Here is a linear equation that converts Celsius to Fahrenheit:\n\nF = (9/5)C + 32\n\n(i) Draw the graph of the linear equation above using Celsius on the x-axis and Fahrenheit on the y-axis.\n\n(ii) If the temperature is 30 °C, what is the temperature in Fahrenheit?\n\n(iii) If the temperature is 95 °F, what is the temperature in Celsius?\n\n(iv) If the temperature is 0 °C, what is the temperature in Fahrenheit and if the temperature is 0 °F, what is the temperature in Celsius?\n\n(v) Is there a temperature which is numerically the same in both Fahrenheit and Celsius? If yes, find it.",
            "answer": {
              "answerKey": "(i) Plot e.g. (0,32),(100,212), join them; (ii) 86°F; (iii) 35°C; (iv) 32°F and −$\\dfrac{160}{9}$°C ≈−17.8°C; (v) −40°.",
              "schoolMethod": "(i) The graph is a straight line. Useful points are: C=0 gives F=32; C=100 gives F=($\\dfrac{9}{5}$)(100)+32=212; C=−40 gives F=−40. Plot points (0,32), (100,212), and join them with a straight line.\n\n(ii) F=($\\dfrac{9}{5}$)(30)+32=54+32=**86°F**.\n\n(iii) 95=($\\dfrac{9}{5}$)C+32 ⇒ 63=($\\dfrac{9}{5}$)C ⇒ C=63×$\\dfrac{5}{9}$=**35°C**.\n\n(iv) At C=0, F=32°F. At F=0, 0=($\\dfrac{9}{5}$)C+32 ⇒ C=−$\\dfrac{160}{9}$≈**−17.78°C**.\n\n(v) Set F=C: C=($\\dfrac{9}{5}$)C+32 ⇒ −($\\dfrac{4}{5}$)C=32 ⇒ C=−40. Thus **−40°C=−40°F**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Solve the following system of equations graphically:\n2x + y = 6, 2x − y − 2 = 0.",
            "answer": {
              "answerKey": "The lines intersect at (2,2).",
              "schoolMethod": "Rewrite the equations as y=6−2x and y=2x−2. For the first line, plot (0,6) and (3,0). For the second, plot (0,−2) and (1,0). Draw both straight lines; their intersection satisfies both equations. Algebraically checking the intersection: add 2x+y=6 and 2x−y=2 to get 4x=8, so x=2; then y=2. The graphical solution is **(2,2)**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Find the point of intersection of the lines shown on the cover page.",
            "answer": {
              "answerKey": "The lines 15x−10y−115=0 and 15x+100y−335=0 intersect at (9, 2).",
              "schoolMethod": "The cover gives the two lines **15x − 10y − 115 = 0** and **15x + 100y − 335 = 0**.\n\nRewrite and divide by 5:\n\n3x − 2y = 23 … (1)\n\n3x + 20y = 67 … (2)\n\nSubtract (1) from (2): 22y = 44, so y = 2.\n\nSubstitute y = 2 into (1): 3x − 4 = 23 ⇒ 3x = 27 ⇒ x = 9.\n\nCheck: 15(9) − 10(2) − 115 = 0 and 15(9) + 100(2) − 335 = 0.\n\n**Therefore, the point of intersection is (9, 2).**"
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Give a formula to find the x-intercept of the line y = mx + c.",
            "answer": {
              "answerKey": "x-intercept = −$\\dfrac{c}{m}$ when m≠0.",
              "schoolMethod": "At the x-intercept, y=0. Substitute into y=mx+c: 0=mx+c ⇒ mx=−c. If m≠0, **x=−$\\dfrac{c}{m}$**. If m=0 and c≠0, the horizontal line never meets the x-axis; if m=c=0, the line is the x-axis itself and every point on it is an intercept."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "A person is choosing between two mobile plans.\n\nPlan A: ₹50 monthly fee + ₹0.20 per minute of call time.\n\nPlan B: ₹30 monthly fee + ₹0.30 per minute of call time.\n\nFor how many minutes of calling per month is Plan A cheaper than Plan B? For how many minutes is Plan B cheaper? Also find the number of minutes at which both plans cost the same.",
            "answer": {
              "answerKey": "A is cheaper for more than 200 minutes; B for fewer than 200; equal at 200 minutes.",
              "schoolMethod": "For m call minutes, A(m)=50+0.20m and B(m)=30+0.30m. Set equal: 50+0.20m=30+0.30m ⇒ 20=0.10m ⇒ m=200. At 200 min both cost ₹90. If m<200, Plan B is cheaper because it has the lower fixed fee; if m>200, Plan A is cheaper because its per-minute charge is lower."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "How many lines exist that\n\n(i) have a given slope?\n\n(ii) have a given slope and pass through a given point?",
            "answer": {
              "answerKey": "(i) Infinitely many; (ii) exactly one.",
              "schoolMethod": "(i) A fixed slope fixes only the direction. The line y=mx+c has that slope for every choice of intercept c, so there are **infinitely many** parallel lines.\n\n(ii) A fixed slope m and point (x₀,y₀) determine c uniquely: c=y₀−mx₀. Therefore exactly **one line** has that slope and passes through that point."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "For what values of p does the pair of equations given below have a unique solution?\n4x + py + 8 = 0;  2x + 2y + 2 = 0.",
            "answer": {
              "answerKey": "p≠4.",
              "schoolMethod": "Two lines have a unique intersection when their x and y coefficients are not proportional, i.e. a₁b₂−a₂b₁≠0. Here 4(2)−2p=8−2p≠0 ⇒ p≠4. When p=4 the coefficient ratios agree and the lines are parallel but not coincident (constants do not match), so there is no unique solution."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "Find the values of a and b for which the following system of equations has infinitely many solutions:\n(a + b)x − 2by = 5a + 2b + 1; 3x − y = 14.",
            "answer": {
              "answerKey": "a=5 and b=1.",
              "schoolMethod": "For coincident lines, all three ratios must agree. Write the first as (a+b)x−2by−(5a+2b+1)=0 and the second as 3x−y−14=0. The coefficient ratio requires $\\dfrac{a+b}{3}$=$\\dfrac{-2b}{-1}$=2b. Hence a+b=6b, so a=5b. The constant ratio gives $\\dfrac{5a+2b+1}{14}$=2b. Substitute a=5b: (25b+2b+1)=28b ⇒ b=1; thus a=5. These values make the first equation 6x−2y=28, twice the second equation."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "text": "Find the value of ‘k’ for which the following system of equations represents a pair of coincident lines:\nx + 2y = 3; (k − 1)x + (k + 1)y = k + 3.",
            "answer": {
              "answerKey": "k=3.",
              "schoolMethod": "Write the first as x+2y−3=0 and the second as (k−1)x+(k+1)y−(k+3)=0. For coincident lines, the second coefficient triple must be a scalar multiple λ of (1,2,−3). Thus k−1=λ and k+1=2λ. Subtracting gives 2=k−1, so k=3 and λ=2. Check the constant: −(k+3)=−6=2(−3), so all three coefficients are proportional. Therefore **k=3**."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "text": "(i) Robot 1 starts from the origin and traces a path by repeatedly moving 3 units to the right and then 4 units upward. Robot 2 starts from the point (10, 0) and repeatedly moves 1 unit to the right and then 2 units upward. Will the paths traced by these two robots intersect and if so, where?\n\n(ii) Robot 1 starts from (3, 0) and traces a path by repeatedly moving 5 units to the right and then 5 units upward. Robot 2 starts from the point (7, 0) and repeatedly moves 5 units to the right and then 3 units downwards. Will the paths traced by these two robots intersect and if so, where?",
            "answer": {
              "answerKey": "(i) Yes. The isolated intersections are (24, 28) and (33, 44); the paths also overlap along the segments from (26, 32) to (27, 32), from (27, 32) to (27, 34), from (28, 36) to (29, 36), from (30, 38) to (30, 40), and from (30, 40) to (31, 40). (ii) Yes. The first horizontal segments overlap from (7, 0) to (8, 0).",
              "schoolMethod": "Trace the **actual horizontal and vertical segments**, including their endpoints; comparing only the robots’ overall directions would miss overlaps.\n\n**(i)** Robot 1 has horizontal segments at heights 0, 4, 8, …, with each segment 3 units long, and vertical segments 4 units long. Robot 2 has horizontal segments at heights 0, 2, 4, …, with each segment 1 unit long, and vertical segments 2 units long. Comparing segments at the same height or on the same vertical line gives these common parts:\n\n• Isolated intersection points: **(24, 28)** and **(33, 44)**.\n• Shared horizontal segment at height 32: **from (26, 32) to (27, 32)**.\n• Shared vertical segment at x = 27: **from (27, 32) to (27, 34)**.\n• Shared horizontal segment at height 36: **from (28, 36) to (29, 36)**.\n• Shared vertical segment at x = 30: **from (30, 38) to (30, 40)**.\n• Shared horizontal segment at height 40: **from (30, 40) to (31, 40)**.\n\nThus, the paths share portions of five segments, besides the two isolated points. The endpoints listed for adjacent shared portions are intentionally repeated because the overlap changes from horizontal to vertical there.\n\n**(ii)** Robot 1’s first horizontal segment runs from (3, 0) to (8, 0). Robot 2’s first horizontal segment runs from (7, 0) to (12, 0). Hence they share the segment **from (7, 0) to (8, 0)**. After leaving the x-axis, Robot 1 moves upward while Robot 2 moves downward, so their later vertical/horizontal steps do not meet."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": true,
            "text": "At a certain time, Jacob notices that his digital watch reads ‘a’ minutes after two o’clock. Fifteen minutes later, it reads ‘b’ minutes after three o’clock. He noticed that a is six times greater than b. What time was it when he looked at his watch for the second time?",
            "answer": {
              "answerKey": "3:09.",
              "schoolMethod": "From 2:a to 3:b, the elapsed time is (60−a)+b minutes. It is 15, so 60−a+b=15 ⇒ a−b=45. Given a=6b, 6b−b=45 ⇒ 5b=45 ⇒ b=9. The second reading is **3:09**."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": true,
            "text": "The sum of the digits of a two-digit number is 15. The number obtained by interchanging the digits exceeds the given number by 9. Find the number.",
            "answer": {
              "answerKey": "78.",
              "schoolMethod": "Let the tens digit be x and units digit be y. x+y=15. The number is 10x+y; the reversed number is 10y+x. The difference condition is (10y+x)−(10x+y)=9 ⇒ 9(y−x)=9 ⇒ y−x=1. Add the two equations: x+y=15 and y−x=1 give 2y=16 ⇒ y=8, x=7. The number is **78**; reversed 87 is 9 greater."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": true,
            "text": "In a cyclic quadrilateral ABCD, ∠A = (x + 7)°, ∠B = (y + 8)°, ∠C = (3y + 23)° and ∠D = (4x + 12)°. Find all four angles of the cyclic quadrilateral.",
            "answer": {
              "answerKey": "∠A=37°, ∠B=48°, ∠C=143°, ∠D=132°.",
              "schoolMethod": "Opposite angles of a cyclic quadrilateral are supplementary.\n\n(x+7)+(3y+23)=180 ⇒ x+3y=150 ...(1).\n\n(y+8)+(4x+12)=180 ⇒ 4x+y=160 ...(2).\n\nFrom (2), y=160−4x. Substitute in (1): x+3(160−4x)=150 ⇒ −11x=−330 ⇒ x=30, y=40. Therefore A=37°, B=48°, C=143°, D=132°. The opposite sums are 37+143=180 and 48+132=180."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": true,
            "text": "A train moving with uniform speed for a certain distance takes 6 hours less if its speed is increased by 6 km/hour. It would have taken 6 hours more had its speed been decreased by 4 km/hour. Find the distance travelled and the speed of the train.",
            "answer": {
              "answerKey": "Speed 24 km/h; distance 720 km.",
              "schoolMethod": "Let original speed be v km/h and distance be d km. Original time is $\\dfrac{d}{v}$.\n\nWith increased speed: $\\dfrac{d}{v}$−$\\dfrac{d}{v+6}$=6 ⇒ $\\dfrac{6d}{v(v+6)}$=6 ⇒ d=v(v+6).\n\nWith decreased speed: $\\dfrac{d}{v-4}$−$\\dfrac{d}{v}$=6 ⇒ $\\dfrac{4d}{v(v-4)}$=6 ⇒ d=$\\dfrac{3v(v-4)}{2}$.\n\nEquate the expressions for d: v(v+6)=$\\dfrac{3v(v-4)}{2}$. Since v>4, divide by v: v+6=1.5v−6 ⇒ 0.5v=12 ⇒ v=24. Then d=24×30=**720 km**."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": true,
            "text": "The age of a father is equal to the sum of the ages of his four children. After 20 years, the sum of the ages of the children will be twice the age of the father. Find the age of the father.",
            "answer": {
              "answerKey": "40 years.",
              "schoolMethod": "Let the father’s present age be F. The sum of the four children’s present ages is also F. After 20 years, each child ages by 20 years, so their combined age becomes F+4(20)=F+80. The father’s age becomes F+20. Given F+80=2(F+20), so F+80=2F+40 ⇒ **F=40 years**."
            }
          }
        ]
      },
      {
        "id": "ex13.reflect",
        "title": "Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "page": 88,
            "text": "Are (1, $\\frac{9}{2}$), (0, 6), (4, 1) and ($\\frac{1}{2}$, $\\frac{21}{4}$) solutions of the equation 3x + 2y = 12?\n\nCan you find any other solution? How many solutions can you find?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 88 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "page": 92,
            "text": "Four friends — Ranju, Meena, Farhan, and Toshi — are solving problems.\n\nRanju: I noticed something! If c = 0 in the standard form of a line ax + by + c = 0, then the line must pass through the origin. Look, if I substitute x = 0 and y = 0, in equation ax + by = 0, the equation is satisfied. So, the origin lies on the line! We can also say that the line passes through the origin.\n\nFarhan: Let us try for the equation 2x + 3y = 0. Here a = 2, b = 3 but c = 0. If we substitute x = 0, then we get 3y = 0 or y = 0. This means (0, 0) lies on the line. So yes, this line passes through the origin.\n\nToshi: Suppose our equation has b = c = 0, say, 5x = 0. This becomes x = 0 which is the equation of the y-axis. And the y-axis passes through the origin.\n\nMeena: And if we take a = c = 0, say, 7y = 0, that means y = 0, which is the equation of the x-axis that also passes through the origin.\n\nSo, they conclude: Whenever c = 0, the line ax + by + c = 0 will always pass through the origin, irrespective of the values of a or b. Do you agree with them?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 92 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "page": 97,
            "text": "1. Consider the point on the line AB whose x-coordinate is 8. What is the y-coordinate of this point? Express this as an ordered pair.\n\n2. What is the x-coordinate of the point on the line AB whose y-coordinate is 6? Express this as an ordered pair.",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 97 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "page": 99,
            "text": "Can you use the points A, B and C to verify that the slope of this line is indeed −5?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 99 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "page": 104,
            "text": "The cost of one paratha and 2 bowls of dahi is ₹90. Also, the cost of 2 parathas and 7 bowls of dahi is ₹260. Can you figure out the cost of one paratha and one bowl of dahi and explain your reasoning?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 104 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "page": 106,
            "text": "Solve the puzzle and discuss your strategy with your friends. Can you determine the value represented by each shape?\n\n![Shape puzzle grid](/figs/maths-0904ch13-reflect-p106-shapes.png)",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 106 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "page": 107,
            "text": "What if we had expressed y in terms of x, i.e., take Equation (2) and write y = $\\frac{1}{2}$(3 − x). Would we still get the same solution?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 107 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "page": 109,
            "text": "The method used in solving this problem is called the Elimination Method because we eliminate one of the variables to obtain a linear equation in the other variable. In the example above, we eliminated y. Try the same problem by eliminating x instead of y. Also try to solve the two equations using the Substitution Method. Assess the pros and cons of each method.",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 109 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "page": 109,
            "text": "Does a pair of linear equations always have a unique solution? Can you analyse this using the Elimination Method? While subtracting the equations to eliminate a particular variable, if the other variable remains, then clearly there is a unique solution. But what if the second variable gets eliminated too while eliminating the first variable? Can you think of a situation where this happens?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 109 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "page": 110,
            "text": "How many solutions are there to the equations\n\n10x − 5y = 20 and 4x − 2y = 8?\n\nGive 3 more examples of pairs of equations that lead to 0 = 0 after subtraction, and therefore have infinitely many solutions. Can you find a simple rule to check when this happens?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 110 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "page": 110,
            "text": "What if one of a₂, b₂, c₂ is zero?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 110 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "page": 110,
            "text": "Does a pair of linear equations always have either a unique solution or infinitely many solutions?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 110 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": false,
            "page": 111,
            "text": "Give 3 more examples of pairs of equations that have no solution. Can you find a simple rule to check when this will happen?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 111 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": false,
            "page": 112,
            "text": "Are the converses of the above statements true?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 112 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": false,
            "page": 112,
            "text": "Can there be methods other than elimination and substitution to reduce a pair of linear equations in two variables to a linear equation in one variable? If so, describe them.",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 112 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": false,
            "page": 113,
            "text": "How do we find solutions from the graph? What can we say about the number of solutions when the two lines (i) intersect at a point, (ii) are parallel, (iii) are coincident?",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 113 of Ganita Manjari, Grade 9, Part II."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "isHard": false,
            "page": 115,
            "text": "Can you prove that two lines of equal slope are parallel?\n\n(Hint: Consider the equations of the two lines to be y = mx + d₁ and y = mx + d₂)",
            "answer": {
              "answerKey": "See the textbook discussion.",
              "schoolMethod": "Refer to the Think and Reflect discussion on page 115 of Ganita Manjari, Grade 9, Part II."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch14",
    "number": 14,
    "title": "Math of Space: Surface Area and Volume",
    "slug": "math-of-space-surface-area-and-volume",
    "code": "0904ch14",
    "beta": true,
    "exercises": [
      {
        "id": "ex14.1",
        "title": "Exercise Set 14.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "The volume of a cube is 64 cm³. What is its total surface area?",
            "answer": {
              "answerKey": "96 cm².",
              "schoolMethod": "If a is the side, a³=64 ⇒ a=4 cm. Total surface area S=6a²=6(4²)=**96 cm²**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "How many small cubes with side 20 cm can be packed tight in a cubical box with side 2 m?",
            "answer": {
              "answerKey": "1000 cubes.",
              "schoolMethod": "Convert 2 m to 200 cm. Along each edge, $\\dfrac{200}{20}$=10 small cubes fit. Total =10×10×10=**1000 cubes**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "The dimensions of a godown are 40 m × 25 m × 10 m. If it is filled with cuboidal boxes, each of dimensions 2 m × 1.25 m × 1 m, then find the number of boxes.",
            "answer": {
              "answerKey": "4000 boxes.",
              "schoolMethod": "Godown volume=40×25×10=10,000 m³. One box volume=2×1.25×1=2.5 m³. Since each dimension divides the corresponding godown dimension exactly, the packed count is ($\\dfrac{40}{2}$)($\\dfrac{25}{1.25}$)($\\dfrac{10}{1}$)=20×20×10=**4000 boxes**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Two cubes each of volume 125 cm³ are joined end to end. Find the surface area of the resulting cuboid.",
            "answer": {
              "answerKey": "250 cm².",
              "schoolMethod": "Each cube has side ∛125=5 cm. Joined face-to-face, the cuboid measures 10 cm×5 cm×5 cm. Its total surface area is 2(lw+lh+wh)=2(10×5+10×5+5×5)=2(50+50+25)=**250 cm²**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "A cube of side 4 cm is cut into cubes of side 1 cm. What is the ratio of the surface areas of the original cube and all the cut-out cubes? (Note that there is no change in volume but a big change in the surface area). This property has major consequences in the biological world.)",
            "answer": {
              "answerKey": "1:4.",
              "schoolMethod": "Original surface area=6×4²=96 cm². There are 4³=64 small cubes; each has surface area 6×1²=6 cm², so their total surface area is 64×6=384 cm². Ratio=96:384=**1:4**. Volume is preserved, but cutting exposes new surfaces."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "The surface areas of the three faces of a cuboid that meet at one of the corners of the cuboid are 6 cm², 15 cm², and 10 cm² respectively. What is the volume of the cuboid?",
            "answer": {
              "answerKey": "30 cm³.",
              "schoolMethod": "Let its edges be l,w,h. The face areas give lw=6, wh=15 and lh=10. Multiplying, (lwh)²=(lw)(wh)(lh)=6×15×10=900. Since volume is positive, lwh=√900=**30 cm³**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "A cube of side 5 cm is painted on all its faces. If it is sliced into 1 cm³ cubes, how many of these 1 cm³ cubes have\n\n(i) exactly three faces painted?\n\n(ii) exactly two faces painted?\n\n(iii) exactly one face painted?\n\n(iv) no face painted?\n\n![ch14-ex14-1-q7-cube](/figs/maths-0904ch14-ex14-1-q7-cube.png)",
            "answer": {
              "answerKey": "(i) 8; (ii) 36; (iii) 54; (iv) 27.",
              "schoolMethod": "(i) Exactly three painted faces occur only at the 8 corners: **8**.\n\n(ii) On each of 12 edges, the non-corner cubes have two painted faces. There are 5−2=3 such cubes per edge, so 12×3=**36**.\n\n(iii) On each of 6 faces, the interior face cubes (not edges) have one painted face. Each face has (5−2)²=9, so 6×9=**54**.\n\n(iv) Fully internal cubes have no painted faces. Count=(5−2)³=3³=**27**. Check: 8+36+54+27=125=5³."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "Find a cuboid with edges whose lengths are integers (in cm), given that it has a total surface area of exactly 100 cm².\n\n(i) Is there more than one such cuboid?\n\n(ii) Can you find them all?\n\n(iii) Show that you have found them all.",
            "answer": {
              "answerKey": "Up to reordering, (1,2,16) cm and (2,4,7) cm; exactly two.",
              "schoolMethod": "Let integer edges be a≤b≤c. From 2(ab+bc+ca)=100, we need ab+bc+ca=50. Since a≤b≤c, 3a²≤50, so a≤4.\n\n**a=1:** b+c+bc=50 ⇒ (b+1)(c+1)=51=3×17 (the only factor pair with b≥1 and c≥b is 3×17). Thus (b,c)=(2,16).\n\n**a=2:** 2b+2c+bc=50 ⇒ (b+2)(c+2)=54. With b≥2 and c≥b, the valid factor pair is 6×9, giving (b,c)=(4,7).\n\n**a=3:** (b+3)(c+3)=59. Since 59 is prime, no pair with b≥3 exists.\n\n**a=4:** (b+4)(c+4)=66, but both factors are at least 8; no factor pair of 66 has both factors at least 8. Hence no further cases. The two cuboids are **1×2×16** and **2×4×7**. Their surface areas are respectively 2(2+16+32)=100 and 2(8+14+28)=100 cm²."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "Suppose a swimming pool is being built in your school. Two choices are available for the dimensions of the pool: (A) 8 ft (depth) × 50 ft × 20 ft and (B) 6 ft (depth) × 100 ft × 15 ft. Which option would be suitable/appropriate for your school? Why? What parameters/aspects did you consider to make the choice? [1 cubic foot ≈ 28.3 litres]",
            "answer": {
              "answerKey": "A: 8,000 ft³ ≈ 226,400 L; B: 9,000 ft³ ≈ 254,700 L. B holds 1,000 ft³ (≈28,300 L) more water, but the suitable choice depends on available space, depth, safety, and intended use.",
              "schoolMethod": "**Option A:** Volume = depth × length × width = 8 × 50 × 20 = **8,000 ft³**.\nIn litres, 8,000 × 28.3 = **226,400 L**.\n\n**Option B:** Volume = 6 × 100 × 15 = **9,000 ft³**.\nIn litres, 9,000 × 28.3 = **254,700 L**.\n\nOption B holds 9,000 − 8,000 = **1,000 ft³** more water, equivalent to 1,000 × 28.3 = **28,300 L**. B is shallower but needs a 100 ft length; A is deeper and shorter. There is no universally correct choice: the answer should justify dimensions, site space, intended users, safety and cost."
            }
          }
        ]
      },
      {
        "id": "ex14.2",
        "title": "Exercise Set 14.2",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Two cylinders, A and B, are given. The radius of cylinder B is twice that of cylinder A, and the height of cylinder B is half that of cylinder A. Find the ratio of the curved surface area of A to the curved surface area of B. Also find the ratio of the volume of A to the volume of B.",
            "answer": {
              "answerKey": "CSA ratio 1:1; volume ratio 1:2.",
              "schoolMethod": "Let cylinder A have radius r and height h. Then B has radius 2r and height $\\dfrac{h}{2}$.\n\nCSA(A)=2πrh. CSA(B)=2π(2r)($\\dfrac{h}{2}$)=2πrh, so the ratio is **1:1**.\n\nV(A)=πr²h. V(B)=π(2r)²($\\dfrac{h}{2}$)=2πr²h, so V(A):V(B)=**1:2**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "The radii of two cylinders are in the ratio 2:3, and their heights are in the ratio 3:2. Find (a) the ratio of their volumes, and (b) the ratio of their curved surface areas.",
            "answer": {
              "answerKey": "(a) 2:3; (b) 1:1.",
              "schoolMethod": "Let r₁:r₂=2:3 and h₁:h₂=3:2.\n\n(a) Volumes are proportional to r²h, so V₁:V₂=(2²×3):(3²×2)=12:18=**2:3**.\n\n(b) Curved areas are proportional to rh, so CSA₁:CSA₂=(2×3):(3×2)=**1:1**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "The edge of a cube measures r cm. The largest possible right circular cylinder is cut out of the cube. What do you think is the volume of the cylinder (in cm³)?",
            "answer": {
              "answerKey": "πr³/4 cm³.",
              "schoolMethod": "The cylinder’s height equals the cube’s edge, h=r. Its circular base is the largest circle that fits in a square face, so its diameter is r and radius is $\\dfrac{r}{2}$. Therefore V=π($\\dfrac{r}{2}$)²(r)=**πr³/4 cm³**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "The radius of the base of a cylinder is increased by 10%. At the same time, the height of the cylinder is decreased by x%. Given that the volume of the cylinder remains unchanged, find the value of x.",
            "answer": {
              "answerKey": "x≈17.36%.",
              "schoolMethod": "Let original volume be V=πr²h. New radius=1.1r and new height=(1−$\\dfrac{x}{100}$)h. Equal volumes give 1.1²(1−$\\dfrac{x}{100}$)=1. Thus 1−$\\dfrac{x}{100}$=$\\dfrac{1}{1.21}$=$\\dfrac{100}{121}$. Hence $\\dfrac{x}{100}$=$\\dfrac{21}{121}$ and x=$\\dfrac{2100}{121}$≈**17.36%**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "A solid metallic cube of side 12 cm is melted and recast into solid cylindrical rods, each having radius 2 cm and height 12 cm. Find:\n\n(i) the volume of the cube,\n\n(ii) the volume of one cylindrical rod,\n\n(iii) the approximate number of complete cylindrical rods that can be formed. (π ≈ 22/7)",
            "answer": {
              "answerKey": "(i) 1728 cm³; (ii) 48π=$\\dfrac{1056}{7}$≈150.86 cm³; (iii) 11 complete rods.",
              "schoolMethod": "(i) Cube volume=12³=**1728 cm³**.\n\n(ii) Rod volume=πr²h=π×2²×12=**48π cm³**. With π≈$\\dfrac{22}{7}$, this is $\\dfrac{1056}{7}$≈**150.86 cm³**.\n\n(iii) Number of rods by volume=$\\dfrac{1728}{48π}$=36/π≈11.46. Only whole rods can be made, so **11 complete rods** can be formed."
            }
          }
        ]
      },
      {
        "id": "ex14.3",
        "title": "Exercise Set 14.3",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Find the total surface area of a cone, if its slant height is 21 m and diameter of its base is 24 m.",
            "answer": {
              "answerKey": "Total surface area = 396π m² ≈ 1244.07 m².",
              "schoolMethod": "Radius r=$\\dfrac{24}{2}$=12 m and slant height l=21 m. Total surface area of a cone = πr(l+r) = π×12×(21+12)=396π m². Using π≈3.14159, 396π≈**1244.07 m²**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Find the curved surface area of a right circular cone whose slant height is 10 cm and base radius is 7 cm.",
            "answer": {
              "answerKey": "220 cm² (using π=$\\dfrac{22}{7}$).",
              "schoolMethod": "CSA=πrl=π×7×10=70π cm². Using π=$\\dfrac{22}{7}$, CSA=70×$\\dfrac{22}{7}$=**220 cm²**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "The height of a cone is 16 cm, and its base radius is 12 cm. Find the curved surface area and the total surface area of the cone.",
            "answer": {
              "answerKey": "CSA=240π cm²; TSA=384π cm².",
              "schoolMethod": "Slant height l=√(h²+r²)=√(16²+12²)=√400=20 cm.\n\nCSA=πrl=π×12×20=**240π cm²**.\n\nTSA=πr(l+r)=π×12×(20+12)=**384π cm²**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "A cone has a height of 15 cm. If its volume is 1570 cm³, find the radius of the base.",
            "answer": {
              "answerKey": "10 cm (using π≈3.14).",
              "schoolMethod": "V=($\\dfrac{1}{3}$)πr²h. Hence 1570=($\\dfrac{1}{3}$)πr²(15)=5πr². Thus r²=$\\dfrac{1570}{5\\pi}$=314/π. With π≈3.14, r²=100 and **r=10 cm**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "The curved surface area of a cone is 308 cm² and its slant height is 14 cm. Find (i) the radius of the base, (ii) the total surface area of the cone.",
            "answer": {
              "answerKey": "(i) 7 cm; (ii) 462 cm².",
              "schoolMethod": "(i) CSA=πrl=308. With l=14 and π=$\\dfrac{22}{7}$, 308=($\\dfrac{22}{7}$)×r×14=44r, so r=**7 cm**.\n\n(ii) Base area=πr²=($\\dfrac{22}{7}$)×49=154 cm². TSA=CSA+base area=308+154=**462 cm²**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "A joker's cap is in the form of a right circular cone of base radius 7 cm and height 24 cm. Find the area of the sheet required to make 10 such caps.",
            "answer": {
              "answerKey": "5500 cm².",
              "schoolMethod": "Slant height l=√(7²+24²)=√625=25 cm. A cap is open at its base, so only curved area is needed. One cap: πrl=($\\dfrac{22}{7}$)×7×25=550 cm². Ten caps require 10×550=**5500 cm²**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "What length of tarpaulin 3 m wide is required to make a conical tent of height 8 m and base radius 6 m? Assume that the extra length of material that is required for stitching margins and wastage in cutting is 20 cm.",
            "answer": {
              "answerKey": "Approximately 63.03 m.",
              "schoolMethod": "Slant height l=√(8²+6²)=√100=10 m. The conical tent has no base sheet, so tarpaulin area=CSA=πrl=π×6×10=60π m². With a 3 m wide roll, required length before allowance=$\\dfrac{60π}{3}$=20π≈62.832 m. Add 0.20 m for stitching/waste: **20π+0.2≈63.03 m**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "A right triangle with sides 6 cm, 8 cm and 10 cm is rotated through 360° about the side of 8 cm. Find the volume and the curved surface area of the solid so formed.",
            "answer": {
              "answerKey": "Volume=96π cm³; CSA=60π cm².",
              "schoolMethod": "The 8 cm side is the cone’s height, the other perpendicular side 6 cm becomes the base radius, and the hypotenuse 10 cm is the slant height. Thus V=($\\dfrac{1}{3}$)πr²h=($\\dfrac{1}{3}$)π×36×8=**96π cm³**. Curved area=πrl=π×6×10=**60π cm²**."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": true,
            "text": "Suppose you have a cup in the shape of a right circular cone. Fill it with water to half the depth of the cone. What fraction of the volume of the cup is occupied by the water?\n\n![ch14-ex14-3-q9-cup](/figs/maths-0904ch14-ex14-3-q9-cup.png)",
            "answer": {
              "answerKey": "$\\dfrac{1}{8}$.",
              "schoolMethod": "The water fills a smaller cone similar to the full cup. Its height is half the original, so every linear dimension (including radius) is scaled by $\\dfrac{1}{2}$. Volumes of similar solids scale as the cube of the linear scale factor: ($\\dfrac{1}{2}$)³=**$\\dfrac{1}{8}$**. Only one-eighth of the cup’s volume is occupied."
            }
          }
        ]
      },
      {
        "id": "ex14.4",
        "title": "Exercise Set 14.4",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "A ball bearing has a radius of 0.7 cm. Find its surface area.",
            "answer": {
              "answerKey": "6.16 cm² approximately.",
              "schoolMethod": "Surface area of a sphere=4πr²=4π(0.7)²=1.96π. Using π=$\\dfrac{22}{7}$ gives 1.96×$\\dfrac{22}{7}$=**6.16 cm²**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": true,
            "text": "Two solid spheres made of the same metal have weights 5920 g and 740 g. Determine the radius of the larger sphere, if the diameter of the smaller one is 5 cm.",
            "answer": {
              "answerKey": "5 cm.",
              "schoolMethod": "For the same material, mass is proportional to volume. Volume ratio=5920:740=8:1. For spheres, volume ratio equals the cube of the radius ratio; thus ($\\dfrac{R}{r}$)³=8 ⇒ $\\dfrac{R}{r}$=2. The smaller sphere radius is $\\dfrac{5}{2}$=2.5 cm, so larger radius=2×2.5=**5 cm**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "The diameter of the moon is approximately one fourth the diameter of the earth. Given that the moon and earth are both roughly spherical, find the ratio of their surface areas.",
            "answer": {
              "answerKey": "Moon : Earth = 1:16.",
              "schoolMethod": "For spheres, surface area is proportional to the square of diameter. The diameter ratio (Moon:Earth)=1:4, so surface-area ratio=(1²):(4²)=**1:16**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Find (i) the curved surface area and (ii) the total surface area of a hemisphere of radius 21 cm.",
            "answer": {
              "answerKey": "(i) 2772 cm²; (ii) 4158 cm².",
              "schoolMethod": "For a hemisphere, CSA=2πr² and TSA=3πr². With r=21 cm and π=$\\dfrac{22}{7}$, CSA=2×($\\dfrac{22}{7}$)×441=**2772 cm²**. TSA=3×($\\dfrac{22}{7}$)×441=**4158 cm²**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Metal spheres, each of radius 2 cm, are packed into a rectangular box of internal dimensions 16 cm × 8 cm × 8 cm. When 16 spheres are packed, the box is filled with preservative liquid. Find the volume of this liquid. Round your answer to the nearest integer.",
            "answer": {
              "answerKey": "488 cm³ approximately.",
              "schoolMethod": "Box volume=16×8×8=1024 cm³. One sphere volume=($\\dfrac{4}{3}$)π(2³)=$\\dfrac{32\\pi}{3}$ cm³. Sixteen spheres occupy 16×$\\dfrac{32\\pi}{3}$=$\\dfrac{512\\pi}{3}$≈536.17 cm³. Liquid volume=1024−$\\dfrac{512\\pi}{3}$≈487.83 cm³, which rounds to **488 cm³**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "The radius of a sphere is increased by 10%. Show that the volume increases by approximately 33.1%.",
            "answer": {
              "answerKey": "Increase =33.1%.",
              "schoolMethod": "Let the original radius be r. The old volume is ($\\dfrac{4}{3}$)πr³. New radius=1.1r, so new volume=($\\dfrac{4}{3}$)π(1.1r)³=1.331($\\dfrac{4}{3}$)πr³. The new volume is 133.1% of the old volume; therefore the increase is **33.1%**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "The radius of a sphere is increased by x%. The volume of the sphere increases by 72.8%. Find the value of x.",
            "answer": {
              "answerKey": "x=20%.",
              "schoolMethod": "The volume factor is 1+$\\dfrac{72.8}{100}$=1.728. If the radius factor is 1+$\\dfrac{x}{100}$, then (1+$\\dfrac{x}{100}$)³=1.728. Since 1.2³=1.728, 1+$\\dfrac{x}{100}$=1.2, hence **x=20%**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "The hemispherical dome of a building needs to be painted (see Fig. 14.16). If the circumference of the base of the dome is 35.2 m, find the cost of painting it, given the cost of painting is ₹ 10 per 100 cm².\n\n![ch14-ex14-4-q8-dome](/figs/maths-0904ch14-ex14-4-q8-dome.png)",
            "answer": {
              "answerKey": "₹1,97,120.",
              "schoolMethod": "Base circumference 2πr=35.2 m. Using π=$\\dfrac{22}{7}$, r=35.2×$\\dfrac{7}{44}$=5.6 m. Curved surface area of a hemisphere=2πr²=2×($\\dfrac{22}{7}$)×(5.6)²=197.12 m². Since 1 m²=10,000 cm², area=1,971,200 cm²=19,712 lots of 100 cm². Cost=19,712×₹10=**₹1,97,120**."
            }
          }
        ]
      },
      {
        "id": "ex14.end",
        "title": "End-of-Chapter Exercises",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Estimate how many scoops of ice cream can be obtained from a cuboidal container of dimensions 10 cm × 15 cm × 20 cm.\n\n![ch14-end-q1-icecream](/figs/maths-0904ch14-end-q1-icecream.png)",
            "answer": {
              "answerKey": "Approximately 45 average scoops, assuming each scoop is about a sphere of radius 2.5 cm.",
              "schoolMethod": "Container volume=10×15×20=3000 cm³. Assume one average scoop is approximated by a sphere of radius 2.5 cm. Its volume is ($\\dfrac{4}{3}$)π(2.5)³≈65.45 cm³. The theoretical quotient is $\\dfrac{3000}{65.45}$≈45.8, so the container contains about **45 full scoops** under this assumption. Scoop size and trapped air change the real count, so the result is an estimate, not an exact universal number."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "A cube of integer side length a is made of unit cubes. Write an expression giving the number of unit cubes to be added to make a cube of side length a + 1.",
            "answer": {
              "answerKey": "3a²+3a+1.",
              "schoolMethod": "The existing cube contains a³ unit cubes. The larger cube contains (a+1)³. The extra cubes needed are (a+1)³−a³=a³+3a²+3a+1−a³=**3a²+3a+1**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": true,
            "text": "Solve the following:\n\n(i) Could a person drink enough water in a lifetime to fill an entire room the size of your classroom?\n\n(ii) Estimate the number of bricks used to build the walls of your classroom.\n\n![ch14-end-q3-bricks](/figs/maths-0904ch14-end-q3-bricks.png)",
            "answer": {
              "answerKey": "(i) Usually no; an 80-year drinking-water estimate is about 58 m³ versus a classroom around 150–200 m³. (ii) About 4000 bricks under the sample dimensions below.",
              "schoolMethod": "(i) Assume a person drinks 2 L/day for 80 years. Water consumed≈2×365×80=58,400 L=**58.4 m³**. A sample classroom of 8 m×7 m×3 m has volume 168 m³, nearly three times as much. Under these assumptions the answer is **no**. A smaller room or higher daily water amount changes the comparison.\n\n(ii) Assume the classroom is 8 m×7 m with 3 m wall height. Gross wall area=perimeter×height=2(8+7)×3=90 m². Subtract about 8 m² for doors and windows, leaving 82 m². Approximate exposed face area of one brick is 0.20×0.10=0.020 m², so estimated brick count=$\\dfrac{82}{0.020}$=**4100 bricks**, before allowing for mortar and breakage. This is a transparent estimate, not a site measurement."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "You are given two options: (A) one chocolate cube of side 50 mm, (B) hundred chocolate cubes of side 10 mm. Which option gives you more chocolate?",
            "answer": {
              "answerKey": "A gives 125 cm³; B gives 100 cm³, so A gives more.",
              "schoolMethod": "Convert units: 50 mm=5 cm, so A volume=5³=**125 cm³**. Each cube in B has side 10 mm=1 cm and volume 1 cm³; 100 cubes have total volume **100 cm³**. Option A gives 25 cm³ more chocolate."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "If all the people in the world are crowded together in one location, how much area would it cover?\n\n![ch14-end-q5-crowd](/figs/maths-0904ch14-end-q5-crowd.png)",
            "answer": {
              "answerKey": "About 2000 km², using 8 billion people and 0.25 m² per person.",
              "schoolMethod": "For an estimate, take world population as about 8 billion and allocate 0.25 m² per person for very tightly packed standing people. Area=8×10⁹×0.25=2×10⁹ m². Since 1 km²=10⁶ m², this is **2000 km²**. This is equivalent to a square roughly √2000≈44.7 km on each side. The answer scales directly with the assumed space per person."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "A school provides milk to its students in cylindrical glasses, each with a diameter of 7 cm. If each glass is filled with milk to a height of 12 cm, how many litres of milk are needed to serve 1600 students? Use 1000 cm³ = 1 litre.",
            "answer": {
              "answerKey": "About 739 L.",
              "schoolMethod": "Radius=$\\dfrac{7}{2}$=3.5 cm, height=12 cm. One glass volume=πr²h=π(3.5)²(12)=147π cm³. With π=$\\dfrac{22}{7}$, this is 462 cm³. For 1600 students: 462×1600=739,200 cm³=**739.2 L**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "The surface area of a sphere of radius 5 cm is five times the area of the curved surface of a cone of radius 4 cm. Find the height and the volume of the cone.",
            "answer": {
              "answerKey": "Height 3 cm; volume 16π cm³.",
              "schoolMethod": "Sphere surface area=4π(5²)=100π cm². This equals five times the cone’s CSA, so the cone CSA=20π cm². For radius 4, CSA=πrl=4πl; hence 4πl=20π ⇒ l=5 cm. Cone height h=√(l²−r²)=√(25−16)=3 cm. Volume=($\\dfrac{1}{3}$)πr²h=($\\dfrac{1}{3}$)π×16×3=**16π cm³**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "Take Earth to be a perfect sphere with radius 6370 km. Take Jupiter to be a perfect sphere with radius 69,900 km. Take the Sun to be a perfect sphere with radius 6,95,700 km. Compute approximately:\n\n(i) the ratio of the volume of Jupiter to the volume of the Earth;\n\n(ii) the ratio of the volume of the Sun to the volume of the Earth.\n\n(Calculator can be used.)",
            "answer": {
              "answerKey": "(i) ≈1321:1; (ii) ≈1,302,710:1.",
              "schoolMethod": "For spheres, V=($\\dfrac{4}{3}$)πr³, so the ratios are cubes of the radius ratios.\n\n(i) $\\dfrac{VJ}{VE}$=($\\dfrac{69,900}{6370}$)³≈**1321.34**. Jupiter’s volume is about 1321 times Earth’s.\n\n(ii) $\\dfrac{VS}{VE}$=($\\dfrac{695,700}{6370}$)³≈**1,302,710**. The Sun’s volume is about 1.30 million times Earth’s. The common factor ($\\dfrac{4}{3}$)π cancels."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "Show that the volume of a sphere is equal to 2/3 of the volume of the smallest cylinder which encloses it.",
            "answer": {
              "answerKey": "Vsphere=($\\dfrac{2}{3}$)Vcylinder.",
              "schoolMethod": "Let the sphere radius be r. The smallest right circular cylinder enclosing it has radius r and height 2r. Cylinder volume=πr²(2r)=2πr³. Sphere volume=($\\dfrac{4}{3}$)πr³. Therefore Vsphere/Vcylinder=[($\\dfrac{4}{3}$)πr³]/(2πr³)=**$\\dfrac{2}{3}$**, as required."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": true,
            "text": "Suppose the Earth is perfectly spherical. A string is wrapped tightly around the equator of the Earth. Another string, 1 metre longer, is placed around the Earth so that it forms a larger circle, staying the same distance above the ground everywhere.\n\nHow high above the ground is the second string?\n\nRepeat this for: (i) the Moon (ii) Jupiter (iii) a volleyball. Are you surprised by the three answers? Why or why not?\n\n![ch14-end-q10-globe](/figs/maths-0904ch14-end-q10-globe.png)",
            "answer": {
              "answerKey": "For every sphere, height =$\\dfrac{1}{2π}$ m≈0.159 m=15.9 cm.",
              "schoolMethod": "Let the original radius be R and the added height be h. The circumference increases from 2πR to 2π(R+h), an increase of 2πh. Since the added string is 1 m longer, 2πh=1 ⇒ h=$\\dfrac{1}{2π}$=0.15915 m≈**15.9 cm**. The original radius cancels, so the answer is the same for Earth, the Moon, Jupiter and a volleyball, assuming perfect spheres and a uniform gap."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": true,
            "text": "We have a cylinder with a base radius of r cm and height h cm. A square pyramid is fitted inside. The square base of the pyramid lies on the base of the cylinder, its corners on the boundary of the cylinder. The apex of the pyramid lies on the top of the cylinder. Find the ratio of the volume of this pyramid to the volume of the cylinder.",
            "answer": {
              "answerKey": "2:(3π), i.e. $\\dfrac{2}{3\\pi}$:1.",
              "schoolMethod": "The square base is inscribed in the circle of radius r. Its diagonal is the circle’s diameter 2r. If the square side is s, s√2=2r, so s²=2r². Pyramid volume=($\\dfrac{1}{3}$)(base area)(height)=($\\dfrac{1}{3}$)(2r²)h=($\\dfrac{2}{3}$)r²h. Cylinder volume=πr²h. Thus the ratio is [($\\dfrac{2}{3}$)r²h] : [πr²h] = **$\\dfrac{2}{3\\pi}$:1**."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "text": "What is the change in volume when:\n\n(i) the length of a cuboid with dimensions l, w, h is increased by 1 unit?\n(a) 1 cubic unit   (b) (lwh + 1) cubic unit\n(c) wh cubic units   (d) lw cubic units\n(e) lh cubic units\n\n(ii) the radius of a cylinder with dimensions r, h is increased by 1 unit?\n(a) 1 cubic unit   (b) πr²h cubic units\n(c) πr² cubic units   (d) 2πrh + 2πh cubic units\n(e) 2πrh + πh cubic units\n\n*(iii) the radius of a sphere is decreased by 1 unit?",
            "answer": {
              "answerKey": "(i) wh; (ii) 2πrh+πh; (iii) decrease = 4πr²−4πr+$\\dfrac{4\\pi}{3}$.",
              "schoolMethod": "(i) Old V=lwh; new V=(l+1)wh. Change=(l+1)wh−lwh=**wh cubic units** (option c).\n\n(ii) Old V=πr²h; new V=π(r+1)²h. Increase=πh[(r+1)²−r²]=πh(2r+1)=**2πrh+πh cubic units** (option e).\n\n(iii) For r≥1, new radius r−1. Decrease=($\\dfrac{4}{3}$)πr³−($\\dfrac{4}{3}$)π(r−1)³=($\\dfrac{4}{3}$)π[3r²−3r+1]=**4πr²−4πr+$\\dfrac{4\\pi}{3}$ cubic units**. The signed change (new minus old) is the negative of this quantity."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": false,
            "text": "Given a cube with volume V, express its total surface area S in terms of V.",
            "answer": {
              "answerKey": "S=6V^($\\dfrac{2}{3}$).",
              "schoolMethod": "If the cube side is a, then V=a³ ⇒ a=V^($\\dfrac{1}{3}$). Total surface area S=6a²=6(V^($\\dfrac{1}{3}$))²=**6V^($\\dfrac{2}{3}$)**."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": false,
            "text": "Given a cube with total surface area S, express its volume V in terms of S.",
            "answer": {
              "answerKey": "V=($\\dfrac{S}{6}$)^($\\dfrac{3}{2}$).",
              "schoolMethod": "For side a, S=6a², so a=√($\\dfrac{S}{6}$). Volume V=a³=[√($\\dfrac{S}{6}$)]³=**($\\dfrac{S}{6}$)^($\\dfrac{3}{2}$)**."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": false,
            "text": "A cylindrical glass of height 25 cm and radius 4 cm has water up to a height of 16 cm. A crow wants to drink water from this glass. The water must be at a height of 20 cm for the crow to reach it. There are some marbles lying around. How many marbles of radius 1 cm should the crow drop into the glass to make the water reach the required height?\n\n![ch14-end-q15-crow](/figs/maths-0904ch14-end-q15-crow.png)",
            "answer": {
              "answerKey": "48 marbles.",
              "schoolMethod": "The rise is 20−16=4 cm. The additional volume needed is the cylinder’s base area times the rise: π(4²)(4)=64π cm³. One marble displaces its own volume (fully submerged): ($\\dfrac{4}{3}$)π(1³)=$\\dfrac{4\\pi}{3}$ cm³. Number=64π÷$\\dfrac{4\\pi}{3}$=64×$\\dfrac{3}{4}$=**48 marbles**. The final water level 20 cm is below the glass height 25 cm."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": false,
            "text": "Find the volume of ink in a new ball point pen. Take the necessary measurements and make approximations, as needed.",
            "answer": {
              "answerKey": "About 0.3 cm³ in the illustrative pen model.",
              "schoolMethod": "Use a sample measurement: assume the ink reservoir is approximately cylindrical, with internal radius 1 mm=0.1 cm and ink length 9 cm. Cylinder volume=π(0.1)²(9)=0.09π≈0.283 cm³. Allow roughly 0.02 cm³ for the small ink-filled tip, giving an estimate of about **0.30 cm³** (0.30 mL). For a particular pen, measure its actual inner radius and ink length; changing either dimension changes the result."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "isHard": true,
            "text": "Solve:\n\n(i) A ball of chapati dough of radius 6 cm is prepared. Estimate how many chapatis can be made from it?\n\n*(ii) Cut a coconut/muskmelon in half and find out the approximate volume of edible coconut flesh/fruit by taking the necessary measurements.\n\n![ch14-end-q17-dough](/figs/maths-0904ch14-end-q17-dough.png)",
            "answer": {
              "answerKey": "(i) About 10 chapatis under the sample assumptions. (ii) For a 5 cm-radius fruit, about 180 cm³ edible flesh under a 70% yield assumption.",
              "schoolMethod": "(i) Dough volume=($\\dfrac{4}{3}$)π(6³)=288π≈904.8 cm³. Assume one chapati uses a dough volume equivalent to a disk of radius 12 cm and average thickness 0.2 cm: V≈π(12²)(0.2)=28.8π≈90.5 cm³. Number≈$\\dfrac{904.8}{90.5}$≈10. Thus about **10 chapatis** can be made; actual count depends on size and thickness.\n\n(ii) As an example, approximate a half-muskmelon by a hemisphere of radius 5 cm. Half-sphere volume=($\\dfrac{2}{3}$)π(5³)≈261.8 cm³. If about 70% is edible flesh after excluding rind/seeds, edible volume≈0.70×261.8≈**183 cm³**. Measure the actual fruit and substitute its radius; this is only a worked estimate."
            }
          },
          {
            "id": "q18",
            "number": "18",
            "isHard": false,
            "text": "Looking at the Ganita Manjari, Grade 9, Part 2 textbook, Sheela wonders:\n\n(i) If all the pages of this textbook were laid out side-by-side on the floor would they cover the entire classroom floor?\n\n(ii) What is the maximum number of textbooks that can fit in an empty storeroom of dimensions 15 ft × 20 ft × 30 ft?",
            "answer": {
              "answerKey": "(i) About 8 m², usually not a classroom floor. (ii) About 303,000 by a pure volume estimate using a 20×28×1.5 cm book.",
              "schoolMethod": "(i) Suppose the book has about 150 pages, each approximately 20 cm×27 cm=0.054 m². Total area≈150×0.054=**8.1 m²**. A sample classroom floor 8 m×7 m=56 m² is much larger, so the pages would not cover it.\n\n(ii) Storeroom volume=15×20×30=9000 ft³. Since 1 ft³≈0.0283168 m³, that is about 254.85 m³. Approximate one book as 20 cm×28 cm×1.5 cm=840 cm³=0.00084 m³. Volume ratio=$\\dfrac{254.85}{0.00084}$≈303,393, so the idealized upper bound is about **303,000 books**. Real packing is lower because of gaps, orientation and access space."
            }
          },
          {
            "id": "q19",
            "number": "19",
            "isHard": true,
            "text": "If the entire human population decided to climb into one giant cube, how long would the side have to be?\n\n![ch14-end-q19-cube](/figs/maths-0904ch14-end-q19-cube.png)",
            "answer": {
              "answerKey": "About 824 m, using 8 billion people and 0.07 m³ per person’s body volume.",
              "schoolMethod": "For an order-of-magnitude estimate, take population as 8×10⁹ and average human body volume as approximately 0.07 m³. Total body volume≈8×10⁹×0.07=5.6×10⁸ m³. If tightly packed into one cube, side s satisfies s³=5.6×10⁸, so s=∛(5.6×10⁸)≈**824 m**. Real packing would require extra space, making the cube larger."
            }
          },
          {
            "id": "q20",
            "number": "20",
            "isHard": true,
            "text": "The Earth's surface has an estimated volume of 1.38 billion km³ of water. Suppose the Earth is a perfect sphere and all this water forms a uniform layer completely covering the Earth's surface, like a thin water bubble. Estimate the thickness of this water layer. The Earth's radius is ~6371 km.\n\n(i) Write an expression that gives the thickness of this water layer.\n\n(ii) Simplify the expression in (i) using a calculator.",
            "answer": {
              "answerKey": "t=[6371³+3$\\dfrac{1.38\\times10^9}{4\\pi}$]^($\\dfrac{1}{3}$)−6371≈2.704 km.",
              "schoolMethod": "(i) Let R=6371 km. The water shell volume equals the difference of sphere volumes:\n\n($\\dfrac{4}{3}$)π[(R+t)³−R³]=1.38×10⁹.\n\nSolving for t gives **t=[R³+3$\\dfrac{1.38\\times10^9}{4\\pi}$]^($\\dfrac{1}{3}$)−R**, with R=6371 km.\n\n(ii) Substitution gives t≈**2.704 km**, or about 2.7 km. The thin-shell approximation V≈4πR²t gives almost the same result."
            }
          },
          {
            "id": "q21",
            "number": "21",
            "isHard": true,
            "text": "Give the dimension of a cuboid whose volume is halved when its surface area is doubled.",
            "answer": {
              "answerKey": "The question does not specify the original solid or reference dimensions. Relative to a unit cube (volume 1 and total surface area 6), one approximate example is 2.361 × 2.361 × 0.0897 units: volume ≈0.5 and total surface area ≈12. This is not unique.",
              "schoolMethod": "The prompt does not state the starting cuboid, so the phrase “halved” and “doubled” needs a reference. To give a concrete example, take a **unit cube** as the reference: volume 1 unit³ and total surface area 6 unit². We seek a cuboid with dimensions a × a × c satisfying\n\n(a) a²c = $\\dfrac{1}{2}$\n\n(b) 2(a² + 2ac) = 12, so a² + 2ac = 6.\n\nFrom (a), c = $\\dfrac{1}{2a²}$. Substitute into (b): a² + $\\dfrac{1}{a}$ = 6, or a³ − 6a + 1 = 0. One positive root is approximately a = 2.361; then c = $\\dfrac{1}{2a²}$ ≈ 0.0897.\n\nThus one approximate example is **2.361 × 2.361 × 0.0897 units**. Its volume is about 0.5 unit³ and its total surface area about 12 unit². Other dimensions may also work; the original wording is ambiguous without a specified reference object."
            }
          },
          {
            "id": "q22",
            "number": "22",
            "isHard": false,
            "text": "Project: Find the volume of your house making necessary approximations. Present how you solved it.",
            "answer": {
              "answerKey": "Illustrative total interior volume ≈189 m³.",
              "schoolMethod": "Divide the house into simple cuboids and add their volumes. One sample layout, with 3 m ceiling height, is:\n\n| Room | Assumed dimensions (m) | Volume |\n|---|---|---:|\n| Living room | 5×4×3 | 60 m³ |\n| Bedroom 1 | 4×3×3 | 36 m³ |\n| Bedroom 2 | 4×3×3 | 36 m³ |\n| Kitchen | 3×3×3 | 27 m³ |\n| Bathroom | 2×2×3 | 12 m³ |\n| Corridor | 4×1.5×3 | 18 m³ |\n\nTotal=60+36+36+27+12+18=**189 m³**. This is an illustrative solution: replace the assumed dimensions with measurements of the actual house, and include or exclude wall thickness consistently."
            }
          }
        ]
      },
      {
        "id": "ex14.reflect",
        "title": "Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "page": 124,
            "text": "Try to work out for yourself why this model explains the formula for the volume of a cuboid, i.e.,\n\nvolume = area of base × height.\n\nWrite the formula for the surface area and the volume of a cube.",
            "answer": {
              "answerKey": "Cuboid volume = base area × height. For a cube: total surface area = 6a² and volume = a³.",
              "schoolMethod": "If the base has length l and width w, one layer of unit-height cubes contains lw unit cubes. Stacking h such layers gives lwh cubes, so V = lwh = (lw)h = area of base × height. A cube has six square faces of area a² each, giving total surface area **6a²**. Its volume is **a³**."
            }
          }
        ]
      }
    ]
  }
];
