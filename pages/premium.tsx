import React, { useState } from 'react';
import { Crown, Check, QrCode, Upload, Loader2, Shield, X, ArrowRight, Sparkles } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useAuthStore } from '@/store/authStore';
import { validateUTR } from '@/utils/helpers';
import { supabase } from '@/lib/supabase';
import { cn } from '@/utils/helpers';
import toast from 'react-hot-toast';

const FEATURES = [
  'Unlimited solved answers access',
  'AI Learn — full access',
  'Quizzes & practice papers',
  'Mock tests',
  'Study Room — up to 10 friends',
  'Priority AI responses',
  'Download solutions as PDF',
];

type Step = 'info' | 'qr' | 'utr' | 'verifying' | 'success' | 'manual';

export default function PremiumPage() {
  const { user } = useAuthStore();

  const [step,       setStep]      = useState<Step>('info');
  const [utr,        setUtr]       = useState('');
  const [screenshot, setScreenshot] = useState<File|null>(null);
  const [preview,    setPreview]   = useState('');
  const [loading,    setLoading]   = useState(false);
  const [utrError,   setUtrError]  = useState('');
  const [paymentId,  setPaymentId] = useState('');
  const [aiResult,   setAiResult]  = useState<{verified:boolean;confidence:string;reason:string}|null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setScreenshot(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleSubmit() {
    setUtrError('');
    if (!validateUTR(utr))    return setUtrError('UTR must be exactly 12 digits (numbers only).');
    if (!screenshot && !user) return setUtrError('Please upload your payment screenshot.');
    if (!user)                return;

    setLoading(true);
    setStep('verifying');

    try {
      let screenshotUrl: string | null = null;

      // Upload screenshot
      if (screenshot) {
        const ext  = screenshot.name.split('.').pop();
        const path = `payments/${user.id}/${Date.now()}.${ext}`;
        const { data: up } = await supabase.storage.from('payment-screenshots').upload(path, screenshot, { contentType: screenshot.type });
        if (up) screenshotUrl = supabase.storage.from('payment-screenshots').getPublicUrl(path).data.publicUrl;
      }

      // Save payment record
      const pid  = crypto.randomUUID();
      await supabase.from('payments').insert({
        id: pid, user_id: user.id, amount: 99, utr_number: utr,
        screenshot_url: screenshotUrl, status: 'pending', plan_months: 1,
      });
      setPaymentId(pid);

      // AI verify
      const desc = screenshot ? `Payment screenshot uploaded. File: ${screenshot.name}, size: ${screenshot.size} bytes.` : 'No screenshot provided.';
      const res  = await fetch('/api/payment/verify', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentId: pid, utr, amount: 99, screenshotDescription: desc }),
      });
      const result = await res.json();
      setAiResult(result);

      if (result.verified && result.confidence !== 'low') {
        setStep('success');
        toast.success('Payment verified! Premium activated.');
      } else {
        setStep('manual');
      }
    } catch {
      setUtrError('Submission failed. Please try again.');
      setStep('utr');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout title="SolveNCERT Premium — Rs. 99/month | Unlimited NCERT Solutions" description="Unlock full SolveNCERT access for just Rs. 99/month. Unlimited NCERT solutions, AI Learn, quizzes, mock tests, study rooms and PDF downloads for CBSE Class 9." canonical="/premium">
      <div className="max-w-screen-sm mx-auto px-6 py-12 space-y-8">

        {/* Step: Info */}
        {step === 'info' && (
          <>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 mb-4 shadow-glow-amber">
                <Crown size={24} className="text-white" />
              </div>
              <h1 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-2">SolveNCERT Premium</h1>
              <p className="text-[var(--text-muted)]">Unlock everything. Study smarter.</p>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-100 dark:border-blue-900 text-center">
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                <Sparkles size={13} className="inline -mt-0.5 mr-1" />All users get <strong>1 month free trial</strong> — no card required!
              </p>
            </div>

            <div className="card p-8 border-amber-200 dark:border-amber-800 ring-1 ring-amber-100 dark:ring-amber-900">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-display font-bold text-[var(--text-primary)]">Rs. 99</span>
                <span className="text-[var(--text-muted)]">/ month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                    <Check size={15} className="text-green-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => user ? setStep('qr') : toast.error('Please sign in first.')}
                className="btn-primary w-full justify-center text-sm">
                Get Premium — Rs. 99 <ArrowRight size={14} />
              </button>
            </div>
          </>
        )}

        {/* Step: QR */}
        {step === 'qr' && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-2">Scan & Pay Rs. 99</h2>
              <p className="text-sm text-[var(--text-muted)]">Pay via any UPI app and save the screenshot.</p>
            </div>
            <div className="flex justify-center">
              <div className="w-56 h-56 rounded-2xl bg-[var(--surface-2)] border-2 border-dashed border-[var(--border)] flex flex-col items-center justify-center gap-3">
                <QrCode size={64} className="text-[var(--text-muted)]" />
                <p className="text-xs text-[var(--text-muted)] text-center px-4">QR code will appear here once UPI ID is configured</p>
              </div>
            </div>
            <div className="p-4 bg-[var(--surface-1)] rounded-xl border border-[var(--border)] text-center">
              <p className="text-xs text-[var(--text-muted)] mb-1">Amount</p>
              <p className="text-xl font-bold text-[var(--text-primary)]">Rs. 99.00</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">SolveNCERT Premium · 1 Month</p>
            </div>
            <button onClick={() => setStep('utr')} className="btn-primary w-full justify-center">
              I've Paid — Enter UTR <ArrowRight size={14} />
            </button>
            <button onClick={() => setStep('info')} className="btn-ghost w-full justify-center text-sm">Back</button>
          </div>
        )}

        {/* Step: UTR */}
        {step === 'utr' && (
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-1">Verify Payment</h2>
              <p className="text-sm text-[var(--text-muted)]">Enter your 12-digit UTR and upload the payment screenshot. Our AI will verify instantly.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">12-Digit UTR Number</label>
              <input type="text" maxLength={12} placeholder="Enter UTR number"
                value={utr} onChange={e => { setUtr(e.target.value.replace(/\D/g,'')); setUtrError(''); }}
                className="input-field font-mono tracking-widest text-center text-lg" />
              <p className="text-xs text-[var(--text-muted)] mt-1">Found in your UPI app under transaction details</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Payment Screenshot</label>
              {preview ? (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="Payment screenshot preview" className="w-full rounded-xl border border-[var(--border)] max-h-48 object-contain bg-[var(--surface-1)]" />
                  <button onClick={() => { setScreenshot(null); setPreview(''); }}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center">
                    <X size={13} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center gap-2 p-8 rounded-xl border-2 border-dashed border-[var(--border)] hover:border-blue-400 cursor-pointer transition-colors bg-[var(--surface-1)]">
                  <Upload size={24} className="text-[var(--text-muted)]" />
                  <p className="text-sm text-[var(--text-muted)]">Click to upload screenshot</p>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>
              )}
            </div>

            {utrError && <p className="text-xs text-red-500 bg-red-50 dark:bg-red-950/30 rounded-lg px-3 py-2">{utrError}</p>}

            <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900">
              <Sparkles size={14} className="text-blue-500 flex-shrink-0" />
              <p className="text-xs text-blue-700 dark:text-blue-300">AI will verify your payment automatically within seconds.</p>
            </div>

            <button onClick={handleSubmit} disabled={loading} className="btn-primary w-full justify-center">
              {loading ? <Loader2 size={16} className="animate-spin" /> : <><Shield size={14} /> Submit for AI Verification</>}
            </button>
          </div>
        )}

        {/* Step: Verifying */}
        {step === 'verifying' && (
          <div className="text-center py-12 space-y-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto">
              <Sparkles size={26} className="text-blue-600 animate-pulse" />
            </div>
            <h2 className="text-xl font-display font-bold text-[var(--text-primary)]">AI is Verifying…</h2>
            <p className="text-sm text-[var(--text-muted)]">Checking your UTR number and payment screenshot. This takes just a moment.</p>
            <div className="flex justify-center gap-1.5 pt-2">
              {[0,150,300].map(d => (
                <span key={d} className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay:`${d}ms` }} />
              ))}
            </div>
          </div>
        )}

        {/* Step: Success */}
        {step === 'success' && (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/15 to-teal-500/10 flex items-center justify-center mx-auto border border-emerald-200/60 dark:border-emerald-500/30">
              <Check size={28} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">Premium Activated</h2>
            <p className="text-[var(--text-muted)] max-w-sm mx-auto text-sm">Your payment was verified by AI. Premium access is now active. Enjoy unlimited learning!</p>
            {aiResult && <p className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30 rounded-lg px-4 py-2">{aiResult.reason}</p>}
          </div>
        )}

        {/* Step: Manual review needed */}
        {step === 'manual' && (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto">
              <Shield size={28} className="text-amber-600" />
            </div>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">Under Review</h2>
            <p className="text-[var(--text-muted)] max-w-sm mx-auto text-sm">
              Our AI flagged this for manual verification. Your payment has been received and will be reviewed within 2–4 hours.
            </p>
            {aiResult && <p className="text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 rounded-lg px-4 py-2">{aiResult.reason}</p>}
            <p className="text-xs text-[var(--text-muted)]">UTR: <strong className="font-mono">{utr}</strong></p>
          </div>
        )}
      </div>
    </Layout>
  );
}
