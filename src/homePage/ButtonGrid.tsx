import { Button } from '@/components/ui/button';
import {
  BriefcaseMedical,
  ClipboardList,
  ClipboardPenLine,
  Info,
  ShoppingCart,
  Sword,
  Users,
} from 'lucide-react';

const ButtonGrid = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center text-black">
      {/* אג"מ */}
      <section className="first-line btn-col">
        <div className="col-title">
          <u>אג"מ</u>
          <Sword />
        </div>
        <Button asChild className="button-small">
          <a href={import.meta.env.VITE_NOTIFY}>
            דיווח על אירוע מבצעי
            <Info />
          </a>
        </Button>
      </section>

      {/* רפואה */}
      <section className="second-line btn-col">
        <div className="col-title">
          <u>רפואה</u>
          <BriefcaseMedical />
        </div>
        <Button asChild className="button-small">
          <a href={import.meta.env.VITE_INJURY}>
            דיווח על פציעה
            <ClipboardPenLine />
          </a>
        </Button>

        <Button asChild className="button-small">
          <a href={import.meta.env.VITE_SICK}>
            דיווח על מחלה
            <ClipboardList />
          </a>
        </Button>
      </section>

      {/* אמ"ש */}
      <section className="third-line btn-col">
        <div className="col-title">
          <u>אמ"ש</u>
          <Users />
        </div>
        <Button  className="button-small disabled">
          דיווח על כח אדם (בקרוב)
          {/* <a href="">דיווח על כח אדם (בקרוב)</a> */}
        </Button>
      </section>

      {/* את"ל */}
      <section className="fourth-line btn-col">
        <div className="col-title">
          <u>את"ל</u>
          <ShoppingCart />
        </div>
        <Button  className="button-small disabled">
          דיווח על מדים (בקרוב)
          {/* <a href="">דיווח על מדים (בקרוב)</a> */}
        </Button>

        <Button  className="button-small disabled">
          דיווח על ציוד פלוגתי ואישי (בקרוב)
          {/* <a href="">דיווח על ציוד פלוגתי ואישי (בקרוב)</a> */}
        </Button>
      </section>
    </div>
  );
};

export default ButtonGrid;
