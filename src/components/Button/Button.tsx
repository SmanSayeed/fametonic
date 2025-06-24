import React from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button
      className={`button ${className}`}
      type="button"
      tabIndex={-1}
      aria-disabled="true"
    >
      {children}
    </button>
  );
};

export default Button; 