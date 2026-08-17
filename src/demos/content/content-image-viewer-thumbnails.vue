<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://picsum.photos/seed/v1/800/500", alt: "风光一" },
  { src: "https://picsum.photos/seed/v2/800/500", alt: "风光二" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">打开预览</AppButton>
    <AppImageViewer v-model="open" :items="items" show-thumbnails />
  </div>
</template>
