import fs from 'fs';
import path from 'path';

class DOMMatrix {
  constructor() { this.a=1;this.b=0;this.c=0;this.d=1;this.e=0;this.f=0; }
  transformPoint(pt) { return pt; }
}
globalThis.DOMMatrix = DOMMatrix;

const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');

const ebooksDir = './public/ebooks';
const outDir = './pdf-extracts';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// PDFs to extract
const pdfs = [
  'kaveri-english-grade9.pdf',
  'ganita-manjari-grade9-part1.pdf',
  'exploration-science-grade9.pdf',
  'advanced-mathematics-grade9.pdf',
  'science-advanced-full-book.pdf',
  'ganga-hindi-grade9.pdf',
  'it-code402-grade9.pdf',
  'employability-skills-grade9.pdf',
  'kaushal-vikas-grade9.pdf',
  'madhurima-arts-grade9.pdf',
  'iravati101.pdf','iravati102.pdf','iravati103.pdf','iravati104.pdf','iravati105.pdf',
  'iravati106.pdf','iravati107.pdf','iravati108.pdf','iravati109.pdf','iravati110.pdf','iravati111.pdf',
  'ihsh101.pdf','ihsh102.pdf','ihsh103.pdf','ihsh104.pdf','ihsh105.pdf','ihsh106.pdf',
  'ihsh107.pdf','ihsh108.pdf','ihsh109.pdf','ihsh110.pdf','ihsh111.pdf',
  'reva101.pdf','reva102.pdf','reva103.pdf','reva104.pdf','reva105.pdf',
  'reva106.pdf','reva107.pdf','reva108.pdf','reva109.pdf','reva110.pdf',
  'iest101.pdf','iest102.pdf','iest103.pdf','iest104.pdf','iest105.pdf',
  'iest106.pdf','iest107.pdf','iest108.pdf','iest109.pdf',
];

async function extractPDF(filename) {
  const filePath = path.join(ebooksDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${filename} not found`);
    return null;
  }
  try {
    const data = new Uint8Array(fs.readFileSync(filePath));
    const doc = await getDocument({data}).promise;
    let fullText = '';
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const content = await page.getTextContent();
      fullText += content.items.map(item => item.str).join(' ') + '\n\n';
    }
    const outFile = path.join(outDir, filename.replace('.pdf', '.txt'));
    fs.writeFileSync(outFile, fullText);
    console.log(`OK: ${filename} -> ${doc.numPages} pages, ${fullText.length} chars`);
    return { filename, pages: doc.numPages, chars: fullText.length };
  } catch (e) {
    console.log(`ERROR: ${filename}: ${e.message}`);
    return null;
  }
}

const results = [];
for (const pdf of pdfs) {
  const r = await extractPDF(pdf);
  if (r) results.push(r);
}
console.log('\n=== SUMMARY ===');
results.forEach(r => console.log(`${r.filename}: ${r.pages} pages, ${r.chars} chars`));
