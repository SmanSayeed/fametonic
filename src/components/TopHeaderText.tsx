import React from 'react';

interface TopHeaderTextProps {
  topHeaderSale: string;
  topHeaderExtra: string;
}

const TopHeaderText: React.FC<TopHeaderTextProps> = ({ topHeaderSale, topHeaderExtra }) => (
  <p className="items-center gap-2 text-center">
    <span className="top-header-sale">
      {topHeaderSale}
    </span>&nbsp;
    <span className="top-header-extra">
      {topHeaderExtra}
    </span>
  </p>
);

export default TopHeaderText; 