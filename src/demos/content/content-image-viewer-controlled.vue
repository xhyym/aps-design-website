<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const activeIndex = ref(1);
const items: ImageViewerItem[] = [
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80", alt: "桌面工作环境", title: "工程工作台" },
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", alt: "代码编辑器", title: "代码评审" },
];
</script>

<template>
  <AppButton variant="secondary" @click="open = true">从第二张打开</AppButton>
  <AppImageViewer v-model="open" v-model:active-index="activeIndex" :items="items" :infinite="false" :show-thumbnails="false" />
</template>
