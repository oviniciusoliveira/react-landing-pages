import { renderTheme } from '../../test/render-theme';
import { SectionBackground } from '.';
import { screen } from '@testing-library/dom';

describe('<SectionBackground />', () => {
  test('should render with light background', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>SectionBackground Children</h1>
      </SectionBackground>,
    );
    const heading = screen.getByRole('heading', { name: 'SectionBackground Children' });
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should render with dark background', () => {
    const { container } = renderTheme(
      <SectionBackground withBackground={true}>
        <h1>SectionBackground Children</h1>
      </SectionBackground>,
    );
    const heading = screen.getByRole('heading', { name: 'SectionBackground Children' });
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
