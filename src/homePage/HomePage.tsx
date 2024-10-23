import { Footprints } from 'lucide-react';
import ButtonGrid from './ButtonGrid';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <>
      {/* <div className="app-box"> */}
        <div className="app-content">
<Navbar/>
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
            <aside className="footer-box">
              <span className="footer">
                ״וּרְדַפְתֶּ֖ם אֶת־אֹיְבֵיכֶ֑ם וְנָפְל֥וּ לִפְנֵיכֶ֖ם לֶחָֽרֶב.״
                {'    '}
                <span className="text-xs">(ויקרא כ״ו)</span>
              </span>
            </aside>
          </section>
          {/* <section className="text-center text-white mb-8"> */}
            {/* <aside className="text-center font-semibold">
                מילואים
                <br /> משמר הגבול
              </aside> */}
          {/* </section> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default HomePage;
