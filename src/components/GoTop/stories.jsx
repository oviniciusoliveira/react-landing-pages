import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: null,
};

export const Default = () => {
  return (
    <div style={{ height: '300vh' }}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, enim unde.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores sapiente, quibusdam minima deleniti,
        sequi blanditiis veniam nemo soluta expedita fuga, nobis consectetur vitae nam vero fugit reprehenderit?
        Maiores, consectetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores sapiente, quibusdam minima deleniti,
        sequi blanditiis veniam nemo soluta expedita fuga, nobis consectetur vitae nam vero fugit reprehenderit?
        Maiores, consectetur?
      </p>
      <GoTop />
    </div>
  );
};
