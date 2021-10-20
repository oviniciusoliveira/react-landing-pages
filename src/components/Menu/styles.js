import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as LogoTitle } from '../Heading/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
  height: 100%;
`;

export const Container = styled.div`
  ${({ theme, isVisible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background-color: ${theme.colors.lightBackground};
    transition: ${isVisible ? 'all 0.2s ease-in-out' : 'none'};

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${LogoTitle} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.ltMedium} {
      visibility: hidden;
      opacity: 0;
      ${isVisible && menuVisible()}

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
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    border-radius: 0.3rem;
    display: none;
    cursor: pointer;

    & > svg {
      width: 75%;
      height: 75%;
    }

    @media ${theme.media.ltMedium} {
      display: block;
    }
  `}
`;
