import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link, index) => (
        <MenuLink key={index} {...link} />
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
