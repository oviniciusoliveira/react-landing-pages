import { renderTheme } from '../../test/render-theme';
import { Menu } from '.';

import linksMock from '../NavLinks/mock';
import { fireEvent, screen } from '@testing-library/dom';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  test('should render Logo and Main Menu Nav', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const heading = screen.getByRole('heading', { name: 'Logo' });
    expect(heading).toBeInTheDocument();

    const navigation = screen.getByRole('navigation', { name: 'Main menu' });
    expect(navigation).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);

    expect(container).toMatchSnapshot();
  });

  test('should render mobile menu display and open/close menu button', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open or close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'block', {
      media: theme.media.ltMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.ltMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  test('should open menu when open menu button is pressed', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open or close menu');
    const menuContainer = button.nextSibling;

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.ltMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.ltMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  test('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    const navigation = screen.getByRole('navigation', { name: 'Main menu' });
    expect(navigation.firstChild).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
