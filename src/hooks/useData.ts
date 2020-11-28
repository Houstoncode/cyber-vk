import { useSelector } from "react-redux";
import { RootState } from "../reducers";

export function useData<T>(name: string): T | undefined {
  const data = useSelector<RootState, any>((state: RootState) => state);
  const needData = data[name] as T;

  return needData;
}
