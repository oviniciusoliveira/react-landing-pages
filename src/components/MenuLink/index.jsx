import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false }) => {
  return (
    <Styled.MenuLink href={link} newTab={newTab}>
      {children}
    </Styled.MenuLink>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
