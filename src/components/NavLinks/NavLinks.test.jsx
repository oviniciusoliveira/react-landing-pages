import { screen } from '@testing-library/dom';
import { renderTheme } from '../../test/render-theme';
import { NavLinks } from '.';
import linksMock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  test('should render a nav with links', () => {
    renderTheme(<NavLinks links={linksMock} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(links.length);
  });

  test('should not render any link', () => {
    renderTheme(<NavLinks />);
    const links = screen.queryAllByRole(/link/i);
    expect(links).toHaveLength(0);
  });

  test('should apply media query when screen size is less than 768px', () => {
    renderTheme(<NavLinks links={linksMock} />);
    const navLinks = screen.getByText(/link 10/i).parentElement;
    expect(navLinks).toHaveStyleRule('flex-flow', 'column nowrap', {
      media: theme.media.ltMedium,
    });
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={linksMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
