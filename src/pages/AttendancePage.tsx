import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Subject {
  name: string;
  absences: number;
  delays: number;
  color: string;
}

const subjects: Subject[] = [
  {
    name: "Filosofía Social",
    absences: 7,
    delays: 3,
    color: "bg-blue-500"
  },
  {
    name: "Arquitectura de Computadoras",
    absences: 4,
    delays: 0,
    color: "bg-blue-400"
  },
  {
    name: "Teoría de Lenguajes y Programación",
    absences: 0,
    delays: 0,
    color: "bg-orange-400"
  },
  {
    name: "Ciencia de Datos para Negocios",
    absences: 0,
    delays: 0,
    color: "bg-green-500"
  },
  {
    name: "Ecuaciones Diferenciales",
    absences: 3,
    delays: 0,
    color: "bg-pink-500"
  },
  {
    name: "Antropología Teológica II",
    absences: 3,
    delays: 1,
    color: "bg-orange-500"
  }
];

const AttendancePage: React.FC = () => {
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
          <h1 className="text-2xl font-bold ml-4">Mis Faltas</h1>
        </header>

        <div className="space-y-4">
          {subjects.map((subject, index) => (
            <button
              key={index}
              onClick={() => navigate(`/asistencias/${index}`)}
              className={`w-full ${theme === 'light' ? 'bg-white shadow-lg hover:bg-gray-50' : 'bg-gray-800/50 hover:bg-gray-800/70'} rounded-2xl p-4 flex items-center gap-4 transition-colors`}
            >
              <div className={`w-12 h-12 rounded-full ${subject.color} ${theme === 'light' ? 'bg-opacity-20' : ''}`}></div>
              <div className="flex-1 text-left">
                <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {subject.name.length > 30 
                    ? subject.name.substring(0, 30) + '...' 
                    : subject.name}
                </h3>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                  {subject.absences} Faltas {subject.delays > 0 && `${subject.delays} Retardos`}
                </p>
              </div>
              <ChevronLeft size={20} className={`transform rotate-180 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;