"use client";

import { motion } from "framer-motion";
import { UserCheck, Shield, Layers, Star, Users, Flower2 } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Personalized Consultation",
      description: "Every session is tailored to your unique journey and life circumstances.",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Confidential Sessions",
      description: "A safe, secure, and entirely private environment for your consultations.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Multiple Consultation Approaches",
      description: "Integrating various disciplines for a comprehensive wellness strategy.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Astrology & Jyotish Guidance",
      description: "Deep insights rooted in traditional and family astrological practices.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Relationship Guidance",
      description: "Expert navigation through interpersonal dynamics and personal growth.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Holistic Wellness Focus",
      description: "Focusing on the complete picture of your emotional and spiritual health.",
      icon: <Flower2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-brand-burgundy/10 rounded-full mb-4 border border-brand-burgundy/20">
              <span className="text-xs font-bold tracking-widest text-brand-burgundy uppercase">
                Why Choose Us
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-foreground mb-6 leading-tight">
              A Premium Approach to <span className="text-gradient">Your Well-being</span>
            </h2>
            
            <p className="text-lg text-brand-foreground/80 mb-8 font-serif leading-relaxed">
              We provide professional, reflective, and holistic guidance without making unsupported medical, supernatural, or guaranteed outcome claims. Our focus is on your personal growth, empowerment, and clarity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col p-4 bg-brand-white rounded-xl shadow-sm border border-brand-gold/10">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-brown mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="font-serif font-bold text-brand-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-brand-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Visual / Decorative Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block h-[600px]"
          >
            <div className="absolute inset-0 bg-brand-white rounded-[3rem] border border-brand-gold/20 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-burgundy/10 rounded-full blur-3xl" />
              
              {/* Sacred Geometry representation */}
              <div className="relative w-64 h-64 animate-[spin_60s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold/30 stroke-current" fill="none" strokeWidth="0.5">
                  <circle cx="50" cy="50" r="45" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="15" />
                  <path d="M50 5 L50 95 M5 50 L95 50" />
                  <path d="M18 18 L82 82 M18 82 L82 18" />
                  <polygon points="50,5 95,75 5,75" />
                  <polygon points="50,95 95,25 5,25" />
                </svg>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-brand-cream/80 p-8 rounded-2xl border border-brand-gold/40 shadow-xl max-w-sm text-center">
                  <h3 className="font-serif font-bold text-2xl text-brand-burgundy mb-2">Acharya Dr Raj</h3>
                  <p className="text-brand-brown text-sm uppercase tracking-widest font-medium">Professional Guidance</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
