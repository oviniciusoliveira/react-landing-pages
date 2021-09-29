import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = ({ text, imageSrc, link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.LogoLink href={link}>{imageSrc ? <img src={imageSrc} alt={text} /> : text}</Styled.LogoLink>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  imageSrc: P.string,
  link: P.string.isRequired,
};
