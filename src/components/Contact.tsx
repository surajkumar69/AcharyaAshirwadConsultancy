"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-navy relative">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Connect With <span className="text-gradient">Acharya Raj</span>
          </h2>
          <p className="text-lg text-foreground/80 font-serif">
            Reach out to begin your journey towards clarity and wellness.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel border border-golden-accent/30 rounded-3xl p-8 md:p-12 shadow-[0_15px_50px_rgba(75,0,130,0.3)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet/20 rounded-bl-full blur-3xl z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-golden-accent/10 rounded-tr-full blur-3xl z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-soft-pink mb-2">ACHARYA ASHIRWAD CONSULTANCY</h3>
              <div className="w-12 h-1 bg-golden-accent mb-6 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
              
              <h4 className="text-xl font-bold text-white mb-1">ACHARYA DR RAJ</h4>
              <p className="text-golden-accent font-medium mb-1">Psychiatrist and Astrologer</p>
              <p className="text-foreground/70 text-sm mb-8">Family Jyotish (Odisha, C.G., M.P.)</p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-royal-purple/30 border border-violet flex items-center justify-center mr-4 glow-effect">
                    <Phone className="w-5 h-5 text-soft-pink" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-golden-accent">Phone</p>
                    <p className="text-white font-medium text-lg">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-royal-purple/30 border border-violet flex items-center justify-center mr-4 glow-effect">
                    <Mail className="w-5 h-5 text-soft-pink" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-golden-accent">Email</p>
                    <p className="text-white font-medium">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">Quick Connect</h4>
              
              <div className="space-y-4 mb-8">
                <a 
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center px-6 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-all font-bold tracking-wider uppercase text-sm shadow-[0_5px_20px_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
                
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} 
                  className="flex items-center justify-center px-6 py-4 bg-royal-purple text-white rounded-lg hover:bg-violet transition-all font-bold tracking-wider uppercase text-sm shadow-[0_5px_20px_rgba(138,43,226,0.3)] border border-violet/50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="flex items-center justify-center px-6 py-4 bg-transparent border border-golden-accent/50 text-golden-accent rounded-lg hover:bg-golden-accent/10 transition-all font-bold tracking-wider uppercase text-sm"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
              
              <div className="flex space-x-6 justify-center">
                <a href={siteConfig.social.facebookUrl} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-[#1877F2] transition-colors" title="Facebook">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href={siteConfig.social.instagramUrl} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-soft-pink transition-colors" title="Instagram">
                  <InstagramIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
