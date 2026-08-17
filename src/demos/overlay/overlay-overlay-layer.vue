<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
</script>

<template>
  <div>
    <AppButton @click="show = true">显示遮罩</AppButton>
    <AppOverlay v-model="show" layer="drawer">
      <p>抽屉层级遮罩内容</p>
    </AppOverlay>
  </div>
</template>
