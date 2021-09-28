import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: { type: 'string' },
    lightColor: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Children do Heading',
  },
};

export const DarkHeading = (args) => <Heading {...args} />;

export const LightHeading = (args) => <Heading {...args} lightColor={true} />;

LightHeading.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
