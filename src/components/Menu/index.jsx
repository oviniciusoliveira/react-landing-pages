import { useState } from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';

export const Menu = ({ links = [], logoData }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        isVisible={isVisible}
        onClick={() => setVisible((prevState) => !prevState)}
        aria-label="Open or close menu"
      >
        {isVisible ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </Styled.Button>
      <Styled.Container isVisible={isVisible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  logoData: P.shape(LogoLink.propTypes).isRequired,
  ...NavLinks.propTypes,
};
