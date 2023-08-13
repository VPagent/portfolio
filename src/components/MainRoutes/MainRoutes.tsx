import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const HomePage = lazy(() => import("../../pages/HomePage"));
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ProjectsPage = lazy(() => import("../../pages/ProjectsPage"));

const MainRoutes: FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
