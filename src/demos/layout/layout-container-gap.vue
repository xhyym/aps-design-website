<script setup lang="ts">
import { AppContainer, AppContainerHeader, AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainer direction="vertical" gap="small" bordered>
    <AppContainerHeader><strong>头部</strong></AppContainerHeader>
    <AppContainerMain><p>主体内容</p></AppContainerMain>
  </AppContainer>
</template>
