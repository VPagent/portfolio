import { FC } from "react";
import styles from "./ChangeThemeBox.module.scss";
import Switch from "../Switch/Switch";
import { useDispatch, useSelector } from "react-redux";
import { getThemeSelector } from "../../redux/selectors";
import { useTranslation } from "react-i18next";
import cn from "clsx";
import { changeThemeAction } from "../../redux/actions";

type Props = {
  className?: string;
};

const ChangeThemeBox: FC<Props> = ({ className }) => {
  const theme = useSelector(getThemeSelector);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    theme === "dark"
      ? //@ts-ignore
        dispatch(changeThemeAction("light"))
      : //@ts-ignore
        dispatch(changeThemeAction("dark"));
  };
  return (
    <div className={cn(styles.themeBox, className)}>
      <p className={styles.themeText}>{t("Mode")}</p>
      <Switch
        className={styles.switch}
        isActive={theme === "light"}
        onChange={handleChangeTheme}
      />
    </div>
  );
};

export default ChangeThemeBox;
