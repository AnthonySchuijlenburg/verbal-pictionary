<script setup lang="ts">
import type { Team } from "~/types/Team";

defineProps<{
  team: Team;
}>();

const emit = defineEmits<{
  (e: "addPlayer"): void;
  (e: "saveTeamName", value: string): void;
}>();
</script>

<template>
  <div class="rounded-2xl border p-4">
    <div class="border-b pb-2">
      <InputOrDisplay
        :input-value="team.name"
        @update="(value: string) => emit('saveTeamName', value)"
      >
        <h3 class="text-xl">{{ team.name }}</h3>
      </InputOrDisplay>
    </div>
    <ol class="mt-4 flex flex-col gap-2 pb-4 border-b">
      <li
        v-for="player in team.players"
        :key="player"
        class="ml-6 pl-4 list-decimal"
      >
        {{ player }}
      </li>
    </ol>
    <div class="flex justify-center">
      <button
        class="mt-2 cursor-pointer hover:underline"
        @click="emit('addPlayer')"
      >
        {{ $t("players.add") }}
      </button>
    </div>
  </div>
</template>
