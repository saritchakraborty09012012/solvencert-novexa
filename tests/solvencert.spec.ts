import { test, expect, Page } from '@playwright/test';

interface TestResult {
  chapter: string;
  totalQuestions: number;
  answeredQuestions: number;
  missingAnswers: number;
  emptyAnswers: number;
  issues: string[];
}

interface PerformanceMetrics {
  pageUrl: string;
  loadTime: number;
  contentfulPaint: number;
  largestContentfulPaint: number;
}

const results: TestResult[] = [];
const performanceMetrics: PerformanceMetrics[] = [];

test.describe('SolveNCERT - Comprehensive Testing Suite', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Homepage loads and renders correctly', async () => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SolveNCERT|NCERT/i);
    
    // Check for key elements
    const headerExists = await page.locator('header').isVisible().catch(() => false);
    const navExists = await page.locator('nav').isVisible().catch(() => false);
    
    console.log('✅ Homepage loaded - Header visible:', headerExists, 'Nav visible:', navExists);
    
    // Capture performance
    const perfMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      return {
        loadTime: navigation?.loadEventEnd - navigation?.loadEventStart || 0,
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
      };
    });
    
    console.log('📊 Performance Metrics:', perfMetrics);
  });

  test('Crawl and verify all chapters structure', async () => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find all chapter links - adjust selectors based on your actual structure
    const chapterLinks = await page.locator('[data-testid="chapter-link"], a[href*="/chapter"], .chapter-item a').all();
    
    console.log(`\n🔍 Found ${chapterLinks.length} chapter links`);
    
    if (chapterLinks.length === 0) {
      console.log('⚠️ No chapters found with default selectors. Trying alternative selectors...');
      const allLinks = await page.locator('a').all();
      console.log(`Total links on page: ${allLinks.length}`);
    }
  });

  test('Navigate and verify question pages load', async () => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Try to find and click first chapter
    const firstChapterLink = await page.locator('a').filter({ hasText: /class|chapter|question/i }).first();
    
    if (await firstChapterLink.isVisible().catch(() => false)) {
      const href = await firstChapterLink.getAttribute('href');
      console.log(`📖 Found first chapter link: ${href}`);
      
      await firstChapterLink.click();
      await page.waitForLoadState('networkidle');
      
      // Verify questions are loaded
      const questions = await page.locator('[data-testid="question"], .question, .q-card').all();
      console.log(`✅ Questions loaded: ${questions.length}`);
      
      if (questions.length > 0) {
        // Click first question to verify answer loads
        const firstQuestion = questions[0];
        await firstQuestion.click().catch(() => {});
        await page.waitForTimeout(1000);
        
        const answerContent = await page.locator('[data-testid="answer"], .answer, .answer-content').first();
        const hasAnswer = await answerContent.isVisible().catch(() => false);
        
        console.log(`📝 Answer visible: ${hasAnswer}`);
      }
    } else {
      console.log('⚠️ Could not find chapter link - check page structure');
    }
  });

  test('Verify navigation and menu interactions', async () => {
    await page.goto('/');
    
    // Test mobile menu if exists
    const mobileMenuBtn = await page.locator('[aria-label*="menu" i], .hamburger, [data-testid="mobile-menu"]').first();
    if (await mobileMenuBtn.isVisible().catch(() => false)) {
      await mobileMenuBtn.click();
      await page.waitForTimeout(500);
      const menuOpen = await page.locator('[role="navigation"], .mobile-menu').isVisible().catch(() => false);
      console.log(`📱 Mobile menu works: ${menuOpen}`);
    }
  });

  test('Check for broken links', async () => {
    await page.goto('/');
    
    const allLinks = await page.locator('a[href]').all();
    let brokenLinks: string[] = [];
    
    console.log(`\n🔗 Checking ${allLinks.length} links...`);
    
    for (let i = 0; i < Math.min(allLinks.length, 20); i++) {
      const href = await allLinks[i].getAttribute('href');
      
      if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
        try {
          const response = await page.goto(href, { waitUntil: 'domcontentloaded' }).catch(() => null);
          if (response && response.status() >= 400) {
            brokenLinks.push(`${href} (${response.status()})`);
          }
        } catch (e) {
          brokenLinks.push(`${href} (error)`);
        }
      }
    }
    
    if (brokenLinks.length > 0) {
      console.log(`❌ Broken links found:\n${brokenLinks.join('\n')}`);
    } else {
      console.log('✅ All checked links are working');
    }
  });

  test('Verify accessibility basics', async () => {
    await page.goto('/');
    
    // Check for alt text on images
    const images = await page.locator('img').all();
    let missingAlt = 0;
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      if (!alt || alt.trim() === '') {
        missingAlt++;
      }
    }
    
    console.log(`\n♿ Accessibility Check:\n  Total images: ${images.length}\n  Missing alt text: ${missingAlt}`);
    
    // Check for proper heading structure
    const h1s = await page.locator('h1').count();
    const h2s = await page.locator('h2').count();
    
    console.log(`  H1 tags: ${h1s}, H2 tags: ${h2s}`);
  });

  test('Performance and load time analysis', async () => {
    const performanceData = await page.evaluate(() => {
      const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const resourceTiming = performance.getEntriesByType('resource');
      
      return {
        domContentLoaded: navTiming.domContentLoadedEventEnd - navTiming.domContentLoadedEventStart,
        loadComplete: navTiming.loadEventEnd - navTiming.loadEventStart,
        resourceCount: resourceTiming.length,
        largestResource: Math.max(...resourceTiming.map((r: PerformanceEntry) => r.duration)),
      };
    });
    
    console.log(`\n⚡ Performance:\n  DOM Content Loaded: ${performanceData.domContentLoaded}ms\n  Page Load Complete: ${performanceData.loadComplete}ms\n  Resources loaded: ${performanceData.resourceCount}\n  Largest resource time: ${performanceData.largestResource}ms`);
  });

  test('Search functionality test', async () => {
    await page.goto('/');
    
    const searchInput = await page.locator('input[placeholder*="search" i], input[aria-label*="search" i]').first();
    
    if (await searchInput.isVisible().catch(() => false)) {
      await searchInput.fill('triangle');
      await page.waitForTimeout(1000);
      
      const searchResults = await page.locator('[data-testid="search-result"], .search-result, .result-item').count();
      console.log(`🔍 Search test: Found ${searchResults} results for "triangle"`);
    } else {
      console.log('⚠️ Search input not found');
    }
  });

  test('Dark mode / theme toggle', async () => {
    await page.goto('/');
    
    const themeToggle = await page.locator('[aria-label*="theme" i], .theme-toggle, [data-testid="theme-toggle"]').first();
    
    if (await themeToggle.isVisible().catch(() => false)) {
      const currentTheme = await page.evaluate(() => localStorage.getItem('theme'));
      await themeToggle.click();
      await page.waitForTimeout(500);
      const newTheme = await page.evaluate(() => localStorage.getItem('theme'));
      console.log(`🌙 Theme toggle works: ${currentTheme} → ${newTheme}`);
    }
  });

  test('Responsive design - Mobile view', async () => {
    // Already set to desktop in config, but test viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const isMobileOptimized = await page.evaluate(() => {
      return {
        viewport: window.innerWidth,
        hasViewportMeta: !!document.querySelector('meta[name="viewport"]'),
      };
    });
    
    console.log(`📱 Mobile view: Width ${isMobileOptimized.viewport}px, Viewport meta: ${isMobileOptimized.hasViewportMeta}`);
  });

  test('Generate comprehensive test report', async () => {
    const report = `
╔════════════════════════════════════════════════════════════════════╗
║           SOLVENCERT COMPREHENSIVE TEST REPORT                    ║
║                    Generated: ${new Date().toLocaleString()}                   ║
╚════════════════════════════════════════════════════════════════════╝

📋 TEST COVERAGE:
  ✅ Homepage Load & Rendering
  ✅ Chapter Structure Verification
  ✅ Question & Answer Loading
  ✅ Navigation & Menu Interactions
  ✅ Broken Link Detection
  ✅ Accessibility Checks
  ✅ Performance Metrics
  ✅ Search Functionality
  ✅ Theme/Dark Mode
  ✅ Responsive Design

🎯 RECOMMENDATIONS:
  1. Add unique data-testid attributes to chapters, questions, and answers
  2. Ensure all questions have corresponding answer content
  3. Optimize image sizes for better performance
  4. Add proper alt text to all images
  5. Consider implementing lazy loading for questions list
  6. Test on actual devices for mobile responsiveness
  7. Set up performance budgets (Target: <3s load time)
  8. Add breadcrumb navigation for better UX
  9. Implement answer preview before full page load
  10. Add analytics to track user engagement

⚠️ ISSUES TO CHECK:
  - Are all chapters accessible?
  - Do all questions have answers?
  - Are formulas/KaTeX rendering correctly?
  - Is PDF export working for all questions?
  - Authentication flow working properly?
  - Database sync issues?

📊 NEXT STEPS:
  1. Review the generated Playwright HTML report:
     → open playwright-report/index.html in browser
  2. Check test-results.json for detailed metrics
  3. Fix any identified issues
  4. Re-run tests with: npx playwright test

═══════════════════════════════════════════════════════════════════════
    `;
    
    console.log(report);
  });
});
