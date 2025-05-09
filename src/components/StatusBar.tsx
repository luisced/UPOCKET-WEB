import React from 'react';
import { Settings } from 'lucide-react';

const StatusBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full py-4 px-6 bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-lg">
      <div className="text-xl font-semibold text-white/90">Student Dashboard</div>
      
      <button 
        className="p-3 bg-gray-700 bg-opacity-40 rounded-full hover:bg-opacity-60 transition-colors"
        aria-label="Settings"
      >
        <Settings size={20} />
      </button>
    </div>
  );
};

export default StatusBar;