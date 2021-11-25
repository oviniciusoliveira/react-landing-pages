import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      const data = await fetch('http://localhost:1337/pages?slug=landing-page');
      const json = await data.json();
      const mappedPageData = mapData(json);
      console.log(mappedPageData);
      setPageData(mappedPageData[0]);
    };
    fetchPage();
  }, []);

  if (!pageData) {
    return <h1>Page not found</h1>;
  }

  if (pageData && pageData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>React Landing Pages Title</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
