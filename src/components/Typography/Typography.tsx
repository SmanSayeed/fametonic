import React from 'react';

type Variant = 'h1' | 'h2' | 'body' | 'small' | 'nav';
type Color = 'primary' | 'accent' | 'white' | 'gray' | 'lightgray' | 'default';
type Align = 'left' | 'center' | 'right';
type Weight = 'normal' | 'bold' | 'extrabold';

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  align?: Align;
  weight?: Weight;
  className?: string;
  children: React.ReactNode;
}

const variantMap = {
  h1: 'text-[35px] font-urbanist font-bold',
  h2: 'text-[35px] font-urbanist font-bold shadow-pink',
  body: 'text-[16px] font-figtree font-semibold',
  small: 'text-[12px] font-figtree',
  nav: 'text-[18px] font-figtree font-semibold',
};

const colorMap = {
  primary: 'text-primary',
  accent: 'text-accent',
  white: 'text-white',
  gray: 'text-gray',
  lightgray: 'text-lightgray',
  default: '',
};

const weightMap = {
  normal: 'font-normal',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'default',
  align = 'left',
  weight = 'normal',
  className = '',
  children,
}) => {
  const base = `${variantMap[variant]} ${colorMap[color]} text-${align} ${weightMap[weight]} ${className}`;
  switch (variant) {
    case 'h1':
      return <h1 className={base}>{children}</h1>;
    case 'h2':
      return <h2 className={base}>{children}</h2>;
    case 'small':
      return <small className={base}>{children}</small>;
    case 'nav':
      return <span className={base}>{children}</span>;
    default:
      return <p className={base}>{children}</p>;
  }
};

export default Typography; 