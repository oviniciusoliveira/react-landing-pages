import { Menu } from '.';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      imageSrc: '',
    },
  },
};

export const Default = (args) => {
  return <Menu {...args} />;
};
