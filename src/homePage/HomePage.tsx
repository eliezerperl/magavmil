import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-screen">
      <section className="border flex justify-center">
        <img src="/magav.png" alt="Magav Emblem" className="w-24 h-24" />

        <img src="/police.png" alt="Police Emblem" className="w-32 h-24" />
      </section>

      <section className="flex flex-col justify-center text-white">
        <h1 className="text-3xl text-center mb-12">פורטל דיווחים</h1>
        <div className="grid grid-cols-3 justify-items-center gap-4">
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

      <section className="border text-white text-center text-xl">
        Footer
      </section>

      <section className="flex justify-between m-4 text-white">
        <aside>
          <span>
            עַל חוֹמֹתַיִךְ יְרוּשָׁלַ͏ִם הִפְקַדְתִּי שֹׁמְרִים
            {/* כָּל הַיּוֹם
            וְכָל הַלַּיְלָה תָּמִיד לֹא יֶחֱשׁוּ הַמַּזְכִּרִים אֶת יְהוָה אַל
          דֳּמִי לָכֶם */}
          </span>
          <hr />
          <div className="text-end">ישעיהו ס"ב ו</div>
        </aside>
        <aside className="text-center">מילואים משמר הגבול</aside>
      </section>
    </div>
  );
};

export default HomePage;
