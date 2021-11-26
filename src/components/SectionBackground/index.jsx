import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({ children, withBackground = false, sectionId = '' }) => {
  return (
    <Styled.Container withBackground={withBackground} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  withBackground: P.bool,
  sectionId: P.string,
};
