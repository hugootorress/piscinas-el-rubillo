import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://piscinas-el-rubillo.vercel.app";

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas en Turre, Mojácar, Vera y Garrucha | El Rubillo",
  description: "Servicio profesional de limpieza y mantenimiento de piscinas en Turre, Mojácar, Garrucha, Vera Playa, Villaricos, Palomares y alrededores. Control de pH, cloro y reparación de bombas.",
  verification: {
    google: 'BMKwLvpmJJQ_Pv7VKop25SEfWOz49U6w8SA34D8JTm8',
  },
  keywords: [
    "mantenimiento de piscinas Turre",
    "limpieza de piscinas Mojácar",
    "mantenimiento piscinas Garrucha",
    "limpieza piscinas Vera Playa",
    "mantenimiento piscinas Palomares",
    "limpieza de piscinas Villaricos",
    "mantenimiento piscinas Los Gallardos",
    "piscinas Sierra Cabrera",
    "mantenimiento piscinas Antas",
    "limpieza piscinas Bédar",
    "mantenimiento piscinas Cuevas del Almanzora",
    "piscinas San Juan de los Terreros",
    "reparación bombas piscinas Almería",
    "control ph y cloro piscinas",
    "servicio técnico depuradoras",
    "mantenimiento integral de piscinas",
    "poner a punto piscina Almería",
    "Piscinas El Rubillo"
  ],
  authors: [{ name: "Piscinas El Rubillo" }],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Piscinas El Rubillo | Mantenimiento y Limpieza Profesional",
    description: "Tu piscina siempre cristalina. Damos servicio en Turre, Mojácar, Vera, Garrucha y todo el Levante Almeriense.",
    url: baseUrl,
    siteName: "Piscinas El Rubillo",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'es-ES': baseUrl,
      'en-GB': `${baseUrl}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}