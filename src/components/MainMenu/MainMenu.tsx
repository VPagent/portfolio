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
  changeLoadingScreenAction,
  changeThemeAction,
} from "../../redux/actions";
import NavLinksList from "../NavLinksList/NavLinksList";
import ChangeThemeBox from "../ChangeThemeBox/ChangeThemeBox";
import ChangeLanguageBox from "../ChangeLanguageBox/ChangeLanguageBox";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MainMenu: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal onClose={() => onClose()} isOpen={isOpen}>
      <div className={styles.menuHeader}>
        <ChangeLanguageBox />
        <button className={styles.closeButton} onClick={() => onClose()}>
          <Icon name="close" className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.border}></div>
      <div className={styles.menuBody}>
        <NavLinksList onClose={onClose} />
        <ChangeThemeBox />
      </div>
    </Modal>
  );
};

export default MainMenu;
