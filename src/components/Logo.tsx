import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'desktop' | 'mobile';
  logo: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'desktop', logo }) => {
  return (
    <div className={`logo ${size === 'mobile' ? 'logo-mobile' : 'logo-desktop'}`}> 
      <Image
        src={logo}
        alt="Fametonic Logo"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
};

export default Logo; 