import { Reducer, combineReducers } from "redux";
import { userInit } from "./userReducer";
import { filters } from "./filtersReducer";

export * from "./userReducer";

export type Reducers = {
  [key: string]: Reducer;
};

export const webAppReducers = {
  userInit,
  filters,
};

export const combinedWebAppReducer = combineReducers(webAppReducers);

export type WebAppState = ReturnType<typeof combinedWebAppReducer>;
