import { HeroSection } from './components/HeroSection';
import { StorytellingSection } from './components/StorytellingSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { MusicSection } from './components/MusicSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="bg-black text-[#f5f5dc] overflow-x-hidden">
      <style>{`
        * {
          scroll-behavior: smooth;
        }
        body {
          background: #000000;
          font-family: 'Cormorant Garamond', serif;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000000;
        }
        ::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b8942c;
        }
      `}</style>
      
      <HeroSection />
      <StorytellingSection />
      <GallerySection />
      <LocationSection />
      <MusicSection />
      <ContactSection />
    </div>
  );
}