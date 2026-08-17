<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">编辑资料</AppButton>
    <AppDialog v-model="open" title="编辑资料" description="请完善以下信息">
      <p>表单内容区域</p>
      <template #footer>
        <AppButton size="small" variant="text" @click="open = false">取消</AppButton>
        <AppButton size="small" @click="open = false">保存</AppButton>
      </template>
    </AppDialog>
  </div>
</template>
