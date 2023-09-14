import { FC } from "react";
import styles from "./NavLinksList.module.scss";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "clsx";
import { useTranslation } from "react-i18next";
import { changeLoadingScreenAction } from "../../redux/actions";

type Props = {
  className?: string;
  onClose?: () => void;
};

const NavLinksList: FC<Props> = ({ className, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const currentPage = pathname.split("/")[1];

  const handleNavigate = (to: string) => {
    if (pathname === to) {
      return;
    }
    if (onClose) {
      onClose();
    }
    //@ts-ignore
    dispatch(changeLoadingScreenAction(true));
    setTimeout(() => {
      //@ts-ignore
      dispatch(changeLoadingScreenAction(false));
      navigate(to);
    }, 1000);
  };

  return (
    <div className={cn(styles.menuList, className)}>
      <button
        className={cn(styles.navLink, currentPage === "home" && styles.active)}
        onClick={() => handleNavigate("/home")}
      >
        {" "}
        {t("Home")}
      </button>
      <button
        className={cn(styles.navLink, currentPage === "about" && styles.active)}
        onClick={() => handleNavigate("/about")}
      >
        {t("About me")}
      </button>
      <button
        className={cn(styles.navLink, currentPage === "projects" && styles.active)}
        onClick={() => handleNavigate("/projects")}
      >
        {t("My projects")}
      </button>
      <button
        className={cn(styles.navLink, currentPage === "contactMe" && styles.active)}
        onClick={() => handleNavigate("/contactMe")}
      >
        {t("Contact me")}
      </button>
    </div>
  );
};

export default NavLinksList;
