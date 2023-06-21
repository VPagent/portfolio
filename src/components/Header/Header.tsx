import { FC } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerBox}>
          <Logo />
          <div className={styles.headerControls}>
            <button>butt</button>
            <button>butt2</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
