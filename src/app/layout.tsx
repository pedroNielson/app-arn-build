import type { Metadata } from "next";
import { Unbounded, Instrument_Sans } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded", weight: ["700", "900"] });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: "ARN Soluções Energéticas | Energia solar em Goiás",
  description: "Projetos de energia solar para residências, empresas, agronegócio e prefeituras. Peça seu orçamento gratuito.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${unbounded.variable} ${instrument.variable}`}>
      <head>
        <noscript><style>{"[data-reveal]{opacity:1!important}"}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
