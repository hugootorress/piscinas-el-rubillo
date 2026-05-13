"use client";
import { Droplets, ShieldCheck, Settings, Clock } from "lucide-react";
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
    <section id={strings.services.sectionId} className="py-12 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
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
            <div
              key={i}
              className="group relative transition-all duration-500 hover:-translate-y-3 hover:rotate-1"
            >
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-brand/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 bg-gradient-radial from-brand/10 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 p-8 h-auto md:h-[380px] flex flex-col text-center shadow-2xl transition-all duration-500 group-hover:border-brand/30 group-hover:shadow-glow group-hover:from-slate-800/90 group-hover:via-slate-900/80 group-hover:to-slate-800/90">

                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-brand via-brand-light to-navy-blue rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  <div className="absolute inset-0 bg-brand/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {icons[i]}
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-white mb-4 leading-tight group-hover:text-brand transition-colors duration-300 tracking-wide">
                    {s.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3 font-medium">{s.desc}</p>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 flex items-end justify-center">{s.desc2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}