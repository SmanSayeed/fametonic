export interface TopHeaderData {
  topHeaderSale: string;
  topHeaderExtra: string;
}

export const topHeaderData: TopHeaderData = {
  topHeaderSale: "🚀 FRESH BEGINNINGS SALE:",
  topHeaderExtra: "Extra 25% OFF, Limited Spots - start your journey today!"
};

export interface MenuItem {
  name: string;
  link: string;
}

export const menus: MenuItem[] = [
  {
    name: 'About us',
    link: '/about'
  },
  {
    name: 'Contact',
    link: '/contact'
  }
];