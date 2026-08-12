<script setup lang="ts">
import { ref } from "vue";
import { AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const email = ref("");
const tel = ref("");
const url = ref("");
</script>

<template>
  <div class="input-demo-types">
    <AppInput v-model="email" type="email" placeholder="邮箱" aria-label="邮箱" />
    <AppInput v-model="tel" type="tel" placeholder="手机号" aria-label="手机号" />
    <AppInput v-model="url" type="url" placeholder="链接" aria-label="链接" />
  </div>
</template>

<style scoped>
.input-demo-types {
  display: grid;
  gap: 12px;
  width: min(100%, 360px);
}
</style>
