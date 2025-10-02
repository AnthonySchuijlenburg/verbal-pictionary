<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const teamStore = useTeamStore();
const soundsStore = useSoundsStore();
const roundStore = useRoundStore();

const ctaLabel = computed(() => {
  return finalRound.value ? t("round.done") : t("round.next");
});

const finalRound = computed(() => {
  return (
    roundStore.rounds.length >= roundStore.maxRound * teamStore.teams.length
  );
});
</script>

<template>
  <div>
    <div class="mb-4">
      <RoundCounter />
    </div>

    <div>
      <h2 class="mb-4 text-2xl">
        {{ finalRound ? $t("round.result") : $t("round.summary") }}
      </h2>
      <ul>
        <li v-for="team in teamStore.teams" :key="team.id">
          <SummaryTeamSummary :team="team" />
        </li>
      </ul>
    </div>
    <div class="mt-4 flex justify-center md:mt-8">
      <NuxtLink
        :to="finalRound ? localePath('/') : localePath('/game/pre-round')"
        class="mt-2 cursor-pointer hover:underline"
        @click="soundsStore.initializeSound"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </div>
</template>
