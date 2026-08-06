<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const isRefreshing = ref(false);
let refreshTimerId: number | undefined;

/** 用短计时模拟请求，展示 loading 时自动禁用的防重复提交行为。 */
function refreshData(): void {
  if (isRefreshing.value) return;
  isRefreshing.value = true;
  console.info("开始刷新当前页面数据，图标按钮已进入加载状态");
  refreshTimerId = window.setTimeout(() => {
    isRefreshing.value = false;
    console.info("当前页面数据刷新演示已完成");
  }, 1100);
}

onBeforeUnmount(() => window.clearTimeout(refreshTimerId));
</script>

<template>
  <AppIconButton
    icon="refresh"
    label="刷新数据"
    :loading="isRefreshing"
    circle
    @click="refreshData"
  />
</template>
