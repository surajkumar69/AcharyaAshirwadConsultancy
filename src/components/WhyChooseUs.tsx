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
    <section className="py-24 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 glass-panel px-4 py-1.5 rounded-full mb-6">
              <span className="text-xs font-bold tracking-widest text-soft-pink uppercase">
                Why Choose Us
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              A Premium Approach to <span className="text-gradient">Your Well-being</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-8 font-serif leading-relaxed">
              We provide professional, reflective, and holistic guidance without making unsupported medical, supernatural, or guaranteed outcome claims. Our focus is on your personal growth, empowerment, and clarity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col p-5 glass-panel rounded-xl shadow-lg border border-violet/30 hover:border-golden-accent/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-royal-purple/30 border border-violet flex items-center justify-center text-golden-accent mb-4 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(138,43,226,0.3)] glow-effect">
                    {feature.icon}
                  </div>
                  <h4 className="font-serif font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
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
            <div className="absolute inset-0 bg-cosmic-blue/50 rounded-[3rem] border border-violet/30 shadow-[0_20px_50px_rgba(75,0,130,0.5)] flex items-center justify-center overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-golden-accent/20 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/20 rounded-full blur-[60px]" />
              
              {/* Sacred Geometry representation */}
              <div className="relative w-64 h-64 animate-[spin_60s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-golden-accent/40 stroke-current drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" fill="none" strokeWidth="0.5">
                  <circle cx="50" cy="50" r="45" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="15" />
                  <path d="M50 5 L50 95 M5 50 L95 50" />
                  <path d="M18 18 L82 82 M18 82 L82 18" />
                  <polygon points="50,5 95,75 5,75" />
                  <polygon points="50,95 95,25 5,25" />
                </svg>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-panel p-8 rounded-2xl border border-golden-accent/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)] max-w-sm text-center">
                  <h3 className="font-serif font-bold text-2xl text-soft-pink mb-2 drop-shadow-[0_0_5px_rgba(255,182,193,0.5)]">Acharya Dr Raj</h3>
                  <p className="text-golden-accent text-sm uppercase tracking-widest font-medium">Professional Guidance</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
