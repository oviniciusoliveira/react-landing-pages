import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 6;
    bottom: 2rem;
    right: 2rem;

    border-radius: ${theme.borderRadius.small};

    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    width: 4rem;
    height: 4rem;
  `}
`;
