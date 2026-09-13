"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CheckCircle2, Copy } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText("vermapriyanshu126-1@okaxis");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const submitBooking = () => {
    // In a real app, send data to backend here
    setStep(5);
  };

  const servicesList = [
    "Tarot Reading", "Angel Therapy", "Quantum Energy Healing", "PLR", "REIKI",
    "Akashic Records Reading", "Hypnotherapy", "Sex Therapy", "Relationship Coaching", "Astrology / Family Jyotish"
  ];

  return (
    <section id="consultation" className="py-24 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cosmic-blue/50 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-golden-accent/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-golden-accent/10 rounded-bl-full z-0" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-serif font-bold text-white">
                    Book a Consultation
                  </h2>
                  <div className="text-golden-accent text-sm font-semibold bg-golden-accent/10 px-3 py-1 rounded-full border border-golden-accent/30">
                    Step {step} of 5
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {/* STEP 1: Choose Service */}
                  {step === 1 && (
                    <motion.form key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleNext} className="space-y-6">
                      <h3 className="text-xl text-soft-pink mb-4 font-serif">1. Choose Service</h3>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Select Service</label>
                        <select 
                          required
                          value={formData.service}
                          className="w-full px-4 py-3 bg-dark-navy/50 border border-violet/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet text-white"
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                        >
                          <option value="" disabled>Choose a service...</option>
                          {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <button type="submit" className="w-full py-4 bg-royal-purple text-white rounded-lg hover:bg-violet transition-all font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(138,43,226,0.5)] glow-effect border border-violet/50">
                        Continue to Date & Time
                      </button>
                    </motion.form>
                  )}

                  {/* STEP 2: Select Date/Time */}
                  {step === 2 && (
                    <motion.form key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleNext} className="space-y-6">
                      <h3 className="text-xl text-soft-pink mb-4 font-serif">2. Select Preferred Date & Time</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                          <input 
                            type="date" required value={formData.date}
                            className="w-full px-4 py-3 bg-dark-navy/50 border border-violet/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet text-white"
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Preferred Time</label>
                          <input 
                            type="time" required value={formData.time}
                            className="w-full px-4 py-3 bg-dark-navy/50 border border-violet/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet text-white"
                            onChange={(e) => setFormData({...formData, time: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button type="button" onClick={() => setStep(1)} className="w-1/3 py-4 bg-transparent border border-violet/30 text-white rounded-lg hover:bg-white/5 transition-all font-bold tracking-wider uppercase">Back</button>
                        <button type="submit" className="w-2/3 py-4 bg-royal-purple text-white rounded-lg hover:bg-violet transition-all font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(138,43,226,0.5)] glow-effect border border-violet/50">Continue</button>
                      </div>
                    </motion.form>
                  )}

                  {/* STEP 3: Contact Details */}
                  {step === 3 && (
                    <motion.form key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleNext} className="space-y-6">
                      <h3 className="text-xl text-soft-pink mb-4 font-serif">3. Enter Contact Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                          <input type="text" required value={formData.name}
                            className="w-full px-4 py-3 bg-dark-navy/50 border border-violet/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet text-white"
                            onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Phone / WhatsApp</label>
                          <input type="tel" required value={formData.phone}
                            className="w-full px-4 py-3 bg-dark-navy/50 border border-violet/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet text-white"
                            onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                        <input type="email" required value={formData.email}
                          className="w-full px-4 py-3 bg-dark-navy/50 border border-violet/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet text-white"
                          onChange={(e) => setFormData({...formData, email: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                        <textarea rows={3} value={formData.message}
                          className="w-full px-4 py-3 bg-dark-navy/50 border border-violet/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet text-white resize-none"
                          onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                      </div>
                      <div className="flex gap-4">
                        <button type="button" onClick={() => setStep(2)} className="w-1/3 py-4 bg-transparent border border-violet/30 text-white rounded-lg hover:bg-white/5 transition-all font-bold tracking-wider uppercase">Back</button>
                        <button type="submit" className="w-2/3 py-4 bg-royal-purple text-white rounded-lg hover:bg-violet transition-all font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(138,43,226,0.5)] glow-effect border border-violet/50">Proceed to Payment</button>
                      </div>
                    </motion.form>
                  )}

                  {/* STEP 4: Make Payment */}
                  {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-serif text-white mb-2">Make a Payment</h3>
                        <p className="text-foreground/80">Securely complete your consultation payment using UPI.</p>
                      </div>
                      
                      <div className="bg-dark-navy/60 border border-golden-accent/30 rounded-2xl p-6 flex flex-col items-center max-w-sm mx-auto shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                        <div className="bg-white p-4 rounded-xl mb-6 shadow-inner w-48 h-48 flex items-center justify-center relative overflow-hidden">
                          {/* Placeholder for UPI QR Code - User requested to use uploaded UPI QR image exactly as provided */}
                          {/* Assuming the image is placed at /qr.jpg based on common naming or they will replace this path */}
                          <img src="/qr.jpg" alt="UPI QR Code" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"; }} />
                        </div>
                        
                        <div className="text-center w-full mb-6">
                          <p className="text-white font-semibold text-lg mb-1">Priyanshu Verma</p>
                          <div className="bg-black/40 px-4 py-2 rounded-lg flex items-center justify-between border border-violet/20">
                            <span className="text-golden-accent font-mono text-sm break-all">vermapriyanshu126-1@okaxis</span>
                            <button onClick={handleCopyUPI} className="ml-3 text-white hover:text-soft-pink transition-colors" title="Copy UPI ID">
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                          {copied && <p className="text-green-400 text-xs mt-2 transition-opacity">UPI ID copied!</p>}
                          <p className="text-xs text-foreground/60 mt-4 uppercase tracking-widest">Scan to pay with any UPI app</p>
                        </div>

                        <a href="upi://pay?pa=vermapriyanshu126-1@okaxis&pn=Priyanshu%20Verma&cu=INR" className="w-full py-3 bg-gradient-to-r from-violet to-royal-purple text-white rounded-lg text-center font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all md:hidden mb-4">
                          Pay via UPI App
                        </a>
                      </div>

                      <div className="bg-violet/10 border border-violet/30 rounded-lg p-4 text-center text-sm text-foreground/80">
                        <p>UPI Payment Section. Note: Payment verification is manual.</p>
                      </div>

                      <div className="flex gap-4">
                        <button type="button" onClick={() => setStep(3)} className="w-1/3 py-4 bg-transparent border border-violet/30 text-white rounded-lg hover:bg-white/5 transition-all font-bold tracking-wider uppercase">Back</button>
                        <button onClick={submitBooking} className="w-2/3 py-4 bg-golden-accent text-dark-navy rounded-lg hover:bg-[#FFE5B4] transition-all font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.5)]">I Have Paid</button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 5: Confirmation */}
                  {step === 5 && (
                    <motion.div key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-6">
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                      </div>
                      <h3 className="text-3xl font-serif text-white mb-2">Thank you for booking your consultation.</h3>
                      <p className="text-foreground/80 max-w-md mx-auto mb-8">
                        Your request has been received. We will verify your payment and contact you shortly to confirm your session.
                      </p>
                      <div className="bg-dark-navy/50 border border-violet/30 rounded-xl p-6 inline-block text-left">
                        <p className="text-sm text-golden-accent mb-1 uppercase tracking-wider">Contact Us directly:</p>
                        <p className="text-white text-lg mb-1">Phone: +91-7692066369</p>
                        <p className="text-white text-lg">Email: acharyahemantraj11@gmail.com</p>
                      </div>
                      <div className="mt-8">
                        <button onClick={() => setStep(1)} className="py-3 px-8 bg-transparent border border-violet/30 text-white rounded-lg hover:bg-white/5 transition-all font-bold tracking-wider uppercase">Book Another</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            <div className="cosmic-gradient-bg text-white p-10 rounded-3xl relative overflow-hidden shadow-[0_10px_40px_rgba(75,0,130,0.4)] border border-violet/30">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-golden-accent/20 rounded-full blur-[60px]" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-soft-pink/20 rounded-full blur-[60px]" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-6">Need Immediate Assistance?</h3>
                <p className="text-foreground/90 mb-8 leading-relaxed">
                  For quick queries or to schedule a session directly, feel free to reach out to us on WhatsApp or Call.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div>
                    <p className="text-golden-accent text-sm font-bold uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                    <p className="text-2xl font-serif">+91-7692066369</p>
                  </div>
                  <div>
                    <p className="text-golden-accent text-sm font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-lg">acharyahemantraj11@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-golden-accent text-sm font-bold uppercase tracking-wider mb-1">Consultation Mode</p>
                    <p className="text-lg">Online & In-Person</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://wa.me/917692066369" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center w-full py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-all font-bold tracking-wider uppercase shadow-[0_5px_20px_rgba(37,211,102,0.4)]"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                  <a 
                    href="tel:+917692066369" 
                    className="flex items-center justify-center w-full py-4 bg-transparent border border-white/50 text-white rounded-lg hover:bg-white/10 transition-all font-bold tracking-wider uppercase"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
