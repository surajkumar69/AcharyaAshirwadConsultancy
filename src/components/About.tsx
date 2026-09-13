"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const specializations = [
    "Psychiatrist and Astrologer",
    "Family Jyotish",
    "Astrology Consultation",
    "Relationship Guidance",
    "Holistic Wellness Consultation",
  ];

  return (
    <section id="about" className="py-24 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-golden-accent/30 shadow-[0_0_50px_rgba(138,43,226,0.3)] bg-cosmic-blue/50">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/20 to-transparent z-10" />
              {/* Fallback pattern background to represent the portrait area */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577900231649-db4f796a5d4d?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-screen opacity-60" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-golden-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-violet/20 rounded-full blur-3xl -z-10" />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 glass-panel text-white p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-golden-accent/30 z-20">
              <p className="text-sm font-semibold tracking-widest uppercase mb-1 text-soft-pink">Practicing in</p>
              <p className="font-serif text-lg text-golden-accent drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">Odisha, C.G., M.P.</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center space-x-2 glass-panel px-4 py-1.5 rounded-full mb-6">
              <span className="text-xs font-bold tracking-widest text-soft-pink uppercase">
                About Acharya Dr Raj
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Bridging the Wisdom of <span className="text-gradient">Psychiatry & Astrology</span>
            </h2>
            
            <div className="w-16 h-1 bg-golden-accent mb-8 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
            
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed font-serif">
              Acharya Dr Raj is a Psychiatrist and Astrologer offering astrology and holistic consultancy services. His practice includes Family Jyotish and a range of spiritual and personal-growth oriented consultation services.
            </p>
            
            <div className="space-y-4 mb-10">
              {specializations.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <CheckCircle2 className="w-6 h-6 text-golden-accent mr-4 flex-shrink-0 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
                  <span className="text-white font-medium text-lg group-hover:text-soft-pink transition-colors">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-royal-purple border border-violet flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.5)] glow-effect">
                  <span className="text-white font-serif font-bold text-xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">R</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-white text-lg leading-none">Acharya Dr Raj</p>
                  <p className="text-golden-accent text-sm mt-1">Founder, Ashirwad Consultancy</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
