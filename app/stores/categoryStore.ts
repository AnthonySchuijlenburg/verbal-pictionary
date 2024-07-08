import { defineStore } from "pinia";
import type { Filters } from "~/types/Filter";

export const useCategoryStore = defineStore(
  "words",
  () => {
    // const { t } = useI18n();
    const enabledCategories = ref<Filters>({
      animals: { easy: true, medium: true, hard: true },
      fruits: { easy: true, medium: true, hard: true },
      objects: { easy: true, medium: true, hard: true },
    });

    return {
      enabledCategories,
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
