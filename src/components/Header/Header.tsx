import { FC, useState } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import { Turn as Hamburger } from "hamburger-react";
import MainMenu from "../MainMenu/MainMenu";
import useMediaReq from "../../hooks/UseMediaReq";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import { useParams, useSearchParams } from "react-router-dom";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktop } = useMediaReq();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState("home");

  console.log(currentPage);

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
              <Hamburger
                color="#8901cd"
                toggled={isMenuOpen}
                onToggle={setIsMenuOpen}
              />
            )}
            {isMenuOpen && !isDesktop && (
              <MainMenu
                onClose={handleCloseMenu}
                isOpen={isMenuOpen}
                setPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
