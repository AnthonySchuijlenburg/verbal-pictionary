<script setup lang="ts">
const roundStore = useRoundStore();
</script>

<template>
  <div class="rounded-2xl border p-4">
    <div class="flex justify-center">
      <h2 class="text-xl font-medium">
        {{ $t("round.number", { number: roundStore.roundNumber }) }}
      </h2>
    </div>
  </div>
</template>
