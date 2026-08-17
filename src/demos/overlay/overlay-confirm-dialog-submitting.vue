<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfirmDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const submitting = ref(false);
const onConfirm = () => {
  submitting.value = true;
  setTimeout(() => {
    submitting.value = false;
    open.value = false;
  }, 1500);
};
</script>

<template>
  <div>
    <AppButton @click="open = true">发起请求</AppButton>
    <AppConfirmDialog v-model="open" title="提交数据" description="数据将提交到远程服务器" confirm-text="提交" :is-submitting="submitting" @confirm="onConfirm" />
  </div>
</template>
