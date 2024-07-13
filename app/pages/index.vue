<script setup lang="ts">
const { t } = useI18n();

const ctaLabel = computed(() => {
  return t("start");
});

const sections = ["discover", "why", "open_source"];
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

    <div class="flex justify-center mt-4 md:mt-8">
      <NuxtLink to="/teams" class="mt-2 cursor-pointer hover:underline">
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </div>
</template>
