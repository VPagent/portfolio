import { FC, useState } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import { Turn as Hamburger } from "hamburger-react";
import MainMenu from "../MainMenu/MainMenu";
import useMediaReq from "../../hooks/UseMediaReq";
import DesktopMenu from "../DesktopMenu/DesktopMenu";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktop } = useMediaReq();

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerBox}>
          <Logo />
          <div className={styles.headerControls}>
            {isDesktop && <DesktopMenu />}
            {!isDesktop && (
              <div className={styles.menuButton}>
                <Hamburger
                  color="#8901cd"
                  toggled={isMenuOpen}
                  onToggle={setIsMenuOpen}
                />
              </div>
            )}
            {isMenuOpen && !isDesktop && (
              <MainMenu onClose={handleCloseMenu} isOpen={isMenuOpen} />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
