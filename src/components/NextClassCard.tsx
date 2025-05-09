import React from 'react';
import LeafDecoration from './LeafDecoration';

interface NextClassCardProps {
  title: string;
  room: string;
  startTime: string;
  endTime: string;
}

const NextClassCard: React.FC<NextClassCardProps> = ({
  title,
  room,
  startTime,
  endTime
}) => {
  return (
    <div className="next-class-card rounded-3xl p-6 relative min-h-[160px]">
      <div className="next-class-decoration">
        <LeafDecoration />
      </div>
      <div className="relative z-10">
        <p className="text-lg mb-2">Tu siguiente clase es</p>
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full">
          <p className="text-sm">{room} | {startTime} - {endTime}</p>
        </div>
      </div>
    </div>
  );
};

export default NextClassCard;