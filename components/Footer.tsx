import Link from "next/link";
import Image from "next/image";

const phones = [
  { label: "Main",        number: "9000850124" },
  { label: "Support",     number: "9848438688" },
  { label: "Admissions",  number: "8374336446" },
];

const branches = [
  "Hyderabad", "Warangal", "Khammam", "Sathupalli",
  "Vijayawada", "Ongole", "Nellore", "Badvel",
  "Tirupati", "Vizag", "Ananthapur",
];

const quickLinks = [
  { label: "Home",        href: "/" },
  { label: "Our Colleges", href: "/colleges" },
  { label: "Services",    href: "/#services" },
  { label: "Contact Us",  href: "/contact" },
];

const streams = [
  { label: "Engineering Admissions",  href: "/contact" },
  { label: "Medical (MBBS / BDS)",    href: "/contact" },
  { label: "Management (MBA / BBA)",  href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">

      {/* ── TOP CTA STRIP ─────────────────────────────────────────────── */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-5 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          
          {/* Logo + tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Image
              src="/heshritha-logo.png"
              alt="Heshritha Educational Services"
              width={130}
              height={48}
              className="h-11 w-auto object-contain brightness-0 invert"
            />
            <div className="hidden sm:block w-px h-10 bg-white/10 shrink-0" />
            <p className="text-sm text-gray-400 max-w-xs">
              Expert counselling for Engineering, Medical & Management admissions across India.
            </p>
          </div>

          {/* CTA — full width on mobile */}
          <a
            href="tel:+919000850124"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-6 py-3.5 rounded-2xl text-sm font-bold uppercase tracking-widest active:scale-[0.97] transition-transform touch-manipulation shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book Free Call
          </a>
        </div>
      </div>

      {/* ── MAIN GRID ─────────────────────────────────────────────────── */}
      {/* Mobile: single column accordion-style. Desktop: 4-col grid */}
      <div className="container mx-auto px-5 sm:px-6 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

        {/* ── Col 1: Contact ── */}
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-5">Contact Us</h4>

          <div className="space-y-4 mb-6">
            {phones.map((p) => (
              <a
                key={p.number}
                href={`tel:+91${p.number}`}
                className="flex items-center gap-3 group touch-manipulation"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 group-active:bg-white/10 flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-medium leading-none mb-0.5">{p.label}</p>
                  <p className="text-sm text-gray-200 font-semibold">+91 {p.number}</p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="mailto:contact@heshrithaeducational.in"
            className="flex items-center gap-3 group mb-5 touch-manipulation"
          >
            <div className="w-9 h-9 rounded-xl bg-white/5 group-active:bg-white/10 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-gray-300 break-all leading-tight">contact@heshrithaeducational.in</p>
          </a>

          <a
            href="https://wa.me/919000850124"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold active:bg-emerald-500/20 transition-colors touch-manipulation"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-5">Quick Links</h4>
          <div className="flex flex-col gap-1">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 py-2.5 text-sm text-gray-400 active:text-white transition-colors touch-manipulation"
              >
                <svg className="w-3 h-3 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {l.label}
              </Link>
            ))}
          </div>

          <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4 mt-7">Services</h4>
          <div className="flex flex-col gap-1">
            {streams.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex items-center gap-2 py-2.5 text-sm text-gray-400 active:text-white transition-colors touch-manipulation"
              >
                <svg className="w-3 h-3 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Col 3 + 4: Branches (span 2 on desktop) ── */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-5">Our Branches</h4>

          {/* Pill tags — wrap naturally on all screen sizes */}
          <div className="flex flex-wrap gap-2">
            {branches.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 border border-white/8 text-sm text-gray-300 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                {city}
              </span>
            ))}
          </div>

          {/* Trust stats — 3-col grid, full width on mobile */}
          <div className="grid grid-cols-3 gap-3 mt-7">
            {[
              { value: "15+",  label: "Years" },
              { value: "10K+", label: "Students" },
              { value: "50+",  label: "Colleges" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                <p className="text-xl sm:text-2xl font-bold text-white mb-0.5">{s.value}</p>
                <p className="text-[10px] sm:text-xs text-gray-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div
          className="container mx-auto px-5 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
        >
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {year} Heshritha Educational Services. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-gray-600">Privacy Policy</span>
            <span className="text-xs text-gray-600">Terms of Service</span>
          </div>
        </div>
      </div>

    </footer>
  );
}