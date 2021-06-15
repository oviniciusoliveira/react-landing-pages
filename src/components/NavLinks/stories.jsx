import { NavLinks } from '.';
import links from './mock';

export default {
  title: 'NavLinks',
  conmponent: NavLinks,
  args: { links: links },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => <NavLinks {...args} />;
