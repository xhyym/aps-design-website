<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const access = ref(false);
</script>

<template>
  <AppSwitch
    v-model="access"
    inline-prompt
    active-text="公开"
    inactive-text="私有"
    label="课程访问范围"
  />
</template>
