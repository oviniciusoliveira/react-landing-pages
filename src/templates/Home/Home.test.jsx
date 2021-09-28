import { renderTheme } from '../../test/render-theme';
import Home from './index';

describe('<Home />', () => {
  test('should render home', () => {
    renderTheme(<Home />);
  });
});
