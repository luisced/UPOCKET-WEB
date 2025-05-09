import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, AlertCircle, X } from 'lucide-react';

interface Absence {
  date: string;
  type: 'absence' | 'delay';
}

const subjects = [
  {
    name: "Filosofía Social",
    absences: [
      { date: "11 De Abril De 2025", type: "absence" },
      { date: "04 De Abril De 2025", type: "absence" },
      { date: "28 De Marzo De 2025", type: "absence" },
      { date: "10 De Marzo De 2025", type: "absence" },
      { date: "03 De Marzo De 2025", type: "absence" },
      { date: "24 De Febrero De 2025", type: "absence" },
      { date: "17 De Febrero De 2025", type: "absence" }
    ],
    totalClasses: 9,
    color: "bg-blue-500"
  }
];

const AttendanceDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const subject = subjects[Number(id) || 0];

  const attendancePercentage = Math.round(
    ((subject.totalClasses - subject.absences.length) / subject.totalClasses) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0513] to-[#120821] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold ml-4">{subject.name}</h1>
        </header>

        <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
          <div className="relative aspect-square max-w-[200px] mx-auto mb-6">
            <div className="w-full h-full rounded-full bg-gray-700/50"></div>
            <div 
              className="absolute inset-0 rounded-full border-4 border-blue-500"
              style={{
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${100 - attendancePercentage}%)`
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-4xl font-bold">{attendancePercentage}%</p>
              <p className="text-gray-400">{subject.absences.length}/{subject.totalClasses} faltas</p>
            </div>
          </div>

          {attendancePercentage < 80 && (
            <div className="bg-red-500/20 rounded-xl p-4 flex items-center gap-3 text-red-500 mb-6">
              <X size={20} />
              <p>¡Superaste el límite de faltas!</p>
            </div>
          )}

          <div className="flex justify-around">
            <button className="text-blue-500">Asistido</button>
            <button className="text-gray-400">Impartidas</button>
            <button className="text-gray-400">Totales</button>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">Faltas Registradas</h2>
        <div className="space-y-4">
          {subject.absences.map((absence, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <AlertCircle size={24} />
              </div>
              <div>
                <p className="font-semibold">Falta registrada</p>
                <p className="text-gray-400">{absence.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetailPage;