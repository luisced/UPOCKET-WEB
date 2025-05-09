import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StatusBar from './components/StatusBar';
import ProfileSection from './components/ProfileSection';
import NextClassCard from './components/NextClassCard';
import MenuCardSection from './components/MenuCardSection';
import SchedulePage from './pages/SchedulePage';
import GradesPage from './pages/GradesPage';
import AttendancePage from './pages/AttendancePage';
import AttendanceDetailPage from './pages/AttendanceDetailPage';
import LinksPage from './pages/LinksPage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col min-h-screen px-8 py-6 max-w-6xl mx-auto">
              <StatusBar />
              
              <div className="mt-8 mb-6">
                <ProfileSection name="Luis Cedillo" />
              </div>
              
              <div className="mb-8">
                <NextClassCard 
                  title="Ecuaciones Diferenciales"
                  room="R 46"
                  startTime="19:00"
                  endTime="20:30"
                />
              </div>
              
              <MenuCardSection />
              
              <div className="h-16 mt-auto"></div>
            </div>
          } />
          <Route path="/horario" element={<SchedulePage />} />
          <Route path="/calificaciones" element={<GradesPage />} />
          <Route path="/asistencias" element={<AttendancePage />} />
          <Route path="/asistencias/:id" element={<AttendanceDetailPage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}