"use client";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function Gallery() {
  const { strings } = useLanguage();

  return (
    <section id={strings.gallery.sectionId} className="py-20 bg-gradient-to-br from-navy to-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-brand/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
            <Sparkles className="text-brand hidden md:block" size={28} />
            <h2 className="text-4xl md:text-6xl font-black">
              <span className="text-white">{strings.gallery.title} </span>
              <span className="text-[#d4a574]">{strings.gallery.highlight}</span>
            </h2>
          </div>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl">
            {strings.gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[340px] sm:max-w-md md:max-w-3xl mx-auto">
          {strings.gallery.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl transition-all duration-500 hover:-translate-y-2 h-[260px] md:h-[280px]"
            >
              <Image
                src={`/trabajo${project.id}.jpg`}
                alt={`${project.name} - Piscinas El Rubillo`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                // Priority solo para la primera imagen para optimizar el LCP
                priority={idx === 0} 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent opacity-80"></div>

              <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-slate-200 leading-relaxed">{project.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}