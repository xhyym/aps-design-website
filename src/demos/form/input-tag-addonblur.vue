<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>([]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" add-on-blur placeholder="输入后失焦也会创建标签" aria-label="失焦创建标签" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
