import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
};

const titleUppercase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, lightColor, size, uppercase }) => css`
    color: ${lightColor ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)}
    ${titleUppercase(uppercase)}
  `}
`;
