<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(0);
const items: CarouselItem[] = [
  { key: "l1", src: "https://picsum.photos/seed/l1/600/300", alt: "页面一" },
  { key: "l2", src: "https://picsum.photos/seed/l2/600/300", alt: "页面二" },
  { key: "l3", src: "https://picsum.photos/seed/l3/600/300", alt: "页面三" },
];
</script>

<template>
  <AppCarousel v-model="index" :items="items" :loop="false" />
</template>
