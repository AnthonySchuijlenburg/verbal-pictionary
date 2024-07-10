import { defineStore } from "pinia";

export const useWordsStore = defineStore("words", () => {
  const categoryStore = useCategoryStore();
  const lastUsedCategories = ref<string>(
    JSON.stringify(categoryStore.enabledCategories),
  );

  const words = ref<string[]>(useWords(categoryStore.enabledCategories));

  watch(categoryStore.enabledCategories, (filters) => {
    if (JSON.stringify(filters) === lastUsedCategories.value) {
      return;
    }

    lastUsedCategories.value = JSON.stringify(filters);
    words.value = useWords(filters);
  });

  return {
    words,
  };
});
