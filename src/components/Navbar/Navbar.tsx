"use client";
import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import NavMenu from './NavMenu';
import BurgerMenu from '../NavHeader/BurgerMenu';
const logo = "/logo.png";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>

      <div className="nav-header-menu-desktop">
        <NavMenu />
      </div>
      <div className="nav-header-burger">
        <BurgerMenu onClick={() => setDrawerOpen(true)} />
      </div>


      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="nav-drawer-overlay" onClick={() => setDrawerOpen(false)}>
          <div className="nav-drawer" onClick={e => e.stopPropagation()}>
            <button className="nav-drawer-close" onClick={() => setDrawerOpen(false)}>&times;</button>
            <NavMenu isMobile onClickMenu={() => setDrawerOpen(false)} />
          </div>
        </div>
      )}


    </>


  );
};

export default Navbar; 