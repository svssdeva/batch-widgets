import s from "./styles.module.css";

export const TeacherModal = ({
  closebtn,
  firstName,
  lastName,
  subject,
  tags,
  onClose,
  quote,
  about,
  thumbnailImg,
  playImg,
  onClick,
  play,
  iframe,
}: {
  closebtn?: string;
  firstName: string;
  lastName: string;
  subject: string;
  tags?: string[];
  quote?: string;
  about?: string;
  thumbnailImg?: string;
  playImg?: string;
  onClick?: () => void;
  onClose?: () => void;
  play?: boolean;
  iframe?: any;
}) => {
  return (
    <>
      <div className={s["header"]}>
        <div className={s["close-btn"]} onClick={onClose}>
          <img src={closebtn} />
        </div>
      </div>
      <div className={s["teacher-modal"]}>
        <div className={s["teacher-detail"]}>
          <span className={s["teacher-name"]}>
            {firstName} {lastName}
          </span>
          <span className={s["subject"]}>{subject}</span>
          <div className={s["tag-container"]}>
            {tags &&
              tags.map((tag, index) => (
                <div key={index} className={s["tag"]}>
                  {tag}
                </div>
              ))}
          </div>
        </div>
        {thumbnailImg && (
          <div className={s["video-container"]}>
            <div className={s["thumbnail-container"]} onClick={onClick}>
              <img
                src={thumbnailImg}
                alt="thumbnail"
                className={s["thumbnail"]}
              />
              <img src={playImg} alt="play button" className={s["playImg"]} />
            </div>
            {play && <div className={s["iframe"]}>{iframe}</div>}
          </div>
        )}
      </div>
      {quote && (
        <div className={s["quote-container"]}>
          <div className={s["quote-subcontainer"]}>
            <span className={s["quote-heading"]}>Quotes</span>
            <div className={s["blue-line"]}></div>
            <div className={s["quote"]}>{quote}</div>
          </div>
        </div>
      )}
      {about && (
        <div className={s["about-container"]}>
          <div className={s["intro"]}>
            <span className={s["quote-heading"]}>Introduction</span>
            <div className={s["blue-line"]}></div>
          </div>
          <div className={s["about"]}>{about}</div>
        </div>
      )}
    </>
  );
};

export default TeacherModal;
