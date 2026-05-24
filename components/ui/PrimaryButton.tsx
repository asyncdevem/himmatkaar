import React from 'react';
import Link from 'next/link';

export interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  href,
  disabled = false,
}) => {
  const baseClasses = `
    inline-block
    px-6 py-4
    font-sans font-bold text-base
    text-white
    bg-[var(--color-courage-green)]
    rounded-lg
    transition-all duration-300 ease-in-out
    hover:brightness-110 hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-[var(--color-courage-green)] focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:brightness-100
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
