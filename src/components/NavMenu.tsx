import React from 'react';
import { menus } from '@/constants/data';

const NavMenu: React.FC<{ isMobile?: boolean; onClickMenu?: () => void }> = ({ isMobile = false, onClickMenu }) => (
  <nav className={`nav-menu${isMobile ? ' nav-menu-mobile' : ' nav-menu-desktop'}`}> 
    {menus.map((menu) => (
      <a
        key={menu.name}
        href={menu.link}
        className="nav-menu-item"
        onClick={onClickMenu}
      >
        {menu.name}
      </a>
    ))}
  </nav>
);

export default NavMenu; 