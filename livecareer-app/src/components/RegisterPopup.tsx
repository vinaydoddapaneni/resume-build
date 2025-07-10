import React, { useState } from 'react';
import { AuthForm } from './shared/AuthForm';
import { 
  Overlay, 
  Modal, 
  ModalHeader, 
  Title, 
  CloseButton 
} from '../styles/styles';
import { AuthFormData } from '../types/auth';

interface RegisterPopupProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export const RegisterPopup: React.FC<RegisterPopupProps> = ({ onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
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
    console.log('Registration form submitted:', formData);
    // Handle registration logic here
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <Title>Create an Account</Title>
          <CloseButton onClick={onClose} aria-label="Close register popup">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <title>Close</title>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </CloseButton>
        </ModalHeader>
        
        <AuthForm
          formData={formData}
          onSubmit={handleSubmit}
          onChange={handleChange}
          isLogin={false}
          submitText="Create Account"
          onSwitchAuth={onSwitchToLogin}
          switchText="Sign in"
          switchPrompt="Already have an account?"
          checkboxLabel={
            <>
              I agree to the <a href="/terms" style={{ color: '#2563eb', textDecoration: 'underline' }}>Terms of Service</a> and{' '}
              <a href="/privacy" style={{ color: '#2563eb', textDecoration: 'underline' }}>Privacy Policy</a>
            </>
          }
        />
      </Modal>
    </Overlay>
  );
};
