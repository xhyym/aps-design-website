<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("public");
const options = [
  { label: "公开", value: "public", description: "所有人可查看" },
  { label: "组织内", value: "organization", description: "仅成员可查看" },
  { label: "私密", value: "private", description: "仅自己可查看" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" aria-label="可见范围" />
</template>
