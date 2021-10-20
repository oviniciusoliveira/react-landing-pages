import P from 'prop-types';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const Footer = ({ htmlText }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent as="div">{htmlText}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  htmlText: P.string.isRequired,
};
