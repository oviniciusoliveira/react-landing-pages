import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground Children</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse corporis labore repellendus
          voluptatum, molestias fugiat, velit quisquam quibusdam aliquid dolorum amet aliquam animi doloremque deleniti
          tempore incidunt, reiciendis aut!
        </p>
      </div>
    ),
    withBackground: true,
  },
  argTypes: {
    children: { table: { disable: true } },
    withBackground: { type: 'boolean' },
  },
};

export const Default = (args) => {
  return <SectionBackground {...args} />;
};
