export const SET_FILTERS = "filters/set";

export type FiltersState = {
  game: { name: string; type: "csgo" | "" };
  minAge: number;
  maxAge: number;
  city: string;
};

export type SetFiltersAction = {
  type: typeof SET_FILTERS;
  payload: FiltersState;
};
