import { useState, useEffect } from 'react';

const VideoBackground = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          'https://api.pexels.com/videos/search?query=minimal+abstract&per_page=1',
          {
            headers: {
              Authorization: import.meta.env.VITE_PEXELS_API_KEY
            }
          }
        );
        const data = await response.json();
        if (data.videos && data.videos.length > 0) {
          // Obtener la URL del video en la mejor calidad disponible
          const videoFiles = data.videos[0].video_files;
          const bestQuality = videoFiles.find(file => file.quality === 'hd') || videoFiles[0];
          setVideoUrl(bestQuality.link);
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  if (loading) {
    return (
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      
      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
              La esencia de la simplicidad
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-4 sm:mb-6">
              En un mundo lleno de ruido y distracciones, encontrar la belleza en lo simple se convierte en un arte. 
              Cada momento, cada espacio, cada instante tiene su propia magia cuando aprendemos a ver más allá de lo obvio.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              La simplicidad no es la ausencia de complejidad, sino la presencia de claridad. 
              Es encontrar el equilibrio perfecto entre lo esencial y lo accesorio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground; 