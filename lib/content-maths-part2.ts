import type { Chapter } from './content';

/**
 * Complete worked solutions for Ganita Manjari Grade 9 — Part II.
 * Question prompts and exercise order are based on the supplied textbook PDF.
 * Open-ended estimation/project tasks state their sample assumptions explicitly.
 */
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
            "text": "If two lines are parallel, then the corresponding angles formed by a transversal are equal. Frame the converse and decide whether both statements are true.",
            "answer": {
              "answerKey": "Both the proposition and its converse are true.",
              "schoolMethod": "**Proposition:** If two lines are parallel, their corresponding angles are equal.\n\n**Converse:** If a pair of corresponding angles formed by a transversal are equal, then the two lines are parallel.\n\nThe proposition is the corresponding-angles property of parallel lines. The converse is the converse of that theorem: equality of a pair of corresponding angles implies that the two lines are parallel. Hence, both statements are true."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "If a quadrilateral is a square, then all its angles are equal. Frame the converse and decide whether both statements are true.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "**Proposition:** A square has four right angles, so all its angles are equal. This is true.\n\n**Converse:** If all four angles of a quadrilateral are equal, then it is a square. Since a quadrilateral has angle sum 360°, each angle is 90°. It is therefore a rectangle, but its adjacent sides need not be equal. For example, a 4 cm by 2 cm rectangle has four equal angles but is not a square. Thus the converse is false."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": true,
            "text": "In △ABC, the angle bisectors at B and C meet at incentre I and are extended beyond I to meet the opposite sides at E and F. Proposition: If AB = AC, then IE = IF. Frame the converse and decide whether it is true.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "**Proposition:** If AB = AC, then △ABC is isosceles at A, so ∠B = ∠C. The figure is symmetric about the bisector of ∠A. The B- and C-angle-bisectors and their intersection I are interchanged by this symmetry, as are E and F. Hence IE = IF.\n\n**Converse:** If IE = IF, then AB = AC. This is false. For example, take ∠A = 60°, ∠B = 40° and ∠C = 80°. The angles between the extended bisectors and the opposite sides are supplementary in pairs, so their sines are equal; since the inradius is the same, IE = IF, while ∠B ≠ ∠C and therefore AB ≠ AC. Hence this is a counterexample."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "If x = y, then a + x = a + y, where x, y and a are any three numbers. Frame the converse and decide whether both statements are true.",
            "answer": {
              "answerKey": "Both are true.",
              "schoolMethod": "**Proposition:** If x = y, adding the same number a to both sides gives a + x = a + y.\n\n**Converse:** If a + x = a + y, subtract a from both sides to obtain x = y.\n\nBoth statements are true by the addition and cancellation properties of equality."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "If a and b are perfect squares, then ab is a perfect square. Frame the converse and decide whether both statements are true.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "Write a = r² and b = s². Then ab = r²s² = (rs)², a perfect square; so the proposition is true.\n\n**Converse:** If ab is a perfect square, then a and b are both perfect squares. This is false: a = 2 and b = 8 are not perfect squares, but ab = 16 = 4²."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "For real numbers x and y, if x = y, then x² = y². Frame the converse and decide whether it is true.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "If x = y, squaring both sides gives x² = y².\n\n**Converse:** If x² = y², then x = y. From x² − y² = 0, we get (x − y)(x + y) = 0, so x = y **or** x = −y. For x = 2 and y = −2, x² = y² but x ≠ y. Thus the converse is false."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "For real numbers x and y, if x = y, then x³ = y³. Frame the converse and decide whether it is true.",
            "answer": {
              "answerKey": "Both are true.",
              "schoolMethod": "Cubing x = y proves x³ = y³.\n\n**Converse:** If x³ = y³, then x³ − y³ = (x − y)(x² + xy + y²) = 0. Alternatively, the cube function is one-to-one on the real numbers. Since x² + xy + y² is non-negative and can be zero only when x = y = 0, the equality forces x = y. Thus the converse is true."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "For a positive integer n, if n is divisible by 24, then it is divisible by both 4 and 6. Frame the converse and decide whether it is true.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "Since 24 = 4 × 6, every multiple of 24 is divisible by both 4 and 6.\n\n**Converse:** If n is divisible by 4 and 6, then n is divisible by 24. A number divisible by both 4 and 6 need only be divisible by lcm(4,6) = 12. Counterexample: n = 12 is divisible by 4 and 6 but not by 24."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "For a positive integer n, if n is divisible by 60, then it is divisible by both 5 and 12. Frame the converse and decide whether it is true.",
            "answer": {
              "answerKey": "Both are true.",
              "schoolMethod": "Because 60 is divisible by both 5 and 12, any multiple of 60 is divisible by each of them.\n\n**Converse:** If n is divisible by 5 and 12, then n is divisible by 60. Since gcd(5,12)=1, lcm(5,12)=5×12=60. Every common multiple is therefore a multiple of 60. The converse is true."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "text": "For a positive integer n, if n is the square of a prime number, then it has exactly 3 factors. Frame the converse and decide whether it is true.",
            "answer": {
              "answerKey": "Both are true.",
              "schoolMethod": "If n = p² for a prime p, its positive factors are exactly 1, p and p².\n\n**Converse:** If n has exactly three positive factors, then n is the square of a prime. A number with exactly three factors must have factor pairs 1·n and one repeated pair p·p, so n = p². Any non-prime p would introduce more factors. Hence the converse is true."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "text": "For a positive integer n, if n is a product of two unequal prime numbers, then it has exactly 4 divisors. Frame the converse and decide whether it is true.",
            "answer": {
              "answerKey": "Proposition true; converse false.",
              "schoolMethod": "If n = pq for distinct primes p and q, its positive divisors are 1, p, q and pq, so it has exactly four.\n\n**Converse:** If n has exactly four divisors, then it is a product of two unequal primes. False: 8 = 2³ has exactly four positive divisors, 1, 2, 4 and 8, but it is not a product of two unequal primes."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "text": "For a positive integer n, if n and n + 3 have no factors in common, then n is not a multiple of 3. Frame the converse and decide whether it is true.",
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
            "text": "(i) Justify: If a number is divisible by 8, then it is divisible by both 2 and 4. (ii) Is checking divisibility by 2 and 4 enough to check divisibility by 8? Explain.",
            "answer": {
              "answerKey": "(i) True. (ii) No; 12 is a counterexample.",
              "schoolMethod": "(i) If n is divisible by 8, write n = 8k. Then n = 2(4k) and n = 4(2k), so n is divisible by both 2 and 4.\n\n(ii) The converse is false. For example, 12 is divisible by 2 and 4 but is not divisible by 8. Therefore both tests do not guarantee divisibility by 8."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": false,
            "text": "Express the relationship between “a number is divisible by 3” and “the sum of its digits is a multiple of 3” using if-then sentences.",
            "answer": {
              "answerKey": "Both implications are true.",
              "schoolMethod": "1. If a whole number is divisible by 3, then the sum of its digits is divisible by 3.\n2. If the sum of the digits of a whole number is divisible by 3, then the number is divisible by 3.\n\nThese statements are equivalent because each power of 10 is congruent to 1 modulo 3; hence a number and its digit sum have the same remainder upon division by 3."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "isHard": true,
            "text": "A category Q of quadrilaterals is made using diagonal sticks. (i) If every Q-quadrilateral has equal diagonals, should the sticks be equal? Does their arrangement matter? (ii) If every quadrilateral with equal diagonals is of type Q, answer the same questions.",
            "answer": {
              "answerKey": "(i) Sticks must be equal; arrangement may matter. (ii) Sticks must be equal; arrangement does not matter.",
              "schoolMethod": "(i) **Lengths:** Yes. The diagonals of every Q-quadrilateral are equal, so the two sticks must have equal lengths. **Arrangement:** It may matter, because the stated condition is only necessary: equal diagonals alone do not guarantee that a quadrilateral belongs to an otherwise unspecified category Q.\n\n(ii) **Lengths:** Yes, since the converse condition explicitly requires equal diagonals. **Arrangement:** No. Under this assumption, every quadrilateral formed using equal-length diagonals is of type Q, regardless of the way the sticks are arranged (subject to forming a quadrilateral)."
            }
          }
        ]
      },
      {
        "id": "ex9.reflect",
        "title": "In-text and Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": true,
            "text": "In a triangle, if two angles are equal, prove that the sides opposite them are equal. (Use the hint in the book: draw an altitude from the vertex containing the third angle.)",
            "answer": {
              "answerKey": "The sides opposite the equal angles are equal.",
              "schoolMethod": "Let △ABC have ∠B = ∠C. Draw AD ⟂ BC. Since ∠B = ∠C, the right triangles △ABD and △ACD have ∠ABD = ∠ACD, ∠ADB = ∠ADC = 90°, and the common side AD. They are congruent by AAS. Hence AB = AC, the sides opposite the equal angles."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Give an example in which both a proposition and its converse are false.",
            "answer": {
              "answerKey": "For example, “If an integer is divisible by 2, then it is divisible by 3” and its converse are both false.",
              "schoolMethod": "The proposition is false for n = 2: 2 is divisible by 2 but not by 3. Its converse, “If an integer is divisible by 3, then it is divisible by 2,” is false for n = 3. One counterexample to each universal statement is enough to show it is false."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": true,
            "text": "The Pythagoras theorem says that if a triangle is right-angled with legs a,b and hypotenuse c, then a²+b²=c². Prove the converse.",
            "answer": {
              "answerKey": "If a²+b²=c² for the side lengths of a triangle, the angle opposite c is 90°.",
              "schoolMethod": "Construct a right triangle with perpendicular legs a and b; by Pythagoras its hypotenuse has length √(a²+b²)=c. The constructed triangle therefore has side lengths a,b,c, exactly as the given triangle does. The triangles are congruent by SSS. Corresponding to the constructed right angle, the given triangle’s angle opposite side c is also 90°. Thus the converse is true."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Give one real-life example of a true proposition whose converse is false, and state a counterexample to the converse.",
            "answer": {
              "answerKey": "If a person lives in Delhi, then they live in India; the converse is false because a person may live in another Indian city.",
              "schoolMethod": "**Proposition:** If a person lives in Delhi, then the person lives in India. This is true because Delhi is in India.\n\n**Converse:** If a person lives in India, then the person lives in Delhi. This is false; for example, a person who lives in Mumbai lives in India but not in Delhi."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Give one example each from everyday life, geometry and number theory of a true proposition whose converse is false.",
            "answer": {
              "answerKey": "Every resident of Delhi is a resident of India, but not every resident of India lives in Delhi; every square is a rectangle, but not every rectangle is a square; every multiple of 4 is even, but not every even number is a multiple of 4.",
              "schoolMethod": "**Everyday life:** If a person lives in Delhi, then they live in India; the converse is false because a person may live in Mumbai.\n\n**Geometry:** Every square is a rectangle, but a non-square rectangle is a counterexample to the converse.\n\n**Number theory:** Every multiple of 4 is even, but 6 is even and is not a multiple of 4."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "The factor-partner argument says that a positive integer with an odd number of positive factors is a perfect square. Which implication does this prove? Why is the converse also true?",
            "answer": {
              "answerKey": "The argument first proves “odd number of factors ⇒ perfect square”. The converse “perfect square ⇒ odd number of factors” is also true.",
              "schoolMethod": "Pair each positive divisor d of n with its partner n/d. If n has an odd number of divisors, at least one pair must consist of the same number twice, so d=n/d and n=d². This proves the first implication. Conversely, if n=k², the divisor pair (k,k) is the one repeated pair; every other divisor pairs with a distinct partner. Hence n has an odd number of positive divisors."
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
    "exercises": [
      {
        "id": "ex10.1",
        "title": "Exercise Set 10.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Section A has 30 students with average score 72; Section B has 25 students with average score 76. Find the combined average.",
            "answer": {
              "answerKey": "73.82 marks approximately.",
              "schoolMethod": "Combined total of marks = 30×72 + 25×76 = 2160 + 1900 = 4060.\nTotal students = 30 + 25 = 55.\n\nCombined average = 4060/55 = 73.818… ≈ **73.82 marks**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Three equal quantities of fertiliser contain nitrogen fractions 1/10, 9/50 and 3/60 respectively. Find the fraction of nitrogen in the mixture.",
            "answer": {
              "answerKey": "11/100 = 11%.",
              "schoolMethod": "The quantities are equal, so take their weighted mean with equal weights.\n\nNitrogen fraction = [(1/10) + (9/50) + (3/60)]/3 = (0.10 + 0.18 + 0.05)/3 = 0.33/3 = **0.11 = 11/100**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "A goldsmith combines 9 units of gold at 12 varṇa, 5 units at 10 varṇa and 17 units at 11 varṇa. Find the combined purity.",
            "answer": {
              "answerKey": "345/31 ≈ 11.13 varṇa.",
              "schoolMethod": "Total pure-gold equivalent = 9×12 + 5×10 + 17×11 = 108 + 50 + 187 = 345.\nTotal alloy = 9 + 5 + 17 = 31 units.\n\nCombined purity = 345/31 = **11.129… ≈ 11.13 varṇa**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Average daily rainfall in May, June and July is 3.5 mm, 10 mm and 8.7 mm, respectively. Write an expression for their combined average.",
            "answer": {
              "answerKey": "(31×3.5 + 30×10 + 31×8.7)/92 ≈ 7.37 mm.",
              "schoolMethod": "May, June and July have 31, 30 and 31 days. The combined average must weight each monthly average by the number of days.\n\nCombined mean = (31×3.5 + 30×10 + 31×8.7)/(31+30+31) = 678.2/92 ≈ **7.37 mm per day**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Find the spice concentration when (i) 100 mL at 5%, 200 mL at 10%, and 300 mL at 15% are mixed; (ii) 300 mL at 5%, 200 mL at 10%, and 100 mL at 15% are mixed.",
            "answer": {
              "answerKey": "(i) 11.67%; (ii) 8.33%.",
              "schoolMethod": "(i) Spice amount = 100(0.05)+200(0.10)+300(0.15)=5+20+45=70 mL. Total volume = 600 mL. Concentration = 70/600×100% = **11.67%**.\n\n(ii) Spice amount = 300(0.05)+200(0.10)+100(0.15)=15+20+15=50 mL. Concentration = 50/600×100% = **8.33%**."
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
            "text": "Savitri scores 35 out of 50 in internal tests, 44 out of 60 in a project and 80 out of 100 in the final exam. The three components are weighted in the ratio 3:4:5. Which of the given expressions correctly represents her annual percentage? Calculate the annual percentage using the weighted mean.",
            "answer": {
              "answerKey": "The valid expressions are (iii) and (iv). The weighted annual percentage is approximately 75.28%.",
              "schoolMethod": "**Step 1: Convert each component to a percentage.** Internal tests: (35/50)×100 = 70%. Project: (44/60)×100 = 73⅓%. Final exam: (80/100)×100 = 80%.\n\n**Step 2: Apply the weights 3:4:5.** The sum of the weights is 3+4+5=12.\n\nWeighted percentage = [3(70)+4(73⅓)+5(80)]/12\n= [210+293⅓+400]/12\n= 903⅓/12\n= 75.277…% ≈ **75.28%**.\n\nThe ordinary total-marks percentage (159/210×100) is not the correct method because it ignores the stated weights."
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
            "text": "A shop makes ₹8,000 from book sales with 30% profit and ₹1,000 from book-cover sales with 50% profit. Find the profit percentage on total sales.",
            "answer": {
              "answerKey": "32.22% (taking profit percentages as a fraction of sales).",
              "schoolMethod": "Profit from books = 30% of ₹8,000 = ₹2,400. Profit from covers = 50% of ₹1,000 = ₹500.\nTotal sales = ₹9,000; total profit = ₹2,900.\n\nProfit percentage = (2900/9000)×100% = **32.22%**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "A white stork travels an average of 44.5 km daily over 20 days and flies 55 km on day 21. Find its average daily distance over all 21 days.",
            "answer": {
              "answerKey": "45 km per day.",
              "schoolMethod": "Distance in first 20 days = 20×44.5 = 890 km.\nTotal for 21 days = 890+55 = 945 km.\nAverage = 945/21 = **45 km per day**. The new average rises slightly because 55 km exceeds the previous average."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Mix 600 mL of solution containing 5% salt with 300 mL of solution containing 8% sugar. Find the salt and sugar concentrations in the mixture.",
            "answer": {
              "answerKey": "Salt = 3⅓%; sugar = 2⅔% (option v).",
              "schoolMethod": "Salt amount = 5% of 600 = 30 mL. Sugar amount = 8% of 300 = 24 mL. Total mixture = 900 mL.\nSalt concentration = 30/900×100% = **3.33%**. Sugar concentration = 24/900×100% = **2.67%**. Therefore option (v) is correct."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Ten litres of pani has 8% spice. How much regular water must be added to reduce spice concentration to 3/4 of its original value?",
            "answer": {
              "answerKey": "10/3 L = 3⅓ L.",
              "schoolMethod": "Spice initially = 8% of 10 = 0.8 L-equivalent. The target concentration is (3/4)×8% = 6%. Let x L of water be added.\n\n0.8/(10+x)=0.06 ⇒ 0.8=0.6+0.06x ⇒ x=0.2/0.06=**10/3 L = 3⅓ L**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Final fitness marks combine strength, flexibility and agility in ratio 4:5:6. Rashi scores 60,65,70 and Keerthi scores 55,65,75. (i) Whose score is higher without full calculation? (ii) Find both final marks.",
            "answer": {
              "answerKey": "Keerthi scores higher: Rashi = 65⅔; Keerthi = 66⅓.",
              "schoolMethod": "(i) Compared with Rashi, Keerthi has 5 fewer strength marks (weight 4), equal flexibility marks, and 5 more agility marks (weight 6). The gain 5×6 = 30 exceeds the loss 5×4 = 20, so Keerthi scores higher.\n\n(ii) Rashi = [4(60)+5(65)+6(70)]/15 = 985/15 = **65⅔**.\nKeerthi = [4(55)+5(65)+6(75)]/15 = 995/15 = **66⅓**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "Ten customers rated food, ambience and service on a 1–5 scale. Counts for ratings 5,4,3,2,1 are Food (5,3,2,0,0), Ambience (0,4,5,1,0), Service (1,2,2,4,1). Find the combined average for weights food:ambience:service = 6:5:4.",
            "answer": {
              "answerKey": "Food: 4.3; ambience: 3.3; service: 2.8. With aspect weights 6:5:4, the overall weighted rating is 3.57 (approximately).",
              "schoolMethod": "For each aspect, multiply every rating by its frequency, add these products and divide by the 10 customers.\n\n**Food:** (5×5+4×3+3×2)/10 = (25+12+6)/10 = **4.3**.\n\n**Ambience:** (5×0+4×4+3×5+2×1+1×0)/10 = (16+15+2)/10 = **3.3**.\n\n**Service:** (5×1+4×2+3×2+2×4+1×1)/10 = (5+8+6+8+1)/10 = **2.8**.\n\nNow apply weights 6, 5 and 4 to food, ambience and service: overall rating = [6(4.3)+5(3.3)+4(2.8)]/(6+5+4) = (25.8+16.5+11.2)/15 = 53.5/15 = 3.566… ≈ **3.57 out of 5**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "There are 60 male and female langurs together. Their average weights are 16.5 kg (males), 13.8 kg (females), and 14.925 kg overall. (i) Select the correct equation. (ii) Find the number of males. (iii) Add a 15.2 kg female and find the new female mean. (iv) Release males weighing 16.9 kg and 16.1 kg and find the new male mean. (v) One remaining male loses 1 kg; find the average male weight.",
            "answer": {
              "answerKey": "(i) Both (a) and (b). (ii) 25 male langurs. (iii) 13.84 kg average female weight. (iv) 16.5 kg average male weight. (v) 16.46 kg average male weight after the loss.",
              "schoolMethod": "Let x be the number of male langurs and y the number of female langurs. The total number is x+y=60.\n\n**(i) Correct expression(s).** The mean formula gives (16.5x+13.8y)/(x+y)=14.925. Since x+y=60, this is also (16.5x+13.8y)/60=14.925. Therefore both (a) and (b) are correct.\n\n**(ii) Number of males.** Solve x+y=60 and 16.5x+13.8y=14.925(60)=895.5. Put y=60−x: 16.5x+13.8(60−x)=895.5 ⇒ 2.7x=67.5 ⇒ **x=25**. Hence y=60−25=35; there are 25 males and 35 females.\n\n**(iii) New female mean.** Original total female weight = 35×13.8=483 kg. After adding a 15.2 kg female, total weight = 483+15.2=498.2 kg and number =36. Mean =498.2/36=13.838… ≈ **13.84 kg**.\n\n**(iv) New male mean after releasing two males.** Original male total =25×16.5=412.5 kg. Released weight =16.9+16.1=33 kg, so remaining total =412.5−33=379.5 kg for 23 males. Mean =379.5/23=**16.5 kg**. This remains unchanged because the two released males’ average, (16.9+16.1)/2, is exactly 16.5 kg.\n\n**(v) One remaining male loses 1 kg.** The male total becomes 379.5−1=378.5 kg, while the number remains 23. New mean =378.5/23=16.4565… ≈ **16.46 kg**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "Dorjee has 1 litre of Dead Sea water (salinity ≈34%). (i) Find the salinity after mixing it with 2 litres of purified drinking water (≈0.001%). (ii) Can he obtain groundwater salinity (≈0.01%) by mixing Dead Sea water and purified water? If so, how much purified water must be mixed with 1 litre of Dead Sea water? (iii) Can he obtain purified-drinking-water salinity (≈0.001%) by mixing Dead Sea water and groundwater (≈0.01%)? If so, how much groundwater should be mixed with 1 litre of Dead Sea water?",
            "answer": {
              "answerKey": "(i) ≈11.334%. (ii) Yes; add ≈3,776.67 L purified water to 1 L Dead Sea water. (iii) Impossible: no nonnegative quantity of groundwater can lower the mixture below 0.01%.",
              "schoolMethod": "Treat the listed salinities as percentages of the mixture.\n\n**(i) Dead Sea + purified water.** Salt-equivalent amount = 1(0.34)+2(0.00001)=0.34002 L. Total volume = 3 L. Salinity = 0.34002/3×100% = **11.334% approximately**.\n\n**(ii) Reach groundwater salinity 0.01%.** Let x litres of purified water be added to the 1 L of Dead Sea water. Using fractions,\n\n(0.34+0.00001x)/(1+x)=0.0001.\n\nThus 0.34+0.00001x=0.0001+0.0001x ⇒ 0.3399=0.00009x ⇒ x≈**3,776.67 L**.\n\n**(iii) Reach purified-water salinity 0.001% using groundwater.** The two starting salinities are 34% and 0.01%. Any mixture containing positive amounts of both has salinity between 0.01% and 34%, so it cannot be as low as 0.001%. Even adding unlimited groundwater only approaches 0.01% from above. Therefore it is **impossible**, and no nonnegative quantity of groundwater satisfies the request."
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
            "text": "A stacked column chart gives the number of animal species on the IUCN Red List by class in 2007, 2010, 2013, 2016 and 2019. (i) What does 14,234 represent? (ii) Approximately how many reptile species were listed in 2016? (iii) Which classes show a relatively small increase from 2007 to 2019?",
            "answer": {
              "answerKey": "(i) Total listed animal species in 2019: 14,234. (ii) Approximately 1,500 reptiles in 2016. (iii) Insects and other invertebrates (“Others”) show relatively small increases.",
              "schoolMethod": "(i) The number **14,234** is the total height of the full 2019 stacked column, so it represents all animal species included across the classes shown on the IUCN Red List in 2019.\n\n(ii) Read the reptile segment (the red segment in the legend) in the 2016 column against the vertical scale. Its height is about **1,500 species**.\n\n(iii) Compare each coloured segment in the 2007 and 2019 columns. The green **insects** segment and the small top segment for **other invertebrates (“Others”)** show relatively small increases compared with the larger increases in several other classes."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "A bowler took wickets at home/overseas: Test 62/172, ODI 100/49 and T20 32/71. (i) Describe stacked bars comparing total home versus overseas wickets. (ii) Describe stacked bars comparing totals for Test, ODI and T20.",
            "answer": {
              "answerKey": "Home total 194; overseas total 292. Format totals: Test 234, ODI 149, T20 103.",
              "schoolMethod": "(i) Home total = 62+100+32 = **194 wickets**; overseas total = 172+49+71 = **292 wickets**. Draw two bars: Home, subdivided into Test 62, ODI 100 and T20 32; Overseas, subdivided into Test 172, ODI 49 and T20 71. Use a consistent scale.\n\n(ii) Totals by format: Test = 62+172 = **234**; ODI = 100+49 = **149**; T20 = 32+71 = **103**. Draw three bars of those total lengths, split into Home and Overseas portions using the given counts."
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
            "text": "The table records daily average hours for five people spent lying down, sitting, and standing/moving: Pavani (20,3,1), Raghu (7,4,13), Zakir (8,6,10), Sahana (student, to be estimated), Julie (8,10,6). (i) Make a reasonable 24-hour estimate for Sahana. (ii) Guess Julie’s work based on the data. (iii) Complete a 100% stacked bar chart.",
            "answer": {
              "answerKey": "(i) Example estimate for Sahana: 8 h lying down, 6 h sitting, 10 h standing/moving. (ii) Julie may have a desk-based or seated occupation with considerable rest; guesses can vary. (iii) In order (lying, sitting, moving): Pavani 83.33%, 12.50%, 4.17%; Raghu 29.17%, 16.67%, 54.17%; Zakir 33.33%, 25.00%, 41.67%; Sahana (sample) 33.33%, 25.00%, 41.67%; Julie 33.33%, 41.67%, 25.00%.",
              "schoolMethod": "**(i) Sahana’s estimate.** One reasonable illustrative row is 8 h lying down, 6 h sitting and 10 h standing/moving. The total is 8+6+10=24 hours. Many other estimates are possible, but the three entries should add to 24.\n\n**(ii) Julie’s possible work.** She spends 10 hours sitting, compared with 8 hours lying down and 6 hours standing/moving. A plausible guess is a desk-based or seated job with substantial rest; this is only an inference from the table, not a definite identification.\n\n**(iii) 100% stacked bars.** Divide each time by 24 and multiply by 100%. The segment percentages (lying down, sitting, standing/moving) are:\n\n- **Pavani:** 20/24=83.33%, 3/24=12.50%, 1/24=4.17%.\n- **Raghu:** 7/24=29.17%, 4/24=16.67%, 13/24=54.17%.\n- **Zakir:** 8/24=33.33%, 6/24=25.00%, 10/24=41.67%.\n- **Sahana (sample row):** 8/24=33.33%, 6/24=25.00%, 10/24=41.67%.\n- **Julie:** 8/24=33.33%, 10/24=41.67%, 6/24=25.00%.\n\nDraw five equal-length bars from 0% to 100%, and split each bar in this order using the percentages above. Rounded percentages may total 99.99% or 100.01%; use the exact hour fractions to draw the segments."
            }
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
            "text": "In a T20, a team scores 6 runs in the first over. (i) It scores 12 in the second over; find the run rate now. (ii) After 19 overs its run rate is 6; it scores 12 in the last over. Find its final run rate.",
            "answer": {
              "answerKey": "(i) 9 runs/over; (ii) 6.3 runs/over.",
              "schoolMethod": "(i) Total after two overs = 6+12=18. Run rate = 18/2 = **9 runs per over**.\n\n(ii) Runs after 19 overs = 19×6=114. After scoring 12, total =126 in 20 overs. Final run rate =126/20=**6.3 runs per over**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Five friends report shuttlecock prices. (i) If their respective averages are ay, as, ak, ap, ag, write the combined average. (ii) If an and af are the average prices of nylon and feather shuttlecocks, give the overall average and compare methods.",
            "answer": {
              "answerKey": "(i) Combined mean = (6aᵧ + 4aₛ + 5aₖ + 4aₚ + 4aɢ)/23. (ii) If 13 prices are nylon with mean aₙ and 10 are feather with mean aբ, the overall mean is (13aₙ + 10aբ)/23. Using the textbook’s listed data, the mean is 4063/23 ≈ ₹176.65.",
              "schoolMethod": "Let the five friends have collected 6, 4, 5, 4 and 4 prices, respectively, for 23 prices in total.\n\n**(i)** If their means are aᵧ, aₛ, aₖ, aₚ and aɢ, the combined mean must weight each mean by how many prices contributed:\n\n\\[(6a_y+4a_s+5a_k+4a_p+4a_g)/23.\\]\n\nUsing the actual prices listed in the question, the total is ₹4,063, so the combined mean is 4063/23 ≈ **₹176.65**.\n\n**(ii)** The 13 nylon prices have mean aₙ=1429/13≈₹109.92 and the 10 feather prices have mean aբ=2634/10=₹263.40. Therefore the combined mean is (13aₙ+10aբ)/23 = 4063/23 ≈ **₹176.65**. Both approaches agree because they give each individual price equal weight."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Shreyas owns 25 shares at an average ₹150. (i) He buys 10 more at ₹30 each; find his new average. (ii) Vaishnavi owns 5 shares averaging ₹150 and buys x shares at ₹30 each; her new average is ₹70. Find x.",
            "answer": {
              "answerKey": "(i) ₹115.71 approx; (ii) 10 shares.",
              "schoolMethod": "(i) Initial cost =25×150=₹3,750. New purchase =10×30=₹300. Total cost =₹4,050 for 35 shares. New average =4050/35≈**₹115.71 per share**.\n\n(ii) Vaishnavi’s initial cost =5×150=₹750. Let x be the number bought at ₹30.\n(750+30x)/(5+x)=70 ⇒ 750+30x=350+70x ⇒ 400=40x ⇒ **x=10 shares**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "A 30-hasta pool is divided into lengths 4,5,6,7,8 hastas with depths 9,7,7,3,2 hastas. Find the mean depth.",
            "answer": {
              "answerKey": "5 hastas.",
              "schoolMethod": "Mean depth is weighted by the lengths of the sections.\nTotal length =4+5+6+7+8=30 hastas.\nWeighted depth sum =4×9+5×7+6×7+7×3+8×2=36+35+42+21+16=150.\nMean depth =150/30=**5 hastas**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Suvarna owns 1 g gold at an average price ₹15,000/g. Estimate the new average after: (i) 1 g at ₹30,000; (ii) 2 g at ₹30,000; (iii) 1 g at ₹10,000; (iv) 10 g at ₹10,000; (v) 0.5 g at ₹30,000; (vi) 0.5 g at ₹15,000.",
            "answer": {
              "answerKey": "(i) ₹22,500; (ii) ₹25,000; (iii) ₹12,500; (iv) ₹10,454.55; (v) ₹20,000; (vi) ₹15,000 per g.",
              "schoolMethod": "Treat the original gram as costing ₹15,000. The new average is total cost divided by total grams.\n(i) (15,000+30,000)/2=**₹22,500/g**.\n(ii) (15,000+2×30,000)/3=**₹25,000/g**.\n(iii) (15,000+10,000)/2=**₹12,500/g**.\n(iv) (15,000+10×10,000)/11=115,000/11≈**₹10,454.55/g**.\n(v) (15,000+0.5×30,000)/1.5=30,000/1.5=**₹20,000/g**.\n(vi) (15,000+0.5×15,000)/1.5=22,500/1.5=**₹15,000/g**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "If every weight in a weighted mean is doubled, how does the weighted mean change? Justify algebraically.",
            "answer": {
              "answerKey": "It remains unchanged.",
              "schoolMethod": "For values xᵢ with weights wᵢ, the mean is μ=Σwᵢxᵢ/Σwᵢ. After doubling every weight,\nμ′=Σ(2wᵢ)xᵢ/Σ(2wᵢ)=2Σwᵢxᵢ/(2Σwᵢ)=Σwᵢxᵢ/Σwᵢ=μ.\nTherefore doubling all weights does **not** change the weighted mean."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "Use the cumulative graph of objects orbiting Earth by launch/separation year. (i) Estimate the total in 2003 and when it doubled. (ii) Estimate payload and other objects and their shares in 2025. (iii) Describe number and share trends.",
            "answer": {
              "answerKey": "(i) About 10,000 objects in 2003; the total reaches roughly 20,000 around 2021. (ii) In 2025, about 33,000 objects in total: approximately 17,000 payloads (about 52%) and 16,000 other objects (about 48%). (iii) Both categories increase in number; payloads rise particularly quickly in later years, so their share grows to about half while the share of other objects decreases.",
              "schoolMethod": "**(i) Doubling the total.** Read the stacked graph at 2003: the total is approximately **10,000 objects**. Twice this is 2 × 10,000 = 20,000. The cumulative total reaches about 20,000 near **2021** (read approximately from the graph).\n\n**(ii) Split in 2025.** The total height is approximately 33,000. The payload portion is about 17,000, so \\(\\frac{17,000}{33,000}\\times100\\%\\approx51.5\\%\\approx52\\%\\). The other-object count is about 33,000 − 17,000 = **16,000**, or \\(\\frac{16,000}{33,000}\\times100\\%\\approx48.5\\%\\approx48\\%\\). These are estimates because the graph is read visually.\n\n**(iii) Trend.** Both the payload count and other-object count increase over time. Payloads increase more sharply in the later years; consequently, payloads make up about 52% of the 2025 total and other objects about 48%, even though the number of other objects also continues to grow."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "Observe the school-playground infographic. (i) Decide which statements can be inferred: (a) more schools have a playground in Haryana than in Uttarakhand; (b) approximately 2 out of 3 schools in Arunachal Pradesh have a playground; (c) Punjab has the highest number of schools with a playground; (d) if Maharashtra has more schools than Telangana, then Maharashtra has more schools with a playground. (ii) Can the nationwide percentage of schools with playgrounds be found from the information given? If not, what additional information is needed?",
            "answer": {
              "answerKey": "(i) (b) and (d) can be inferred. (a) and (c) cannot be concluded from the displayed percentages alone. (ii) No. The number of schools in each state/UT (or the total count of schools and playground schools) is needed.",
              "schoolMethod": "**(i)(a)** The statement compares absolute counts, not percentages. The chart gives the share of schools with playgrounds; without knowing how many schools each state has, the count cannot be compared. **Not inferable.**\n\n**(i)(b)** Two out of three is about 66.7%, matching the displayed share for Arunachal Pradesh. **Inferable.**\n\n**(i)(c)** Punjab may have the highest displayed percentage, but that does not prove it has the largest count; state totals may differ. **Not inferable.**\n\n**(i)(d)** Given that Maharashtra has more schools than Telangana and the chart shows Maharashtra’s playground percentage is higher, the number with playgrounds must also be higher. If M and T are total schools and pM>pT while M>T, then MpM>TpT. **Inferable.**\n\n**(ii)** A national percentage is a weighted percentage: total schools with playgrounds divided by all schools. We need the number of schools in every state/UT (and then the corresponding playground counts), or equivalent nationwide totals. An unweighted average of state percentages would generally be incorrect."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "A 100% stacked bar chart shows the shares of ratings for Plays A, B and C. (i) Which play would you choose from this chart? (ii) Would the corresponding absolute-count stacked bar chart change your choice?",
            "answer": {
              "answerKey": "(i) Play B is a reasonable overall choice: it has the largest combined share of 4-star and 5-star ratings and the smallest 1-star share. Play C has the largest 5-star share but also a substantial 1-star share. (ii) The absolute-count chart also favours B for the number of favourable ratings because many more ratings were recorded for B.",
              "schoolMethod": "**(i) Percentage chart.** All bars total 100%, so compare the distribution of ratings. Combining the 4-star (red) and 5-star (blue) portions, Play B has the largest favourable share. Play C has the largest 5-star portion alone, but also a sizeable 1-star (grey) portion. On an overall balance of very positive ratings and fewest 1-star ratings, **Play B** is the most defensible choice. A different personal preference (for example, valuing only 5-star ratings) could lead to a different choice.\n\n**(ii) Absolute-count chart.** This chart shows counts rather than shares. Play B has far more ratings than the other plays and therefore also the largest absolute number of 4- and 5-star ratings. Thus the second chart supports choosing **Play B** too, but it answers a different question: total counts versus proportion of each play’s ratings."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "text": "Triathlon times: Athlete 1 swimming 1:08, cycling 5:00, running 3:15; Athlete 2 1:05, 5:10, 3:35; Athlete 3 1:22, 5:55, 3:50. (i) Choose stacked or 100% stacked bars. (ii) Which questions can a 100% chart answer: first finisher, fraction of Athlete 1’s time cycling, longest running time?",
            "answer": {
              "answerKey": "(i) Stacked bar chart. (ii) Only (b).",
              "schoolMethod": "(i) Use a **stacked bar chart**, because the total elapsed time matters and must be compared in absolute units. Convert to minutes if needed: Athlete 1 =68+300+195=563 min (9 h 23 min); Athlete 2 =65+310+215=590 min (9 h 50 min); Athlete 3 =82+355+230=667 min (11 h 7 min). Thus Athlete 1 finishes first.\n\n(ii) A 100% chart shows proportions of each athlete’s time, so it answers **(b)**: Athlete 1’s cycling share is 300/563≈53.3%. It does not establish (a), since total durations are lost; nor (c), because a segment’s share cannot by itself tell which athlete had the greatest absolute running time."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "text": "Observe the 100% stacked bar chart of disability type by age group in India (Census 2011). State observations, questions and inferences.",
            "answer": {
              "answerKey": "The chart compares proportions of disability types within each age group; movement/seeing/hearing categories are substantial, and patterns vary by age.",
              "schoolMethod": "Each bar represents 100% of the disabled persons in one age group, so compare segment **shares**, not absolute numbers. A suitable observation is that the mix of disability types differs across age groups; movement-related disability tends to occupy a larger share among older groups, while some other types take larger relative shares among younger groups. The chart alone does not tell how many disabled persons are in each age group because absolute group totals are not shown. Useful follow-up questions include the counts by age group, causes of disability, and how trends differ by gender or region."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "text": "Individual project: (i) estimate time spent lying, sitting and standing/moving for yourself and at least two family members, then draw a stacked bar chart; or (ii) show monthly family expenditure with a 100% stacked bar chart for at least three months.",
            "answer": {
              "answerKey": "Sample project solution provided.",
              "schoolMethod": "**Sample response for (i):** Record 24-hour totals (lying/sitting/moving): Student = (8,7,9), parent 1 = (7,8,9), parent 2 = (7,7,10). Each row sums to 24 hours. Percentages are each hours÷24×100; for the student, 33.3%, 29.2%, 37.5%. Draw equal-length 100% bars split into these three categories.\n\n**Sample response for (ii):** Suppose monthly expenditure in ₹ is Housing/Food/Education/Transport/Health/Other: January 8,000/6,000/2,000/1,500/1,000/1,500; February 8,000/6,200/2,000/1,600/800/1,400; March 8,000/5,800/2,000/1,700/1,200/1,300. Convert each category to a percentage of that month’s total and draw one 100% bar per month. Compare changes in shares, not just rupee amounts; note that actual family data should replace these illustrative figures."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": false,
            "text": "Small-group project: design a weighted rating scheme for a shop, bus trip, tourist spot or clinic. Choose aspects, weights, collect ratings from ten people, calculate means and make a 100% stacked chart.",
            "answer": {
              "answerKey": "Illustrative weighted-rating project included.",
              "schoolMethod": "**Example: local tourist spot.** Rate cleanliness, accessibility, safety, information/signage and attractions on a 1–5 scale, with weights 3:2:3:1:4 respectively. The weights sum to 13. For a visitor who gives 4, 3, 5, 4, 5, the score is [3(4)+2(3)+3(5)+1(4)+4(5)]/13=53/13≈4.08.\n\nUse the same weighted-mean formula for each of ten visitors, then average their ten scores. For the 100% stacked chart, show each visitor’s ratings as shares of their weighted total or show the proportion of respondents in each rating band per aspect. Report which aspects score highest/lowest and acknowledge that a 1–5 rating may not capture every aspect. This is a complete model; replace sample ratings with the group’s ten responses."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": false,
            "text": "Each student shares their family’s average age and family size. How can the class calculate the average age of all people in all families?",
            "answer": {
              "answerKey": "Weighted average: Σ(family size × family mean age)/Σ(family sizes).",
              "schoolMethod": "For family i, let nᵢ be the number of members and aᵢ their average age. Their combined ages total nᵢaᵢ. Add all family totals and divide by the total number of people: **class average age = (Σ nᵢaᵢ)/(Σ nᵢ)**. A simple average of the family averages would be wrong unless every family had the same size."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": true,
            "text": "If each weight wᵢ is increased by a constant such as 1, what happens to a weighted average? Justify algebraically.",
            "answer": {
              "answerKey": "It generally changes, moving toward the unweighted mean; it does not have a fixed direction for every data set.",
              "schoolMethod": "Original weighted mean: μ=Σwᵢxᵢ/Σwᵢ. If each of n weights is increased by c, then μ′=(Σwᵢxᵢ+cΣxᵢ)/(Σwᵢ+nc). This is generally different from μ and can be written as a weighted combination of the old weighted mean and the unweighted mean.\n\nExample: values 10 and 20 with weights 1 and 3 give μ=(10+60)/4=17.5. Increasing both weights by 1 gives μ′=(2×10+4×20)/6=100/6≈16.67. Thus increasing all weights by the same additive constant is not the same as multiplying all weights by a common factor."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": false,
            "text": "Last year a farm population was 60% cows, 25% sheep and 15% chickens. All three populations decrease. Which share-change scenarios are possible: (i) all shares decrease, (ii) all increase, (iii) all unchanged, (iv) cows share decreases, sheep share increases, chickens unchanged, (v) cows and sheep shares increase, chickens decrease?",
            "answer": {
              "answerKey": "(iii), (iv) and (v) are possible; (i) and (ii) are impossible.",
              "schoolMethod": "The three shares must always add to 100%, so they cannot **all decrease** or **all increase**; (i) and (ii) are impossible.\n\n(iii) is possible if all three populations shrink by the same percentage, preserving their ratios.\n\n(iv) is possible if the chicken population shrinks by the same factor as the total, sheep shrink less rapidly, and cows shrink more rapidly. For example, initial counts (60,25,15) can become (24,18.5,7.5), with all populations smaller but shares 48%, 37%, 15%.\n\n(v) is possible if cows and sheep shrink less rapidly than the chicken population, so their shares rise while the chicken share falls."
            }
          }
        ]
      },
      {
        "id": "ex10.reflect",
        "title": "In-text and Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Eight senior students have average height 165.5 cm and three junior students have average height 149⅓ cm. Find the combined average and explain why simply averaging the two group averages is wrong.",
            "answer": {
              "answerKey": "Combined average = 161.09 cm (approximately).",
              "schoolMethod": "Total height of seniors = 8 × 165.5 = 1324 cm. Total height of juniors = 3 × 149⅓ = 448 cm. Combined total = 1772 cm for 11 students. Combined average = 1772/11 = 161.0909… ≈ **161.09 cm**. The simple mean of 165.5 and 149⅓ gives equal weight to the two group averages even though the group sizes are 8 and 3; use a weighted mean."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "A 500 mL bowl of lemonade contains 10% jaggery, and a 200 mL glass contains 20% jaggery. What percentage of jaggery is in the mixture?",
            "answer": {
              "answerKey": "90/700 × 100% ≈ 12.86%.",
              "schoolMethod": "Jaggery in the bowl = 10% of 500 = 50 mL. Jaggery in the glass = 20% of 200 = 40 mL. Total jaggery = 90 mL and total mixture = 700 mL. Concentration = (90/700) × 100% = **12.857…% ≈ 12.86%**. It is closer to 10% because the larger quantity (500 mL) has the lower concentration."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Answer the following about stacked bar charts and 100% stacked bar charts: (i) What does each show? (ii) Can a 100% stacked chart be made from a stacked chart? (iii) Can the original stacked chart generally be recovered from a 100% stacked chart? (iv) What comparisons suit each chart?",
            "answer": {
              "answerKey": "Stacked bars show absolute quantities and totals; 100% stacked bars show proportions. A 100% chart can be made from a stacked chart, but absolute counts cannot generally be recovered from percentages alone.",
              "schoolMethod": "(i) A stacked bar preserves each category’s count/quantity and the overall total. A 100% stacked bar normalizes each total to 100% and shows the share of each category. (ii) Yes: divide each segment by that bar’s total and multiply by 100%. (iii) Not without the original totals: the same percentages can describe bars of very different sizes. (iv) Use stacked bars to compare totals and absolute amounts; use 100% stacked bars to compare compositions or shares."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "From a chart comparing how people of different age groups spend a typical day, state useful observations and explain why such observations should be treated as estimates rather than exact universal facts.",
            "answer": {
              "answerKey": "Reasonable observations include differences in sleep, learning and work time between age groups; conclusions should be qualified as trends in the displayed data.",
              "schoolMethod": "Read the displayed segments and compare the age groups rather than assuming every person follows the average. School-age children generally devote more time to learning than adults, while adults may devote more time to paid and unpaid work. Sleep time may also vary with age. The graph describes aggregated data, so it can suggest patterns but cannot prove causes or describe every individual. Any numerical readings from the chart are approximate."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "In the “What Can a Strip Say?” activity, each strip represents a full day divided into activities. If the pieces for each activity are grouped, can the information be displayed as a 100% stacked bar chart?",
            "answer": {
              "answerKey": "Yes, provided each strip represents the same total duration and all activity segments add to that total.",
              "schoolMethod": "Treat one full day (24 hours) as 100%. For each person/day, calculate each activity’s share as (hours in that activity ÷ 24) × 100%. Place the activity segments consecutively in a bar of equal total length. The total remains 100%, so the result is a 100% stacked bar chart."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "For a chart based on one teacher’s five weekdays of activity, would the bars necessarily look the same for another teacher or when all seven days are included? Give a reasoned answer.",
            "answer": {
              "answerKey": "No. The bars depend on the person and the days sampled; a seven-day dataset can change weekday patterns by including the weekend.",
              "schoolMethod": "Different teachers have different routines, travel, duties and home responsibilities, so their category shares can differ. Adding Saturday and Sunday may change the averages or proportions because weekend schedules are often unlike weekdays. Some patterns could resemble those of other jobs, but the graph alone cannot uniquely identify a person’s occupation."
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
    "exercises": [
      {
        "id": "ex11.1",
        "title": "Exercise Set 11.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Add two 4-digit numbers using the stated right-to-left column algorithm. Follow the steps exactly and check the result.",
            "answer": {
              "answerKey": "Example: 4738 + 6957 = 11695.",
              "schoolMethod": "Take 4738 and 6957.\n\nUnits: 8+7=15; write 5, carry 1.\nTens: 3+5+1=9; write 9, carry 0.\nHundreds: 7+9=16; write 6, carry 1.\nThousands: 4+6+1=11; write 1, carry 1.\nNo digits remain, so the final carry 1 is written at the left.\n\nTherefore **4738+6957=11695**. The result agrees with direct addition."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "What happens if a 5-digit number is added to a 3-digit number? Do the stated steps handle this correctly?",
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
            "text": "In Step 3 of the addition algorithm, why can the carry not be more than 1?",
            "answer": {
              "answerKey": "Maximum digit-column sum is 9+9+1=19, so the carry is at most 1.",
              "schoolMethod": "Each digit is at most 9 and the previous carry is either 0 or 1. Thus the largest possible column sum is 9+9+1=19. The carry is the number of tens in that sum, which can only be 0 or 1. It can never be 2 or more."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "What happens if the fifth step (writing the final carry) is omitted? Give examples where the algorithm still works and fails.",
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
            "text": "Describe algorithms to find elements in List 1 that are absent from List 2, and elements in List 2 that are absent from List 1. The lists are in increasing order.",
            "answer": {
              "answerKey": "Use two-pointer scans; advance the smaller value and record it when it occurs only in its own list.",
              "schoolMethod": "**Algorithm for List 1 \\ List 2** (indices i=j=0):\n1. While i is within List 1 and j is within List 2: if L1[i] < L2[j], output L1[i] and increment i; if L1[i] > L2[j], increment j; if equal, increment both i and j.\n2. Output all remaining elements of L1.\n\n**Algorithm for List 2 \\ List 1:** exchange the roles of the lists. If duplicate values are allowed, first specify whether “elements” means distinct values or occurrences; for set difference, output each distinct missing value once. The increasing order makes these scans efficient."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Describe an algorithm to compute the least common multiple of two positive integers.",
            "answer": {
              "answerKey": "Compute lcm(m,n)=mn/gcd(m,n).",
              "schoolMethod": "A correct algorithm is:\n```text\nLCM(m,n):\n    g := GCD(m,n)\n    return (m / g) * n\n```\nHere `GCD` can be Euclid’s division algorithm. Since m and n share exactly their gcd as common prime-factor content, dividing m by g before multiplying by n avoids counting shared factors twice. The answer is the least positive integer divisible by both m and n."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": true,
            "text": "Divisors occur in pairs. (i) How many numbers between 1 and n must be checked to find all divisors in pairs? (ii) Would a gcd algorithm based on paired divisors work as described?",
            "answer": {
              "answerKey": "(i) Check through ⌊√n⌋. (ii) Yes, after ordering/comparing common divisors rather than relying on the last item in an unsorted list.",
              "schoolMethod": "(i) If j divides n, the paired factor is n/j. At least one of the pair is at most √n, since if both were larger their product would exceed n. Therefore check j=1,2,…,⌊√n⌋. Whenever j divides n, record both j and n/j (record only one copy if j=√n).\n\n(ii) Yes, the common-divisor method still works if the divisors are paired. However, the list may no longer be in increasing order. So one cannot automatically report the rightmost/last common divisor as the gcd; instead compare all common divisors and report the largest, or use a descending search that stops at the first common divisor."
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
            "text": "How would the divisors(n) algorithm change if it examined numbers from n down to 1?",
            "answer": {
              "answerKey": "Scan n,n−1,…,1; divisors are output in decreasing order.",
              "schoolMethod": "Initialize an empty list D. For j = n, n−1, …, 1, if n mod j = 0, append j to D. Because the scan is descending, D contains the divisors in decreasing order. The first divisor found is n and the last is 1."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "In the improved gcd algorithm, what happens if common divisors are examined from min(m,n) down to 1?",
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
            "text": "Use the improved Euclid division algorithm to compute (i) gcd(375,825), (ii) gcd(51000,81000), (iii) gcd(1789287,237656), (iv) gcd(2587392,157656).",
            "answer": {
              "answerKey": "(i) 75; (ii) 3000; (iii) 1; (iv) 24.",
              "schoolMethod": "(i) 825=2(375)+75; 375=5(75)+0, so gcd=**75**.\n\n(ii) 81000=1(51000)+30000; 51000=1(30000)+21000; 30000=1(21000)+9000; 21000=2(9000)+3000; 9000=3(3000)+0. Hence gcd=**3000**.\n\n(iii) Euclid’s algorithm gives successive remainders until the final non-zero remainder is 1, so gcd=**1** (the numbers are coprime).\n\n(iv) The successive remainders terminate at 24, with the next remainder 0, so gcd=**24**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Assume m≥n. Verify that d divides m and n if and only if d divides both n and m mod n.",
            "answer": {
              "answerKey": "The common divisors of (m,n) are exactly the common divisors of (n,m mod n).",
              "schoolMethod": "**Proof.** Write m=qn+r, where r=m mod n.\n\n(⇒) If d|m and d|n, then d divides m−qn=r. Hence d|n and d|r.\n\n(⇐) If d|n and d|r, then d divides qn+r=m. Hence d|m and d|n.\n\nBoth directions hold, so the two pairs have exactly the same common divisors; in particular, their gcds are equal."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Write an algorithm prime(n) to check whether n is prime, using divisors(n).",
            "answer": {
              "answerKey": "Return true exactly when divisors(n) has two elements.",
              "schoolMethod": "```text\nprime(n):\n    if n < 2: return false\n    D := divisors(n)\n    if length(D) = 2: return true\n    else: return false\n```\nA prime integer has exactly two positive divisors, 1 and itself. A number below 2 is not prime. Hence the test correctly distinguishes primes from composites."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Write an algorithm primedivisors(n) to compute the prime divisors of n.",
            "answer": {
              "answerKey": "Compute divisors and retain only primes.",
              "schoolMethod": "```text\nprimedivisors(n):\n    D := divisors(n)\n    P := empty list\n    for each d in D:\n        if prime(d): append d to P\n    return P\n```\nFor example, divisors(180) = [1,2,3,4,5,6,9,10,12,15,18,20,30,36,45,60,90,180], so primedivisors(180) = **[2,3,5]**. The algorithm checks every divisor and keeps precisely the prime ones."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "Write an algorithm for prime factorisation. (i) How can the prime factorisation 180=2²×3²×5 be represented? (ii) How can two prime factorizations be compared?",
            "answer": {
              "answerKey": "Represent as [(2,2),(3,2),(5,1)] or {2:2,3:2,5:1}; compare exponents.",
              "schoolMethod": "```text\nprimeFactorisation(n):\n    F := empty list of (prime, exponent) pairs\n    p := 2\n    while p*p <= n:\n        e := 0\n        while n mod p = 0:\n            n := n / p\n            e := e + 1\n        if e > 0: append (p,e) to F\n        p := p + 1\n    if n > 1: append (n,1) to F\n    return F\n```\n\n(i) Store 180=2²×3²×5 as **[(2,2),(3,2),(5,1)]**, meaning prime 2 has exponent 2, prime 3 exponent 2 and prime 5 exponent 1.\n\n(ii) For two numbers, compare the exponents of each prime, treating a missing prime as exponent 0. The gcd uses the **minimum** exponent for each prime; the lcm uses the **maximum** exponent. If every exponent in one factorisation is no larger than the corresponding exponent in the other, the first number divides the second."
            }
          }
        ]
      },
      {
        "id": "ex11.reflect",
        "title": "In-text and Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Explain why the right-to-left column addition algorithm works, and show how to adapt it to add decimal fractions.",
            "answer": {
              "answerKey": "The algorithm is valid because each column represents a power of ten and each carry is worth ten units of the next column. Example: 12.5 + 3.78 = 16.28.",
              "schoolMethod": "In base ten, 10 units of any place value equal 1 unit of the next place value. Adding a column gives a digit sum; write its remainder after division by 10 and carry the quotient to the next column. This preserves the total value at every step. For decimals, align decimal points and pad with zeros: 12.50 + 3.78 = 16.28. Equivalently, multiply both numbers by 100, add 1250 + 378 = 1628, then divide by 100 to obtain **16.28**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Use the divisor algorithm to list all positive divisors of 15, 135 and 775. What happens to the amount of work as the numbers grow?",
            "answer": {
              "answerKey": "Divisors: 15 → {1,3,5,15}; 135 → {1,3,5,9,15,27,45,135}; 775 → {1,5,25,31,155,775}.",
              "schoolMethod": "Check positive integers for exact divisibility and list each divisor once. Since 15 = 3 × 5, its divisors are 1, 3, 5, 15. Since 135 = 3³ × 5, its divisors are 1, 3, 5, 9, 15, 27, 45, 135. Since 775 = 5² × 31, its divisors are 1, 5, 25, 31, 155, 775. A naive search that tests every integer up to n requires work proportional to n; testing factor pairs only up to √n can reduce the number of candidates substantially."
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
    "exercises": [
      {
        "id": "ex12.1",
        "title": "Exercise Set 12.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Let ABCD be a quadrilateral. (i) List sides adjacent to AB and sides opposite AB. (ii) List angles adjacent to ∠A and opposite ∠A. (iii) Define opposite sides and opposite angles without naming vertices.",
            "answer": {
              "answerKey": "(i) AD, BC; CD. (ii) ∠B and ∠D; ∠C.",
              "schoolMethod": "(i) Sides adjacent to AB are **AD and BC**; the side opposite AB is **CD**.\n\n(ii) The angles adjacent to ∠A are **∠B and ∠D**; the angle opposite ∠A is **∠C**.\n\n(iii) Opposite sides are sides that do not share an endpoint. Opposite angles are angles whose vertices are not endpoints of the same side (the pair of non-adjacent vertex angles)."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": true,
            "text": "Precisely define the internal angle of a quadrilateral at a given vertex so that the definition also works for a non-convex quadrilateral.",
            "answer": {
              "answerKey": "It is the angle region bounded by the two adjacent sides that contains the opposite vertex; it may be reflex.",
              "schoolMethod": "At vertex A of quadrilateral ABCD, consider rays AB and AD. The **internal angle at A** is the angle swept from ray AB to ray AD through the region containing the opposite vertex C (equivalently, the side of the boundary designated as the quadrilateral’s interior). For a convex quadrilateral this is the smaller angle, less than 180°; at a reflex vertex of a non-convex quadrilateral it is the reflex angle, greater than 180°. This specification distinguishes the interior angle from the exterior angle."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "In quadrilateral ABCD, suppose (i) AB∥DC; (ii) AB=CD instead; (iii) ∠A=∠C instead. Can ABCD be non-convex in each case?",
            "answer": {
              "answerKey": "(i) No for a simple quadrilateral. (ii) Yes. (iii) Yes.",
              "schoolMethod": "(i) If opposite sides AB and DC are parallel in a simple quadrilateral, they lie on distinct parallel lines and the other two sides connect those lines without crossing. The four interior angles are all below 180°; hence ABCD is convex, not non-convex.\n\n(ii) **Yes.** Equal lengths of one pair of opposite sides alone do not force convexity. A concave four-sided figure can be constructed with AB and CD adjusted to have the same length while one interior angle is reflex.\n\n(iii) **Yes.** Equality of just one pair of opposite angles also does not force convexity. For instance, a concave quadrilateral can have ∠A=∠C=60° while its other angles are 190° and 50°; the angle sum is 360° and one angle is reflex."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "For non-collinear A, B, C, draw lines AB, BC and CA. For each of the seven regions they create, classify quadrilateral ABCD (vertices in order) as self-intersecting, non-convex or convex.",
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
            "text": "True or false: (i) A parallelogram with a right angle is a rectangle. (ii) A rhombus with perpendicular diagonals is a square. (iii) If the diagonals of a parallelogram are equal, it is a rectangle.",
            "answer": {
              "answerKey": "(i) True. (ii) False. (iii) True.",
              "schoolMethod": "(i) **True.** Adjacent angles in a parallelogram are supplementary. If one angle is 90°, its adjacent angle is also 90°, and then all four angles are right angles: it is a rectangle.\n\n(ii) **False.** The diagonals of every rhombus are perpendicular, but a rhombus need not be a square. A non-square rhombus is a counterexample. Add the condition that a diagonal’s length equals the other (or that one angle is 90°) to force a square.\n\n(iii) **True.** In a parallelogram, equal diagonals imply two adjacent triangles are congruent in a way that makes an angle a right angle; equivalently, a parallelogram with equal diagonals is a rectangle."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "The diagonal AC of parallelogram ABCD bisects ∠A. Show that it bisects ∠C and ABCD is a rhombus.",
            "answer": {
              "answerKey": "AC bisects ∠C and AB=BC=CD=DA.",
              "schoolMethod": "**Given:** ABCD is a parallelogram and ∠DAC=∠CAB.\n**To prove:** ∠DCA=∠ACB and ABCD is a rhombus.\n\nSince AB∥DC, ∠DCA=∠CAB (alternate interior angles). Given ∠CAB=∠DAC, so ∠DCA=∠DAC. Hence △ADC is isosceles and **AD=DC**. In a parallelogram, opposite sides are equal: AB=DC and AD=BC. Therefore AB=BC=CD=DA, so ABCD is a rhombus. Also, AD∥BC gives ∠DAC=∠ACB; together with ∠DAC=∠CAB and ∠DCA=∠CAB, we obtain ∠DCA=∠ACB. Hence AC bisects ∠C as required."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Answer Yes/No and supply an extra condition if needed: (i) If the diagonals of ABCD bisect its angles, must it be a rhombus? (ii) If its diagonals bisect each other at right angles, must it be a rhombus? (iii) If its diagonals are equal, must it be a rectangle?",
            "answer": {
              "answerKey": "(i) Yes. (ii) Yes. (iii) No; add that ABCD is a parallelogram.",
              "schoolMethod": "(i) **Yes.** If both diagonals bisect the opposite angles, the adjacent right triangles formed by the diagonals are congruent; this gives equal adjacent sides, and the quadrilateral is a rhombus.\n\n(ii) **Yes.** If the diagonals bisect each other, ABCD is a parallelogram. If they also meet at right angles, its adjacent sides form equal right triangles, so adjacent sides are equal; hence it is a rhombus.\n\n(iii) **No.** An isosceles trapezium has equal diagonals but need not be a rectangle. Add the condition that ABCD is a **parallelogram**; a parallelogram with equal diagonals is a rectangle."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "ABCD is a parallelogram with AB≠BC. Show that pairwise intersections of its four angle bisectors form a rectangle. Why assume AB≠BC?",
            "answer": {
              "answerKey": "The four intersection angles are 90°, so the inner quadrilateral is a rectangle; AB≠BC avoids a degenerate rhombus case.",
              "schoolMethod": "**Proof:** In a parallelogram, each pair of adjacent interior angles is supplementary. Let ∠A=α and ∠B=180°−α. Their internal bisectors make an angle α/2+(180°−α)/2=90°. The same calculation holds at each intersection of adjacent angle bisectors. Thus the quadrilateral formed by the four intersection points has four right angles and is a **rectangle**.\n\nIf AB=BC, the parallelogram is a rhombus. The bisectors of opposite angles then lie along the same diagonals, causing the “four intersection points” to coincide in pairs, so the inner rectangle degenerates. The assumption AB≠BC excludes that case."
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
            "text": "In △ABC, P, Q, R are midpoints of AB, AC, BC. (i) Show △PQR is congruent to △QPA and to two other triangles. (ii) Can △ABC be reconstructed from △PQR?",
            "answer": {
              "answerKey": "All four small triangles are congruent; PQR alone fixes the three side lengths of ABC, but not its orientation (which is irrelevant to congruence).",
              "schoolMethod": "(i) By the Midpoint Theorem, PQ=BC/2, PR=AC/2 and QR=AB/2. Also AP=PB=AB/2, AQ=QC=AC/2 and BR=RC=BC/2. Thus each of △APQ, △PBR, △QCR and △PQR has side lengths AB/2, AC/2, BC/2 in some order. By **SSS**, all four are congruent.\n\n(ii) Yes, up to congruence: construct a triangle whose sides are twice the corresponding side lengths of △PQR; its side lengths are AB, AC and BC. By SSS, this reconstructed △A′B′C′ is congruent to △ABC."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "In △ABC, M and N are midpoints of AB and AC. For any D on BC, show that MN bisects AD.",
            "answer": {
              "answerKey": "If MN meets AD at P, then AP=PD.",
              "schoolMethod": "**Given:** M and N are the midpoints of AB and AC; D lies on BC. Let AD meet MN at P.\n**To prove:** AP=PD.\n\nBy the Midpoint Theorem in △ABC, MN∥BC. Since D lies on BC, MN∥BD. In △ABD, M is the midpoint of AB and the line MP (part of MN) is parallel to BD. By the **converse of the Midpoint Theorem**, P is the midpoint of AD. Thus AP=PD."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "ABCD is a trapezium with AB∥DC and AB≠DC. G and H are the midpoints of AC and BD. Prove GH∥AB. Why assume AB≠DC?",
            "answer": {
              "answerKey": "GH is parallel to both bases; AB≠DC avoids the parallelogram case where G=H.",
              "schoolMethod": "**Proof:** Draw diagonal AC. In △ABC, G and H are not both midpoints of the same triangle; instead use coordinates or a standard trapezium mid-segment argument. Set A=(0,h), B=(b,h), D=(d,0), C=(d+c,0), where AB=b and DC=c. Then G=((d+c)/2,h/2) and H=((b+d)/2,h/2). They have the same y-coordinate, so **GH∥AB∥DC**.\n\nIf AB=DC while the bases are parallel, ABCD is a parallelogram. Its diagonals bisect each other, so G=H and GH is not a non-zero segment. The condition prevents this degenerate case."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Suppose the midpoints of sides AB, BC, CD and DA of a quadrilateral ABCD are P, Q, R and S respectively. (i) Show that PR and QS bisect each other. (ii) Show that if AC = BD, then PR and QS are perpendicular. Is the converse true?",
            "answer": {
              "answerKey": "PR and QS bisect each other. Also, PR ⟂ QS if and only if AC = BD; therefore the converse is true.",
              "schoolMethod": "**(i) Given:** P, Q, R, S are the midpoints of AB, BC, CD and DA.\n\nBy the Midpoint Theorem in △ABC and △ADC, PQ ∥ AC and PQ=AC/2; similarly SR ∥ AC and SR=AC/2. Hence PQ ∥ SR and PQ=SR. Likewise, QR ∥ BD and QR=BD/2, while PS ∥ BD and PS=BD/2. Therefore PQRS is a parallelogram (both pairs of opposite sides are parallel). The diagonals of a parallelogram bisect each other, so **PR and QS bisect each other**.\n\n**(ii)** If AC=BD, then PQ=AC/2=BD/2=QR. Thus the parallelogram PQRS has equal adjacent sides and is a rhombus. The diagonals of a rhombus are perpendicular, so PR ⟂ QS.\n\n**Converse:** Suppose PR ⟂ QS. Since PR and QS bisect each other, PQRS is a parallelogram whose diagonals are perpendicular; hence it is a rhombus. Thus PQ=QR. Since PQ=AC/2 and QR=BD/2, we obtain AC/2=BD/2, so **AC=BD**. Hence the converse is true."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "Suppose PQRS is the Varignon parallelogram of quadrilateral ABCD. (i) Copy only PQRS onto another paper. Show how to reconstruct a congruent copy A′B′C′D′ of ABCD. (ii) Justify that the quadrilateral constructed is congruent to ABCD. (iii) Show that if PQRS is a square, then AC and BD are perpendicular and equal. Prove the converse.",
            "answer": {
              "answerKey": "(i)–(ii) As stated, PQRS alone does not determine a unique congruence class for ABCD, so an arbitrary original quadrilateral cannot always be reconstructed congruently without extra information. (iii) PQRS is a square if and only if AC=BD and AC ⟂ BD.",
              "schoolMethod": "**(i)–(ii) Important mathematical qualification.** Copying only the Varignon parallelogram PQRS does not, in general, determine a unique quadrilateral ABCD up to congruence. The construction “copy △APS” would require knowing AP and AS or the position of A, but neither is specified by PQRS alone.\n\nA counterexample shows the underdetermination. The square with vertices A=(−2,0), B=(0,2), C=(2,0), D=(0,−2) has midpoint quadrilateral with vertices (−1,1), (1,1), (1,−1), (−1,−1), a square of side 2. The non-square convex quadrilateral A=(−2,0), B=(0,1), C=(2,0), D=(0,−3) has midpoint quadrilateral (−1,0.5), (1,0.5), (1,−1.5), (−1,−1.5), also a square of side 2, yet its side lengths are √5, √5, √13, √13 instead of 2√2, 2√2, 2√2, 2√2. Therefore these two original quadrilaterals are not congruent, although their Varignon parallelograms are congruent. More information (for example, a diagonal-intersection position or one additional appropriate measurement) is needed for a unique reconstruction.\n\n**(iii) Square condition.** By the Midpoint Theorem, adjacent sides of PQRS are parallel to the diagonals AC and BD of ABCD and have lengths AC/2 and BD/2. If PQRS is a square, its adjacent sides are equal and perpendicular, so AC=BD and AC ⟂ BD. Conversely, if AC=BD and AC ⟂ BD, adjacent sides of PQRS are equal and perpendicular. Since PQRS is a parallelogram, it is then a square."
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
            "text": "Justify why the plane cannot be tiled using only regular pentagons.",
            "answer": {
              "answerKey": "Each regular pentagon has interior angle 108°, and no integer multiple of 108° equals 360°.",
              "schoolMethod": "The interior angle of a regular n-gon is (n−2)×180°/n. For n=5, it is 3×180°/5=**108°**. At a point in a tiling, the angles of the tiles around that point must add to 360°. But 360°/108°=10/3 is not an integer. Three pentagons leave 36° uncovered, while four overlap. Therefore regular pentagons alone cannot tile the plane."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Draw a non-convex 4-gon DART and show how copies of DART tile the plane by the two methods discussed. Which method do you prefer?",
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
            "text": "Using a fact about parallelograms, show how to tile the plane using any given triangle. (Hint: Use the parallelogram tiling described in the introduction.)",
            "answer": {
              "answerKey": "Two congruent copies of any triangle form a parallelogram; parallelograms tile the plane, so the triangle also tiles the plane.",
              "schoolMethod": "Take △ABC and a congruent copy. Rotate the copy through 180° about the midpoint M of side BC. The vertices B and C swap, and M is also the midpoint of the segment joining A to its image A′. Thus the diagonals AA′ and BC of quadrilateral ABA′C bisect each other at M, so ABA′C is a parallelogram. Parallelograms tile the plane by translations. Each parallelogram is split by a diagonal into two copies of △ABC; therefore copies of the given triangle tile the plane without gaps or overlaps."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Mark the midpoint of the line drawn on the paper in Fig. 12.33, given that the horizontal lines are equally spaced. Justify your answer.",
            "answer": {
              "answerKey": "The midpoint is where the slanted segment crosses the fourth horizontal line (halfway between its endpoints on the second and sixth lines).",
              "schoolMethod": "The endpoints of the slanted segment lie on the second and sixth horizontal rules. Mark M where the segment crosses the fourth rule, halfway between those two rules. To justify this, draw a perpendicular through M to the horizontal rules, meeting the second and sixth rules at U and V. Equal spacing gives MU=MV. The triangles at the two ends, △MUX and △MVY (where X,Y are the segment endpoints), have a right angle, equal vertical angles at M, and MU=MV; hence they are congruent by ASA. Therefore MX=MY and **M is the midpoint** of the slanted segment."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "A self-intersecting quadrilateral ABCD has AB and CD intersecting at E. Show that ∠A+∠B+∠C+∠D < 360°. Can the sum equal 2°?",
            "answer": {
              "answerKey": "∠A+∠B+∠C+∠D = 360°−2∠AED, so the sum is less than 360°. Yes: choose ∠AED=179° to obtain 2°.",
              "schoolMethod": "Since E lies on AB and CD, the crossing divides the figure into triangles △EAD and △EBC. Let x=∠AED. The vertically opposite angle ∠BEC also equals x. In △EAD, ∠A+∠D=180°−x; in △EBC, ∠B+∠C=180°−x. Adding gives ∠A+∠B+∠C+∠D=360°−2x<360°, because x>0°. To make the sum 2°, set 360°−2x=2°, giving x=179°. Choose the two crossing lines so that the relevant angle is 179° (the adjacent angle is 1°), and place A,B,C,D on the two lines in the order shown. Then the vertex-angle sum is exactly **2°**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "In parallelogram ABCD, points P and Q lie on diagonal BD such that DP=BQ. Show that APCQ is a parallelogram.",
            "answer": {
              "answerKey": "The diagonals AC and PQ bisect each other at O; hence APCQ is a parallelogram.",
              "schoolMethod": "Let O be the intersection of diagonals AC and BD. Since ABCD is a parallelogram, OA=OC and OB=OD. Given DP=BQ, OP=OD−DP and OQ=OB−BQ. Since OD=OB and DP=BQ, OP=OQ. Thus O is the midpoint of both AC and PQ. These are the diagonals of quadrilateral APCQ; a quadrilateral whose diagonals bisect each other is a parallelogram. Hence **APCQ is a parallelogram**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "A right-triangle-shaped paper cutout is folded so that point A touches point B (Fig. 12.35). Show that the crease can be used to find the midpoint of both AB and AC.",
            "answer": {
              "answerKey": "The crease is the perpendicular bisector of AB; since it is parallel to BC and passes through the midpoint of AB, it also passes through the midpoint of AC.",
              "schoolMethod": "Let the crease meet AB at M and AC at N. Folding A onto B makes every point of the crease equidistant from A and B; therefore the crease is the perpendicular bisector of AB. Hence AM=MB and crease MN⊥AB. Since △ABC is right-angled at B, BC⊥AB as well, so MN∥BC. In △ABC, a line through midpoint M of AB parallel to BC meets AC at its midpoint (Converse of the Midpoint Theorem). Therefore AN=NC. The same crease identifies the midpoints of **both AB and AC**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "The medians of △ABC meet at centroid M and divide the triangle into six pieces. (i) Show how to assemble these six pieces into three congruent triangles, and find their side lengths. (ii) Repeat the procedure with each assembled triangle and show that the resulting nine triangles have sides AB/3, BC/3 and AC/3. (iii) Show how to cut and reassemble △ABC into two congruent triangles. (Use median AP and then a median of △APB.)",
            "answer": {
              "answerKey": "(i) Three congruent triangles with sides 2/3 of the three medians. (ii) Nine congruent triangles, each with side lengths AB/3, BC/3, AC/3. (iii) Three pieces can be reassembled into two congruent triangles.",
              "schoolMethod": "**(i)** Let P,Q,R be the midpoints of BC, CA, AB. The centroid theorem gives AM=2MP, BM=2MQ and CM=2MR. Rotate △MPB by 180° about P. Since PB=PC, B lands on C and M lands on M′ with P the midpoint of MM′. Because B,P,C are collinear, M,P,M′ are collinear; the moved △MPB joins △MPC to form triangle △MM′C. Its sides are MM′=2MP=AM, M′C=MB and MC. Since MB=2MQ and MC=2MR, the lengths are the three centroid-to-vertex segments AM, BM, CM (equivalently, two-thirds of the corresponding medians). Pair the other two pairs around Q and R in the same way. All three resulting triangles have the same three side lengths, so they are congruent by SSS.\n\n**(ii)** In an assembled triangle from part (i), the three medians have lengths BC/2, CA/2 and AB/2: this follows from the parallelograms formed by the half-turn construction and the midpoint relations. Reapplying part (i) makes the sides of each of its three pieces two-thirds of those medians, namely (2/3)(AB/2)=AB/3, (2/3)(BC/2)=BC/3 and (2/3)(AC/2)=AC/3. Doing this for each of the three assembled triangles produces **nine congruent triangles** with those side lengths.\n\n**(iii)** First cut along median AP, producing △APB and △APC, with P the midpoint of BC. In △APB, let K be the midpoint of AB and draw median PK. Cut along PK. Rotate △PKB by 180° about K: B maps to A, and P maps to P′, with K the midpoint of PP′. The pieces △PKA and the rotated △PKB form △APP′ because P,K,P′ are collinear. Its sides are AP, AP′=BP=PC and PP′=2PK=AC (by the Midpoint Theorem in △ABC). Thus △APP′ and △APC have the same three side lengths AP, PC and AC, so they are congruent by SSS. This gives two congruent triangles after cutting and rearranging the three pieces."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "Let ABCD be a trapezium with AB∥DC. E is the midpoint of AD, and a line through E meets BC at F. (i) If EF∥AB, prove that F is the midpoint of BC and that EF=(AB+CD)/2. (ii) If F is the midpoint of BC, prove that EF∥AB.",
            "answer": {
              "answerKey": "(i) F is the midpoint of BC and EF=(AB+CD)/2. (ii) EF∥AB.",
              "schoolMethod": "**(i)** Draw diagonal AC and let EF meet it at G. In △ADC, E is the midpoint of AD and EG∥DC, so by the Converse of the Midpoint Theorem G is the midpoint of AC and EG=DC/2. In △CAB, G is the midpoint of CA and GF∥AB, so F is the midpoint of CB and GF=AB/2. Hence EF=EG+GF=DC/2+AB/2=(AB+CD)/2.\n\n**(ii)** Let M be the midpoint of BD. In △DAB, E and M are the midpoints of DA and DB, so EM∥AB. In △DBC, M and F are the midpoints of DB and BC, so MF∥DC∥AB. Since EM and MF pass through M and are both parallel to AB, they are the same line. Therefore E,M,F are collinear and **EF∥AB**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "The diagonals AC and BD of parallelogram ABCD intersect at O. A line through O meets AB at P and CD at Q. Show that O is the midpoint of PQ.",
            "answer": {
              "answerKey": "OP=OQ; therefore O is the midpoint of PQ.",
              "schoolMethod": "Consider △OAP and △OCQ. OA=OC because diagonals of a parallelogram bisect each other. Since AB∥CD, ∠OAP=∠OCQ (alternate interior angles), and ∠AOP=∠COQ (vertically opposite angles). Thus △OAP≅△OCQ by ASA. Hence OP=OQ. As P,O,Q lie on the same line, **O is the midpoint of PQ**."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": true,
            "text": "ABCD is a trapezium with parallel sides AD=3 cm and BC=5 cm. E and F are the midpoints of the non-parallel sides. Find the ratio of the areas of quadrilaterals AEFD and EBCF.",
            "answer": {
              "answerKey": "Area(AEFD) : Area(EBCF) = 7 : 9.",
              "schoolMethod": "By the trapezium midpoint theorem, EF∥AD∥BC and EF=(AD+BC)/2=(3+5)/2=4 cm. Let h be the distance between the two parallel sides. Since E and F are midpoints of the non-parallel sides, EF lies halfway between the bases, so each smaller trapezium has height h/2.\n\nArea(AEFD)=½(AD+EF)(h/2)=½(3+4)(h/2)=7h/4.\nArea(EBCF)=½(EF+BC)(h/2)=½(4+5)(h/2)=9h/4.\n\nTherefore the ratio is (7h/4):(9h/4)=**7:9**."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "text": "Consider four points A, B, C, D in a plane with no three collinear. (i) How many different quadrilaterals can be formed if self-intersecting and non-convex quadrilaterals are allowed? (ii) How many are self-intersecting and how many are convex?",
            "answer": {
              "answerKey": "There are 3 different cyclic orders. If the points are in convex position, 1 quadrilateral is convex and 2 are self-intersecting. If one point lies inside the triangle of the other three, all 3 are non-convex and simple; none is convex or self-intersecting.",
              "schoolMethod": "**(i)** Fix A as the first vertex. The remaining three points can be arranged in 3!=6 orders, but traversing a quadrilateral in reverse gives the same four sides. Thus the number of distinct quadrilaterals is 6/2=**3** (for example, ABCD, ABDC and ACBD).\n\n**(ii)** There are two configurations. If all four points are vertices of their convex hull, only the order around the outside is convex; the other two cyclic orders cross, so there is 1 convex and 2 self-intersecting quadrilaterals. If one point lies inside the triangle formed by the other three, each of the 3 orders gives a simple concave quadrilateral; none is convex or self-intersecting."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "text": "Suppose P lies on side AB of △ABC and PQ∥BC meets AC at Q. Take AP=1 and AQ=√5. (i) If PB=2, find QC. (ii) If PB=1/3, find QC. (iii) If PB=2/3, find QC. (iv) Show that if AP/PB is rational, then AP/PB=AQ/QC.",
            "answer": {
              "answerKey": "(i) QC=2√5. (ii) QC=√5/3. (iii) QC=2√5/3. (iv) If AP/PB=m/n in positive integers, equal-intercept construction gives AQ/QC=m/n.",
              "schoolMethod": "Because PQ∥BC, equally spaced subdivisions on AB produce equally spaced corresponding subdivisions on AC (Intercept Theorem; it can be proved stepwise using the converse of the Midpoint Theorem).\n\n**(i)** AP=1 and PB=2, so AB has 3 equal unit lengths: AP is 1 part and PB is 2 parts. Correspondingly AQ:QC=1:2. Since AQ=√5, QC=2√5.\n\n**(ii)** PB=1/3 and AP=1, so AP:PB=3:1. Thus AQ:QC=3:1, and QC=AQ/3=√5/3.\n\n**(iii)** PB=2/3, so AP:PB=1:(2/3)=3:2. Hence AQ:QC=3:2 and QC=(2/3)AQ=2√5/3.\n\n**(iv)** Let AP/PB=m/n for positive integers m,n. Divide AP into m equal parts and PB into n equal parts, all of common length. Through the division points draw lines parallel to BC. By repeated use of the midpoint/intercept result, the corresponding parts of AC are equal. The m parts comprising AQ therefore have the same unit length as each of the n parts comprising QC, so AQ/QC=m/n=AP/PB."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "text": "(i) In parallelogram ABCD, M and N are the midpoints of AB and CD. Show that DM and BN trisect diagonal AC. (ii) Use this result to describe one construction for trisecting any segment PQ. Then give two other constructions: one using the rational-ratio result of Exercise 11 and one using the Centroid Theorem.",
            "answer": {
              "answerKey": "The two intersections of DM and BN with AC divide AC into three equal parts. A segment can be trisected using this parallelogram construction, equal parallel intercepts, or the Centroid Theorem.",
              "schoolMethod": "**(i)** Since M,N are midpoints, MB=AB/2 and DN=CD/2. In a parallelogram AB=CD, so MB=DN; also MB∥DN. Therefore MBND is a parallelogram and DM∥BN. Let DM meet AC at X, and BN meet AC at Y. In △ABY, M is the midpoint of AB and MX∥BY, so X is the midpoint of AY: AX=XY. In △CDX, N is the midpoint of CD and NY∥DX, so Y is the midpoint of CX: CY=YX. Hence **AX=XY=YC**.\n\n**(ii), Method 1 (parallelogram):** Make PQ a diagonal of a parallelogram PBQD. Let O be the midpoint of PQ; choose B,D on any line through O with OB=OD and construct the parallelogram. Find M and N, the midpoints of PB and QD; the lines DM and BN meet PQ at its trisection points by part (i).\n\n**Method 2 (parallel intercepts):** Draw a ray from P and mark three consecutive equal segments on it, ending at X₃. Join X₃ to Q. Through the first two marks draw lines parallel to X₃Q; by the equal-intercept theorem they cut PQ into three equal parts.\n\n**Method 3 (centroid):** Construct △PBC so that PQ is a median (choose B and C on a line through Q with QB=QC). Draw a second median from B to the midpoint of PC, meeting PQ at centroid G. The centroid theorem gives PG:GQ=2:1, so GQ=PQ/3. Bisect PG to obtain the other trisection point."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": false,
            "text": "Is the Midpoint Theorem for Quadrilaterals (Varignon’s Theorem) true when ABCD is non-convex? What about when it is self-intersecting? (i) Explain. (ii) When does the Varignon parallelogram collapse to a single segment? (iii) Does the reasoning still apply if ABCD is non-planar?",
            "answer": {
              "answerKey": "(i) Yes for non-convex and self-intersecting quadrilaterals. (ii) When AC∥BD, the midpoint parallelogram degenerates to a segment. (iii) Yes; the midpoint quadrilateral remains planar and is a parallelogram.",
              "schoolMethod": "Let P,Q,R,S be the midpoints of AB, BC, CD, DA. The proof of Varignon’s theorem uses only the Midpoint Theorem in the four triangles formed by the diagonals; it does not use convexity. Thus PQ∥AC∥SR and PQ=SR=AC/2, while QR∥BD∥PS and QR=PS=BD/2. This proves PQRS is a parallelogram for non-convex and self-intersecting figures as well.\n\nThe parallelogram collapses when its adjacent sides PQ and QR are parallel, that is, when AC∥BD. This occurs in a special crossed configuration.\n\nThe same vector/midpoint reasoning works in space: opposite midpoint segments remain equal and parallel, so the four midpoint points are coplanar and form a planar parallelogram even if A,B,C,D themselves are non-coplanar."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": false,
            "text": "Let P, Q, R, S lie on sides AB, BC, CD and DA of a quadrilateral ABCD respectively. If PQRS is a parallelogram, must P, Q, R and S be the midpoints of their respective sides? Justify your answer.",
            "answer": {
              "answerKey": "No. In a square of side 4, choosing each point one unit from the next corner produces a smaller square PQRS, although no chosen point is a midpoint.",
              "schoolMethod": "Take square ABCD of side 4. Let P be on AB with AP=1, Q on BC with BQ=1, R on CD with CR=1, and S on DA with DS=1. Each corner triangle, such as △SAP, is right-angled with legs 1 and 3. These four triangles are congruent by SAS, so their opposite hypotenuses satisfy PQ=QR=RS=SP. The four segments also have equal side directions by the symmetry of the square; hence PQRS is a square and therefore a parallelogram. But AP=1 while AB/2=2, so P is not a midpoint; similarly for Q,R,S. Thus the converse is **false**."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": false,
            "text": "(i) Complete a proof of the Midpoint Theorem by extending PQ beyond Q to S. How far should PQ be extended, and how does this help prove △APQ≅△CSQ? (ii) Give a similar proof of the converse of the Midpoint Theorem (Theorem 7), starting by extending PQ to a suitable point S.",
            "answer": {
              "answerKey": "(i) Extend to S so that QS=PQ; then △APQ≅△CSQ and PBCS is a parallelogram. (ii) For the converse, extend to S so that PS=BC; again PBCS is a parallelogram and Q is the midpoint of AC.",
              "schoolMethod": "**(i)** Given P and Q are the midpoints of AB and AC, extend PQ beyond Q to S so that QS=PQ. Then Q is the midpoint of PS. In △APQ and △CSQ, AQ=CQ, PQ=SQ and ∠AQP=∠CQS (vertically opposite), so the triangles are congruent by SAS. Thus CS=AP=PB and CS∥AB∥PB. Since one pair of opposite sides of PBCS is equal and parallel, PBCS is a parallelogram. Therefore PS∥BC and PS=BC. As PS=PQ+QS=2PQ, we obtain PQ∥BC and PQ=BC/2.\n\n**(ii)** Now P is the midpoint of AB and PQ∥BC. Extend PQ to S so that PS=BC. Since PS∥BC and PS=BC, PBCS is a parallelogram, so CS∥AB and CS=PB=AP. Compare △APQ and △CSQ: AP=CS, ∠PAQ=∠SCQ and ∠APQ=∠CSQ (alternate angles). They are congruent by ASA; hence AQ=CQ, so Q is the midpoint of AC. Also PQ=PS/2=BC/2."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": false,
            "text": "Review the properties of rhombuses, rectangles and squares learned earlier. State some converses and decide whether each converse is true.",
            "answer": {
              "answerKey": "Examples: (a) diagonals bisecting each other at right angles ⇒ rhombus (true); (b) diagonals bisecting the angles ⇒ rhombus (true); (c) perpendicular diagonals ⇒ rhombus (false); (d) equal diagonals ⇒ rectangle (false in general); (e) equal, bisecting diagonals ⇒ rectangle (true); (f) equal perpendicular diagonals ⇒ square (false in general); (g) equal, perpendicular diagonals that bisect each other ⇒ square (true).",
              "schoolMethod": "Possible converses (many answers are valid):\n\n**Rhombus.** (a) If the diagonals of a quadrilateral bisect each other at right angles, then it is a rhombus — **true**: bisection makes a parallelogram; perpendicular diagonals make its adjacent sides equal. (b) If both diagonals bisect the angles, it is a rhombus — **true**, by congruent triangles about each diagonal. (c) If the diagonals are perpendicular, it is a rhombus — **false**; a kite can have perpendicular diagonals without all four sides equal.\n\n**Rectangle.** (d) If the diagonals are equal, it is a rectangle — **false**; an isosceles trapezium has equal diagonals but is not a rectangle. (e) If the diagonals are equal and bisect each other, it is a rectangle — **true**: bisection gives a parallelogram, and a parallelogram with equal diagonals is a rectangle.\n\n**Square.** (f) If diagonals are equal and perpendicular, it is a square — **false** without bisection (a suitable kite is a counterexample). (g) If diagonals are equal, perpendicular and bisect each other, it is a square — **true**: the figure is both a rectangle and a rhombus, hence a square."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "isHard": true,
            "text": "Show that the sum of the internal angles of a non-planar quadrilateral is always less than 360°. Can a non-planar quadrilateral ABCD have ∠A+∠B+∠C+∠D=2°? (Hint: Treat diagonal AC as a hinge around which △ABC and △ADC rotate.)",
            "answer": {
              "answerKey": "For a genuinely folded quadrilateral, the angle sum is less than 360°. Yes; by choosing two very thin triangles and continuously rotating one about AC, the sum can be made exactly 2°.",
              "schoolMethod": "Start with a flat convex quadrilateral ABCD whose angle sum is 360°, and treat AC as a hinge. Keep △ADC fixed while rotating △ABC out of its plane. The angles ∠B and ∠D remain unchanged because each belongs to a rigid triangle. The angles at A and C decrease: as B moves from the opposite side of AC towards D’s side, the distance BD decreases; with AB and AD fixed, the angle between them (∠A) decreases, and similarly ∠C decreases. Therefore, once the quadrilateral is genuinely non-planar, the total is strictly less than 360°.\n\nTo obtain 2°, choose two very thin triangles on AC, so the limiting sum during near-complete folding can be made smaller than 2°. Initially the flat sum is 360°; during rotation the sum changes continuously. By the intermediate value property, at some non-flat position the sum is exactly **2°**."
            }
          },
          {
            "id": "q18",
            "number": "18",
            "isHard": false,
            "text": "A third method to tile the plane with a quadrilateral SOME uses translated copies (Fig. 12.42). The diagonals EO and E′O′ are collinear and O=E′. (i) Prove that the slid copy matches SOME exactly using four parallelograms. (ii) Explain how repeating the procedure in both diagonal directions gives a 3×3 arrangement and then tiles the plane.",
            "answer": {
              "answerKey": "Sliding by the vector from E to O produces an exact translated copy; four parallelograms establish the matching sides. Repetition along both diagonals makes a grid with congruent quadrilaterals and congruent gaps.",
              "schoolMethod": "**(i)** Slide a cutout of SOME by the same vector \\(\\overrightarrow{EO}\\), so E maps to E′=O and O maps to O′. Every point shifts by the same vector; hence SS′∥EO, MM′∥EO and each has length EO. Together with E′=O and the collinearity of E,O,O′, the four quadrilaterals ESS′E′, OSS′O′, EMM′E′ and OMM′O′ each have one pair of opposite sides equal and parallel. Each is therefore a parallelogram. Their other sides are equal and parallel too, showing that each side of S′O′M′E′ matches the corresponding side of SOME. Thus the two quadrilaterals coincide exactly after translation.\n\n**(ii)** Translate copies in both directions along diagonals EO and SM. Four new copies fit around the initial quadrilateral, meeting it only at vertices. Repeat outward from each of those copies to make a 3×3 grid and continue. Each blank region between four translated copies is another congruent quadrilateral (possibly rotated 180°), so the copies and the gaps cover the plane exactly without overlap or uncovered region."
            }
          },
          {
            "id": "q19",
            "number": "19",
            "isHard": false,
            "text": "Is there a quadrilateral with given side lengths? (i) For positive a≤b≤c, state and justify the condition for a triangle with sides a,b,c. (ii) If three side lengths of a quadrilateral are 2, 5 and 11, can the fourth be 100, 10 or 1? What values are possible? (iii) State a general condition for side lengths a,b,c,d to form a quadrilateral.",
            "answer": {
              "answerKey": "(i) A triangle exists exactly when a+b>c. (ii) 100: no; 10: yes; 1: no; possible fourth side x satisfies 4<x<18. (iii) The longest side must be shorter than the sum of the other three.",
              "schoolMethod": "**(i)** Draw a segment of length c. Draw a circle of radius a at one endpoint and radius b at the other. They meet away from the segment exactly when a+b>c; equality gives a degenerate straight line and a+b<c gives no intersection.\n\n**(ii)** Let the fourth length be x. A quadrilateral can exist only if every side is shorter than the sum of the other three. Thus 11<2+5+x, giving x>4, and x<2+5+11=18. Hence the range is **4<x<18**. So 100 is impossible, 10 is possible, and 1 is impossible.\n\n**(iii)** For four positive lengths, a non-degenerate quadrilateral exists exactly when the largest length is less than the sum of the other three. Necessity follows because the other three sides must form a broken path between the endpoints of the longest side. For sufficiency, choose a diagonal length that satisfies the triangle inequalities for two triangles using the four sides, then place those triangles on opposite sides of the diagonal; the resulting quadrilateral has the required four side lengths."
            }
          },
          {
            "id": "q20",
            "number": "20",
            "isHard": false,
            "text": "Counting diagonals of a polygon. (i) Define a diagonal and make a table of the number of diagonals for n=3,4,5,6,7,8. (ii) Find a formula for an n-gon, and state how many diagonals are added when the number of sides increases by one.",
            "answer": {
              "answerKey": "Counts for n=3,4,5,6,7,8 are 0,2,5,9,14,20. D(n)=n(n−3)/2, and adding one side to an n-gon adds n−1 diagonals.",
              "schoolMethod": "A **diagonal** is a segment joining two non-adjacent vertices. The counts are: n=3→0, n=4→2, n=5→5, n=6→9, n=7→14, n=8→20.\n\nFrom each of n vertices, diagonals can be drawn to n−3 other vertices (exclude itself and its two neighbours). This gives n(n−3) diagonal-ends, but each diagonal has two ends, so \\(D(n)=\\frac{n(n-3)}2\\).\n\nIncreasing the number of sides from n to n+1 adds n−1 diagonals: the new vertex joins to n−2 old non-neighbours, and the old side between its two neighbours becomes one new diagonal. Algebraically, D(n+1)−D(n)=[(n+1)(n−2)−n(n−3)]/2=n−1."
            }
          },
          {
            "id": "q21",
            "number": "21",
            "isHard": false,
            "text": "Sum of angles of a polygon. Find the sums for n=3,4,5,6,7,8 and prove a formula for the interior-angle sum of a planar, non-self-intersecting n-gon.",
            "answer": {
              "answerKey": "The sums are 180°, 360°, 540°, 720°, 900°, 1080°, respectively; the general sum is (n−2)×180°.",
              "schoolMethod": "Join one vertex of a convex n-gon to all its non-adjacent vertices. The diagonals divide the polygon into n−2 non-overlapping triangles. Each triangle has angle sum 180°, and together their angles make precisely the polygon’s internal angles. Therefore the sum is \\((n-2)\times180^\\circ\\). For n=3,4,5,6,7,8 the values are **180°, 360°, 540°, 720°, 900°, 1080°**."
            }
          },
          {
            "id": "q22",
            "number": "22",
            "isHard": false,
            "text": "Multiple converses to the Midpoint Theorem. Let P lie on AB and Q on AC in △ABC. Use (P MID): P is midpoint of AB; (Q MID): Q is midpoint of AC; (PRLL): PQ∥BC; (HALF): PQ=BC/2. (i) Prove that (PRLL)+(HALF) imply (P MID)+(Q MID). (ii) Write the converse of the Midpoint Theorem while retaining P MID as an assumption. (iii) If P MID and HALF hold, can Q MID and/or PRLL be concluded?",
            "answer": {
              "answerKey": "(i) Yes: similarity gives AP=PB and AQ=QC. (ii) If P is midpoint of AB and PQ∥BC, then Q is midpoint of AC (and PQ=BC/2). (iii) No: P midpoint and PQ=BC/2 alone imply neither Q is midpoint nor PQ∥BC.",
              "schoolMethod": "**(i)** Since PQ∥BC, △APQ∼△ABC. The ratio PQ/BC=1/2 therefore gives AP/AB=AQ/AC=1/2. Thus AP=PB and AQ=QC, so P and Q are the midpoints.\n\n**(ii)** The statement is: “If P is the midpoint of AB and the line through P parallel to BC meets AC at Q, then Q is the midpoint of AC.” By Theorem 7, PQ=BC/2 as well.\n\n**(iii)** Neither conclusion follows. A counterexample: take A=(0,0), B=(2,0), C=(3,1) and P=(1,0), which is the midpoint of AB. Let Q=(0.3,0.1), on AC. Then PQ²=(0.3−1)²+(0.1−0)²=0.50, so PQ=√0.5=√2/2; BC=√2 and hence PQ=BC/2. But Q is not the midpoint of AC (that would be (1.5,0.5)) and the slope of PQ is −1/7 while the slope of BC is 1, so PQ is not parallel to BC. Thus P MID and HALF alone imply neither Q MID nor PRLL."
            }
          },
          {
            "id": "q23",
            "number": "23",
            "isHard": false,
            "text": "Validity of tiling methods. Give a reasoned proof that each of the three methods for tiling the plane with a given quadrilateral covers the whole plane without gaps or overlaps.",
            "answer": {
              "answerKey": "The half-turn method matches complete edges; the vertex method uses the 360° angle sum; the translation method builds congruent translated cells and congruent gaps.",
              "schoolMethod": "**Method 1: half-turn about a side midpoint.** Rotate a copy of the quadrilateral by 180° about the midpoint of a side. The side endpoints swap, so the two copies share the complete side exactly. Repeating at each exposed side gives an edge-to-edge pattern. Around each meeting vertex the four interior angles of the quadrilateral occur once each; their sum is 360°, so there is neither a gap nor an overlap.\n\n**Method 2: fit four copies around a vertex.** Place four copies so that their four interior angles meet at one point. A quadrilateral’s angles sum to 360°, so they fill the full turn exactly. Continue the pattern by matching copies along full sides using half-turns; every local gap is filled and no two interiors overlap.\n\n**Method 3: translation grid.** The construction in Exercise 18 shows that a copy translated by a diagonal vector matches exactly. Repeating the same translation in both diagonal directions creates a grid of translated copies. Each remaining gap is a congruent, turned copy of the original quadrilateral, so the copies and gaps fill the plane without overlap."
            }
          },
          {
            "id": "q24",
            "number": "24",
            "isHard": false,
            "text": "What fraction of the square is shaded in Fig. 12.43?",
            "answer": {
              "answerKey": "The shaded fraction is 1/5 of the square.",
              "schoolMethod": "Let the square have side 1, with corners (0,0), (1,0), (1,1), (0,1). The marked points are the midpoints of all four sides. The four lines shown have equations (after matching them to the figure): y=1−2x, y=1/2+x/2, y=2−2x and y=x/2. Their consecutive intersections forming the shaded parallelogram are (1/5,3/5), (3/5,4/5), (4/5,2/5) and (2/5,1/5). Adjacent side vectors can be taken as (2/5,1/5) and (1/5,−2/5). The parallelogram area is the absolute determinant: |(2/5)(−2/5)−(1/5)(1/5)|=|−4/25−1/25|=5/25=1/5. The square’s area is 1, so the shaded fraction is **1/5**."
            }
          }
        ]
      },
      {
        "id": "ex12.reflect",
        "title": "In-text and Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": true,
            "text": "Can every quadrilateral tile the plane? Explain why copies of any simple quadrilateral can cover the plane without gaps or overlaps.",
            "answer": {
              "answerKey": "Yes. Every simple quadrilateral can tile the plane.",
              "schoolMethod": "Take a copy of the quadrilateral and rotate a matching copy through 180° about the midpoint of one side; that side matches exactly because its endpoints are exchanged. Repeat this construction on the other sides and continue the pattern. At a vertex, the four interior angles of the quadrilateral (one of each angle) add to 360°, so the copies fit around a point without a gap or overlap. Thus any simple quadrilateral admits a tiling."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Give a precise definition of a (simple planar) quadrilateral that excludes crossed or overlapping figures.",
            "answer": {
              "answerKey": "A quadrilateral is a simple closed polygon in a plane with four distinct vertices and four straight sides; non-adjacent sides do not intersect, and adjacent sides meet only at their common endpoint.",
              "schoolMethod": "The definition must exclude non-planar figures, crossed/self-intersecting boundaries, overlapping sides and degenerate figures where three consecutive vertices lie on the same straight line. Requiring a simple closed polygon with four distinct coplanar vertices and four non-zero straight edges rules these out."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": true,
            "text": "In a quadrilateral, if both pairs of opposite angles are equal, what can be said about adjacent angles? Is the converse true?",
            "answer": {
              "answerKey": "Adjacent angles are supplementary. Conversely, if every pair of adjacent angles is supplementary, the quadrilateral is a parallelogram.",
              "schoolMethod": "Let ∠A = ∠C and ∠B = ∠D. Since the angle sum is 360°, 2∠A + 2∠B = 360°, hence ∠A + ∠B = 180°; adjacent angles are supplementary. Conversely, if each adjacent pair is supplementary, then ∠A + ∠B = 180° and ∠B + ∠C = 180° imply ∠A = ∠C; similarly ∠B = ∠D. A quadrilateral with both pairs of opposite angles equal is a parallelogram."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "State and prove the converse of the midpoint theorem: in △ABC, P is the midpoint of AB and PQ ∥ BC meets AC at Q. Show that Q is the midpoint of AC.",
            "answer": {
              "answerKey": "AQ = QC; Q is the midpoint of AC.",
              "schoolMethod": "Because PQ ∥ BC, △APQ ∼ △ABC by AA. Therefore AP/AB = AQ/AC. Since P is the midpoint, AP = AB/2, so AQ/AC = 1/2, giving AQ = AC/2. Hence QC = AC − AQ = AC/2 = AQ, and Q is the midpoint of AC."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "State and prove the Midpoint Theorem: in △ABC, P and Q are the midpoints of AB and AC. Prove that PQ ∥ BC and PQ = BC/2.",
            "answer": {
              "answerKey": "PQ ∥ BC and PQ = ½ BC.",
              "schoolMethod": "Extend PQ beyond Q to R so that QR=PQ. Since Q is the midpoint of AC, AQ=CQ; also ∠AQP=∠CQR (vertically opposite angles) and PQ=QR. Thus △AQP≅△CQR by SAS, giving AP=CR and AP∥CR. Since P is the midpoint of AB, AP=PB and A,P,B are collinear. Therefore PB and CR are equal and parallel, so PBCR is a parallelogram. Hence PR∥BC and PR=BC. As P,Q,R are collinear and PQ=QR, PR=2PQ. Thus PQ∥BC and PQ=BC/2."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": true,
            "text": "Give the alternative proof of the Centroid Theorem suggested in the text. Let M be the intersection of medians CP and BQ. Extend AM to S so that M is the midpoint of AS. If R=AM∩BC, prove that R is the midpoint of BC.",
            "answer": {
              "answerKey": "R is the midpoint of BC; thus AM is the third median.",
              "schoolMethod": "Let P and Q be the midpoints of AB and AC. By construction, M is also the midpoint of AS. In △ABS, P and M are midpoints of AB and AS, so PM∥BS by the Midpoint Theorem. Since C,M,P are collinear, PM lies on CM; hence CM∥BS. In △ACS, Q and M are midpoints of AC and AS, so QM∥CS. Since B,M,Q are collinear, QM lies on BM; hence BM∥CS. Therefore BSCM is a parallelogram. Its diagonals BC and SM bisect each other. Since S,M,A are collinear, the intersection R of AM and BC is the midpoint of BC. Hence AM is the third median."
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
    "exercises": [
      {
        "id": "ex13.1",
        "title": "Exercise Set 13.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Write a linear equation in two variables in standard form ax+by+c=0 in which a=3, b=0 and c=−1/5.",
            "answer": {
              "answerKey": "3x+0y−1/5=0; equivalently, 15x−1=0.",
              "schoolMethod": "Substitute the given coefficients into ax+by+c=0:\n\n3x+0y−1/5=0.\n\nMultiplying every term by 5 gives **15x−1=0**. The coefficient of y is zero, which is allowed: this is a linear equation in two variables whose graph is a vertical line."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Complete the table by expressing each equation in standard form ax + by + c = 0 and stating the coefficients of x and y and the constant term: (i) y − 15 = √2x; (ii) 3y − 2x = 0; (iii) 5x = 3y; (iv) x = 8; (v) 3y = 1.",
            "answer": {
              "answerKey": "(i) √2x−y+15=0: (a,b,c)=(√2,−1,15); (ii) −2x+3y=0: (−2,3,0); (iii) 5x−3y=0: (5,−3,0); (iv) x−8=0: (1,0,−8); (v) 3y−1=0: (0,3,−1).",
              "schoolMethod": "**Standard form:** collect all terms on the left so the equation is ax + by + c = 0. The coefficient triple is (a,b,c).\n\n(i) y − 15 = √2x ⇒ **√2x − y + 15 = 0**; (a,b,c) = (√2, −1, 15).\n\n(ii) 3y − 2x = 0 ⇒ **−2x + 3y + 0 = 0**; (a,b,c) = (−2, 3, 0).\n\n(iii) 5x = 3y ⇒ **5x − 3y + 0 = 0**; (a,b,c) = (5, −3, 0).\n\n(iv) x = 8 ⇒ **x + 0y − 8 = 0**; (a,b,c) = (1, 0, −8).\n\n(v) 3y = 1 ⇒ **0x + 3y − 1 = 0**; (a,b,c) = (0, 3, −1).\n\nMultiplying an equation by −1 gives an equivalent standard form, provided all three coefficients change sign together."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "(i) A notebook costs twice as much as a pen. If notebook cost is ₹t and pen cost is ₹p, Charlie writes t=2p while Meera writes p=2t. Who is correct? (ii) Two Indian batsmen together score 176 runs. Is x+y=176 correct if their scores are x and y?",
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
            "text": "Verify whether (4,3) is a solution of 5x−6y=2.",
            "answer": {
              "answerKey": "Yes, (4,3) is a solution.",
              "schoolMethod": "Substitute x=4 and y=3:\n\n5x−6y=5(4)−6(3)=20−18=2.\n\nThis equals the right-hand side, 2. Hence **(4,3) is a solution**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Find any two solutions for each equation: (i) 7x−3y=21; (ii) 2x+3y=5.",
            "answer": {
              "answerKey": "(i) (3,0), (0,−7). (ii) (1,1), (4,−1).",
              "schoolMethod": "(i) For 7x−3y=21: set y=0 to obtain x=3, giving (3,0). Set x=0: −3y=21, so y=−7, giving (0,−7).\n\n(ii) For 2x+3y=5: set x=1, then 2+3y=5, so y=1 and (1,1). Set y=−1, then 2x−3=5, so x=4 and (4,−1). Substitution verifies all four ordered pairs."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "For 2mx+3y=7 and 4x+ny=−10, if (2,−1) solves both equations, find m and n.",
            "answer": {
              "answerKey": "m=5/2 and n=18.",
              "schoolMethod": "Substitute x=2, y=−1 into 2mx+3y=7:\n\n2m(2)+3(−1)=7 ⇒ 4m−3=7 ⇒ 4m=10 ⇒ **m=5/2**.\n\nNow substitute in 4x+ny=−10:\n\n4(2)+n(−1)=−10 ⇒ 8−n=−10 ⇒ **n=18**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Find two solutions in different quadrants for each equation and identify the quadrants: (i) 5x+3y=7; (ii) 5x−3y=7; (iii) −5x+3y=7; (iv) −5x−3y=7.",
            "answer": {
              "answerKey": "(i) (1,2/3) QI and (2,−1) QIV; (ii) (1,−2/3) QIV and (2,1) QI; (iii) (−1,2/3) QII and (2,17/3) QI; (iv) (−1,−2/3) QIII and (−2,1) QII.",
              "schoolMethod": "Substitute each selected x-value and solve for y.\n\n(i) 5x+3y=7: x=1 gives 5+3y=7, y=2/3 (QI); x=2 gives 10+3y=7, y=−1 (QIV).\n\n(ii) 5x−3y=7: x=1 gives 5−3y=7, y=−2/3 (QIV); x=2 gives 10−3y=7, y=1 (QI).\n\n(iii) −5x+3y=7: x=−1 gives 5+3y=7, y=2/3 (QII); x=2 gives −10+3y=7, y=17/3 (QI).\n\n(iv) −5x−3y=7: x=−1 gives 5−3y=7, y=−2/3 (QIII); x=−2 gives 10−3y=7, y=1 (QII).\n\nEach pair satisfies its equation and lies in two different quadrants. Plotting either pair for an equation and joining the points gives its straight-line graph."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "For the graph of 3x−7y=21, does C=(2,3) lie on the line and satisfy the equation? Can a point not on the line satisfy the equation?",
            "answer": {
              "answerKey": "No: (2,3) gives −15, not 21. No point off the graph can satisfy the equation.",
              "schoolMethod": "Substitute C=(2,3): 3(2)−7(3)=6−21=−15, which is not 21. Thus C does not satisfy the equation and does not lie on the graph. By definition, the graph consists exactly of the points whose coordinates satisfy the equation. Therefore a point not on the line cannot satisfy it."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "State True or False and justify: (i) a linear equation in two variables has only one solution; (ii) its graph always passes through the origin; (iii) it can never have rational solutions; (iv) x=3 is a valid linear equation in two variables; (v) 2x+3y=7 has infinitely many solutions; (vi) (1,2) solves 2x+3y=7.",
            "answer": {
              "answerKey": "(i) F; (ii) F; (iii) F; (iv) T; (v) T; (vi) F.",
              "schoolMethod": "(i) **False:** a non-vertical linear equation has infinitely many ordered-pair solutions; for example, (0,7/3) and (1,5/3) solve 2x+3y=7.\n\n(ii) **False:** only equations with zero constant term (in standard form ax+by+c=0, c=0) necessarily pass through (0,0); 2x+3y=7 does not.\n\n(iii) **False:** for 2x+3y=7, (2,1) is an integer solution and hence rational.\n\n(iv) **True:** x=3 can be written x+0y−3=0, a linear equation in two variables.\n\n(v) **True:** choose any x and solve y=(7−2x)/3, giving infinitely many solutions.\n\n(vi) **False:** 2(1)+3(2)=8≠7."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "(i) Compare 3x+4y=7 and 6x+8y=14. (ii) Show that ax+by=c and kax+kby=kc have the same solutions whenever k≠0.",
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
            "text": "Three ski hills have the following rises and horizontal runs: A rises 60 m over 70 m; B rises 60 m over 110 m; C rises 80 m over 100 m. Rank their steepness from least to greatest.",
            "answer": {
              "answerKey": "B, C, A.",
              "schoolMethod": "Steepness is represented by slope = rise/run.\n\nA: 60/70=6/7≈0.857.\nB: 60/110=6/11≈0.545.\nC: 80/100=0.8.\n\nSince 0.545<0.8<0.857, the order from least to greatest steepness is **B, C, A**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "A loading-dock ramp rises 2.5 m over a horizontal run of 4 m. Find its slope.",
            "answer": {
              "answerKey": "5/8=0.625.",
              "schoolMethod": "Slope = vertical rise / horizontal run = 2.5/4 = 25/40 = **5/8 = 0.625**. The slope is dimensionless when both measurements use metres."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Find the slope of line l in each of the four diagrams in the textbook.",
            "answer": {
              "answerKey": "(i) 0; (ii) −1; (iii) 2/3; (iv) undefined.",
              "schoolMethod": "(i) The line is horizontal, so its rise is 0 for every non-zero run. Its slope is **0**.\n\n(ii) Two marked grid points are (−4, 4) and (4, −4). Therefore,\n\\[m=\\frac{−4−4}{4−(−4)}=\\frac{−8}{8}=\\mathbf{−1}.\\]\n\n(iii) Two marked grid points are (−4, −2) and (2, 2). Therefore,\n\\[m=\\frac{2−(−2)}{2−(−4)}=\\frac{4}{6}=\\mathbf{\\frac{2}{3}}.\\]\n\n(iv) The line is vertical, so its horizontal run is 0. Division by zero is not defined; hence the slope is **undefined**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "A wheelchair ramp must have a slope of 1 cm vertical rise for each 12 cm of horizontal length. What horizontal length is required for stairs with total height 18 cm?",
            "answer": {
              "answerKey": "216 cm = 2.16 m.",
              "schoolMethod": "The slope guideline means rise/run=1/12. With a rise of 18 cm,\n\n18/run=1/12 ⇒ run=18×12=**216 cm = 2.16 m**."
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
            "text": "Form and solve a pair of linear equations for each: (i) sum of two integers is +5 and their difference is −21; (ii) the difference between two numbers is 26 and one is three times the other; (iii) 7 bats and 6 balls cost ₹8880, while 3 bats and 5 balls cost ₹4000; (iv) taxi fares are ₹155 for 10 km and ₹220 for 15 km; (v) adding 2 to numerator and denominator gives 9/11, adding 3 gives 5/6; (vi) adding 1 to the numerator and subtracting 1 from denominator gives 1, adding 1 only to denominator gives 1/2; (vii) five years ago Nuri was three times Sonu’s age; ten years later she will be twice his age; (viii) digits sum to 9 and nine times the number equals twice the reversed number; (ix) ₹2000 is paid in ₹50 and ₹100 notes, 25 notes total; (x) library fee is fixed for first 3 days plus extra daily charge; 7 days cost ₹27 and 5 days cost ₹21.",
            "answer": {
              "answerKey": "(i) −8 and 13; (ii) 39 and 13; (iii) bat ₹1200, ball ₹80; (iv) fixed ₹25, ₹13/km, 25 km costs ₹350; (v) 7/9; (vi) 3/5; (vii) Nuri 50, Sonu 20; (viii) 18; (ix) ten ₹50 notes and fifteen ₹100 notes; (x) fixed ₹15, then ₹3 per extra day.",
              "schoolMethod": "**(i)** Let the integers be x,y. x+y=5 and x−y=−21. Adding gives 2x=−16 ⇒ x=−8; hence y=13.\n\n**(ii)** Let the larger number x and smaller y. x−y=26 and x=3y. Thus 3y−y=26 ⇒ y=13, x=39.\n\n**(iii)** Let bat cost b and ball cost c. 7b+6c=8880 ...(1), 3b+5c=4000 ...(2). Multiply (1) by 5 and (2) by 6: 35b+30c=44400; 18b+30c=24000. Subtract: 17b=20400, so b=₹1200. Substitute into (2): 3600+5c=4000 ⇒ c=₹80.\n\n**(iv)** Let fixed charge f and per-km fare r. f+10r=155, f+15r=220. Subtracting gives 5r=65 ⇒ r=₹13/km. Then f=155−130=₹25. For 25 km, fare=25+13×25=**₹350**.\n\n**(v)** Let the fraction be x/y. (x+2)/(y+2)=9/11 ⇒ 11x−9y=−4 ...(1). (x+3)/(y+3)=5/6 ⇒ 6x−5y=−3 ...(2). Multiplying (1) by 5 and (2) by 9: 55x−45y=−20, 54x−45y=−27. Thus x=7; substituting in (2), 42−5y=−3 ⇒ y=9. Fraction=**7/9**.\n\n**(vi)** (x+1)/(y−1)=1 gives y=x+2. Also x/(y+1)=1/2 gives 2x=y+1. Substitute: 2x=x+3 ⇒ x=3 and y=5. The fraction is **3/5**.\n\n**(vii)** Let current ages be N and S. N−5=3(S−5) ⇒ N=3S−10. N+10=2(S+10) ⇒ N=2S+10. Equating, 3S−10=2S+10 ⇒ S=20, N=50.\n\n**(viii)** Let tens digit a and units digit b. a+b=9. The number is 10a+b, reversed is 10b+a, and 9(10a+b)=2(10b+a). Simplify: 88a=11b, hence b=8a. Therefore 9a=9 ⇒ a=1,b=8, number **18**.\n\n**(ix)** Let x be the number of ₹50 notes and y the number of ₹100 notes. x+y=25 and 50x+100y=2000, i.e. x+2y=40. Subtract x+y=25: y=15, so x=10.\n\n**(x)** Let F be the fee for the first three days and r the charge for each additional day. F+4r=27 and F+2r=21. Subtract: 2r=6 ⇒ r=₹3; F=21−6=₹15."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Form and solve graphically a pair of equations for 10 quiz students if there are 4 more girls than boys.",
            "answer": {
              "answerKey": "3 boys and 7 girls.",
              "schoolMethod": "Let b be boys and g be girls. Total students: b+g=10. “Four more girls than boys” gives g−b=4. Add the equations: 2g=14 ⇒ g=7; then b=3.\n\nFor a graph, write g=10−b and g=b+4. Plot the first through (0,10),(10,0), and the second through (0,4),(3,7). They intersect at **(b,g)=(3,7)**, giving 3 boys and 7 girls."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Use coefficient ratios to classify: (i) 5x−4y+8=0 and 7x+6y−9=0; (ii) 9x+3y+12=0 and 18x+6y+24=0; (iii) 6x−3y+10=0 and 2x−y+9=0.",
            "answer": {
              "answerKey": "(i) Intersect at one point; (ii) coincident; (iii) parallel and distinct.",
              "schoolMethod": "(i) a₁/a₂=5/7, b₁/b₂=−4/6=−2/3; these differ. So the lines intersect at one point. Solving 5x−4y=−8 and 7x+6y=9 gives 29x=−6, so x=−6/29 and y=101/58.\n\n(ii) 18/9=6/3=24/12=2. All coefficient and constant ratios agree, so the equations describe **coincident lines** and have infinitely many common solutions.\n\n(iii) 6/2=3 and (−3)/(−1)=3, but 10/9≠3. Coefficients are proportional while constants are not, so the lines are **parallel and distinct**; there is no common solution."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Which pairs have solutions? For those that do, find the common solution graphically: (i) x+y=5 and 2x+2y=10; (ii) x−y=8 and 3x−3y=16; (iii) 2x+y−6=0 and 4x−2y−4=0; (iv) 2x−2y−2=0 and 4x−4y−5=0.",
            "answer": {
              "answerKey": "(i) Coincident, infinitely many solutions; (ii) no solution; (iii) (2,2); (iv) no solution.",
              "schoolMethod": "(i) Dividing the second equation by 2 gives x+y=5, the first equation itself. The graphs coincide, so every point on x+y=5 is a common solution.\n\n(ii) The equations reduce to x−y=8 and x−y=16/3. These are distinct parallel lines; there is **no solution**.\n\n(iii) 2x+y=6 and 4x−2y=4. Doubling the first gives 4x+2y=12. Add the second: 8x=16 ⇒ x=2; then y=2. The graphs intersect at **(2,2)**.\n\n(iv) The first reduces to x−y=1 and the second to x−y=5/4. The lines are parallel and distinct, so there is no solution."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Half the perimeter of a rectangular garden is 36 m, and its length is 4 m more than its width. Find its dimensions.",
            "answer": {
              "answerKey": "Length 20 m; width 16 m.",
              "schoolMethod": "Let width=w m, length=l m. Half the perimeter is l+w=36, and l=w+4. Substitute: (w+4)+w=36 ⇒ 2w=32 ⇒ w=16 m. Then l=20 m. Check: l+w=36 and l−w=4."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "For 2x+3y−8=0, write another equation so that the pair represents (i) intersecting lines, (ii) parallel lines, and (iii) coincident lines.",
            "answer": {
              "answerKey": "Examples: (i) x+y−1=0; (ii) 4x+6y−10=0; (iii) 4x+6y−16=0.",
              "schoolMethod": "(i) **Intersecting:** choose x+y−1=0. Its x:y coefficient ratio 1:1 differs from 2:3, so there is one intersection.\n\n(ii) **Parallel, distinct:** choose 4x+6y−10=0. The x and y coefficients are twice those of the original, but the constant −10 is not twice −8 (which would be −16). So the lines are parallel but not coincident.\n\n(iii) **Coincident:** multiply the whole original equation by 2, obtaining **4x+6y−16=0**. Both equations represent the same line."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "Using the ancient problem, find the price of one citron x and one fragrant wood-apple y if 9x+7y=107 and 7x+9y=101. Solve without directly applying the usual elimination/substitution setup.",
            "answer": {
              "answerKey": "Citron ₹8; fragrant wood-apple ₹5.",
              "schoolMethod": "Add the equations: 16x+16y=208 ⇒ x+y=13. Subtract the second equation from the first: 2x−2y=6 ⇒ x−y=3. Add these simpler equations: 2x=16, so x=8. Then y=13−8=5. Therefore one citron costs **₹8** and one fragrant wood-apple **₹5**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "Five pencils and seven pens cost ₹50; seven pencils and five pens cost ₹46. Find the cost of each.",
            "answer": {
              "answerKey": "Pencil ₹3; pen ₹5.",
              "schoolMethod": "Let pencil cost be p and pen cost be q. 5p+7q=50 and 7p+5q=46. Adding: 12p+12q=96 ⇒ p+q=8. Subtracting the first from the second: 2p−2q=−4 ⇒ p−q=−2. Add the last two relations: 2p=6 ⇒ p=3; hence q=5. Check: 5(3)+7(5)=50 and 7(3)+5(5)=46."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "Find the height of the stool shown in the figure, using the measurements 25 cm and 85 cm.",
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
            "text": "For y=3x: (i) find its slope from (0,0) and (2,6); (ii) state the y-intercept and its meaning; (iii) for a water tank whose level y cm after x minutes follows the line, find the level after 5 minutes and time to reach 21 cm; (iv) does (4,10) lie on it? (v) find its intersection with x=3.",
            "answer": {
              "answerKey": "Slope 3; y-intercept 0; 15 cm after 5 min; 7 min for 21 cm; (4,10) is not on line; intersection (3,9).",
              "schoolMethod": "(i) Slope m=(y₂−y₁)/(x₂−x₁)=(6−0)/(2−0)=**3**.\n\n(ii) At x=0, y=0, so the y-intercept is 0. In the tank context, the water level starts at 0 cm.\n\n(iii)(a) At x=5, y=3(5)=**15 cm**. (b) For y=21, 21=3x, so x=**7 minutes**.\n\n(iv) At x=4 the line predicts y=3(4)=12, not 10. Therefore (4,10) does not lie on the line.\n\n(v) If x=3, then y=3×3=9. The intersection point is **(3,9)**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Use F=(9/5)C+32 to: (i) draw the graph using Celsius on x-axis and Fahrenheit on y-axis; (ii) convert 30°C; (iii) convert 95°F; (iv) find F at 0°C and C at 0°F; (v) find a temperature numerically equal in both scales.",
            "answer": {
              "answerKey": "(i) Plot e.g. (0,32),(100,212), join them; (ii) 86°F; (iii) 35°C; (iv) 32°F and −160/9°C ≈−17.8°C; (v) −40°.",
              "schoolMethod": "(i) The graph is a straight line. Useful points are: C=0 gives F=32; C=100 gives F=(9/5)(100)+32=212; C=−40 gives F=−40. Plot points (0,32), (100,212), and join them with a straight line.\n\n(ii) F=(9/5)(30)+32=54+32=**86°F**.\n\n(iii) 95=(9/5)C+32 ⇒ 63=(9/5)C ⇒ C=63×5/9=**35°C**.\n\n(iv) At C=0, F=32°F. At F=0, 0=(9/5)C+32 ⇒ C=−160/9≈**−17.78°C**.\n\n(v) Set F=C: C=(9/5)C+32 ⇒ −(4/5)C=32 ⇒ C=−40. Thus **−40°C=−40°F**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "Solve graphically the system 2x+y=6 and 2x−y−2=0.",
            "answer": {
              "answerKey": "The lines intersect at (2,2).",
              "schoolMethod": "Rewrite the equations as y=6−2x and y=2x−2. For the first line, plot (0,6) and (3,0). For the second, plot (0,−2) and (1,0). Draw both straight lines; their intersection satisfies both equations. Algebraically checking the intersection: add 2x+y=6 and 2x−y=2 to get 4x=8, so x=2; then y=2. The graphical solution is **(2,2)**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Find the point of intersection of the two lines shown on the cover page.",
            "answer": {
              "answerKey": "The lines 15x−10y−115=0 and 15x+100y−335=0 intersect at (9, 2).",
              "schoolMethod": "The cover gives the two lines **15x − 10y − 115 = 0** and **15x + 100y − 335 = 0**.\n\nRewrite and divide by 5:\n\n3x − 2y = 23 … (1)\n\n3x + 20y = 67 … (2)\n\nSubtract (1) from (2): 22y = 44, so y = 2.\n\nSubstitute y = 2 into (1): 3x − 4 = 23 ⇒ 3x = 27 ⇒ x = 9.\n\nCheck: 15(9) − 10(2) − 115 = 0 and 15(9) + 100(2) − 335 = 0.\n\n**Therefore, the point of intersection is (9, 2).**"
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Give a formula for the x-intercept of y=mx+c.",
            "answer": {
              "answerKey": "x-intercept = −c/m when m≠0.",
              "schoolMethod": "At the x-intercept, y=0. Substitute into y=mx+c: 0=mx+c ⇒ mx=−c. If m≠0, **x=−c/m**. If m=0 and c≠0, the horizontal line never meets the x-axis; if m=c=0, the line is the x-axis itself and every point on it is an intercept."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "Plan A costs ₹50 monthly plus ₹0.20 per call minute; Plan B costs ₹30 monthly plus ₹0.30 per minute. When is each cheaper and when are they equal?",
            "answer": {
              "answerKey": "A is cheaper for more than 200 minutes; B for fewer than 200; equal at 200 minutes.",
              "schoolMethod": "For m call minutes, A(m)=50+0.20m and B(m)=30+0.30m. Set equal: 50+0.20m=30+0.30m ⇒ 20=0.10m ⇒ m=200. At 200 min both cost ₹90. If m<200, Plan B is cheaper because it has the lower fixed fee; if m>200, Plan A is cheaper because its per-minute charge is lower."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "How many lines (i) have a given slope? (ii) have a given slope and pass through a given point?",
            "answer": {
              "answerKey": "(i) Infinitely many; (ii) exactly one.",
              "schoolMethod": "(i) A fixed slope fixes only the direction. The line y=mx+c has that slope for every choice of intercept c, so there are **infinitely many** parallel lines.\n\n(ii) A fixed slope m and point (x₀,y₀) determine c uniquely: c=y₀−mx₀. Therefore exactly **one line** has that slope and passes through that point."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "Find the values of p for which 4x+py+8=0 and 2x+2y+2=0 have a unique solution.",
            "answer": {
              "answerKey": "p≠4.",
              "schoolMethod": "Two lines have a unique intersection when their x and y coefficients are not proportional, i.e. a₁b₂−a₂b₁≠0. Here 4(2)−2p=8−2p≠0 ⇒ p≠4. When p=4 the coefficient ratios agree and the lines are parallel but not coincident (constants do not match), so there is no unique solution."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "Find a and b so that (a+b)x−2by=5a+2b+1 and 3x−y=14 have infinitely many solutions.",
            "answer": {
              "answerKey": "a=5 and b=1.",
              "schoolMethod": "For coincident lines, all three ratios must agree. Write the first as (a+b)x−2by−(5a+2b+1)=0 and the second as 3x−y−14=0. The coefficient ratio requires (a+b)/3=(−2b)/(−1)=2b. Hence a+b=6b, so a=5b. The constant ratio gives (5a+2b+1)/14=2b. Substitute a=5b: (25b+2b+1)=28b ⇒ b=1; thus a=5. These values make the first equation 6x−2y=28, twice the second equation."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": false,
            "text": "Find k so that x+2y=3 and (k−1)x+(k+1)y=k+3 represent coincident lines.",
            "answer": {
              "answerKey": "k=3.",
              "schoolMethod": "Write the first as x+2y−3=0 and the second as (k−1)x+(k+1)y−(k+3)=0. For coincident lines, the second coefficient triple must be a scalar multiple λ of (1,2,−3). Thus k−1=λ and k+1=2λ. Subtracting gives 2=k−1, so k=3 and λ=2. Check the constant: −(k+3)=−6=2(−3), so all three coefficients are proportional. Therefore **k=3**."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "text": "(i) Robot 1 starts from (0,0) and repeatedly moves 3 units right, then 4 units up. Robot 2 starts from (10,0) and repeatedly moves 1 unit right, then 2 units up. Do their traced paths intersect, and where? (ii) Robot 1 starts from (3,0) and repeatedly moves 5 units right, then 5 units up. Robot 2 starts from (7,0) and repeatedly moves 5 units right, then 3 units down. Do their traced paths intersect, and where?",
            "answer": {
              "answerKey": "(i) Yes. The isolated intersections are (24, 28) and (33, 44); the paths also overlap along the segments from (26, 32) to (27, 32), from (27, 32) to (27, 34), from (28, 36) to (29, 36), from (30, 38) to (30, 40), and from (30, 40) to (31, 40). (ii) Yes. The first horizontal segments overlap from (7, 0) to (8, 0).",
              "schoolMethod": "Trace the **actual horizontal and vertical segments**, including their endpoints; comparing only the robots’ overall directions would miss overlaps.\n\n**(i)** Robot 1 has horizontal segments at heights 0, 4, 8, …, with each segment 3 units long, and vertical segments 4 units long. Robot 2 has horizontal segments at heights 0, 2, 4, …, with each segment 1 unit long, and vertical segments 2 units long. Comparing segments at the same height or on the same vertical line gives these common parts:\n\n• Isolated intersection points: **(24, 28)** and **(33, 44)**.\n• Shared horizontal segment at height 32: **from (26, 32) to (27, 32)**.\n• Shared vertical segment at x = 27: **from (27, 32) to (27, 34)**.\n• Shared horizontal segment at height 36: **from (28, 36) to (29, 36)**.\n• Shared vertical segment at x = 30: **from (30, 38) to (30, 40)**.\n• Shared horizontal segment at height 40: **from (30, 40) to (31, 40)**.\n\nThus, the paths share portions of five segments, besides the two isolated points. The endpoints listed for adjacent shared portions are intentionally repeated because the overlap changes from horizontal to vertical there.\n\n**(ii)** Robot 1’s first horizontal segment runs from (3, 0) to (8, 0). Robot 2’s first horizontal segment runs from (7, 0) to (12, 0). Hence they share the segment **from (7, 0) to (8, 0)**. After leaving the x-axis, Robot 1 moves upward while Robot 2 moves downward, so their later vertical/horizontal steps do not meet."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": true,
            "text": "At first Jacob’s watch reads a minutes after 2 o’clock. Fifteen minutes later it reads b minutes after 3 o’clock. If a=6b, what is the second time?",
            "answer": {
              "answerKey": "3:09.",
              "schoolMethod": "From 2:a to 3:b, the elapsed time is (60−a)+b minutes. It is 15, so 60−a+b=15 ⇒ a−b=45. Given a=6b, 6b−b=45 ⇒ 5b=45 ⇒ b=9. The second reading is **3:09**."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": true,
            "text": "The digits of a two-digit number sum to 15. Reversing the digits gives a number 9 greater than the original. Find the number.",
            "answer": {
              "answerKey": "78.",
              "schoolMethod": "Let the tens digit be x and units digit be y. x+y=15. The number is 10x+y; the reversed number is 10y+x. The difference condition is (10y+x)−(10x+y)=9 ⇒ 9(y−x)=9 ⇒ y−x=1. Add the two equations: x+y=15 and y−x=1 give 2y=16 ⇒ y=8, x=7. The number is **78**; reversed 87 is 9 greater."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": true,
            "text": "In cyclic quadrilateral ABCD, ∠A=(x+7)°, ∠B=(y+8)°, ∠C=(3y+23)° and ∠D=(4x+12)°. Find all four angles.",
            "answer": {
              "answerKey": "∠A=37°, ∠B=48°, ∠C=143°, ∠D=132°.",
              "schoolMethod": "Opposite angles of a cyclic quadrilateral are supplementary.\n\n(x+7)+(3y+23)=180 ⇒ x+3y=150 ...(1).\n\n(y+8)+(4x+12)=180 ⇒ 4x+y=160 ...(2).\n\nFrom (2), y=160−4x. Substitute in (1): x+3(160−4x)=150 ⇒ −11x=−330 ⇒ x=30, y=40. Therefore A=37°, B=48°, C=143°, D=132°. The opposite sums are 37+143=180 and 48+132=180."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": true,
            "text": "A train takes 6 hours less for a journey when its speed is increased by 6 km/h, and 6 hours more if its speed is decreased by 4 km/h. Find its original speed and the distance.",
            "answer": {
              "answerKey": "Speed 24 km/h; distance 720 km.",
              "schoolMethod": "Let original speed be v km/h and distance be d km. Original time is d/v.\n\nWith increased speed: d/v−d/(v+6)=6 ⇒ 6d/[v(v+6)]=6 ⇒ d=v(v+6).\n\nWith decreased speed: d/(v−4)−d/v=6 ⇒ 4d/[v(v−4)]=6 ⇒ d=3v(v−4)/2.\n\nEquate the expressions for d: v(v+6)=3v(v−4)/2. Since v>4, divide by v: v+6=1.5v−6 ⇒ 0.5v=12 ⇒ v=24. Then d=24×30=**720 km**."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": true,
            "text": "A father’s age equals the sum of the ages of his four children. After 20 years, the sum of the children’s ages will be twice the father’s age. Find the father’s present age.",
            "answer": {
              "answerKey": "40 years.",
              "schoolMethod": "Let the father’s present age be F. The sum of the four children’s present ages is also F. After 20 years, each child ages by 20 years, so their combined age becomes F+4(20)=F+80. The father’s age becomes F+20. Given F+80=2(F+20), so F+80=2F+40 ⇒ **F=40 years**."
            }
          }
        ]
      },
      {
        "id": "ex13.reflect",
        "title": "In-text and Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Why does every point (x,y) satisfying 2x + 3y = 6 lie on the graph of the equation? Give three different solutions and explain why a non-vertical, non-horizontal linear equation has infinitely many solutions.",
            "answer": {
              "answerKey": "Examples of solutions are (0,2), (3,0) and (−3,4). There are infinitely many solutions.",
              "schoolMethod": "Substitution verifies each point: 2(0)+3(2)=6; 2(3)+3(0)=6; 2(−3)+3(4)=6. More generally, for any chosen x, y=(6−2x)/3 gives a solution. Since x can take infinitely many real values, so can the ordered pairs. The graph is a straight line containing all these points."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Explain why a line in standard form ax + by + c = 0 passes through the origin when c = 0.",
            "answer": {
              "answerKey": "When c = 0, the point (0,0) satisfies the equation, so the line passes through the origin.",
              "schoolMethod": "Substitute x=0 and y=0 into ax+by+c=0. If c=0, the left side is a(0)+b(0)+0=0, so the origin is a solution and lies on the line (provided a and b are not both zero)."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "How many solutions can a pair of linear equations in two variables have? Explain the cases represented by intersecting, parallel and coincident lines.",
            "answer": {
              "answerKey": "Intersecting lines: one solution; distinct parallel lines: no solution; coincident lines: infinitely many solutions.",
              "schoolMethod": "A solution is an ordered pair lying on both lines. Two distinct intersecting lines meet at exactly one point, giving a unique solution. Distinct parallel lines never meet, so there is no solution. Coincident lines have every point in common, so there are infinitely many solutions."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "Solve the in-text paratha-and-dahi problem: one paratha and two bowls of dahi cost ₹90; two parathas and seven bowls of dahi cost ₹260. Find each price.",
            "answer": {
              "answerKey": "One paratha costs ₹110/3 = ₹36⅔ and one bowl of dahi costs ₹80/3 = ₹26⅔.",
              "schoolMethod": "Let p be the price of a paratha and d the price of a bowl of dahi. Then p+2d=90 and 2p+7d=260. Double the first equation: 2p+4d=180. Subtract it from the second equation: 3d=80, so d=80/3. Then p=90−160/3=110/3. Check: 110/3+160/3=90 and 220/3+560/3=260. The fractional-rupee values follow from the data as stated."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "If two angles of a triangle are x° and y°, with y = 4x, and the third angle is 50°, find x and y.",
            "answer": {
              "answerKey": "x = 26° and y = 104°.",
              "schoolMethod": "The angle sum gives x+y+50=180, so x+y=130. Since y=4x, 5x=130 and x=26°. Therefore y=4×26=104°. Check: 26°+104°+50°=180°."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "How many solutions do 10x − 5y = 20 and 4x − 2y = 8 have? Give a rule-based explanation.",
            "answer": {
              "answerKey": "Infinitely many solutions; both equations reduce to 2x − y = 4.",
              "schoolMethod": "Divide the first equation by 5 to get 2x−y=4. Divide the second by 2 to get 2x−y=4. They represent the same line, so every point on that line satisfies both equations; there are infinitely many solutions."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "Give an example of a pair of linear equations with no solution and explain the reason.",
            "answer": {
              "answerKey": "For example, x − y = 10 and 10x − 10y = 101 have no solution.",
              "schoolMethod": "Multiplying x−y=10 by 10 gives 10x−10y=100, but the other equation requires 10x−10y=101. The same expression cannot equal 100 and 101 simultaneously. The lines have the same slope but different intercepts, so they are distinct parallel lines."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "Prove that two distinct lines with equal slopes are parallel using y = mx + d₁ and y = mx + d₂.",
            "answer": {
              "answerKey": "If d₁ ≠ d₂, the lines have no common point and are parallel.",
              "schoolMethod": "Suppose a point (x,y) lies on both lines. Then y=mx+d₁ and y=mx+d₂. Subtracting gives d₁=d₂. This contradicts d₁≠d₂. Therefore the lines have no point in common. Their equal slopes mean they have the same direction, so they are distinct parallel lines."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "The line AB in the figure passes through A=(2,0) and B=(4,3). (i) Find the point on AB whose x-coordinate is 8. (ii) Find the point on AB whose y-coordinate is 6.",
            "answer": {
              "answerKey": "(i) (8,9). (ii) (6,6).",
              "schoolMethod": "The slope is (3−0)/(4−2)=3/2. Using point A=(2,0), the line is y=(3/2)(x−2). (i) For x=8, y=(3/2)(6)=9, so the point is (8,9). (ii) Set y=6: 6=(3/2)(x−2), so 4=x−2 and x=6. The point is (6,6)."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": true,
            "text": "For two linear equations a₁x+b₁y+c₁=0 and a₂x+b₂y+c₂=0, explain how to classify the pair as having a unique solution, no solution, or infinitely many solutions without dividing by a coefficient that might be zero.",
            "answer": {
              "answerKey": "Let D=a₁b₂−a₂b₁. If D≠0, there is a unique solution. If D=0, the equations are parallel or coincident: they coincide if their full coefficient triples are proportional; otherwise there is no solution.",
              "schoolMethod": "The determinant D=a₁b₂−a₂b₁ checks whether the x- and y-coefficient pairs are proportional without dividing by a possibly zero coefficient. If D≠0, the two lines have different slopes and intersect once. If D=0, compare the constants as well: if (a₁,b₁,c₁) and (a₂,b₂,c₂) are proportional, the equations describe the same line and have infinitely many solutions. If the x- and y-coefficients are proportional but the constants are not in the same ratio, the lines are distinct and parallel, so there is no solution. This formulation also handles zero coefficients."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": false,
            "text": "Give three pairs of linear equations with no solution and state the common rule.",
            "answer": {
              "answerKey": "(i) x+y=4 and x+y=5; (ii) 2x−3y=1 and 4x−6y=7; (iii) x=2 and x=5. In each pair the lines are distinct and parallel.",
              "schoolMethod": "(i) The left sides are equal but the constants differ. (ii) The second equation has twice the x- and y-coefficients of the first, but its constant 7 is not twice 1. (iii) The two distinct vertical lines x=2 and x=5 never meet. **Rule:** proportional x- and y-coefficients with non-proportional constants give distinct parallel lines and no solution."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "text": "Describe another way to solve a pair of linear equations besides elimination or substitution, and mention one limitation.",
            "answer": {
              "answerKey": "The graphing method can be used: plot both lines and read their intersection. Its main limitation is that a graph may give only an approximate solution.",
              "schoolMethod": "Plot each linear equation on the same coordinate plane using two or more points. If the lines intersect, the intersection coordinates solve both equations. Parallel lines indicate no solution; coincident lines indicate infinitely many. Graphing is useful visually, but a hand-drawn graph may not locate an exact fractional intersection, so algebra is usually better for an exact answer."
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
    "exercises": [
      {
        "id": "ex14.1",
        "title": "Exercise Set 14.1",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "The volume of a cube is 64 cm³. Find its total surface area.",
            "answer": {
              "answerKey": "96 cm².",
              "schoolMethod": "If a is the side, a³=64 ⇒ a=4 cm. Total surface area S=6a²=6(4²)=**96 cm²**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "How many cubes of side 20 cm fit tightly in a cubical box of side 2 m?",
            "answer": {
              "answerKey": "1000 cubes.",
              "schoolMethod": "Convert 2 m to 200 cm. Along each edge, 200/20=10 small cubes fit. Total =10×10×10=**1000 cubes**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "A godown is 40 m×25 m×10 m and is filled with boxes measuring 2 m×1.25 m×1 m. Find the number of boxes.",
            "answer": {
              "answerKey": "4000 boxes.",
              "schoolMethod": "Godown volume=40×25×10=10,000 m³. One box volume=2×1.25×1=2.5 m³. Since each dimension divides the corresponding godown dimension exactly, the packed count is (40/2)(25/1.25)(10/1)=20×20×10=**4000 boxes**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Two cubes, each of volume 125 cm³, are joined end to end. Find the surface area of the resulting cuboid.",
            "answer": {
              "answerKey": "250 cm².",
              "schoolMethod": "Each cube has side ∛125=5 cm. Joined face-to-face, the cuboid measures 10 cm×5 cm×5 cm. Its total surface area is 2(lw+lh+wh)=2(10×5+10×5+5×5)=2(50+50+25)=**250 cm²**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "A cube of side 4 cm is cut into 1 cm cubes. Find the ratio of the original cube’s surface area to the sum of the surface areas of all the small cubes.",
            "answer": {
              "answerKey": "1:4.",
              "schoolMethod": "Original surface area=6×4²=96 cm². There are 4³=64 small cubes; each has surface area 6×1²=6 cm², so their total surface area is 64×6=384 cm². Ratio=96:384=**1:4**. Volume is preserved, but cutting exposes new surfaces."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "The three faces of a cuboid meeting at one corner have areas 6 cm², 15 cm² and 10 cm². Find its volume.",
            "answer": {
              "answerKey": "30 cm³.",
              "schoolMethod": "Let its edges be l,w,h. The face areas give lw=6, wh=15 and lh=10. Multiplying, (lwh)²=(lw)(wh)(lh)=6×15×10=900. Since volume is positive, lwh=√900=**30 cm³**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "A 5 cm cube is painted on all faces and cut into 1 cm³ cubes. How many small cubes have (i) exactly three painted faces, (ii) exactly two, (iii) exactly one, (iv) no painted faces?",
            "answer": {
              "answerKey": "(i) 8; (ii) 36; (iii) 54; (iv) 27.",
              "schoolMethod": "(i) Exactly three painted faces occur only at the 8 corners: **8**.\n\n(ii) On each of 12 edges, the non-corner cubes have two painted faces. There are 5−2=3 such cubes per edge, so 12×3=**36**.\n\n(iii) On each of 6 faces, the interior face cubes (not edges) have one painted face. Each face has (5−2)²=9, so 6×9=**54**.\n\n(iv) Fully internal cubes have no painted faces. Count=(5−2)³=3³=**27**. Check: 8+36+54+27=125=5³."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "Find all cuboids with positive integer edge lengths and total surface area exactly 100 cm². Are there more than one? Show all cases.",
            "answer": {
              "answerKey": "Up to reordering, (1,2,16) cm and (2,4,7) cm; exactly two.",
              "schoolMethod": "Let integer edges be a≤b≤c. From 2(ab+bc+ca)=100, we need ab+bc+ca=50. Since a≤b≤c, 3a²≤50, so a≤4.\n\n**a=1:** b+c+bc=50 ⇒ (b+1)(c+1)=51=3×17 (the only factor pair with b≥1 and c≥b is 3×17). Thus (b,c)=(2,16).\n\n**a=2:** 2b+2c+bc=50 ⇒ (b+2)(c+2)=54. With b≥2 and c≥b, the valid factor pair is 6×9, giving (b,c)=(4,7).\n\n**a=3:** (b+3)(c+3)=59. Since 59 is prime, no pair with b≥3 exists.\n\n**a=4:** (b+4)(c+4)=66, but both factors are at least 8; no factor pair of 66 has both factors at least 8. Hence no further cases. The two cuboids are **1×2×16** and **2×4×7**. Their surface areas are respectively 2(2+16+32)=100 and 2(8+14+28)=100 cm²."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "Think and Reflect: compare school pool designs A=8 ft×50 ft×20 ft and B=6 ft×100 ft×15 ft. Which is appropriate and why? Use 1 ft³≈28.3 L.",
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
            "text": "Cylinder B has twice the radius and half the height of cylinder A. Find CSA(A):CSA(B) and volume(A):volume(B).",
            "answer": {
              "answerKey": "CSA ratio 1:1; volume ratio 1:2.",
              "schoolMethod": "Let cylinder A have radius r and height h. Then B has radius 2r and height h/2.\n\nCSA(A)=2πrh. CSA(B)=2π(2r)(h/2)=2πrh, so the ratio is **1:1**.\n\nV(A)=πr²h. V(B)=π(2r)²(h/2)=2πr²h, so V(A):V(B)=**1:2**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "The radii of two cylinders are in the ratio 2:3 and heights in the ratio 3:2. Find (a) volume ratio and (b) CSA ratio.",
            "answer": {
              "answerKey": "(a) 2:3; (b) 1:1.",
              "schoolMethod": "Let r₁:r₂=2:3 and h₁:h₂=3:2.\n\n(a) Volumes are proportional to r²h, so V₁:V₂=(2²×3):(3²×2)=12:18=**2:3**.\n\n(b) Curved areas are proportional to rh, so CSA₁:CSA₂=(2×3):(3×2)=**1:1**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "A cube has edge r cm. A largest possible right circular cylinder is cut out of it. Find the cylinder’s volume.",
            "answer": {
              "answerKey": "πr³/4 cm³.",
              "schoolMethod": "The cylinder’s height equals the cube’s edge, h=r. Its circular base is the largest circle that fits in a square face, so its diameter is r and radius is r/2. Therefore V=π(r/2)²(r)=**πr³/4 cm³**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": true,
            "text": "The radius of a cylinder is increased by 10% and its height is decreased by x%. Its volume remains unchanged. Find x.",
            "answer": {
              "answerKey": "x≈17.36%.",
              "schoolMethod": "Let original volume be V=πr²h. New radius=1.1r and new height=(1−x/100)h. Equal volumes give 1.1²(1−x/100)=1. Thus 1−x/100=1/1.21=100/121. Hence x/100=21/121 and x=2100/121≈**17.36%**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "A metal cube of side 12 cm is melted and recast as cylindrical rods of radius 2 cm and height 12 cm. Find (i) cube volume, (ii) one rod volume, (iii) approximate number of complete rods using π≈22/7.",
            "answer": {
              "answerKey": "(i) 1728 cm³; (ii) 48π=1056/7≈150.86 cm³; (iii) 11 complete rods.",
              "schoolMethod": "(i) Cube volume=12³=**1728 cm³**.\n\n(ii) Rod volume=πr²h=π×2²×12=**48π cm³**. With π≈22/7, this is 1056/7≈**150.86 cm³**.\n\n(iii) Number of rods by volume=1728/(48π)=36/π≈11.46. Only whole rods can be made, so **11 complete rods** can be formed."
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
            "text": "Find the total surface area of a cone with slant height 21 m and base diameter 24 m.",
            "answer": {
              "answerKey": "Total surface area = 396π m² ≈ 1244.07 m².",
              "schoolMethod": "Radius r=24/2=12 m and slant height l=21 m. Total surface area of a cone = πr(l+r) = π×12×(21+12)=396π m². Using π≈3.14159, 396π≈**1244.07 m²**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "Find the curved surface area of a right circular cone with slant height 10 cm and radius 7 cm.",
            "answer": {
              "answerKey": "220 cm² (using π=22/7).",
              "schoolMethod": "CSA=πrl=π×7×10=70π cm². Using π=22/7, CSA=70×22/7=**220 cm²**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "A cone has height 16 cm and base radius 12 cm. Find its curved and total surface areas.",
            "answer": {
              "answerKey": "CSA=240π cm²; TSA=384π cm².",
              "schoolMethod": "Slant height l=√(h²+r²)=√(16²+12²)=√400=20 cm.\n\nCSA=πrl=π×12×20=**240π cm²**.\n\nTSA=πr(l+r)=π×12×(20+12)=**384π cm²**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "A cone has height 15 cm and volume 1570 cm³. Find its base radius.",
            "answer": {
              "answerKey": "10 cm (using π≈3.14).",
              "schoolMethod": "V=(1/3)πr²h. Hence 1570=(1/3)πr²(15)=5πr². Thus r²=1570/(5π)=314/π. With π≈3.14, r²=100 and **r=10 cm**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "The curved surface area of a cone is 308 cm² and its slant height is 14 cm. Find (i) radius, (ii) total surface area.",
            "answer": {
              "answerKey": "(i) 7 cm; (ii) 462 cm².",
              "schoolMethod": "(i) CSA=πrl=308. With l=14 and π=22/7, 308=(22/7)×r×14=44r, so r=**7 cm**.\n\n(ii) Base area=πr²=(22/7)×49=154 cm². TSA=CSA+base area=308+154=**462 cm²**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "A joker’s cap is a cone of radius 7 cm and height 24 cm. Find the sheet area needed to make 10 caps.",
            "answer": {
              "answerKey": "5500 cm².",
              "schoolMethod": "Slant height l=√(7²+24²)=√625=25 cm. A cap is open at its base, so only curved area is needed. One cap: πrl=(22/7)×7×25=550 cm². Ten caps require 10×550=**5500 cm²**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "A conical tent has height 8 m and base radius 6 m. Tarpaulin is 3 m wide. Find the length needed, including 20 cm extra for stitching and cutting waste.",
            "answer": {
              "answerKey": "Approximately 63.03 m.",
              "schoolMethod": "Slant height l=√(8²+6²)=√100=10 m. The conical tent has no base sheet, so tarpaulin area=CSA=πrl=π×6×10=60π m². With a 3 m wide roll, required length before allowance=(60π)/3=20π≈62.832 m. Add 0.20 m for stitching/waste: **20π+0.2≈63.03 m**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": false,
            "text": "A right triangle with sides 6 cm, 8 cm and 10 cm is rotated 360° about its 8 cm side. Find the volume and curved surface area of the solid.",
            "answer": {
              "answerKey": "Volume=96π cm³; CSA=60π cm².",
              "schoolMethod": "The 8 cm side is the cone’s height, the other perpendicular side 6 cm becomes the base radius, and the hypotenuse 10 cm is the slant height. Thus V=(1/3)πr²h=(1/3)π×36×8=**96π cm³**. Curved area=πrl=π×6×10=**60π cm²**."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "A conical cup is filled with water to half its depth. What fraction of the cup’s volume does the water occupy?",
            "answer": {
              "answerKey": "1/8.",
              "schoolMethod": "The water fills a smaller cone similar to the full cup. Its height is half the original, so every linear dimension (including radius) is scaled by 1/2. Volumes of similar solids scale as the cube of the linear scale factor: (1/2)³=**1/8**. Only one-eighth of the cup’s volume is occupied."
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
            "text": "A ball bearing has radius 0.7 cm. Find its surface area.",
            "answer": {
              "answerKey": "6.16 cm² approximately.",
              "schoolMethod": "Surface area of a sphere=4πr²=4π(0.7)²=1.96π. Using π=22/7 gives 1.96×22/7=**6.16 cm²**."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": true,
            "text": "Two solid spheres of the same metal weigh 5920 g and 740 g. Find the radius of the larger sphere if the smaller sphere has diameter 5 cm.",
            "answer": {
              "answerKey": "5 cm.",
              "schoolMethod": "For the same material, mass is proportional to volume. Volume ratio=5920:740=8:1. For spheres, volume ratio equals the cube of the radius ratio; thus (R/r)³=8 ⇒ R/r=2. The smaller sphere radius is 5/2=2.5 cm, so larger radius=2×2.5=**5 cm**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": false,
            "text": "The moon’s diameter is approximately one fourth of Earth’s diameter. Find the ratio of their surface areas.",
            "answer": {
              "answerKey": "Moon : Earth = 1:16.",
              "schoolMethod": "For spheres, surface area is proportional to the square of diameter. The diameter ratio (Moon:Earth)=1:4, so surface-area ratio=(1²):(4²)=**1:16**."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Find (i) the curved surface area and (ii) total surface area of a hemisphere of radius 21 cm.",
            "answer": {
              "answerKey": "(i) 2772 cm²; (ii) 4158 cm².",
              "schoolMethod": "For a hemisphere, CSA=2πr² and TSA=3πr². With r=21 cm and π=22/7, CSA=2×(22/7)×441=**2772 cm²**. TSA=3×(22/7)×441=**4158 cm²**."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": false,
            "text": "Metal spheres of radius 2 cm are packed in a box 16 cm×8 cm×8 cm. The box is then filled with preservative liquid. Find the liquid volume to the nearest integer.",
            "answer": {
              "answerKey": "488 cm³ approximately.",
              "schoolMethod": "Box volume=16×8×8=1024 cm³. One sphere volume=(4/3)π(2³)=32π/3 cm³. Sixteen spheres occupy 16×32π/3=512π/3≈536.17 cm³. Liquid volume=1024−512π/3≈487.83 cm³, which rounds to **488 cm³**."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "Show that increasing the radius of a sphere by 10% increases its volume by approximately 33.1%.",
            "answer": {
              "answerKey": "Increase =33.1%.",
              "schoolMethod": "Let the original radius be r. The old volume is (4/3)πr³. New radius=1.1r, so new volume=(4/3)π(1.1r)³=1.331(4/3)πr³. The new volume is 133.1% of the old volume; therefore the increase is **33.1%**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": true,
            "text": "The radius of a sphere is increased by x%, and its volume increases by 72.8%. Find x.",
            "answer": {
              "answerKey": "x=20%.",
              "schoolMethod": "The volume factor is 1+72.8/100=1.728. If the radius factor is 1+x/100, then (1+x/100)³=1.728. Since 1.2³=1.728, 1+x/100=1.2, hence **x=20%**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "A hemispherical dome has base circumference 35.2 m. Find the cost of painting its curved surface at ₹10 per 100 cm².",
            "answer": {
              "answerKey": "₹1,97,120.",
              "schoolMethod": "Base circumference 2πr=35.2 m. Using π=22/7, r=35.2×7/44=5.6 m. Curved surface area of a hemisphere=2πr²=2×(22/7)×(5.6)²=197.12 m². Since 1 m²=10,000 cm², area=1,971,200 cm²=19,712 lots of 100 cm². Cost=19,712×₹10=**₹1,97,120**."
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
            "text": "Estimate how many scoops of ice cream can be obtained from a cuboidal container measuring 10 cm×15 cm×20 cm.",
            "answer": {
              "answerKey": "Approximately 45 average scoops, assuming each scoop is about a sphere of radius 2.5 cm.",
              "schoolMethod": "Container volume=10×15×20=3000 cm³. Assume one average scoop is approximated by a sphere of radius 2.5 cm. Its volume is (4/3)π(2.5)³≈65.45 cm³. The theoretical quotient is 3000/65.45≈45.8, so the container contains about **45 full scoops** under this assumption. Scoop size and trapped air change the real count, so the result is an estimate, not an exact universal number."
            }
          },
          {
            "id": "q2",
            "number": "2",
            "isHard": false,
            "text": "A cube of integer side length a is made of unit cubes. Give an expression for the number of unit cubes to be added to make a cube of side a+1.",
            "answer": {
              "answerKey": "3a²+3a+1.",
              "schoolMethod": "The existing cube contains a³ unit cubes. The larger cube contains (a+1)³. The extra cubes needed are (a+1)³−a³=a³+3a²+3a+1−a³=**3a²+3a+1**."
            }
          },
          {
            "id": "q3",
            "number": "3",
            "isHard": true,
            "text": "Estimate: (i) could one person drink enough water in a lifetime to fill a classroom? (ii) estimate the number of bricks used in the walls of a classroom.",
            "answer": {
              "answerKey": "(i) Usually no; an 80-year drinking-water estimate is about 58 m³ versus a classroom around 150–200 m³. (ii) About 4000 bricks under the sample dimensions below.",
              "schoolMethod": "(i) Assume a person drinks 2 L/day for 80 years. Water consumed≈2×365×80=58,400 L=**58.4 m³**. A sample classroom of 8 m×7 m×3 m has volume 168 m³, nearly three times as much. Under these assumptions the answer is **no**. A smaller room or higher daily water amount changes the comparison.\n\n(ii) Assume the classroom is 8 m×7 m with 3 m wall height. Gross wall area=perimeter×height=2(8+7)×3=90 m². Subtract about 8 m² for doors and windows, leaving 82 m². Approximate exposed face area of one brick is 0.20×0.10=0.020 m², so estimated brick count=82/0.020=**4100 bricks**, before allowing for mortar and breakage. This is a transparent estimate, not a site measurement."
            }
          },
          {
            "id": "q4",
            "number": "4",
            "isHard": false,
            "text": "Compare: (A) one chocolate cube of side 50 mm; (B) 100 chocolate cubes of side 10 mm. Which gives more chocolate?",
            "answer": {
              "answerKey": "A gives 125 cm³; B gives 100 cm³, so A gives more.",
              "schoolMethod": "Convert units: 50 mm=5 cm, so A volume=5³=**125 cm³**. Each cube in B has side 10 mm=1 cm and volume 1 cm³; 100 cubes have total volume **100 cm³**. Option A gives 25 cm³ more chocolate."
            }
          },
          {
            "id": "q5",
            "number": "5",
            "isHard": true,
            "text": "If all people in the world were crowded together at one location, approximately how much ground area would they cover?",
            "answer": {
              "answerKey": "About 2000 km², using 8 billion people and 0.25 m² per person.",
              "schoolMethod": "For an estimate, take world population as about 8 billion and allocate 0.25 m² per person for very tightly packed standing people. Area=8×10⁹×0.25=2×10⁹ m². Since 1 km²=10⁶ m², this is **2000 km²**. This is equivalent to a square roughly √2000≈44.7 km on each side. The answer scales directly with the assumed space per person."
            }
          },
          {
            "id": "q6",
            "number": "6",
            "isHard": false,
            "text": "Milk is served in cylindrical glasses of diameter 7 cm and filled to height 12 cm. How many litres are needed for 1600 students? Use 1000 cm³=1 L.",
            "answer": {
              "answerKey": "About 739 L.",
              "schoolMethod": "Radius=7/2=3.5 cm, height=12 cm. One glass volume=πr²h=π(3.5)²(12)=147π cm³. With π=22/7, this is 462 cm³. For 1600 students: 462×1600=739,200 cm³=**739.2 L**."
            }
          },
          {
            "id": "q7",
            "number": "7",
            "isHard": false,
            "text": "The surface area of a sphere of radius 5 cm is five times the curved surface area of a cone of radius 4 cm. Find the cone’s height and volume.",
            "answer": {
              "answerKey": "Height 3 cm; volume 16π cm³.",
              "schoolMethod": "Sphere surface area=4π(5²)=100π cm². This equals five times the cone’s CSA, so the cone CSA=20π cm². For radius 4, CSA=πrl=4πl; hence 4πl=20π ⇒ l=5 cm. Cone height h=√(l²−r²)=√(25−16)=3 cm. Volume=(1/3)πr²h=(1/3)π×16×3=**16π cm³**."
            }
          },
          {
            "id": "q8",
            "number": "8",
            "isHard": true,
            "text": "Take Earth radius 6370 km, Jupiter radius 69,900 km and Sun radius 695,700 km. Estimate (i) Jupiter/Earth volume ratio and (ii) Sun/Earth volume ratio.",
            "answer": {
              "answerKey": "(i) ≈1321:1; (ii) ≈1,302,710:1.",
              "schoolMethod": "For spheres, V=(4/3)πr³, so the ratios are cubes of the radius ratios.\n\n(i) VJ/VE=(69,900/6370)³≈**1321.34**. Jupiter’s volume is about 1321 times Earth’s.\n\n(ii) VS/VE=(695,700/6370)³≈**1,302,710**. The Sun’s volume is about 1.30 million times Earth’s. The common factor (4/3)π cancels."
            }
          },
          {
            "id": "q9",
            "number": "9",
            "isHard": false,
            "text": "Show that the volume of a sphere equals 2/3 of the volume of the smallest cylinder that encloses it.",
            "answer": {
              "answerKey": "Vsphere=(2/3)Vcylinder.",
              "schoolMethod": "Let the sphere radius be r. The smallest right circular cylinder enclosing it has radius r and height 2r. Cylinder volume=πr²(2r)=2πr³. Sphere volume=(4/3)πr³. Therefore Vsphere/Vcylinder=[(4/3)πr³]/(2πr³)=**2/3**, as required."
            }
          },
          {
            "id": "q10",
            "number": "10",
            "isHard": true,
            "text": "A string wraps tightly around the equator of a spherical body. A second string 1 m longer forms a concentric circle at a constant height above it. Find the height above the surface for Earth, Moon, Jupiter and a volleyball.",
            "answer": {
              "answerKey": "For every sphere, height =1/(2π) m≈0.159 m=15.9 cm.",
              "schoolMethod": "Let the original radius be R and the added height be h. The circumference increases from 2πR to 2π(R+h), an increase of 2πh. Since the added string is 1 m longer, 2πh=1 ⇒ h=1/(2π)=0.15915 m≈**15.9 cm**. The original radius cancels, so the answer is the same for Earth, the Moon, Jupiter and a volleyball, assuming perfect spheres and a uniform gap."
            }
          },
          {
            "id": "q11",
            "number": "11",
            "isHard": true,
            "text": "A square pyramid is fitted inside a cylinder of radius r and height h. The square base lies on the cylinder’s base with its corners on the circular boundary; the apex lies on the top. Find volume(pyramid):volume(cylinder).",
            "answer": {
              "answerKey": "2:(3π), i.e. 2/(3π):1.",
              "schoolMethod": "The square base is inscribed in the circle of radius r. Its diagonal is the circle’s diameter 2r. If the square side is s, s√2=2r, so s²=2r². Pyramid volume=(1/3)(base area)(height)=(1/3)(2r²)h=(2/3)r²h. Cylinder volume=πr²h. Thus the ratio is [(2/3)r²h] : [πr²h] = **2/(3π):1**."
            }
          },
          {
            "id": "q12",
            "number": "12",
            "isHard": false,
            "text": "Find the change in volume when: (i) the length of a cuboid l,w,h is increased by 1 unit; (ii) the radius of a cylinder r,h is increased by 1 unit; (iii) the radius of a sphere is decreased by 1 unit.",
            "answer": {
              "answerKey": "(i) wh; (ii) 2πrh+πh; (iii) decrease = 4πr²−4πr+4π/3.",
              "schoolMethod": "(i) Old V=lwh; new V=(l+1)wh. Change=(l+1)wh−lwh=**wh cubic units** (option c).\n\n(ii) Old V=πr²h; new V=π(r+1)²h. Increase=πh[(r+1)²−r²]=πh(2r+1)=**2πrh+πh cubic units** (option e).\n\n(iii) For r≥1, new radius r−1. Decrease=(4/3)πr³−(4/3)π(r−1)³=(4/3)π[3r²−3r+1]=**4πr²−4πr+4π/3 cubic units**. The signed change (new minus old) is the negative of this quantity."
            }
          },
          {
            "id": "q13",
            "number": "13",
            "isHard": false,
            "text": "Given a cube of volume V, express its total surface area S in terms of V.",
            "answer": {
              "answerKey": "S=6V^(2/3).",
              "schoolMethod": "If the cube side is a, then V=a³ ⇒ a=V^(1/3). Total surface area S=6a²=6(V^(1/3))²=**6V^(2/3)**."
            }
          },
          {
            "id": "q14",
            "number": "14",
            "isHard": false,
            "text": "Given a cube with total surface area S, express its volume V in terms of S.",
            "answer": {
              "answerKey": "V=(S/6)^(3/2).",
              "schoolMethod": "For side a, S=6a², so a=√(S/6). Volume V=a³=[√(S/6)]³=**(S/6)^(3/2)**."
            }
          },
          {
            "id": "q15",
            "number": "15",
            "isHard": false,
            "text": "A cylindrical glass has radius 4 cm and water depth 16 cm. How many marbles of radius 1 cm must be dropped in to raise the water to 20 cm?",
            "answer": {
              "answerKey": "48 marbles.",
              "schoolMethod": "The rise is 20−16=4 cm. The additional volume needed is the cylinder’s base area times the rise: π(4²)(4)=64π cm³. One marble displaces its own volume (fully submerged): (4/3)π(1³)=4π/3 cm³. Number=64π÷(4π/3)=64×3/4=**48 marbles**. The final water level 20 cm is below the glass height 25 cm."
            }
          },
          {
            "id": "q16",
            "number": "16",
            "isHard": false,
            "text": "Estimate the volume of ink in a new ballpoint pen by making reasonable measurements and approximations.",
            "answer": {
              "answerKey": "About 0.3 cm³ in the illustrative pen model.",
              "schoolMethod": "Use a sample measurement: assume the ink reservoir is approximately cylindrical, with internal radius 1 mm=0.1 cm and ink length 9 cm. Cylinder volume=π(0.1)²(9)=0.09π≈0.283 cm³. Allow roughly 0.02 cm³ for the small ink-filled tip, giving an estimate of about **0.30 cm³** (0.30 mL). For a particular pen, measure its actual inner radius and ink length; changing either dimension changes the result."
            }
          },
          {
            "id": "q17",
            "number": "17",
            "isHard": true,
            "text": "(i) A ball of chapati dough has radius 6 cm. Estimate how many chapatis can be made. (ii) Estimate edible flesh in half a coconut or muskmelon after taking measurements.",
            "answer": {
              "answerKey": "(i) About 10 chapatis under the sample assumptions. (ii) For a 5 cm-radius fruit, about 180 cm³ edible flesh under a 70% yield assumption.",
              "schoolMethod": "(i) Dough volume=(4/3)π(6³)=288π≈904.8 cm³. Assume one chapati uses a dough volume equivalent to a disk of radius 12 cm and average thickness 0.2 cm: V≈π(12²)(0.2)=28.8π≈90.5 cm³. Number≈904.8/90.5≈10. Thus about **10 chapatis** can be made; actual count depends on size and thickness.\n\n(ii) As an example, approximate a half-muskmelon by a hemisphere of radius 5 cm. Half-sphere volume=(2/3)π(5³)≈261.8 cm³. If about 70% is edible flesh after excluding rind/seeds, edible volume≈0.70×261.8≈**183 cm³**. Measure the actual fruit and substitute its radius; this is only a worked estimate."
            }
          },
          {
            "id": "q18",
            "number": "18",
            "isHard": true,
            "text": "(i) Would laying every page of this textbook side-by-side cover a classroom floor? (ii) Estimate the maximum number of textbooks that fit in an empty 15 ft×20 ft×30 ft storeroom.",
            "answer": {
              "answerKey": "(i) About 8 m², usually not a classroom floor. (ii) About 303,000 by a pure volume estimate using a 20×28×1.5 cm book.",
              "schoolMethod": "(i) Suppose the book has about 150 pages, each approximately 20 cm×27 cm=0.054 m². Total area≈150×0.054=**8.1 m²**. A sample classroom floor 8 m×7 m=56 m² is much larger, so the pages would not cover it.\n\n(ii) Storeroom volume=15×20×30=9000 ft³. Since 1 ft³≈0.0283168 m³, that is about 254.85 m³. Approximate one book as 20 cm×28 cm×1.5 cm=840 cm³=0.00084 m³. Volume ratio=254.85/0.00084≈303,393, so the idealized upper bound is about **303,000 books**. Real packing is lower because of gaps, orientation and access space."
            }
          },
          {
            "id": "q19",
            "number": "19",
            "isHard": true,
            "text": "Estimate the side length of a giant cube that could contain the entire human population.",
            "answer": {
              "answerKey": "About 824 m, using 8 billion people and 0.07 m³ per person’s body volume.",
              "schoolMethod": "For an order-of-magnitude estimate, take population as 8×10⁹ and average human body volume as approximately 0.07 m³. Total body volume≈8×10⁹×0.07=5.6×10⁸ m³. If tightly packed into one cube, side s satisfies s³=5.6×10⁸, so s=∛(5.6×10⁸)≈**824 m**. Real packing would require extra space, making the cube larger."
            }
          },
          {
            "id": "q20",
            "number": "20",
            "isHard": true,
            "text": "Earth radius is about 6371 km and the estimated volume of surface water is 1.38 billion km³. If all this water formed a uniform spherical layer around Earth, (i) write an expression for thickness t; (ii) evaluate it.",
            "answer": {
              "answerKey": "t=[6371³+3(1.38×10⁹)/(4π)]^(1/3)−6371≈2.704 km.",
              "schoolMethod": "(i) Let R=6371 km. The water shell volume equals the difference of sphere volumes:\n\n(4/3)π[(R+t)³−R³]=1.38×10⁹.\n\nSolving for t gives **t=[R³+3(1.38×10⁹)/(4π)]^(1/3)−R**, with R=6371 km.\n\n(ii) Substitution gives t≈**2.704 km**, or about 2.7 km. The thin-shell approximation V≈4πR²t gives almost the same result."
            }
          },
          {
            "id": "q21",
            "number": "21",
            "isHard": true,
            "text": "Give the dimensions of a cuboid whose volume is halved when its surface area is doubled.",
            "answer": {
              "answerKey": "The question does not specify the original solid or reference dimensions. Relative to a unit cube (volume 1 and total surface area 6), one approximate example is 2.361 × 2.361 × 0.0897 units: volume ≈0.5 and total surface area ≈12. This is not unique.",
              "schoolMethod": "The prompt does not state the starting cuboid, so the phrase “halved” and “doubled” needs a reference. To give a concrete example, take a **unit cube** as the reference: volume 1 unit³ and total surface area 6 unit². We seek a cuboid with dimensions a × a × c satisfying\n\n(a) a²c = 1/2\n\n(b) 2(a² + 2ac) = 12, so a² + 2ac = 6.\n\nFrom (a), c = 1/(2a²). Substitute into (b): a² + 1/a = 6, or a³ − 6a + 1 = 0. One positive root is approximately a = 2.361; then c = 1/(2a²) ≈ 0.0897.\n\nThus one approximate example is **2.361 × 2.361 × 0.0897 units**. Its volume is about 0.5 unit³ and its total surface area about 12 unit². Other dimensions may also work; the original wording is ambiguous without a specified reference object."
            }
          },
          {
            "id": "q22",
            "number": "22",
            "isHard": true,
            "text": "Project: estimate the volume of a house using reasonable dimensions and show the calculations.",
            "answer": {
              "answerKey": "Illustrative total interior volume ≈189 m³.",
              "schoolMethod": "Divide the house into simple cuboids and add their volumes. One sample layout, with 3 m ceiling height, is:\n\n| Room | Assumed dimensions (m) | Volume |\n|---|---|---:|\n| Living room | 5×4×3 | 60 m³ |\n| Bedroom 1 | 4×3×3 | 36 m³ |\n| Bedroom 2 | 4×3×3 | 36 m³ |\n| Kitchen | 3×3×3 | 27 m³ |\n| Bathroom | 2×2×3 | 12 m³ |\n| Corridor | 4×1.5×3 | 18 m³ |\n\nTotal=60+36+36+27+12+18=**189 m³**. This is an illustrative solution: replace the assumed dimensions with measurements of the actual house, and include or exclude wall thickness consistently."
            }
          }
        ]
      },
      {
        "id": "ex14.reflect",
        "title": "In-text and Think and Reflect",
        "questions": [
          {
            "id": "q1",
            "number": "1",
            "isHard": false,
            "text": "Explain why the volume of a cuboid is area of base × height. Then write the total surface area and volume formulas for a cube of side a.",
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
