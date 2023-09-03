import { FC } from "react";
import styles from "./ContactMeForm.module.scss";

const ContactMeForm: FC = () => {
  return (
    <>
      <form action="#" className={styles.form}>
        <label className={styles.label}>
          <span className={styles.labelText}>Name</span>
          <input className={styles.input} type="text" min={2} max={40} />
        </label>
        <label className={styles.label}>
          <span className={styles.labelText}>Email</span>
          <input className={styles.input} type="email" />
        </label>
        <label className={styles.label}>
          <span className={styles.labelText}>Message</span>
          <input className={styles.input} type="text" />
        </label>
        <button className={styles.formButton}>Send</button>
      </form>
    </>
  );
};

export default ContactMeForm;
