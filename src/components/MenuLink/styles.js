import styled, { css } from 'styled-components';

export const MenuLink = styled.a.attrs((props) => ({
  target: props.newTab ? '_blank' : '_self',
}))`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      width: 0;
      left: 50%;
      transition: all 0.2s ease-in-out;
    }

    &:hover::after {
      width: 50%;
      left: 25%;
    }
  `}
`;
