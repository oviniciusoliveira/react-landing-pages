import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children, lightColor = false }) => {
  return <Styled.Title lightColor={lightColor}> {children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  lightColor: P.bool,
};
