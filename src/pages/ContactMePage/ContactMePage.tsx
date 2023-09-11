import { FC, useEffect } from "react";
import styles from "./ContactMePage.module.scss";
import ContactSection from "../../components/ContactSection/ContactSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoadingScreenSelector,
  getTgKeysSelector,
} from "../../redux/selectors";
import {
  changeLoadingScreenAction,
  getTgKeysAction,
} from "../../redux/actions";

const ContactMePage: FC = () => {
  const isLoadingScreen = useSelector(getLoadingScreenSelector);
  const tgKeys = useSelector(getTgKeysSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadingScreen) {
      //@ts-ignore
      dispatch(changeLoadingScreenAction(false));
    }

    if (!tgKeys.token) {
      //@ts-ignore
      dispatch(getTgKeysAction());
    }
  }, []);

  return (
    <>
      <ContactSection />
    </>
  );
};

export default ContactMePage;
