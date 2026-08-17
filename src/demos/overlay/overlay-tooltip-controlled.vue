<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTooltip } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
</script>

<template>
  <div class="row">
    <AppTooltip v-model="show" text="受控提示内容" trigger="click">
      <AppButton size="small" @click="show = !show">{{ show ? "隐藏" : "显示" }}提示</AppButton>
    </AppTooltip>
  </div>
</template>

<style scoped>
.row { padding: 20px 0; }
</style>
