import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Fondo con efecto */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1a1a2e]/20 to-black" />

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
            Ubicación
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto w-32 h-[2px] bg-[#d4af37]"
          />
        </motion.div>

        {/* Texto misterioso */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl md:text-3xl text-center text-[#f5f5dc] mb-12 italic"
          style={{ fontFamily: 'Cinzel, serif', fontWeight: 300 }}
        >
          "No todos encuentran Velarium… pero tú ya estás cerca."
        </motion.p>

        {/* Dirección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-3 mb-12 text-[#d4af37]"
        >
          <MapPin className="w-6 h-6" />
          <p className="text-xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Playa del Carmen, Quintana Roo, México
          </p>
        </motion.div>

        {/* Mapa embebido */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59561.89156117826!2d-87.11207733125!3d20.62773595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e433889d8c0f5%3A0xb7a7a3d6c5d6c5d6!2sPlaya%20del%20Carmen%2C%20Quintana%20Roo%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Velarium Location"
          />
        </motion.div>

        {/* Nota adicional */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center text-[#d4af37]/60 mt-8 text-sm tracking-widest"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          UBICACIÓN EXACTA REVELADA AL RESERVAR
        </motion.p>
      </div>
    </section>
  );
}
