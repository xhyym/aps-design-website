<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("13700000000");
</script>

<template>
  <AppFormField label="手机号" for="phone" required>
    <template #extra>
      <AppButton size="small" variant="text">获取验证码</AppButton>
    </template>
    <AppInput id="phone" v-model="value" placeholder="输入手机号" />
  </AppFormField>
</template>
