import React from 'react';
import MenuCard from './MenuCard';

const MenuCardSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">PARA TI</h2>
      <div className="grid grid-cols-2 gap-4">
        <MenuCard 
          title="Mis Calificaciones" 
          subtitle="Consulta tus calificaciones y tu promedio"
          accentColor="pink"
          link="/calificaciones"
        />
        <MenuCard 
          title="Mi Horario" 
          subtitle="Consulta tu horario"
          accentColor="blue"
          link="/horario"
        />
        <MenuCard 
          title="Otros Links" 
          subtitle="Consulta otros sitios"
          accentColor="cyan"
          link="/links"
        />
        <MenuCard 
          title="Mis Asistencias" 
          subtitle="Consulta tus asistencias y retardos"
          accentColor="orange"
          link="/asistencias"
        />
      </div>
    </div>
  );
};

export default MenuCardSection;