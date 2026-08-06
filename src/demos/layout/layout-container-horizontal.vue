<script setup lang="ts">
import { AppContainer, AppContainerAside, AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainer direction="horizontal" bordered class="demo-container">
    <AppContainerAside bordered width="narrow">筛选条件</AppContainerAside>
    <AppContainerMain>右侧内容区会占用剩余空间。</AppContainerMain>
  </AppContainer>
</template>

<style scoped>
.demo-container { min-height: 170px; }
</style>
