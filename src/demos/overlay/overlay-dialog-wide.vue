<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">查看发布说明</AppButton>
  <AppDialog v-model="visible" title="发布前检查" description="课程将面向所有已购买用户开放。" width="wide" @close="visible = false">
    请确认课程封面、章节视频、价格和售后规则已完成校验。
  </AppDialog>
</template>
