import { Button } from '@/components/ui/button';
import { ClipboardList, ClipboardPenLine, Info } from 'lucide-react';

const ButtonGrid = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center text-black">
      {/* אג"מ */}
      <section className="first-line btn-col">
        <u>אג"מ</u>
        <Button asChild className="button-small">
          <a href={import.meta.env.VITE_NOTIFY}>
            דיווח על אירוע מבצעי
            <Info />
          </a>
        </Button>
      </section>

      {/* רפואה */}
      <section className="second-line btn-col">
        <u>רפואה</u>
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
        <u>אמ"ש</u>
        <Button asChild className="button-small disabled">
          <a href="">דיווח על כח אדם (בקרוב)</a>
        </Button>
      </section>

      {/* את"ל */}
      <section className="fourth-line btn-col">
        <u>את"ל</u>
        <Button asChild className="button-small disabled">
          <a href="">דיווח על מדים (בקרוב)</a>
        </Button>

        <Button asChild className="button-small disabled">
          <a href="">דיווח על ציוד פלוגתי ואישי (בקרוב)</a>
        </Button>
      </section>
    </div>
  );
};

export default ButtonGrid;
