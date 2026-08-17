<script setup lang="ts">
import { ref } from "vue";
import { AppImageCropper } from "aps-design-pro";
import "aps-design-pro/style.css";

const src = ref("https://picsum.photos/seed/crop2/800/600");
</script>

<template>
  <AppImageCropper v-model="src" disabled />
</template>
