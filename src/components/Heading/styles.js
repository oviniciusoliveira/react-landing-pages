import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, lightColor }) => css`
    color: ${lightColor ? theme.colors.white : theme.colors.primaryColor};
  `}
`;
