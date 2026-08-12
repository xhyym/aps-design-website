<script setup lang="ts">
import { ref } from "vue";
import { AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <AppFormField label="课程封面" for="cover" required description="支持 JPG/PNG，大小不超过 2MB">
    <AppInput id="cover" v-model="value" placeholder="上传或填写封面地址" />
  </AppFormField>
</template>
