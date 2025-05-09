import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Book, Users, Wallet, Globe, GraduationCap, FileCheck, School, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface LinkCard {
  title: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
  url: string;
}

const links: LinkCard[] = [
  {
    title: "Biblioteca",
    subtitle: "Libros",
    color: "bg-pink-500",
    icon: <Book className="w-6 h-6" />,
    url: "https://biblioteca.up.edu.mx"
  },
  {
    title: "Evalúa a tus Profesores",
    subtitle: "Profesores",
    color: "bg-green-500",
    icon: <Users className="w-6 h-6" />,
    url: "https://evaluacion.up.edu.mx"
  },
  {
    title: "Care UP",
    subtitle: "Tesorería",
    color: "bg-orange-500",
    icon: <Wallet className="w-6 h-6" />,
    url: "https://careup.up.edu.mx"
  },
  {
    title: "International Affairs",
    subtitle: "Extranjero",
    color: "bg-blue-500",
    icon: <Globe className="w-6 h-6" />,
    url: "https://internacional.up.edu.mx"
  },
  {
    title: "Planes de Estudio",
    subtitle: "Academic Services",
    color: "bg-emerald-500",
    icon: <GraduationCap className="w-6 h-6" />,
    url: "https://planes.up.edu.mx"
  },
  {
    title: "Titulaciones",
    subtitle: "Requisitos",
    color: "bg-blue-400",
    icon: <FileCheck className="w-6 h-6" />,
    url: "https://titulacion.up.edu.mx"
  },
  {
    title: "Escuelas Prácticas",
    subtitle: "Career Services",
    color: "bg-pink-400",
    icon: <School className="w-6 h-6" />,
    url: "https://practicas.up.edu.mx"
  },
  {
    title: "Servicio Social",
    subtitle: "Compromiso Social",
    color: "bg-indigo-500",
    icon: <Heart className="w-6 h-6" />,
    url: "https://social.up.edu.mx"
  }
];

const LinksPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gradient-to-b from-[#0f0513] to-[#120821]'} ${theme === 'light' ? 'text-gray-900' : 'text-white'} p-6`}>
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className={`p-2 rounded-full ${theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-white/10'} transition-colors`}
          >
            <ChevronLeft size={24} className={theme === 'light' ? 'text-gray-700' : 'text-white'} />
          </button>
          <h1 className="text-2xl font-bold ml-4">Links</h1>
        </header>

        <div className="grid grid-cols-2 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className={`relative ${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800/50'} rounded-3xl p-6 aspect-square overflow-hidden group hover:scale-[0.98] transition-transform`}>
                <div className={`absolute -right-12 -top-12 w-48 h-48 ${link.color} rounded-full ${theme === 'light' ? 'opacity-10 group-hover:opacity-20' : 'opacity-20 group-hover:opacity-30'} transition-opacity`}></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className={`${link.color} ${theme === 'light' ? 'bg-opacity-20 text-gray-900' : 'text-white'} w-fit px-4 py-1.5 rounded-full text-sm mb-auto`}>
                    {link.subtitle}
                  </div>
                  <div className="mt-auto">
                    <h2 className="text-2xl font-bold mb-2">{link.title}</h2>
                    <div className={`${link.color} ${theme === 'light' ? 'bg-opacity-20' : ''} rounded-full p-2 w-fit`}>
                      {React.cloneElement(link.icon as React.ReactElement, {
                        className: `${theme === 'light' ? 'text-gray-900' : 'text-white'}`
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;