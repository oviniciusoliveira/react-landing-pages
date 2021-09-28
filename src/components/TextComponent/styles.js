import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
