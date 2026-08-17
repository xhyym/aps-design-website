<script setup lang="ts">
import { ref } from "vue";
import { AppTableColumnFilters, type TableColumnFilterValues } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<TableColumnFilterValues>({});
const fields = [
  { key: "level", label: "等级", options: [{ label: "L1", value: "l1" }, { label: "L2", value: "l2" }] },
];
const onChange = (v: TableColumnFilterValues) => {
  console.log("filters changed", v);
};
</script>

<template>
  <AppTableColumnFilters v-model="values" :fields="fields" @change="onChange" />
</template>
