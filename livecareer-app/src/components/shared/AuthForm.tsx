import React from 'react';
import { AuthFormData } from '../../types/auth';
import {
  Form,
  FormGroup,
  EmailField,
  PasswordField,
  PrimaryButton,
  FormFooter,
  SecondaryButton,
  ForgotPasswordButton,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel
} from '../../styles/styles';

interface AuthFormProps {
  formData: Partial<AuthFormData>;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  isLogin?: boolean;
  hidePasswordField?: boolean;
  onForgotPassword?: () => void;
  onSwitchAuth?: () => void;
  submitText?: string;
  switchText?: string;
  switchPrompt?: string;
  checkboxLabel?: React.ReactNode;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  formData,
  onSubmit,
  onChange,
  isLogin = true,
  hidePasswordField = false,
  onForgotPassword,
  onSwitchAuth,
  submitText = 'Sign In',
  switchText = 'Sign Up',
  switchPrompt = "Don't have an account?",
  checkboxLabel
}) => (
  <Form onSubmit={onSubmit}>
    {!isLogin && (
      <FormGroup>
        <EmailField
          name="name"
          value={formData.name || ''}
          onChange={onChange}
          placeholder="Full Name"
          required
        />
      </FormGroup>
    )}
    
    <FormGroup>
      <EmailField
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        placeholder="Email Address"
        required
      />
    </FormGroup>
    
    <FormGroup>
      {!hidePasswordField && (
        <>
          <PasswordField
            name="password"
            value={formData.password || ''}
            onChange={onChange}
            placeholder="Password"
            required
          />
          {isLogin && onForgotPassword && (
            <ForgotPasswordButton type="button" onClick={onForgotPassword}>
              Forgot password?
            </ForgotPasswordButton>
          )}
        </>
      )}
    </FormGroup>
    
    {!isLogin && (
      <FormGroup>
        <PasswordField
          name="confirmPassword"
          value={formData.confirmPassword || ''}
          onChange={onChange}
          placeholder="Confirm Password"
          required
          minLength={8}
        />
      </FormGroup>
    )}
    
    <FormGroup>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          name={isLogin ? 'rememberMe' : 'agreeToTerms'}
          checked={isLogin ? !!formData.rememberMe : !!formData.agreeToTerms}
          onChange={onChange}
          id={isLogin ? 'rememberMe' : 'agreeToTerms'}
          required={!isLogin}
        />
        <CheckboxLabel htmlFor={isLogin ? 'rememberMe' : 'agreeToTerms'}>
          {isLogin ? 'Remember me' : (checkboxLabel || 'I agree to the Terms and Privacy Policy')}
        </CheckboxLabel>
      </CheckboxContainer>
    </FormGroup>
    
    <FormGroup>
      <PrimaryButton type="submit">
        {submitText}
      </PrimaryButton>
    </FormGroup>
    
    <FormFooter>
      {isLogin ? (
        <ForgotPasswordButton type="button" onClick={onForgotPassword}>
          Forgot Password?
        </ForgotPasswordButton>
      ) : (
        <div />
      )}
      
      {onSwitchAuth && (
        <div>
          {switchPrompt}{' '}
          <SecondaryButton type="button" onClick={onSwitchAuth}>
            {switchText}
          </SecondaryButton>
        </div>
      )}
    </FormFooter>
  </Form>
);
