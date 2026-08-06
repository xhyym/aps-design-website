<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80", alt: "办公空间", title: "研发中心" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80", alt: "团队讨论", title: "项目评审" },
];
</script>

<template>
  <AppButton @click="open = true">查看项目相册</AppButton>
  <AppImageViewer v-model="open" :items="items" @download="(item) => console.info('由业务层下载：', item.src)" />
</template>
