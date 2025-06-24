import React from 'react';
import TopHeaderText from './TopHeaderText';
import { topHeaderData } from '@/constants/data';

const TopHeader: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] pt-3 pb-3 px-52 flex items-center justify-center gap-2 max-md:px-5">
      <TopHeaderText topHeaderSale={topHeaderData.topHeaderSale} topHeaderExtra={topHeaderData.topHeaderExtra} />
    </header>
  );
};

export default TopHeader; 