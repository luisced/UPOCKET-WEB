import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, addDays, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronLeft } from 'lucide-react';

interface ScheduleItem {
  start_time: string;
  end_time: string;
  subject_name: string;
  professor_name: string;
  classroom: string;
}

interface Schedule {
  [key: string]: ScheduleItem[];
}

const scheduleData = {
  "Lunes": [
                {
                    "start_time": "08:30",
                    "end_time": "10:00",
                    "subject_name": "Antropología Teológica II",
                    "professor_name": "Lic Carlos Jean",
                    "classroom": "R 42"
                },
                {
                    "start_time": "10:30",
                    "end_time": "12:00",
                    "subject_name": "Filosofía Social",
                    "professor_name": "Dr Ariadne de Fátima Pérez",
                    "classroom": "NR 04"
                },
                {
                    "start_time": "14:00",
                    "end_time": "15:30",
                    "subject_name": "Ciencia de Datos para Negocios",
                    "professor_name": "Dr Edgar Avalos",
                    "classroom": ""
                }
            ],
            "Martes": [
                {
                    "start_time": "07:00",
                    "end_time": "09:00",
                    "subject_name": "Arquitectura de Computadoras",
                    "professor_name": "Lic Carlos Fernando Meza",
                    "classroom": ""
                },
                {
                    "start_time": "17:30",
                    "end_time": "19:00",
                    "subject_name": "Teoría de Lenguajes y Programación",
                    "professor_name": "Dr Félix Orlando Martínez",
                    "classroom": "NR 06"
                },
                {
                    "start_time": "19:00",
                    "end_time": "20:30",
                    "subject_name": "Ecuaciones Diferenciales",
                    "professor_name": "Dr Yaithd Daniel Olivas",
                    "classroom": "R 46"
                }
            ],
            "Miércoles": [
                {
                    "start_time": "09:00",
                    "end_time": "10:30",
                    "subject_name": "Ciencia de Datos para Negocios",
                    "professor_name": "Dr Edgar Avalos",
                    "classroom": ""
                }
            ],
            "Jueves": [
                {
                    "start_time": "17:30",
                    "end_time": "19:00",
                    "subject_name": "Teoría de Lenguajes y Programación",
                    "professor_name": "Dr Félix Orlando Martínez",
                    "classroom": "V_LAB_COM2"
                }
            ],
            "Viernes": [
                {
                    "start_time": "07:00",
                    "end_time": "09:00",
                    "subject_name": "Arquitectura de Computadoras",
                    "professor_name": "Lic Carlos Fernando Meza",
                    "classroom": ""
                },
                {
                    "start_time": "10:30",
                    "end_time": "12:00",
                    "subject_name": "Filosofía Social",
                    "professor_name": "Dr Ariadne de Fátima Pérez",
                    "classroom": "NR 04"
                },
                {
                    "start_time": "19:00",
                    "end_time": "20:30",
                    "subject_name": "Ecuaciones Diferenciales",
                    "professor_name": "Dr Yaithd Daniel Olivas",
                    "classroom": "R 46"
                }
            ]
        };

const SchedulePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const timeSlots = Array.from({ length: 14 }, (_, i) => {
    const hour = i + 7; // Start from 7:00
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  const days = Array.from({ length: 5 }, (_, i) => {
    const date = addDays(selectedDate, i);
    return {
      date,
      dayName: format(date, 'EEE', { locale: es }).toUpperCase(),
      dayNumber: format(date, 'd'),
      month: format(date, 'MMM', { locale: es }).toUpperCase(),
    };
  });

  const getClassForTimeSlot = (time: string, dayIndex: number) => {
    const dayName = format(days[dayIndex].date, 'EEEE', { locale: es });
    const dayClasses = scheduleData[dayName] || [];
    
    return dayClasses.find(cls => {
      const slotTime = parseISO(`2024-01-01T${time}`);
      const startTime = parseISO(`2024-01-01T${cls.start_time}`);
      const endTime = parseISO(`2024-01-01T${cls.end_time}`);
      return slotTime >= startTime && slotTime < endTime;
    });
  };

  const getRandomColor = (subject: string) => {
    const colors = ['bg-pink-500', 'bg-blue-500', 'bg-purple-500'];
    const hash = subject.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
  };

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
          <h1 className="text-2xl font-bold ml-4">Horario</h1>
        </header>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            {format(selectedDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
          </h2>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {days.map((day, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center ${
                index === 0 ? 'bg-blue-500' : 'bg-gray-800/50'
              }`}
              onClick={() => setSelectedDate(day.date)}
            >
              <span className="text-sm">{day.month}</span>
              <span className="text-3xl font-bold">{day.dayNumber}</span>
              <span className="text-sm">{day.dayName}</span>
            </button>
          ))}
        </div>

        <div className="relative overflow-y-auto max-h-[calc(100vh-300px)]">
          {timeSlots.map((time, i) => (
            <div key={i} className="flex items-center min-h-[100px] relative">
              <div className="w-16 text-sm text-gray-400">{time}</div>
              <div className="flex-1 border-t border-gray-800"></div>
            </div>
          ))}

          <div className="absolute top-0 left-16 right-0">
            {days.map((day, dayIndex) => (
              <div key={dayIndex} className="absolute w-1/5 left-[${dayIndex * 20}%]">
                {scheduleData[format(day.date, 'EEEE', { locale: es })]?.map((cls, i) => {
                  const startMinutes = parseInt(cls.start_time.split(':')[0]) * 60 + 
                                     parseInt(cls.start_time.split(':')[1]);
                  const endMinutes = parseInt(cls.end_time.split(':')[0]) * 60 + 
                                   parseInt(cls.end_time.split(':')[1]);
                  const duration = endMinutes - startMinutes;
                  const top = (startMinutes - 7 * 60) * (100 / 60);
                  const height = duration * (100 / 60);

                  return (
                    <div
                      key={i}
                      className={`absolute rounded-xl p-3 ${getRandomColor(cls.subject_name)} w-[90%]`}
                      style={{
                        top: `${top}px`,
                        height: `${height}px`,
                      }}
                    >
                      <h3 className="font-semibold text-sm">{cls.subject_name}</h3>
                      <p className="text-xs opacity-80">{cls.classroom}</p>
                      <p className="text-xs mt-1">
                        {cls.start_time} - {cls.end_time}
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;