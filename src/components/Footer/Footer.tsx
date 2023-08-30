import { FC } from "react";
import styles from "./Footer.module.scss";
import Container from "../Container/Container";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.contentWrapper}>Footer</div>
      </Container>
    </footer>
  );
};

export default Footer;
