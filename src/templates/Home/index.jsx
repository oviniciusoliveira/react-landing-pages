import { GlobalStyle } from '../../styles/global';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="pink">
        <h1>React Landing Pages</h1>
      </Styled.Wrapper>
      <GlobalStyle />
    </div>
  );
}

export default Home;
