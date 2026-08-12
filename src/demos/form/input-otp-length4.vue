<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const code = ref("");
</script>

<template>
  <div class="demo-field">
    <AppInputOTP v-model="code" :length="4" aria-label="四位验证码" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
