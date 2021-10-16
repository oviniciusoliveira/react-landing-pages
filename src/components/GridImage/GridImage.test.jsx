import { renderTheme } from '../../test/render-theme';
import { GridImage } from '.';
import mock from './mock';

describe('<GridImage />', () => {
  test('should render', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
