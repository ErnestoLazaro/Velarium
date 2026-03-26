import { motion } from 'motion/react';
import { useState } from 'react';
import logoImage from 'figma:asset/fc5abf06be17b2e6da646e3f4b2cc8fbd04df523.png';

export function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setShowContent(true);
    const storytellingSection = document.getElementById('storytelling');
    if (storytellingSection) {
      storytellingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo oscuro con efecto de velo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 bg-gradient-radial from-[#1a1a2e]/50 to-black"
      />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="z-10 flex flex-col items-center text-center px-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mb-8"
        >
          <img 
            src={logoImage} 
            alt="Velarium" 
            className="w-[400px] max-w-[90vw] h-auto"
          />
        </motion.div>

        {/* Eslogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="text-[#d4af37] text-xl md:text-2xl mb-12 font-light tracking-wide"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Oculto bajo el velo de la noche
        </motion.p>

        {/* Botón Entrar */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          onClick={handleEnter}
          className="group relative px-12 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] 
                     hover:bg-[#d4af37] hover:text-black transition-all duration-500 overflow-hidden"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          <span className="relative z-10 text-lg tracking-widest">→ Entrar</span>
          <motion.div
            className="absolute inset-0 bg-[#d4af37]"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={{ originX: 0 }}
          />
        </motion.button>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#d4af37]/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-[#d4af37] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
