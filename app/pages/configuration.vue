<script setup lang="ts">
const categoryStore = useCategoryStore();
const words = computed(() => {
  return useWords(categoryStore.enabledCategories);
});
</script>

<template>
  <div>
    <CategoryFilter
      v-for="category of Object.keys(categoryStore.enabledCategories)"
      :key="category"
      :category="category"
      :filters="categoryStore.enabledCategories[category]"
    />

    {{ words }}
  </div>
</template>
