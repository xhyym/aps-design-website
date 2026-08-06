<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

/** 示例仅反馈操作已触发；实际保存逻辑由业务页面注入。 */
function saveCourseDraft(): void {
  console.info("已触发保存课程草稿操作");
}
</script>

<template>
  <div class="button-demo-actions">
    <AppButton leading-icon="plus" @click="saveCourseDraft">新建课程</AppButton>
    <AppButton variant="secondary" @click="saveCourseDraft">保存草稿</AppButton>
  </div>
</template>

<style scoped>
.button-demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
