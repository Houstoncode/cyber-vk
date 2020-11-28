import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import bridge from "@vkontakte/vk-bridge";

bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
