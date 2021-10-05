import P from 'prop-types';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';

export const GridContent = ({ title, html, withBackground = false }) => {
  return (
    <SectionBackground withBackground={withBackground}>
      <Styled.Container>
        <Heading uppercase lightTitle={withBackground}>
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
  withBackground: P.bool,
};
