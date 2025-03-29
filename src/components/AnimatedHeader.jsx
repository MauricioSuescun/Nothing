import { useState, useEffect } from 'react';

const AnimatedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Activa la animación después de 100px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-2 sm:py-3 md:py-4' 
        : 'bg-transparent py-8 sm:py-12 md:py-16 lg:py-24'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h1 className={`transition-all duration-300 text-center ${
          isScrolled 
            ? 'text-lg sm:text-xl md:text-2xl font-bold text-black' 
            : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-black'
        }`}>
          Nothing <span className="font-light">Just</span> happens!
        </h1>
      </div>
    </div>
  );
};

export default AnimatedHeader; 