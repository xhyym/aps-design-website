<script setup lang="ts">
import { ref } from "vue";
import { AppMention } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("");
const options = [
  { key: "lin", label: "林晨", value: "林晨", description: "产品设计" },
];
</script>

<template>
  <div class="demo-field">
    <AppMention v-model="content" :options="options" :rows="6" placeholder="多行评论，使用 @ 提及成员" aria-label="多行提及" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 520px); }
</style>
