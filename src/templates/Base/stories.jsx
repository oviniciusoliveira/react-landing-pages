import { Base } from '.';
import { GridText } from '../../components/GridText';
import mock from './mock';
import gridMock from '../../components/GridText/mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    children: (
      <>
        <GridText {...gridMock} />
        <GridText {...gridMock} withBackground />
        <GridText {...gridMock} />
      </>
    ),
    ...mock,
  },
};

export const Default = (args) => {
  return <Base {...args} />;
};
