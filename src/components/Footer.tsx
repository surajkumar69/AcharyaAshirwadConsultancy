import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-navy pt-16 pb-8 border-t border-violet/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-golden-accent/10 rounded-bl-full pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/10 rounded-tr-full pointer-events-none blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif font-bold text-2xl text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              ACHARYA ASHIRWAD<br />CONSULTANCY
            </h3>
            <p className="text-golden-accent font-serif text-sm leading-relaxed mb-6">
              Tarot Reading • Astrology • Reiki • Hypnotherapy • Relationship Coaching • Holistic Consultancy
            </p>
          </div>

          {/* Links Col */}
          <div className="col-span-1 flex flex-col space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider mb-2">Quick Links</h4>
            <Link href="#home" className="text-foreground/70 hover:text-soft-pink transition-colors text-sm">Home</Link>
            <Link href="#about" className="text-foreground/70 hover:text-soft-pink transition-colors text-sm">About</Link>
            <Link href="#services" className="text-foreground/70 hover:text-soft-pink transition-colors text-sm">Services</Link>
            <Link href="#consultation" className="text-foreground/70 hover:text-soft-pink transition-colors text-sm">Book Consultation</Link>
            <Link href="#contact" className="text-foreground/70 hover:text-soft-pink transition-colors text-sm">Contact</Link>
          </div>

          {/* Social Col */}
          <div className="col-span-1 flex flex-col space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider mb-2">Social Media</h4>
            <a href={siteConfig.social.facebookUrl} target="_blank" rel="noreferrer" className="flex items-center text-foreground/70 hover:text-soft-pink transition-colors text-sm group">
              <FacebookIcon className="w-4 h-4 mr-2" />
              {siteConfig.social.facebookName}
            </a>
            <a href={siteConfig.social.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center text-foreground/70 hover:text-soft-pink transition-colors text-sm group">
              <InstagramIcon className="w-4 h-4 mr-2" />
              {siteConfig.social.instagramName}
            </a>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="flex items-center text-foreground/70 hover:text-[#25D366] transition-colors text-sm group">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp ({siteConfig.contact.whatsapp})
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
          <p>© {currentYear} Acharya Ashirwad Consultancy. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Spiritual & Holistic Wellness</p>
        </div>
      </div>
    </footer>
  );
}
