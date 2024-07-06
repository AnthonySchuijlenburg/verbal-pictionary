<script setup lang="ts">
// const gameStore = useGameStore();
const wordsStore = useCategoryStore();
const words = computed(() => {
  return useWords(wordsStore.enabledCategories);
});
</script>

<template>
  <div>
    {{ words }}
  </div>
</template>
