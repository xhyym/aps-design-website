<script setup lang="ts">
import { ref } from "vue";
import { AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <AppFormField label="访问密钥" for="token" required description="用于接口鉴权" error="密钥格式不正确，应为 32 位字符串">
    <AppInput id="token" v-model="value" invalid placeholder="输入访问密钥" />
  </AppFormField>
</template>
