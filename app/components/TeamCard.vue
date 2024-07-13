<script setup lang="ts">
import type { Team } from "~/types/Team";

const teamStore = useTeamStore();

defineProps<{
  team: Team;
}>();
</script>

<template>
  <div class="rounded-2xl border p-4">
    <div class="border-b pb-2">
      <InputOrDisplay
        :input-value="team.name"
        @update="(value: string) => teamStore.saveTeamName(team, value)"
        @delete="teamStore.deleteTeam(team.id)"
      >
        <h3 class="text-xl">{{ team.name }}</h3>
      </InputOrDisplay>
    </div>
    <ol class="mt-4 flex flex-col gap-2 pb-4 border-b">
      <template v-for="player in team.players" :key="player.id">
        <InputOrDisplay
          :input-value="player.name"
          @update="
            (value: string) => teamStore.savePlayerName(team, player.id, value)
          "
          @delete="teamStore.deletePlayer(team, player.id)"
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
        @click="teamStore.addPlayer(team)"
      >
        {{ $t("players.add") }}
      </button>
    </div>
  </div>
</template>
