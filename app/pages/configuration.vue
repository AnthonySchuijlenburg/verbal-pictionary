<script setup lang="ts">
const categoryStore = useCategoryStore();
const wordsStore = useWordsStore();
</script>

<template>
  <div>
    <div class="grid gap-4 md:grid-cols-2 md:gap-8 mt-4 md:mt-8">
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
