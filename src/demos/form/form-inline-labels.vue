<script setup lang="ts">
import { ref } from "vue";
import { AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ name: "", email: "" });
const items: FormItem[] = [
  { key: "name", label: "姓名", type: "input", placeholder: "输入姓名", span: 6 },
  { key: "email", label: "邮箱", type: "input", placeholder: "输入邮箱", span: 6 },
];
</script>

<template>
  <AppForm v-model="model" :items="items" label-position="inline" :label-width="'96px'" />
</template>
