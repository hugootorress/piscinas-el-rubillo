"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

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
            <div
              key={index}
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
              
              <div className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-4 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
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