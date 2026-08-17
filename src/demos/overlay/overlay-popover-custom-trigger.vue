<script setup lang="ts">
import { ref } from "vue";
import { AppPopover, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopover v-model="open" label="标签触发器">
    <template #trigger="{ toggle }">
      <AppTag style="cursor: pointer" @click="toggle">点击标签</AppTag>
    </template>
    <template #default>
      <p>任意元素都可作为触发器。</p>
    </template>
  </AppPopover>
</template>
