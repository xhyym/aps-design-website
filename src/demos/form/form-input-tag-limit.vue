<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>([]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" :max="3" :max-length="12" add-on-blur placeholder="最多添加 3 个专题" aria-label="专题标签" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
