<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDragVerify } from "aps-design-pro";
import "aps-design-pro/style.css";

const done = ref(true);
const reset = () => {
  done.value = false;
};
</script>

<template>
  <div>
    <AppDragVerify v-model="done" />
    <div class="bar">
      <AppButton size="small" @click="reset">重置验证</AppButton>
    </div>
  </div>
</template>

<style scoped>
.bar { margin-top: 10px; }
</style>
