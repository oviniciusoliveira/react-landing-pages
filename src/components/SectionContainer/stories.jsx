import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt porro eligendi placeat illo mollitia
          fugiat, voluptatibus sed eos, molestiae tempora deserunt? Velit praesentium, blanditiis cupiditate
          voluptatibus illum similique necessitatibus vero.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return <SectionContainer {...args} />;
};
