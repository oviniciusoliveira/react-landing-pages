import { renderTheme } from './../../setupTests';
import { SectionContainer } from '.';
import { screen } from '@testing-library/react';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionContainer isBackgroundDark={true}>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
