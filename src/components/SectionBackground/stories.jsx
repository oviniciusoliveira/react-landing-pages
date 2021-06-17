import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
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
  return <SectionBackground {...args} />;
};
