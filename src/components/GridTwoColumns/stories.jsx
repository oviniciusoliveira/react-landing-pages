import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates, cum, tempora earum aut aspernatur molestiae impedit accusamus rerum repellendus dolorem, molestias odio nesciunt ex dicta esse in nihil adipisci.',
    imageSrc: 'assets/images/javascript.svg',
  },
};

export const Default = (args) => {
  return <GridTwoColumns {...args} />;
};
