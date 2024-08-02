<script setup lang="ts">
const wordsStore = useWordsStore();
</script>

<template>
  <div>
    <h1 class="text-2xl font-medium">Words</h1>
    <ul>
      <li v-for="word in wordsStore.words.sort()" :key="word">
        <span class="font-medium">{{ word }}</span> - {{ $t("words." + word) }}
      </li>
    </ul>
  </div>
</template>
