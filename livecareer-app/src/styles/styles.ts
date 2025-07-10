import styled, { css } from 'styled-components';

// Common styles
const baseButtonStyles = css`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// Animation keyframes
const fadeIn = css`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const slideIn = css`
  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const primaryButtonStyles = css`
  ${baseButtonStyles}
  background-color: #2563eb;
  color: white;
  
  &:hover {
    background-color: #1d4ed8;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
  }
`;

const secondaryButtonStyles = css`
  ${baseButtonStyles}
  background-color: transparent;
  color: #2563eb;
  text-decoration: underline;
  padding: 0;
  
  &:hover {
    color: #1d4ed8;
  }
`;

const inputStyles = css`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

// Layout components
export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const Modal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 28rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #374151;
    background-color: #f3f4f6;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  display: block;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const TextField = styled(Input).attrs({ type: 'text' })``;
export const EmailField = styled(Input).attrs({ type: 'email' })``;
export const PasswordField = styled(Input).attrs({ type: 'password' })``;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  background-color: white;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: #4b5563;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  ${primaryButtonStyles}
  width: 100%;
  padding: 0.625rem 1.25rem;
  margin-top: 0.5rem;
`;

export const SecondaryButton = styled.button`
  ${secondaryButtonStyles}
  font-size: 0.875rem;
`;

export const FormFooter = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #4b5563;
`;

export const ForgotPasswordButton = styled(SecondaryButton)`
  font-size: 0.75rem;
  margin-left: auto;
  display: block;
  text-align: right;
  margin-bottom: 0.25rem;
`;

// Layout Components
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Section = styled.section`
  padding: 4rem 0;
`;

// Hero Components
export const HeroSection = styled.section`
  background: linear-gradient(to right, #3b82f6, #2563eb);
  color: white;
  padding: 5rem 0;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

// CV Builder Section
export const CVBuilderSection = styled(Section)`
  background-color: #f9fafb;
`;

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  color: #1f2937;
`;

export const FeatureIcon = styled.div`
  background-color: #dbeafe;
  color: #2563eb;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`;

// Form Components
export const FormContainer = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  max-width: 28rem;
  width: 100%;
  margin: 2rem auto;
  ${fadeIn}
`;

// Special components
export const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f0fdf4;
  border-radius: 0.5rem;
  border: 1px solid #bbf7d0;
  color: #166534;
  margin: 1rem 0;
  ${slideIn}
  
  svg {
    width: 3rem;
    height: 3rem;
    margin: 0 auto 1rem;
    display: block;
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #4b5563;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
`;
