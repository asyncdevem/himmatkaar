'use client';

import React from 'react';

export interface FormInputProps {
  type: 'text' | 'email' | 'textarea' | 'tel' | 'password' | 'number';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number; // For textarea
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  error,
  label,
  name,
  id,
  required = false,
  disabled = false,
  rows = 4,
}) => {
  const inputId = id || name || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;
  const hasError = !!error;
  const hasValue = value.length > 0;
  const isSuccess = hasValue && !hasError;

  // Base classes for all inputs
  const baseClasses = `
    w-full
    px-4 py-3
    bg-white
    rounded-lg
    font-sans
    text-base
    text-slate-900
    placeholder:text-slate-400
    transition-all
    duration-300
    outline-none
    disabled:bg-slate-100
    disabled:cursor-not-allowed
    disabled:text-slate-500
  `;

  // Border and focus state classes
  const stateClasses = hasError
    ? 'border-2 border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
    : isSuccess
    ? 'border-2 border-[var(--color-courage-green)] focus:border-[var(--color-courage-green)] focus:ring-2 focus:ring-[var(--color-courage-green)]/20'
    : 'border-2 border-slate-200 focus:border-[var(--color-courage-green)] focus:ring-2 focus:ring-[var(--color-courage-green)]/20';

  const inputClasses = `${baseClasses} ${stateClasses}`.trim().replace(/\s+/g, ' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-2 text-sm font-medium text-slate-700 font-sans"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          className={inputClasses}
          aria-label={label || placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
        />
      ) : (
        <input
          type={type}
          id={inputId}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={inputClasses}
          aria-label={label || placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
        />
      )}

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-2 text-sm text-red-500 font-sans"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;

