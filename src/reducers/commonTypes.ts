import { UserState } from "./webApp";

export type DefaultPanelProps = {
  id: string;
  go: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  fetchedUser: UserState | undefined;
};
