"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  Feather, 
  Waves, 
  BookOpen, 
  HeartHandshake, 
  Library, 
  Brain, 
  Heart, 
  Users, 
  Star 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "tarot",
      title: "Tarot Reading",
      description: "Personalized tarot-based guidance and reflective consultation.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      id: "angel",
      title: "Angel Therapy",
      description: "Spiritual and reflective wellness sessions.",
      icon: <Feather className="w-8 h-8" />
    },
    {
      id: "quantum",
      title: "Quantum Energy Healing",
      description: "Holistic wellness-oriented energy sessions.",
      icon: <Waves className="w-8 h-8" />
    },
    {
      id: "plr",
      title: "PLR",
      description: "Explore deeper reflective insights and inner growth.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: "reiki",
      title: "REIKI",
      description: "Reiki-based holistic wellness sessions.",
      icon: <HeartHandshake className="w-8 h-8" />
    },
    {
      id: "akashic",
      title: "Akashic Records Reading",
      description: "Spiritual and reflective consultation.",
      icon: <Library className="w-8 h-8" />
    },
    {
      id: "hypnotherapy",
      title: "Hypnotherapy",
      description: "Professional hypnotherapy consultation.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: "sex-therapy",
      title: "Sex Therapy",
      description: "Confidential relationship and sexual-wellness consultation.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      id: "relationship",
      title: "Relationship Coaching",
      description: "Guidance focused on communication, relationships and personal development.",
      icon: <Users className="w-8 h-8" />
    },
    {
      id: "astrology",
      title: "Astrology / Family Jyotish",
      description: "Astrology consultation with focus on Family Jyotish.",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    <section id="services" className="py-24 bg-brand-white relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream/50 rounded-l-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand-gold/10 rounded-full mb-4 border border-brand-gold/30">
            <span className="text-xs font-bold tracking-widest text-brand-burgundy uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-foreground mb-6">
            Holistic <span className="text-gradient">Consultancy Services</span>
          </h2>
          <p className="text-lg text-brand-foreground/70 font-serif">
            A comprehensive approach to your spiritual, emotional, and psychological well-being.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="group bg-brand-cream border border-brand-gold/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="text-brand-burgundy mb-6 relative z-10 p-4 bg-brand-white rounded-2xl inline-block shadow-sm">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-serif font-bold text-brand-foreground mb-3 relative z-10 group-hover:text-brand-burgundy transition-colors">
                {service.title}
              </h3>
              
              <p className="text-brand-foreground/70 mb-8 relative z-10 text-sm leading-relaxed h-16">
                {service.description}
              </p>
              
              <div className="flex flex-col gap-3 relative z-10 mt-auto">
                <Link 
                  href="#consultation" 
                  className="w-full text-center py-2.5 bg-brand-foreground text-brand-cream rounded-lg hover:bg-brand-burgundy transition-colors text-sm font-semibold tracking-wide uppercase"
                >
                  Book Consultation
                </Link>
                <button className="w-full text-center py-2.5 bg-transparent border border-brand-burgundy/20 text-brand-burgundy rounded-lg hover:bg-brand-burgundy/5 transition-colors text-sm font-semibold tracking-wide uppercase">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
