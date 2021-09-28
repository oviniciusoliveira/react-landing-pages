import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children, lightTitle = false, as = 'h1', size = 'big', uppercase = false }) => {
  return (
    <Styled.Title lightTitle={lightTitle} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  lightTitle: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
