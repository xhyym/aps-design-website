<script setup lang="ts">
import { AppContainer, AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="box">
    <AppContainer fill bordered>
      <AppContainerMain><p>容器高度填满父级。</p></AppContainerMain>
    </AppContainer>
  </div>
</template>

<style scoped>
.box { height: 200px; }
</style>
