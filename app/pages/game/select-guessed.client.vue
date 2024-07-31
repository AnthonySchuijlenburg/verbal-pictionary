<script setup lang="ts">
const { t } = useI18n();

const roundStore = useRoundStore();
const localePath = useLocalePath();

const round = computed(() => {
  const round = roundStore.rounds[roundStore.rounds.length - 1];

  if (!round) {
    throw new Error("No round found");
  }

  return round;
});

const ctaLabel = computed(() => {
  return t("round.next");
});
</script>

<template>
  <div>
    <div class="mb-4">
      <RoundCounter />
    </div>

    <div class="rounded-2xl border p-4">
      <div v-for="(word, index) in round.questions" :key="word.word">
        <div
          class="flex justify-between cursor-pointer"
          @click="word.guessed = !word.guessed"
        >
          <h2 class="text-xl font-medium">{{ $t(`words.${word.word}`) }}</h2>
          <input
            v-model="word.guessed"
            type="checkbox"
            class="cursor-pointer"
          />
        </div>

        <hr v-if="index < round.questions.length - 1" class="my-4" />
      </div>
    </div>

    <div class="flex justify-center mt-4 md:mt-8">
      <NuxtLink
        :to="localePath('/game/overview')"
        class="mt-2 cursor-pointer hover:underline"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </div>
</template>
