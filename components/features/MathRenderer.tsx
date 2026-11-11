import React, { useEffect, useState } from 'react';

interface Props { text: string; className?: string; }

type Seg =
  | { type: 'text';      value: string }
  | { type: 'inline';    value: string }
  | { type: 'block';     value: string }
  | { type: 'bold';      value: string }
  | { type: 'italic';    value: string }
  | { type: 'underline'; value: string }
  | { type: 'table';     value: string }
  | { type: 'mtable';    value: string }
  | { type: 'heading';   value: string; level: number }
  | { type: 'img';       value: string; alt?: string }
  | { type: 'quote';     value: string }
  | { type: 'hr' }
  | { type: 'br' };

function parse(text: string): Seg[] {
  const segs: Seg[] = [];
  // Process HTML tables, LaTeX environments, display math, inline math, bold,
  // underline, italic, markdown headings, horizontal rules, markdown pipe
  // tables, then text. Recognises PDF-copied delimiters: \(...\), \[...\],
  // \begin{env}...\end{env}. Bold is lazy so that **text $math$** still
  // renders the math inside it.
  const re = /(<table[\s\S]*?<\/table>|\\begin\{[\s\S]*?\\end\{[^}]*\}|\\\[[\s\S]+?\\\]|\$\$[\s\S]+?\$\$|\\\([^\n]+?\\\)|\$[^$\n]+?\$|\*\*([\s\S]+?)\*\*|<u>([\s\S]+?)<\/u>|\*([^*\n]+?)\*|(?:^|\n+)(#{1,6})[ \t]*([^\n]+)|(?:^|\n+)(?:---+|\*\*\*|___)[ \t]*(?=\n|$)|(?:^|\n+)\|[^\n]*(?:\n\|[^\n]*)*|(?:^|\n+)[ \t]*>[ \t]?([^\n]+)|\n\n|!\[([^\]\n]*)\]\(([^)\s]+)\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) segs.push({ type:'text', value: text.slice(last, m.index) });
    if (m[0].startsWith('<table')) {
      segs.push({ type:'table',  value: m[0] });
    } else if (m[0].startsWith('\\begin')) {
      segs.push({ type:'block',  value: m[0] });
    } else if (m[0].startsWith('\\[') || m[0].startsWith('$$')) {
      segs.push({ type:'block',  value: m[0].slice(2,-2).trim() });
    } else if (m[0].startsWith('\\(')) {
      segs.push({ type:'inline', value: m[0].slice(2,-2).trim() });
    } else if (m[0].startsWith('$')) {
      segs.push({ type:'inline', value: m[0].slice(1,-1).trim() });
    } else if (m[0].startsWith('**')) {
      segs.push({ type:'bold',   value: m[2] });
    } else if (m[0].startsWith('<u>')) {
      segs.push({ type:'underline', value: m[3] });
    } else if (m[0].startsWith('![')) {
      segs.push({ type:'img', value: m[9], alt: m[8] });
    } else if (m[7] !== undefined) {
      segs.push({ type:'quote', value: m[7] });
    } else if (m[4] !== undefined) {
      segs.push({ type:'italic', value: m[4] });
    } else if (m[5] !== undefined) {
      segs.push({ type:'heading', value: m[6], level: m[5].length });
    } else if (/^\n*\|/.test(m[0])) {
      segs.push({ type:'mtable', value: m[0] });
    } else if (/(?:^|\n+)(?:---|\*\*\*|___)/.test(m[0])) {
      segs.push({ type:'hr' });
    } else {
      segs.push({ type:'br' });
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) segs.push({ type:'text', value: text.slice(last) });
  return segs;
}

// KaTeX is self-hosted via a dynamic import (bundled, same-origin) so browsers
// with tracking prevention (Edge, Brave) can never block math rendering.
let katexPromise: Promise<typeof import('katex')> | null = null;
function loadKatex(): Promise<typeof import('katex')> {
  if (!katexPromise) katexPromise = import('katex');
  return katexPromise;
}

async function renderKatex(latex: string, display: boolean): Promise<string | null> {
  try {
    const mod = await loadKatex();
    if (!mod.default) return null;
    return mod.default.renderToString(latex, { displayMode: display, throwOnError: false, strict: 'ignore', output: 'html' });
  } catch { return null; }
}

function MathNode({ latex, display }: { latex: string; display: boolean }) {
  const [html, setHtml] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    renderKatex(latex, display).then(r => { if (r && !cancelled) setHtml(r); });
    return () => { cancelled = true; };
  }, [latex, display]);

  if (!html) return (
    <code className="font-mono text-xs bg-[var(--surface-2)] px-1.5 py-0.5 rounded text-[var(--text-secondary)]">
      {display ? `$$${latex}$$` : `$${latex}$`}
    </code>
  );
  return <span className={display ? 'block my-2 overflow-x-auto text-center' : 'inline'} dangerouslySetInnerHTML={{ __html: html }} />;
}

// Markdown pipe table (| a | b |  /  |---|---|  /  rows). Falls back to plain
// pre-formatted text when the block doesn't follow the table shape.
function PipeTable({ raw, depth }: { raw: string; depth: number }) {
  const lines = raw.split('\n').map(l => l.trim()).filter(l => l.startsWith('|'));
  const isSep = (l: string) => l.includes('-') && /^\|?[\s:|-]+\|?$/.test(l);
  if (depth > 4 || lines.length < 2 || !isSep(lines[1])) {
    return <span style={{ whiteSpace:'pre-wrap' }}>{raw}</span>;
  }
  const cells = (l: string) => l.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  const headers = cells(lines[0]);
  const rows = lines.slice(2).map(cells);
  return (
    <span className="block my-3 overflow-x-auto">
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr>
            {headers.map((h, j) => (
              <th key={j} className="border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1.5 text-left font-semibold text-[var(--text-primary)]">
                {renderSegs(parse(h), depth + 1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {headers.map((_, ci) => (
                <td key={ci} className="border border-[var(--border)] px-2.5 py-1.5 align-top text-[var(--text-secondary)]">
                  {renderSegs(parse(r[ci] ?? ''), depth + 1)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </span>
  );
}

// Bold may wrap math (e.g. **Answer: $x$**). Render its contents recursively so the
// math is still parsed, wrapped in a single <strong>.
function renderSegs(segs: Seg[], depth: number): React.ReactNode[] {
  return segs.map((seg, i) => {
    switch (seg.type) {
      case 'bold': {
        if (depth > 4) return <strong key={i}>{seg.value}</strong>;
        return <strong key={i} className="font-semibold text-[var(--text-primary)]">{renderSegs(parse(seg.value), depth + 1)}</strong>;
      }
      case 'italic': {
        if (depth > 4) return <em key={i}>{seg.value}</em>;
        return <em key={i} className="italic">{renderSegs(parse(seg.value), depth + 1)}</em>;
      }
      case 'underline': {
        if (depth > 4) return <u key={i}>{seg.value}</u>;
        return <u key={i} className="underline decoration-1 underline-offset-2">{renderSegs(parse(seg.value), depth + 1)}</u>;
      }
      case 'heading': {
        const cls = seg.level <= 2
          ? 'block mt-4 mb-1.5 text-[15px] font-bold text-[var(--text-primary)]'
          : 'block mt-3 mb-1 text-[13.5px] font-bold text-[var(--text-primary)]';
        return <span key={i} className={cls}>{renderSegs(parse(seg.value), depth + 1)}</span>;
      }
      case 'table':  return <span key={i} className="block my-3 overflow-x-auto" dangerouslySetInnerHTML={{ __html: seg.value }} />;
      case 'mtable': return <PipeTable key={i} raw={seg.value} depth={depth} />;
      case 'img':
        return <img key={i} className="qfig-img" src={seg.value} alt={seg.alt || ''} loading="lazy" />;
      case 'quote':
        return <blockquote key={i} className="qnote"><span>{renderSegs(parse(seg.value), depth + 1)}</span></blockquote>;
      case 'hr':     return <span key={i} className="block my-3 h-px bg-[var(--border)]" />;
      case 'block':  return <MathNode key={i} latex={seg.value} display />;
      case 'inline': return <MathNode key={i} latex={seg.value} display={false} />;
      case 'br':     return <span key={i} className="block h-2" />;
      default:       return <span key={i} style={{ whiteSpace:'pre-wrap' }}>{(seg as {type:'text';value:string}).value}</span>;
    }
  });
}

export default function MathRenderer({ text, className }: Props) {
  if (!text) return null;
  return <span className={className}>{renderSegs(parse(text), 0)}</span>;
}
