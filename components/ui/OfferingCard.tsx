import React from 'react';
import { Card } from './Card';

interface OfferingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const OfferingCard: React.FC<OfferingCardProps> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <Card variant="light">
      <div className="flex flex-col items-start space-y-4">
        {/* Icon */}
        <div className="text-[var(--color-courage-green)] w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-[var(--color-deep-navy)] text-2xl font-bold font-[var(--font-display)]">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed font-[var(--font-body)]">
          {description}
        </p>
      </div>
    </Card>
  );
};
