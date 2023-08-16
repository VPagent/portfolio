import { FC } from "react";
import styles from "./Icon.module.scss";
import cn from "clsx";
import { ReactComponent as download } from "../../static/icons/download.svg";
import HTML from "../../static/images/logos/icons8-html-96.png";
import CSS from "../../static/images/logos/icons8-css-100.png";
import SASS from "../../static/images/logos/icons8-sass-100.png";
import JavaScript from "../../static/images/logos/javaScript.png";
import React from "../../static/images/logos/icons8-react-native-96.png";
import restapi from "../../static/images/logos/restApi.png";
import typescript from "../../static/images/logos/icons8-typescript-96.png";
import nodejs from "../../static/images/logos/icons8-nodejs-96.png";
import express from "../../static/images/logos/icons8-express-js-96.png";
import github from "../../static/images/logos/icons8-github-96.png";
import gitlab from "../../static/images/logos/icons8-gitlab-96.png";
import webpack from "../../static/images/logos/icons8-webpack-128.png";
import redux from "../../static/images/logos/icons8-redux-96.png";
import mui from "../../static/images/logos/icons8-material-ui-96.png";
import bootstrap from "../../static/images/logos/icons8-bootstrap-96.png";
import antdesign from "../../static/images/logos/ant.png";
import taillwind from "../../static/images/logos/Tailwind.png";

const icons = {
  download,
};

export type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  className?: string;
  type?: string;
};

const Icon: FC<Props> = ({ name, type, className }) => {
  const CurrentIcon = icons[name];

  return (
    <>
      {!type ? (
        <CurrentIcon className={cn(styles.icon, className)} />
      ) : (
        <img className={styles.image} src={name} alt={name} />
      )}
    </>
  );
};

export default Icon;
