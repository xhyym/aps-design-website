<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref(true);
const defaultSize = ref(true);
const large = ref(true);
</script>

<template>
  <div class="switch-demo-sizes">
    <AppSwitch v-model="small" size="small" label="小尺寸" />
    <AppSwitch v-model="defaultSize" size="default" label="默认尺寸" />
    <AppSwitch v-model="large" size="large" label="大尺寸" />
  </div>
</template>
