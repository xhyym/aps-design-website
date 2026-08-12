<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const agree = ref(false);
</script>

<template>
  <AppCheckbox v-model="agree">
    我已阅读并同意<strong>服务协议</strong>与<strong>隐私政策</strong>
  </AppCheckbox>
</template>
