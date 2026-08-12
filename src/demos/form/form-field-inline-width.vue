<script setup lang="ts">
import { ref } from "vue";
import { AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <AppFormField label="课程名称" for="name" label-position="inline" :label-width="'120px'" :label-gap="'16px'">
    <AppInput id="name" v-model="value" placeholder="输入课程名称" />
  </AppFormField>
</template>
