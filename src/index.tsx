import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./static/sass/reset.scss";
import "./static/sass/index.scss";
import "./static/sass/themes.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter basename="https://VPagent.github.io/portfolio/">
      {/* <BrowserRouter basename="https://VPagent.github.io/portfolio/"> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>
);
