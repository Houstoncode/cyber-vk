import { UserInfo } from "@vkontakte/vk-bridge";

export const USER_INIT = "user/init";

export type UserState =
  | ({
      online: boolean;
    } & UserInfo)
  | null;

export type UserInitAction = {
  type: typeof USER_INIT;
  payload: UserState;
};
