"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Array of images and labels for the slideshow
const sliderImages = [
  {
    name: "IIT Bombay",
    url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "IIT Delhi",
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "BITS Pilani",
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "NIT Trichy",
    url: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=1200&auto=format&fit=crop",
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (Split Layout with Slideshow) */}
      <section className="relative px-4 py-16 sm:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text & CTAs */}
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6 border border-blue-100">
              🏆 #1 Consultancy for Indian Engineering
            </span>
            
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
              Secure Your Seat at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Top Tier Colleges</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 max-w-lg">
              Expert profile evaluation, personalized college selection, and end-to-end admission support to get you into IITs, NITs, and top private universities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-medium text-white transition-all hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/colleges" 
                className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-300"
              >
                Explore Campuses
              </Link>
            </div>
          </div>

          {/* Right Side: Image Slideshow */}
          <div className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-100 group">
            {sliderImages.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear group-hover:scale-110"
                  style={{ backgroundImage: `url(${slide.url})` }}
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* College Name Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm font-medium tracking-wider uppercase mb-1 opacity-80">Featured Campus</p>
                  <h3 className="text-3xl font-bold text-white">{slide.name}</h3>
                </div>
              </div>
            ))}

            {/* Slideshow Indicators (Dots) */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF / STATS */}
      <section className="border-y border-gray-100 bg-gray-50 py-12">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold text-gray-900">5k+</p>
            <p className="text-sm font-medium text-gray-500 mt-2">Engineers Placed</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-gray-900">100+</p>
            <p className="text-sm font-medium text-gray-500 mt-2">Partner Colleges</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-gray-900">99%</p>
            <p className="text-sm font-medium text-gray-500 mt-2">Placement Success</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-gray-900">24/7</p>
            <p className="text-sm font-medium text-gray-500 mt-2">Mentorship Support</p>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE SERVICES */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Everything You Need to Succeed</h2>
            <p className="mt-4 text-lg text-gray-600">End-to-end support for your engineering admission journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entrance Exam Strategy</h3>
              <p className="text-gray-600">Targeted preparation plans for JEE Mains, Advanced, BITSAT, and state-level exams.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Branch Counseling</h3>
              <p className="text-gray-600">Confused between CSE, ECE, or Mechanical? We help you align your interests with industry trends.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">JoSAA Choice Filling</h3>
              <p className="text-gray-600">Data-driven choice filling lists to maximize your chances during counseling rounds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL PUSH CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Your Engineering Dream Starts Here.</h2>
          <p className="text-xl text-gray-400 mb-10">
            Book a free 30-minute counseling session today and find out exactly what rank you need for your dream college.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-all hover:bg-gray-100 hover:scale-105"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}