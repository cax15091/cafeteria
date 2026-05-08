import React from 'react';

const testimonials = [
  {
    name: 'Sofía R.',
    text: 'El mejor matcha que he probado en Monterrey. Además, el internet nunca falla cuando vengo a trabajar.',
    rating: 5,
  },
  {
    name: 'Diego M.',
    text: 'Buen café, internet rápido y ambiente súper cómodo para trabajar. Los chilaquiles son un must los domingos.',
    rating: 5,
  },
  {
    name: 'Andrea G.',
    text: 'Tuvimos una cita aquí y la atmósfera es súper tranquila. La música está al volumen perfecto para platicar.',
    rating: 5,
  },
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-brand-primary text-brand-offwhite">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Lo que dicen de nosotros
          </h2>
          <div className="flex items-center justify-center space-x-2 text-brand-sand">
            <span className="font-bold text-2xl">4.8</span>
            <div className="flex text-[#FFD700]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <span>En Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#4D3A32] p-8 rounded-2xl flex flex-col items-center text-center relative"
            >
              <div className="absolute -top-4 bg-brand-terracotta rounded-full p-2 text-brand-offwhite shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex text-[#FFD700] mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="font-sans text-brand-offwhite/90 italic mb-6 leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
              <h4 className="font-serif text-xl font-medium text-brand-sand">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
