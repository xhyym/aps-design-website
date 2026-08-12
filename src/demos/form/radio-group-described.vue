<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("push");
const options = [
  { label: "站内信", value: "push", description: "实时性强" },
  { label: "邮件", value: "email", description: "适合摘要" },
  { label: "短信", value: "sms", description: "触达率高" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" appearance="cards" :columns="3" aria-label="通知渠道" />
</template>
