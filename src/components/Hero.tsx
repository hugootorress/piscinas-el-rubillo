"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { strings } = useLanguage();

  return (
    <section className="relative min-h-[95vh] overflow-hidden pt-24 flex items-center">
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/hero-bg.jpg" 
          alt={strings.hero.imageAlt} 
          fill 
          sizes="100vw" 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(179,145,74,0.18),transparent_30%),linear-gradient(180deg,rgba(0,74,135,0.4),rgba(15,23,42,0.95))]"></div>
      </div>

      <div className="relative z-10 px-6 py-12 max-w-4xl mx-auto text-center space-y-6">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight"
        >
          {strings.hero.title} <br />
          <span className="text-[#d4a574]">{strings.hero.highlight}</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed"
        >
          {strings.hero.subtitle}
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }} 
          className="flex flex-col md:flex-row gap-4 justify-center items-center pt-6"
        >
          <a 
            href={`#${strings.contact.sectionId}`} 
            className="w-fit bg-[#d4a574] text-slate-950 px-8 md:px-10 py-3.5 rounded-full font-bold shadow-glow-sm inline-block transition-transform hover:scale-105"
          >
            {strings.hero.btnQuote}
          </a>

          <a 
            href={`#${strings.services.sectionId}`} 
            className="w-fit border-2 border-white text-white px-8 md:px-10 py-3.5 rounded-full font-bold inline-block transition-transform hover:scale-105 hover:bg-white/10"
          >
            {strings.hero.btnServices}
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-brand w-8 h-8" />
      </motion.div>
    </section>
  );
}