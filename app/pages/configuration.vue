<script setup lang="ts">
const { t } = useI18n();
const categoryStore = useCategoryStore();
const soundsStore = useSoundsStore();

const ctaLabel = computed(() => {
  return t("start");
});
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

    <hr class="my-8" />

    <div class="flex justify-center mt-4 md:mt-8">
      <NuxtLink
        to="/game/pre-round"
        class="mt-2 cursor-pointer hover:underline"
        @click="soundsStore.initializeSound"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </div>
</template>
