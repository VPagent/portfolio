import { FC, useEffect } from "react";
import styles from "./SummarySection.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSummarySelector } from "../../redux/selectors";
import { getMySummaryAction } from "../../redux/actions";
import Container from "../Container/Container";

const SummarySection: FC = () => {
  const dispatch = useDispatch();
  const summary = useSelector(getSummarySelector);

  useEffect(() => {
    //@ts-ignore
    dispatch(getMySummaryAction());
  }, []);

  return (
    <section className={styles.sectionWrapper}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.textBox}>
            <p className={styles.text}>{summary.eng}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SummarySection;
