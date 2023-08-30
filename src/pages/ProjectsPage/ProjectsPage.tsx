import { FC, useEffect } from "react";
import styles from "./ProjectsPage.module.scss";
import Container from "../../components/Container/Container";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsSelector } from "../../redux/selectors";
import { getMyProjectsAction } from "../../redux/actions";

const ProjectsPage: FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsSelector);

  useEffect(() => {
    //@ts-ignore
    dispatch(getMyProjectsAction());
  }, []);

  return (
    <>
      <ProjectsSection projects={projects} />
    </>
  );
};

export default ProjectsPage;
