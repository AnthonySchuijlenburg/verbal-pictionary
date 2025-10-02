<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const roundStore = useRoundStore();
const teamStore = useTeamStore();
const soundsStore = useSoundsStore();

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
  const rounds: number = roundStore.rounds.filter(
    (round) => round.teamId === team.value.id,
  ).length;

  const player = team.value.players[rounds % team.value.players.length]?.name;

  return player ?? team.value.players[0]?.name;
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
      <h2 class="mb-4 text-2xl">{{ $t("pre_round.caution") }}</h2>
      <ul class="mb-8">
        <li v-for="player in team.players" :key="player.id" class="ml-4">
          {{ player.name }}
        </li>
      </ul>
    </div>

    <div>
      <h2 class="mb-4 text-2xl">
        {{ $t("pre_round.next", { name: selectedPlayer }) }}
      </h2>
    </div>

    <div class="mt-4 flex justify-center md:mt-8">
      <NuxtLink
        :to="localePath('/game/round')"
        class="mt-2 cursor-pointer hover:underline"
        @click="soundsStore.initializeSound"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </div>
</template>
