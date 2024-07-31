<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-10">
    <div class="w-full max-w-3xl px-6 md:max-w-4xl lg:px-0 mx-auto">
      <div class="flex justify-between space-x-4">
        <div class="flex justify-center items-center h-24">
          <NuxtLink :to="localePath('/')">
            <h1 class="font-medium text-2xl md:text-4xl">{{ $t("brand") }}</h1>
          </NuxtLink>
        </div>
        <div class="flex justify-center items-center gap-4">
          <button
            class="border rounded px-2 py-1"
            :class="{ 'border-blue-800': locale === 'en' }"
          >
            <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
          </button>
          <button
            class="border rounded px-2 py-1"
            :class="{ 'border-blue-800': locale === 'nl' }"
          >
            <NuxtLink :to="switchLocalePath('nl')">Nederlands</NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
