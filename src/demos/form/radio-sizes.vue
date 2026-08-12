<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const mode = ref("live");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="mode" name="mode" value="live" size="small" label="直播" />
    <AppRadio v-model="mode" name="mode" value="recorded" size="default" label="录播" />
    <AppRadio v-model="mode" name="mode" value="mixed" size="large" label="混合" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; }
</style>
