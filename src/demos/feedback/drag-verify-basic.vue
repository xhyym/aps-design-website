<script setup lang="ts">
import { ref } from "vue";
import { AppDragVerify } from "aps-design-pro";
import "aps-design-pro/style.css";

const verified = ref(false);
</script>

<template>
  <AppDragVerify v-model="verified" @success="console.info('滑动验证已完成')" />
</template>
