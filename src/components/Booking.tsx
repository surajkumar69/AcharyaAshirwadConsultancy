"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
    alert("Request submitted successfully!");
  };

  return (
    <section id="consultation" className="py-24 bg-brand-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-brand-cream p-8 md:p-12 rounded-3xl border border-brand-gold/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full z-0" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold text-brand-foreground mb-2">
                  Book a Consultation
                </h2>
                <p className="text-brand-foreground/70 mb-8 font-serif">
                  Fill out the form below to request a session with Acharya Dr Raj.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-foreground mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-brand-white border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy/50 text-brand-foreground"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-foreground mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 bg-brand-white border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy/50 text-brand-foreground"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-foreground mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-brand-white border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy/50 text-brand-foreground"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-foreground mb-2">Select Service</label>
                      <select 
                        required
                        className="w-full px-4 py-3 bg-brand-white border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy/50 text-brand-foreground"
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="">Choose a service...</option>
                        <option value="Tarot Reading">Tarot Reading</option>
                        <option value="Angel Therapy">Angel Therapy</option>
                        <option value="Quantum Energy Healing">Quantum Energy Healing</option>
                        <option value="PLR">PLR</option>
                        <option value="REIKI">REIKI</option>
                        <option value="Akashic Records Reading">Akashic Records Reading</option>
                        <option value="Hypnotherapy">Hypnotherapy</option>
                        <option value="Sex Therapy">Sex Therapy</option>
                        <option value="Relationship Coaching">Relationship Coaching</option>
                        <option value="Astrology / Family Jyotish">Astrology / Family Jyotish</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-foreground mb-2">Preferred Date</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 bg-brand-white border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy/50 text-brand-foreground"
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-foreground mb-2">Preferred Time</label>
                      <input 
                        type="time" 
                        className="w-full px-4 py-3 bg-brand-white border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy/50 text-brand-foreground"
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-foreground mb-2">Message / Consultation Requirement</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-brand-white border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy/50 text-brand-foreground resize-none"
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-brand-burgundy text-brand-cream rounded-lg hover:bg-brand-red transition-all font-bold tracking-wider uppercase shadow-md hover:shadow-lg"
                  >
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 flex flex-col justify-center"
          >
            <div className="bg-brand-foreground text-brand-cream p-10 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand-gold/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-brand-burgundy/30 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-6">Need Immediate Assistance?</h3>
                <p className="text-brand-cream/80 mb-8 leading-relaxed">
                  For quick queries or to schedule a session directly, feel free to reach out to us on WhatsApp.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div>
                    <p className="text-brand-gold text-sm font-bold uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                    <p className="text-xl font-serif">+91-76920636369</p>
                  </div>
                  <div>
                    <p className="text-brand-gold text-sm font-bold uppercase tracking-wider mb-1">Consultation Mode</p>
                    <p className="text-lg">Online & In-Person</p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/9176920636369" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center w-full py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-all font-bold tracking-wider uppercase shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
