"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Our Colleges", href: "/colleges" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "/contact" },
];

function NavInner() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const showFrosted = scrolled || !isHome;

  return (
    <>
      {/* ── PILL NAVBAR ─────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-3 sm:pt-4 sm:px-4 pointer-events-none">
        <nav
          style={{ maxWidth: 720, width: "100%" }}
          className={`pointer-events-auto flex items-center gap-1 pl-2 pr-2 py-1.5 rounded-full border transition-all duration-500
            ${showFrosted
              ? "bg-white/90 backdrop-blur-2xl border-gray-200/70 shadow-xl shadow-black/5"
              : "bg-black/20 backdrop-blur-md border-white/15 shadow-lg"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 mr-2 sm:mr-3 transition-opacity hover:opacity-75">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/heshritha-logo.png"
              alt="Heshritha Educational Services"
              style={{ height: "36px", width: "auto", maxWidth: "130px", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap
                    ${active
                      ? showFrosted ? "bg-black text-white" : "bg-white text-black"
                      : showFrosted ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/15"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a href="tel:+919000850124"
            className={`hidden md:inline-flex items-center justify-center gap-2 ml-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 shrink-0 whitespace-nowrap
              ${showFrosted ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100"}`}
          >
            Book Free Call
          </a>

          {/* Mobile: direct call button (tap-to-call) + hamburger */}
          <div className="md:hidden ml-auto flex items-center gap-1">
            <a href="tel:+919000850124"
              className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors
                ${showFrosted ? "bg-black text-white" : "bg-white text-black"}`}
              aria-label="Call us"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              className={`p-2 rounded-full transition-colors ${showFrosted ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE FULL-SCREEN MENU ─────────────────────────────────── */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 md:hidden
        ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />

        {/* Nav links — start below the pill */}
        <div className="relative flex flex-col flex-1 px-6 pt-28 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href}
                className="flex items-center justify-between py-5 border-b border-gray-100 active:bg-gray-50 rounded-xl px-2 transition-colors"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="text-2xl font-bold text-gray-900">{link.label}</span>
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className="mt-auto flex flex-col gap-3">
            <a href="tel:+919000850124"
              className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-black text-white text-base font-bold uppercase tracking-widest active:scale-[0.98] transition-transform"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91 90008 50124
            </a>
            <a href="https://wa.me/919000850124" target="_blank" rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 text-white text-base font-bold active:scale-[0.98] transition-transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  return (
    <Suspense fallback={
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-3 pointer-events-none">
        <div style={{ maxWidth: 720, width: "100%" }}
          className="pointer-events-auto flex items-center pl-2 pr-2 py-1.5 rounded-full border bg-black/20 backdrop-blur-md border-white/15"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/heshritha-logo.png" alt="Heshritha"
            style={{ height: "36px", width: "auto", maxWidth: "130px", objectFit: "contain" }}
          />
        </div>
      </header>
    }>
      <NavInner />
    </Suspense>
  );
}