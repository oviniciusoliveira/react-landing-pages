import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Paragraph as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
  `}
`;

export const GridElement = styled.div`
  ${HeadingContainer} {
    position: relative;
    width: max-content;
    left: 5rem;
  }

  ${HeadingContainer}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -2.5rem;
    left: -5rem;
    transform: rotate(5deg);
  }
`;
