import { FC } from "react";
import styles from "./ContactSection.module.scss";
import Container from "../Container/Container";
import ContactMeForm from "../ContactMeForm/ContactMeForm";

const ContactSection: FC = () => {
  return (
    <section>
      <Container>
        <ContactMeForm />
      </Container>
    </section>
  );
};

export default ContactSection;
