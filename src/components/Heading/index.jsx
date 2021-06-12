import * as Styled from './styles';
import pTypes from 'prop-types';

export const Heading = ({ children, colorDark = true, as = 'h1', size = 'huge', uppercase = false }) => {
  return (
    <Styled.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: pTypes.node.isRequired,
  colorDark: pTypes.bool,
  as: pTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: pTypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: pTypes.bool,
};
