<script setup lang="ts">
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: CarouselItem[] = [
  { key: "one", src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80", alt: "办公桌上的显示器", title: "系统公告" },
  { key: "two", src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80", alt: "会议室", title: "活动报名" },
];
</script>

<template><AppCarousel :items="items" autoplay :interval="2600" :show-arrows="false" aria-label="本周推荐内容" /></template>
