import { Flag } from 'lucide-react';

interface QuizQuestion {
  id: string;
  type: string;
  difficulty: string;
  text: string;
  question?: string;
  options?: string[] | { label: string; text: string }[];
  correctAnswer: string;
}

interface QuestionCardProps {
  question: QuizQuestion;
  currentIndex: number;
  total: number;
  onAnswer: (questionId: string, answer: string) => void;
  onSkip: () => void;
  onNavigate: (index: number) => void;
  answer?: string;
  marked?: boolean;
  onToggleMark?: () => void;
}

const TYPE_LABELS: Record<string, string> = {
  mcq: 'MCQ',
  fill_blank: 'Fill in the Blank',
  match_following: 'Match the Following',
  short_answer: 'Short Answer',
  long_answer: 'Long Answer',
  assertion_reason: 'Assertion & Reason',
  numerical: 'Numerical',
  competency: 'Competency',
  hots: 'HOTS',
  case_based: 'Case-based',
};

const DIFFICULTY_STYLES: Record<string, { bg: string; color: string }> = {
  easy: { bg: '#22c55e22', color: '#22c55e' },
  moderate: { bg: '#f59e0b22', color: '#f59e0b' },
  hard: { bg: '#ef444422', color: '#ef4444' },
};

/** Options may be plain strings or { label, text } pairs — normalize for display/answer. */
function optText(opt: string | { label: string; text: string }): string {
  return typeof opt === 'string' ? opt : `${opt.label}. ${opt.text}`;
}

export default function QuestionCard({
  question,
  currentIndex,
  total,
  onAnswer,
  onSkip,
  onNavigate,
  answer,
  marked,
  onToggleMark,
}: QuestionCardProps) {
  const typeLabel = TYPE_LABELS[question.type] || question.type;
  const diffStyle = DIFFICULTY_STYLES[question.difficulty] || DIFFICULTY_STYLES.moderate;
  const hasOptions = Array.isArray(question.options) && question.options.length > 0 &&
    question.options.every((o) => typeof o === 'string');

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header badges */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{ background: 'var(--brand-primary)', color: '#fff' }}
        >
          Q{currentIndex + 1}
        </span>
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: diffStyle.bg, color: diffStyle.color }}
        >
          {question.difficulty}
        </span>
        <span
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
        >
          {typeLabel}
        </span>
        {onToggleMark && (
          <button
            onClick={onToggleMark}
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200"
            style={{
              background: marked ? 'rgba(168,85,247,0.15)' : 'transparent',
              borderColor: marked ? '#a855f7' : 'var(--border)',
              color: marked ? '#a855f7' : 'var(--text-muted)',
            }}
          >
            <Flag size={12} fill={marked ? '#a855f7' : 'none'} />
            {marked ? 'Marked for Review' : 'Mark for Review'}
          </button>
        )}
      </div>

      {/* Question text */}
      <p
        className="text-base font-medium leading-relaxed mb-6"
        style={{ color: 'var(--text-primary)' }}
      >
        {question.text || question.question}
      </p>

      {/* Answer area */}
      <div className="space-y-3">
        {/* Any question WITH options -> MCQ-style buttons (mcq, assertion_reason, hots, competency, case_based) */}
        {hasOptions && question.type !== 'match_following' && question.options!.map((opt, i) => {
          const letter = String.fromCharCode(65 + i);
          const isSelected = answer === opt;
          return (
            <button
              key={i}
              onClick={() => onAnswer(question.id, optText(opt))}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left border transition-all duration-200"
              style={{
                background: isSelected ? 'var(--brand-primary)15' : 'var(--surface-2)',
                borderColor: isSelected ? 'var(--brand-primary)' : 'var(--border)',
              }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  background: isSelected ? 'var(--brand-primary)' : 'var(--surface-0)',
                  color: isSelected ? '#fff' : 'var(--text-muted)',
                }}
              >
                {letter}
              </span>
              <span style={{ color: isSelected ? 'var(--brand-primary)' : 'var(--text-primary)' }}>
                {optText(opt)}
              </span>
            </button>
          );
        })}

        {/* Fill in the blank / Numerical (no options) -> text input */}
        {!hasOptions && (question.type === 'fill_blank' || question.type === 'numerical') && (
          <input
            type={question.type === 'numerical' ? 'text' : 'text'}
            inputMode={question.type === 'numerical' ? 'decimal' : 'text'}
            value={answer || ''}
            onChange={(e) => onAnswer(question.id, e.target.value)}
            placeholder={question.type === 'numerical' ? 'Enter the numeric answer...' : 'Type your answer...'}
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200"
            style={{
              background: 'var(--surface-2)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
          />
        )}

        {/* Match the following */}
        {question.type === 'match_following' && hasOptions && (
          <div className="space-y-2">
            <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
              Match each item by selecting the correct pair:
            </p>
            {question.options!.map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 px-3 py-2 text-sm" style={{ color: 'var(--text-primary)' }}>
                  {optText(opt)}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>→</span>
                <select
                  value={answer?.split(',')[i] || ''}
                  onChange={(e) => {
                    const pairs = (answer || question.options!.map(() => '').join(',')).split(',');
                    pairs[i] = e.target.value;
                    onAnswer(question.id, pairs.join(','));
                  }}
                  className="px-3 py-2 rounded-lg border text-sm outline-none"
                  style={{
                    background: 'var(--surface-2)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <option value="">Select</option>
                  {question.options!.map((o, j) => (
                    <option key={j} value={String.fromCharCode(65 + j)}>
                      {String.fromCharCode(65 + j)}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}

        {/* Short / Long Answer & any other type without options -> textarea */}
        {!hasOptions && !['fill_blank', 'numerical', 'match_following'].includes(question.type) && (
          <textarea
            value={answer || ''}
            onChange={(e) => onAnswer(question.id, e.target.value)}
            placeholder="Write your answer here..."
            rows={question.type === 'long_answer' ? 8 : 4}
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-y transition-all duration-200"
            style={{
              background: 'var(--surface-2)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
          />
        )}
      </div>
    </div>
  );
}
