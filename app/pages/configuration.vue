<script setup lang="ts">
const categoryStore = useCategoryStore();
const wordsStore = useWordsStore();
</script>

<template>
  <div>
    <div class="border-b-2 pb-8 flex flex-col gap-4 items-center md:flex-row">
      <DifficultySelector
        v-model="categoryStore.allEasy"
        translation-key="difficulties.easy"
      />

      <DifficultySelector
        v-model="categoryStore.allMedium"
        translation-key="difficulties.medium"
      />

      <DifficultySelector
        v-model="categoryStore.allHard"
        translation-key="difficulties.hard"
      />
    </div>
    <div class="grid gap-4 md:grid-cols-2 md:gap-8 mt-8">
      <CategoryCard
        v-for="(category, key) of categoryStore.enabledCategories"
        :key="key"
        :category="key"
        :filters="category"
      />
    </div>

    {{ wordsStore.words }}
  </div>
</template>
