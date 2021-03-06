import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'SEARCH',
    group: true,
  },
  {
    title: 'Keyword',
    icon: 'search-outline',
    link: '/home/search/keyword',
    home: true,
  },
  {
    title: 'Domain',
    icon: 'globe-outline',
    link: '/home/search/domain',
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
];
