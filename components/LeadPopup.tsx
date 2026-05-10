"use client";

import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show once per browser session. Change key to "heshritha_popup_ever" to show only once ever.
    const seen = sessionStorage.getItem("heshritha_popup_seen");
    if (seen) return;
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setClosing(true);
    sessionStorage.setItem("heshritha_popup_seen", "1");
    setTimeout(() => { setVisible(false); setClosing(false); }, 350);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    // TODO: wire to your backend / EmailJS / Formspree
    setSubmitted(true);
    sessionStorage.setItem("heshritha_popup_seen", "1");
    setTimeout(close, 2800);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${closing ? "opacity-0" : "opacity-100"}`}
        onClick={close}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`pointer-events-auto relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${closing ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-100 translate-y-0"}`}
          style={{ animation: closing ? "none" : "popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both" }}
          onClick={(e) => e.stopPropagation()}
        >

          {/* ── BLACK TOP BANNER ────────────────────────── */}
          <div className="relative bg-black px-8 pt-10 pb-8 overflow-hidden">
            {/* dot grid */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
            {/* ghost text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.04] select-none pointer-events-none" aria-hidden="true">
              <span className="text-[7rem] font-black text-white whitespace-nowrap tracking-tighter">ADMIT</span>
            </div>

            {/* Close */}
            <button onClick={close} aria-label="Close popup" className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Live badge */}
            <div className="relative z-10 inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-gray-300 tracking-wide">Free Consultation · No Commitment</span>
            </div>

            {/* Headline */}
            <h2 className="relative z-10 text-[1.75rem] font-bold text-white leading-tight mb-3">
              Trying to get into your<br />
              <span className="text-emerald-400">dream college?</span>
            </h2>
            <p className="relative z-10 text-sm text-gray-400 leading-relaxed">
              With Heshritha's expert support, 10,000+ students have secured seats in top colleges — even with low scores or a career gap. We know the way in.
            </p>
          </div>

          {/* ── FORM / SUCCESS ──────────────────────────── */}
          <div className="px-8 py-7">
            {submitted ? (
              <div className="flex flex-col items-center py-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-gray-900 mb-1">We'll call you back shortly!</p>
                <p className="text-sm text-gray-500">Our counsellor will reach out to <strong>{name}</strong> within 24 hours.</p>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-gray-700 mb-5">
                  Drop your details — our senior counsellor will call you back, for free.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 active:scale-[0.98] transition-all"
                  >
                    Get a Free Callback
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-xs text-gray-400 font-medium">or reach us directly</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                <div className="flex gap-3">
                  <a href="tel:+919000850124" className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-black transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                  <a href="https://wa.me/919000850124" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>

                <p className="text-xs text-gray-400 text-center mt-4">We respect your privacy. No spam, ever.</p>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popupIn {
          0%   { opacity: 0; transform: scale(0.88) translateY(24px); }
          100% { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </>
  );
}