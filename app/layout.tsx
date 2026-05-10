import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Using relative paths to fix the module resolution error
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated metadata to match your actual brand
export const metadata: Metadata = {
  title: "Heshritha Educational Services | Fast-Track Your Admission",
  description: "Expert profile evaluation, personalized university selection, and end-to-end application support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        
        {/* flex-1 pushes the footer to the bottom of the page */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}