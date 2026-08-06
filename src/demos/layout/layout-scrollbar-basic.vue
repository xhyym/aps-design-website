<script setup lang="ts">
import { ref } from "vue";
import { AppScrollbar, type ScrollPosition } from "aps-design-pro";
import "aps-design-pro/style.css";

const position = ref<ScrollPosition>({ top: 0, left: 0 });
const logs = ["开始同步数据", "下载订单文件", "校验字段格式", "写入处理结果", "同步完成", "等待下一轮任务"];
</script>

<template>
  <div class="demo-shell">
    <AppScrollbar height="126px" @scroll="position = $event">
      <p v-for="log in logs" :key="log">{{ log }}</p>
    </AppScrollbar>
    <span>滚动位置：{{ Math.round(position.top) }}px</span>
  </div>
</template>

<style scoped>
.demo-shell { width: min(100%, 480px); }
.demo-shell p { margin: 0 0 12px; }
.demo-shell span { display: block; margin-top: 10px; color: var(--aps-muted); font-size: 12px; }
</style>
