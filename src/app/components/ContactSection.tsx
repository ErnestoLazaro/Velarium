import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Instagram, MessageCircle, Clock } from 'lucide-react';
import logoMark from 'figma:asset/61633acbaae432f6a3d5660167a7bceba269f2b0.png';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1a1a2e]/10 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-[#d4af37] mb-6"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Contacto
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto w-32 h-[2px] bg-[#d4af37]"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Instagram */}
          <motion.a
            href="https://instagram.com/velarium"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="group text-center block hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-300">
                <Instagram className="w-8 h-8 text-[#d4af37] group-hover:text-black transition-colors duration-300" />
              </div>
            </div>
            <h3 
              className="text-xl text-[#d4af37] mb-2 group-hover:text-[#f5f5dc] transition-colors"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Instagram
            </h3>
            <p 
              className="text-[#f5f5dc]/70 group-hover:text-[#f5f5dc] transition-colors"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              @velarium
            </p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/521234567890"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="group text-center block hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-[#d4af37] group-hover:text-black transition-colors duration-300" />
              </div>
            </div>
            <h3 
              className="text-xl text-[#d4af37] mb-2 group-hover:text-[#f5f5dc] transition-colors"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              WhatsApp
            </h3>
            <p 
              className="text-[#f5f5dc]/70 group-hover:text-[#f5f5dc] transition-colors"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Reservaciones
            </p>
          </motion.a>

          {/* Horario */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#d4af37]" />
              </div>
            </div>
            <h3 
              className="text-xl text-[#d4af37] mb-2"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Horario
            </h3>
            <p 
              className="text-[#f5f5dc]/70"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              2:00 PM - 2:00 AM
            </p>
          </motion.div>
        </div>

        {/* Logo decorativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="flex justify-center mb-12"
        >
          <img 
            src={logoMark} 
            alt="Velarium Mark" 
            className="w-24 h-24 opacity-50"
          />
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center space-y-4"
        >
          <p 
            className="text-[#d4af37]/60 text-sm tracking-[0.3em]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            VELARIUM
          </p>
          <p 
            className="text-[#f5f5dc]/40 text-xs tracking-widest"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Bar oculto bajo el velo de la noche
          </p>
          <p 
            className="text-[#f5f5dc]/30 text-xs tracking-wider"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Playa del Carmen, México
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center text-[#f5f5dc]/20 text-xs mt-12"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          © 2026 Velarium. Todos los derechos reservados.
        </motion.p>
      </div>
    </section>
  );
}
