import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Founder & Team | Heshritha Educational Services",
  description: "Meet Durga Prasad, Chairman of Heshritha Educational Services, and our team of 20+ expert counsellors.",
};

const founderStats = [
  { value: "15+", label: "Years guiding students" },
  { value: "10K+", label: "Students admitted" },
  { value: "20+", label: "Expert counsellors" },
];

const teamValues = [
  { title: "Stream Specialists", desc: "Dedicated counsellors for Engineering, Medical, and Management — each an expert in their domain." },
  { title: "Always Reachable", desc: "Our team stays available through every stage, from your first call to your final admission." },
  { title: "Student-First Approach", desc: "We map every student to the right college based on their goals, not just their rank." },
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ══ HERO ════════════════════════════════════════════════════════ */}
      <section className="relative bg-black pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container mx-auto px-5 sm:px-6 relative z-10 text-center">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Who we are</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5">
            Meet the People<br />Behind Heshritha
          </h1>
          <p className="text-sm sm:text-lg text-gray-400 max-w-xl mx-auto">
            Built on 15 years of experience and a genuine commitment to every student&apos;s future.
          </p>
        </div>
      </section>

      {/* ══ FOUNDER ═════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">

            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <Image src="/founder.png" alt="Durga Prasad — Chairman of Heshritha Educational Services" fill className="object-cover object-center" />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3">
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Chairman &amp; Founder</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Durga Prasad</h2>

              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  For over 15 years, Durga Prasad has dedicated his career to a single mission — making sure no student loses their way for lack of the right guidance. What began as informal advice to a handful of families in Hyderabad has grown into Heshritha Educational Services, a consultancy that has shaped the futures of more than 10,000 students.
                </p>
                <p>
                  His belief is simple: a low score, a gap year, or a tight budget should never close the door on a deserving student. Under his leadership, the team has built a reputation for finding the path others miss — whether through management quota seats, scholarship negotiations, or simply taking the time to understand what a student truly wants from their career.
                </p>
                <p>
                  Today, Durga Prasad continues to personally oversee the consultancy&apos;s standards, ensuring that every family who walks through the door receives the same honest, patient, and strategic guidance that built Heshritha&apos;s name.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-8">
                {founderStats.map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 tabular-nums">{s.value}</div>
                    <div className="text-[11px] sm:text-xs text-gray-500 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ══ TEAM ════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">The Team</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-3">
              A Team of <span className="font-bold">20+ Counsellors</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500">Behind every admission is a counsellor who cared enough to get it right.</p>
          </div>

          <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden shadow-md max-w-5xl mx-auto mb-10 sm:mb-14">
            {/* TODO: replace this Pexels URL with /india-team.jpg once you upload it */}
            <Image src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Heshritha counselling team" fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {teamValues.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ═════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Get in touch</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-3">
              Reach <span className="font-bold">Heshritha</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500">We&apos;re here six days a week to answer your questions.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* Contact cards */}
            <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-7 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-5">Reach us directly</h3>

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
              <h3 className="text-base font-bold text-gray-900 mb-4">Our Office</h3>
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
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-44">
                <iframe
                  title="Heshritha office — Hyderabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3166516163!2d78.24323046289062!3d17.412281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699000000000"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container mx-auto px-5 sm:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4 max-w-2xl mx-auto">
            Let&apos;s build your future together.
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Talk to our team today — your first consultation is completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center max-w-sm sm:max-w-none mx-auto">
            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-8 text-sm font-bold uppercase tracking-widest text-black active:scale-[0.97] transition-transform shadow-2xl">
              Send an Enquiry
            </Link>
            <a href="tel:+919000850124" className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border-2 border-gray-700 px-8 text-sm font-bold uppercase tracking-widest text-white active:scale-[0.97] transition-transform hover:border-white">
              Call +91 90008 50124
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}