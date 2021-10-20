import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 5.4rem;

    @media ${theme.media.ltMedium} {
      margin-top: 0;
    }
  `}
`;
