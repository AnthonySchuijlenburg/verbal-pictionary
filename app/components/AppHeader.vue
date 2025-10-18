<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
const route = useRoute();
</script>

<template>
  <nav class="sticky top-0 z-10 bg-white shadow-md">
    <div class="mx-auto w-full max-w-3xl px-6 md:max-w-4xl lg:px-0">
      <div class="flex justify-between space-x-4">
        <div class="flex h-24 items-center justify-center">
          <NuxtLink :to="localePath('/')">
            <h1 class="text-2xl font-medium md:text-4xl">{{ $t("brand") }}</h1>
          </NuxtLink>
        </div>
        <div
          v-if="!route.fullPath.includes('/game/round')"
          class="flex items-center justify-center gap-4"
        >
          <button
            class="rounded border px-2 py-1"
            :class="{ 'border-blue-800': locale === 'en' }"
          >
            <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
          </button>
          <button
            class="rounded border px-2 py-1"
            :class="{ 'border-blue-800': locale === 'nl' }"
          >
            <NuxtLink :to="switchLocalePath('nl')">Nederlands</NuxtLink>
          </button>
          <button
            class="rounded border px-2 py-1"
            :class="{ 'border-blue-800': locale === 'pl' }"
          >
            <NuxtLink :to="switchLocalePath('pl')">Polski</NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
