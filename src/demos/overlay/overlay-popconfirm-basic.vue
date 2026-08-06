<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppPopconfirm v-model="visible" title="移除成员？" description="成员将失去工作区的访问权限。" danger @confirm="visible = false">
    <template #trigger="{ toggle }"><AppButton variant="danger" @click="toggle">移除成员</AppButton></template>
  </AppPopconfirm>
</template>
