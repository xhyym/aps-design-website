<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const saving = ref(true);
</script>

<template>
  <AppSwitch v-model="saving" loading label="保存中（外部加载态）" />
</template>
