import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Search, ArrowUpDown, Medal } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Grade {
  name: string;
  average: number;
  grades: {
    first: number;
    second: number;
    third: number | null;
    final: number | null;
  };
  color: string;
}

const grades: Grade[] = [
  {
    name: "Antropología Teológica II",
    average: 5.8,
    grades: {
      first: 6.2,
      second: 5.5,
      third: null,
      final: null
    },
    color: "pink-500"
  },
  {
    name: "Arquitectura de Computadoras",
    average: 9.4,
    grades: {
      first: 9.5,
      second: 9.3,
      third: null,
      final: null
    },
    color: "purple-500"
  },
  {
    name: "Ciencia de Datos para Negocios",
    average: 9.0,
    grades: {
      first: 10.0,
      second: 8.0,
      third: null,
      final: null
    },
    color: "blue-500"
  },
  {
    name: "Ecuaciones Diferenciales",
    average: 7.8,
    grades: {
      first: 6.0,
      second: 9.5,
      third: null,
      final: null
    },
    color: "blue-400"
  },
  {
    name: "Filosofía Social",
    average: 6.8,
    grades: {
      first: 7.1,
      second: 6.6,
      third: null,
      final: null
    },
    color: "blue-300"
  },
  {
    name: "Teoría de Lenguajes y Programación",
    average: 5.5,
    grades: {
      first: 5.5,
      second: 5.5,
      third: null,
      final: null
    },
    color: "red-500"
  }
];

const GradesPage: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'list' | 'table'>('table');
  const { theme } = useTheme();
  
  const overallAverage = (grades.reduce((acc, curr) => acc + curr.average, 0) / grades.length).toFixed(2);

  const getGradeColor = (grade: number | null) => {
    if (grade === null) return theme === 'light' ? 'text-blue-600' : 'text-blue-500';
    if (grade < 6.0) return theme === 'light' ? 'text-red-600' : 'text-red-500';
    if (grade < 7.0) return theme === 'light' ? 'text-gray-600' : 'text-gray-400';
    if (grade < 8.0) return theme === 'light' ? 'text-gray-800' : 'text-gray-200';
    if (grade < 9.0) return theme === 'light' ? 'text-blue-600' : 'text-blue-400';
    return theme === 'light' ? 'text-gray-900' : 'text-white';
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gradient-to-b from-[#0f0513] to-[#120821]'} ${theme === 'light' ? 'text-gray-900' : 'text-white'} p-6`}>
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button 
              onClick={() => navigate(-1)}
              className={`p-2 rounded-full ${theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-white/10'} transition-colors`}
            >
              <ChevronLeft size={24} className={theme === 'light' ? 'text-gray-700' : 'text-white'} />
            </button>
            <h1 className="text-2xl font-bold ml-4">Mis Calificaciones</h1>
          </div>
          <button 
            className={`p-2 rounded-full ${theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-white/10'} transition-colors`}
          >
            <Search size={24} className={theme === 'light' ? 'text-gray-700' : 'text-white'} />
          </button>
        </header>

        <div className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800/50'} rounded-3xl p-6 mb-8`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`${theme === 'light' ? 'bg-blue-100' : 'bg-blue-500/20'} p-4 rounded-2xl`}>
              <Medal size={32} className={theme === 'light' ? 'text-blue-600' : 'text-blue-500'} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Promedio General</h2>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>Actualizado: Ahora</p>
            </div>
          </div>
          <div className="flex items-end gap-8">
            <div>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-2>Promedio</p>
              <p className="text-5xl font-bold">{overallAverage}</p>
            </div>
            <div className={`flex-1 h-12 ${theme === 'light' ? 'bg-blue-100' : 'bg-blue-500/20'} rounded-full overflow-hidden`}>
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${(Number(overallAverage) / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-6">
            <button 
              className={`text-lg ${view === 'list' ? 'text-blue-500 border-b-2 border-blue-500' : theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
              onClick={() => setView('list')}
            >
              Vista en Lista
            </button>
            <button 
              className={`text-lg ${view === 'table' ? 'text-blue-500 border-b-2 border-blue-500' : theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
              onClick={() => setView('table')}
            >
              Vista en Tabla
            </button>
          </div>
          <button className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
            <ArrowUpDown size={20} className={theme === 'light' ? 'text-gray-700' : 'text-white'} />
          </button>
        </div>

        {view === 'table' ? (
          <div className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800/50'} rounded-2xl overflow-hidden`}>
            <table className="w-full">
              <thead>
                <tr className={`border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-700/50'}`}>
                  <th className="text-left p-4 text-gray-400">Materia</th>
                  <th className="p-4 text-gray-400">1°</th>
                  <th className="p-4 text-gray-400">2°</th>
                  <th className="p-4 text-gray-400">3°</th>
                  <th className="p-4 text-gray-400">Final</th>
                  <th className="p-4 text-gray-400">Prom.</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((subject, index) => (
                  <tr key={index} className={`border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-700/50'} last:border-0`}>
                    <td className="p-4 text-left">
                      {subject.name.length > 15 
                        ? subject.name.substring(0, 15) + '...'
                        : subject.name}
                    </td>
                    <td className={`p-4 text-center ${getGradeColor(subject.grades.first)}`}>
                      {subject.grades.first.toFixed(1)}
                    </td>
                    <td className={`p-4 text-center ${getGradeColor(subject.grades.second)}`}>
                      {subject.grades.second.toFixed(1)}
                    </td>
                    <td className={`p-4 text-center ${theme === 'light' ? 'text-red-600' : 'text-red-500'}`}>N/A</td>
                    <td className={`p-4 text-center ${theme === 'light' ? 'text-blue-600' : 'text-blue-500'}`}>N/A</td>
                    <td className={`p-4 text-center font-bold ${getGradeColor(subject.average)}`}>
                      {subject.average.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="space-y-4">
            {grades.map((subject, index) => (
              <div key={index} className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800/50'} rounded-2xl p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{subject.name}</h3>
                  <span className={`text-2xl font-bold ${getGradeColor(subject.average)}`}>
                    {subject.average.toFixed(1)}
                  </span>
                </div>
                <div className={`h-1 bg-${subject.color}/30 rounded-full mb-4`}>
                  <div 
                    className={`h-full bg-${subject.color} rounded-full`}
                    style={{ width: `${(subject.average / 10) * 100}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {['1er', '2do', '3er', 'Final'].map((period, i) => (
                    <div key={i} className={`${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900/50'} rounded-xl p-3 text-center`}>
                      <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-1`}>{period}</p>
                      <p className={`text-lg font-bold ${
                        getGradeColor(
                          i === 0 ? subject.grades.first :
                          i === 1 ? subject.grades.second :
                          i === 2 ? subject.grades.third :
                          subject.grades.final
                        )
                      }`}>
                        {i === 0 ? subject.grades.first.toFixed(1) :
                         i === 1 ? subject.grades.second.toFixed(1) :
                         i === 2 ? (subject.grades.third ?? 'N/A') :
                         subject.grades.final ?? 'N/A'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GradesPage;