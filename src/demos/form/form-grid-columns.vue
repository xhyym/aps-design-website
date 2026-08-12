<script setup lang="ts">
import { ref } from "vue";
import { AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ a: "", b: "", c: "", d: "" });
const items: FormItem[] = [
  { key: "a", label: "字段 A", type: "input", span: 1 },
  { key: "b", label: "字段 B", type: "input", span: 1 },
  { key: "c", label: "字段 C", type: "input", span: 1 },
  { key: "d", label: "字段 D", type: "input", span: 1 },
];
</script>

<template>
  <AppForm v-model="model" :items="items" :columns="2" :gap="20" />
</template>
