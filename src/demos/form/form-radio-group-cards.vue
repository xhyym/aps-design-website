<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("standard");
const options = [
  { label: "标准版", value: "standard", description: "适合个人学习" },
  { label: "团队版", value: "team", description: "支持成员协作" },
  { label: "企业版", value: "enterprise", description: "支持组织管控" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" appearance="cards" :columns="3" aria-label="套餐类型" />
</template>
