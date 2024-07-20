<script setup lang="ts">
const roundStore = useRoundStore();
const router = useRouter();

onMounted(() => {
  if (
    !roundStore.rounds[roundStore.rounds.length - 1] ||
    roundStore.rounds[roundStore.rounds.length - 1]?.finished
  ) {
    roundStore.setNextRound();
  }
});

const round = computed(() => {
  const round = roundStore.rounds[roundStore.rounds.length - 1];

  if (!round) {
    throw new Error("No round found");
  }

  return round;
});

async function finishRound() {
  round.value.finished = true;
  await router.push("/game/select-guessed");
}
</script>

<template>
  <div>
    <div class="mb-4">
      <RoundCounter />
    </div>
    <div class="mb-4">
      <RoundTimer @finished="finishRound" />
    </div>

    <div class="rounded-2xl border p-4">
      <div v-for="(word, index) in round.questions" :key="word.word">
        <h2 class="text-xl font-medium">{{ $t(`words.${word.word}`) }}</h2>
        <hr v-if="index < round.questions.length - 1" class="my-4" />
      </div>
    </div>
  </div>
</template>
