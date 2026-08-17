<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(0);
const items: CarouselItem[] = [
  { key: "x", src: "https://picsum.photos/seed/x1/400/260", alt: "纵向一" },
  { key: "y", src: "https://picsum.photos/seed/y2/400/260", alt: "纵向二" },
];
</script>

<template>
  <AppCarousel v-model="index" :items="items" direction="vertical" style="max-width: 400px" />
</template>
