<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, AppTag, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(0);
const items: CarouselItem[] = [
  { key: "one", src: "https://picsum.photos/seed/o1/600/300", alt: "推广一", title: "夏季大促", description: "全场 8 折起" },
  { key: "two", src: "https://picsum.photos/seed/o2/600/300", alt: "推广二", title: "新品首发", description: "会员优先购" },
];
</script>

<template>
  <AppCarousel v-model="index" :items="items">
    <template #slide="{ item }">
      <div class="slide">
        <img :src="item.src" :alt="item.alt" />
        <div class="meta">
          <AppTag tone="orange">{{ item.title }}</AppTag>
          <span>{{ item.description }}</span>
        </div>
      </div>
    </template>
  </AppCarousel>
</template>

<style scoped>
.slide { position: relative; }
.slide img { width: 100%; height: 300px; object-fit: cover; }
.meta { position: absolute; left: 16px; bottom: 16px; display: flex; gap: 8px; align-items: center; color: #fff; }
</style>
