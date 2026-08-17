<script setup lang="ts">
import { ref } from "vue";
import { AppCheckTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const a = ref(true);
const b = ref(true);
</script>

<template>
  <div class="row">
    <AppCheckTag v-model="a" label="小尺寸" size="small" />
    <AppCheckTag v-model="b" label="默认尺寸" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; }
</style>
