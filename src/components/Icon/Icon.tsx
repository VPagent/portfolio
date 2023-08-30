import { FC } from "react";
import styles from "./Icon.module.scss";
import cn from "clsx";
import { ReactComponent as download } from "../../static/icons/download.svg";
import { ReactComponent as close } from "../../static/icons/close.svg";

import html from "../../static/images/logos/icons8-html-96.png";
import css from "../../static/images/logos/icons8-css-100.png";
import sass from "../../static/images/logos/icons8-sass-100.png";
import javascript from "../../static/images/logos/javaScript.png";
import react from "../../static/images/logos/icons8-react-native-96.png";
import restapi from "../../static/images/logos/restApi.png";
import typescript from "../../static/images/logos/icons8-typescript-96.png";
import node from "../../static/images/logos/icons8-nodejs-96.png";
import express from "../../static/images/logos/icons8-express-js-96.png";
import gihub from "../../static/images/logos/icons8-github-96.png";
import gitlab from "../../static/images/logos/icons8-gitlab-96.png";
import webpack from "../../static/images/logos/icons8-webpack-128.png";
import redux from "../../static/images/logos/icons8-redux-96.png";
import mui from "../../static/images/logos/icons8-material-ui-96.png";
import botstrap from "../../static/images/logos/icons8-bootstrap-96.png";
import ant from "../../static/images/logos/ant.png";
import taillwind from "../../static/images/logos/Tailwind.png";
import ukrainian from "../../static/images/Ukrainian.png";
import russian from "../../static/images/Russian.png";
import english from "../../static/images/English.png";

import merchantPoster from "../../static/images/videoPosters/merchant.png";
import graphicsPoster from "../../static/images/videoPosters/graphics.png";
import abzPoster from "../../static/images/videoPosters/abz.png";
import tmgPoster from "../../static/images/videoPosters/tmg.png";
import architectPoster from "../../static/images/videoPosters/architect.png";
import cameraPoster from "../../static/images/videoPosters/camera.png";
import phonePoster from "../../static/images/videoPosters/phonebook.png";
import kidsLikePoster from "../../static/images/videoPosters/kidslike.png";
import jobsPoster from "../../static/images/videoPosters/jobs.png";
import filmotekaPoster from "../../static/images/videoPosters/filmoteka.png";
import iceCreamPoster from "../../static/images/videoPosters/icecream.png";

const icons = {
  download,
  close,
};

export const images = {
  html,
  css,
  sass,
  javascript,
  react,
  restapi,
  typescript,
  node,
  express,
  gihub,
  gitlab,
  webpack,
  redux,
  mui,
  botstrap,
  ant,
  taillwind,
  ukrainian,
  russian,
  english,
  Merchant: merchantPoster,
  Graphics: graphicsPoster,
  "Abz-task": abzPoster,
  "TMG-task": tmgPoster,
  Architect: architectPoster,
  UserCamera: cameraPoster,
  "PhoneBook & Notes": phonePoster,
  KidsLike: kidsLikePoster,
  "Jobs Desk": jobsPoster,
  Filmoteka: filmotekaPoster,
  IceCream: iceCreamPoster,
};

export type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  className?: string;
  type?: string;
};

const Icon: FC<Props> = ({ name, type, className }) => {
  const CurrentIcon = icons[name];

  //@ts-ignore
  const src = images[name];

  return (
    <>
      {!type ? (
        <CurrentIcon className={cn(styles.icon, className)} />
      ) : (
        <img className={cn(styles.image, className)} src={src} alt={name} />
      )}
    </>
  );
};

export default Icon;
