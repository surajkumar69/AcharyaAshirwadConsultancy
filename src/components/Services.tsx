"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "tarot",
      title: "Tarot Reading",
      description: "Personalized tarot-based guidance and reflective consultation.",
      image: "/images/services/tarot-reading.webp"
    },
    {
      id: "angel",
      title: "Angel Therapy",
      description: "Spiritual and reflective wellness sessions.",
      image: "/images/services/angel-therapy.webp"
    },
    {
      id: "quantum",
      title: "Quantum Energy Healing",
      description: "Holistic wellness-oriented energy sessions.",
      image: "/images/services/quantum-energy.webp"
    },
    {
      id: "plr",
      title: "PLR",
      description: "Explore deeper reflective insights and inner growth.",
      image: "/images/services/plr.webp"
    },
    {
      id: "reiki",
      title: "REIKI",
      description: "Reiki-based holistic wellness sessions.",
      image: "/images/services/reiki.webp"
    },
    {
      id: "akashic",
      title: "Akashic Records Reading",
      description: "Spiritual and reflective consultation.",
      image: "/images/services/akashic-records.webp"
    },
    {
      id: "hypnotherapy",
      title: "Hypnotherapy",
      description: "Professional hypnotherapy consultation.",
      image: "/images/services/hypnotherapy.webp"
    },
    {
      id: "sex-therapy",
      title: "Sex Therapy",
      description: "Confidential relationship and sexual-wellness consultation.",
      image: "/images/services/sex-therapy.webp"
    },
    {
      id: "relationship",
      title: "Relationship Coaching",
      description: "Guidance focused on communication, relationships and personal development.",
      image: "/images/services/relationship-coaching.webp"
    },
    {
      id: "astrology",
      title: "Astrology / Family Jyotish",
      description: "Astrology consultation with focus on Family Jyotish.",
      image: "/images/services/astrology-jyotish.webp"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-24 bg-dark-navy relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-royal-purple/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cosmic-blue/30 rounded-full blur-[100px] -z-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass-panel px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-golden-accent" />
            <span className="text-xs font-bold tracking-widest text-soft-pink uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Spiritual & <span className="text-gradient">Cosmic Services</span>
          </h2>
          <p className="text-lg text-foreground/80 font-serif">
            A comprehensive approach to your spiritual, emotional, and psychological well-being.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="group glass-panel rounded-2xl overflow-hidden hover:shadow-[0_10px_30px_rgba(138,43,226,0.3)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>
              
              <div className="p-6 flex-grow flex flex-col relative">
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-soft-pink transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <button className="w-full text-center py-2.5 bg-transparent border border-violet/30 text-golden-accent rounded-lg hover:bg-violet/10 transition-colors text-sm font-semibold tracking-wide uppercase">
                    Learn More
                  </button>
                  <Link 
                    href="#consultation" 
                    className="w-full text-center py-2.5 bg-royal-purple text-white rounded-lg hover:bg-violet transition-all text-sm font-semibold tracking-wide uppercase hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] border border-transparent hover:border-golden-accent/50 glow-effect"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
