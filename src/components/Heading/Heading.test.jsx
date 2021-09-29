import { screen } from '@testing-library/dom';
import { Heading } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../test/render-theme';

describe('<Heading />', () => {
  test('should render with default values', () => {
    renderTheme(<Heading>Heading Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Heading Text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  test('should render with white color', () => {
    renderTheme(<Heading lightTitle>Heading Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Heading Text' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  test('should render with small font size', () => {
    renderTheme(<Heading size="small">Heading Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Heading Text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  test('should render with medium font size', () => {
    renderTheme(<Heading size="medium">Heading Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Heading Text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });

  test('should render with big font size', () => {
    renderTheme(<Heading size="big">Heading Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Heading Text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });

  test('should render with huge font size', () => {
    renderTheme(<Heading size="huge">Heading Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Heading Text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  test('should render correct font-size when size is huge and screen is less than 768px', () => {
    renderTheme(<Heading size="huge">Heading Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Heading Text' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.ltMedium,
    });
  });

  test('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Heading Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Heading Text' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  test('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Heading Text</Heading>);

    screen.getByRole('heading', { name: 'Heading Text' });

    const h6 = container.querySelector('h6');

    expect(h6.tagName).toBe('H6');
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<Heading>Heading Text</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
