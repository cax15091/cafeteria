import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

const menuItems = [
  {
    id: 'latte-lumbre',
    name: 'Latte Lumbre',
    description: 'Nuestro signature con un toque secreto de especias tostadas. Un abrazo cálido para empezar el día.',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'horchata-cold-brew',
    name: 'Horchata Cold Brew',
    description: 'La cremosidad de la horchata de la casa fusionada con 18 horas de extracción en frío. Refrescante y adictivo.',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Grado ceremonial orgánico, batido a mano. El equilibrio perfecto entre energía y enfoque sin ansiedad.',
    price: '$90',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'chilaquiles-brunch',
    name: 'Chilaquiles Brunch',
    description: 'Crujientes, bañados en salsa tatemada, con crema de rancho y un huevo estrellado perfecto. El brunch que te mereces.',
    price: '$165',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cheesecake-espresso',
    name: 'Cheesecake Espresso',
    description: 'Textura sedosa con un toque de nuestro espresso de la casa. El acompañamiento ideal para largas horas de plática.',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600',
  },
];

export const Menu: React.FC = () => {
  return (
    <section className="py-20 bg-brand-sand" id="menu">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-sm font-medium tracking-wider uppercase text-brand-terracotta mb-2">Lo más pedido</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-primary mb-4">
            Nuestro Menú Destacado
          </h2>
          <p className="text-lg text-brand-primary/80 max-w-2xl">
            Cada producto es preparado al momento con ingredientes premium para garantizar una experiencia inigualable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-brand-offwhite rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl text-brand-primary font-semibold">{item.name}</h3>
                  <span className="font-sans font-medium text-brand-terracotta text-lg">{item.price}</span>
                </div>
                <p className="font-sans text-brand-primary/70 mb-6 flex-grow leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  variant="primary" 
                  fullWidth 
                  href={`https://wa.me/528112345678?text=${encodeURIComponent(`Hola, me gustaría pedir un ${item.name} para recoger/tomar ahí.`)}`}
                  target="_blank"
                >
                  Pedir ahora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
