import Image from 'next/image';
import React from 'react';

interface BurgerMenuProps {
  onClick: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => (
  <div className="burger-icon" onClick={onClick}>
    <Image src="/menu_icon.svg" alt="Menu" width={20} height={20} />
  </div>
);

export default BurgerMenu; 