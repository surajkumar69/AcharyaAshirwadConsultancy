"use client";
import { Copy, MessageCircle, Wallet } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Payment() {
  const [copied, setCopied] = useState(false);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(siteConfig.payment.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="payment" className="py-24 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-golden-accent/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet/10 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-accent to-yellow-200">Payment</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Scan to pay with any UPI app for your consultation.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-golden-accent/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-golden-accent/10 rounded-full blur-[40px] z-0" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white p-4 rounded-2xl mb-8 shadow-inner w-64 h-64 flex items-center justify-center relative overflow-hidden">
              <Image src="/images/upi-qr.jpg" alt="UPI QR Code" fill className="object-contain p-2" unoptimized />
            </div>
            
            <div className="text-center w-full mb-8">
              <p className="text-white font-serif text-2xl mb-2">{siteConfig.payment.name}</p>
              <div className="bg-dark-navy/80 px-4 py-3 rounded-xl flex items-center justify-between border border-violet/30 shadow-inner">
                <span className="text-golden-accent font-mono text-base break-all">{siteConfig.payment.upiId}</span>
                <button onClick={handleCopyUPI} className="ml-4 text-white hover:text-soft-pink transition-colors p-2 bg-white/5 rounded-lg" title="Copy UPI ID">
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              <div className="h-6 mt-2">
                {copied && <p className="text-green-400 text-sm transition-opacity">UPI ID copied successfully!</p>}
              </div>
              <p className="text-sm text-foreground/60 uppercase tracking-widest mt-2">Scan to pay with any UPI app</p>
            </div>

            <div className="w-full space-y-4">
              <a href={`upi://pay?pa=${siteConfig.payment.upiId}&pn=${encodeURIComponent(siteConfig.payment.name)}&cu=INR`} className="w-full py-4 bg-gradient-to-r from-violet to-royal-purple text-white rounded-xl flex items-center justify-center font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all">
                <Wallet className="w-5 h-5 mr-2" />
                Pay via UPI App
              </a>
              
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="w-full py-4 bg-transparent border-2 border-[#25D366] text-[#25D366] rounded-xl flex items-center justify-center font-bold uppercase tracking-wider shadow-lg hover:bg-[#25D366]/10 transition-all">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Payment Help
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
