import { Menu } from '.';
import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: { links: linksMock, logoData: { text: 'logoData', link: '#target', imageSrc: '' } },
};

export const Template = (args) => {
  return <Menu {...args} />;
};
