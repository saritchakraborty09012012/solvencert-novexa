import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const dirs = ['./ilovepdf-pdf-to-word', './ilovepdf-pdf-to-word 2'];
const outDir = './docx-text';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// Word splits a paragraph across many <w:r><w:t> runs. Rebuild readable text:
// paragraph -> line, table cell -> tab separated, explicit breaks honoured.
function xmlToText(xml) {
  let s = xml;
  s = s.replace(/<w:tab[^>]*\/>/g, '\t');
  s = s.replace(/<w:br[^>]*\/>/g, '\n');
  s = s.replace(/<w:cr[^>]*\/>/g, '\n');
  s = s.replace(/<\/w:p>/g, '\n');
  s = s.replace(/<\/w:tc>/g, '\t|\t');
  s = s.replace(/<\/w:tr>/g, '\n');
  // keep only text inside <w:t ...>...</w:t>
  const parts = [];
  const re = /<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>|(\n|\t\|\t|\t)/g;
  // simpler: strip all tags but preserve the markers we inserted
  s = s.replace(/<w:t(?:\s[^>]*)?>/g, '\u0001').replace(/<\/w:t>/g, '\u0002');
  s = s.replace(/<[^>]+>/g, '');
  // drop everything not inside a w:t marker, keep our structural markers
  let out = '';
  let inT = false;
  for (const ch of s) {
    if (ch === '\u0001') { inT = true; continue; }
    if (ch === '\u0002') { inT = false; continue; }
    if (ch === '\n' || ch === '\t' || ch === '|') { out += ch; continue; }
    if (inT) out += ch;
  }
  out = out.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
           .replace(/&quot;/g, '"').replace(/&apos;/g, "'");
  out = out.split('\n').map(l => l.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/g, '')).join('\n');
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim() + '\n';
}

const names = process.argv.slice(2);
for (const n of names) {
  let buf = null, used = null;
  for (const d of dirs) {
    const p = path.join(d, n + '.docx');
    if (fs.existsSync(p)) { buf = fs.readFileSync(p); used = d; break; }
  }
  if (!buf) { console.log('MISSING ' + n); continue; }
  const zip = await JSZip.loadAsync(buf);
  const docXml = await zip.file('word/document.xml').async('string');
  const text = xmlToText(docXml);
  fs.writeFileSync(path.join(outDir, n + '.txt'), text);
  console.log('OK ' + n.padEnd(30) + ' from ' + used.padEnd(26) + ' chars=' + text.length);
}
