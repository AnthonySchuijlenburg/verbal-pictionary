<script setup lang="ts">
const categoryStore = useCategoryStore();
const wordsStore = useWordsStore();
</script>

<template>
  <div>
    <CategoryFilter
      v-for="(category, key) of categoryStore.enabledCategories"
      :key="key"
      :category="key"
      :filters="category"
    />

    {{ wordsStore.words }}
  </div>
</template>
