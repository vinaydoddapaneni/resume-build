export interface AuthFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
  name?: string;
  confirmPassword?: string;
  agreeToTerms?: boolean;
}

export interface AuthPopupProps {
  onClose: () => void;
  onSwitchToRegister?: () => void;
  onSwitchToLogin?: () => void;
  onBackToLogin?: () => void;
}
