import { Footprints } from 'lucide-react';
import ButtonGrid from './ButtonGrid';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <>
      <div className=" h-screen w-screen relative">
        <div className="flex flex-col justify-between w-full h-5/6 bg-transparent">
          <section className="relative flex justify-center">
            <Button className="absolute right-6 top-4 w-20 h-16 p-4 bg-magav-dark-green text-white hover:bg-slate-600">
              <a href={import.meta.env.VITE_MAGAVAPP}>
                התחברות <br /> למערכת
              </a>
            </Button>
            <img src="/magav.png" alt="Magav Emblem" className="w-24 h-24 " />
          </section>
          <section className="relative flex flex-col justify-center font-bold mb-20">
            <Footprints
              className="absolute top-0 left-24 rotate-45 opacity-25"
              color="black"
              size={124}
            />
            <h1 className="text-3xl text-center mb-12 z-10 text-white">
              פורטל הדיווחים
              <br /> של ענף המילואים <br /> משמר הגבול
            </h1>
            <ButtonGrid />
          </section>
          <section className="flex justify-between text-white px-6">
            <aside className="font-serif">
              <span>
                ״וּרְדַפְתֶּ֖ם אֶת־אֹיְבֵיכֶ֑ם וְנָפְל֥וּ לִפְנֵיכֶ֖ם לֶחָֽרֶב.״
              </span>
              <hr />
              <div className="text-end">ויקרא כ״ו</div>
            </aside>
            {/* <aside className="text-center font-semibold">
              מילואים
              <br /> משמר הגבול
            </aside> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
