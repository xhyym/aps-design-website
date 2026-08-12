<script setup lang="ts">
import { ref } from "vue";
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeView = ref("list");
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton
      icon="grid"
      label="卡片视图"
      variant="secondary"
      :active="activeView === 'grid'"
      @click="activeView = 'grid'"
    />
    <AppIconButton
      icon="menu"
      label="列表视图"
      variant="secondary"
      :active="activeView === 'list'"
      @click="activeView = 'list'"
    />
    <AppIconButton icon="refresh" label="刷新" variant="ghost" />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
