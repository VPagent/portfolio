import { FC, useEffect } from "react";
import styles from "./ProjectsPage.module.scss";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoadingScreenSelector,
  getProjectsSelector,
} from "../../redux/selectors";
import {
  changeLoadingScreenAction,
  getMyProjectsAction,
} from "../../redux/actions";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const ProjectsPage: FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsSelector);
  const isLoadingScreen = useSelector(getLoadingScreenSelector);

  useEffect(() => {
    //@ts-ignore
    dispatch(getMyProjectsAction());
    if (isLoadingScreen) {
      //@ts-ignore
      dispatch(changeLoadingScreenAction(false));
    }
  }, []);

  return (
    <>
      {isLoadingScreen ? (
        <LoadingScreen />
      ) : (
        <ProjectsSection projects={projects} />
      )}
    </>
  );
};

export default ProjectsPage;
