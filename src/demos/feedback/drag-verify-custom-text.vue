<script setup lang="ts">
import { ref } from "vue";
import { AppDragVerify } from "aps-design-pro";
import "aps-design-pro/style.css";

const done = ref(false);
</script>

<template>
  <AppDragVerify v-model="done" text="向右滑动以提交" success-text="提交成功" />
</template>
