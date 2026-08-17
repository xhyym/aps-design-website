<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://picsum.photos/seed/v3/800/500", alt: "纯展示图" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">查看原图</AppButton>
    <AppImageViewer v-model="open" :items="items" :show-toolbar="false" />
  </div>
</template>
