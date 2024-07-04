<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-10">
    <div class="px-4 mx-auto">
      <div class="flex space-x-4">
        <div>
          <NuxtLink
            :to="localePath('/')"
            class="flex justify-center items-center h-24"
          >
            <h1 class="font-medium text-2xl md:text-4xl">{{ $t("brand") }}</h1>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
