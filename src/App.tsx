import { FC, useEffect } from "react";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import MainRoutes from "./components/MainRoutes/MainRoutes";
import { STORAGE_KEY } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeAction } from "./redux/actions";
import { getThemeSelector } from "./redux/selectors";

const App: FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getThemeSelector);

  const currentTheme = JSON.parse(localStorage.getItem(STORAGE_KEY) as string);

  useEffect(() => {
    if (!currentTheme?.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify("dark"));
      //@ts-ignore
      dispatch(changeThemeAction("dark"));
      return;
    }
    if (currentTheme?.length) {
      //@ts-ignore
      dispatch(changeThemeAction(currentTheme));
    }
  }, []);

  useEffect(() => {
    if (theme?.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));

      document.body.className = `${theme}`;
    }
  }, [theme]);

  return (
    <div className="App">
      <SharedLayout>
        <MainRoutes />
      </SharedLayout>
    </div>
  );
};

export default App;
