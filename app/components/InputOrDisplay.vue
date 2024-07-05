<script setup lang="ts">
const editing = ref<boolean>(false);
const props = defineProps<{
  inputValue: string;
}>();

const modelValue = ref<string>(props.inputValue);

watch(
  () => props.inputValue,
  () => {
    modelValue.value = props.inputValue;
  },
);

const emit = defineEmits<{
  (e: "update", value: string): void;
}>();
</script>

<template>
  <div class="flex justify-between align-center gap-4">
    <template v-if="editing">
      <form class="w-full" @submit.prevent="emit('update', modelValue)">
        <StyledInput v-model="modelValue" translation-key="teams.input" />
      </form>
    </template>
    <div v-else>
      <slot />
    </div>
    <div class="flex gap-2" :class="{ 'items-end pb-2': editing }">
      <button @click="editing = !editing">
        <IconPencil v-if="!editing" />
        <IconSave v-else @click="emit('update', modelValue)" />
      </button>
      <button>
        <IconTrash />
      </button>
    </div>
  </div>
</template>
