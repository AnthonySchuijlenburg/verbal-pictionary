<script setup lang="ts">
withDefaults(
  defineProps<{
    translationKey: string;
    type?: string;
    required?: boolean;
    maxLength?: string;
  }>(),
  {
    type: "text",
    required: false,
    maxLength: "75",
  },
);

const modelValue = defineModel<string | number | null>();
</script>

<template>
  <div class="flex w-full flex-col">
    <label
      :for="translationKey"
      class="mb-2 block text-sm font-medium text-gray-900"
    >
      {{ $t(`${translationKey}.label`) }}
    </label>
    <input
      v-model="modelValue"
      :name="translationKey"
      :required="required"
      :type="type"
      :maxlength="maxLength"
      :placeholder="$t(`${translationKey}.placeholder`)"
      v-bind="$attrs"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>
</template>
