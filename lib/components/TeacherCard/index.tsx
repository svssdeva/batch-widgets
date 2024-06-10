import { renderIcon, truncate } from "../../utils";
import s from "./styles.module.css";
const TeacherCard = ({
  firstName,
  lastName,
  subject,
  experience,
  img,
  arrowImg,
  onClick,
}: {
  firstName: string;
  lastName: string;
  subject: string;
  experience?: string;
  img?: string;
  arrowImg: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div className={s["all-teacher-card"]}>
      <div className={s["img-container"]}>
        <img src={img} alt="teacher-img" className={s["teacher-img"]} />
        <div className={s["teacher-div"]}>
          <span className={s["teacher-name"]}>
            {firstName} {lastName}
          </span>
        </div>
      </div>
      <div className={s["detail-container"]}>
        <div className={s["detail-subconatiner"]}>
          {subject && (
            <span className={s["subject"]}>{truncate(subject, 10)}</span>
          )}
          {experience && (
            <span className={s["experience"]}>
              Exp: {truncate(experience, 10)} Yr
            </span>
          )}
        </div>
        <div className={s["btn"]} onClick={onClick}>
          {renderIcon(arrowImg)}
        </div>
      </div>
    </div>
  );
};

export { TeacherCard };
