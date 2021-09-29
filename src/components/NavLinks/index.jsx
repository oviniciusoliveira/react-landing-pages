import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.NavLinks>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.NavLinks>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string,
      newTab: P.bool,
    }),
  ),
};
