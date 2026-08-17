<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopconfirm v-model="open" title="提交审核" description="提交后将进入审核队列" confirm-text="提交审核" cancel-text="再想想">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">提交审核</AppButton>
    </template>
  </AppPopconfirm>
</template>
