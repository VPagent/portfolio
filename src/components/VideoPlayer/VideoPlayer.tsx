import { FC } from "react";
import styles from "./VideoPlayer.module.scss";
import cn from "clsx";
import merchant from "../../static/videos/merchant.mp4";
import graphics from "../../static/videos/grafics.mp4";
import abz from "../../static/videos/abz.mp4";
import tmg from "../../static/videos/tmg.mp4";
import architect from "../../static/videos/architect.mp4";
import camera from "../../static/videos/camera.mp4";
import phoneBook from "../../static/videos/phonebook.mp4";
import kidsLike from "../../static/videos/kidslike.mp4";
import jobs from "../../static/videos/jobsdesk.mp4";
import filmoteka from "../../static/videos/filmoteka.mp4";
import iceCream from "../../static/videos/icecream.mp4";
import enkoTrans from "../../static/videos/enkotrans.mp4";
import ilark from "../../static/videos/ilarkgames.mp4";

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
import enkoTransPoster from "../../static/images/videoPosters/enkotrans.png";
import ilarkPoster from "../../static/images/videoPosters/ilark.png";

const posters = {
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
  "Enko trans": enkoTransPoster,
  "Ilark games": ilarkPoster,
};

const videos = {
  Merchant: merchant,
  Graphics: graphics,
  "Abz-task": abz,
  "TMG-task": tmg,
  Architect: architect,
  UserCamera: camera,
  "PhoneBook & Notes": phoneBook,
  KidsLike: kidsLike,
  "Jobs Desk": jobs,
  Filmoteka: filmoteka,
  IceCream: iceCream,
  "Enko trans": enkoTrans,
  "Ilark games": ilark,
};

type Props = {
  name: string;
  className?: string;
};

const VideoPlayer: FC<Props> = ({ name, className }) => {
  //@ts-ignore
  const path = videos[name];
  //@ts-ignore
  const poster = posters[name];
  return (
    <video
      className={cn(styles.player, className)}
      preload="auto"
      autoPlay
      loop
      muted
      //   width="500"
      //   height="500"
      poster={poster}
    >
      <source src={path} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
