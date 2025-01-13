import type { Category } from "~/types/Category";
import type { Filters } from "~/types/Filter";

import words from "@/data/words.json";

export const useWords = (
  filters: Filters,
  seenWords: string[] = [],
): string[] => {
  let flatWords: string[] = [];

  for (const word of words as Category[]) {
    const filter = filters[word.key];

    if (!filter) {
      continue;
    }

    if (filter.easy) {
      flatWords.push(...word.easy);
    }
    if (filter.medium) {
      flatWords.push(...word.medium);
    }
    if (filter.hard) {
      flatWords.push(...word.hard);
    }
  }

  const seenWordsSet = new Set(seenWords);
  flatWords = flatWords.filter((word) => !seenWordsSet.has(word));

  for (let i = 0; i < 10; i++) {
    flatWords = flatWords.sort(() => 0.5 - Math.random());
  }

  // Shuffle the words
  return flatWords;
};
