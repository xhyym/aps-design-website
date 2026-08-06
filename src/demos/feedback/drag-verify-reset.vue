<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDragVerify } from "aps-design-pro";
import "aps-design-pro/style.css";

const verified = ref(true);
</script>

<template>
  <AppDragVerify v-model="verified" text="拖动滑块确认删除" success-text="已确认删除" />
  <AppButton variant="text" size="small" @click="verified = false">重新验证</AppButton>
</template>
