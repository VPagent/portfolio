import { FC, useState } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Turn as Hamburger } from "hamburger-react";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerBox}>
          <Logo />
          <div className={styles.headerControls}>
            {/* <Button onClick={() => {}}>About me</Button>
            <Button onClick={() => {}}>Portfolio</Button>
            <Button onClick={() => {}}>Contact me</Button> */}

            <Hamburger toggled={isMenuOpen} onToggle={setIsMenuOpen} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
