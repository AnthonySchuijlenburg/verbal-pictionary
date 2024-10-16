<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const categoriesStore = useCategoriesStore();
const roundStore = useRoundStore();
const teamStore = useTeamStore();

const sections = ["discover", "why", "open_source"];

const isReset = ref<boolean>(roundStore.rounds.length === 0);

function reset() {
  categoriesStore.resetCategories();
  roundStore.resetRounds();
  teamStore.resetTeams();
  isReset.value = true;
}
</script>

<template>
  <div>
    <div v-for="section in sections" :key="section" class="mb-8">
      <h2 class="text-xl font-medium mb-2">
        {{ $t(`homepage.${section}.title`) }}
      </h2>
      <p>{{ $t(`homepage.${section}.content`) }}</p>
    </div>

    <hr class="my-8" />

    <div class="flex justify-center gap-8 mt-4 md:mt-8">
      <NuxtLink
        :to="localePath('/teams')"
        class="mt-2 cursor-pointer hover:underline border p-2 rounded"
      >
        {{ t("start") }}
      </NuxtLink>
      <button
        v-if="!isReset"
        class="mt-2 cursor-pointer hover:underline border p-2 rounded"
        @click="reset"
      >
        {{ t("reset") }}
      </button>
    </div>
  </div>
</template>
