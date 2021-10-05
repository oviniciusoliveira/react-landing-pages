import { GridContent } from '.';

import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
  argTypes: {
    html: {
      table: { disable: true },
    },
  },
};

export const Default = (args) => {
  return <GridContent {...args} />;
};
