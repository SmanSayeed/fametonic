import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'desktop' | 'mobile';
}

const Logo: React.FC<LogoProps> = ({ size = 'desktop' }) => {
  const width = size === 'mobile' ? 105.38 : 169.27;
  const height = size === 'mobile' ? 44.98 : 72.25;
  return (
    <Image
      src="/logo.png"
      alt="Fametonic Logo"
      width={width}
      height={height}
      priority
      className={size === 'mobile' ? 'mx-auto' : ''}
    />
  );
};

export default Logo; 