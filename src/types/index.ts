import { UserState } from "../reducers";

export type DefaultPanelProps = {
  id: string;
  go: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  fetchedUser: UserState | undefined;
};
