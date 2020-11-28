import { createStore } from "redux";
import { combinedWebAppReducer, WebAppState } from "./webApp";

export * from "./commonTypes";
export * from "./webApp";

export type RootState = WebAppState;
export const store = createStore(combinedWebAppReducer);
