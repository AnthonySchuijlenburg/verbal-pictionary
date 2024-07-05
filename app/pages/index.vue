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
        @add-player="store.addPlayer(team)"
        @save-team-name="(value: string) => store.saveTeamName(team, value)"
      />
    </div>
    <div class="flex justify-center mt-4 md:mt-8">
      <button
        class="mt-2 cursor-pointer hover:underline"
        @click="store.addTeam"
      >
        {{ $t("teams.add") }}
      </button>
    </div>
  </div>
</template>
