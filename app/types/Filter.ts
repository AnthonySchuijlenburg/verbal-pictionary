export type Filters = {
  [key: string]: Filter;
};

export type Filter = {
  easy: boolean;
  medium: boolean;
  hard: boolean;
};
