import React, { useState } from 'react';
import { FormField } from './FormField';
import { ForgotPasswordPopup } from './ForgotPasswordPopup';

interface LoginPopupProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
}

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const LoginPopup: React.FC<LoginPopupProps> = ({ onClose, onSwitchToRegister }) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false,
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
    // In a real app, you would handle the login logic here
    console.log('Login attempt with:', formData);
    onClose();
  };

  const formFields = [
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
      placeholder: 'Enter your password',
      required: true,
      autoComplete: 'current-password',
    },
    {
      id: 'rememberMe',
      name: 'rememberMe',
      type: 'checkbox',
      label: 'Remember me',
      value: formData.rememberMe,
    },
  ];

  if (showForgotPassword) {
    return (
      <ForgotPasswordPopup
        onClose={onClose}
        onBackToLogin={() => setShowForgotPassword(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close login popup"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Close</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            <div key={field.id}>
              {field.type === 'checkbox' ? (
                <FormField
                  {...field}
                  value={formData[field.name as keyof FormData] as boolean}
                  onChange={handleChange}
                />
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    {field.id === 'password' && (
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowForgotPassword(true);
                        }}
                        className="text-xs text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer ml-auto"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <FormField
                    {...field}
                    value={formData[field.name as keyof FormData] as string}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
          ))}
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
          
          <div className="text-center text-sm mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onSwitchToRegister();
              }}
              className="text-blue-600 hover:underline font-medium bg-transparent border-none cursor-pointer p-0"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
