<script setup lang="ts">
import TeamCard from "~/components/TeamCard.vue";

const store = useGameStore();
</script>

<template>
  <div>
    <div class="grid gap-4 md:grid-cols-2 md:gap-8 mt-4 md:mt-8">
      <TeamCard
        v-for="team in store.teams"
        :key="team.name"
        :team="team"
        @save-team-name="(value: string) => store.saveTeamName(team, value)"
        @delete-team="store.deleteTeam(team)"
        @add-player="store.addPlayer(team)"
        @save-player-name="
          (index: number, value: string) =>
            store.savePlayerName(team, index, value)
        "
        @delete-player="(index: number) => store.deletePlayer(team, index)"
      />
      <h2 v-if="store.teams.length === 0">
        {{ $t("teams.empty") }}
      </h2>
    </div>
    <div class="flex justify-center mt-4 md:mt-8">
      <button
        class="mt-2 cursor-pointer hover:underline"
        @click="store.addTeam"
      >
        {{ $t("teams.add") }}
      </button>
    </div>

    <hr class="my-8" />

    <div class="flex justify-center mt-4 md:mt-8">
      <button class="mt-2 cursor-pointer hover:underline">
        {{ $t("start") }}
      </button>
    </div>
  </div>
</template>
