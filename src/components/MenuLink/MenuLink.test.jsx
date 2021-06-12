import { renderTheme } from './../../setupTests';
import { MenuLink } from '.';
import { screen } from '@testing-library/react';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_self');
  });

  it('should open link in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank');
  });

  it('should match inline snapshot', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #DC143C;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
