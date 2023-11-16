import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('#menu-hero')

    },
    {
      text: 'About',
      href: getPermalink('#about')

    },
    {
      text: 'Figures',
      href: getPermalink('#figures'),
      links: [
        {
          text: 'Products',
          href: getPermalink('/products'),
        },
        {
          text: 'product',
          href: getPermalink('/product'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'News',
      href: getPermalink('#news')

    },
    {
      text: 'SNV Researchers',
      href: getPermalink('#researchers')

    },
    {
      text: 'Shop',
      href: 'https://www.pinkoi.com/store/sweniverse'

    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
