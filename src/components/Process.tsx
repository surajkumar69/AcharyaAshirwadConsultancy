"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Choose a Service",
      description: "Explore our range of spiritual and holistic consultation services."
    },
    {
      number: "02",
      title: "Contact / Book Consultation",
      description: "Reach out via our form or WhatsApp to schedule your session."
    },
    {
      number: "03",
      title: "Consultation Session",
      description: "Engage in a professional, confidential, and reflective session."
    },
    {
      number: "04",
      title: "Personalized Guidance",
      description: "Receive tailored insights to support your personal growth journey."
    }
  ];

  return (
    <section className="py-24 bg-brand-foreground text-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Consultation <span className="text-brand-gold">Process</span>
          </h2>
          <p className="text-lg text-brand-cream/70 font-serif">
            A simple, transparent journey towards holistic well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-gold/10 via-brand-gold/50 to-brand-gold/10 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-brand-foreground border-2 border-brand-gold flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 relative z-10">
                <span className="text-3xl font-serif font-bold text-brand-gold">{step.number}</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{step.title}</h3>
              <p className="text-brand-cream/70 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
