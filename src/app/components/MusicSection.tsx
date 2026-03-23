import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Music, Wine, Flame } from 'lucide-react';

const musicGenres = [
  'Goth',
  'Post-punk',
  'EBM',
  'Deathrock',
  'Darkwave neo-clásico',
  'Darkwave',
  'Ethereal wave',
];

export function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-[#d4af37] mb-6"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            La Experiencia
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto w-32 h-[2px] bg-[#d4af37]"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Música */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] flex items-center justify-center">
                <Music className="w-10 h-10 text-[#d4af37]" />
              </div>
            </div>
            <h3 
              className="text-2xl md:text-3xl text-[#d4af37] mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Música
            </h3>
            <div className="space-y-2">
              {musicGenres.map((genre, index) => (
                <motion.p
                  key={genre}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="text-[#f5f5dc] text-lg"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {genre}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Bebidas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] flex items-center justify-center">
                <Wine className="w-10 h-10 text-[#d4af37]" />
              </div>
            </div>
            <h3 
              className="text-2xl md:text-3xl text-[#d4af37] mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Bebidas
            </h3>
            <p 
              className="text-[#f5f5dc] text-xl leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Cada bebida es un ritual. Cócteles artesanales creados en las sombras, con ingredientes únicos que evocan misterio y seducción.
            </p>
          </motion.div>

          {/* Ambiente */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] flex items-center justify-center">
                <Flame className="w-10 h-10 text-[#d4af37]" />
              </div>
            </div>
            <h3 
              className="text-2xl md:text-3xl text-[#d4af37] mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Ambiente
            </h3>
            <p 
              className="text-[#f5f5dc] text-xl leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Sombras que bailan con la luz de las velas. Un espacio donde la oscuridad se convierte en belleza y el silencio habla.
            </p>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-20"
        >
          <p 
            className="text-2xl md:text-3xl text-[#d4af37] italic"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 300 }}
          >
            "En Velarium, la oscuridad es nuestra musa"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
