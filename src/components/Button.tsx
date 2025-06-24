import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button
      className={`w-[313px] h-[40px] px-[40px] py-[8px] rounded-[10px] bg-[#FC004E] text-white font-figtree font-bold text-[16px] shadow-[2px_2px_10px_0px_#00E7F9] flex items-center justify-center gap-2 ${className}`}
      type="button"
      tabIndex={-1}
      aria-disabled="true"
    >
      {children}
    </button>
  );
};

export default Button; 