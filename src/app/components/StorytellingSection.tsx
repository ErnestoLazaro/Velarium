import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const storyBlocks = [
  {
    text: "En el corazón de Playa del Carmen, donde las sombras bailan con la luz de las velas...",
  },
  {
    text: "Existe un lugar que no todos encuentran.",
  },
  {
    text: "Un santuario oculto bajo el velo de la noche.",
  },
  {
    text: "Velarium es más que un bar — es una experiencia sensorial.",
  },
  {
    text: "Donde la música gótica envuelve el aire, las bebidas se convierten en rituales, y cada rincón cuenta una historia en penumbras.",
  },
  {
    text: "Aquí, el tiempo se detiene. La oscuridad es nuestra musa.",
  },
  {
    text: "¿Te atreves a descorrer el velo?",
  },
];

function StoryBlock({ text, index }: { text: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      className="min-h-[40vh] flex items-center justify-center px-6"
    >
      <p 
        className="text-2xl md:text-4xl lg:text-5xl text-center max-w-4xl leading-relaxed text-[#f5f5dc]"
        style={{ fontFamily: 'Cinzel, serif', fontWeight: 300 }}
      >
        {text}
      </p>
    </motion.div>
  );
}

export function StorytellingSection() {
  return (
    <section id="storytelling" className="bg-black py-24 relative">
      {/* Efecto de velo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80" />
      
      <div className="relative z-10">
        {storyBlocks.map((block, index) => (
          <StoryBlock key={index} text={block.text} index={index} />
        ))}
      </div>

      {/* Separador decorativo */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mt-24 mx-auto w-48 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
      />
    </section>
  );
}
