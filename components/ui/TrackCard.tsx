import React from 'react';
import { Card } from './Card';

interface TrackCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const TrackCard: React.FC<TrackCardProps> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <Card variant="dark">
      <div className="flex flex-col items-start space-y-4">
        {/* Icon */}
        <div className="text-[var(--color-courage-gold)] w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-white text-2xl font-bold font-[var(--font-display)]">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-white/80 text-base leading-relaxed font-[var(--font-body)]">
          {description}
        </p>
      </div>
    </Card>
  );
};

