<script setup lang="ts">
import type { Filter, Filters } from "~/types/Filter";

const categoryStore = useCategoryStore();

const props = defineProps<{
  category: keyof Filters;
  filters: Filter | undefined;
}>();

function setCategory(event: Event, difficulty: keyof Filter) {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked;
  categoryStore.setCategory(props.category, difficulty, isChecked);
}
</script>

<template>
  <div>
    <h2>{{ category }}</h2>
    <div v-if="filters">
      <label v-for="(filter, key) of filters" :key="key">
        <input
          type="checkbox"
          :checked="filter"
          @change="setCategory($event, key)"
        />
        {{ filter }}
      </label>
    </div>
  </div>
</template>
