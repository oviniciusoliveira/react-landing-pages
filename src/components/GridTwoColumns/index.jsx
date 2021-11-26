import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumns = ({ title, text, imageSrc, withBackground = false, sectionId }) => {
  return (
    <SectionBackground withBackground={withBackground} sectionId={sectionId}>
      <Styled.Container withBackground={withBackground}>
        <Styled.TextContainer>
          <Heading lightTitle={withBackground} uppercase as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={imageSrc} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  sectionId: P.string.isRequired,
  imageSrc: P.string.isRequired,
  withBackground: P.bool,
};
