<script setup lang="ts">
import { AppContainerFooter } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerFooter>
    <div class="ops">
      <span>共 12 条记录</span>
      <button>上一页</button>
      <button>下一页</button>
    </div>
  </AppContainerFooter>
</template>

<style scoped>
.ops { display: flex; gap: 12px; align-items: center; justify-content: space-between; }
</style>
