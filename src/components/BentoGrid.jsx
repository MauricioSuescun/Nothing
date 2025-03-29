import { useState, useEffect } from 'react';

const BentoGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Usamos la API de Unsplash con un tema minimalista
        const response = await fetch(
          'https://api.unsplash.com/photos/random?count=6&query=minimal,abstract&orientation=landscape',
          {
            headers: {
              'Authorization': `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
            }
          }
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      {/* Layout para móviles */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {/* Imagen principal */}
        <div className="relative overflow-hidden rounded-2xl group aspect-[4/3]">
          <img
            src={images[0]?.urls?.regular}
            alt={images[0]?.alt_description}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
              Nothing!
            </h2>
          </div>
        </div>

        {/* Imágenes secundarias */}
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="relative overflow-hidden rounded-2xl group aspect-[4/3]">
            <img
              src={images[index]?.urls?.regular}
              alt={images[index]?.alt_description}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
                Nothing!
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Layout para tablets y desktop */}
      <div className="hidden sm:grid grid-cols-7 grid-rows-7 gap-4">
        {/* Imagen principal grande */}
        <div className="col-span-5 row-span-4 relative overflow-hidden rounded-2xl group">
          <img
            src={images[0]?.urls?.regular}
            alt={images[0]?.alt_description}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-7xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
              Nothing!
            </h2>
          </div>
        </div>
        
        {/* Columna derecha - dos imágenes */}
        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group">
          <img
            src={images[1]?.urls?.regular}
            alt={images[1]?.alt_description}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
              Nothing!
            </h2>
          </div>
        </div>
        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group">
          <img
            src={images[2]?.urls?.regular}
            alt={images[2]?.alt_description}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
              Nothing!
            </h2>
          </div>
        </div>
        
        {/* Fila inferior - tres imágenes */}
        <div className="col-span-2 row-span-3 relative overflow-hidden rounded-2xl group">
          <img
            src={images[3]?.urls?.regular}
            alt={images[3]?.alt_description}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
              Nothing!
            </h2>
          </div>
        </div>
        <div className="col-span-2 row-span-3 relative overflow-hidden rounded-2xl group">
          <img
            src={images[4]?.urls?.regular}
            alt={images[4]?.alt_description}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
              Nothing!
            </h2>
          </div>
        </div>
        <div className="col-span-3 row-span-3 relative overflow-hidden rounded-2xl group">
          <img
            src={images[5]?.urls?.regular}
            alt={images[5]?.alt_description}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-6xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
              Nothing!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid; 