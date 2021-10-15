import mock from './mock';
import { renderTheme } from '../../test/render-theme';
import { GridText } from '.';

describe('<GridText />', () => {
  test('should render', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
