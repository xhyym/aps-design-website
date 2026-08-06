<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContainerAside } from "aps-design-pro";
import "aps-design-pro/style.css";

const collapsed = ref(false);
</script>

<template>
  <div class="demo-shell">
    <AppContainerAside :collapsed="collapsed" bordered class="demo-aside">
      <span>{{ collapsed ? "订" : "订单中心" }}</span>
    </AppContainerAside>
    <AppButton size="small" @click="collapsed = !collapsed">切换侧栏</AppButton>
  </div>
</template>

<style scoped>
.demo-shell { display: flex; min-height: 112px; align-items: center; gap: 20px; }
.demo-aside { min-height: 112px; align-items: center; justify-content: center; }
</style>
