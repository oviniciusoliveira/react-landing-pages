import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aut eaque perferendis error hic. Hic sequi cumque aliquam dolorem laborum. Illo ducimus magnam eius dicta atque, quam ipsa corporis consequuntur.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <TextComponent {...args} />;
