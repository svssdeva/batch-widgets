import { cn } from "../../utils";
import s from "./styles.module.css";

const TestPressCard = ({
  testPress,
  isPurchased,
  testPressCardIcon,
  handleRedirection,
}: {
  testPress: {
    title: string;
    subTitle: string;
  };
  isPurchased: string;
  testPressCardIcon: string;
  handleRedirection: () => void;
}) => {
  return (
    <div className={cn(s.testWrapper)}>
      <img src={testPressCardIcon} alt="Test Press Icon" />
      <div className={cn(s.testHeaderWrapper)}>
        <span className={cn(s["test-press-title"], s["heading-5"])}>
          {testPress.title}
        </span>
        <span className={cn(s["test-press-subtitle"], s["body-1"])}>
          {testPress.subTitle}
        </span>
      </div>
      <button onClick={handleRedirection} className={s["test-press-btn"]}>
        {isPurchased ? "My Tests" : "Try Free Tests"}
      </button>
    </div>
  );
};

export { TestPressCard };
