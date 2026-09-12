"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with abstract glowing effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-cream z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent z-10" />
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-gold/5 blur-[120px] z-10" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand-burgundy/5 blur-[100px] z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-semibold tracking-widest text-brand-burgundy uppercase">
                Spiritual Wellness & Consultancy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-foreground leading-tight mb-4 uppercase">
              Acharya Ashirwad <br className="hidden md:block" />
              <span className="text-gradient">Consultancy</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-brown font-medium mb-2 font-serif">
              Tarot Reading, Angel Therapy, Quantum Energy Healing, PLR, REIKI
            </p>
            <p className="text-sm md:text-base text-brand-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Akashic Records Reading, Hypnotherapist, Sex Therapist, Relationship Coach Etc.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#consultation"
                className="w-full sm:w-auto px-8 py-4 bg-brand-burgundy text-brand-cream rounded-full hover:bg-brand-red transition-all shadow-[0_0_20px_rgba(128,0,32,0.3)] hover:shadow-[0_0_30px_rgba(139,0,0,0.5)] font-bold tracking-wider uppercase text-sm border border-brand-gold/20 flex items-center justify-center"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-brand-burgundy rounded-full hover:bg-brand-gold/10 transition-all font-bold tracking-wider uppercase text-sm border border-brand-burgundy flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Professional Portrait Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-full lg:flex lg:justify-end"
          >
            <div className="relative w-full aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden border-4 border-brand-cream shadow-2xl bg-brand-burgundy/10 flex flex-col justify-end items-center pb-12">
              {/* Fallback image representation since we don't have the actual image file path, using a placeholder styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-foreground/90 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 z-0" />
              
              <div className="relative z-20 text-center px-6">
                <h2 className="text-3xl font-serif font-bold text-brand-cream mb-1">ACHARYA DR RAJ</h2>
                <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-3"></div>
                <p className="text-brand-gold font-medium tracking-wide uppercase text-sm mb-1">
                  Psychiatrist and Astrologer
                </p>
                <p className="text-brand-cream/80 text-xs tracking-wider">
                  Family Jyotish (Odisha, C.G., M.P.)
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-gold/20 rounded-full blur-xl z-0" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-burgundy/20 rounded-full blur-xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
