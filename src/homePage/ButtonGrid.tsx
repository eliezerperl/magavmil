import { Button } from '@/components/ui/button';
import { SyntheticEvent } from 'react';


const ButtonGrid = () => {


  return (
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
  );
};

export default ButtonGrid;
