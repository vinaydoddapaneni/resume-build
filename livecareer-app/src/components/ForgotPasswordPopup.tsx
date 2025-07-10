import React, { useState } from 'react';
import { FormField } from './FormField';

interface ForgotPasswordPopupProps {
  onClose: () => void;
  onBackToLogin: () => void;
}

type FormData = {
  email: string;
};

export const ForgotPasswordPopup: React.FC<ForgotPasswordPopupProps> = ({ onClose, onBackToLogin }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the password reset logic here
    console.log('Password reset requested for:', formData.email);
    setIsSubmitted(true);
  };

  const formFields = [
    {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email address',
      required: true,
      autoComplete: 'email',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {isSubmitted ? 'Check Your Email' : 'Forgot Password'}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close forgot password popup"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Close</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {isSubmitted ? (
          <div className="text-center py-4">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Password Reset Email Sent</h3>
            <p className="text-gray-600 mb-6">
              We've sent password reset instructions to <span className="font-medium">{formData.email}</span>.
              Please check your email and follow the instructions to reset your password.
            </p>
            <button
              type="button"
              onClick={onBackToLogin}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Back to Login
            </button>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {formFields.map((field) => (
                <div key={field.id}>
                  <FormField
                    {...field}
                    value={formData[field.name as keyof FormData] as string}
                    onChange={handleChange}
                  />
                </div>
              ))}
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Reset Link
              </button>
              
              <div className="text-center text-sm mt-4">
                <button 
                  type="button"
                  onClick={onBackToLogin}
                  className="text-blue-600 hover:underline font-medium bg-transparent border-none cursor-pointer p-0"
                >
                  Back to Login
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
