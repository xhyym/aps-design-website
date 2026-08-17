<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfirmDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">提交发布</AppButton>
    <AppConfirmDialog v-model="open" title="确认发布" description="发布后将立即对全部用户生效" confirm-text="立即发布" />
  </div>
</template>
