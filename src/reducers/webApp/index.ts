import { Reducer, combineReducers } from "redux";
import { userInit } from "./userReducer";

export * from "./userReducer";

export type Reducers = {
  [key: string]: Reducer;
};

export const webAppReducers = {
  userInit,
};

export const combinedWebAppReducer = combineReducers(webAppReducers);

export type WebAppState = ReturnType<typeof combinedWebAppReducer>;
