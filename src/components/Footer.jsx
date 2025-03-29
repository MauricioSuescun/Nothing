import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  Code2,
  Layout,
  Zap,
  Terminal
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Columna 1 - Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Nothing!</h3>
            <p className="text-gray-400">
              Descubre la belleza de la simplicidad en cada momento. 
              Nada más, nada menos, solo la esencia pura.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#introduccion" className="text-gray-400 hover:text-white transition-colors">Introducción</a></li>
              <li><a href="#cambios" className="text-gray-400 hover:text-white transition-colors">Cambios</a></li>
              <li><a href="#contenido" className="text-gray-400 hover:text-white transition-colors">Contenido</a></li>
              <li><a href="#explorar" className="text-gray-400 hover:text-white transition-colors">Explorar</a></li>
            </ul>
          </div>

          {/* Columna 3 - Redes Sociales */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Columna 4 - Tecnologías */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Tecnologías</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Code2 className="w-6 h-6" />
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Layout className="w-6 h-6" />
                <span>Tailwind</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Zap className="w-6 h-6" />
                <span>Vite</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Terminal className="w-6 h-6" />
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nothing!. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 