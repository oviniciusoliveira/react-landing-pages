import { renderTheme } from './../../setupTests';
import { LogoLink } from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Logo" />);

    const heading = screen.getByRole('heading', { name: 'Logo' });
    expect(heading).toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'Logo' });
    expect(link).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Logo" imageSrc="image.jpg" />);
    const image = screen.getByAltText('Logo');
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Logo" imageSrc="image.jpg" />);

    expect(container).toMatchSnapshot();
  });
});
