<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://picsum.photos/seed/v4/800/500", alt: "图 A" },
  { src: "https://picsum.photos/seed/v5/800/500", alt: "图 B" },
  { src: "https://picsum.photos/seed/v6/800/500", alt: "图 C" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">打开循环预览</AppButton>
    <AppImageViewer v-model="open" :items="items" :infinite="false" />
  </div>
</template>
