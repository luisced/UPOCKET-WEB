import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuCardProps {
  title: string;
  subtitle: string;
  accentColor: 'pink' | 'blue' | 'cyan' | 'orange';
  link?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, subtitle, accentColor, link }) => {
  const navigate = useNavigate();
  const accentClasses = {
    pink: 'accent-pink',
    blue: 'accent-blue',
    cyan: 'accent-cyan',
    orange: 'accent-orange'
  };

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div 
      className="menu-card rounded-3xl p-6 aspect-square flex flex-col justify-end cursor-pointer"
      onClick={handleClick}
    >
      <div className={`${accentClasses[accentColor]} accent-corner`}></div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default MenuCard;