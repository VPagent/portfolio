import { FC } from "react";
import styles from "./HeroSection.module.scss";
import myPhoto from "../../static/images/myPhoto1.jpg";
import Button from "../Button/Button";
import Container from "../Container/Container";
import DownloadCV from "../DownloadCV/DownloadCV";
import { useNavigate } from "react-router-dom";
import i18n from "../../I18n/I18n";
import { useTranslation } from "react-i18next";

const HeroSection: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
              <h1 className={styles.heroTitle}>
                {t("Hey i'm ")}{" "}
                <span className={styles.orangeSpan}>{t("Pasha")}</span>
              </h1>
            </div>

            <p className={styles.heroText}>
              {t("I am a front-end developer. I focus on HTML, CSS, SASS, JS,")}{" "}
              <span className={styles.orangeSpan}>React</span>.{" "}
              {t("Development, practice are very important to me.")}
            </p>
          </div>
        </div>
        <Button className={styles.button} onClick={() => navigate("/about")}>
          {t("About me")}
        </Button>
        <div className={styles.smallInfoBox}>
          <div className={styles.smallInfoBoxItem}>
            <p className={styles.itemTitle}>{t("Born In")}</p>
            <p className={styles.itemText}>{t("Kyiv")}</p>
          </div>
          <div className={styles.smallInfoBoxItem}>
            <p className={styles.itemTitle}>{t("Experience")}</p>
            <p className={styles.itemText}>{t("1+ Year")}</p>
          </div>
          <div className={styles.smallInfoBoxItem}>
            <p className={styles.itemTitle}>{t("Date of Birth")}</p>
            <p className={styles.itemText}>{t("05 november 1997")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
