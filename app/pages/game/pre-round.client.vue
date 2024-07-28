<script setup lang="ts">
const { t } = useI18n();
const roundStore = useRoundStore();
const teamStore = useTeamStore();

onBeforeMount(() => {
  if (
    !roundStore.rounds[roundStore.rounds.length - 1] ||
    roundStore.rounds[roundStore.rounds.length - 1]?.finished
  ) {
    roundStore.setNextRound();
  }
});

const team = computed(() => {
  const round = roundStore.rounds[roundStore.rounds.length - 1];

  if (!round) {
    throw new Error("No round found");
  }

  return teamStore.getTeam(round.teamId);
});

const selectedPlayer = computed(() => {
  return team.value.players[
    Math.round(Math.random() * team.value.players.length)
  ]?.name;
});

const ctaLabel = computed(() => {
  return t("start");
});
</script>

<template>
  <div>
    <div class="mb-4">
      <RoundCounter />
    </div>

    <div>
      <h2 class="text-2xl mb-4">{{ $t("pre_round.caution") }}</h2>
      <ul class="mb-8">
        <li v-for="player in team.players" :key="player.id" class="ml-4">
          {{ player.name }}
        </li>
      </ul>
    </div>

    <div>
      <h2 class="text-2xl mb-4">
        {{ $t("pre_round.next", { name: selectedPlayer }) }}
      </h2>
    </div>

    <div class="flex justify-center mt-4 md:mt-8">
      <NuxtLink to="/game/round" class="mt-2 cursor-pointer hover:underline">
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </div>
</template>
