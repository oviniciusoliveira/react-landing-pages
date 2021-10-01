import { GridTwoColumns } from '.';

import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
};

export const Default = (args) => {
  return <GridTwoColumns {...args} />;
};
