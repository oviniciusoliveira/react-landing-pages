import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ background, theme }) => css`
    background: ${background};
    color: ${theme.colors.secondary};
  `}
`;
