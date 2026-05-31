import React from 'react';
import Link from 'next/link';

export interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  onClick,
  href,
  disabled = false,
}) => {
  const baseClasses = `
    inline-block
    px-6 py-4
    font-sans font-bold text-base
    text-[var(--color-courage-gold)]
    bg-transparent
    border-2 border-[var(--color-courage-gold)]
    rounded-lg
    transition-all duration-300 ease-in-out
    hover:bg-[var(--color-courage-gold)] hover:text-[var(--color-deep-navy)]
    focus:outline-none focus:ring-2 focus:ring-[var(--color-courage-gold)] focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[var(--color-courage-gold)]
    w-full md:w-auto
    text-center
  `.trim().replace(/\s+/g, ' ');

  // If href is provided, render as a Link
  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses}>
        {text}
      </Link>
    );
  }

  // Otherwise, render as a button
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {text}
    </button>
  );
};

