import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Implement actual Google authentication
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-between p-8 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl transform -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transform translate-x-1/2"></div>
      
      {/* Logo */}
      <div className="w-full max-w-md text-center mt-12">
        <h1 className="text-white text-7xl font-bold tracking-tight">
          UPocket<span className="text-blue-500">.</span>
        </h1>
      </div>

      {/* Login Button */}
      <div className="w-full max-w-md space-y-8">
        <button
          onClick={handleLogin}
          className="w-full bg-white text-gray-700 py-4 px-6 rounded-full flex items-center justify-center space-x-3 hover:bg-gray-100 transition-colors shadow-lg"
        >
          <img 
            src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
            alt="Google" 
            className="w-6 h-6"
          />
          <span className="text-lg font-medium">Iniciar sesión</span>
        </button>
      </div>

      {/* Terms */}
      <div className="w-full max-w-md text-center mb-8">
        <p className="text-gray-400 text-sm px-8">
          Al usar UPocket, estás de acuerdo en aceptar los Términos de Uso y la Política de Privacidad.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;