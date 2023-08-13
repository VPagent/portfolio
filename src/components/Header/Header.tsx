import { FC, useState } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Turn as Hamburger } from "hamburger-react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import MainMenu from "../MainMenu/MainMenu";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerBox}>
          <Logo />
          <div className={styles.headerControls}>
            <Hamburger toggled={isMenuOpen} onToggle={setIsMenuOpen} />
            {isMenuOpen && <MainMenu onClose={handleCloseMenu} />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
