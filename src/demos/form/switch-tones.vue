<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const blue = ref(true);
const green = ref(true);
const orange = ref(true);
const red = ref(true);
</script>

<template>
  <div class="switch-demo-tones">
    <AppSwitch v-model="blue" tone="blue" label="蓝色" />
    <AppSwitch v-model="green" tone="green" label="绿色" />
    <AppSwitch v-model="orange" tone="orange" label="橙色" />
    <AppSwitch v-model="red" tone="red" label="红色" />
  </div>
</template>
