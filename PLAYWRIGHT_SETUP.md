# 🎭 SolveNCERT Playwright Testing - Quick Start Guide

## ⚡ Super Quick Version (Copy-Paste)

### Terminal 1 (Keep running):
```bash
npm run dev
```
Wait until it shows: `✓ Ready in 13.8s`

### Terminal 2 (New terminal):
```bash
cd path\to\your\solvencert-v10-complete
npx playwright test
```

Done! ✅

---

## 📋 What Gets Tested

✅ Homepage loading  
✅ Chapter structure  
✅ Questions & Answers verification  
✅ Broken links detection  
✅ Performance metrics  
✅ Search functionality  
✅ Mobile responsiveness  
✅ Accessibility basics  
✅ Answer content completeness  
✅ Formula rendering (KaTeX)  
✅ PDF export functionality  

---

## 📊 View Results

### Option 1: HTML Report (Best Visual)
```bash
npx playwright show-report
```
Browser automatically opens with detailed visual report.

### Option 2: JSON Results
```bash
cat test-results.json
```

### Option 3: Terminal Output
Just read the console output while tests run.

---

## 🔧 Advanced Usage

### Run Only Answer Verification Tests
```bash
npx playwright test tests/answer-verification.spec.ts
```

### Run Only Main Tests
```bash
npx playwright test tests/solvencert.spec.ts
```

### Run with UI (Recommended for Debugging)
```bash
npx playwright test --ui
```
Opens interactive UI where you can see each step visually.

### Run in Headed Mode (See Browser)
```bash
npx playwright test --headed
```
Shows the actual browser window while testing.

### Debug Mode (Pause and Step Through)
```bash
npx playwright test --debug
```

### Generate Video of Test Run
```bash
npx playwright test --headed --reporter=html
```
Videos saved in: `test-results/` folder

---

## 📁 Files Created

```
your-project/
├── playwright.config.ts          ← Configuration
├── tests/
│   ├── solvencert.spec.ts        ← Main tests
│   └── answer-verification.spec.ts ← Answer checking
└── playwright-report/            ← Generated after tests run
    └── index.html                ← Open in browser
```

---

## 🎯 What Each Test Does

### `solvencert.spec.ts`
- **Homepage loads** - Checks if site renders
- **Crawl chapters** - Finds all chapters
- **Load questions** - Verifies question pages work
- **Navigation** - Tests menus and links
- **Broken links** - Finds dead links
- **Accessibility** - Checks alt text, headings
- **Performance** - Measures load times
- **Search** - Tests search box
- **Dark mode** - Tests theme toggle
- **Mobile** - Tests on phone size

### `answer-verification.spec.ts`
- **Full crawl** - Goes through all chapters (or first 3)
- **Answer completeness** - Checks every question has answer
- **Answer quality** - Checks answer is substantial (>50 chars)
- **Formatting** - Checks answer renders correctly
- **Formulas** - Verifies KaTeX math renders
- **PDF export** - Tests download functionality
- **Rendering issues** - Finds broken elements

---

## 🚨 Troubleshooting

### "Error: No tests found"
**Solution:** Make sure you have the `tests/` folder with `.spec.ts` files
```bash
ls tests/
```
Should show your test files.

### "Error: Port 3000 already in use"
**Solution:** Kill the existing process
```bash
# Windows PowerShell
Get-Process -Name node | Stop-Process -Force

# Then try again
npm run dev
```

### "Playwright tests timeout"
**Solution:** Dev server might be slow. Keep terminal 1 running for 30+ seconds before starting tests.

### "Cannot find chapters"
This is expected! The tests try multiple selectors. Check the output which selector worked, then update your test file accordingly.

---

## 🎨 Customizing Tests

### Change which chapters to test
In `answer-verification.spec.ts`, line with:
```typescript
for (let i = 0; i < Math.min(chapterContainers.length, 3); i++) {
```

Change `3` to any number:
```typescript
for (let i = 0; i < Math.min(chapterContainers.length, 10); i++) {  // Test first 10
```

### Add your own selectors
If tests don't find chapters, add your actual selectors to:
```typescript
const chapterContainers = await page.locator('[YOUR-SELECTOR-HERE]').all();
```

Example selectors:
- By class: `.chapters-list a`
- By ID: `#chapter-selector li`
- By attribute: `[data-chapter="1"]`

---

## 📈 Performance Benchmarking

Tests measure:
- **DOM Content Loaded** - Time to interactive content
- **Page Load Complete** - Total page ready time
- **Resource Count** - Number of files downloaded
- **Largest Resource** - Slowest file to load

Targets:
- ✅ Ideal: < 2 seconds
- ⚠️ Acceptable: 2-3 seconds
- ❌ Slow: > 3 seconds

---

## 🔄 Continuous Testing

### Run tests daily
Add this to your CI/CD (GitHub Actions, etc.):
```yaml
- name: Run Playwright Tests
  run: |
    npm ci
    npm run dev &
    sleep 15
    npx playwright test
```

### Keep test results historical
Save `test-results.json` after each run to track improvements.

---

## 💡 Tips & Tricks

1. **Tests are slow?** Run only specific tests:
   ```bash
   npx playwright test tests/answer-verification.spec.ts -g "Verify all questions"
   ```

2. **Need to debug a specific test?** Use `test.only()`:
   ```typescript
   test.only('Your specific test name', async () => {
     // Only this test will run
   });
   ```

3. **Take screenshots of every step:**
   ```bash
   npx playwright test --headed
   ```

4. **Record videos of failures:**
   Already configured! Check `test-results/` after tests run.

---

## 📞 Questions?

If tests fail or selectors don't match your structure:
1. Take screenshots from HTML report
2. Check page source (Ctrl+U) to find actual selectors
3. Update test file with correct selectors
4. Re-run tests

---

## ✅ Checklist

- [ ] `npm install --save-dev @playwright/test` (already done?)
- [ ] Copy `playwright.config.ts` to project root
- [ ] Create `tests/` folder
- [ ] Copy test files to `tests/` folder
- [ ] Terminal 1: `npm run dev`
- [ ] Terminal 2: `npx playwright test`
- [ ] Check report: `npx playwright show-report`
- [ ] Review findings and fix issues
- [ ] Re-run tests to verify fixes

---

Generated for SolveNCERT Testing
Happy Testing! 🚀
