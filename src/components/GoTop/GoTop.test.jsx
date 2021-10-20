import { renderTheme } from '../../test/render-theme';
import { GoTop } from '.';
import { screen } from '@testing-library/dom';

describe('<GoTop />', () => {
  test('should render', () => {
    renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
  });

  test('should render with href="#"', () => {
    renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute('href', '#');
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<GoTop />);
    expect(container).toMatchSnapshot();
  });
});
