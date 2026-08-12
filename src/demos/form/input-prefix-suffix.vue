<script setup lang="ts">
import { ref } from "vue";
import { AppIcon, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
</script>

<template>
  <div class="input-demo-affix">
    <AppInput v-model="keyword" placeholder="搜索课程" aria-label="搜索课程">
      <template #prefix><AppIcon name="search" :size="16" /></template>
      <template #suffix>.course</template>
    </AppInput>
  </div>
</template>

<style scoped>
.input-demo-affix {
  width: min(100%, 360px);
}
</style>
