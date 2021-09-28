import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: { type: 'string' },
    lightTitle: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Heading Children',
    size: 'big',
    as: 'h1',
    uppercase: false,
    lightTitle: false,
  },
};

export const DarkHeading = (args) => <Heading {...args} />;

export const LightHeading = (args) => <Heading {...args} lightTitle={true} />;

LightHeading.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
