import React from "../snowpack/pkg/react.js";
import styles from "./App.module.css.proxy.js";
import {Game} from "./components/index.js";
export const App = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.app
  }, /* @__PURE__ */ React.createElement(Game, null));
};
