<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("standard");
const options = [
  { label: "标准版", value: "standard" },
  { label: "团队版", value: "team" },
  { label: "企业版", value: "enterprise" },
  { label: "旗舰版", value: "ultimate" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" :columns="2" aria-label="套餐类型" />
</template>
