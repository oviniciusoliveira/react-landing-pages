import P from 'prop-types';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';

export const GridContent = ({ title, html, withBackground = false, sectionId }) => {
  return (
    <SectionBackground withBackground={withBackground} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase lightTitle={withBackground} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  sectionId: P.string.isRequired,
  withBackground: P.bool,
};
