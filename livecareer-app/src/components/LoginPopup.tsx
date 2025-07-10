import React, { useState } from 'react';
import { ForgotPasswordPopup } from './ForgotPasswordPopup';
import { AuthForm } from './shared/AuthForm';
import { Overlay, Modal, ModalHeader, Title, CloseButton } from '../styles/styles';
import { AuthFormData } from '../types/auth';

export const LoginPopup: React.FC<{ onClose: () => void; onSwitchToRegister: () => void }> = ({ 
  onClose, 
  onSwitchToRegister 
}) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState<AuthFormData>({
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
    console.log('Login form submitted:', formData);
    // Handle login logic here
  };

  if (showForgotPassword) {
    return <ForgotPasswordPopup onClose={onClose} onBackToLogin={() => setShowForgotPassword(false)} />;
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <Title>Sign In</Title>
          <CloseButton onClick={onClose} aria-label="Close login popup">
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
          isLogin={true}
          onForgotPassword={() => setShowForgotPassword(true)}
          onSwitchAuth={onSwitchToRegister}
        />
      </Modal>
    </Overlay>
  );
};
