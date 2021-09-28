import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: { type: 'string' },
  },
  args: {
    children: 'Children do Heading',
  },
};

export const Default = (args) => <Heading {...args} />;
