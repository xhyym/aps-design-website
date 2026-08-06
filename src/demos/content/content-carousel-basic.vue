<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeIndex = ref(0);
const items: CarouselItem[] = [
  { key: "design", src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80", alt: "团队讨论设计方案", title: "设计协作", description: "让产品、设计与研发保持同一节奏。" },
  { key: "code", src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", alt: "笔记本电脑上的代码", title: "工程交付", description: "将稳定的组件能力接入每个业务场景。" },
];
</script>

<template><AppCarousel v-model="activeIndex" :items="items" @change="(_, item) => console.info('已切换轮播项：', item?.key)" /></template>
