import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      align-content: center;
    }
  `}
`;
