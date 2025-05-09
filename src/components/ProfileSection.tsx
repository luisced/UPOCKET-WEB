import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ProfileSectionProps {
  name: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 bg-white rounded-full mr-4"></div>
      <div>
        <p className={`text-lg ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Bienvenido <span className="inline-block ml-1">👋</span>
        </p>
        <h1 className={`text-3xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          {name}
        </h1>
      </div>
    </div>
  );
};

export default ProfileSection;