import styled, { css } from 'styled-components';

export const LogoLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    & > img {
      max-height: 3rem;
    }
  `}
`;
