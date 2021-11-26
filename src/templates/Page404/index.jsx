import { GridContent } from '../../components/GridContent';

export const Page404 = () => {
  return (
    <GridContent
      title="Page Not Found"
      html='<p>A página que você busca não foi encontrada. <a href="/">Voltar à Home</a></p>'
    />
  );
};
