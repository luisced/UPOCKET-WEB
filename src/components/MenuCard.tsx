import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

interface MenuCardProps {
  title: string;
  subtitle: string;
  accentColor: 'pink' | 'purple' | 'blue' | 'orange';
  link?: string;
  bgColor: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, subtitle, accentColor, link, bgColor }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const accentClasses = {
    pink: 'accent-pink',
    purple: 'accent-purple',
    blue: 'accent-blue',
    orange: 'accent-orange'
  };

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div 
      className={`menu-card rounded-3xl p-6 aspect-square flex flex-col justify-end cursor-pointer ${
        theme === 'light' ? bgColor : 'bg-gray-800/50'
      }`}
      onClick={handleClick}
    >
      <div className={`${accentClasses[accentColor]} accent-corner`}></div>
      <div className="relative z-10">
        <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          {title}
        </h3>
        <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default MenuCard;