import { defineStore } from "pinia";
import type { Filter, Filters } from "~/types/Filter";

export const useCategoriesStore = defineStore(
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

    const allEasy = computed<boolean>({
      get() {
        const categories: Filters = enabledCategories.value;
        return Object.values(categories).every(
          (category: Filter) => category.easy,
        );
      },

      set(value: boolean) {
        setAllCategories("easy", value);
      },
    });

    const allMedium = computed<boolean>({
      get() {
        const categories: Filters = enabledCategories.value;
        return Object.values(categories).every(
          (category: Filter) => category.medium,
        );
      },

      set(value: boolean) {
        setAllCategories("medium", value);
      },
    });

    const allHard = computed<boolean>({
      get() {
        const categories: Filters = enabledCategories.value;
        return Object.values(categories).every(
          (category: Filter) => category.hard,
        );
      },

      set(value: boolean) {
        setAllCategories("hard", value);
      },
    });

    function setAllCategories(difficulty: keyof Filter, value: boolean) {
      for (const category of Object.values(enabledCategories.value)) {
        category[difficulty] = value;
      }
    }

    function resetCategories() {
      allEasy.value = true;
      allMedium.value = true;
      allHard.value = true;
    }

    return {
      enabledCategories,
      setCategory,
      allEasy,
      allMedium,
      allHard,
      resetCategories,
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
