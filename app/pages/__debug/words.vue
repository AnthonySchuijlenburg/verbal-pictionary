<script setup lang="ts">
const wordsStore = useWordsStore();
const categoriesStore = useCategoriesStore();

const categories = useCategories();

onBeforeMount(() => {
  // toggle all categories
  categoriesStore.allEasy = false;
  categoriesStore.allMedium = false;
  categoriesStore.allHard = false;

  categoriesStore.allEasy = true;
  categoriesStore.allMedium = true;
  categoriesStore.allHard = true;
});
</script>

<template>
  <div>
    <h1 class="text-2xl">Categories</h1>
    <ul>
      <li v-for="category in Object.keys(categories)" :key="category">
        <span class="font-bold">{{ category }}</span> -
        {{ $t("categories." + category) }}
      </li>
    </ul>
    <h1 class="text-2xl">Words</h1>
    <ul>
      <li v-for="word in wordsStore.words.sort()" :key="word">
        <span class="font-bold">{{ word }}</span> - {{ $t("words." + word) }}
      </li>
    </ul>
  </div>
</template>
