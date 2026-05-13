"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const faqs = [
  {
    question: "¿Cuál es la diferencia entre piscinas de cloro y salinas?",
    answer: "Las piscinas de cloro utilizan productos químicos para desinfectar el agua, mientras que las salinas generan cloro a partir de la sal mediante electrólisis. Las salinas son más suaves para la piel y los ojos, pero requieren mantenimiento específico del equipo de salinización."
  },
  {
    question: "¿Con qué frecuencia debo hacer mantenimiento en invierno?",
    answer: "En invierno, recomendamos visitas mensuales para controlar el pH, limpiar filtros y verificar el estado general. Aunque uses menos la piscina, es crucial mantener el equilibrio químico para evitar problemas al reactivarla en primavera."
  },
  {
    question: "¿Cómo recupero una piscina con agua verde?",
    answer: "Primero, analizamos el agua para identificar la causa (algas, bacterias). Aplicamos tratamientos de choque con cloro o alguicidas específicos, limpiamos a fondo y ajustamos la química. En casos graves, puede requerir vaciado parcial o completo."
  },
  {
    question: "¿Qué incluye una limpieza completa de piscina?",
    answer: "Incluye aspirado del fondo y paredes, cepillado de superficies, limpieza de skimmers y desagües, vaciado de cestas, revisión de filtros y ajuste de niveles químicos. Dejamos tu piscina completamente limpia y lista para usar."
  },
  {
    question: "¿Cómo funciona el control automático de pH y cloro?",
    answer: "Los sistemas automáticos miden constantemente los niveles y añaden productos químicos según sea necesario. Reducen el mantenimiento manual, mantienen el agua siempre equilibrada y evitan problemas como algas o irritación en la piel."
  },
  {
    question: "¿Qué hacer si la bomba de la piscina no funciona?",
    answer: "Primero, verifica si hay corriente y el interruptor está encendido. Si no, puede ser un problema eléctrico, obstrucción en la entrada o fallo mecánico. Nuestros técnicos revisan y reparan bombas, incluyendo sustitución de piezas desgastadas."
  }
];

export default function FAQ() {
  const { strings } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            <span className="text-white">{strings.faq.title} </span>
            <span className="text-[#d4a574]">{strings.faq.highlight}</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            {strings.faq.description}
          </p>
        </div>

        <div className="space-y-4">
          {strings.faq.questions.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-slate-700 rounded-xl bg-slate-950/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-800/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-brand w-5 h-5 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": strings.faq.questions.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}