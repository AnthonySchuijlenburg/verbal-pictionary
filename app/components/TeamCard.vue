<script setup lang="ts">
import type { Team } from "~/types/Team";

defineProps<{
  team: Team;
}>();

const emit = defineEmits<{
  (e: "saveTeamName", value: string): void;
  (e: "deleteTeam"): void;
  (e: "addPlayer"): void;
  (e: "savePlayerName", index: number, value: string): void;
  (e: "deletePlayer", index: number): void;
}>();
</script>

<template>
  <div class="rounded-2xl border p-4">
    <div class="border-b pb-2">
      <InputOrDisplay
        :input-value="team.name"
        @update="(value: string) => emit('saveTeamName', value)"
        @delete="emit('deleteTeam')"
      >
        <h3 class="text-xl">{{ team.name }}</h3>
      </InputOrDisplay>
    </div>
    <ol class="mt-4 flex flex-col gap-2 pb-4 border-b">
      <template v-for="(player, index) in team.players" :key="player">
        <InputOrDisplay
          :input-value="player"
          @update="(value: string) => emit('savePlayerName', index, value)"
          @delete="emit('deletePlayer', index)"
        >
          <li class="ml-6 pl-4 list-decimal">
            {{ player }}
          </li>
        </InputOrDisplay>
      </template>
      <li v-if="team.players.length === 0">
        {{ $t("players.empty") }}
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
