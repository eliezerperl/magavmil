import { Button } from '@/components/ui/button';
import { Footprints } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen w-screen relative">
        <section className="border flex justify-center">
          <img src="/magav.png" alt="Magav Emblem" className="w-24 h-24" />

          {/* <img src="/police.png" alt="Police Emblem" className="w-32 h-24" /> */}
        </section>

        <section className="relative flex flex-col justify-center font-bold">
          <Footprints
            className="absolute top-0 left-24 rotate-45 opacity-50"
            color="black"
            size={124}
          />
          <h1 className="text-3xl text-center mb-16 z-10 text-white">
            פורטל מילואים
            <br /> של ענף המילואים
          </h1>
          <div className="grid grid-cols-3 justify-items-center gap-4 text-black">
            <Button asChild className="button-small">
              <a href={import.meta.env.VITE_INJURY}>דיווח על פציעה</a>
            </Button>
            <Button asChild className="button-small">
              <a href={import.meta.env.VITE_SICK}>דיווח על מחלה</a>
            </Button>
            <Button asChild className="button-small">
              <a href={import.meta.env.VITE_NOTIFY}>דיווח על אירוע מבצעי</a>
            </Button>

            <Button asChild className="button-small">
              <a href="">בקרוב</a>
            </Button>
            <Button asChild className="button-small">
              <a href="">בקרוב</a>
            </Button>
            <Button asChild className="button-small">
              <a href="">בקרוב</a>
            </Button>

            <Button asChild className="button-small col-span-3">
              <a href={import.meta.env.VITE_MAGAVAPP}>אתר כח אדם ותפוקות</a>
            </Button>
          </div>
        </section>

        {/* <section className="border text-black text-center text-xl"></section> */}

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
