<script setup lang="ts">
import { AppContainerAside, AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerAside collapsed>
    <div class="nav">
      <AppLogo compact />
      <ul>
        <li>首页</li>
        <li>订单</li>
        <li>设置</li>
      </ul>
    </div>
  </AppContainerAside>
</template>

<style scoped>
.nav ul { list-style: none; margin: 12px 0 0; padding: 0; }
.nav li { padding: 8px 12px; font-size: 13px; color: var(--aps-muted); }
</style>
