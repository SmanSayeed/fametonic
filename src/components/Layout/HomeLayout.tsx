import React from 'react';
import TopHeader from '../TopHeader/TopHeader';
import NavHeader from '../NavHeader/NavHeader';

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-bg">
     <TopHeader />
    <div className="container">
      <NavHeader />
      {children}
    </div>
  </div>
);

export default HomeLayout; 