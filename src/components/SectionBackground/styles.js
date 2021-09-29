import styled, { css } from 'styled-components';

const lightBackground = (theme) => css`
  background: ${theme.colors.lightBackground};
  color: ${theme.colors.primaryColor};
`;

const darkBackground = (theme) => css`
  background: ${theme.colors.darkBackground};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, withBackground }) => css`
    ${withBackground ? darkBackground(theme) : lightBackground(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
