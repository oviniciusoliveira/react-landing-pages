import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children, as }) => {
  return <Styled.Paragraph as={as} dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['div', 'p']),
};
