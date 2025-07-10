import React, { useState } from 'react';
import { LoginPopup } from './LoginPopup';
import { RegisterPopup } from './RegisterPopup';

type NavItem = {
  id: string;
  label: string;
  type: 'link' | 'button';
  variant?: 'primary' | 'secondary';
  action?: () => void;
  className?: string;
};

export const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    if (showRegister) setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
    if (showLogin) setShowLogin(false);
  };

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  // Navigation items for desktop
  const navItems: NavItem[] = [
    { id: 'cv', label: 'CV & Cover Letter', type: 'link' },
    { id: 'jobs', label: 'Job Search', type: 'link' },
    { id: 'advice', label: 'Career Advice', type: 'link' },
    { id: 'login', label: 'Login', type: 'button', variant: 'secondary', action: toggleLogin },
    { id: 'register', label: 'Register', type: 'button', variant: 'primary', action: toggleRegister },
  ];

  // Navigation items for mobile (only buttons)
  const mobileNavItems: NavItem[] = [
    { id: 'login-mobile', label: 'Login', type: 'button', variant: 'secondary', action: toggleLogin, className: 'text-sm' },
    { id: 'register-mobile', label: 'Register', type: 'button', variant: 'primary', action: toggleRegister, className: 'text-sm' },
  ];

  // Function to get button classes based on variant
  const getButtonClasses = (variant: 'primary' | 'secondary' = 'secondary', className = '') => {
    const baseClasses = 'px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'text-blue-600 hover:text-blue-700 bg-transparent border border-blue-600 hover:bg-blue-50',
    };
    
    return `${baseClasses} ${variants[variant]} ${className}`.trim();
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">LiveCareer</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Map through navigation items */}
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <button
                    key={item.id}
                    type="button"
                    className="text-gray-700 hover:text-blue-600 bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1"
                    aria-label={item.label}
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    key={item.id}
                    type="button"
                    onClick={item.action}
                    className={getButtonClasses(item.variant, 'px-4 py-2')}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              {mobileNavItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  className={getButtonClasses(item.variant, item.className)}
                >
                  {item.label}
                </button>
              ))}
              <button 
                type="button"
                className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    {showLogin && <LoginPopup onClose={toggleLogin} onSwitchToRegister={switchToRegister} />}
    {showRegister && <RegisterPopup onClose={toggleRegister} onSwitchToLogin={switchToLogin} />}
    </>
  );
};
