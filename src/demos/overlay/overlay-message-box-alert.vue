<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMessageBox } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">弹出提示</AppButton>
    <AppMessageBox v-model="open" mode="alert" title="操作完成" message="数据已成功保存" />
  </div>
</template>
