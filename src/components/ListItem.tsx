import React from 'react';

interface ListItemProps {
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => (
  <li className="flex items-start gap-2 mb-2">
    <span className="font-nunito text-[22px] leading-none text-white">✨</span>
    <span className="font-figtree font-semibold text-[16px] leading-[22px] text-white">{text}</span>
  </li>
);

export default ListItem; 