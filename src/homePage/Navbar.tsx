import { Button } from '@/components/ui/button';
import GifToStaticImage from './GifToStaticImage';

const Navbar = () => {
  return (
    <section className="navbar">
      <Button className="w-20 h-16 my-4 mx-8 bg-magav-dark-green text-white hover:bg-slate-600">
        <a href={import.meta.env.VITE_MAGAVAPP}>
          התחברות <br /> למערכת
        </a>
      </Button>
      {/* <img className='border w-24 h-24 mx-6' src='/magav-fade.gif'></img> */}
      <GifToStaticImage />
      {/* <img
        src="/magavgif.gif"
        alt="Magav Emblem"
        className="w-24 h-24 mx-6 bg-transparent"
      /> */}
      {/* <img
        src="/magav_mil.png"
        alt="Magav Emblem"
        className="w-24 h-24 mx-6 img-animation"
      /> */}
      {/* <img
          src="/magav.png"
          alt="Magav Emblem"
          className="w-24 h-24 mx-6 img-animation3"
        /> */}
    </section>
  );
};

export default Navbar;
