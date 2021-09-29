import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as LogoTitle } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: ${theme.colors.mediumGray};
    background-color: ${theme.colors.lightBackground};

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${LogoTitle} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.ltMedium} {
      & ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: scroll;
      }

      & ${LogoTitle} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.ltMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css``}
`;