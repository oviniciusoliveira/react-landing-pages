import { renderTheme } from '../../test/render-theme';
import { Base } from '.';
import mock from './mock';

describe('<Base />', () => {
  test('should match snapshot', () => {
    const { container } = renderTheme(
      <Base {...mock}>
        <h1>Base Children</h1>
      </Base>,
    );
    expect(container).toMatchSnapshot();
  });
});
