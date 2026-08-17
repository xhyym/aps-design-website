<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(["info"]);
const items = [{ key: "info", title: "运行状态" }];
</script>

<template>
  <AppCollapse v-model="open" :items="items">
    <template #item-info>
      <div class="status">
        <AppTag tone="green">运行中</AppTag>
        <span>CPU 占用 12%，内存 2.1G / 8G</span>
      </div>
    </template>
  </AppCollapse>
</template>

<style scoped>
.status { display: flex; gap: 12px; align-items: center; }
</style>
