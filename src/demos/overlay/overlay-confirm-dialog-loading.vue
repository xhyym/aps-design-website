<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfirmDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const submitting = ref(false);

function submitArchive(): void {
  submitting.value = true;
  window.setTimeout(() => {
    submitting.value = false;
    visible.value = false;
  }, 800);
}
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">归档订单</AppButton>
  <AppConfirmDialog v-model="visible" title="归档已完成订单？" description="归档后订单仍可在历史记录中查询。" confirm-text="归档" :is-submitting="submitting" @confirm="submitArchive" />
</template>
