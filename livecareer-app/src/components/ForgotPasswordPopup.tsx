import React, { useState } from 'react';
import { AuthForm } from './shared/AuthForm';
import { 
  Overlay, 
  Modal, 
  ModalHeader, 
  Title, 
  CloseButton,
  SuccessMessage,
  PrimaryButton
} from '../styles/styles';
import { AuthFormData } from '../types/auth';

interface ForgotPasswordPopupProps {
  onClose: () => void;
  onBackToLogin: () => void;
}

export const ForgotPasswordPopup: React.FC<ForgotPasswordPopupProps> = ({ onClose, onBackToLogin }) => {
  const [formData, setFormData] = useState<{ email: string }>({ email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', formData.email);
    setIsSubmitted(true);
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <Title>{isSubmitted ? 'Check Your Email' : 'Forgot Password'}</Title>
          <CloseButton onClick={onClose} aria-label="Close forgot password popup">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <title>Close</title>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </CloseButton>
        </ModalHeader>
        
        {isSubmitted ? (
          <SuccessMessage>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3>Password Reset Email Sent</h3>
            <p>
              We've sent password reset instructions to <strong>{formData.email}</strong>.
              Please check your email and follow the instructions to reset your password.
            </p>
            <PrimaryButton
              type="button"
              onClick={onBackToLogin}
              style={{ marginTop: '1rem' }}
            >
              Back to Login
            </PrimaryButton>
          </SuccessMessage>
        ) : (
          <AuthForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={handleChange}
            isLogin={true}
            hidePasswordField={true}
            submitText="Send Reset Link"
            onSwitchAuth={onBackToLogin}
            switchText="Back to Login"
            switchPrompt="Remember your password?"
          >
            <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </AuthForm>
        )}
      </Modal>
    </Overlay>
  );
};
