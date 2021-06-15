import { renderTheme } from './../../setupTests';
import { NavLinks } from '.';
import { screen } from '@testing-library/react';

import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render a nav', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render all links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render any links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  it('should apply media query rules', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByRole('navigation')).toHaveStyleRule('flex-direction', 'column', {
      media: theme.media.lteMedium,
    });
  });

  it('should match snapshot', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('navigation')).toMatchSnapshot();
  });
});
