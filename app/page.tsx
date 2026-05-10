"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const colleges = [
  { name: "Alliance University", src: "/universities/alliance.png" },
  { name: "Amrita Vishwa Vidyapeetham", src: "/universities/Amrita.png" },
  { name: "Dhanalakshmi Srinivasan", src: "/universities/dhanalakshmi.jpg" },
  { name: "Hindustan Institute", src: "/universities/hindustan.png" },
  { name: "Marwadi University", src: "/universities/marwadi.webp" },
  { name: "Presidency University", src: "/universities/Presidency.png" },
  { name: "SRM Institute", src: "/universities/srm.png" },
  { name: "Vel Tech", src: "/universities/veltech.png" },
  { name: "VIT Chennai", src: "/universities/VITcc.png" },
  { name: "Woxsen University", src: "/universities/Woxsen.jpg" },
  { name: "Atria University", src: "/universities/atria.png" },
];

const testimonials = [
  {
    name: "Aarav Sharma",
    admittedTo: "Admitted to VIT Chennai",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "I was completely overwhelmed by the application process. The experts at Heshritha helped me shortlist the right campuses based on my mock scores and handled my entire portfolio. I couldn't have done it without them.",
  },
  {
    name: "Priya Reddy",
    admittedTo: "Admitted to SRM Institute",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "The personalized career guidance was the game changer for me. They didn't just push me into any college; they found the one that perfectly aligned with my goal of studying AI.",
  },
  {
    name: "Karthik Verma",
    admittedTo: "Admitted to Amrita Vishwa Vidyapeetham",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "From profile building to the final interview prep, the 15 years of experience they have really shows. My mentor was available literally 24/7.",
  },
  {
    name: "Sneha Patel",
    admittedTo: "Admitted to Woxsen University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    quote: "A brilliant team! They simplified the complex fee structures, guided us on scholarships, and made the entire documentation process a breeze. My parents and I are so grateful.",
  },
  {
    name: "Rahul Desai",
    admittedTo: "Admitted to Alliance University",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    quote: "I thought my academic gap year would ruin my chances of getting into a top management program. The strategic planning by Heshritha helped me frame my story perfectly. Highly recommended!",
  },
  {
    name: "Neha Krishnan",
    admittedTo: "Admitted to Presidency University",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: "The best educational consultants in the business. Period. They genuinely care about your future.",
  },
];

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Book a no-obligation call with our senior counsellors. We assess your academic profile, entrance scores, budget, and career goals to understand exactly what you need.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Profile Building & Shortlisting",
    description: "Our experts craft your complete student profile and create a curated list of colleges that match your scores, stream preference, and future aspirations — no guesswork.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Application & Documentation",
    description: "We handle the entire paperwork — application forms, SOP writing, scholarship applications, fee negotiations, and all documentation — so you can focus on your studies.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Admission & Beyond",
    description: "We celebrate your admission and continue supporting you — from hostel arrangements and fee payment guidance to interview preparation for scholarship rounds.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Engineering Admissions",
    subtitle: "B.Tech / M.Tech",
    description: "Specialised counselling for JEE, KCET, AP EAMCET, TS EAMCET, and management quota seats across top private engineering colleges.",
    features: ["Score-based shortlisting", "Branch & campus guidance", "Scholarship negotiation", "Direct admission support"],
    accent: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Medical Admissions",
    subtitle: "MBBS / BDS / BAMS",
    description: "End-to-end NEET counselling for government and private medical colleges, including deemed universities and NRI quota admissions.",
    features: ["NEET score analysis", "State quota counselling", "NRI / Management quota", "Bond & fee guidance"],
    accent: "from-emerald-50 to-emerald-100",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Management Admissions",
    subtitle: "MBA / BBA / B.Com",
    description: "Strategic placement into premier management programs, including guidance for CAT, MAT, CMAT scores and direct admission routes.",
    features: ["CAT / MAT score mapping", "Top B-school shortlisting", "SOP & LOR assistance", "Group discussion prep"],
    accent: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const stats = [
  { value: 15,    suffix: "+", label: "Years of Experience", description: "Serving students since 2009" },
  { value: 10000, suffix: "+", label: "Students Admitted",   description: "Across all streams" },
  { value: 98,    suffix: "%", label: "Success Rate",        description: "Students secure a seat" },
  { value: 50,    suffix: "+", label: "Partner Colleges",    description: "Across India" },
];

const faqs = [
  {
    q: "When should I start the counselling process?",
    a: "Ideally, you should reach out to us as soon as your entrance exam results are declared, or even before. Starting early gives us maximum time to shortlist colleges, negotiate scholarships, and process documentation without any last-minute rush. However, we also support students at every stage — even if admission rounds have already started.",
  },
  {
    q: "Do you charge any fees for your counselling services?",
    a: "Yes, we charge a transparent, one-time consultancy fee that covers the entire process — from profile evaluation and college shortlisting all the way to final admission confirmation. There are no hidden charges. We'll discuss the exact fee structure during your free initial consultation call.",
  },
  {
    q: "Can you help if my NEET / JEE / CAT score is low?",
    a: "Absolutely. A low score does not mean the end of your dream. We specialize in identifying the best colleges through management quota, NRI quota, and direct admission routes that don't solely rely on rank. We'll find you a reputable college that aligns with your goals and budget.",
  },
  {
    q: "Which states and colleges do you cover?",
    a: "We have strong tie-ups with colleges across Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, Maharashtra, and several other states. Our network covers 50+ private universities and deemed universities across India. During counselling, we'll narrow this down to the best fit for you specifically.",
  },
  {
    q: "Is the entire process done online, or do I need to visit your office?",
    a: "Both options are available. Most of our counselling sessions happen over phone calls and video calls, making it convenient for students and parents across India. For documentation submission and local college visits, we can also arrange in-person meetings at our Hyderabad office.",
  },
  {
    q: "Do you help with scholarships and fee reductions?",
    a: "Yes — this is one of our key strengths. We actively negotiate with colleges on behalf of students to secure merit scholarships, management scholarships, and fee waivers. Many of our students have saved lakhs of rupees through our scholarship guidance.",
  },
];

const bentoCards = [
  {
    src: "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Campus students",
    tag: "Heritage",
    title: "15 Years",
    desc: "15 years of experience in educational consultancy across engineering, MBBS, and management.",
  },
  {
    src: "https://images.pexels.com/photos/35997307/pexels-photo-35997307.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Graduation ceremony",
    tag: "Admitted",
    title: "10,000+",
    desc: "10,000+ students have taken the consultation and got admitted into their dream college.",
  },
  {
    src: "https://images.pexels.com/photos/7580820/pexels-photo-7580820.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Career guidance team",
    tag: "Industry Experts",
    title: "Career Guidance",
    desc: "A team that understands your portfolio and gives the perfect career guidance from leading industry experts.",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-gray-300 shadow-sm" : "border-gray-100"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="flex items-center gap-4">
          <span className="text-xs font-bold text-gray-300 tabular-nums w-6 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base font-semibold text-gray-900">{q}</span>
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-300 ${open ? "rotate-45 bg-black border-black" : "bg-white"}`}>
          <svg className={`w-4 h-4 transition-colors ${open ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-6 pb-6 pl-16 text-gray-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function StatCard({ value, suffix, label, description }: typeof stats[0]) {
  const display = value >= 1000 ? `${value / 1000}K` : value;
  return (
    <div className="text-center">
      <div className="text-5xl sm:text-6xl font-bold text-white mb-2 tabular-nums">
        {display}<span className="text-3xl sm:text-4xl">{suffix}</span>
      </div>
      <div className="text-base font-semibold text-white mb-1">{label}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center pt-20 overflow-hidden">
        <Image
          src="/herosectionimage1.jpg"
          alt="Students at university campus"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        {/* Dark scrim */}
        <div className="absolute inset-0 bg-black/45" style={{ zIndex: 1 }} />

        <div className="container mx-auto px-4 sm:px-6 w-full" style={{ position: "relative", zIndex: 2 }}>
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base font-semibold tracking-widest text-gray-300 uppercase mb-3">
              Guiding Your Journey to a
            </p>
            <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-bold leading-[0.9] tracking-tighter text-white mb-8">
              BRIGHTER <br />FUTURE
            </h1>
            <p className="max-w-md text-base sm:text-lg font-medium text-gray-200 mb-10 leading-relaxed">
              Personalized consulting, expert mentors, and strategic planning built to get you admitted to your dream university.
            </p>
            <a
              href="tel:+919000850124"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-10 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-gray-100 hover:scale-105 shadow-xl"
            >
              Book a Consultation Call
            </a>
          </div>
        </div>
      </section>

      {/* ══ 2. BENTO STAT CARDS ══════════════════════════════════════════════
           Sits in normal document flow — no absolute/overlap tricks.
           Uses a negative top margin to visually "lift" into the hero's space,
           but with enough padding that nothing gets clipped by the section below.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white px-4 sm:px-6 pt-8 pb-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {bentoCards.map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl flex flex-col justify-end shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                style={{ height: 300 }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="relative z-10 p-7 text-white">
                  <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-1">{card.tag}</p>
                  <h3 className="text-3xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm font-medium opacity-85 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. UNIVERSITY LOGO MARQUEE ═══════════════════════════════════════ */}
      <section className="py-14 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
            Our students are currently studying at
          </p>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infinite-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: infinite-scroll 40s linear infinite;
            width: max-content;
          }
          .marquee-track:hover { animation-play-state: paused; }
        `}} />

        <div className="relative w-full flex overflow-x-hidden">
          <div className="flex marquee-track items-center">
            {[...colleges, ...colleges].map((college, idx) => (
              <div key={idx} className="flex items-center justify-center mx-8 sm:mx-12 hover:scale-105 transition-transform duration-300" title={college.name}>
                <div className="relative h-14 w-32 md:h-20 md:w-44">
                  <Image src={college.src} alt={`${college.name} logo`} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ══ 4. IMPACT NUMBERS ════════════════════════════════════════════════ */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">By the numbers</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              Our <span className="font-bold">Impact</span> in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
            {stats.map((stat, i) => <StatCard key={i} {...stat} />)}
          </div>
        </div>
      </section>

      {/* ══ 5. HOW IT WORKS ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">Simple Process</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
              How It <span className="font-bold">Works</span>
            </h2>
            <p className="text-lg text-gray-500">From your first call to your admission letter — we're with you at every step.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="relative w-28 h-28 rounded-full bg-gray-50 border-2 border-gray-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:shadow-xl group-hover:scale-105">
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">{step.icon}</span>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shadow-md group-hover:bg-white group-hover:text-black transition-all duration-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <a href="tel:+919000850124" className="inline-flex h-14 items-center justify-center rounded-2xl bg-black px-10 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-gray-800 hover:scale-105 shadow-lg">
              Start Your Journey Today
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ══ 6. SERVICES OVERVIEW ═════════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
              Our <span className="font-bold">Services</span>
            </h2>
            <p className="text-lg text-gray-500">Expert guidance across every major stream — so no matter what you want to become, we know the path.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className={`relative overflow-hidden rounded-3xl border ${s.border} bg-gradient-to-br ${s.accent} p-8 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className={`w-16 h-16 rounded-2xl ${s.iconBg} ${s.iconColor} flex items-center justify-center mb-6 shadow-sm`}>{s.icon}</div>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">{s.subtitle}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2 mt-auto">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <svg className={`w-4 h-4 shrink-0 ${s.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="tel:+919000850124" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:gap-4 transition-all duration-200">
                  Enquire now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. WALL OF LOVE — TESTIMONIALS ═══════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">Wall of Love</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
              Hear from our <span className="font-bold">Students</span>
            </h2>
            <p className="text-lg text-gray-600">Don't just take our word for it. Read the success stories of students who secured their future with our guidance.</p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="break-inside-avoid bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                  <div>
                    <p className="text-base font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm font-medium text-gray-500">{t.admittedTo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ══ 8. FAQ ACCORDION ═════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">Got Questions?</p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
                Frequently Asked <span className="font-bold">Questions</span>
              </h2>
              <p className="text-lg text-gray-500">Everything you need to know before booking your first consultation.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} index={i} />)}
            </div>
            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm mb-4">Still have questions? We're happy to help.</p>
              <a href="tel:+919000850124" className="inline-flex items-center gap-2 text-sm font-bold text-black underline underline-offset-4 hover:text-gray-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call us directly — +91 90008 50124
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. FINAL CTA BANNER ══════════════════════════════════════════════ */}
      <section className="py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden opacity-[0.03]" aria-hidden="true">
          <span className="text-[18vw] font-black text-white whitespace-nowrap tracking-tighter">YOUR FUTURE</span>
        </div>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">Ready to get started?</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
            Your dream college is one call away.
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Join 10,000+ students who trusted Heshritha to navigate their admissions. Let's build your future together — starting today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="tel:+919000850124" className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-white px-10 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-gray-100 hover:scale-105 shadow-2xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91 90008 50124
            </a>
            <a href="https://wa.me/919000850124" target="_blank" rel="noopener noreferrer" className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl border-2 border-gray-700 px-10 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-white hover:scale-105">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
            {["Free first consultation", "No hidden charges", "15+ years trusted"].map((label) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}