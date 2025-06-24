"use client";
import React, { useState } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import Navbar from './Navbar';

const logo = "/logo.png";

const NavHeader = () => {
    return (<>
      <nav className="nav-header">
          <div className="nav-header-logo">
            <Logo size="desktop" logo={logo} />
          </div>
            <Navbar/>
          </nav>
    </>)
}
export default NavHeader;

