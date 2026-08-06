<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppPopover v-model="visible" label="课程说明">
    <template #trigger="{ toggle }"><AppButton variant="secondary" @click="toggle">查看说明</AppButton></template>
    <template #default="{ close }">购买课程后可永久查看全部章节。<AppButton size="small" @click="close">知道了</AppButton></template>
  </AppPopover>
</template>
