import { FC } from "react";
import styles from "./HeroSection.module.scss";
import myPhoto from "../../static/images/myPhoto1.jpg";
import Button from "../Button/Button";
import Container from "../Container/Container";
import DownloadCV from "../DownloadCV/DownloadCV";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changeLoadingScreenAction } from "../../redux/actions";
import Icon from "../Icon";

const testScreens = "screens" as any;

const HeroSection: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleNavigate = (to: string) => {
    //@ts-ignore
    dispatch(changeLoadingScreenAction(true));
    setTimeout(() => {
      //@ts-ignore
      dispatch(changeLoadingScreenAction(false));
      navigate(to);
    }, 1000);
  };

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
                {t("Hey i'm ")} <span className={styles.orangeSpan}>{t("Pasha")}</span>
              </h1>
            </div>

            <p className={styles.heroText}>
              {t("I am a front-end developer. I focus on HTML, CSS, SASS, JS,")} <span className={styles.orangeSpan}>React</span>.{" "}
              {t("Development, practice are very important to me.")}
            </p>
          </div>
        </div>
        <div className={styles.bottomContentWrapper}>
          <Button className={styles.button} onClick={() => handleNavigate("/about")}>
            {t("About me")}
          </Button>
          <div className={styles.smallInfoBox}>
            <div className={styles.smallInfoBoxItem}>
              <p className={styles.itemTitle}>{t("Born In")}</p>
              <p className={styles.itemText}>{t("Kyiv")}</p>
            </div>
            <div className={styles.smallInfoBoxItem}>
              <p className={styles.itemTitle}>{t("Experience")}</p>
              <p className={styles.itemText}>{t("2+ Year")}</p>
            </div>
            <div className={styles.smallInfoBoxItem}>
              <p className={styles.itemTitle}>{t("Date of Birth")}</p>
              <p className={styles.itemText}>{t("05 november 1997")}</p>
            </div>
          </div>
        </div>
        <div className={styles.afterBottomContentWrapper}>
          <div className={styles.screensImageWrapper}>
            <Icon name={testScreens} type="png" className={styles.screensImage} />
          </div>
          <div className={styles.screensTextWrapper}>
            <p className={styles.screensText}>
              {t("This application is adapted for correct display on different screens, mobile phones, tablets, computers")}
            </p>
          </div>
        </div>
        <div className={styles.lastBottomContentWrapper}>
          <Icon name="attention" className={styles.attentionIcon} />
          <p className={styles.screensText}>
            {t(
              "Some technologies in this application are used for DEMONSTRATION only! In this kind of application these technologies are not needed. Redux and similar"
            )}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
