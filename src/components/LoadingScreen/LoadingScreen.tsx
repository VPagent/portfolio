import { FC } from "react";
import styles from "./LoadingScreen.module.scss";
import Logo from "../Logo/Logo";
import { createPortal } from "react-dom";

import { animated, useSpring } from "@react-spring/web";

const portal = document.getElementById("portal")!;

const LoadingScreen: FC = () => {
  const styleses = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return createPortal(
    <animated.div className={styles.wrapper} style={styleses}>
      <Logo className={styles.logo} />
    </animated.div>,

    portal
  );
};

export default LoadingScreen;
