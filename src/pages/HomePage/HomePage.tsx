import { FC, useEffect } from "react";
import styles from "./HomePage.module.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import { useDispatch, useSelector } from "react-redux";
import { getLoadingScreenSelector } from "../../redux/selectors";
import { changeLoadingScreenAction } from "../../redux/actions";

const HomePage: FC = () => {
  const isLoadingScreen = useSelector(getLoadingScreenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadingScreen) {
      //@ts-ignore
      dispatch(changeLoadingScreenAction(false));
    }
  }, []);
  return (
    <>
      <HeroSection />
    </>
  );
};

export default HomePage;
