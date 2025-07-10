import React, { useState } from 'react';
import { FormField } from './FormField';

interface RegisterPopupProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
};

export const RegisterPopup: React.FC<RegisterPopupProps> = ({ onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the registration logic here
    console.log('Registration attempt with:', formData);
    onClose();
  };

  const formFields = [
    {
      id: 'firstName',
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      placeholder: 'First name',
      required: true,
      autoComplete: 'given-name',
      className: 'w-full',
    },
    {
      id: 'lastName',
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      placeholder: 'Last name',
      required: true,
      autoComplete: 'family-name',
      className: 'w-full',
    },
    {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true,
      autoComplete: 'email',
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Create a password',
      required: true,
      autoComplete: 'new-password',
      minLength: 8,
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      placeholder: 'Confirm your password',
      required: true,
      autoComplete: 'new-password',
      minLength: 8,
    },
    {
      id: 'agreeToTerms',
      name: 'agreeToTerms',
      type: 'checkbox',
      label: 'I agree to the',
      required: true,
      checkboxLabel: 'Terms of Service and Privacy Policy',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close registration popup"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Close</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {formFields.slice(0, 2).map((field) => (
              <div key={field.id}>
                <FormField
                  {...field}
                  value={formData[field.name as keyof FormData] as string}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
          
          {formFields.slice(2, -1).map((field) => (
            <div key={field.id}>
              <FormField
                {...field}
                value={formData[field.name as keyof FormData] as string}
                onChange={handleChange}
              />
              {field.name === 'password' && (
                <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
              )}
            </div>
          ))}
          
          <div className="flex items-start">
            <FormField
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              label="I agree to the"
              value={formData.agreeToTerms}
              onChange={handleChange}
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              checkboxLabel={
                <span>
                  <button type="button" onClick={(e) => { e.preventDefault(); /* Open terms modal */ }} className="text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer">Terms of Service</button>
                  {' and '}
                  <button type="button" onClick={(e) => { e.preventDefault(); /* Open privacy policy modal */ }} className="text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer">Privacy Policy</button>
                </span>
              }
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Account
          </button>
          
          <div className="text-center text-sm mt-4">
            <span className="text-gray-600">Already have an account? </span>
            <button 
              type="button" 
              onClick={onSwitchToLogin}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
