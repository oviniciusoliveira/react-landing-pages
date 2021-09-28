import { screen } from '@testing-library/dom';
import { TextComponent } from '.';
import { renderTheme } from '../../test/render-theme';

describe('<TextComponent />', () => {
  test('should render with a text', () => {
    renderTheme(<TextComponent>TextComponent Text</TextComponent>);

    const paragraph = screen.getByText('TextComponent Text');

    expect(paragraph).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>TextComponent Text</TextComponent>);

    expect(container).toMatchSnapshot();
  });
});
