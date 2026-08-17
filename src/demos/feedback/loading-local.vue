<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppLoading } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(true);
</script>

<template>
  <div>
    <AppButton size="small" @click="loading = !loading">{{ loading ? "隐藏" : "显示" }}遮罩</AppButton>
    <div class="box">
      <AppLoading :loading="loading" text="正在处理…">
        <p>被遮罩的内容区域</p>
        <p>模拟业务数据展示</p>
      </AppLoading>
    </div>
  </div>
</template>

<style scoped>
.box { height: 180px; border: 1px solid var(--aps-border); border-radius: 8px; margin-top: 10px; padding: 16px; position: relative; }
</style>
