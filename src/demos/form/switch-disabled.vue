<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const enabled = ref(true);
const disabledOff = ref(false);
</script>

<template>
  <div class="switch-demo-disabled">
    <AppSwitch v-model="enabled" disabled label="已开启（禁用）" />
    <AppSwitch v-model="disabledOff" disabled label="已关闭（禁用）" />
  </div>
</template>
