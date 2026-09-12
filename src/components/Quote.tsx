"use client";

import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <section className="py-24 relative bg-brand-foreground text-brand-cream overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <QuoteIcon className="w-12 h-12 text-brand-gold mb-8 opacity-50" />
          
          <h3 className="text-2xl md:text-4xl font-serif font-medium leading-relaxed mb-8 text-brand-cream" style={{ lineHeight: "1.8" }}>
            "जीतने वाले कुछ अलग चीजें नहीं करते,<br className="hidden md:block" />
            बस वो चीजों को अलग तरीके से करते हैं।"
          </h3>
          
          <div className="h-px w-24 bg-brand-gold/50 mx-auto mb-8" />
          
          <p className="text-xl md:text-2xl font-serif text-brand-gold mb-2">
            सुप्रभात
          </p>
          <p className="text-lg md:text-xl font-serif text-brand-cream/80">
            आपका दिन मधुर और मंगलमय हो।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
