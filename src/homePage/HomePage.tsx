import { Footprints } from 'lucide-react';
import ButtonGrid from './ButtonGrid';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen w-screen relative">
        <section className="relative flex justify-between">
          <Button className="w-20 h-16 m-4 bg-magav-dark-green text-white hover:bg-slate-600">
            <a href={import.meta.env.VITE_MAGAVAPP}>
              התחברות <br /> למערכת
            </a>
          </Button>
          <img src="/magav.png" alt="Magav Emblem" className="w-24 h-24 " />
        </section>

        <section className="relative flex flex-col gap-8 mb-60 justify-center font-bold">
          <Footprints
            className="absolute top-0 left-24 rotate-45 opacity-25"
            color="black"
            size={124}
          />
          <h1 className="text-3xl text-center z-10 text-white">
            פורטל הדיווחים
            <br /> של ענף המילואים <br /> משמר הגבול
          </h1>
          <ButtonGrid />
        </section>

        <section className="flex justify-center text-white mb-8">
          <aside className="font-serif">
            <span>
              ״וּרְדַפְתֶּ֖ם אֶת־אֹיְבֵיכֶ֑ם וְנָפְל֥וּ לִפְנֵיכֶ֖ם לֶחָֽרֶב.״
              {'    '}
              ויקרא כ״ו
            </span>
          </aside>
          {/* <aside className="text-center font-semibold">
              מילואים
              <br /> משמר הגבול
            </aside> */}
        </section>
      </div>
    </>
  );
};

export default HomePage;
