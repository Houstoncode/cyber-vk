import {
  FiltersState,
  SetFiltersAction,
  SET_FILTERS,
} from "./filtersReducer.type";

const initialState: FiltersState = {
  game: { name: "Не выбрано", type: "" },
  minAge: 0,
  maxAge: 100,
  city: "",
};

export function filters(
  state: FiltersState = initialState,
  action: SetFiltersAction
) {
  switch (action.type) {
    case SET_FILTERS: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
