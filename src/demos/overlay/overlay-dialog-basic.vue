<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">新建课程</AppButton>
  <AppDialog v-model="visible" title="新建课程" description="先填写课程的基础信息。">
    课程创建后可以继续补充章节、价格与封面。
    <template #footer><AppButton variant="secondary" @click="visible = false">取消</AppButton><AppButton @click="visible = false">保存草稿</AppButton></template>
  </AppDialog>
</template>
