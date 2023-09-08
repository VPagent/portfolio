import { FC } from "react";
import styles from "./DesktopMenu.module.scss";
import NavLinksList from "../NavLinksList/NavLinksList";
import ChangeLanguageBox from "../ChangeLanguageBox/ChangeLanguageBox";
import ChangeThemeBox from "../ChangeThemeBox/ChangeThemeBox";

type Props = {};

const DesktopMenu: FC<Props> = () => {
  return (
    <div className={styles.menuWrapper}>
      <NavLinksList className={styles.list} />
      <ChangeLanguageBox className={styles.languageBox} />
      <ChangeThemeBox className={styles.themeBox} />
    </div>
  );
};

export default DesktopMenu;
