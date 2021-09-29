import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo',
    link: '#target',
    imageSrc: 'assets/images/logo.svg',
  },
  argTypes: {
    text: { type: 'string' },
    link: { type: 'string' },
    imageSrc: { type: 'string' },
  },
};

export const Image = (args) => {
  return <LogoLink {...args} />;
};

export const Text = (args) => {
  return <LogoLink {...args} />;
};

Text.args = {
  imageSrc: '',
};

Text.argTypes = {
  imageSrc: { table: { disable: true } },
};
