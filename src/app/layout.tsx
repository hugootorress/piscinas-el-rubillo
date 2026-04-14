import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas en Turre, Mojácar y Vera | El Rubillo",
  description: "Especialistas en limpieza de piscinas, control de pH, cloro y reparación de bombas. Servicio profesional en Turre, Mojácar, Garrucha, Vera Playa, Antas y Almería.",
  keywords: [
    "mantenimiento de piscinas Almería", 
    "limpieza de piscinas Turre", 
    "reparación bombas piscinas",
    "control ph y cloro piscinas",
    "servicio técnico depuradoras",
    "mantenimiento integral de piscinas",
    "piscinas Mojácar",
    "limpieza piscinas Vera Playa",
    "mantenimiento piscinas Garrucha",
    "reparación piscinas Sierra Cabrera",
    "limpieza piscinas Los Gallardos",
    "mantenimiento piscinas Antas",
    "piscinas El Rubillo Almería",
    "poner a punto piscina Almería"
  ],
  authors: [{ name: "Piscinas El Rubillo" }],
  openGraph: {
    title: "Piscinas El Rubillo | Mantenimiento y Limpieza Profesional",
    description: "Tu piscina siempre cristalina. Cubrimos Turre, Mojácar, Vera y todo el Levante Almeriense.",
    url: "https://piscinaselrubillo.com",
    siteName: "Piscinas El Rubillo",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Mantenimiento profesional de piscinas en Almería",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://piscinaselrubillo.com",
    languages: {
      'es-ES': 'https://piscinaselrubillo.com',
      'en-GB': 'https://piscinaselrubillo.com/en',
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