<script setup lang="ts">
import { ref } from "vue";
import { AppDragVerify } from "aps-design-pro";
import "aps-design-pro/style.css";

const done = ref(false);
const onSuccess = () => {
  console.log("verify passed");
};
</script>

<template>
  <AppDragVerify v-model="done" @success="onSuccess" />
</template>
