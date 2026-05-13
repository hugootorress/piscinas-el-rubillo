import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-navy selection:bg-brand selection:text-white">
        <Navbar />
        <Hero />
        <Services />
        <Gallery />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}