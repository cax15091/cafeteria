import React from 'react';

const benefits = [
  {
    title: 'Internet Rápido',
    description: 'Conexión estable y de alta velocidad para que nunca pierdas el ritmo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    title: 'Enchufes en cada mesa',
    description: 'No te preocupes por la batería, tenemos conexiones en cada rincón.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Café Premium',
    description: 'Granos de especialidad seleccionados y tostados a la perfección.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Brunch Todo el Día',
    description: 'Chilaquiles, pan francés y opciones saludables siempre disponibles.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Ideal para Citas',
    description: 'Ambiente íntimo y acogedor perfecto para una plática tranquila.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Música Tranquila',
    description: 'Playlist curada para ayudarte a enfocar o relajarte.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19.5V15m0 0v-4.5m0 4.5h4.5M9 15H4.5m15 0V10.5m0 0v-4.5m0 4.5h-4.5m4.5 4.5H15M4.5 10.5v-4.5m0 4.5H9" />
      </svg>
    ),
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-brand-offwhite" id="beneficios">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-primary mb-4">
            Por qué la gente ama Lumbre
          </h2>
          <p className="text-lg text-brand-primary/80 max-w-2xl mx-auto">
            Creamos un espacio pensado en ti. Ya sea que vengas a cerrar un trato, estudiar para tu examen o simplemente disfrutar un momento a solas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-sand/30 hover:bg-brand-sand transition-colors duration-300"
            >
              <div className="text-brand-terracotta mb-4 bg-brand-offwhite p-4 rounded-full shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="font-serif text-2xl text-brand-primary mb-2">{benefit.title}</h3>
              <p className="font-sans text-brand-primary/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
