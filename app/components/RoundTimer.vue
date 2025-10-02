<script setup lang="ts">
const roundStore = useRoundStore();
const soundsStore = useSoundsStore();
let interval: NodeJS.Timeout;

const emit = defineEmits<{
  (e: "finished"): void;
}>();

onMounted(() => {
  interval = setInterval(() => {
    const round = roundStore.rounds[roundStore.rounds.length - 1];

    if (!round) {
      clearInterval(interval);
      throw new Error("No round found");
    }

    if (round.timer === 0) {
      clearInterval(interval);
      emit("finished");
      soundsStore.playSound();
    } else {
      round.timer -= 1;
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="rounded-2xl border p-4">
    <div class="flex justify-center">
      <h2 class="text-xl font-medium">
        {{
          $t("round.time", {
            time: roundStore.rounds[roundStore.rounds.length - 1]?.timer || 0,
          })
        }}
      </h2>
    </div>
  </div>
</template>
