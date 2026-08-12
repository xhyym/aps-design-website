<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const layout = ref("list");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="layout" name="layout" value="list" appearance="button" label="列表" />
    <AppRadio v-model="layout" name="layout" value="grid" appearance="button" label="网格" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: flex; gap: 10px; }
</style>
