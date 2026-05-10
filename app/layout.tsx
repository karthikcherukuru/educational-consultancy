import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heshritha Educational Services",
  description: "Personalized consulting, expert mentors, and strategic planning built to get you admitted to your dream university.",
  keywords: ["educational consultancy", "college admissions", "engineering admissions", "MBBS admissions", "MBA admissions", "Hyderabad", "Telangana", "Andhra Pradesh"],
  openGraph: {
    title: "Heshritha Educational Services",
    description: "15+ years of expert guidance. 10,000+ students admitted. Book your free consultation today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/*
        suppressHydrationWarning silences the React hydration mismatch caused
        by browser extensions like Grammarly injecting attributes into <body>.
        This is safe and the recommended fix for this specific scenario.
      */}
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-gray-900"
      >
        {/* Fixed glassmorphism navbar */}
        <Header />

        {/* Lead capture popup — appears 3s after first visit */}
        <LeadPopup />

        {/* Page content — flex-1 pushes footer to bottom */}
        <main className="flex-1">
          {children}
        </main>

        {/* Site-wide footer */}
        <Footer />
      </body>
    </html>
  );
}