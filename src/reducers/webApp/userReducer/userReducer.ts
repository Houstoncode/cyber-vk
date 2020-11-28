import { UserInitAction, UserState, USER_INIT } from "./userReducer.type";

export function userInit(state: UserState, action: UserInitAction) {
  switch (action.type) {
    case USER_INIT: {
      return { ...state, ...action.payload };
    }

    default: {
      return { ...state };
    }
  }
}
