import { FC, useEffect } from "react";
import styles from "./ContactMePage.module.scss";
import ContactSection from "../../components/ContactSection/ContactSection";
import { useDispatch, useSelector } from "react-redux";
import { getLoadingScreenSelector } from "../../redux/selectors";
import { changeLoadingScreenAction } from "../../redux/actions";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const ContactMePage: FC = () => {
  const isLoadingScreen = useSelector(getLoadingScreenSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadingScreen) {
      //@ts-ignore
      dispatch(changeLoadingScreenAction(false));
    }
  }, []);

  return <>{isLoadingScreen ? <LoadingScreen /> : <ContactSection />}</>;
};

export default ContactMePage;
