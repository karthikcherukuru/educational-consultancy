"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Our Colleges", href: "/colleges" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "/contact" },
];

// ─── INNER NAV ────────────────────────────────────────────────────────────────
// usePathname() must live inside a Suspense boundary in Next.js App Router.
// Without Suspense, Next.js treats the whole route as dynamic and the browser
// spinner never stops. This split (NavInner + Suspense wrapper) is the fix.

function NavInner() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isHome = pathname === "/";
  const showFrosted = scrolled || !isHome;

  return (
    <>
      {/* ── GLASSMORPHISM PILL HEADER ──────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <nav
          style={{ maxWidth: 720, width: "100%" }}
          className={`
            pointer-events-auto flex items-center gap-1 pl-2 pr-2 py-1.5
            rounded-full border transition-all duration-500
            ${showFrosted
              ? "bg-white/85 backdrop-blur-2xl border-gray-200/70 shadow-xl shadow-black/5"
              : "bg-black/20 backdrop-blur-md border-white/15 shadow-lg"
            }
          `}
        >
          {/* LOGO — plain <img> avoids Next.js Image config/dimension issues */}
          <Link href="/" className="flex items-center shrink-0 mr-3 transition-opacity hover:opacity-75">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/heshritha-logo.png"
              alt="Heshritha Educational Services"
              style={{ height: "40px", width: "auto", maxWidth: "150px", objectFit: "contain", display: "block" }}
            />
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 rounded-full text-sm font-semibold tracking-wide
                    transition-all duration-200 whitespace-nowrap
                    ${active
                      ? showFrosted ? "bg-black text-white" : "bg-white text-black"
                      : showFrosted ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/15"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA — calls directly */}
          <a
            href="tel:+919000850124"
            className={`
              hidden md:inline-flex items-center justify-center gap-2
              ml-2 px-5 py-2.5 rounded-full text-sm font-bold
              transition-all duration-200 shrink-0 whitespace-nowrap
              ${showFrosted ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100"}
            `}
          >
            Book Free Call
          </a>

          {/* MOBILE HAMBURGER */}
          <button
            className={`md:hidden ml-auto p-2 rounded-full transition-colors
              ${showFrosted ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </nav>
      </header>

      {/* ── MOBILE FULL-SCREEN MENU ─────────────────────────────────────── */}
      <div className={`
        fixed inset-0 z-40 bg-white flex flex-col pt-28 px-8 pb-10
        transition-all duration-300 md:hidden
        ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="relative flex flex-col gap-2 flex-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="flex items-center justify-between py-5 border-b border-gray-100 text-2xl font-bold text-gray-900"
            >
              {link.label}
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
        <a href="tel:+919000850124"
          className="relative mt-6 inline-flex h-16 w-full items-center justify-center rounded-2xl bg-black text-white text-base font-bold uppercase tracking-widest"
        >
          Book a Free Consultation
        </a>
        <p className="relative text-center text-sm text-gray-400 mt-4">
          Call us: <a href="tel:+919000850124" className="text-gray-700 font-semibold">+91 90008 50124</a>
        </p>
      </div>
    </>
  );
}

// ─── EXPORTED HEADER ─────────────────────────────────────────────────────────
// Suspense fallback shows the pill shell instantly while JS boots,
// preventing the infinite browser loading spinner.

export default function Header() {
  return (
    <Suspense fallback={
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <div style={{ maxWidth: 720, width: "100%" }}
          className="pointer-events-auto flex items-center pl-2 pr-2 py-1.5 rounded-full border bg-black/20 backdrop-blur-md border-white/15"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/heshritha-logo.png" alt="Heshritha"
            style={{ height: "40px", width: "auto", maxWidth: "150px", objectFit: "contain", display: "block" }}
          />
        </div>
      </header>
    }>
      <NavInner />
    </Suspense>
  );
}