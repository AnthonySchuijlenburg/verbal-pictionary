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
  <div class="flex flex-col w-full">
    <label
      :for="translationKey"
      class="block mb-2 text-sm font-medium text-gray-900"
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
      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />
  </div>
</template>
