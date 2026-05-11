"use client";

import { useState } from "react";

// ─── Web3Forms ────────────────────────────────────────────────────────────────
// Same key as LeadPopup — paste your key here too
const WEB3FORMS_KEY = "f99d52e9-de83-4ec8-b8d1-a9eaa4b8b90f";
// ─────────────────────────────────────────────────────────────────────────────

type Stream = "Engineering" | "Medical" | "Management" | "Other";
type Status = "idle" | "loading" | "success" | "error";

const streams: Stream[] = ["Engineering", "Medical", "Management", "Other"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    stream: "" as Stream | "",
    score: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.stream) return;
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `📋 New Enquiry: ${form.name} (${form.stream}) — ${form.phone}`,
          from_name: "Heshritha Website",
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          stream: form.stream,
          score: form.score || "Not provided",
          budget: form.budget || "Not provided",
          message: form.message || "No message",
          source: "Contact Form",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-black pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container mx-auto px-5 sm:px-6 relative z-10 text-center">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Get in touch</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5">
            Let's Find Your<br />Dream College
          </h1>
          <p className="text-sm sm:text-lg text-gray-400 max-w-xl mx-auto">
            Fill in your details and our senior counsellor will call you back within 24 hours — completely free.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

            {/* Left — contact info */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-7 shadow-sm">
                <h2 className="text-base font-bold text-gray-900 mb-5">Reach us directly</h2>

                <a href="tel:+919000850124" className="flex items-center gap-4 p-4 rounded-2xl bg-black text-white active:bg-gray-800 transition-colors mb-3 touch-manipulation">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Call us now</p>
                    <p className="font-bold text-base">+91 90008 50124</p>
                  </div>
                </a>

                <a href="https://wa.me/919000850124" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500 text-white active:bg-emerald-600 transition-colors mb-3 touch-manipulation">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-emerald-100 font-medium mb-0.5">WhatsApp us</p>
                    <p className="font-bold text-base">+91 90008 50124</p>
                  </div>
                </a>

                <a href="mailto:contact@heshrithaeducational.in" className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors touch-manipulation">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Email us</p>
                    <p className="font-bold text-sm text-gray-900 break-all">contact@heshrithaeducational.in</p>
                  </div>
                </a>
              </div>

              {/* Office */}
              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-7 shadow-sm">
                <h2 className="text-base font-bold text-gray-900 mb-4">Our Office</h2>
                <div className="flex gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Heshritha Educational Services</p>
                    <p className="text-sm text-gray-500 leading-relaxed">Hyderabad, Telangana, India</p>
                    <p className="text-xs text-gray-400 mt-1.5">Mon – Sat · 9 AM to 7 PM</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-100 h-40">
                  <iframe
                    title="Heshritha office — Hyderabad"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3166516163!2d78.24323046289062!3d17.412281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699000000000"
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Trust */}
              <div className="bg-black rounded-3xl p-6 space-y-3">
                {["Free first consultation — no commitment", "Response within 24 hours guaranteed", "15+ years of proven expertise", "10,000+ students successfully admitted"].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Enquiry received!</h3>
                    <p className="text-gray-500 max-w-sm mb-8">
                      Our senior counsellor will call <strong>{form.phone}</strong> within 24 hours.
                    </p>
                    <a href="tel:+919000850124" className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-8 py-3 text-sm font-bold active:bg-gray-800 transition-colors touch-manipulation">
                      Call +91 90008 50124
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Send an Enquiry</h2>
                      <p className="text-sm text-gray-400">Fields marked * are required.</p>
                    </div>

                    {status === "error" && (
                      <div className="mb-4 p-4 rounded-2xl bg-red-50 border border-red-100 text-sm text-red-600">
                        Something went wrong. Please call us at{" "}
                        <a href="tel:+919000850124" className="font-bold underline">+91 90008 50124</a>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                          <input type="text" name="name" value={form.name} onChange={handleChange} required
                            placeholder="Aarav Sharma" autoComplete="name" style={{ fontSize: "16px" }}
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors touch-manipulation" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number <span className="text-red-400">*</span></label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                            placeholder="+91 98765 43210" autoComplete="tel" inputMode="numeric" style={{ fontSize: "16px" }}
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors touch-manipulation" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="aarav@email.com" autoComplete="email" style={{ fontSize: "16px" }}
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors touch-manipulation" />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Stream <span className="text-red-400">*</span></label>
                        <div className="flex flex-wrap gap-2">
                          {streams.map((s) => (
                            <button key={s} type="button" onClick={() => setForm((p) => ({ ...p, stream: s }))}
                              className={`px-4 py-2.5 rounded-full text-sm font-semibold border transition-all touch-manipulation ${form.stream === s ? "bg-black text-white border-black" : "bg-white text-gray-600 border-gray-200 active:border-gray-400"}`}>
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Exam Score / %</label>
                          <input type="text" name="score" value={form.score} onChange={handleChange}
                            placeholder="e.g. JEE 85 percentile" style={{ fontSize: "16px" }}
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors touch-manipulation" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Annual Budget</label>
                          <select name="budget" value={form.budget} onChange={handleChange} style={{ fontSize: "16px" }}
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-white appearance-none touch-manipulation">
                            <option value="">Select range</option>
                            <option>Below ₹2 Lakh / year</option>
                            <option>₹2 – 5 Lakh / year</option>
                            <option>₹5 – 10 Lakh / year</option>
                            <option>Above ₹10 Lakh / year</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Anything else?</label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                          placeholder="Tell us about your goals, preferred colleges, location preference..."
                          style={{ fontSize: "16px" }}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none touch-manipulation" />
                      </div>

                      <button type="submit" disabled={status === "loading" || !form.name || !form.phone || !form.stream}
                        className="w-full h-14 rounded-2xl bg-black text-white font-bold text-sm uppercase tracking-widest active:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 touch-manipulation">
                        {status === "loading" ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : "Submit Enquiry — Get a Free Callback"}
                      </button>

                      <p className="text-xs text-gray-400 text-center">By submitting you agree to be contacted by our team.</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}