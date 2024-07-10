import type { Filters } from "~/types/Filter";

import words from "@/data/words.json";

export const useCategories = (): Filters => {
  const categories: Filters = {};
  for (const word of words) {
    categories[word.key] = {
      easy: true,
      medium: true,
      hard: true,
    };
  }

  return categories;
};
