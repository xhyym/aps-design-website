<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfirmDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton variant="danger" @click="visible = true">删除课程</AppButton>
  <AppConfirmDialog v-model="visible" title="确认删除课程？" description="删除后无法恢复课程与章节内容。" confirm-text="确认删除" danger @confirm="visible = false" />
</template>
