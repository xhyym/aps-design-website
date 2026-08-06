<script setup lang="ts">
import { AppBackToTop, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

function scrollPreview(): void {
  document.querySelector(".document-main")?.scrollTo({ top: 900, behavior: "smooth" });
}
</script>

<template>
  <AppButton variant="secondary" @click="scrollPreview">滚动文档区域后查看按钮</AppButton>
  <AppBackToTop :threshold="320" label="回到文档顶部" />
</template>
