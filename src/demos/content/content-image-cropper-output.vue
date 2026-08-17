<script setup lang="ts">
import { ref } from "vue";
import { AppImageCropper } from "aps-design-pro";
import "aps-design-pro/style.css";

const src = ref("https://picsum.photos/seed/crop4/800/600");
const onCrop = (result: { dataUrl: string; blob: Blob; width: number; height: number }) => {
  console.log("cropped", result.width, result.height);
};
</script>

<template>
  <AppImageCropper v-model="src" output-type="image/png" :output-quality="0.95" :output-width="800" @crop="onCrop" />
</template>
