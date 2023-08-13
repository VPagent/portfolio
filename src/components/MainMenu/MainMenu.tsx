import { FC } from "react";
import styles from "./MainMenu.module.scss";
import Modal from "../Modal/Modal";
import { NavLink } from "react-router-dom";

type Props = {
  onClose: () => void;
};

const MainMenu: FC<Props> = ({ onClose }) => {
  return (
    <Modal onClose={() => onClose()}>
      <div className={styles.menuHeader}>Ru Eng Ukr Close</div>
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
        </div>
      </div>
    </Modal>
  );
};

export default MainMenu;
