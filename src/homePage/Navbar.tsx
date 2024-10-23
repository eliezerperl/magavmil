import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <section className="navbar">
      <Button className="w-20 h-16 m-4 bg-magav-dark-green text-white hover:bg-slate-600">
        <a href={import.meta.env.VITE_MAGAVAPP}>
          התחברות <br /> למערכת
        </a>
      </Button>
      {/* <img className='border w-24 h-24 mx-6' src='/magav-fade.gif'></img> */}
      {/* <img
          src="/magav.png"
          alt="Magav Emblem"
          className="w-24 h-24 mx-6 img-animation"
        /> */}
      <img
        src="/magav.png"
        alt="Magav Emblem"
        className="w-24 h-24 mx-6 img-animation"
      />
      {/* <img
          src="/magav.png"
          alt="Magav Emblem"
          className="w-24 h-24 mx-6 img-animation3"
        /> */}
    </section>
  );
};

export default Navbar;
