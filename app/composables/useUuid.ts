import { v4 } from "uuid";
export const useUuid = (): string => {
  return v4();
};
