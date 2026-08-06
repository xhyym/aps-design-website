<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const email = ref("invalid-address");
</script>

<template><AppFormField label="通知邮箱" for="notice-email" label-position="inline" error="请输入有效的邮箱地址"><template #extra><AppButton size="small" variant="text">说明</AppButton></template><AppInput id="notice-email" v-model="email" invalid /></AppFormField></template>
