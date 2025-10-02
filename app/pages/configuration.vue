<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const categoryStore = useCategoriesStore();
const wordsStore = useWordsStore();
const teamsStore = useTeamStore();
const roundStore = useRoundStore();
const soundsStore = useSoundsStore();

const ctaLabel = computed(() => {
  return t("start");
});

const possibleRounds = computed(() => {
  return Math.floor(wordsStore.words.length / teamsStore.teams.length / 5);
});

watch(possibleRounds, () => {
  if (roundStore.maxRound === 0 || roundStore.maxRound > possibleRounds.value) {
    roundStore.maxRound = possibleRounds.value;
  }
});
</script>

<template>
  <div>
    <div class="flex flex-col items-center gap-4 border-b-2 pb-8 md:flex-row">
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
    <div class="mt-8 grid gap-4 md:grid-cols-2 md:gap-8">
      <CategoryCard
        v-for="(category, key) of categoryStore.enabledCategories"
        :key="key"
        :category="key"
        :filters="category"
      />
    </div>

    <hr class="my-8" />

    <ClientOnly>
      <div class="relative">
        <label for="labels-range-input">
          {{ $t("rounds.label") }}: {{ roundStore.maxRound }}
        </label>
        <input
          id="labels-range-input"
          v-model="roundStore.maxRound"
          type="range"
          min="1"
          :max="possibleRounds"
          class="h-3 w-full cursor-pointer rounded-lg border-0 bg-gray-200"
        />
        <span
          class="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400"
        >
          {{ $t("rounds.min") }}
        </span>
        <span
          class="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400"
          >{{ $t("rounds.max", { rounds: possibleRounds }) }}</span
        >
      </div>
    </ClientOnly>

    <hr class="my-8" />

    <div class="mt-4 flex justify-center md:mt-8">
      <NuxtLink
        :to="localePath('/game/pre-round')"
        class="mt-2 cursor-pointer hover:underline"
        @click="soundsStore.initializeSound"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </div>
</template>
