import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: { text: 'Logo', imageSrc: 'assets/images/logo.svg', link: 'http://localhost' },
  argTypes: {
    text: { type: 'string' },
    imageSrc: { type: 'string' },
    link: { type: 'string' },
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
