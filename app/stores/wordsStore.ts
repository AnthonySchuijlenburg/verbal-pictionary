import { defineStore } from "pinia";

export const useWordsStore = defineStore(
  "words",
  () => {
    const categoryStore = useCategoryStore();
    const lastUsedCategories = ref<string>(
      JSON.stringify(categoryStore.enabledCategories),
    );

    const words = ref<string[]>(useWords(categoryStore.enabledCategories));

    watch(categoryStore.enabledCategories, () => {
      if (
        JSON.stringify(categoryStore.enabledCategories) ===
        lastUsedCategories.value
      ) {
        return;
      }

      words.value = useWords(categoryStore.enabledCategories);
    });

    return {
      words,
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
