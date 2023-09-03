import { FC, useEffect } from "react";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import MainRoutes from "./components/MainRoutes/MainRoutes";
import { LANG_STORAGE_KEY, STORAGE_KEY } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { changeAppLanguageAction, changeThemeAction } from "./redux/actions";
import { getAppLanguageSelector, getThemeSelector } from "./redux/selectors";
import i18n from "./I18n/I18n";
import "./static/sass/index.scss";

const App: FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getThemeSelector);
  const appLanguage = useSelector(getAppLanguageSelector);

  const currentTheme = JSON.parse(localStorage.getItem(STORAGE_KEY) as string);
  const currentLang = JSON.parse(
    localStorage.getItem(LANG_STORAGE_KEY) as string
  );

  useEffect(() => {
    if (!currentTheme?.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify("dark"));
      //@ts-ignore
      dispatch(changeThemeAction("dark"));
    }
    if (currentTheme?.length) {
      //@ts-ignore
      dispatch(changeThemeAction(currentTheme));
    }
    if (!currentLang?.length) {
      localStorage.setItem(LANG_STORAGE_KEY, JSON.stringify(appLanguage));
    }
    if (currentLang?.length) {
      //@ts-ignore
      dispatch(changeAppLanguageAction(currentLang));
    }
  }, []);

  useEffect(() => {
    if (theme?.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));

      document.body.className = `${theme} ${appLanguage}`;
    }
    if (appLanguage?.length) {
      i18n.changeLanguage(appLanguage);
      localStorage.setItem(LANG_STORAGE_KEY, JSON.stringify(appLanguage));
    }
  }, [theme, appLanguage]);

  return (
    <div className="App">
      <SharedLayout>
        <MainRoutes />
      </SharedLayout>
    </div>
  );
};

export default App;
