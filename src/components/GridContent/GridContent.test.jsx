import { renderTheme } from '../../test/render-theme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContent />', () => {
  test('should match snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test('should render with default withBackground value', () => {
    const { container } = renderTheme(<GridContent {...mock} withBackground={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
