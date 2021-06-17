import * as Styled from './styles';
import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ({ children, isBackgroundDark = false }) => {
  return (
    <Styled.Container isBackgroundDark={isBackgroundDark}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  isBackgroundDark: P.bool,
};
