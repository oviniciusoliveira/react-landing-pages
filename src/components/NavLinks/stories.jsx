import { NavLinks } from '.';
import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links,
  },
  argTypes: {
    links: { table: { disable: true } },
  },
};

export const Default = (args) => {
  return <NavLinks {...args} />;
};
