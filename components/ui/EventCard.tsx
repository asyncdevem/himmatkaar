import React from 'react';
import Image from 'next/image';
import { Card } from './Card';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

export const EventCard: React.FC<EventCardProps> = ({ 
  image, 
  title, 
  date, 
  description 
}) => {
  return (
    <Card variant="light">
      <div className="flex flex-col space-y-4">
        {/* Event Image */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        
        {/* Event Date */}
        <div className="text-[var(--color-courage-gold)] text-sm font-semibold font-[var(--font-body)] uppercase tracking-wide">
          {date}
        </div>
        
        {/* Event Title */}
        <h3 className="text-[var(--color-deep-navy)] text-2xl font-bold font-[var(--font-display)]">
          {title}
        </h3>
        
        {/* Event Description */}
        <p className="text-gray-600 text-base leading-relaxed font-[var(--font-body)]">
          {description}
        </p>
      </div>
    </Card>
  );
};

