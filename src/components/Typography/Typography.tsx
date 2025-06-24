import React from 'react';
import './Typography.scss';

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

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'default',
  align = 'left',
  className = '',
  children,
}) => {
  const base = `typography-${variant} typography-${color} text-${align} ${className}`;
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