import { renderTheme } from '../../test/render-theme';
import { LogoLink } from '.';
import { screen } from '@testing-library/dom';

describe('<LogoLink />', () => {
  test('should render text logo with link', () => {
    renderTheme(<LogoLink text="Logo" link="#target" />);

    const heading = screen.getByRole('heading', { name: 'Log' });
    expect(heading).toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'Logo' });
    expect(link).toHaveAttribute('href', '#target');
  });

  test('should render image logo with link', () => {
    renderTheme(<LogoLink text="Logo" link="#target" imageSrc="image.jpg" />);

    const link = screen.getByRole('link', { name: 'Logo' });
    expect(link).toHaveAttribute('href', '#target');

    const image = screen.getByAltText('Logo');
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink text="Logo" link="#target" imageSrc="image.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
