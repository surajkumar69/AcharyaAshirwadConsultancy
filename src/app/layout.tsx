import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Calendar } from "lucide-react";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acharya Ashirwad Consultancy | Spiritual & Holistic Wellness",
  description: "Acharya Dr Raj - Psychiatrist and Astrologer offering Tarot Reading, Angel Therapy, Quantum Energy Healing, PLR, REIKI, Akashic Records Reading, and Family Jyotish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${lora.variable} font-sans antialiased pb-20 md:pb-0`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-violet/30 p-3 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
          <a 
            href="#consultation" 
            className="flex-1 bg-royal-purple text-white py-3 rounded-lg flex items-center justify-center font-bold tracking-wider uppercase text-xs border border-violet/50 shadow-[0_0_10px_rgba(138,43,226,0.3)]"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book
          </a>
          <a 
            href="https://wa.me/917692066369" 
            className="flex-1 bg-[#25D366] text-white py-3 rounded-lg flex items-center justify-center font-bold tracking-wider uppercase text-xs shadow-[0_0_10px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
