import type { Chapter } from './content';

// ─────────────────────────────────────────────────────────────────────────────
// Class 9 Maths — Ganita Manjari Part II.
// Paste the Part II solutions below. The book page shows "Coming Soon" until
// this array has at least one chapter; chapters appear automatically afterwards.
//
// Shape per entry:
//   {
//     id: 'ch01', number: 1,
//     title: 'Chapter title',
//     slug:  'chapter-title',
//     code:  '0904ch01',
//     exercises: [
//       {
//         id: 'ex1.1', title: 'Exercise 1.1',
//         questions: [
//           {
//             id: 'q1', number: '1', isHard: false,
//             text: 'Question text',
//             parts: ['(a) ...', '(b) ...'],          // optional
//             answer: { answerKey: '...', schoolMethod: '**Solution:**\n\n...' },
//           },
//         ],
//       },
//     ],
//   },
// ─────────────────────────────────────────────────────────────────────────────

export const MATHS_PART2_CHAPTERS: Chapter[] = [];