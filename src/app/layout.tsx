import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumbre Café | Café de especialidad y brunch en Monterrey",
  description: "Tu cafetería favorita en Monterrey para trabajar, disfrutar de un buen brunch y café premium. Ambiente cálido, internet rápido y el mejor matcha.",
  keywords: ["cafetería en Monterrey", "mejor café en Monterrey", "cafetería para trabajar Monterrey", "brunch Monterrey", "café de especialidad"],
  openGraph: {
    title: "Lumbre Café | Café que enciende tus mañanas",
    description: "Cafetería de especialidad moderna enfocada en café premium, brunch y un ambiente cálido ideal para trabajar o disfrutar en Monterrey.",
    url: "https://lumbrecafe.com",
    siteName: "Lumbre Café",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-primary bg-brand-offwhite">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
