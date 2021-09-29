import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer Children</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse corporis labore repellendus
          voluptatum, molestias fugiat, velit quisquam quibusdam aliquid dolorum amet aliquam animi doloremque deleniti
          tempore incidunt, reiciendis aut!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};

export const Default = (args) => {
  return <SectionContainer {...args} />;
};
