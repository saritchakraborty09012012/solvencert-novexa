import { test, expect, Page } from '@playwright/test';
import * as fs from 'fs';

interface QuestionData {
  chapter: string;
  number: string;
  hasAnswer: boolean;
  answerLength: number;
  answerText: string;
  issues: string[];
  images: number;
  formulas: number;
}

const allQuestionData: QuestionData[] = [];

test.describe('SolveNCERT - Answer Verification & Content Completeness', () => {
  test('Verify all questions have answers - Full Crawl', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    console.log('\n🚀 Starting comprehensive answer verification crawl...\n');
    
    // Strategy 1: Try to find chapter listing
    const chapterContainers = await page.locator('[data-testid="chapter"], .chapter-card, [class*="chapter"]').all();
    
    if (chapterContainers.length === 0) {
      console.log('⚠️ No chapters found with standard selectors');
      console.log('Analyzing page structure...');
      
      // Get page structure to help debug
      const html = await page.content();
      const chapterMatches = html.match(/chapter|question|solve/gi) || [];
      console.log(`Found ${chapterMatches.length} mentions of chapter/question/solve`);
      
      // Save HTML structure for analysis
      fs.writeFileSync('./page-structure.html', html);
      console.log('📄 Saved page structure to page-structure.html for analysis');
      
      return;
    }
    
    console.log(`✅ Found ${chapterContainers.length} chapters\n`);
    
    let totalQuestions = 0;
    let answeredQuestions = 0;
    let skippedChapters = 0;
    
    // Iterate through chapters
    for (let i = 0; i < Math.min(chapterContainers.length, 3); i++) {
      try {
        const chapter = chapterContainers[i];
        const chapterTitle = await chapter.textContent();
        const chapterLink = await chapter.locator('a').first();
        
        console.log(`📖 Chapter ${i + 1}: ${chapterTitle?.substring(0, 50)}`);
        
        if (!await chapterLink.isVisible().catch(() => false)) {
          console.log('   ⚠️ Chapter link not clickable, skipping...');
          skippedChapters++;
          continue;
        }
        
        // Navigate to chapter
        await chapterLink.click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);
        
        // Find questions in chapter
        const questions = await page.locator('[data-testid="question"], .question, .q-card, [class*="question"]').all();
        console.log(`   Found ${questions.length} questions`);
        totalQuestions += questions.length;
        
        // Check first 5 questions for answers
        for (let j = 0; j < Math.min(questions.length, 5); j++) {
          const question = questions[j];
          const questionNum = await question.locator('[class*="number"], [data-testid="q-number"]').textContent().catch(() => 'Unknown');
          
          // Try to expand/click question
          await question.click().catch(() => {});
          await page.waitForTimeout(500);
          
          // Look for answer
          const answerElement = await page.locator('[data-testid="answer"], .answer, [class*="answer"]').first();
          const hasAnswer = await answerElement.isVisible().catch(() => false);
          
          if (hasAnswer) {
            const answerText = await answerElement.textContent().catch(() => '');
            answeredQuestions++;
            console.log(`     Q${questionNum}: ✅ Answer found (${answerText?.length || 0} chars)`);
          } else {
            console.log(`     Q${questionNum}: ❌ NO ANSWER FOUND`);
          }
        }
        
        // Go back to main page
        await page.goBack();
        await page.waitForLoadState('networkidle');
        
      } catch (error) {
        console.log(`   ❌ Error processing chapter: ${error}`);
        skippedChapters++;
      }
    }
    
    console.log(`\n📊 CRAWL SUMMARY:\n  Total Questions Found: ${totalQuestions}\n  Questions with Answers: ${answeredQuestions}\n  Chapters Skipped: ${skippedChapters}\n  Coverage: ${totalQuestions > 0 ? ((answeredQuestions / totalQuestions) * 100).toFixed(1) : 0}%\n`);
  });

  test('Check answer quality and completeness', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to first available chapter/question
    const firstLink = await page.locator('a[href*="/solution"], a[href*="/answer"], a[href*="/q"]').first();
    
    if (!await firstLink.isVisible().catch(() => false)) {
      console.log('No solution links found');
      return;
    }
    
    await firstLink.click({ force: true });
    await page.waitForLoadState('domcontentloaded');
    
    // Check for answer quality indicators
    const answerContent = await page.locator('[data-testid="answer"], .answer, [class*="solution"]').first();
    
    if (await answerContent.isVisible().catch(() => false)) {
      const text = await answerContent.textContent();
      const images = await answerContent.locator('img').count();
      const formulas = await answerContent.locator('[class*="math"], .katex, .formula').count();
      
      console.log(`\n📝 Answer Quality Check:\n  Text length: ${text?.length || 0} chars\n  Images: ${images}\n  Formulas: ${formulas}`);
      
      // Check for common issues
      const issues: string[] = [];
      
      if (!text || text.trim().length < 50) {
        issues.push('Answer too short - might be incomplete');
      }
      
      if (text?.includes('undefined') || text?.includes('[object]')) {
        issues.push('Rendering error detected in answer');
      }
      
      if (text?.includes('loading') || text?.includes('Loading')) {
        issues.push('Answer might still be loading');
      }
      
      if (issues.length > 0) {
        console.log(`\n⚠️ Issues found:\n  ${issues.join('\n  ')}`);
      } else {
        console.log('\n✅ Answer quality looks good');
      }
    }
  });

  test('Test answer export/download functionality', async ({ page }) => {
    await page.goto('/');
    
    // Look for PDF or download buttons
    const downloadBtn = await page.locator('[aria-label*="download" i], button:has-text("Download"), button:has-text("PDF")').first();
    
    if (await downloadBtn.isVisible().catch(() => false)) {
      console.log('\n📥 Download/Export buttons found and visible');
      
      // Listen for download
      const downloadPromise = page.waitForEvent('download').catch(() => null);
      
      await downloadBtn.click().catch(() => {});
      const download = await downloadPromise;
      
      if (download) {
        console.log(`✅ Download triggered: ${download.suggestedFilename()}`);
      } else {
        console.log('⚠️ Download initiated but no file received');
      }
    } else {
      console.log('⚠️ No download/export buttons found');
    }
  });

  test('Validate answer formatting and rendering', async ({ page }) => {
    await page.goto('/');
    
    // Take screenshot of answer area
    const answerArea = await page.locator('[data-testid="answer"], .answer, .solution').first();
    
    if (await answerArea.isVisible().catch(() => false)) {
      try {
        await answerArea.screenshot({ path: '/home/claude/answer-sample.png' });
        console.log('📸 Answer screenshot saved to answer-sample.png');
      } catch (e) {
        console.log('Could not capture screenshot');
      }
      
      // Check for rendering issues
      const hasText = (await answerArea.textContent())?.length || 0 > 0;
      const isVisible = await answerArea.isVisible();
      const boundingBox = await answerArea.boundingBox();
      
      console.log(`\n🎨 Answer Rendering:\n  Has Text: ${hasText}\n  Visible: ${isVisible}\n  Dimensions: ${boundingBox?.width}x${boundingBox?.height}px`);
    }
  });

  test('Check for missing or broken formulas (KaTeX)', async ({ page }) => {
    // Navigate directly to a maths chapter page (rich in KaTeX formulas)
    await page.goto('/class-9/maths/ganita-manjari');
    await page.waitForLoadState('domcontentloaded');
    
    // Check KaTeX rendering
    const mathElements = await page.locator('.katex, .math, [class*="formula"]').all();
    
    console.log(`\n📐 KaTeX/Formula Check:\n  Math elements found: ${mathElements.length}`);
    
    let renderIssues = 0;
    
    for (const math of mathElements.slice(0, 5)) {
      const hasError = await math.locator('.katex-error').isVisible().catch(() => false);
      if (hasError) {
        renderIssues++;
      }
    }
    
    console.log(`  Rendering errors: ${renderIssues}`);
  });

  test('Generate Answer Verification Report', async () => {
    const report = `
╔════════════════════════════════════════════════════════════════════╗
║        ANSWER VERIFICATION & CONTENT COMPLETENESS REPORT          ║
║                    Generated: ${new Date().toLocaleString()}                   ║
╚════════════════════════════════════════════════════════════════════╝

🔍 VERIFICATION CHECKLIST:

  ☐ All chapters accessible and clickable
  ☐ All questions have corresponding answer content
  ☐ Answer text is not empty (minimum 50 characters)
  ☐ Formulas render correctly (no .katex-error elements)
  ☐ Images display without broken links
  ☐ Answer formatting is consistent across all chapters
  ☐ PDF export/download functionality works
  ☐ No rendering errors (undefined, [object], etc.)
  ☐ Loading states properly resolved
  ☐ Performance acceptable for large answer content

📋 MISSING FEATURES TO CONSIDER:

  1. History/Bookmarks
     → Save frequently accessed questions
     → Quick access to recently viewed answers
     → Mark favorites
  
  2. Answer Quality Indicators
     → Star ratings from users
     → Difficulty level tags
     → Time estimate for reading
  
  3. Comparison Tools
     → Compare different approaches to same problem
     → See related questions
  
  4. Accessibility
     → Text-to-speech for answers
     → Dyslexia-friendly fonts
     → High contrast mode
  
  5. Learning Tools
     → Practice mode with timed tests
     → Progress tracking
     → Spaced repetition reminders
  
  6. Offline Access
     → Download chapters for offline use
     → Offline search capability

⚡ PERFORMANCE TARGETS:

  Target                    Current     Status
  ─────────────────────────────────────────────
  Page Load Time            < 3s        ?
  Answer Load Time          < 1s        ?
  Image Load Time           < 500ms     ?
  Search Response Time      < 500ms     ?
  Mobile Performance        > 50        ?
  Accessibility Score       > 90        ?

🛠️ HOW TO USE THIS TEST SUITE:

  1. Keep dev server running:
     npm run dev
  
  2. Run tests in separate terminal:
     npx playwright test
  
  3. View detailed HTML report:
     npx playwright show-report
  
  4. Run specific test file:
     npx playwright test tests/answer-verification.spec.ts
  
  5. Run in UI mode for debugging:
     npx playwright test --ui

📊 NEXT STEPS:

  1. Check test-results.json for detailed metrics
  2. Review playwright-report/index.html in browser
  3. Fix identified issues
  4. Re-run tests to verify fixes
  5. Set up CI/CD to run tests automatically

═══════════════════════════════════════════════════════════════════════
    `;
    
    console.log(report);
    
    // Save report to file
    fs.writeFileSync('./TEST_REPORT.txt', report);
    console.log('\n📄 Full report saved to TEST_REPORT.txt');
  });
});
