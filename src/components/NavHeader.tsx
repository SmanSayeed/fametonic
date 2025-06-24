import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const NavHeader: React.FC = () => (
  <header className="w-full" style={{height: '74px', marginTop: '36px', marginBottom: '36px'}}>
    <div className="flex items-center justify-between h-full px-[211px] max-md:px-6 max-md:py-4">
      {/* Desktop: logo left, nav right; Mobile: logo center, burger menu right */}
      <div className="flex-1 flex items-center md:justify-start justify-center">
        <Logo size="desktop" />
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <NavMenu />
      </div>
      <div className="flex md:hidden items-center">
        <div className="w-5 h-3 flex flex-col justify-between gap-1 cursor-pointer">
          <span className="block w-full h-1 bg-white rounded"></span>
          <span className="block w-full h-1 bg-white rounded"></span>
          <span className="block w-full h-1 bg-white rounded"></span>
        </div>
      </div>
    </div>
  </header>
);

export default NavHeader; 