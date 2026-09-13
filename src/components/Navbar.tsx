"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Consultation", href: "#consultation" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-navy/90 backdrop-blur-md shadow-lg shadow-violet/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex flex-col text-golden-accent hover:text-soft-pink transition-colors">
            <span className="font-serif font-bold text-xl md:text-2xl tracking-wider uppercase leading-none glow-effect text-gradient">
              Acharya Ashirwad
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.2em] text-violet uppercase mt-1">
              Consultancy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-golden-accent transition-colors text-sm uppercase tracking-wider font-medium hover:glow-effect"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#consultation"
              className="bg-royal-purple text-white px-6 py-2 rounded-full hover:bg-violet transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(138,43,226,0.6)] uppercase text-sm tracking-wider font-semibold border border-violet hover:border-golden-accent"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-golden-accent focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-navy/95 backdrop-blur-lg border-b border-violet/30"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 text-foreground hover:text-golden-accent hover:bg-royal-purple/20 transition-colors uppercase tracking-wider text-sm font-medium rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center mt-4 bg-royal-purple text-white px-6 py-3 rounded-full hover:bg-violet transition-all shadow-[0_0_10px_rgba(138,43,226,0.5)] uppercase tracking-wider text-sm font-bold"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
