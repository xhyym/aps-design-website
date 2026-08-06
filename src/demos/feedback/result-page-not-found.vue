<script setup lang="ts">
import { AppButton, AppResultPage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResultPage status="404" title="课程不存在" description="它可能已下架，或访问地址有误。">
    <template #actions><AppButton variant="secondary">返回课程列表</AppButton></template>
  </AppResultPage>
</template>
