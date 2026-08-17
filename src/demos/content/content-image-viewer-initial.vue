<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://picsum.photos/seed/v7/800/500", alt: "第一张" },
  { src: "https://picsum.photos/seed/v8/800/500", alt: "第二张" },
  { src: "https://picsum.photos/seed/v9/800/500", alt: "第三张" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">从第三张开始</AppButton>
    <AppImageViewer v-model="open" :items="items" :initial-index="2" />
  </div>
</template>
