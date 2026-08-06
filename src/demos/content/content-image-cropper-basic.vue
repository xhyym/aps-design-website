<script setup lang="ts">
import { ref } from "vue";
import { AppImageCropper } from "aps-design-pro";
import "aps-design-pro/style.css";

const image = ref("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80");
</script>

<template><AppImageCropper v-model="image" aspect="1 / 1" @crop="(result) => console.info('头像裁剪完成：', result.width, result.height)" /></template>
