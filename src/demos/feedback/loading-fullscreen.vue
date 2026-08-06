<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppLoading } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);

function submitForm(): void {
  loading.value = true;
  window.setTimeout(() => { loading.value = false; }, 900);
}
</script>

<template>
  <AppButton @click="submitForm">提交并显示全屏加载</AppButton>
  <AppLoading :loading="loading" fullscreen text="正在保存课程设置" />
</template>
