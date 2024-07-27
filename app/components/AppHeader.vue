<template>
  <nav class="bg-white shadow-md sticky top-0 z-10">
    <div class="w-full max-w-3xl px-6 md:max-w-4xl lg:px-0 mx-auto">
      <div class="flex space-x-4">
        <div class="flex justify-center items-center h-24">
          <NuxtLink to="/">
            <h1 class="font-medium text-2xl md:text-4xl">{{ $t("brand") }}</h1>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
