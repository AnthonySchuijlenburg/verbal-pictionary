<script setup lang="ts">
const categoryStore = useCategoryStore();
const wordsStore = useWordsStore();
</script>

<template>
  <div>
    <CategoryFilter
      v-for="category of Object.keys(categoryStore.enabledCategories)"
      :key="category"
      :category="category"
      :filters="categoryStore.enabledCategories[category]"
    />

    {{ wordsStore.words }}
  </div>
</template>
