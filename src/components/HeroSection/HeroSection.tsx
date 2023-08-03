import { FC, useRef } from "react";
import styles from "./HeroSection.module.scss";
import myPhoto from "../../static/images/myPhoto1.jpg";
import Button from "../Button/Button";
import cn from "clsx";
import Container from "../Container/Container";
import DownloadCV from "../DownloadCV/DownloadCV";

const HeroSection: FC = () => {
  const titleRef = useRef(null);

  return (
    <section className={styles.heroWrapper}>
      <Container>
        <div className={styles.desktopMobileWrapper}>
          <div className={styles.imageWrapper}>
            <div className={styles.photoAndCvWrapper}>
              <DownloadCV className={styles.cvCircle} />
              <div className={styles.photoArial}>
                <img className={styles.myPhoto} src={myPhoto} alt="my photo" />
              </div>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div>
              <h1 ref={titleRef} className={cn(styles.heroTitle)}>
                Hey i'm <span className={styles.orangeSpan}>Pasha</span>
              </h1>
            </div>

            <p className={styles.heroText}>
              I am a front-end developer. I focus on HTML, CSS, SASS, JS,
              <span className={styles.orangeSpan}>React</span>. Development,
              practice are very important to me.
            </p>
          </div>
        </div>
        <Button className={styles.button} onClick={() => {}}>
          About me
        </Button>
        <div className={styles.smallInfoBox}>
          <div className={styles.smallInfoBoxItem}>
            <p className={styles.itemTitle}>Born In</p>
            <p className={styles.itemText}>Kyiv</p>
          </div>
          <div className={styles.smallInfoBoxItem}>
            <p className={styles.itemTitle}>Experience</p>
            <p className={styles.itemText}>1+ Year</p>
          </div>
          <div className={styles.smallInfoBoxItem}>
            <p className={styles.itemTitle}>Date of Birth</p>
            <p className={styles.itemText}>05 november 1997</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
