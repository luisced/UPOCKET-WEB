import React, { useState } from 'react';
import { Settings } from 'lucide-react';

const StatusBar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center w-full py-4 px-6 bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-lg">
        <div className="text-xl font-semibold text-white/90">Student Dashboard</div>
        
        <button 
          className="p-2 sm:p-3 bg-gray-700 bg-opacity-40 rounded-full hover:bg-opacity-60 transition-colors"
          aria-label="Settings"
          onClick={() => setIsSheetOpen(true)}
        >
          <Settings className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Sheet */}
      {isSheetOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center sm:items-center">
          <div 
            className="bg-gray-800 w-full sm:w-96 sm:rounded-2xl overflow-hidden"
            style={{
              maxHeight: '90vh',
              borderTopLeftRadius: '1.5rem',
              borderTopRightRadius: '1.5rem'
            }}
          >
            <div className="p-6">
              <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-6 sm:hidden"></div>
              <h2 className="text-xl font-semibold mb-6">Settings</h2>
              
              <button 
                onClick={() => setIsSheetOpen(false)}
                className="w-full py-3 px-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
          
          <div 
            className="fixed inset-0 z-[-1]" 
            onClick={() => setIsSheetOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default StatusBar;