<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const categoriesStore = useCategoriesStore();
const roundStore = useRoundStore();
const teamStore = useTeamStore();
const wordsStore = useWordsStore();

const sections = ["discover", "why", "open_source"];

const isReset = ref<boolean>(roundStore.rounds.length === 0);

function reset() {
  categoriesStore.resetCategories();
  roundStore.resetRounds();
  teamStore.resetTeams();
  wordsStore.resetSeenWords();
  isReset.value = true;
}

const finalRound = computed(() => {
  return (
    roundStore.rounds.length !== 0 &&
    roundStore.rounds.length >= roundStore.maxRound * teamStore.teams.length
  );
});
</script>

<template>
  <div>
    <div v-for="section in sections" :key="section" class="mb-8">
      <h2 class="mb-2 text-xl font-medium">
        {{ $t(`homepage.${section}.title`) }}
      </h2>
      <p>{{ $t(`homepage.${section}.content`) }}</p>
    </div>

    <hr class="my-8" />

    <ClientOnly>
      <div class="mt-4 flex justify-center gap-8 md:mt-8">
        <NuxtLink
          v-if="!finalRound"
          :to="localePath('/teams')"
          class="mt-2 cursor-pointer rounded border p-2 hover:underline"
        >
          {{ t("start") }}
        </NuxtLink>
        <button
          v-if="!isReset"
          class="mt-2 cursor-pointer rounded border p-2 hover:underline"
          @click="reset"
        >
          {{ t("reset") }}
        </button>
      </div>
    </ClientOnly>
  </div>
</template>
