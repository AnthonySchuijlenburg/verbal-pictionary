<script setup lang="ts">
const localePath = useLocalePath();

const store = useTeamStore();
</script>

<template>
  <div>
    <div class="mt-4 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-8">
      <TeamCard v-for="team in store.teams" :key="team.id" :team="team" />
      <h2 v-if="store.teams?.length === 0">
        {{ $t("teams.empty") }}
      </h2>
    </div>
    <div class="mt-4 flex justify-center md:mt-8">
      <button
        class="mt-2 cursor-pointer hover:underline"
        @click="store.addTeam"
      >
        {{ $t("teams.add") }}
      </button>
    </div>

    <hr class="my-8" />

    <div class="mt-4 flex justify-center md:mt-8">
      <NuxtLink
        :to="localePath('configuration')"
        class="mt-2 cursor-pointer hover:underline"
      >
        {{ $t("start") }}
      </NuxtLink>
    </div>
  </div>
</template>
