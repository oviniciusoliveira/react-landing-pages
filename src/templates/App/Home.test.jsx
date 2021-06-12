import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Home from './Home';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../setupTests';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});

// test('renders learn react link', () => {
//   const { debug } = renderTheme(<Home />);
//   const headingContainer = screen.getByRole('heading', { name: 'Hello World' }).parentElement;
//   expect(headingContainer).toHaveStyle({
//     background: theme.backgroundColors.secondaryBg,
//   });
//   expect(headingContainer).toMatchSnapshot();

//   // jest-styled-components
//   expect(headingContainer).toHaveStyleRule('background', 'gray');
// });
