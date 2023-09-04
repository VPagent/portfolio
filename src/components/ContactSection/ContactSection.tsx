import { FC } from "react";
import styles from "./ContactSection.module.scss";
import Container from "../Container/Container";
import ContactMeForm from "../ContactMeForm/ContactMeForm";

const ContactSection: FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.sectionTitle}>Contact me</h2>
        <p className={styles.sectionText}>
          On this page you can leave me a message about cooperation, work,
          projects, or just other questions.
        </p>
        <ContactMeForm className={styles.form} />
      </Container>
    </section>
  );
};

export default ContactSection;
