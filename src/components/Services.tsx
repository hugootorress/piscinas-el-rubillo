"use client";
import { Droplets, ShieldCheck, Settings, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const icons = [
  <Droplets size={34} key="droplets" />,
  <ShieldCheck size={34} key="shield" />,
  <Settings size={34} key="settings" />,
  <Clock size={34} key="clock" />,
];

export default function Services() {
  const { strings } = useLanguage();

  return (
    <section id={strings.services.sectionId} className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-light/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-white">{strings.services.title} </span>
            <span className="text-[#d4a574]">
              {strings.services.highlight}
            </span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            {strings.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[320px] md:max-w-5xl mx-auto">
          {strings.services.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 h-[320px] flex flex-col text-center shadow-xl transition-all duration-300 group-hover:border-brand/50 group-hover:shadow-glow-sm">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-brand to-brand-light rounded-2xl flex items-center justify-center text-white mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {icons[i]}
                </div>

                <div className="flex-1 flex flex-col pt-2">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-brand transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-2">{s.desc}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc2}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}