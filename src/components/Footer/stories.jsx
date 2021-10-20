import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml:
      '<p><a href="https://viniciusdeoliveira.net" target="_blank" >Feito com ❤ por Vinícius de Oliveira</a></p>',
  },
  argTypes: {
    footerHtml: { type: 'string' },
  },
};

export const Default = (args) => {
  return <Footer {...args} />;
};
