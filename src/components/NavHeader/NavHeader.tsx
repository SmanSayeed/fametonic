"use client";
import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import NavMenu from '../Navbar/NavMenu';
import Navbar from '../Navbar/Navbar';

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

