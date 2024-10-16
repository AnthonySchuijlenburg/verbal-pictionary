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
        class="w-full h-3 bg-gray-200 rounded-lg border-0 cursor-pointer"
      />
      <span
        class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6"
      >
        {{ $t("rounds.min") }}
      </span>
      <span
        class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6"
        >{{ $t("rounds.max", { rounds: possibleRounds }) }}</span
      >
    </div>

    <hr class="my-8" />

    <div class="flex justify-center mt-4 md:mt-8">
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
