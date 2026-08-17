<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFireworksEffect } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
</script>

<template>
  <div>
    <AppButton @click="show = !show">{{ show ? "关闭" : "庆祝一下" }}</AppButton>
    <div class="stage">
      <AppFireworksEffect v-if="show" :show="true" />
    </div>
  </div>
</template>

<style scoped>
.stage { height: 200px; border-radius: 8px; background: linear-gradient(180deg, #101a3a, #1b2a5e); margin-top: 10px; }
</style>
