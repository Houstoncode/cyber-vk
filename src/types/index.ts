import { UserInfo } from "@vkontakte/vk-bridge";

export type DefaultPanelProps = {
  id: string;
  go: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  fetchedUser: UserInfo | null;
};
