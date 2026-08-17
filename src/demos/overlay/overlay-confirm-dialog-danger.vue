<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfirmDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton tone="danger" @click="open = true">删除项目</AppButton>
    <AppConfirmDialog v-model="open" title="删除项目" description="删除后不可恢复，请谨慎操作" confirm-text="删除" danger />
  </div>
</template>
