import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32 md:py-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
          alt="Interior de Lumbre Café con personas trabajando y disfrutando café de especialidad"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-brand-primary/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center text-brand-offwhite max-w-4xl mt-12 md:mt-0">
        {/* Trust Indicator */}
        <div className="mb-6 flex flex-col items-center animate-fade-in-up">
          <div className="flex items-center space-x-1 text-[#FFD700] mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            ))}
            <span className="text-brand-offwhite text-sm font-medium ml-2">4.8 (200+ reseñas)</span>
          </div>
          <span className="text-sm font-medium tracking-wider uppercase text-brand-sand">El favorito de Monterrey</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up animation-delay-100">
          Tu cafetería favorita en Monterrey para trabajar, brunch y café premium.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-sans mb-10 text-brand-sand max-w-2xl animate-fade-in-up animation-delay-200">
          Café de especialidad, internet rápido y el espacio perfecto para desconectarte o enfocarte.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up animation-delay-300">
          <Button variant="secondary" size="lg" href="https://wa.me/528112345678" target="_blank">
            Visítanos hoy
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            href="#menu" 
            className="bg-brand-offwhite text-brand-primary border-transparent hover:bg-brand-sand hover:text-brand-primary font-semibold"
          >
            Ver menú
          </Button>
        </div>
      </div>
    </section>
  );
};
