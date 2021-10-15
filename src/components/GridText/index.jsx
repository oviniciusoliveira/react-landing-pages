import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({ title, description, grid, withBackground }) => {
  return (
    <SectionBackground withBackground={withBackground}>
      <Styled.Container>
        <Heading uppercase lightTitle={withBackground} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element) => {
            return (
              <Styled.GridElement key={element.id}>
                <Heading size="medium" lightTitle={withBackground} as="h3">
                  {element.title}
                </Heading>
                <TextComponent>{element.description}</TextComponent>
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  withBackground: P.bool,
  grid: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
