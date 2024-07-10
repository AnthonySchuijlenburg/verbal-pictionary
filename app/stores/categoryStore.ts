import { defineStore } from "pinia";
import type { Filter, Filters } from "~/types/Filter";

export const useCategoryStore = defineStore(
  "categories",
  () => {
    const enabledCategories = ref<Filters>(useCategories());

    function setCategory(
      key: keyof Filters,
      difficulty: keyof Filter,
      value: boolean,
    ) {
      const category = enabledCategories.value[key];

      if (!category) {
        return;
      }

      category[difficulty] = value;
    }

    return {
      enabledCategories,
      setCategory,
    };
  },
  {
    persist: {
      storage: persistedState.cookiesWithOptions({
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
      }),
    },
  },
);
