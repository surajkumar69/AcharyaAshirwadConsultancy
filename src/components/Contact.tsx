"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-foreground mb-6">
            Connect With <span className="text-gradient">Acharya Raj</span>
          </h2>
          <p className="text-lg text-brand-foreground/80 font-serif">
            Reach out to begin your journey towards clarity and wellness.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-brand-white border border-brand-gold/20 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-bl-full z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy mb-2">ACHARYA ASHIRWAD CONSULTANCY</h3>
              <div className="w-12 h-1 bg-brand-gold mb-6"></div>
              
              <h4 className="text-xl font-bold text-brand-foreground mb-1">ACHARYA DR RAJ</h4>
              <p className="text-brand-brown font-medium mb-1">Psychiatrist and Astrologer</p>
              <p className="text-brand-foreground/70 text-sm mb-8">Family Jyotish (Odisha, C.G., M.P.)</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-burgundy/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-brand-burgundy" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-brown">Phone</p>
                    <p className="text-brand-foreground font-medium">+91-76920636369</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-bold text-brand-foreground mb-6">Connect on Social Media</h4>
              <div className="space-y-4 mb-8">
                <a href="#" className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-brand-burgundy/10 flex items-center justify-center mr-4 group-hover:bg-brand-burgundy transition-colors">
                    <FacebookIcon className="w-5 h-5 text-brand-burgundy group-hover:text-brand-white transition-colors" />
                  </div>
                  <span className="text-brand-foreground group-hover:text-brand-burgundy transition-colors font-medium">Acharya raj jyotishi</span>
                </a>
                <a href="#" className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-brand-burgundy/10 flex items-center justify-center mr-4 group-hover:bg-brand-burgundy transition-colors">
                    <InstagramIcon className="w-5 h-5 text-brand-burgundy group-hover:text-brand-white transition-colors" />
                  </div>
                  <span className="text-brand-foreground group-hover:text-brand-burgundy transition-colors font-medium">Acharya raj jyotishi</span>
                </a>
              </div>
              
              <a 
                href="https://wa.me/9176920636369" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-all font-bold tracking-wider uppercase text-sm w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
