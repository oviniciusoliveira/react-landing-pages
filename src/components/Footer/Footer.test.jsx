import { renderTheme } from '../../test/render-theme';
import { Footer } from '.';
import { screen } from '@testing-library/dom';

describe('<Footer />', () => {
  test('should render with html text', () => {
    renderTheme(<Footer htmlText="<h1>Footer Text <h1/>" />);
    expect(screen.getByRole('heading', { name: 'Footer Text' })).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<Footer htmlText="<h1>Footer Text <h1/>" />);
    expect(container).toMatchSnapshot();
  });
});
