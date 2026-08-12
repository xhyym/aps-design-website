<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>([]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" :max-length="6" placeholder="单个标签最多 6 个字符" aria-label="限制标签长度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
