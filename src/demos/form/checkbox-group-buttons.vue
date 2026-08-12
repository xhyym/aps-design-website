<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["push"]);
const options = [
  { label: "推送", value: "push" },
  { label: "邮件", value: "email" },
  { label: "短信", value: "sms" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" appearance="buttons" aria-label="通知方式" />
</template>
