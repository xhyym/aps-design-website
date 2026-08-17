<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMessageBox } from "aps-design-pro";
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
    <AppButton @click="open = true">确认支付</AppButton>
    <AppMessageBox v-model="open" mode="confirm" title="确认支付" message="本次支付金额为 ¥ 199.00" confirm-text="支付" :is-submitting="submitting" @confirm="onConfirm" />
  </div>
</template>
