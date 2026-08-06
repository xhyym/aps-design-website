<script setup lang="ts">
import { AppContainer, AppContainerFooter, AppContainerHeader, AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainer bordered class="demo-container">
    <AppContainerHeader bordered>项目概览</AppContainerHeader>
    <AppContainerMain>在同一容器中组织头部、内容与底部区域。</AppContainerMain>
    <AppContainerFooter bordered>已自动保存</AppContainerFooter>
  </AppContainer>
</template>

<style scoped>
.demo-container { min-height: 210px; }
</style>
