"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, strings } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-8">
        <a href="#" className="block min-w-fit" aria-label="Inicio">
          <Image
            src="/logo.png"
            alt="El Rubillo Piscinas"
            width={240}
            height={96}
            className="h-24 w-auto transition-transform duration-300 hover:scale-105 object-contain"
            priority
          />
        </a>

        <div className="hidden lg:flex items-center gap-12 font-semibold text-white uppercase tracking-[0.12em] text-xs flex-1 justify-center">
          {strings.navItems.map((item) => (
            <a key={item.href} href={`#${item.href}`} className="relative group pb-1 transition-colors hover:text-[#d4a574] whitespace-nowrap">
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#d4a574] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Botones de idioma más grandes */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            aria-label={strings.localeAria.es}
            onClick={() => setLocale("es")}
            className={`rounded-full border px-4 py-2 text-lg font-semibold transition-all duration-300 ${locale === "es" ? "border-[#d4a574] text-[#d4a574] bg-[#d4a574]/10" : "border-white/20 text-white/70 hover:text-white hover:border-white/40"}`}
          >
            🇪🇸
          </button>
          <button
            type="button"
            aria-label={strings.localeAria.en}
            onClick={() => setLocale("en")}
            className={`rounded-full border px-4 py-2 text-lg font-semibold transition-all duration-300 ${locale === "en" ? "border-[#d4a574] text-[#d4a574] bg-[#d4a574]/10" : "border-white/20 text-white/70 hover:text-white hover:border-white/40"}`}
          >
            🇬🇧
          </button>
        </div>

        {/* Botón de teléfono en color dorado */}
        <a href="tel:+34641312550" className="hidden md:inline-flex items-center justify-center bg-[#d4a574] text-slate-950 px-6 py-3 rounded-full font-black shadow-[0_0_15px_rgba(212,165,116,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(212,165,116,0.6)] text-sm min-w-fit">
          {strings.phone}
        </a>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil mejorado */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 border-t border-white/10 p-6 space-y-5 backdrop-blur-xl flex flex-col items-center">
          {strings.navItems.map((item) => (
            <a key={item.href} href={`#${item.href}`} onClick={() => setIsOpen(false)} className="block w-full text-center text-white hover:text-[#d4a574] transition-colors py-2 font-bold text-lg uppercase tracking-widest">
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full justify-center">
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={`rounded-full border px-5 py-2 text-xl transition-all ${locale === "es" ? "border-[#d4a574] bg-[#d4a574]/10" : "border-white/20"}`}
            >
              🇪🇸
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full border px-5 py-2 text-xl transition-all ${locale === "en" ? "border-[#d4a574] bg-[#d4a574]/10" : "border-white/20"}`}
            >
              🇬🇧
            </button>
          </div>
          <a href="tel:+34641312550" className="w-full text-center bg-[#d4a574] text-slate-950 py-4 rounded-xl font-black uppercase text-sm tracking-tighter">
            {strings.phone}
          </a>
        </div>
      )}
    </nav>
  );
}