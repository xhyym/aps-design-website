<script setup lang="ts">
import { AppButton, AppResult } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResult status="warning" title="有 3 位学员尚未导入" description="可以先返回继续编辑，或直接提交当前名单。">
    <template #actions>
      <AppButton variant="secondary">继续编辑</AppButton>
      <AppButton>继续提交</AppButton>
    </template>
  </AppResult>
</template>
