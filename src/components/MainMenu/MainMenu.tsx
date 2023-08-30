import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getThemeSelector } from "../../redux/selectors";
import { changeThemeAction } from "../../redux/actions";
import styles from "./MainMenu.module.scss";
import Modal from "../Modal";
import Icon from "../Icon";
import Button from "../Button";
import Switch from "../Switch";

type Props = {
  onClose: () => void;
};

const MainMenu: FC<Props> = ({ onClose }) => {
  const theme = useSelector(getThemeSelector);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    theme === "dark"
      ? //@ts-ignore
        dispatch(changeThemeAction("light"))
      : //@ts-ignore
        dispatch(changeThemeAction("dark"));
  };
  return (
    <Modal onClose={() => onClose()}>
      <div className={styles.menuHeader}>
        <Button className={styles.langButton} type="icon" onClick={() => {}}>
          <p className={styles.langButtonText}>Eng</p>
        </Button>
        <Button className={styles.langButton} type="icon" onClick={() => {}}>
          <p className={styles.langButtonText}>Ukr</p>
        </Button>
        <Button className={styles.langButton} type="icon" onClick={() => {}}>
          <p className={styles.langButtonText}>Ru</p>
        </Button>
        <button className={styles.closeButton} onClick={() => onClose()}>
          <Icon name="close" className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.border}></div>
      <div className={styles.menuBody}>
        <div className={styles.menuList}>
          <NavLink onClick={() => onClose()} className={styles.navLink} to="/">
            Home
          </NavLink>
          <NavLink
            onClick={() => onClose()}
            className={styles.navLink}
            to="/about"
          >
            About me
          </NavLink>
          <NavLink
            onClick={() => onClose()}
            className={styles.navLink}
            to="/projects"
          >
            My projects
          </NavLink>
          <NavLink
            onClick={() => onClose()}
            className={styles.navLink}
            to="/contactMe"
          >
            Contact me
          </NavLink>
          <div className={styles.themeBox}>
            <p className={styles.themeText}>Mode</p>
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
