import { FC } from "react";
import styles from "./Footer.module.scss";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import useMediaReq from "../../hooks/UseMediaReq";
import Logo from "../Logo/Logo";

const Footer: FC = () => {
  const { isTablet } = useMediaReq();
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.contactsLinksBox}>
            <a
              className={styles.contactsLink}
              href="tel:+13392286906"
              target="_blank"
            >
              <Icon className={styles.contactsIcon} name="phone" />
              <p className={styles.contactsLinkText}>+1 339 228 6906</p>
            </a>
            <a
              className={styles.contactsLink}
              href="mailto:vpagent13@gmail.com"
              target="_blank"
            >
              <Icon className={styles.contactsIcon} name="email" />
              <p className={styles.contactsLinkText}>vpagent13@gmail.com</p>
            </a>
          </div>
          <div className={styles.iconsLogoBox}>
            {isTablet && <Logo className={styles.logo} />}
            <div className={styles.linksBox}>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/pavel-voloshyn-406697228/"
                target="_blank"
              >
                <Icon className={styles.icon} name="linkedin" />
              </a>
              <a
                className={styles.link}
                href="https://t.me/pv_at"
                target="_blank"
              >
                <Icon className={styles.icon} name="telegram" />
              </a>
              <a
                className={styles.link}
                href="https://github.com/VPagent"
                target="_blank"
              >
                <Icon className={styles.icon} name="github" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
