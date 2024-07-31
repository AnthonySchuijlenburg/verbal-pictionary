<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const teamStore = useTeamStore();
const soundsStore = useSoundsStore();

const ctaLabel = computed(() => {
  return t("round.next");
});
</script>

<template>
  <div>
    <div class="mb-4">
      <RoundCounter />
    </div>

    <div>
      <h2 class="text-2xl mb-4">{{ $t("round.summary") }}</h2>
      <ul>
        <li v-for="team in teamStore.teams" :key="team.id">
          <SummaryTeamSummary :team="team" />
        </li>
      </ul>
    </div>
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
