import { renderTheme } from '../../test/render-theme';
import { MenuLink } from '.';
import { screen } from '@testing-library/dom';

describe('<MenuLink />', () => {
  test('should render a link', () => {
    renderTheme(<MenuLink link="https://localhost">MenuLinkText</MenuLink>);
    const link = screen.getByRole('link', { name: 'MenuLinkText' });

    expect(link).toHaveAttribute('target', '_self');
    expect(link).toHaveAttribute('target', '_self');
  });

  test('should open link in a new tab', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab={true}>
        MenuLinkText
      </MenuLink>,
    );
    const link = screen.getByRole('link', { name: 'MenuLinkText' });

    expect(link).toHaveAttribute('target', '_blank');
  });

  test('should match snapshot', () => {
    renderTheme(<MenuLink link="https://localhost">MenuLinkText</MenuLink>);
    const link = screen.getByRole('link', { name: 'MenuLinkText' });

    expect(link).toMatchSnapshot();
  });
});
