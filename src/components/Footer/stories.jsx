import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    htmlText:
      '<p><a href="https://viniciusdeoliveira.net" target="_blank" >Feito com ❤ por Vinícius de Oliveira</a></p>',
  },
  argTypes: {
    htmlText: { type: 'string' },
  },
};

export const Default = (args) => {
  return <Footer {...args} />;
};
