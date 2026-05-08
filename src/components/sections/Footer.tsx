import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-brand-offwhite pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-brand-sand/20 pb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="font-serif text-3xl font-semibold text-brand-sand mb-4">Lumbre Café</h2>
            <p className="font-sans text-brand-offwhite/70 mb-6">
              Café que enciende tus mañanas. El espacio ideal en Monterrey para trabajar, estudiar o simplemente disfrutar.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="#" className="text-brand-offwhite hover:text-brand-terracotta transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-brand-offwhite hover:text-brand-terracotta transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* TikTok */}
              <a href="#" className="text-brand-offwhite hover:text-brand-terracotta transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-xl mb-4">Explora</h3>
            <ul className="space-y-3 font-sans text-brand-offwhite/80">
              <li><Link href="#inicio" className="hover:text-brand-terracotta transition-colors">Inicio</Link></li>
              <li><Link href="#beneficios" className="hover:text-brand-terracotta transition-colors">Por qué Lumbre</Link></li>
              <li><Link href="#menu" className="hover:text-brand-terracotta transition-colors">Menú</Link></li>
              <li><Link href="#ubicacion" className="hover:text-brand-terracotta transition-colors">Ubicación</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl mb-4">Contacto</h3>
            <ul className="space-y-3 font-sans text-brand-offwhite/80">
              <li>WhatsApp: +52 81 1234 5678</li>
              <li>hola@lumbrecafe.com</li>
              <li>Av. Principal 123, Zona Centro</li>
              <li>Monterrey, N.L., México</li>
            </ul>
          </div>

          {/* SEO Local Info */}
          <div>
            <h3 className="font-serif text-xl mb-4">Horarios</h3>
            <ul className="space-y-3 font-sans text-brand-offwhite/80">
              <li>Lunes - Viernes:<br/><span className="text-brand-sand">7:00 AM - 10:00 PM</span></li>
              <li>Sábado - Domingo:<br/><span className="text-brand-sand">8:00 AM - 11:00 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-sans text-brand-offwhite/60">
          <p>© {new Date().getFullYear()} Lumbre Café Monterrey. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-brand-offwhite transition-colors">Políticas de Privacidad</Link>
            <Link href="#" className="hover:text-brand-offwhite transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
