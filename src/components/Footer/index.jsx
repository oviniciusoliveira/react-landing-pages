import P from 'prop-types';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent as="div">{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
