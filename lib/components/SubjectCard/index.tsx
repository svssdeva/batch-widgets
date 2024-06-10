import { cn, truncate } from "../../utils";
import s from "./styles.module.css";

const SubjectCard = ({
  subject,
  tagCount,
  img,
}: {
  subject: string;
  tagCount: string;
  img?: string;
}) => {
  return (
    <div className={s["all-class-card"]}>
      <img src={img} alt={subject} />
      <div className={s["class"]}>
        <div className={s["class-title"]}>{truncate(subject, 15)}</div>
        <div className={cn(s["tag-color"], s["caption-1"])}>
          {tagCount ? `${tagCount} Chapters` : ""}
        </div>
      </div>
    </div>
  );
};

export { SubjectCard };
