import React from 'react';
import MenuCard from './MenuCard';
import { useTheme } from '../contexts/ThemeContext';

const MenuCardSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div>
      <h2 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>PARA TI</h2>
      <div className="grid grid-cols-2 gap-4">
        <MenuCard 
          title="Mis Calificaciones" 
          subtitle="Consulta tus calificaciones y tu promedio"
          accentColor="pink"
          link="/calificaciones"
          bgColor="bg-pink-100"
        />
        <MenuCard 
          title="Mi Horario" 
          subtitle="Consulta tu horario"
          accentColor="purple"
          link="/horario"
          bgColor="bg-purple-100"
        />
        <MenuCard 
          title="Otros Links" 
          subtitle="Consulta otros sitios"
          accentColor="blue"
          link="/links"
          bgColor="bg-blue-100"
        />
        <MenuCard 
          title="Mis Asistencias" 
          subtitle="Consulta tus asistencias y retardos"
          accentColor="orange"
          link="/asistencias"
          bgColor="bg-orange-100"
        />
      </div>
    </div>
  );
};

export default MenuCardSection;