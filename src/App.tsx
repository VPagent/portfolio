import { FC } from "react";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";

const App: FC = () => {
  return (
    <div className="App">
      <SharedLayout>
        <HomePage />
      </SharedLayout>
    </div>
  );
};

export default App;
