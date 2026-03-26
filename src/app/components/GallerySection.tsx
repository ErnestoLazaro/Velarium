import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importar las imágenes
import img1 from 'figma:asset/96ae6a7b2d23a0d8b5a93cf1cff57e91c0327f0d.png';
import img2 from 'figma:asset/eeda4f0b2e0f65fccc3bfa55e38c5e67e2c93f7d.png';
import img3 from 'figma:asset/ceee85e89b28e8e0d0629b1c40cac5e8dbc02a17.png';
import img4 from 'figma:asset/d76aa7737bc8df3df96e4d67e8d6e7ec55aa6ca7.png';

const galleryImages = [
  { src: img1, alt: 'Velarium Interior 1' },
  { src: img2, alt: 'Velarium Interior 2' },
  { src: img3, alt: 'Velarium Interior 3' },
  { src: img4, alt: 'Velarium Interior 4' },
];

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:scale-110 transition-all duration-300 group"
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6 text-[#d4af37] group-hover:text-black" />
    </button>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:scale-110 transition-all duration-300 group"
      aria-label="Previous"
    >
      <ChevronLeft className="w-6 h-6 text-[#d4af37] group-hover:text-black" />
    </button>
  );
}

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-[#d4af37]/30 hover:bg-[#d4af37] transition-all duration-300 mt-8" />
    ),
    dotsClass: 'slick-dots !flex justify-center gap-3',
  };

  return (
    <>
      <section ref={ref} className="bg-black py-32 px-6 relative overflow-hidden">
        {/* Fondo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

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
              Galería
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mx-auto w-32 h-[2px] bg-[#d4af37]"
            />
          </motion.div>

          {/* Carrusel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <style>{`
              .slick-slide > div {
                padding: 0 10px;
              }
              .slick-list {
                margin: 0 -10px;
              }
              .slick-dots li button:before {
                display: none;
              }
              .slick-dots li.slick-active > div {
                background-color: #d4af37 !important;
                transform: scale(1.3);
              }
            `}</style>
            
            <Slider {...settings}>
              {galleryImages.map((image, index) => (
                <div key={index} className="outline-none">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 border-2 border-[#d4af37]/0 hover:border-[#d4af37]/50 transition-all duration-300" />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Texto descriptivo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-center text-[#d4af37]/60 mt-12 text-sm tracking-widest"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            DESCUBRE EL MISTERIO
          </motion.p>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:scale-110 transition-all duration-300 group z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-[#d4af37] group-hover:text-black" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg border-2 border-[#d4af37]"
              />

              {/* Navegación en modal */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
                    );
                  }}
                  className="w-12 h-12 rounded-full bg-black/80 border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:scale-110 transition-all duration-300 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-[#d4af37] group-hover:text-black" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="w-12 h-12 rounded-full bg-black/80 border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:scale-110 transition-all duration-300 group"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-[#d4af37] group-hover:text-black" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
