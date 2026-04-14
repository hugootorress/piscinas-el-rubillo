"use client";
import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { strings } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-t from-slate-950 to-navy text-slate-300 py-10">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-6" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C50,30 150,30 200,0 L200,0 L0,0 Z" fill="rgba(255,255,255,0.05)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-5 mb-6">
          <a
            href="https://instagram.com/piscinas.elrubillo/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-brand/10 hover:bg-brand rounded-full flex items-center justify-center text-brand hover:text-white transition-all transform hover:scale-110"
            aria-label="Instagram"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://wa.me/34641312550"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-brand/10 hover:bg-brand rounded-full flex items-center justify-center text-brand hover:text-white transition-all transform hover:scale-110"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
        
        <p className="text-slate-400 text-xs md:text-sm font-medium tracking-wide">
          {strings.footer.replace("{year}", String(new Date().getFullYear()))}
        </p>
      </div>
    </footer>
  );
}