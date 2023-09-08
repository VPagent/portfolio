import { FC, SyntheticEvent } from "react";
import styles from "./ChangeLanguageBox.module.scss";
import Button from "../Button/Button";
import cn from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getAppLanguageSelector } from "../../redux/selectors";
import { changeAppLanguageAction } from "../../redux/actions";

type Props = {
  className?: string;
};
const ChangeLanguageBox: FC<Props> = ({ className }) => {
  const appLanguage = useSelector(getAppLanguageSelector);
  const dispatch = useDispatch();

  const handleChangeLanguage = (event: SyntheticEvent<HTMLButtonElement>) => {
    //@ts-ignore
    dispatch(changeAppLanguageAction(event.currentTarget.name));
  };
  return (
    <div className={cn(styles.buttonsList, className)}>
      <Button
        className={cn(
          styles.langButton,
          appLanguage === "eng" && styles.active
        )}
        type="icon"
        name="eng"
        onClick={handleChangeLanguage}
      >
        <p className={styles.langButtonText}>Eng</p>
      </Button>
      <Button
        className={cn(
          styles.langButton,
          appLanguage === "ukr" && styles.active
        )}
        type="icon"
        name="ukr"
        onClick={handleChangeLanguage}
      >
        <p className={styles.langButtonText}>Ukr</p>
      </Button>
      <Button
        className={cn(styles.langButton, appLanguage === "ru" && styles.active)}
        type="icon"
        name="ru"
        onClick={handleChangeLanguage}
      >
        <p className={styles.langButtonText}>Ru</p>
      </Button>
    </div>
  );
};

export default ChangeLanguageBox;
