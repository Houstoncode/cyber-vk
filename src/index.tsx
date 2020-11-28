import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import bridge from "@vkontakte/vk-bridge";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./reducers";

bridge.send("VKWebAppInit");

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
