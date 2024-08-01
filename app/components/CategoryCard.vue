<script setup lang="ts">
import type { Filter, Filters } from "~/types/Filter";

const categoryStore = useCategoriesStore();
const { t, te } = useI18n();

const detailsOpened = ref<boolean>(false);

const props = defineProps<{
  category: keyof Filters;
  filters: Filter;
}>();

function setCategory(event: Event, difficulty: keyof Filter) {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked;
  categoryStore.setCategory(props.category, difficulty, isChecked);
}

const allSelected = computed({
  get() {
    return Object.values(props.filters).every((filter) => filter);
  },
  set(value: boolean) {
    for (const key in props.filters) {
      categoryStore.setCategory(props.category, key as keyof Filter, value);
    }
  },
});

const noneSelected = computed(() => {
  return Object.values(props.filters).every((filter) => !filter);
});

const categoryLabel = computed(() => {
  const category = te(`categories.${props.category}`)
    ? t(`categories.${props.category}`)
    : props.category;

  return t("difficulties.all", { category: category });
});
</script>

<template>
  <div class="rounded-2xl border p-4" :class="{ 'bg-gray-100': noneSelected }">
    <div
      class="flex justify-between"
      :class="{ 'border-b pb-4 ': detailsOpened }"
    >
      <label class="flex justify-center items-center gap-2">
        <input
          v-model="allSelected"
          :indeterminate.prop="!allSelected && !noneSelected"
          type="checkbox"
          class="cursor-pointer"
        />
        {{ categoryLabel }}
      </label>
      <button
        class="flex justify-center items-center"
        type="button"
        @click="detailsOpened = !detailsOpened"
      >
        <IconChevronDown v-if="!detailsOpened" />
        <IconChevronUp v-else />
      </button>
    </div>
    <div v-if="detailsOpened" class="mt-4 flex flex-col gap-2 pb-4">
      <label v-for="(filter, key) of filters" :key="key" class="pl-2">
        <input
          type="checkbox"
          :checked="filter"
          class="cursor-pointer"
          @change="setCategory($event, key)"
        />
        {{ $t(`difficulties.${key}`) }}
      </label>
    </div>
  </div>
</template>
