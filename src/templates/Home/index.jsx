import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { mapData } from '../../api/map-data';

import { Base } from '../Base';
import { Page404 } from '../Page404';
import { Loading } from '../Loading';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridImage } from '../../components/GridImage';
import { GridText } from '../../components/GridText';

function Home() {
  const [pageData, setPageData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : 'landing-page';

    const fetchPage = async () => {
      try {
        const data = await fetch(`http://localhost:1337/pages?slug=${slug}`);
        const json = await data.json();
        const mappedPageData = mapData(json);
        setPageData(mappedPageData[0]);
      } catch (error) {
        setPageData(undefined);
      }
    };
    fetchPage();
  }, [location.pathname]);

  if (!pageData) {
    return <Page404 />;
  }

  if (pageData && pageData.length === 0) {
    return <Loading />;
  }

  return (
    <Base
      links={pageData.menu.links}
      logoData={{ text: pageData.menu.text, imageSrc: pageData.menu.imageSrc, link: pageData.menu.link }}
      footerHtml={pageData.footerHtml}
    >
      {pageData.sections.map((section) => {
        const { component } = section;
        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={section.sectionId} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={section.sectionId} {...section} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText key={section.sectionId} {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage key={section.sectionId} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
