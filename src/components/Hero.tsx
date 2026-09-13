"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// Pre-defined static array of random-looking values to avoid hydration mismatch and impure render errors
const starsData = [
  { w: "2.5px", h: "2.5px", t: "15%", l: "20%", dur: 3.5, del: 1.2 },
  { w: "1.8px", h: "1.8px", t: "45%", l: "80%", dur: 2.1, del: 0.5 },
  { w: "3.1px", h: "3.1px", t: "75%", l: "10%", dur: 4.2, del: 1.8 },
  { w: "2.0px", h: "2.0px", t: "30%", l: "60%", dur: 3.0, del: 0.2 },
  { w: "1.5px", h: "1.5px", t: "85%", l: "40%", dur: 2.8, del: 1.5 },
  { w: "3.5px", h: "3.5px", t: "25%", l: "90%", dur: 4.5, del: 0.8 },
  { w: "2.2px", h: "2.2px", t: "60%", l: "30%", dur: 3.2, del: 1.1 },
  { w: "1.2px", h: "1.2px", t: "10%", l: "50%", dur: 2.5, del: 0.3 },
  { w: "2.8px", h: "2.8px", t: "90%", l: "70%", dur: 3.8, del: 1.6 },
  { w: "3.0px", h: "3.0px", t: "50%", l: "15%", dur: 4.0, del: 0.9 },
  { w: "1.6px", h: "1.6px", t: "20%", l: "85%", dur: 2.6, del: 1.4 },
  { w: "2.4px", h: "2.4px", t: "70%", l: "55%", dur: 3.4, del: 0.6 },
  { w: "3.2px", h: "3.2px", t: "40%", l: "25%", dur: 4.1, del: 1.9 },
  { w: "1.9px", h: "1.9px", t: "80%", l: "95%", dur: 2.9, del: 0.4 },
  { w: "2.7px", h: "2.7px", t: "5%",  l: "75%", dur: 3.7, del: 1.3 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dark-navy"
    >
      {/* Background with abstract glowing effects and stars */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-dark-navy z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-screen z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-navy/80 to-dark-navy z-10" />
        <div className="absolute inset-0 cosmic-gradient-bg opacity-40 mix-blend-overlay z-10" />
        
        {/* Animated Orbs/Glows */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet/20 blur-[120px] z-10" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-golden-accent/10 blur-[100px] z-10" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-royal-purple/20 blur-[150px] z-10" 
        />
        
        {/* Soft Animated Stars */}
        {starsData.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: star.w,
              height: star.h,
              top: star.t,
              left: star.l,
            }}
            animate={{ 
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: star.dur, 
              repeat: Infinity,
              delay: star.del
            }}
          />
        ))}
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
            <div className="inline-flex items-center space-x-2 glass-panel px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-golden-accent" />
              <span className="text-xs font-semibold tracking-widest text-soft-pink uppercase">
                Spiritual Wellness & Consultancy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Acharya Ashirwad <br className="hidden md:block" />
              <span className="text-gradient">Consultancy</span>
            </h1>
            <p className="text-lg md:text-xl text-golden-accent font-medium mb-2 font-serif">
              Tarot Reading • Angel Therapy • Quantum Healing • PLR • Reiki
            </p>
            <p className="text-sm md:text-base text-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 font-light tracking-wide">
              Akashic Records Reading, Hypnotherapy, Sex Therapy, Relationship Coaching, Astrology & Family Jyotish
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#consultation"
                className="w-full sm:w-auto px-8 py-4 bg-royal-purple text-white rounded-full hover:bg-violet transition-all shadow-[0_0_20px_rgba(138,43,226,0.5)] hover:shadow-[0_0_30px_rgba(138,43,226,0.8)] font-bold tracking-wider uppercase text-sm border border-violet/50 flex items-center justify-center glow-effect"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white rounded-full hover:bg-white/10 transition-all font-bold tracking-wider uppercase text-sm border border-golden-accent/50 hover:border-golden-accent flex items-center justify-center"
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
            <div className="relative w-full aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden border-2 border-golden-accent/30 shadow-[0_0_40px_rgba(138,43,226,0.4)] bg-cosmic-blue/50 flex flex-col justify-end items-center pb-12 backdrop-blur-sm">
              {/* Fallback image representing Dr Raj - Using a cosmic themed placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601058223637-2917e7651a13?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-screen opacity-50 z-0" />
              
              <div className="relative z-20 text-center px-6">
                <h2 className="text-3xl font-serif font-bold text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">ACHARYA DR RAJ</h2>
                <div className="h-0.5 w-16 bg-golden-accent mx-auto mb-3 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                <p className="text-golden-accent font-medium tracking-wide uppercase text-sm mb-1">
                  Psychiatrist & Astrologer
                </p>
                <p className="text-foreground/80 text-xs tracking-wider">
                  Family Jyotish (Odisha, C.G., M.P.)
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-golden-accent/20 rounded-full blur-xl z-0" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-violet/20 rounded-full blur-xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
