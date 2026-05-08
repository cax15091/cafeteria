import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Menu } from "@/components/sections/Menu";
import { Atmosphere } from "@/components/sections/Atmosphere";
import { SocialProof } from "@/components/sections/SocialProof";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  // Schema Markup for LocalBusiness / CafeOrCoffeeShop
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Lumbre Café",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000",
    "@id": "https://lumbrecafe.com",
    "url": "https://lumbrecafe.com",
    "telephone": "+528112345678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Principal 123, Zona Centro",
      "addressLocality": "Monterrey",
      "addressRegion": "N.L.",
      "postalCode": "64000",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.6714,
      "longitude": -100.3090
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "23:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/lumbrecafe",
      "https://www.facebook.com/lumbrecafe"
    ],
    "servesCuisine": "Coffee and Brunch",
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col items-center justify-between w-full relative">
        <Hero />
        <Benefits />
        <Menu />
        <Atmosphere />
        <SocialProof />
        <Location />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
