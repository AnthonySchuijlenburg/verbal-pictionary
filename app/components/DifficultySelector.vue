<script setup lang="ts">
defineProps<{
  translationKey: string;
}>();

const modelValue = defineModel<boolean>();
</script>

<template>
  <div
    class="w-full rounded-2xl border p-4"
    :class="{ 'bg-gray-100': !modelValue }"
  >
    <div class="flex justify-between">
      <label class="flex items-center justify-center gap-2">
        <input v-model="modelValue" type="checkbox" class="cursor-pointer" />
        {{ $t(translationKey) }}
      </label>
    </div>
  </div>
</template>
