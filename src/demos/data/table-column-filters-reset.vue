<script setup lang="ts">
import { ref } from "vue";
import { AppTableColumnFilters, type TableColumnFilterValues } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<TableColumnFilterValues>({ city: ["sh"] });
const fields = [
  { key: "city", label: "城市", options: [{ label: "上海", value: "sh" }, { label: "杭州", value: "hz" }] },
];
const onReset = () => {
  values.value = {};
};
</script>

<template>
  <AppTableColumnFilters v-model="values" :fields="fields" @reset="onReset" />
</template>
