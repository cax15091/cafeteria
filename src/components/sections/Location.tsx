import React from 'react';
import { Button } from '../ui/Button';

export const Location: React.FC = () => {
  return (
    <section className="py-20 bg-brand-offwhite border-b border-brand-sand/50" id="ubicacion">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Info */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-primary mb-6">
              ¿Buscas una cafetería donde realmente quieras quedarte horas?
            </h2>
            <p className="font-sans text-xl text-brand-terracotta mb-8 font-medium">
              Lumbre te espera.
            </p>
            
            <div className="space-y-6 mb-8 text-brand-primary/80">
              <div className="flex items-start justify-center lg:justify-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-terracotta flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div className="text-left">
                  <h4 className="font-serif text-xl text-brand-primary">Ubicación</h4>
                  <p className="font-sans">Av. Principal 123, Zona Centro<br/>Monterrey, N.L., México</p>
                </div>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-terracotta flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <h4 className="font-serif text-xl text-brand-primary">Horarios</h4>
                  <p className="font-sans">Lunes a Viernes: 7:00 AM - 10:00 PM<br/>Sábados y Domingos: 8:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="outline" 
                size="lg" 
                href="https://maps.google.com/?q=Monterrey,Nuevo+Leon,Mexico" 
                target="_blank"
              >
                Abrir en Google Maps
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107253503!2d-100.40788649999999!3d25.671391799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629531b437f8f5%3A0xa3d3d3ca6ac89894!2sMonterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1715206385150!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Lumbre Café en Monterrey"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
