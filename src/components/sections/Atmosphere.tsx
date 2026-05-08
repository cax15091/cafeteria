import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Atmosphere: React.FC = () => {
  return (
    <section className="py-24 bg-brand-offwhite overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-6 leading-tight">
              El espacio perfecto para enfocarte o desconectarte.
            </h2>
            <p className="font-sans text-lg text-brand-primary/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sabemos que el ambiente lo es todo. Por eso diseñamos Lumbre Café con madera cálida, luz natural, sillas ergonómicas e internet estable.
              <br/><br/>
              Ya sea que necesites enviar correos toda la mañana, tener una primera cita inolvidable, o simplemente leer tu libro favorito acompañado de un buen café.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button variant="primary" size="lg" href="https://wa.me/528112345678" target="_blank">
                Reserva tu mesa
              </Button>
            </div>
          </div>

          {/* Image Collage */}
          <div className="w-full lg:w-1/2 shrink-0 grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 min-h-[450px] lg:min-h-[550px]">
            {/* Left Top (2/3) */}
            <div className="relative w-full h-full col-start-1 col-end-2 row-start-1 row-end-3 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=800"
                alt="Personas trabajando con laptop en Lumbre Café"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right Top (1/3) */}
            <div className="relative w-full h-full col-start-2 col-end-3 row-start-1 row-end-2 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600"
                alt="Barista preparando café de especialidad"
                fill
                className="object-cover"
              />
            </div>

            {/* Left Bottom (1/3) */}
            <div className="relative w-full h-full col-start-1 col-end-2 row-start-3 row-end-4 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=600"
                alt="Vapor subiendo de una taza de café caliente"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Bottom (2/3) */}
            <div className="relative w-full h-full col-start-2 col-end-3 row-start-2 row-end-4 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800"
                alt="Ambiente cálido y acogedor en la cafetería"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
