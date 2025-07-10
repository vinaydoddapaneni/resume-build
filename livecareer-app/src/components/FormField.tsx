import React, { ReactNode } from 'react';

type FormFieldProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  autoComplete?: string;
  minLength?: number;
  checkboxLabel?: React.ReactNode;
};

export const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  placeholder = '',
  required = false,
  className = '',
  autoComplete,
  minLength,
  checkboxLabel,
}) => {
  const isCheckbox = type === 'checkbox';
  const baseClasses = 'w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  
  return (
    <div className={isCheckbox ? 'flex items-start' : ''}>
      {!isCheckbox ? (
        <div>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            id={id}
            name={name}
            type={type}
            value={value as string}
            onChange={onChange}
            className={`${baseClasses} ${className}`}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            minLength={minLength}
            aria-label={label}
          />
        </div>
      ) : (
        <div className="flex items-center h-5">
          <input
            id={id}
            name={name}
            type="checkbox"
            checked={value as boolean}
            onChange={onChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            required={required}
            aria-label={label}
          />
          <label htmlFor={id} className="ml-3 text-sm">
            <span className="text-gray-700">{label} </span>
            {checkboxLabel && (
              <span className="text-gray-700">
                {checkboxLabel}
              </span>
            )}
          </label>
        </div>
      )}
    </div>
  );
};
