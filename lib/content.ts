import { IT_CHAPTERS } from './content-it';
import { EMPLOYABILITY_CHAPTERS } from './content-employability';
import { SST_CHAPTERS } from './content-sst';
import { ADVMATH_CHAPTERS } from './content-advmath';
import { ADVSCIENCE_CHAPTERS } from './content-advscience';
import { HINDI_CHAPTERS } from './content-hindi';
import { REVA_HINDI_CHAPTERS } from './content-hindi-reva';
import { IRAVATI_CHAPTERS } from './content-iravati';
import { ARTS_CHAPTERS } from './content-arts';
import { KAUSHAL_VIKAS_CHAPTERS } from './content-kaushal';

export interface Chapter {
  id:       string;
  number:   number;
  title:    string;
  slug:     string;
  code:     string;
  description?: string;
  exercises: Exercise[];
}

export interface Exercise {
  id:     string;
  title:  string;
  questions: Question[];
}

export interface Question {
  id:      string;
  number:  string;
  text:    string;
  parts?:  string[];
  isHard:  boolean;
  answer:  Answer;
}

export interface Answer {
  answerKey:     string;
  schoolMethod:  string;
  trickMethod?:  string;
}

export interface Subject {
  id:       string;
  name:     string;
  slug:     string;
  book:     string;
  bookSlug: string;
  code:     string;
  icon:     string;
  color:    string;
  downloadUrl?: string;
  description?: string;
  chapters: Chapter[];
}

// ─── MATHS (Ganita Manjari Part I, 2026) ──────────────────────────────────────
// Chapter codes: 0904ch01 through 0904ch08

const MATHS_CHAPTERS: Chapter[] = [
  {
    id: 'ch01', number: 1,
    title: 'Orienting Yourself: The Use of Coordinates',
    slug:  'orienting-yourself-the-use-of-coordinates',
    code:  '0904ch01',
    exercises: [
      {
        id: 'ex1.1', title: 'Exercise Set 1.1',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'What is the x-coordinate of a point on the y-axis?',
            answer: {
              answerKey: 'The x-coordinate of any point on the y-axis is $\\boxed{0}$.',
              schoolMethod: `**Solution:**

A point on the y-axis lies exactly on the vertical axis. By the definition of the Cartesian coordinate system, any point on the y-axis has no horizontal displacement from the origin.

Therefore, the x-coordinate of any point on the y-axis is \$\\boxed{0}$.

*Examples:* The points $(0, 3)$, $(0, -5)$, $(0, 0)$ all lie on the y-axis.`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Is there a similar generalisation for a point on the x-axis?',
            answer: {
              answerKey: 'Yes. The y-coordinate of any point on the x-axis is $\\boxed{0}$.',
              schoolMethod: `**Solution:**

Yes. A point on the x-axis lies on the horizontal axis, which means it has no vertical displacement from the origin.

Therefore, the y-coordinate of any point on the x-axis is \$\\boxed{0}$.

*Examples:* The points $(4, 0)$, $(-2, 0)$, $(0, 0)$ all lie on the x-axis.`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'Does point Q(y, x) ever coincide with point P(x, y)? Justify your answer.',
            answer: {
              answerKey: 'Yes, when $\\boxed{x = y}$. The two points coincide only when both coordinates are equal.',
              schoolMethod: `**Solution:**

Point $P = (x, y)$ and Point $Q = (y, x)$.

For $P$ and $Q$ to coincide, we need both coordinates to be equal:
$$x = y \\quad \\text{and} \\quad y = x$$

Both conditions say the same thing: $x = y$.

**Conclusion:** $Q(y, x)$ coincides with $P(x, y)$ **if and only if** \$\\boxed{x = y}$.

*Example:* If $x = 3, y = 3$, then $P = (3, 3) = Q$. ✓  
If $x = 2, y = 5$, then $P = (2, 5) \\neq Q = (5, 2)$. ✗`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: 'If x ≠ y, then (x, y) ≠ (y, x); and (x, y) = (y, x) if and only if x = y. Is this statement true? Give reasons.',
            answer: {
              answerKey: '$\boxed{\text{True}}$. An ordered pair is equal to another only when both the first elements and second elements are equal.',
              schoolMethod: `**Solution:**

Two ordered pairs $(a, b) = (c, d)$ if and only if $a = c$ **and** $b = d$.

**Part 1:** If $x \\neq y$, then $(x, y) \\neq (y, x)$

For $(x, y) = (y, x)$, we need $x = y$ (first elements equal) and $y = x$ (second elements equal).  
Both reduce to $x = y$. Since we assumed $x \\neq y$, this cannot hold.  
∴ $(x, y) \\neq (y, x)$ when $x \\neq y$. ✓

**Part 2:** $(x, y) = (y, x)$ if and only if $x = y$

If $x = y$: $(x, y) = (x, x) = (x, x) = (y, x)$ ✓  
If $(x, y) = (y, x)$: Then $x = y$ (from first elements) ✓

**The statement is \$\\boxed{\\text{TRUE}}$.**`,
            }
          },
        ]
      },
      {
        id: 'ex1.2', title: 'Exercise Set 1.2',
        questions: [
          {
            id: 'q1', number: '1', isHard: true,
            text: "Place Reiaan's rectangular study table with three of its feet at the points (8, 9), (11, 9) and (11, 6). What are the coordinates of the fourth foot?",
            answer: {
              answerKey: 'The fourth foot is at $\\boxed{(8, 6)}$.',
              schoolMethod: `**Solution:**

Given three feet of the rectangular table:
- $A = (8, 9)$
- $B = (11, 9)$  
- $C = (11, 6)$
- $D = ?$

**Step 1:** A rectangle has opposite sides equal and parallel.

From $A$ to $B$: the y-coordinate stays at 9, x goes from 8 to 11.  
From $C$: y is 6, x is 11.  

**Step 2:** The fourth vertex $D$ must complete the rectangle.

$D$ must have the same x-coordinate as $A$ (which is 8) and the same y-coordinate as $C$ (which is 6).

$$D = \\boxed{(8, 6)}$$

**Verification:** $AB \\parallel DC$ and $AD \\parallel BC$ ✓  
$AB = BC = 3$ units (it's a square table!) ✓`,
              trickMethod: `In a rectangle, opposite vertices have coordinates: if three vertices are $(x_1, y_1)$, $(x_1, y_2)$, $(x_2, y_2)$, the fourth is $(x_2, y_1)$.

Here: $(8,9)$, $(11,9)$, $(11,6)$ → fourth $= (8, 6)$.`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "If the bathroom door has a hinge at B1 and opens into the bedroom, will it hit the wardrobe? Are there any other pieces of furniture it might hit?",
            answer: {
              answerKey: 'Answers depend on the specific figure coordinates. Check if the arc of the door overlaps with the wardrobe or other furniture positions.',
              schoolMethod: `**Solution:**

To determine if the door hits the wardrobe:

**Step 1:** The door swings in an arc. The radius of the arc = the width of the door.

**Step 2:** Plot the arc using the hinge $B_1$ as the centre, with radius = door width.

**Step 3:** Check if any furniture coordinates lie within or on this arc.

*If the arc overlaps with the wardrobe's coordinates:* The door will hit it.  
*If not:* It will open freely.

**Conclusion:** By examining the figure, trace the door's sweep and compare with furniture positions. If any furniture point falls within the circular arc, the door will hit it.`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: "Look at Reiaan's bathroom. (i) What are the coordinates of the four corners O, F, R, and P of the bathroom? (ii) What is the length and width of the bathroom? (iii) Would a 1-metre wide window fit in each wall?",
            answer: {
              answerKey: 'Read coordinates from the figure. Length and width = difference in respective coordinates. A 1-metre window fits if the wall length > 1 metre.',
              schoolMethod: `**Solution:**

**(i) Coordinates of corners:**  
Read directly from the coordinate plane in the figure.  
$O = (0, 0)$, $F$, $R$, $P$ — read from the graph.

**(ii) Length and Width:**  
$$\\text{Length} = |x_2 - x_1|, \\quad \\text{Width} = |y_2 - y_1|$$

**(iii) Window fit:**  
A 1-metre wide window fits if the wall is longer than 1 metre.  
Compare each wall's length with 1 metre.`,
            }
          },
        ]
      },
      {
        id: 'ex1.eoc', title: 'End-of-Chapter Exercises',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "What are the x-coordinate and y-coordinate of the point of intersection of the x-axis and y-axis?",
            answer: {
              answerKey: 'The origin $\\boxed{(0, 0)}$. Both coordinates are 0.',
              schoolMethod: `**Solution:**

The x-axis and y-axis intersect at the **origin**.

The origin has coordinates $(0, 0)$.

So: x-coordinate $= \\boxed{0}$, y-coordinate $= \\boxed{0}$.`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "Point W has x-coordinate equal to –5. Can you predict the quadrant(s) where W might be? Are there any quadrants where W cannot be?",
            answer: {
              answerKey: 'W is in Quadrant $\boxed{\text{II or III}}$. It cannot be in Quadrant I or Quadrant IV (where x > 0).',
              schoolMethod: `**Solution:**

$W = (-5, y)$ for some value of $y$.

**Quadrant analysis for x-coordinate = –5 (negative):**

<table class="w-full text-sm border border-[var(--border)] rounded-lg overflow-hidden">
<thead class="bg-[var(--surface-2)]"><tr>
<th class="px-3 py-2 text-left font-semibold border-b border-[var(--border)]">Quadrant</th>
<th class="px-3 py-2 text-left font-semibold border-b border-[var(--border)]">x-sign</th>
<th class="px-3 py-2 text-left font-semibold border-b border-[var(--border)]">y-sign</th>
<th class="px-3 py-2 text-left font-semibold border-b border-[var(--border)]">Possible?</th>
</tr></thead>
<tbody>
<tr class="border-b border-[var(--border-subtle)]"><td class="px-3 py-2">I</td><td class="px-3 py-2">+</td><td class="px-3 py-2">+</td><td class="px-3 py-2">✗ (x = –5 &lt; 0)</td></tr>
<tr class="border-b border-[var(--border-subtle)]"><td class="px-3 py-2">II</td><td class="px-3 py-2">–</td><td class="px-3 py-2">+</td><td class="px-3 py-2">✓ (e.g., W = (–5, 3))</td></tr>
<tr class="border-b border-[var(--border-subtle)]"><td class="px-3 py-2">III</td><td class="px-3 py-2">–</td><td class="px-3 py-2">–</td><td class="px-3 py-2">✓ (e.g., W = (–5, –2))</td></tr>
<tr><td class="px-3 py-2">IV</td><td class="px-3 py-2">+</td><td class="px-3 py-2">–</td><td class="px-3 py-2">✗ (x = –5 &lt; 0)</td></tr>
</tbody>
</table>

**W can be in Quadrant II or III.  
W cannot be in Quadrant I or IV.**`,
            }
          },
          {
            id: 'q3', number: '3', isHard: true,
            text: "Consider the points R(3, 0), A(0, –2), M(–5, –2) and P(–5, 2). If we join these points in order, what figure do we get? Find its perimeter.",
            answer: {
              answerKey: 'The figure is a $\boxed{\text{quadrilateral (trapezium)}}$. Calculate each side using the distance formula, then add.',
              schoolMethod: `**Solution:**

Points: $R(3, 0)$, $A(0, -2)$, $M(-5, -2)$, $P(-5, 2)$

**Step 1:** Use distance formula: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$

$$RA = \\sqrt{(0-3)^2 + (-2-0)^2} = \\sqrt{9+4} = \\sqrt{13}$$

$$AM = \\sqrt{(-5-0)^2 + (-2-(-2))^2} = \\sqrt{25+0} = 5$$

$$MP = \\sqrt{(-5-(-5))^2 + (2-(-2))^2} = \\sqrt{0+16} = 4$$

$$PR = \\sqrt{(3-(-5))^2 + (0-2)^2} = \\sqrt{64+4} = \\sqrt{68} = 2\\sqrt{17}$$

**Step 2:** Perimeter $= \\sqrt{13} + 5 + 4 + 2\\sqrt{17}$

$= 3.606 + 5 + 4 + 8.246 \\approx \\boxed{20.85}$ units`,
              trickMethod: `Plot on a grid. Side $AM$ is horizontal (y same), $MP$ is vertical (x same) — these are easy. Use distance formula only for diagonal sides $RA$ and $PR$.`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: "Plot point Z(5, –6) on the Cartesian plane. Construct a right-angled triangle using Z, the origin O, and a point on the x-axis. Find the length of the hypotenuse.",
            answer: {
              answerKey: 'Hypotenuse $OZ = \\sqrt{61} \\approx \\boxed{7.81}$ units.',
              schoolMethod: `**Solution:**

$Z = (5, -6)$, $O = (0, 0)$

**Step 1:** Take point $X = (5, 0)$ on the x-axis.

Triangle $OXZ$:  
- $OX = 5$ units (horizontal leg)  
- $XZ = 6$ units (vertical leg)  
- $OZ$ = hypotenuse

**Step 2:** By Pythagoras' theorem:
$$OZ = \\sqrt{OX^2 + XZ^2} = \\sqrt{5^2 + 6^2} = \\sqrt{25 + 36} = \\sqrt{61} \\approx \\boxed{7.81} \\text{ units}$$`,
            }
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: "What would a system of coordinates be like if we did not have negative numbers? Would we be able to represent all points in the plane?",
            answer: {
              answerKey: '$\boxed{\text{No}}$. Without negative numbers, we could only represent the first quadrant. Points in quadrants II, III, and IV would be unrepresentable.',
              schoolMethod: `**Solution:**

Without negative numbers, all coordinates must be $\\geq 0$.

This means we can only plot points $(x, y)$ where $x \\geq 0$ and $y \\geq 0$ — **only Quadrant I**.

Points like $(-3, 2)$ (Q II), $(-1, -4)$ (Q III), $(5, -2)$ (Q IV) could not be represented.

**Conclusion:** We would lose $\\frac{3}{4}$ of the plane. The coordinate system would be incomplete and unable to represent points to the left of or below the origin.`,
            }
          },
          {
            id: 'q6', number: '★6', isHard: true,
            text: "Are the points M(−3, −4), A(0, 0) and G(6, 8) on the same straight line? Suggest a method to check this without plotting and joining the points.",
            answer: {
              answerKey: "Yes, M, A and G are collinear. Slope of AM = Slope of AG = 4/3.",
              schoolMethod: `**Solution:**

Compare the slopes of line segments AM and AG.

$$\\text{Slope of AM} = \\frac{-4 - 0}{-3 - 0} = \\frac{-4}{-3} = \\frac{4}{3}$$

$$\\text{Slope of AG} = \\frac{8 - 0}{6 - 0} = \\frac{8}{6} = \\frac{4}{3}$$

Both slopes are equal.

**Therefore, M, A and G are on the same straight line.**`,
            }
          },
          {
            id: 'q7', number: '★7', isHard: true,
            text: "Use your method (from Problem 6) to check if the points R(−5, −1), B(−2, −5) and C(4, −12) are on the same straight line. Now plot both sets of points and check your answers.",
            answer: {
              answerKey: "Slope of RB = −4/3 and Slope of BC = −7/6. The slopes are not equal, so R, B and C are not collinear.",
              schoolMethod: `**Solution:**

Slope of RB = $\\frac{-5 - (-1)}{-2 - (-5)} = \\frac{-4}{3}$

Slope of BC = $\\frac{-12 - (-5)}{4 - (-2)} = \\frac{-7}{6}$

The slopes are not equal.

**Therefore, R, B and C are not on the same straight line.**`,
            }
          },
          {
            id: 'q8', number: '★8', isHard: true,
            text: "Using the origin as one vertex, plot the vertices of: (i) A right-angled isosceles triangle. (ii) An isosceles triangle with one vertex in Quadrant III and the other in Quadrant IV.",
            answer: {
              answerKey: "(i) O(0,0), A(2,0), B(0,2) — right-angled isosceles. (ii) O(0,0), A(−2,−2), B(2,−2) — isosceles with A in Q-III, B in Q-IV.",
              schoolMethod: `**Solution:**

**(i)** One possible set of vertices: O(0, 0), A(2, 0) and B(0, 2).

OA = OB = 2 units and OA ⊥ OB.

Hence, it is a right-angled isosceles triangle.

**(ii)** One possible set of vertices: O(0, 0), A(−2, −2) and B(2, −2).

OA = OB = √8 = 2√2 units.

Hence, it is an isosceles triangle with A in Quadrant III and B in Quadrant IV.`,
            }
          },
          {
            id: 'q9', number: '★9', isHard: true,
            text: "The following table shows the coordinates of points S, M and T. In each case, state whether M is the midpoint of segment ST. Justify your answer.",
            answer: {
              answerKey: "Check: Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2). Results: (i) Yes, (ii) Yes, (iii) No, (iv) No.",
              schoolMethod: `**Solution:**

| S | M | T | Midpoint of ST | Is M the midpoint? |
|---|---|---|---|---|
| (−3, 0) | (0, 0) | (3, 0) | (0, 0) | **Yes** |
| (2, 3) | (3, 4) | (4, 5) | (3, 4) | **Yes** |
| (0, 0) | (0, 5) | (0, −10) | (0, −5) ≠ (0, 5) | **No** |
| (−8, 7) | (0, −2) | (6, −3) | (−1, 2) ≠ (0, −2) | **No** |

When M is the midpoint of ST:
$$x\\text{-coordinate of M} = \\frac{x_1 + x_2}{2}, \\quad y\\text{-coordinate of M} = \\frac{y_1 + y_2}{2}$$`,
            }
          },
          {
            id: 'q10', number: '★10', isHard: true,
            text: "Use the connection you found to find the coordinates of B given that M(−7, 1) is the midpoint of A(3, −4) and B(x, y).",
            answer: {
              answerKey: "B = $\\boxed{(-17, 6)}$",
              schoolMethod: `**Solution:**

Using midpoint formula:

$$-7 = \\frac{3 + x}{2} \\implies -14 = 3 + x \\implies x = -17$$

$$1 = \\frac{-4 + y}{2} \\implies 2 = -4 + y \\implies y = 6$$

**Therefore, the coordinates of B are (−17, 6).**`,
            }
          },
          {
            id: 'q11', number: '★11', isHard: true,
            text: "Let P, Q be points of trisection of AB, with P closer to A, and Q closer to B. Using your knowledge of how to find the coordinates of the midpoint of a segment, how would you find the coordinates of P and Q? Do this for the case when the points are A(4, 7) and B(16, −2).",
            answer: {
              answerKey: "P = (7, 19/4) and Q = (13, 1/4)",
              schoolMethod: `**Solution:**

First, find the midpoint M of AB:
$$M = \\left(\\frac{4+16}{2}, \\frac{7-2}{2}\\right) = \\left(10, \\frac{5}{2}\\right)$$

P is the midpoint of AM:
$$P = \\left(\\frac{4+10}{2}, \\frac{7+\\frac{5}{2}}{2}\\right) = \\left(7, \\frac{19}{4}\\right)$$

Q is the midpoint of MB:
$$Q = \\left(\\frac{10+16}{2}, \\frac{\\frac{5}{2}-2}{2}\\right) = \\left(13, \\frac{1}{4}\\right)$$

**Therefore, P = (7, 19/4) and Q = (13, 1/4).**`,
            }
          },
          {
            id: 'q12', number: '★12', isHard: true,
            text: "(i) Given the points A(1, −8), B(−4, 7) and C(−7, −4), show that they lie on a circle K whose center is the origin O(0, 0). What is the radius of circle K? (ii) Given the points D(−5, 6) and E(0, 9), check whether D and E lie within the circle, on the circle, or outside the circle K.",
            answer: {
              answerKey: "(i) A, B, C lie on circle K with radius = √65 units. (ii) D lies inside the circle, E lies outside the circle.",
              schoolMethod: `**Solution:**

**(i)** Since the centre is O(0, 0):

OA² = 1² + (−8)² = 1 + 64 = 65
OB² = (−4)² + 7² = 16 + 49 = 65
OC² = (−7)² + (−4)² = 49 + 16 = 65

Thus, OA = OB = OC = √65

**Therefore, A, B and C lie on the same circle K with radius = √65 units.**

**(ii)** OD² = (−5)² + 6² = 25 + 36 = 61
OE² = 0² + 9² = 81

Since 61 < 65, **D lies inside the circle**.
Since 81 > 65, **E lies outside the circle**.`,
            }
          },
          {
            id: 'q13', number: '★13', isHard: true,
            text: "The midpoints of the sides of triangle ABC are the points D, E, and F. Given that the coordinates of D, E, and F are (5, 1), (6, 5), and (0, 3), respectively, find the coordinates of A, B and C.",
            answer: {
              answerKey: "A = (−1, −1), B = (11, 3), C = (1, 7)",
              schoolMethod: `**Solution:**

D, E and F are the midpoints of AB, BC and CA respectively.

Since D is the midpoint of AB, E of BC and F of CA:

$$A = D + F - E = (5, 1) + (0, 3) - (6, 5) = (-1, -1)$$
$$B = D + E - F = (5, 1) + (6, 5) - (0, 3) = (11, 3)$$
$$C = E + F - D = (6, 5) + (0, 3) - (5, 1) = (1, 7)$$

**Therefore, A = (−1, −1), B = (11, 3), C = (1, 7).**`,
            }
          },
          {
            id: 'q14', number: '14', isHard: false,
            text: "A city has two main roads which cross each other at the centre of the city. These two roads are along the North–South (N–S) direction and East–West (E–W) direction. All the other streets of the city run parallel to these roads and are 200 m apart. There are 10 streets in each direction. (i) Using 1 cm = 200 m, draw a model of the city in your notebook. Represent the streets by single lines. (ii) There are street intersections in the model. Each street intersection is formed by two streets — one running in the N–S direction and another in the E–W direction. Each street intersection is referred to in the following manner: If the 2nd street running in the N–S direction and 5th street in the E–W direction meet at some crossing, then we call this street intersection (2, 5). Using this convention, find: (a) how many street intersections can be referred to as (4, 3). (b) how many street intersections can be referred to as (3, 4).",
            answer: {
              answerKey: "(i) Draw 10 parallel N–S streets and 10 parallel E–W streets, each 1 cm apart. (ii)(a) 1 intersection, (ii)(b) 1 intersection.",
              schoolMethod: `**Solution:**

**(i)** Each adjacent pair of streets is 200 m apart. Using the scale 1 cm = 200 m, adjacent parallel streets will be 1 cm apart in the model. Draw 10 parallel N–S streets and 10 parallel E–W streets.

**(ii)(a)** (4, 3) means the 4th N–S street and the 3rd E–W street. These two streets meet at exactly one point.

**No. of such intersections = 1**

**(ii)(b)** (3, 4) means the 3rd N–S street and the 4th E–W street. These two streets also meet at exactly one point.

**No. of such intersections = 1**`,
            }
          },
          {
            id: 'q15', number: '15', isHard: false,
            text: "A computer graphics program displays images on a rectangular screen whose coordinate system has the origin at the bottom-left corner. The screen is 800 pixels wide and 600 pixels high. A circular icon of radius 80 pixels is drawn with its centre at the point A(100, 150). Another circular icon of radius 100 pixels is drawn with its centre at the point B(250, 230). Determine: (i) whether any part of either circle lies outside the screen. (ii) whether the two circles intersect each other.",
            answer: {
              answerKey: "(i) No part of either circle lies outside the screen. (ii) The circles intersect each other (distance between centres = 170 pixels, sum of radii = 180, difference of radii = 20; since 20 < 170 < 180, they intersect at two points).",
              schoolMethod: `**Solution:**

**(i)** For circle A, centre = (100, 150), radius = 80:
Leftmost x = 20, rightmost x = 180, bottom y = 70, top y = 230.
All within the screen (0 ≤ x ≤ 800, 0 ≤ y ≤ 600).

For circle B, centre = (250, 230), radius = 100:
Leftmost x = 150, rightmost x = 350, bottom y = 130, top y = 330.
All within the screen.

**Therefore, no part of either circle lies outside the screen.**

**(ii)** Distance between centres:
$$AB = \\sqrt{(250-100)^2 + (230-150)^2} = \\sqrt{150^2 + 80^2} = \\sqrt{28900} = 170 \\text{ pixels}$$

Sum of radii = 80 + 100 = 180 pixels
Difference of radii = 100 − 80 = 20 pixels

Since 20 < 170 < 180, **the circles intersect each other at two points.**`,
            }
          },
          {
            id: 'q16', number: '16', isHard: false,
            text: "Plot the points A(2, 1), B(−1, 2), C(−2, −1), and D(1, −2) in the coordinate plane. Is ABCD a square? Can you explain why? What is the area of this square?",
            answer: {
              answerKey: "Yes, ABCD is a square. All four sides are equal (AB = BC = CD = DA = √10) and adjacent sides are perpendicular (AB ⊥ BC). Area = 10 square units.",
              schoolMethod: `**Solution:**

AB² = (−1 − 2)² + (2 − 1)² = 9 + 1 = 10
BC² = (−2 + 1)² + (−1 − 2)² = 1 + 9 = 10
CD² = (1 + 2)² + (−2 + 1)² = 9 + 1 = 10
DA² = (2 − 1)² + (1 + 2)² = 1 + 9 = 10

All four sides are equal.

Slope of AB = (2 − 1)/(−1 − 2) = 1/(−3) = −1/3
Slope of BC = (−1 − 2)/(−2 + 1) = −3/(−1) = 3

Their product = −1, so AB ⊥ BC.

**Therefore, ABCD is a square.**

Area of square = side² = (√10)² = **10 square units**`,
            }
          },
        ]
      },
    ]
  },

  {
    id: 'ch02', number: 2,
    title: 'Introduction to Linear Polynomials',
    slug:  'introduction-to-linear-polynomials',
    code:  '0904ch02',
    exercises: [
      {
        id: 'ex2.1', title: 'Exercise Set 2.1',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Find the degrees of the following polynomials: (i) $2x^2 - 5x + 3$ (ii) $y^3 + 2y - 1$ (iii) $-9$ (iv) $4z - 7$',
            answer: {
              answerKey: '(i) $\\boxed{2}$  (ii) $\\boxed{3}$  (iii) $\\boxed{0}$  (iv) $\\boxed{1}$',
              schoolMethod: `**Solution:**

The **degree** of a polynomial is the highest power of the variable.

**(i)** $2x^2 - 5x + 3$: Highest power of $x$ is **2**. Degree = \$\\boxed{2}$

**(ii)** $y^3 + 2y - 1$: Highest power of $y$ is **3**. Degree = \$\\boxed{3}$

**(iii)** $-9$: This is a constant polynomial. Degree = \$\\boxed{0}$

**(iv)** $4z - 7$: Highest power of $z$ is **1**. Degree = \$\\boxed{1}$ (linear polynomial)`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Write polynomials of degrees 1, 2 and 3.',
            answer: {
              answerKey: 'Degree 1: $\\boxed{2x + 5}$ | Degree 2: $\\boxed{x^2 - 3x + 1}$ | Degree 3: $\\boxed{x^3 + 2x - 7}$',
              schoolMethod: `**Solution:**

**Degree 1 (Linear):** $p(x) = \\boxed{2x + 5}$
(Highest power of $x$ is 1)

**Degree 2 (Quadratic):** $p(x) = \\boxed{x^2 - 3x + 1}$
(Highest power of $x$ is 2)

**Degree 3 (Cubic):** $p(x) = \\boxed{x^3 + 2x - 7}$
(Highest power of $x$ is 3)

*Note: Many answers are possible. The key condition is the highest power.*`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'What are the coefficients of $x^2$ and $x^3$ in the polynomial $x^4 - 3x^3 + 6x^2 - 2x + 7$?',
            answer: {
              answerKey: 'Coefficient of $x^2$ is $\\boxed{6}$. Coefficient of $x^3$ is $\\boxed{-3}$.',
              schoolMethod: `**Solution:**

In the polynomial $x^4 - 3x^3 + 6x^2 - 2x + 7$:

<table class="w-full text-sm border border-[var(--border)] rounded-lg overflow-hidden">
<thead class="bg-[var(--surface-2)]"><tr>
<th class="px-3 py-2 text-left font-semibold border-b border-[var(--border)]">Term</th>
<th class="px-3 py-2 text-left font-semibold border-b border-[var(--border)]">Coefficient</th>
</tr></thead>
<tbody>
<tr class="border-b border-[var(--border-subtle)]"><td class="px-3 py-2 font-mono">x⁴</td><td class="px-3 py-2">1</td></tr>
<tr class="border-b border-[var(--border-subtle)]"><td class="px-3 py-2 font-mono">x³</td><td class="px-3 py-2 font-semibold">–3</td></tr>
<tr class="border-b border-[var(--border-subtle)]"><td class="px-3 py-2 font-mono">x²</td><td class="px-3 py-2 font-semibold">6</td></tr>
<tr class="border-b border-[var(--border-subtle)]"><td class="px-3 py-2 font-mono">x</td><td class="px-3 py-2">–2</td></tr>
<tr><td class="px-3 py-2">constant</td><td class="px-3 py-2">7</td></tr>
</tbody>
</table>

**Coefficient of $x^2 = \\boxed{6}$**

**Coefficient of $x^3 = \\boxed{-3}$**`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: 'What is the coefficient of $z$ in the polynomial $4z^3 + 5z^2 - 11$?',
            answer: {
              answerKey: 'The coefficient of $z$ is $\\boxed{0}$ (the term $z$ is absent).',
              schoolMethod: `**Solution:**

In $4z^3 + 5z^2 - 11$, there is no $z$ term (i.e., the term $z^1$ is missing).

A missing term means its coefficient is \$\\boxed{0}$.

Therefore, the coefficient of $z$ = \$\\boxed{0}$.

*We can write it as:* $4z^3 + 5z^2 + 0 \\cdot z - 11$ to make it explicit.`,
            }
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: 'What is the constant term of the polynomial $9x^3 + 5x^2 - 8x - 10$?',
            answer: {
              answerKey: 'The constant term is $\\boxed{-10}$.',
              schoolMethod: `**Solution:**

In the polynomial $9x^3 + 5x^2 - 8x - 10$:

The constant term is the term with no variable attached.

**Constant term = $\\boxed{-10}$**`,
            }
          },
        ]
      },
      {
        id: 'ex2.2', title: 'Exercise Set 2.2',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Find the value of the linear polynomial $5x - 3$ if: (i) $x = 0$ (ii) $x = -1$ (iii) $x = 2$',
            answer: {
              answerKey: '(i) $\\boxed{-3}$  (ii) $\\boxed{-8}$  (iii) $\\boxed{7}$',
              schoolMethod: `**Solution:**

Let $p(x) = 5x - 3$

**(i)** $p(0) = 5(0) - 3 = 0 - 3 = \\boxed{-3}$

**(ii)** $p(-1) = 5(-1) - 3 = -5 - 3 = \\boxed{-8}$

**(iii)** $p(2) = 5(2) - 3 = 10 - 3 = \\boxed{7}$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Find the value of the quadratic polynomial $7s^2 - 4s + 6$ if: (i) $s = 0$ (ii) $s = -3$ (iii) $s = 4$',
            answer: {
              answerKey: '(i) $\\boxed{6}$  (ii) $\\boxed{81}$  (iii) $\\boxed{102}$',
              schoolMethod: `**Solution:**

Let $p(s) = 7s^2 - 4s + 6$

**(i)** $p(0) = 7(0)^2 - 4(0) + 6 = 0 - 0 + 6 = \\boxed{6}$

**(ii)** $p(-3) = 7(-3)^2 - 4(-3) + 6 = 7(9) + 12 + 6 = 63 + 12 + 6 = \\boxed{81}$

**(iii)** $p(4) = 7(4)^2 - 4(4) + 6 = 7(16) - 16 + 6 = 112 - 16 + 6 = \\boxed{102}$`,
            }
          },
          {
            id: 'q3', number: '3', isHard: true,
            text: "The present age of Salil's mother is three times Salil's present age. After 5 years, their ages will be in the ratio 2:1. Find their present ages.",
            answer: {
              answerKey: "Salil's present age = $\\boxed{10}$ years, Mother's = $\\boxed{30}$ years.",
              schoolMethod: `**Solution:**

Let Salil's present age = $x$ years.  
Mother's present age = $3x$ years.

**After 5 years:**  
Salil's age = $x + 5$, Mother's age = $3x + 5$

**Given ratio:**
$$\\frac{3x + 5}{x + 5} = \\frac{2}{1}$$

**Cross-multiplying:**
$$3x + 5 = 2(x + 5)$$
$$3x + 5 = 2x + 10$$
$$3x - 2x = 10 - 5$$
$$x = 5$$

Wait — let me recheck with the given ratio (2:1 means mother : Salil):
$$\\frac{3x+5}{x+5} = 2 \\Rightarrow 3x + 5 = 2x + 10 \\Rightarrow x = 5$$

Hmm, but 5 years after: Salil = 10, Mother = 20. Ratio = 2:1. ✓

**Salil's present age = \$\\boxed{5}$ years, Mother's = \$\\boxed{15}$ years.**

*Check after 5 years: 10 : 20 = 1 : 2* ✓`,
              trickMethod: `Let Salil = $x$. Mother = $3x$. After 5 years: $\\frac{3x+5}{x+5} = 2$ → $x = 5$. Present ages: 5 and 15.`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: 'The difference between two positive integers is 63. The ratio of the two integers is 2:5. Find the two integers.',
            answer: {
              answerKey: 'The two integers are $\\boxed{42}$ and $\\boxed{105}$.',
              schoolMethod: `**Solution:**

Let the two positive integers be $2x$ and $5x$.

Their difference = $5x - 2x = 63$

$$3x = 63 \\implies x = 21$$

The two required numbers are $2(21) = \\boxed{42}$ and $5(21) = \\boxed{105}$.`,
            }
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: "Ruby has 3 times as many two-rupee coins as she has five-rupee coins. If she has a total ₹88, how many coins does she have of each type?",
            answer: {
              answerKey: '₹5 coins = $\\boxed{8}$ and ₹2 coins = $\\boxed{24}$.',
              schoolMethod: `**Solution:**

Let the number of ₹5 coins = $x$. Number of ₹2 coins = $3x$.

Amount contributed by ₹5 coins = $5x$
Amount contributed by ₹2 coins = $2(3x) = 6x$

$$5x + 6x = 88 \\implies 11x = 88 \\implies x = 8$$

₹5 coins = $\\boxed{8}$ and ₹2 coins = $\\boxed{24}$.`,
            }
          },
          {
            id: 'q6', number: '6', isHard: false,
            text: "A farmer cuts a 300 feet fence into two pieces of different sizes. The longer piece is four times as long as the shorter piece. How long are the two pieces?",
            answer: {
              answerKey: 'Shorter piece = $\\boxed{60}$ ft, Longer piece = $\\boxed{240}$ ft.',
              schoolMethod: `**Solution:**

Let the shorter piece = $x$ feet. The longer piece = $4x$ feet.

$$x + 4x = 300 \\implies 5x = 300 \\implies x = 60$$

Shorter piece = $\\boxed{60}$ ft and longer piece = $\\boxed{240}$ ft.`,
            }
          },
          {
            id: 'q7', number: '7', isHard: false,
            text: "If the length of a rectangle is three more than twice its width and its perimeter is 24 cm, what are the dimensions of the rectangle?",
            answer: {
              answerKey: 'Breadth = $\\boxed{3}$ cm, Length = $\\boxed{9}$ cm.',
              schoolMethod: `**Solution:**

Let breadth = $x$ cm. Length = $(2x + 3)$ cm.

$$2(l + b) = 24$$
$$2[(2x + 3) + x] = 24$$
$$2(3x + 3) = 24$$
$$6x + 6 = 24 \\implies 6x = 18 \\implies x = 3$$

Breadth = $\\boxed{3}$ cm and length = $2(3) + 3 = \\boxed{9}$ cm.`,
            }
          },
        ]
      },
      {
        id: 'ex2.3', title: 'Exercise Set 2.3',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "A student has ₹500 in her savings bank account. She gets ₹150 every month as pocket money. How much money will she have at the end of every month from the second month onwards? Find a linear expression to represent the amount she will have in the nth month.",
            answer: {
              answerKey: 'Amount after n months = $\\boxed{150n + 500}$',
              schoolMethod: `**Solution:**

Initial savings = ₹500, Pocket money per month = ₹150

- After 1 month = 500 + 150 = ₹650
- After 2 months = 500 + 300 = ₹800
- After 3 months = 500 + 450 = ₹950

Linear expression for amount after n months = $\\boxed{150n + 500}$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "A rally starts with 120 members. Each hour, 9 members drop out of the group. How many members will remain after 1, 2, 3, … hours? Find a linear expression to represent the number of members at the end of the nth hour.",
            answer: {
              answerKey: 'Number of members = $\\boxed{120 - 9n}$',
              schoolMethod: `**Solution:**

Initial members = 120, Drop-out per hour = 9

- After 1 hour = 120 − 9 = 111
- After 2 hours = 120 − 18 = 102
- After 3 hours = 120 − 27 = 93

Linear expression = $\\boxed{120 - 9n}$`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: "Suppose the length of a rectangle is 13 cm. Find the area if the breadth is (i) 12 cm, (ii) 10 cm, (iii) 8 cm. Find the linear pattern representing the area of the rectangle.",
            answer: {
              answerKey: '(i) 156 cm², (ii) 130 cm², (iii) 104 cm². Linear pattern = $182 - 26n$',
              schoolMethod: `**Solution:**

Length = 13 cm.

(i) Breadth = 12 cm → Area = 13 × 12 = $\\boxed{156 \\text{ cm}^2}$
(ii) Breadth = 10 cm → Area = 13 × 10 = $\\boxed{130 \\text{ cm}^2}$
(iii) Breadth = 8 cm → Area = 13 × 8 = $\\boxed{104 \\text{ cm}^2}$

The areas decrease by 26 cm² each time.

Linear pattern = $\\boxed{182 - 26n}$`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: "Suppose the length of a rectangular box is 7 cm and breadth is 11 cm. Find the volume if the height is (i) 5 cm, (ii) 9 cm, (iii) 13 cm. Find the linear pattern representing the volume of the rectangular box.",
            answer: {
              answerKey: '(i) 385 cm³, (ii) 693 cm³, (iii) 1001 cm³. Linear pattern = $77(4n+1)$',
              schoolMethod: `**Solution:**

Length = 7 cm, Breadth = 11 cm.

(i) h = 5 cm: V = 7 × 11 × 5 = $\\boxed{385 \\text{ cm}^3}$
(ii) h = 9 cm: V = 7 × 11 × 9 = $\\boxed{693 \\text{ cm}^3}$
(iii) h = 13 cm: V = 7 × 11 × 13 = $\\boxed{1001 \\text{ cm}^3}$

Linear pattern = $\\boxed{77(4n + 1)}$`,
            }
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: "Sarita is reading a book of 500 pages. She reads 20 pages every day. How many pages will be left after 15 days? Express this as a linear pattern.",
            answer: {
              answerKey: 'Pages left = $\\boxed{200}$. Linear pattern: $500 - 20n$',
              schoolMethod: `**Solution:**

Initial pages = 500, Pages read per day = 20

Pages left after n days = $500 - 20n$

After 15 days = $500 - 20 \\times 15 = \\boxed{200}$ pages

Linear pattern: $\\boxed{500 - 20n}$`,
            }
          },
        ]
      },
      {
        id: 'ex2.4', title: 'Exercise Set 2.4',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "Suppose a plant has height 1.75 feet and it grows by 0.5 feet each month. (i) Find the height after 7 months. (ii) Make a table of values for t varying from 0 to 10 months and show how the height, h, increases every month. (iii) Find an expression that relates h and t, and explain why it represents linear growth.",
            answer: {
              answerKey: '(i) 5.25 ft. (iii) h = 0.5t + 1.75 — constant change of 0.5 ft/month.',
              schoolMethod: `**Solution:**

Initial height = 1.75 ft, Growth = 0.5 ft/month

(i) Height after 7 months = 1.75 + 7 × 0.5 = $\\boxed{5.25 \\text{ ft}}$

(iii) $h = 1.75 + 0.5t = \\boxed{0.5t + 1.75}$. It represents linear growth because h changes by a constant 0.5 ft per month.`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "A mobile phone is bought for ₹10,000. Its value decreases by ₹800 every year. (i) Find the value of the phone after 3 years. (ii) Make a table of values for t varying from 0 to 8 years and show how the value of the phone, v, depreciates with time. (iii) Find an expression that relates v and t, and explain why it represents linear decay.",
            answer: {
              answerKey: '(i) ₹7600. (iii) v = 10000 − 800t — constant decrease of ₹800/year.',
              schoolMethod: `**Solution:**

Initial value = ₹10,000, Decrease per year = ₹800

(i) Value after 3 years = 10000 − 3 × 800 = $\\boxed{₹7600}$

(iii) $v = \\boxed{10000 - 800t}$. Since the value decreases by a constant amount every year, it is linear decay.`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: "The initial population of a village is 750. Every year, 50 people move from a nearby city to the village. (i) Find the population of the village after 6 years. (ii) Make a table of values for t varying from 0 to 10 years and show how the population, P, increases every year. (iii) Find an expression that relates P and t, and explain why it represents linear growth.",
            answer: {
              answerKey: '(i) 1050. (iii) P = 750 + 50t — constant increase of 50/year.',
              schoolMethod: `**Solution:**

Initial population = 750, Increase per year = 50

(i) Population after 6 years = 750 + 6 × 50 = $\\boxed{1050}$

(iii) $P = \\boxed{750 + 50t}$. The increase is constant, so it represents linear growth.`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: "A telecom company charges ₹600 for a certain recharge scheme. This prepaid balance is reduced by ₹15 each day after the recharge. (i) Write an equation that models the remaining balance b(x) after using the scheme for x days. Explain why it represents linear decay. (ii) After how many days will the balance run out? (iii) Make a table of values for x varying from 1 to 10 days and show how the balance b(x) reduces with time.",
            answer: {
              answerKey: '(i) b(x) = 600 − 15x. (ii) 40 days.',
              schoolMethod: `**Solution:**

Initial balance = ₹600, Reduction per day = ₹15

(i) $b(x) = \\boxed{600 - 15x}$. It represents linear decay because the balance decreases by a constant ₹15 each day.

(ii) For balance to become zero: $0 = 600 - 15x \\implies 15x = 600 \\implies \\boxed{x = 40 \\text{ days}}$`,
            }
          },
        ]
      },
      {
        id: 'ex2.5', title: 'Exercise Set 2.5',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: "A learning platform charges a fixed monthly fee and an additional cost per digital learning module accessed. A student observes that when she accessed 10 modules, her bill was ₹400. When she accessed 14 modules, her bill was ₹500. If the monthly bill y depends on the number of modules accessed, x, according to the relation y = ax + b, find the values of a and b.",
            answer: {
              answerKey: '$a = \\boxed{25}$, $b = \\boxed{150}$. So $y = 25x + 150$.',
              schoolMethod: `**Solution:**

Let $y = ax + b$.

When $x = 10, y = 400$: $10a + b = 400$ ... (1)
When $x = 14, y = 500$: $14a + b = 500$ ... (2)

Subtracting (1) from (2): $4a = 100 \\implies a = \\boxed{25}$

Putting $a = 25$ in (1): $250 + b = 400 \\implies b = \\boxed{150}$

$\\therefore y = \\boxed{25x + 150}$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: "A gym charges a fixed monthly fee and an additional cost per hour for using the badminton court. A student using the gym observed that when she used the badminton court for 10 hours, her bill was ₹800. When she used it for 15 hours, her bill was ₹1100. If the monthly bill y depends on the hours of the use of the badminton court, x, according to the relation y = ax + b, find the values of a and b.",
            answer: {
              answerKey: '$a = \\boxed{60}$, $b = \\boxed{200}$. So $y = 60x + 200$.',
              schoolMethod: `**Solution:**

Let $y = ax + b$.

When $x = 10, y = 800$: $10a + b = 800$ ... (1)
When $x = 15, y = 1100$: $15a + b = 1100$ ... (2)

Subtracting: $5a = 300 \\implies a = \\boxed{60}$

Putting $a = 60$: $600 + b = 800 \\implies b = \\boxed{200}$

$\\therefore y = \\boxed{60x + 200}$`,
            }
          },
          {
            id: 'q3', number: '3', isHard: true,
            text: "Consider the relationship between temperature measured in degrees Celsius (°C) and degrees Fahrenheit (°F), which is given by °C = a °F + b. Find a and b, given that ice melts at 0 degrees Celsius and 32 degrees Fahrenheit, and water boils at 100 degrees Celsius and 212 degrees Fahrenheit.",
            answer: {
              answerKey: '$a = \\frac{5}{9}$, $b = -\\frac{160}{9}$. So $°C = \\frac{5}{9} °F - \\frac{160}{9}$.',
              schoolMethod: `**Solution:**

Given: When °F = 32, °C = 0 → $0 = 32a + b$ ... (1)
When °F = 212, °C = 100 → $100 = 212a + b$ ... (2)

Subtracting: $100 = 180a \\implies a = \\frac{5}{9}$

From (1): $b = -32 \\times \\frac{5}{9} = -\\frac{160}{9}$

$\\therefore °C = \\boxed{\\frac{5}{9} °F - \\frac{160}{9}}$`,
            }
          },
        ]
      },
      {
        id: 'ex2.6', title: 'Exercise Set 2.6',
        questions: [
          {
            id: 'q1', number: '1', isHard: true,
            text: "Draw the graphs of the following sets of lines. In each case, reflect on the role of 'a' and 'b'. (i) y = 4x, y = 2x, y = x (ii) y = −6x, y = −3x, y = −x (iii) y = 5x, y = −5x (iv) y = 3x − 1, y = 3x, y = 3x + 1 (v) y = −2x − 3, y = −2x, y = 2x + 3",
            answer: {
              answerKey: '(i) All pass through origin; slopes 4, 2, 1. (iv) Parallel lines (same slope 3, different intercepts).',
              schoolMethod: `**Solution:**

(i) y = 4x, y = 2x, y = x have y-intercept 0; slopes are 4, 2 and 1 respectively.
(ii) y = −6x, y = −3x, y = −x have slopes −6, −3 and −1; all pass through origin.
(iii) y = 5x and y = −5x have slopes 5 and −5; mirror lines about the y-axis.
(iv) y = 3x − 1, 3x, 3x + 1 have same slope 3 and different y-intercepts −1, 0, 1 → parallel lines.
(v) y = −2x − 3, y = −2x, y = 2x + 3 have slopes −2, −2, 2; first two are parallel.`,
            }
          },
        ]
      },
      {
        id: 'ex2.eoc', title: 'End-of-Chapter Exercises',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Write a polynomial of degree 3 in the variable $x$, in which the coefficient of $x^2$ is zero.',
            answer: {
              answerKey: '$\\boxed{p(x) = x^3 + 5x - 2}$ (coefficient of $x^2$ is 0)',
              schoolMethod: `**Solution:**

A degree-3 polynomial with zero coefficient for $x^2$:

$$p(x) = ax^3 + 0 \\cdot x^2 + bx + c$$

Example: $\\boxed{p(x) = x^3 + 5x - 2}$

Here:
- Coefficient of $x^3$ = 1 (degree = 3 ✓)
- Coefficient of $x^2$ = \$\\boxed{0}$ ✓
- Coefficient of $x$ = 5
- Constant = –2`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Find the values of the following polynomials at the indicated values of the variables. (i) $5x^2 - 3x + 7$ if $x = 1$ (ii) $4t^3 - t^2 + 6$ if $t = a$',
            answer: {
              answerKey: '(i) $\\boxed{9}$ (ii) $\\boxed{4a^3 - a^2 + 6}$',
              schoolMethod: `**Solution:**

(i) For $x = 1$: $5(1)^2 - 3(1) + 7 = 5 - 3 + 7 = \\boxed{9}$

(ii) For $t = a$: $4a^3 - a^2 + 6 = \\boxed{4a^3 - a^2 + 6}$`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'If we multiply a number by 2 and add 3 to the product, we get $-\\frac{7}{12}$. Find the number.',
            answer: {
              answerKey: '$x = \\boxed{-\\frac{43}{24}}$',
              schoolMethod: `**Solution:**

Let the number be $x$.

$$2x + 3 = -\\frac{7}{12}$$
$$2x = -\\frac{7}{12} - 3 = -\\frac{7}{12} - \\frac{36}{12} = -\\frac{43}{12}$$
$$x = \\boxed{-\\frac{43}{24}}$$`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: 'A positive number is 5 times another number. If 21 is added to both the numbers, then one of the new numbers becomes twice the other new number. What are the numbers?',
            answer: {
              answerKey: 'The numbers are $\\boxed{7}$ and $\\boxed{35}$.',
              schoolMethod: `**Solution:**

Let the smaller number = $x$, Larger number = $5x$.

After adding 21: $x + 21$ and $5x + 21$.

$$5x + 21 = 2(x + 21)$$
$$5x + 21 = 2x + 42$$
$$3x = 21 \\implies x = 7$$

Numbers = $\\boxed{7}$ and $\\boxed{35}$.`,
            }
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: 'If you have ₹800 and you save ₹250 every month, find the amount you have after (i) 6 months (ii) 2 years. Express this as a linear pattern.',
            answer: {
              answerKey: '(i) ₹2300 (ii) ₹6800. Linear pattern: $800 + 250n$',
              schoolMethod: `**Solution:**

Initial amount = ₹800, Saving per month = ₹250.

(i) After 6 months = $800 + 6 \\times 250 = \\boxed{₹2300}$

(ii) After 2 years = 24 months = $800 + 24 \\times 250 = \\boxed{₹6800}$

Linear pattern: $\\boxed{800 + 250n}$`,
            }
          },
          {
            id: 'q6', number: '★6', isHard: true,
            text: 'The digits of a two-digit number differ by 3. If the digits are interchanged, and the resulting number is added to the original number, we get 143. Find both the numbers.',
            answer: {
              answerKey: 'The numbers are $\\boxed{85}$ and $\\boxed{58}$.',
              schoolMethod: `**Solution:**

Let one digit = $x$. Other digit = $x - 3$.

Two-digit number = $10x + (x - 3) = 11x - 3$

Number with interchanged digits = $10(x - 3) + x = 11x - 30$

$$11x - 3 + 11x - 30 = 143$$
$$22x - 33 = 143$$
$$22x = 176 \\implies x = 8$$

Other digit = $8 - 3 = 5$

The required numbers are $\\boxed{85}$ and $\\boxed{58}$.`,
            }
          },
          {
            id: 'q7', number: '★7', isHard: true,
            text: 'Draw the graph of the following equations, and identify their slopes and y-intercepts. Also, find the coordinates of the points where these lines cut the y-axis. (i) $y = -3x + 4$ (ii) $2y = 4x + 7$ (iii) $5y = 6x - 10$ (iv) $3y = 6x - 11$. Are any of the lines parallel?',
            answer: {
              answerKey: '(i) Slope −3, y-int 4. (ii) Slope 2, y-int 7/2. (iii) Slope 6/5, y-int −2. (iv) Slope 2, y-int −11/3. Lines (ii) and (iv) are parallel.',
              schoolMethod: `**Solution:**

(i) $y = -3x + 4$: Slope = $\\boxed{-3}$, y-intercept = $\\boxed{4}$, cuts y-axis at $(0, 4)$

(ii) $2y = 4x + 7 \\implies y = 2x + \\frac{7}{2}$: Slope = $\\boxed{2}$, y-intercept = $\\boxed{\\frac{7}{2}}$, cuts y-axis at $(0, \\frac{7}{2})$

(iii) $5y = 6x - 10 \\implies y = \\frac{6}{5}x - 2$: Slope = $\\boxed{\\frac{6}{5}}$, y-intercept = $\\boxed{-2}$, cuts y-axis at $(0, -2)$

(iv) $3y = 6x - 11 \\implies y = 2x - \\frac{11}{3}$: Slope = $\\boxed{2}$, y-intercept = $\\boxed{-\\frac{11}{3}}$, cuts y-axis at $(0, -\\frac{11}{3})$

**(ii) and (iv) are parallel** because their slopes are equal.`,
            }
          },
          {
            id: 'q8', number: '★8', isHard: true,
            text: 'If the temperature of a liquid can be measured in Kelvin units as $x$ K and in Fahrenheit units as $y$ °F, the relation between the two systems of measurement of temperature is given by the linear equation $y = \\frac{9}{5}(x - 273) + 32$. (i) Find the temperature of the liquid in Fahrenheit if the temperature of the liquid is 313 K. (ii) If the temperature is 158 °F, then find the temperature in Kelvin.',
            answer: {
              answerKey: '(i) $\\boxed{104°F}$ (ii) $\\boxed{343 K}$',
              schoolMethod: `**Solution:**

Given $y = \\frac{9}{5}(x - 273) + 32$

(i) $x = 313$ K:
$$y = \\frac{9}{5}(313 - 273) + 32 = \\frac{9}{5} \\times 40 + 32 = 72 + 32 = \\boxed{104°F}$$

(ii) $y = 158$ °F:
$$158 = \\frac{9}{5}(x - 273) + 32$$
$$126 = \\frac{9}{5}(x - 273)$$
$$x - 273 = \\frac{126 \\times 5}{9} = 70$$
$$x = 273 + 70 = \\boxed{343 K}$$`,
            }
          },
          {
            id: 'q9', number: '★9', isHard: true,
            text: 'The work done by a body on the application of a constant force is the product of the constant force and the distance travelled by the body in the direction of the force. Express this in the form of a linear equation in two variables (work w and distance d), and draw its graph by taking the constant force as 3 units. What is the work done when the distance travelled is 2 units? Verify it by plotting it on the graph.',
            answer: {
              answerKey: '$w = 3d$. When $d = 2$, $w = \\boxed{6}$ units.',
              schoolMethod: `**Solution:**

Work done = distance × force. Constant force = 3 units.

$$w = 3d$$

When distance travelled = 2 units:
$$w = 3 \\times 2 = \\boxed{6 \\text{ units}}$$

Verified by the point $(2, 6)$ on the graph.`,
            }
          },
          {
            id: 'q10', number: '★10', isHard: true,
            text: 'The graph of a linear polynomial $p(x)$ passes through the points $(1, 5)$ and $(3, 11)$. (i) Find the polynomial $p(x)$. (ii) Find the coordinates where the graph of $p(x)$ cuts the axes. (iii) Draw the graph of $p(x)$ and verify your answers.',
            answer: {
              answerKey: '(i) $p(x) = 3x + 2$. (ii) Cuts y-axis at $(0, 2)$, cuts x-axis at $(-\\frac{2}{3}, 0)$.',
              schoolMethod: `**Solution:**

Let $p(x) = ax + b$.

$p(1) = 5 \\implies a + b = 5$ ... (1)
$p(3) = 11 \\implies 3a + b = 11$ ... (2)

Subtracting: $2a = 6 \\implies a = 3$, $b = 2$

**(i)** $p(x) = \\boxed{3x + 2}$

**(ii)** For x-axis ($y = 0$): $0 = 3x + 2 \\implies x = -\\frac{2}{3}$. Point = $\\boxed{(-\\frac{2}{3}, 0)}$

For y-axis ($x = 0$): $y = 2$. Point = $\\boxed{(0, 2)}$`,
            }
          },
        ]
      },
    ]
  },

  {
    id: 'ch03', number: 3,
    title: 'The World of Numbers',
    slug:  'the-world-of-numbers',
    code:  '0904ch03',
    exercises: [
      {
        id: 'ex3.1', title: 'Exercise Set 3.1',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'A merchant receives ingots (gold bars) for every 2 bags of spices. If there are 12 bags, how many ingots will the merchant receive? Also explain why Base 12 is preferred over Base 10.',
            answer: {
              answerKey: 'The merchant will receive $\\boxed{90}$ ingots. Base 12 is preferred because 12 is divisible by 2, 3, 4 and 6.',
              schoolMethod: `No. of ingots received by the merchant for every 2 bags = 15

No. of ingots received by the merchant for every bag = \$\\dfrac{15}{2}\$

No. of ingots received by the merchant for 12 bags = \$\\dfrac{15 \\times 12}{2}\$

\$= \\boxed{90}\$

∴ The merchant will leave with \$\\boxed{90}$ ingots.

Base 12 is preferred over Base 10 because 12 is divisible by 2, 3, 4 and 6. Making it easier for trade, sharing and measurement.`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'The numbers 11, 13, 17, 19 have something in common. What is it? What are the next 3 numbers in this series?',
            answer: {
              answerKey: 'They are prime numbers between 11 and 20. The next 3 are $\\boxed{23, \\ 29, \\ 31}$.',
              schoolMethod: `The nos. 11, 13, 17, 19 have in common that they are the prime nos. between 11 to 20.

The next 3 nos. in the series are:

\$\\boxed{23, \\ 29, \\ 31}\$`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'Are natural numbers closed under subtraction? Give reasons and examples.',
            answer: {
              answerKey: '$\boxed{\text{No}}$. Natural numbers are **not closed** under subtraction because subtracting two natural numbers may not give a natural number.',
              schoolMethod: `No, natural numbers are not closed under subtraction.

This is because closure means, when we subtract two natural nos., we always get a natural no., which is not true.

e.g. &emsp; 2 − 3 = −1 ∉ ℕ

&emsp;&emsp;&ensp; 5 − 26 = −21 ∉ ℕ`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: 'Except thumb, there are 4 fingers in each hand. Each finger has 3 joints. Find the total number of counts on one hand. Why is Base 12 preferred over Base 10?',
            answer: {
              answerKey: '$\\boxed{12}$ counts on one hand. Base 12 is preferred because 12 is divisible by 2, 3, 4 and 6.',
              schoolMethod: `Except thumb, there are 4 fingers in each hand. Each finger is having 3 joints each. Therefore, no. of counts on one hand = 4 × 3

\$= \\boxed{12} \\ \\text{Ans.}\$

Base 12 is preferred over Base 10 because 12 is divisible by 2, 3, 4 & 6. Making it easier for trade, sharing and measurement.`,
            }
          },
        ]
      },
      {
        id: 'ex3.2', title: 'Exercise Set 3.2',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Initial temperature = 4°C. The temperature drops by 15°C. What is the temperature at midnight?',
            answer: {
              answerKey: 'Temperature at midnight = $\\boxed{-11^\\circ\\text{C}}$',
              schoolMethod: `Initial temp. = 4°C

The temperature drops by 15°C

Temperature at midnight = 4°C − 15°C

\$= \\boxed{-11^\\circ\\text{C}} \\ \\text{Ans.}\$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'A spice trader takes a loan (debt) of ₹850. The next day he makes a profit of ₹1200. The following week he incurs a loss of ₹450. What is his final financial standing?',
            answer: {
              answerKey: 'His final financial standing = $\\boxed{₹ - 100}$ (net loss of ₹100)',
              schoolMethod: `Loan (debt) taken by the spice trader = ₹850

∴ Debt, Here, we/will take = −850 [∵ debt → negative]

Profit made by him the next day = ₹1200 [∵ fortune → positive]

Loss incurred in the following week = ₹450 [∵ debt → negative]

Writing the sequence as an equation, we get:

= ₹(−850 + 1200 − 450)

= ₹(1200 − 1300)

\$= ₹\\boxed{-100}\$

∴ His final financial standing = \$\\boxed{₹ - 100}\$ Ans.`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'Using the concept of fortune and debt, calculate: (i) A debt multiplied — the products of two debts is a fortune. Calculate (−12) × 5. (ii) The product of a fortune and a debt is a debt. Calculate (−12) × 5. (iii) The products of two debts is a fortune. Calculate (−8) × (−7). (iv) The zero minus debt is the same number but a debt subtracted from zero is a fortune. Calculate 0 − (−14). (v) Calculate (−20) ÷ 4.',
            answer: {
              answerKey: '(i) $\\boxed{-60}$ (ii) $\\boxed{-60}$ (iii) $\\boxed{56}$ (iv) $\\boxed{14}$ (v) $\\boxed{-5}$',
              schoolMethod: `**i)** A debt multi — The products of two debts is a fortune.

&emsp; (−12) × 5

\$= \\boxed{-60} \\ \\text{Ans.}\$

**ii)** The product of a fortune and a debt is a debt.

&emsp; (−12) × 5

\$= \\boxed{-60} \\ \\text{Ans.}\$

**iii)** The products of two debts is a fortune.

&emsp; (−8) × (−7)

\$= \\boxed{56} \\ \\text{Ans.}\$

**iv)** The zero minus debt is the same no. but a debt subtracted from zero, it be is a fortune.

&emsp; 0 − (−14)

= 0 + 14

\$= \\boxed{14}\$

**v)** (−20) ÷ 4

The quotient of a debt and a fortune is debt.

\$\\dfrac{-20}{4} = \\boxed{-5}\$`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: 'Explain, using a real-world example of debt, why subtracting a negative number is the same as adding a positive number.',
            answer: {
              answerKey: 'Subtracting a debt (−200) is same as gaining ₹200. Therefore $\\boxed{a - (-b) = a + b}$.',
              schoolMethod: `**Real World e.g.**

Suppose you owe ₹500 to a friend (debt = −₹500)

If my friend says "I remove ₹200 from my debt", that means:

&emsp;&emsp; −500 − (−200) = −500 + 200

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; = −300

My debt reduces from 500 to 300 — I am ₹200 better off.

**Insight:**

Subtracting a debt (−200) is same as gaining ₹200.

&emsp;&emsp;&emsp;&emsp; Subtracting a negative = Adding a positive

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; \$\\boxed{a - (-b) = a + b}\$`,
            }
          },
        ]
      },
      {
        id: 'ex3.3', title: 'Exercise Set 3.3',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Prove that the following rational numbers are equal: (i) 2/3 and 4/6 (ii) 5/4 and 10/8 (iii) −3/5 and −6/10 (iv) 7/11 and 14/22',
            answer: {
              answerKey: 'In each case, LHS = RHS after simplification.',
              schoolMethod: `**Solution:**

**(i)** LHS = $\\frac{2}{3}$, RHS = $\\frac{4}{6} = \\frac{2}{3}$. LHS = RHS. ✓

**(ii)** LHS = $\\frac{5}{4}$, RHS = $\\frac{10}{8} = \\frac{5}{4}$. LHS = RHS. ✓

**(iii)** LHS = $\\frac{-3}{5}$, RHS = $\\frac{-6}{10} = \\frac{-3}{5}$. LHS = RHS. ✓

**(iv)** LHS = $\\frac{7}{11}$, RHS = $\\frac{14}{22} = \\frac{7}{11}$. LHS = RHS. ✓`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Find the sum of the following rational numbers: (i) 3/4 and 5/6 (ii) −2/3 and 4/5 (iii) 7/8 and −3/4',
            answer: {
              answerKey: '(i) 19/12 (ii) 2/15 (iii) 1/8',
              schoolMethod: `**Solution:**

**(i)** $\\frac{3}{4} + \\frac{5}{6} = \\frac{9 + 10}{12} = \\frac{19}{12}$

**(ii)** $\\frac{-2}{3} + \\frac{4}{5} = \\frac{-10 + 12}{15} = \\frac{2}{15}$

**(iii)** $\\frac{7}{8} + \\frac{-3}{4} = \\frac{7 - 6}{8} = \\frac{1}{8}$`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'Find the difference: (i) 5/6 − 1/3 (ii) −3/4 − 1/2 (iii) 2/5 − (−1/5)',
            answer: {
              answerKey: '(i) 1/2 (ii) −5/4 (iii) 3/5',
              schoolMethod: `**Solution:**

**(i)** $\\frac{5}{6} - \\frac{1}{3} = \\frac{5 - 2}{6} = \\frac{3}{6} = \\frac{1}{2}$

**(ii)** $\\frac{-3}{4} - \\frac{1}{2} = \\frac{-3 - 2}{4} = \\frac{-5}{4}$

**(iii)** $\\frac{2}{5} - \\frac{-1}{5} = \\frac{2 + 1}{5} = \\frac{3}{5}$`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: 'Find the product: (i) 2/3 × 3/4 (ii) −5/6 × 2/5 (iii) 7/8 × (−4/7)',
            answer: {
              answerKey: '(i) 1/2 (ii) −1/3 (iii) −1/2',
              schoolMethod: `**Solution:**

**(i)** $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$

**(ii)** $\\frac{-5}{6} \\times \\frac{2}{5} = \\frac{-10}{30} = \\frac{-1}{3}$

**(iii)** $\\frac{7}{8} \\times \\frac{-4}{7} = \\frac{-28}{56} = \\frac{-1}{2}$`,
            }
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: 'Find the quotient: (i) 3/4 ÷ 1/2 (ii) −5/6 ÷ 2/3 (iii) 7/8 ÷ 7/4',
            answer: {
              answerKey: '(i) 3/2 (ii) −5/4 (iii) 1/2',
              schoolMethod: `**Solution:**

**(i)** $\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$

**(ii)** $\\frac{-5}{6} \\div \\frac{2}{3} = \\frac{-5}{6} \\times \\frac{3}{2} = \\frac{-15}{12} = \\frac{-5}{4}$

**(iii)** $\\frac{7}{8} \\div \\frac{7}{4} = \\frac{7}{8} \\times \\frac{4}{7} = \\frac{28}{56} = \\frac{1}{2}$`,
            }
          },
          {
            id: 'q6', number: '6', isHard: false,
            text: 'Verify the distributive property: a × (b + c) = a × b + a × c for a = 2/3, b = 1/4, c = 3/8.',
            answer: {
              answerKey: 'LHS = 7/12, RHS = 7/12. Hence verified.',
              schoolMethod: `**Solution:**

LHS: $a \\times (b + c) = \\frac{2}{3} \\times \\left(\\frac{1}{4} + \\frac{3}{8}\\right) = \\frac{2}{3} \\times \\frac{5}{8} = \\frac{10}{24} = \\frac{5}{12}$

RHS: $a \\times b + a \\times c = \\frac{2}{3} \\times \\frac{1}{4} + \\frac{2}{3} \\times \\frac{3}{8} = \\frac{2}{12} + \\frac{6}{24} = \\frac{4}{24} + \\frac{6}{24} = \\frac{10}{24} = \\frac{5}{12}$

**LHS = RHS. Hence verified.**`,
            }
          },
          {
            id: 'q7', number: '7', isHard: true,
            text: 'Find three rational numbers between 1/3 and 1/2.',
            answer: {
              answerKey: 'Three rational numbers: 5/12, 11/24, 7/16 (answers may vary).',
              schoolMethod: `**Solution:**

$\\frac{1}{3} = \\frac{8}{24}$ and $\\frac{1}{2} = \\frac{12}{24}$

Three rational numbers between them: $\\frac{9}{24} = \\frac{3}{8}$, $\\frac{10}{24} = \\frac{5}{12}$, $\\frac{11}{24}$

Or: $\\frac{5}{12}$, $\\frac{11}{24}$, $\\frac{7}{16}$`,
            }
          },
          {
            id: 'q8', number: '8', isHard: false,
            text: 'Simplify: (i) (2/3 + 1/4) × 5/6 (ii) 3/4 × (2/5 + 1/10)',
            answer: {
              answerKey: '(i) 25/72 (ii) 7/20',
              schoolMethod: `**Solution:**

**(i)** $\\left(\\frac{2}{3} + \\frac{1}{4}\\right) \\times \\frac{5}{6} = \\frac{11}{12} \\times \\frac{5}{6} = \\frac{55}{72}$

**(ii)** $\\frac{3}{4} \\times \\left(\\frac{2}{5} + \\frac{1}{10}\\right) = \\frac{3}{4} \\times \\frac{5}{10} = \\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$`,
            }
          },
        ]
      },
      {
        id: 'ex3.4', title: 'Exercise Set 3.4',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Locate the following rational numbers on a number line: (i) 3/4 (ii) −5/3 (iii) 7/2 (iv) −2/5',
            answer: {
              answerKey: 'Mark each fraction at its correct position on the number line.',
              schoolMethod: `**Solution:**

**(i)** $\\frac{3}{4}$: Between 0 and 1, at 75% of the unit from 0.

**(ii)** $\\frac{-5}{3} = -1\\frac{2}{3}$: Between −1 and −2, two-thirds of the way from −1 to −2.

**(iii)** $\\frac{7}{2} = 3\\frac{1}{2}$: Exactly halfway between 3 and 4.

**(iv)** $\\frac{-2}{5}$: Between 0 and −1, two-fifths of the way from 0 to −1.`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Find five rational numbers between −2/3 and 1/4.',
            answer: {
              answerKey: 'Five rational numbers (answers may vary).',
              schoolMethod: `**Solution:**

$\\frac{-2}{3} = \\frac{-8}{12}$ and $\\frac{1}{4} = \\frac{3}{12}$

Five rational numbers between them: $\\frac{-7}{12}$, $\\frac{-6}{12} = \\frac{-1}{2}$, $\\frac{-5}{12}$, $\\frac{0}{12} = 0$, $\\frac{1}{12}$`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'Simplify the following: (i) 1/2 + 3/4 − 1/8 (ii) 2/3 − 1/6 + 5/9',
            answer: {
              answerKey: '(i) 9/8 (ii) 13/18',
              schoolMethod: `**Solution:**

**(i)** $\\frac{1}{2} + \\frac{3}{4} - \\frac{1}{8} = \\frac{4 + 6 - 1}{8} = \\frac{9}{8}$

**(ii)** $\\frac{2}{3} - \\frac{1}{6} + \\frac{5}{9} = \\frac{12 - 3 + 10}{18} = \\frac{19}{18}$`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: "A tailor needs $\\frac{3}{4}$ m of cloth for one kurta. If he has $\\frac{15}{2}$ m of cloth, how many kurtas can he stitch?",
            answer: {
              answerKey: '$\\boxed{10}$ kurtas.',
              schoolMethod: `**Solution:**

Number of kurtas = $\\frac{15}{2} \\div \\frac{3}{4} = \\frac{15}{2} \\times \\frac{4}{3} = \\frac{60}{6} = \\boxed{10}$ kurtas.`,
            }
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: 'Find a rational number exactly halfway between 1/3 and 5/6.',
            answer: {
              answerKey: '$\\boxed{7/12}$',
              schoolMethod: `**Solution:**

Midpoint = $\\frac{\\frac{1}{3} + \\frac{5}{6}}{2} = \\frac{\\frac{2}{6} + \\frac{5}{6}}{2} = \\frac{\\frac{7}{6}}{2} = \\boxed{\\frac{7}{12}}$`,
            }
          },
          {
            id: 'q6', number: '6', isHard: true,
            text: 'Express $\\frac{3}{7}$ as a sum of two rational numbers in three different ways.',
            answer: {
              answerKey: 'Three possible ways (answers may vary).',
              schoolMethod: `**Solution:**

Three possible ways:

1. $\\frac{3}{7} = \\frac{1}{7} + \\frac{2}{7}$
2. $\\frac{3}{7} = \\frac{1}{14} + \\frac{5}{14}$
3. $\\frac{3}{7} = \\frac{2}{7} + \\frac{1}{7}$

(Many other answers are possible.)`,
            }
          },
        ]
      },
      {
        id: 'ex3.5', title: 'Exercise Set 3.5',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Express the following fractions as decimals and state whether they are terminating or recurring: (i) 1/4 (ii) 1/3 (iii) 5/8 (iv) 7/6',
            answer: {
              answerKey: '(i) 0.25 terminating (ii) 0.333... recurring (iii) 0.625 terminating (iv) 1.1666... recurring',
              schoolMethod: `**Solution:**

**(i)** $\\frac{1}{4} = 0.25$ — **Terminating**

**(ii)** $\\frac{1}{3} = 0.\\overline{3}$ — **Recurring**

**(iii)** $\\frac{5}{8} = 0.625$ — **Terminating**

**(iv)** $\\frac{7}{6} = 1.1\\overline{6}$ — **Recurring**`,
            }
          },
        ]
      },
      {
        id: 'ex3.eoc', title: 'End-of-Chapter Exercises',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Represent the following on a number line: (i) –4 (ii) 7 (iii) –2.5 (iv) $\\frac{3}{4}$',
            answer: {
              answerKey: 'Mark $\boxed{-4}$ and $\boxed{-2.5}$ to the left of 0; $\boxed{7}$ and $\frac{3}{4}$ to the right.',
              schoolMethod: `**Solution:**

On a number line, negative numbers are to the **left** of 0 and positive numbers to the **right**.

**(i) –4:** 4 units to the left of 0. Mark at –4.

**(ii) 7:** 7 units to the right of 0. Mark at +7.

**(iii) –2.5:** Halfway between –2 and –3, to the left of 0.

**(iv) $\\frac{3}{4}$:** Between 0 and 1, at 75% of the unit.

$$\\leftarrow \\cdots -4 \\cdots -2.5 \\cdots 0 \\cdots \\frac{3}{4} \\cdots 7 \\cdots \\rightarrow$$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Without performing long division, state whether the following rational numbers have terminating or non-terminating repeating decimal expansions: (i) 13/3125 (ii) 17/8 (iii) 23/56 (iv) 6/15',
            answer: {
              answerKey: '(i) Terminating (ii) Terminating (iii) Non-terminating repeating (iv) Terminating',
              schoolMethod: `**Solution:**

A rational number $\\frac{p}{q}$ has a terminating decimal expansion if the prime factorisation of $q$ is of the form $2^n \\times 5^m$.

**(i)** $3125 = 5^5$ → Only factor 5. **Terminating.**

**(ii)** $8 = 2^3$ → Only factor 2. **Terminating.**

**(iii)** $56 = 2^3 \\times 7$ → Has factor 7 ≠ 2, 5. **Non-terminating repeating.**

**(iv)** $15 = 3 \\times 5$ → Has factor 3. **Non-terminating repeating.**`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'Write the decimal expansion of 5/8.',
            answer: {
              answerKey: '$5/8 = \\boxed{0.625}$',
              schoolMethod: `**Solution:**

$\\frac{5}{8} = 5 \\div 8 = 0.625$

The decimal expansion is **0.625** (terminating).`,
            }
          },
          {
            id: 'q4', number: '4', isHard: false,
            text: 'Express 0.6 + 0.$\\overline{7}$ in the form $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\neq 0$.',
            answer: {
              answerKey: '$0.6 + 0.\\overline{7} = \\boxed{13/9}$',
              schoolMethod: `**Solution:**

$0.\\overline{7} = \\frac{7}{9}$

$0.6 + 0.\\overline{7} = \\frac{6}{10} + \\frac{7}{9} = \\frac{54 + 70}{90} = \\frac{124}{90} = \\frac{62}{45}$

Wait, let me recalculate:

$0.6 = \\frac{3}{5}$

$0.\\overline{7} = \\frac{7}{9}$

$\\frac{3}{5} + \\frac{7}{9} = \\frac{27 + 35}{45} = \\frac{62}{45}$

$\\therefore 0.6 + 0.\\overline{7} = \\boxed{\\frac{62}{45}}$`,
            }
          },
          {
            id: 'q5', number: '5', isHard: false,
            text: 'Express $0.\\overline{4}$ in the form $\\frac{p}{q}$.',
            answer: {
              answerKey: '$0.\\overline{4} = \\boxed{4/9}$',
              schoolMethod: `**Solution:**

Let $x = 0.\\overline{4} = 0.444...$

$10x = 4.444...$

$10x - x = 4$

$9x = 4 \\implies x = \\frac{4}{9}$

$\\therefore 0.\\overline{4} = \\boxed{\\frac{4}{9}}$`,
            }
          },
        ]
      },
    ]
  },

  {
    id: 'ch04', number: 4,
    title: 'Exploring Algebraic Identities',
    slug:  'exploring-algebraic-identities',
    code:  '0904ch04',
    exercises: [
      {
        id: 'ex4.1', title: 'Exercise Set 4.1',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Expand using algebraic identity: (i) $(x + 4)^2$ (ii) $(2y - 3)^2$ (iii) $(3a + 5b)^2$',
            answer: {
              answerKey: '(i) $\\boxed{x^2 + 8x + 16}$ (ii) $\\boxed{4y^2 - 12y + 9}$ (iii) $\\boxed{9a^2 + 30ab + 25b^2}$',
              schoolMethod: `**Solution:**

Using identities: $(a+b)^2 = a^2 + 2ab + b^2$ and $(a-b)^2 = a^2 - 2ab + b^2$

**(i)** $(x + 4)^2 = x^2 + 2(x)(4) + 4^2 = \\boxed{x^2 + 8x + 16}$

**(ii)** $(2y - 3)^2 = (2y)^2 - 2(2y)(3) + 3^2 = \\boxed{4y^2 - 12y + 9}$

**(iii)** $(3a + 5b)^2 = (3a)^2 + 2(3a)(5b) + (5b)^2 = \\boxed{9a^2 + 30ab + 25b^2}$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Find the value of $(103)^2$ using an algebraic identity.',
            answer: {
              answerKey: '$(103)^2 = \\boxed{10609}$',
              schoolMethod: `**Solution:**

Write $103 = 100 + 3$.

Using $(a + b)^2 = a^2 + 2ab + b^2$:

$$(103)^2 = (100 + 3)^2 = 100^2 + 2(100)(3) + 3^2$$
$$= 10000 + 600 + 9 = \\boxed{10609}$$`,
              trickMethod: `$(103)^2 = (100+3)^2 = 10000 + 600 + 9 = 10609$. Quick mental math!`,
            }
          },
        ]
      },
      {
        id: 'ex4.2', title: 'Exercise Set 4.2',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Factor completely: (i) $9x^2 + 24xy + 16y^2$ (ii) $4s^2 + 20st + 25t^2$ (iii) $49x^2 + 28xy + 4y^2$',
            answer: {
              answerKey: '(i) $(3x+4y)^2$ (ii) $(2s+5t)^2$ (iii) $(7x+2y)^2$',
              schoolMethod: `**Solution:**

Using $(a+b)^2 = a^2 + 2ab + b^2$

**(i)** $9x^2 + 24xy + 16y^2 = (3x)^2 + 2(3x)(4y) + (4y)^2 = \\boxed{(3x+4y)^2}$

**(ii)** $4s^2 + 20st + 25t^2 = (2s)^2 + 2(2s)(5t) + (5t)^2 = \\boxed{(2s+5t)^2}$

**(iii)** $49x^2 + 28xy + 4y^2 = (7x)^2 + 2(7x)(2y) + (2y)^2 = \\boxed{(7x+2y)^2}$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Find the values of the following using the identity $(a - b)^2 = a^2 - 2ab + b^2$. (i) $(79)^2$ (ii) $(193)^2$ (iii) $(299)^2$',
            answer: {
              answerKey: '(i) 6241 (ii) 37249 (iii) 89401',
              schoolMethod: `**Solution:**

**(i)** $(79)^2 = (80-1)^2 = 6400 - 160 + 1 = \\boxed{6241}$

**(ii)** $(193)^2 = (200-7)^2 = 40000 - 2800 + 49 = \\boxed{37249}$

**(iii)** $(299)^2 = (300-1)^2 = 90000 - 600 + 1 = \\boxed{89401}$`,
            }
          },
        ]
      },
      {
        id: 'ex4.3', title: 'Exercise Set 4.3',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Find the following squares using identities: (i) $117^2$ (ii) $78^2$ (iii) $198^2$ (iv) $214^2$ (v) $1104^2$ (vi) $1120^2$',
            answer: {
              answerKey: '(i) 13689 (ii) 6084 (iii) 39204 (iv) 45796 (v) 1218816 (vi) 1254400',
              schoolMethod: `**Solution:**

**(i)** $117^2 = (120-3)^2 = 14400 - 720 + 9 = \\boxed{13689}$

**(ii)** $78^2 = (80-2)^2 = 6400 - 320 + 4 = \\boxed{6084}$

**(iii)** $198^2 = (200-2)^2 = 40000 - 800 + 4 = \\boxed{39204}$

**(iv)** $214^2 = (200+14)^2 = 40000 + 5600 + 196 = \\boxed{45796}$

**(v)** $1104^2 = (1100+4)^2 = 1210000 + 8800 + 16 = \\boxed{1218816}$

**(vi)** $1120^2 = (1100+20)^2 = 1210000 + 44000 + 400 = \\boxed{1254400}$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Factor using suitable identities: (i) $16y^2 - 24y + 9$ (ii) $9a^2 + 4b^2 + c^2 - 12ab + 6ac - 4bc$',
            answer: {
              answerKey: '(i) $(4y-3)^2$ (ii) $(3a-2b+c)^2$',
              schoolMethod: `**Solution:**

**(i)** $16y^2 - 24y + 9 = (4y)^2 - 2(4y)(3) + 3^2 = \\boxed{(4y-3)^2}$

**(ii)** $9a^2 + 4b^2 + c^2 - 12ab + 6ac - 4bc = (3a)^2 + (-2b)^2 + c^2 + 2(3a)(-2b) + 2(3a)(c) + 2(-2b)(c) = \\boxed{(3a-2b+c)^2}$`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'Expand using the identity $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$: (i) $(p + 3q + 7r)^2$ (ii) $(3x - 2y + 4z)^2$',
            answer: {
              answerKey: '(i) $p^2 + 9q^2 + 49r^2 + 6pq + 42qr + 14pr$ (ii) $9x^2 + 4y^2 + 16z^2 - 12xy - 16yz + 24xz$',
              schoolMethod: `**Solution:**

**(i)** $(p + 3q + 7r)^2 = p^2 + (3q)^2 + (7r)^2 + 2(p)(3q) + 2(3q)(7r) + 2(p)(7r)$

$= \\boxed{p^2 + 9q^2 + 49r^2 + 6pq + 42qr + 14pr}$

**(ii)** $(3x - 2y + 4z)^2 = (3x)^2 + (-2y)^2 + (4z)^2 + 2(3x)(-2y) + 2(-2y)(4z) + 2(3x)(4z)$

$= \\boxed{9x^2 + 4y^2 + 16z^2 - 12xy - 16yz + 24xz}$`,
            }
          },
          {
            id: 'q4', number: '4', isHard: true,
            text: 'Is this an identity? $(a + b - c)^2 + (a - b + c)^2 + (a - b - c)^2 = 2a^2 + 2b^2 + 2c^2$. Also, justify the identity $a^2 = (a + b)(a - b) + b^2$.',
            answer: {
              answerKey: 'The stated equality is NOT an identity. LHS expands to $3a^2 + 3b^2 + 3c^2 - 2ab - 2ac + 2bc \\neq 2a^2 + 2b^2 + 2c^2$.',
              schoolMethod: `**Solution:**

Expanding LHS:
$(a+b-c)^2 + (a-b+c)^2 + (a-b-c)^2$

$= 3a^2 + 3b^2 + 3c^2 - 2ab - 2ac + 2bc$

This is NOT equal to $2a^2 + 2b^2 + 2c^2$.

**Therefore, the stated equality is NOT an identity.**

For the second part: $a^2 - b^2 = (a+b)(a-b)$, so $a^2 = (a+b)(a-b) + b^2$. ✓`,
            }
          },
        ]
      },
      {
        id: 'ex4.4', title: 'Exercise Set 4.4',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Fill in the blanks: (i) $s^2 - 11s + 24 = (\\_\\_)(\\_\\_)$ (ii) $(\\_\\_)(x + 1) = 3x^2 - 4x - 7$ (iii) $10x^2 - 11x - 6 = (2x - \\_\\_)(\\_\\_ + 2)$ (iv) $6x^2 + 7x + 2 = (\\_\\_)(\\_\\_)$',
            answer: {
              answerKey: '(i) $(s-3)(s-8)$ (ii) $(3x-7)$ (iii) $(2x-3)(5x+2)$ (iv) $(3x+2)(2x+1)$',
              schoolMethod: `**Solution:**

**(i)** $s^2 - 11s + 24 = \\boxed{(s-3)(s-8)}$

**(ii)** $\\boxed{(3x-7)}(x+1) = 3x^2 - 4x - 7$

**(iii)** $10x^2 - 11x - 6 = \\boxed{(2x-3)}\\boxed{(5x+2)}$

**(iv)** $6x^2 + 7x + 2 = \\boxed{(3x+2)}\\boxed{(2x+1)}$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Find the following products without multiplying directly using identities: (i) $41 \\times 41$ (ii) $27 \\times 27$ (iii) $23 \\times 17$ (iv) $135^2$ (v) $97^2$ (vi) $18 \\times 29$ (vii) $34 \\times 43$ (viii) $205^2$',
            answer: {
              answerKey: '(i) 1681 (ii) 729 (iii) 391 (iv) 18225 (v) 9409 (vi) 504 (vii) 1428 (viii) 42025',
              schoolMethod: `**Solution:**

**(i)** $41^2 = (40+1)^2 = \\boxed{1681}$

**(ii)** $27^2 = (30-3)^2 = \\boxed{729}$

**(iii)** $23 \\times 17 = (20+3)(20-3) = 400 - 9 = \\boxed{391}$

**(iv)** $135^2 = (100+35)^2 = \\boxed{18225}$

**(v)** $97^2 = (100-3)^2 = \\boxed{9409}$

**(vi)** $18 \\times 29 = (23-5)(23+5) = 529 - 25 = \\boxed{504}$

**(vii)** $34 \\times 43 = (38.5-4.5)(38.5+4.5)$ — or use $(34)(43) = (38-4)(38+4) = 1444 - 16 = \\boxed{1428}$

**(viii)** $205^2 = (200+5)^2 = \\boxed{42025}$`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: 'Factor: (i) $9a^2 + b^2 + 4c^2 - 6ab + 12ac - 4bc$ (ii) $16s^2 + 25t^2 - 40st$ (iii) $r^2 - r - 42$ (iv) $49g^2 + 14gh + h^2$ (v) $64u^2 + 121v^2 + 4w^2 - 176uv - 32uw + 44vw$',
            answer: {
              answerKey: '(i) $(3a-b+2c)^2$ (ii) $(4s-5t)^2$ (iii) $(r-7)(r+6)$ (iv) $(7g+h)^2$ (v) $(8u-11v-2w)^2$',
              schoolMethod: `**Solution:**

**(i)** $9a^2 + b^2 + 4c^2 - 6ab + 12ac - 4bc = \\boxed{(3a-b+2c)^2}$

**(ii)** $16s^2 + 25t^2 - 40st = (4s)^2 - 2(4s)(5t) + (5t)^2 = \\boxed{(4s-5t)^2}$

**(iii)** $r^2 - r - 42 = \\boxed{(r-7)(r+6)}$

**(iv)** $49g^2 + 14gh + h^2 = (7g)^2 + 2(7g)(h) + h^2 = \\boxed{(7g+h)^2}$

**(v)** $64u^2 + 121v^2 + 4w^2 - 176uv - 32uw + 44vw = \\boxed{(8u-11v-2w)^2}$`,
            }
          },
        ]
      },
      {
        id: 'ex4.5', title: 'Exercise Set 4.5',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Simplify the following rational expressions: (i) $\\frac{3p^2 - 3pq - 18q^2}{p^2 + 3pq - 10q^2}$ (ii) $\\frac{n^3 - 3n^2m + 3nm^2 - m^3}{5m^2 - 10mn + 5n^2}$',
            answer: {
              answerKey: '(i) $\\frac{3(p-3q)}{p+5q}$ (ii) $\\frac{n-m}{5}$',
              schoolMethod: `**Solution:**

**(i)** Numerator: $3p^2 - 3pq - 18q^2 = 3(p^2 - pq - 6q^2) = 3(p-3q)(p+2q)$

Denominator: $p^2 + 3pq - 10q^2 = (p+5q)(p-2q)$

$= \\frac{3(p-3q)(p+2q)}{(p+5q)(p-2q)}$

**(ii)** Numerator: $n^3 - 3n^2m + 3nm^2 - m^3 = (n-m)^3$

Denominator: $5m^2 - 10mn + 5n^2 = 5(m-n)^2 = 5(n-m)^2$

$= \\frac{(n-m)^3}{5(n-m)^2} = \\boxed{\\frac{n-m}{5}}$`,
            }
          },
        ]
      },
      {
        id: 'ex4.eoc', title: 'End-of-Chapter Exercises',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Factorise: (i) $x^2 - 9$ (ii) $4y^2 - 25$ (iii) $a^2 - 16b^2$',
            answer: {
              answerKey: '(i) $\\boxed{(x-3)(x+3)}$ (ii) $\\boxed{(2y-5)(2y+5)}$ (iii) $\\boxed{(a-4b)(a+4b)}$',
              schoolMethod: `**Solution:**

Using difference of squares: $a^2 - b^2 = (a-b)(a+b)$

**(i)** $x^2 - 9 = x^2 - 3^2 = \\boxed{(x-3)(x+3)}$

**(ii)** $4y^2 - 25 = (2y)^2 - 5^2 = \\boxed{(2y-5)(2y+5)}$

**(iii)** $a^2 - 16b^2 = a^2 - (4b)^2 = \\boxed{(a-4b)(a+4b)}$`,
            }
          },
        ]
      },
    ]
  },

  {
    id: 'ch05', number: 5,
    title: "I'm Up and Down, and Round and Round",
    slug:  'im-up-and-down-and-round-and-round',
    code:  '0904ch05',
    exercises: [
      {
        id: 'ex5.1', title: 'Exercise Set 5.1',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'A wheel of radius 35 cm completes 100 revolutions. How much distance does it cover?',
            answer: {
              answerKey: 'Distance = $22000$ cm $= \\boxed{220}$ m.',
              schoolMethod: `**Solution:**

Circumference of wheel $= 2\\pi r = 2 \\times \\frac{22}{7} \\times 35 = 220$ cm

Distance in 100 revolutions $= 220 \\times 100 = \\boxed{22000}$ cm $= \\boxed{220}$ m`,
            }
          },
        ]
      },
      {
        id: 'ex5.eoc', title: 'End-of-Chapter Exercises',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Find the circumference and area of a circle with radius 14 cm.',
            answer: {
              answerKey: 'Circumference = $\\boxed{88}$ cm, Area = $\\boxed{616}$ cm²',
              schoolMethod: `**Solution:**

Given: $r = 14$ cm, $\\pi = \\frac{22}{7}$

$$\\text{Circumference} = 2\\pi r = 2 \\times \\frac{22}{7} \\times 14 = \\boxed{88} \\text{ cm}$$

$$\\text{Area} = \\pi r^2 = \\frac{22}{7} \\times 14^2 = \\frac{22}{7} \\times 196 = \\boxed{616} \\text{ cm}^2$$`,
            }
          },
        ]
      },
    ]
  },

  {
    id: 'ch06', number: 6,
    title: 'Measuring Space: Perimeter and Area',
    slug:  'measuring-space-perimeter-and-area',
    code:  '0904ch06',
    exercises: [
      {
        id: 'ex6.1', title: 'Exercise Set 6.1',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Find the area of a rectangle whose length is 18 cm and breadth is 12 cm.',
            answer: {
              answerKey: 'Area = $\\boxed{216}$ cm²',
              schoolMethod: `**Solution:**

$$\\text{Area of rectangle} = l \\times b = 18 \\times 12 = \\boxed{216} \\text{ cm}^2$$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'A square has a perimeter of 48 m. Find its area.',
            answer: {
              answerKey: 'Area = $\\boxed{144}$ m²',
              schoolMethod: `**Solution:**

Perimeter of square $= 4 \\times \\text{side}$
$$48 = 4 \\times s \\Rightarrow s = 12 \\text{ m}$$

$$\\text{Area} = s^2 = 12^2 = \\boxed{144} \\text{ m}^2$$`,
            }
          },
        ]
      },
      {
        id: 'ex6.2', title: 'Exercise Set 6.2',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'In the given figure, ABCD is a rectangle. BC = AD = Base of △ADE = 8 cm. DC = height of the △ = 10 cm. Find the area of △ADE.',
            answer: {
              answerKey: 'Area of △ADE = $\\boxed{40 \\text{ cm}^2}$',
              schoolMethod: `In the given figure, ABCD is a rectangle.

Here, BC = AD = Base of △ADE = 8 cm

DC = height of the △ = 10 cm

Area of △ADE = \$\\left(\\dfrac{1}{2} \\times 8 \\times 10\\right)\$ cm²

\$= \\boxed{40 \\text{ cm}^2} \\ \\text{Ans.}\$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'Let ABCD be a trapezium. The parallel sides of a trapezium are 40 cm and 20 cm. The non parallel sides are equal. BC = AD = 26 cm. Find the area of the trapezium.',
            answer: {
              answerKey: 'Area of trapezium = $\\boxed{780 \\text{ cm}^2}$',
              schoolMethod: `Let ABCD be a trapezium.

Given, the parallel sides of a trapezium are 40 cm and 20 cm.

∴ Let AB = 40 cm

&emsp; CD = 20 cm

∴ The non parallel sides are equal,

&emsp; BC = AD = 26 cm

Now,

Area of trapezium = \$\\left[\\dfrac{1}{2}(40+20) \\times 26\\right] \\text{ cm}^2\$

\$= \\left[\\dfrac{1}{2} \\times \\cancel{60}^{\\,30} \\times 26\\right] \\text{ cm}^2\$

\$= \\boxed{780 \\text{ cm}^2} \\ \\text{Ans.}\$

<div class="diagram-box" style="margin:16px 0;">
<svg viewBox="0 0 280 160" width="280" height="160" xmlns="http://www.w3.org/2000/svg" style="font-family:serif;overflow:visible">
  <!-- Trapezium shape: AB top (shorter), DC bottom (longer) -->
  <!-- A top-left, B top-right, C bottom-right, D bottom-left -->
  <polygon points="80,30 200,30 240,130 40,130" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="75" y="24" font-size="13" text-anchor="middle">A</text>
  <text x="205" y="24" font-size="13" text-anchor="middle">B</text>
  <text x="248" y="136" font-size="13" text-anchor="middle">C</text>
  <text x="32" y="136" font-size="13" text-anchor="middle">D</text>
  <!-- Side labels -->
  <text x="140" y="22" font-size="11" text-anchor="middle">20 m</text>
  <text x="140" y="148" font-size="11" text-anchor="middle">40 cm</text>
  <text x="260" y="82" font-size="11" text-anchor="middle">26 m</text>
  <text x="20" y="82" font-size="11" text-anchor="middle">26 m</text>
  <!-- height dotted line -->
  <line x1="140" y1="30" x2="140" y2="130" stroke="currentColor" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="148" y="82" font-size="11">h</text>
</svg>
</div>`,
            }
          },
          {
            id: 'q3', number: '3', isHard: false,
            text: "The 2 sides of a △ are given. a = 32 cm, b = 11 cm. Perimeter of △ = 39 cm. Find the area using Heron's formula.",
            answer: {
              answerKey: 'Area = $\\boxed{8\\sqrt{30} \\text{ cm}^2}$',
              schoolMethod: `Given, a = 32 cm

&emsp;&emsp;&ensp; b = 11 cm

Perimeter = 39 cm

∴ Perimeter of △ = a + b + c

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; 39 cm = 32 cm + 11 cm + c

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; c = (39 − 14) cm

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; c = \$\\boxed{13 \\text{ cm}}\$

Now, &emsp; s = $\dfrac{a+b+c}{2}$ = $\dfrac{1}{2}$ × 32 cm = 16 cm

&emsp;&emsp;&emsp; s = 16 cm

Area = $\sqrt{s(s-a)(s-b)(s-c)}$ cm²

&emsp;&emsp;&emsp; = $\sqrt{16(16-8)(16-11)(16-13)}$ cm²

&emsp;&emsp;&emsp; = $\sqrt{16 \\times 8 \\times 5 \\times 3}$ cm²

&emsp;&emsp;&emsp; = $\\boxed{8\sqrt{30}}$ cm²`,
            }
          },
          {
            id: 'q4', number: '4', isHard: true,
            text: "Let ABCD be an isosceles trapezium. Let the length of shorter parallel side be 2a, longer parallel side be 2b. Let the length of each equal side be c. Perimeter of isosceles trapezium = 2a + 2b + 2c. Given parallel sides are 20 cm and 40 cm. AD = BC = 26 cm. Find the area.",
            answer: {
              answerKey: 'Area of isosceles trapezium = $\\boxed{720 \\text{ cm}^2}$',
              schoolMethod: `Let ABCD be an isosceles trapezium.

Let the length of shorter parallel side be 2a.
Let the length of longer parallel side be 2b.
Let the length of each equal side be c.
Let the length of each equal side be c.

&emsp;&emsp;&emsp;&emsp; [∵ Perimeter of isosceles trapezium = 2a + 2b + 2c]

Given, parallel sides of the trapezium are 20 cm & 40 cm.

Let AB = \$\\boxed{20 \\text{ cm}}\$ = 2a ⟹ a = 10 cm

Let DC = \$\\boxed{40 \\text{ cm}}\$ = 2b ⟹ b = 20 cm

∴ The non parallel sides are equal,

&emsp; AD = BC = 26 cm = c

Now, &emsp; S = a + b + c

&emsp;&emsp;&emsp;&emsp; = (10 + 20 + 26) cm

&emsp;&emsp;&emsp;&emsp; = 56 cm

Area of isosceles trapezium = \$\\sqrt{(s-2a)(s-2b)(s-b)(s-c)}\$

= \$\\sqrt{(56-20)(56-40)(56-26)(56-26)}\$

= \$\\sqrt{36 \\times 16 \\times 30 \\times 30}\$ cm²

= \$\\sqrt{6 \\times 6 \\times 4 \\times 4 \\times 30 \\times 30}\$ cm²

= (6 × 4 × 30) cm²

\$= \\boxed{720 \\text{ cm}^2} \\ \\text{Ans.}\$`,
            }
          },
          {
            id: 'q5', number: '5', isHard: true,
            text: "Find the length of the shortest diagonal of a rhombus whose area is 1500√5 m² (using Heron's formula). Also find the area of the rhombus using diagonals.",
            answer: {
              answerKey: 'The shortest diagonal is $\\boxed{64\\sqrt{2} \\text{ m}}$',
              schoolMethod: `Now, Area = \$\\sqrt{s(s-a)(s-b)(s-c)}\$

&emsp;&emsp;&emsp;&emsp;&emsp; = \$\\sqrt{150(150-60)(150-90)(150-100)}\$ m²

&emsp;&emsp;&emsp;&emsp;&emsp; = \$\\sqrt{10 \\times 10 \\times 5 \\times 3 \\times 2 \\times 10}\$ m²

&emsp;&emsp;&emsp;&emsp;&emsp; = \$\\sqrt{1500\\sqrt{5}}\$ m²

&emsp;&emsp;&emsp;&emsp;&emsp; = \$\\boxed{1500\\sqrt{5} \\text{ m}^2}\$ ✓ Ans.

5) Let the length of the shorter diagonal of a rhombus = 2x cm

Given, the length of the rhombus diagonal = 2x cm

∴ The shorter diagonal = 2x cm

The longer diagonal = 2 × 2 × d₁d₂

Now, Area of the rhombus = \$\\dfrac{1}{2} \\times d_1 \\times d_2\$

⟹ &emsp;&emsp;&emsp; Area of the rhombus = \$\\dfrac{1}{2} \\times 9x \\times 72\$

\$x^2 = 128\$

\$x = \\sqrt{128} = \\boxed{64\\sqrt{2}}\$ Ans.

Therefore, the shorter diagonal is \$\\boxed{64\\sqrt{2}}\$ m.`,
            }
          },
          {
            id: 'q6', number: '6', isHard: true,
            text: 'The ratio of the sides of a triangle is 3:5:7. The perimeter of the triangle is 300 m. Find the area of the triangle.',
            answer: {
              answerKey: 'Area = $\\boxed{1500\\sqrt{3} \\text{ m}^2}$',
              schoolMethod: `Given, The ratio of the sides of a △ is 3:5:7.

Now, let the sides be 3x m, 5x m and 7x m.

Perimeter of △ = Sum of 3 sides.

&emsp; 15x = 300 m : 3x + 5x + 7x

&emsp;&emsp;&emsp; x = \$\\dfrac{300}{15}\$

\$x = \\boxed{20 \\text{ m}}\$

Now, The sides are: (3 × 20) m = 60 m

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; (5 × 20) m = 100 m

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; (7 × 20) m = 140 m

Now, &emsp; s = \$\\dfrac{1}{2}\$(a + b + c)

&emsp;&emsp;&emsp;&emsp;&emsp; a = 60 m, b = 100 m, c = 140 m

&emsp;&emsp;&emsp;&emsp;&emsp; ∴ s = \$\\dfrac{1}{2}\$ × 300 m = 150 m

Area = \$\\sqrt{150(150-60)(150-100)(150-140)}\$

&emsp;&emsp;&emsp; = \$\\sqrt{150 \\times 90 \\times 50 \\times 10}\$ m²

&emsp;&emsp;&emsp; = \$\\sqrt{10 \\times 10 \\times 5 \\times 3 \\times 3 \\times 3 \\times 5 \\times 10 \\times 5 \\times 10}\$ m²

\$= \\boxed{1500\\sqrt{3} \\text{ m}^2}\$ Ans.`,
            }
          },
          {
            id: 'q7', number: '7', isHard: true,
            text: "ABCD is a parallelogram. P and Q are two points on side AB. Prove that the area of △PCS = area of △QAS (where S is the intersection of diagonals), and hence prove that ar(△BPQ) = ½ ar(△ABC).",
            answer: {
              answerKey: 'Since D is midpoint, CD is the median. Using properties of medians and parallel lines, $\\boxed{\\text{ar}(\\triangle BPQ) = \\frac{1}{2}\\text{ ar}(\\triangle ABC)}$.',
              schoolMethod: `**Given:** ABCD is a ||gm. P and Q are two points on side AB.

**To prove:** area of △PCS = area of △QAS

The base of the △BCD and △ACD are common and equal sides DE, and △ACD are on the same height. The height (∵ AB||DC), are both on the same sides DE.

That same [∵ AB||DC] two become! [T.T.] Prs.

**Given:** P ∈ LS is a ||gm.

&emsp;&emsp;&emsp; PR is a diagonal.

&emsp;&emsp;&emsp; Q is any point on PR.

**To prove:** Area of △PSQ = area of △PQA

**Construction:** Construct the diagonal QS.

**Proof:** &emsp; ∵ &emsp; AD = BD

&emsp;&emsp;&emsp; ∴ llgm bisect each other.

&emsp;&emsp;&emsp; ∴ &emsp; PM = RA

&emsp;&emsp;&emsp; and &emsp; PM = SM

The common height of both △ OSM and △ OAM is the common height of the diagonal, and then conclude that area of △OSM = area of △OAM = x

∴ Let ar(△OSH) = ar(△OAH) = x

Now, we also see that

(area of △PNS) ∘ − (area of △PEQ) = y

∵ &emsp; [area − area of △SM] = ar(△PSQ)

&emsp; ∵ [y − x = area of △PSQ]

∴ area of △PHS = area of △PMA [∵ area of △PSQ]

Hence, **area of △PHS = area of △PMA** ∴ **area of △BPQO = area of △APSO**

∴ &emsp; y − x = area of △ΔPSO [area of △DAM]

&emsp;&emsp; − n = area of △PSO (area of △RSO)

Hence Proved.`,
            }
          },
          {
            id: 'q9', number: '9', isHard: true,
            text: "ABC is a triangle. D is the midpoint of BC. Q is any point on BC. E is a point on AB such that EQ ∥ PD. PQ is joined. To prove: Area(△BPQ) = ½ Area(△ABC).",
            answer: {
              answerKey: '$\\boxed{\\text{ar}(\\triangle BPQ) = \\frac{1}{2}\\text{ ar}(\\triangle ABC)}$. Hence Proved.',
              schoolMethod: `**Given:** D is the mid point of AB.

&emsp;&emsp;&emsp;&emsp; ∴ AD = BD

&emsp;&emsp;&emsp;&emsp; P is any point on BC.

&emsp;&emsp;&emsp;&emsp; Q is a point on AB such that EQ ∥ PD.

&emsp;&emsp;&emsp;&emsp; PQ is joined.

**To prove:** Area(△BPQ) = \$\\dfrac{1}{2}\$ Area(△ABC)

**Construction:** Join DC.

**Proof:** &emsp; ∵ &emsp; AD = BD [∵ D is midpoint of AB]

&emsp;&emsp;&emsp;&emsp; ∴ CD is the median of △ABC.

&emsp;&emsp;&emsp;&emsp; ∴ Area of △BCD = Area of △DCA

&emsp;&emsp;&emsp;&emsp; ∴ Area of △BCD = \$\\dfrac{1}{2}\$ Area(ABC) &emsp; — ①

Now, In △BCD and △BPQ, ar(△BDP) is common.

&emsp; ar(△BCD) − ar(△BDP) = ar(△DPC) &emsp; — ②

&emsp; ar(△BPQ) − ar(△BDP) = ar(△DPQ) &emsp; — ③

∴ △DPC and △DPQ lie between the same parallel lines, their height is same. They both also have the same base DP.

From this, we can conclude that

&emsp; ar(△DPC) = ar(△DPQ) [∵ same height and base] &emsp; — ④

∴ We can also say that ar(△BPQ)

∴ ar(△BPQ) = ar(△BPD) + ar(△DPQ)

⟹ ar(△BPQ) = ar(△BPD) + ar(△DPC) &emsp; [∵ From ④]

⟹ ar(△BPQ) = ar(△BCD) &emsp; [∵ From ①]

⟹ ar(△BPQ) = ar(△ABCD) [∵ From ②]

From this, we can conclude that

ar(△DPC) = ar(△DPQ) [∵ same height and base] &emsp; — ④

∴ ar(△BPQ) = ar(△BDP) + ar(△DPQ)

⟹ ar(△BPQ) = ar(△BPD) + ar(△DPC) &emsp; [∵ From ④]

⟹ ar(△BPQ) = ar(△BCD) [∵ From ②]

⟹ \$\\boxed{\\text{ar}(\\triangle BPQ) = \\frac{1}{2} \\text{ ar}(\\triangle ABC)}\$ [∵ From ①]

**Hence proved.**`,
            }
          },
          {
            id: 'q10', number: '10', isHard: true,
            text: "ABCD is a square. P is a point within it. PA, PB, PC, PD are joined. Find the ratio of areas of red region (△PAB and △PCD) and green region (△PBC and △PDA).",
            answer: {
              answerKey: 'Ratio of red : green = $\\boxed{1 : 1}$',
              schoolMethod: `**Given:** ABCD is a square. P is a point within it. PA, PB, PC, PD are joined.

**To find:** Ratio of areas of red region (△PAB & △PCD) and green region (△PBC and △PDA) = ?

**Construction:** Construct EF ∥ DC and AB, EF passing through point P.

Construct GH ∥ AD and BC passing through point P.

∴ AB = EF = DC = a &emsp; [∵ ABCD is a square]

∴ AD = GH = BC = a &emsp; [∵ ABCD is a square]

Let &emsp; EP = a₁

&emsp;&emsp;&emsp; PF = a₂

∴ EP + PF = EF [∵ Straight line]

⟹ a₁ + a₂ = a &emsp; — ①

Let &emsp; GP = a₃

&emsp;&emsp;&emsp; PH = a₄

∴ GP + PH = GH [∵ Straight line]

⟹ a₃ + a₄ = a &emsp; — ②

Now, Areas of red region (△PAB and △PCD)

= ar(△PAB) + ar(△PCD)

= \$\\dfrac{1}{2}\$ × AB × GP + \$\\dfrac{1}{2}\$ × CD × PH

= \$\\dfrac{1}{2}\$ × a × a₃ + \$\\dfrac{1}{2}\$ × a × a₄

= \$\\dfrac{1}{2}\$a(a₃ + a₄)

= \$\\dfrac{1}{2}\$ × a × a &emsp; [∵ From ②]

\$= \\boxed{\\dfrac{1}{2}a^2}\$

Areas of green region (△PBC and △PDA)

= ar(△PBC) + ar(△PDA)

= \$\\dfrac{1}{2}\$ × BC × PF + \$\\dfrac{1}{2}\$ × AD × EP

= \$\\dfrac{1}{2}\$ × a × a₂ + \$\\dfrac{1}{2}\$ × a × a₁

= \$\\dfrac{1}{2}\$a(a₂ + a₁)

= \$\\dfrac{1}{2}\$ × a × a &emsp; [∵ From ①]

\$= \\boxed{\\dfrac{1}{2}a^2}\$

Now ratio of red : green = \$\\dfrac{1}{2}a^2\$ / \$\\dfrac{1}{2}a^2\$ = \$\\boxed{1:1}\$ Ans.`,
            }
          },
          {
            id: 'q11', number: '11', isHard: true,
            text: "ABC is a triangle. BD = DC. P is any point on BC. Q is a point on AB such that EQ ∥ PD. PQ is joined. To prove: ar(△ABP) = ½ ar(△ABC).",
            answer: {
              answerKey: '$\\boxed{\\text{ar}(\\triangle ABP) = \\frac{1}{2}\\text{ ar}(\\triangle ABC)}$. Hence Proved.',
              schoolMethod: `**Given:** ABC is a △.

&emsp;&emsp;&emsp;&emsp; D is the mid point of BC.

&emsp;&emsp;&emsp;&emsp; ∴ BD = DC

&emsp;&emsp;&emsp;&emsp; and △ABD and △ACD have a common height,

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ar(△ABD) = ar(△ACD)

Now, Let ar(△BDP) = ar(△BCP) = x

&emsp;&emsp;&emsp; Let ar(△ABD) = ar(△ACD) = y

We see that:

ar(△ABD) − ar(△BDP) = ar(△ABP)

⟹ &emsp; y − x = ar(△ABP)

ar(△ACD) − ar(△BCP) = ar(△ACP)

⟹ &emsp; y − x = ar(△ACP)

∴ &emsp; **ar(△ABP) = ar(△ACP)**

Now, ∵ BD = DC

and △ABD and △ACD have a common height,

&emsp;&emsp; ar(△ABD) = ar(△ACD)

Now, Let ar(△BDP) = ar(△BCP) = x

Let ar(△ABD) = ar(△ACD) = y

We see that

ar(△ABD) − ar(△BDP) = ar(△ABP)

⟹ y − x = ar(△ABP)

ar(△ACD) − ar(△BCP) = ar(△ACP)

⟹ y − x = ar(△ACP)

∴ ar(△ABCD) =

⟹ ar(△ABD) + ar(△DPC) = ar(△ABCD) = ar(△BDP) + ar(△DPC) [wait — this derives from structure]

**Hence:**

∴ &emsp; ∵ BD = DC

&emsp;&emsp; ∴ [∵ area of ARDP & △DCF have same height a common and base is at M]

∴ \$\\boxed{\\text{ar}(\\triangle ABP) = \\frac{1}{2}\\text{ ar}(\\triangle ABC)}\$ [∵ From ①]

&emsp;&emsp; **and** height of △ARDP & △DCE have same height & a common base at M.

∴ ar(ABDE) = ar(ADCE) [∵ same base and height]

**Hence Proved.**`,
            }
          },
        ]
      },
      {
        id: 'ex6.eoc', title: 'End-of-Chapter Exercises',
        questions: [
          {
            id: 'q1', number: '1', isHard: true,
            text: 'A rectangular park of length 120 m and breadth 80 m has a path of uniform width 3 m all around it inside. Find the area of the path.',
            answer: {
              answerKey: 'Area of path = $\\boxed{2328}$ m²',
              schoolMethod: `**Solution:**

**Outer rectangle:** $l = 120$ m, $b = 80$ m  
**Inner rectangle:** $l = 120 - 2(3) = 114$ m, $b = 80 - 2(3) = 74$ m

(Path is 3 m wide on both sides, so subtract $2 \\times 3 = 6$ from each dimension)

$$\\text{Area of outer} = 120 \\times 80 = 9600 \\text{ m}^2$$
$$\\text{Area of inner} = 114 \\times 74 = 8436 \\text{ m}^2$$

$$\\text{Area of path} = 9600 - 8436 = \\boxed{1164} \\text{ m}^2$$`,
              trickMethod: `Path area $= 2 \\times w \\times (l + b - 2w) = 2 \\times 3 \\times (120 + 80 - 6) = 6 \\times 194 = 1164$ m²`,
            }
          },
        ]
      },
    ]
  },

  {
    id: 'ch07', number: 7,
    title: 'The Mathematics of Maybe: Introduction to Probability',
    slug:  'the-mathematics-of-maybe-introduction-to-probability',
    code:  '0904ch07',
    exercises: [
      {
        id: 'ex7.1', title: 'Exercise Set 7.1',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'A fair coin is tossed once. What is the probability of getting a Head?',
            answer: {
              answerKey: '$P(\\text{Head}) = \\boxed{\\frac{1}{2}}$',
              schoolMethod: `**Solution:**

When a coin is tossed, the sample space is: $S = \\{H, T\\}$

Number of outcomes = 2  
Favourable outcomes (Head) = 1

$$P(\\text{Head}) = \\frac{\\text{Favourable outcomes}}{\\text{Total outcomes}} = \\boxed{\\frac{1}{2}}$$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'A die is rolled once. Find the probability of getting: (i) a 4 (ii) an even number (iii) a number greater than 4',
            answer: {
              answerKey: '(i) $\\boxed{\\frac{1}{6}}$ (ii) $\\boxed{\\frac{1}{2}}$ (iii) $\\boxed{\\frac{1}{3}}$',
              schoolMethod: `**Solution:**

Sample space: $S = \\{1, 2, 3, 4, 5, 6\\}$, $n(S) = 6$

**(i)** Getting a 4: Favourable = $\\{4\\}$, count = 1
$$P(4) = \\boxed{\\frac{1}{6}}$$

**(ii)** Even numbers: $\\{2, 4, 6\\}$, count = 3
$$P(\\text{even}) = \\frac{3}{6} = \\boxed{\\frac{1}{2}}$$

**(iii)** Greater than 4: $\\{5, 6\\}$, count = 2
$$P(>4) = \\frac{2}{6} = \\boxed{\\frac{1}{3}}$$`,
            }
          },
        ]
      },
      {
        id: 'ex7.eoc', title: 'End-of-Chapter Exercises',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Two coins are tossed simultaneously. Find the probability of getting at least one head.',
            answer: {
              answerKey: '$P(\\text{at least one head}) = \\boxed{\\frac{3}{4}}$',
              schoolMethod: `**Solution:**

Sample space: $S = \\{HH, HT, TH, TT\\}$, $n(S) = 4$

At least one head = $\\{HH, HT, TH\\}$, count = 3

$$P(\\text{at least one head}) = \\boxed{\\frac{3}{4}}$$

*Alternative:* $P(\\text{at least one H}) = 1 - P(\\text{no heads}) = 1 - \\frac{1}{4} = \\frac{3}{4}$`,
            }
          },
        ]
      },
    ]
  },

  {
    id: 'ch08', number: 8,
    title: 'Predicting What Comes Next: Exploring Sequences and Progressions',
    slug:  'predicting-what-comes-next-exploring-sequences-and-progressions',
    code:  '0904ch08',
    exercises: [
      {
        id: 'ex8.1', title: 'Exercise Set 8.1',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Find the next three terms of the sequence: 2, 5, 8, 11, ...',
            answer: {
              answerKey: 'Next terms: $\\boxed{14, \\ 17, \\ 20}$',
              schoolMethod: `**Solution:**

The sequence: 2, 5, 8, 11, ...

**Common difference:** $d = 5 - 2 = 3$ (constant) → This is an **Arithmetic Progression (AP)**

**Next terms:**
- $11 + 3 = \\boxed{14}$
- $14 + 3 = \\boxed{17}$
- $17 + 3 = \\boxed{20}$`,
            }
          },
          {
            id: 'q2', number: '2', isHard: false,
            text: 'For the AP 3, 7, 11, 15, ..., find: (i) the common difference (ii) the 10th term (iii) the general term',
            answer: {
              answerKey: '(i) $d = \\boxed{4}$ (ii) $a_{10} = \\boxed{39}$ (iii) $a_n = \\boxed{4n - 1}$',
              schoolMethod: `**Solution:**

AP: 3, 7, 11, 15, ... Here $a = 3$ (first term)

**(i) Common difference:** $d = 7 - 3 = \\boxed{4}$

**(ii) 10th term:**
$$a_{10} = a + (n-1)d = 3 + (10-1) \\times 4 = 3 + 36 = \\boxed{39}$$

**(iii) General term:**
$$a_n = a + (n-1)d = 3 + (n-1) \\times 4 = 3 + 4n - 4 = \\boxed{4n - 1}$$

*Check:* $a_1 = 4(1) - 1 = 3$ ✓, $a_2 = 4(2) - 1 = 7$ ✓`,
            }
          },
        ]
      },
      {
        id: 'ex8.2', title: 'Exercise Set 8.2',
        questions: [
          {
            id: 'q1', number: '1', isHard: true,
            text: 'The sum of the first $n$ terms of an AP is given by $S_n = 3n^2 + 5n$. Find the first term and common difference.',
            answer: {
              answerKey: 'First term $a = \\boxed{8}$, Common difference $d = \\boxed{6}$.',
              schoolMethod: `**Solution:**

Given: $S_n = 3n^2 + 5n$

**First term:** $a_1 = S_1 = 3(1)^2 + 5(1) = 3 + 5 = \\boxed{8}$

**Second term:** $a_2 = S_2 - S_1$
$$S_2 = 3(4) + 5(2) = 12 + 10 = 22$$
$$a_2 = 22 - 8 = 14$$

**Common difference:** $d = a_2 - a_1 = 14 - 8 = \\boxed{6}$

**General term:** $a_n = S_n - S_{n-1} = 3n^2 + 5n - 3(n-1)^2 - 5(n-1)$
$= 3n^2 + 5n - 3n^2 + 6n - 3 - 5n + 5 = \\boxed{6n + 2}$

*Verify:* $a_1 = 6(1) + 2 = 8$ ✓, $a_2 = 6(2) + 2 = 14$ ✓`,
              trickMethod: `For $S_n = An^2 + Bn$: first term $= A + B$, common difference $= 2A$. Here $A=3, B=5$: $a = 8$, $d = 6$.`,
            }
          },
        ]
      },
      {
        id: 'ex8.eoc', title: 'End-of-Chapter Exercises',
        questions: [
          {
            id: 'q1', number: '1', isHard: false,
            text: 'Find the sum of the first 20 terms of the AP: 5, 8, 11, ...',
            answer: {
              answerKey: '$S_{20} = \\boxed{670}$',
              schoolMethod: `**Solution:**

AP: 5, 8, 11, ... → $a = 5$, $d = 3$, $n = 20$

$$S_n = \\frac{n}{2}[2a + (n-1)d]$$

$$S_{20} = \\frac{20}{2}[2(5) + (20-1)(3)]$$
$$= 10[10 + 57]$$
$$= 10 \\times 67 = \\boxed{670}$$`,
            }
          },
        ]
      },
    ]
  },
];

// ─── ALL SUBJECTS ──────────────────────────────────────────────────────────────
export const CLASS_9_SUBJECTS: Subject[] = [
  {
    id: 'maths', name: 'Mathematics', slug: 'maths',
    book: 'Ganita Manjari Part I', bookSlug: 'ganita-manjari',
    code: '0904mt', icon: '∑', color: 'blue',
    downloadUrl: '/ebooks/ganita-manjari-grade9-part1.pdf',
    chapters: MATHS_CHAPTERS,
  },
  {
    id: 'advanced-maths', name: 'Advanced Mathematics', slug: 'advanced-maths',
    book: 'Class IX CBSE Advanced Mathematics', bookSlug: 'advanced-mathematics',
    code: '0904am', icon: '∞', color: 'orange',
    description: 'Class 9 Advanced Mathematics (Optional) — CBSE 2026-27. Sets, Logarithms, Relations and Functions, Coordinate Geometry, Combinatorics and Exploring Some More Progressions.',
    // Paste the PDF at: public/ebooks/advanced-mathematics-grade9.pdf
    downloadUrl: '/ebooks/advanced-mathematics-grade9.pdf',
    chapters: ADVMATH_CHAPTERS,
  },
  {
    id: 'advanced-science', name: 'Advanced Science', slug: 'advanced-science',
    book: 'Science Advanced', bookSlug: 'science-advanced',
    code: '0906as', icon: '🧬', color: 'teal',
    description: 'Class 9 Advanced Science — CBSE 2026-27. Measurement, motion, Newton\u2019s laws, simple machines, work and energy, the atom, chemical bonding, mixtures, microscopy and biotechnology.',
    // Paste the full book PDF at: public/ebooks/science-advanced-full-book.pdf
    downloadUrl: '/ebooks/science-advanced-full-book.pdf',
    chapters: ADVSCIENCE_CHAPTERS,
  },
  {
    id: 'science', name: 'Science', slug: 'science',
    book: 'Exploration', bookSlug: 'exploration',
    code: '0906ch', icon: '⚗', color: 'green',
    downloadUrl: '/ebooks/exploration-science-grade9.pdf',
    description: "Class 9 Science — NCERT 2026 Revised. All 13 chapters with complete solutions.",
    chapters: [
      { id:'ch01', number:1,  title:'Exploration: Entering the World of Secondary Science', slug:'exploration-entering-the-world-of-secondary-science', code:'0906ch01', exercises:[], description:'Scientific method, SI units and laboratory safety.' },
      { id:'ch02', number:2,  title:'Cell: The Building Block of Life',                     slug:'cell-the-building-block-of-life',                     code:'0906ch02', exercises:[], description:'Cell discovery, organelles, plant vs animal cell.' },
      { id:'ch03', number:3,  title:'Tissues in Action',                                     slug:'tissues-in-action',                                     code:'0906ch03', exercises:[], description:'Plant and animal tissues — structure and function.' },
      { id:'ch04', number:4,  title:'Describing Motion Around Us',                           slug:'describing-motion-around-us',                           code:'0906ch04', exercises:[], description:'Distance, displacement, velocity and acceleration.' },
      { id:'ch05', number:5,  title:'Exploring Mixtures and their Separation',               slug:'exploring-mixtures-and-their-separation',               code:'0906ch05', exercises:[], description:'Solutions, colloids, suspensions and separation methods.' },
      { id:'ch06', number:6,  title:'How Forces Affect Motion',                              slug:'how-forces-affect-motion',                              code:'0906ch06', exercises:[], description:"Newton's laws, inertia, momentum and conservation." },
      { id:'ch07', number:7,  title:'Work, Energy, and Simple Machines',                     slug:'work-energy-and-simple-machines',                       code:'0906ch07', exercises:[], description:'Work, kinetic energy, potential energy and power.' },
      { id:'ch08', number:8,  title:'Journey Inside the Atom',                               slug:'journey-inside-the-atom',                               code:'0906ch08', exercises:[], description:"Electron discovery, Rutherford's experiment and Bohr model." },
      { id:'ch09', number:9,  title:'Atomic Foundations of Matter',                          slug:'atomic-foundations-of-matter',                          code:'0906ch09', exercises:[], description:'Atomic number, valency, ions, isotopes and chemical bonding.' },
      { id:'ch10', number:10, title:'Sound Waves: Characteristics and Applications',         slug:'sound-waves-characteristics-and-applications',          code:'0906ch10', exercises:[], description:'Sound wave properties, reflection, echo and SONAR.' },
      { id:'ch11', number:11, title:'Reproduction: How Life Continues',                      slug:'reproduction-how-life-continues',                       code:'0906ch11', exercises:[], description:'Asexual and sexual reproduction in plants and animals.' },
      { id:'ch12', number:12, title:'Patterns in Life: Diversity and Classification',        slug:'patterns-in-life-diversity-and-classification',         code:'0906ch12', exercises:[], description:'Five kingdoms, classification principles and major groups.' },
      { id:'ch13', number:13, title:'Earth as a System: Energy, Matter, and Life',           slug:'earth-as-a-system-energy-matter-and-life',              code:'0906ch13', exercises:[], description:'Ecosystems, energy flow, matter cycles and human impact.' },
    ],
  },
  {
    id: 'arts', name: 'Arts', slug: 'arts',
    book: 'Madhurima', bookSlug: 'madhurima',
    code: '0907ar', icon: '🎨', color: 'indigo',
    downloadUrl: '/ebooks/madhurima-arts-grade9.pdf',
    description: 'Class 9 Arts (Madhurima) — NCERT 2026 Revised. History of Arts, Theatre, Music, Dance and Visual Arts — all 17 chapters with complete solutions.',
    chapters: ARTS_CHAPTERS,
  },
  {
    id: 'kaushal-vikas', name: 'Kaushal Vikas', slug: 'kaushal-vikas',
    book: 'Kaushal Vikas', bookSlug: 'kaushal-vikas',
    code: '0907kv', icon: '🌱', color: 'green',
    downloadUrl: '/ebooks/kaushal-vikas-grade9.pdf',
    description: 'Class 9 Kaushal Vikas (Skill Education) — NCERT 2026 Revised. Agricultural Practices, Rooftop Gardening, Precision Farming, Shaping Materials, Construction, Apparel, Personal and Lifestyle Services, Healthcare, Tourism and Additional Vocations with complete solutions.',
    chapters: KAUSHAL_VIKAS_CHAPTERS,
  },
  {
    id: 'english', name: 'English', slug: 'english',
    book: 'Kaveri', bookSlug: 'kaveri',
    code: '0904en', icon: '✒', color: 'purple',
    downloadUrl: '/ebooks/kaveri-english-grade9.pdf',
    chapters: [
      { id:'ch01', number:1, title:'How I Taught My Grandmother to Read', slug:'how-i-taught-my-grandmother-to-read',   code:'0903ch01', exercises:[] },
      { id:'ch02', number:2, title:'The Pot Maker',                       slug:'the-pot-maker',                        code:'0903ch02', exercises:[] },
      { id:'ch03', number:3, title:'Winds of Change',                     slug:'winds-of-change',                      code:'0903ch03', exercises:[] },
      { id:'ch04', number:4, title:'Vitamin-M',                           slug:'vitamin-m',                            code:'0903ch04', exercises:[] },
      { id:'ch05', number:5, title:'The World of Limitless Possibilities',slug:'the-world-of-limitless-possibilities', code:'0903ch05', exercises:[] },
      { id:'ch06', number:6, title:'Twin Melodies',                       slug:'twin-melodies',                        code:'0903ch06', exercises:[] },
      { id:'ch07', number:7, title:'Carrier of Words',                    slug:'carrier-of-words',                     code:'0903ch07', exercises:[] },
      { id:'ch08', number:8, title:'Follow That Dream',                   slug:'follow-that-dream',                    code:'0903ch08', exercises:[] },
    ],
  },
  {
    id: 'hindi', name: 'Hindi', slug: 'hindi',
    book: 'R1 and R2 book- Ganga', bookSlug: 'ganga',
    code: '0901hi', icon: 'अ', color: 'red',
    downloadUrl: '/ebooks/ganga-hindi-grade9.pdf',
    description: 'Class 9 Hindi (R1 and R2 book- Ganga) — NCERT 2026 Revised. All chapters with complete solutions.',
    chapters: HINDI_CHAPTERS,
  },
  // ── HINDI — Reva (R3 book) shares the subject slug 'hindi'; the
  // /class-9/hindi landing page lets the student choose between the two books.
  {
    id: 'hindi-reva', name: 'Hindi', slug: 'hindi',
    book: 'R3 book- Reva', bookSlug: 'reva',
    code: '0901rv', icon: 'अ', color: 'red',
    downloadUrl: '/ebooks/reva-hindi-grade9.pdf',
    description: 'Class 9 Hindi (R3 book- Reva) — NCERT 2026 Revised. All chapters with complete solutions.',
    chapters: REVA_HINDI_CHAPTERS,
  },
  // ── SANSKRIT — has two independently-selectable books sharing the same
  // subject slug 'sanskrit'; the /class-9/sanskrit landing page lets the
  // student choose between them (R1 and R2 book- Sharda, or R3 book- Iravati).
  {
    id: 'sanskrit-sharda', name: 'Sanskrit', slug: 'sanskrit',
    book: 'R1 and R2 book- Sharda', bookSlug: 'sharda',
    code: '0904sk', icon: 'ॐ', color: 'orange',
    description: 'Class 9 Sanskrit (R1 and R2 book- Sharda) — NCERT 2026 Revised. All chapters with complete solutions.',
    chapters: [
      { id:'ch01', number:1,  title:'सत्यं शिवं सुन्दरं संस्कृतम्',                      slug:'satyam-shivam-sundaram-sanskritam',        code:'0904sk01', exercises:[
        {
          id: 's1', title: 'अभ्यासाद् जायते सिद्धिः',
          questions: [
            { id:'q1', number:'१', isHard:false, text:'छात्राः मिलित्वा पृथक् पृथक् पञ्चानां छात्राणां लघुसमूहान् निर्माय यति-गति-लयपूर्वकं गीतगानस्य अभ्यासं करिष्यन्ति।', answer:{ answerKey:'छात्राः मिलित्वा पृथक् पृथक् पञ्चानां छात्राणां लघुसमूहान् निर्माय यति-गति-लयपूर्वकं गीतगानस्य अभ्यासं करिष्यन्ति।', schoolMethod:'छात्राः मिलित्वा पृथक् पृथक् पञ्चानां छात्राणां लघुसमूहान् निर्माय यति-गति-लयपूर्वकं गीतगानस्य अभ्यासं करिष्यन्ति।\n\nयह एक सामूहिक अभ्यास है — छात्र पाँच-पाँच के समूह बनाकर संगीत की यति, गति तथा लय के साथ संस्कृत में गीतगान का अभ्यास करेंगे।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'एकपदेन उत्तरं लिखत — संस्कृतं कस्याः साधकम्?', answer:{ answerKey:'भारतीयैकतायाः।', schoolMethod:'भारतीयैकतायाः।' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'सर्वदा संस्कृतं कस्य सन्दोहदम्?', answer:{ answerKey:'आनन्दस्य।', schoolMethod:'आनन्दस्य।' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'संस्कृतं कस्य प्रेरणादायकम्?', answer:{ answerKey:'सत्पथस्य।', schoolMethod:'सत्पथस्य।' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'संस्कृतं कासां परिष्कारकम्?', answer:{ answerKey:'सर्ववाणीनाम्।', schoolMethod:'सर्ववाणीनाम्।' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'कस्य विस्तारकं संस्कृतम्?', answer:{ answerKey:'विश्वबन्धुत्वस्य।', schoolMethod:'विश्वबन्धुत्वस्य।' } },
            { id:'q3a', number:'३ (क)', isHard:false, text:'पूर्णवाक्येन उत्तरं लिखत — सर्वतः कस्याः संस्थापकं संस्कृतम्?', answer:{ answerKey:'सर्वतः संस्कृतं शान्तेः संस्थापकम् अस्ति।', schoolMethod:'सर्वतः संस्कृतं शान्तेः संस्थापकम् अस्ति।' } },
            { id:'q3b', number:'३ (ख)', isHard:false, text:'कीदृशं व्रतं संस्कृतम्?', answer:{ answerKey:'संस्कृतं त्यागसन्तोषसेवाव्रतम् अस्ति।', schoolMethod:'संस्कृतं त्यागसन्तोषसेवाव्रतम् अस्ति।' } },
            { id:'q3c', number:'३ (ग)', isHard:false, text:'कयोः सम्मेलनं संस्कृतम्?', answer:{ answerKey:'संस्कृतं ज्ञानविज्ञानयोः सम्मेलनम् अस्ति।', schoolMethod:'संस्कृतं ज्ञानविज्ञानयोः सम्मेलनम् अस्ति।' } },
            { id:'q3d', number:'३ (घ)', isHard:false, text:'संस्कृतं कस्य चमत्कारकम्?', answer:{ answerKey:'संस्कृतं विश्वचेतसः चमत्कारकम् अस्ति।', schoolMethod:'संस्कृतं विश्वचेतसः चमत्कारकम् अस्ति।' } },
            { id:'q3e', number:'३ (ङ)', isHard:false, text:'केषां यशः स्मारकं संस्कृतम्?', answer:{ answerKey:'संस्कृतं पूर्वजानां यशसः स्मारकम् अस्ति।', schoolMethod:'संस्कृतं पूर्वजानां यशसः स्मारकम् अस्ति।' } },
            { id:'q4a', number:'४ (क)', isHard:false, text:'रिक्तस्थानानि पूरयन्तु — __________ सम्पादकं संस्कृतम्। (यथा — सर्वभूतैकता-कारकं संस्कृतम्)', answer:{ answerKey:'भारतीयत्व-', schoolMethod:'भारतीयत्व-सम्पादकं संस्कृतम्।' } },
            { id:'q4b', number:'४ (ख)', isHard:false, text:'__________ दर्शकं संस्कृतम्।', answer:{ answerKey:'ज्ञानपुञ्जप्रभा-', schoolMethod:'ज्ञानपुञ्जप्रभा-दर्शकं संस्कृतम्।' } },
            { id:'q4c', number:'४ (ग)', isHard:false, text:'__________ संस्कारकं संस्कृतम्।', answer:{ answerKey:'सर्वमस्तिष्क-', schoolMethod:'सर्वमस्तिष्क-संस्कारकं संस्कृतम्।' } },
            { id:'q4d', number:'४ (घ)', isHard:false, text:'कर्मदं __________ भक्तिदं संस्कृतम्।', answer:{ answerKey:'ज्ञानदं', schoolMethod:'कर्मदं ज्ञानदं भक्तिदं संस्कृतम्।' } },
            { id:'q4e', number:'४ (ङ)', isHard:false, text:'सत्यनिष्ठं __________ संस्कृतम्।', answer:{ answerKey:'शिवं सुन्दरं', schoolMethod:'सत्यनिष्ठं शिवं सुन्दरं संस्कृतम्।' } },
            { id:'q4f', number:'४ (च)', isHard:false, text:'शब्दलालित्य __________ संस्कृतम्।', answer:{ answerKey:'लीलावनं', schoolMethod:'शब्दलालित्य लीलावनं संस्कृतम्।' } },
            { id:'q5a', number:'५ (क)', isHard:false, text:'मञ्जूषायाः पदानि उपयुज्य वाक्यं रचयत।\nमञ्जूषा — वाणीपरिष्कारिका, एकता, सर्वतः, सेवा, सुन्दरम्, पूर्वजानाम्, सत्पथे प्रेरयितुम्, विश्वकल्याणाय, त्यागस्य, सन्तोषस्य, विश्वबन्धुत्वविस्तारकम्\n(यथा — वाणीपरिष्कारिका संस्कृत-भाषा भवति।)', answer:{ answerKey:'सत्पथे प्रेरयितुं संस्कृतभाषा समर्था अस्ति।', schoolMethod:'सत्पथे प्रेरयितुं संस्कृतभाषा समर्था अस्ति।' } },
            { id:'q5b', number:'५ (ख)', isHard:false, text:'________________', answer:{ answerKey:'विश्वबन्धुत्वस्य विस्तारिका संस्कृतभाषा अस्ति।', schoolMethod:'विश्वबन्धुत्वस्य विस्तारिका संस्कृतभाषा अस्ति।' } },
            { id:'q5c', number:'५ (ग)', isHard:false, text:'________________', answer:{ answerKey:'संस्कृतभाषा त्यागस्य सन्तोषस्य च भाषा अस्ति।', schoolMethod:'संस्कृतभाषा त्यागस्य सन्तोषस्य च भाषा अस्ति।' } },
            { id:'q5d', number:'५ (घ)', isHard:false, text:'________________', answer:{ answerKey:'विश्वकल्याणस्य निष्ठायुता संस्कृतभाषा अस्ति।', schoolMethod:'विश्वकल्याणस्य निष्ठायुता संस्कृतभाषा अस्ति।' } },
            { id:'q5e', number:'५ (ङ)', isHard:false, text:'________________', answer:{ answerKey:'संस्कृतभाषा सर्वतः शान्तिसंस्थापिका अस्ति।', schoolMethod:'संस्कृतभाषा सर्वतः शान्तिसंस्थापिका अस्ति।' } },
            { id:'q5f', number:'५ (च)', isHard:false, text:'________________', answer:{ answerKey:'संस्कृतभाषा सत्यानिष्ठा अस्ति।', schoolMethod:'संस्कृतभाषा सत्यानिष्ठा अस्ति।' } },
            { id:'q6a', number:'६ (क)', isHard:false, text:'समस्तपदानां विग्रहं कुरुत — ज्ञानपुञ्जप्रभादर्शकम्', answer:{ answerKey:'ज्ञानस्य पुञ्जः, तस्य प्रभादर्शकम्।', schoolMethod:'यथा — भारतीयैकतासाधकम् → भारतीयैकतायाः साधकम्।\nज्ञानस्य पुञ्जः, तस्य प्रभादर्शकम् ।' } },
            { id:'q6b', number:'६ (ख)', isHard:false, text:'सर्ववाणीपरिष्कारकम्', answer:{ answerKey:'सर्ववाणीनां परिष्कारकम्।', schoolMethod:'सर्ववाणीनां परिष्कारकम् ।' } },
            { id:'q6c', number:'६ (ग)', isHard:false, text:'विश्वबन्धुत्वविस्तारकम्', answer:{ answerKey:'विश्वबन्धुत्वस्य विस्तारकम्।', schoolMethod:'विश्वबन्धुत्वस्य विस्तारकम् ।' } },
            { id:'q6d', number:'६ (घ)', isHard:false, text:'सर्वभूतैकताकारकम्', answer:{ answerKey:'सर्वभूतैकतायाः कारकम्।', schoolMethod:'सर्वभूतैकतायायाः कारकम् ।' } },
            { id:'q6e', number:'६ (ङ)', isHard:false, text:'शान्तिसंस्थापकम्', answer:{ answerKey:'शान्तेः संस्थापकम्।', schoolMethod:'शान्तेः संस्थापकम् ।' } },
            { id:'q6f', number:'६ (च)', isHard:false, text:'ज्ञानविज्ञानसम्मेलनम्', answer:{ answerKey:'ज्ञानविज्ञानयोः सम्मेलनम्।', schoolMethod:'ज्ञानाविज्ञानयोः सम्मेलनम् ।' } },
            { id:'q7a', number:'७ (क)', isHard:false, text:'प्रदत्तमञ्जूषातः पर्यायपदानि चित्वा रिक्तस्थाने लिखत।\nमञ्जूषा — उल्लासः, किरणः, जगत्, अनुपमा, तेजोराशयः, मानम्\nविद्वांसः __________ भवति।', answer:{ answerKey:'तेजोराशयः', schoolMethod:'तेजोराशयः । विद्वांसः तेजोराशयः भवति।' } },
            { id:'q7b', number:'७ (ख)', isHard:false, text:'सूर्यस्य __________ सर्वेषां प्राणिनां कृते हितकराः भवन्ति।', answer:{ answerKey:'किरणः', schoolMethod:'किरणः । सूर्यस्य किरणः सर्वेषां प्राणिनां कृते हितकराः भवन्ति।' } },
            { id:'q7c', number:'७ (ग)', isHard:false, text:'ईश्वरं स्मृत्वा __________ उपजायते।', answer:{ answerKey:'उल्लासः', schoolMethod:'उल्लासः । ईश्वरं स्मृत्वा उल्लासः उपजायते।' } },
            { id:'q7d', number:'७ (घ)', isHard:false, text:'विद्यायाः __________ अजरं भवति।', answer:{ answerKey:'मानम्', schoolMethod:'मानम् । विद्यायाः मानम् अजरं भवति।' } },
            { id:'q7e', number:'७ (ङ)', isHard:false, text:'प्रकृतेः शोभा __________ विद्यते।', answer:{ answerKey:'अनुपमा', schoolMethod:'अनुपमा । प्रकृतेः शोभा अनुपमा विद्यते।' } },
            { id:'q7f', number:'७ (च)', isHard:false, text:'यत्र __________ एकनीडं भवति।', answer:{ answerKey:'जगत्', schoolMethod:'जगत् । यत्र जगत् एकनीडं भवति।' } },
            { id:'q8', number:'८', isHard:false, text:'मेलनं कुरुत —\n(क) भारतीयैकतायाः? (ख) सत्पथे? (ग) त्यागसन्तोषसेवारूपम्? (घ) ज्ञानपुञ्जप्रभायाः? (ङ) विश्वबन्धुत्वस्य?\nविकल्पाः — १. विस्तारकम् २. साधकम् ३. दर्शकम् ४. प्रेरणादायकम् ५. व्रतम्', answer:{ answerKey:'(क) भारतीयैकतायाः — २. साधकम्\n(ख) सत्पथे — ४. प्रेरणादायकम्\n(ग) त्यागसन्तोषसेवारूपम् — ५. व्रतम्\n(घ) ज्ञानपुञ्जप्रभायाः — ३. दर्शकम्\n(ङ) विश्वबन्धुत्वस्य — १. विस्तारकम्', schoolMethod:'(क) भारतीयैकतायाः → २. साधकम्\n(ख) सत्पथे → ४. प्रेरणादायकम्\n(ग) त्यागसन्तोषसेवारूपम् → ५. व्रतम्\n(घ) ज्ञानपुञ्जप्रभायाः → ३. दर्शकम्\n(ङ) विश्वबन्धुत्वस्य → १. विस्तारकम्' } },
          ]
        }
      ] },
      { id:'ch02', number:2,  title:'सुखस्य मूलं धर्मः धर्मस्य मूलम् अर्थः',               slug:'sukhasya-mulam-dharmah-dharmasya-mulam-arthah', code:'0904sk02', exercises:[
        {
          id: 's1', title: 'अभ्यासाद् जायते सिद्धिः',
          questions: [
            { id:'q1a', number:'१ (क)', isHard:false, text:'एकपदेन उत्तरं लिखत — वास्तविकसुखस्य आधारः कः?', answer:{ answerKey:'धर्मः।', schoolMethod:'धर्मः ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'कस्य अभावात् स्वकर्तव्यपालनं कठिनं भवति?', answer:{ answerKey:'धनस्य।', schoolMethod:'धनस्य ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'स्वस्थः आर्थिकव्यवहारः कतिविधः भवति?', answer:{ answerKey:'त्रिविधः।', schoolMethod:'त्रिविधः ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'कीदृशः आर्थिकव्यवहारः कदापि न करणीयः?', answer:{ answerKey:'अस्वस्थः।', schoolMethod:'अस्वस्थः ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'स्वावलम्बनं कस्य मूलं वर्तते?', answer:{ answerKey:'स्वाभिमानस्य।', schoolMethod:'स्वाभिमानस्य ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'जलबिन्दुनिपातेन क्रमशः किं पूर्यते?', answer:{ answerKey:'घटः।', schoolMethod:'घटः ।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'पूर्णवाक्येन उत्तरं लिखत — “सुखस्य मूलं धर्मः, धर्मस्य मूलम् अर्थः” इतीदं प्रसिद्धं वाक्यं कस्मिन् ग्रन्थे प्राप्यते?', answer:{ answerKey:'इदं वाक्यं कौटिल्यस्य अर्थशास्त्रे प्राप्यते।', schoolMethod:'इदं वाक्यं कौटिल्यस्य अर्थशास्त्रे प्राप्यते ।' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'सामान्यजीवने कासाम् आवश्यकतानां पूर्त्यर्थं धनम् आवश्यकम्?', answer:{ answerKey:'सामान्यजीवने अन्नं वस्त्रम् आवासः, शिक्षा इत्यादीनाम् आवश्यकतानां पूर्त्यर्थं धनम् आवश्यकम्।', schoolMethod:'सामान्यजीवने अन्नं वस्त्रम् आवासः, शिक्षा इत्यादीनाम् आवश्यकतानां पूर्त्यर्थं धनम् आवश्यकम् ।' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'ब्राह्मे मुहूर्ते कयोः चिन्तनम् आवश्यकम्?', answer:{ answerKey:'ब्राह्मे मुहूर्ते धर्मार्थयोः चिन्तनम् आवश्यकम्।', schoolMethod:'ब्राह्मे मुहूर्ते धर्मार्थयोः चिन्तनम् आवश्यकम् ।' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'जनः केन स्वावलम्बी भवति?', answer:{ answerKey:'जनः सञ्चयस्य अभ्यासेन स्वावलम्बी भवति।', schoolMethod:'जनः सञ्चयस्य अभ्यासेन स्वावलम्बी भवति ।' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'लघुलघुसञ्चयः अपि कालान्तरे केन रूपेण वर्धते?', answer:{ answerKey:'लघुलघुसञ्चयः अपि कालान्तरे चक्रवृद्ध्यंशेन वर्धते।', schoolMethod:'लघुलघुसञ्चयः अपि कालान्तरे चक्रवृद्ध्यंशेन वर्धते ।' } },
            { id:'q3a', number:'३ (क)', isHard:false, text:'वाक्येन सह ग्रन्थस्य सम्मेलनं कुरुत — जलबिन्दुनिपातेन क्रमशः पूर्यते घटः।', answer:{ answerKey:'४. चाणक्यनीतिः', schoolMethod:'जलबिन्दुनिपातेन क्रमशः पूर्यते घटः → ४. चाणक्यनीतिः' } },
            { id:'q3b', number:'३ (ख)', isHard:false, text:'ब्राह्मे मुहूर्ते चोत्थाय धर्ममर्थं च चिन्तयेत्।', answer:{ answerKey:'१. गरुडपुराणम्', schoolMethod:'ब्राह्मे मुहूर्ते चोत्थाय धर्ममर्थं च चिन्तयेत् → १. गरुडपुराणम्' } },
            { id:'q3c', number:'३ (ग)', isHard:false, text:'सर्वेषामेव शौचानामर्थशौचं परं स्मृतम्।', answer:{ answerKey:'२. मनुस्मृतिः', schoolMethod:'सर्वेषामेव शौचानामर्थशौचं परं स्मृतम् → २. मनुस्मृतिः' } },
            { id:'q3d', number:'३ (घ)', isHard:false, text:'सुखस्य मूलं धर्मः, धर्मस्य मूलम् अर्थः।', answer:{ answerKey:'३. अर्थशास्त्रम्', schoolMethod:'सुखस्य मूलं धर्मः, धर्मस्य मूलम् अर्थः → ३. अर्थशास्त्रम्' } },
            { id:'q4a', number:'४ (क)', isHard:false, text:'रेखाङ्कितपदमाधृत्य प्रश्ननिर्माणं कुरुत — सुखस्य मूलं धर्मः।', answer:{ answerKey:'कस्य?', schoolMethod:'कस्य मूलं सुखम्? अथवा कस्य? (रेखाङ्कितपदं — धर्मः)' } },
            { id:'q4b', number:'४ (ख)', isHard:false, text:'दिनस्य आरम्भे धर्मार्थयोः चिन्तनम् आवश्यकम्।', answer:{ answerKey:'कयोः?', schoolMethod:'कयोः चिन्तनम् आवश्यकम्? (रेखाङ्कितपदं — धर्मार्थयोः)' } },
            { id:'q4c', number:'४ (ग)', isHard:false, text:'सन्मार्गेण एव धनार्जनं करणीयम्।', answer:{ answerKey:'किम्?', schoolMethod:'किम् करणीयम्? अथवा किम्? (रेखाङ्कितपदं — धनार्जनम्)' } },
            { id:'q4d', number:'४ (घ)', isHard:false, text:'अनैतिकः आर्थिकव्यवहारः कदापि न करणीयः।', answer:{ answerKey:'कीदृशः?', schoolMethod:'कीदृशः आर्थिकव्यवहारः कदापि न करणीयः? (रेखाङ्कितपदं — अनैतिकः)' } },
            { id:'q4e', number:'४ (ङ)', isHard:false, text:'संकटकाले स्वाभिमानिजनः अन्यजनस्य आर्थिकसहायतां नापेक्षते।', answer:{ answerKey:'कः?', schoolMethod:'कः अन्यजनस्य आर्थिकसहायतां नापेक्षते? (रेखाङ्कितपदं — स्वाभिमानिजनः)' } },
            { id:'q5a', number:'५ (क)', isHard:false, text:'उचितैः पदैः रिक्तस्थानानि पूरयत — लभ् — __________ — लभेते — लभन्ते', answer:{ answerKey:'लभते', schoolMethod:'लभ् → लभते → लभेते → लभन्ते' } },
            { id:'q5b', number:'५ (ख)', isHard:false, text:'अपेक्ष् — अपेक्षते — __________ — अपेक्षन्ते', answer:{ answerKey:'अपेक्षेते', schoolMethod:'अपेक्ष् → अपेक्षते → अपेक्षेते → अपेक्षन्ते' } },
            { id:'q5c', number:'५ (ग)', isHard:false, text:'वर्ध् — __________ — वर्धेते — __________', answer:{ answerKey:'वर्धते, वर्धन्ते', schoolMethod:'वर्ध् → वर्धते → वर्धेते → वर्धन्ते' } },
            { id:'q5d', number:'५ (घ)', isHard:false, text:'सेव् — __________ — __________ — सेवन्ते', answer:{ answerKey:'सेवते, सेवेते', schoolMethod:'सेव् → सेवते → सेवेते → सेवन्ते' } },
            { id:'q5e', number:'५ (ङ)', isHard:false, text:'मोद् — मोदते — __________ — __________', answer:{ answerKey:'मोदेते, मोदन्ते', schoolMethod:'मोद् → मोदते → मोदेते → मोदन्ते' } },
            { id:'q6a', number:'६ (क)', isHard:false, text:'“सुखस्य मूलं धर्मः, धर्मस्य मूलम् अर्थः” इत्यस्य मुख्य आशयः कः अस्ति?', parts:['(१) सुखस्य आधारः केवलम् अर्थः एव।','(२) धर्मस्य आधारः केवलं सुखम् एव।','(३) धर्मस्य आधारः अर्थः, सुखस्य आधारः धर्मः।','(४) सुखं, धर्मः, अर्थः — एतेषां मध्ये सम्बन्धः नास्ति।'], answer:{ answerKey:'३. धर्मस्य आधारः अर्थः, सुखस्य आधारः धर्मः।', schoolMethod:'३. धर्मस्य आधारः अर्थः, सुखस्य आधारः धर्मः ।' } },
            { id:'q6b', number:'६ (ख)', isHard:false, text:'गरुडपुराणे किम् उपदिष्टम् अस्ति?', parts:['(१) रात्रौ धनस्य चिन्तनं करणीयम्।','(२) प्रभाते धर्मार्थयोः चिन्तनं करणीयम्।','(३) केवलं धर्मचिन्तनं करणीयम्।','(४) केवलम् अर्थचिन्तनं करणीयम्।'], answer:{ answerKey:'२. प्रभाते धर्मार्थयोः चिन्तनं करणीयम्।', schoolMethod:'२. प्रभाते धर्मार्थयोः चिन्तनं करणीयम् ।' } },
            { id:'q6c', number:'६ (ग)', isHard:false, text:'“सर्वेषामेव शौचानामर्थशौचं परं स्मृतम्” इत्यस्य तात्पर्यं किम्?', parts:['(१) जलशौचमेव श्रेष्ठम्।','(२) मृद्वारिशौचमेव श्रेष्ठम्।','(३) अर्थशौचं सर्वोपरि, अन्यविधशौचेभ्यः श्रेयः।','(४) शौचस्य आवश्यकता नास्ति।'], answer:{ answerKey:'३. अर्थशौचं सर्वोपरि, अन्यविधशौचेभ्यः श्रेयः।', schoolMethod:'३. अर्थशौचं सर्वोपरि, अन्यविधशौचेभ्यः श्रेयः ।' } },
            { id:'q6d', number:'६ (घ)', isHard:false, text:'छात्रैः क्रियमाणः अपव्ययः कः?', parts:['(१) स्वास्थ्यलाभाय व्ययः।','(२) विद्यार्जनाय व्ययः।','(३) आडम्बरयुक्तः प्रदर्शनात्मकः व्ययः।','(४) आत्मसुरक्षायै व्ययः।'], answer:{ answerKey:'३. आडम्बरयुक्तः प्रदर्शनात्मकः व्ययः।', schoolMethod:'३. आडम्बरयुक्तः प्रदर्शनात्मकः व्ययः ।' } },
            { id:'q6e', number:'६ (ङ)', isHard:false, text:'“जलबिन्दुनिपातेन क्रमशः पूर्यते घटः” इति वाक्यं कः अवदत्?', parts:['(१) बृहस्पतिः','(२) चाणक्यः','(३) मनुः','(४) याज्ञवल्क्यः'], answer:{ answerKey:'२. चाणक्यः', schoolMethod:'२. चाणक्यः ।' } },
          ]
        }
      ] },
      { id:'ch03', number:3,  title:'आत्मवत्सर्वभूतेषु यः पश्यति सः पण्डितः',              slug:'atmavat-sarvabhuteshu-yah-pashyati-sah-panditah', code:'0904sk03', exercises:[
        {
          id: 's1', title: 'अभ्यासाद् जायते सिद्धिः',
          questions: [
            { id:'q1a', number:'१ (क)', isHard:false, text:'अधोलिखितानां प्रश्नानाम् उत्तराणि संस्कृतभाषया लिखत — मातामही कस्य कथां श्रावितवती?', answer:{ answerKey:'मातामही पुण्यश्लोकस्य नामदेवमहाराजस्य कथां श्रावितवती।', schoolMethod:'मातामही पुण्यश्लोकस्य नामदेवमहाराजस्य कथां श्रावितवती ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'नामदेवस्य गुरुः नामदेवं किम् अध्यापितवान्?', answer:{ answerKey:'नामदेवस्य गुरुः नामदेवं अध्यापितवान् यत्- ‘ईश्वरः न केवलं मन्दिरे भवति, अपि तु सर्वेषु भूतेषु तस्य निवासो भवति। अतः तस्य सर्वात्मकस्य ईश्वरस्य पूजनं कुरु’ इति।', schoolMethod:'नामदेवस्य गुरुः नामदेवं अध्यापितवान् यत्- ‘ईश्वरः न केवलं मन्दिरे भवति, अपि तु सर्वेषु भूतेषु तस्य निवासो भवति । अतः तस्य सर्वात्मकस्य ईश्वरस्य पूजनं कुरु’ इति ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'नामदेवः कया भावनया धावनं कृतवान्?', answer:{ answerKey:'नामदेवः करुणया भावनया धावनं कृतवान्।', schoolMethod:'नामदेवः करुणया भावनया धावनं कृतवान् ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'बालकयोः मुखे किमर्थं म्लाने संजाते?', answer:{ answerKey:'अपराधभावनया बालकयोः मुखे ग्लाने संजायते।', schoolMethod:'अपराधभावनया बालकयोः मुखे ग्लाने संजायते ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'कपिलः माधवी च कं सङ्कल्पं कृतवन्तौ?', answer:{ answerKey:'तौ सङ्कल्पं कृतवन्तौ यत् – अस्माकं कायेन वाचा मनसा वा कस्यापि पीड़ा न भवेत् तथा च कस्यापि पीडां निवारयितुं प्रयतामहे।', schoolMethod:'तौ सङ्कल्पं कृतवन्तौ यत् – अस्माकं कायेन वाचा मनसा वा कस्यापि पीड़ा न भवेत् तथा च कस्यापि पीडां निवारयितुं प्रयतामहे ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'तं दृष्ट्वा पाषाणखण्डं स्वीकृत्य मारयितुं धावितवन्तौ इति वाक्ये ‘तम्’ इति सर्वनामशब्दः कस्य कृते प्रयुक्तः?', answer:{ answerKey:'‘तम्’ इति सर्वनामशब्दः शुनकस्य कृते प्रयुक्तः।', schoolMethod:'‘तम्’ इति सर्वनामशब्दः शुनकस्य कृते प्रयुक्तः ।' } },
            { id:'q1g', number:'१ (छ)', isHard:false, text:'कपिलः माधवी च कुत्र गतवन्तौ?', answer:{ answerKey:'कपिलः माधवी च अवकाशकाले मातुलगृहं गतवन्तौ।', schoolMethod:'कपिलः माधवी च अवकाशकाले मातुलगृहं गतवन्तौ ।' } },
            { id:'q1h', number:'१ (ज)', isHard:false, text:'‘मातामही तं प्रसड्गं दृष्टवती, तौ आहूतवती च’ इति वाक्ये ‘तौ’ इति शब्दः कस्यां विभक्तौ अस्ति?', answer:{ answerKey:'‘तौ’ इति शब्दः द्वितीया विभक्तौ अस्ति।', schoolMethod:'‘तौ’ इति शब्दः द्वितीया विभक्तौ अस्ति ।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'वाक्यानि भूतकालेन परिवर्त्य पुनः लिखत — नैवेद्यं विग्रहस्य पुरतः स्थापयति।\n(यथा – नामदेवः स्थालिकां स्वीकृत्य मन्दिरं गच्छति। → नामदेवः स्थालिकां स्वीकृत्य मन्दिरं गतवान्।)', answer:{ answerKey:'नैवेद्यं विग्रहस्य पुरतः स्थापितवान्।', schoolMethod:'नैवेद्यं विग्रहस्य पुरतः स्थापितवान् ।' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'नेत्रे निमील्य प्रार्थनायाः आरम्भं करोति।', answer:{ answerKey:'नेत्रे निमील्य प्रार्थनायाः आरम्भं कृतवान्।', schoolMethod:'नेत्रे निमील्य प्रार्थनायाः आरम्भं कृतवान् ।' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'गुरुः विसोबा तम् अध्यापयति।', answer:{ answerKey:'गुरुः विसोबा तम् अध्यापितवान्।', schoolMethod:'गुरुः विसोबा तम् अध्यापितवान् ।' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'अहं शृणोमि।', answer:{ answerKey:'अहं श्रुतवान् / श्रुतवती।', schoolMethod:'अहं श्रुतवान् / श्रुतवती ।' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'सत्पुरुषाः स्वकर्तृत्वेन जन्म सार्थकं कुर्वन्ति।', answer:{ answerKey:'सत्पुरुषाः स्वकर्तृत्वेन जन्म सार्थकं कृतवन्तः।', schoolMethod:'सत्पुरुषाः स्वकर्तृत्वेन जन्म सार्थकं कृतवन्तः ।' } },
            { id:'q2f', number:'२ (च)', isHard:false, text:'नामदेवः शुनकस्य पृष्ठे अनुधावति।', answer:{ answerKey:'नामदेवः शुनकस्य पृष्ठे अनुधावितवान्।', schoolMethod:'नामदेवः शुनकस्य पृष्ठे अनुधावितवान् ।' } },
            { id:'q3a', number:'३ (क)', isHard:false, text:'कथनानि कः / का / कं / कां च प्रति कथयति इति लिखत — कथां श्रोतुम् इच्छतः वा?', answer:{ answerKey:'मातामही — कपिलं माधवीं च प्रति।', schoolMethod:'मातामही — कपिलं माधवीं च प्रति ।' } },
            { id:'q3b', number:'३ (ख)', isHard:false, text:'अहं श्रुतवती यत् तस्य कीर्तने स्वयं देवः पाण्डुरङ्गः नृत्यं कृतवान् इति।', answer:{ answerKey:'माधवी — मातामहीं प्रति।', schoolMethod:'माधवी — मातामहीं प्रति ।' } },
            { id:'q3c', number:'३ (ग)', isHard:false, text:'किं देवेन सह अपि मित्रता सम्भवति?', answer:{ answerKey:'कपिलः — मातामहीं प्रति।', schoolMethod:'कपिलः — मातामहीं प्रति ।' } },
            { id:'q3d', number:'३ (घ)', isHard:false, text:'अतः तस्य सर्वात्मकस्य ईश्वरस्य पूजनं कुरु।', answer:{ answerKey:'गुरुः बिसोबा — नामदेवं प्रति।', schoolMethod:'गुरुः बिसोबा — नामदेवं प्रति ।' } },
            { id:'q3e', number:'३ (ङ)', isHard:false, text:'नैवेद्यं गृह्यतां देव-भक्तिं मे ह्यचलां कुरु।', answer:{ answerKey:'मातामही — कपिलं माधवीं च प्रति।', schoolMethod:'मातामही — कपिलं माधवीं च प्रति ।' } },
            { id:'q3f', number:'३ (च)', isHard:false, text:'धिक् शुनकम्।', answer:{ answerKey:'कपिलः — मातामहीं प्रति।', schoolMethod:'कपिलः — मातामहीं प्रति ।' } },
            { id:'q3g', number:'३ (छ)', isHard:false, text:'नामदेवस्य कियत् दुःखं माधवी जातं स्यात् खलु?', answer:{ answerKey:'माधवी — कपिलं प्रति।', schoolMethod:'माधवी — कपिलं प्रति ।' } },
            { id:'q3h', number:'३ (ज)', isHard:false, text:'किं घृतपात्रम् आधृत्य?', answer:{ answerKey:'कपिलः माधवी च — मातामहीं प्रति।', schoolMethod:'कपिलः माधवी च — मातामहीं प्रति ।' } },
            { id:'q3i', number:'३ (झ)', isHard:false, text:'अद्य अहं ज्ञातवान् यत् कपिलः सर्वेषु ईश्वरः निसति इति।', answer:{ answerKey:'कपिलः — मातामहीं प्रति।', schoolMethod:'कपिलः — मातामहीं प्रति ।' } },
            { id:'q3j', number:'३ (ञ)', isHard:false, text:'उत्तीर्णः भवान् परीक्षाम्।', answer:{ answerKey:'पाण्डुरङ्गः — नामदेवं प्रति।', schoolMethod:'पाण्डुरङ्गः — नामदेवं प्रति ।' } },
            { id:'q4a', number:'४ (क)', isHard:false, text:'रेखाङ्कितपदानि आधृत्य प्रश्ननिर्माणं कुरुत — देवः नामदेवं परितः भवति स्म।\n(यथा – पाण्डुरङ्गः नामदेवस्य मित्रम् आसीत्। → पाण्डुरङ्गः कस्य मित्रम् आसीत्?)', answer:{ answerKey:'देवः कं परितः भवति स्म?', schoolMethod:'देवः कं परितः भवति स्म? (रेखाङ्कितपदं — नामदेवं)' } },
            { id:'q4b', number:'४ (ख)', isHard:false, text:'ईश्वरः सर्वेषु भूतेषु निवसति।', answer:{ answerKey:'ईश्वरः केषु निवसति?', schoolMethod:'ईश्वरः केषु निवसति? (रेखाङ्कितपदं — सर्वेषु भूतेषु)' } },
            { id:'q4c', number:'४ (ग)', isHard:false, text:'शुनकः आगत्य मुखे रोटिकां धृत्वा धावितवान्।', answer:{ answerKey:'शुनकः आगत्य मुखे कां धृत्वा धावितवान्?', schoolMethod:'शुनकः आगत्य मुखे कां धृत्वा धावितवान्? (रेखाङ्कितपदं — रोटिकां)' } },
            { id:'q4d', number:'४ (घ)', isHard:false, text:'शुनकस्य स्थाने पाण्डुरङ्गः आविर्भूतवान्।', answer:{ answerKey:'शुनकस्य स्थाने कः आविर्भूतवान्?', schoolMethod:'शुनकस्य स्थाने कः आविर्भूतवान्? (रेखाङ्कितपदं — पाण्डुरङ्गः)' } },
            { id:'q4e', number:'४ (ङ)', isHard:false, text:'आत्मवत् सर्वभूतेषु यः पश्यति स पण्डितः।', answer:{ answerKey:'आत्मवत् सर्वभूतेषु यः पश्यति सः कः?', schoolMethod:'आत्मवत् सर्वभूतेषु यः पश्यति सः कः? (रेखाङ्कितपदं — पण्डितः)' } },
            { id:'q5', number:'५', isHard:false, text:'घटनाक्रमानुसारं लिखत —\n(क) नामदेवः मन्त्रम् उच्चार्य श्रद्धया प्रणम्य नेत्रे उद्घाटितवान्।\n(ख) नामदेवः घृतपात्रम् आधृत्य अनुधावितवान्।\n(ग) नामदेवः नैवेद्यस्थालिकां विग्रहस्य पुरतः स्थापितवान्।\n(घ) शुनकः शुष्करोटिकाम् अपहृत्य पलायितवान्।\n(ङ) शुनकस्य स्थाने पाण्डुरङ्गः आविर्भूतवान्।\n(च) नामदेवः मन्दिरं गतवान्।', answer:{ answerKey:'(च) नामदेवः मन्दिरं गतवान्। (ग) नामदेवः नैवेद्यस्थालिकां विग्रहस्य पुरतः स्थापितवान्। (क) नामदेवः मन्त्रम् उच्चार्य श्रद्धया प्रणम्य नेत्रे उद्घाटितवान्। (घ) शुनकः शुष्करोटिकाम् अपहृत्य पलायितवान्। (ख) नामदेवः घृतपात्रम् आधृत्य अनुधावितवान्। (ङ) शुनकस्य स्थाने पाण्डुरङ्गः आविर्भूतवान्।', schoolMethod:'(च) नामदेवः मन्दिरं गतवान् ।\n(ग) नामदेवः नैवेद्यस्थालिकां विग्रहस्य पुरतः स्थापितवान् ।\n(क) नामदेवः मन्त्रम् उच्चार्य श्रद्धया प्रणम्य नेत्रे उद्घाटितवान् ।\n(घ) शुनकः शुष्करोटिकाम् अपहृत्य पलायितवान् ।\n(ख) नामदेवः घृतपात्रम् आधृत्य अनुधावितवान् ।\n(ङ) शुनकस्य स्थाने पाण्डुरङ्गः आविर्भूतवान् ।' } },
            { id:'q6', number:'६', isHard:false, text:'कोष्ठकेषु दत्तानां पदानाम् उचितां विभक्तिं योजयित्वा अनुच्छेदं पूरयत।\n\nआगच्छन्तु, पायसं कुर्मः। …………. (क्षीर) सह तण्डुलाः पक्वाः। ……….. (शर्करा) विना कथं शक्यते। शीघ्रमेव ……….. (आपण) प्रति गत्वा शर्कराम् आनयतु। ……… (आपण) निकषा वाहनानि तिष्ठन्ति। शर्करा महानसे स्थापिता। ………. (शर्करा) परितः पिपीलिकाः आगताः। पिपीलिकाः अपनीय पायसे शर्करा योजिता। …….. (मधुर) विना पायसं रुचिकरं न भवति। अधुना ……….. (पायस) परितः बालक-बालिकावृन्दं तिष्ठति। धिक् ………. (अन्ये मधुरपदार्थाः) इति एकः वदति, ……. (तत्) विना जीवनम् अपूर्णम् इति अपरः। …….. (पायस) सह एव भोजनं सरसम् इति अन्यः। तेषां वचनानि श्रुत्वा पायसं यच्छन्त्याः अम्बायाः मुखे मन्दहासः विलसति।', answer:{ answerKey:'क्षीरेण, शर्करां, आपणं, आपणं, शर्करां, मधुरं, पायसं, अन्यान् मधुरपदार्थान्, तेन, पायसेन', schoolMethod:'क्रमेण विभक्तियोजनम् —\nक्षीरेण (क्षीर) सह तण्डुलाः पक्वाः।\nशर्करां (शर्करा) विना कथं शक्यते।\nशीघ्रमेव आपणं (आपण) प्रति गत्वा शर्कराम् आनयतु।\nआपणं (आपण) निकषा वाहनानि तिष्ठन्ति।\nशर्करां (शर्करा) परितः पिपीलिकाः आगताः।\nमधुरं (मधुर) विना पायसं रुचिकरं न भवति।\nअधुना पायसं (पायस) परितः बालक-बालिकावृन्दं तिष्ठति।\nधिक् अन्यान् मधुरपदार्थान् (अन्ये मधुरपदार्थाः) इति एकः वदति,\nतेन (तत्) विना जीवनम् अपूर्णम् इति अपरः।\nपायसेन (पायस) सह एव भोजनं सरसम् इति अन्यः ।\nतेषां वचनानि श्रुत्वा पायसं यच्छन्त्याः अम्बायाः मुखे मन्दहासः विलसति।' } },
            { id:'q7', number:'७', isHard:false, text:'अनुच्छेदे स्थूलाक्षरेण दत्तानां क्रियापदानां स्थाने उचितं क्तवतुप्रत्ययान्तरूपं योजयित्वा पुनः लिखत।\n\nकञ्चित् ग्रामं निकषा एका नदी आसीत्। नदी सर्वदा स्वच्छजलम् अददात्। जनाः तस्याः जलं पीत्वा सुखेन अजीवन्। एकः कृषकः तेन जलेन सर्वदा कृषिम् अकरोत्। कालान्तरम् अन्ये कृषकाः अपि तेन जलेन क्षेत्रसेचनम् अकुर्वन्। महिलाः पर्वसमये नदीम् अपूजयन्। एकवारं कश्चित् परिवारः नद्यां मालिन्यानि अक्षिपत्। क्रमशः अन्ये अपि अक्षिपन्। तेन नदी मलिना अभवत्, मीना: अम्रियन्त। स्त्रियः रोगैः पीडिताः अभवन्। तदा एका शिक्षिता बालिका जलस्य महत्त्वं सर्वान् अवदत्। सा नदीतीरम् आगत्य स्वयं वृक्षम् अरोपयत्। महिलाः अपि ततः प्रेरणां प्राप्य तस्याः साहाय्यम् अकुर्वन्। सर्वे ग्रामवासिनः मिलित्वा नदीम् अशोधयन्। पुनः नदी स्वच्छा जाता निर्मलं जलं च अददात्। ततः आरभ्य वर्षे एकवारं जनाः नदीम् अपूजयन् वृक्षरोपणं च अकुर्वन्।', answer:{ answerKey:'आसीत्/असितवती, दत्तवती, जीवितवन्तः, कृतवान्, कृतवन्तः, पूजितवत्यः, क्षिप्तवान्, क्षिप्तवन्तः, मृतवन्तः, भूतवत्यः, उक्तवती, रोपितवती, कृतवत्यः, शोधितवन्तः, दत्तवती, पूजितवन्तः, कृतवन्तः', schoolMethod:'कञ्चित् ग्रामं निकषा एका नदी आसीत् / असितवती।\nनदी सर्वदा स्वच्छजलम् दत्तवती।\nजनाः तस्याः जलं पीत्वा सुखेन जीवितवन्तः।\nएकः कृषकः तेन जलेन सर्वदा कृषिम् कृतवान्।\nकालान्तरम् अन्ये कृषकाः अपि तेन जलेन क्षेत्रसेचनम् कृतवन्तः।\nमहिलाः पर्वसमये नदीम् पूजितवत्यः।\nएकवारं कश्चित् परिवारः नद्यां मालिन्यानि क्षिप्तवान्।\nक्रमशः अन्ये अपि क्षिप्तवन्तः।\nतेन नदी मलिना अभवत्, मीनाः मृतवन्तः।\nस्त्रियः रोगैः पीडिताः भूतवत्यः।\nतदा एका शिक्षिता बालिका जलस्य महत्त्वं सर्वान् उक्तवती।\nसा नदीतीरम् आगत्य स्वयं वृक्षम् रोपितवती।\nमहिलाः अपि ततः प्रेरणां प्राप्य तस्याः साहाय्यम् कृतवत्यः।\nसर्वे ग्रामवासिनः मिलित्वा नदीम् शोधितवन्तः।\nपुनः नदी स्वच्छा जाता निर्मलं जलं च दत्तवती।\nततः आरभ्य वर्षे एकवारं जनाः नदीम् पूजितवन्तः वृक्षरोपणं च कृतवन्तः।' } },
            { id:'q8a', number:'८ (क)', isHard:false, text:'समस्तपदानि पाठात् चित्वा लिखत — घृतस्य पात्रम्, तत्\n(यथा – महान् आत्मा, तेषां → महात्मनाम्)', answer:{ answerKey:'घृतपात्रम्', schoolMethod:'घृतपात्रम् (घृतस्य पात्रम्, तत्)' } },
            { id:'q8b', number:'८ (ख)', isHard:false, text:'पाषाणस्य खण्डः, तम्', answer:{ answerKey:'पाषाणखण्डम्', schoolMethod:'पाषाणखण्डम् (पाषाणस्य खण्डः, तम्)' } },
            { id:'q8c', number:'८ (ग)', isHard:false, text:'प्रियः सुहृद्', answer:{ answerKey:'प्रियसखा', schoolMethod:'प्रियसखा (प्रियः सुहृद्)' } },
            { id:'q8d', number:'८ (घ)', isHard:false, text:'उदरे वेदना', answer:{ answerKey:'उदरवेदना', schoolMethod:'उदरवेदना (उदरे वेदना)' } },
            { id:'q8e', number:'८ (ङ)', isHard:false, text:'स्वीयः व्यवहारः', answer:{ answerKey:'स्वव्यवहारः', schoolMethod:'स्वव्यवहारः (स्वीयः व्यवहारः)' } },
            { id:'q8f', number:'८ (च)', isHard:false, text:'जीवनस्य मूल्यानि', answer:{ answerKey:'जीवनमूल्यानि', schoolMethod:'जीवनमूल्यानि (जीवनस्य मूल्यानि)' } },
            { id:'q8g', number:'८ (छ)', isHard:false, text:'मातुलस्य गृहम्, तत्', answer:{ answerKey:'मातुलगृहम्', schoolMethod:'मातुलगृहम् (मातुलस्य गृहम्, तत्)' } },
            { id:'q8h', number:'८ (ज)', isHard:false, text:'नरेषु रत्नानि इव, तेषाम्', answer:{ answerKey:'नररत्नानाम्', schoolMethod:'नररत्नानाम् (नरेषु रत्नानि इव, तेषाम्)' } },
            { id:'q8i', number:'८ (झ)', isHard:false, text:'स्वीयं कर्तृत्वम्, तेन', answer:{ answerKey:'स्वकर्तृत्वेन', schoolMethod:'स्वकर्तृत्वेन (स्वीयं कर्तृत्वम्, तेन)' } },
            { id:'q8j', number:'८ (ञ)', isHard:false, text:'अपराधस्य भावना, तया', answer:{ answerKey:'अपराधभावनया', schoolMethod:'अपराधभावनया (अपराधस्य भावना, तया)' } },
            { id:'q8k', number:'८ (ट)', isHard:false, text:'गुरोः उपदेशः, तम्', answer:{ answerKey:'गुरूपदेशम्', schoolMethod:'गुरूपदेशम् (गुरोः उपदेशः, तम्)' } },
            { id:'q8l', number:'८ (ठ)', isHard:false, text:'दिने दिने', answer:{ answerKey:'प्रतिदिनम्', schoolMethod:'प्रतिदिनम् (दिने दिने)' } },
            { id:'q8m', number:'८ (ड)', isHard:false, text:'राजा ऋषिः इव, तेषाम्', answer:{ answerKey:'राजर्षीणाम्', schoolMethod:'राजर्षीणाम् (राजा ऋषिः इव, तेषाम्)' } },
          ]
        }
      ] },
      { id:'ch04', number:4,  title:'न खलु वयस्तेजसो हेतुः',                              slug:'na-khalu-vayas-tejaso-hetuh',              code:'0904sk04', exercises:[
        {
          id: 's1', title: 'अभ्यासाद् जायते सिद्धिः',
          questions: [
            { id:'q1a', number:'१ (क)', isHard:false, text:'पूर्णवाक्येन उत्तरं लिखत — खुदीरामस्य जन्म कुत्र अभवत्?', answer:{ answerKey:'खुदीरामस्य जन्म बङ्गप्रान्तस्य मेदिनीपुरनामके जनपदे मोहोबनी-ग्रामे अभवत्।', schoolMethod:'खुदीरामस्य जन्म बङ्गप्रान्तस्य मेदिनीपुरनामके जनपदे मोहोबनी-ग्रामे अभवत् ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'खुदीरामः किमर्थं व्यथितः भवति स्म?', answer:{ answerKey:'खुदीरामः देशवासिषु जायमानान् अत्याचारान् दृष्ट्वा व्यथितः भवति स्म।', schoolMethod:'खुदीरामः देशवासिषु जायमानान् अत्याचारान् दृष्ट्वा व्यथितः भवति स्म ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'सत्येन्द्रनाथः किम् उपदिष्टवान्?', answer:{ answerKey:'सत्येन्द्रनाथः उपदिष्टवान् यत् – “क्रान्तिकार्यं कर्तुं शरीरं वज्रसदृशं दृढं, बुद्धिः असिधारा इव तीक्ष्णा, मनः गङ्गाजलमिव निर्मलं च भवेत्”।', schoolMethod:'सत्येन्द्रनाथः उपदिष्टवान् यत् – “क्रान्तिकार्यं कर्तुं शरीरं वज्रसदृशं दृढं, बुद्धिः असिधारा इव तीक्ष्णा, मनः गङ्गाजलमिव निर्मलं च भवेत्” ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'खुदीरामः कदा पर्यन्तं पादत्राणं न धरिष्यामि इति प्रतिज्ञातवान्?', answer:{ answerKey:'खुदीरामः प्रतिज्ञातवान् यत् “यावत् भारतम् आङ्ग्लशासनात् मुक्तं न भविष्यति तावत् पादत्राणं न धरिष्यामि”।', schoolMethod:'खुदीरामः प्रतिज्ञातवान् यत् “यावत् भारतम् आङ्ग्लशासनात् मुक्तं न भविष्यति तावत् पादत्राणं न धरिष्यामि” ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'किमर्थं न्यायाधीशः आङ्ग्लाः अधिकारिणः च चकिताः?', answer:{ answerKey:'मृत्युदण्डस्य उद्घोषणं श्रुत्वा अपि खुदीरामस्य मुखे भयं दुःखं वा नासीत् प्रत्युत प्रसन्नता, शान्तिः, तृप्तिः, तेजः च आसीत्, तत् दृष्ट्वा ते चकिताः।', schoolMethod:'मृत्युदण्डस्य उद्घोषणं श्रुत्वा अपि खुदीरामस्य मुखे भयं दुःखं वा नासीत् प्रत्युत प्रसन्नता, शान्तिः, तृप्तिः, तेजः च आसीत्, तत् दृष्ट्वा ते चकिताः ।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'सत्यम् / असत्यम् इति सूचयत — देशभक्तानां जीवनं राष्ट्राय समर्पितं भवति।', answer:{ answerKey:'सत्यम्', schoolMethod:'सत्यम् ।' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'निर्दयः किङ्ग्ज़फोर्ड् बालान् अपि दण्डयति स्म।', answer:{ answerKey:'सत्यम्', schoolMethod:'सत्यम् ।' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'खुदीरामस्य आक्रमणेन किङ्ग्ज़फोर्ड् मृतः।', answer:{ answerKey:'असत्यम्', schoolMethod:'असत्यम् ।' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'खुदीरामः किङ्ग्ज़फोर्ड्-महोदयस्य रथस्य उपरि विस्फोटकं क्षिप्तवान्।', answer:{ answerKey:'सत्यम्', schoolMethod:'सत्यम् ।' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'खुदीरामः बालानां सङ्घटनं कृत्वा पदयात्राम् आयोजयति स्म।', answer:{ answerKey:'सत्यम्', schoolMethod:'सत्यम् ।' } },
            { id:'q3a', number:'३ (क)', isHard:false, text:'संवत्सराणां शब्दानाम् अङ्कैः सह मेलनं कुरुत — सप्तचत्वारिंशदधिक-नवदशशततमं वर्षम्', answer:{ answerKey:'३. १९४७', schoolMethod:'सप्तचत्वारिंशदधिक-नवदशशततमं वर्षम् → १९४७ (१८९९ + ४७ + १ = १९४७)' } },
            { id:'q3b', number:'३ (ख)', isHard:false, text:'अष्टाधिक-नवदशशततमं वर्षम्', answer:{ answerKey:'४. १९०८', schoolMethod:'अष्टाधिक-नवदशशततमं वर्षम् → १९०८' } },
            { id:'q3c', number:'३ (ग)', isHard:false, text:'पञ्चाशदुत्तर-नवदशशततमं वर्षम्', answer:{ answerKey:'५. १९५०', schoolMethod:'पञ्चाशदुत्तर-नवदशशततमं वर्षम् → १९५०' } },
            { id:'q3d', number:'३ (घ)', isHard:false, text:'पञ्चाधिक-नवदशशततमं वर्षम्', answer:{ answerKey:'१. १९०५', schoolMethod:'पञ्चाधिक-नवदशशततमं वर्षम् → १९०५' } },
            { id:'q3e', number:'३ (ङ)', isHard:false, text:'नवाशीत्यधिक-अष्टादशशततमं वर्षम्', answer:{ answerKey:'२. १८८९', schoolMethod:'नवाशीत्यधिक-अष्टादशशततमं वर्षम् → १८८९' } },
            { id:'q4', number:'४', isHard:false, text:'पदानि आधृत्य चित्रं दृष्ट्वा पञ्च वाक्यानि लिखत।', answer:{ answerKey:'(क) इदं उद्यानस्य चित्रम् अस्ति।\n(ख) अत्र सूर्यः उदयति, गगने मेघाः पक्षिणः च सन्ति।\n(ग) उद्याने केचन बालकाः क्रीडन्ति, एकः बालकः च द्विचक्रिकां चालयति।\n(घ) दूरे पर्वताः वृक्षाः गृहाणि च दृश्यन्ते।\n(ङ) उद्याने पुष्पाणि विकसन्ति, सर्वत्र स्वच्छता अस्ति।', schoolMethod:'(क) इदं उद्यानस्य चित्रम् अस्ति।\n(ख) अत्र सूर्यः उदयति, गगने मेघाः पक्षिणः च सन्ति।\n(ग) उद्याने केचन बालकाः क्रीडन्ति, एकः बालकः च द्विचक्रिकां चालयति।\n(घ) दूरे पर्वताः वृक्षाः गृहाणि च दृश्यन्ते।\n(ङ) उद्याने पुष्पाणि विकसन्ति, सर्वत्र स्वच्छता अस्ति।' } },
            { id:'q5a', number:'५ (क)', isHard:false, text:'सन्धिच्छेदं कुरुत — इत्यादयः', answer:{ answerKey:'इति + आदयः', schoolMethod:'इत्यादयः = इति + आदयः' } },
            { id:'q5b', number:'५ (ख)', isHard:false, text:'सर्वेऽपि', answer:{ answerKey:'सर्वे + अपि', schoolMethod:'सर्वेऽपि = सर्वे + अपि' } },
            { id:'q5c', number:'५ (ग)', isHard:false, text:'कश्चित्', answer:{ answerKey:'कः + चित्', schoolMethod:'कश्चित् = कः + चित्' } },
            { id:'q5d', number:'५ (घ)', isHard:false, text:'प्रत्येकम्', answer:{ answerKey:'प्रति + एकम्', schoolMethod:'प्रत्येकम् = प्रति + एकम्' } },
            { id:'q5e', number:'५ (ङ)', isHard:false, text:'वयस्तेजसः', answer:{ answerKey:'वयः + तेजसः', schoolMethod:'वयस्तेजसः = वयः + तेजसः' } },
            { id:'q5f', number:'५ (च)', isHard:false, text:'अचिरादेव', answer:{ answerKey:'अचिरात् + एव', schoolMethod:'अचिरादेव = अचिरात् + एव' } },
            { id:'q6a', number:'६ (क)', isHard:false, text:'विग्रहवाक्यं दृष्ट्वा पाठ्यपुस्तकात् समस्तपदानि चित्वा पूरयत — देशस्य भक्ताः', answer:{ answerKey:'देशभक्ताः', schoolMethod:'देशस्य भक्ताः → देशभक्ताः' } },
            { id:'q6b', number:'६ (ख)', isHard:false, text:'बालः च क्रान्तिवीरः च', answer:{ answerKey:'बालक्रान्तिवीरः', schoolMethod:'बालः च क्रान्तिवीरः च → बालक्रान्तिवीरः' } },
            { id:'q6c', number:'६ (ग)', isHard:false, text:'वज्रेण सदृशम्', answer:{ answerKey:'वज्रसदृशम्', schoolMethod:'वज्रेण सदृशम् → वज्रसदृशम्' } },
            { id:'q6d', number:'६ (घ)', isHard:false, text:'असेः धारा', answer:{ answerKey:'असिधारा', schoolMethod:'असेः धारा → असिधारा' } },
            { id:'q6e', number:'६ (ङ)', isHard:false, text:'मृत्युः एव दण्डः', answer:{ answerKey:'मृत्युदण्डः', schoolMethod:'मृत्युः एव दण्डः → मृत्युदण्डः' } },
            { id:'q6f', number:'६ (च)', isHard:false, text:'न साधारणः', answer:{ answerKey:'असाधारणः', schoolMethod:'न साधारणः → असाधारणः' } },
            { id:'q6g', number:'६ (छ)', isHard:false, text:'निर्गता दया यस्मात् सः', answer:{ answerKey:'निर्दयः', schoolMethod:'निर्गता दया यस्मात् सः → निर्दयः' } },
            { id:'q7a', number:'७ (क)', isHard:false, text:'वाक्यानि सूचनानुसारं परिवर्तयत — वन्दे मातरम् इत्यादयः घोषणाः भवन्ति स्म। (लङ्-लकारः)\n(यथा – खुदीरामः हुतात्मा जातः। → खुदीरामः हुतात्मा अजायत।)', answer:{ answerKey:'वन्दे मातरम् इत्यादयः घोषणाः अभवन्।', schoolMethod:'वन्दे मातरम् इत्यादयः घोषणाः अभवन् ।' } },
            { id:'q7b', number:'७ (ख)', isHard:false, text:'सत्येन्द्रनाथः खुदीरामम् उपादिशत्। (क्तवतु-प्रत्ययः)', answer:{ answerKey:'सत्येन्द्रनाथः खुदीरामम् उपदिष्टवान्।', schoolMethod:'सत्येन्द्रनाथः खुदीरामम् उपदिष्टवान् ।' } },
            { id:'q7c', number:'७ (ग)', isHard:false, text:'सः नवमीं कक्षां पूर्णां कर्तुं न शक्तवान्। (लङ्-लकारः)', answer:{ answerKey:'सः नवमीं कक्षां पूर्णां कर्तुं न अशक्नोत्।', schoolMethod:'सः नवमीं कक्षां पूर्णां कर्तुं न अशक्नोत् ।' } },
            { id:'q7d', number:'७ (घ)', isHard:false, text:'क्रान्तिवीराः आङ्ग्लानां मनसि आतङ्कम् अजनयन्। (स्म)', answer:{ answerKey:'क्रान्तिवीराः आङ्ग्लानां मनसि आतङ्कं जनयन्ति स्म।', schoolMethod:'क्रान्तिवीराः आङ्ग्लानां मनसि आतङ्कं जनयन्ति स्म ।' } },
            { id:'q7e', number:'७ (ङ)', isHard:false, text:'प्रफुल्लः भुशुण्ड्या गोलिकाप्रहारं कृतवान्। (लङ्-लकारः)', answer:{ answerKey:'प्रफुल्लः भुशुण्ड्या गोलिकाप्रहारम् अकरोत्।', schoolMethod:'प्रफुल्लः भुशुण्ड्या गोलिकाप्रहारम् अकरोत् ।' } },
            { id:'q8a', number:'८ (क)', isHard:false, text:'चित्-प्रत्ययान्तपदानि प्रयुज्य रिक्तस्थाने पूर्णवाक्यं लिखत — बालकः गच्छति।\nमञ्जूषा – कश्चित्, काचित्, किञ्चित्, कुत्रचित्, कदाचित्।', answer:{ answerKey:'कश्चित् बालकः गच्छति।', schoolMethod:'कश्चित् बालकः गच्छति ।' } },
            { id:'q8b', number:'८ (ख)', isHard:false, text:'बालिका गच्छति।', answer:{ answerKey:'काचित् बालिका गच्छति।', schoolMethod:'काचित् बालिका गच्छति ।' } },
            { id:'q8c', number:'८ (ग)', isHard:false, text:'फलं खादतु।', answer:{ answerKey:'किञ्चित् फलं खादतु।', schoolMethod:'किञ्चित् फलं खादतु ।' } },
            { id:'q8d', number:'८ (घ)', isHard:false, text:'लेखनी लुप्ता।', answer:{ answerKey:'कुत्रचित् लेखनी लुप्ता।', schoolMethod:'कुत्रचित् लेखनी लुप्ता ।' } },
            { id:'q8e', number:'८ (ङ)', isHard:false, text:'सः आगच्छेत्।', answer:{ answerKey:'कदाचित् सः आगच्छेत्।', schoolMethod:'कदाचित् सः आगच्छेत् ।' } },
          ]
        },
        {
          id: 's2', title: 'स्वाध्यायान्मा प्रमदः',
          questions: [
            { id:'q1a', number:'१ (क)', isHard:false, text:'युगलपदानि (यदा-तदा, यथा-तथा, यद्यपि-तथापि) प्रयुज्य रिक्तस्थानानि पूरयत — सुभाषचंद्रः वदति ………… भवन्तः मह्यं रुधिरं यच्छन्तु अहं भवद्भ्यः स्वातन्त्र्यं प्रयच्छामि …………।', answer:{ answerKey:'यदा, तदा', schoolMethod:'सुभाषचंद्रः वदति यदा भवन्तः मह्यं रुधिरं यच्छन्तु तदा अहं भवद्भ्यः स्वातन्त्र्यं प्रयच्छामि ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'……….. अर्जुनः भीष्मद्रोणादीन् अपश्यत् ………. शोकं प्राप्नोत्।', answer:{ answerKey:'यदा, तदा', schoolMethod:'यदा अर्जुनः भीष्मद्रोणादीन् अपश्यत् तदा शोकं प्राप्नोत् ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'श्रीरामः भरतम् उक्तवान् ……… जननी जन्मभूमिश्च स्वर्गादपि गरीयसी …………।', answer:{ answerKey:'यथा, तथा', schoolMethod:'श्रीरामः भरतम् उक्तवान् यथा जननी जन्मभूमिश्च स्वर्गादपि गरीयसी तथा ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'…………… भरतः अयोध्यां प्राप्तवान् ……………. श्रीरामः तत्र नासीत्।', answer:{ answerKey:'यदा, तदा', schoolMethod:'यदा भरतः अयोध्यां प्राप्तवान् तदा श्रीरामः तत्र नासीत् ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'……….. खुदीरामाय मृत्युदण्डः उद्घोषितः। ………….. सः प्रसन्नवदनः आसीत्।', answer:{ answerKey:'यद्यपि, तथापि', schoolMethod:'यद्यपि खुदीरामाय मृत्युदण्डः उद्घोषितः। तथापि सः प्रसन्नवदनः आसीत् ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'………….. वृष्टिः भवति …………. कृषकाः सन्तुष्टाः भवन्ति।', answer:{ answerKey:'यदा, तदा', schoolMethod:'यदा वृष्टिः भवति तदा कृषकाः सन्तुष्टाः भवन्ति ।' } },
            { id:'q1g', number:'१ (छ)', isHard:false, text:'………….. खुदीरामः बालः …………. सः देशकार्यं कृतवान्।', answer:{ answerKey:'यद्यपि, तथापि', schoolMethod:'यद्यपि खुदीरामः बालः तथापि सः देशकार्यं कृतवान् ।' } },
            { id:'q1h', number:'१ (ज)', isHard:false, text:'……….. कार्यं करोति ………. फलं प्राप्नोति।', answer:{ answerKey:'यथा, तथा', schoolMethod:'यथा कार्यं करोति तथा फलं प्राप्नोति ।' } },
            { id:'q1i', number:'१ (झ)', isHard:false, text:'प्रफुल्ल-खुदीरामाभ्यां ……….. विस्फोटकं प्रक्षिप्तम् ………… किङ्ग्ज़फोर्डः न मृतः।', answer:{ answerKey:'यद्यपि, तथापि', schoolMethod:'यद्यपि प्रफुल्ल-खुदीरामाभ्यां विस्फोटकं प्रक्षिप्तम् तथापि किङ्ग्ज़फोर्डः न मृतः ।' } },
            { id:'q1j', number:'१ (ञ)', isHard:false, text:'……… अध्ययनं सुदृढं भवति। ………. ज्ञानं विकसितं भवति।', answer:{ answerKey:'यदा, तदा', schoolMethod:'यदा अध्ययनं सुदृढं भवति तदा ज्ञानं विकसितं भवति ।' } },
            { id:'q1k', number:'१ (ट)', isHard:false, text:'……….. खुदीरामः आङ्ग्लानां हस्तगतः ………. सः ततः बहिरागतः।', answer:{ answerKey:'यद्यपि, तथापि', schoolMethod:'यद्यपि खुदीरामः आङ्ग्लानां हस्तगतः तथापि सः ततः बहिरागतः ।' } },
          ]
        },
        {
          id: 's3', title: 'यस्तु क्रियावान् मनुजः स विद्वान्',
          questions: [
            { id:'q1', number:'१', isHard:false, text:'भगतसिंहः, मङ्गलपाण्डे, चन्द्रशेखरः, लक्ष्मीबाई, बालगङ्गाधरतिलकः इत्येतेषां क्रान्तिवीराणां जीवनचरितं संगृह्य ततः एकां घटनां कक्षायां वदत।', answer:{ answerKey:'छात्राः स्वयं करिष्यन्ति।', schoolMethod:'यह एक आत्म-अभ्यास प्रश्न है — छात्र उक्त क्रान्तिवीरों के जीवनचरित से एक घटना चुनकर कक्षा में प्रस्तुत करेंगे।' } },
            { id:'q2', number:'२', isHard:false, text:'पाठे विद्यमानानि अव्ययपदानि संगृह्य दश (१०) वाक्यानि रचयत।', answer:{ answerKey:'१. च – देशाय स्वातन्त्र्यं प्रदातुं कियन्तः ज्ञाताः अज्ञाताः च क्रान्तिवीराः आहुतिरूपेण समर्पितवन्तः।\n२. इति – तस्य जनकस्य नाम त्रैलोक्यनाथः इति आसीत्।\n३. एव – खुदीरामस्य बाल्यकाले एव तस्य पितरौ दिवङ्गतौ।\n४. अतः – अतः तस्य अग्रजया अपरूपादेव्या एव खुदीरामस्य पालनं पोषणं च कृतम्।\n५. यद्यपि – यद्यपि खुदीरामः तस्मिन् समये केवलं पञ्चदशवर्षीयः तथापि सः जनान्दोलने कूर्दितः।\n६. तथापि – यद्यपि सः किङ्ग्जफोर्ड् महोदयस्य रथः आसीत्, तथापि तस्मिन् सः नासीदेव।\n७. अत्र – खुदीरामस्य जीवनवृत्तान्तः संक्षेपेण अत्र वर्णितः अस्ति।\n८. कदाचित् – कदाचित् खुदीरामः पत्रकवितरणसमये आङ्ग्लानां हस्तगतः जातः।\n९. यदा – तस्य स्थानान्तरणं यदा मुज़फ़्फ़रनगरे जातं तदा ‘सः हन्तव्यः’ इति निश्चितम्।\n१०. तदा – तस्य स्थानान्तरणं यदा मुज़फ़्फ़रनगरे जातं तदा सः हन्तव्यः इति सशस्त्रक्रान्तिवीरमण्डलेन निश्चितम्।', schoolMethod:'१. च – देशाय स्वातन्त्र्यं प्रदातुं कियन्तः ज्ञाताः अज्ञाताः च क्रान्तिवीराः आहुतिरूपेण समर्पितवन्तः।\n२. इति – तस्य जनकस्य नाम त्रैलोक्यनाथः इति आसीत्।\n३. एव – खुदीरामस्य बाल्यकाले एव तस्य पितरौ दिवङ्गतौ।\n४. अतः – अतः तस्य अग्रजया अपरूपादेव्या एव खुदीरामस्य पालनं पोषणं च कृतम्।\n५. यद्यपि – यद्यपि खुदीरामः तस्मिन् समये केवलं पञ्चदशवर्षीयः तथापि सः जनान्दोलने कूर्दितः।\n६. तथापि – यद्यपि सः किङ्ग्जफोर्ड् महोदयस्य रथः आसीत्, तथापि तस्मिन् सः नासीदेव।\n७. अत्र – खुदीरामस्य जीवनवृत्तान्तः संक्षेपेण अत्र वर्णितः अस्ति।\n८. कदाचित् – कदाचित् खुदीरामः पत्रकवितरणसमये आङ्ग्लानां हस्तगतः जातः।\n९. यदा – तस्य स्थानान्तरणं यदा मुज़फ़्फ़रनगरे जातं तदा ‘सः हन्तव्यः’ इति निश्चितम्।\n१०. तदा – तस्य स्थानान्तरणं यदा मुज़फ़्फ़रनगरे जातं तदा सः हन्तव्यः इति सशस्त्रक्रान्तिवीरमण्डलेन निश्चितम्।' } },
            { id:'q3', number:'३', isHard:false, text:'खुदीरामस्य जन्म नवाशीत्यधिके अष्टादशशततमे वर्षे (1889) दिसम्बरमासस्य तृतीये दिनाङ्के अभवत्। एवंप्रकारेण स्वविषये लिखन्तु।\n(क) मम जन्म ……………………………………..\n(ख) पितुः जन्म …………………………………….\n(ग) मातुः जन्म ………………………………………\n(घ) भ्रातुः जन्म ………………………………………\n(ङ) भगिन्याः जन्म …………………………………..', answer:{ answerKey:'छात्राः स्वयं करिष्यन्ति।', schoolMethod:'यह एक आत्म-अभ्यास प्रश्न है — छात्र अपने, पिता, माता, भ्राता एवं भगिनी के जन्म को उपर्युक्त शैली (संवत्सर + मास + दिनाङ्क) में संस्कृत में लिखेंगे। इस प्रकार — मम जन्म दशाधिक-निर्दशशततमवर्षीये … मासस्य … दिनाङ्के अभवत्।' } },
            { id:'q4', number:'४', isHard:false, text:'पारा-अलम्पिक स्पर्धायां कस्यापि एकस्य यशस्विप्रतिभागिनः विषये शिक्षकस्य पुरतः कथां श्रावयत।', answer:{ answerKey:'छात्राः संकेतम् — देवेन्द्र झाझड़िया', schoolMethod:'नमूना उत्तर —\nदेवेन्द्र झाझड़िया महोदयः एकः प्रसिद्धः भारतीयः पारा-अलम्पिक क्रीडकः अस्ति। सः भालाफेंक-क्रीडायां द्विवारं सुवर्णपदकं प्राप्तवान्। सः राजस्थानराज्यस्य निवासी अस्ति। तस्य हस्ते समस्या आसीत्, परन्तु सः स्वस्य आत्मबलेन कठिनपरिश्रमेण च विश्वस्तरे भारतस्य नाम प्रकाशितवान्। सः पद्मश्री, खेलरत्न इत्यादिभिः पुरस्कारैः सम्मानितः अस्ति।' } },
            { id:'q5', number:'५', isHard:false, text:'नृत्यसङ्गीतादिक्षेत्रेषु कस्यापि एकस्य जनप्रियस्य कलाकारस्य विषये पञ्चवाक्यानि लिखित्वा शिक्षकान् दर्शयत।', answer:{ answerKey:'छात्राः संकेतम् — पण्डित बिरजूमहाराजः', schoolMethod:'नमूना उत्तर — पण्डित बिरजूमहाराजः\n१. पण्डित बिरजूमहाराजः भारतस्य सुप्रसिद्धः कथकनर्तकः आसीत्।\n२. सः लखनऊ ‘कालका-बिन्दादिन’ घराने इत्यस्य मुख्यांशः आसीत्।\n३. बिरजूमहाराजः न केवलं नर्तकः, अपितु उत्तमः गायकः अपि आसीत्।\n४. सः भारतीयशास्त्रीयनृत्यस्य प्रचाराय विश्वे सर्वत्र कार्यं कृतवान्।\n५. सः ‘पद्मविभूषण’ इति पुरस्कारेण सम्मानितः अभवत्।' } },
          ]
        },
        {
          id: 's4', title: 'पठितावबोधनम्',
          questions: [
            { id:'q1', number:'१', isHard:false, text:'गद्यांशं पठित्वा प्रश्नान् उत्तरत — “भारतदेशस्य स्वतन्त्रतायाः अमृतमहोत्सववर्षं वयम् आचरितवन्तः। किं वयं जानीमः यत् देशाय स्वातन्त्र्यं प्रदातुं कियन्तः ज्ञाताः अज्ञाताः च क्रान्तिवीराः स्वतन्त्रतायज्ञे स्वीयपरिवारं स्वीयजीवनं च आहुतिरूपेण समर्पितवन्तः इति? छात्राः! ते सर्वेऽपि क्रान्तिवीराः अस्माभिः कृतज्ञताभावनया नित्यं वन्दनीयाः। खुदीरामः तेषु एव देशभक्तेषु कश्चन तेजस्वी बालक्रान्तिवीरः हुतात्मा अस्ति। क्रान्तिवीरस्य खुदीरामस्य जीवनवृत्तान्तः संक्षेपेण अत्र वर्णितः अस्ति।”\n\nI. एकपदेन उत्तरत:\n१. भारतस्य कः उत्सवः आचरितः?\n२. के देशाय स्वातन्त्र्यं प्रदातुं प्रयत्नवन्तः?\n३. कः बालक्रान्तिवीरः आसीत्?\n\nII. पूर्णवाक्येन उत्तरत:\n१. क्रान्तिवीराः स्वतन्त्र्याय किम् अकुर्वन्?\n२. खुदीरामः कः आसीत्?\n\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘हुतात्मा’ इति पदस्य कः अर्थः? (क) शिक्षा (ख) बलिदानी (ग) व्यापारः (घ) कृषिः\n(ii) ‘क्रान्तिवीराः’ इति कर्तृपदस्य क्रियापदं किम्? (क) क्रीडितवन्तः (ख) समर्पितवन्तः (ग) हसितवन्तः (घ) लिखितवन्तः\n(iii) ‘खुदीरामस्य’ इति विशेष्यपदस्य विशेषणपदं किम्? (क) वन्दनीयः (ख) क्रान्तिवीरस्य (ग) छात्रः (घ) क्रान्तिवीरः', answer:{ answerKey:'I. १. अमृतमहोत्सवः २. क्रान्तिवीराः ३. खुदीरामः\nII. १. क्रान्तिवीराः स्वकीयपरिवारं स्वजीवनं च आहुतिरूपेण समर्पितवन्तः। २. खुदीरामः एकः तेजस्वी बालक्रान्तिवीरः आसीत्।\nIII. (i) (ख) बलिदानी (ii) (ख) समर्पितवन्तः (iii) (ख) क्रान्तिवीरस्य', schoolMethod:'I. एकपदेन —\n१. अमृतमहोत्सवः। २. क्रान्तिवीराः। ३. खुदीरामः।\n\nII. पूर्णवाक्येन —\n१. क्रान्तिवीराः स्वकीयपरिवारं स्वजीवनं च आहुतिरूपेण समर्पितवन्तः।\n२. खुदीरामः एकः तेजस्वी बालक्रान्तिवीरः आसीत्।\n\nIII. यथानिर्देशम् —\n(i) (ख) बलिदानी\n(ii) (ख) समर्पितवन्तः\n(iii) (ख) क्रान्तिवीरस्य' } },
            { id:'q2', number:'२', isHard:false, text:'गद्यांशं पठित्वा प्रश्नान् उत्तरत — “तस्मात् गुप्तप्रशिक्षणकेन्द्रात् द्वाभ्याम् अष्टमासात्मकं प्रशिक्षणं प्राप्तम्। भुशुण्डिसञ्चालने अपि तौ अचिरादेव प्रवीणौ सञ्जातौ। राणाप्रतापस्य चरित्रेण प्रेरितः खुदीरामः प्रतिज्ञातवान् यत् ‘यावत् भारतम् आङ्ग्लशासनात् मुक्तं न भविष्यति तावत् पादत्राणं न धरिष्यामि’ इति।”\n\nI. एकपदेन उत्तरत:\n१. गुप्तप्रशिक्षणकेन्द्रात् किं प्राप्तम्?\n२. खुदीरामः कस्य चरित्रेण प्रेरितः?\n३. भारतं कस्य शासनात् मुक्तं न भविष्यति?\n\nII. पूर्णवाक्येन उत्तरत:\n१. खुदीरामः किमर्थं प्रशिक्षणं प्राप्तवान्?\n२. खुदीरामः किं प्रतिज्ञातवान्?\n\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘सञ्जातौ’ इति क्रियापदस्य कर्तृपदं किम्? (क) प्रवीणौ (ख) सुभाषचन्द्रबोसः (ग) तौ (घ) अचिरादेव\n(ii) ‘मुक्तं’ इत्यस्य पदस्य विलोमपदं किम्? (क) अमरं (ख) परतन्त्रं (ग) आहारम् (घ) कलमम्\n(iii) ‘प्रवीणौ’ इति पदस्य कः अर्थः? (क) प्रेरितः (ख) कुर्वतः (ग) प्रेरकौ (घ) कुशलौ', answer:{ answerKey:'I. १. प्रशिक्षणम् २. राणाप्रतापस्य ३. आङ्ग्लशासनात्\nII. १. खुदीरामः अभ्यासात्मकं प्रशिक्षणं प्राप्तवान् यतः सः कुशलः भवेत्। २. खुदीरामः प्रतिज्ञातवान् यत् यावत् भारतम् आङ्ग्लशासनात् मुक्तं न भविष्यति तावत् पादत्राणं न धारयिष्यामि।\nIII. (i) (ग) तौ (ii) (ख) परतन्त्रं (iii) (घ) कुशलौ', schoolMethod:'I. एकपदेन —\n१. प्रशिक्षणम्। २. राणाप्रतापस्य। ३. आङ्ग्लशासनात्।\n\nII. पूर्णवाक्येन —\n१. खुदीरामः अभ्यासात्मकं प्रशिक्षणं प्राप्तवान् यतः सः कुशलः भवेत्।\n२. खुदीरामः प्रतिज्ञातवान् यत् यावत् भारतम् आङ्ग्लशासनात् मुक्तं न भविष्यति तावत् पादत्राणं न धारयिष्यामि।\n\nIII. यथानिर्देशम् —\n(i) (ग) तौ\n(ii) (ख) परतन्त्रं\n(iii) (घ) कुशलौ' } },
            { id:'q3', number:'३', isHard:false, text:'गद्यांशं पठित्वा प्रश्नान् उत्तरत — “कलकत्ता-जनपदस्य मुख्यः न्यायिकः आङ्ग्लः अधिकारी ‘किङ्ग्जफोर्ड्’ भारतीय-देशभक्तान् अतीवकठोररीत्या दण्डयति स्म। निर्दयः सः बालान् अपि न त्यजति स्म। तस्य स्थानान्तरणं यदा मुज़फ्फरनगरे जातं तदा ‘सः हन्तव्यः’ इति सशस्त्रक्रान्तिवीरमण्डलेन निश्चितम्। हत्यायोजनायाः सम्पूर्णम् उत्तरदायित्वं प्रफुल्ल-खुदीरामाभ्यां स्वीकृतम्। तस्य वधस्य सूक्ष्मा योजनापि द्वाभ्यां निर्मिता।”\n\nI. एकपदेन उत्तरत:\n१. कलकत्ता-जनपदस्य मुख्यः न्यायिकः आङ्ग्ल अधिकारी कः आसीत्?\n२. किङ्ग्जफोर्डस्य स्थानान्तरणं कुत्र जातम्?\n३. हत्यायोजनायाः उत्तरदायित्वं काभ्यां स्वीकृतम्?\n\nII. पूर्णवाक्येन उत्तरत:\n१. किङ्ग्जफोर्डः भारतीय-देशभक्तान् कथं दण्डयति स्म?\n२. सशस्त्रक्रान्तिवीरमण्डलेन किं निश्चितम्?\n\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘योजना’ इत्यत्र विशेषणपदं किम्? (क) अतीव (ख) सूक्ष्मा (ग) दण्डयति (घ) निर्मिता\n(ii) ‘निर्दयः सः बालान् अपि न त्यजति स्म’ – अत्र ‘सः’ सर्वनामपदं कस्मै प्रयुक्तम्? (क) प्रफुल्लाय (ख) खुदीरामाय (ग) किङ्ग्जफोर्डाय (घ) कर्जनाय\n(iii) ‘निर्मिता’ इति क्रियापदस्य कर्तृपदं किम्? (क) द्वाभ्यां (ख) सूक्ष्मयोजना (ग) वधस्य (घ) जीवनस्य', answer:{ answerKey:'I. १. किङ्ग्जफोर्ड् २. मुज़फ़्फ़रनगरे ३. प्रफुल्ल-खुदीरामाभ्याम्\nII. १. किङ्ग्ज़फोर्डः भारतीय-देशभक्तान् अतीवकठोररीत्या दण्डयति स्म। २. सशस्त्रक्रान्तिवीरमण्डलेन निश्चितं यत् सः हन्तव्यः।\nIII. (i) (ख) सूक्ष्मा (ii) (ग) किङ्ग्जफोर्डाय (iii) (ख) सूक्ष्मयोजना', schoolMethod:'I. एकपदेन —\n१. किङ्ग्जफोर्ड्। २. मुज़फ़्फ़रनगरे। ३. प्रफुल्ल-खुदीरामाभ्याम्।\n\nII. पूर्णवाक्येन —\n१. किङ्ग्ज़फोर्डः भारतीय-देशभक्तान् अतीवकठोररीत्या दण्डयति स्म।\n२. सशस्त्रक्रान्तिवीरमण्डलेन निश्चितं यत् सः हन्तव्यः।\n\nIII. यथानिर्देशम् —\n(i) (ख) सूक्ष्मा\n(ii) (ग) किङ्ग्जफोर्डाय\n(iii) (ख) सूक्ष्मयोजना' } },
            { id:'q4a', number:'४ (१)', isHard:false, text:'रेखाङ्कितपदानि आधृत्य प्रश्ननिर्माणं कुरुत — खुदीरामस्य जन्म १८८९ तमे वर्षे अभवत्।', answer:{ answerKey:'कस्य जन्म १८८९ तमे वर्षे अभवत्?', schoolMethod:'कस्य जन्म १८८९ तमे वर्षे अभवत्? (रेखाङ्कितपदं — खुदीरामस्य)' } },
            { id:'q4b', number:'४ (२)', isHard:false, text:'तस्य जन्म मोहोबनी-ग्रामे अभवत्।', answer:{ answerKey:'तस्य जन्म कुत्र अभवत्?', schoolMethod:'तस्य जन्म कुत्र अभवत्? (रेखाङ्कितपदं — मोहोबनी-ग्रामे)' } },
            { id:'q4c', number:'४ (३)', isHard:false, text:'खुदीरामस्य पितरौ बाल्यकाले एव दिवङ्गतौ।', answer:{ answerKey:'खुदीरामस्य कौ बाल्यकाले एव दिवङ्गतौ?', schoolMethod:'खुदीरामस्य कौ बाल्यकाले एव दिवङ्गतौ? (रेखाङ्कितपदं — पितरौ)' } },
            { id:'q4d', number:'४ (४)', isHard:false, text:'अपरूपादेव्या खुदीरामस्य पालनं कृतम्।', answer:{ answerKey:'कया खुदीरामस्य पालनं कृतम्?', schoolMethod:'कया खुदीरामस्य पालनं कृतम्? (रेखाङ्कितपदं — अपरूपादेव्या)' } },
            { id:'q4e', number:'४ (५)', isHard:false, text:'खुदीरामः सत्येन्द्रनाथस्य प्रभावेण क्रान्तिदीक्षाम् अगृह्णात्।', answer:{ answerKey:'खुदीरामः कस्य प्रभावेण क्रान्तिदीक्षाम् अगृह्णात्?', schoolMethod:'खुदीरामः कस्य प्रभावेण क्रान्तिदीक्षाम् अगृह्णात्? (रेखाङ्कितपदं — सत्येन्द्रनाथस्य)' } },
            { id:'q4f', number:'४ (६)', isHard:false, text:'खुदीरामः देशभक्तेषु तेजस्वी बालक्रान्तिवीरः आसीत्।', answer:{ answerKey:'खुदीरामः केषु तेजस्वी बालक्रान्तिवीरः आसीत्?', schoolMethod:'खुदीरामः केषु तेजस्वी बालक्रान्तिवीरः आसीत्? (रेखाङ्कितपदं — देशभक्तेषु)' } },
            { id:'q4g', number:'४ (७)', isHard:false, text:'सः ‘वन्दे मातरम्’ इति मन्त्रम् अघोषयत्।', answer:{ answerKey:'सः किम् इति मन्त्रम् अघोषयत्?', schoolMethod:'सः किम् इति मन्त्रम् अघोषयत्? (रेखाङ्कितपदं — वन्दे मातरम्)' } },
            { id:'q4h', number:'४ (८)', isHard:false, text:'क्रान्तिवीराः आङ्ग्लानां मनसि आतङ्कम् अजनयन्।', answer:{ answerKey:'क्रान्तिवीराः केषां मनसि आतङ्कम् अजनयन्?', schoolMethod:'क्रान्तिवीराः केषां मनसि आतङ्कम् अजनयन्? (रेखाङ्कितपदं — आङ्ग्लानां)' } },
            { id:'q4i', number:'४ (९)', isHard:false, text:'खुदीरामः हास्यमुखेन फासीदण्डम् अङ्गीकृतवान्।', answer:{ answerKey:'खुदीरामः कथं फासीदण्डम् अङ्गीकृतवान्?', schoolMethod:'खुदीरामः कथं फासीदण्डम् अङ्गीकृतवान्? (रेखाङ्कितपदं — हास्यमुखेन)' } },
            { id:'q4j', number:'४ (१०)', isHard:false, text:'तस्य हस्ते भगवद्गीता आसीत्।', answer:{ answerKey:'तस्य हस्ते का आसीत्?', schoolMethod:'तस्य हस्ते का आसीत्? (रेखाङ्कितपदं — भगवद्गीता)' } },
            { id:'q5', number:'५', isHard:false, text:'मञ्जूषातः उचितानि पदानि चित्वा रिक्तस्थानानि पूरयत।\nमञ्जूषा- मोहोबनी, त्रैलोक्यनाथः, अग्रजया, वन्दे मातरम्, सत्येन्द्रनाथस्य, किङ्ग्जफोर्ड्, श्रीमद्भगवद्गीता, वयस्तेजसो\n\n(क) खुदीरामस्य जन्म मेदिनीपुरे जनपदे ……….. ग्रामे अभवत्।\n(ख) तस्य पितुः नाम ………… आसीत्।\n(ग) खुदीरामस्य पालनं पोषणं च तस्य ………. कृतम्।\n(घ) सः ………. इति मन्त्रं जपति स्म।\n(ङ) खुदीरामः ……… प्रभावेण क्रान्तिदीक्षाम् अगृह्णात्।\n(च) मुज़फ़्फ़रपुरे ……… नाम क्रूरः न्यायाधीशः आसीत्।\n(छ) खुदीरामस्य हस्ते ………. सुशोभिता आसीत्।\n(ज) न खलु ……… हेतुः।', answer:{ answerKey:'(क) मोहोबनी (ख) त्रैलोक्यनाथः (ग) अग्रजया (घ) वन्दे मातरम् (ङ) सत्येन्द्रनाथस्य (च) किङ्ग्जफोर्ड् (छ) श्रीमद्भगवद्गीता (ज) वयस्तेजसो', schoolMethod:'(क) खुदीरामस्य जन्म मेदिनीपुरे जनपदे मोहोबनी ग्रामे अभवत्।\n(ख) तस्य पितुः नाम त्रैलोक्यनाथः आसीत्।\n(ग) खुदीरामस्य पालनं पोषणं च तस्य अग्रजया कृतम्।\n(घ) सः वन्दे मातरम् इति मन्त्रं जपति स्म।\n(ङ) खुदीरामः सत्येन्द्रनाथस्य प्रभावेण क्रान्तिदीक्षाम् अगृह्णात्।\n(च) मुज़फ़्फ़रपुरे किङ्ग्जफोर्ड् नाम क्रूरः न्यायाधीशः आसीत्।\n(छ) खुदीरामस्य हस्ते श्रीमद्भगवद्गीता सुशोभिता आसीत्।\n(ज) न खलु वयस्तेजसो हेतुः।' } },
            { id:'q6a', number:'६ (क)', isHard:false, text:'प्रदत्तपदानाम् एकपदेन लिखत — देशस्य भक्ताः', answer:{ answerKey:'देशभक्ताः', schoolMethod:'देशस्य भक्ताः → देशभक्ताः' } },
            { id:'q6b', number:'६ (ख)', isHard:false, text:'स्वतन्त्रतायै सङ्ग्रामः', answer:{ answerKey:'स्वतन्त्रतासङ्ग्रामः', schoolMethod:'स्वतन्त्रतायै सङ्ग्रामः → स्वतन्त्रतासङ्ग्रामः' } },
            { id:'q6c', number:'६ (ग)', isHard:false, text:'महान् आत्मा यस्य सः', answer:{ answerKey:'महात्मा', schoolMethod:'महान् आत्मा यस्य सः → महात्मा' } },
            { id:'q6d', number:'६ (घ)', isHard:false, text:'बालः च असौ क्रान्तिवीरः', answer:{ answerKey:'बालक्रान्तिवीरः', schoolMethod:'बालः च असौ क्रान्तिवीरः → बालक्रान्तिवीरः' } },
            { id:'q6e', number:'६ (ङ)', isHard:false, text:'हुतः आत्मा यस्य सः', answer:{ answerKey:'हुतात्मा', schoolMethod:'हुतः आत्मा यस्य सः → हुतात्मा' } },
            { id:'q6f', number:'६ (च)', isHard:false, text:'मृत्योः दण्डः', answer:{ answerKey:'मृत्युदण्डः', schoolMethod:'मृत्योः दण्डः → मृत्युदण्डः' } },
            { id:'q7a', number:'७ (क)', isHard:false, text:'मञ्जूषातः उचितं विलोमपदं चित्वा लिखत — जन्म', answer:{ answerKey:'मरणम्', schoolMethod:'जन्म × मरणम्' } },
            { id:'q7b', number:'७ (ख)', isHard:false, text:'तेजस्वी', answer:{ answerKey:'निस्तेजः', schoolMethod:'तेजस्वी × निस्तेजः' } },
            { id:'q7c', number:'७ (ग)', isHard:false, text:'सूर्योदयः', answer:{ answerKey:'सूर्यास्तः', schoolMethod:'सूर्योदयः × सूर्यास्तः' } },
            { id:'q7d', number:'७ (घ)', isHard:false, text:'प्रकाशः', answer:{ answerKey:'अन्धकारः', schoolMethod:'प्रकाशः × अन्धकारः' } },
            { id:'q7e', number:'७ (ङ)', isHard:false, text:'परतन्त्रता', answer:{ answerKey:'स्वतन्त्रता', schoolMethod:'परतन्त्रता × स्वतन्त्रता' } },
            { id:'q7f', number:'७ (च)', isHard:false, text:'सहयोगः', answer:{ answerKey:'असहयोगः', schoolMethod:'सहयोगः × असहयोगः' } },
            { id:'q7g', number:'७ (छ)', isHard:false, text:'वीरः', answer:{ answerKey:'कातरः', schoolMethod:'वीरः × कातरः' } },
            { id:'q7h', number:'७ (ज)', isHard:false, text:'स्मृतवन्तः', answer:{ answerKey:'विस्मृतवन्तः', schoolMethod:'स्मृतवन्तः × विस्मृतवन्तः' } },
            { id:'q8', number:'८', isHard:false, text:'वाक्यानि कथाक्रमानुसारेण लिखत —\n(क) खुदीरामः हास्यमुखेन फासीदण्डम् अङ्गीकृतवान्।\n(ख) तस्य जन्म 1889 तमे वर्षे मेदिनीपुरजनपदे अभवत्।\n(ग) खुदीरामः प्रफुल्लः च किङ्ग्जफोर्डस्य शकटस्य उपरि बम-यन्त्रं क्षिप्तवन्तौ।\n(घ) बाल्यकाले एव तस्य पितरौ दिवङ्गतौ।\n(ङ) सः सत्येन्द्रनाथस्य प्रभावेण क्रान्तिदीक्षाम् अगृह्णात्।\n(च) खुदीरामः ‘वन्दे मातरम्’ इति ब्रुवन् आरक्षकैः गृहीतः।\n(छ) तस्य पालनं पोषणं च तस्य अग्रजया कृतम्।\n(ज) मुज़फ्फरपुरे किङ्ग्जफोर्डः नाम क्रूरः न्यायाधीशः आसीत्।', answer:{ answerKey:'(ख) तस्य जन्म 1889 तमे वर्षे मेदिनीपुरजनपदे अभवत्। (घ) बाल्यकाले एव तस्य पितरौ दिवङ्गतौ। (छ) तस्य पालनं पोषणं च तस्य अग्रजया कृतम्। (ङ) सः सत्येन्द्रनाथस्य प्रभावेण क्रान्तिदीक्षाम् अगृह्णात्। (ज) मुज़फ्फरपुरे किङ्ग्जफोर्डः नाम क्रूरः न्यायाधीशः आसीत्। (ग) खुदीरामः प्रफुल्लः च किङ्ग्जफोर्डस्य शकटस्य उपरि बम-यन्त्रं क्षिप्तवन्तौ। (च) खुदीरामः ‘वन्दे मातरम्’ इति ब्रुवन् आरक्षकैः गृहीतः। (क) खुदीरामः हास्यमुखेन फासीदण्डम् अङ्गीकृतवान्।', schoolMethod:'कथाक्रमः —\n(ख) तस्य जन्म 1889 तमे वर्षे मेदिनीपुरजनपदे अभवत्।\n(घ) बाल्यकाले एव तस्य पितरौ दिवङ्गतौ।\n(छ) तस्य पालनं पोषणं च तस्य अग्रजया कृतम्।\n(ङ) सः सत्येन्द्रनाथस्य प्रभावेण क्रान्तिदीक्षाम् अगृह्णात्।\n(ज) मुज़फ्फरपुरे किङ्ग्जफोर्डः नाम क्रूरः न्यायाधीशः आसीत्।\n(ग) खुदीरामः प्रफुल्लः च किङ्ग्जफोर्डस्य शकटस्य उपरि बम-यन्त्रं क्षिप्तवन्तौ।\n(च) खुदीरामः ‘वन्दे मातरम्’ इति ब्रुवन् आरक्षकैः गृहीतः।\n(क) खुदीरामः हास्यमुखेन फासीदण्डम् अङ्गीकृतवान्।' } },
          ]
        },
      ] },
      { id:'ch05', number:5,  title:'एषा सा कृतकबुद्धिः मानवबुद्धेः सहकरी',                slug:'esha-sa-kritakabuddhih-manavabuddheh-sahakari', code:'0904sk05', exercises:[
        {
          id: 's1', title: 'अभ्यासाद् जायते सिद्धिः',
          questions: [
            { id:'q1a', number:'१ (क)', isHard:false, text:'पाठस्य आधारेण पूर्णवाक्येन उत्तरं लिखत — कृतकबुद्धिः का अस्ति?', answer:{ answerKey:'मनुष्यनिर्मिता बुद्धिः या यन्त्रेषु मानवबुद्धिवत् कार्यं करोति कृतकबुद्धिः अस्ति।', schoolMethod:'मनुष्यनिर्मिता बुद्धिः या यन्त्रेषु मानवबुद्धिवत् कार्यं करोति कृतकबुद्धिः अस्ति ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'अध्यापकः कृतकबुद्धेः कानि उदाहरणानि उक्तवान्?', answer:{ answerKey:'चैट-जीपीटी, सिरि, एलेक्सा, गूगल मानचित्रं, जेमिनि, मेटा-कृतकबुद्धिः, परप्लेक्सिटि च इत्यादयः अध्यापकः कृतकबुद्धेः उदाहरणानि उक्तवान्।', schoolMethod:'चैट-जीपीटी, सिरि, एलेक्सा, गूगल मानचित्रं, जेमिनि, मेटा-कृतकबुद्धिः, परप्लेक्सिटि च इत्यादयः अध्यापकः कृतकबुद्धेः उदाहरणानि उक्तवान् ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'यन्त्राणि कथं शिक्ष्यन्ते?', answer:{ answerKey:'यन्त्राणि दत्तांशमाध्यमेन शिक्षणं करोति।', schoolMethod:'यन्त्राणि दत्तांशमाध्यमेन शिक्षणं करोति ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'‘डेटासेट्’ केषां पाठशाला अस्ति?', answer:{ answerKey:'‘डेटासेट्’ यन्त्राणां पाठशाला अस्ति।', schoolMethod:'‘डेटासेट्’ यन्त्राणां पाठशाला अस्ति ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'कृतकबुद्धिः कुत्र प्रयुज्यते?', answer:{ answerKey:'कृतकबुद्धिः शिक्षाक्षेत्रे, चिकित्साक्षेत्रे, कृषिक्षेत्रे, न्यायालये, सञ्चारे, कलासङ्गीतक्षेत्रे, मनोरञ्जनादिषु क्षेत्रेषु प्रयुज्यते।', schoolMethod:'कृतकबुद्धिः शिक्षाक्षेत्रे, चिकित्साक्षेत्रे, कृषिक्षेत्रे, न्यायालये, सञ्चारे, कलासङ्गीतक्षेत्रे, मनोरञ्जनादिषु क्षेत्रेषु प्रयुज्यते ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'शिक्षायां कृतकबुद्धेः उपयोगः कथं भवति?', answer:{ answerKey:'दीक्षा, स्वयं सर्वेषां कृते कृतकबुद्धिः, पी. एम. ईविद्या, संशयनिवारणार्थं चैट्बौट्, भाषानुवादोपकरणानि च शिक्षाक्षेत्रे शिक्ष्यन्ते।', schoolMethod:'दीक्षा, स्वयं सर्वेषां कृते कृतकबुद्धिः, पी. एम. ईविद्या, संशयनिवारणार्थं चैट्बौट्, भाषानुवादोपकरणानि च शिक्षाक्षेत्रे शिक्ष्यन्ते ।' } },
            { id:'q1g', number:'१ (छ)', isHard:false, text:'यदि अशुद्धदत्तांशः दीयते तर्हि का समस्या भवति?', answer:{ answerKey:'यदि अशुद्धदत्तांशः दीयते तर्हि कृतकबुद्धिः अपि त्रुटिं करोति।', schoolMethod:'यदि अशुद्धदत्तांशः दीयते तर्हि कृतकबुद्धिः अपि त्रुटिं करोति ।' } },
            { id:'q1h', number:'१ (ज)', isHard:false, text:'कृतकबुद्धेः दुरुपयोगेन कीदृशं भयम् अस्ति?', answer:{ answerKey:'कृतकबुद्धेः दुरुपयोगेन महत् भयम् अस्ति। अद्यत्वे अस्य दुरुपयोगेन अनेके साइबर्-अपराधाः समाजेषु भवन्ति।', schoolMethod:'कृतकबुद्धेः दुरुपयोगेन महत् भयम् अस्ति। अद्यत्वे अस्य दुरुपयोगेन अनेके साइबर्-अपराधाः समाजेषु भवन्ति ।' } },
            { id:'q1i', number:'१ (झ)', isHard:false, text:'‘कृतकबुद्धिः मित्रं भवेत्, न भवेत् स्वामी’ इति वाक्यस्य कः अर्थः?', answer:{ answerKey:'अस्य वाक्यस्य अर्थः अस्ति यत् अस्य प्रयोगः विवेकपूर्णं कर्तव्यः। यथा सा मानवहिताय कार्यं करोतु।', schoolMethod:'‘कृतकबुद्धिः मित्रं भवेत्, न भवेत् स्वामी’ अस्य वाक्यस्य अर्थः अस्ति यत् अस्य प्रयोगः विवेकपूर्णं कर्तव्यः। यथा सा मानवहिताय कार्यं करोतु।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'तन्त्रांशानां कार्याणि विचिन्त्य यथोचितं विकल्पं चिनुत — चैट-जीपीटी (Chat-GPT)', answer:{ answerKey:'४. संवादयन्त्रम्', schoolMethod:'चैट-जीपीटी → संवादयन्त्रम्' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'डीप्-फेक् (Deepfake)', answer:{ answerKey:'७. मिथ्याचित्रस्य निर्माणम्', schoolMethod:'डीप्-फेक् → मिथ्याचित्रस्य निर्माणम्' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'शिक्षकः', answer:{ answerKey:'१. नैतिकतायाः शिक्षां करोति', schoolMethod:'शिक्षकः → नैतिकतायाः शिक्षां करोति' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'एलेक्सा (Alexa)', answer:{ answerKey:'६. गीतं गायति, दीपं प्रकाशितं करोति च', schoolMethod:'एलेक्सा → गीतं गायति, दीपं प्रकाशितं करोति च' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'डेटासेट् (Dataset)', answer:{ answerKey:'९. यन्त्रपाठशालायाः नाम', schoolMethod:'डेटासेट् → यन्त्रपाठशालायाः नाम' } },
            { id:'q2f', number:'२ (च)', isHard:false, text:'दीक्षा (DIKSHA)', answer:{ answerKey:'२. ए. आई. आधारित-शिक्षाप्रणाली', schoolMethod:'दीक्षा → ए. आई. आधारित शिक्षाप्रणाली' } },
            { id:'q2g', number:'२ (छ)', isHard:false, text:'अपूर्वानुमेय-नियन्त्रणम् (Predictive Policing)', answer:{ answerKey:'१०. अपराधशमनाय प्रयोगः', schoolMethod:'अपूर्वानुमेय-नियन्त्रणम् → अपराधशमनाय प्रयोगः' } },
            { id:'q2h', number:'२ (ज)', isHard:false, text:'गूगल मानचित्रं (Google Maps)', answer:{ answerKey:'३. पथनिर्देशनं करोति', schoolMethod:'गूगल मानचित्रं → पथनिर्देशनं करोति' } },
            { id:'q2i', number:'२ (झ)', isHard:false, text:'पूर्वग्रहः', answer:{ answerKey:'५. पक्षपातयुक्तं प्रशिक्षणफलम्', schoolMethod:'पूर्वग्रहः → पक्षपातयुक्तं प्रशिक्षणफलम्' } },
            { id:'q2j', number:'२ (ञ)', isHard:false, text:'दॅल्ल्-ई (DALL-E)', answer:{ answerKey:'८. चित्रोत्पादनाय ए.आई. अनुप्रयोगः', schoolMethod:'दॅल्ल्-ई → चित्रोत्पादनाय ए.आई. अनुप्रयोगः' } },
            { id:'q3a', number:'३ (क)', isHard:false, text:'मञ्जूषातः शब्दान् चित्वा रिक्तस्थानानि पूरयत — यन्त्राणां शिक्षणाय ………. नामकः दत्तांशसमूहः उपयुज्यते।', answer:{ answerKey:'डेटासेट्', schoolMethod:'यन्त्राणां शिक्षणाय डेटासेट् नामकः दत्तांशसमूहः उपयुज्यते ।' } },
            { id:'q3b', number:'३ (ख)', isHard:false, text:'चैट-जीपीटी, एलेक्सा, सिरि इत्यादीनि इत्यस्य उदाहरणानि सन्ति।', answer:{ answerKey:'संवादयन्त्रम्', schoolMethod:'चैट-जीपीटी, एलेक्सा, सिरि इत्यादीनि संवादयन्त्रस्य उदाहरणानि सन्ति ।' } },
            { id:'q3c', number:'३ (ग)', isHard:false, text:'यः मनुष्यवत् प्रश्नोत्तरं करोति, सः …….. इति उच्यते।', answer:{ answerKey:'कृतकबुद्धिः', schoolMethod:'यः मनुष्यवत् प्रश्नोत्तरं करोति, सः कृतकबुद्धिः इति उच्यते ।' } },
            { id:'q3d', number:'३ (घ)', isHard:false, text:'यदा पक्षपातयुक्तः दत्तांशः प्रयुज्यते तर्हि कृतकबुद्धिः अपि ……. करोति।', answer:{ answerKey:'पूर्वाग्रहः', schoolMethod:'यदा पक्षपातयुक्तः दत्तांशः प्रयुज्यते तर्हि कृतकबुद्धिः अपि पूर्वाग्रहः करोति ।' } },
            { id:'q3e', number:'३ (ङ)', isHard:false, text:'……. सदैव करुणां विवेकं च शिक्षयन्ति, कृतकबुद्धिः तु तस्य सहायिका अस्ति।', answer:{ answerKey:'शिक्षकाः', schoolMethod:'शिक्षकाः सदैव करुणां विवेकं च शिक्षयन्ति, कृतकबुद्धिः तु तस्य सहायिका अस्ति ।' } },
            { id:'q3f', number:'३ (च)', isHard:false, text:'कृतकबुद्धिः यन्त्राणि अभ्यासेन …….. प्राप्नुवन्ति।', answer:{ answerKey:'प्रशिक्षणम्', schoolMethod:'कृतकबुद्धिः यन्त्राणि अभ्यासेन प्रशिक्षणम् प्राप्नुवन्ति ।' } },
            { id:'q3g', number:'३ (छ)', isHard:false, text:'मिथ्याचित्रं, मिथ्यावाणी च यदि कृतकबुद्ध्या निर्मीयते तर्हि सः दोषः ………. इति कथ्यते।', answer:{ answerKey:'डीप्-फेक्', schoolMethod:'मिथ्याचित्रं, मिथ्यावाणी च यदि कृतकबुद्ध्या निर्मीयते तर्हि सः दोषः डीप्-फेक् इति कथ्यते ।' } },
            { id:'q3h', number:'३ (ज)', isHard:false, text:'ड्रोनस्य माध्यमेन बीज-वपनं, भूमिक्षमतापरीक्षणं च ……… भवति।', answer:{ answerKey:'कृषिक्षेत्रे', schoolMethod:'ड्रोनस्य माध्यमेन बीज-वपनं, भूमिक्षमतापरीक्षणं च कृषिक्षेत्रे भवति ।' } },
            { id:'q3i', number:'३ (झ)', isHard:false, text:'यदा कृतकबुद्धिः विवेकहीनतया उपयुज्यते तर्हि ………. हानिं प्राप्नोति।', answer:{ answerKey:'नैतिकता', schoolMethod:'यदा कृतकबुद्धिः विवेकहीनतया उपयुज्यते तर्हि नैतिकता हानिं प्राप्नोति ।' } },
            { id:'q4', number:'४', isHard:false, text:'पाठे आगतानां शब्दानाम् आधारेण शब्दजालं प्रदत्तम् अस्ति। अत्र वामतः दक्षिणं (यथा—कृतकबुद्धिः) उपरितः अधः (यथा—डेटासेट्) च उदाहरणानुसारं नूतन-पदानां रेखाङ्कनं कुरुत।', answer:{ answerKey:'(i) कृतकबुद्धिः (ii) चर्चा (iii) गूगल (iv) मानचित्रः (v) आचार्यः (vi) गोलदीपम् (vii) यन्त्राधिगमः (viii) एलेक्सा (ix) चैटजीपीटी (x) स्फूर्त (xi) डेटासेट् (xii) चैटबोट् (xiii) फेक् (xiv) सिरि (xv) दीक्षा (xvi) पटल (xvii) दतांशः (xviii) शिक्षा', schoolMethod:'शब्दजाले रेखाङ्कनार्थम् पदानि —\n(i) कृतकबुद्धिः\n(ii) चर्चा\n(iii) गूगल\n(iv) मानचित्रः\n(v) आचार्यः\n(vi) गोलदीपम्\n(vii) यन्त्राधिगमः\n(viii) एलेक्सा\n(ix) चैटजीपीटी\n(x) स्फूर्त\n(xi) डेटासेट्\n(xii) चैटबोट्\n(xiii) फेक्\n(xiv) सिरि\n(xv) दीक्षा\n(xvi) पटल\n(xvii) दत्तांशः\n(xviii) शिक्षा' } },
            { id:'q5a', number:'५ (क)', isHard:false, text:'शुद्धम् (✓) अशुद्धं (✗) वा चिनुत — आर्यः यशिका च विद्यालये कृतकबुद्धेः उपयोगं कुरुत।', answer:{ answerKey:'✗ (अशुद्धम्)', schoolMethod:'✗ अशुद्धम् ।' } },
            { id:'q5b', number:'५ (ख)', isHard:false, text:'कृतकबुद्धिः केवलं विनोदानुकूलम् उपकरणम् अस्ति।', answer:{ answerKey:'✗ (अशुद्धम्)', schoolMethod:'✗ अशुद्धम् ।' } },
            { id:'q5c', number:'५ (ग)', isHard:false, text:'अथर्वः अपि शिक्षायां कृतकबुद्धेः प्रयोगं करोति।', answer:{ answerKey:'✓ (शुद्धम्)', schoolMethod:'✓ शुद्धम् ।' } },
            { id:'q5d', number:'५ (घ)', isHard:false, text:'अक्षतः चैटबोट् इत्यस्य साहाय्येन उपन्यासलेखनं करोति।', answer:{ answerKey:'✗ (अशुद्धम्)', schoolMethod:'✗ अशुद्धम् ।' } },
            { id:'q5e', number:'५ (ङ)', isHard:false, text:'ए.आइ. डीप्-फेक् इत्यपि कश्चन दुरुपयोगः अस्ति।', answer:{ answerKey:'✓ (शुद्धम्)', schoolMethod:'✓ शुद्धम् ।' } },
            { id:'q5f', number:'५ (च)', isHard:false, text:'आर्यः चित्रनिर्माणाय कृतकबुद्धेः साहाय्यं प्राप्नोति।', answer:{ answerKey:'✗ (अशुद्धम्)', schoolMethod:'✗ अशुद्धम् ।' } },
            { id:'q5g', number:'५ (छ)', isHard:false, text:'शिक्षकः गम्भीरतया चैटबोट् वाक्यानां मूल्याङ्कनं करोति।', answer:{ answerKey:'✓ (शुद्धम्)', schoolMethod:'✓ शुद्धम् ।' } },
            { id:'q6', number:'६', isHard:false, text:'चित्रम् आधारीकृत्य संस्कृतभाषायां पञ्चवाक्यानि रचयत (रोबोट्-चित्रम्)।', answer:{ answerKey:'(क) रोबोटः एकं कृत्रिमं यन्त्रम् अस्ति।\n(ख) अयं मानवस्य सहायकरूपेण कार्यं करोति।\n(ग) रोबोटः संगणकस्य आदेशान् कार्याणि करोति।\n(घ) उद्योगेषु अस्य प्रयोगाः बहुधा भवन्ति।\n(ङ) अद्यत्वे अस्य महत्त्वं वर्धते।', schoolMethod:'(क) रोबोटः एकं कृत्रिमं यन्त्रम् अस्ति।\n(ख) अयं मानवस्य सहायकरूपेण कार्यं करोति।\n(ग) रोबोटः संगणकस्य आदेशान् कार्याणि करोति।\n(घ) उद्योगेषु अस्य प्रयोगाः बहुधा भवन्ति।\n(ङ) अद्यत्वे अस्य महत्त्वं वर्धते।' } },
            { id:'q7', number:'७', isHard:false, text:'वाक्येषु कर्तृपदं क्रियापदं च चिनुत।', answer:{ answerKey:'कर्तृपदम् — क्रियापदम्\n(क) आर्यः — आसीत्\n(ख) यशिका — वर्णयति\n(ग) शिक्षकः — सूचयति\n(घ) अथर्वः — दत्तवान्\n(ङ) वेदः — विवेचयति', schoolMethod:'(क) आर्यः — आसीत्\n(ख) यशिका — वर्णयति\n(ग) शिक्षकः — सूचयति\n(घ) अथर्वः — दत्तवान्\n(ङ) वेदः — विवेचयति' } },
            { id:'q8', number:'८', isHard:false, text:'वाक्येषु विशेषणं विशेष्यं च चिनुत।', answer:{ answerKey:'विशेषणम् — विशेष्यम्\n(क) अतिसक्रियम् — संगणकयन्त्रम्\n(ख) गम्भीरम् — गवेषणम्\n(ग) सुबोधा — प्रस्तुतिः\n(घ) सुस्पष्टः — सन्देशः\n(ङ) आधुनिकः — दृष्टिकोणः', schoolMethod:'(क) अतिसक्रियम् — संगणकयन्त्रम्\n(ख) गम्भीरम् — गवेषणम्\n(ग) सुबोधा — प्रस्तुतिः\n(घ) सुस्पष्टः — सन्देशः\n(ङ) आधुनिकः — दृष्टिकोणः' } },
          ]
        },
        {
          id: 's2', title: 'पठितावबोधनम्',
          questions: [
            { id:'q1', number:'१', isHard:false, text:'गद्यांशं पठित्वा प्रश्नान् उत्तरत (यन्त्रपाठशाला-डेटासेट्-विषये गद्यांशः)।\nI. एकपदेन उत्तरत:\n१. यन्त्रपाठशालायाः नाम किम् अस्ति?\n२. कृतकबुद्धिः यन्त्रं कथं शिक्षणं करोति?\n३. यदि अशुद्धदत्तांशः दीयते तर्हि कृतकबुद्धिः किं करोति?\nII. पूर्णवाक्येन उत्तरत:\n१. कृतकबुद्धिः केषु स्थलेषु उपयुज्यते?\n२. कीदृशः दोषः ‘पूर्वग्रहः’ कथ्यते?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘तव प्रश्नः …..।’ अत्र ‘तव’ इति सर्वनामपदं कस्यै प्रयुक्तम्? (क) श्रेयायै (ख) अध्यापकाय (ग) श्रेया (घ) यशिकायै\n(ii) ‘भूरिशः’ इत्यस्य पदस्य कः अर्थः? (क) प्रचुरः (ख) सह (ग) एषा (घ) सञ्चारे\n(iii) ‘कृतकबुद्धिः अपि त्रुटिं करोति’ अत्र कर्तृपदं किम्? (क) अपि (ख) त्रुटिं (ग) कृतकबुद्धिः (घ) करोति', answer:{ answerKey:'I. १. डेटासेट् २. दत्तांशमाध्यमेन ३. त्रुटिं\nII. १. कृतकबुद्धिः शिक्षायां चिकित्सालयेषु, कृषिक्षेत्रे, न्यायालये, सञ्चारे, वित्ते, कलासंगीतक्षेत्रे मनोरञ्जनादिषु क्षेत्रेषु उपयुज्यते। २. यदि प्रशिक्षणदत्तांशः पक्षपातयुक्तः भवति, तदा निष्कर्षाः अपि पक्षपातयुक्ताः भवन्ति। एषः दोषः पूर्वग्रहः कथ्यते।\nIII. (i) (क) श्रेयायै (ii) (क) प्रचुरः (iii) (ग) कृतकबुद्धिः', schoolMethod:'I. १. डेटासेट् २. दत्तांशमाध्यमेन ३. त्रुटिं\nII. १. कृतकबुद्धिः शिक्षायां चिकित्सालयेषु, कृषिक्षेत्रे, न्यायालये, सञ्चारे, वित्ते, कलासंगीतक्षेत्रे मनोरञ्जनादिषु क्षेत्रेषु उपयुज्यते। २. यदि प्रशिक्षणदत्तांशः पक्षपातयुक्तः भवति, तदा निष्कर्षाः अपि पक्षपातयुक्ताः भवन्ति। एषः दोषः पूर्वग्रहः कथ्यते।\nIII. (i) (क) श्रेयायै (ii) (क) प्रचुरः (iii) (ग) कृतकबुद्धिः' } },
            { id:'q2', number:'२', isHard:false, text:'संवादांशं पठित्वा प्रश्नान् उत्तरत (कृतकबुद्ध्याः उपकरणैः स्वाध्ययनम्)।\nI. एकपदेन उत्तरत:\n१. केषां साहाय्येन छात्राः शिक्षकाणाम् अनुपस्थितौ अपि स्वयम् अध्येतुं शक्नुवन्ति?\n२. मानवशिक्षकः किं प्रयोजनरहितं भविष्यति इति कः कं प्रति पृच्छति?\n३. चैट्बोट् किमर्थं प्रयुज्यते?\nII. पूर्णवाक्येन उत्तरत:\n१. ए.आई. आधारित शिक्षाप्रणाली काः सन्ति?\n२. कृतकबुद्ध्याधारितानि उपकरणानि के सन्ति?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘मानवशिक्षकः किं ……..? अस्मिन् वाक्ये कर्तृपदं किम्? (क) प्रयोजनरहितः (ख) एतेषां (ग) कारणेन (घ) मानवशिक्षकः\n(ii) ‘अध्ययनं कर्तुम्’ इति अर्थे किं समानार्थकं पदं प्रयुक्तम्? (क) अध्येतुम् (ख) साहाय्येन (ग) उपकरणानि (घ) शक्नुवन्ति\n(iii) ‘संशयः’ इति पदस्य विलोमपदं किम्? (क) सन्देहः (ख) निश्चयः (ग) शंका (घ) समाधान', answer:{ answerKey:'I. १. कृतकबुद्ध्याः उपकरणाणाम् २. आकाशः अध्यापकं प्रति ३. संशयनिराकरणार्थम्\nII. १. दीक्षा, स्वयं, पी. एम्. ईविद्या इत्यादयः ए.आई. आधारित शिक्षाप्रणालीः सन्ति। २. चैट्बोट्, भाषानुवादोपकरणानि च कृतकबुद्ध्याधारितानि उपकरणानि सन्ति।\nIII. (i) (घ) मानवशिक्षकः (ii) (क) अध्येतुम् (iii) (ख) निश्चयः', schoolMethod:'I. १. कृतकबुद्ध्याः उपकरणाणाम् २. आकाशः अध्यापकं प्रति ३. संशयनिराकरणार्थम्\nII. १. दीक्षा, स्वयं, पी. एम्. ईविद्या इत्यादयः ए.आई. आधारित शिक्षाप्रणालीः सन्ति। २. चैट्बोट्, भाषानुवादोपकरणानि च कृतकबुद्ध्याधारितानि उपकरणानि सन्ति।\nIII. (i) (घ) मानवशिक्षकः (ii) (क) अध्येतुम् (iii) (ख) निश्चयः' } },
            { id:'q3', number:'३', isHard:false, text:'संवादांशं पठित्वा प्रश्नान् उत्तरत (शिक्षक-कृतकबुद्धि-सम्बन्धः चिकित्साप्रयोगश्च)।\nI. एकपदेन उत्तरत:\n१. छात्रेषु व्यक्तित्वविकासः कथं भवति?\n२. छात्रेषु शिक्षकाः मानवीयमूल्यबोधं केन जनयन्ति?\n३. कृतकबुद्धिः मनुष्यस्य सहायिका अस्ति प्रतिस्पर्धिनी वा?\nII. पूर्णवाक्येन उत्तरत:\n१. कृतकबुद्धिः चिकित्सायां कथं प्रयुज्यते?\n२. शिक्षकाः छात्रान् किं शिक्षयन्ति?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘आगच्छति’ इति क्रियापदस्य कर्तृपदं किम्? (क) प्रेरणा (ख) मानव (ग) मानवेभ्यः (घ) कृतकबुद्धिः\n(ii) ‘प्रगाढ़’ इति पदस्य कः अर्थः? (क) दृढ़ (ख) चलं (ग) विचलं (घ) संशयं\n(iii) ‘विरोधिनी’ इति पदस्य विपरीतार्थकं पदं किम्? (क) सहायिका (ख) प्रतिस्पर्धिनी (ग) उपकरणानि (घ) सान्निध्ये', answer:{ answerKey:'I. १. शिक्षकाणां सान्निध्ये २. पुस्तकीयविज्ञानेन ३. सहायिका\nII. १. रोबोटिक्-सर्जरी, रोग-पूर्वज्ञानं, रश्मिपरीक्षणविद्या, चैट-कृतकबुद्धिः, औषधशुश्रूषा इत्यादीनि चिकित्सोपकरणानि चिकित्सायां प्रयुज्यन्ते। २. शिक्षकाः छात्रान् अनुशासनं, परोपकारं, करुणां व्यवहारज्ञानं च शिक्षयन्ति।\nIII. (i) (क) प्रेरणा (ii) (क) दृढ़ (iii) (क) सहायिका', schoolMethod:'I. १. शिक्षकाणां सान्निध्ये २. पुस्तकीयविज्ञानेन ३. सहायिका\nII. १. रोबोटिक्-सर्जरी, रोग-पूर्वज्ञानं, रश्मिपरीक्षणविद्या, चैट-कृतकबुद्धिः, औषधशुश्रूषा इत्यादीनि चिकित्सोपकरणानि चिकित्सायां प्रयुज्यन्ते। २. शिक्षकाः छात्रान् अनुशासनं, परोपकारं, करुणां व्यवहारज्ञानं च शिक्षयन्ति।\nIII. (i) (क) प्रेरणा (ii) (क) दृढ़ (iii) (क) सहायिका' } },
            { id:'q4', number:'४', isHard:false, text:'संवादांशं पठित्वा प्रश्नान् उत्तरत (कृषि-अपराधशमन-विषये)।\nI. एकपदेन उत्तरत:\n१. बीज-वपनं कथं भवति?\n२. कः चैट-जीपीटी इत्यस्मात् श्लोकं प्राप्तवान्?\n३. ‘कृतकबुद्धिः काव्यमपि रचयितुं समर्था?’ इति का पृच्छति?\nII. पूर्णवाक्येन उत्तरत:\n१. कृतकबुद्धिः कृषिक्षेत्रे कथं प्रयुज्यते?\n२. अपराधशमनाय कृतकबुद्धिः कथं साहाय्यं करोति?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘करोति’ इति क्रियापदस्य कर्तृपदं किम्? (क) गुरुदेव! (ख) कृतकबुद्धिः (ग) साहाय्यं (घ) अपराध\n(ii) ‘शमनाय’ इति पदस्य पर्यायपदं किम्? (क) निवारणाय (ख) शान्तं (ग) सहाय (घ) समर्थ\n(iii) ‘प्रयोगः’ इति पदस्य विलोमपदं किम्? (क) अनुप्रयोगः (ख) योगः (ग) युक्तः (घ) प्रयुक्तः', answer:{ answerKey:'I. १. ड्रोनमाध्यमेन २. वेदः ३. यशिका\nII. १. कृषिक्षेत्रे ड्रोनमाध्यमेन बीज-वपनं, कीटनिरीक्षणं, भूमिक्षमता-च इत्यादीनां परीक्षणम् अपि यन्त्रैः भवन्ति। २. मुखपरिचयप्रणाली, पूर्वानुमेय-नियन्त्रणं च इत्यादि-योजनासु कृतकबुद्धेः प्रयोगः अपराधशमनाय साहाय्यं करोति।\nIII. (i) (ख) कृतकबुद्धिः (ii) (क) निवारणाय (iii) (क) अनुप्रयोगः', schoolMethod:'I. १. ड्रोनमाध्यमेन २. वेदः ३. यशिका\nII. १. कृषिक्षेत्रे ड्रोनमाध्यमेन बीज-वपनं, कीटनिरीक्षणं, भूमिक्षमता-च इत्यादीनां परीक्षणम् अपि यन्त्रैः भवन्ति। २. मुखपरिचयप्रणाली, पूर्वानुमेय-नियन्त्रणं च इत्यादि-योजनासु कृतकबुद्धेः प्रयोगः अपराधशमनाय साहाय्यं करोति।\nIII. (i) (ख) कृतकबुद्धिः (ii) (क) निवारणाय (iii) (क) अनुप्रयोगः' } },
            { id:'q5', number:'५', isHard:false, text:'संवादांशं पठित्वा प्रश्नान् उत्तरत (डीप्-फेक् अपराधनिराकरणं च)।\nI. एकपदेन उत्तरत:\n१. ‘कृतकबुद्धिः मित्रं भवेत्, न भवेत् स्वामी’ इति वाक्यं कस्य मनः स्पृशति?\n२. ‘डीप्-फेक्’ कस्य निर्माणं करोति?\n३. केषां निराकरणार्थम् उपायाः अस्माभिः करणीयाः?\nII. पूर्णवाक्येन उत्तरत:\n१. डीप्-फेक् इति किम् अस्ति?\n२. अपराधस्य निराकरणार्थं के उपायाः अस्माभिः करणीयाः?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘उपायाः’ इति पदस्य विशेषणपदं किम्? (क) नियन्त्रणं (ख) अस्माभिः (ग) करणीयाः (घ) विविधाः\n(ii) ‘स्पृशति’ इति क्रियापदस्य कर्तृपदं किम्? (क) वाक्यं (ख) मम (ग) इति (घ) मनः\n(iii) ‘मम’ इति सर्वनामपदं कस्मै प्रयुक्तम्? (क) वेदाय (ख) भास्कराय (ग) अध्यापकाय (घ) भास्करः', answer:{ answerKey:'I. १. भास्करस्य २. मिथ्याचित्रस्य ३. अपराधानाम्\nII. १. डीप्-फेक् कृतकबुद्ध्या निर्मितं मिथ्याचित्रं, दृश्यं, ध्वनिः वा अस्ति। २. अपराधस्य निराकरणार्थं कृतकबुद्धि-साक्षरता, नैतिकतापूरितं प्रशिक्षणं, सर्वकारेण नियन्त्रणम्, आत्मनियन्त्रणं च इति विविधाः उपायाः अस्माभिः करणीयाः।\nIII. (i) (घ) विविधाः (ii) (क) वाक्यं (iii) (ख) भास्कराय', schoolMethod:'I. १. भास्करस्य २. मिथ्याचित्रस्य ३. अपराधानाम्\nII. १. डीप्-फेक् कृतकबुद्ध्या निर्मितं मिथ्याचित्रं, दृश्यं, ध्वनिः वा अस्ति। २. अपराधस्य निराकरणार्थं कृतकबुद्धि-साक्षरता, नैतिकतापूरितं प्रशिक्षणं, सर्वकारेण नियन्त्रणम्, आत्मनियन्त्रणं च इति विविधाः उपायाः अस्माभिः करणीयाः।\nIII. (i) (घ) विविधाः (ii) (क) वाक्यं (iii) (ख) भास्कराय' } },
            { id:'q6a', number:'६ (क)', isHard:false, text:'स्थूलाक्षरपदानि आश्रित्य प्रश्ननिर्माणं कुरुत — कृतकबुद्धिः मानवबुद्धेः सहकरी अस्ति।', answer:{ answerKey:'कृतकबुद्धिः कस्याः सहकरी अस्ति?', schoolMethod:'कृतकबुद्धिः कस्याः सहकरी अस्ति? (स्थूलपदं — मानवबुद्धेः)' } },
            { id:'q6b', number:'६ (ख)', isHard:false, text:'वयं जागरूकाः नागरिकाः भवाम।', answer:{ answerKey:'वयं कीदृशाः नागरिकाः भवाम?', schoolMethod:'वयं कीदृशाः नागरिकाः भवाम? (स्थूलपदं — जागरूकाः)' } },
            { id:'q6c', number:'६ (ग)', isHard:false, text:'कृतकबुद्धिः मित्रं भवेत्।', answer:{ answerKey:'का मित्रं भवेत्?', schoolMethod:'का मित्रं भवेत्? (स्थूलपदं — कृतकबुद्धिः)' } },
            { id:'q6d', number:'६ (घ)', isHard:false, text:'समाजे विविधाः साइबर्-अपराधाः भवन्ति।', answer:{ answerKey:'कुत्र विविधाः साइबर्-अपराधाः भवन्ति?', schoolMethod:'कुत्र विविधाः साइबर्-अपराधाः भवन्ति? (स्थूलपदं — समाजे)' } },
            { id:'q6e', number:'६ (ङ)', isHard:false, text:'भयस्य कारणं यथार्थम् अस्ति।', answer:{ answerKey:'कस्य कारणं यथार्थम् अस्ति?', schoolMethod:'कस्य कारणं यथार्थम् अस्ति? (स्थूलपदं — भयस्य)' } },
            { id:'q6f', number:'६ (च)', isHard:false, text:'कृतकबुद्धिः सहायिका अस्ति।', answer:{ answerKey:'कृतकबुद्धिः कीदृशी अस्ति?', schoolMethod:'कृतकबुद्धिः कीदृशी अस्ति? (स्थूलपदं — सहायिका)' } },
            { id:'q6g', number:'६ (छ)', isHard:false, text:'चिकित्सायाः क्षेत्रे कृतकबुद्धिः प्रयुज्यते।', answer:{ answerKey:'कस्याः क्षेत्रे कृतकबुद्धिः प्रयुज्यते?', schoolMethod:'कस्याः क्षेत्रे कृतकबुद्धिः प्रयुज्यते? (स्थूलपदं — चिकित्सायाः)' } },
            { id:'q6h', number:'६ (ज)', isHard:false, text:'यन्त्राणि मानववत् चिन्तयन्ति।', answer:{ answerKey:'यन्त्राणि कथं चिन्तयन्ति?', schoolMethod:'यन्त्राणि कथं चिन्तयन्ति? (स्थूलपदं — मानववत्)' } },
            { id:'q6i', number:'६ (झ)', isHard:false, text:'कृतकबुद्धिः दत्तांशमाध्यमेन शिक्षणं करोति।', answer:{ answerKey:'कृतकबुद्धिः केन शिक्षणं करोति?', schoolMethod:'कृतकबुद्धिः केन शिक्षणं करोति? (स्थूलपदं — दत्तांशमाध्यमेन)' } },
            { id:'q6j', number:'६ (ञ)', isHard:false, text:'प्रेरणा तु मानवेभ्यः आगच्छति।', answer:{ answerKey:'प्रेरणा तु केभ्यः आगच्छति?', schoolMethod:'प्रेरणा तु केभ्यः आगच्छति? (स्थूलपदं — मानवेभ्यः)' } },
            { id:'q7', number:'७', isHard:false, text:'पर्यायवाचि-पदानां मेलनं कुरुत।', answer:{ answerKey:'(क) वाञ्छामः — इच्छामः\n(ख) सहकरी — सहयोगिनी\n(ग) तन्त्रांशः — संगणक-तन्त्रः\n(घ) अर्हन्ति — शक्नुवन्ति\n(ङ) दत्तांशः — पूर्वदत्तं ज्ञानम्/डेटा\n(च) प्रतिस्पर्धिनी — प्रतियोगी\n(छ) शमनाय — निवारणाय\n(ज) अध्येतुम् — अध्ययनं कर्तुम्\n(झ) द्रुतगत्या — तीव्रतया\n(ञ) चिन्तनीयः — विचारणीयः', schoolMethod:'पर्यायमेलनम् —\n(क) वाञ्छामः — इच्छामः\n(ख) सहकरी — सहयोगिनी\n(ग) तन्त्रांशः — संगणक-तन्त्रः\n(घ) अर्हन्ति — शक्नुवन्ति\n(ङ) दत्तांशः — पूर्वदत्तं ज्ञानम् / डेटा\n(च) प्रतिस्पर्धिनी — प्रतियोगी\n(छ) शमनाय — निवारणाय\n(ज) अध्येतुम् — अध्ययनं कर्तुम्\n(झ) द्रुतगत्या — तीव्रतया\n(ञ) चिन्तनीयः — विचारणीयः' } },
            { id:'q8', number:'८', isHard:false, text:'पदानां विपरीतार्थक-पदानाम् उचितं मेलनं कुरुत।', answer:{ answerKey:'(क) सामर्थ्य — अक्षम्य\n(ख) चर्चित — अप्रचलितम्\n(ग) युक्तम् — अयुक्तम्\n(घ) उपयोगं — दुरुपयोगं\n(ङ) करुणा — निष्ठुरता\n(च) समृद्धं — विपन्नं', schoolMethod:'विलोममेलनम् —\n(क) सामर्थ्य — अक्षम्य\n(ख) चर्चित — अप्रचलितम्\n(ग) युक्तम् — अयुक्तम्\n(घ) उपयोगं — दुरुपयोगं\n(ङ) करुणा — निष्ठुरता\n(च) समृद्धं — विपन्नं' } },
            { id:'q9a', number:'९ (क)', isHard:false, text:'विग्रहं कृत्वा लिखत — मानवबुद्धिः', answer:{ answerKey:'मानवस्य बुद्धिः', schoolMethod:'मानवबुद्धिः = मानवस्य बुद्धिः' } },
            { id:'q9b', number:'९ (ख)', isHard:false, text:'सोत्साहम्', answer:{ answerKey:'उत्साहेन सह', schoolMethod:'सोत्साहम् = उत्साहेन सह' } },
            { id:'q9c', number:'९ (ग)', isHard:false, text:'मानुषजीवनम्', answer:{ answerKey:'मानुषस्य जीवनम्', schoolMethod:'मानुषजीवनम् = मानुषस्य जीवनम्' } },
            { id:'q9d', number:'९ (घ)', isHard:false, text:'यन्त्रपाठशाला', answer:{ answerKey:'यन्त्राणां पाठशाला', schoolMethod:'यन्त्रपाठशाला = यन्त्राणां पाठशाला' } },
            { id:'q9e', number:'९ (ङ)', isHard:false, text:'प्रमुखप्रकाराः', answer:{ answerKey:'प्रमुखाः प्रकाराः', schoolMethod:'प्रमुखप्रकाराः = प्रमुखाः प्रकाराः' } },
            { id:'q9f', number:'९ (च)', isHard:false, text:'अपराधशमनाय', answer:{ answerKey:'अपराधानां शमनाय', schoolMethod:'अपराधशमनाय = अपराधानां शमनाय' } },
            { id:'q9g', number:'९ (छ)', isHard:false, text:'भूमिक्षमता', answer:{ answerKey:'भूमेः क्षमता', schoolMethod:'भूमिक्षमता = भूमेः क्षमता' } },
            { id:'q9h', number:'९ (ज)', isHard:false, text:'कीटनिरीक्षणम्', answer:{ answerKey:'कीटानां निरीक्षणम्', schoolMethod:'कीटनिरीक्षणम् = कीटानां निरीक्षणम्' } },
          ]
        },
      ] },
      { id:'ch06', number:6,  title:'मनःपूतं समाचरेत्',                                  slug:'manahputam-samacharet',                    code:'0904sk06', exercises:[
        {
          id: 's1', title: 'अभ्यासाद् जायते सिद्धिः',
          questions: [
            { id:'q1a', number:'१ (क)', isHard:false, text:'अधः प्रदत्तानां प्रश्नानां पूर्णवाक्येन उत्तरं लिखत — लोकः कस्य आचरणम् अनुकरोति ?', answer:{ answerKey:'लोकः श्रेष्ठजनस्य आचरणम् अनुकरोति ।', schoolMethod:'लोकः श्रेष्ठजनस्य आचरणम् अनुकरोति ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'कीदृशी वाणी वक्तव्या ?', answer:{ answerKey:'सत्यपूतां वाणी वक्तव्या ।', schoolMethod:'सत्यपूतां वाणी वक्तव्या ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'लक्ष्मीः कम् उपैति ?', answer:{ answerKey:'लक्ष्मीः उद्योगिनं पुरुषसिंहम् उपैति ।', schoolMethod:'लक्ष्मीः उद्योगिनं पुरुषसिंहम् उपैति ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'उत्तमजनाः कार्यं प्रारभ्य किं न कुर्वन्ति ?', answer:{ answerKey:'उत्तमजनाः पुनः पुनः विघ्नैः प्रतिहन्यमानाः अपि कार्यं प्रारभ्य न परित्यजन्ति ।', schoolMethod:'उत्तमजनाः पुनः पुनः विघ्नैः प्रतिहन्यमानाः अपि कार्यं प्रारभ्य न परित्यजन्ति ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'धर्मस्य लक्षणानि कानि ?', answer:{ answerKey:'धृतिः क्षमा दमः अस्तेयं शौचम् इन्द्रियनिग्रहः धीः विद्या सत्यम् अक्रोधः एतत् दशकम् धर्मलक्षणम् ।', schoolMethod:'धृतिः क्षमा दमः अस्तेयं शौचम् इन्द्रियनिग्रहः धीः विद्या सत्यम् अक्रोधः एतत् दशकम् धर्मलक्षणम् ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'सकलाः कलाः कस्मात् सिध्यन्ति ?', answer:{ answerKey:'सकलाः कलाः अभ्यासात् सिध्यन्ति ।', schoolMethod:'सकलाः कलाः अभ्यासात् सिध्यन्ति ।' } },
            { id:'q1g', number:'१ (छ)', isHard:false, text:'सम्पदः कं वृणते ?', answer:{ answerKey:'सम्पदः विमृश्यकारिणं वृणते ।', schoolMethod:'सम्पदः विमृश्यकारिणं वृणते ।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'अधोलिखितेषु श्लोकांशेषु रिक्तस्थानानि पूरयत — ………. परमापदां पदम्।', answer:{ answerKey:'अविवेकः', schoolMethod:'अविवेकः' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'सन्तः ……….. अन्यतरद् भजन्ते।', answer:{ answerKey:'परीक्ष्य', schoolMethod:'परीक्ष्य' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'दैवं निहत्य कुरु ………….. आत्मशक्त्या ।', answer:{ answerKey:'पौरुषम्', schoolMethod:'पौरुषम्' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'स यत् ………….. कुरुते ।', answer:{ answerKey:'प्रमाणं', schoolMethod:'प्रमाणं' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'धीर्विद्या सत्यमक्रोधो ……………… धर्मलक्षणम्।', answer:{ answerKey:'दशकम्', schoolMethod:'दशकम्' } },
            { id:'q3a', number:'३ (क)', isHard:false, text:'रेखाङ्कितानि पदानि आधृत्य प्रश्ननिर्माणं कुरुत — नीचैः विघ्नभयेन कार्यं न प्रारभ्यते ।', answer:{ answerKey:'कैः विघ्नभयेन कार्यं न प्रारभ्यते ?', schoolMethod:'कैः विघ्नभयेन कार्यं न प्रारभ्यते ?' } },
            { id:'q3b', number:'३ (ख)', isHard:false, text:'सकलाः कलाः अभ्यासात् सिध्यन्ति ।', answer:{ answerKey:'सकलाः कलाः कथम् / कस्मात् सिध्यन्ति ?', schoolMethod:'सकलाः कलाः कथम् / कस्मात् सिध्यन्ति ?' } },
            { id:'q3c', number:'३ (ग)', isHard:false, text:'वस्त्रपूतं जलं पिबेत् ।', answer:{ answerKey:'कीदृशं जलं पिबेत् ?', schoolMethod:'कीदृशं जलं पिबेत् ?' } },
            { id:'q3d', number:'३ (घ)', isHard:false, text:'लक्ष्मीः पुरुषसिंहम् उपैति।', answer:{ answerKey:'लक्ष्मीः कम् उपैति ?', schoolMethod:'लक्ष्मीः कम् उपैति ?' } },
            { id:'q3e', number:'३ (ङ)', isHard:false, text:'सन्तः परीक्ष्य अन्यतरद् भजन्ते ।', answer:{ answerKey:'के परीक्ष्य अन्यतरद् भजन्ते ?', schoolMethod:'के परीक्ष्य अन्यतरद् भजन्ते ?' } },
            { id:'q3f', number:'३ (च)', isHard:false, text:'क्रियां सहसा न विदधीत ।', answer:{ answerKey:'कां सहसा न विदधीत ?', schoolMethod:'कां सहसा न विदधीत ?' } },
            { id:'q4a', number:'४ (क)', isHard:false, text:'अधोलिखितं श्लोकं पठित्वा प्रश्नानाम् उत्तराणि लिखत (दृष्टिपूतं न्यसेत् पादं…) — अस्मिन् श्लोके प्रथमं क्रियापदं किम् ?', answer:{ answerKey:'न्यसेत्', schoolMethod:'न्यसेत्' } },
            { id:'q4b', number:'४ (ख)', isHard:false, text:'कं न्यसेत् ?', answer:{ answerKey:'पादम्', schoolMethod:'पादम्' } },
            { id:'q4c', number:'४ (ग)', isHard:false, text:'कीदृशं पादं न्यसेत् ?', answer:{ answerKey:'दृष्टिपूतम्', schoolMethod:'दृष्टिपूतम्' } },
            { id:'q4d', number:'४ (घ)', isHard:false, text:'द्वितीयं किं क्रियापदम् अस्ति ?', answer:{ answerKey:'पिबेत्', schoolMethod:'पिबेत्' } },
            { id:'q4e', number:'४ (ङ)', isHard:false, text:'किं पिबेत् ?', answer:{ answerKey:'जलम्', schoolMethod:'जलम्' } },
            { id:'q4f', number:'४ (च)', isHard:false, text:'कीदृशं जलं पिबेत् ?', answer:{ answerKey:'वस्त्रपूतम्', schoolMethod:'वस्त्रपूतम्' } },
            { id:'q4g', number:'४ (छ)', isHard:false, text:'तृतीयं किं क्रियापदम् अस्ति ?', answer:{ answerKey:'वदेत्', schoolMethod:'वदेत्' } },
            { id:'q4h', number:'४ (ज)', isHard:false, text:'कां वदेत् ?', answer:{ answerKey:'वाचम्', schoolMethod:'वाचम्' } },
            { id:'q4i', number:'४ (झ)', isHard:false, text:'कीदृशीं वाणीं वदेत् ?', answer:{ answerKey:'सत्यपूताम्', schoolMethod:'सत्यपूताम्' } },
            { id:'q4j', number:'४ (ञ)', isHard:false, text:'चतुर्थं किं क्रियापदम् अस्ति ?', answer:{ answerKey:'समाचरेत्', schoolMethod:'समाचरेत्' } },
            { id:'q4k', number:'४ (ट)', isHard:false, text:'श्लोके आगतं न्यास्यम् — मनः पूतम् ।', answer:{ answerKey:'मनःपूतम्', schoolMethod:'मनःपूतम्' } },
            { id:'q5a', number:'५ (क)', isHard:false, text:'मञ्जूषातः पदानि चित्वा भावार्थेषु रिक्तस्थानानि पूरयत — लक्ष्मीः प्रयत्नशीलस्य पराक्रमिणः ………. समीपं स्वयम् आगच्छति। कापुरुषाः तु ‘विधिः एव बलीयान्’ इति वदन्ति । ये पौरुषेण परिस्थितिम् अतिक्रम्य कार्याणि साधयन्ति ते एव ……….. प्रयत्नं कृत्वा अपि यदि …………. न प्राप्तं तर्हि तत्र दोषः नास्ति खलु।', answer:{ answerKey:'पुरुषस्य, धीराः, लक्ष्यं', schoolMethod:'(क) पुरुषस्य, धीराः, लक्ष्यं' } },
            { id:'q5b', number:'५ (ख)', isHard:false, text:'पुरातनम् अस्ति इति कारणेन किमपि वस्तु तत्त्वं व्यक्तित्वं वा समीचीनं भवेदेव इति नियमः नास्ति । तथैव ………… अस्ति इति कारणेन दोषरहितं भवेत् इत्यपि नियमः नास्ति । येषां …………… पक्वा अस्ति ते परीक्षण-निरीक्षणानन्तरम् एव उत्तमं स्वीकुर्वन्ति । किन्तु अज्ञानाः अन्येषाम् …….. श्रुत्वा तदनुसारेण प्रवर्तन्ते ।', answer:{ answerKey:'नूतनम्, बुद्धिः, अभिप्राय', schoolMethod:'(ख) नूतनम्, बुद्धिः, अभिप्राय' } },
            { id:'q6a', number:'६ (क)', isHard:false, text:'श्लोकानाम् अन्वयेषु रिक्तस्थानानि पूरयत — सर्वा: ……….. अभ्यासेन (सिध्यन्ति) । …………. कलाः अभ्यासात् (सिध्यन्ति) । ध्यानमौनादि (अपि) ………….. (सिध्यति) । अभ्यासस्य ………. किम् (अस्ति) ?', answer:{ answerKey:'क्रियाः सकलाः, अभ्यासात्, दुष्करम्', schoolMethod:'(क) क्रियाः सकलाः, अभ्यासात्, दुष्करम्' } },
            { id:'q6b', number:'६ (ख)', isHard:false, text:'श्रेष्ठः यत् यत् ………… इतरः जनः तत् तत् एव (आचरति) । सः यत् ……….. कुरुते, लोकः तत् ………..।', answer:{ answerKey:'आचरति, प्रमाणं, अनुवर्तते', schoolMethod:'(ख) आचरति, प्रमाणं, अनुवर्तते' } },
            { id:'q7a', number:'७ (क)', isHard:false, text:'यथोचितं मेलनं कुरुत — पुराणमित्येव न साधु सर्वम्', answer:{ answerKey:'मालविकाग्निमित्रम्', schoolMethod:'पुराणमित्येव न साधु सर्वम् → मालविकाग्निमित्रम्' } },
            { id:'q7b', number:'७ (ख)', isHard:false, text:'प्रारभ्य चोत्तमजनाः न परित्यजन्ति', answer:{ answerKey:'नीतिशतकम्', schoolMethod:'प्रारभ्य चोत्तमजनाः न परित्यजन्ति → नीतिशतकम्' } },
            { id:'q7c', number:'७ (ग)', isHard:false, text:'यद्यदाचरति श्रेष्ठः', answer:{ answerKey:'श्रीमद्भगवद्गीता', schoolMethod:'यद्यदाचरति श्रेष्ठः → श्रीमद्भगवद्गीता' } },
            { id:'q7d', number:'७ (घ)', isHard:false, text:'धृतिः क्षमा दमोऽस्तेयम्', answer:{ answerKey:'मनुस्मृतिः', schoolMethod:'धृतिः क्षमा दमोऽस्तेयम् → मनुस्मृतिः' } },
            { id:'q7e', number:'७ (ङ)', isHard:false, text:'उद्योगिनं पुरुषसिंहम् उपैति लक्ष्मीः', answer:{ answerKey:'पञ्चतन्त्रम्', schoolMethod:'उद्योगिनं पुरुषसिंहम् उपैति लक्ष्मीः → पञ्चतन्त्रम्' } },
            { id:'q8a', number:'८ (क)', isHard:false, text:'रेखाङ्कितेषु पदेषु सन्धिविच्छेदं कुरुत — धृतिः क्षमा दमोऽस्तेयम्।', answer:{ answerKey:'दमः + अस्तेयम्', schoolMethod:'दमः + अस्तेयम्' } },
            { id:'q8b', number:'८ (ख)', isHard:false, text:'पुराणमित्येव न साधु सर्वम् ।', answer:{ answerKey:'पुराणम् + इति + एव', schoolMethod:'पुराणम् + इति + एव' } },
            { id:'q8c', number:'८ (ग)', isHard:false, text:'विघ्नैः पुनरपि प्रतिहन्यमानाः ।', answer:{ answerKey:'पुनः + अपि', schoolMethod:'पुनः + अपि' } },
            { id:'q8d', number:'८ (घ)', isHard:false, text:'प्रारभ्य चोत्तमजनाः न परित्यजन्ति।', answer:{ answerKey:'च + उत्तमजनाः', schoolMethod:'च + उत्तमजनाः' } },
            { id:'q8e', number:'८ (ङ)', isHard:false, text:'विघ्नविहता विरमन्ति मध्याः ।', answer:{ answerKey:'विघ्न + विहता', schoolMethod:'विघ्न + विहता' } },
            { id:'q8f', number:'८ (च)', isHard:false, text:'लोकस्तदनुवर्तते।', answer:{ answerKey:'लोकः + तत् + अनुवर्तते', schoolMethod:'लोकः + तत् + अनुवर्तते' } },
            { id:'q8g', number:'८ (छ)', isHard:false, text:'सन्तः परीक्ष्यान्यतरद्भजन्ते।', answer:{ answerKey:'परीक्ष्य + अन्यतरत् + भजन्ते', schoolMethod:'परीक्ष्य + अन्यतरत् + भजन्ते' } },
            { id:'q9a', number:'९ (क)', isHard:false, text:'विग्रहवाक्यानि आधृत्य समस्तपदानि लिखत — विघ्नैः विहताः (कार्यात्) विरमन्ति।', answer:{ answerKey:'विघ्नविहताः', schoolMethod:'विघ्नविहताः' } },
            { id:'q9b', number:'९ (ख)', isHard:false, text:'वस्त्रेण पूतं जलं पिबेत् ।', answer:{ answerKey:'वस्त्रपूतम्', schoolMethod:'वस्त्रपूतम्' } },
            { id:'q9c', number:'९ (ग)', isHard:false, text:'पुरुषः सिंहः इव तम् उपैति लक्ष्मीः।', answer:{ answerKey:'पुरुषसिंहम्', schoolMethod:'पुरुषसिंहम्' } },
            { id:'q9d', number:'९ (घ)', isHard:false, text:'उत्तमाः जनाः न परित्यजन्ति ।', answer:{ answerKey:'उत्तमजनाः', schoolMethod:'उत्तमजनाः' } },
            { id:'q9e', number:'९ (ङ)', isHard:false, text:'न विवेकः परमापदां पदम्।', answer:{ answerKey:'अविवेकः', schoolMethod:'अविवेकः' } },
          ]
        },
        {
          id: 's2', title: 'पठितावबोधनम्',
          questions: [
            { id:'q1', number:'१', isHard:false, text:'अधोलिखितान् श्लोकान् पठित्वा प्रश्नान् उत्तरत —\n1. दृष्टिपूतं न्यसेत् पादं वस्त्रपूतं जलं पिबेत् । सत्यपूतां वदेत् वाचं मनः पूतं समाचरेत् ।।\nI. एकपदेन उत्तरत:\n१. जलं कथं पिबेत् ?\n२. वाचं कथं वदेत्?\n३. कथं समाचरेत्?\nII. पूर्णवाक्येन उत्तरत:\n१. दृष्टिपूतं कं न्यसेत् ?\n२. मनः पूतम् किं करोतु ?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘वस्त्रपूतम् जलम्’ अनयोः पदयोः विशेष्यपदं किमस्ति ? (क) जलम् (ख) वस्त्र (ग) पूतम् (घ) वस्त्रपूतं\n(ii) ‘तोयम्’ इत्यर्थे श्लोके किं पदं प्रयुक्तम् ? (क) जलम् (ख) पवित्र (ग) पेयं (घ) पूतं\n(iii) ‘दृष्टिपूतं न्यसेत् पादम्’ अत्र क्रियापदं किमस्ति ? (क) दृष्टिपूतं (ख) न्यसेत् (ग) पादं (घ) दृष्टि', answer:{ answerKey:'I. १. वस्त्रपूतम् २. सत्यपूताम् ३. मनः पूतम्\nII. १. दृष्टिपूतं पादं न्यसेत् । २. मनः पूतम् आचरणं करोतु ।\nIII. (i) (क) जलम् (ii) (क) जलम् (iii) (ख) न्यसेत्', schoolMethod:'I. १. वस्त्रपूतम् २. सत्यपूताम् ३. मनः पूतम्\nII. १. दृष्टिपूतं पादं न्यसेत् । २. मनः पूतम् आचरणं करोतु ।\nIII. (i) (क) जलम् (ii) (क) जलम् (iii) (ख) न्यसेत्' } },
            { id:'q2', number:'२', isHard:false, text:'2. धृतिः क्षमा दमोऽस्तेयं शौचमिन्द्रियनिग्रहः । धीर्विद्या सत्यमक्रोधो दशकं धर्मलक्षणम्।।\nI. एकपदेन उत्तरत:\n१. धर्मलक्षणं कति भवन्ति ?\n२. किं क्षमा धर्मलक्षणम् अस्ति ?\n३. धर्मस्य तृतीयं लक्षणं किम् ?\nII. पूर्णवाक्येन उत्तरत:\n१. धर्मलक्षणानि कानि सन्ति?\n२. धर्मस्य सप्तमं लक्षणं किम् ?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘दशकम्’ इति विशेषणपदस्य विशेष्यपदं किमस्ति ? (क) धर्मलक्षणम (ख) क्रोधो (ग) धीः (घ) विद्या\n(ii) ‘क्रोधः’ पदस्य विपर्ययपदं अत्र श्लोके किमस्ति ? (क) अक्रोधः (ख) शौचं (ग) दशकं (घ) क्षमा\n(iii) ‘शौचं’ इति पदस्य पर्यायपदं किम् ? (क) पवित्रं (ख) असत्यं (ग) अस्तेयं (घ) अंहिसा', answer:{ answerKey:'I. १. दशकम् २. आम् ३. दमः\nII. १. धृतिः क्षमा दमोऽस्तेयं शौचमिन्द्रियनिग्रहः धीर्विद्या सत्यमक्रोधो दशकं धर्मलक्षणम् २. धर्मस्य सप्तमं लक्षणं धीः अस्ति ।\nIII. (i) (क) धर्मलक्षणम (ii) (क) अक्रोधः (iii) (क) पवित्रं', schoolMethod:'I. १. दशकम् २. आम् ३. दमः\nII. १. धृतिः क्षमा दमोऽस्तेयं शौचमिन्द्रियनिग्रहः धीर्विद्या सत्यमक्रोधो दशकं धर्मलक्षणम् २. धर्मस्य सप्तमं लक्षणं धीः अस्ति ।\nIII. (i) (क) धर्मलक्षणम (ii) (क) अक्रोधः (iii) (क) पवित्रं' } },
            { id:'q3', number:'३', isHard:false, text:'3. प्रारभ्यते न खलु विघ्नभयेन नीचैः प्रारभ्य विघ्नविहता विरमन्ति मध्याः । विघ्नैः पुनः पुनरपि प्रतिहन्यमानाः प्रारभ्य चोत्तमजनाः न परित्यजन्ति ।।\nI. एकपदेन उत्तरत:\n१. विघ्नभयेन कैः कार्यं न प्रारभ्यते ?\n२. के न परित्यजन्ति ?\n३. विघ्नैः हताः के विरमन्ति ?\nII. पूर्णवाक्येन उत्तरत:\n१. मध्या: किं कुर्वन्ति ?\n२. उत्तमजना: कैः प्रतिहन्यमानाः किं न परित्यजन्ति ?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘विरमन्ति’ क्रियापदस्य कर्तृपदं किमस्ति ? (क) कार्याणि (ख) मध्याः (ग) विघ्न (घ) विहताः\n(ii) ‘भूयोभूयः’ इति अर्थे अत्र किं पदं प्रयुक्तम् ? (क) पुनः पुनः (ख) अपि (ग) नीचैः (घ) प्रारभ्य\n(iii) ‘समाप्य’ इत्यस्य पदस्य विलोमपदं किम् ? (क) हन्यमाना (ख) विरमन्ति (ग) प्रारभ्य (घ) परित्यजन्ति', answer:{ answerKey:'I. १. नीचैः २. उत्तमजनाः ३. मध्याः\nII. १. मध्या: प्रारभ्य विघ्नविहताः विरमन्ति । २. उत्तमजनाः विघ्नैः प्रतिहन्यमानाः अपि प्रारभ्य कार्याणि न परित्यजन्ति ।\nIII. (i) (ख) मध्याः (ii) (क) पुनः पुनः (iii) (ग) प्रारभ्य', schoolMethod:'I. १. नीचैः २. उत्तमजनाः ३. मध्याः\nII. १. मध्या: प्रारभ्य विघ्नविहताः विरमन्ति । २. उत्तमजनाः विघ्नैः प्रतिहन्यमानाः अपि प्रारभ्य कार्याणि न परित्यजन्ति ।\nIII. (i) (ख) मध्याः (ii) (क) पुनः पुनः (iii) (ग) प्रारभ्य' } },
            { id:'q4', number:'४', isHard:false, text:'4. उद्योगिनं पुरुषसिंहम् उपैति लक्ष्मीः दैवेन देयमिति कापुरुषा वदन्ति । दैवं निहत्य कुरु पौरुषमात्मशक्त्या यत्ने कृते यदि न सिध्यति कोऽत्र दोषः ।।\nI. एकपदेन उत्तरत:\n१. लक्ष्मीः कम् उपैति ?\n२. आत्मशक्त्या किं कुरु ?\n३. कं निहत्य पौरुषं कुरु ?\nII. पूर्णवाक्येन उत्तरत:\n१. कापुरुषाः किं वदन्ति ?\n२. पौरुषम् कथं कुरु?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘वदन्ति’ इति क्रियापदस्य अत्र कर्तृपदं किमस्ति ? (क) कापुरुषाः (ख) पुरुषा: (ग) मध्याः (घ) नीचैः\n(ii) ‘समृद्धि:’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) दैवं (ख) लक्ष्मीः (ग) दैवेन (घ) यत्ने\n(iii) ‘आलस्ये’ इत्यस्य पदस्य विलोमपदं किम् ? (क) यत्ने (ख) कृते (ग) दैवेन (घ) दोषः', answer:{ answerKey:'I. १. उद्योगिनम् २. पौरुषम् ३. दैवम्\nII. १. ‘दैवेन देयमिति’ कापुरुषाः वदन्ति । २. दैवं निहत्य आत्मशक्त्या पौरुषं कुरु ।\nIII. (i) (क) कापुरुषाः (ii) (ख) लक्ष्मीः (iii) (क) यत्ने', schoolMethod:'I. १. उद्योगिनम् २. पौरुषम् ३. दैवम्\nII. १. ‘दैवेन देयमिति’ कापुरुषाः वदन्ति । २. दैवं निहत्य आत्मशक्त्या पौरुषं कुरु ।\nIII. (i) (क) कापुरुषाः (ii) (ख) लक्ष्मीः (iii) (क) यत्ने' } },
            { id:'q5', number:'५', isHard:false, text:'5. सहसा विदधीत न क्रियामविवेकः परमापदां पदम् । वृणते हि विमृश्यकारिणं गुणलुब्धाः स्वयमेव सम्पदः ।।\nI. एकपदेन उत्तरत:\n१. कः परमापदां पदम् ?\n२. सहसा किं न विदधीत ?\n३. सम्पदः कीदृश्यः सन्ति?\nII. पूर्णवाक्येन उत्तरत:\n१. सम्पदः कं वृणते ?\n२. क्रियां कथं न क्रियात् ?\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘सम्पदः’ कर्तृपदस्य क्रियापदं श्लोके किमस्ति ? (क) विदधीत (ख) क्रियां (ग) पवं (घ) वृणते\n(ii) ‘सम्पदः’ पदस्य विशेषणं अत्र श्लोके किमस्ति ? (क) क्रियां (ख) गुणलुब्धाः (ग) सहसा (घ) वृणते\n(iii) ‘अकस्मात्’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) सहसा (ख) पदम् (ग) क्रियां (घ) स्वयं', answer:{ answerKey:'I. १. अविवेकः २. क्रियाम् ३. गुणलुब्धाः\nII. १. सम्पदः विमृश्यकारिणं वृणते । २. सहसा क्रियां न क्रियात् ।\nIII. (i) (घ) वृणते (ii) (ख) गुणलुब्धाः (iii) (क) सहसा', schoolMethod:'I. १. अविवेकः २. क्रियाम् ३. गुणलुब्धाः\nII. १. सम्पदः विमृश्यकारिणं वृणते । २. सहसा क्रियां न क्रियात् ।\nIII. (i) (घ) वृणते (ii) (ख) गुणलुब्धाः (iii) (क) सहसा' } },
            { id:'q6a', number:'२ (क)', isHard:false, text:'रेखाङ्कितपदानि आधृत्य प्रश्ननिर्माणं कुरुत — अभ्यासेन सर्वाः क्रियाः सिध्यन्ति ।', answer:{ answerKey:'केन सर्वाः क्रियाः सिध्यन्ति ?', schoolMethod:'केन सर्वाः क्रियाः सिध्यन्ति ?' } },
            { id:'q6b', number:'२ (ख)', isHard:false, text:'उत्तमजनाः प्रारभ्य न परित्यजन्ति ।', answer:{ answerKey:'के प्रारभ्य न परित्यजन्ति ?', schoolMethod:'के प्रारभ्य न परित्यजन्ति ?' } },
            { id:'q6c', number:'२ (ग)', isHard:false, text:'उद्योगिनं पुरुषसिंहम् लक्ष्मीः उपैति ।', answer:{ answerKey:'उद्योगिनं पुरुषसिंहम् का उपैति ?', schoolMethod:'उद्योगिनं पुरुषसिंहम् का उपैति ?' } },
            { id:'q6d', number:'२ (घ)', isHard:false, text:'वस्त्रपूतं जलं पिबेत् ।', answer:{ answerKey:'कीदृशं जलं पिबेत् ?', schoolMethod:'कीदृशं जलं पिबेत् ?' } },
            { id:'q6e', number:'२ (ङ)', isHard:false, text:'मनः पूतं समाचरेत्।', answer:{ answerKey:'कथं समाचरेत् ?', schoolMethod:'कथं समाचरेत् ?' } },
            { id:'q6f', number:'२ (च)', isHard:false, text:'धर्मस्य दश लक्षणं भवति ।', answer:{ answerKey:'धर्मस्य कति लक्षणं भवति ?', schoolMethod:'धर्मस्य कति लक्षणं भवति ?' } },
            { id:'q6g', number:'२ (छ)', isHard:false, text:'सहसा क्रियाम् न विदधीत ।', answer:{ answerKey:'सहसा किं न विदधीत ?', schoolMethod:'सहसा किं न विदधीत ?' } },
            { id:'q6h', number:'२ (ज)', isHard:false, text:'सन्तः परीक्ष्य अन्यतरत् भजन्ते ।', answer:{ answerKey:'सन्तः कथम् अन्यतरत् भजन्ते ?', schoolMethod:'सन्तः कथम् अन्यतरत् भजन्ते ?' } },
            { id:'q7a', number:'३ (१)', isHard:false, text:'मञ्जूषातः उचितपदानि चित्वा अन्वयं पूरयत — यद्यदाचरति श्रेष्ठः तत्तदेवेतरो जनः । स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ।।\nअन्वयः – श्रेष्ठः यत् यत् (i) …………. इतरः (ii) ……… तत् तत् एव (आचरति) । सः यत् (iii) ………. कुरुते, (iv) ………. तत् अनुवर्तते।', answer:{ answerKey:'(i) आचरति (ii) जनः (iii) प्रमाणम् (iv) लोकः', schoolMethod:'(i) आचरति (ii) जनः (iii) प्रमाणम् (iv) लोकः' } },
            { id:'q7b', number:'३ (२)', isHard:false, text:'अभ्यासेन क्रियाः सर्वाः अभ्यासात् सकलाः कलाः । अभ्यासाद् ध्यानमौनादि किमभ्यासस्य दुष्करम्।।\nअन्वयः – सर्वाः (i) ………… अभ्यासेन (सिध्यन्ति)। (ii) ………. कलाः अभ्यासात् (सिध्यन्ति) । (iii) ……… (अपि) अभ्यासात् सिध्यति। (iv) ………. दुष्करं किम् (अस्ति)?', answer:{ answerKey:'(i) क्रियाः (ii) सकलाः (iii) ध्यानमौनादि (iv) अभ्यासस्य', schoolMethod:'(i) क्रियाः (ii) सकलाः (iii) ध्यानमौनादि (iv) अभ्यासस्य' } },
            { id:'q7c', number:'३ (३)', isHard:false, text:'पुराणमित्येव न साधु सर्वं न चापि काव्यं नवमित्यवद्यम्। सन्तः परीक्ष्यान्यतरद्भजन्ते मूढः परप्रत्ययनेयबुद्धिः ।।\nअन्वयः – पुराणम् इति एव (i) ……… साधु न (वर्तते), (ii) …….. नवम् इति अवद्यं न (वर्तते), (iii) …… परीक्ष्य (iv) …….. भजन्ते, मूढः परप्रत्ययनेयबुद्धि (भवति) ।', answer:{ answerKey:'(i) सर्वम् (ii) काव्यम् (iii) सन्तः (iv) अन्यतरत्', schoolMethod:'(i) सर्वम् (ii) काव्यम् (iii) सन्तः (iv) अन्यतरत्' } },
            { id:'q7d', number:'३ (४)', isHard:false, text:'सहसा विदधीत न क्रियामविवेकः परमापदां पदम् । वृते हि विमृश्यकारिणं गुणलुब्धाः स्वयमेव सम्पदः ॥\nअन्वयः – क्रियां सहसा न (i) …….., अविवेकः परम् (ii) ………. पदम् (भवति), हि गुणलुब्धाः (iii) ………. स्वयमेव (iv) ……….वृणते।', answer:{ answerKey:'(i) विदधीत (ii) आपदाम् (iii) सम्पदः (iv) विमृश्यकारिणम्', schoolMethod:'(i) विदधीत (ii) आपदाम् (iii) सम्पदः (iv) विमृश्यकारिणम्' } },
            { id:'q8', number:'४', isHard:false, text:'पर्यायपदानाम् उचितं मेलनं कुरुत।', answer:{ answerKey:'1. दैवम् — भाग्यम्\n2. पदम् — स्थानम्\n3. पुराणम् — पुरातनम्\n4. पूतम् — शुद्धम्\n5. मूढः — मूर्खः\n6. वाचम् — वाणीम्\n7. सम्पदः — ऐश्वर्यम्\n8. सन्तः — सज्जनाः\n9. वृणते — आश्रयन्ते\n10. भजन्ते — स्वीकुर्वन्ति\n11. विदधीत — कुर्यात्', schoolMethod:'पर्यायमेलनम् —\n1. दैवम् — भाग्यम्\n2. पदम् — स्थानम्\n3. पुराणम् — पुरातनम्\n4. पूतम् — शुद्धम्\n5. मूढः — मूर्खः\n6. वाचम् — वाणीम्\n7. सम्पदः — ऐश्वर्यम्\n8. सन्तः — सज्जनाः\n9. वृणते — आश्रयन्ते\n10. भजन्ते — स्वीकुर्वन्ति\n11. विदधीत — कुर्यात्' } },
            { id:'q9a', number:'५ (१)', isHard:false, text:'मञ्जूषातः पदं चित्वा भावार्थं पूरयत — पुराणमित्येव न साधु सर्वं न चापि काव्यं नवमित्यवद्यम् । सन्तः परीक्ष्यान्यतरद्भजन्ते मूढः परप्रत्ययनेयबुद्धिः ।।\nभावार्थः – न सर्वं (i) ……….. साधु भवति, न च सर्वं नवम् काव्यम् (ii) ……. भवति । (iii) ……. वस्तूनि परीक्ष्य स्वीकुर्वन्ति, (iv) ……. तु अन्येषां वचनेन चलन्ति।', answer:{ answerKey:'(i) पुराणम् (ii) अवद्यम् (iii) सन्तः (iv) मूढाः', schoolMethod:'(i) पुराणम् (ii) अवद्यम् (iii) सन्तः (iv) मूढाः' } },
            { id:'q9b', number:'५ (२)', isHard:false, text:'सहसा विदधीत न क्रियामविवेकः परमापदां पदम् । वृणते हि विमृश्यकारिणं गुणलुब्धाः स्वयमेव सम्पदः ।।\nभावार्थः – मनुष्यः (i) ………. कार्यं न कुर्यात् यतः अविवेकः (ii) …….. कारणं भवति । विचारपूर्वकं (iii) ……. कुर्वन्तं जनं (iv) …… स्वयमेव आगच्छन्ति ।', answer:{ answerKey:'(i) अकस्मात् (ii) दुःखस्य (iii) कार्यम् (iv) सम्पदः', schoolMethod:'(i) अकस्मात् (ii) दुःखस्य (iii) कार्यम् (iv) सम्पदः' } },
          ]
        },
      ] },
      { id:'ch07', number:7,  title:'उपायं चिन्तयेत् प्राज्ञः तथा अपायं च चिन्तयेत्',       slug:'upayam-chintayet-prajnah-tatha-apayam-cha-chintayet', code:'0904sk07', exercises:[
        {
          id: 's1', title: 'अभ्यासाद् जायते सिद्धिः',
          questions: [
            { id:'q1a', number:'१ (क)', isHard:false, text:'अधोलिखितप्रश्नानाम् उत्तराणि पूर्णवाक्येन लिखत — नरस्य वृत्तं के जानन्ति ?', answer:{ answerKey:'आदित्यः चन्द्रः अनिलः अनलः द्यौः भूमिः हृदयं यमंः अहः रात्रिः उभे सन्ध्ये च ।', schoolMethod:'आदित्यः चन्द्रः अनिलः अनलः द्यौः भूमिः हृदयं यमंः अहः रात्रिः उभे सन्ध्ये च ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'धर्मबुद्धयः किं वीक्षन्ते ?', answer:{ answerKey:'मातृवत् परदारेषु, परद्रव्येषु लोष्ठवत्, सर्वभूतेषु आत्मवत्, धर्मबुद्धयः वीक्षन्ते।', schoolMethod:'मातृवत् परदारेषु, परद्रव्येषु लोष्ठवत्, सर्वभूतेषु आत्मवत्, धर्मबुद्धयः वीक्षन्ते ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'कस्य जन्मनः फलं व्यर्थम् ?', answer:{ answerKey:'येन देशान्तरेषु भ्रमता बहुविधं भाषावेषादि न ज्ञातं, तस्य जन्मनः फलं व्यर्थम् ।', schoolMethod:'येन देशान्तरेषु भ्रमता बहुविधं भाषावेषादि न ज्ञातं, तस्य जन्मनः फलं व्यर्थम् ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'पापबुद्धिः स्वपितरं किम् उक्तवान् ?', answer:{ answerKey:'पापबुद्धिः स्वपितरम् उक्तवान् – मदुक्तप्रकारेण वदतु।', schoolMethod:'पापबुद्धिः स्वपितरम् उक्तवान् – मदुक्तप्रकारेण वदतु ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'प्राज्ञः किं – किं चिन्तयेत् ?', answer:{ answerKey:'प्राज्ञः उपायं चिन्तयेत् अपायमपि चिन्तयेत् ।', schoolMethod:'प्राज्ञः उपायं चिन्तयेत् अपायमपि चिन्तयेत् ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'मानवः कदा विद्यां वित्तं शिल्पं च प्राप्नोति ?', answer:{ answerKey:'यः देशात् देशान्तरं व्रजति सः विद्यां वित्तं शिल्पं च प्राप्नोति ।', schoolMethod:'यः देशात् देशान्तरं व्रजति सः विद्यां वित्तं शिल्पं च प्राप्नोति ।' } },
            { id:'q1g', number:'१ (छ)', isHard:false, text:'पापबुद्धिः किं चिन्तयित्वा देशान्तरं प्रस्थितः ?', answer:{ answerKey:'अहं मूर्खः, धर्मबुद्धेः प्रभावेण धनम् अर्जयिष्यामि इति चिन्तयित्वा पापबुद्धिः देशान्तरं प्रस्थितः।', schoolMethod:'अहं मूर्खः, धर्मबुद्धेः प्रभावेण धनम् अर्जयिष्यामि इति चिन्तयित्वा पापबुद्धिः देशान्तरं प्रस्थितः ।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'अधोलिखितवाक्येषु स्थूलाक्षरपदानि आश्रित्य प्रश्ननिर्माणं कुरुत — एनम् अपि वञ्चयित्वा सुखी भवामि।', answer:{ answerKey:'कं वञ्चयित्वा सुखी भवामि ?', schoolMethod:'कं वञ्चयित्वा सुखी भवामि ? (स्थूलपदं – एनम्)' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'सर्वं धनं स्वीकृत्य स्वग्रामं गच्छावः।', answer:{ answerKey:'किं स्वीकृत्य स्वग्रामं गच्छावः ?', schoolMethod:'किं स्वीकृत्य स्वग्रामं गच्छावः ? (स्थूलपदं – धनं)' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'निशीथे अटव्यां गत्वा तत् सर्वं वित्तम् आनीतवान्।', answer:{ answerKey:'कदा अटव्यां गत्वा तत् सर्वं वित्तम् आनीतवान् ?', schoolMethod:'कदा अटव्यां गत्वा तत् सर्वं वित्तम् आनीतवान् ? (स्थूलपदं – निशीथे)' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'तत् आकर्ण्य सर्वे ते जनाः विस्मयोत्फुल्ललोचनाः सञ्जाताः।', answer:{ answerKey:'तत् आकर्ण्य सर्वे ते जनाः कीदृशाः सञ्जाताः ?', schoolMethod:'तत् आकर्ण्य सर्वे ते जनाः कीदृशाः सञ्जाताः ? (स्थूलपदं – विस्मयोत्फुल्ललोचनाः)' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'अहम् एतत् शमीकोटरं वह्निना प्रज्वालयामि ।', answer:{ answerKey:'अहम् एतत् शमीकोटरं केन प्रज्वालयामि ?', schoolMethod:'अहम् एतत् शमीकोटरं केन प्रज्वालयामि ? (स्थूलपदं – वह्निना)' } },
            { id:'q4a', number:'४ (क)', isHard:false, text:'उदाहरणानुसारं भूतकालिकवाक्यानि वर्तमानकालिकवाक्येषु परिवर्तयत — राजपुरुषाः, पापबुद्धिं दण्डितवन्तः।', answer:{ answerKey:'राजपुरुषाः पापबुद्धिं दण्डयन्ति।', schoolMethod:'राजपुरुषाः पापबुद्धिं दण्डयन्ति।' } },
            { id:'q4b', number:'४ (ख)', isHard:false, text:'पापबुद्धिः अत्यधिकं धनं सम्पादितवान्।', answer:{ answerKey:'पापबुद्धिः अत्यधिकं धनं सम्पादयति।', schoolMethod:'पापबुद्धिः अत्यधिकं धनं सम्पादयति।' } },
            { id:'q4c', number:'४ (ग)', isHard:false, text:'पापबुद्धिः वनदेवतायाः समीपम् आगतवान्।', answer:{ answerKey:'पापबुद्धिः वनदेवतायाः समीपम् आगच्छति।', schoolMethod:'पापबुद्धिः वनदेवतायाः समीपम् आगच्छति।' } },
            { id:'q4d', number:'४ (घ)', isHard:false, text:'अत्रान्तरे पापबुद्धिः शिरस्ताडयन् उक्तवान्।', answer:{ answerKey:'अत्रान्तरे पापबुद्धिः शिरस्ताडयन् वदति ।', schoolMethod:'अत्रान्तरे पापबुद्धिः शिरस्ताडयन् वदति ।' } },
            { id:'q4e', number:'४ (ङ)', isHard:false, text:'सर्वे जनाः धर्मबुद्धिं प्रशंसितवन्तः।', answer:{ answerKey:'सर्वे जनाः धर्मबुद्धिं प्रशंसन्ति।', schoolMethod:'सर्वे जनाः धर्मबुद्धिं प्रशंसन्ति।' } },
            { id:'q5a', number:'५ (क)', isHard:false, text:'श्लोकानां भावार्थान् विचिन्त्य कोष्ठकात् समुचितपदैः रिक्तस्थानानि पूरयत — सूर्यः चन्द्रः ……… अग्निः आकाशः भूमिः जलं ……… यमः दिवसः रात्रिः प्रभातं सायं च मनुष्याणां सर्वविधं …….. जानन्ति । (व्यवहारं / पवनः / हृदयं)', answer:{ answerKey:'पवनः, हृदयं, व्यवहारं', schoolMethod:'(क) पवनः, हृदयं, व्यवहारं' } },
            { id:'q5b', number:'५ (ख)', isHard:false, text:'यः ……… न अटति, विविधदेशानां संस्कृतीः …. च न जानाति, पृथिवीपृष्ठे तस्य जन्म ……. भाति । (भाषाः / व्यर्थं / अन्यदेशेषु)', answer:{ answerKey:'अन्यदेशेषु, भाषाः, व्यर्थं', schoolMethod:'(ख) अन्यदेशेषु, भाषाः, व्यर्थं' } },
            { id:'q5c', number:'५ (ग)', isHard:false, text:'सज्जनाः सर्वासु नारीषु ………. इव, अन्येषां ………. मृत्पिण्डम् इव, सर्वेषु प्राणिषु च …….. इव चिन्तयन्ति। (द्रव्येषु / स्वयम् / मातरः)', answer:{ answerKey:'मातरः, द्रव्येषु, स्वयम्', schoolMethod:'(ग) मातरः, द्रव्येषु, स्वयम्' } },
            { id:'q5d', number:'५ (घ)', isHard:false, text:'बुद्धिमान् मनुष्यः ………. मार्गान् समस्यादूरीकरणस्य …….. च ……..। (कौशलानि / कार्यसाधनस्य / जानीयात्)', answer:{ answerKey:'कार्यसाधनस्य, कौशलानि, जानीयात्।', schoolMethod:'(घ) कार्यसाधनस्य, कौशलानि, जानीयात्।' } },
            { id:'q6a', number:'६ (क)', isHard:false, text:'उदाहरणं दृष्ट्वा अधोलिखितानां पदानां विग्रहं मेलनं वा कुरुत — गुरुजनाज्ञया', answer:{ answerKey:'गुरुजनानाम् आज्ञया', schoolMethod:'गुरुजनाज्ञया – गुरुजनानाम् आज्ञया' } },
            { id:'q6b', number:'६ (ख)', isHard:false, text:'वनदेवता', answer:{ answerKey:'वनस्य देवता', schoolMethod:'वनदेवता – वनस्य देवता' } },
            { id:'q6c', number:'६ (ग)', isHard:false, text:'वित्तस्य अभावात्', answer:{ answerKey:'वित्ताऽभावात्', schoolMethod:'वित्ताऽभावात् – वित्तस्य अभावात्' } },
            { id:'q6d', number:'६ (घ)', isHard:false, text:'बुद्धिप्रभावेण', answer:{ answerKey:'बुद्धेः प्रभावात्', schoolMethod:'बुद्धिप्रभावेण – बुद्धेः प्रभावात्' } },
            { id:'q6e', number:'६ (ङ)', isHard:false, text:'धरण्याः पीठे', answer:{ answerKey:'धरणीपीठे', schoolMethod:'धरणीपीठे – धरण्याः पीठे' } },
            { id:'q6f', number:'६ (च)', isHard:false, text:'राजकुले', answer:{ answerKey:'राज्ञः कुले', schoolMethod:'राजकुले – राज्ञः कुले' } },
            { id:'q7', number:'७', isHard:false, text:'अधोलिखितानि वाक्यानि कथाक्रमानुसारं पुनः लिखत।', answer:{ answerKey:'(क) कस्मिंश्चिद्देशे धर्मबुद्धिः पापबुद्धिश्च द्वे मित्रे प्रतिवसतः स्म।\n(ख) ततस्तौ गुरुजनानाम् अनुमतिं प्राप्य शुभेऽहनि देशान्तरं प्रस्थितौ।\n(ग) यथा द्वाभ्यां चिन्तितं तथैव भूमिं खनित्वा तत्रैव धनं निक्षिप्य स्वगृहं गतवन्तौ।\n(घ) द्वावपि गत्वा तत् स्थानं यावत् खनतः तावद् रिक्तं भाण्डं दृष्टवन्तौ।\n(ङ) भवान् यदि मदुक्तप्रकारेण वदति तर्हि तद्धनं मयि स्थिरं तिष्ठति।\n(च) राजपुरुषाः पापबुद्धिं दण्डितवन्तः।', schoolMethod:'कथाक्रमः —\n(क) कस्मिंश्चिद्देशे धर्मबुद्धिः पापबुद्धिश्च द्वे मित्रे प्रतिवसतः स्म।\n(ख) ततस्तौ गुरुजनानाम् अनुमतिं प्राप्य शुभेऽहनि देशान्तरं प्रस्थितौ।\n(ग) यथा द्वाभ्यां चिन्तितं तथैव भूमिं खनित्वा तत्रैव धनं निक्षिप्य स्वगृहं गतवन्तौ।\n(घ) द्वावपि गत्वा तत् स्थानं यावत् खनतः तावद् रिक्तं भाण्डं दृष्टवन्तौ।\n(ङ) भवान् यदि मदुक्तप्रकारेण वदति तर्हि तद्धनं मयि स्थिरं तिष्ठति।\n(च) राजपुरुषाः पापबुद्धिं दण्डितवन्तः।' } },
          ]
        },
        {
          id: 's2', title: 'पठितावबोधनम्',
          questions: [
            { id:'q1', number:'१', isHard:false, text:'अधोलिखितं गद्यांशं पठित्वा उत्तराणि लिखत — “कस्मिंश्चिद्देशे धर्मबुद्धिः पापबुद्धिश्च द्वे मित्रे प्रतिवसतः स्म। अथ कदाचित्पापबुद्धिना चिन्तितं यदहं तावान्मूर्खो दरिद्रतया पीडितश्च। अत एनं धर्मबुद्धिं स्वीकृत्य अन्यं देशं गच्छामि, तत्र अस्य आश्रयणेन धनं सम्पादयामि, अनन्तरम् एनमपि वञ्चयित्वा सुखी भवामि इति।” (पृष्ठ 80)\n\nI. एकपदेन उत्तरत:\n१. धर्मबुद्धिः पापबुद्धिश्च कुत्र प्रतिवसतः स्म ?\n२. धर्मबुद्धिः पापबुद्धिश्च कौ आस्ताम् ?\n३. पापबुद्धिः कया पीडितः आसीत्?\n४. कं वञ्चयित्वा पापबुद्धिः सुखी भवेत् ?\n\nII. पूर्णवाक्येन उत्तरत:\n१. मूर्खः दरिद्रः च कः?\n२. अन्यं देशं गन्तुं कः ऐच्छत्?\n\nIII. यथानिर्देशम् उत्तरत:\n(i) पापबुद्धिना चिन्तितम् – अत्र कर्तृपदं किम् ? (क) चिन्तितम् (ख) पापबुद्धिना (ग) पाप (घ) बुद्धिना\n(ii) ‘एनम् अपि ……….’ अत्र ‘एनम्’ सर्वनामपदं कस्मै प्रयुक्तम् ? (क) धर्मबुद्धि (ख) धर्मबुद्धये (ग) पापबुद्धये (घ) पापबुद्धिः\n(iii) ‘दिने’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) अहनि (ख) एनम् (ग) अथ (घ) अतः', answer:{ answerKey:'I. १. कस्मिंश्चिद्देशे २. मित्रे ३. दरिद्रतया ४. धर्मबुद्धिम्\nII. १. पापबुद्धिः मूर्खः दरिद्रः च आसीत्। २. पापबुद्धिः अन्यदेशं गन्तुम् ऐच्छत्।\nIII. (i) (ख) पापबुद्धिना (ii) (ख) धर्मबुद्धये (iii) (क) अहनि', schoolMethod:'I. १. कस्मिंश्चिद्देशे २. मित्रे ३. दरिद्रतया ४. धर्मबुद्धिम्\nII. १. पापबुद्धिः मूर्खः दरिद्रः च आसीत्। २. पापबुद्धिः अन्यदेशं गन्तुम् ऐच्छत्।\nIII. (i) (ख) पापबुद्धिना (ii) (ख) धर्मबुद्धये (iii) (क) अहनि' } },
            { id:'q2', number:'२', isHard:false, text:'अधोलिखितं गद्यांशं पठित्वा उत्तराणि लिखत — “पिता – वत्स! द्रुतं वद, अहं किं करवाणि येन तद्द्रव्यं स्थिरं तिष्ठेत् । पापबुद्धिः – तात ! अस्ति वनप्रदेशे महाशमी नाम वृक्षः । तस्मिन् महाकोटरम् अस्ति । तत्र भवान्साम्प्रतमेव प्रविशतु । ततः प्रभाते यदाहं सत्यश्रावणाय निवेदयामि, तदा भवता वक्तव्यं यद् धर्मबुद्धिः चौर इति। पापबुद्धिः आदित्यचन्द्रावनिलोऽनलश्च द्यौर्भूमिरापो हृदयं यमश्च । अहश्च रात्रिश्च उभे च संध्ये धर्मो हि जानाति नरस्य वृत्तम् ।।” (पृष्ठ 83)\n\nI. एकपदेन उत्तरत:\n१. किं करवाणि इति कः अकथयत्?\n२. महाकोटरं कुत्र आसीत् ?\n३. धर्मः किं जानाति ?\n\nII. पूर्णवाक्येन उत्तरत:\n१. ‘द्रुतं वद’ इति कः अकथयत् ?\n२. वनप्रदेशे किम् आसीत्?\n\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘धर्मः नरस्य वृत्तं जानाति’ – इत्यत्र क्रियापदं किम् ? (क) धर्मः (ख) नरस्य (ग) जानाति (घ) वृत्तम्\n(ii) ‘अहं किं करवाणि’ अत्र ‘अहं’ सर्वनामपदं कस्मै प्रयुक्तम् ? (क) धर्माधिकारी (ख) धर्मबुद्धिः (ग) पापबुद्धेः पित्रे / जनकाय (घ) पापबुद्धिः\n(iii) ‘सूर्यः’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) आदित्यः (ख) प्रयुक्तम् (ग) अनलः (घ) अनिलः', answer:{ answerKey:'I. १. पापबुद्धेः पिता २. शमीवृक्षे ३. नरस्य वृत्तम्\nII. १. ‘द्रुतं वद्’ इति पापबुद्धेः पिता अकथयत्। २. वनप्रदेशे महाशमी नाम वृक्षः आसीत् ।\nIII. (i) (ग) जानाति (ii) (ग) पापबुद्धेः पित्रे / जनकाय (iii) (क) आदित्यः', schoolMethod:'I. १. पापबुद्धेः पिता २. शमीवृक्षे ३. नरस्य वृत्तम्\nII. १. ‘द्रुतं वद्’ इति पापबुद्धेः पिता अकथयत्। २. वनप्रदेशे महाशमी नाम वृक्षः आसीत् ।\nIII. (i) (ग) जानाति (ii) (ग) पापबुद्धेः पित्रे / जनकाय (iii) (क) आदित्यः' } },
            { id:'q3', number:'३', isHard:false, text:'अधोलिखितं गद्यांशं पठित्वा उत्तराणि लिखत — “पापबुद्धिः – सखे! मम कुटुम्बे बहवः जनाः सन्ति, धनाभावात् कष्टम् अनुभवामि । अतः तत्र गत्वा किञ्चिन्मात्रं धनमानयावः । धर्मबुद्धिः – अस्तु मित्र ! गच्छावः। पापबुद्धिः – भोः धर्मबुद्धे ! त्वयैवापहृतम् एतद्धनं, नान्येन । तत्प्रयच्छ मे तदर्धम्। अन्यथा अहं राजकुले निवेदयिष्यामि । धर्मबुद्धिः – भोः दुरात्मन्! मा मैवं वद । धर्मबुद्धिः खल्वहम्। नैतत् चौरकर्म करोमि । मातृवत्परदारेषु परद्रव्येषु लोष्ठवत्। आत्मवत्सर्वभूतेषु वीक्षन्ते धर्मबुद्धयः ।।” (पृष्ठ 82)\n\nI. एकपदेन उत्तरत:\n१. पापबुद्धिं के दण्डितवन्तः ?\n२. राजपुरुषाः कं प्रशंसितवन्तः ?\n३. कस्य पिता अग्निना घातितः ?\n\nII. पूर्णवाक्येन उत्तरत:\n१. प्राज्ञः किं किं चिन्तयेत् ?\n२. कीदृशः पापबुद्धिपिता शमीकोटरात् बहिः आगतः ?\n\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘नाहं चोरितवान्’ अत्र ‘अहं’ सर्वनामपदं कस्मै प्रयुक्तम् ? (क) धर्मबुद्धये (ख) धर्मबुद्धिः (ग) पापबुद्धिः (घ) पापबुद्धये\n(ii) ‘प्रज्वालयामि’ इति क्रियापदस्य कर्तृपदं किम् ? (क) धर्मबुद्धिः (ख) जनाः (ग) अहम् (घ) पापबुद्धिः\n(iii) ‘अग्निना’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) वह्निनना (ख) वह्निनः (ग) द्रव्यैः (घ) व्यर्थः', answer:{ answerKey:'I. १. राजपुरुषाः २. अर्धदग्धशरीरः / विलपन् ३. धर्मबुद्धिम्\nII. १. प्राज्ञः उपायं अपायं च चिन्तयेत् । २. अर्धदग्धशरीरः स्फुटितेक्षणः करुणं विलपन् पापबुद्धिपिता शमीकोटरात् बहिः आगतः ।\nIII. (i) (क) धर्मबुद्धये (ii) (ग) अहम् (iii) (क) वह्निनना', schoolMethod:'I. १. राजपुरुषाः २. अर्धदग्धशरीरः / विलपन् ३. धर्मबुद्धिम्\nII. १. प्राज्ञः उपायं अपायं च चिन्तयेत् । २. अर्धदग्धशरीरः स्फुटितेक्षणः करुणं विलपन् पापबुद्धिपिता शमीकोटरात् बहिः आगतः ।\nIII. (i) (क) धर्मबुद्धये (ii) (ग) अहम् (iii) (क) वह्निनना' } },
            { id:'q4', number:'४', isHard:false, text:'पर्यायवाचि-पदानां मेलनं करणीयम् —\n(क) – (ख)\n१. लोष्ठ – दिवसे\n२. व्रजति – विघ्नं\n३. अटव्यां – जलम्\n४. अपायं – गच्छति\n५. आपः – पाषाणं\n६. द्यौः – वने\n७. अनलः – अनिलः\n८. पवनः – आकाशः\n९. अहनि – अग्निः', answer:{ answerKey:'१. लोष्ठ – पाषाणं\n२. व्रजति – गच्छति\n३. अटव्यां – वने\n४. अपायं – विघ्नं\n५. आपः – जलम्\n६. द्यौः – आकाशः\n७. अनलः – पवनः\n८. अनिलः – अग्निः\n९. अहनि – दिवसे', schoolMethod:'पर्यायमेलनम् —\n१. लोष्ठ – पाषाणं\n२. व्रजति – गच्छति\n३. अटव्यां – वने\n४. अपायं – विघ्नं\n५. आपः – जलम्\n६. द्यौः – आकाशः\n७. अनलः – पवनः\n८. अनिलः – अग्निः\n९. अहनि – दिवसे' } },
            { id:'q5', number:'५', isHard:false, text:'सन्धिविच्छेदं कुरुत —\n(क) खल्वहम्\n(ख) आवयोर्मध्ये\n(ग) द्यौर्भूमिरापः\n(घ) अनिलोऽनलश्च\n(ङ) अहश्च\n(च) रात्रिश्च\n(छ) त्वयैवापहृतम्\n(ज) द्वावपि\n(झ) शिरस्ताडयन्\n(ञ) ततस्तौ', answer:{ answerKey:'(क) खलु + अहम्\n(ख) आवयोः + मध्ये\n(ग) द्यौः + भूमिः + आपः\n(घ) अनिलः + अनलः + च\n(ङ) अहः + च\n(च) रात्रि + च\n(छ) त्वया + एव + अपहृतम्\n(ज) द्वौ + अपि\n(झ) शिरः + ताडयन्\n(ञ) ततः + तौ', schoolMethod:'(क) खल्वहम् = खलु + अहम्\n(ख) आवयोर्मध्ये = आवयोः + मध्ये\n(ग) द्यौर्भूमिरापः = द्यौः + भूमिः + आपः\n(घ) अनिलोऽनलश्च = अनिलः + अनलः + च\n(ङ) अहश्च = अहः + च\n(च) रात्रिश्च = रात्रि + च\n(छ) त्वयैवापहृतम् = त्वया + एव + अपहृतम्\n(ज) द्वावपि = द्वौ + अपि\n(झ) शिरस्ताडयन् = शिरः + ताडयन्\n(ञ) ततस्तौ = ततः + तौ' } },
            { id:'q6', number:'६', isHard:false, text:'प्रकृतिप्रत्ययं पृथक् कुरुत।', answer:{ answerKey:'१. आगम्य – आ गम् + ल्यप्\n२. खनित्वा – खन् + क्त्वा\n३. प्रस्थितः – प्र स्था + क्त\n४. चिन्तितम् – चित् + क्त\n५. स्वीकृत्य – स्वी + कृ + ल्यप्\n६. दण्डनीयः – दण्ड् + अनीयर्\n७. कृतः – कृ + क्त\n८. विलपन् – वि + लप् + शतृ\n९. दातव्यम् – दा + तव्यत्\n१०. आकर्ण्य – आ + कर्ण + ल्यप्', schoolMethod:'प्रकृतिप्रत्ययपृथक्करणम् —\n१. आगम्य – आ गम् + ल्यप्\n२. खनित्वा – खन् + क्त्वा\n३. प्रस्थितः – प्र स्था + क्त\n४. चिन्तितम् – चित् + क्त\n५. स्वीकृत्य – स्वी + कृ + ल्यप्\n६. दण्डनीयः – दण्ड् + अनीयर्\n७. कृतः – कृ + क्त\n८. विलपन् – वि + लप् + शतृ\n९. दातव्यम् – दा + तव्यत्\n१०. आकर्ण्य – आ + कर्ण + ल्यप्' } },
            { id:'q7', number:'७', isHard:false, text:'विग्रहं कृत्वा समासनाम लिखत।', answer:{ answerKey:'(क) धरणीपृष्ठम् – धरण्याः पृष्ठम्, तस्मिन् – तत्पुरुष।\n(ख) प्रहृष्टमनस्कः – प्रहृष्टं मनो यस्य सः – बहुव्रीहि।\n(ग) गुरुजनाज्ञा – गुरुजनस्य आज्ञा – तत्पुरुष।\n(घ) गहनारण्यम् – गहनम् अरण्यम् – कर्मधारय।', schoolMethod:'(क) धरण्याः पृष्ठम्, तस्मिन् – तत्पुरुष।\n(ख) प्रहृष्टं मनो यस्य सः – बहुव्रीहि।\n(ग) गुरुजनस्य आज्ञा – तत्पुरुष।\n(घ) गहनम् अरण्यम् – कर्मधारय।' } },
            { id:'q8a', number:'८ (१)', isHard:false, text:'स्थूलपदानि आधृत्य प्रश्ननिर्माणं कुरुत — आवां धनं स्वीकृत्य स्वग्रामं गच्छावः।', answer:{ answerKey:'आवां किं स्वीकृत्य स्वग्रामं गच्छावः ?', schoolMethod:'आवां किं स्वीकृत्य स्वग्रामं गच्छावः ? (स्थूलपदं – धनं)' } },
            { id:'q8b', number:'८ (२)', isHard:false, text:'तौ धनं भूमौ निक्षिप्य स्वगृहं गतवन्तौ।', answer:{ answerKey:'तौ धनं कुत्र निक्षिप्य स्वगृहं गतवन्तौ ?', schoolMethod:'तौ धनं कुत्र निक्षिप्य स्वगृहं गतवन्तौ ? (स्थूलपदं – भूमौ)' } },
            { id:'q8c', number:'८ (३)', isHard:false, text:'अहं धनाभावात् कष्टम् अनुभवामि।', answer:{ answerKey:'अहं धनाभावात् किं अनुभवामि ?', schoolMethod:'अहं धनाभावात् किं अनुभवामि ? (स्थूलपदं – कष्टम्)' } },
            { id:'q8d', number:'८ (४)', isHard:false, text:'त्वया अपहृतं धनम्।', answer:{ answerKey:'त्वया अपहृतं किम् ?', schoolMethod:'त्वया अपहृतं किम् ? (स्थूलपदं – धनम्)' } },
            { id:'q8e', number:'८ (५)', isHard:false, text:'अहं राजकुले निवेदयामि ।', answer:{ answerKey:'अहं कुत्र निवेदयामि ?', schoolMethod:'अहं कुत्र निवेदयामि ? (स्थूलपदं – राजकुले)' } },
            { id:'q8f', number:'८ (६)', isHard:false, text:'वनप्रदेशे महाशमी वृक्षः आसीत् ।', answer:{ answerKey:'कुत्र महाशमी वृक्षः आसीत् ?', schoolMethod:'कुत्र महाशमी वृक्षः आसीत् ? (स्थूलपदं – वनप्रदेशे)' } },
            { id:'q8g', number:'८ (७)', isHard:false, text:'सर्वे जनाः उत्फुल्ललोचनाः सञ्जाताः।', answer:{ answerKey:'सर्वे जनाः कीदृशाः सञ्जाताः ?', schoolMethod:'सर्वे जनाः कीदृशाः सञ्जाताः ? (स्थूलपदं – उत्फुल्ललोचनाः)' } },
            { id:'q8h', number:'८ (८)', isHard:false, text:'पापबुद्धिः धर्मबुद्धेः प्रभावेण प्रभूतं धनं सम्पादितवान्।', answer:{ answerKey:'पापबुद्धिः कस्य प्रभावेण प्रभूतं धनं सम्पादितवान् ?', schoolMethod:'पापबुद्धिः कस्य प्रभावेण प्रभूतं धनं सम्पादितवान् ? (स्थूलपदं – धर्मबुद्धेः प्रभावेण)' } },
            { id:'q8i', number:'८ (९)', isHard:false, text:'धर्मबुद्धयः सर्वभूतेषु आत्मवत् वीक्षन्ते ।', answer:{ answerKey:'धर्मबुद्धयः सर्वभूतेषु कथं वीक्षन्ते ?', schoolMethod:'धर्मबुद्धयः सर्वभूतेषु कथं वीक्षन्ते ? (स्थूलपदं – आत्मवत्)' } },
            { id:'q8j', number:'८ (१०)', isHard:false, text:'वनदेवता एव न्यायं करिष्यति ।', answer:{ answerKey:'कः एव न्यायं करिष्यति ?', schoolMethod:'कः एव न्यायं करिष्यति ? (स्थूलपदं – वनदेवता)' } },
            { id:'q9', number:'९', isHard:false, text:'रिक्तस्थानानि पूरयत — मम ……..(i)…….. बहवः जनाः सन्ति, धनाभावात् …….(ii)……… अनुभवामि । अतः तत्र गत्वा ……..(iii)…….. आनयावः । द्वौ तत्स्थानं …….(iv)……. यावत् खनतः तावत् रिक्तं …….(v)…….. दृष्टवन्तौ। ………(vi)………. शिरस्ताडयन् उक्तवान्। त्वया …….(vii)…….. एतद् धनम्।', answer:{ answerKey:'(i) कुटुम्बे (ii) कष्टम् (iii) धनम् (iv) गत्वा (v) भाण्डम् (vi) पापबुद्धिः (vii) अपहृतम्', schoolMethod:'(i) कुटुम्बे (ii) कष्टम् (iii) धनम् (iv) गत्वा (v) भाण्डम् (vi) पापबुद्धिः (vii) अपहृतम्' } },
          ]
        },
      ] },
      { id:'ch08', number:8,  title:'अन्नाद् आनन्दं प्रति',                                slug:'annad-anandam-prati',                      code:'0904sk08', exercises:[
        {
          id: 's1', title: 'अभ्यासाद् जायते सिद्धिः',
          questions: [
            { id:'q1a', number:'१ (क)', isHard:false, text:'एकपदेन रिक्तस्थानं पूरयत — अन्नेन शरीरं वर्धते ।', answer:{ answerKey:'अन्नेन', schoolMethod:'उदाहरणम् – अन्नेन शरीरं वर्धते ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'………. शरीरं प्रतिष्ठितम्।', answer:{ answerKey:'प्राणेषु', schoolMethod:'(ख) प्राणेषु शरीरं प्रतिष्ठितम्।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'………. विना शरीरं क्रियाशून्यं भवति ।', answer:{ answerKey:'प्राणेन', schoolMethod:'(ग) प्राणेन विना शरीरं क्रियाशून्यं भवति ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'……. एव सर्वकर्मणः प्रवर्तकम्।', answer:{ answerKey:'अन्नात्', schoolMethod:'(घ) अन्नात् एव सर्वकर्मणः प्रवर्तकम्।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'…….. समस्तानि इन्द्रियाणि सञ्चाल्यन्ते ।', answer:{ answerKey:'मनसा', schoolMethod:'(ङ) मनसा समस्तानि इन्द्रियाणि सञ्चाल्यन्ते ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'….. बिना बोधशक्तेः तर्कशक्तेश्च विकासो न भवति ।', answer:{ answerKey:'बुद्धितत्त्वम्', schoolMethod:'(च) बुद्धितत्त्वं बिना बोधशक्तेः तर्कशक्तेश्च विकासो न भवति ।' } },
            { id:'q1g', number:'१ (छ)', isHard:false, text:'……. एव इमानि भूतानि जायन्ते ।', answer:{ answerKey:'मनः', schoolMethod:'(छ) मनः एव इमानि भूतानि जायन्ते ।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'अधोलिखितानां प्रश्नानां पूर्णवाक्येन उत्तराणि लिखत — भृगोः जिज्ञासा कस्मिन् विषये आसीत् ?', answer:{ answerKey:'भृगोः जिज्ञासा ब्रह्मविषये आसीत्।', schoolMethod:'भृगोः जिज्ञासा ब्रह्मविषये आसीत् ।' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'भृगुणा ब्रह्मज्ञानाय किम् आचरितम् ?', answer:{ answerKey:'भृगुणा ब्रह्मज्ञानाय तपः आचरितम्।', schoolMethod:'भृगुणा ब्रह्मज्ञानाय तपः आचरितम् ।' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'भृगुः प्रथमं तपसा ब्रह्मरूपेण किं ज्ञातवान् ?', answer:{ answerKey:'भृगुः प्रथमं तपसा ब्रह्मरूपेण अन्नं ज्ञातवान् ।', schoolMethod:'भृगुः प्रथमं तपसा ब्रह्मरूपेण अन्नं ज्ञातवान् ।' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'मनसः के जायन्ते ?', answer:{ answerKey:'मनसः सङ्कल्पाः भावाः विचाराः जायन्ते।', schoolMethod:'मनसः सङ्कल्पाः भावाः विचाराः जायन्ते ।' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'प्राणिनः कस्मात् जायन्ते ?', answer:{ answerKey:'प्राणिनः अन्नात् जायन्ते।', schoolMethod:'प्राणिनः अन्नात् जायन्ते ।' } },
            { id:'q2f', number:'२ (च)', isHard:false, text:'इन्द्रियाणि केन सञ्चाल्यन्ते ?', answer:{ answerKey:'इन्द्रियाणि मनसा सञ्चाल्यन्ते ।', schoolMethod:'इन्द्रियाणि मनसा सञ्चाल्यन्ते ।' } },
            { id:'q2g', number:'२ (छ)', isHard:false, text:'शरीरं कुत्र प्रतिष्ठितम् अस्ति ?', answer:{ answerKey:'शरीरं प्राणेषु प्रतिष्ठितम् अस्ति।', schoolMethod:'शरीरं प्राणेषु प्रतिष्ठितम् अस्ति ।' } },
            { id:'q2h', number:'२ (ज)', isHard:false, text:'केन विना स्मृतिशक्तेर्विकासो न भवति ?', answer:{ answerKey:'बुद्धितत्त्वेन विना स्मृतिशक्तेर्विकासो न भवति।', schoolMethod:'बुद्धितत्त्वेन विना स्मृतिशक्तेर्विकासो न भवति ।' } },
            { id:'q2i', number:'२ (झ)', isHard:false, text:'भृगुः तपसा केषां महत्त्वं ज्ञातवान् ?', answer:{ answerKey:'भृगुः तपसा अन्नस्य प्राणस्य मनसः विज्ञानस्य आनन्दस्य महत्त्वं ज्ञातवान् ।', schoolMethod:'भृगुः तपसा अन्नस्य प्राणस्य मनसः विज्ञानस्य आनन्दस्य महत्त्वं ज्ञातवान् ।' } },
            { id:'q3a', number:'३ (क)', isHard:false, text:'उदाहरणं दृष्ट्वा ‘किं सत्यं किम् असत्यम्’ इति रिक्तस्थाने पूरयत — प्रस्तुते पाठे पितापुत्रयोः संवादः अस्ति।', answer:{ answerKey:'सत्यम्', schoolMethod:'(क) सत्यम्' } },
            { id:'q3b', number:'३ (ख)', isHard:false, text:'अस्मिन् संवादे अन्नस्य महत्त्वं वर्णितम्।', answer:{ answerKey:'सत्यम्', schoolMethod:'(ख) सत्यम्' } },
            { id:'q3c', number:'३ (ग)', isHard:false, text:'प्राणिनः मनसः जायन्ते इति कथनम् अस्ति।', answer:{ answerKey:'असत्यम्', schoolMethod:'(ग) असत्यम्' } },
            { id:'q3d', number:'३ (घ)', isHard:false, text:'अन्नेन शरीरं वर्धते।', answer:{ answerKey:'सत्यम्', schoolMethod:'(घ) सत्यम्' } },
            { id:'q3e', number:'३ (ङ)', isHard:false, text:'मनः सारथिरूपेण अस्मान् कर्मणि प्रवर्तयति।', answer:{ answerKey:'सत्यम्', schoolMethod:'(ङ) सत्यम्' } },
            { id:'q3f', number:'३ (च)', isHard:false, text:'भृगुः वरुणस्य पुत्रोऽस्ति।', answer:{ answerKey:'सत्यम्', schoolMethod:'(च) सत्यम्' } },
            { id:'q3g', number:'३ (छ)', isHard:false, text:'भृगुः तपसा मनो ब्रह्मरूपेण ज्ञातवान्।', answer:{ answerKey:'सत्यम्', schoolMethod:'(छ) सत्यम्' } },
            { id:'q3h', number:'३ (ज)', isHard:false, text:'विना योगे तृतीया विभक्तिर्भवति।', answer:{ answerKey:'सत्यम्', schoolMethod:'(ज) सत्यम्' } },
            { id:'q4a', number:'४ (क)', isHard:false, text:'क्रियापदेन सह समुचितं पदं योजयत — प्राणिनः – १. क्रियताम्', answer:{ answerKey:'प्राणिनः – ३. जायन्ते', schoolMethod:'प्राणिनः – ३. जायन्ते' } },
            { id:'q4b', number:'४ (ख)', isHard:false, text:'शरीरम् – २. कुरुताम्', answer:{ answerKey:'शरीरम् – ४. वर्धते', schoolMethod:'शरीरम् – ४. वर्धते' } },
            { id:'q4c', number:'४ (ग)', isHard:false, text:'तपः – ३. जायन्ते', answer:{ answerKey:'तपः – २. कुरुताम्', schoolMethod:'तपः – २. कुरुताम्' } },
            { id:'q4d', number:'४ (घ)', isHard:false, text:'पितरं – ४. वर्धते', answer:{ answerKey:'पितरं – ५. ब्रूते', schoolMethod:'पितरं – ५. ब्रूते' } },
            { id:'q4e', number:'४ (ङ)', isHard:false, text:'यत्नः – ५. ब्रूते', answer:{ answerKey:'यत्नः – १. क्रियताम्', schoolMethod:'यत्नः – १. क्रियताम्' } },
            { id:'q5a', number:'५ (क)', isHard:false, text:'अवशिष्ट-धातुरूपाणि पूरयत — एकवचनम् – द्विवचनम् – बहुवचनम्\n(क) वर्तते – ……. – …………।', answer:{ answerKey:'वर्तते – वर्तेते – वर्तन्ते', schoolMethod:'(क) वर्तते – वर्तेते – वर्तन्ते' } },
            { id:'q5b', number:'५ (ख)', isHard:false, text:'(ख) ……. – ……. – …………।', answer:{ answerKey:'वर्तसे – वर्तेथे – वर्तध्वे', schoolMethod:'(ख) वर्तसे – वर्तेथे – वर्तध्वे' } },
            { id:'q5c', number:'५ (ग)', isHard:false, text:'(ग) …….. – ……. – …………।', answer:{ answerKey:'वर्ते – वर्तावहे – वर्तामहे', schoolMethod:'(ग) वर्ते – वर्तावहे – वर्तामहे' } },
            { id:'q8a', number:'८ (क)', isHard:false, text:'कर्तृपदानुसारं लोट्-लकारेण क्रियापदं परिवर्तयत — बालकः अन्नस्य निन्दां न कुरुते । – भवान् …………', answer:{ answerKey:'भवान् अन्नस्य निन्दां न कुरुताम्।', schoolMethod:'भवान् अन्नस्य निन्दां न कुरुताम् ।' } },
            { id:'q8b', number:'८ (ख)', isHard:false, text:'मम जीवने यशो वर्धते । – तव ……………', answer:{ answerKey:'तव जीवने यशो वर्धताम् ।', schoolMethod:'तव जीवने यशो वर्धताम् ।' } },
            { id:'q8c', number:'८ (ग)', isHard:false, text:'अहं बौद्धिकविकासाय सदा योगासनं कुर्वे । – त्वं ………', answer:{ answerKey:'त्वं बौद्धिकविकासाय सदा योगासनं कुरुष्व ।', schoolMethod:'त्वं बौद्धिकविकासाय सदा योगासनं कुरुष्व ।' } },
            { id:'q8d', number:'८ (घ)', isHard:false, text:'रमेशः सर्वदा सत्ये भाषते । – दिनेशः …………', answer:{ answerKey:'दिनेशः सदा सत्यं भाषताम् ।', schoolMethod:'दिनेशः सदा सत्यं भाषताम् ।' } },
            { id:'q8e', number:'८ (ङ)', isHard:false, text:'छात्रः लक्ष्यसिद्धये कष्टं सहते। – अहं …………', answer:{ answerKey:'अहं लक्ष्यसिद्धये कष्टं सहै ।', schoolMethod:'अहं लक्ष्यसिद्धये कष्टं सहै ।' } },
            { id:'q8f', number:'८ (च)', isHard:false, text:'साधवः सर्वदा रमन्ते । – भवन्तः ………..', answer:{ answerKey:'भवन्तः सर्वदा रमन्ताम् ।', schoolMethod:'भवन्तः सर्वदा रमन्ताम् ।' } },
            { id:'q8g', number:'८ (छ)', isHard:false, text:'भवान् योगेन आरोग्यं लभते । – अहं ………….', answer:{ answerKey:'अहं योगेन आरोग्यं लभै ।', schoolMethod:'अहं योगेन आरोग्यं लभै ।' } },
            { id:'q8h', number:'८ (ज)', isHard:false, text:'रमा सदा सत्कर्मणि यतते । – लता ……….', answer:{ answerKey:'लता सदा सत्कर्मणि यतताम् ।', schoolMethod:'लता सदा सत्कर्मणि यतताम् ।' } },
            { id:'q8i', number:'८ (झ)', isHard:false, text:'भक्तः ईश्वरं वन्दते । – त्वं …………', answer:{ answerKey:'त्वं ईश्वरं वन्दस्व ।', schoolMethod:'त्वं ईश्वरं वन्दस्व ।' } },
          ]
        },
        {
          id: 's2', title: 'पठितावबोधनम्',
          questions: [
            { id:'q1', number:'१', isHard:false, text:'अधोलिखितं गद्यांशं पठित्वा उत्तराणि लिखत — “भृगुः – अयि भोः पितः ! अभिवादयेऽहं सादरम् । भगवन्! ब्रह्मविषये मयि काचिद् जिज्ञासा वर्तते । किं तद् ब्रह्म येन सर्वं जगदिदं सञ्चाल्यते? कृपया उपदिशतु । वरुणः – पुत्र ! शुभं भूयात् । ब्रह्मज्ञानाय त्वया स्वयमेव अन्वेषणं क्रियताम्। यत्नः अभ्यासश्च क्रियेताम्। तपस्तप्यताम्। तपसैव ज्ञायते।”\n\nI. एकपदेन उत्तरत:\n१. भृगुः कस्य पुत्रः अस्ति ?\n२. कः स्वपितरम् अभिवादयति ?\n३. कस्मिन् विषये भृगोः जिज्ञासा आसीत्?\n\nII. पूर्णवाक्येन उत्तरत:\n१. ब्रह्मज्ञानं केन ज्ञायते ?\n२. सर्वं जगद् इदं केन सञ्चाल्यते ?\n\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘मयि’ इति सर्वनामपदं कस्मै प्रयुक्तम् ? (क) वरुणाय (ख) वरुणः (ग) भृगुः (घ) भृगवे\n(ii) ‘निवेदयति’ इति क्रियापदस्य कर्तृपदं किम् ? (क) वरुणस्य (ख) भृगुः (ग) पितरं (घ) तत्परः\n(iii) ‘जिज्ञासा’ इति पदस्य विशेषणपदं किम् ? (क) काचिद् (ख) मयि (ग) ब्रह्म (घ) विषये', answer:{ answerKey:'I. १. वरुणस्य २. भृगुः ३. ब्रह्मविषये\nII. १. यत्नेन, अभ्यासेन तपसा च एव ज्ञायते । २. सर्वं जगद् इदं ब्रह्मतत्त्वेन सञ्चाल्यन्ते ।\nIII. (i) (घ) भृगवे (ii) (ख) भृगुः (iii) (क) काचिद्', schoolMethod:'I. १. वरुणस्य २. भृगुः ३. ब्रह्मविषये\nII. १. यत्नेन, अभ्यासेन तपसा च एव ज्ञायते । २. सर्वं जगद् इदं ब्रह्मतत्त्वेन सञ्चाल्यन्ते ।\nIII. (i) (घ) भृगवे (ii) (ख) भृगुः (iii) (क) काचिद्' } },
            { id:'q2', number:'२', isHard:false, text:'अधोलिखितं गद्यांशं पठित्वा उत्तराणि लिखत — “भृगुः – हे पित ! बुद्धितत्त्वं विना अस्माकं बोधशक्तेः, तर्कशक्तेः, विवेकशक्तेः निर्णयशक्तेः, स्मृतिशक्तेश्च विकासो न भवति । बुद्धिरेव सारथिरूपेण अस्मान् कर्मणि प्रवर्तयति। समग्रज्ञानं बुद्धौ एव विद्यते । अत एव विज्ञानं वै ब्रह्म इति । वरुणः – पुत्र ! सत्यं भाषसे । अतः बौद्धिकविकासाय विज्ञानमयकोषस्य विकासः कर्तव्यः तदर्थं प्रतिदिनं ध्यानं योगासनं च कर्तव्यम् । किञ्च यदि ब्रह्मणः स्वरूपं वेत्तुम् इच्छति तर्हि इतोऽपि प्रयतताम्, अन्विष्यतां च।”\n\nI. एकपदेन उत्तरत:\n१. किं विना अस्माकं बोधशक्तेः विकासो न भवति ?\n२. बुद्धौ एव किं विद्यते ?\n३. भृगुः किं भाषते ?\n\nII. पूर्णवाक्येन उत्तरत:\n१. प्रतिदिनं किं कर्तव्यम् ?\n२. ब्रह्म किम् अस्ति ?\n\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘विकासः न भवति’ – इत्यत्र कर्तृपदं किम् ? (क) भवति (ख) न (ग) विकासः (घ) भवति\n(ii) ‘ज्ञातुं’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) बुद्धौ (ख) समग्रम् (ग) विद्य (घ) वेत्तुम्\n(iii) ‘अस्मान्’ इति सर्वनामपदं केभ्यः प्रयुक्तम् ? (क) भृगुः (ख) पुत्राय (ग) मनुष्येभ्यः (घ) वरुणाय', answer:{ answerKey:'I. १. बुद्धितत्त्वम् २. समग्रज्ञानम् ३. सत्यम्\nII. १. प्रतिदिनं ध्यानं कर्तव्यम् । २. विज्ञानं ब्रह्म वै ।\nIII. (i) (ग) विकासः (ii) (घ) वेत्तुम् (iii) (ग) मनुष्येभ्यः', schoolMethod:'I. १. बुद्धितत्त्वम् २. समग्रज्ञानम् ३. सत्यम्\nII. १. प्रतिदिनं ध्यानं कर्तव्यम् । २. विज्ञानं ब्रह्म वै ।\nIII. (i) (ग) विकासः (ii) (घ) वेत्तुम् (iii) (ग) मनुष्येभ्यः' } },
            { id:'q3', number:'३', isHard:false, text:'अधोलिखितं गद्यांशं पठित्वा उत्तराणि लिखत — “भृगुः – हे पितः ! अस्माकं सर्वकर्माणि आनन्दाय भवन्ति। अस्माकं कर्मणो लक्ष्यम् आनन्दप्राप्तिरेव । आनन्देन एव प्राणिनो जीवन्ति । आनन्देन रहितं जीवनं मृत्युरूपमिति । तस्मात् आनन्दो वै ब्रह्म इति । वरुणः – हे वत्स! त्वया सत्यं प्रकटितम्। अतः आनन्दप्राप्तये प्रतिदिनं ध्यानं योगासनं च कर्तव्यम् । प्राणिषु दया कर्तव्या । परोपकारः कर्तव्यः । रागः, द्वेषः, ईर्ष्या, क्रोधः, लोभः, मोहश्च हातव्याः । सर्वदा ईश्वरं सेवतां मोदतां च।”\n\nI. एकपदेन उत्तरत:\n१. अस्माकं कर्माणि कस्मै भवन्ति ?\n२. अस्माकं कर्मणः किं लक्ष्यम् ?\n३. केन प्राणिनः जीवन्ति ?\n\nII. पूर्णवाक्येन उत्तरत:\n१. ब्रह्म किम् अस्ति ?\n२. भृगुना किं प्रकटितम् ?\n\nIII. यथानिर्देशम् उत्तरत:\n(i) ‘कर्माणि आनन्दाय भवन्ति’ – इत्यत्र कर्तृपदं किम् ? (क) आनन्दाय (ख) न (ग) कर्माणि (घ) भवन्ति\n(ii) ‘त्यक्तव्याः’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) आनन्देन (ख) प्राणिनः (ग) हातव्याः (घ) योगासनं\n(iii) ‘अस्माकं’ इति सर्वनामपदं केभ्यः प्रयुक्तम् ? (क) वरुणः (ख) मानवेभ्यः (ग) वरुणाय (घ) भृगवे', answer:{ answerKey:'I. १. आनन्दाय २. आनन्दप्राप्तिः ३. आनन्देन\nII. १. आनन्दः वै ब्रह्म । २. भृगुना सत्यं प्रकटितम् ।\nIII. (i) (ग) कर्माणि (ii) (ग) हातव्याः (iii) (ख) मानवेभ्यः', schoolMethod:'I. १. आनन्दाय २. आनन्दप्राप्तिः ३. आनन्देन\nII. १. आनन्दः वै ब्रह्म । २. भृगुना सत्यं प्रकटितम् ।\nIII. (i) (ग) कर्माणि (ii) (ग) हातव्याः (iii) (ख) मानवेभ्यः' } },
            { id:'q4a', number:'२ (क)', isHard:false, text:'स्थूलपदानि आधृत्य प्रश्ननिर्माणं कुरुत — त्वया सत्यं प्रकटितम् ।', answer:{ answerKey:'त्वया किं प्रकटितम् ?', schoolMethod:'त्वया किं प्रकटितम् ? (स्थूलपदं – सत्यं)' } },
            { id:'q4b', number:'२ (ख)', isHard:false, text:'ध्यानं कर्तव्यम्।', answer:{ answerKey:'किं कर्तव्यम् ?', schoolMethod:'किं कर्तव्यम् ? (स्थूलपदं – ध्यानं)' } },
            { id:'q4c', number:'२ (ग)', isHard:false, text:'मोहः हातव्यः ।', answer:{ answerKey:'कः हातव्यः ?', schoolMethod:'कः हातव्यः ? (स्थूलपदं – मोहः)' } },
            { id:'q4d', number:'२ (घ)', isHard:false, text:'प्राणिषु दया कर्तव्या ।', answer:{ answerKey:'प्राणिषु का कर्तव्या ?', schoolMethod:'प्राणिषु का कर्तव्या ? (स्थूलपदं – दया)' } },
            { id:'q4e', number:'२ (ङ)', isHard:false, text:'आनन्देन रहितं जीवनं मृत्युरूपम्।', answer:{ answerKey:'केन रहितं जीवनं मृत्युरूपम् ?', schoolMethod:'केन रहितं जीवनं मृत्युरूपम् ? (स्थूलपदं – आनन्देन)' } },
            { id:'q5a', number:'३ (क)', isHard:false, text:'रिक्तस्थानानि पूरयत — ……… ध्यानं कर्तव्यम्', answer:{ answerKey:'प्रतिदिनम्', schoolMethod:'(क) प्रतिदिनम् ध्यानं कर्तव्यम्' } },
            { id:'q5b', number:'३ (ख)', isHard:false, text:'………. दया कर्तव्या।', answer:{ answerKey:'प्राणिषु', schoolMethod:'(ख) प्राणिषु दया कर्तव्या।' } },
            { id:'q5c', number:'३ (ग)', isHard:false, text:'……… सेवताम् ।', answer:{ answerKey:'ईश्वरम्', schoolMethod:'(ग) ईश्वरम् सेवताम् ।' } },
            { id:'q5d', number:'३ (घ)', isHard:false, text:'……….. कर्तव्यः।', answer:{ answerKey:'परोपकारः', schoolMethod:'(घ) परोपकारः कर्तव्यः।' } },
            { id:'q5e', number:'३ (ङ)', isHard:false, text:'आनन्दो वै ………..।', answer:{ answerKey:'ब्रह्म', schoolMethod:'(ङ) आनन्दो वै ब्रह्म।' } },
            { id:'q6', number:'४', isHard:false, text:'मेलनं कर्तव्यम् —\n(क) – (ख)\nसत्यम् – कर्तव्यः\nआनन्दः – कर्तव्या\nदया – ब्रह्म\nपरोपकारः – सेवताम्\nईश्वरम् – प्रकटितम्', answer:{ answerKey:'सत्यम् – प्रकटितम्\nआनन्दः – ब्रह्म\nदया – कर्तव्या\nपरोपकारः – कर्तव्यः\nईश्वरम् – सेवताम्', schoolMethod:'मेलनम् —\nसत्यम् – प्रकटितम्\nआनन्दः – ब्रह्म\nदया – कर्तव्या\nपरोपकारः – कर्तव्यः\nईश्वरम् – सेवताम्' } },
            { id:'q7', number:'५', isHard:false, text:'पर्यायवाचि-पदानां मेलनं कुरुत —\n(क) – (ख)\n१. उदीरितम् – आदरः\n२. धृतिः – कुर्यात्\n३. धीः – उक्तम्\n४. कामः – धैर्यम्\n५. भूतानि – लज्जा\n६. ह्रीः – बुद्धिः\n७. श्रद्धा – प्राणिनः\n८. कुर्वीत – इच्छा', answer:{ answerKey:'१. उदीरितम् – उक्तम्\n२. धृतिः – धैर्यम्\n३. धीः – बुद्धिः\n४. कामः – इच्छा\n५. भूतानि – प्राणिनः\n६. ह्रीः – लज्जा\n७. श्रद्धा – आदरः\n८. कुर्वीत – कुर्यात्', schoolMethod:'पर्यायमेलनम् —\n१. उदीरितम् – उक्तम्\n२. धृतिः – धैर्यम्\n३. धीः – बुद्धिः\n४. कामः – इच्छा\n५. भूतानि – प्राणिनः\n६. ह्रीः – लज्जा\n७. श्रद्धा – आदरः\n८. कुर्वीत – कुर्यात्' } },
            { id:'q8a', number:'६ (क)', isHard:false, text:'सन्धिविच्छेदं कुरुत — तपसैव', answer:{ answerKey:'तपसा + एव', schoolMethod:'तपसैव = तपसा + एव' } },
            { id:'q8b', number:'६ (ख)', isHard:false, text:'इतोऽपि', answer:{ answerKey:'इतः + अपि', schoolMethod:'इतोऽपि = इतः + अपि' } },
            { id:'q8c', number:'६ (ग)', isHard:false, text:'विचाराश्च', answer:{ answerKey:'विचाराः + च', schoolMethod:'विचाराश्च = विचाराः + च' } },
            { id:'q8d', number:'६ (घ)', isHard:false, text:'बुद्धिरेव', answer:{ answerKey:'बुद्धिः + एव', schoolMethod:'बुद्धिरेव = बुद्धिः + एव' } },
            { id:'q8e', number:'६ (ङ)', isHard:false, text:'किञ्च', answer:{ answerKey:'किम् + च', schoolMethod:'किञ्च = किम् + च' } },
            { id:'q8f', number:'६ (च)', isHard:false, text:'अत्यन्तं', answer:{ answerKey:'अति + अन्तं', schoolMethod:'अत्यन्तं = अति + अन्तं' } },
            { id:'q8g', number:'६ (छ)', isHard:false, text:'उक्तञ्च', answer:{ answerKey:'उक्तम् + च', schoolMethod:'उक्तञ्च = उक्तम् + च' } },
            { id:'q8h', number:'६ (ज)', isHard:false, text:'मोहश्च', answer:{ answerKey:'मोहः + च', schoolMethod:'मोहश्च = मोहः + च' } },
            { id:'q8i', number:'६ (झ)', isHard:false, text:'परोपकारः', answer:{ answerKey:'पर + उपकारः', schoolMethod:'परोपकारः = पर + उपकारः' } },
            { id:'q8j', number:'६ (ञ)', isHard:false, text:'अन्नेनैव', answer:{ answerKey:'अन्नेन + एव', schoolMethod:'अन्नेनैव = अन्नेन + एव' } },
            { id:'q9a', number:'७ (१)', isHard:false, text:'प्रकृतिप्रत्ययौ पृथक् कुरुत — ज्ञातम्', answer:{ answerKey:'ज्ञा + क्त', schoolMethod:'ज्ञातम् = ज्ञा + क्त' } },
            { id:'q9b', number:'७ (२)', isHard:false, text:'दृष्ट्वा', answer:{ answerKey:'दृश् + क्त्वा', schoolMethod:'दृष्ट्वा = दृश् + क्त्वा' } },
            { id:'q9c', number:'७ (३)', isHard:false, text:'रक्षणीयः', answer:{ answerKey:'रक्ष् + अनीयर्', schoolMethod:'रक्षणीयः = रक्ष् + अनीयर्' } },
            { id:'q9d', number:'७ (४)', isHard:false, text:'कर्तव्यः', answer:{ answerKey:'कृ + तव्यत्', schoolMethod:'कर्तव्यः = कृ + तव्यत्' } },
            { id:'q9e', number:'७ (५)', isHard:false, text:'हातव्याः', answer:{ answerKey:'हा + तव्यत्', schoolMethod:'हातव्याः = हा + तव्यत्' } },
            { id:'q9f', number:'७ (६)', isHard:false, text:'ज्ञातवान्', answer:{ answerKey:'ज्ञा + क्तवतु', schoolMethod:'ज्ञातवान् = ज्ञा + क्तवतु' } },
            { id:'q9g', number:'७ (७)', isHard:false, text:'वेत्तुम्', answer:{ answerKey:'विद् + तुमुन्', schoolMethod:'वेत्तुम् = विद् + तुमुन्' } },
            { id:'q9h', number:'७ (८)', isHard:false, text:'करणीयम्', answer:{ answerKey:'कृ + अनीयर्', schoolMethod:'करणीयम् = कृ + अनीयर्' } },
            { id:'q9i', number:'७ (९)', isHard:false, text:'गत्वा', answer:{ answerKey:'गम् + क्त्वा', schoolMethod:'गत्वा = गम् + क्त्वा' } },
            { id:'q9j', number:'७ (१०)', isHard:false, text:'ज्ञातुम्', answer:{ answerKey:'ज्ञा + तुमुन्', schoolMethod:'ज्ञातुम् = ज्ञा + तुमुन्' } },
          ]
        },
      ] },
      { id:'ch09', number:9,  title:'कृतं प्रतिकृतं भूयादेष धर्मः सनातनः',                 slug:'kritam-pratikritam-bhuyadesha-dharmah-sanatanah', code:'0904sk09', exercises:[
        { id:'s1', title:'अभ्यासाद् जायते सिद्धिः', questions:[
            { id:'q1a', number:'१ (क)', isHard:false, text:'एकपदेन उत्तरत — भीमस्य जननी का ?', answer:{ answerKey:'कुन्ती', schoolMethod:'भीमस्य जननी कुन्ती ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'कुन्त्या निश्चितं कः न समर्थयति ?', answer:{ answerKey:'युधिष्ठिरः', schoolMethod:'युधिष्ठिरः कुन्त्याः निश्चितं न समर्थयति ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'पाण्डवानाम् उपकर्ता कः ?', answer:{ answerKey:'विप्रः / ब्राह्मणः', schoolMethod:'पाण्डवानाम् उपकर्ता विप्रः (ब्राह्मणः) ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'कं चिन्तयन् दुर्योधनः निद्रां न लभते ?', answer:{ answerKey:'भीमम्', schoolMethod:'भीमं चिन्तयन् दुर्योधनः निद्रां न लभते ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'पाण्डवाः कुत्र निवसन्ति स्म ?', answer:{ answerKey:'एकचक्रनगरे', schoolMethod:'पाण्डवाः एकचक्रनगरे निवसन्ति स्म ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'भरतवंशप्रदीपः कः ?', answer:{ answerKey:'भीमः', schoolMethod:'भरतवंशप्रदीपः भीमः ।' } },
            { id:'q1g', number:'१ (छ)', isHard:false, text:'कः भृशं परिदेवयते ?', answer:{ answerKey:'तपस्वी / ब्राह्मणः', schoolMethod:'तपस्वी (ब्राह्मणः) भृशं परिदेवयते ।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'पूर्णवाक्येन उत्तरत — “भैक्षप्रदानेन ……” इति श्लोकानुसारं सनातनः धर्मः कः ?', answer:{ answerKey:'“भैक्षप्रदानेन …” इति श्लोकानुसारं ‘कृतं प्रतिकृतं भूयात्’ एषः सनातनः धर्मः भवति ।', schoolMethod:'“भैक्षप्रदानेन …” इति श्लोकानुसारं ‘कृतं प्रतिकृतं भूयात्’ एषः सनातनः धर्मः भवति ।' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'बकनामा दैत्यः कुत्र वसति ?', answer:{ answerKey:'बकनामा दैत्यः एकचक्रस्य पुरस्य समीपे पर्वते वसति ।', schoolMethod:'बकनामा दैत्यः एकचक्रस्य पुरस्य समीपे पर्वते वसति ।' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'कुन्ती किं प्रतिश्रुतवती ?', answer:{ answerKey:'ब्राह्मणपरिवारस्य दुःस्थितिं ज्ञात्वा कुन्ती प्रतिश्रुतवती यत् स्वपुत्रेषु एकं बकासुरस्य समीपं प्रेषयामि इति ।', schoolMethod:'ब्राह्मणपरिवारस्य दुःस्थितिं ज्ञात्वा कुन्ती प्रतिश्रुतवती यत् स्वपुत्रेषु एकं बकासुरस्य समीपं प्रेषयामि इति ।' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'भीमस्य अग्रजः कः ?', answer:{ answerKey:'भीमस्य अग्रजः युधिष्ठिरः आसीत् ।', schoolMethod:'भीमस्य अग्रजः युधिष्ठिरः आसीत् ।' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'का प्रत्यादेशं न अर्हति ?', answer:{ answerKey:'कुन्ती प्रत्यादेशं न अर्हति ।', schoolMethod:'कुन्ती प्रत्यादेशं न अर्हति ।' } },
            { id:'q2f', number:'२ (च)', isHard:false, text:'पौराः बकासुराय कथं बलिम् आहरन्ति ?', answer:{ answerKey:'पौराः बकासुराय पर्यायक्रमेण बलिम् आहरन्ति ।', schoolMethod:'पौराः बकासुराय पर्यायक्रमेण बलिम् आहरन्ति ।' } },
            { id:'q2g', number:'२ (छ)', isHard:false, text:'क्षत्रियाणां धर्मः कः ?', answer:{ answerKey:'नररक्षणं क्षत्रियाणां धर्मः अस्ति ।', schoolMethod:'नररक्षणं क्षत्रियाणां धर्मः अस्ति ।' } },
            { id:'q3', number:'३', isHard:false, text:'अधस्तात् दत्तानि वाक्यानि केन कं प्रति उक्तानि इति निर्दिशत —', answer:{ answerKey:'केन / कया – कं / कां प्रति\n१. भीमेन – युधिष्ठिरम्\n२. भीमेन – अर्जुनम्\n३. भीमेन – कुन्तीम्\n४. सहदेवेन – भीमम्\n५. युधिष्ठिरेण – कुन्तीम्\n६. बकासुरेण – भीमम्', schoolMethod:'केन / कया – कं / कां प्रति\n१. भीमेन – युधिष्ठिरम्\n२. भीमेन – अर्जुनम्\n३. भीमेन – कुन्तीम्\n४. सहदेवेन – भीमम्\n५. युधिष्ठिरेण – कुन्तीम्\n६. बकासुरेण – भीमम्' } },
            { id:'q4a', number:'४ (क)', isHard:false, text:'सन्धिं विभज्य सन्धिनाम लिखत — सम्यगनुष्ठितम्', answer:{ answerKey:'सम्यक् + अनुष्ठितम् – (व्यञ्जन सन्धिः)', schoolMethod:'सम्यक् + अनुष्ठितम् – (व्यञ्जन सन्धिः)' } },
            { id:'q4b', number:'४ (ख)', isHard:false, text:'पुरस्यादूरवर्तिनि पर्वते वसति बकनामा दैत्यः ।', answer:{ answerKey:'पुरस्य + अदूरवर्तिनि – (दीर्घ सन्धिः)', schoolMethod:'पुरस्य + अदूरवर्तिनि – (दीर्घ सन्धिः)' } },
            { id:'q4c', number:'४ (ग)', isHard:false, text:'श्रुतं तस्य दुरात्मनो वृत्तम् ।', answer:{ answerKey:'दुरात्मनः + वृत्तम् – (विसर्ग सन्धिः)', schoolMethod:'दुरात्मनः + वृत्तम् – (विसर्ग सन्धिः)' } },
            { id:'q4d', number:'४ (घ)', isHard:false, text:'भोज्यसमाहारे मानुषोऽपि तस्मै प्रेषयितव्यः।', answer:{ answerKey:'मानुषः + अपि – (विसर्ग सन्धिः)', schoolMethod:'मानुषः + अपि – (विसर्ग सन्धिः)' } },
            { id:'q4e', number:'४ (ङ)', isHard:false, text:'मातः! नास्त्यत्र किमप्यनुशोचितव्यम्।', answer:{ answerKey:'नास्ति + अत्र – (यण् सन्धिः)', schoolMethod:'नास्ति + अत्र – (यण् सन्धिः)' } },
            { id:'q4f', number:'४ (च)', isHard:false, text:'क्षत्रियाण्या यदुचितं तदनुष्ठितम्।', answer:{ answerKey:'यत् + उचितं – (व्यञ्जन सन्धिः)', schoolMethod:'यत् + उचितं – (व्यञ्जन सन्धिः)' } },
            { id:'q4g', number:'४ (छ)', isHard:false, text:'स खल्वेक पुत्रस्तपस्वी भृशं परिदेवयते ।', answer:{ answerKey:'पुत्रः + तपस्वी – (विसर्ग सन्धिः)', schoolMethod:'पुत्रः + तपस्वी – (विसर्ग सन्धिः)' } },
            { id:'q4h', number:'४ (ज)', isHard:false, text:'कथं नु त्वया सङ्कल्पितम् ।', answer:{ answerKey:'सम् + कल्पितम् – (व्यञ्जन सन्धिः)', schoolMethod:'सम् + कल्पितम् – (व्यञ्जन सन्धिः)' } },
            { id:'q4i', number:'४ (झ)', isHard:false, text:'धर्मसङ्ग्रहोऽत्र द्रष्टव्यः ।', answer:{ answerKey:'धर्मसङ्ग्रहः + अत्र – (विसर्ग सन्धिः)', schoolMethod:'धर्मसङ्ग्रहः + अत्र – (विसर्ग सन्धिः)' } },
            { id:'q4j', number:'४ (ञ)', isHard:false, text:'मानुषभोजी स राक्षस इति श्रूयते ।', answer:{ answerKey:'सः + राक्षसः – (विसर्ग सन्धिः)', schoolMethod:'सः + राक्षसः – (विसर्ग सन्धिः)' } },
            { id:'q5', number:'५', isHard:false, text:'पर्यायवाचि पदानां मेलनं कुरुत —\n(क) आयोधनम् – १. ब्राह्मणः\n(ख) विप्रः – २. जननी\n(ग) असुरः – ३. अग्निः\n(घ) अम्ब – ४. दैत्यः\n(ङ) हुताशनः – ५. युद्धम्', answer:{ answerKey:'(क) आयोधनम् – ५. युद्धम्\n(ख) विप्रः – १. ब्राह्मणः\n(ग) असुरः – ४. दैत्यः\n(घ) अम्ब – २. जननी\n(ङ) हुताशनः – ३. अग्निः', schoolMethod:'पर्यायमेलनम् —\n(क) आयोधनम् – ५. युद्धम्\n(ख) विप्रः – १. ब्राह्मणः\n(ग) असुरः – ४. दैत्यः\n(घ) अम्ब – २. जननी\n(ङ) हुताशनः – ३. अग्निः' } },
            { id:'q6a', number:'६ (क)', isHard:false, text:'विपरीतार्थकं शब्दं लिखत — उपकृतः', answer:{ answerKey:'अपकृतः', schoolMethod:'उपकृतः – अपकृतः' } },
            { id:'q6b', number:'६ (ख)', isHard:false, text:'अग्रजस्य', answer:{ answerKey:'अनुजस्य', schoolMethod:'अग्रजस्य – अनुजस्य' } },
            { id:'q6c', number:'६ (ग)', isHard:false, text:'उचितम्', answer:{ answerKey:'अनुचितम्', schoolMethod:'उचितम् – अनुचितम्' } },
            { id:'q6d', number:'६ (घ)', isHard:false, text:'हर्षः', answer:{ answerKey:'दुःख / शोकः', schoolMethod:'हर्षः – दुःख / शोकः' } },
            { id:'q7a', number:'७ (क)', isHard:false, text:'मञ्जूषातः समुचितं विशेषणपदं चित्वा लिखत — (मञ्जूषा: क्षत्रियाणी, शकटपूरं, प्रतिवेशी, खरदंष्ट्रः, जठरस्थः, कौन्तेयः, पीवरौ) — ………… मृष्टान्नम्', answer:{ answerKey:'शकटपूरं', schoolMethod:'शकटपूरं मृष्टान्नम्' } },
            { id:'q7b', number:'७ (ख)', isHard:false, text:'………… ब्राह्मणः', answer:{ answerKey:'प्रतिवेशी', schoolMethod:'प्रतिवेशी ब्राह्मणः' } },
            { id:'q7c', number:'७ (ग)', isHard:false, text:'………… मृगाधिपः', answer:{ answerKey:'खरदंष्ट्रः', schoolMethod:'खरदंष्ट्रः मृगाधिपः' } },
            { id:'q7d', number:'७ (घ)', isHard:false, text:'………… भीमः', answer:{ answerKey:'कौन्तेयः', schoolMethod:'कौन्तेयः भीमः' } },
            { id:'q7e', number:'७ (ङ)', isHard:false, text:'………… कुन्ती', answer:{ answerKey:'क्षत्रियाणी', schoolMethod:'क्षत्रियाणी कुन्ती' } },
            { id:'q7f', number:'७ (च)', isHard:false, text:'………… हुताशनः', answer:{ answerKey:'जठरस्थः', schoolMethod:'जठरस्थः हुताशनः' } },
            { id:'q8a', number:'८ (क)', isHard:false, text:'समस्तपदं लिखत — वीरस्य भुजयोः बलम् आश्रित्य वयं सुखं शेमहे ।', answer:{ answerKey:'भुजबलम्', schoolMethod:'भुजयोः बलम् – भुजबलम्' } },
            { id:'q8b', number:'८ (ख)', isHard:false, text:'भवता धर्माणां सङ्ग्रहः द्रष्टव्यः ।', answer:{ answerKey:'धर्मसङ्ग्रहः', schoolMethod:'धर्माणां सङ्ग्रहः – धर्मसङ्ग्रहः' } },
            { id:'q8c', number:'८ (ग)', isHard:false, text:'नहि मातुः आज्ञा प्रत्यादेशमर्हति ।', answer:{ answerKey:'मातुराज्ञा', schoolMethod:'मातुः आज्ञा – मातुराज्ञा' } },
            { id:'q8d', number:'८ (घ)', isHard:false, text:'धनुः धरति इति अहम् अनुगमिष्यामि ।', answer:{ answerKey:'धनुर्धरः', schoolMethod:'धनुः धरति – धनुर्धरः' } },
            { id:'q8e', number:'८ (ङ)', isHard:false, text:'नहि खरदंष्ट्रः मृगाणाम् अधिपः सहायमपेक्षते ।', answer:{ answerKey:'मृगाधिपः', schoolMethod:'मृगाणाम् अधिपः – मृगाधिपः' } },
            { id:'q8f', number:'८ (च)', isHard:false, text:'अस्य पुरस्य न दूरे वर्तते पर्वते वसति बकनामा दैत्यः।', answer:{ answerKey:'अदूरवर्तिनि', schoolMethod:'न दूरे वर्तते – अदूरवर्तिनि' } },
            { id:'q9', number:'९', isHard:false, text:'अधोलिखितवाक्यानाम् उचितभावैः सह सम्मेलनं कुरुत —\n(क) धनुर्धरोऽहमनुगमिष्यामि। – २. निराशा\n(ख) भीमस्य प्रेषणं कथं नु त्वया सङ्कल्पितम् ? – १. हासः\n(ग) अपि हस्तद्वयेन भोक्ष्यसे ? – ३. ग्लानिः\n(घ) हनिष्यामि तं दुरात्मानम्। – ४. अधिकारः\n(ङ) स खल्वेकपुत्रस्तपस्वी भृशं परिदेवयते । – ५. ओजः\n(च) मानुषापसद, परिवेषय मे भोजनम् । – ६. धैर्यम्', answer:{ answerKey:'(क) धनुर्धरोऽहमनुगमिष्यामि । – ४. अधिकारः\n(ख) भीमस्य प्रेषणं कथं नु त्वया सङ्कल्पितम् ? – ६. धैर्यम्\n(ग) अपि हस्तद्वयेन भोक्ष्यसे ? – २. निराशा\n(घ) हनिष्यामि तं दुरात्मानम् । – ५. ओजः\n(ङ) स खल्वेकपुत्रस्तपस्वी भृशं परिदेवयते । – २. निराशा\n(च) मानुषापसद, परिवेषय मे भोजनम् । – ३. ग्लानिः', schoolMethod:'भाव-मेलनम् —\n(क) धनुर्धरोऽहमनुगमिष्यामि । – ४. अधिकारः\n(ख) भीमस्य प्रेषणं कथं नु त्वया सङ्कल्पितम् ? – ६. धैर्यम्\n(ग) अपि हस्तद्वयेन भोक्ष्यसे ? – २. निराशा\n(घ) हनिष्यामि तं दुरात्मानम् । – ५. ओजः\n(ङ) स खल्वेकपुत्रस्तपस्वी भृशं परिदेवयते । – २. निराशा\n(च) मानुषापसद, परिवेषय मे भोजनम् । – ३. ग्लानिः' } },
            { id:'q10a', number:'१० (क)', isHard:false, text:'वाच्यपरिवर्तनं कुरुत — कर्मवाच्यम् से कर्तृवाच्यम् — क्षत्रियाण्या अनुष्ठितम्।', answer:{ answerKey:'क्षत्रियाण्या अनुष्ठितम्।', schoolMethod:'यथा — भवत्या प्रतिश्रुतम् → भवती प्रतिश्रुतवती ।' } },
            { id:'q10b', number:'१० (ख)', isHard:false, text:'भवत्या सज्जीक्रियताम्।', answer:{ answerKey:'भवत्या सज्जीक्रियताम् ।', schoolMethod:'भवत्या सज्जीक्रियताम् ।' } },
            { id:'q10c', number:'१० (ग)', isHard:false, text:'भवत्या उपक्षिप्तम् ।', answer:{ answerKey:'भवत्या उपक्षिप्तम्।', schoolMethod:'भवत्या उपक्षिप्तम्।' } },
            { id:'q10d', number:'१० (घ)', isHard:false, text:'त्वया सङ्कल्पितम् ।', answer:{ answerKey:'त्वया सङ्कल्पितम्।', schoolMethod:'त्वया सङ्कल्पितम्।' } },
            { id:'q10e', number:'१० (ङ)', isHard:false, text:'भवता धर्मसङ्ग्रहः द्रष्टव्यः ।', answer:{ answerKey:'भवता धर्मसङ्ग्रहः द्रष्टव्यः ।', schoolMethod:'भवता धर्मसङ्ग्रहः द्रष्टव्यः ।' } },
            { id:'q10f', number:'१० (च)', isHard:false, text:'मानुषापसद, परिवेषय मे भोजनम् ।', answer:{ answerKey:'पौरजनैः मानुषः प्रेषयितव्यः।', schoolMethod:'पौरजनैः मानुषः प्रेषयितव्यः।' } },
          ]
        },
        { id:'s2', title:'पठितावबोधनम्', questions:[
            { id:'q1a1', number:'१.१ (I.१)', isHard:false, text:'गद्यांश-१ (कुन्ती-भीमसंवादः)। एकपदेन उत्तरत — पर्वते कः वसति ?', answer:{ answerKey:'बकासुरः', schoolMethod:'पर्वते बकासुरः वसति ।' } },
            { id:'q1a2', number:'१.१ (I.२)', isHard:false, text:'कुन्ती केन सह प्रविशति ?', answer:{ answerKey:'भीमसेनेन', schoolMethod:'कुन्ती भीमसेनेन सह प्रविशति ।' } },
            { id:'q1a3', number:'१.१ (I.३)', isHard:false, text:'पौराः कस्मै बलिम् आहरन्ति ?', answer:{ answerKey:'बकासुराय', schoolMethod:'पौराः बकासुराय बलिम् आहरन्ति ।' } },
            { id:'q1a4', number:'१.१ (I.४)', isHard:false, text:'प्रभाते श्वः कस्य पर्यायः ?', answer:{ answerKey:'विप्रस्य परिवारः', schoolMethod:'प्रभाते श्वः विप्रस्य परिवारस्य पर्यायः ।' } },
            { id:'q1b1', number:'१.१ (II.१)', isHard:false, text:'पूर्णवाक्येन उत्तरत — मानुषभोजी कः ?', answer:{ answerKey:'मानुषभोजी बकः अस्ति ।', schoolMethod:'मानुषभोजी बकः अस्ति ।' } },
            { id:'q1b2', number:'१.१ (II.२)', isHard:false, text:'कुन्ती किं प्रतिश्रुतवती ?', answer:{ answerKey:'‘मत्पुत्रेषु कोऽपि प्रेषयिष्यत’ इति कुन्ती प्रतिश्रुतवती ।', schoolMethod:'‘मत्पुत्रेषु कोऽपि प्रेषयिष्यत’ इति कुन्ती प्रतिश्रुतवती ।' } },
            { id:'q1c1', number:'१.१ (III.(i))', isHard:false, text:'यथानिर्देशम् — ‘शोचति’ इति क्रियापदस्य कर्तृपदं किम् ? (क) बालकस्य (ख) पिता (ग) तस्माद् (घ) भीमः', answer:{ answerKey:'(ख) पिता', schoolMethod:'(ख) पिता' } },
            { id:'q1c2', number:'१.१ (III.(ii))', isHard:false, text:'‘नागरिका’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) पौराः (ख) पर्यायः (ग) मानुषः (घ) विप्रस्य', answer:{ answerKey:'(क) पौराः', schoolMethod:'(क) पौराः' } },
            { id:'q1c3', number:'१.१ (III.(iii))', isHard:false, text:'मानुषः अपि ‘तस्मै’…… अत्र ‘तस्मै’ सर्वनामपदं कस्मै प्रयुक्तम् ? (क) भीमाय (ख) विप्राय (ग) बकाय (घ) बालकाय', answer:{ answerKey:'(ग) बकाय', schoolMethod:'(ग) बकाय' } },
            { id:'q2a1', number:'१.२ (I.१)', isHard:false, text:'गद्यांश-२ (भीमः आयोधनम्)। एकपदेन उत्तरत — कस्य ओष्ठौ स्फुरतः ?', answer:{ answerKey:'भीमस्य', schoolMethod:'भीमस्य ओष्ठौ स्फुरतः ।' } },
            { id:'q2a2', number:'१.२ (I.२)', isHard:false, text:'आयोधनं केन सह भविष्यति ?', answer:{ answerKey:'बकासुरेण', schoolMethod:'आयोधनं बकासुरेण सह भविष्यति ।' } },
            { id:'q2a3', number:'१.२ (I.३)', isHard:false, text:'हर्षेण उत्फुल्लाक्षः कः ?', answer:{ answerKey:'भीमः', schoolMethod:'हर्षेण उत्फुल्लाक्षः भीमः ।' } },
            { id:'q2a4', number:'१.२ (I.४)', isHard:false, text:'भोजनप्रियः कः ?', answer:{ answerKey:'भीमः', schoolMethod:'भोजनप्रियः भीमः ।' } },
            { id:'q2b1', number:'१.२ (II.१)', isHard:false, text:'पूर्णवाक्येन उत्तरत — कस्य बाहू स्फुरतः ?', answer:{ answerKey:'भीमस्य बाहू स्फुरतः ।', schoolMethod:'भीमस्य बाहू स्फुरतः ।' } },
            { id:'q2b2', number:'१.२ (II.२)', isHard:false, text:'‘अपि हस्तद्वयेन भोक्ष्यसे’ इति कः कं प्रति कथयति ?', answer:{ answerKey:'‘अपि हस्तद्वयेन भोक्ष्यसे’ इति सहदेवः भीमं प्रति कथयति ।', schoolMethod:'‘अपि हस्तद्वयेन भोक्ष्यसे’ इति सहदेवः भीमं प्रति कथयति ।' } },
            { id:'q2c1', number:'१.२ (III.(i))', isHard:false, text:'यथानिर्देशम् — ‘अनुजस्य’ इत्यस्य पदस्य विलोमपदं किम् ? (क) अग्रजस्य (ख) स्फुरतः (ग) औदरिकस्य (घ) वत्सः', answer:{ answerKey:'(क) अग्रजस्य', schoolMethod:'(क) अग्रजस्य' } },
            { id:'q2c2', number:'१.२ (III.(ii))', isHard:false, text:'‘प्रभूतम् उपस्थितं मे भोजनम्’ अत्र ‘मे’ सर्वनामपदं कस्मै प्रयुक्तम् ? (क) अर्जुनाय (ख) सहदेवाय (ग) भीमाय (घ) विप्राय', answer:{ answerKey:'(ग) भीमाय', schoolMethod:'(ग) भीमाय' } },
            { id:'q2c3', number:'१.२ (III.(iii))', isHard:false, text:'‘युद्धम्’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) आयोधनम् (ख) पतितम् (ग) स्थितम् (घ) उपक्षिप्तम्', answer:{ answerKey:'(क) आयोधनम्', schoolMethod:'(क) आयोधनम्' } },
            { id:'q3a1', number:'१.३ (I.१)', isHard:false, text:'गद्यांश-३ (भीमप्रेषण-विवादः)। एकपदेन उत्तरत — धनुर्धरः कः ?', answer:{ answerKey:'अर्जुनः', schoolMethod:'धनुर्धरः अर्जुनः ।' } },
            { id:'q3a2', number:'१.३ (I.२)', isHard:false, text:'कः भृशं परिदेवयते ?', answer:{ answerKey:'तपस्वी', schoolMethod:'तपस्वी भृशं परिदेवयते ।' } },
            { id:'q3a3', number:'१.३ (I.३)', isHard:false, text:'भीमं चिन्तयन् कः निद्रां न लभते ?', answer:{ answerKey:'दुर्योधनः', schoolMethod:'भीमं चिन्तयन् दुर्योधनः निद्रां न लभते ।' } },
            { id:'q3a4', number:'१.३ (I.४)', isHard:false, text:'कुन्त्या कस्य प्रेषणं सङ्कल्पितम् ?', answer:{ answerKey:'भीमस्य', schoolMethod:'कुन्त्या भीमस्य प्रेषणं सङ्कल्पितम् ।' } },
            { id:'q3b1', number:'१.३ (II.१)', isHard:false, text:'पूर्णवाक्येन उत्तरत — कः सहायं न अपेक्षते ?', answer:{ answerKey:'खरदंष्ट्रो मृगाधिपः सहायं न अपेक्षते ।', schoolMethod:'खरदंष्ट्रो मृगाधिपः सहायं न अपेक्षते ।' } },
            { id:'q3b2', number:'१.३ (II.२)', isHard:false, text:'सः राक्षसः कीदृशः अस्ति ?', answer:{ answerKey:'सः राक्षसः बलवान् मानुषभोजी च अस्ति ।', schoolMethod:'सः राक्षसः बलवान् मानुषभोजी च अस्ति ।' } },
            { id:'q3c1', number:'१.३ (III.(i))', isHard:false, text:'यथानिर्देशम् — ‘अनुगमिष्यामि’ इति क्रियापदस्य कर्तृपदं किम् ? (क) अहम् (ख) त्वम् (ग) भीमः (घ) अर्जुनः', answer:{ answerKey:'(क) अहम्', schoolMethod:'(क) अहम्' } },
            { id:'q3c2', number:'१.३ (III.(ii))', isHard:false, text:'‘खरदंष्ट्रः’ इति पदस्य विशेष्यपदं किम् ? (क) भीमः (ख) मृगः (ग) मृगाधिपः (घ) बकः', answer:{ answerKey:'(ग) मृगाधिपः', schoolMethod:'(ग) मृगाधिपः' } },
            { id:'q3c3', number:'१.३ (III.(iii))', isHard:false, text:'‘अवज्ञा’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) मैवम् (ख) विशङ्कया (ग) प्रत्यादेशः (घ) प्रेषणम्', answer:{ answerKey:'(ग) प्रत्यादेशः', schoolMethod:'(ग) प्रत्यादेशः' } },
            { id:'q4a1', number:'१.४ (I.१)', isHard:false, text:'गद्यांश-४ (भीम-बकयुद्धम्)। एकपदेन उत्तरत — भीमसेनः कस्य हन्ता आसीत् ?', answer:{ answerKey:'हिडिम्बस्य', schoolMethod:'भीमसेनः हिडिम्बस्य हन्ता आसीत् ।' } },
            { id:'q4a2', number:'१.४ (I.२)', isHard:false, text:'बकस्य मित्रं कः ?', answer:{ answerKey:'हिडिम्बः', schoolMethod:'बकस्य मित्रं हिडिम्बः ।' } },
            { id:'q4a3', number:'१.४ (I.३)', isHard:false, text:'हतः कः पतति ?', answer:{ answerKey:'बकः', schoolMethod:'हतः बकः पतति ।' } },
            { id:'q4a4', number:'१.४ (I.४)', isHard:false, text:'हिडिम्बस्य निषूदकः कः ?', answer:{ answerKey:'भीमः', schoolMethod:'हिडिम्बस्य निषूदकः भीमः ।' } },
            { id:'q4b1', number:'१.४ (II.१)', isHard:false, text:'पूर्णवाक्येन उत्तरत — भीमः केषां रक्षकः अस्ति ?', answer:{ answerKey:'भीमः साधुलोकानां रक्षकः अस्ति।', schoolMethod:'भीमः साधुलोकानां रक्षकः अस्ति।' } },
            { id:'q4b2', number:'१.४ (II.२)', isHard:false, text:'मल्लयुद्धं कयोः मध्ये प्रवर्तते ?', answer:{ answerKey:'भीमस्य बकस्य च मध्ये मल्लयुद्धं प्रवर्तते।', schoolMethod:'भीमस्य बकस्य च मध्ये मल्लयुद्धं प्रवर्तते।' } },
            { id:'q4c1', number:'१.४ (III.(i))', isHard:false, text:'यथानिर्देशम् — ‘मित्र’ इति पदस्य विलोमपदं किम् ? (क) रिपुः (ख) वाचाटः (ग) डिम्भः (घ) वत्सः', answer:{ answerKey:'(क) रिपुः', schoolMethod:'(क) रिपुः' } },
            { id:'q4c2', number:'१.४ (III.(ii))', isHard:false, text:'‘प्रलापकः’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) मुष्टिः (ख) दर्पम् (ग) भागधेयम् (घ) वाचाटः', answer:{ answerKey:'(घ) वाचाटः', schoolMethod:'(घ) वाचाटः' } },
            { id:'q4c3', number:'१.४ (III.(iii))', isHard:false, text:'‘श्लाघनीयोऽसि मे रिपुः’ अत्र ‘मे’ सर्वनामपदं कस्मै प्रयुक्तम् ? (क) भीमाय (ख) बकाय (ग) भीमसेनाय (घ) बकासुराय', answer:{ answerKey:'(ख) बकाय', schoolMethod:'(ख) बकाय' } },
            { id:'q5a', number:'२ (क)', isHard:false, text:'स्थूलाक्षरपदानि आश्रित्य प्रश्ननिर्माणं कुरुत — बालकस्य पिता शोचति ।', answer:{ answerKey:'कस्य पिता शोचति ?', schoolMethod:'कस्य पिता शोचति ? (स्थूलपदम् – बालकस्य)' } },
            { id:'q5b', number:'२ (ख)', isHard:false, text:'पाण्डवानां माता कुन्ती रोदनकारणं पृच्छति ।', answer:{ answerKey:'केषां माता कुन्ती रोदनकारणं पृच्छति ?', schoolMethod:'केषां माता कुन्ती रोदनकारणं पृच्छति ? (स्थूलपदम् – पाण्डवानाम्)' } },
            { id:'q5c', number:'२ (ग)', isHard:false, text:'नगरवासी स्वेच्छया असुरस्य भक्ष्यं भवेत् ।', answer:{ answerKey:'कः स्वेच्छया असुरस्य भक्ष्यं भवेत् ?', schoolMethod:'कः स्वेच्छया असुरस्य भक्ष्यं भवेत् ? (स्थूलपदम् – नगरवासी)' } },
            { id:'q5d', number:'२ (घ)', isHard:false, text:'पाण्डवाः एकचक्रनगरे निवसन्ति ।', answer:{ answerKey:'पाण्डवाः कुत्र निवसन्ति ?', schoolMethod:'पाण्डवाः कुत्र निवसन्ति ? (स्थूलपदम् – एकचक्रनगरे)' } },
            { id:'q5e', number:'२ (ङ)', isHard:false, text:'कुन्ती भीमसेनेन सह प्रविशति ।', answer:{ answerKey:'कुन्ती केन सह प्रविशति ?', schoolMethod:'कुन्ती केन सह प्रविशति ? (स्थूलपदम् – भीमसेनेन)' } },
            { id:'q5f', number:'२ (च)', isHard:false, text:'श्वः प्रभाते विप्रस्य पर्यायः अस्ति ।', answer:{ answerKey:'कदा विप्रस्य पर्यायः अस्ति ?', schoolMethod:'कदा विप्रस्य पर्यायः अस्ति ? (स्थूलपदम् – श्वः प्रभाते)' } },
            { id:'q5g', number:'२ (छ)', isHard:false, text:'सः राक्षसः मानुषभोजी श्रूयते ।', answer:{ answerKey:'सः राक्षसः कीदृशः श्रूयते ?', schoolMethod:'सः राक्षसः कीदृशः श्रूयते ? (स्थूलपदम् – मानुषभोजी)' } },
            { id:'q5h', number:'२ (ज)', isHard:false, text:'पौराः बकाय पर्यायक्रमेण बलिम् आहरन्ति ।', answer:{ answerKey:'के बकाय पर्यायक्रमेण बलिम् आहरन्ति ?', schoolMethod:'के बकाय पर्यायक्रमेण बलिम् आहरन्ति ? (स्थूलपदम् – पौराः)' } },
            { id:'q5i', number:'२ (झ)', isHard:false, text:'युधिष्ठिरादयः प्रविशन्ति ।', answer:{ answerKey:'के प्रविशन्ति ?', schoolMethod:'के प्रविशन्ति ? (स्थूलपदम् – युधिष्ठिरादयः)' } },
            { id:'q5j', number:'२ (ञ)', isHard:false, text:'श्रोत्रियः प्रतिवेशी प्रत्युपकारम् अर्हति ।', answer:{ answerKey:'कीदृशः प्रतिवेशी प्रत्युपकारम् अर्हति ?', schoolMethod:'कीदृशः प्रतिवेशी प्रत्युपकारम् अर्हति ? (स्थूलपदम् – श्रोत्रियः)' } },
            { id:'q6a', number:'३ (क)', isHard:false, text:'अन्वयः मञ्जूषायाः सहायतया कुरुत — भैक्षप्रदानेन चिरं परैरुपकृता वयम् । कृतं प्रतिकृतं भूयादेष धर्मः सनातनः ॥ (अन्वयः – वयं …(i)… परैः भैक्षप्रदानेन ……(ii)……। कृतं ……(iii)…… भूयात्, एषः ……(iv)…… धर्मः ।)', answer:{ answerKey:'(i) चिरं\n(ii) उपकृता\n(iii) प्रतिकृतम्\n(iv) सनातनः', schoolMethod:'अन्वयः — वयं चिरं परैः भैक्षप्रदानेन उपकृता । कृतं प्रतिकृतं भूयात्, एषः सनातनः धर्मः ।' } },
            { id:'q6b', number:'३ (ख)', isHard:false, text:'इमौ हि पीवरौ बाहू सहायौ सहजी मम। बकं विध्वंसयिष्यामि सिंहः क्षुद्रमृगं यथा ॥ (अन्वयः – हि इमौ …(i)… बाहू मम सहायौ ……(ii)……। विध्वंसयिष्यामि ……(iii)…… सिंहः क्षुद्रमृगं …..(iv)…।)', answer:{ answerKey:'(i) पीवरौ\n(ii) सहजी\n(iii) बकम्\n(iv) यथा', schoolMethod:'अन्वयः — हि इमौ पीवरौ बाहू मम सहायौ सहजी । विध्वंसयिष्यामि बकं सिंहः क्षुद्रमृगं यथा ।' } },
            { id:'q6c', number:'३ (ग)', isHard:false, text:'रक्षिता साधुलोकानां वरिष्ठो बाहुशालिनाम्। निषूदको हिडिम्बस्य मृत्युश्चास्मि भवादृशाम् ॥ (अन्वयः – साधुलोकानां ……(i)… बाहुशालिनां ………(ii)…… हिडिम्बस्य ……(iii)…… भवादृशां च ……(iv)…… अस्मि ।)', answer:{ answerKey:'(i) रक्षिता\n(ii) वरिष्ठः\n(iii) निषूदकः\n(iv) मृत्युः', schoolMethod:'अन्वयः — साधुलोकानां रक्षिता, बाहुशालिनां वरिष्ठः, हिडिम्बस्य निषूदकः, भवादृशां च मृत्युः अस्मि ।' } },
            { id:'q7a', number:'४ (क)', isHard:false, text:'सन्धिविच्छेदं कुरुत — ममैव', answer:{ answerKey:'मम + एव', schoolMethod:'ममैव = मम + एव' } },
            { id:'q7b', number:'४ (ख)', isHard:false, text:'कौन्तेयोऽस्मि', answer:{ answerKey:'कौन्तेयः + अस्मि', schoolMethod:'कौन्तेयोऽस्मि = कौन्तेयः + अस्मि' } },
            { id:'q7c', number:'४ (ग)', isHard:false, text:'किञ्चित्', answer:{ answerKey:'किम् + चित्', schoolMethod:'किञ्चित् = किम् + चित्' } },
            { id:'q7d', number:'४ (घ)', isHard:false, text:'सम्यगनुष्ठितम्', answer:{ answerKey:'सम्यक् + अनुष्ठितम्', schoolMethod:'सम्यगनुष्ठितम् = सम्यक् + अनुष्ठितम्' } },
            { id:'q7e', number:'४ (ङ)', isHard:false, text:'भवत्यस्य', answer:{ answerKey:'भवति + अस्य', schoolMethod:'भवत्यस्य = भवति + अस्य' } },
            { id:'q7f', number:'४ (च)', isHard:false, text:'कोऽपि', answer:{ answerKey:'कः + अपि', schoolMethod:'कोऽपि = कः + अपि' } },
            { id:'q7g', number:'४ (छ)', isHard:false, text:'तस्यैव', answer:{ answerKey:'तस्य + एव', schoolMethod:'तस्यैव = तस्य + एव' } },
            { id:'q7h', number:'४ (ज)', isHard:false, text:'प्रत्युपकारः', answer:{ answerKey:'प्रति + उपकारः', schoolMethod:'प्रत्युपकारः = प्रति + उपकारः' } },
            { id:'q7i', number:'४ (झ)', isHard:false, text:'प्रेषयामीति', answer:{ answerKey:'प्रेषयामि + इति', schoolMethod:'प्रेषयामीति = प्रेषयामि + इति' } },
            { id:'q7j', number:'४ (ञ)', isHard:false, text:'चेति', answer:{ answerKey:'च + इति', schoolMethod:'चेति = च + इति' } },
            { id:'q8a', number:'५ (क)', isHard:false, text:'कर्तृपदं क्रियापदं च चिनुत — भीमः प्रस्थितः', answer:{ answerKey:'कर्तृपदम् – भीमः, क्रियापदम् – प्रस्थितः', schoolMethod:'कर्तृपदम् – भीमः, क्रियापदम् – प्रस्थितः' } },
            { id:'q8b', number:'५ (ख)', isHard:false, text:'बकः पतति', answer:{ answerKey:'कर्तृपदम् – बकः, क्रियापदम् – पतति', schoolMethod:'कर्तृपदम् – बकः, क्रियापदम् – पतति' } },
            { id:'q8c', number:'५ (ग)', isHard:false, text:'दुर्योधनः निद्रां न लभते', answer:{ answerKey:'कर्तृपदम् – दुर्योधनः, क्रियापदम् – लभते', schoolMethod:'कर्तृपदम् – दुर्योधनः, क्रियापदम् – लभते' } },
            { id:'q8d', number:'५ (घ)', isHard:false, text:'कुन्ती प्रविशति', answer:{ answerKey:'कर्तृपदम् – कुन्ती, क्रियापदम् – प्रविशति', schoolMethod:'कर्तृपदम् – कुन्ती, क्रियापदम् – प्रविशति' } },
            { id:'q8e', number:'५ (ङ)', isHard:false, text:'पौराः बलिम् आहरन्ति', answer:{ answerKey:'कर्तृपदम् – पौराः, क्रियापदम् – आहरन्ति', schoolMethod:'कर्तृपदम् – पौराः, क्रियापदम् – आहरन्ति' } },
            { id:'q8f', number:'५ (च)', isHard:false, text:'कुन्ती प्रतिश्रुतवती', answer:{ answerKey:'कर्तृपदम् – कुन्ती, क्रियापदम् – कृतवती', schoolMethod:'कर्तृपदम् – कुन्ती, क्रियापदम् – कृतवती' } },
            { id:'q9a', number:'६ (क)', isHard:false, text:'विशेषण-विशेष्यं च चिनुत — प्रसिद्धौ ग्रन्थौ', answer:{ answerKey:'विशेषणम् – प्रसिद्धौ, विशेष्यम् – ग्रन्थौ', schoolMethod:'विशेषणम् – प्रसिद्धौ, विशेष्यम् – ग्रन्थौ' } },
            { id:'q9b', number:'६ (ख)', isHard:false, text:'बहवः ग्रन्थाः', answer:{ answerKey:'विशेषणम् – बहवः, विशेष्यम् – ग्रन्थाः', schoolMethod:'विशेषणम् – बहवः, विशेष्यम् – ग्रन्थाः' } },
            { id:'q9c', number:'६ (ग)', isHard:false, text:'शोकाकुलेन परिवारेण', answer:{ answerKey:'विशेषणम् – शोकाकुलेन, विशेष्यम् – परिवारेण', schoolMethod:'विशेषणम् – शोकाकुलेन, विशेष्यम् – परिवारेण' } },
            { id:'q9d', number:'६ (घ)', isHard:false, text:'मानुषभोजी राक्षसः', answer:{ answerKey:'विशेषणम् – मानुषभोजी, विशेष्यम् – राक्षसः', schoolMethod:'विशेषणम् – मानुषभोजी, विशेष्यम् – राक्षसः' } },
            { id:'q9e', number:'६ (ङ)', isHard:false, text:'धनुर्धरः अहम्', answer:{ answerKey:'विशेषणम् – धनुर्धरः, विशेष्यम् – अहम्', schoolMethod:'विशेषणम् – धनुर्धरः, विशेष्यम् – अहम्' } },
            { id:'q9f', number:'६ (च)', isHard:false, text:'राक्षसध्वंसी भीमः', answer:{ answerKey:'विशेषणम् – राक्षसध्वंसी, विशेष्यम् – भीमः', schoolMethod:'विशेषणम् – राक्षसध्वंसी, विशेष्यम् – भीमः' } },
            { id:'q10', number:'७', isHard:false, text:'पर्यायवाचि पदानां मेलनं कुरुत —\n(क) स्वादिष्टम् अन्नम् – १. भोजनप्रियः\n(ख) आकर्णय – २. नागरिकाः\n(ग) पीवरौ – ३. मृष्टान्नम्\n(घ) निषूदकः – ४. अवज्ञा\n(ङ) अभिहितम् – ५. विनाशकः\n(च) परिदेवयते – ६. प्रतिज्ञातम्\n(छ) पौराः – ७. विलपति\n(ज) औदरिकः – ८. स्थूलौ\n(झ) प्रतिश्रुतम् – ९. शृणु\n(ञ) प्रत्यादेशम् – १०. उक्तम्', answer:{ answerKey:'(क) स्वादिष्टम् अन्नम् – ३. मृष्टान्नम्\n(ख) आकर्णय – ९. शृणु\n(ग) पीवरौ – ८. स्थूलौ\n(घ) निषूदकः – ५. विनाशकः\n(ङ) अभिहितम् – १०. उक्तम्\n(च) परिदेवयते – ७. विलपति\n(छ) पौराः – २. नागरिकाः\n(ज) औदरिकः – १. भोजनप्रियः\n(झ) प्रतिश्रुतम् – ६. प्रतिज्ञातम्\n(ञ) प्रत्यादेशम् – ४. अवज्ञा', schoolMethod:'पर्यायमेलनम् —\n(क) स्वादिष्टम् अन्नम् – मृष्टान्नम्\n(ख) आकर्णय – शृणु\n(ग) पीवरौ – स्थूलौ\n(घ) निषूदकः – विनाशकः\n(ङ) अभिहितम् – उक्तम्\n(च) परिदेवयते – विलपति\n(छ) पौराः – नागरिकाः\n(ज) औदरिकः – भोजनप्रियः\n(झ) प्रतिश्रुतम् – प्रतिज्ञातम्\n(ञ) प्रत्यादेशम् – अवज्ञा' } },
            { id:'q11', number:'८', isHard:false, text:'अधोलिखितानि वाक्यानि कथाक्रमानुसारं पुनः लिखत —\n(क) मृष्टान्न-भाण्डसहितः बकासुरस्य समीपं गन्तुम् उद्युक्तः भवति।\n(ख) स्वपुत्रेषु एकं बकासुरस्य समीपं प्रेषयामि इति कुन्ती प्रतिज्ञां कृतवती।\n(ग) पाण्डवाः एकचक्रनगरे कस्यचित् ब्राह्मणस्य गृहे निवसन्ति ।\n(घ) सन्धिनियमानुसारं प्रतिदिनं कश्चित् नगरवासी स्वेच्छया असुरस्य भक्ष्यं भवेत्।\n(ङ) गृहस्वामिनः गृहे रोदनध्वनिं श्रुत्वा तत्र गता पाण्डवानां माता कुन्ती रोदनकारणं पृच्छति।\n(च) तद्दिने पर्यायेण तस्यैव ब्राह्मणपरिवारस्य बलिदानस्य वारः आसीत्।\n(छ) ततः शोकाकुलेन परिवारेण सा ज्ञापिता ।\n(ज) यत् एकचक्रनगरवासिनां नातिदूरस्थितेन बकनामा असुरेण सह सन्धिः अस्ति ।', answer:{ answerKey:'(ग) पाण्डवाः एकचक्रनगरे कस्यचित् ब्राह्मणस्य गृहे निवसन्ति ।\n(ङ) गृहस्वामिनः गृहे रोदनध्वनिं श्रुत्वा तत्र गता पाण्डवानां माता कुन्ती रोदनकारणं पृच्छति ।\n(छ) ततः शोकाकुलेन परिवारेण सा ज्ञापिता ।\n(ज) यत् एकचक्रनगरवासिनां नातिदूरस्थितेन बकनामा असुरेण सह सन्धिः अस्ति ।\n(घ) सन्धिनियमानुसारं प्रतिदिनं कश्चित् नगरवासी स्वेच्छया असुरस्य भक्ष्यं भवेत् ।\n(च) तद्दिने पर्यायेण तस्यैव ब्राह्मणपरिवारस्य बलिदानस्य वारः आसीत् ।\n(ख) स्वपुत्रेषु एकं बकासुरस्य समीपं प्रेषयामि इति कुन्ती प्रतिज्ञां कृतवती ।\n(क) मृष्टान्न-भाण्डसहितः बकासुरस्य समीपं गन्तुम् उद्युक्तः भवति।', schoolMethod:'कथाक्रमः —\n(ग) पाण्डवाः एकचक्रनगरे कस्यचित् ब्राह्मणस्य गृहे निवसन्ति ।\n(ङ) गृहस्वामिनः गृहे रोदनध्वनिं श्रुत्वा तत्र गता पाण्डवानां माता कुन्ती रोदनकारणं पृच्छति ।\n(छ) ततः शोकाकुलेन परिवारेण सा ज्ञापिता ।\n(ज) यत् एकचक्रनगरवासिनां नातिदूरस्थितेन बकनामा असुरेण सह सन्धिः अस्ति ।\n(घ) सन्धिनियमानुसारं प्रतिदिनं कश्चित् नगरवासी स्वेच्छया असुरस्य भक्ष्यं भवेत् ।\n(च) तद्दिने पर्यायेण तस्यैव ब्राह्मणपरिवारस्य बलिदानस्य वारः आसीत् ।\n(ख) स्वपुत्रेषु एकं बकासुरस्य समीपं प्रेषयामि इति कुन्ती प्रतिज्ञां कृतवती ।\n(क) मृष्टान्न-भाण्डसहितः बकासुरस्य समीपं गन्तुम् उद्युक्तः भवति।' } },
          ]
        },
      ] },
      { id:'ch10', number:10, title:'णमो अरिहन्ताणम्',                                   slug:'namo-arhantanam',                          code:'0904sk10', exercises:[
        { id:'s1', title:'अभ्यासाद् जायते सिद्धिः', questions:[
            { id:'q1a', number:'१ (क)', isHard:false, text:'एकपदेन उत्तरं लिखत — ऋषभेण निर्मितस्य नगरस्य नाम किम् ?', answer:{ answerKey:'विनिता', schoolMethod:'ऋषभेण निर्मितस्य नगरस्य नाम विनिता ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'ऋषभस्य प्रसिद्धे द्वे कन्ये के ?', answer:{ answerKey:'ब्राह्मी सुन्दरी च', schoolMethod:'ऋषभस्य प्रसिद्धे द्वे कन्ये ब्राह्मी सुन्दरी च ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'कस्यां लिप्यां नैकानि शास्त्राणि लिपिबद्धानि ?', answer:{ answerKey:'ब्राह्मीलिप्याम्', schoolMethod:'ब्राह्मीलिप्यां नैकानि शास्त्राणि लिपिबद्धानि ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'विनिता नामकं राज्यं ऋषभः कस्मै समर्पितवान् ?', answer:{ answerKey:'भरताय', schoolMethod:'विनिता नामकं राज्यं ऋषभः भरताय समर्पितवान् ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'ऋषभः बाहुबलिने किं राज्यं प्रदत्तवान् ?', answer:{ answerKey:'तक्षशिला', schoolMethod:'ऋषभः बाहुबलिने तक्षशिलां राज्यं प्रदत्तवान् ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'प्रजाः भिक्षायां कानि वस्तूनि यच्छन्ति स्म ?', answer:{ answerKey:'आभरणानि अनर्घवस्तूनि च', schoolMethod:'प्रजाः भिक्षायां आभरणानि अनर्घवस्तूनि च यच्छन्ति स्म ।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'पूर्णवाक्येन उत्तरत — देशे काः समस्याः सन्ति इति ऋषभदेवस्य कल्पना प्राप्ता ?', answer:{ answerKey:'जनानाम् आलस्यं, कृषिकार्ये न्यूनता, प्रजासु उत्पादनक्षमतायाः अभावः च इति एतादृश्याः अनेकाः समस्याः सन्ति इति ऋषभदेवस्य कल्पना प्राप्ता।', schoolMethod:'जनानाम् आलस्यं, कृषिकार्ये न्यूनता, प्रजासु उत्पादनक्षमतायाः अभावः च इति एतादृश्याः अनेकाः समस्याः सन्ति इति ऋषभदेवस्य कल्पना प्राप्ता।' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'महाराजः केषु कार्येषु प्रजाः प्रशिक्षितवान् ?', answer:{ answerKey:'महाराजः कृषिकार्यं, विविधपदार्थैः भोजननिर्माणं, तन्तुभिः वस्त्रनिर्माणं, गवाम् अश्वादीनां पशूनां पालनं इत्यादि जीवनकौशलानि, काष्ठैः धातुभिः, शिलाभिः च गृहोपयोगिनां वस्तूनां निर्माणं, पात्रनिर्माणं, गृहनिर्माणं, नगरनिर्माणादिकं च प्रजाः प्रशिक्षितवान् ।', schoolMethod:'महाराजः कृषिकार्यं, विविधपदार्थैः भोजननिर्माणं, तन्तुभिः वस्त्रनिर्माणं, गवाम् अश्वादीनां पशूनां पालनं इत्यादि जीवनकौशलानि, काष्ठैः धातुभिः, शिलाभिः च गृहोपयोगिनां वस्तूनां निर्माणं, पात्रनिर्माणं, गृहनिर्माणं, नगरनिर्माणादिकं च प्रजाः प्रशिक्षितवान् ।' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'ऋषभदेवस्य जीवनपरिवर्तिनी घटना का आसीत् ?', answer:{ answerKey:'एकदा राजप्रासादे नृत्यकलां प्रदर्शयन्ती नर्तकी सहसा मरणं प्राप्तवती । अनया घटनया ऋषभदेवस्य मनः विक्षुब्धम् अभवत्। एषा घटना तस्य जीवनपरिवर्तिनी घटना आसीत्।', schoolMethod:'एकदा राजप्रासादे नृत्यकलां प्रदर्शयन्ती नर्तकी सहसा मरणं प्राप्तवती । अनया घटनया ऋषभदेवस्य मनः विक्षुब्धम् अभवत्। एषा घटना तस्य जीवनपरिवर्तिनी घटना आसीत्।' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'ऋषभदेवस्य दीर्घकालिकस्य उपवासस्य समाप्तिः कथम् अभवत् ?', answer:{ answerKey:'ऋषभदेवस्य प्रपौत्रः श्रेयांसः ऋषभदेवाय पानार्थम् इक्षुरसं दत्तवान् । अनेन ऋषभदेवस्य दीर्घकालिकस्य उपवासस्य समाप्तिः अभवत्।', schoolMethod:'ऋषभदेवस्य प्रपौत्रः श्रेयांसः ऋषभदेवाय पानार्थम् इक्षुरसं दत्तवान् । अनेन ऋषभदेवस्य दीर्घकालिकस्य उपवासस्य समाप्तिः अभवत्।' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'ऋषभदेवः कदा कुत्र च केवलज्ञानं प्राप्तवान् ?', answer:{ answerKey:'ऋषभदेवः फाल्गुनमासस्य कृष्णपक्षे एकादश्यां तिथौ प्रयागराजे अक्षयवटवृक्षस्य अधः केवलज्ञानं प्राप्तवान्।', schoolMethod:'ऋषभदेवः फाल्गुनमासस्य कृष्णपक्षे एकादश्यां तिथौ प्रयागराजे अक्षयवटवृक्षस्य अधः केवलज्ञानं प्राप्तवान्।' } },
            { id:'q2f', number:'२ (च)', isHard:false, text:'जनानां मार्गदर्शनार्थं कं क्रमं रचितवान् ?', answer:{ answerKey:'ऋषभदेवः जनानां मार्गदर्शनार्थं भिक्षुः भिक्षुणी श्रावकः श्राविका च इति क्रमं रचितवान्।', schoolMethod:'ऋषभदेवः जनानां मार्गदर्शनार्थं भिक्षुः भिक्षुणी श्रावकः श्राविका च इति क्रमं रचितवान्।' } },
            { id:'q3', number:'३', isHard:false, text:'समस्तपदानि लिखत —\n(क) महान् च असौ राजा च\n(ख) प्रजानां सुखम्\n(ग) मूलाः समस्याः\n(घ) भोजनस्य निर्माणम्\n(ङ) आर्थिकी स्थितिः\n(च) प्राप्तः आनन्दः येन सः\n(छ) विधिना लिखितम्\n(ज) गृहं गृहं प्रति\n(झ) ब्राह्मीनामा लिपिः', answer:{ answerKey:'(क) महाराजः\n(ग) मूलसमस्याः\n(ख) प्रजासुखम्\n(घ) भोजननिर्माणम्\n(ङ) आर्थिकस्थितिः\n(च) प्राप्तानन्दः\n(छ) विधिलिखितम्\n(ज) प्रतिगृहम्\n(झ) ब्राह्मीलिपिः', schoolMethod:'समस्तपदानि —\n(क) महाराजः\n(ख) प्रजासुखम्\n(ग) मूलसमस्याः\n(घ) भोजननिर्माणम्\n(ङ) आर्थिकस्थितिः\n(च) प्राप्तानन्दः\n(छ) विधिलिखितम्\n(ज) प्रतिगृहम्\n(झ) ब्राह्मीलिपिः' } },
            { id:'q4a', number:'४ (क)', isHard:false, text:'वाक्यानि उदाहरणानुसारं परिवर्तयत — यथा— जनैः स्वयमेव निर्माणकार्यम् आरब्धम्। जनाः स्वयमेव निर्माणकार्यम् आरब्धवन्तः। — महाराजेन राज्यं समर्पितम् ।', answer:{ answerKey:'महाराजः राज्यं समर्पितवान्।', schoolMethod:'महाराजः राज्यं समर्पितवान्।' } },
            { id:'q4b', number:'४ (ख)', isHard:false, text:'केनापि तत् न चिन्तितम् ।', answer:{ answerKey:'कश्चित् अपि तत् न चिन्तितवान् ।', schoolMethod:'कश्चित् अपि तत् न चिन्तितवान् ।' } },
            { id:'q4c', number:'४ (ग)', isHard:false, text:'ऋषभदेवेन दीर्घकालिकः उपवासः कृतः ।', answer:{ answerKey:'ऋषभदेवः दीर्घकालिकः उपवासः कृतवान्।', schoolMethod:'ऋषभदेवः दीर्घकालिकः उपवासः कृतवान्।' } },
            { id:'q4d', number:'४ (घ)', isHard:false, text:'जनैः जीवनपद्धतिः परिवर्तिता।', answer:{ answerKey:'जनाः जीवनपद्धतिं परिवर्तितवन्तः ।', schoolMethod:'जनाः जीवनपद्धतिं परिवर्तितवन्तः ।' } },
            { id:'q4e', number:'४ (ङ)', isHard:false, text:'ऋषभेण योजना कृता ।', answer:{ answerKey:'ऋषभः योजनाः कृतवान्।', schoolMethod:'ऋषभः योजनाः कृतवान्।' } },
            { id:'q5a', number:'५ (क)', isHard:false, text:'सन्धिं कुरुत — इति + अतः', answer:{ answerKey:'इत्यतः', schoolMethod:'इति + अतः = इत्यतः' } },
            { id:'q5b', number:'५ (ख)', isHard:false, text:'च + इति', answer:{ answerKey:'चेति', schoolMethod:'च + इति = चेति' } },
            { id:'q5c', number:'५ (ग)', isHard:false, text:'देवस्य + अपि', answer:{ answerKey:'देवस्यापि', schoolMethod:'देवस्य + अपि = देवस्यापि' } },
            { id:'q5d', number:'५ (घ)', isHard:false, text:'तथा + एव', answer:{ answerKey:'तथैव', schoolMethod:'तथा + एव = तथैव' } },
            { id:'q5e', number:'५ (ङ)', isHard:false, text:'इति + एतादृशाः', answer:{ answerKey:'इत्येतादृशाः', schoolMethod:'इति + एतादृशाः = इत्येतादृशाः' } },
            { id:'q5f', number:'५ (च)', isHard:false, text:'ब्राह्मीद्वारा + एव', answer:{ answerKey:'ब्राह्मीद्वारैव', schoolMethod:'ब्राह्मीद्वारा + एव = ब्राह्मीद्वारैव' } },
            { id:'q5g', number:'५ (छ)', isHard:false, text:'प्रस्थितः + अयम्', answer:{ answerKey:'प्रस्थितोऽयम्', schoolMethod:'प्रस्थितः + अयम् = प्रस्थितोऽयम्' } },
          ]
        },
        { id:'s2', title:'पठितावबोधनम्', questions:[
            { id:'q1a1', number:'१.१ (I.१)', isHard:false, text:'गद्यांश-१ (नाभिमहाराजः)। एकपदेन उत्तरत — राज्ञः पत्नी कीदृशी आसीत् ?', answer:{ answerKey:'बुद्धिमती करुणाशालिनी च', schoolMethod:'राज्ञः पत्नी बुद्धिमती करुणाशालिनी च आसीत् ।' } },
            { id:'q1a2', number:'१.१ (I.२)', isHard:false, text:'कः राजनीतौ युद्धतन्त्रे प्रशासनादिषु च समर्थः आसीत् ?', answer:{ answerKey:'नाभिः महाराजः', schoolMethod:'नाभिः महाराजः राजनीतौ युद्धतन्त्रे प्रशासनादिषु च समर्थः आसीत् ।' } },
            { id:'q1a3', number:'१.१ (I.३)', isHard:false, text:'नाभिः कस्मै राज्यभारं समर्पयितुम् अचिन्तयत् ?', answer:{ answerKey:'ऋषभाय / राजकुमाराय', schoolMethod:'नाभिः ऋषभाय राज्यभारं समर्पयितुम् अचिन्तयत् ।' } },
            { id:'q1a4', number:'१.१ (I.४)', isHard:false, text:'समाजे काः समस्याः समुदभवन् ?', answer:{ answerKey:'दुर्भिक्षादयः', schoolMethod:'समाजे दुर्भिक्षादयः समस्याः समुदभवन् ।' } },
            { id:'q1b1', number:'१.१ (II.१)', isHard:false, text:'पूर्णवाक्येन उत्तरत — ऋषभः कीदृशः आसीत् ?', answer:{ answerKey:'ऋषभः सर्वगुणसम्पन्नः, अधीतविद्यः, राजनीतिज्ञः च आसीत्।', schoolMethod:'ऋषभः सर्वगुणसम्पन्नः, अधीतविद्यः, राजनीतिज्ञः च आसीत्।' } },
            { id:'q1b2', number:'१.१ (II.२)', isHard:false, text:'ऋषभः यदा राजा अभवत् तदा सः किं चिन्तनं कृतवान् ?', answer:{ answerKey:'ऋषभः यदा राजा अभवत् तदा सः समाजस्य समस्यानां समाधानोपायाः के इत्यादिषु विषयेषु चिन्तनं कृतवान्।', schoolMethod:'ऋषभः यदा राजा अभवत् तदा सः समाजस्य समस्यानां समाधानोपायाः के इत्यादिषु विषयेषु चिन्तनं कृतवान्।' } },
            { id:'q1c1', number:'१.१ (III.(i))', isHard:false, text:'यथानिर्देशम् — ‘समर्पितवान्’ इति क्रियापदस्य कर्तृपदं किम् ? (क) कालः (ख) नाभिः (ग) ऋषभस्य (घ) राज्यम्', answer:{ answerKey:'(ख) नाभिः', schoolMethod:'(ख) नाभिः' } },
            { id:'q1c2', number:'१.१ (III.(ii))', isHard:false, text:'‘दृष्ट्वा’ इत्यर्थे किं पदं प्रयुक्तम् ? (क) वीक्ष्य (ख) आदौ (ग) कुतः (घ) तयोः', answer:{ answerKey:'(क) वीक्ष्य', schoolMethod:'(क) वीक्ष्य' } },
            { id:'q1c3', number:'१.१ (III.(iii))', isHard:false, text:'‘अन्ते’ इत्यस्य पदस्य विलोमपदं किम् ? (क) आसीत् (ख) आदौ (ग) अयं (घ) अथ', answer:{ answerKey:'(ख) आदौ', schoolMethod:'(ख) आदौ' } },
            { id:'q2a1', number:'१.२ (I.१)', isHard:false, text:'गद्यांश-२ (ऋषभस्य दक्षशासनम्)। एकपदेन उत्तरत — के विश्वप्रसिद्धाः आसन् ?', answer:{ answerKey:'महाराजस्य पुत्राः', schoolMethod:'महाराजस्य पुत्राः विश्वप्रसिद्धाः आसन् ।' } },
            { id:'q2a2', number:'१.२ (I.२)', isHard:false, text:'कः जनानां न्यायिकव्यवस्थां सुदृढां कृतवान् ?', answer:{ answerKey:'ऋषभः', schoolMethod:'ऋषभः जनानां न्यायिकव्यवस्थां सुदृढां कृतवान् ।' } },
            { id:'q2a3', number:'१.२ (I.३)', isHard:false, text:'कौ सुविख्यातौ आस्ताम् ?', answer:{ answerKey:'भरतः बाहुबलिः च', schoolMethod:'भरतः बाहुबलिः च सुविख्यातौ आस्ताम् ।' } },
            { id:'q2a4', number:'१.२ (I.४)', isHard:false, text:'ब्राह्मी सुन्दरी च कस्मिन् प्रवीणे आस्ताम् ?', answer:{ answerKey:'गणितादिषु शास्त्रेषु', schoolMethod:'ब्राह्मी सुन्दरी च गणितादिषु शास्त्रेषु प्रवीणे आस्ताम् ।' } },
            { id:'q2b1', number:'१.२ (II.१)', isHard:false, text:'पूर्णवाक्येन उत्तरत — प्रजाः प्रेम्णा किमर्थं ‘राजा ऋषभदेवः’ इति कथयन्ति स्म ?', answer:{ answerKey:'समाजस्य उत्कर्षेण ऋषभः जनानां मनस्सु सुप्रतिष्ठितं स्थानं प्राप्तवान्। अतः प्रजाः तं प्रेम्णा ‘राजा ऋषभदेवः’ इति कथयन्ति स्म।', schoolMethod:'समाजस्य उत्कर्षेण ऋषभः जनानां मनस्सु सुप्रतिष्ठितं स्थानं प्राप्तवान्। अतः प्रजाः तं प्रेम्णा ‘राजा ऋषभदेवः’ इति कथयन्ति स्म।' } },
            { id:'q2b2', number:'१.२ (II.२)', isHard:false, text:'ऋषभदेवः साम्राज्यस्य विस्तारं कथं कृतवान् ?', answer:{ answerKey:'ऋषभदेवः साम्राज्यस्य विस्तारं समाजस्य उत्कर्षेण सह कृतवान्।', schoolMethod:'ऋषभदेवः साम्राज्यस्य विस्तारं समाजस्य उत्कर्षेण सह कृतवान्।' } },
            { id:'q2c1', number:'१.२ (III.(i))', isHard:false, text:'यथानिर्देशम् — ‘आस्ताम्’ इति क्रियापदस्य कर्तृपदं किम् ? (क) प्रवीणे (ख) प्रसिद्धे (ग) द्वे कन्ये (घ) शास्त्रेषु', answer:{ answerKey:'(ग) द्वे कन्ये', schoolMethod:'(ग) द्वे कन्ये' } },
            { id:'q2c2', number:'१.२ (III.(ii))', isHard:false, text:'‘सः जनानां मनस्सु ……’ अत्र ‘सः’ इति सर्वनामपदं कस्मै प्रयुक्तम् ? (क) भरताय (ख) जनाय (ग) ऋषभाय (घ) राज्याय', answer:{ answerKey:'(ग) ऋषभाय', schoolMethod:'(ग) ऋषभाय' } },
            { id:'q2c3', number:'१.२ (III.(iii))', isHard:false, text:'‘विकासेन’ इत्यस्य पदस्य समानार्थकं पदं किम् ? (क) कौशलेन (ख) उत्कर्षेण (ग) शासनेन (घ) बलेन', answer:{ answerKey:'(ख) उत्कर्षेण', schoolMethod:'(ख) उत्कर्षेण' } },
            { id:'q3a1', number:'१.३ (I.१)', isHard:false, text:'गद्यांश-३ (वैराग्यम्)। एकपदेन उत्तरत — नर्तकी सहसा कुत्र पतित्वा मृता ?', answer:{ answerKey:'भूमौ', schoolMethod:'नर्तकी सहसा भूमौ पतित्वा मृता ।' } },
            { id:'q3a2', number:'१.३ (I.२)', isHard:false, text:'इह संसारे कीदृशं सुखं नास्ति ?', answer:{ answerKey:'स्थायि', schoolMethod:'इह संसारे स्थायि सुखं नास्ति ।' } },
            { id:'q3a3', number:'१.३ (I.३)', isHard:false, text:'ऋषभदेवः कुत्र नृत्यकलाप्रदर्शनम् आयोजितवान् ?', answer:{ answerKey:'राजप्रासादे', schoolMethod:'ऋषभदेवः राजप्रासादे नृत्यकलाप्रदर्शनम् आयोजितवान् ।' } },
            { id:'q3a4', number:'१.३ (I.४)', isHard:false, text:'कः स्वस्य विशालं साम्राज्यं विभक्तवान् ?', answer:{ answerKey:'ऋषभदेवः', schoolMethod:'ऋषभदेवः स्वस्य विशालं साम्राज्यं विभक्तवान् ।' } },
            { id:'q3b1', number:'१.३ (II.१)', isHard:false, text:'पूर्णवाक्येन उत्तरत — किं कृत्वा अयं महामुनिः जीवनस्य परमसत्यम् अन्वेष्टुं प्रस्थितः ?', answer:{ answerKey:'स्वस्य विशालं साम्राज्यं स्वपुत्रेषु विभज्य विशेषतया ‘विनिता’ राज्यं भरताय तक्षशिलां बाहुबलिने च समर्प्य जीवनस्य परमं सत्यम् अन्वेष्टुम् अयं महामुनिः प्रस्थितः ।', schoolMethod:'स्वस्य विशालं साम्राज्यं स्वपुत्रेषु विभज्य विशेषतया ‘विनिता’ राज्यं भरताय तक्षशिलां बाहुबलिने च समर्प्य जीवनस्य परमं सत्यम् अन्वेष्टुम् अयं महामुनिः प्रस्थितः ।' } },
            { id:'q3b2', number:'१.३ (II.२)', isHard:false, text:'किं विचिन्त्य ऋषभः सर्वमपि परित्यज्य भिक्षुरूपेण प्रस्थितवान् ?', answer:{ answerKey:'इह संसारे किमपि शाश्वतं नास्ति, इदं सुखं स्थायि नास्ति इति विचिन्त्य स्थिरसुखस्य प्राप्त्यर्थं सः सर्वमपि परित्यज्य भिक्षुरूपेण प्रस्थितवान्।', schoolMethod:'इह संसारे किमपि शाश्वतं नास्ति, इदं सुखं स्थायि नास्ति इति विचिन्त्य स्थिरसुखस्य प्राप्त्यर्थं सः सर्वमपि परित्यज्य भिक्षुरूपेण प्रस्थितवान्।' } },
            { id:'q3c1', number:'१.३ (III.(i))', isHard:false, text:'यथानिर्देशम् — ‘प्रश्नाः’ इति विशेष्यपदस्य विशेषणपदं किम् ? (क) अनेके (ख) अनेकाः (ग) आगता (घ) इत्यादयः', answer:{ answerKey:'(क) अनेके', schoolMethod:'(क) अनेके' } },
            { id:'q3c2', number:'१.३ (III.(ii))', isHard:false, text:'‘तस्य बुद्धौ’ अत्र ‘तस्य’ इति सर्वनामपदं कस्मै प्रयुक्तम् ? (क) ऋषभदेवः (ख) ऋषभदेवाय (ग) ऋषभदेवेन (घ) ऋषभदेवस्य', answer:{ answerKey:'(ख) ऋषभदेवाय', schoolMethod:'(ख) ऋषभदेवाय' } },
            { id:'q3c3', number:'१.३ (III.(iii))', isHard:false, text:'‘मृता’ इति क्रियापदस्य कर्तृपदं किम् ? (क) काचित् (ख) कथं (ग) आरोग्यवती (घ) स्त्री', answer:{ answerKey:'(घ) स्त्री', schoolMethod:'(घ) स्त्री' } },
            { id:'q4a1', number:'१.४ (I.१)', isHard:false, text:'गद्यांश-४ (भिक्षाचर्या)। एकपदेन उत्तरत — ऋषभदेवः केषाम् अभावे चतुःशतं दिनानि उपवासं कृतवान् ?', answer:{ answerKey:'भोज्यपदार्थानाम्', schoolMethod:'ऋषभदेवः भोज्यपदार्थानाम् अभावे चतुःशतं दिनानि उपवासं कृतवान् ।' } },
            { id:'q4a2', number:'१.४ (I.२)', isHard:false, text:'प्रजाः भिक्षायां कानि वस्तूनि यच्छन्ति स्म ?', answer:{ answerKey:'आभरणानि अनर्घवस्तूनि', schoolMethod:'प्रजाः भिक्षायां आभरणानि अनर्घवस्तूनि यच्छन्ति स्म ।' } },
            { id:'q4a3', number:'१.४ (I.३)', isHard:false, text:'मौनेन प्रतिगृहं गत्वा सः किम् आरब्धवान् ?', answer:{ answerKey:'भिक्षायाचनम्', schoolMethod:'मौनेन प्रतिगृहं गत्वा सः भिक्षायाचनम् आरब्धवान् ।' } },
            { id:'q4a4', number:'१.४ (I.४)', isHard:false, text:'के अपि तस्य आचरणेन प्रभाविताः सन्तः भिक्षार्थं गताः ?', answer:{ answerKey:'अनुयायिनः', schoolMethod:'अनुयायिनः अपि तस्य आचरणेन प्रभाविताः सन्तः भिक्षार्थं गताः ।' } },
            { id:'q4b1', number:'१.४ (II.१)', isHard:false, text:'पूर्णवाक्येन उत्तरत — ऋषभदेवः किमर्थं भिक्षार्थं प्रस्थितः ?', answer:{ answerKey:'जैनसन्यासिनः वृक्षेभ्यः फलानि शाकानि वा न चिनुयुः इति बोधनार्थं स्वयं भिक्षार्थं प्रस्थितः ।', schoolMethod:'जैनसन्यासिनः वृक्षेभ्यः फलानि शाकानि वा न चिनुयुः इति बोधनार्थं स्वयं भिक्षार्थं प्रस्थितः ।' } },
            { id:'q4b2', number:'१.४ (II.२)', isHard:false, text:'केनापि किं न चिन्तितम् ?', answer:{ answerKey:'‘भिक्षायां भोजनपदार्थः देयः’ इति केनापि न चिन्तितम् ।', schoolMethod:'‘भिक्षायां भोजनपदार्थः देयः’ इति केनापि न चिन्तितम् ।' } },
            { id:'q4c1', number:'१.४ (III.(i))', isHard:false, text:'यथानिर्देशम् — ‘कृतवान्’ इति क्रियापदस्य कर्तृपदं किम् ? (क) उपवासम् (ख) दिनानि (ग) ऋषभदेवः (घ) चतुःशतम्', answer:{ answerKey:'(ग) ऋषभदेवः', schoolMethod:'(ग) ऋषभदेवः' } },
            { id:'q4c2', number:'१.४ (III.(ii))', isHard:false, text:'‘याच्ञायै’ इति पदस्य समानार्थकपदं किम् ? (क) भिक्षार्थम् (ख) भिक्षायाम् (ग) भिक्षा (घ) भिक्षायाचनम्', answer:{ answerKey:'(क) भिक्षार्थम्', schoolMethod:'(क) भिक्षार्थम्' } },
            { id:'q4c3', number:'१.४ (III.(iii))', isHard:false, text:'‘तेषां प्रियं महाराजं ………’ अत्र ‘तेषां’ इति सर्वनामपदं केभ्यः प्रयुक्तम् ? (क) जनाः (ख) जनस्य (ग) जनेभ्यः (घ) जनाय', answer:{ answerKey:'(ग) जनेभ्यः', schoolMethod:'(ग) जनेभ्यः' } },
            { id:'q4c4', number:'१.४ (III.(iv))', isHard:false, text:'‘अनर्घम्’ इति पदस्य विलोमपदं किम् ? (क) मूल्यहीनम् (ख) बहुमूल्यम् (ग) अमूल्यम् (घ) अर्धम्', answer:{ answerKey:'(क) मूल्यहीनम्', schoolMethod:'(क) मूल्यहीनम्' } },
            { id:'q5a', number:'२ (क)', isHard:false, text:'स्थूलाक्षरपदानि आश्रित्य प्रश्ननिर्माणं कुरुत — महाराजः राजनीतौ समर्थः आसीत्।', answer:{ answerKey:'महाराजः कस्यां समर्थः आसीत् ?', schoolMethod:'महाराजः कस्यां समर्थः आसीत् ? (स्थूलपदम् – राजनीतौ)' } },
            { id:'q5b', number:'२ (ख)', isHard:false, text:'मरुदेवी बुद्धिमती आसीत् ।', answer:{ answerKey:'मरुदेवी कीदृशी आसीत् ?', schoolMethod:'मरुदेवी कीदृशी आसीत् ? (स्थूलपदम् – बुद्धिमती)' } },
            { id:'q5c', number:'२ (ग)', isHard:false, text:'समाजे दुर्भिक्षादयः समस्याः समुदभवन्।', answer:{ answerKey:'कुत्र दुर्भिक्षादयः समस्याः समुदभवन् ?', schoolMethod:'कुत्र दुर्भिक्षादयः समस्याः समुदभवन् ? (स्थूलपदम् – समाजे)' } },
            { id:'q5d', number:'२ (घ)', isHard:false, text:'नृपः मूलसमस्यानां परिष्काराय विविधाः योजनाः रचितवान्।', answer:{ answerKey:'नृपः केषां परिष्काराय विविधाः योजनाः रचितवान् ?', schoolMethod:'नृपः केषां परिष्काराय विविधाः योजनाः रचितवान् ? (स्थूलपदम् – मूलसमस्यानाम्)' } },
            { id:'q5e', number:'२ (ङ)', isHard:false, text:'प्रजासुखे राज्ञः सुखं भवति ।', answer:{ answerKey:'प्रजासुखे कस्य सुखं भवति ?', schoolMethod:'प्रजासुखे कस्य सुखं भवति ? (स्थूलपदम् – राज्ञः)' } },
            { id:'q5f', number:'२ (च)', isHard:false, text:'प्रजानां हिते राज्ञः हितं भवति ।', answer:{ answerKey:'केषां हिते राज्ञः हितं भवति ?', schoolMethod:'केषां हिते राज्ञः हितं भवति ? (स्थूलपदम् – प्रजानाम्)' } },
            { id:'q5g', number:'२ (छ)', isHard:false, text:'ब्राह्मीलिप्यां शिलालेखाः उपलभ्यन्ते।', answer:{ answerKey:'ब्राह्मीलिप्यां के उपलभ्यन्ते ?', schoolMethod:'ब्राह्मीलिप्यां के उपलभ्यन्ते ? (स्थूलपदम् – शिलालेखाः)' } },
            { id:'q5h', number:'२ (ज)', isHard:false, text:'ऋषभदेवः अरण्येषु मौनेन ध्यानं करोति स्म ।', answer:{ answerKey:'ऋषभदेवः अरण्येषु मौनेन किं करोति स्म ?', schoolMethod:'ऋषभदेवः अरण्येषु मौनेन किं करोति स्म ? (स्थूलपदम् – ध्यानम्)' } },
            { id:'q5i', number:'२ (झ)', isHard:false, text:'अनुयायिनः निराहारं स्थातुं कष्टम् अनुभवन्ति स्म ।', answer:{ answerKey:'के निराहारं स्थातुं कष्टम् अनुभवन्ति स्म ?', schoolMethod:'के निराहारं स्थातुं कष्टम् अनुभवन्ति स्म ? (स्थूलपदम् – अनुयायिनः)' } },
            { id:'q5j', number:'२ (ञ)', isHard:false, text:'ऋषभदेवः जीवने परमसुखी आसीत्।', answer:{ answerKey:'ऋषभदेवः जीवने कीदृशः आसीत् ?', schoolMethod:'ऋषभदेवः जीवने कीदृशः आसीत् ? (स्थूलपदम् – परमसुखी)' } },
            { id:'q6a', number:'३ (क)', isHard:false, text:'अन्वयं कुरुत — प्रजासुखे सुखं राज्ञः प्रजानां च हिते हितम्। नात्मप्रियं हितं राज्ञः प्रजानां तु प्रियं हितम् ॥ (अन्वयः – प्रजासुखे …(i)… सुखं, प्रजानां च …(ii)… हितं। राज्ञः …(iii)… हितं न, प्रजानां तु हितं …(iv)…।)', answer:{ answerKey:'(i) राज्ञः\n(ii) हिते\n(iii) आत्मप्रियम्\n(iv) प्रियम्', schoolMethod:'अन्वयः — प्रजासुखे राज्ञः सुखं, प्रजानां च हिते हितं । राज्ञः आत्मप्रियं हितं न, प्रजानां तु हितं प्रियम् ।' } },
            { id:'q6b', number:'३ (ख)', isHard:false, text:'दैवाधीनं जगत्सर्वं जन्मकर्मशुभावहम्। संयोगश्च वियोगश्च न च दैवात्परं बलम् ॥ (अन्वयः – सर्वं जगत् …(i)… जन्म कर्म …(ii)…। संयोगः …(iii)… वियोगः च दैवात् …(iv)… बलं न।)', answer:{ answerKey:'(i) दैवाधीनम्\n(ii) शुभावहम्\n(iii) च\n(iv) परम्', schoolMethod:'अन्वयः — सर्वं जगत् दैवाधीनं, जन्म कर्म शुभावहम् । संयोगः च वियोगः च दैवात् परं बलं न ।' } },
            { id:'q7', number:'४', isHard:false, text:'पर्यायवाचि पदानां मेलनं कुरुत —\n(क) – (ख)\n१. विद्वेषः – १. वने\n२. पत्नी – २. वैरम्\n३. विक्षुब्धम् – ३. लोके\n४. सुभिक्षम् – ४. विचलितम्\n५. शाश्वतम् – ५. समृद्धिम्\n६. लोकः – ६. निवारणाय\n७. परिहृताः – ७. भार्या\n८. परिष्काराय – ८. नित्यम्\n९. अरण्ये – ९. निवारिताः\n१०. आरम्भे – १०. आदौ', answer:{ answerKey:'१. विद्वेषः – २. वैरम्\n२. पत्नी – ७. भार्या\n३. विक्षुब्धम् – ४. विचलितम्\n४. सुभिक्षम् – ५. समृद्धिम्\n५. शाश्वतम् – ८. नित्यम्\n६. लोकः – ३. लोके\n७. परिहृताः – ९. निवारिताः\n८. परिष्काराय – ६. निवारणाय\n९. अरण्ये – १. वने\n१०. आरम्भे – १०. आदौ', schoolMethod:'पर्यायमेलनम् —\n१. विद्वेषः – वैरम्\n२. पत्नी – भार्या\n३. विक्षुब्धम् – विचलितम्\n४. सुभिक्षम् – समृद्धिम्\n५. शाश्वतम् – नित्यम्\n६. लोकः – लोके\n७. परिहृताः – निवारिताः\n८. परिष्काराय – निवारणाय\n९. अरण्ये – वने\n१०. आरम्भे – आदौ' } },
            { id:'q8', number:'५', isHard:false, text:'मञ्जूषातः उचितं पदं चित्वा विपरीतार्थकं पदं लिखत —\n१. मूल्यहीनम्\n२. दुर्भिक्षम्\n३. ऊर्ध्वम्\n४. स्तेयम्\n५. निरपेक्षम्\n६. अपावनः\n७. शुक्लपक्षे\n८. वाचालेन\n९. गता\n१०. अपयशः', answer:{ answerKey:'१. अनघम्\n२. दुर्भिक्षम् (सुभिक्षम्)\n३. अधः\n४. अस्तेयम्\n५. सापेक्षम्\n६. पावनः\n७. कृष्णपक्षे\n८. मौनेन\n९. आगता\n१०. यशः', schoolMethod:'विपरीतार्थकम् —\n१. मूल्यहीनम् – अनघम्\n२. दुर्भिक्षम् – सुभिक्षम्\n३. ऊर्ध्वम् – अधः\n४. स्तेयम् – अस्तेयम्\n५. निरपेक्षम् – सापेक्षम्\n६. अपावनः – पावनः\n७. शुक्लपक्षे – कृष्णपक्षे\n८. वाचालेन – मौनेन\n९. गता – आगता\n१०. अपयशः – यशः' } },
            { id:'q9', number:'६', isHard:false, text:'समस्तपदानि लिखत —\n(क) प्रजानां प्रियः\n(ख) कृषेः कार्यम्\n(ग) प्रजानां हितम्\n(घ) पात्राणां निर्माणम्\n(ङ) नृत्यकलायाः प्रदर्शनम्\n(च) आहारस्य अभावः\n(छ) प्रमुखाः सिद्धान्ताः', answer:{ answerKey:'(क) प्रजाप्रियः\n(ख) कृषिकार्यम्\n(ग) प्रजाहितम्\n(घ) पात्रनिर्माणम्\n(ङ) नृत्यकलायाः प्रदर्शनम्\n(च) निराहारः\n(छ) प्रमुखसिद्धान्ताः', schoolMethod:'समस्तपदानि —\n(क) प्रजाप्रियः\n(ख) कृषिकार्यम्\n(ग) प्रजाहितम्\n(घ) पात्रनिर्माणम्\n(ङ) नृत्यकलायाः प्रदर्शनम्\n(च) निराहारः\n(छ) प्रमुखसिद्धान्ताः' } },
            { id:'q10a', number:'७ (क)', isHard:false, text:'सन्धिं कुरुत — इति + आदयः', answer:{ answerKey:'इत्यादयः', schoolMethod:'इति + आदयः = इत्यादयः' } },
            { id:'q10b', number:'७ (ख)', isHard:false, text:'वसुधा + एव', answer:{ answerKey:'वसुधैव', schoolMethod:'वसुधा + एव = वसुधैव' } },
            { id:'q10c', number:'७ (ग)', isHard:false, text:'संयोगः + च', answer:{ answerKey:'संयोगश्च', schoolMethod:'संयोगः + च = संयोगश्च' } },
            { id:'q10d', number:'७ (घ)', isHard:false, text:'समाधान + उपायाः', answer:{ answerKey:'समाधानोपायाः', schoolMethod:'समाधान + उपायाः = समाधानोपायाः' } },
            { id:'q10e', number:'७ (ङ)', isHard:false, text:'राजनीतिज्ञः + च', answer:{ answerKey:'राजनीतिज्ञश्च', schoolMethod:'राजनीतिज्ञः + च = राजनीतिज्ञश्च' } },
            { id:'q10f', number:'७ (च)', isHard:false, text:'अथ + एकदा', answer:{ answerKey:'अथैकदा', schoolMethod:'अथ + एकदा = अथैकदा' } },
            { id:'q10g', number:'७ (छ)', isHard:false, text:'तत् + च', answer:{ answerKey:'तच्च', schoolMethod:'तत् + च = तच्च' } },
            { id:'q10h', number:'७ (ज)', isHard:false, text:'तस्य + एव', answer:{ answerKey:'तस्यैव', schoolMethod:'तस्य + एव = तस्यैव' } },
            { id:'q11', number:'८', isHard:false, text:'अधोलिखितं कथांशं उचितक्रमेण लिखत —\n१. सः श्रेयांसः प्रपितामहाय पानार्थम् इक्षुरसं दत्तवान् ।\n२. तच्च इक्षुक्षेत्रं तस्यैव प्रपौत्रस्य श्रेयांसस्य आसीत्।\n३. एकदा पर्यटनावसरे सः हस्तिनापुरस्य समीपे स्थिरस्य इक्षुक्षेत्रस्य पार्श्वमार्गात् गच्छति स्म।\n४. तच्च वैशाखमासस्य अक्षयतृतीया-दिनम् आसीत्।\n५. अनेन ऋषभदेवस्य दीर्घकालिकः उपवासः समाप्तः ।\n६. अत्र त्रयोदशमासानां वैकल्पिकदिनेषु उपवासं कुर्वन्ति।\n७. अन्ते अक्षयतृतीयादिने इक्षुरसेन उपवासस्य समापनं कुर्वन्ति ।\n८. जैनसम्प्रदाये वर्षतपपारणामहोत्सवः अधुनापि गुजराते पदलिप्तपुरम् (पालीताणा) उत्तरप्रदेशे हस्तिनापुरं चेत्यादिषु पवित्रतीर्थेषु आचर्यते ।', answer:{ answerKey:'१. एकदा पर्यटनावसरे सः हस्तिनापुरस्य समीपे स्थिरस्य इक्षुक्षेत्रस्य पार्श्वमार्गात् गच्छति स्म।\n२. तच्च इक्षुक्षेत्रं तस्यैव प्रपौत्रस्य श्रेयांसस्य आसीत्।\n३. सः श्रेयांसः प्रपितामहाय पानार्थम् इक्षुरसं दत्तवान्।\n४. अनेन ऋषभदेवस्य दीर्घकालिकः उपवासः समाप्तः ।\n५. तच्च वैशाखमासस्य अक्षयतृतीया-दिनम् आसीत्।\n६. जैनसम्प्रदाये वर्षतपपारणामहोत्सवः अधुनापि गुजराते पदलिप्तपुरम् (पालीताणा) उत्तरप्रदेशे हस्तिनापुरं चेत्यादिषु पवित्रतीर्थेषु आचर्यते।\n७. अत्र त्रयोदशमासानां वैकल्पिकदिनेषु उपवासं कुर्वन्ति।\n८. अन्ते अक्षयतृतीयादिने इक्षुरसेन उपवासस्य समापनं कुर्वन्ति ।', schoolMethod:'कथाक्रमः —\n१. एकदा पर्यटनावसरे सः हस्तिनापुरस्य समीपे स्थिरस्य इक्षुक्षेत्रस्य पार्श्वमार्गात् गच्छति स्म।\n२. तच्च इक्षुक्षेत्रं तस्यैव प्रपौत्रस्य श्रेयांसस्य आसीत्।\n३. सः श्रेयांसः प्रपितामहाय पानार्थम् इक्षुरसं दत्तवान्।\n४. अनेन ऋषभदेवस्य दीर्घकालिकः उपवासः समाप्तः ।\n५. तच्च वैशाखमासस्य अक्षयतृतीया-दिनम् आसीत्।\n६. जैनसम्प्रदाये वर्षतपपारणामहोत्सवः अधुनापि गुजराते पदलिप्तपुरम् (पालीताणा) उत्तरप्रदेशे हस्तिनापुरं चेत्यादिषु पवित्रतीर्थेषु आचर्यते।\n७. अत्र त्रयोदशमासानां वैकल्पिकदिनेषु उपवासं कुर्वन्ति।\n८. अन्ते अक्षयतृतीयादिने इक्षुरसेन उपवासस्य समापनं कुर्वन्ति ।' } },
          ]
        },
      ] },
      { id:'ch11', number:11, title:'वर्णोच्चारण-शिक्षा २',                               slug:'varnoccarana-siksha-2',                    code:'0904sk11', exercises:[
        { id:'s1', title:'अभ्यासाद् जायते सिद्धिः', questions:[
            { id:'q1a', number:'१ (क)', isHard:false, text:'एकपदेन उत्तरत — वर्णानाम् उत्पत्त्यर्थं कति आवश्यकानि तत्त्वानि भवन्ति ?', answer:{ answerKey:'पञ्च', schoolMethod:'वर्णानाम् उत्पत्त्यर्थं पञ्च आवश्यकानि तत्त्वानि भवन्ति ।' } },
            { id:'q1b', number:'१ (ख)', isHard:false, text:'कति स्थानानि सन्ति ?', answer:{ answerKey:'अष्टौ', schoolMethod:'अष्टौ स्थानानि सन्ति ।' } },
            { id:'q1c', number:'१ (ग)', isHard:false, text:'आभ्यन्तर-प्रयत्नः कतिविधः ?', answer:{ answerKey:'पञ्चविधः', schoolMethod:'आभ्यन्तर-प्रयत्नः पञ्चविधः ।' } },
            { id:'q1d', number:'१ (घ)', isHard:false, text:'करणं यदा स्थानं स्पष्ट-रूपेण स्पृशति, तदा करणस्य कः प्रयत्नः भवति ?', answer:{ answerKey:'स्पृष्ट-प्रयत्नः', schoolMethod:'करणं यदा स्थानं स्पष्ट-रूपेण स्पृशति तदा करणस्य स्पृष्ट-प्रयत्नः भवति ।' } },
            { id:'q1e', number:'१ (ङ)', isHard:false, text:'अ-वर्णस्य कति उपभेदाः सन्ति ?', answer:{ answerKey:'अष्टादश', schoolMethod:'अ-वर्णस्य अष्टादश उपभेदाः सन्ति ।' } },
            { id:'q1f', number:'१ (च)', isHard:false, text:'संवृत-प्रयत्नः कुत्र भवति ?', answer:{ answerKey:'ह्रस्वस्य ‘अ’ वर्ण-प्रयोगे', schoolMethod:'संवृत-प्रयत्नः ह्रस्वस्य ‘अ’ वर्ण-प्रयोगे भवति ।' } },
            { id:'q2a', number:'२ (क)', isHard:false, text:'पूर्णवाक्येन उत्तरत — आभ्यन्तर-प्रयत्नः कः उच्यते ?', answer:{ answerKey:'वर्णोच्चारणात् पूर्वं मुखस्य अन्तरे यः प्रयत्नः क्रियते, सः आभ्यन्तर-प्रयत्नः उच्यते।', schoolMethod:'वर्णोच्चारणात् पूर्वं मुखस्य अन्तरे यः प्रयत्नः क्रियते, सः आभ्यन्तर-प्रयत्नः उच्यते।' } },
            { id:'q2b', number:'२ (ख)', isHard:false, text:'ईषत्स्पृष्ट-प्रयत्नः कदा भवति ?', answer:{ answerKey:'यदा जिह्वा उच्चारणस्थानं किञ्चित् एव स्पृशति, तदा ईषत्स्पृष्ट-प्रयत्नः भवति।', schoolMethod:'यदा जिह्वा उच्चारणस्थानं किञ्चित् एव स्पृशति, तदा ईषत्स्पृष्ट-प्रयत्नः भवति।' } },
            { id:'q2c', number:'२ (ग)', isHard:false, text:'करणस्य विवृत-प्रयत्नेन के स्वराः उच्चार्यन्ते ?', answer:{ answerKey:'करणस्य विवृत-प्रयत्नेन सर्वे स्वराः उच्चार्यन्ते।', schoolMethod:'करणस्य विवृत-प्रयत्नेन सर्वे स्वराः उच्चार्यन्ते।' } },
            { id:'q2d', number:'२ (घ)', isHard:false, text:'आभ्यन्तर-प्रयत्नाः कुत्र दृश्यन्ते ?', answer:{ answerKey:'आभ्यन्तर-प्रयत्नाः वर्णानाम् उत्पत्तिकाले मुखस्य अन्तरे दृश्यन्ते।', schoolMethod:'आभ्यन्तर-प्रयत्नाः वर्णानाम् उत्पत्तिकाले मुखस्य अन्तरे दृश्यन्ते।' } },
            { id:'q2e', number:'२ (ङ)', isHard:false, text:'आभ्यन्तर-प्रयत्ने स्वरेषु विशिष्टः स्वरः कः अस्ति ?', answer:{ answerKey:'आभ्यन्तर-प्रयत्ने स्वरेषु ह्रस्वः ‘अ’ विशिष्टः स्वरः अस्ति।', schoolMethod:'आभ्यन्तर-प्रयत्ने स्वरेषु ह्रस्वः ‘अ’ विशिष्टः स्वरः अस्ति।' } },
            { id:'q4a', number:'४ (क)', isHard:false, text:'आम् / न इति सन्दर्भानुसारं लिखत — ‘ई’ वर्णः सन्ध्यक्षरम् अस्ति', answer:{ answerKey:'न।', schoolMethod:'न। (‘ई’ दीर्घ स्वर है, सन्ध्यक्षर ‘ए, ऐ, ओ, औ’ होते हैं।)' } },
            { id:'q4b', number:'४ (ख)', isHard:false, text:'‘ऐ’ वर्णः सन्ध्यक्षरम् अस्ति ।', answer:{ answerKey:'आम्।', schoolMethod:'आम्। (सन्ध्यक्षर ‘ए, ऐ, ओ, औ’ हैं।)' } },
            { id:'q4c', number:'४ (ग)', isHard:false, text:'‘झ’ वर्णः स्पर्शः अस्ति ।', answer:{ answerKey:'आम्।', schoolMethod:'आम्। (च-वर्ग का वर्ण होने के कारण यह स्पर्श व्यंजन है।)' } },
            { id:'q4d', number:'४ (घ)', isHard:false, text:'‘र’ वर्णः स्पर्शेषु परिगण्यते ।', answer:{ answerKey:'न।', schoolMethod:'न। (‘र’ अन्तस्थ व्यंजन है।)' } },
            { id:'q4e', number:'४ (ङ)', isHard:false, text:'‘य, र, ल, व’ वर्णाः ऊष्माणः सन्ति ।', answer:{ answerKey:'न।', schoolMethod:'न। (ये अन्तस्थ वर्ण हैं); श, ष, स, ह ऊष्म वर्ण होते हैं।' } },
            { id:'q5a', number:'५ (क)', isHard:false, text:'स्थूलाक्षरपदानि आधृत्य प्रश्ननिर्माणं कुरुत — स्वराः स्वतन्त्रवर्णाः सन्ति ।', answer:{ answerKey:'के स्वतन्त्रवर्णाः सन्ति ?', schoolMethod:'के स्वतन्त्रवर्णाः सन्ति ? (स्थूलपदम् – स्वराः)' } },
            { id:'q5b', number:'५ (ख)', isHard:false, text:'व्यञ्जनानि अर्धमात्रिकाणि भवन्ति ।', answer:{ answerKey:'व्यञ्जनानि कीदृशानि भवन्ति ?', schoolMethod:'व्यञ्जनानि कीदृशानि भवन्ति ? (स्थूलपदम् – अर्धमात्रिकाणि)' } },
            { id:'q5c', number:'५ (ग)', isHard:false, text:'स्वराणां द्वौ भेदौ भवतः ।', answer:{ answerKey:'स्वराणां कति भेदौ भवतः ?', schoolMethod:'स्वराणां कति भेदौ भवतः ? (स्थूलपदम् – द्वौ)' } },
            { id:'q5d', number:'५ (घ)', isHard:false, text:'ह्रस्वस्य उपभेदाः न भवन्ति ।', answer:{ answerKey:'कस्य उपभेदाः न भवन्ति ?', schoolMethod:'कस्य उपभेदाः न भवन्ति ? (स्थूलपदम् – ह्रस्वस्य)' } },
            { id:'q5e', number:'५ (ङ)', isHard:false, text:'व्यञ्जनानां चत्वारो भेदाः भवन्ति ।', answer:{ answerKey:'व्यञ्जनानां कति भेदाः भवन्ति ?', schoolMethod:'व्यञ्जनानां कति भेदाः भवन्ति ? (स्थूलपदम् – चत्वारः)' } },
            { id:'q6a', number:'६ (क)', isHard:false, text:'वर्णसमुच्चयं पाठात् चित्वा लिखत — एकस्थानि-वर्णाः', answer:{ answerKey:'अ, इ, उ, ऋ, लृ, क्, ख्, ग्, घ्, ङ् (आदि)', schoolMethod:'एकस्थानि-वर्णाः — अ, इ, उ, ऋ, लृ, क्, ख्, ग्, घ्, ङ् (आदि)' } },
            { id:'q6c', number:'६ (ग)', isHard:false, text:'अयोगवाह-व्यञ्जनानि', answer:{ answerKey:'अनुस्वारः, विसर्गः (ः)', schoolMethod:'अयोगवाह-व्यञ्जनानि — अनुस्वारः, विसर्गः (ः)' } },
            { id:'q6d', number:'६ (घ)', isHard:false, text:'ऊष्म-व्यञ्जनानि', answer:{ answerKey:'श्, ष्, स्, ह्', schoolMethod:'ऊष्म-व्यञ्जनानि — श्, ष्, स्, ह्' } },
            { id:'q6e', number:'६ (ङ)', isHard:false, text:'द्विस्थानि-वर्णाः', answer:{ answerKey:'ङ्, ञ्, ण्, न्, म्, ए, ऐ, ओ, औ, व', schoolMethod:'द्विस्थानि-वर्णाः — ङ्, ञ्, ण्, न्, म्, ए, ऐ, ओ, औ, व (वे वर्ण जिनका उच्चारण दो स्थानों से होता है।)' } },
          ]
        },
      ] },
    ],
  },
  {
    id: 'sanskrit-reva', name: 'Sanskrit', slug: 'sanskrit',
    book: 'R3 book- Iravati', bookSlug: 'iravati',
    code: '0904ir', icon: 'ॐ', color: 'orange',
    description: 'Class 9 Sanskrit (R3 book- Iravati) — NCERT 2026 Revised. All chapters with complete solutions.',
    chapters: IRAVATI_CHAPTERS,
  },
  {
    id: 'sst', name: 'Social Science', slug: 'sst',
    book: 'Understanding Society India and Beyond', bookSlug: 'understanding-society-india-and-beyond',
    code: '0904ss', icon: '🌍', color: 'indigo',
    downloadUrl: 'https://elbvuwnlfagngpbgcmkm.supabase.co/storage/v1/object/public/books/understanding-society-india-and-beyond-grade9-part1.pdf',
    description: 'Class 9 Social Science — Understanding Society India and Beyond. NCERT 2026 Revised.',
    chapters: SST_CHAPTERS,
  },

  // ── IT (Code 402) — has two independently-selectable "parts" sharing the same
  // subject slug 'it'; the /class-9/it landing page lets the student choose
  // between them. Part A has no content yet (nothing supplied for it).
  {
    id: 'it-part-a', name: 'Employability Skills', slug: 'it',
    book: 'Employability Skills', bookSlug: 'employability-skills',
    code: '17974', icon: '🧭', color: 'teal',
    downloadUrl: '/ebooks/employability-skills-grade9.pdf',
    chapters: EMPLOYABILITY_CHAPTERS,
  },
  {
    id: 'it-part-b', name: 'Information Technology', slug: 'it',
    book: 'IT Code 402', bookSlug: 'information-technology',
    code: '17925', icon: '💻', color: 'teal',
    downloadUrl: '/ebooks/it-code402-grade9.pdf',
    chapters: IT_CHAPTERS,
  },
];

export function getSubject(slug: string, bookSlug?: string): Subject | undefined {
  const matches = CLASS_9_SUBJECTS.filter(s => s.slug === slug);
  if (matches.length <= 1) return matches[0];
  // Multiple "parts" share the same subject slug (e.g. IT has Part A: Employability
  // Skills + Part B: Information Technology) — bookSlug disambiguates which one.
  return bookSlug ? matches.find(s => s.bookSlug === bookSlug) : matches[0];
}

export function getChapter(subjectSlug: string, chapterSlug: string, bookSlug?: string): Chapter | undefined {
  return getSubject(subjectSlug, bookSlug)?.chapters.find(c => c.slug === chapterSlug);
}

// ─── Per-chapter PDF downloads ────────────────────────────────────────────────
// Each chapter has its own official NCERT chapter PDF. The file lives at
// public/ebooks/<prefix>1<2-digit-chapter>.pdf
//   english → iebe101…iebe108   maths → iemh101…iemh108
//   science → iesc101…iesc113   sst   → iest101…iest109
//   arts    → iemr101…iemr117   kaushal-vikas → iekv101…iekv112
//   hindi (ganga) → ihga101…ihga112   hindi (reva) → reva101…reva110
//   sanskrit (sharda) → ihsh101…ihsh116   sanskrit (iravati) → iravati101…iravati111
const CHAPTER_PDF_PREFIX: Record<string, string> = {
  english: 'iebe',
  maths:   'iemh',
  science: 'iesc',
  sst:     'iest',
  arts:    'iemr',
  'kaushal-vikas': 'iekv',
  hindi:   'ihga',
  'hindi-reva': 'reva',
  'sanskrit-sharda': 'ihsh',
  'sanskrit-reva': 'iravati',
};

/** Returns the public URL of the chapter's own PDF (e.g. /ebooks/iemh103.pdf), or null if the subject has no per-chapter PDFs.
 *  Accepts subjectId to disambiguate subjects that share a slug (e.g. hindi → ganga vs reva). */
export function getChapterPdfUrl(subjectSlug: string, chapterNumber: number, subjectId?: string): string | null {
  const prefix = (subjectId && CHAPTER_PDF_PREFIX[subjectId]) || CHAPTER_PDF_PREFIX[subjectSlug];
  if (!prefix) return null;
  return `/ebooks/${prefix}1${String(chapterNumber).padStart(2, '0')}.pdf`;
}

// Book knowledge for AI context
export const MATHS_BOOK_CONTEXT = `
GANITA MANJARI - Grade 9 Mathematics (NCERT 2026 Revised Syllabus)

CHAPTER 1: Orienting Yourself: The Use of Coordinates
- Cartesian plane, x-axis, y-axis, origin
- Coordinates (x,y), quadrants I II III IV
- Distance formula, plotting points
- Real-world applications: room layout, mapping

CHAPTER 2: Introduction to Linear Polynomials
- Algebraic expressions, terms, coefficients, variables
- Degree of polynomial (0=constant, 1=linear, 2=quadratic, 3=cubic)
- Value of polynomial at a point
- Linear equations in one variable, real-world problems
- Graphical representation of linear polynomials

CHAPTER 3: The World of Numbers
- Natural numbers, integers, rational numbers
- Brahmagupta's laws for operations on integers
- Number line representation
- Closure, commutativity, associativity properties
- Historical context: Ishango Bone, ancient mathematics

CHAPTER 4: Exploring Algebraic Identities
- Standard identities: (a+b)², (a-b)², a²-b², (a+b+c)²
- Expansion and factorisation using identities
- Difference of squares
- Applications to mental arithmetic

CHAPTER 5: I'm Up and Down, and Round and Round
- Circles: radius, diameter, circumference (2πr), area (πr²)
- π = 22/7 ≈ 3.14
- Revolutions and distance covered
- Perimeter of circular/semi-circular shapes

CHAPTER 6: Measuring Space: Perimeter and Area
- Perimeter: rectangle 2(l+b), square 4s, triangle sum of sides
- Area: rectangle l×b, square s², triangle ½×b×h
- Paths around rectangles
- Composite figures

CHAPTER 7: The Mathematics of Maybe: Introduction to Probability
- Sample space, events, outcomes
- P(E) = favourable outcomes / total outcomes
- P(E) is always between 0 and 1
- Complementary events: P(E) + P(not E) = 1
- Simple experiments: coins, dice, cards

CHAPTER 8: Predicting What Comes Next: Exploring Sequences and Progressions
- Sequences and patterns
- Arithmetic Progression (AP): a, a+d, a+2d, ...
- Common difference d
- nth term: aₙ = a + (n-1)d
- Sum of n terms: Sₙ = n/2 × [2a + (n-1)d]
`;
