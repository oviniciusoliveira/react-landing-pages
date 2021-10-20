import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ children, footerHtml, logoData, links }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>{children}</Styled.Container>
      <Footer htmlText={footerHtml} />
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  footerHtml: Footer.propTypes.htmlText,
  ...Menu.propTypes,
};
