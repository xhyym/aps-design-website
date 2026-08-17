<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
</script>

<template>
  <div>
    <AppButton @click="show = true">打开浮层</AppButton>
    <AppOverlay v-model="show">
      <div class="panel">
        <h4>浮层面板</h4>
        <p>自定义内容展示区域</p>
        <AppButton size="small" @click="show = false">关闭</AppButton>
      </div>
    </AppOverlay>
  </div>
</template>

<style scoped>
.panel { background: var(--aps-bg); border-radius: 8px; padding: 20px; text-align: center; }
</style>
