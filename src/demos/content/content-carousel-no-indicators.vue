<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(0);
const items: CarouselItem[] = [
  { key: "p1", src: "https://picsum.photos/seed/p1/600/300", alt: "图一" },
  { key: "p2", src: "https://picsum.photos/seed/p2/600/300", alt: "图二" },
];
</script>

<template>
  <AppCarousel v-model="index" :items="items" :show-indicators="false" />
</template>
