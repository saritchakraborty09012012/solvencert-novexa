import fs from 'fs';
import path from 'path';

class DOMMatrix {
  constructor() { this.a=1;this.b=0;this.c=0;this.d=1;this.e=0;this.f=0; }
  transformPoint(pt) { return pt; }
}
globalThis.DOMMatrix = DOMMatrix;

const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');

const ebooksDir = './public/ebooks';
const outDir = './pdf-extracts-v2';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// Line-aware extraction: group text items by their baseline Y within a page,
// and separate columns by a large X gap. This preserves the visual structure
// of the page far better than a flat item.str join.
async function extractPDF(filename) {
  const filePath = path.join(ebooksDir, filename);
  if (!fs.existsSync(filePath)) { console.log(`SKIP ${filename}`); return null; }
  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await getDocument({ data }).promise;

  let out = '';
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const tc = await page.getTextContent();
    const rows = [];
    let cur = null;
    for (const it of tc.items) {
      if (it.str === undefined) continue;
      const y = it.transform[5];
      const x = it.transform[4];
      if (!cur || Math.abs(cur.y - y) > 3.5) {
        cur = { y, parts: [{ x, s: it.str }] };
        rows.push(cur);
      } else {
        cur.parts.push({ x, s: it.str });
      }
    }
    const lines = rows.map(r => {
      r.parts.sort((a, b) => a.x - b.x);
      let s = '';
      let prevEnd = null;
      for (const pt of r.parts) {
        if (prevEnd !== null && pt.x - prevEnd > 12) s += '  ';
        s += pt.s;
        prevEnd = pt.x + (pt.s.length * 2.2);
      }
      return s.replace(/\s+$/g, '');
    }).filter(l => l.trim().length > 0);

    out += `\n<<<PAGE ${p}>>>\n` + lines.join('\n') + '\n';
  }
  const outFile = path.join(outDir, filename.replace('.pdf', '.txt'));
  fs.writeFileSync(outFile, out);
  console.log(`OK ${filename} pages=${doc.numPages} chars=${out.length}`);
  return { filename, pages: doc.numPages, chars: out.length };
}

const args = process.argv.slice(2);
const names = args.length ? args : [];
const res = [];
for (const n of names) {
  const r = await extractPDF(n.endsWith('.pdf') ? n : n + '.pdf');
  if (r) res.push(r);
}
console.log('DONE ' + res.length);
