import { Footprints } from 'lucide-react';
import ButtonGrid from './ButtonGrid';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen w-screen relative">
        <section className="border flex justify-center">
          <img src="/magav.png" alt="Magav Emblem" className="w-24 h-24" />
        </section>

        <section className="relative flex flex-col justify-center font-bold">
          <Footprints
            className="absolute top-0 left-24 rotate-45 opacity-50"
            color="black"
            size={124}
          />
          <h1 className="text-3xl text-center mb-16 z-10 text-white">
            פורטל הדיווחים
            <br /> של ענף המילואים
          </h1>

          <ButtonGrid />
        </section>

        <section className="flex justify-between text-white p-8">
          <aside className="font-serif">
            <span>
              עַל חוֹמֹתַיִךְ יְרוּשָׁלַ͏ִם הִפְקַדְתִּי שֹׁמְרִים
              {/* כָּל הַיּוֹם
            וְכָל הַלַּיְלָה תָּמִיד לֹא יֶחֱשׁוּ הַמַּזְכִּרִים אֶת יְהוָה אַל
          דֳּמִי לָכֶם */}
            </span>
            <hr />
            <div className="text-end">ישעיהו ס"ב ו</div>
          </aside>

          <aside className="text-center font-semibold">
            מילואים
            <br /> משמר הגבול
          </aside>
        </section>
      </div>
    </>
  );
};

export default HomePage;
