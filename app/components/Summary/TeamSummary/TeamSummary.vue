<script setup lang="ts">
import type { Team } from "~/types/Team";

const roundStore = useRoundStore();

const props = defineProps<{
  team: Team;
}>();

const computedScore = computed(() => {
  let score = 0;

  for (const round of roundStore.rounds.filter(
    (round) => round.teamId === props.team.id,
  )) {
    score += round.questions.filter((question) => question.guessed).length;
  }

  return score;
});
</script>

<template>
  <div class="flex justify-between">
    <span>
      {{ team.name }}
    </span>
    <span>
      {{ computedScore }}
    </span>
  </div>
</template>
