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
    <section id="about" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden border-8 border-brand-white shadow-2xl">
              <div className="absolute inset-0 bg-brand-burgundy/10 z-10" />
              {/* Fallback pattern background to represent the portrait area */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577900231649-db4f796a5d4d?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gold/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-brand-burgundy/10 rounded-full blur-2xl -z-10" />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-foreground text-brand-cream p-6 rounded-xl shadow-xl border border-brand-gold/30 backdrop-blur-sm">
              <p className="text-sm font-semibold tracking-widest uppercase mb-1 text-brand-gold">Practicing in</p>
              <p className="font-serif text-lg">Odisha, C.G., M.P.</p>
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
            <div className="inline-block px-4 py-1.5 bg-brand-burgundy/10 rounded-full mb-4 border border-brand-burgundy/20">
              <span className="text-xs font-bold tracking-widest text-brand-burgundy uppercase">
                About Acharya Dr Raj
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-foreground mb-6 leading-tight">
              Bridging the Wisdom of <span className="text-gradient">Psychiatry & Astrology</span>
            </h2>
            
            <div className="w-16 h-1 bg-brand-gold mb-8"></div>
            
            <p className="text-lg text-brand-foreground/80 mb-8 leading-relaxed font-serif">
              Acharya Dr Raj is a Psychiatrist and Astrologer offering astrology and holistic consultancy services. His practice includes Family Jyotish and a range of spiritual and personal-growth oriented consultation services.
            </p>
            
            <div className="space-y-4 mb-10">
              {specializations.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-brand-burgundy mr-4 flex-shrink-0" />
                  <span className="text-brand-foreground font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-burgundy flex items-center justify-center shadow-lg">
                  <span className="text-brand-cream font-serif font-bold text-xl">R</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-brand-foreground text-lg leading-none">Acharya Dr Raj</p>
                  <p className="text-brand-brown text-sm mt-1">Founder, Ashirwad Consultancy</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
