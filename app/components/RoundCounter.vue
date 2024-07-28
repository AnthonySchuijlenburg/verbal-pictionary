<script setup lang="ts">
const roundStore = useRoundStore();
</script>

<template>
  <div class="rounded-2xl border p-4">
    <div class="flex justify-center">
      <h2 class="text-xl font-medium">
        <ClientOnly>
          {{ $t("round.number", { number: roundStore.roundNumber }) }}
        </ClientOnly>
      </h2>
    </div>
  </div>
</template>
