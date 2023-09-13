import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import SharedLayout from "../SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ProjectsPage = lazy(() => import("../../pages/ProjectsPage"));
const ContactMePage = lazy(() => import("../../pages/ContactMePage"));

const MainRoutes: FC = () => {
  return (
    <SharedLayout>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contactMe" element={<ContactMePage />} />
        </Routes>
      </Suspense>
    </SharedLayout>
  );
};

export default MainRoutes;
