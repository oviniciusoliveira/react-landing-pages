import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita accusamus porro suscipit. Odio soluta cum exercitationem, voluptates dolor officiis nisi totam minima eveniet sint officia et repudiandae facere molestias voluptatibus!',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Default = (args) => {
  return <TextComponent {...args} />;
};
