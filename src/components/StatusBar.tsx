import React, { useState } from 'react';
import { Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const StatusBar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={`flex justify-between items-center w-full py-4 px-6 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} bg-opacity-40 backdrop-blur-sm rounded-lg`}>
        <div className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white/90'}`}>
          UPocket Web
        </div>
        
        <button 
          className={`p-2 sm:p-3 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'} bg-opacity-40 rounded-full hover:bg-opacity-60 transition-colors`}
          aria-label="Settings"
          onClick={() => setIsSheetOpen(true)}
        >
          <Settings className={`w-6 h-6 sm:w-5 sm:h-5 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`} />
        </button>
      </div>

      {/* Sheet */}
      {isSheetOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center sm:items-center">
          <div 
            className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} w-full sm:w-96 sm:rounded-2xl overflow-hidden`}
            style={{
              maxHeight: '90vh',
              borderTopLeftRadius: '1.5rem',
              borderTopRightRadius: '1.5rem'
            }}
          >
            <div className="p-6">
              <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-6 sm:hidden"></div>
              <h2 className={`text-xl font-semibold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                Settings
              </h2>

              <div className="mb-6">
                <button
                  onClick={toggleTheme}
                  className={`w-full py-3 px-4 ${
                    theme === 'light' 
                      ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  } rounded-xl transition-colors flex items-center justify-between`}
                >
                  <span>Theme</span>
                  <div className="flex items-center gap-2">
                    <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
                    {theme === 'light' ? (
                      <Sun className="w-5 h-5" />
                    ) : (
                      <Moon className="w-5 h-5" />
                    )}
                  </div>
                </button>
              </div>
              
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