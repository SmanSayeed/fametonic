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

export const homeData = {
  title: 'Want to Turn Social Media Into a Profitable Career?',
  subtitle: 'Discover your way to success with Fametonic:',
  list: [
    'Start growing your influence right away—no waiting required!',
    'Create viral TikToks and Reels step by step with easy-to-follow lessons',
    'Use a Personal AI Worker to boost your content',
    'Learn from expert-led courses designed for aspiring influencers',
  ],
  buttonText: 'GET STARTED >',
  buttonSubtext: '1-minute quiz for personalized Insights',
  legal1: 'By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms',
  legal2: 'Fametonic 2025 ©All Rights Reserved.'
};