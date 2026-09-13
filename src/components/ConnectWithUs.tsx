"use client";
import { MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function ConnectWithUs() {
  const socialLinks = [
    {
      name: "Facebook",
      label: siteConfig.social.facebookName,
      url: siteConfig.social.facebookUrl,
      icon: FacebookIcon,
      color: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#1877F2]/80",
      borderColor: "border-[#1877F2]/50",
    },
    {
      name: "Instagram",
      label: siteConfig.social.instagramName,
      url: siteConfig.social.instagramUrl,
      icon: InstagramIcon,
      color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
      hoverColor: "hover:opacity-90",
      borderColor: "border-[#bc1888]/50",
    },
    {
      name: "WhatsApp",
      label: siteConfig.contact.whatsapp,
      url: `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`,
      icon: MessageCircle,
      color: "bg-[#25D366]",
      hoverColor: "hover:bg-[#25D366]/80",
      borderColor: "border-[#25D366]/50",
    },
    {
      name: "Email",
      label: siteConfig.contact.email,
      url: `mailto:${siteConfig.contact.email}`,
      icon: Mail,
      color: "bg-royal-purple",
      hoverColor: "hover:bg-violet",
      borderColor: "border-violet/50",
    }
  ];

  return (
    <section id="connect" className="py-24 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet/5 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dedicated Facebook Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-gradient-to-r from-[#1877F2]/20 to-dark-navy border border-[#1877F2]/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_30px_rgba(24,119,242,0.15)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1877F2]/10 rounded-full blur-[60px] -z-10" />
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Follow Us on Facebook
            </h3>
            <p className="text-foreground/90 text-lg mb-6 max-w-2xl">
              Join our community on Facebook for daily astrological insights, spiritual guidance, and updates from {siteConfig.social.facebookName}.
            </p>
            <a 
              href={siteConfig.social.facebookUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1877F2] text-white rounded-xl font-bold tracking-wide shadow-[0_5px_20px_rgba(24,119,242,0.4)] hover:bg-[#1877F2]/90 transition-all"
            >
              <FacebookIcon className="w-5 h-5 mr-3" />
              Visit Facebook Page
            </a>
          </div>
        </motion.div>

        {/* Connect With Us Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-pink to-violet">With Us</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Reach out through any of our official channels for consultations and spiritual guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-6 rounded-2xl border ${link.borderColor} hover:bg-white/5 transition-all flex flex-col items-center text-center group`}
            >
              <div className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <link.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{link.name}</h4>
              <p className="text-foreground/70 text-sm truncate w-full px-2">{link.label}</p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
