import { FC } from "react";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import MainRoutes from "./components/MainRoutes/MainRoutes";

const App: FC = () => {
  return (
    <div className="App">
      <SharedLayout>
        <MainRoutes />
      </SharedLayout>
    </div>
  );
};

export default App;
