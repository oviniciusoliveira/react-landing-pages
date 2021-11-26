import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ title, withBackground, description, grid, sectionId }) => {
  return (
    <SectionBackground withBackground={withBackground} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase lightTitle={withBackground} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element) => {
            return (
              <Styled.GridElement key={element.id}>
                <Styled.Image src={element.imageSrc} />
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  sectionId: P.string.isRequired,
  withBackground: P.bool,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      id: P.string.isRequired,
      alternativeText: P.string.isRequired,
      imageSrc: P.string.isRequired,
    }),
  ).isRequired,
};
