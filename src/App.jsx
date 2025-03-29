import "./App.css";
import { ChevronDownIcon, HomeIcon, ArrowPathIcon, DocumentTextIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import BentoGrid from './components/BentoGrid';
import VideoBackground from './components/VideoBackground';
import Footer from './components/Footer';
import AnimatedHeader from './components/AnimatedHeader';

function App() {
  return (
    <>
  
      <AnimatedHeader />
      
      {/* Contenido principal con padding-top para compensar el header fijo */}
      <div className="pt-32 sm:pt-40 md:pt-48 lg:pt-64">
        <div className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light text-center mb-16 sm:mb-20 md:mb-24 px-4">
          Descubre la belleza de la simplicidad en cada momento. 
          Nada más, nada menos, solo la esencia pura.
        </div>
        
        <nav className="flex flex-wrap justify-center items-center mb-24 sm:mb-28 md:mb-32 gap-4 sm:gap-8 md:gap-12 px-4">
          <a href="#introduccion" className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-medium hover:text-gray-600 transition-colors group">
            <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            Introducción
            <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform" />
          </a>
          <a href="#cambios" className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-medium hover:text-gray-600 transition-colors group">
            <ArrowPathIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            Cambios
            <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform" />
          </a>
          <a href="#contenido" className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-medium hover:text-gray-600 transition-colors group">
            <DocumentTextIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            Contenido
            <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform" />
          </a>
          <a href="#explorar" className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-medium hover:text-gray-600 transition-colors group">
            <MagnifyingGlassIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            Explorar
            <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform" />
          </a>
        </nav>

        <BentoGrid />

        {/* Banner */}
        <div className="w-full bg-black text-white py-16 sm:py-20 md:py-24 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                Nothing!
              </h2>
            </div>
          </div>
        </div>

        <VideoBackground />

        {/* Nueva sección de texto */}
        <div className="w-full bg-white py-20 sm:py-24 md:py-28 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 sm:mb-8">
                Descubre la magia de lo simple
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                En un mundo que constantemente nos pide más, encontrar la belleza en lo esencial 
                se convierte en un acto de rebelión. Cada momento, cada espacio, cada instante 
                tiene su propia magia cuando aprendemos a ver más allá de lo obvio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
