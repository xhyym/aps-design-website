<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(1);
const items: CarouselItem[] = [
  { key: "a", src: "https://picsum.photos/seed/a1/600/300", alt: "第一张" },
  { key: "b", src: "https://picsum.photos/seed/b2/600/300", alt: "第二张" },
  { key: "c", src: "https://picsum.photos/seed/c3/600/300", alt: "第三张" },
];
</script>

<template>
  <div>
    <AppCarousel v-model="index" :items="items" />
    <div class="bar">
      <AppButton size="small" @click="index = 0">第一张</AppButton>
      <AppButton size="small" @click="index = 1">第二张</AppButton>
      <AppButton size="small" @click="index = 2">第三张</AppButton>
    </div>
  </div>
</template>

<style scoped>
.bar { display: flex; gap: 8px; margin-top: 10px; }
</style>
