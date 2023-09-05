import { FC, SyntheticEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainMenu.module.scss";
import Modal from "../Modal";
import Icon from "../Icon";
import Button from "../Button";
import Switch from "../Switch";
import cn from "clsx";
import { useTranslation } from "react-i18next";

import {
  getAppLanguageSelector,
  getThemeSelector,
} from "../../redux/selectors";
import {
  changeAppLanguageAction,
  changeThemeAction,
} from "../../redux/actions";

type Props = {
  onClose: () => void;
};

const MainMenu: FC<Props> = ({ onClose }) => {
  const theme = useSelector(getThemeSelector);
  const appLanguage = useSelector(getAppLanguageSelector);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    theme === "dark"
      ? //@ts-ignore
        dispatch(changeThemeAction("light"))
      : //@ts-ignore
        dispatch(changeThemeAction("dark"));
  };

  const handleChangeLanguage = (event: SyntheticEvent<HTMLButtonElement>) => {
    //@ts-ignore
    dispatch(changeAppLanguageAction(event.currentTarget.name));
  };

  const handleNavigate = () => {};

  return (
    <Modal onClose={() => onClose()}>
      <div className={styles.menuHeader}>
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
          className={cn(
            styles.langButton,
            appLanguage === "ru" && styles.active
          )}
          type="icon"
          name="ru"
          onClick={handleChangeLanguage}
        >
          <p className={styles.langButtonText}>Ru</p>
        </Button>
        <button className={styles.closeButton} onClick={() => onClose()}>
          <Icon name="close" className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.border}></div>
      <div className={styles.menuBody}>
        <div className={styles.menuList}>
          {/* <NavLink onClick={() => onClose()} className={styles.navLink} to="/">
            {t("Home")}
          </NavLink> */}
          <button
            className={styles.navLink}
            onClick={() => navigate("/")}
          ></button>
          <NavLink
            onClick={() => onClose()}
            className={styles.navLink}
            to="/about"
          >
            {t("About me")}
          </NavLink>
          <NavLink
            onClick={() => onClose()}
            className={styles.navLink}
            to="/projects"
          >
            {t("My projects")}
          </NavLink>
          <NavLink
            onClick={() => onClose()}
            className={styles.navLink}
            to="/contactMe"
          >
            {t("Contact me")}
          </NavLink>
          <div className={styles.themeBox}>
            <p className={styles.themeText}>{t("Mode")}</p>
            <Switch
              className={styles.switch}
              isActive={theme === "light"}
              onChange={handleChangeTheme}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MainMenu;
