<script setup lang="ts">
import { ref } from "vue";
import { AppImageCropper } from "aps-design-pro";
import "aps-design-pro/style.css";

const image = ref("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80");
</script>

<template><AppImageCropper v-model="image" aspect="16 / 7" output-type="image/webp" :output-width="1600" :allow-rotate="false" /></template>
