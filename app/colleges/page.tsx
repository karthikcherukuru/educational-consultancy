"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

type Stream = "All" | "Engineering" | "Medical" | "Management";

interface College {
  name: string;
  src: string;
  stream: Stream[];
  location: string;
  established: string;
  naac: string;
  courses: string[];
  highlight: string;
}

const colleges: College[] = [
  {
    name: "SRM Institute of Science & Technology",
    src: "/universities/srm.png",
    stream: ["Engineering", "Medical", "Management"],
    location: "Chennai, Tamil Nadu",
    established: "1985",
    naac: "A++",
    courses: ["B.Tech", "MBBS", "MBA", "M.Tech"],
    highlight: "Ranked #1 Private University in India",
  },
  {
    name: "VIT Chennai",
    src: "/universities/VITcc.png",
    stream: ["Engineering", "Management"],
    location: "Chennai, Tamil Nadu",
    established: "2010",
    naac: "A++",
    courses: ["B.Tech", "M.Tech", "MBA", "MCA"],
    highlight: "Top 10 Engineering College in India",
  },
  {
    name: "Amrita Vishwa Vidyapeetham",
    src: "/universities/Amrita.png",
    stream: ["Engineering", "Medical", "Management"],
    location: "Coimbatore, Tamil Nadu",
    established: "1994",
    naac: "A++",
    courses: ["B.Tech", "MBBS", "BDS", "MBA"],
    highlight: "Deemed University with 14 campuses",
  },
  {
    name: "Alliance University",
    src: "/universities/alliance.png",
    stream: ["Management", "Engineering"],
    location: "Bengaluru, Karnataka",
    established: "2010",
    naac: "A",
    courses: ["BBA", "MBA", "B.Tech", "LLB"],
    highlight: "Global faculty from IIMs & IITs",
  },
  {
    name: "Woxsen University",
    src: "/universities/Woxsen.jpg",
    stream: ["Management"],
    location: "Hyderabad, Telangana",
    established: "2020",
    naac: "A",
    courses: ["BBA", "MBA", "B.Des", "B.Tech"],
    highlight: "Harvard Business School curriculum",
  },
  {
    name: "Marwadi University",
    src: "/universities/marwadi.webp",
    stream: ["Engineering", "Management"],
    location: "Rajkot, Gujarat",
    established: "2016",
    naac: "A",
    courses: ["B.Tech", "MBA", "BCA", "MCA"],
    highlight: "200+ industry partnerships",
  },
  {
    name: "Presidency University",
    src: "/universities/Presidency.png",
    stream: ["Engineering", "Management"],
    location: "Bengaluru, Karnataka",
    established: "2013",
    naac: "A",
    courses: ["B.Tech", "BBA", "MBA", "M.Tech"],
    highlight: "1000+ acres sprawling campus",
  },
  {
    name: "Vel Tech University",
    src: "/universities/veltech.png",
    stream: ["Engineering"],
    location: "Chennai, Tamil Nadu",
    established: "1997",
    naac: "A",
    courses: ["B.Tech", "M.Tech", "MCA", "MBA"],
    highlight: "Strong placement record — 500+ recruiters",
  },
  {
    name: "Hindustan Institute of Technology",
    src: "/universities/hindustan.png",
    stream: ["Engineering", "Management"],
    location: "Chennai, Tamil Nadu",
    established: "1985",
    naac: "A",
    courses: ["B.Tech", "MBA", "M.Tech", "BCA"],
    highlight: "Aerospace & aviation specialisation",
  },
  {
    name: "Dhanalakshmi Srinivasan",
    src: "/universities/dhanalakshmi.jpg",
    stream: ["Engineering", "Medical"],
    location: "Perambalur, Tamil Nadu",
    established: "1994",
    naac: "A",
    courses: ["B.Tech", "MBBS", "BDS", "Pharmacy"],
    highlight: "Dedicated hospital for clinical training",
  },
  {
    name: "Atria University",
    src: "/universities/atria.png",
    stream: ["Engineering", "Management"],
    location: "Bengaluru, Karnataka",
    established: "2022",
    naac: "New",
    courses: ["B.Tech", "BBA", "MBA", "B.Des"],
    highlight: "New-age curriculum with MIT collaboration",
  },
];

const streams: Stream[] = ["All", "Engineering", "Medical", "Management"];

const streamColors: Record<Stream, string> = {
  All: "bg-gray-900 text-white",
  Engineering: "bg-blue-600 text-white",
  Medical: "bg-emerald-600 text-white",
  Management: "bg-amber-500 text-white",
};

const streamTagColors: Record<Stream, string> = {
  All: "",
  Engineering: "bg-blue-50 text-blue-700 border-blue-100",
  Medical: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Management: "bg-amber-50 text-amber-700 border-amber-100",
};

const naacColor: Record<string, string> = {
  "A++": "bg-emerald-100 text-emerald-800",
  "A+": "bg-blue-100 text-blue-800",
  A: "bg-gray-100 text-gray-700",
  New: "bg-purple-100 text-purple-700",
};

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function CollegesPage() {
  const [active, setActive] = useState<Stream>("All");

  const filtered =
    active === "All"
      ? colleges
      : colleges.filter((c) => c.stream.includes(active));

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO BANNER ─────────────────────────────────────────────── */}
      <section className="relative bg-black pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
            Our Partner Network
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-5">
            Partner Colleges
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            We have strong admission partnerships with these top-ranked universities across India — spanning Engineering, Medical, and Management streams.
          </p>

          {/* Stream filter tabs */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-1.5">
            {streams.map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  active === s
                    ? streamColors[s]
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {s}
                <span className="ml-2 text-xs opacity-60">
                  {s === "All"
                    ? colleges.length
                    : colleges.filter((c) => c.stream.includes(s)).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLEGE GRID ────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">

          <p className="text-sm text-gray-400 mb-8">
            Showing <span className="font-bold text-gray-700">{filtered.length}</span> college{filtered.length !== 1 ? "s" : ""}
            {active !== "All" ? ` in ${active}` : ""}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((college) => (
              <div
                key={college.name}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Logo area */}
                <div className="h-36 bg-gray-50 border-b border-gray-100 flex items-center justify-center px-8 relative">
                  <Image
                    src={college.src}
                    alt={college.name}
                    width={200}
                    height={80}
                    className="object-contain max-h-20 w-auto"
                  />
                  {/* NAAC badge */}
                  <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${naacColor[college.naac] ?? naacColor["A"]}`}>
                    NAAC {college.naac}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                    {college.name}
                  </h3>

                  {/* Location + Est. */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {college.location}
                    </span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs text-gray-400">Est. {college.established}</span>
                  </div>

                  {/* Highlight */}
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1">
                    {college.highlight}
                  </p>

                  {/* Course pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {college.courses.map((c) => (
                      <span key={c} className="text-xs bg-gray-50 border border-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Stream tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {college.stream.map((s) => (
                      <span key={s} className={`text-xs border px-2.5 py-1 rounded-full font-semibold ${streamTagColors[s]}`}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="tel:+919000850124"
                    className="mt-auto inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-black text-white text-sm font-bold hover:bg-gray-800 transition-colors"
                  >
                    Enquire for Admission
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-black text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure which college fits you?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Our counsellors will analyse your scores and career goals and give you a shortlist in minutes — for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919000850124"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-white text-black px-8 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91 90008 50124
            </a>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-gray-700 text-white px-8 text-sm font-bold uppercase tracking-widest hover:border-white transition-colors"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}