import './App.css';
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen w-screen">
        <div className="border flex justify-center text-white ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>את"ל</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink
                    className="p-2 cursor-default"
                    aria-disabled>
                    בקרוב
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>רפואה</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink
                    className="cursor-pointer hover:bg-slate-600 p-2"
                    href={import.meta.env.VITE_SICK}>
                    דיווח על מחלה
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="cursor-pointer hover:bg-slate-600 p-2"
                    href={import.meta.env.VITE_INJURY}>
                    דיווח על פציעה
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>אמ"ש</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink
                    className="p-2 cursor-default"
                    aria-disabled>
                    בקרוב
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>אג"מ</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink
                    className="cursor-pointer hover:bg-slate-600 p-2"
                    href={import.meta.env.VITE_NOTIFY}>
                    דיווח על אירוע מבצעי
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-center">
          <a
            className="cursor-pointer hover:bg-slate-600 text-white border rounded-3xl border-slate-600 p-4"
            href={import.meta.env.VITE_MAGAVAPP}>
            לאתר מידע כוח אדם ותפוקות
          </a>
        </div>

        <section className="flex flex-col items-center mb-28">
          <aside>
            <img src="/magav.jpeg" />
          </aside>
          <aside className=" text-center">
            <span className="text-white">
              עַל חוֹמֹתַיִךְ יְרוּשָׁלַ͏ִם הִפְקַדְתִּי שֹׁמְרִים כָּל הַיּוֹם
              וְכָל הַלַּיְלָה תָּמִיד לֹא יֶחֱשׁוּ הַמַּזְכִּרִים אֶת יְהוָה
              אַל דֳּמִי לָכֶם
            </span>
            <br />
            <span className="text-white">ישעיהו ס"ב ו</span>
          </aside>
        </section>
      </div>
    </>
  );
}

export default App;
