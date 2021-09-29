import styled, { css } from 'styled-components';

export const NavLinks = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;

    @media ${theme.media.ltMedium} {
      flex-flow: column nowrap;
      align-items: center;
    }
  `}
`;
