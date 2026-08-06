<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMessageBox } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">提交审核</AppButton>
  <AppMessageBox v-model="visible" title="提交课程审核" message="提交后课程将进入审核队列，编辑入口会暂时锁定。" @confirm="visible = false" />
</template>
