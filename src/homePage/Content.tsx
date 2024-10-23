import ButtonGrid from './ButtonGrid';
import { Footprints } from 'lucide-react';

const Content = () => {
  return (
    <section className="portal-box">
      <Footprints
        className="absolute top-0 left-24 rotate-45 opacity-25"
        color="black"
        size={124}
      />
      <aside className="portal-content">
        <div className="portal-title-box">
          <h1 className="portal-title">
            פורטל הדיווחים
            <br /> של ענף המילואים <br /> משמר הגבול
          </h1>
        </div>
        <ButtonGrid />
      </aside>
    </section>
  );
};

export default Content;
