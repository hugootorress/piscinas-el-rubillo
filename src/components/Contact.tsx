"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { strings } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: Phone, label: "Llámanos", value: "641 312 550", href: "tel:+34641312550" },
    { icon: MapPin, label: "Zona de servicio", value: "Turre, Almería", href: "#" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id={strings.contact.sectionId} className="py-20 md:py-32 bg-gradient-to-br from-navy via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            <span className="text-white">{strings.contact.title} </span>
            <span className="text-[#d4a574]">{strings.contact.highlight}</span>
          </h2>
          <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto px-2">
            {strings.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    className="flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/50 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-brand to-brand-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-slate-300 text-[10px] md:text-xs font-semibold uppercase tracking-wider">{info.label}</p>
                      <p className="text-lg md:text-2xl font-bold text-white group-hover:text-brand transition-colors">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-brand/10 border border-brand/20">
              <div className="flex items-center gap-3 text-brand font-semibold mb-3">
                <CheckCircle2 size={20} />
                <span className="text-sm md:text-base">{strings.contact.whyTitle}</span>
              </div>
              <ul className="grid grid-cols-1 gap-2 text-slate-200 text-xs md:text-sm">
                {strings.contact.whyItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">✓ {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-navy/50 backdrop-blur-md border border-slate-700 rounded-3xl p-6 md:p-12 shadow-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <MessageSquare className="text-brand" size={24} />
              {strings.contact.caseTitle}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[#d4a574] mb-2 uppercase tracking-wide">{strings.contact.nameLabel}</label>
                <input required type="text" className="w-full bg-slate-800/50 border border-slate-600 focus:border-brand text-white p-4 rounded-xl outline-none transition-all text-sm" placeholder={strings.contact.namePlaceholder} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#d4a574] mb-2 uppercase tracking-wide">{strings.contact.phoneLabel}</label>
                <input required type="tel" className="w-full bg-slate-800/50 border border-slate-600 focus:border-brand text-white p-4 rounded-xl outline-none transition-all text-sm" placeholder={strings.contact.phonePlaceholder} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#d4a574] mb-2 uppercase tracking-wide">{strings.contact.messageLabel}</label>
                <textarea required className="w-full bg-slate-800/50 border border-slate-600 focus:border-brand text-white p-4 rounded-xl h-32 outline-none transition-all text-sm resize-none" placeholder={strings.contact.messagePlaceholder} />
              </div>

              <button type="submit" className="w-full bg-[#d4a574] hover:bg-brand text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg uppercase text-sm active:scale-95">
                {submitted ? strings.contact.submitted : strings.contact.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}